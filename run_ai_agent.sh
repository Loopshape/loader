#!/usr/bin/env bash
# ~/bin/ai - Enhanced All-in-One AI Agent Shell (Android/Termux + Desktop)
# Features: Live verbose thinking, async brainstorming, synthesis, memory, git sync, Termux paths

set -euo pipefail
IFS=$'\n\t'

# -------------------- CONFIG --------------------
AI_HOME="${AI_HOME:-$HOME/.ai_agent}"
PROJECTS_DIR="${PROJECTS_DIR:-$HOME/ai_projects}"
GIT_DIR="$HOME/.ai_builder"
GIT_REPO="git@github.com:Loopshape/BITBOY-AI-DEX.git"
SSH_KEY="$HOME/.ssh/loopshape_rsa"

DEFAULT_MESSENGER_MODEL="gemma3:1b"
DEFAULT_COMBINATOR_MODEL="deepseek-r1:1.5b"
DEFAULT_TRADER_MODEL="2244-1"

OLLAMA_BIN="$(command -v ollama || true)"
MEMORY_DB="$AI_HOME/memory.db"
CONFIG_DB="$AI_HOME/config.db"

# Termux detection - FIX: Use parameter expansion to prevent unbound variable error
IS_TERMUX=false
[[ -n "${PREFIX:-}" && -d "${PREFIX:-}" && "$(uname -o 2>/dev/null)" == "Android" ]] && IS_TERMUX=true

# Colors
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; BLUE='\033[0;34m'; PURPLE='\033[0;35m'; CYAN='\033[0;36m'; NC='\033[0m'

# -------------------- LOGGING --------------------
log() { printf "${BLUE}[%s]${NC} %s\n" "$(date '+%T')" "$*"; }
log_success() { log "${GREEN}$*${NC}"; }
log_warn() { log "${YELLOW}WARN: $*${NC}"; }
log_error() { log "${RED}ERROR: $*${NC}"; exit 1; }
log_info() { log "${CYAN}$*${NC}"; }
log_phase() { echo -e "\n${PURPLE}▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓${NC}"; log "${PURPLE}$*${NC}"; echo -e "${PURPLE}▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓${NC}"; }

# -------------------- SETUP --------------------
mkdir -p "$AI_HOME" "$PROJECTS_DIR" "$GIT_DIR"

sqlite_escape() { echo "$1" | sed "s/'/''/g"; }
init_db() {
    sqlite3 "$MEMORY_DB" "CREATE TABLE IF NOT EXISTS memories (id INTEGER PRIMARY KEY AUTOINCREMENT, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP, prompt TEXT, response TEXT, task_id TEXT);" 2>/dev/null || true
    sqlite3 "$CONFIG_DB" "CREATE TABLE IF NOT EXISTS config (key TEXT PRIMARY KEY, value TEXT);" 2>/dev/null || true
}

set_config() { sqlite3 "$CONFIG_DB" "INSERT OR REPLACE INTO config (key, value) VALUES ('$(sqlite_escape "$1")','$(sqlite_escape "$2")');" ; log_success "Config set: $1=$2"; }
get_config() { sqlite3 "$CONFIG_DB" "SELECT value FROM config WHERE key='$(sqlite_escape "$1")';" 2>/dev/null; }
load_config_values() {
    # Load from config DB, then allow environment variables to override
    MESSENGER_MODEL="$(get_config messenger_model || echo "$DEFAULT_MESSENGER_MODEL")"
    COMBINATOR_MODEL="$(get_config combinator_model || echo "$DEFAULT_COMBINATOR_MODEL")"
    TRADER_MODEL="$(get_config trader_model || echo "$DEFAULT_TRADER_MODEL")"
    
    # Environment variables take precedence for model and parameters
    MESSENGER_MODEL="${AI_MODEL:-$MESSENGER_MODEL}"
    COMBINATOR_MODEL="${AI_MODEL:-$COMBINATOR_MODEL}"
    TRADER_MODEL="${AI_MODEL:-$TRADER_MODEL}"
    AI_TEMPERATURE="${AI_TEMPERATURE:-$(get_config temperature || echo "0.7")}"
    AI_TOP_P="${AI_TOP_P:-$(get_config top_p || echo "0.9")}"
    AI_SEED="${AI_SEED:-$(get_config seed || echo "")}"
}

