#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════════════
//  validate.js — Validates verb data.js files against the expected schema
//
//  Usage:
//    node validate.js                    # validate ALL verbs
//    node validate.js dire               # validate one verb
//    node validate.js dire dormire fare  # validate specific verbs
// ═══════════════════════════════════════════════════════════════════

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;

// ── Expected structure ──────────────────────────────────────────

const EXPECTED_MOODS = [
  { id: "indicativo",  name: "INDICATIVO",  tenseCount: 8 },
  { id: "congiuntivo", name: "CONGIUNTIVO", tenseCount: 4 },
  { id: "condizionale",name: "CONDIZIONALE",tenseCount: 2 },
  { id: "imperativo",  name: "IMPERATIVO",  tenseCount: 1 },
  { id: "other",       name: "GERUNDIO",    tenseCount: 2 },
  { id: "other",       name: "INFINITO",    tenseCount: 1 },
  { id: "other",       name: "PARTICIPIO",  tenseCount: 1 },
];

const INDICATIVO_TENSES = [
  "Presente", "Imperfetto", "Passato Remoto", "Passato Prossimo",
  "Trapassato Prossimo", "Trapassato Remoto", "Futuro Semplice", "Futuro Anteriore"
];

const CONGIUNTIVO_TENSES = ["Presente", "Passato", "Imperfetto", "Trapassato"];
const CONDIZIONALE_TENSES = ["Presente", "Passato"];

const VALID_TYPES = ["are", "ere", "ire"];

// ── Regular conjugation endings (for pattern-checking regular verbs) ──
const REGULAR_ENDINGS = {
  are: {
    presente:     ["o", "i", "a", "iamo", "ate", "ano"],
    imperfetto:   ["avo", "avi", "ava", "avamo", "avate", "avano"],
    passatoRemoto:["ai", "asti", "ò", "ammo", "aste", "arono"],
    futuro:       ["erò", "erai", "erà", "eremo", "erete", "eranno"],
    condPresente: ["erei", "eresti", "erebbe", "eremmo", "ereste", "erebbero"],
    congPresente: ["i", "i", "i", "iamo", "iate", "ino"],
    congImperfetto:["assi", "assi", "asse", "assimo", "aste", "assero"],
    imperativo:   [null, null, null, null, null],  // varies
    gerundio: "ando",
    partPresente: "ante",
    partPassato: "ato",
  },
  ere: {
    presente:     ["o", "i", "e", "iamo", "ete", "ono"],
    imperfetto:   ["evo", "evi", "eva", "evamo", "evate", "evano"],
    passatoRemoto:["ei", "esti", "é", "emmo", "este", "erono"],
    futuro:       ["erò", "erai", "erà", "eremo", "erete", "eranno"],
    condPresente: ["erei", "eresti", "erebbe", "eremmo", "ereste", "erebbero"],
    congPresente: ["a", "a", "a", "iamo", "iate", "ano"],
    congImperfetto:["essi", "essi", "esse", "essimo", "este", "essero"],
    gerundio: "endo",
    partPresente: "ente",
    partPassato: "uto",
  },
  ire: {
    presente:     ["o", "i", "e", "iamo", "ite", "ono"],
    imperfetto:   ["ivo", "ivi", "iva", "ivamo", "ivate", "ivano"],
    passatoRemoto:["ii", "isti", "ì", "immo", "iste", "irono"],
    futuro:       ["irò", "irai", "irà", "iremo", "irete", "iranno"],
    condPresente: ["irei", "iresti", "irebbe", "iremmo", "ireste", "irebbero"],
    congPresente: ["a", "a", "a", "iamo", "iate", "ano"],
    congImperfetto:["issi", "issi", "isse", "issimo", "iste", "issero"],
    gerundio: "endo",
    partPresente: "ente",
    partPassato: "ito",
  }
};

const INDICATIVO_PRONOUNS = ["Io", "Tu", "Lui / Lei", "Noi", "Voi", "Loro"];
const CONGIUNTIVO_PRONOUNS = ["(che) Io", "(che) Tu", "(che) Lui / Lei", "(che) Noi", "(che) Voi", "(che) Loro"];
const IMPERATIVO_PRONOUNS = ["(Tu)", "(Lei) formal", "(Noi)", "(Voi)", "(Loro) formal"];

