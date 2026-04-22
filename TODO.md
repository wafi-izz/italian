# Feature Roadmap

## High Priority — Active Recall & Production

- [x] **Verb Conjugation Drill** — Type-the-answer drill for verb conjugations. Prompt: "dire — Passato Prossimo — Io" → user types "ho detto". Root-level `drill.html`, loads any verb's data.js dynamically. Setup screen with verb/tense/count selection, accent helper bar, streak tracking, retry mistakes.

- [ ] **Spaced Repetition Review Queue** — Resurface wrong answers after 1d, 3d, 7d, etc. Store `{ questionId, nextReviewDate, interval, easeFactor }` in localStorage. Single `review.html` page pulls due items across all topics.

- [ ] **Daily Practice Mix** — "Practice Today" page: 10-15 questions pulled from spaced repetition queue + random verb conjugations + random grammar questions. One entry point for daily study.

## High Priority — Listening & Comprehension

- [ ] **Dictation Mode** — TTS speaks an Italian sentence, user types what they hear. Use existing example sentences from verb data + topic pages. Fuzzy match grading with accent tolerance.

- [ ] **Listening Mode for Conversazione** — Messages start hidden, hear audio first, tap to reveal text. Toggle on existing conversazione page.

## Medium Priority — Practice Variety

- [ ] **Sentence Builder / Word Order** — Scrambled Italian sentence + English translation, arrange words in correct order. Pull from existing example sentences. Tests word order, preposition placement, pronoun order.

- [ ] **Flashcard Mode per Topic** — Cycle through grammar forms (articles, pronouns, prepositions). Show one side, tap to flip. Toggle button on each topic page or separate view.

- [ ] **Fill-in Typing for Tests** — New question type where user types the answer instead of multiple choice. Mix ~20% typing questions into existing test framework. String comparison with accent tolerance.

## Medium Priority — Progress & Motivation

- [ ] **Global Progress Dashboard** — Page showing: topics studied, test scores, verbs drilled, review queue status, streak counter. All from localStorage.

- [ ] **Topic Completion Indicators** — Show checkmark/progress ring on phase hub topic cards based on test_<topic> localStorage data.

## Nice to Have

- [ ] **Grammar Error Detection Game** — Show Italian sentence with one error. User taps the wrong word and picks the fix. Good for articles, agreement, preposition contractions.

- [ ] **Contextual Practice Links on Verb Pages** — "Practice this verb" links at bottom of each verb page: drill mode, cloze sentences using existing examples array.

- [ ] **Comparison Tables** — Side-by-side pages for confused pairs: essere vs stare, sapere vs conoscere, passato prossimo vs imperfetto, per vs da.

- [ ] **Export / Share Score** — "Copy results" button that formats test scores as text for sharing.

## Done

- [x] **Verb Conjugation Pages** — 14 verbs with full data.js + render.js system
- [x] **Grammar Topic Pages** — 11 topics across 3 phases (Foundations, Sentences, Fluency)
- [x] **AI Tutor Chat** — Floating chat on every page with page context
- [x] **Selection Toolbar** — Highlight text to play TTS, translate (Haiku), or ask AI (Sonnet)
- [x] **Conversazione** — WhatsApp-style group chat with 4 Italian characters
- [x] **Test System** — Map view with card grid, localStorage persistence, per-question AI explanations
- [x] **Articles Test** — 54 questions across 6 sections with AI explain button
- [x] **CLI Tools** — generate-verb.js, validate.js, verify-online.js
