/* ═══════════════════════════════════════════════════════════
   nav.js — Unified navigation for all pages
   4-section layout: Verbs | Foundations | Sentences | Fluency
   Each phase shows a sub-nav with its ordered topics.
   ═══════════════════════════════════════════════════════════ */

(function () {
  // ── Main sections ────────────────────────────────────────
  var sections = [
    { id: "verbs",       label: "Verbs",       root: "index.html" },
    { id: "foundations", label: "Foundations", root: "foundations/index.html" },
    { id: "sentences",  label: "Sentences",   root: "sentences/index.html" },
    { id: "fluency",    label: "Fluency",     root: "fluency/index.html" },
  ];

  // ── Phase topics (ordered by recommended study sequence) ─
  var phases = {
    foundations: [
      { folder: "articoli",   label: "Articles" },
      { folder: "sostantivi", label: "Nouns" },
      { folder: "aggettivi",  label: "Adjectives" },
      { folder: "pronomi",    label: "Pronouns" },
    ],
    sentences: [
      { folder: "negazione",    label: "Negation" },
      { folder: "domande",      label: "Questions" },
      { folder: "avverbi",      label: "Adverbs" },
      { folder: "congiunzioni", label: "Conjunctions" },
    ],
    fluency: [
      { folder: "espressioni", label: "Expressions" },
      { folder: "numeri",      label: "Numbers" },
      { folder: "si",          label: "Si" },
    ],
  };

  // Hub folder names (the phase landing pages)
  var hubFolders = ["foundations", "sentences", "fluency"];

  // Build folder → phase lookup
  var folderToPhase = {};
  for (var phaseId in phases) {
    for (var i = 0; i < phases[phaseId].length; i++) {
      folderToPhase[phases[phaseId][i].folder] = phaseId;
    }
  }

  // ── Detect depth ─────────────────────────────────────────
  var scripts = document.querySelectorAll('script[src*="nav.js"]');
  var prefix = "";
  for (var s = 0; s < scripts.length; s++) {
    if (scripts[s].src.indexOf("../nav.js") !== -1 || scripts[s].getAttribute("src") === "../nav.js") {
      prefix = "../";
      break;
    }
  }

  // ── Detect current folder and active section ─────────────
  var path = window.location.pathname.replace(/\\/g, "/");
  var activeId = "verbs";
  var currentFolder = "";

  var folderMatch = path.match(/\/([^/]+)\/(?:index\.html)?$/);
  if (folderMatch) {
    currentFolder = folderMatch[1];
  }

  if (hubFolders.indexOf(currentFolder) !== -1) {
    activeId = currentFolder;
  } else if (folderToPhase[currentFolder]) {
    activeId = folderToPhase[currentFolder];
  } else {
    activeId = "verbs";
  }

  var isVerbPage = prefix === "../" && activeId === "verbs";
  var isTopicPage = prefix === "../" && folderToPhase[currentFolder] !== undefined;
  var isHubPage = prefix === "../" && hubFolders.indexOf(currentFolder) !== -1;

  // ── Build HTML ───────────────────────────────────────────
  var h = '<div class="nav-wrapper">';

  // Main nav
  h += '<nav class="site-nav">';
  if (isVerbPage) {
    h += '<a class="nav-back" href="' + prefix + 'index.html">\u2190 All verbs</a>';
  }
  h += '<div class="nav-links">';
  for (var j = 0; j < sections.length; j++) {
    var sec = sections[j];
    var cls = sec.id === activeId ? "nav-link active" : "nav-link";
    h += '<a class="' + cls + '" href="' + prefix + sec.root + '">' + sec.label + '</a>';
  }
  h += '</div></nav>';

  // Sub-nav for phase hub pages and topic pages
  var phaseTopics = phases[activeId];
  if (phaseTopics && (isTopicPage || isHubPage)) {
    h += '<nav class="sub-nav">';
    for (var k = 0; k < phaseTopics.length; k++) {
      var t = phaseTopics[k];
      var isActive = t.folder === currentFolder;
      var linkCls = isActive ? "sub-link active" : "sub-link";
      var href = prefix + t.folder + "/index.html";
      h += '<a class="' + linkCls + '" href="' + href + '">';
      h += '<span class="sub-step">' + (k + 1) + '</span> ' + t.label;
      h += '</a>';
      if (k < phaseTopics.length - 1) h += '<span class="sub-arrow">\u203A</span>';
    }
    h += '</nav>';
  }

  h += '</div>';

  // ── Insert at top of body ────────────────────────────────
  var wrapper = document.createElement("div");
  wrapper.innerHTML = h;
  var navWrapper = wrapper.firstChild;
  document.body.insertBefore(navWrapper, document.body.firstChild);
})();
