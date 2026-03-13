// ═══════════════════════════════════════════════════════════════════
//  VERB DATA TEMPLATE
//  Copy this file to <verb>/data.js and fill in all __PLACEHOLDER__ values.
//  Do NOT rename the variable — it MUST be `const verbData`.
//  Do NOT change the structure — the renderer depends on this exact shape.
// ═══════════════════════════════════════════════════════════════════

const verbData = {
  // ── TOP-LEVEL (required) ──────────────────────────────────────
  verb: "__VERB__",                     // e.g. "dire"
  meaning: "__ENGLISH_MEANING__",       // e.g. "to say / to tell"
  type: "__TYPE__",                     // "are" | "ere" | "ire"

  // ── INFO BLOCK (required) ─────────────────────────────────────
  info: {
    subtitle: "__SUBTITLE__",           // e.g. "Irregular -IRE verb (from Latin: <b>dicere</b>)"
    stem: "__STEM__",                   // e.g. "DIC-" — can list multiple: "DIC- / DIR-"
    auxiliary: "__AUXILIARY__",          // "AVERE" | "ESSERE" | "AVERE (or ESSERE with essere-verbs)"
    gerundio: "__GERUNDIO__",           // e.g. "dicendo"
    participioPassato: "__PARTICIPIO__",// e.g. "detto (irregular)"
    extra: "__EXTRA_NOTES__"            // compounds, common expressions, or "" if none
  },

  // ── MOODS (array of 7 mood objects — order matters!) ──────────
  moods: [

    // ┌──────────────────────────────────────────────────────────┐
    // │  1. INDICATIVO — 8 tenses                                │
    // └──────────────────────────────────────────────────────────┘
    {
      id: "indicativo",
      name: "INDICATIVO",
      nameEn: "Indicative",
      emoji: "🟢",
      color: "green",
      description: "Reality, facts, certainty — what actually happens, happened, or will happen.",
      tenses: [

        // ── 1.1 Presente ────────────────────────────────────────
        {
          name: "Presente",
          what: "__WHAT_IT_IS_HTML__",
          // notes: [] is optional — include only when there's something worth flagging
          notes: ["__OPTIONAL_NOTE__"],
          conjugations: [
            ["Io",        "__FORM__"],
            ["Tu",        "__FORM__"],
            ["Lui / Lei", "__FORM__"],
            ["Noi",       "__FORM__"],
            ["Voi",       "__FORM__"],
            ["Loro",      "__FORM__"]
          ],
          examples: [
            { pronoun: "__PRONOUN__", it: "__ITALIAN_SENTENCE_WITH_{VERB}_IN_BRACES__", en: "__ENGLISH_TRANSLATION__" },
            { pronoun: "__PRONOUN__", it: "__ITALIAN_SENTENCE_WITH_{VERB}_IN_BRACES__", en: "__ENGLISH_TRANSLATION__" }
          ]
        },

        // ── 1.2 Imperfetto ──────────────────────────────────────
        {
          name: "Imperfetto",
          what: "__WHAT_IT_IS_HTML__",
          useFor: "__OPTIONAL_USE_FOR__",   // optional — e.g. "Use it for: habits in the past..."
          conjugations: [
            ["Io",        "__FORM__"],
            ["Tu",        "__FORM__"],
            ["Lui / Lei", "__FORM__"],
            ["Noi",       "__FORM__"],
            ["Voi",       "__FORM__"],
            ["Loro",      "__FORM__"]
          ],
          examples: [
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" },
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        },

        // ── 1.3 Passato Remoto ──────────────────────────────────
        {
          name: "Passato Remoto",
          what: "__WHAT_IT_IS_HTML__",
          conjugations: [
            ["Io",        "__FORM__"],
            ["Tu",        "__FORM__"],
            ["Lui / Lei", "__FORM__"],
            ["Noi",       "__FORM__"],
            ["Voi",       "__FORM__"],
            ["Loro",      "__FORM__"]
          ],
          examples: [
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" },
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        },

        // ── 1.4 Passato Prossimo ────────────────────────────────
        {
          name: "Passato Prossimo",
          what: "__WHAT_IT_IS_HTML__",
          conjugations: [
            ["Io",        "__AUX__ __PARTICIPIO__"],
            ["Tu",        "__AUX__ __PARTICIPIO__"],
            ["Lui / Lei", "__AUX__ __PARTICIPIO__"],
            ["Noi",       "__AUX__ __PARTICIPIO__"],
            ["Voi",       "__AUX__ __PARTICIPIO__"],
            ["Loro",      "__AUX__ __PARTICIPIO__"]
          ],
          examples: [
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" },
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        },

        // ── 1.5 Trapassato Prossimo ─────────────────────────────
        {
          name: "Trapassato Prossimo",
          what: "__WHAT_IT_IS_HTML__",
          conjugations: [
            ["Io",        "__IMPF_AUX__ __PARTICIPIO__"],
            ["Tu",        "__IMPF_AUX__ __PARTICIPIO__"],
            ["Lui / Lei", "__IMPF_AUX__ __PARTICIPIO__"],
            ["Noi",       "__IMPF_AUX__ __PARTICIPIO__"],
            ["Voi",       "__IMPF_AUX__ __PARTICIPIO__"],
            ["Loro",      "__IMPF_AUX__ __PARTICIPIO__"]
          ],
          examples: [
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" },
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        },

        // ── 1.6 Trapassato Remoto ───────────────────────────────
        {
          name: "Trapassato Remoto",
          what: "__WHAT_IT_IS_HTML__",
          conjugations: [
            ["Io",        "__PR_AUX__ __PARTICIPIO__"],
            ["Tu",        "__PR_AUX__ __PARTICIPIO__"],
            ["Lui / Lei", "__PR_AUX__ __PARTICIPIO__"],
            ["Noi",       "__PR_AUX__ __PARTICIPIO__"],
            ["Voi",       "__PR_AUX__ __PARTICIPIO__"],
            ["Loro",      "__PR_AUX__ __PARTICIPIO__"]
          ],
          examples: [
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" },
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        },

        // ── 1.7 Futuro Semplice ─────────────────────────────────
        {
          name: "Futuro Semplice",
          what: "__WHAT_IT_IS_HTML__",
          conjugations: [
            ["Io",        "__FORM__"],
            ["Tu",        "__FORM__"],
            ["Lui / Lei", "__FORM__"],
            ["Noi",       "__FORM__"],
            ["Voi",       "__FORM__"],
            ["Loro",      "__FORM__"]
          ],
          examples: [
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" },
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        },

        // ── 1.8 Futuro Anteriore ────────────────────────────────
        {
          name: "Futuro Anteriore",
          what: "__WHAT_IT_IS_HTML__",
          conjugations: [
            ["Io",        "__FUT_AUX__ __PARTICIPIO__"],
            ["Tu",        "__FUT_AUX__ __PARTICIPIO__"],
            ["Lui / Lei", "__FUT_AUX__ __PARTICIPIO__"],
            ["Noi",       "__FUT_AUX__ __PARTICIPIO__"],
            ["Voi",       "__FUT_AUX__ __PARTICIPIO__"],
            ["Loro",      "__FUT_AUX__ __PARTICIPIO__"]
          ],
          examples: [
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" },
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        }
      ]
    },

    // ┌──────────────────────────────────────────────────────────┐
    // │  2. CONGIUNTIVO — 4 tenses                               │
    // └──────────────────────────────────────────────────────────┘
    {
      id: "congiuntivo",
      name: "CONGIUNTIVO",
      nameEn: "Subjunctive",
      emoji: "🟡",
      color: "yellow",
      description: "Doubt, opinion, emotion, subjectivity — almost always triggered by \"che\" and key verbs like pensare, credere, volere, sperare...",
      tenses: [
        {
          name: "Presente",
          what: "__WHAT__",
          conjugations: [
            ["(che) Io",        "__FORM__"],
            ["(che) Tu",        "__FORM__"],
            ["(che) Lui / Lei", "__FORM__"],
            ["(che) Noi",       "__FORM__"],
            ["(che) Voi",       "__FORM__"],
            ["(che) Loro",      "__FORM__"]
          ],
          examples: [
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" },
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        },
        {
          name: "Passato",
          what: "__WHAT__",
          conjugations: [
            ["(che) Io",        "__CONG_AUX__ __PARTICIPIO__"],
            ["(che) Tu",        "__CONG_AUX__ __PARTICIPIO__"],
            ["(che) Lui / Lei", "__CONG_AUX__ __PARTICIPIO__"],
            ["(che) Noi",       "__CONG_AUX__ __PARTICIPIO__"],
            ["(che) Voi",       "__CONG_AUX__ __PARTICIPIO__"],
            ["(che) Loro",      "__CONG_AUX__ __PARTICIPIO__"]
          ],
          examples: [
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" },
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        },
        {
          name: "Imperfetto",
          what: "__WHAT__",
          conjugations: [
            ["(che) Io",        "__FORM__"],
            ["(che) Tu",        "__FORM__"],
            ["(che) Lui / Lei", "__FORM__"],
            ["(che) Noi",       "__FORM__"],
            ["(che) Voi",       "__FORM__"],
            ["(che) Loro",      "__FORM__"]
          ],
          examples: [
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" },
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        },
        {
          name: "Trapassato",
          what: "__WHAT__",
          conjugations: [
            ["(che) Io",        "__IMPF_CONG_AUX__ __PARTICIPIO__"],
            ["(che) Tu",        "__IMPF_CONG_AUX__ __PARTICIPIO__"],
            ["(che) Lui / Lei", "__IMPF_CONG_AUX__ __PARTICIPIO__"],
            ["(che) Noi",       "__IMPF_CONG_AUX__ __PARTICIPIO__"],
            ["(che) Voi",       "__IMPF_CONG_AUX__ __PARTICIPIO__"],
            ["(che) Loro",      "__IMPF_CONG_AUX__ __PARTICIPIO__"]
          ],
          examples: [
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" },
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        }
      ]
    },

    // ┌──────────────────────────────────────────────────────────┐
    // │  3. CONDIZIONALE — 2 tenses                              │
    // └──────────────────────────────────────────────────────────┘
    {
      id: "condizionale",
      name: "CONDIZIONALE",
      nameEn: "Conditional",
      emoji: "🔵",
      color: "blue",
      description: "What would happen — hypothetical situations, polite requests, wishes.",
      tenses: [
        {
          name: "Presente",
          what: "__WHAT__",
          conjugations: [
            ["Io",        "__FORM__"],
            ["Tu",        "__FORM__"],
            ["Lui / Lei", "__FORM__"],
            ["Noi",       "__FORM__"],
            ["Voi",       "__FORM__"],
            ["Loro",      "__FORM__"]
          ],
          examples: [
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" },
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        },
        {
          name: "Passato",
          what: "__WHAT__",
          conjugations: [
            ["Io",        "__COND_AUX__ __PARTICIPIO__"],
            ["Tu",        "__COND_AUX__ __PARTICIPIO__"],
            ["Lui / Lei", "__COND_AUX__ __PARTICIPIO__"],
            ["Noi",       "__COND_AUX__ __PARTICIPIO__"],
            ["Voi",       "__COND_AUX__ __PARTICIPIO__"],
            ["Loro",      "__COND_AUX__ __PARTICIPIO__"]
          ],
          examples: [
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" },
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        }
      ]
    },

    // ┌──────────────────────────────────────────────────────────┐
    // │  4. IMPERATIVO — 1 tense                                 │
    // └──────────────────────────────────────────────────────────┘
    {
      id: "imperativo",
      name: "IMPERATIVO",
      nameEn: "Imperative",
      emoji: "🔴",
      color: "red",
      description: "Commands and instructions — telling someone to do something directly.",
      tenses: [
        {
          name: "Imperativo",
          what: "__WHAT__",
          conjugations: [
            ["(Tu)",          "__FORM__"],
            ["(Lei) formal",  "__FORM__"],
            ["(Noi)",         "__FORM__"],
            ["(Voi)",         "__FORM__"],
            ["(Loro) formal", "__FORM__"]
          ],
          examples: [
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" },
            { pronoun: "__PRONOUN__", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        }
      ]
    },

    // ┌──────────────────────────────────────────────────────────┐
    // │  5. GERUNDIO — 2 tenses                                  │
    // └──────────────────────────────────────────────────────────┘
    {
      id: "other",
      name: "GERUNDIO",
      nameEn: "Gerund",
      emoji: "⚪",
      color: "gray",
      description: "Ongoing or simultaneous actions — like \"-ing\" in English.",
      tenses: [
        {
          name: "Presente",
          what: "__WHAT__",
          conjugations: [["Gerundio presente", "<b>__GERUNDIO_PRESENTE__</b>"]],
          examples: [
            { pronoun: "", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        },
        {
          name: "Passato",
          what: "__WHAT__",
          conjugations: [["Gerundio passato", "<b>__GERUNDIO_PASSATO__</b>"]],
          examples: [
            { pronoun: "", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        }
      ]
    },

    // ┌──────────────────────────────────────────────────────────┐
    // │  6. INFINITO — 1 tense (name: null)                      │
    // └──────────────────────────────────────────────────────────┘
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
          conjugations: [
            ["Presente", "<b>__INFINITO_PRESENTE__</b>"],
            ["Passato",  "<b>__INFINITO_PASSATO__</b>"]
          ],
          examples: [
            { pronoun: "", it: "__SENTENCE__", en: "__TRANSLATION__" },
            { pronoun: "", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        }
      ]
    },

    // ┌──────────────────────────────────────────────────────────┐
    // │  7. PARTICIPIO — 1 tense (name: null, has headers)       │
    // └──────────────────────────────────────────────────────────┘
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
          headers: ["Form", "Conjugation", "Note"],
          conjugations: [
            ["Presente", "<b>__PARTICIPIO_PRESENTE__</b>", "__NOTE_ABOUT_PRESENTE__"],
            ["Passato",  "<b>__PARTICIPIO_PASSATO__</b>",  "__NOTE_ABOUT_PASSATO__"]
          ],
          examples: [
            { pronoun: "", it: "__SENTENCE__", en: "__TRANSLATION__" }
          ]
        }
      ]
    }
  ],

  // ── QUICK REFERENCE (exactly 16 entries) ──────────────────────
  quickRef: [
    { tense: "Presente",               idea: "__SHORT_IDEA__", example: "__SHORT_EXAMPLE__" },
    { tense: "Imperfetto",             idea: "__SHORT_IDEA__", example: "__SHORT_EXAMPLE__" },
    { tense: "Passato Prossimo",       idea: "__SHORT_IDEA__", example: "__SHORT_EXAMPLE__" },
    { tense: "Passato Remoto",         idea: "__SHORT_IDEA__", example: "__SHORT_EXAMPLE__" },
    { tense: "Trapassato Prossimo",    idea: "__SHORT_IDEA__", example: "__SHORT_EXAMPLE__" },
    { tense: "Trapassato Remoto",      idea: "__SHORT_IDEA__", example: "__SHORT_EXAMPLE__" },
    { tense: "Futuro Semplice",        idea: "__SHORT_IDEA__", example: "__SHORT_EXAMPLE__" },
    { tense: "Futuro Anteriore",       idea: "__SHORT_IDEA__", example: "__SHORT_EXAMPLE__" },
    { tense: "Congiuntivo Presente",   idea: "__SHORT_IDEA__", example: "__SHORT_EXAMPLE__" },
    { tense: "Congiuntivo Passato",    idea: "__SHORT_IDEA__", example: "__SHORT_EXAMPLE__" },
    { tense: "Congiuntivo Imperfetto", idea: "__SHORT_IDEA__", example: "__SHORT_EXAMPLE__" },
    { tense: "Congiuntivo Trapassato", idea: "__SHORT_IDEA__", example: "__SHORT_EXAMPLE__" },
    { tense: "Condizionale Presente",  idea: "__SHORT_IDEA__", example: "__SHORT_EXAMPLE__" },
    { tense: "Condizionale Passato",   idea: "__SHORT_IDEA__", example: "__SHORT_EXAMPLE__" },
    { tense: "Imperativo",            idea: "__SHORT_IDEA__", example: "__SHORT_EXAMPLE__" },
    { tense: "Gerundio",              idea: "__SHORT_IDEA__", example: "__SHORT_EXAMPLE__" }
  ]
};
