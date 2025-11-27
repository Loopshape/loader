#!/bin/env python3

import os
import time
import json
import random
import threading
import hashlib
import math
from flask import Flask, request, jsonify, send_from_directory
from flask_sock import Sock
import requests

# --- Basic Setup ---
app = Flask(__name__)
sock = Sock(app)
OLLAMA_API_URL = 'http://localhost:11434'
DB_FILE = 'database.json'

# --- JSON Database (CRUD) ---
db_lock = threading.Lock()

def read_db():
    """Reads the entire database from the JSON file."""
    with db_lock:
        if not os.path.exists(DB_FILE):
            return {}
        with open(DB_FILE, 'r') as f:
            return json.load(f)

def write_db(data):
    """Writes the entire database to the JSON file."""
    with db_lock:
        with open(DB_FILE, 'w') as f:
            json.dump(data, f, indent=4)

# --- Serve Frontend ---
@app.route('/')
def index():
    return send_from_directory('public', 'index.html')

@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory('public', path)

# --- New Validation and Hashing Endpoints ---
@app.route('/api/validation/genesis', methods=['POST'])
def set_genesis_hash():
    """Sets the initial 'genesis hash' from a given text."""
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({"error": "Text for genesis hash is required."}), 400
    
    genesis_text = data['text']
    genesis_hash = hashlib.sha256(genesis_text.encode()).hexdigest()
    
    db = read_db()
    db['genesis_hash'] = genesis_hash
    write_db(db)
    
    return jsonify({"message": "Genesis hash set successfully.", "genesis_hash": genesis_hash})

@app.route('/api/entropy', methods=['GET'])
def get_entropy():
    """Returns the current calculated offset-entropy."""
    db = read_db()
    return jsonify(db.get('offset_entropy_index', {}))

@app.route('/api/importance', methods=['GET'])
def get_importance_hashes():
    """Returns the modulated and sorted list of importance hashes."""
    db = read_db()
    hashes = db.get('importance_hashes', [])
    
    # "Modulated" sorting (for demonstration, we sort alphabetically)
    # A real modulation could involve numeric conversion and scaling.
    sorted_hashes = sorted(hashes)
    
    return jsonify(sorted_hashes)

# --- Enhanced Ollama API Bridge ---
@app.route('/api/ollama/generate', methods=['POST'])
def generate_ollama_response():
    """
    Handles generation, including:
    - "Origin-to-genesis-rehashing" security validation
    - Querying Ollama
    - Generating a "mindmap" from the response chunks
    - Storing validation artifacts
    """
    data = request.get_json()
    if not data or 'model' not in data or 'prompt' not in data:
        return jsonify({"error": "Model and prompt are required."}), 400

    prompt = data['prompt']
    db = read_db()

    # 1. "Origin-to-Genesis-Rehashing" Security Validation
    prompt_hash = hashlib.sha256(prompt.encode()).hexdigest()
    genesis_hash = db.get('genesis_hash')
    is_valid = (prompt_hash == genesis_hash) if genesis_hash else None
    
    validation_record = {
        'prompt': prompt,
        'prompt_hash': prompt_hash,
        'genesis_hash': genesis_hash,
        'is_valid': is_valid,
        'timestamp': time.time()
    }
    db['prompt_validations'].append(validation_record)
    
    # Add to importance hashes
    if prompt_hash not in db.get('importance_hashes', []):
        db.setdefault('importance_hashes', []).append(prompt_hash)

    # 2. Query Ollama
    try:
        ollama_response = requests.post(
            f"{OLLAMA_API_URL}/api/generate",
            json={"model": data['model'], "prompt": prompt, "stream": False},
            timeout=60
        )
        ollama_response.raise_for_status()
        ollama_data = ollama_response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error bridging to Ollama API: {e}")
        write_db(db) # Save validation attempt even if Ollama fails
        return jsonify({"error": "Failed to get a response from Ollama API."}), 500

    # 3. "Chunk Tokenize" and "Mindmap" Generation
    response_text = ollama_data.get('response', '')
    # Simple chunking by sentence
    chunks = [p.strip() for p in response_text.split('.') if p.strip()]
    
    mindmap = {
        "id": "root",
        "topic": prompt[:30] + '...',
        "children": [
            {"id": f"chunk-{i}", "topic": chunk} for i, chunk in enumerate(chunks)
        ]
    }

    write_db(db)
    
    return jsonify({
        "original_response": ollama_data,
        "security_validation": validation_record,
        "mindmap": mindmap
    })

# --- WebSocket "Particle Streamline" ---
@sock.route('/websocket')
def websocket_stream(ws):
    """Handles streaming 'octal wave' data and calculates entropy."""
    print("Client connected to WebSocket Particle Streamline.")
    
    # Store recent values for entropy calculation
    recent_values = []
    
    def stream_data():
        while True:
            raw_val = random.random() * 256
            gamma, beta = 1.2, -10.0 # Modulation factors
            modulated_val = max(0, min((raw_val * gamma) + beta, 255))
            
            # --- Entropy Calculation ---
            recent_values.append(int(modulated_val))
            if len(recent_values) > 100: # Sliding window of 100 values
                recent_values.pop(0)
                
                # Calculate frequency of each value
                freqs = {}
                for item in recent_values:
                    freqs[item] = freqs.get(item, 0) + 1
                
                # Calculate Shannon entropy
                entropy = 0.0
                for freq in freqs.values():
                    prob = freq / len(recent_values)
                    entropy -= prob * math.log2(prob)
                
                # Update the database
                db = read_db()
                db['offset_entropy_index']['current_entropy'] = entropy
                write_db(db)

            particle = {
                'type': 'octal-wave-particle',
                'timestamp': time.time(),
                'octalValue': oct(int(modulated_val))[2:].zfill(3),
                'amplitude': random.random(),
            }
            
            try:
                ws.send(json.dumps(particle))
            except Exception:
                break
            
            time.sleep(0.1)

    client_thread = threading.Thread(target=stream_data)
    client_thread.daemon = True
    client_thread.start()

    while True:
        try:
            message = ws.receive(timeout=1)
            if message:
                print(f"Received message from client: {message}")
        except Exception:
            break
    
    print("Client disconnected.")

# --- Main Entry Point ---
if __name__ == '__main__':
    app.run(port=3000, host='0.0.0.0', debug=False)
