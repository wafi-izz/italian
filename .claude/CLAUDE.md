# Italian Language Learning Site

Static browser-based Italian learning app. No build tools, no npm, no bundler — raw HTML/CSS/JS served from the filesystem. Uses Claude API client-side for AI features.

---

## File Structure

```
italian/
  index.html              # Home page — loads dist.js to render verb grid
  dist.js                 # Verb registry (list of all verbs with metadata)
  render.js               # Shared renderer — reads verbData global, builds HTML into #app
  nav.js                  # Sticky navigation (5 sections + sub-nav for phases)
  chat.js                 # Floating AI tutor + selection toolbar (on every page)
  env.js                  # API key bootstrap — reads CLAUDE_API_KEY from localStorage (committable, no secret)
  style.css               # Light theme, shared by all pages
  conjugation.html        # Standalone dark-themed conjugation reference for "dire"
  phone.html              # Standalone self-contained page (untracked)
  validate.js             # CLI: validates data.js files against expected schema
  verify-online.js        # CLI: cross-checks conjugations against italian-verbs.com
  generate-verb.js        # CLI: fetches conjugations + scaffolds a complete data.js
  VERB_SPEC.md            # Detailed spec for data.js file structure

  <verb>/                 # One folder per verb (dire/, parlare/, essere/, etc.)
    data.js               # const verbData = {...} — all conjugation data
    index.html            # Loads shared scripts + data.js + render.js

  foundations/index.html   # Phase 1 hub: Articles, Nouns, Adjectives, Pronouns
  sentences/index.html     # Phase 2 hub: Negation, Questions, Adverbs, Conjunctions
  fluency/index.html       # Phase 3 hub: Expressions, Numbers, Si Constructions
  conversazione/index.html # AI WhatsApp-style group chat with 4 Italian characters

  articoli/               # Topic pages — self-contained HTML using shared CSS classes
  sostantivi/             # Each loads ../env.js, ../nav.js, ../chat.js
  aggettivi/              # Content is written directly in HTML (not rendered from JS data)
  pronomi/
  negazione/
  domande/
  avverbi/
  congiunzioni/
  espressioni/
  numeri/
  si/
  grammar/                # Redirect to foundations/
```

---

## Navigation System (nav.js)

5 sections defined in `nav.js`:

| Section | Hub Page | Topics |
|---------|----------|--------|
| Verbs | index.html | All verb folders |
| Foundations | foundations/index.html | articoli, sostantivi, aggettivi, pronomi |
| Sentences | sentences/index.html | negazione, domande, avverbi, congiunzioni |
| Fluency | fluency/index.html | espressioni, numeri, si |
| Conversazione | conversazione/index.html | (standalone) |

`nav.js` auto-detects depth by checking if its `src` attribute is `"../nav.js"` (subfolder) or `"nav.js"` (root). It sets `prefix = "../"` accordingly for all links.

To add a topic to navigation, update the `phases` object in `nav.js`.

---

## Verb Page Architecture

Each verb page loads scripts in this order:
```html
<script src="../env.js"></script>      <!-- API key -->
<script src="../nav.js"></script>      <!-- Navigation bar -->
<script src="../chat.js"></script>     <!-- AI tutor -->
<div id="app"></div>
<script src="data.js"></script>        <!-- Verb data (sets global verbData) -->
<script src="../render.js"></script>   <!-- Reads verbData, renders into #app -->
```

`render.js` reads the global `verbData` and builds HTML using CSS classes from `style.css`:
- `.mood-section .mood-{id}` — mood containers (border-left color-coded)
- `.mood-title .{color}` — mood headers (green/yellow/blue/red/gray)
- `.tense-block` — individual tense containers
- `.conj-table` — conjugation tables
- `.ex-pair`, `.ex-it`, `.ex-en`, `.ex-pronoun`, `.ex-verb` — examples
- Example `{verb text}` in curly braces is converted to `<span class="ex-verb">verb text</span>`

---

## data.js Schema (Verb Data)

File must start with `const verbData = {`. No imports, no exports.