add_to_memory() { sqlite3 "$MEMORY_DB" "INSERT INTO memories (prompt,response,task_id) VALUES ('$(sqlite_escape "$1")','$(sqlite_escape "$2")','$3');" 2>/dev/null; }
search_memory() { sqlite3 -header -column "$MEMORY_DB" "SELECT timestamp,prompt,response FROM memories WHERE prompt LIKE '%$(sqlite_escape "$1")%' ORDER BY timestamp DESC LIMIT 5;" 2>/dev/null; }
clear_memory() {
    if confirm_action "Clear all AI memories?"; then
        sqlite3 "$MEMORY_DB" "DELETE FROM memories;"
        log_success "Memory cleared."
    else
        log_info "Memory clear canceled."
    fi
}

gen_task_id() { echo -n "$1$(date +%s%N)$RANDOM${AI_SEED:-}" | sha256sum | cut -c1-16; }

confirm_action() { echo -e "${YELLOW}CONFIRM: $1${NC}"; read -p "Type 'yes' to confirm: " -r r; [[ "$r" == "yes" ]]; }

# -------------------- TOOLS --------------------
tool_read_file() {
    local path="$1"
    if $IS_TERMUX; then
        [[ -f "$path" ]] && cat "$path" || echo "ERROR: File not found on Termux: $path"
    else
        [[ -f "$path" ]] && cat "$path" || echo "ERROR: File not found: $path"
    fi
}

tool_list_directory() {
    local path="${1:-.}"
    [[ -d "$path" ]] && tree -L 2 "$path" || echo "ERROR: Directory not found: $path"
}

tool_web_search() {
    if confirm_action "Search web for: $1"; then
        curl -sL "https://html.duckduckgo.com/html/?q=$(jq -nr --arg q "$1" '$q|@uri')" | lynx -dump -stdin -nolist
    else
        echo "ACTION CANCELED"
        return 1
    fi
}

tool_write_file() {
    if confirm_action "Write to file: $1"; then
        mkdir -p "$(dirname "$1")"
        echo -e "$2" > "$1"
        echo "SUCCESS: File written."
    else
        echo "ACTION CANCELED"
        return 1
    fi
}

# tool_process_url now primarily used internally to fetch content
tool_process_url() {
    local url="$1"
    echo "Fetching content from URL: $url" >&2 # Log to stderr
    local content=$(curl -s --max-time 10 "$url" 2>/dev/null) # Added timeout and silenced curl errors
    if [[ -z "$content" ]]; then
        log_warn "Failed to fetch content from $url or content was empty/timeout."
        return 1
    fi
    echo "$content"
}

list_tools() {
    echo -e "${CYAN}Available Tools:${NC}"
    echo "  --file <path> [AI_instruction]  - Read local file, optionally feed to AI"
    echo "  --web <URL>                     - Fetch and display content of a URL"
    echo "  --web-prompt <URL> <AI_instruction> - Fetch URL content and feed to AI"
    echo "  --web-search \"query\"            - Perform a web search and display results (requires confirmation)"
    echo "  --dom-input <JSON_data> \"AI_instruction\" - Process DOM/JS interaction data with AI" # New Tool
    echo "  (Internal: tool_read_file, tool_list_directory, tool_web_search, tool_process_url, tool_write_file)"
    # Add other tools as they are created
}

# -------------------- AI WORKER --------------------
ensure_ollama_server() { pgrep -f "ollama serve" >/dev/null || (log "Ollama server starting..."; nohup "$OLLAMA_BIN" serve >/dev/null 2>&1 & sleep 3); }

