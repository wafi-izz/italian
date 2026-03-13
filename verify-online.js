#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════════════
//  verify-online.js — Verifies verb conjugations against italian-verbs.com
//
//  Usage:
//    node verify-online.js dire           # verify one verb
//    node verify-online.js dire dormire   # verify specific verbs
//    node verify-online.js                # verify ALL verbs
// ═══════════════════════════════════════════════════════════════════

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const https = require("https");

const ROOT = __dirname;

let totalErrors = 0;
let totalWarnings = 0;
let totalChecked = 0;
let totalMatched = 0;

// ── Helpers ─────────────────────────────────────────────────────

function stripHtml(s) {
  return s.replace(/<[^>]+>/g, "").trim();
}

function error(verb, msg) {
  console.log(`  \x1b[31mERROR\x1b[0m  ${msg}`);
  totalErrors++;
}

function warn(verb, msg) {
  console.log(`  \x1b[33mWARN \x1b[0m  ${msg}`);
  totalWarnings++;
}

function ok(msg) {
  console.log(`  \x1b[32mOK   \x1b[0m  ${msg}`);
}

// ── Load local verb data ────────────────────────────────────────

function loadVerbData(verbDir) {
  const filePath = path.join(verbDir, "data.js");
  if (!fs.existsSync(filePath)) return null;
  const code = fs.readFileSync(filePath, "utf8");
  const execCode = code.replace(/^const verbData\s*=/, "this.verbData =");
  const sandbox = {};
  try { vm.runInNewContext(execCode, sandbox); } catch (e) { return null; }
  return sandbox.verbData || null;
}

// ── Fetch HTML from italian-verbs.com ───────────────────────────

function fetchHtml(verb) {
  const url = `https://www.italian-verbs.com/italian-verbs/conjugation.php?verbo=${encodeURIComponent(verb)}`;
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

// ── Extract all conjugation forms from HTML ─────────────────────
// The site uses: <div class="background-white cpad">io dico</div>
//                <div class="background-stripe cpad">tu dici</div>
// For gerundio/participio: <div ...cpad><b>Presente:</b> dicendo</div>

function extractOnlineForms(html) {
  const forms = new Set();

  // 1. Standard conjugation divs (strip inner HTML tags too)
  //    Match divs with "cpad" class, capture everything inside
  const divRegex = /<div[^>]*cpad[^"]*"[^>]*>(.*?)<\/div>/gi;
  let m;
  while ((m = divRegex.exec(html)) !== null) {
    // Strip any inner HTML tags (<b>, <i>, etc.) and decode entities
    let content = m[1].replace(/<[^>]+>/g, "").trim().toLowerCase();
    content = content.replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    if (!content || content.length < 2 || content === "—") continue;

    // Remove label prefixes like "Presente:", "Passato:"
    content = content.replace(/^(?:presente|passato|semplice|composto)\s*:\s*/i, "").trim();

    forms.add(content);

    // Strip pronoun to get just the verb form
    const stripped = content
      .replace(/^(?:che\s+)?(?:io|tu|lui\/lei|lui|lei|egli|noi|voi|loro|essi|esse|esso)\s+/i, "")
      .trim();
    if (stripped && stripped !== content) {
      forms.add(stripped);
    }

    // For compound forms, also store individual words
    const words = (stripped || content).split(/\s+/);
    for (const w of words) {
      if (w.length > 1) forms.add(w);
    }

    // Handle slash notation: "andati/e" → andati, andate; "detto/a/i/e" → detto, detta, etc.
    if (content.includes("/")) {
      // Base without slashes
      const base = content.replace(/\/[a-z]/g, "");
      forms.add(base);
      // Also strip slashes from the stripped (pronoun-removed) version
      if (stripped) {
        forms.add(stripped.replace(/\/[a-z]/g, ""));
        // Expand variants: "andati/e" → andati, andate
        const slashMatch = stripped.match(/^(.*\w)(\w)((?:\/\w)+)$/);
        if (slashMatch) {
          const pre = slashMatch[1];
          const suffixes = slashMatch[3].split("/").filter(Boolean);
          for (const suf of suffixes) {
            forms.add(pre + suf);
          }
        }
      }
    }
  }

  return forms;
}

// ── Normalize a local form for comparison ───────────────────────

function normalizeLocal(form) {
  let f = stripHtml(form).toLowerCase().trim();
  // Remove exclamation marks from imperativo
  f = f.replace(/!/g, "").trim();
  // Remove agreement notation: andato/a/i/e → andato
  f = f.replace(/\/[a-z]/g, "");
  return f;
}

/** Extract the primary form from parenthesized alternatives: "devo (debbo)" → "devo" */
function primaryForm(form) {
  return form.replace(/\s*\([^)]+\)/g, "").trim();
}

/** Extract alternative forms: "devo (debbo)" → ["devo", "debbo"] */
function allVariants(form) {
  const primary = form.replace(/\s*\([^)]+\)/g, "").trim();
  const alts = [];
  const re = /\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(form)) !== null) {
    alts.push(m[1].trim());
  }
  return [primary, ...alts];
}

