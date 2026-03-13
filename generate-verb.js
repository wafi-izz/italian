#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════════════
//  generate-verb.js — Fetch-first verb data generator
//
//  Fetches correct conjugations from italian-verbs.com, then builds
//  a complete data.js file. Falls back to pattern-based generation
//  if the fetch fails.
//
//  Usage:
//    node generate-verb.js parlare              # generate one verb
//    node generate-verb.js parlare "to speak"   # with meaning
//    node generate-verb.js parlare --dry-run    # preview, don't write
// ═══════════════════════════════════════════════════════════════════

const fs = require("fs");
const path = require("path");
const https = require("https");

const ROOT = __dirname;

// ── CLI args ──────────────────────────────────────────────────────

const args = process.argv.slice(2).filter(a => !a.startsWith("--"));
const flags = process.argv.slice(2).filter(a => a.startsWith("--"));
const dryRun = flags.includes("--dry-run");
const forceFallback = flags.includes("--fallback");

if (args.length === 0) {
  console.log("Usage: node generate-verb.js <verb> [meaning] [--dry-run] [--fallback]");
  console.log("  --dry-run    Print data.js to stdout, don't write files");
  console.log("  --fallback   Skip fetch, use pattern-based generation");
  process.exit(1);
}

const verbInfinitive = args[0].toLowerCase().trim();
const userMeaning = args[1] || "";

// ── Fetch HTML from italian-verbs.com ─────────────────────────────

function fetchHtml(verb) {
  const url = `https://www.italian-verbs.com/italian-verbs/conjugation.php?verbo=${encodeURIComponent(verb)}`;
  return new Promise((resolve, reject) => {
    const req = https.get(url, { timeout: 10000 }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve(data));
    });
    req.on("error", reject);
    req.on("timeout", () => { req.destroy(); reject(new Error("Request timed out")); });
  });
}

// ── Parse HTML into structured conjugation data ───────────────────

function stripHtml(s) {
  return s.replace(/<[^>]+>/g, "").trim();
}

