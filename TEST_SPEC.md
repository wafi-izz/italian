# Test System Specification

Mid-topic quizzes that drill the material after a study page. Each topic can have a `test.html` in its folder.

---

## Architecture

- File: `<topic>/test.html` (e.g. `articoli/test.html`)
- Self-contained HTML page with inline `<script>` and `<style>`
- Loads shared assets: `../style.css`, `../env.js`, `../nav.js`, `../chat.js`
- Quiz data defined as a JS array in an inline script block
- No external dependencies, no build step

---

## Question Data Format

```js
var testData = {
  title: "Articles Test",
  topic: "articoli",            // folder name — used for "Review" link
  topicLabel: "Articles",
  sections: [
    {
      name: "Section Name",
      desc: "Short description of what this section tests.",
      color: "green",           // mood color class for the section header
      questions: [
        {
          prompt: "The question text or sentence with ___ gap.",
          hint: "(English translation or clarification)",
          options: ["a", "b", "c", "d"],   // 2-5 choices
          correct: 0,                       // index into options
          explain: "Why the correct answer is correct. Mention the rule."
        }
      ]
    }
  ]
};
```

---

## Question Types

| Type | prompt format | Example |
|------|--------------|---------|
| Fill the gap | `___ libro è bello.` | Pick: il / lo / la / l' |
| Gender snap | `problema` | Pick: Maschile / Femminile |
| Contraction builder | `a + il = ?` | Pick: al / allo / alla / all' |
| Error spotting | `"Il studente è bravo"` | Pick the correct fix |
| Full sentence | `Vado ___ stadio.` | Pick: al / allo / alla / nello |
| Translation choice | `"I'd like some bread"` | Pick the Italian translation |

---

## UX Behavior — Two Views

### Map View (home screen, default)
The test opens to a **grid of question cards** grouped by section.

1. **Card grid.** Each question is a small card showing: question number, prompt preview, and status.
2. **Color-coded cards:**
   - White/light border = unanswered
   - Green border + background = answered correctly (shows the answer)
   - Red border + background = answered wrong (shows "your answer -> correct answer")
3. **Click any card** to open that question (jump to any question, in any order).
4. **Progress bar** at top: green/red gradient showing correct vs wrong ratio.
5. **Stats line** below progress: "X / Y answered" + "N correct" + "N wrong".
6. **"Continue (N remaining)"** button jumps to the next unanswered question.
7. **Section headers** with per-section score (e.g. "5/8") once any questions in that section are answered.
8. **Summary banner** appears when all questions are answered: percentage, grade, message.
9. **"Reset Progress"** button clears localStorage (with confirmation).

### Question View (click a card)
1. **Shows the question** with multiple choice buttons.
2. **If unanswered:** pick an answer, get instant green/red feedback + explanation.
3. **If already answered:** read-only review — shows what you picked, correct answer highlighted, explanation visible.
4. **Navigation buttons:** "All Questions" (back to map), Prev/Next arrows, "Next Unanswered" (skips to next gap).
5. **After answering**, state is saved to localStorage immediately and the view re-renders in answered state.

### Persistence (localStorage)
- Key: `test_<topic>` (e.g. `test_articoli`)
- Format: `{ "0": { "yourAnswer": 2, "correct": true }, "3": { ... } }` — sparse object keyed by question index
- Loaded on page open, saved after every answer
- User can close the tab and come back later — progress is preserved
- "Reset Progress" button clears the key

---

## Section Design Guidelines

| Section | Purpose | Question count |
|---------|---------|---------------|
| 1 | Warm-up — prerequisite skill (e.g. gender for articles) | 6-8 |
| 2 | Core skill — basic forms | 8-10 |
| 3 | Core skill — variant forms | 6-8 |
| 4 | Core skill — related forms | 6-8 |
| 5 | Applied skill — combinations/contractions | 8-10 |
| 6 | Mixed — full sentences, all types | 8-10 |

Target: **40-50 questions** per test. Long enough to drill, sectioned to not feel like a wall.

---

## Trap Questions

Every test should deliberately include common learner mistakes:

- **Articles:** lo vs il (complex sound triggers), l' for both genders, masculine nouns ending in -a (problema, sistema), feminine nouns ending in -e (notte, chiave)
- **Contractions:** knowing which prepositions contract (a/da/di/in/su = yes, con = no)
- **Partitive vs indefinite:** del pane (some bread) vs un pane (a bread/loaf)

---

## Styling

Test pages reuse `style.css` base classes and add test-specific styles inline:
- `.test-progress` — progress bar at top
- `.test-question` — question card (uses `.tense-block` as base)
- `.test-option` — clickable answer button
- `.test-option.correct` — green highlight
- `.test-option.wrong` — red highlight
- `.test-explain` — explanation text after answering
- `.test-summary` — final results card

Colors follow the project palette: green for correct (#43a047), red for wrong (#e53935), blue for primary (#1e88e5).

---

## Linking

- Add a "Take the test" link/button at the bottom of the topic's `index.html`
- The test page links back to the topic page for review
- Phase hub pages can show test status (future: localStorage tracking)