// ── Check if a local form matches any online form ───────────────

function formMatches(localForm, onlineForms) {
  const f = normalizeLocal(localForm);
  if (!f || f === "—" || f === "-" || f === "–" || f === "not used") return true; // skip dashes/placeholders

  // Try all variants if parenthesized: "devo (debbo)" → try "devo" then "debbo"
  const variants = allVariants(f);
  for (const variant of variants) {
    if (tryMatch(variant, onlineForms)) return true;
  }
  return false;
}

function tryMatch(f, onlineForms) {
  // Direct match
  if (onlineForms.has(f)) return true;

  // Match each word individually (for compound tenses)
  const words = f.split(/\s+/);
  if (words.length > 1 && words.every(w => onlineForms.has(w))) return true;

  // Just the main verb (last word)
  const mainVerb = words[words.length - 1];
  if (onlineForms.has(mainVerb)) return true;

  // Handle apostrophe/accent variants: di' ↔ dì, va' ↔ va, etc.
  // The site often lists "dì, di'" as one entry
  for (const onlineForm of onlineForms) {
    // Check if online form contains our form as part of a comma-separated list
    if (onlineForm.includes(",")) {
      const parts = onlineForm.split(",").map(s => s.trim());
      if (parts.some(p => p === f || p === mainVerb)) return true;
    }
    // Accent/apostrophe normalization: dì ↔ di', fà ↔ fa', và ↔ va'
    const normalized = f.replace(/'/g, "").replace(/[àèéìòù]/g, c => ({à:"a",è:"e",é:"e",ì:"i",ò:"o",ù:"u"})[c] || c);
    const onlineNorm = onlineForm.replace(/'/g, "").replace(/[àèéìòù]/g, c => ({à:"a",è:"e",é:"e",ì:"i",ò:"o",ù:"u"})[c] || c);
    if (normalized === onlineNorm) return true;
  }

  return false;
}

// ── Verify one verb ─────────────────────────────────────────────

async function verifyVerb(verbDir) {
  const verbName = path.basename(verbDir);
  console.log(`\n\x1b[1m── ${verbName.toUpperCase()} ──\x1b[0m`);

  const data = loadVerbData(verbDir);
  if (!data) {
    error(verbName, "Could not load data.js");
    return;
  }

  let html;
  try {
    html = await fetchHtml(data.verb);
  } catch (e) {
    error(verbName, `Network error: ${e.message}`);
    return;
  }

  if (html.length < 1000) {
    error(verbName, `Verb "${data.verb}" not found on italian-verbs.com`);
    return;
  }

  const onlineForms = extractOnlineForms(html);

  // Check all moods/tenses
  const moodTenseChecks = [
    { mi: 0, label: "Indicativo", tenses: [
      "Presente", "Imperfetto", "Passato Remoto", "Passato Prossimo",
      "Trapassato Prossimo", "Trapassato Remoto", "Futuro Semplice", "Futuro Anteriore"
    ]},
    { mi: 1, label: "Congiuntivo", tenses: ["Presente", "Passato", "Imperfetto", "Trapassato"] },
    { mi: 2, label: "Condizionale", tenses: ["Presente", "Passato"] },
    { mi: 3, label: "Imperativo", tenses: ["Imperativo"] },
  ];

  let verbMatched = 0;
  let verbChecked = 0;

  for (const { mi, label, tenses } of moodTenseChecks) {
    if (!data.moods[mi]) continue;
    for (let ti = 0; ti < tenses.length; ti++) {
      const tense = data.moods[mi].tenses[ti];
      if (!tense || !tense.conjugations) continue;
      const tenseName = `${label} ${tenses[ti]}`;

      for (let i = 0; i < tense.conjugations.length; i++) {
        const row = tense.conjugations[i];
        const localForm = row[1] || "";
        const normalized = normalizeLocal(localForm);
        if (!normalized || normalized === "—" || normalized === "-") continue;

        verbChecked++;
        totalChecked++;

        if (formMatches(localForm, onlineForms)) {
          verbMatched++;
          totalMatched++;
        } else {
          error(verbName, `${tenseName} [${row[0]}]: "${normalized}" not verified`);
        }
      }
    }
  }

  // Non-finite forms
  // Gerundio presente
  if (data.moods[4] && data.moods[4].tenses[0] && data.moods[4].tenses[0].conjugations) {
    const form = data.moods[4].tenses[0].conjugations[0][1];
    verbChecked++; totalChecked++;
    if (formMatches(form, onlineForms)) { verbMatched++; totalMatched++; }
    else error(verbName, `Gerundio presente: "${normalizeLocal(form)}" not verified`);
  }

  // Gerundio passato
  if (data.moods[4] && data.moods[4].tenses[1] && data.moods[4].tenses[1].conjugations) {
    const form = data.moods[4].tenses[1].conjugations[0][1];
    verbChecked++; totalChecked++;
    if (formMatches(form, onlineForms)) { verbMatched++; totalMatched++; }
    else error(verbName, `Gerundio passato: "${normalizeLocal(form)}" not verified`);
  }

  // Participio passato
  if (data.moods[6] && data.moods[6].tenses[0] && data.moods[6].tenses[0].conjugations) {
    const conjs = data.moods[6].tenses[0].conjugations;
    // Presente
    if (conjs[0]) {
      verbChecked++; totalChecked++;
      if (formMatches(conjs[0][1], onlineForms)) { verbMatched++; totalMatched++; }
      else error(verbName, `Participio presente: "${normalizeLocal(conjs[0][1])}" not verified`);
    }
    // Passato
    if (conjs[1]) {
      verbChecked++; totalChecked++;
      if (formMatches(conjs[1][1], onlineForms)) { verbMatched++; totalMatched++; }
      else error(verbName, `Participio passato: "${normalizeLocal(conjs[1][1])}" not verified`);
    }
  }

  // Summary
  if (verbMatched === verbChecked) {
    ok(`${verbMatched}/${verbChecked} forms verified`);
  } else {
    warn(verbName, `${verbMatched}/${verbChecked} forms verified (${verbChecked - verbMatched} unverified)`);
  }
}

// ── Main ────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);

  let verbDirs;
  if (args.length > 0) {
    verbDirs = args.map(v => path.join(ROOT, v));
  } else {
    const skip = new Set(["_template", "node_modules", ".git"]);
    verbDirs = fs.readdirSync(ROOT)
      .filter(f => {
        if (skip.has(f)) return false;
        if (f.startsWith(".") || f.startsWith("_")) return false;
        const full = path.join(ROOT, f);
        return fs.statSync(full).isDirectory() && fs.existsSync(path.join(full, "data.js"));
      })
      .map(f => path.join(ROOT, f));
  }

  console.log(`\x1b[1mVerifying ${verbDirs.length} verb(s) against italian-verbs.com...\x1b[0m`);

  for (const dir of verbDirs) {
    await verifyVerb(dir);
    if (verbDirs.length > 1) await new Promise(r => setTimeout(r, 300));
  }

  console.log("\n" + "═".repeat(55));
  console.log(`  ${verbDirs.length} verb(s) | ${totalMatched}/${totalChecked} forms verified`);
  if (totalErrors === 0) {
    console.log(`\x1b[32m  ALL FORMS VERIFIED\x1b[0m`);
  } else {
    console.log(`  \x1b[31m${totalErrors} form(s) could not be verified\x1b[0m`);
  }
  console.log("═".repeat(55));
  process.exit(totalErrors > 0 ? 1 : 0);
}

main();
