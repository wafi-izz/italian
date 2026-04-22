/* ═══════════════════════════════════════════════════════════
   dist.js — Verb registry for the index page
   Add new verbs here as you create them.
   ═══════════════════════════════════════════════════════════ */

const verbs = [
  // -ARE
  { name: "stare",   meaning: "to stay / to be / to feel", type: "are", regular: false, path: "stare/index.html" },
  { name: "fare",    meaning: "to do / to make",           type: "are", regular: false, path: "fare/index.html" },
  { name: "andare",  meaning: "to go",                     type: "are", regular: false, path: "andare/index.html" },
  { name: "parlare", meaning: "to speak / to talk",        type: "are", regular: true,  path: "parlare/index.html" },
  { name: "mangiare", meaning: "to eat",                   type: "are", regular: true,  path: "mangiare/index.html" },

  // -ERE
  { name: "essere",  meaning: "to be",                     type: "ere", regular: false, path: "essere/index.html" },
  { name: "avere",   meaning: "to have",                   type: "ere", regular: false, path: "avere/index.html" },
  { name: "dovere",  meaning: "to must / to have to",      type: "ere", regular: false, path: "dovere/index.html" },
  { name: "potere",  meaning: "to be able to / can",       type: "ere", regular: false, path: "potere/index.html" },
  { name: "volere",  meaning: "to want",                   type: "ere", regular: false, path: "volere/index.html" },
  { name: "sapere",  meaning: "to know",                   type: "ere", regular: false, path: "sapere/index.html" },

  // -IRE
  { name: "dormire", meaning: "to sleep",                  type: "ire", regular: true,  path: "dormire/index.html" },
  { name: "dire",    meaning: "to say / to tell",          type: "ire", regular: false, path: "dire/index.html" },
  { name: "venire",  meaning: "to come",                   type: "ire", regular: false, path: "venire/index.html" },
];

const groupConfig = {
  are: { label: '-ARE Verbs',  emoji: '🔴', color: 'are',  desc: 'First conjugation — the largest group. e.g. parlare, mangiare, amare...' },
  ere: { label: '-ERE Verbs',  emoji: '🟢', color: 'ere',  desc: 'Second conjugation — many irregulars. e.g. vendere, leggere, scrivere...' },
  ire: { label: '-IRE Verbs',  emoji: '🔵', color: 'ire',  desc: 'Third conjugation — includes -isc- verbs. e.g. dormire, finire, capire...' },
};

function renderIndex() {
  const app = document.getElementById('app');
  if (!app) return;

  let h = '';

  h += '<h1 class="home-title">🇮🇹 Italian Verb Conjugation</h1>';
  h += '<p class="home-subtitle">Complete conjugation tables with examples — select a verb to study</p>';

  // Group by type
  const groups = {};
  for (const v of verbs) {
    if (!groups[v.type]) groups[v.type] = [];
    groups[v.type].push(v);
  }

  // Render in order: are, ere, ire
  const order = ['are', 'ere', 'ire'];
  for (const type of order) {
    const cfg = groupConfig[type];
    const list = groups[type] || [];

    h += '<div class="verb-group">';
    h += `<div class="group-title ${cfg.color}">${cfg.emoji} ${cfg.label}</div>`;
    h += `<div class="group-desc">${cfg.desc}</div>`;

    if (list.length === 0) {
      h += '<div class="empty-state">No verbs added yet</div>';
    } else {
      h += '<div class="verb-grid">';
      for (const v of list) {
        const tag = v.regular
          ? '<span class="verb-tag regular">Regular</span>'
          : '<span class="verb-tag irregular">Irregular</span>';
        h += `<a class="verb-card" href="${v.path}">`;
        h += `<div class="verb-name">${v.name}</div>`;
        h += `<div class="verb-meaning">${v.meaning}</div>`;
        h += tag;
        h += '</a>';
      }
      h += '</div>';
    }

    h += '</div>';
  }

  // Drill link
  h += '<div style="text-align:center;margin:24px 0 8px">';
  h += '<a href="drill.html" style="display:inline-block;padding:12px 32px;background:#1e88e5;color:#fff;border-radius:10px;text-decoration:none;font-weight:700;font-size:0.95em;box-shadow:0 2px 8px rgba(30,136,229,0.3)">Conjugation Drill</a>';
  h += '<div style="font-size:0.78em;color:#999;margin-top:6px">Type conjugations from memory</div>';
  h += '</div>';

  app.innerHTML = h;
}

document.addEventListener('DOMContentLoaded', renderIndex);
