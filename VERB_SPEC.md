# Italian Verb Conjugation — Data File Specification

Use this document as a complete, self-contained prompt for any AI to generate a verb `data.js` file. The output must be a valid JavaScript file that follows this spec exactly.

---

## Task

Generate a file called `data.js` for the Italian verb **[VERB]**.

The file declares a single global variable `const verbData = { ... };` containing the complete conjugation data for the verb across all Italian moods and tenses. This data is consumed by a shared renderer (`render.js`) that expects the exact structure described below.

---

## Output Requirements

1. The file must start with `const verbData = {` — no imports, no exports, no other variables.
2. The file must be valid JavaScript (not JSON — trailing commas are OK).
3. All Italian text must use proper accented characters (à, è, é, ì, ò, ù).
4. Use `<b>...</b>` tags inside conjugation strings to highlight key parts (stems, endings, irregular forms).
5. Use `{curly braces}` around the conjugated verb in example sentences — the renderer converts `{verb}` to highlighted `<span>` tags.
6. Example sentences must be **meaningful and useful for learning** — at least 10+ words, not trivial phrases.
7. Exactly **2 examples per tense** (except gerundio/infinito/participio which may have 1-2).

---

## Top-Level Structure

```js
const verbData = {
  verb: "string",           // lowercase Italian infinitive, e.g. "dire"
  meaning: "string",        // English meaning, e.g. "to say / to tell"
  type: "are"|"ere"|"ire",  // conjugation group

  info: {
    subtitle: "string",           // e.g. "Irregular -IRE verb (from Latin: <b>dicere</b>)"
    stem: "string",               // e.g. "DIC-" or "DIC- / DIR-" for multiple stems
    auxiliary: "string",          // "AVERE" | "ESSERE" | "AVERE (or ESSERE with essere-verbs)"
    gerundio: "string",           // e.g. "dicendo"
    participioPassato: "string",  // e.g. "detto (irregular)"
    extra: "string"               // compounds, expressions, or "" if none
  },

  moods: [ /* array of 7 mood objects — see below */ ],

  quickRef: [ /* array of exactly 16 objects — see below */ ]
};
```

---

## Moods Array (exactly 7 objects, in this order)

### 1. INDICATIVO (8 tenses)

```js
{
  id: "indicativo",
  name: "INDICATIVO",
  nameEn: "Indicative",
  emoji: "🟢",
  color: "green",
  description: "Reality, facts, certainty — what actually happens, happened, or will happen.",
  tenses: [
    // 8 tense objects in this order:
    // "Presente", "Imperfetto", "Passato Remoto", "Passato Prossimo",
    // "Trapassato Prossimo", "Trapassato Remoto", "Futuro Semplice", "Futuro Anteriore"
  ]
}
```

### 2. CONGIUNTIVO (4 tenses)

```js
{
  id: "congiuntivo",
  name: "CONGIUNTIVO",
  nameEn: "Subjunctive",
  emoji: "🟡",
  color: "yellow",
  description: "Doubt, opinion, emotion, subjectivity — almost always triggered by \"che\" and key verbs like pensare, credere, volere, sperare...",
  tenses: [
    // 4 tense objects: "Presente", "Passato", "Imperfetto", "Trapassato"
  ]
}
```

### 3. CONDIZIONALE (2 tenses)

```js
{
  id: "condizionale",
  name: "CONDIZIONALE",
  nameEn: "Conditional",
  emoji: "🔵",
  color: "blue",
  description: "What would happen — hypothetical situations, polite requests, wishes.",
  tenses: [
    // 2 tense objects: "Presente", "Passato"
  ]
}
```

### 4. IMPERATIVO (1 tense)

```js
{
  id: "imperativo",
  name: "IMPERATIVO",
  nameEn: "Imperative",
  emoji: "🔴",
  color: "red",
  description: "Commands and instructions — telling someone to do something directly.",
  tenses: [
    // 1 tense object: "Imperativo"
  ]
}
```

### 5. GERUNDIO (2 tenses)

```js
{
  id: "other",
  name: "GERUNDIO",
  nameEn: "Gerund",
  emoji: "⚪",
  color: "gray",
  description: "Ongoing or simultaneous actions — like \"-ing\" in English.",
  tenses: [
    // 2 tense objects: "Presente", "Passato"
  ]
}
```

### 6. INFINITO (1 tense)

```js
{
  id: "other",
  name: "INFINITO",
  nameEn: "Infinitive",
  emoji: "⚪",
  color: "gray",
  description: "The base form of the verb — used after other verbs or prepositions.",
  tenses: [
    // 1 tense object with name: null
  ]
}
```

### 7. PARTICIPIO (1 tense)

```js
{
  id: "other",
  name: "PARTICIPIO",
  nameEn: "Participle",
  emoji: "⚪",
  color: "gray",
  description: "Adjective-like verb forms. The passato form is essential — it builds all compound tenses.",
  tenses: [
    // 1 tense object with name: null, has headers
  ]
}
```

