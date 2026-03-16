/* ═══════════════════════════════════════════════════════════
   chat.js — Floating AI assistant available on every page.
   Reads the current page content for context.
   Requires env.js to be loaded first (provides CLAUDE_API_KEY).
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

    /* Selection tooltip */
    ".sel-tip { position:absolute; background:#1e88e5; color:#fff; padding:5px 12px;" +
    "  border-radius:6px; font-size:.82em; font-weight:600; cursor:pointer; z-index:10000;" +
    "  box-shadow:0 3px 10px rgba(0,0,0,.2); white-space:nowrap; display:none;" +
    "  font-family:'Segoe UI',system-ui,sans-serif; }",
    ".sel-tip:hover { background:#1565c0; }",
    ".sel-tip::after { content:''; position:absolute; top:100%; left:50%; margin-left:-5px;" +
    "  border:5px solid transparent; border-top-color:#1e88e5; }",
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
    '<div class="chat-head"><span>AI Tutor</span><button class="chat-close">&times;</button></div>' +
    '<div class="chat-msgs" id="chat-msgs"></div>' +
    '<div class="chat-input"><textarea id="chat-q" placeholder="Ask about this page... (Ctrl+Enter)"></textarea>' +
    '<button id="chat-send">Send</button></div>';
  document.body.appendChild(panel);

  // ── Elements ────────────────────────────────────────────
  var msgs = panel.querySelector("#chat-msgs");
  var input = panel.querySelector("#chat-q");
  var sendBtn = panel.querySelector("#chat-send");
  var closeBtn = panel.querySelector(".chat-close");

  // ── Toggle ──────────────────────────────────────────────
  fab.addEventListener("click", function () {
    panel.classList.toggle("open");
    if (panel.classList.contains("open")) input.focus();
  });
  closeBtn.addEventListener("click", function () {
    panel.classList.remove("open");
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
    var key = (typeof CLAUDE_API_KEY !== "undefined") ? CLAUDE_API_KEY : "";
    var q = input.value.trim();
    if (!key) { alert("Missing env.js — API key not found"); return; }
    if (!q) return;

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

  // ── Selection tooltip: "Ask AI" ─────────────────────────
  var tip = document.createElement("div");
  tip.className = "sel-tip";
  tip.textContent = "Ask AI";
  document.body.appendChild(tip);

  var selectedText = "";

  document.addEventListener("mouseup", function (e) {
    // Ignore clicks inside the chat panel or tooltip itself
    if (panel.contains(e.target) || tip.contains(e.target)) return;

    var sel = window.getSelection();
    var text = sel ? sel.toString().trim() : "";

    if (text.length >= 2 && text.length <= 500) {
      selectedText = text;
      var range = sel.getRangeAt(0);
      var rect = range.getBoundingClientRect();
      tip.style.left = (rect.left + rect.width / 2 - 35 + window.scrollX) + "px";
      tip.style.top = (rect.top - 36 + window.scrollY) + "px";
      tip.style.display = "block";
    } else {
      tip.style.display = "none";
      selectedText = "";
    }
  });

  // Hide tooltip on scroll or click elsewhere
  document.addEventListener("mousedown", function (e) {
    if (!tip.contains(e.target)) {
      tip.style.display = "none";
    }
  });

  // When tooltip clicked: send selection to AI for quick explanation
  tip.addEventListener("click", async function () {
    tip.style.display = "none";
    if (!selectedText) return;

    var key = (typeof CLAUDE_API_KEY !== "undefined") ? CLAUDE_API_KEY : "";
    if (!key) { alert("Missing env.js — API key not found"); return; }

    // Open panel and show the question
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
