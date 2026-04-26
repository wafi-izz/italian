/* ═══════════════════════════════════════════════════════════
   chat.js — Floating AI assistant available on every page.
   Reads the current page content for context.
   Requires env.js to be loaded first (provides CLAUDE_API_KEY +
   requireClaudeKey() / promptForClaudeKey() helpers).
   ═══════════════════════════════════════════════════════════ */

(function () {
  // ── Inject CSS ──────────────────────────────────────────
  var style = document.createElement("style");
  style.textContent = [
    /* Floating button */
    ".chat-fab { position:fixed; bottom:24px; right:24px; width:52px; height:52px;" +
    "  border-radius:50%; background:#1e88e5; color:#fff; border:none; cursor:pointer;" +
    "  font-size:24px; box-shadow:0 4px 14px rgba(0,0,0,.25); z-index:9999;" +
    "  display:flex; align-items:center; justify-content:center; transition:transform .15s; }",
    ".chat-fab:hover { transform:scale(1.1); }",

    /* Panel */
    ".chat-panel { position:fixed; bottom:88px; right:24px; width:370px; max-height:480px;" +
    "  background:#fff; border-radius:14px; box-shadow:0 8px 30px rgba(0,0,0,.18);" +
    "  z-index:9999; display:none; flex-direction:column; overflow:hidden;" +
    "  font-family:'Segoe UI',system-ui,-apple-system,sans-serif; }",
    ".chat-panel.open { display:flex; }",

    /* Header */
    ".chat-head { padding:12px 16px; background:#1e88e5; color:#fff; font-weight:600;" +
    "  font-size:.9em; display:flex; justify-content:space-between; align-items:center; }",
    ".chat-close { background:none; border:none; color:#fff; font-size:18px; cursor:pointer; padding:0 4px; }",
    ".chat-key { background:none; border:none; color:#fff; font-size:14px; cursor:pointer; padding:0 6px; opacity:.85; }",
    ".chat-key:hover { opacity:1; }",

    /* Messages area */
    ".chat-msgs { flex:1; overflow-y:auto; padding:12px 14px; font-size:.88em; line-height:1.55;" +
    "  max-height:320px; }",
    ".chat-msg { margin-bottom:10px; }",
    ".chat-msg.user { text-align:right; }",
    ".chat-msg .bubble { display:inline-block; max-width:85%; padding:8px 12px; border-radius:10px;" +
    "  white-space:pre-wrap; word-wrap:break-word; text-align:left; }",
    ".chat-msg.user .bubble { background:#e3f2fd; color:#1a1a1a; }",
    ".chat-msg.ai .bubble { background:#f5f5f5; color:#1a1a1a; }",

    /* Input area */
    ".chat-input { display:flex; border-top:1px solid #e8e8e8; }",
    ".chat-input textarea { flex:1; border:none; padding:10px 12px; font-size:.88em; resize:none;" +
    "  font-family:inherit; height:44px; outline:none; }",
    ".chat-input button { background:#1e88e5; color:#fff; border:none; padding:0 14px;" +
    "  font-weight:600; cursor:pointer; font-size:.85em; }",
    ".chat-input button:disabled { opacity:.5; }",

    /* Selection toolbar */
    ".sel-bar { position:absolute; display:none; z-index:10000; font-family:'Segoe UI',system-ui,sans-serif;" +
    "  background:#1e88e5; border-radius:8px; box-shadow:0 3px 10px rgba(0,0,0,.2);" +
    "  overflow:hidden; white-space:nowrap; }",
    ".sel-bar::after { content:''; position:absolute; top:100%; left:50%; margin-left:-5px;" +
    "  border:5px solid transparent; border-top-color:#1e88e5; }",
    ".sel-btn { background:none; border:none; color:#fff; padding:6px 12px; font-size:.82em;" +
    "  font-weight:600; cursor:pointer; font-family:inherit; }",
    ".sel-btn:hover { background:rgba(255,255,255,.15); }",
    ".sel-btn + .sel-btn { border-left:1px solid rgba(255,255,255,.25); }",

    /* Inline translation result */
    ".trans-tip { position:absolute; z-index:10001; background:#222; color:#fff; padding:8px 14px;" +
    "  border-radius:8px; font-size:.84em; line-height:1.5; max-width:350px; word-wrap:break-word;" +
    "  box-shadow:0 4px 14px rgba(0,0,0,.3); font-family:'Segoe UI',system-ui,sans-serif; display:none; }",
    ".trans-tip::after { content:''; position:absolute; top:100%; left:50%; margin-left:-5px;" +
    "  border:5px solid transparent; border-top-color:#222; }",
    ".trans-tip.loading { color:#aaa; font-style:italic; }",
  ].join("\n");
  document.head.appendChild(style);

  // ── Build HTML ──────────────────────────────────────────
  // Floating button
  var fab = document.createElement("button");
  fab.className = "chat-fab";
  fab.innerHTML = "&#x1F4AC;";
  fab.title = "Ask AI about this page";
  document.body.appendChild(fab);

  // Panel
  var panel = document.createElement("div");
  panel.className = "chat-panel";
  panel.innerHTML =
    '<div class="chat-head"><span>AI Tutor</span>' +
    '<span><button class="chat-key" title="Set API key">&#x1F511;</button>' +
    '<button class="chat-close">&times;</button></span></div>' +
    '<div class="chat-msgs" id="chat-msgs"></div>' +
    '<div class="chat-input"><textarea id="chat-q" placeholder="Ask about this page... (Ctrl+Enter)"></textarea>' +
    '<button id="chat-send">Send</button></div>';
  document.body.appendChild(panel);

  // ── Elements ────────────────────────────────────────────
  var msgs = panel.querySelector("#chat-msgs");
  var input = panel.querySelector("#chat-q");
  var sendBtn = panel.querySelector("#chat-send");
  var closeBtn = panel.querySelector(".chat-close");
  var keyBtn = panel.querySelector(".chat-key");

  // ── Toggle ──────────────────────────────────────────────
  fab.addEventListener("click", function () {
    panel.classList.toggle("open");
    if (panel.classList.contains("open")) {
      if (!window.CLAUDE_API_KEY && typeof window.promptForClaudeKey === "function") {
        window.promptForClaudeKey();
      }
      input.focus();
    }
  });
  closeBtn.addEventListener("click", function () {
    panel.classList.remove("open");
  });
  keyBtn.addEventListener("click", function () {
    if (typeof window.promptForClaudeKey === "function") window.promptForClaudeKey();
  });

  // ── Conversation history ────────────────────────────────
  var history = [];

  function addBubble(role, text) {
    var div = document.createElement("div");
    div.className = "chat-msg " + (role === "user" ? "user" : "ai");
    div.innerHTML = '<div class="bubble">' + escHtml(text) + '</div>';
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function escHtml(s) {
    return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  }

  // ── Get page context ────────────────────────────────────
  function getPageContext() {
    // Grab visible text from the main content, trimmed
    var app = document.getElementById("app");
    var source = app || document.body;
    var text = source.innerText || source.textContent || "";
    // Limit to ~3000 chars to save tokens
    if (text.length > 3000) text = text.substring(0, 3000) + "\n...";
    return text;
  }

  // ── Send message ────────────────────────────────────────
  async function send() {
    var q = input.value.trim();
    if (!q) return;
    if (typeof window.requireClaudeKey === "function" && !window.requireClaudeKey()) return;
    var key = window.CLAUDE_API_KEY || "";
    if (!key) return;

    addBubble("user", q);
    history.push({ role: "user", content: q });
    input.value = "";
    sendBtn.disabled = true;

    // Build system prompt with page context
    var pageCtx = getPageContext();
    var sys = "You are a helpful Italian language tutor embedded in a study page. " +
      "The student is currently viewing this content:\n\n---\n" + pageCtx + "\n---\n\n" +
      "Answer their questions about this content or Italian in general. " +
      "Keep answers concise. Give examples in Italian with translations. " +
      "Use plain text only. No markdown, no ** or * formatting, no bullet points, no headers.";

    try {
      var res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1024,
          system: sys,
          messages: history
        })
      });

      var data = await res.json();
      if (data.error) {
        addBubble("ai", "Error: " + (data.error.message || JSON.stringify(data.error)));
      } else {
        var reply = data.content[0].text;
        addBubble("ai", reply);
        history.push({ role: "assistant", content: reply });
      }
    } catch (e) {
      addBubble("ai", "Error: " + e.message);
    }

    sendBtn.disabled = false;
    input.focus();
  }

  sendBtn.addEventListener("click", send);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); send(); }
  });

  // ── Selection toolbar: Translate | Ask AI ───────────────
  var selBar = document.createElement("div");
  selBar.className = "sel-bar";
  selBar.innerHTML = '<button class="sel-btn" id="sel-speak">&#x1F50A; Play</button>' +
                     '<button class="sel-btn" id="sel-translate">Translate</button>' +
                     '<button class="sel-btn" id="sel-ask">Ask AI</button>';
  document.body.appendChild(selBar);

  var transTip = document.createElement("div");
  transTip.className = "trans-tip";
  document.body.appendChild(transTip);

  var selectedText = "";
  var selRect = null;

  function hideSelBar() { selBar.style.display = "none"; }
  function hideTransTip() { transTip.style.display = "none"; transTip.classList.remove("loading"); }

  document.addEventListener("mouseup", function (e) {
    if (panel.contains(e.target) || selBar.contains(e.target) || transTip.contains(e.target)) return;

    hideTransTip();
    var sel = window.getSelection();
    var text = sel ? sel.toString().trim() : "";

    if (text.length >= 2 && text.length <= 500) {
      selectedText = text;
      var range = sel.getRangeAt(0);
      var rect = range.getBoundingClientRect();
      selRect = rect;
      selBar.style.left = (rect.left + rect.width / 2 - selBar.offsetWidth / 2 + window.scrollX) + "px";
      selBar.style.top = (rect.top - 38 + window.scrollY) + "px";
      selBar.style.display = "block";
      // Recenter after rendering (offsetWidth now accurate)
      selBar.style.left = (rect.left + rect.width / 2 - selBar.offsetWidth / 2 + window.scrollX) + "px";
    } else {
      hideSelBar();
      selectedText = "";
    }
  });

  document.addEventListener("mousedown", function (e) {
    if (!selBar.contains(e.target) && !transTip.contains(e.target)) {
      hideSelBar();
      hideTransTip();
    }
  });

  // ── Speak button: text-to-speech (keeps toolbar open for replay) ──
  selBar.querySelector("#sel-speak").addEventListener("click", function () {
    if (!selectedText) return;
    window.speechSynthesis.cancel();
    var utter = new SpeechSynthesisUtterance(selectedText);
    utter.lang = "it-IT";
    utter.rate = 0.9;
    window.speechSynthesis.speak(utter);
  });

  // ── Translate button: inline result ────────────────────
  selBar.querySelector("#sel-translate").addEventListener("click", async function () {
    hideSelBar();
    if (!selectedText) return;

    if (typeof window.requireClaudeKey === "function" && !window.requireClaudeKey()) return;
    var key = window.CLAUDE_API_KEY || "";
    if (!key) return;

    // Show loading state inline
    transTip.textContent = "Translating...";
    transTip.classList.add("loading");
    transTip.style.display = "block";
    if (selRect) {
      transTip.style.left = (selRect.left + selRect.width / 2 - 100 + window.scrollX) + "px";
      transTip.style.top = (selRect.top - 50 + window.scrollY) + "px";
    }

    try {
      var res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 200,
          system: "Translate the given text. If Italian, translate to English. If English, translate to Italian. " +
            "Return ONLY the translation, nothing else. No quotes, no explanation, no labels.",
          messages: [{ role: "user", content: selectedText }]
        })
      });

      var data = await res.json();
      if (data.error) {
        transTip.textContent = "Error: " + (data.error.message || "API error");
      } else {
        transTip.textContent = data.content[0].text;
      }
      transTip.classList.remove("loading");
      // Reposition after content changes size
      if (selRect) {
        transTip.style.left = (selRect.left + selRect.width / 2 - transTip.offsetWidth / 2 + window.scrollX) + "px";
        transTip.style.top = (selRect.top - transTip.offsetHeight - 10 + window.scrollY) + "px";
      }
    } catch (e) {
      transTip.textContent = "Error: " + e.message;
      transTip.classList.remove("loading");
    }
  });

  // ── Ask AI button: full chat panel ─────────────────────
  selBar.querySelector("#sel-ask").addEventListener("click", async function () {
    hideSelBar();
    hideTransTip();
    if (!selectedText) return;

    if (typeof window.requireClaudeKey === "function" && !window.requireClaudeKey()) return;
    var key = window.CLAUDE_API_KEY || "";
    if (!key) return;

    panel.classList.add("open");
    var question = 'Translate & explain: "' + selectedText + '"';
    addBubble("user", question);
    history.push({ role: "user", content: question });

    sendBtn.disabled = true;

    try {
      var res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 512,
          system: "You are an Italian language tutor. The student highlighted text on their study page. " +
            "Translate it to English (if Italian) or Italian (if English), then give a brief grammar/usage note. " +
            "Keep it short — 2-4 sentences max. Use plain text only, no markdown or ** formatting.",
          messages: [{ role: "user", content: 'Translate & explain: "' + selectedText + '"' }]
        })
      });

      var data = await res.json();
      if (data.error) {
        addBubble("ai", "Error: " + (data.error.message || JSON.stringify(data.error)));
      } else {
        var reply = data.content[0].text;
        addBubble("ai", reply);
        history.push({ role: "assistant", content: reply });
      }
    } catch (e) {
      addBubble("ai", "Error: " + e.message);
    }

    sendBtn.disabled = false;
    selectedText = "";
  });
})();
