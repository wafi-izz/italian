const verbData = {
  verb: "sapere",
  meaning: "to know (facts / how to)",
  type: "ere",
  info: {
    subtitle: "Irregular -ERE verb",
    stem: "SA- / SAPP- / SAPR-",
    auxiliary: "AVERE",
    gerundio: "sapendo",
    participioPassato: "saputo",
    extra: "Sapere = to know facts/information or to know how to. NOT for knowing people (use 'conoscere'). 'Sapere + infinitive' = to know how to do something."
  },

  moods: [

    // ===== INDICATIVO =====
    {
      id: "indicativo",
      name: "INDICATIVO",
      nameEn: "Indicative",
      emoji: "🟢",
      color: "green",
      description: "Reality, facts, certainty — used for statements about what is, was, or will be known.",
      tenses: [
        {
          name: "Presente",
          what: "What you <b>know right now</b> — facts, abilities, information you currently possess.",
          notes: [
            "Highly irregular: so, sai, sa, sanno — none follow the regular -ere pattern.",
            "Sapere + infinitive = to know how to: 'So nuotare' (I know how to swim).",
            "Do NOT use sapere for knowing people or places — use 'conoscere' instead."
          ],
          conjugations: [
            ["Io", "<b>so</b>"],
            ["Tu", "<b>sai</b>"],
            ["Lui / Lei", "<b>sa</b>"],
            ["Noi", "<b>sappiamo</b>"],
            ["Voi", "<b>sapete</b>"],
            ["Loro", "<b>sanno</b>"]
          ],
          examples: [
            { pronoun: "Io", it: "{So} parlare tre lingue.", en: "I know how to speak three languages." },
            { pronoun: "Tu", it: "{Sai} dove abita Marco?", en: "Do you know where Marco lives?" }
          ]
        },
        {
          name: "Imperfetto",
          what: "What you <b>used to know</b> or <b>knew as an ongoing state</b> in the past.",
          notes: [
            "Completely regular — follows standard -ere conjugation on the stem 'sap-'.",
            "Used for background knowledge or ongoing states of knowing in the past."
          ],
          conjugations: [
            ["Io", "<b>sapevo</b>"],
            ["Tu", "<b>sapevi</b>"],
            ["Lui / Lei", "<b>sapeva</b>"],
            ["Noi", "<b>sapevamo</b>"],
            ["Voi", "<b>sapevate</b>"],
            ["Loro", "<b>sapevano</b>"]
          ],
          examples: [
            { pronoun: "Io", it: "Non {sapevo} che eri qui.", en: "I didn't know you were here." },
            { pronoun: "Lui / Lei", it: "{Sapeva} guidare fin da giovane.", en: "He knew how to drive since he was young." }
          ]
        },
        {
          name: "Passato Remoto",
          what: "The moment you <b>found out / learned</b> something — a completed, distant past discovery.",
          notes: [
            "Irregular with doubled-p in io/lui/loro: seppi, seppe, seppero.",
            "Tu/noi/voi follow a more regular pattern: sapesti, sapemmo, sapeste.",
            "In the passato remoto, sapere often means 'found out' or 'learned' (a punctual discovery)."
          ],
          conjugations: [
            ["Io", "<b>seppi</b>"],
            ["Tu", "<b>sapesti</b>"],
            ["Lui / Lei", "<b>seppe</b>"],
            ["Noi", "<b>sapemmo</b>"],
            ["Voi", "<b>sapeste</b>"],
            ["Loro", "<b>seppero</b>"]
          ],
          examples: [
            { pronoun: "Io", it: "{Seppi} la verità solo dopo molti anni.", en: "I found out the truth only after many years." },
            { pronoun: "Loro", it: "{Seppero} affrontare la crisi con coraggio.", en: "They knew how to face the crisis with courage." }
          ]
        },
        {
          name: "Passato Prossimo",
          what: "Something you <b>found out / heard about</b> — a completed recent discovery.",
          notes: [
            "Uses auxiliary AVERE + participio passato 'saputo'.",
            "In the passato prossimo, sapere often means 'found out / heard about' — a completed discovery."
          ],
          conjugations: [
            ["Io", "<b>ho saputo</b>"],
            ["Tu", "<b>hai saputo</b>"],
            ["Lui / Lei", "<b>ha saputo</b>"],
            ["Noi", "<b>abbiamo saputo</b>"],
            ["Voi", "<b>avete saputo</b>"],
            ["Loro", "<b>hanno saputo</b>"]
          ],
          examples: [
            { pronoun: "Io", it: "{Ho saputo} che ti sei laureato — complimenti!", en: "I heard that you graduated — congratulations!" },
            { pronoun: "Tu", it: "{Hai saputo} dell'incidente di ieri?", en: "Did you hear about yesterday's accident?" }
          ]
        },
        {
          name: "Trapassato Prossimo",
          what: "Something you <b>had found out / had known</b> before another past event.",
          notes: [
            "Formed with the imperfetto of avere + saputo.",
            "Expresses knowledge or discovery that occurred before another past event."
          ],
          conjugations: [
            ["Io", "<b>avevo saputo</b>"],
            ["Tu", "<b>avevi saputo</b>"],
            ["Lui / Lei", "<b>aveva saputo</b>"],
            ["Noi", "<b>avevamo saputo</b>"],
            ["Voi", "<b>avevate saputo</b>"],
            ["Loro", "<b>avevano saputo</b>"]
          ],
          examples: [
            { pronoun: "Io", it: "Non {avevo saputo} nulla prima di quel momento.", en: "I hadn't found out anything before that moment." },
            { pronoun: "Lui / Lei", it: "{Aveva saputo} la verità da un amico.", en: "He had learned the truth from a friend." }
          ]
        },
        {
          name: "Trapassato Remoto",
          what: "Something you <b>had found out</b> immediately before another past action — literary usage.",
          notes: [
            "Formed with the passato remoto of avere + saputo.",
            "Used almost exclusively in literary Italian after 'appena', 'dopo che', 'non appena'."
          ],
          conjugations: [
            ["Io", "<b>ebbi saputo</b>"],
            ["Tu", "<b>avesti saputo</b>"],
            ["Lui / Lei", "<b>ebbe saputo</b>"],
            ["Noi", "<b>avemmo saputo</b>"],
            ["Voi", "<b>aveste saputo</b>"],
            ["Loro", "<b>ebbero saputo</b>"]
          ],
          examples: [
            { pronoun: "Io", it: "Appena {ebbi saputo} la notizia, partii subito.", en: "As soon as I had heard the news, I left immediately." },
            { pronoun: "Lui / Lei", it: "Non appena {ebbe saputo} del pericolo, fuggì.", en: "As soon as he had learned of the danger, he fled." }
          ]
        },
        {
          name: "Futuro Semplice",
          what: "What you <b>will know / will find out</b> in the future.",
          notes: [
            "Irregular: uses the contracted stem SAPR- (drops the -e- from sapere).",
            "The same contracted stem is used in the condizionale presente."
          ],
          conjugations: [
            ["Io", "<b>saprò</b>"],
            ["Tu", "<b>saprai</b>"],
            ["Lui / Lei", "<b>saprà</b>"],
            ["Noi", "<b>sapremo</b>"],
            ["Voi", "<b>saprete</b>"],
            ["Loro", "<b>sapranno</b>"]
          ],
          examples: [
            { pronoun: "Io", it: "Domani {saprò} i risultati dell'esame.", en: "Tomorrow I will know the exam results." },
            { pronoun: "Loro", it: "{Sapranno} cavarsela da soli.", en: "They will know how to manage on their own." }
          ]
        },
        {
          name: "Futuro Anteriore",
          what: "What you <b>will have found out</b> by a certain point, or conjecture about the past.",
          notes: [
            "Formed with the futuro semplice of avere + saputo.",
            "Can express conjecture about the past: 'L'avrà saputo da Marco' (He must have heard it from Marco)."
          ],
          conjugations: [
            ["Io", "<b>avrò saputo</b>"],
            ["Tu", "<b>avrai saputo</b>"],
            ["Lui / Lei", "<b>avrà saputo</b>"],
            ["Noi", "<b>avremo saputo</b>"],
            ["Voi", "<b>avrete saputo</b>"],
            ["Loro", "<b>avranno saputo</b>"]
          ],
          examples: [
            { pronoun: "Io", it: "Quando {avrò saputo} tutto, ti chiamerò.", en: "When I will have found out everything, I'll call you." },
            { pronoun: "Lui / Lei", it: "{Avrà saputo} già della festa.", en: "He must have already heard about the party." }
          ]
        }
      ]
    },

    // ===== CONGIUNTIVO =====
    {
      id: "congiuntivo",
      name: "CONGIUNTIVO",
      nameEn: "Subjunctive",
      emoji: "🟡",
      color: "yellow",
      description: "Doubt, desire, opinion, possibility — used after expressions of uncertainty or emotion.",
      tenses: [
        {
          name: "Presente",
          what: "Expressing doubt or opinion about what someone <b>knows</b> right now.",
          notes: [
            "Irregular stem SAPPI- throughout all persons.",
            "Io/tu/lui share the same form: sappia — use subject pronouns or context to disambiguate.",
            "Very commonly used after verbs of opinion, doubt, and desire."
          ],
          conjugations: [
            ["(che) Io", "<b>sappia</b>"],
            ["(che) Tu", "<b>sappia</b>"],
            ["(che) Lui / Lei", "<b>sappia</b>"],
            ["(che) Noi", "<b>sappiamo</b>"],
            ["(che) Voi", "<b>sappiate</b>"],
            ["(che) Loro", "<b>sappiano</b>"]
          ],
          examples: [
            { pronoun: "(che) Tu", it: "Spero che tu {sappia} nuotare.", en: "I hope you know how to swim." },
            { pronoun: "(che) Loro", it: "Dubito che loro {sappiano} la strada.", en: "I doubt they know the way." }
          ]
        },
        {
          name: "Passato",
          what: "Expressing doubt or opinion about what someone <b>knew / found out</b> in the past.",
          notes: [
            "Formed with the congiuntivo presente of avere + saputo.",
            "Used when the main clause requires the subjunctive and the subordinate action is completed."
          ],
          conjugations: [
            ["(che) Io", "<b>abbia saputo</b>"],
            ["(che) Tu", "<b>abbia saputo</b>"],
            ["(che) Lui / Lei", "<b>abbia saputo</b>"],
            ["(che) Noi", "<b>abbiamo saputo</b>"],
            ["(che) Voi", "<b>abbiate saputo</b>"],
            ["(che) Loro", "<b>abbiano saputo</b>"]
          ],
          examples: [
            { pronoun: "(che) Tu", it: "Penso che tu {abbia saputo} la notizia ieri.", en: "I think you found out the news yesterday." },
            { pronoun: "(che) Loro", it: "Penso che loro {abbiano saputo} la verità.", en: "I think they found out the truth." }
          ]
        },
        {
          name: "Imperfetto",
          what: "Hypothetical or past doubt about what someone <b>knew</b> — 'if I knew...'",
          notes: [
            "Regular formation on the stem 'sap-' with standard congiuntivo imperfetto endings.",
            "Very common in 'se' clauses (hypothetical conditions): 'Se sapessi...' (If I knew...)."
          ],
          conjugations: [
            ["(che) Io", "<b>sapessi</b>"],
            ["(che) Tu", "<b>sapessi</b>"],
            ["(che) Lui / Lei", "<b>sapesse</b>"],
            ["(che) Noi", "<b>sapessimo</b>"],
            ["(che) Voi", "<b>sapeste</b>"],
            ["(che) Loro", "<b>sapessero</b>"]
          ],
          examples: [
            { pronoun: "(che) Io", it: "Se {sapessi} la risposta, te la direi.", en: "If I knew the answer, I would tell you." },
            { pronoun: "(che) Loro", it: "Se loro {sapessero} la situazione, ci aiuterebbero.", en: "If they knew the situation, they would help us." }
          ]
        },
        {
          name: "Trapassato",
          what: "Contrary-to-fact about the past — 'if I <b>had known</b>...'",
          notes: [
            "Formed with the congiuntivo imperfetto of avere + saputo.",
            "Used in contrary-to-fact conditions about the past: 'Se avessi saputo...' (If I had known...)."
          ],
          conjugations: [
            ["(che) Io", "<b>avessi saputo</b>"],
            ["(che) Tu", "<b>avessi saputo</b>"],
            ["(che) Lui / Lei", "<b>avesse saputo</b>"],
            ["(che) Noi", "<b>avessimo saputo</b>"],
            ["(che) Voi", "<b>aveste saputo</b>"],
            ["(che) Loro", "<b>avessero saputo</b>"]
          ],
          examples: [
            { pronoun: "(che) Io", it: "Se {avessi saputo} prima, sarei venuto.", en: "If I had known earlier, I would have come." },
            { pronoun: "(che) Noi", it: "Se {avessimo saputo} i rischi, non avremmo investito.", en: "If we had known the risks, we wouldn't have invested." }
          ]
        }
      ]
    },

    // ===== CONDIZIONALE =====
    {
      id: "condizionale",
      name: "CONDIZIONALE",
      nameEn: "Conditional",
      emoji: "🔵",
      color: "blue",
      description: "What would be known, polite requests for information — 'I would know', 'could you tell me?'",
      tenses: [
        {
          name: "Presente",
          what: "What you <b>would know</b> — polite hedging, hypothetical knowledge.",
          notes: [
            "Uses the same contracted stem SAPR- as the futuro semplice.",
            "'Non saprei' (I wouldn't know) is an extremely common polite/hedging expression.",
            "'Sapresti/sapreste + infinitive?' is a polite way to ask for help or directions."
          ],
          conjugations: [
            ["Io", "<b>saprei</b>"],
            ["Tu", "<b>sapresti</b>"],
            ["Lui / Lei", "<b>saprebbe</b>"],
            ["Noi", "<b>sapremmo</b>"],
            ["Voi", "<b>sapreste</b>"],
            ["Loro", "<b>saprebbero</b>"]
          ],
          examples: [
            { pronoun: "Io", it: "Non {saprei} cosa dire in questa situazione.", en: "I wouldn't know what to say in this situation." },
            { pronoun: "Tu", it: "{Sapresti} indicarmi la strada per il centro?", en: "Could you tell me the way to the center?" }
          ]
        },
        {
          name: "Passato",
          what: "What you <b>would have known</b> — unrealized past ability or knowledge.",
          notes: [
            "Formed with the condizionale presente of avere + saputo.",
            "Used in the main clause of past contrary-to-fact conditions."
          ],
          conjugations: [
            ["Io", "<b>avrei saputo</b>"],
            ["Tu", "<b>avresti saputo</b>"],
            ["Lui / Lei", "<b>avrebbe saputo</b>"],
            ["Noi", "<b>avremmo saputo</b>"],
            ["Voi", "<b>avreste saputo</b>"],
            ["Loro", "<b>avrebbero saputo</b>"]
          ],
          examples: [
            { pronoun: "Io", it: "Non {avrei saputo} rispondere a quella domanda.", en: "I wouldn't have known how to answer that question." },
            { pronoun: "Lui / Lei", it: "{Avrebbe saputo} gestire la crisi.", en: "He would have known how to handle the crisis." }
          ]
        }
      ]
    },

    // ===== IMPERATIVO =====
    {
      id: "imperativo",
      name: "IMPERATIVO",
      nameEn: "Imperative",
      emoji: "🔴",
      color: "red",
      description: "Commands and exhortations — 'Know that...!', 'Be aware...!'",
      tenses: [
        {
          name: "Presente",
          what: "Commanding someone to <b>know / be aware</b> of something.",
          notes: [
            "Uses the irregular stem SAPPI- (same as congiuntivo presente).",
            "Most commonly used in the set phrase 'Sappi che...' (Know that... / Be aware that...).",
            "The io form does not exist for the imperativo."
          ],
          conjugations: [
            ["(Tu)", "<b>sappi</b>"],
            ["(Lei) formal", "<b>sappia</b>"],
            ["(Noi)", "<b>sappiamo</b>"],
            ["(Voi)", "<b>sappiate</b>"],
            ["(Loro) formal", "<b>sappiano</b>"]
          ],
          examples: [
            { pronoun: "(Tu)", it: "{Sappi} che ti sarò sempre grato!", en: "Know that I will always be grateful to you!" },
            { pronoun: "(Voi)", it: "{Sappiate} che questa è la vostra ultima occasione!", en: "Be aware that this is your last chance!" }
          ]
        }
      ]
    },

    // ===== GERUNDIO =====
    {
      id: "other",
      name: "GERUNDIO",
      nameEn: "Gerund",
      emoji: "⚪",
      color: "gray",
      description: "Ongoing action of knowing — 'knowing that...', 'having known...'",
      tenses: [
        {
          name: "Presente",
          what: "The act of <b>knowing</b> as an ongoing action — 'knowing...'",
          notes: [
            "Gerundio presente 'sapendo' is regular (stem sap- + -endo).",
            "'Non sapendo...' (not knowing...) is a very natural construction in Italian."
          ],
          conjugations: [
            ["Gerundio presente", "<b>sapendo</b>"]
          ],
          examples: [
            { pronoun: "—", it: "Non {sapendo} la risposta, rimase in silenzio.", en: "Not knowing the answer, he remained silent." },
            { pronoun: "—", it: "{Sapendo} che era tardi, si affrettò.", en: "Knowing that it was late, he hurried." }
          ]
        },
        {
          name: "Passato",
          what: "The completed act of <b>having found out</b> — 'having known...'",
          notes: [
            "Gerundio passato is formed with 'avendo' + saputo."
          ],
          conjugations: [
            ["Gerundio passato", "<b>avendo saputo</b>"]
          ],
          examples: [
            { pronoun: "—", it: "{Avendo saputo} la verità, non poteva più tacere.", en: "Having learned the truth, he could no longer stay silent." },
            { pronoun: "—", it: "{Avendo saputo} del problema, decisero di intervenire.", en: "Having heard about the problem, they decided to intervene." }
          ]
        }
      ]
    },

    // ===== INFINITO =====
    {
      id: "other",
      name: "INFINITO",
      nameEn: "Infinitive",
      emoji: "⚪",
      color: "gray",
      description: "The base form of the verb — 'to know', 'to have known'.",
      tenses: [
        {
          name: null,
          what: "The <b>infinitive</b> forms of sapere — used after modals and in set expressions.",
          notes: [
            "'Far sapere' = to let someone know: 'Fammi sapere' (Let me know).",
            "'Per saperne di più' = to know more about it."
          ],
          conjugations: [
            ["Presente", "<b>sapere</b>"],
            ["Passato", "<b>avere saputo</b>"]
          ],
          examples: [
            { pronoun: "—", it: "Vorrei {sapere} la verità.", en: "I would like to know the truth." },
            { pronoun: "—", it: "Dopo {avere saputo} la notizia, è partito subito.", en: "After having learned the news, he left immediately." }
          ]
        }
      ]
    },

    // ===== PARTICIPIO =====
    {
      id: "other",
      name: "PARTICIPIO",
      nameEn: "Participle",
      emoji: "⚪",
      color: "gray",
      description: "Adjective-like verb forms — 'wise/knowing' and 'known'.",
      tenses: [
        {
          name: null,
          what: "The <b>participle</b> forms of sapere — used as adjectives and in compound tenses.",
          headers: ["Form", "Conjugation", "Note"],
          notes: [
            "Participio presente 'sapiente' is used mainly as an adjective meaning 'wise / learned / knowledgeable'.",
            "'Saputo' can also be used as an adjective meaning 'know-it-all': 'un tipo saputo'."
          ],
          conjugations: [
            ["Presente", "<b>sapiente</b>", "Used as adjective: wise, learned"],
            ["Passato", "<b>saputo</b>", "Used in compound tenses with avere"]
          ],
          examples: [
            { pronoun: "—", it: "È un uomo {sapiente} e rispettato da tutti.", en: "He is a wise man, respected by everyone." },
            { pronoun: "—", it: "Ho {saputo} della tua promozione — congratulazioni!", en: "I heard about your promotion — congratulations!" }
          ]
        }
      ]
    }
  ],

  // ===== QUICK REFERENCE =====
  quickRef: [
    { tense: "Presente", idea: "I know", example: "So parlare italiano." },
    { tense: "Imperfetto", idea: "I used to know / I knew", example: "Non sapevo che eri qui." },
    { tense: "Passato Remoto", idea: "I found out (distant)", example: "Seppi la verità dopo anni." },
    { tense: "Passato Prossimo", idea: "I found out (recent)", example: "Ho saputo della festa." },
    { tense: "Trapassato Prossimo", idea: "I had known", example: "Avevo saputo tutto prima." },
    { tense: "Trapassato Remoto", idea: "I had found out (literary)", example: "Ebbi saputo la notizia." },
    { tense: "Futuro Semplice", idea: "I will know", example: "Domani saprò i risultati." },
    { tense: "Futuro Anteriore", idea: "I will have found out", example: "Avrò saputo tutto entro sera." },
    { tense: "Congiuntivo Presente", idea: "that I know (doubt)", example: "Spero che tu sappia nuotare." },
    { tense: "Congiuntivo Passato", idea: "that I found out (doubt)", example: "Penso che abbia saputo." },
    { tense: "Congiuntivo Imperfetto", idea: "if I knew", example: "Se sapessi, te lo direi." },
    { tense: "Congiuntivo Trapassato", idea: "if I had known", example: "Se avessi saputo, sarei venuto." },
    { tense: "Condizionale Presente", idea: "I would know", example: "Non saprei cosa dire." },
    { tense: "Condizionale Passato", idea: "I would have known", example: "Non avrei saputo rispondere." },
    { tense: "Imperativo", idea: "Know! Be aware!", example: "Sappi che ti sarò grato!" },
    { tense: "Gerundio / Infinito", idea: "knowing / to know", example: "Sapendo la verità, tacque." }
  ]
};