run_worker_raw() {
    local model="$1" system_prompt="$2" conversation_history="$3"
    ensure_ollama_server
    local response_buffer=""
    local fifo=$(mktemp -u)
    mkfifo "$fifo"

    ( "$OLLAMA_BIN" run --verbose "$model" --temperature "$AI_TEMPERATURE" --top_p "$AI_TOP_P" ${AI_SEED:+--seed "$AI_SEED"} "$system_prompt"$'\n'"$conversation_history" 2>&1 > "$fifo" ) &
    local pid=$!

    while IFS= read -r line <"$fifo"; do
        [[ -z "$line" ]] && continue
        if [[ "$line" =~ ^\>\>\> ]]; then echo -e "${YELLOW}$line${NC}"
        elif [[ "$line" =~ ^\{.*\}$ ]]; then
            token=$(echo "$line" | jq -r '.response? // empty' 2>/dev/null)
            done_status=$(echo "$line" | jq -r '.done? // false' 2>/dev/null)
            [[ -n "$token" ]] && { printf '%s' "$token"; response_buffer+="$token"; }
            [[ "$done_status" == "true" ]] && printf '\n'
        else
            echo -e "${BLUE}$line${NC}"
        fi
    done
    wait "$pid" 2>/dev/null || true
    rm -f "$fifo"
    echo "$response_buffer"
}

# -------------------- TRIUMPIRATE AGENT --------------------
run_triumvirate_agent() {
    local user_prompt="$*"
    log_phase "PHASE 0: SETUP & PROJECTION"
    local task_id=$(gen_task_id "$user_prompt")
    local task_dir="$PROJECTS_DIR/$task_id"
    mkdir -p "$task_dir"
    log_success "Task ID: $task_id"
    log_info "Workspace: $task_dir"

    local relevant_memories=$(search_memory "$user_prompt")

    log_phase "PHASE 1: ASYNC BRAINSTORMING"
    local messenger_prompt="MESSENGER analyzing: $user_prompt"
    local combinator_prompt="COMBINATOR brainstorming: $user_prompt"
    local messenger_log="$task_dir/messenger.log"
    local combinator_log="$task_dir/combinator.log"

    run_worker_raw "$MESSENSER_MODEL" "$messenger_prompt" "$relevant_memories" > "$messenger_log" 2>&1 &
    local m_pid=$!
    run_worker_raw "$COMBINATOR_MODEL" "$combinator_prompt" "$relevant_memories" > "$combinator_log" 2>&1 &
    local c_pid=$!

    spinner='/-\|'; printf "${CYAN}Brainstorming...${NC}"; i=0
    while kill -0 "$m_pid" 2>/dev/null || kill -0 "$c_pid" 2>/dev/null; do
        printf "\b%s" "${spinner:i++%${#spinner}:1}"; sleep 0.1
    done
    printf "\b Done.\n"

    messenger_response=$(<"$messenger_log")
    combinator_response=$(<"$combinator_log")

    log_phase "PHASE 2: SYNTHESIS & EXECUTION"
    local trader_prompt="TRADER merging Messenger & Combinator.
---MESSENGER ANALYSIS---
$messenger_response
---COMBINATOR BRAINSTORM---
$combinator_response
---USER PROMPT & FINAL ANSWER---
$user_prompt" # Include original user prompt in Trader's context

    trader_response=$(run_worker_raw "$TRADER_MODEL" "$trader_prompt" "$relevant_memories")

    log_phase "PHASE 3: FINALIZATION"
    # The original script checked for '[FINAL_ANSWER]', but LLMs don't always produce this tag.
    # It's better to always add to memory, or make this configurable. For now, always add.
    log_success "AI response generated. Adding to memory."
    add_to_memory "$user_prompt" "$trader_response" "$task_id"

    echo "$trader_response"
}

# -------------------- GIT SYNC --------------------
git_pull_push() {
    log_phase "Git Synchronization"
    if [[ ! -d "$GIT_DIR/.git" ]]; then
        log_info "Cloning $GIT_REPO into $GIT_DIR"
        GIT_SSH_COMMAND="ssh -i $SSH_KEY -o StrictHostKeyChecking=no" git clone "$GIT_REPO" "$GIT_DIR" || log_error "Failed to clone repository."
    fi
    cd "$GIT_DIR" || log_error "Failed to change directory to $GIT_DIR"
    log_info "Pulling latest changes from main branch..."
    GIT_SSH_COMMAND="ssh -i $SSH_KEY -o StrictHostKeyChecking=no" git pull origin main || log_warn "Failed to pull latest changes (may be offline or no updates)."
    
    log_info "Committing local changes..."
    git add . && git commit -m "Auto commit $(date '+%F %T')" || log_info "No changes to commit."
    
    log_info "Pushing changes to main branch..."
    GIT_SSH_COMMAND="ssh -i $SSH_KEY -o StrictHostKeyChecking=no" git push origin main || log_warn "Failed to push changes (may be offline or no new commits)."
    log_success "Git sync complete."
}