### Top-level structure:
```js
{
  verb: "parlare",          // lowercase infinitive
  meaning: "to speak",      // English
  type: "are"|"ere"|"ire",  // conjugation group
  info: {
    subtitle: "Regular -ARE verb",
    stem: "PARL-",
    auxiliary: "AVERE"|"ESSERE",
    gerundio: "parlando",
    participioPassato: "parlato",
    extra: ""               // compounds, expressions, or empty string
  },
  moods: [ /* 7 mood objects */ ],
  quickRef: [ /* 16 entries */ ]
}
```

### Moods array — exactly 7 objects in this order:

| Index | id | name | Tense count |
|-------|-----|------|------------|
| 0 | indicativo | INDICATIVO | 8 |
| 1 | congiuntivo | CONGIUNTIVO | 4 |
| 2 | condizionale | CONDIZIONALE | 2 |
| 3 | imperativo | IMPERATIVO | 1 |
| 4 | other | GERUNDIO | 2 |
| 5 | other | INFINITO | 1 |
| 6 | other | PARTICIPIO | 1 |

### Indicativo tenses (in order):
Presente, Imperfetto, Passato Remoto, Passato Prossimo, Trapassato Prossimo, Trapassato Remoto, Futuro Semplice, Futuro Anteriore

### Congiuntivo tenses:
Presente, Passato, Imperfetto, Trapassato

### Condizionale tenses:
Presente, Passato

### Pronoun formats by mood:

| Mood | Pronouns (6 rows) |
|------|-------------------|
| Indicativo, Condizionale | Io, Tu, Lui / Lei, Noi, Voi, Loro |
| Congiuntivo | (che) Io, (che) Tu, (che) Lui / Lei, (che) Noi, (che) Voi, (che) Loro |
| Imperativo (5 rows) | (Tu), (Lei) formal, (Noi), (Voi), (Loro) formal |
| Gerundio (1 row) | Gerundio presente / Gerundio passato |
| Infinito (2 rows) | Presente, Passato |
| Participio (2 rows, 3 cols) | Presente, Passato — each with a Note column |

### Tense object structure:
```js
{
  name: "Presente",          // string, or null for infinito/participio
  what: "HTML description",  // when/how to use this tense
  useFor: "optional",        // optional usage hint
  notes: ["string"],         // optional array of tips (use prefix: "💡" or "⚠️")
  headers: [...],            // ONLY for participio: ["Form", "Conjugation", "Note"]
  conjugations: [
    ["Pronoun", "<b>form</b>"],     // <b> tags highlight stems/endings
    ...
  ],
  examples: [
    { pronoun: "Io", it: "{Parlo} italiano ogni giorno.", en: "I speak Italian every day." },
    // 2 examples per tense (gerundio/infinito/participio may have 1-2)
    // {curly braces} around the conjugated verb — renderer highlights them
    // Aim for 8+ words per sentence for learning value
  ]
}
```

### quickRef — exactly 16 entries:
```js
{ tense: "Presente", idea: "now / habits", example: "Io parlo italiano." }
```
Order: Presente, Imperfetto, Passato Prossimo, Passato Remoto, Trapassato Prossimo, Trapassato Remoto, Futuro Semplice, Futuro Anteriore, Congiuntivo Presente, Congiuntivo Passato, Congiuntivo Imperfetto, Congiuntivo Trapassato, Condizionale Presente, Condizionale Passato, Imperativo, Gerundio.

---

## Italian Conjugation Rules

### Three conjugation groups

Stem = infinitive minus the ending (parlare -> parl-, vendere -> vend-, dormire -> dorm-).

### Regular endings for simple tenses:

**Presente:**
- -ARE: -o, -i, -a, -iamo, -ate, -ano
- -ERE: -o, -i, -e, -iamo, -ete, -ono
- -IRE: -o, -i, -e, -iamo, -ite, -ono

**Imperfetto:**
- -ARE: -avo, -avi, -ava, -avamo, -avate, -avano
- -ERE: -evo, -evi, -eva, -evamo, -evate, -evano
- -IRE: -ivo, -ivi, -iva, -ivamo, -ivate, -ivano

**Passato Remoto:**
- -ARE: -ai, -asti, -ò, -ammo, -aste, -arono
- -ERE: -ei, -esti, -é, -emmo, -este, -erono
- -IRE: -ii, -isti, -ì, -immo, -iste, -irono

