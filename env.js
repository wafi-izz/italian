/* env.js — API key bootstrap for client-side Claude calls.
   Safe to commit: holds no secret. Reads the key from localStorage so each
   user/browser supplies their own at runtime (the site is hosted on GitHub
   Pages, so there is no server to inject the key).

   Set the key via the chat panel "Key" button, or from the browser console:
     setClaudeKey("sk-ant-...")   // save
     setClaudeKey("")             // clear
*/
(function () {
  var STORAGE_KEY = "claude_api_key";

  window.CLAUDE_API_KEY = localStorage.getItem(STORAGE_KEY) || "";

  window.setClaudeKey = function (key) {
    if (!key) {
      localStorage.removeItem(STORAGE_KEY);
      window.CLAUDE_API_KEY = "";
      return "";
    }
    var trimmed = String(key).trim();
    localStorage.setItem(STORAGE_KEY, trimmed);
    window.CLAUDE_API_KEY = trimmed;
    return trimmed;
  };

  window.promptForClaudeKey = function () {
    var current = window.CLAUDE_API_KEY ? " (a key is already saved — leave blank to clear)" : "";
    var entered = window.prompt(
      "Enter your Anthropic API key" + current + ".\n\n" +
      "Get one at console.anthropic.com. It is stored only in this browser's localStorage."
    );
    if (entered === null) return false;
    window.setClaudeKey(entered);
    return !!window.CLAUDE_API_KEY;
  };

  window.requireClaudeKey = function () {
    if (window.CLAUDE_API_KEY) return true;
    return window.promptForClaudeKey();
  };
})();
