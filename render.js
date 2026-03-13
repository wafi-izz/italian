/* ═══════════════════════════════════════════════════════════
   render.js — Shared renderer for verb conjugation pages
   Reads the global `verbData` object and renders into #app
   ═══════════════════════════════════════════════════════════ */

function renderVerb(data) {
  const app = document.getElementById('app');
  if (!app || !data) return;

  let h = '';

  // Navigation is handled by nav.js (loaded in each page's HTML)

  // Header
  h += `<h1 class="verb-title">🇮🇹 ${data.verb.toUpperCase()} — ${data.meaning}</h1>`;
  h += `<p class="header-sub">${data.info.subtitle}`;
  if (data.info.stem) h += ` &nbsp;|&nbsp; Stem: <b>${data.info.stem}</b>`;
  if (data.info.auxiliary) h += ` &nbsp;|&nbsp; Auxiliary: <b>${data.info.auxiliary}</b>`;
  if (data.info.gerundio) h += ` &nbsp;|&nbsp; Gerundio: <b>${data.info.gerundio}</b>`;
  if (data.info.participioPassato) h += ` &nbsp;|&nbsp; Participio passato: <b>${data.info.participioPassato}</b>`;
  if (data.info.extra) h += `<br>${data.info.extra}`;
  h += '</p>';

  // Moods
  for (const mood of data.moods) {
    h += `<div class="mood-section mood-${mood.id}">`;
    h += `<div class="mood-title ${mood.color}">${mood.emoji} ${mood.name} (${mood.nameEn})</div>`;
    h += `<div class="mood-desc">${mood.description}</div>`;

    for (const tense of mood.tenses) {
      h += renderTense(tense);
    }

    h += '</div>';
  }

  // Quick Reference
  if (data.quickRef && data.quickRef.length) {
    h += '<div class="mood-section mood-other" style="margin-top:28px;">';
    h += '<div class="mood-title" style="color:#e65100;">🗺️ Quick Reference Map</div>';
    h += '<div class="mood-desc">All tenses at a glance — what each one means in plain English.</div>';
    h += '<div class="scroll"><table class="ref-map"><thead><tr>';
    h += `<th>Tense</th><th>Key Idea</th><th>Example with ${data.verb}</th>`;
    h += '</tr></thead><tbody>';
    for (const r of data.quickRef) {
      h += `<tr><td class="tense-col">${r.tense}</td><td class="idea-col">${r.idea}</td><td>${r.example}</td></tr>`;
    }
    h += '</tbody></table></div></div>';
  }

  // Footer
  h += '<div class="footer-note">';
  h += 'This is a lot to absorb! Don\'t worry — you won\'t need all of these at once.<br>';
  h += 'For now, the most important to master are <b>Presente</b>, <b>Passato Prossimo</b>, <b>Imperfetto</b>, <b>Futuro Semplice</b>, and <b>Congiuntivo Presente</b>.<br>';
  h += 'The rest will come naturally over time. 💪';
  h += '</div>';

  app.innerHTML = h;
}

function renderTense(t) {
  let h = '<div class="tense-block">';

  if (t.name) {
    h += `<div class="tense-name">${t.name}</div>`;
  }
  if (t.what) {
    h += `<div class="tense-what">${t.what}</div>`;
  }

  // Conjugation table
  if (t.conjugations && t.conjugations.length) {
    h += '<div class="scroll"><table class="conj-table">';
    // Header row
    const headers = t.headers || ['Pronoun', 'Conjugation'];
    h += '<tr>';
    for (let i = 0; i < headers.length; i++) {
      h += i === 0 ? `<th class="pc">${headers[i]}</th>` : `<th>${headers[i]}</th>`;
    }
    h += '</tr>';
    // Data rows
    for (const row of t.conjugations) {
      h += '<tr>';
      for (let i = 0; i < row.length; i++) {
        h += i === 0 ? `<td class="pc">${row[i]}</td>` : `<td>${row[i]}</td>`;
      }
      h += '</tr>';
    }
    h += '</table></div>';
  }

  // Notes before examples
  if (t.notes) {
    for (const note of t.notes) {
      h += `<div class="note">${note}</div>`;
    }
  }

  // Use-for hint
  if (t.useFor) {
    h += `<div class="ex-use">${t.useFor}</div>`;
  }

  // Examples
  if (t.examples && t.examples.length) {
    h += '<div class="examples">';
    for (const ex of t.examples) {
      h += '<div class="ex-pair">';
      h += `<div class="ex-it">`;
      if (ex.pronoun) h += `<span class="ex-pronoun">${ex.pronoun}</span> `;
      // Replace {verb text} with highlighted verb span
      h += ex.it.replace(/\{([^}]+)\}/g, '<span class="ex-verb">$1</span>');
      h += '</div>';
      h += `<div class="ex-en">${ex.en}</div>`;
      h += '</div>';
    }
    h += '</div>';
  }

  h += '</div>';
  return h;
}

// Auto-run on load
document.addEventListener('DOMContentLoaded', function() {
  if (typeof verbData !== 'undefined') {
    renderVerb(verbData);
  }
});