# -------------------- CLI HANDLERS --------------------

# Configuration handler
handle_config() {
    case "${1:-}" in # Use parameter expansion for empty check
        view)
            log_info "Current Configuration:"
            sqlite3 -header -column "$CONFIG_DB" "SELECT key, value FROM config;"
            echo "---"
            log_info "Effective AI Agent Models:"
            echo "  Messenger: $MESSENGER_MODEL"
            echo "  Combinator: $COMBINATOR_MODEL"
            echo "  Trader: $TRADER_MODEL"
            echo "  Temperature: $AI_TEMPERATURE"
            echo "  Top_p: $AI_TOP_P"
            echo "  Seed: ${AI_SEED:-'Not set'}"
            ;;
        get)
            if [[ -z "${2:-}" ]]; then log_error "Usage: ai --config get <key>"; fi
            local value="$(get_config "$2")"
            if [[ -n "$value" ]]; then echo "$value"; else log_warn "Config key '$2' not found."; fi
            ;;
        set)
            if [[ -z "${2:-}" || -z "${3:-}" ]]; then log_error "Usage: ai --config set <key> <value>"; fi
            set_config "$2" "$3"
            ;;
        *)
            log_error "Unknown config command: ${1:-}. Use 'view', 'get', 'set'."
            ;;
    esac
}

# Hashing handler - STUB (Functionality to be implemented)
handle_hash() {
    log_warn "Hashing features are not yet fully implemented. Showing basic hashing."
    case "${1:-}" in
        file)
            if [[ -z "${2:-}" ]]; then log_error "Usage: ai --hash file <path>"; fi
            if [[ -f "$2" ]]; then
                sha256sum "$2" | cut -c1-64
            else
                log_error "File not found: $2"
            fi
            ;;
        prompt)
            if [[ -z "${2:-}" ]]; then log_error "Usage: ai --hash prompt \"text\""; fi
            echo "$2" | sha256sum | cut -c1-64
            ;;
        repo)
            local repo_path="${2:-$GIT_DIR}"
            if [[ -d "${repo_path}/.git" ]]; then
                (cd "$repo_path" && git rev-parse HEAD 2>/dev/null) || log_warn "Could not get repo hash for $repo_path"
            else
                log_warn "Not a git repository: $repo_path"
            fi
            ;;
        index)
            log_info "Showing hash index (TODO: Implement hash index display)"
            ;;
        *)
            log_error "Unknown hash command: ${1:-}. Use 'file', 'prompt', 'repo', 'index'."
            ;;
    esac
}

# Memory handler
handle_memory() {
    case "${1:-}" in
        search)
            if [[ -z "${2:-}" ]]; then log_error "Usage: ai --memory search \"query\""; fi
            search_memory "$2"
            ;;
        clear)
            clear_memory
            ;;
        *)
            log_error "Unknown memory command: ${1:-}. Use 'search', 'clear'."
            ;;
    esac
}

# API handler - STUB (Functionality to be implemented)
handle_api() {
    log_warn "API features are not yet implemented."
    case "${1:-}" in
        start)
            log_info "Starting REST API server (TODO: Implement API server)"
            ;;
        stop)
            log_info "Stopping API server (TODO: Implement API server shutdown)"
            ;;
        status)
            log_info "Checking API status (TODO: Implement API status check)"
            ;;
        *)
            log_error "Unknown API command: ${1:-}. Use 'start', 'stop', 'status'."
            ;;
    esac
}

