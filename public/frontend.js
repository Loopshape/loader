document.addEventListener('DOMContentLoaded', () => {
    // --- UI Element References ---
    const canvas = document.getElementById('globe-canvas');
    const ctx = canvas.getContext('2d');
    const promptInput = document.getElementById('prompt-input');
    const modelSelector = document.getElementById('model-selector');
    const submitButton = document.getElementById('submit-prompt');
    const genesisInput = document.getElementById('genesis-input');
    const setGenesisHashButton = document.getElementById('set-genesis-hash');
    const validationStatusDiv = document.getElementById('validation-status');
    const mindmapContainer = document.getElementById('mindmap-container');
    const entropyDisplay = document.getElementById('entropy-display');
    const importanceDisplay = document.getElementById('importance-display');

    // --- Canvas Setup for "Visual Octal Waves" ---
    let particles = [];
    const MAX_PARTICLES = 100;
    canvas.width = 400;
    canvas.height = 300;

    function renderWaves() {
        ctx.fillStyle = 'rgba(49, 18, 34, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.y += p.vy;
            p.x += p.vx;
            if (p.y > canvas.height || p.life-- <= 0) {
                Object.assign(p, createParticle(p.baseOctal));
            }
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 221, 170, ${p.opacity * (p.life / p.maxLife)})`;
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        });
        particles = particles.filter(p => p.life > 0);
        requestAnimationFrame(renderWaves);
    }

    function createParticle(octalValue) {
        const parsedOctal = parseInt(octalValue, 8) || 128;
        return {
            x: Math.random() * canvas.width,
            y: 0,
            vx: (Math.random() - 0.5) * 2,
            vy: 0.5 + Math.random() * (parsedOctal / 255) * 2,
            radius: 1 + (Math.random() * 2),
            opacity: 0.5 + Math.random() * 0.5,
            life: 100 + Math.random() * 100,
            maxLife: 200,
            baseOctal: octalValue
        };
    }

    // --- WebSocket Client ---
    const wsUrl = `ws://${window.location.host}/websocket`;
    const socket = new WebSocket(wsUrl);
    socket.onopen = () => console.log('Connected to WebSocket.');
    socket.onmessage = (event) => {
        const particleData = JSON.parse(event.data);
        if (particleData.type === 'octal-wave-particle' && particles.length < MAX_PARTICLES) {
            particles.push(createParticle(particleData.octalValue));
        }
    };
    socket.onerror = (error) => console.error('WebSocket error:', error);

    // --- "Agent Delegate" API Interaction ---
    async function loadModels() {
        try {
            const response = await fetch('/api/ollama/models');
            const models = await response.json();
            modelSelector.innerHTML = '';
            models.forEach(model => {
                const option = document.createElement('option');
                option.value = model.name;
                option.textContent = model.name;
                modelSelector.appendChild(option);
            });
        } catch (error) {
            console.error('Error loading models:', error);
        }
    }

    setGenesisHashButton.addEventListener('click', async () => {
        const text = genesisInput.value;
        if (!text) {
            alert('Please enter text for the genesis hash.');
            return;
        }
        
        // This is where we tie into app.request.js as requested.
        // We'll use a dummy call to illustrate the concept of it being part of the flow.
        if (window.app && typeof window.app.request === 'function') {
             console.log("Using 'app.request' flow to initiate genesis hash setting.");
             // In a real scenario, app.request might load a specific module for this.
             // For now, we just log and proceed.
        }

        try {
            const response = await fetch('/api/validation/genesis', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text }),
            });
            const data = await response.json();
            alert(`Genesis Hash set to: ${data.genesis_hash}`);
        } catch (error) {
            console.error('Error setting genesis hash:', error);
            alert('Failed to set genesis hash.');
        }
    });

    submitButton.addEventListener('click', async () => {
        const prompt = promptInput.value;
        const model = modelSelector.value;
        if (!prompt || !model) return;

        submitButton.disabled = true;
        validationStatusDiv.textContent = 'Processing...';

        try {
            const response = await fetch('/api/ollama/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ model, prompt }),
            });
            const data = await response.json();

            // Display validation
            const validation = data.security_validation;
            validationStatusDiv.innerHTML = `
                <strong>Validation Status:</strong> ${validation.is_valid === null ? 'N/A (No Genesis)' : (validation.is_valid ? 'VALID' : 'INVALID')}<br>
                <strong>Prompt Hash:</strong> ${validation.prompt_hash}<br>
                <strong>Genesis Hash:</strong> ${validation.genesis_hash || 'Not set'}
            `;
            
            // Render Mindmap
            const mindmap = data.mindmap;
            let mindmapHtml = `<ul><li><strong>${mindmap.topic}</strong><ul>`;
            mindmap.children.forEach(child => {
                mindmapHtml += `<li>${child.topic}</li>`;
            });
            mindmapHtml += '</ul></li></ul>';
            mindmapContainer.innerHTML = mindmapHtml;

            // Update importance list after a successful generation
            updateImportanceList();

        } catch (error) {
            validationStatusDiv.textContent = `Error: ${error.message}`;
            mindmapContainer.innerHTML = '';
        } finally {
            submitButton.disabled = false;
        }
    });
    
    async function updateEntropy() {
        try {
            const response = await fetch('/api/entropy');
            const data = await response.json();
            entropyDisplay.textContent = `Current Entropy: ${data.current_entropy.toFixed(4)}`;
        } catch (error) {
            console.error('Error fetching entropy:', error);
        }
    }
    
    async function updateImportanceList() {
        try {
            const response = await fetch('/api/importance');
            const hashes = await response.json();
            importanceDisplay.innerHTML = hashes.map(h => `<div>${h}</div>`).join('');
        } catch (error) {
            console.error('Error fetching importance list:', error);
        }
    }

    // --- Initialize ---
    loadModels();
    updateImportanceList();
    renderWaves();
    setInterval(updateEntropy, 2000); // Poll for entropy every 2 seconds
});