**Futuro Semplice:**
- -ARE: -erò, -erai, -erà, -eremo, -erete, -eranno
- -ERE: -erò, -erai, -erà, -eremo, -erete, -eranno (same as -ARE)
- -IRE: -irò, -irai, -irà, -iremo, -irete, -iranno

**Condizionale Presente:**
- -ARE: -erei, -eresti, -erebbe, -eremmo, -ereste, -erebbero
- -ERE: same as -ARE
- -IRE: -irei, -iresti, -irebbe, -iremmo, -ireste, -irebbero

**Congiuntivo Presente:**
- -ARE: -i, -i, -i, -iamo, -iate, -ino
- -ERE: -a, -a, -a, -iamo, -iate, -ano
- -IRE: same as -ERE

**Congiuntivo Imperfetto:**
- -ARE: -assi, -assi, -asse, -assimo, -aste, -assero
- -ERE: -essi, -essi, -esse, -essimo, -este, -essero
- -IRE: -issi, -issi, -isse, -issimo, -iste, -issero

**Non-finite forms:**
- Gerundio: -ARE: -ando, -ERE: -endo, -IRE: -endo
- Participio presente: -ARE: -ante, -ERE: -ente, -IRE: -ente
- Participio passato: -ARE: -ato, -ERE: -uto, -IRE: -ito

### Compound tenses = auxiliary + past participle

The auxiliary verb (AVERE or ESSERE) is conjugated in a specific tense, then paired with the past participle:

| Compound tense | Auxiliary tense used |
|---------------|---------------------|
| Passato Prossimo | Presente of aux |
| Trapassato Prossimo | Imperfetto of aux |
| Trapassato Remoto | Passato Remoto of aux |
| Futuro Anteriore | Futuro Semplice of aux |
| Congiuntivo Passato | Congiuntivo Presente of aux |
| Congiuntivo Trapassato | Congiuntivo Imperfetto of aux |
| Condizionale Passato | Condizionale Presente of aux |
| Gerundio Passato | avendo/essendo + pp |
| Infinito Passato | avere/essere + pp |

**AVERE auxiliary forms:**
| Tense | io | tu | lui/lei | noi | voi | loro |
|-------|----|----|---------|-----|-----|------|
| Presente | ho | hai | ha | abbiamo | avete | hanno |
| Imperfetto | avevo | avevi | aveva | avevamo | avevate | avevano |
| Pass. Remoto | ebbi | avesti | ebbe | avemmo | aveste | ebbero |
| Futuro | avrò | avrai | avrà | avremo | avrete | avranno |
| Cong. Presente | abbia | abbia | abbia | abbiamo | abbiate | abbiano |
| Cong. Imperfetto | avessi | avessi | avesse | avessimo | aveste | avessero |
| Cond. Presente | avrei | avresti | avrebbe | avremmo | avreste | avrebbero |

**ESSERE auxiliary forms:**
| Tense | io | tu | lui/lei | noi | voi | loro |
|-------|----|----|---------|-----|-----|------|
| Presente | sono | sei | è | siamo | siete | sono |
| Imperfetto | ero | eri | era | eravamo | eravate | erano |
| Pass. Remoto | fui | fosti | fu | fummo | foste | furono |
| Futuro | sarò | sarai | sarà | saremo | sarete | saranno |
| Cong. Presente | sia | sia | sia | siamo | siate | siano |
| Cong. Imperfetto | fossi | fossi | fosse | fossimo | foste | fossero |
| Cond. Presente | sarei | saresti | sarebbe | saremmo | sareste | sarebbero |

**ESSERE agreement rule:** Past participle agrees with subject gender/number:
- andato (m.sg.), andata (f.sg.), andati (m.pl.), andate (f.pl.)
- In data.js, written as `andato/a` or `andato/a/i/e`

**AVERE:** Past participle is invariable (ho parlato, ha parlato, hanno parlato).

### Common irregularity patterns