# -------------------- HELP --------------------
show_help() {
    echo -e "\033[0;32mEnhanced AI Agent - Single File Implementation\033[0m"
    echo ""
    echo -e "\033[0;36mBasic Usage:\033[0m"
    echo "  ai \"your prompt here\"          - Run AI agent with prompt"
    echo "  ai --help                      - Show this help"
    echo ""
    echo -e "\033[0;36mConfiguration:\033[0m"
    echo "  ai --config view               - View all configuration"
    echo "  ai --config get <key>          - Get configuration value"
    echo "  ai --config set <key> <value>  - Set configuration"
    echo ""
    echo -e "\033[0;36mHashing:\033[0m"
    echo "  ai --hash file <path>          - Hash a file (sha256)"
    echo "  ai --hash prompt \"text\"        - Hash a prompt (sha256)"
    echo "  ai --hash repo [path]          - Hash a repository (git HEAD commit hash)"
    echo "  ai --hash index                - Show hash index (TODO)"
    echo ""
    echo -e "\033[0;36mMemory:\033[0m"
    echo "  ai --memory search \"query\"     - Search memory"
    echo "  ai --memory clear              - Clear memory (with confirmation)"
    echo ""
    echo -e "\033[0;36mAPI:\033[0m"
    echo "  ai --api start                 - Start REST API server (TODO)"
    echo "  ai --api stop                  - Stop API server (TODO)"
    echo "  ai --api status                - Check API status (TODO)"
    echo ""
    echo -e "\033[0;36mTools:\033[0m"
    echo "  ai --tools                     - List internal tools"
    echo "  ai --file <path> [AI_instruction] - Read content of a local file, optionally feed to AI"
    echo "  ai --web <URL>                 - Fetch and display content of a URL"
    echo "  ai --web-prompt <URL> \"AI instruction\" - Fetch URL content and feed to AI"
    echo "  ai --web-search \"query\"        - Perform a web search and display results (requires confirmation)"
    echo "  ai --dom-input <JSON_data> \"AI_instruction\" - Process JSON data from a DOM/JS context with AI" # NEW help
    echo ""
    echo -e "\033[0;36mEnvironment Variables:\033[0m"
    echo "  AI_MODEL=\"llama3.1:8b\"         - Set AI model (overrides default/config for all roles)"
    echo "  AI_TEMPERATURE=0.7             - Set temperature (0-1)"
    echo "  AI_TOP_P=0.9                   - Set top_p (0-1)"
    echo "  AI_SEED=                       - Set random seed"
    echo ""
    echo -e "\033[1;33mExamples:\033[0m"
    echo "  ai \"Explain quantum computing\""
    echo "  ai --config set temperature 0.5"
    echo "  ai --hash file ./script.sh"
    echo "  ai --memory search \"python\""
    echo "  ai --api start"
    echo "  ai --web-prompt https://www.example.com \"Summarize this page content for a 5th grader.\""
    echo "  ai --file README.md \"Analyze this project README for potential security issues.\""
    echo "  ai --dom-input '{\"event\": \"click\", \"target\": \"button#submit\"}' \"Interpret this user interaction data.\"" # NEW example
    echo ""
    echo -e "\033[0;36mDeveloper/Admin Commands:${NC}"
    echo "  ai --setup                     - Install necessary system dependencies"
    echo "  ai --git                       - Sync AI builder repository"
}


