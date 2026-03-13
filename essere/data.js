const verbData = {
  verb: "essere",
  meaning: "to be",
  type: "ere",
  info: {
    subtitle: "Highly irregular -ERE verb — the most fundamental verb in Italian",
    stem: "(irregular)",
    auxiliary: "ESSERE",
    gerundio: "essendo",
    participioPassato: "stato/stata/stati/state",
    extra: "Used as auxiliary verb for reflexive verbs and many intransitive verbs of motion/state."
  },
  moods: [
    // INDICATIVO
    {
      id: "indicativo",
      name: "INDICATIVO",
      nameEn: "Indicative",
      emoji: "🟢",
      color: "green",
      description: "Reality, facts, certainty — what actually happens, happened, or will happen.",
      tenses: [
        {
          name: "Presente",
          what: "What is happening <b>now</b> or <b>habitually</b>. Essere is completely irregular — every form must be memorized.",
          notes: ["⚠️ Every single form is irregular. There is no predictable pattern — just memorize them!"],
          conjugations: [
            ["Io",        "<b>sono</b>"],
            ["Tu",        "<b>sei</b>"],
            ["Lui / Lei", "<b>è</b>"],
            ["Noi",       "<b>siamo</b>"],
            ["Voi",       "<b>siete</b>"],
            ["Loro",      "<b>sono</b>"]
          ],
          examples: [
            { pronoun: "Noi", it: "{Siamo} in ritardo perché il treno delle sette è stato cancellato all'ultimo momento.", en: "We are late because the seven o'clock train was cancelled at the last minute." },
            { pronoun: "Tu",  it: "Tu {sei} la persona più testarda che io abbia mai conosciuto in vita mia.", en: "You are the most stubborn person I have ever met in my life." }
          ]
        },
        {
          name: "Imperfetto",
          what: 'The <b>"used to be"</b> past — ongoing states or descriptions in the past. One of the few regular-looking forms of essere.',
          useFor: "Use it for: describing how things were, background states, habitual conditions in the past.",
          conjugations: [
            ["Io",        "<b>ero</b>"],
            ["Tu",        "<b>eri</b>"],
            ["Lui / Lei", "<b>era</b>"],
            ["Noi",       "<b>eravamo</b>"],
            ["Voi",       "<b>eravate</b>"],
            ["Loro",      "<b>erano</b>"]
          ],
          examples: [
            { pronoun: "Io",   it: "Quando {ero} giovane, passavo ogni estate dai nonni in campagna.", en: "When I was young, I used to spend every summer at my grandparents' in the countryside." },
            { pronoun: "Loro", it: "I negozi {erano} tutti chiusi perché era il giorno di Ferragosto.", en: "The shops were all closed because it was Ferragosto (August 15th holiday)." }
          ]
        },
        {
          name: "Passato Remoto",
          what: "A <b>completed</b> past action, typically distant in time or used in literature. Essere is completely irregular here.",
          useFor: "Use it for: historical events, finished stories.",
          conjugations: [
            ["Io",        "<b>fui</b>"],
            ["Tu",        "<b>fosti</b>"],
            ["Lui / Lei", "<b>fu</b>"],
            ["Noi",       "<b>fummo</b>"],
            ["Voi",       "<b>foste</b>"],
            ["Loro",      "<b>furono</b>"]
          ],
          examples: [
            { pronoun: "Lui", it: "Leonardo da Vinci {fu} uno dei più grandi geni che l'umanità abbia mai conosciuto.", en: "Leonardo da Vinci was one of the greatest geniuses humanity has ever known." },
            { pronoun: "Noi", it: "{Fummo} i primi a raggiungere la vetta della montagna quella mattina d'estate.", en: "We were the first to reach the mountain summit that summer morning." }
          ]
        },
        {
          name: "Passato Prossimo",
          what: "The most common past tense in <b>spoken Italian</b>. Essere uses <b>itself</b> as auxiliary: <b>essere + stato/a</b>.",
          notes: ["⚠️ The past participle <b>stato/a/i/e</b> must <b>agree in gender and number</b> with the subject! (stato=masc.sing., stata=fem.sing., stati=masc.pl., state=fem.pl.)"],
          conjugations: [
            ["Io",        "sono <b>stato/a</b>"],
            ["Tu",        "sei <b>stato/a</b>"],
            ["Lui / Lei", "è <b>stato/a</b>"],
            ["Noi",       "siamo <b>stati/e</b>"],
            ["Voi",       "siete <b>stati/e</b>"],
            ["Loro",      "sono <b>stati/e</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Sono stato} molto fortunato a trovare questo lavoro subito dopo la laurea.", en: "I was very lucky to find this job right after graduating." },
            { pronoun: "Voi", it: "{Siete state} voi a organizzare quella festa a sorpresa per il compleanno di Marco?", en: "Was it you (women) who organized that surprise party for Marco's birthday?" }
          ]
        },
        {
          name: "Trapassato Prossimo",
          what: 'The <b>"past of the past"</b> — something that was the case <b>before</b> another past event. Formed with <b>imperfetto di essere + stato/a</b>.',
          conjugations: [
            ["Io",        "ero stato/a"],
            ["Tu",        "eri stato/a"],
            ["Lui / Lei", "era stato/a"],
            ["Noi",       "eravamo stati/e"],
            ["Voi",       "eravate stati/e"],
            ["Loro",      "erano stati/e"]
          ],
          examples: [
            { pronoun: "Lei", it: "Non sapeva cosa fare perché non {era mai stata} in una situazione così difficile prima.", en: "She didn't know what to do because she had never been in such a difficult situation before." },
            { pronoun: "Noi", it: "{Eravamo già stati} avvertiti del pericolo, ma abbiamo deciso di continuare lo stesso.", en: "We had already been warned of the danger, but we decided to continue anyway." }
          ]
        },
        {
          name: "Trapassato Remoto",
          what: 'Also a "past of the past" but paired with the <b>passato remoto</b>. Very literary. Formed with <b>passato remoto di essere + stato/a</b>.',
          conjugations: [
            ["Io",        "fui stato/a"],
            ["Tu",        "fosti stato/a"],
            ["Lui / Lei", "fu stato/a"],
            ["Noi",       "fummo stati/e"],
            ["Voi",       "foste stati/e"],
            ["Loro",      "furono stati/e"]
          ],
          examples: [
            { pronoun: "Lui",  it: "Dopo che {fu stato} eletto presidente, la sua vita cambiò completamente.", en: "After he had been elected president, his life changed completely." },
            { pronoun: "Loro", it: "Non appena {furono stati} liberati, i prigionieri corsero verso le proprie famiglie.", en: "As soon as they had been freed, the prisoners ran towards their families." }
          ]
        },
        {
          name: "Futuro Semplice",
          what: 'The simple future — what <b>will be</b>. Uses the stem <b>sar-</b>.',
          notes: ['💡 <b>Futuro di probabilità:</b> "Sarà vero?" = Is it probably true? / I wonder if it\'s true. The future tense expressing a guess about the present!'],
          conjugations: [
            ["Io",        "sar<b>ò</b>"],
            ["Tu",        "sar<b>ai</b>"],
            ["Lui / Lei", "sar<b>à</b>"],
            ["Noi",       "sar<b>emo</b>"],
            ["Voi",       "sar<b>ete</b>"],
            ["Loro",      "sar<b>anno</b>"]
          ],
          examples: [
            { pronoun: "Io",   it: "{Sarò} sincero con te: non credo che questo progetto possa funzionare così.", en: "I'll be honest with you: I don't think this project can work like this." },
            { pronoun: "Loro", it: "I risultati {saranno} pubblicati sul sito della scuola entro la fine della settimana.", en: "The results will be published on the school website by the end of the week." }
          ]
        },
        {
          name: "Futuro Anteriore",
          what: "The future perfect — something that <b>will have been</b> before another future action. Formed with <b>futuro di essere + stato/a</b>.",
          conjugations: [
            ["Io",        "sarò stato/a"],
            ["Tu",        "sarai stato/a"],
            ["Lui / Lei", "sarà stato/a"],
            ["Noi",       "saremo stati/e"],
            ["Voi",       "sarete stati/e"],
            ["Loro",      "saranno stati/e"]
          ],
          examples: [
            { pronoun: "Io",  it: "Quando arriverai, {sarò già stato} dal dottore e avrò i risultati degli esami.", en: "When you arrive, I will have already been to the doctor and will have the test results." },
            { pronoun: "Lei", it: "{Sarà stata} la stanchezza a farle dire cose che non pensava veramente.", en: "It must have been tiredness that made her say things she didn't really mean." }
          ]
        }
      ]
    },

    // CONGIUNTIVO
    {
      id: "congiuntivo",
      name: "CONGIUNTIVO",
      nameEn: "Subjunctive",
      emoji: "🟡",
      color: "yellow",
      description: 'Doubt, opinion, emotion, subjectivity — almost always triggered by "che" and key verbs like pensare, credere, volere, sperare...',
      tenses: [
        {
          name: "Presente",
          what: "Present subjunctive — opinions/doubts about something being the case <b>now or in the future</b>. Completely irregular.",
          notes: ["⚠️ Io, Tu, and Lui/Lei are <b>all the same</b> (sia). Use the subject pronoun to disambiguate!"],
          conjugations: [
            ["(che) Io",        "<b>sia</b>"],
            ["(che) Tu",        "<b>sia</b>"],
            ["(che) Lui / Lei", "<b>sia</b>"],
            ["(che) Noi",       "<b>siamo</b>"],
            ["(che) Voi",       "<b>siate</b>"],
            ["(che) Loro",      "<b>siano</b>"]
          ],
          examples: [
            { pronoun: "Tu",   it: "Credo che tu {sia} la persona giusta per questo ruolo di responsabilità.", en: "I believe you are the right person for this role of responsibility." },
            { pronoun: "Loro", it: "È importante che {siano} tutti presenti alla riunione di domani mattina.", en: "It's important that everyone is present at tomorrow morning's meeting." }
          ]
        },
        {
          name: "Passato",
          what: "Past subjunctive — opinions/doubts about something that <b>already happened</b>. Formed with <b>congiuntivo presente di essere + stato/a</b>.",
          conjugations: [
            ["(che) Io",        "sia stato/a"],
            ["(che) Tu",        "sia stato/a"],
            ["(che) Lui / Lei", "sia stato/a"],
            ["(che) Noi",       "siamo stati/e"],
            ["(che) Voi",       "siate stati/e"],
            ["(che) Loro",      "siano stati/e"]
          ],
          examples: [
            { pronoun: "Lui", it: "Penso che Marco {sia stato} troppo duro con i suoi colleghi durante la presentazione.", en: "I think Marco was too hard on his colleagues during the presentation." },
            { pronoun: "Loro", it: "È possibile che {siano stati} loro a lasciare la porta aperta ieri sera.", en: "It's possible that it was them who left the door open last night." }
          ]
        },
        {
          name: "Imperfetto",
          what: 'Imperfect subjunctive — used when the main verb is <b>in the past</b>, or in <b>hypothetical "se" (if) clauses</b>.',
          notes: ['💡 Essential in <b>se (if)</b> clauses: "Se {fossi} ricco, viaggerei per il mondo." = If I were rich, I\'d travel the world.'],
          conjugations: [
            ["(che) Io",        "<b>fossi</b>"],
            ["(che) Tu",        "<b>fossi</b>"],
            ["(che) Lui / Lei", "<b>fosse</b>"],
            ["(che) Noi",       "<b>fossimo</b>"],
            ["(che) Voi",       "<b>foste</b>"],
            ["(che) Loro",      "<b>fossero</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "Se {fossi} più coraggioso, lascerei tutto e partirei per un viaggio intorno al mondo.", en: "If I were braver, I would leave everything and go on a trip around the world." },
            { pronoun: "Noi", it: "Pensava che {fossimo} ancora arrabbiati con lui, ma in realtà avevamo già perdonato tutto.", en: "He thought we were still angry with him, but in reality we had already forgiven everything." }
          ]
        },
        {
          name: "Trapassato",
          what: 'Pluperfect subjunctive — hypotheticals about the past. Formed with <b>congiuntivo imperfetto di essere + stato/a</b>.',
          conjugations: [
            ["(che) Io",        "fossi stato/a"],
            ["(che) Tu",        "fossi stato/a"],
            ["(che) Lui / Lei", "fosse stato/a"],
            ["(che) Noi",       "fossimo stati/e"],
            ["(che) Voi",       "foste stati/e"],
            ["(che) Loro",      "fossero stati/e"]
          ],
          examples: [
            { pronoun: "Tu",  it: "Se {fossi stato} più attento durante la lezione, avresti capito l'argomento.", en: "If you had been more careful during the lesson, you would have understood the topic." },
            { pronoun: "Noi", it: "Se {fossimo stati} informati prima, avremmo organizzato tutto diversamente.", en: "If we had been informed earlier, we would have organized everything differently." }
          ]
        }
      ]
    },

    // CONDIZIONALE
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
          what: '<b>"Would be"</b> — hypotheticals, polite expressions, wishes. Uses the stem <b>sar-</b>.',
          conjugations: [
            ["Io",        "sar<b>ei</b>"],
            ["Tu",        "sar<b>esti</b>"],
            ["Lui / Lei", "sar<b>ebbe</b>"],
            ["Noi",       "sar<b>emmo</b>"],
            ["Voi",       "sar<b>este</b>"],
            ["Loro",      "sar<b>ebbero</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Sarei} felice di aiutarti, ma purtroppo questo fine settimana sono impegnato.", en: "I would be happy to help you, but unfortunately I'm busy this weekend." },
            { pronoun: "Lei", it: "Mia madre {sarebbe} contentissima se le portassi i nipotini a trovarla più spesso.", en: "My mother would be very happy if I brought the grandchildren to visit her more often." }
          ]
        },
        {
          name: "Passato",
          what: '<b>"Would have been"</b> — hypotheticals about the past. Formed with <b>condizionale presente di essere + stato/a</b>.',
          conjugations: [
            ["Io",        "sarei stato/a"],
            ["Tu",        "saresti stato/a"],
            ["Lui / Lei", "sarebbe stato/a"],
            ["Noi",       "saremmo stati/e"],
            ["Voi",       "sareste stati/e"],
            ["Loro",      "sarebbero stati/e"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Sarei stato} più gentile se avessi saputo della situazione difficile che stava vivendo.", en: "I would have been kinder if I had known about the difficult situation he was going through." },
            { pronoun: "Noi", it: "{Saremmo stati} in orario se il navigatore non ci avesse fatto sbagliare strada.", en: "We would have been on time if the GPS hadn't made us take the wrong road." }
          ]
        }
      ]
    },

    // IMPERATIVO
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
          what: "Direct commands. <b>No Io form</b> — you can't command yourself!",
          conjugations: [
            ["(Tu)",          "<b>sii!</b>"],
            ["(Lei) formal",  "<b>sia!</b>"],
            ["(Noi)",         "<b>siamo!</b>"],
            ["(Voi)",         "<b>siate!</b>"],
            ["(Loro) formal", "<b>siano!</b>"]
          ],
          examples: [
            { pronoun: "Tu",  it: "{Sii} paziente con tuo fratello, sta attraversando un periodo molto difficile.", en: "Be patient with your brother — he's going through a very difficult time." },
            { pronoun: "Voi", it: "{Siate} pronti alle otto in punto, il pullman non aspetterà nessuno!", en: "Be ready at eight o'clock sharp — the bus won't wait for anyone!" }
          ]
        }
      ]
    },

    // GERUNDIO
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
          what: "Something happening <b>at the same time</b> as the main action.",
          conjugations: [["Gerundio presente", "<b>essendo</b>"]],
          examples: [
            { pronoun: "", it: "{Essendo} molto stanco, ha deciso di saltare la cena e andare direttamente a letto.", en: "Being very tired, he decided to skip dinner and go straight to bed." }
          ]
        },
        {
          name: "Passato",
          what: "Something that happened <b>before</b> the main action.",
          conjugations: [["Gerundio passato", "<b>essendo stato/a/i/e</b>"]],
          examples: [
            { pronoun: "", it: "{Essendo stata} malata per una settimana, non era preparata per l'esame.", en: "Having been sick for a week, she was not prepared for the exam." }
          ]
        }
      ]
    },

    // INFINITO
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
            ["Presente", "<b>essere</b>"],
            ["Passato",  "<b>essere stato/a/i/e</b>"]
          ],
          examples: [
            { pronoun: "", it: "Bisogna {essere} coraggiosi per ammettere i propri errori davanti a tutti.", en: "One must be brave to admit one's mistakes in front of everyone." },
            { pronoun: "", it: "Dopo {essere stato} promosso, ha deciso di festeggiare con tutta la famiglia.", en: "After having been promoted, he decided to celebrate with the whole family." }
          ]
        }
      ]
    },

    // PARTICIPIO
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
            ["Presente", "<b>essente / ente</b>", "Extremely rare. Only in philosophical or legal language."],
            ["Passato",  "<b>stato/a/i/e</b>",   "Used in ALL compound tenses. Also means 'state': lo stato = the state."]
          ],
          examples: [
            { pronoun: "", it: "Il tempo {stato} a disposizione non era sufficiente per completare il lavoro.", en: "The time that had been available was not enough to complete the work." }
          ]
        }
      ]
    }
  ],

  quickRef: [
    { tense: "Presente",               idea: "Now / habitual",                    example: "Sono felice." },
    { tense: "Imperfetto",             idea: "Used to / background past",         example: "Ero stanco." },
    { tense: "Passato Prossimo",       idea: "Completed recent past",             example: "Sono stato bene." },
    { tense: "Passato Remoto",         idea: "Distant / literary past",           example: "Fu grande." },
    { tense: "Trapassato Prossimo",    idea: "Had been (before another past)",    example: "Ero stato malato." },
    { tense: "Trapassato Remoto",      idea: "Had been (literary, with p. remoto)", example: "Fu stato eletto." },
    { tense: "Futuro Semplice",        idea: "Will be",                           example: "Sarò pronto." },
    { tense: "Futuro Anteriore",       idea: "Will have been",                    example: "Sarò stato lì." },
    { tense: "Congiuntivo Presente",   idea: "Doubt / opinion (present)",         example: "Penso che sia." },
    { tense: "Congiuntivo Passato",    idea: "Doubt / opinion (past)",            example: "Penso che sia stato." },
    { tense: "Congiuntivo Imperfetto", idea: "Hypothetical / past doubt",         example: "Se fossi ricco..." },
    { tense: "Congiuntivo Trapassato", idea: "Hypothetical about the past",       example: "Se fossi stato..." },
    { tense: "Condizionale Presente",  idea: "Would be",                          example: "Sarei felice." },
    { tense: "Condizionale Passato",   idea: "Would have been",                   example: "Sarei stato pronto." },
    { tense: "Imperativo",            idea: "Commands",                           example: "Sii forte!" },
    { tense: "Gerundio",              idea: "While being / having been",          example: "Essendo... / Essendo stato..." }
  ]
};