1. **Alternate stems** — many irregular verbs use different stems for different tenses:
   - andare: AND- (regular), VAD- (presente/cong. presente), ANDR- (futuro/condizionale)
   - dire: DIC- (most tenses), DIR- (futuro/condizionale)
   - fare: FACC- (presente/cong.), FAC- (imperfetto), FEC-/F- (pass. remoto), FAR- (futuro/cond.)
   - venire: VIEN-/VENG- (presente), VERR- (futuro/condizionale)

2. **Irregular past participle** — affects ALL 9 compound tenses:
   - dire -> detto, fare -> fatto, essere -> stato, venire -> venuto
   - vedere -> visto, scrivere -> scritto, leggere -> letto, aprire -> aperto

3. **Irregular passato remoto** — often doubled consonants in io/lui/loro:
   - dire: dissi/disse/dissero, fare: feci/fece/fecero
   - tu/noi/voi often stay semi-regular on the DIC-/FAC- stem

4. **Cross-conjugation** — dire is -IRE but uses -ERE imperfetto endings (dicevo, not dicivo) because it descends from Latin dicere (-ERE).

5. **Contracted futuro/condizionale stems** — andare->andr-, volere->vorr-, potere->potr-, dovere->dovr-, venire->verr-, etc.

---

## Adding a New Verb — Step by Step

### 1. Generate the scaffold
```bash
node generate-verb.js <verb> "<meaning>"
# Example: node generate-verb.js parlare "to speak / to talk"
# Use --dry-run to preview without writing files
# Use --fallback to skip the online fetch (regular patterns only)
```
This fetches conjugations from italian-verbs.com, creates `<verb>/data.js` and copies `index.html` from an existing verb folder.

For **simple tenses**, conjugations are taken directly from the site (preserves irregularities). For **compound tenses**, they are built programmatically from the auxiliary + past participle (avoids the site sometimes showing passive forms).

### 2. Edit the generated data.js
The generator creates **placeholder examples** like `"(example needed)"`. Replace them with real, meaningful Italian sentences (8+ words). Each tense needs exactly 2 examples from different pronouns.

Also review:
- `info.subtitle` — adjust wording (e.g., "Irregular -IRE verb" vs "Regular -ARE verb")
- `info.extra` — add compounds, common expressions
- `notes` arrays — add learning tips where helpful
- `what` descriptions — customize for the specific verb
- `<b>` tag placement in conjugations — highlight stems and irregular endings

### 3. Validate
```bash
node validate.js <verb>        # structural + content checks
node verify-online.js <verb>   # cross-check against italian-verbs.com
```

### 4. Register in dist.js
Add an entry to the `verbs` array in `dist.js`:
```js
{ name: "parlare", meaning: "to speak / to talk", type: "are", regular: true, path: "parlare/index.html" },
```

---

## Validation (validate.js)

Checks performed:
- **Structure:** moods array length (7), tense counts, mood id/name values, conjugation row format
- **Pronouns:** correct pronoun format per mood (Io vs (che) Io vs (Tu))
- **Tense names:** indicativo tenses match expected order
- **Gerundio:** form matches expected ending, matches info.gerundio
- **Gerundio passato:** starts with "avendo" or "essendo"
- **Infinito:** presente matches verb name, passato starts with "avere" or "essere"
- **Participio passato:** regular ending check for regular verbs
- **Auxiliary consistency:** if info says AVERE, passato prossimo shouldn't use essere (and vice versa)
- **Example {verb} markup:** tokens inside {braces} should match a form in the conjugation table
- **Bold tag balance:** equal count of `<b>` and `</b>` tags
- **Duplicate sentences:** warns on repeated example sentences
- **Sentence length:** warns if examples are under 6 words
- **Consistent HTML:** warns if `what` fields use `<em>` instead of `<b>`

Exit code 1 if any errors. Warnings don't cause failure.

## Online Verification (verify-online.js)