// ── Helpers ─────────────────────────────────────────────────────

let totalErrors = 0;
let totalWarnings = 0;

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

/** Strip all HTML tags from a string */
function stripHtml(s) {
  return s.replace(/<[^>]+>/g, "");
}

/** Extract all {verb} tokens from an example sentence, stripped of braces */
function extractVerbTokens(sentence) {
  const matches = [];
  const re = /\{([^}]+)\}/g;
  let m;
  while ((m = re.exec(sentence)) !== null) {
    matches.push(m[1]);
  }
  return matches;
}

/** Get all plain-text conjugation forms from a tense's conjugation table.
 *  Expands agreement notation like "andato/a/i/e" into all variants. */
function getConjForms(tense) {
  if (!tense.conjugations) return [];
  const forms = [];
  for (const row of tense.conjugations) {
    const raw = stripHtml(row[1] || "").trim().toLowerCase();
    forms.push(raw);
    // Expand agreement forms: "andato/a/i/e" → andato, andata, andati, andate
    // Also handles compound: "sono andato/a/i/e" → sono andato, sono andata, etc.
    const agreeMatch = raw.match(/^(.*)(\w+)(\/\w(?:\/\w)*)$/);
    if (agreeMatch) {
      const prefix = agreeMatch[1];
      const base = agreeMatch[2];
      const suffixes = agreeMatch[3].split("/").filter(Boolean);
      for (const suf of suffixes) {
        forms.push((prefix + base.slice(0, -1) + suf).trim());
      }
    }
  }
  return forms;
}

// ── Load verb data from file ────────────────────────────────────

function loadVerbData(filePath) {
  const code = fs.readFileSync(filePath, "utf8");

  // Check variable name
  if (!code.startsWith("const verbData")) {
    return { error: "File must start with 'const verbData = {'" };
  }

  // Execute in sandbox — replace 'const verbData' with 'this.verbData' so it's accessible
  const execCode = code.replace(/^const verbData\s*=/, "this.verbData =");
  const sandbox = {};
  try {
    vm.runInNewContext(execCode, sandbox);
  } catch (e) {
    return { error: `JavaScript syntax error: ${e.message}` };
  }

  if (!sandbox.verbData) {
    return { error: "No 'verbData' variable found — file must start with 'const verbData = {'" };
  }

  return { data: sandbox.verbData };
}

// ── Validate a single verb ──────────────────────────────────────