function decodeEntities(s) {
  return s.replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

function parseConjugations(html) {
  // Validate we got a real conjugation page
  if (html.length < 1000 || !html.includes("cpad")) {
    return null;
  }

  const result = {
    indicativo: {},
    congiuntivo: {},
    condizionale: {},
    imperativo: {},
    infinito: {},
    participio: {},
    gerundio: {},
    _auxiliary: "AVERE",  // will be detected from description
    _description: "",
  };

  // Extract auxiliary from the verb description line
  // e.g. "verbo transitivo (ausiliare avere) e intransitivo (ausiliare essere)"
  const descrMatch = html.match(/class="descr">(.*?)<\/span>/s);
  if (descrMatch) {
    const descr = stripHtml(descrMatch[1]).toLowerCase();
    result._description = descr;
    // The primary auxiliary for active voice: take the first "ausiliare X" mentioned
    const auxMatch = descr.match(/ausiliare\s+(avere|essere)/);
    if (auxMatch) {
      result._auxiliary = auxMatch[1].toUpperCase();
    }
  }

  // Split by mood headers: <span class="modo">INDICATIVO</span>
  const moodRegex = /<span class="modo">(.*?)<\/span>/gi;
  const moodPositions = [];
  let m;
  while ((m = moodRegex.exec(html)) !== null) {
    moodPositions.push({ name: m[1].toUpperCase(), pos: m.index });
  }

  for (let mi = 0; mi < moodPositions.length; mi++) {
    const mood = moodPositions[mi];
    const moodKey = mood.name.toLowerCase();
    const start = mood.pos;
    const end = mi + 1 < moodPositions.length ? moodPositions[mi + 1].pos : html.length;
    const moodHtml = html.substring(start, end);

    if (["infinito", "participio", "gerundio"].includes(moodKey)) {
      // Short forms: <b>Presente:</b> parlare
      const shortRegex = /<div[^>]*cpad[^"]*"[^>]*><b>(.*?)<\/b>\s*(.*?)<\/div>/gi;
      let sm;
      while ((sm = shortRegex.exec(moodHtml)) !== null) {
        const label = stripHtml(sm[1]).replace(/:$/, "").trim().toLowerCase();
        const form = decodeEntities(stripHtml(sm[2]).trim());
        result[moodKey][label] = form;
      }
      continue;
    }

    // Regular moods: find tense headers and their conjugation rows
    const tempoRegex = /<span class="tempo">(.*?)<\/span>/gi;
    const tensePositions = [];
    let tm;
    while ((tm = tempoRegex.exec(moodHtml)) !== null) {
      tensePositions.push({ name: tm[1].trim(), pos: tm.index });
    }

    for (let ti = 0; ti < tensePositions.length; ti++) {
      const tense = tensePositions[ti];
      const tStart = tense.pos;
      const tEnd = ti + 1 < tensePositions.length ? tensePositions[ti + 1].pos : moodHtml.length;
      const tenseHtml = moodHtml.substring(tStart, tEnd);

      // Extract conjugation rows
      const rowRegex = /<div[^>]*(?:background-white|background-stripe)[^>]*cpad[^"]*"[^>]*>(.*?)<\/div>/gi;
      const forms = [];
      let rm;
      while ((rm = rowRegex.exec(tenseHtml)) !== null) {
        let content = decodeEntities(stripHtml(rm[1]).trim());
        forms.push(content);
      }

      const tenseName = tense.name.toUpperCase();
      result[moodKey][tenseName] = forms;
    }
  }

  return result;
}

// ── Map parsed data to our data.js structure ──────────────────────

// The site's pronoun format: "io parlo" → we need pronoun "Io" and form "parlo"
const PRONOUNS_6 = ["io", "tu", "lui/lei", "noi", "voi", "loro"];
const PRONOUNS_DISPLAY = ["Io", "Tu", "Lui / Lei", "Noi", "Voi", "Loro"];
const PRONOUNS_CONG = ["(che) Io", "(che) Tu", "(che) Lui / Lei", "(che) Noi", "(che) Voi", "(che) Loro"];
const PRONOUNS_IMP = ["(Tu)", "(Lei) formal", "(Noi)", "(Voi)", "(Loro) formal"];

function extractForm(text) {
  // "io parlo" → "parlo", "lui/lei parla" → "parla"
  let f = text.toLowerCase().trim();
  f = f.replace(/^(?:che\s+)?(?:io|tu|lui\/lei|egli|noi|voi|loro|essi)\s+/i, "");
  return f.trim();
}

function boldForm(form) {
  return `<b>${form}</b>`;
}

function buildConjugationRows(forms, pronounList) {
  const rows = [];
  for (let i = 0; i < pronounList.length && i < forms.length; i++) {
    const form = extractForm(forms[i]);
    rows.push([pronounList[i], boldForm(form)]);
  }
  return rows;
}

function buildImperativoRows(forms) {
  // Site gives 6 rows: —, tu, Lei, noi, voi, loro
  // We skip the "—" (io) and keep the other 5
  const filtered = forms.filter(f => f !== "—" && f !== "-" && f !== "–");
  // If the site included the — row, we'll have 5 remaining; if not, take first 5
  const useForms = filtered.slice(0, 5);
  const rows = [];
  for (let i = 0; i < PRONOUNS_IMP.length && i < useForms.length; i++) {
    const form = extractForm(useForms[i]);
    rows.push([PRONOUNS_IMP[i], boldForm(form)]);
  }
  return rows;
}

// ── Detect verb properties ────────────────────────────────────────

function detectType(verb) {
  if (verb.endsWith("are")) return "are";
  if (verb.endsWith("ire")) return "ire";
  if (verb.endsWith("ere")) return "ere";
  if (verb.endsWith("rre")) return "ere"; // porre, trarre, etc.
  return "ere";
}

function detectAuxiliary(parsed) {
  // Use the auxiliary parsed from the site's description (most reliable)
  if (parsed._auxiliary) return parsed._auxiliary;
  return "AVERE";
}

// ── Build compound tenses from auxiliary + participio passato ──────
// This avoids the site's issue where some verbs show passive forms
// for compound tenses (e.g. dire → "io sono detto" instead of "io ho detto")

const AVERE_FORMS = {
  presente:    ["ho", "hai", "ha", "abbiamo", "avete", "hanno"],
  imperfetto:  ["avevo", "avevi", "aveva", "avevamo", "avevate", "avevano"],
  passRemoto:  ["ebbi", "avesti", "ebbe", "avemmo", "aveste", "ebbero"],
  futuro:      ["avrò", "avrai", "avrà", "avremo", "avrete", "avranno"],
  congPres:    ["abbia", "abbia", "abbia", "abbiamo", "abbiate", "abbiano"],
  congImp:     ["avessi", "avessi", "avesse", "avessimo", "aveste", "avessero"],
  condPres:    ["avrei", "avresti", "avrebbe", "avremmo", "avreste", "avrebbero"],
};

const ESSERE_FORMS = {
  presente:    ["sono", "sei", "è", "siamo", "siete", "sono"],
  imperfetto:  ["ero", "eri", "era", "eravamo", "eravate", "erano"],
  passRemoto:  ["fui", "fosti", "fu", "fummo", "foste", "furono"],
  futuro:      ["sarò", "sarai", "sarà", "saremo", "sarete", "saranno"],
  congPres:    ["sia", "sia", "sia", "siamo", "siate", "siano"],
  congImp:     ["fossi", "fossi", "fosse", "fossimo", "foste", "fossero"],
  condPres:    ["sarei", "saresti", "sarebbe", "saremmo", "sareste", "sarebbero"],
};

const PRONOUN_PREFIXES = ["io", "tu", "lui/lei", "noi", "voi", "loro"];

function buildCompoundForms(auxTense, pp, auxiliary) {
  const auxForms = auxiliary === "ESSERE" ? ESSERE_FORMS[auxTense] : AVERE_FORMS[auxTense];
  // Strip slash agreement notation from participio: "detto/a/i/e" → "detto"
  const cleanPP = pp.replace(/\/[a-z]/g, "").trim();
  return auxForms.map((aux, i) => `${PRONOUN_PREFIXES[i]} ${aux} ${cleanPP}`);
}

function detectStem(verb) {
  if (verb.endsWith("are")) return verb.slice(0, -3).toUpperCase() + "-";
  if (verb.endsWith("ere")) return verb.slice(0, -3).toUpperCase() + "-";
  if (verb.endsWith("ire")) return verb.slice(0, -3).toUpperCase() + "-";
  return verb.toUpperCase() + "-";
}

function isLikelyIrregular(verb, parsed) {
  // Compare presente forms against regular patterns
  const type = detectType(verb);
  const stem = verb.slice(0, -3);
  const regularPresente = {
    are: [stem + "o", stem + "i", stem + "a", stem + "iamo", stem + "ate", stem + "ano"],
    ere: [stem + "o", stem + "i", stem + "e", stem + "iamo", stem + "ete", stem + "ono"],
    ire: [stem + "o", stem + "i", stem + "e", stem + "iamo", stem + "ite", stem + "ono"],
  };

  const presente = parsed.indicativo["PRESENTE"];
  if (!presente || presente.length < 6) return true;

  const expected = regularPresente[type];
  if (!expected) return true;

  for (let i = 0; i < 6; i++) {
    const actual = extractForm(presente[i]);
    if (actual !== expected[i]) return true;
  }
  return false;
}

// ── Build the full data.js structure ──────────────────────────────

function buildDataJs(verb, meaning, parsed) {
  const type = detectType(verb);
  const auxiliary = detectAuxiliary(parsed);
  const stem = detectStem(verb);
  const irregular = isLikelyIrregular(verb, parsed);

  const gerundioPresente = parsed.gerundio["presente"] || "";
  const participioPresente = parsed.participio["presente"] || "";
  // Clean participio passato: strip agreement slashes "detto/a/i/e" → "detto"
  const rawPartPassato = parsed.participio["passato"] || "";
  const participioPassato = rawPartPassato.replace(/\/[a-z]/g, "").trim();

  const infinitoPresente = parsed.infinito["presente"] || verb;
  // Build infinito passato ourselves (site might show passive)
  const infinitoPassato = `${auxiliary === "ESSERE" ? "essere" : "avere"} ${participioPassato}`;
  // Build gerundio passato ourselves
  const gerundioPassato = `${auxiliary === "ESSERE" ? "essendo" : "avendo"} ${participioPassato}`;

  // Helper to build a simple tense (fetched directly from site)
  function simpleTense(name, what, moodKey, tenseName, pronounList) {
    const forms = parsed[moodKey][tenseName];
    if (!forms || forms.length === 0) {
      return { name, what, conjugations: [], examples: [] };
    }
    return {
      name,
      what,
      conjugations: buildConjugationRows(forms, pronounList),
      examples: makeExamples(forms),
    };
  }

  // Helper to build a compound tense (constructed from auxiliary + participio)
  function compoundTense(name, what, auxTense, pronounList) {
    const forms = buildCompoundForms(auxTense, participioPassato, auxiliary);
    return {
      name,
      what,
      conjugations: buildConjugationRows(forms, pronounList),
      examples: makeExamples(forms),
    };
  }

  function makeExamples(forms) {
    const f0 = extractForm(forms[0] || "");
    const f3 = extractForm(forms[3] || forms[0] || "");
    return [
      { pronoun: "Io", it: `{${capitalize(f0)}} ... (example needed).`, en: "(English translation needed.)" },
      { pronoun: "Noi", it: `{${capitalize(f3)}} ... (example needed).`, en: "(English translation needed.)" },
    ];
  }

  function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  const data = {
    verb,
    meaning: meaning || `to ${verb.replace(/are$|ere$|ire$/, "")} (TODO: add meaning)`,
    type,
    info: {
      subtitle: irregular
        ? `Irregular -${type.toUpperCase()} verb`
        : `Regular -${type.toUpperCase()} verb`,
      stem,
      auxiliary,
      gerundio: gerundioPresente,
      participioPassato: participioPassato + (irregular ? " (irregular)" : ""),
      extra: "",
    },
    moods: [
      // 0: INDICATIVO (8 tenses)
      // Simple tenses: taken directly from the site (accurate for irregular verbs)
      // Compound tenses: built from auxiliary + participio passato (avoids passive issue)
      {
        id: "indicativo",
        name: "INDICATIVO",
        nameEn: "Indicative",
        emoji: "🟢",
        color: "green",
        description: "Reality, facts, certainty — what actually happens, happened, or will happen.",
        tenses: [
          simpleTense("Presente", "What is happening <b>now</b> or <b>habitually</b>.", "indicativo", "PRESENTE", PRONOUNS_DISPLAY),
          simpleTense("Imperfetto", 'The <b>"used to"</b> past — ongoing, repeated, or background actions.', "indicativo", "IMPERFETTO", PRONOUNS_DISPLAY),
          simpleTense("Passato Remoto", "A <b>completed</b> past action, typically distant or literary.", "indicativo", "PASSATO REMOTO", PRONOUNS_DISPLAY),
          compoundTense("Passato Prossimo", "The most common past tense in <b>spoken Italian</b> — a completed action with present relevance.", "presente", PRONOUNS_DISPLAY),
          compoundTense("Trapassato Prossimo", 'The <b>"past of the past"</b> — something that happened <b>before</b> another past event.', "imperfetto", PRONOUNS_DISPLAY),
          compoundTense("Trapassato Remoto", 'Literary "past of the past" — paired with the passato remoto.', "passRemoto", PRONOUNS_DISPLAY),
          simpleTense("Futuro Semplice", "What <b>will happen</b> — future actions, predictions, promises.", "indicativo", "FUTURO SEMPLICE", PRONOUNS_DISPLAY),
          compoundTense("Futuro Anteriore", "What <b>will have happened</b> — a future action completed before another future event.", "futuro", PRONOUNS_DISPLAY),
        ],
      },
      // 1: CONGIUNTIVO (4 tenses)
      {
        id: "congiuntivo",
        name: "CONGIUNTIVO",
        nameEn: "Subjunctive",
        emoji: "🟡",
        color: "yellow",
        description: 'Doubt, opinion, emotion, subjectivity — almost always triggered by "che" and key verbs like pensare, credere, volere, sperare...',
        tenses: [
          simpleTense("Presente", "Subjunctive present — doubt, opinion, desire about <b>current</b> situations.", "congiuntivo", "PRESENTE", PRONOUNS_CONG),
          compoundTense("Passato", "Subjunctive past — doubt, opinion about <b>completed</b> actions.", "congPres", PRONOUNS_CONG),
          simpleTense("Imperfetto", 'Subjunctive imperfect — hypothetical or past subjunctive, often in "se" clauses.', "congiuntivo", "IMPERFETTO", PRONOUNS_CONG),
          compoundTense("Trapassato", 'Subjunctive past perfect — "if I had..." — unrealized past conditions.', "congImp", PRONOUNS_CONG),
        ],
      },
      // 2: CONDIZIONALE (2 tenses)
      {
        id: "condizionale",
        name: "CONDIZIONALE",
        nameEn: "Conditional",
        emoji: "🔵",
        color: "blue",
        description: "What would happen — hypothetical situations, polite requests, wishes.",
        tenses: [
          // The site uses mixed case for condizionale tense names
          simpleTense("Presente", "What <b>would happen</b> — hypothetical, polite requests.", "condizionale", parsed.condizionale["PRESENTE"] ? "PRESENTE" : "Presente", PRONOUNS_DISPLAY),
          compoundTense("Passato", "What <b>would have happened</b> — unrealized past hypotheticals.", "condPres", PRONOUNS_DISPLAY),
        ],
      },
      // 3: IMPERATIVO (1 tense)
      {
        id: "imperativo",
        name: "IMPERATIVO",
        nameEn: "Imperative",
        emoji: "🔴",
        color: "red",
        description: "Commands and instructions — telling someone to do something directly.",
        tenses: [
          (() => {
            const forms = parsed.imperativo["PRESENTE"];
            if (!forms) return { name: "Imperativo", what: "Direct commands and instructions.", conjugations: [], examples: [] };
            const filtered = forms.filter(f => f !== "—" && f !== "-" && f !== "–");
            return {
              name: "Imperativo",
              what: "Direct commands and instructions.",
              conjugations: buildImperativoRows(forms),
              examples: [
                { pronoun: "Tu", it: `{${capitalize(extractForm(filtered[0] || ""))}}! (example needed).`, en: "(English translation needed.)" },
                { pronoun: "Voi", it: `{${capitalize(extractForm(filtered[3] || filtered[0] || ""))}}! (example needed).`, en: "(English translation needed.)" },
              ],
            };
          })(),
        ],
      },
      // 4: GERUNDIO (2 tenses)
      {
        id: "other",
        name: "GERUNDIO",
        nameEn: "Gerund",
        emoji: "⚪",
        color: "gray",
        description: 'Ongoing or simultaneous actions — like "-ing" in English.',
        tenses: [
          {
            name: "Presente",
            what: "Ongoing action happening simultaneously with another action.",
            conjugations: [["Gerundio presente", boldForm(gerundioPresente)]],
            examples: [{ pronoun: "", it: `{${capitalize(gerundioPresente)}} ... (example needed).`, en: "(English translation needed.)" }],
          },
          {
            name: "Passato",
            what: "A completed action that happened before the main action.",
            conjugations: [["Gerundio passato", boldForm(gerundioPassato)]],
            examples: [{ pronoun: "", it: `{${capitalize(gerundioPassato)}} ... (example needed).`, en: "(English translation needed.)" }],
          },
        ],
      },
      // 5: INFINITO (1 tense)
      {
        id: "other",
        name: "INFINITO",
        nameEn: "Infinitive",
        emoji: "⚪",
        color: "gray",
        description: "The base form of the verb — used after other verbs or prepositions.",
        tenses: [
          {
            name: null,
            what: "The base form — used after modal verbs, prepositions, and in verb chains.",
            conjugations: [
              ["Presente", boldForm(infinitoPresente)],
              ["Passato", boldForm(infinitoPassato)],
            ],
            examples: [{ pronoun: "", it: `Voglio {${infinitoPresente}} ... (example needed).`, en: "(English translation needed.)" }],
          },
        ],
      },
      // 6: PARTICIPIO (1 tense)
      {
        id: "other",
        name: "PARTICIPIO",
        nameEn: "Participle",
        emoji: "⚪",
        color: "gray",
        description: "Adjective-like verb forms. The passato form is essential — it builds all compound tenses.",
        tenses: [
          {
            name: null,
            what: "Verb forms that can function as adjectives. The <b>passato</b> form is used in all compound tenses.",
            headers: ["Form", "Conjugation", "Note"],
            conjugations: [
              ["Presente", boldForm(participioPresente), participioPresente ? "Adjective-like form" : "Rare / not commonly used"],
              ["Passato", boldForm(participioPassato), "Used in all compound tenses"],
            ],
            examples: [{ pronoun: "", it: `(Example needed with {${participioPassato || verb}}).`, en: "(English translation needed.)" }],
          },
        ],
      },
    ],
    quickRef: buildQuickRef(verb, parsed, auxiliary, participioPassato),
  };

  return data;
}

// ── Quick Reference ───────────────────────────────────────────────

function buildQuickRef(verb, parsed, auxiliary, participioPassato) {
  function getSimple(moodKey, tenseName, idx) {
    const forms = parsed[moodKey][tenseName];
    if (!forms || !forms[idx]) return "...";
    return extractForm(forms[idx]);
  }

  function getCompound(auxTense) {
    const forms = buildCompoundForms(auxTense, participioPassato, auxiliary);
    return extractForm(forms[0]);
  }

  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

  return [
    { tense: "Presente", idea: "now / habits", example: `Io ${getSimple("indicativo", "PRESENTE", 0)}.` },
    { tense: "Imperfetto", idea: "used to / was ...ing", example: `Io ${getSimple("indicativo", "IMPERFETTO", 0)}.` },
    { tense: "Passato Prossimo", idea: "I have / I did (recent)", example: `Io ${getCompound("presente")}.` },
    { tense: "Passato Remoto", idea: "I did (distant/literary)", example: `Io ${getSimple("indicativo", "PASSATO REMOTO", 0)}.` },
    { tense: "Trapassato Prossimo", idea: "I had done", example: `Io ${getCompound("imperfetto")}.` },
    { tense: "Trapassato Remoto", idea: "after I had done (literary)", example: `Io ${getCompound("passRemoto")}.` },
    { tense: "Futuro Semplice", idea: "I will", example: `Io ${getSimple("indicativo", "FUTURO SEMPLICE", 0)}.` },
    { tense: "Futuro Anteriore", idea: "I will have", example: `Io ${getCompound("futuro")}.` },
    { tense: "Congiuntivo Presente", idea: "that I (doubt/wish)", example: `Che io ${getSimple("congiuntivo", "PRESENTE", 0)}.` },
    { tense: "Congiuntivo Passato", idea: "that I have (doubt/wish)", example: `Che io ${getCompound("congPres")}.` },
    { tense: "Congiuntivo Imperfetto", idea: "if I were / wished", example: `Se io ${getSimple("congiuntivo", "IMPERFETTO", 0)}.` },
    { tense: "Congiuntivo Trapassato", idea: "if I had (unrealized)", example: `Se io ${getCompound("congImp")}.` },
    { tense: "Condizionale Presente", idea: "I would", example: `Io ${getSimple("condizionale", parsed.condizionale["PRESENTE"] ? "PRESENTE" : "Presente", 0)}.` },
    { tense: "Condizionale Passato", idea: "I would have", example: `Io ${getCompound("condPres")}.` },
    { tense: "Imperativo", idea: "do it!", example: `${cap(getSimple("imperativo", "PRESENTE", 1))}!` },
    { tense: "Gerundio", idea: "while ...ing", example: `${cap(parsed.gerundio["presente"] || "...")}...` },
  ];
}

// ── Fallback: Pattern-based generation for regular verbs ──────────

function generateFallback(verb, meaning) {
  console.log("\x1b[33m⚠ Using fallback pattern-based generation\x1b[0m");

  const type = detectType(verb);
  const stem = verb.slice(0, -3);

  // Regular endings by type
  const endings = {
    are: {
      presente:     ["o", "i", "a", "iamo", "ate", "ano"],
      imperfetto:   ["avo", "avi", "ava", "avamo", "avate", "avano"],
      passRemoto:   ["ai", "asti", "ò", "ammo", "aste", "arono"],
      futSemplice:  ["erò", "erai", "erà", "eremo", "erete", "eranno"],
      congPresente: ["i", "i", "i", "iamo", "iate", "ino"],
      congImperfetto: ["assi", "assi", "asse", "assimo", "aste", "assero"],
      condPresente: ["erei", "eresti", "erebbe", "eremmo", "ereste", "erebbero"],
      imperativo:   ["a", "i", "iamo", "ate", "ino"], // tu, Lei, noi, voi, Loro
      gerundio:     "ando",
      partPresente: "ante",
      partPassato:  "ato",
    },
    ere: {
      presente:     ["o", "i", "e", "iamo", "ete", "ono"],
      imperfetto:   ["evo", "evi", "eva", "evamo", "evate", "evano"],
      passRemoto:   ["ei", "esti", "é", "emmo", "este", "erono"],
      futSemplice:  ["erò", "erai", "erà", "eremo", "erete", "eranno"],
      congPresente: ["a", "a", "a", "iamo", "iate", "ano"],
      congImperfetto: ["essi", "essi", "esse", "essimo", "este", "essero"],
      condPresente: ["erei", "eresti", "erebbe", "eremmo", "ereste", "erebbero"],
      imperativo:   ["i", "a", "iamo", "ete", "ano"],
      gerundio:     "endo",
      partPresente: "ente",
      partPassato:  "uto",
    },
    ire: {
      presente:     ["o", "i", "e", "iamo", "ite", "ono"],
      imperfetto:   ["ivo", "ivi", "iva", "ivamo", "ivate", "ivano"],
      passRemoto:   ["ii", "isti", "ì", "immo", "iste", "irono"],
      futSemplice:  ["irò", "irai", "irà", "iremo", "irete", "iranno"],
      congPresente: ["a", "a", "a", "iamo", "iate", "ano"],
      congImperfetto: ["issi", "issi", "isse", "issimo", "iste", "issero"],
      condPresente: ["irei", "iresti", "irebbe", "iremmo", "ireste", "irebbero"],
      imperativo:   ["i", "a", "iamo", "ite", "ano"],
      gerundio:     "endo",
      partPresente: "ente",
      partPassato:  "ito",
    },
  };

  const e = endings[type];
  if (!e) {
    console.error(`Unknown verb type: ${type}`);
    process.exit(1);
  }

  const aux = "avere"; // default for fallback
  const pp = stem + e.partPassato;

  // Build compound forms
  const averePresente = ["ho", "hai", "ha", "abbiamo", "avete", "hanno"];
  const avereImperfetto = ["avevo", "avevi", "aveva", "avevamo", "avevate", "avevano"];
  const averePassRemoto = ["ebbi", "avesti", "ebbe", "avemmo", "aveste", "ebbero"];
  const avereFuturo = ["avrò", "avrai", "avrà", "avremo", "avrete", "avranno"];
  const avereCongPres = ["abbia", "abbia", "abbia", "abbiamo", "abbiate", "abbiano"];
  const avereCongImp = ["avessi", "avessi", "avesse", "avessimo", "aveste", "avessero"];
  const avereCondPres = ["avrei", "avresti", "avrebbe", "avremmo", "avreste", "avrebbero"];

  function compound(auxForms) { return auxForms.map(a => `${a} ${pp}`); }

  // Simulate the parsed structure
  const parsed = {
    indicativo: {
      PRESENTE:              e.presente.map((end, i) => `${["io","tu","lui/lei","noi","voi","loro"][i]} ${stem}${end}`),
      IMPERFETTO:            e.imperfetto.map((end, i) => `${["io","tu","lui/lei","noi","voi","loro"][i]} ${stem}${end}`),
      "PASSATO REMOTO":      e.passRemoto.map((end, i) => `${["io","tu","lui/lei","noi","voi","loro"][i]} ${stem}${end}`),
      "PASSATO PROSSIMO":    compound(averePresente).map((f, i) => `${["io","tu","lui/lei","noi","voi","loro"][i]} ${f}`),
      "TRAPASSATO PROSSIMO": compound(avereImperfetto).map((f, i) => `${["io","tu","lui/lei","noi","voi","loro"][i]} ${f}`),
      "TRAPASSATO REMOTO":   compound(averePassRemoto).map((f, i) => `${["io","tu","lui/lei","noi","voi","loro"][i]} ${f}`),
      "FUTURO SEMPLICE":     e.futSemplice.map((end, i) => `${["io","tu","lui/lei","noi","voi","loro"][i]} ${stem}${end}`),
      "FUTURO ANTERIORE":    compound(avereFuturo).map((f, i) => `${["io","tu","lui/lei","noi","voi","loro"][i]} ${f}`),
    },
    congiuntivo: {
      PRESENTE:    e.congPresente.map((end, i) => `${["io","tu","lui/lei","noi","voi","loro"][i]} ${stem}${end}`),
      PASSATO:     compound(avereCongPres).map((f, i) => `${["io","tu","lui/lei","noi","voi","loro"][i]} ${f}`),
      IMPERFETTO:  e.congImperfetto.map((end, i) => `${["io","tu","lui/lei","noi","voi","loro"][i]} ${stem}${end}`),
      TRAPASSATO:  compound(avereCongImp).map((f, i) => `${["io","tu","lui/lei","noi","voi","loro"][i]} ${f}`),
    },
    condizionale: {
      Presente:    e.condPresente.map((end, i) => `${["io","tu","lui/lei","noi","voi","loro"][i]} ${stem}${end}`),
      Passato:     compound(avereCondPres).map((f, i) => `${["io","tu","lui/lei","noi","voi","loro"][i]} ${f}`),
    },
    imperativo: {
      PRESENTE:    ["—", ...e.imperativo.map(end => `${stem}${end}`)],
    },
    infinito: { presente: verb, passato: `${aux} ${pp}` },
    participio: { presente: stem + e.partPresente, passato: pp },
    gerundio: { presente: stem + e.gerundio, passato: `avendo ${pp}` },
  };

  return parsed;
}

// ── Serialize data.js ─────────────────────────────────────────────

function serializeDataJs(data) {
  const lines = [];
  lines.push("const verbData = {");
  lines.push(`  verb: ${JSON.stringify(data.verb)},`);
  lines.push(`  meaning: ${JSON.stringify(data.meaning)},`);
  lines.push(`  type: ${JSON.stringify(data.type)},`);
  lines.push("");

  // info
  lines.push("  info: {");
  for (const [k, v] of Object.entries(data.info)) {
    lines.push(`    ${k}: ${JSON.stringify(v)},`);
  }
  lines.push("  },");
  lines.push("");

  // moods
  lines.push("  moods: [");
  for (let mi = 0; mi < data.moods.length; mi++) {
    const mood = data.moods[mi];
    const moodComment = ["INDICATIVO", "CONGIUNTIVO", "CONDIZIONALE", "IMPERATIVO", "GERUNDIO", "INFINITO", "PARTICIPIO"][mi];
    lines.push(`    // ══════════════ ${moodComment} ══════════════`);
    lines.push("    {");
    lines.push(`      id: ${JSON.stringify(mood.id)},`);
    lines.push(`      name: ${JSON.stringify(mood.name)},`);
    lines.push(`      nameEn: ${JSON.stringify(mood.nameEn)},`);
    lines.push(`      emoji: ${JSON.stringify(mood.emoji)},`);
    lines.push(`      color: ${JSON.stringify(mood.color)},`);
    lines.push(`      description: ${JSON.stringify(mood.description)},`);
    lines.push("      tenses: [");

    for (const tense of mood.tenses) {
      lines.push("        {");
      lines.push(`          name: ${tense.name === null ? "null" : JSON.stringify(tense.name)},`);
      lines.push(`          what: ${JSON.stringify(tense.what)},`);
      if (tense.useFor) lines.push(`          useFor: ${JSON.stringify(tense.useFor)},`);
      if (tense.notes) lines.push(`          notes: ${JSON.stringify(tense.notes)},`);
      if (tense.headers) lines.push(`          headers: ${JSON.stringify(tense.headers)},`);
      lines.push("          conjugations: [");
      for (const row of tense.conjugations) {
        lines.push(`            ${JSON.stringify(row)},`);
      }
      lines.push("          ],");
      lines.push("          examples: [");
      for (const ex of tense.examples) {
        lines.push(`            { pronoun: ${JSON.stringify(ex.pronoun)}, it: ${JSON.stringify(ex.it)}, en: ${JSON.stringify(ex.en)} },`);
      }
      lines.push("          ],");
      lines.push("        },");
    }

    lines.push("      ],");
    lines.push("    },");
  }
  lines.push("  ],");
  lines.push("");

  // quickRef
  lines.push("  quickRef: [");
  for (const qr of data.quickRef) {
    lines.push(`    { tense: ${JSON.stringify(qr.tense)}, idea: ${JSON.stringify(qr.idea)}, example: ${JSON.stringify(qr.example)} },`);
  }
  lines.push("  ],");
  lines.push("};");

  return lines.join("\n");
}

// ── Main ──────────────────────────────────────────────────────────

async function main() {
  console.log(`\x1b[1m═══ Generating: ${verbInfinitive} ═══\x1b[0m\n`);

  let parsed = null;
  let source = "fetch";

  if (!forceFallback) {
    try {
      console.log("Fetching conjugations from italian-verbs.com...");
      const html = await fetchHtml(verbInfinitive);
      parsed = parseConjugations(html);
      if (!parsed) {
        console.log("\x1b[33m⚠ Could not parse conjugations from HTML\x1b[0m");
      } else {
        // Validate we got real data
        const presente = parsed.indicativo["PRESENTE"];
        if (!presente || presente.length < 6) {
          console.log("\x1b[33m⚠ Incomplete data from fetch — missing presente forms\x1b[0m");
          parsed = null;
        } else {
          console.log(`\x1b[32m✓ Fetched conjugations successfully\x1b[0m`);
        }
      }
    } catch (e) {
      console.log(`\x1b[33m⚠ Fetch failed: ${e.message}\x1b[0m`);
    }
  }

  if (!parsed) {
    source = "fallback";
    parsed = generateFallback(verbInfinitive, userMeaning);
    console.log("\x1b[33m⚠ IMPORTANT: Fallback generates regular patterns only.\x1b[0m");
    console.log("\x1b[33m  Irregular verbs will need manual correction!\x1b[0m");
  }

  const data = buildDataJs(verbInfinitive, userMeaning, parsed);
  const output = serializeDataJs(data);

  if (dryRun) {
    console.log("\n--- data.js (dry run) ---\n");
    console.log(output);
    console.log("\n--- end ---");
  } else {
    const verbDir = path.join(ROOT, verbInfinitive);
    if (!fs.existsSync(verbDir)) {
      fs.mkdirSync(verbDir, { recursive: true });
    }
    fs.writeFileSync(path.join(verbDir, "data.js"), output, "utf8");
    console.log(`\n\x1b[32m✓ Written: ${verbInfinitive}/data.js\x1b[0m`);

    // Copy index.html from _template or an existing verb
    const indexDest = path.join(verbDir, "index.html");
    if (!fs.existsSync(indexDest)) {
      // Try template, then any existing verb folder
      const templateIndex = path.join(ROOT, "_template", "index.html");
      let sourceIndex = null;
      if (fs.existsSync(templateIndex)) {
        sourceIndex = templateIndex;
      } else {
        // Find any verb folder with index.html
        const dirs = fs.readdirSync(ROOT).filter(f => {
          const full = path.join(ROOT, f);
          return fs.statSync(full).isDirectory() && fs.existsSync(path.join(full, "index.html"));
        });
        if (dirs.length > 0) sourceIndex = path.join(ROOT, dirs[0], "index.html");
      }
      if (sourceIndex) {
        fs.copyFileSync(sourceIndex, indexDest);
        console.log(`\x1b[32m✓ Copied: ${verbInfinitive}/index.html\x1b[0m`);
      }
    }

    console.log(`\nSource: \x1b[1m${source === "fetch" ? "italian-verbs.com (verified)" : "pattern-based fallback"}\x1b[0m`);
    console.log(`\n\x1b[33mNext steps:\x1b[0m`);
    console.log(`  1. Review conjugations: node validate.js ${verbInfinitive}`);
    console.log(`  2. Verify online:       node verify-online.js ${verbInfinitive}`);
    console.log(`  3. Add examples and notes (currently placeholders)`);
    console.log(`  4. Add to dist.js`);
  }
}

main();
