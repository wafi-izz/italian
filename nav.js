/* ═══════════════════════════════════════════════════════════
   nav.js — Unified navigation for all pages
   Include this script on every page. It auto-detects the
   current page and renders a consistent nav bar.
   ═══════════════════════════════════════════════════════════ */

(function () {
  // ── Configuration ──────────────────────────────────────
  // Add new sections here — they'll appear on every page.
  const sections = [
    { id: "verbs",    label: "Verbs",    root: "index.html" },
    { id: "articles", label: "Articles", root: "articoli/index.html" },
  ];

  // ── Detect depth: are we at root or in a subfolder? ────
  // Root pages load nav.js as "nav.js"
  // Subfolder pages load it as "../nav.js"
  const scripts = document.querySelectorAll('script[src*="nav.js"]');
  let prefix = "";
  for (const s of scripts) {
    if (s.src.includes("../nav.js") || s.getAttribute("src") === "../nav.js") {
      prefix = "../";
      break;
    }
  }

  // ── Detect which section is active ─────────────────────
  const path = window.location.pathname.replace(/\\/g, "/");
  let activeId = "";

  if (path.endsWith("/articoli/index.html") || path.endsWith("/articoli/")) {
    activeId = "articles";
  } else {
    // Verb pages are in subfolders like /dire/index.html
    // The root index.html is also "verbs"
    activeId = "verbs";
  }

  // Detect if we're on a specific verb page (subfolder, not root)
  const isVerbPage = prefix === "../" && activeId === "verbs";

  // ── Build HTML ─────────────────────────────────────────
  let h = '<nav class="site-nav">';

  // Back link for verb pages (quick way to return)
  if (isVerbPage) {
    h += `<a class="nav-back" href="${prefix}index.html">← All verbs</a>`;
  }

  // Main nav links
  h += '<div class="nav-links">';
  for (const sec of sections) {
    const cls = sec.id === activeId ? "nav-link active" : "nav-link";
    h += `<a class="${cls}" href="${prefix}${sec.root}">${sec.label}</a>`;
  }
  h += '</div>';

  h += '</nav>';

  // ── Insert at top of body ──────────────────────────────
  const container = document.createElement("div");
  container.innerHTML = h;
  document.body.insertBefore(container.firstChild, document.body.firstChild);
})();