---

## Tense Object Structure

```js
{
  name: "Presente",          // string, or null for infinito/participio
  what: "HTML description",  // explains what this tense is and when to use it
  useFor: "optional string", // optional — "Use it for: ..."
  notes: ["string"],         // optional array of tip/warning strings (use ⚠️ or 💡 prefix)
  headers: ["Form", "Conjugation", "Note"],  // ONLY for participio
  conjugations: [
    // Array of arrays. Each inner array = one table row.
    // Standard tenses (6 rows):
    ["Io",        "<b>form</b>"],
    ["Tu",        "<b>form</b>"],
    ["Lui / Lei", "<b>form</b>"],
    ["Noi",       "<b>form</b>"],
    ["Voi",       "<b>form</b>"],
    ["Loro",      "<b>form</b>"]
  ],
  examples: [
    {
      pronoun: "Io",                          // which pronoun this example uses
      it: "{Conjugated verb} rest of sentence.", // Italian — verb in {braces}
      en: "English translation."               // English
    }
  ]
}
```

### Pronoun Formats by Mood

| Mood | Pronouns |
|------|----------|
| Indicativo, Condizionale | `"Io"`, `"Tu"`, `"Lui / Lei"`, `"Noi"`, `"Voi"`, `"Loro"` |
| Congiuntivo | `"(che) Io"`, `"(che) Tu"`, `"(che) Lui / Lei"`, `"(che) Noi"`, `"(che) Voi"`, `"(che) Loro"` |
| Imperativo (5 rows) | `"(Tu)"`, `"(Lei) formal"`, `"(Noi)"`, `"(Voi)"`, `"(Loro) formal"` |
| Gerundio (1 row) | `["Gerundio presente", "<b>form</b>"]` or `["Gerundio passato", "<b>form</b>"]` |
| Infinito (2 rows) | `["Presente", "<b>form</b>"]`, `["Passato", "<b>form</b>"]` |
| Participio (2 rows, 3 cols) | `["Presente", "<b>form</b>", "note"]`, `["Passato", "<b>form</b>", "note"]` |

### Example pronoun field

- For standard tenses: use the pronoun from the sentence, e.g. `"Noi"`, `"Tu"`, `"Lui"`
- For gerundio/infinito/participio: use `""`  (empty string)

---

## QuickRef Array (exactly 16 entries)

```js
quickRef: [
  { tense: "Presente",               idea: "short key idea", example: "Short example with verb." },
  { tense: "Imperfetto",             idea: "...", example: "..." },
  { tense: "Passato Prossimo",       idea: "...", example: "..." },
  { tense: "Passato Remoto",         idea: "...", example: "..." },
  { tense: "Trapassato Prossimo",    idea: "...", example: "..." },
  { tense: "Trapassato Remoto",      idea: "...", example: "..." },
  { tense: "Futuro Semplice",        idea: "...", example: "..." },
  { tense: "Futuro Anteriore",       idea: "...", example: "..." },
  { tense: "Congiuntivo Presente",   idea: "...", example: "..." },
  { tense: "Congiuntivo Passato",    idea: "...", example: "..." },
  { tense: "Congiuntivo Imperfetto", idea: "...", example: "..." },
  { tense: "Congiuntivo Trapassato", idea: "...", example: "..." },
  { tense: "Condizionale Presente",  idea: "...", example: "..." },
  { tense: "Condizionale Passato",   idea: "...", example: "..." },
  { tense: "Imperativo",            idea: "...", example: "..." },
  { tense: "Gerundio",              idea: "...", example: "..." }
]
```

---

## Validation

After generating, run: `node validate.js <verb-name>` to check for structural errors.

---

## Checklist

- [ ] Variable is `const verbData` (not `const defined`, not `const data`, not `module.exports`)
- [ ] `moods` is an **array** of 7 objects (not an object with named keys)
- [ ] Mood order: indicativo, congiuntivo, condizionale, imperativo, gerundio, infinito, participio
- [ ] Indicativo has exactly 8 tenses in the correct order
- [ ] Congiuntivo has exactly 4 tenses
- [ ] Condizionale has exactly 2 tenses
- [ ] Imperativo has exactly 1 tense with 5 conjugation rows
- [ ] Gerundio has 2 tenses (Presente, Passato) with 1 conjugation row each
- [ ] Infinito has 1 tense with `name: null` and 2 conjugation rows
- [ ] Participio has 1 tense with `name: null`, `headers` array, and 2 conjugation rows of 3 elements
- [ ] Every tense has `conjugations` (array of arrays) and `examples` (array of objects)
- [ ] Every example has `pronoun`, `it`, `en` keys
- [ ] Every `it` string contains at least one `{verb form}` in curly braces
- [ ] `quickRef` has exactly 16 entries with `tense`, `idea`, `example` keys
- [ ] All conjugations are linguistically accurate
- [ ] File also needs a sibling `index.html` (copy from any existing verb folder)