function validateVerb(verbDir) {
  const verbName = path.basename(verbDir);
  const dataFile = path.join(verbDir, "data.js");
  const indexFile = path.join(verbDir, "index.html");

  console.log(`\n\x1b[1m── ${verbName.toUpperCase()} ──\x1b[0m`);

  // Check files exist
  if (!fs.existsSync(dataFile)) {
    error(verbName, "Missing data.js");
    return;
  }
  if (!fs.existsSync(indexFile)) {
    error(verbName, "Missing index.html");
  }

  // Check index.html content
  if (fs.existsSync(indexFile)) {
    const html = fs.readFileSync(indexFile, "utf8");
    if (!html.includes('src="data.js"')) error(verbName, "index.html missing data.js script tag");
    if (!html.includes('src="../render.js"')) error(verbName, "index.html missing ../render.js script tag");
    if (!html.includes('href="../style.css"')) error(verbName, "index.html missing ../style.css link");
    if (!html.includes('id="app"')) error(verbName, "index.html missing #app div");
  }

  // Load and parse data
  const result = loadVerbData(dataFile);
  if (result.error) {
    error(verbName, result.error);
    return;
  }

  const d = result.data;

  // ── Top-level properties ──
  if (typeof d.verb !== "string" || !d.verb) error(verbName, "Missing or empty 'verb' property");
  if (typeof d.meaning !== "string" || !d.meaning) error(verbName, "Missing or empty 'meaning' property");
  if (!VALID_TYPES.includes(d.type)) error(verbName, `'type' must be one of: ${VALID_TYPES.join(", ")} (got: "${d.type}")`);

  // ── Info block ──
  if (!d.info || typeof d.info !== "object") {
    error(verbName, "Missing 'info' object");
  } else {
    for (const key of ["subtitle", "stem", "auxiliary", "gerundio", "participioPassato"]) {
      if (typeof d.info[key] !== "string") error(verbName, `info.${key} must be a string`);
    }
    if (!("extra" in d.info)) warn(verbName, "info.extra is missing (use '' if empty)");
  }

  // ── Moods array ──
  if (!Array.isArray(d.moods)) {
    error(verbName, "'moods' must be an array (got object or missing)");
    return;
  }

  if (d.moods.length !== 7) {
    error(verbName, `Expected 7 mood objects, got ${d.moods.length}`);
  }

  for (let i = 0; i < Math.min(d.moods.length, EXPECTED_MOODS.length); i++) {
    const mood = d.moods[i];
    const expected = EXPECTED_MOODS[i];

    // Mood-level checks
    if (mood.id !== expected.id) error(verbName, `Mood[${i}].id: expected "${expected.id}", got "${mood.id}"`);
    if (mood.name !== expected.name) error(verbName, `Mood[${i}].name: expected "${expected.name}", got "${mood.name}"`);
    if (typeof mood.nameEn !== "string") error(verbName, `Mood[${i}].nameEn must be a string`);
    if (typeof mood.emoji !== "string") error(verbName, `Mood[${i}].emoji must be a string`);
    if (typeof mood.color !== "string") error(verbName, `Mood[${i}].color must be a string`);
    if (typeof mood.description !== "string") error(verbName, `Mood[${i}].description must be a string`);

    if (!Array.isArray(mood.tenses)) {
      error(verbName, `${mood.name}: tenses must be an array`);
      continue;
    }

    if (mood.tenses.length !== expected.tenseCount) {
      error(verbName, `${mood.name}: expected ${expected.tenseCount} tenses, got ${mood.tenses.length}`);
    }

    // Tense-level checks
    for (let j = 0; j < mood.tenses.length; j++) {
      const tense = mood.tenses[j];
      const tenseLabel = tense.name || `${mood.name}[${j}]`;

      // Conjugations
      if (!Array.isArray(tense.conjugations) || tense.conjugations.length === 0) {
        error(verbName, `${tenseLabel}: missing or empty conjugations array`);
      } else {
        for (let k = 0; k < tense.conjugations.length; k++) {
          const row = tense.conjugations[k];
          if (!Array.isArray(row) || row.length < 2) {
            error(verbName, `${tenseLabel}: conjugation[${k}] must be an array of at least 2 strings`);
          }
        }

        // Check pronoun format for standard tenses (6-row conjugation tables)
        if (tense.conjugations.length === 6) {
          const pronouns = tense.conjugations.map(r => r[0]);
          if (mood.id === "congiuntivo") {
            const match = pronouns.every((p, idx) => p === CONGIUNTIVO_PRONOUNS[idx]);
            if (!match) warn(verbName, `${tenseLabel}: congiuntivo pronouns should be: ${CONGIUNTIVO_PRONOUNS.join(", ")}`);
          } else if (mood.id === "indicativo" || mood.id === "condizionale") {
            const match = pronouns.every((p, idx) => p === INDICATIVO_PRONOUNS[idx]);
            if (!match) warn(verbName, `${tenseLabel}: pronouns should be: ${INDICATIVO_PRONOUNS.join(", ")}`);
          }
        }

        // Check imperativo pronoun format (5 rows)
        if (mood.id === "imperativo" && tense.conjugations.length === 5) {
          const pronouns = tense.conjugations.map(r => r[0]);
          const match = pronouns.every((p, idx) => p === IMPERATIVO_PRONOUNS[idx]);
          if (!match) warn(verbName, `${tenseLabel}: imperativo pronouns should be: ${IMPERATIVO_PRONOUNS.join(", ")}`);
        }
      }

      // Examples
      if (!Array.isArray(tense.examples) || tense.examples.length === 0) {
        error(verbName, `${tenseLabel}: missing or empty examples array`);
      } else {
        if (tense.examples.length < 2 && mood.id !== "other") {
          warn(verbName, `${tenseLabel}: should have at least 2 examples (got ${tense.examples.length})`);
        }
        for (let k = 0; k < tense.examples.length; k++) {
          const ex = tense.examples[k];
          if (typeof ex.it !== "string") error(verbName, `${tenseLabel}: example[${k}].it must be a string`);
          if (typeof ex.en !== "string") error(verbName, `${tenseLabel}: example[${k}].en must be a string`);
          if (!("pronoun" in ex)) error(verbName, `${tenseLabel}: example[${k}] missing 'pronoun' key`);

          // Check for {verb} markup in Italian sentence
          if (ex.it && !ex.it.match(/\{[^}]+\}/)) {
            warn(verbName, `${tenseLabel}: example[${k}].it has no {verb} markup`);
          }
        }
      }

      // Notes (optional but must be array if present)
      if (tense.notes !== undefined && !Array.isArray(tense.notes)) {
        error(verbName, `${tenseLabel}: notes must be an array if present`);
      }

      // What (required for most tenses)
      if (tense.name !== null && typeof tense.what !== "string") {
        warn(verbName, `${tenseLabel}: missing 'what' description`);
      }

      // Headers (only for participio)
      if (mood.name === "PARTICIPIO" && tense.headers) {
        if (!Array.isArray(tense.headers) || tense.headers.length !== 3) {
          error(verbName, `PARTICIPIO: headers must be ["Form", "Conjugation", "Note"]`);
        }
      }
    }
  }

  // ── Tense names ──
  if (d.moods[0] && d.moods[0].tenses) {
    const names = d.moods[0].tenses.map(t => t.name);
    for (let i = 0; i < INDICATIVO_TENSES.length; i++) {
      if (names[i] !== INDICATIVO_TENSES[i]) {
        error(verbName, `Indicativo tense[${i}]: expected "${INDICATIVO_TENSES[i]}", got "${names[i]}"`);
      }
    }
  }

  // ── QuickRef ──
  if (!Array.isArray(d.quickRef)) {
    error(verbName, "Missing 'quickRef' array");
  } else {
    if (d.quickRef.length !== 16) {
      warn(verbName, `quickRef should have 16 entries (got ${d.quickRef.length})`);
    }
    for (let i = 0; i < d.quickRef.length; i++) {
      const r = d.quickRef[i];
      if (typeof r.tense !== "string") error(verbName, `quickRef[${i}]: missing 'tense'`);
      if (typeof r.idea !== "string") error(verbName, `quickRef[${i}]: missing 'idea'`);
      if (typeof r.example !== "string") error(verbName, `quickRef[${i}]: missing 'example'`);
    }
  }

  // ══════════════════════════════════════════════════════════════
  //  CONTENT-LEVEL CHECKS
  // ══════════════════════════════════════════════════════════════

  const verbInf = (d.verb || "").toLowerCase();
  const verbType = d.type;
  const isRegular = d.info && !d.info.subtitle.toLowerCase().includes("irregular");
  const endings = REGULAR_ENDINGS[verbType];

  // ── 1. Gerundio form check ──
  if (d.moods[4] && d.moods[4].name === "GERUNDIO") {
    const gerTenses = d.moods[4].tenses;

    // Gerundio presente
    if (gerTenses[0] && gerTenses[0].conjugations && gerTenses[0].conjugations[0]) {
      const gerForm = stripHtml(gerTenses[0].conjugations[0][1] || "").trim().toLowerCase();
      if (isRegular && endings) {
        const expectedSuffix = endings.gerundio;
        if (!gerForm.endsWith(expectedSuffix)) {
          error(verbName, `Gerundio presente "${gerForm}" should end in "-${expectedSuffix}" for regular -${verbType.toUpperCase()} verbs`);
        }
      }
      // Cross-check with info.gerundio
      if (d.info && d.info.gerundio) {
        const infoGer = d.info.gerundio.toLowerCase();
        if (gerForm !== infoGer) {
          error(verbName, `Gerundio mismatch: conjugation table says "${gerForm}" but info.gerundio says "${infoGer}"`);
        }
      }
    }

    // Gerundio passato should start with "avendo" or "essendo"
    if (gerTenses[1] && gerTenses[1].conjugations && gerTenses[1].conjugations[0]) {
      const gerPast = stripHtml(gerTenses[1].conjugations[0][1] || "").trim().toLowerCase();
      if (!gerPast.startsWith("avendo ") && !gerPast.startsWith("essendo ")) {
        error(verbName, `Gerundio passato "${gerPast}" should start with "avendo" or "essendo"`);
      }
    }
  }

  // ── 2. Infinito form check ──
  if (d.moods[5] && d.moods[5].name === "INFINITO") {
    const infTense = d.moods[5].tenses[0];
    if (infTense && infTense.conjugations) {
      // Presente should be the verb itself
      const infPres = stripHtml(infTense.conjugations[0][1] || "").trim().toLowerCase();
      if (infPres !== verbInf) {
        error(verbName, `Infinito presente "${infPres}" should match verb "${verbInf}"`);
      }
      // Passato should start with "avere" or "essere"
      if (infTense.conjugations[1]) {
        const infPast = stripHtml(infTense.conjugations[1][1] || "").trim().toLowerCase();
        if (!infPast.startsWith("avere ") && !infPast.startsWith("essere ")) {
          error(verbName, `Infinito passato "${infPast}" should start with "avere" or "essere"`);
        }
      }
    }
  }

  // ── 3. Participio passato cross-check ──
  if (d.moods[6] && d.moods[6].name === "PARTICIPIO") {
    const partTense = d.moods[6].tenses[0];
    if (partTense && partTense.conjugations && partTense.conjugations[1]) {
      const partForm = stripHtml(partTense.conjugations[1][1] || "").trim().toLowerCase();
      // For regular verbs, check expected ending
      if (isRegular && endings) {
        const expectedSuffix = endings.partPassato;
        if (!partForm.endsWith(expectedSuffix)) {
          warn(verbName, `Participio passato "${partForm}" — expected ending "-${expectedSuffix}" for regular -${verbType.toUpperCase()} verb`);
        }
      }
    }
  }

  // ── 4. Auxiliary consistency ──
  if (d.info && d.info.auxiliary) {
    const aux = d.info.auxiliary.toUpperCase();
    const usesEssere = aux.includes("ESSERE");
    const usesAvere = aux.includes("AVERE");

    // Check passato prossimo (indicativo tense index 3)
    if (d.moods[0] && d.moods[0].tenses[3]) {
      const ppForms = getConjForms(d.moods[0].tenses[3]);
      if (ppForms.length > 0) {
        const firstForm = ppForms[0]; // e.g. "ho detto" or "sono andato"
        const startsWithEssere = firstForm.startsWith("sono ") || firstForm.startsWith("sei ") || firstForm.startsWith("è ") || firstForm.startsWith("siamo ") || firstForm.startsWith("siete ") || firstForm.startsWith("sono ");
        const startsWithAvere = firstForm.startsWith("ho ") || firstForm.startsWith("hai ") || firstForm.startsWith("ha ") || firstForm.startsWith("abbiamo ") || firstForm.startsWith("avete ") || firstForm.startsWith("hanno ");
        if (usesAvere && !usesEssere && startsWithEssere) {
          error(verbName, `Auxiliary mismatch: info says AVERE but Passato Prossimo uses essere`);
        }
        if (usesEssere && !usesAvere && startsWithAvere) {
          error(verbName, `Auxiliary mismatch: info says ESSERE but Passato Prossimo uses avere`);
        }
      }
    }
  }

  // ── 5. {verb} in examples should match a conjugation form ──
  for (const mood of d.moods) {
    if (!mood.tenses) continue;
    for (const tense of mood.tenses) {
      const tenseLabel = tense.name || mood.name;
      const forms = getConjForms(tense);
      if (!tense.examples) continue;

      for (let k = 0; k < tense.examples.length; k++) {
        const ex = tense.examples[k];
        if (!ex.it) continue;
        const tokens = extractVerbTokens(ex.it);
        for (const token of tokens) {
          const tokenLower = token.toLowerCase();
          // Check if the token matches any form in the conjugation table (or contains one for compound tenses)
          const matched = forms.some(f =>
            f === tokenLower ||
            tokenLower.includes(f) ||
            f.includes(tokenLower) ||
            // Handle compound: "ho mangiato" — token might be "ho mangiato" or just "mangiato"
            f.split(" ").some(part => part === tokenLower) ||
            tokenLower.split(" ").some(part => forms.some(ff => ff.includes(part)))
          );
          // Skip check if all forms are dashes (modal verbs with no real imperativo)
          const realForms = forms.filter(f => f !== "—" && f !== "-" && f !== "–");
          if (!matched && realForms.length > 0) {
            // Also check against the verb infinitive and info fields as fallback
            const infoForms = [verbInf, d.info?.gerundio, d.info?.participioPassato].filter(Boolean).map(s => stripHtml(s).toLowerCase());
            const infoMatch = infoForms.some(f => tokenLower.includes(f) || f.includes(tokenLower));
            if (!infoMatch) {
              warn(verbName, `${tenseLabel}: example[${k}] verb "{${token}}" doesn't match any form in conjugation table: [${forms.join(", ")}]`);
            }
          }
        }
      }
    }
  }

  // ── 6. Bold tag balance ──
  const rawCode = fs.readFileSync(path.join(verbDir, "data.js"), "utf8");
  const openCount = (rawCode.match(/<b>/g) || []).length;
  const closeCount = (rawCode.match(/<\/b>/g) || []).length;
  if (openCount !== closeCount) {
    error(verbName, `Unbalanced <b> tags: ${openCount} opening vs ${closeCount} closing`);
  }

  // ── 7. Duplicate example sentences ──
  const allSentences = [];
  for (const mood of d.moods) {
    if (!mood.tenses) continue;
    for (const tense of mood.tenses) {
      if (!tense.examples) continue;
      for (const ex of tense.examples) {
        if (ex.it) allSentences.push(ex.it);
      }
    }
  }
  const seen = new Set();
  for (const s of allSentences) {
    const normalized = s.toLowerCase().replace(/\s+/g, " ").trim();
    if (seen.has(normalized)) {
      warn(verbName, `Duplicate example sentence: "${s.substring(0, 60)}..."`);
    }
    seen.add(normalized);
  }

  // ── 8. Example sentence minimum length ──
  for (const mood of d.moods) {
    if (!mood.tenses) continue;
    for (const tense of mood.tenses) {
      const tenseLabel = tense.name || mood.name;
      if (!tense.examples) continue;
      for (let k = 0; k < tense.examples.length; k++) {
        const ex = tense.examples[k];
        if (!ex.it) continue;
        const wordCount = ex.it.replace(/[{}]/g, "").split(/\s+/).filter(Boolean).length;
        if (wordCount < 6) {
          warn(verbName, `${tenseLabel}: example[${k}] is very short (${wordCount} words) — aim for 8+ words for learning value`);
        }
      }
    }
  }

  // ── 9. Consistent HTML tag usage in "what" fields (<em> vs <b>) ──
  for (const mood of d.moods) {
    if (!mood.tenses) continue;
    for (const tense of mood.tenses) {
      if (tense.what && tense.what.includes("<em>")) {
        warn(verbName, `${tense.name || mood.name}: "what" field uses <em> tags — use <b> for consistency with other verbs`);
      }
    }
  }

  ok(`${verbName} validation complete`);
}

// ── Main ────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);

  let verbDirs;
  if (args.length > 0) {
    // Validate specific verbs
    verbDirs = args.map(v => path.join(ROOT, v));
  } else {
    // Validate all verb directories (skip _template, node_modules, etc.)
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

  console.log(`\x1b[1mValidating ${verbDirs.length} verb(s)...\x1b[0m`);

  for (const dir of verbDirs) {
    validateVerb(dir);
  }

  // Summary
  console.log("\n" + "═".repeat(50));
  if (totalErrors === 0 && totalWarnings === 0) {
    console.log(`\x1b[32m  ALL PASSED — ${verbDirs.length} verb(s), 0 errors, 0 warnings\x1b[0m`);
  } else {
    console.log(`  ${verbDirs.length} verb(s) checked`);
    if (totalErrors > 0) console.log(`  \x1b[31m${totalErrors} error(s)\x1b[0m`);
    if (totalWarnings > 0) console.log(`  \x1b[33m${totalWarnings} warning(s)\x1b[0m`);
  }
  console.log("═".repeat(50));

  process.exit(totalErrors > 0 ? 1 : 0);
}

main();