Fetches the verb's conjugation page from italian-verbs.com and checks that every local conjugation form appears somewhere in the online data. Handles:
- Pronoun stripping
- Accent/apostrophe normalization (dì vs di')
- Compound form word matching
- Parenthesized alternatives: "devo (debbo)" tries both
- Slash agreement notation: "andato/a/i/e"

Adds a 300ms delay between verbs when checking multiple to avoid rate limiting.

---

## Topic Pages

Topic pages (articoli, sostantivi, pronomi, etc.) are **self-contained HTML** — they don't use a JS data object + renderer pattern like verb pages. Content is written directly in HTML using the same CSS classes from `style.css`:

```html
<link rel="stylesheet" href="../style.css">
<script src="../env.js"></script>
<script src="../nav.js"></script>
<script src="../chat.js"></script>

<div class="mood-section mood-indicativo">
  <div class="mood-title green">Section Title</div>
  <div class="mood-desc">Description</div>
  <div class="tense-block">
    <div class="tense-name">Subsection</div>
    <div class="scroll"><table class="conj-table">...</table></div>
  </div>
</div>
```

Topic pages range from ~500 to ~1200 lines. They use mood color classes for visual grouping:
- `.mood-indicativo` (green border) — main rules
- `.mood-congiuntivo` (yellow border) — secondary rules, study guides
- `.mood-condizionale` (blue border) — tips, notes
- `.mood-imperativo` (red border) — warnings, exceptions
- `.mood-other` (gray border) — reference, rare forms

---

## AI Features

### Floating Tutor (chat.js)
Present on every page. A blue FAB button that opens a chat panel. Sends page content as context (first 3000 chars of `#app` text). Uses Claude Sonnet for responses.

### Selection Toolbar (chat.js)
When text is selected (2-500 chars), a floating bar appears with:
- **Play** — Web Speech API TTS in Italian (it-IT, rate 0.9)
- **Translate** — Claude Haiku, returns only the translation
- **Ask AI** — Opens chat panel, sends "Translate & explain: ..." via Claude Sonnet

### Conversazione (conversazione/index.html)
WhatsApp-style group chat with 4 AI characters:
- **Marco** — 32, Roman chef, Roma fan, uses Roman slang (daje, aoo)
- **Giulia** — 28, Milanese fashion PR, modern slang (tipo, cioè, assurdo)
- **Luca** — 35, Neapolitan musician + D&D DM, Neapolitan expressions (uè, jamm)
- **Sofia** — 26, Florentine art history student, dry wit, proper Italian

Uses Claude Sonnet. Characters always speak Italian. Returns JSON array of messages. Conversations stored in localStorage. Each message has translate (Haiku) and speak (TTS) buttons.

All API calls use `anthropic-dangerous-direct-browser-access: true` header for direct browser access.

---

## Test System

Mid-topic quizzes that drill the material after a study page. Spec: `TEST_SPEC.md`.

### Architecture
- File: `<topic>/test.html` (e.g. `articoli/test.html`)
- Self-contained HTML page with inline `<script>` and `<style>`
- Loads shared assets: `../style.css`, `../env.js`, `../nav.js`, `../chat.js`
- Quiz data defined as a `var testData = {...}` object in inline script
- Self-contained rendering + scoring engine — no shared test renderer

### Question data format
```js
var testData = {
  title: "Articles Test",
  topic: "articoli",          // folder name for "Review" link
  topicLabel: "Articles",
  sections: [
    {
      name: "Section Name",
      desc: "What this section tests.",
      color: "green",         // matches mood color classes
      questions: [
        {
          prompt: "___ libro",            // ___ is the gap placeholder
          hint: "(the book)",             // English hint in italics
          options: ["il", "lo", "la"],    // 2-5 multiple choice options
          correct: 0,                     // index of correct option
          explain: "Rule explanation with <b>bold</b> for key terms."
        }
      ]
    }
  ]
};
```

### Question types
Fill the gap (`___ libro`), gender snap (`problema` -> Maschile/Femminile), contraction builder (`a + il = ?`), full sentence completion, error spotting.

### UX flow — two views
**Map view** (home screen):
1. Grid of clickable question cards, grouped by section with section headers
2. Cards are color-coded: white = unanswered, green = correct, red = wrong
3. Wrong cards show "your answer -> correct answer" tag
4. Progress bar at top (green/red gradient), stats: answered / correct / wrong
5. "Continue (N remaining)" button jumps to next unanswered question
6. When all answered: summary banner with percentage and grade
7. "Reset Progress" clears localStorage and starts over

**Question view** (click any card):
1. Shows the question with multiple choice buttons
2. If unanswered: pick an answer, get instant green/red feedback + explanation
3. If already answered: shows the result in read-only (can review explanation)
4. Navigation: "All Questions" (back to map), Prev/Next arrows, "Next Unanswered"
5. After answering, state is saved to localStorage immediately

### Persistence
- State saved to `localStorage` under key `test_<topic>` (e.g. `test_articoli`)
- Format: `{ "0": { "yourAnswer": 2, "correct": true }, "3": { ... } }` — sparse object keyed by question index
- Loaded on page open, saved after every answer
- "Reset Progress" clears the key with confirmation prompt

### Section structure (target 40-50 questions per test)
| Section | Purpose | Count |
|---------|---------|-------|
| 1 | Warm-up / prerequisite skill | 6-8 |
| 2 | Core skill — basic forms | 8-10 |
| 3 | Core skill — variant forms | 6-8 |
| 4 | Related forms | 6-8 |
| 5 | Applied skill — combinations | 8-10 |
| 6 | Mixed challenge — all types | 8-10 |

### Adding a test to a topic
1. Create `<topic>/test.html` following the pattern in `articoli/test.html`
2. Add a "Take the test" link at the bottom of the topic's `index.html`
3. Questions should test what the page actually teaches — read the content first

### Existing tests
- `articoli/test.html` — 54 questions: gender recognition, definite/indefinite/partitive articles, preposizioni articolate, mixed sentences

---

## Verb Conjugation Drill (drill.html)

Root-level page for typing conjugations from memory. Loads `dist.js` for the verb list and fetches each verb's `data.js` dynamically via `fetch()` + `new Function()`.

### Three screens
1. **Setup** — pick verbs (click to toggle, "Select All" / "Irregular Only"), pick tense preset, pick question count, start
2. **Drill** — big prompt (VERB — Tense — Pronoun), text input, accent helper bar (à è é ì ò ù), Check/Skip buttons, instant feedback, streak counter
3. **Results** — score percentage, per-verb breakdown, mistakes list, "Retry Mistakes" / "Drill Again" / "New Setup"

### Tense presets
- **Most Used (5):** Presente, Imperfetto, Passato Prossimo, Futuro Semplice, Condizionale Presente
- **Simple Tenses:** all non-compound (Presente, Imperfetto, Passato Remoto, Futuro, Cong. Presente, Cong. Imperfetto, Cond. Presente, Imperativo)
- **Compound Tenses:** all auxiliary + past participle tenses
- **All Tenses:** everything including gerundio/infinito/participio

### Answer checking — three-tier
1. **Exact match** → green, "Correct!"
2. **Accent-stripped match** (user typed "parlo" but answer is "parlò") → yellow, "Close! Watch the accent: parlò"
3. **No match** → red, shows correct answer

### Answer expansion
Handles all notation from verb data.js files:
- Slash variants: `andato/a/i/e` → accepts andato, andata, andati, andate
- Slash alternatives: `va' / vai` → accepts either
- Parenthesized alternatives: `devo (debbo)` → accepts both
- Strips HTML tags, exclamation marks, dashes

### Data loading
```js
async function loadVerbData(name) {
  var res = await fetch(name + "/data.js");
  var code = await res.text();
  return new Function(code + "\nreturn verbData;")();
}
```

---

## Conventions

- **No build step.** All files are served directly. No transpilation, no modules.
- **Global scope.** `data.js` uses `const verbData = ...` as a global. `render.js` reads it on DOMContentLoaded.
- **`var` in nav.js/chat.js** for broad browser compatibility. `const`/`let` in data.js files.
- **Accented characters required:** à, è, é, ì, ò, ù — never ASCII substitutes.
- **HTML in conjugation strings:** `<b>` tags highlight stems/endings. No other HTML tags in conjugation cells.
- **{curly braces} in examples:** wrap the conjugated verb form. Renderer converts to `<span class="ex-verb">`.
- **env.js is committable.** It holds no secret — it reads the API key from `localStorage` (key `claude_api_key`). Each user enters their own key via the chat panel's 🔑 button or `setClaudeKey("...")` in the console.
- **index.html per verb folder** is identical except for the `<title>` tag. Copy from any existing verb.