# -------------------- MAIN --------------------
main() {
    init_db
    load_config_values # Load configs and env vars for global access

    if [[ $# -eq 0 ]]; then
        show_help
        exit 0
    fi

    local arg="$1"
    shift

    case "$arg" in
        --help)
            show_help
            ;;
        --config)
            handle_config "$@"
            ;;
        --hash)
            handle_hash "$@"
            ;;
        --memory)
            handle_memory "$@"
            ;;
        --api)
            handle_api "$@"
            ;;
        --tools)
            list_tools
            ;;
        --setup)
            if $IS_TERMUX; then pkg install -y sqlite jq curl tree lynx; else sudo apt-get update && sudo apt-get install -y sqlite3 jq curl tree lynx; fi
            log_success "Setup complete. Ensure Ollama is installed and running."
            ;;
        --git)
            git_pull_push
            ;;
        --file) # Enhanced: Read file, optionally feed to AI
            local path="$1"
            if [[ -z "${path:-}" ]]; then log_error "Usage: ai --file <path> [AI_instruction]"; fi
            shift # Consume path
            local file_content=$(tool_read_file "$path")
            if [[ "$file_content" == "ERROR: File not found"* ]]; then
                log_error "$file_content"
            fi
            # If there's a subsequent prompt, feed content to AI, otherwise print
            if [[ $# -gt 0 ]]; then
                local user_instruction="$*"
                local full_ai_prompt="Content from file ($path):\n---\n$file_content\n---\n\nUser Instruction: $user_instruction"
                run_triumvirate_agent "$full_ai_prompt"
            else
                echo "$file_content"
            fi
            ;;
        --web) # Re-introduced simple web fetch for display, distinct from --web-prompt
            local url="$1"
            if [[ -z "${url:-}" ]]; then log_error "Usage: ai --web <URL>"; fi
            shift # Consume URL
            local content=$(tool_process_url "$url")
            if [[ $? -eq 0 ]]; then
                echo "$content"
            else
                log_error "Failed to fetch content from $url"
            fi
            ;;
        --web-prompt) # NEW: Rebase URL parsing to AI prompt
            local target_url="$1"
            if [[ -z "${target_url:-}" ]]; then log_error "Usage: ai --web-prompt <URL> \"Your AI instruction here\""; fi
            shift # Consume URL
            local user_instruction="$*"
            if [[ -z "${user_instruction:-}" ]]; then log_error "Usage: ai --web-prompt <URL> \"Your AI instruction here\" - AI instruction missing."; fi

            local url_content=$(tool_process_url "$target_url")
            if [[ $? -ne 0 ]]; then # Check return code of tool_process_url
                log_error "Failed to get content from URL: $target_url. Aborting AI processing."
            fi
            # Combine content with user instruction
            local full_ai_prompt="Content from URL ($target_url):\n---\n$url_content\n---\n\nUser Instruction: $user_instruction"
            run_triumvirate_agent "$full_ai_prompt"
            ;;
        --web-search) # New option from the help for explicit web search
            local search_query="$*"
            if [[ -z "${search_query:-}" ]]; then log_error "Usage: ai --web-search \"query\""; fi
            tool_web_search "$search_query"
            ;;
        --dom-input) # NEW: Handle JSON input from external DOM/JS processing
            local json_data="$1"
            if [[ -z "${json_data:-}" ]]; then log_error "Usage: ai --dom-input '<JSON_string>' \"AI_instruction\""; fi
            shift # Consume JSON data
            local user_instruction="$*"
            if [[ -z "${user_instruction:-}" ]]; then log_error "Usage: ai --dom-input '<JSON_string>' \"AI_instruction\" - AI instruction missing."; fi

            # Validate JSON if jq is available
            if command -v jq >/dev/null; then
                if ! echo "$json_data" | jq -e . >/dev/null 2>&1; then
                    log_error "Invalid JSON data provided to --dom-input."
                fi
            else
                log_warn "jq not found. Skipping JSON validation for --dom-input. Install jq for robust parsing."
            fi
            
            local full_ai_prompt="Processed DOM/JavaScript interaction data (as JSON):\n---\n$json_data\n---\n\nUser Instruction: $user_instruction"
            run_triumvirate_agent "$full_ai_prompt"
            ;;
        -*) # Catch any other unknown flags
            log_error "Unknown option: $arg. Use 'ai --help' for usage."
            ;;
        *) # Default: Treat as AI prompt
            run_triumvirate_agent "$arg $*" # $arg is the first word, $* is the rest
            ;;
    esac
}

trap 'log_warn "Interrupted"; exit 1' INT TERM
[[ "${BASH_SOURCE[0]}" == "${0}" ]] && main "$@"

exit 0

/**
 * @description loads resources (either CSS or JavaScript) from an array of sources,
 * tracking the number of loaded resources and calling a provided callback function
 * when all resources have been loaded.
 * 
 * @param { array } sources - list of files to load, including CSS and JavaScript
 * files, which are processed by the `loadScript()` and `loadCSS()` functions accordingly.
 * 
 * @param { ‘function’. } callback - function that will be executed once all resources
 * have been loaded, indicating that the loading process has finished successfully.
 * 
 * 		- Type: Function
 * 		- Description: A callback function that is executed when all sources have been
 * loaded. It takes no arguments.
 */
