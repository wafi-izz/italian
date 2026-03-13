const verbData = {
  verb: "volere",
  meaning: "to want",
  type: "ere",
  info: {
    subtitle: "Irregular -ERE modal verb",
    stem: "VOL- / VOGL- / VORR- / VOLL-",
    auxiliary: "AVERE (or ESSERE with essere-verbs)",
    gerundio: "volendo",
    participioPassato: "voluto",
    extra: "Modal verb — often followed by an infinitive. 'Vorrei' (I would like) is one of the most essential polite forms in Italian. 'Ci vuole/ci vogliono' = it takes (time/effort). Irregular stems: VOGL- (presente: voglio, vogliamo, vogliono), VU- (vuoi, vuole), VORR- (futuro/condizionale), VOLL- (passato remoto: volli, volle, vollero)."
  },
  moods: [
    {
      id: "indicativo",
      name: "INDICATIVO",
      nameEn: "Indicative",
      emoji: "\uD83D\uDFE2",
      color: "green",
      description: "Reality, facts, certainty — what actually happens, happened, or will happen.",
      tenses: [
        {
          name: "Presente",
          what: "What you <b>want</b> right <b>now</b> or <b>habitually</b>. Highly irregular — the stem alternates between <b>vogl-</b> (io, noi, loro) and <b>vu-</b> (tu, lui/lei).",
          notes: ["\u26A0\uFE0F Three different stems: <b>voglio</b> / <b>vogliamo</b> / <b>vogliono</b> (vogl-), <b>vuoi</b> / <b>vuole</b> (vu-), <b>volete</b> (vol-). Just memorize them!"],
          conjugations: [
            ["Io",        "<b>voglio</b>"],
            ["Tu",        "<b>vuoi</b>"],
            ["Lui / Lei", "<b>vuole</b>"],
            ["Noi",       "<b>vogliamo</b>"],
            ["Voi",       "<b>volete</b>"],
            ["Loro",      "<b>vogliono</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Voglio} imparare a cucinare piatti italiani tradizionali come la nonna.", en: "I want to learn to cook traditional Italian dishes like grandma." },
            { pronoun: "Loro", it: "I bambini {vogliono} andare al parco a giocare prima che faccia buio.", en: "The kids want to go to the park to play before it gets dark." }
          ]
        },
        {
          name: "Imperfetto",
          what: 'The <b>"used to want / was wanting"</b> past — ongoing or habitual desire in the past. Regular conjugation on the <b>vol-</b> stem.',
          conjugations: [
            ["Io",        "vol<b>evo</b>"],
            ["Tu",        "vol<b>evi</b>"],
            ["Lui / Lei", "vol<b>eva</b>"],
            ["Noi",       "vol<b>evamo</b>"],
            ["Voi",       "vol<b>evate</b>"],
            ["Loro",      "vol<b>evano</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "Da bambino {volevo} fare l'astronauta, ma poi ho scoperto la cucina.", en: "As a child I wanted to be an astronaut, but then I discovered cooking." },
            { pronoun: "Lei", it: "Mia madre {voleva} sempre che studiassimo prima di uscire a giocare.", en: "My mother always wanted us to study before going out to play." }
          ]
        },
        {
          name: "Passato Remoto",
          what: "A <b>completed</b> past desire, typically distant in time. Has the irregular stem <b>voll-</b> (doubled l) in io, lui/lei, and loro.",
          notes: ["\uD83D\uDCA1 Irregular: <b>volli</b>, <b>volle</b>, <b>vollero</b> have the doubled-l stem. Tu, noi, voi are regular on <b>vol-</b>. The proverb 'Volli, fortemente volli, fortissimamente volli' (Alfieri) is a famous mnemonic!"],
          conjugations: [
            ["Io",        "<b>volli</b>"],
            ["Tu",        "vol<b>esti</b>"],
            ["Lui / Lei", "<b>volle</b>"],
            ["Noi",       "vol<b>emmo</b>"],
            ["Voi",       "vol<b>este</b>"],
            ["Loro",      "<b>vollero</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Volli} partire nonostante tutti mi consigliassero di restare.", en: "I wanted to leave even though everyone was advising me to stay." },
            { pronoun: "Lui", it: "Dante {volle} scrivere la Divina Commedia in volgare per raggiungere tutti.", en: "Dante wanted to write the Divine Comedy in the vernacular to reach everyone." }
          ]
        },
        {
          name: "Passato Prossimo",
          what: "The most common past tense in <b>spoken Italian</b>. Formed with <b>avere + voluto</b> (or <b>essere + voluto</b> if the following verb takes essere).",
          notes: ["\u26A0\uFE0F Auxiliary choice: <b>Ho voluto mangiare</b> (mangiare takes avere) vs <b>Sono voluto andare</b> (andare takes essere). In modern spoken Italian, avere is increasingly used for both."],
          conjugations: [
            ["Io",        "ho <b>voluto</b>"],
            ["Tu",        "hai <b>voluto</b>"],
            ["Lui / Lei", "ha <b>voluto</b>"],
            ["Noi",       "abbiamo <b>voluto</b>"],
            ["Voi",       "avete <b>voluto</b>"],
            ["Loro",      "hanno <b>voluto</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Ho voluto} fare tutto da solo e alla fine ce l'ho fatta.", en: "I wanted to do everything by myself and in the end I managed." },
            { pronoun: "Loro", it: "{Hanno voluto} invitare tutti i parenti, anche quelli che vivono all'estero.", en: "They wanted to invite all their relatives, even those living abroad." }
          ]
        },
        {
          name: "Trapassato Prossimo",
          what: 'The <b>"past of the past"</b> — something you had wanted before another past event. Formed with <b>imperfetto di avere + voluto</b>.',
          conjugations: [
            ["Io",        "avevo voluto"],
            ["Tu",        "avevi voluto"],
            ["Lui / Lei", "aveva voluto"],
            ["Noi",       "avevamo voluto"],
            ["Voi",       "avevate voluto"],
            ["Loro",      "avevano voluto"]
          ],
          examples: [
            { pronoun: "Lui", it: "{Aveva voluto} comprare quella casa, ma poi il prezzo era salito troppo.", en: "He had wanted to buy that house, but then the price had gone up too much." },
            { pronoun: "Noi", it: "{Avevamo voluto} prenotare in anticipo, per fortuna, perch\u00E9 era tutto esaurito.", en: "We had wanted to book in advance, luckily, because everything was sold out." }
          ]
        },
        {
          name: "Trapassato Remoto",
          what: 'Also a "past of the past" paired with the <b>passato remoto</b>. Very literary. Formed with <b>passato remoto di avere + voluto</b>.',
          conjugations: [
            ["Io",        "ebbi voluto"],
            ["Tu",        "avesti voluto"],
            ["Lui / Lei", "ebbe voluto"],
            ["Noi",       "avemmo voluto"],
            ["Voi",       "aveste voluto"],
            ["Loro",      "ebbero voluto"]
          ],
          examples: [
            { pronoun: "Lui",  it: "Dopo che {ebbe voluto} rischiare tutto, la sua vita cambi\u00F2 per sempre.", en: "After he had insisted on risking everything, his life changed forever." },
            { pronoun: "Loro", it: "Dopo che {ebbero voluto} combattere fino alla fine, vinsero la causa.", en: "After they had insisted on fighting to the end, they won the case." }
          ]
        },
        {
          name: "Futuro Semplice",
          what: 'The simple future — what you <b>will want</b>. Uses the contracted stem <b>vorr-</b> (doubled r, the -e- and -l- drop).',
          conjugations: [
            ["Io",        "vorr<b>\u00F2</b>"],
            ["Tu",        "vorr<b>ai</b>"],
            ["Lui / Lei", "vorr<b>\u00E0</b>"],
            ["Noi",       "vorr<b>emo</b>"],
            ["Voi",       "vorr<b>ete</b>"],
            ["Loro",      "vorr<b>anno</b>"]
          ],
          examples: [
            { pronoun: "Tu",  it: "Quando vedrai Venezia, {vorrai} tornarci ogni anno.", en: "When you see Venice, you'll want to go back every year." },
            { pronoun: "Loro", it: "I clienti {vorranno} sicuramente vedere il prodotto prima di comprarlo.", en: "The clients will surely want to see the product before buying it." }
          ]
        },
        {
          name: "Futuro Anteriore",
          what: "The future perfect — something that <b>will have been wanted</b> before another future action. Also used for <b>speculation about the past</b>. Formed with <b>futuro di avere + voluto</b>.",
          conjugations: [
            ["Io",        "avr\u00F2 voluto"],
            ["Tu",        "avrai voluto"],
            ["Lui / Lei", "avr\u00E0 voluto"],
            ["Noi",       "avremo voluto"],
            ["Voi",       "avrete voluto"],
            ["Loro",      "avranno voluto"]
          ],
          examples: [
            { pronoun: "Tu",  it: "{Avrai voluto} scherzare quando hai detto che non ti piace la pizza!", en: "You must have been joking when you said you don't like pizza!" },
            { pronoun: "Lei", it: "{Avr\u00E0 voluto} dire qualcos'altro, non credo intendesse offenderti.", en: "She must have meant something else — I don't think she intended to offend you." }
          ]
        }
      ]
    },

    // CONGIUNTIVO
    {
      id: "congiuntivo",
      name: "CONGIUNTIVO",
      nameEn: "Subjunctive",
      emoji: "\uD83D\uDFE1",
      color: "yellow",
      description: 'Doubt, opinion, emotion, subjectivity — almost always triggered by "che" and key verbs like pensare, credere, sperare, temere...',
      tenses: [
        {
          name: "Presente",
          what: "Present subjunctive — opinions/doubts about wanting something <b>now or in the future</b>. Uses the stem <b>vogl-</b>.",
          notes: ["\u26A0\uFE0F Io, Tu, and Lui/Lei are <b>all the same</b> (voglia). Use the subject pronoun to disambiguate!"],
          conjugations: [
            ["(che) Io",        "<b>voglia</b>"],
            ["(che) Tu",        "<b>voglia</b>"],
            ["(che) Lui / Lei", "<b>voglia</b>"],
            ["(che) Noi",       "<b>vogliamo</b>"],
            ["(che) Voi",       "<b>vogliate</b>"],
            ["(che) Loro",      "<b>vogliano</b>"]
          ],
          examples: [
            { pronoun: "Tu",   it: "Spero che tu {voglia} restare a cena con noi stasera, abbiamo cucinato tanto.", en: "I hope you want to stay for dinner with us tonight — we cooked a lot." },
            { pronoun: "Loro", it: "Dubito che {vogliano} accettare l'offerta senza negoziare il prezzo.", en: "I doubt they want to accept the offer without negotiating the price." }
          ]
        },
        {
          name: "Passato",
          what: "Past subjunctive — opinions/doubts about something that <b>already happened</b>. Formed with <b>congiuntivo presente di avere + voluto</b>.",
          conjugations: [
            ["(che) Io",        "abbia voluto"],
            ["(che) Tu",        "abbia voluto"],
            ["(che) Lui / Lei", "abbia voluto"],
            ["(che) Noi",       "abbiamo voluto"],
            ["(che) Voi",       "abbiate voluto"],
            ["(che) Loro",      "abbiano voluto"]
          ],
          examples: [
            { pronoun: "Lui", it: "Credo che Marco {abbia voluto} aiutarci, anche se il risultato non \u00E8 stato perfetto.", en: "I believe Marco wanted to help us, even if the result wasn't perfect." },
            { pronoun: "Loro", it: "Pare che {abbiano voluto} protestare contro la nuova legge con una manifestazione.", en: "It seems they wanted to protest against the new law with a demonstration." }
          ]
        },
        {
          name: "Imperfetto",
          what: 'Imperfect subjunctive — used when the main verb is <b>in the past</b>, or in <b>hypothetical "se" (if) clauses</b>. Regular on the <b>vol-</b> stem.',
          notes: ['\uD83D\uDCA1 Essential in <b>se (if)</b> clauses: "Se {volessi} cambiare lavoro, dovresti aggiornare il CV." = If you wanted to change jobs, you should update your CV.'],
          conjugations: [
            ["(che) Io",        "vol<b>essi</b>"],
            ["(che) Tu",        "vol<b>essi</b>"],
            ["(che) Lui / Lei", "vol<b>esse</b>"],
            ["(che) Noi",       "vol<b>essimo</b>"],
            ["(che) Voi",       "vol<b>este</b>"],
            ["(che) Loro",      "vol<b>essero</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "Pensava che {volessi} andarmene, ma in realt\u00E0 stavo solo cercando un po' d'aria.", en: "He thought I wanted to leave, but actually I was just looking for some fresh air." },
            { pronoun: "Loro", it: "Sembrava che {volessero} cambiare idea all'ultimo momento, ma poi hanno confermato.", en: "It seemed like they wanted to change their minds at the last minute, but then they confirmed." }
          ]
        },
        {
          name: "Trapassato",
          what: 'Pluperfect subjunctive — hypotheticals about the past. Formed with <b>congiuntivo imperfetto di avere + voluto</b>.',
          conjugations: [
            ["(che) Io",        "avessi voluto"],
            ["(che) Tu",        "avessi voluto"],
            ["(che) Lui / Lei", "avesse voluto"],
            ["(che) Noi",       "avessimo voluto"],
            ["(che) Voi",       "aveste voluto"],
            ["(che) Loro",      "avessero voluto"]
          ],
          examples: [
            { pronoun: "Io", it: "Se {avessi voluto}, avrei potuto trasferirmi all'estero anni fa.", en: "If I had wanted to, I could have moved abroad years ago." },
            { pronoun: "Noi", it: "Se {avessimo voluto} restare, avremmo trovato il modo di farlo.", en: "If we had wanted to stay, we would have found a way to do it." }
          ]
        }
      ]
    },

    // CONDIZIONALE
    {
      id: "condizionale",
      name: "CONDIZIONALE",
      nameEn: "Conditional",
      emoji: "\uD83D\uDD35",
      color: "blue",
      description: "What would happen — hypothetical situations, polite requests, wishes.",
      tenses: [
        {
          name: "Presente",
          what: '<b>"Would want / would like"</b> — hypotheticals and polite requests. Uses the contracted stem <b>vorr-</b>. <b>Vorrei</b> (I would like) is one of the most important polite forms in Italian!',
          notes: ["\uD83D\uDCA1 <b>Vorrei</b> is THE key polite form: \"Vorrei un caff\u00E8\" (I'd like a coffee), \"Vorrei prenotare\" (I'd like to book). Use it instead of \"voglio\" in shops, restaurants, and formal settings."],
          conjugations: [
            ["Io",        "vorr<b>ei</b>"],
            ["Tu",        "vorr<b>esti</b>"],
            ["Lui / Lei", "vorr<b>ebbe</b>"],
            ["Noi",       "vorr<b>emmo</b>"],
            ["Voi",       "vorr<b>este</b>"],
            ["Loro",      "vorr<b>ebbero</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Vorrei} un bicchiere di vino rosso e il piatto del giorno, per favore.", en: "I would like a glass of red wine and the dish of the day, please." },
            { pronoun: "Noi", it: "{Vorremmo} prenotare un tavolo per quattro persone per sabato sera.", en: "We would like to book a table for four people for Saturday evening." }
          ]
        },
        {
          name: "Passato",
          what: '<b>"Would have wanted"</b> — regrets and hypotheticals about the past. Formed with <b>condizionale presente di avere + voluto</b>.',
          conjugations: [
            ["Io",        "avrei voluto"],
            ["Tu",        "avresti voluto"],
            ["Lui / Lei", "avrebbe voluto"],
            ["Noi",       "avremmo voluto"],
            ["Voi",       "avreste voluto"],
            ["Loro",      "avrebbero voluto"]
          ],
          examples: [
            { pronoun: "Io",   it: "{Avrei voluto} viaggiare di pi\u00F9 da giovane, ma non avevo abbastanza soldi.", en: "I would have liked to travel more when I was young, but I didn't have enough money." },
            { pronoun: "Lei", it: "{Avrebbe voluto} diventare musicista, ma la vita l'ha portata in un'altra direzione.", en: "She would have liked to become a musician, but life took her in another direction." }
          ]
        }
      ]
    },

    // IMPERATIVO
    {
      id: "imperativo",
      name: "IMPERATIVO",
      nameEn: "Imperative",
      emoji: "\uD83D\uDD34",
      color: "red",
      description: "Commands and instructions — telling someone to do something directly.",
      tenses: [
        {
          name: "Imperativo",
          what: "Modal verbs <b>rarely have imperative forms</b> in practice. You don't normally command someone to \"want\" something. The formal forms <b>voglia/vogliate</b> survive in very polite, bureaucratic language (\"Voglia scusarmi\" = Please excuse me), but are otherwise obsolete.",
          notes: ["\u26A0\uFE0F These forms are <b>extremely rare</b> in everyday speech. The formal <b>voglia</b> and <b>vogliate</b> survive only in very polite/bureaucratic contexts. In practice, Italians rephrase entirely."],
          conjugations: [
            ["(Tu)",          "<b>\u2014</b>"],
            ["(Lei) formal",  "<b>\u2014</b>"],
            ["(Noi)",         "<b>\u2014</b>"],
            ["(Voi)",         "<b>\u2014</b>"],
            ["(Loro) formal", "<b>\u2014</b>"]
          ],
          examples: [
            { pronoun: "", it: "In formal/bureaucratic Italian: \"{Voglia} scusarmi per il disturbo\" (Please forgive the inconvenience) — but this is very old-fashioned.", en: "Modal verbs are essentially not used in the imperative in natural modern Italian." },
            { pronoun: "", it: "\"{Vogliate} perdonare il ritardo\" (Please forgive the delay) — found in formal letters, never in speech.", en: "These forms survive only in very formal written Italian." }
          ]
        }
      ]
    },

    // GERUNDIO
    {
      id: "other",
      name: "GERUNDIO",
      nameEn: "Gerund",
      emoji: "\u26AA",
      color: "gray",
      description: 'Ongoing or simultaneous actions — like "-ing" in English.',
      tenses: [
        {
          name: "Presente",
          what: "Something happening <b>at the same time</b> as the main action — \"wanting.\"",
          conjugations: [["Gerundio presente", "<b>volendo</b>"]],
          examples: [
            { pronoun: "", it: "{Volendo}, potremmo partire domani mattina e arrivare prima di pranzo.", en: "If we wanted to, we could leave tomorrow morning and arrive before lunch." },
            { pronoun: "", it: "Non {volendo} disturbare nessuno, se ne and\u00F2 in silenzio.", en: "Not wanting to disturb anyone, he left quietly." }
          ]
        },
        {
          name: "Passato",
          what: "Something that happened <b>before</b> the main action — \"having wanted.\"",
          conjugations: [["Gerundio passato", "<b>avendo voluto</b>"]],
          examples: [
            { pronoun: "", it: "{Avendo voluto} fare tutto di testa sua, ora deve affrontare le conseguenze.", en: "Having wanted to do everything his own way, he now has to face the consequences." },
            { pronoun: "", it: "{Avendo voluto} risparmiare sull'albergo, finirono in una stanza terribile.", en: "Having wanted to save money on the hotel, they ended up in a terrible room." }
          ]
        }
      ]
    },

    // INFINITO
    {
      id: "other",
      name: "INFINITO",
      nameEn: "Infinitive",
      emoji: "\u26AA",
      color: "gray",
      description: "The base form of the verb — used after other verbs or prepositions.",
      tenses: [
        {
          name: null,
          conjugations: [
            ["Presente", "<b>volere</b>"],
            ["Passato",  "<b>avere voluto</b>"]
          ],
          examples: [
            { pronoun: "", it: "{Volere} \u00E8 potere — chi vuole veramente qualcosa trova sempre il modo.", en: "Where there's a will, there's a way — whoever truly wants something always finds a way." },
            { pronoun: "", it: "Ammette di {avere voluto} troppo dalla vita senza dare nulla in cambio.", en: "He admits to having wanted too much from life without giving anything in return." }
          ]
        }
      ]
    },

    // PARTICIPIO
    {
      id: "other",
      name: "PARTICIPIO",
      nameEn: "Participle",
      emoji: "\u26AA",
      color: "gray",
      description: "Adjective-like verb forms. The passato form is essential — it builds all compound tenses.",
      tenses: [
        {
          name: null,
          headers: ["Form", "Conjugation", "Note"],
          conjugations: [
            ["Presente", "<b>volente</b>", "Literary/archaic. Survives in the expression 'volente o nolente' = willing or unwilling, like it or not."],
            ["Passato",  "<b>voluto</b>",   "Used in ALL compound tenses (ho voluto, avevo voluto, etc.). Also as adjective: 'un risultato voluto' = a desired result."]
          ],
          examples: [
            { pronoun: "", it: "Volente o nolente, dovrai accettare la decisione del consiglio.", en: "Like it or not (willing or unwilling), you'll have to accept the council's decision." },
            { pronoun: "", it: "\u00C8 stato un cambiamento fortemente {voluto} da tutti i membri del team.", en: "It was a change strongly desired by all team members." }
          ]
        }
      ]
    }
  ],

  quickRef: [
    { tense: "Presente",               idea: "Want / wants",                      example: "Voglio imparare." },
    { tense: "Imperfetto",             idea: "Used to want / was wanting",        example: "Volevo partire." },
    { tense: "Passato Prossimo",       idea: "Wanted (completed)",                example: "Ho voluto fare." },
    { tense: "Passato Remoto",         idea: "Wanted (distant past)",             example: "Volli restare." },
    { tense: "Trapassato Prossimo",    idea: "Had wanted",                        example: "Avevo voluto." },
    { tense: "Trapassato Remoto",      idea: "Had wanted (literary)",             example: "Ebbe voluto." },
    { tense: "Futuro Semplice",        idea: "Will want",                         example: "Vorr\u00F2 sapere." },
    { tense: "Futuro Anteriore",       idea: "Will have wanted",                  example: "Avr\u00E0 voluto dire..." },
    { tense: "Congiuntivo Presente",   idea: "Doubt / opinion (want)",            example: "Spero che voglia." },
    { tense: "Congiuntivo Passato",    idea: "Doubt / opinion (wanted)",          example: "Credo che abbia voluto." },
    { tense: "Congiuntivo Imperfetto", idea: "Hypothetical (if I wanted)",        example: "Se volessi..." },
    { tense: "Congiuntivo Trapassato", idea: "Hypothetical about the past",       example: "Se avessi voluto..." },
    { tense: "Condizionale Presente",  idea: "Would like (polite!)",              example: "Vorrei un caff\u00E8." },
    { tense: "Condizionale Passato",   idea: "Would have wanted / liked",         example: "Avrei voluto viaggiare." },
    { tense: "Imperativo",            idea: "Commands (not used)",                example: "\u2014" },
    { tense: "Gerundio",              idea: "Wanting / having wanted",            example: "Volendo... / Avendo voluto..." }
  ]
};
