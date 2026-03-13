const verbData = {
  verb: "dormire",
  meaning: "to sleep",
  type: "ire",
  info: {
    subtitle: "Regular -IRE verb",
    stem: "DORM-",
    auxiliary: "AVERE",
    gerundio: "dormendo",
    participioPassato: "dormito",
    extra: ""
  },
  moods: [
    // ══════════════ INDICATIVO ══════════════
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
          what: "What is happening <b>now</b> or <b>habitually</b>. The most basic tense — start here.",
          conjugations: [
            ["Io",        "dorm<b>o</b>"],
            ["Tu",        "dorm<b>i</b>"],
            ["Lui / Lei", "dorm<b>e</b>"],
            ["Noi",       "dorm<b>iamo</b>"],
            ["Voi",       "dorm<b>ite</b>"],
            ["Loro",      "dorm<b>ono</b>"]
          ],
          examples: [
            { pronoun: "Noi", it: "Non {dormiamo} mai abbastanza durante la settimana lavorativa.", en: "We never sleep enough during the working week." },
            { pronoun: "Tu",  it: "Tu {dormi} sempre con la finestra aperta anche in inverno?", en: "Do you always sleep with the window open even in winter?" }
          ]
        },
        {
          name: "Imperfetto",
          what: 'The <b>"used to"</b> past — ongoing, repeated, or background actions in the past. No clear beginning or end.',
          useFor: "Use it for: habits in the past, descriptions, background situations.",
          conjugations: [
            ["Io",        "dorm<b>ivo</b>"],
            ["Tu",        "dorm<b>ivi</b>"],
            ["Lui / Lei", "dorm<b>iva</b>"],
            ["Noi",       "dorm<b>ivamo</b>"],
            ["Voi",       "dorm<b>ivate</b>"],
            ["Loro",      "dorm<b>ivano</b>"]
          ],
          examples: [
            { pronoun: "Io",   it: "Quando ero studente, {dormivo} solo quattro ore a notte prima degli esami.", en: "When I was a student, I used to sleep only four hours a night before exams." },
            { pronoun: "Loro", it: "I bambini {dormivano} tranquillamente mentre fuori imperversava il temporale.", en: "The children were sleeping peacefully while the storm raged outside." }
          ]
        },
        {
          name: "Passato Remoto",
          what: "A <b>completed</b> past action, typically distant in time or used in literature / southern Italy.",
          useFor: "Use it for: historical events, finished stories. In northern Italy, people use passato prossimo instead in everyday speech.",
          conjugations: [
            ["Io",        "dorm<b>ii</b>"],
            ["Tu",        "dorm<b>isti</b>"],
            ["Lui / Lei", "dorm<b>ì</b>"],
            ["Noi",       "dorm<b>immo</b>"],
            ["Voi",       "dorm<b>iste</b>"],
            ["Loro",      "dorm<b>irono</b>"]
          ],
          examples: [
            { pronoun: "Lui", it: "Dopo il lungo viaggio, il cavaliere {dormì} per tre giorni interi senza svegliarsi.", en: "After the long journey, the knight slept for three whole days without waking up." },
            { pronoun: "Noi", it: "Quella notte {dormimmo} all'aperto perché tutti gli alberghi erano pieni.", en: "That night we slept outdoors because all the hotels were full." }
          ]
        },
        {
          name: "Passato Prossimo",
          what: "The most common past tense in <b>spoken Italian</b> — a completed action, usually recent or with present relevance. Formed with <b>avere + dormito</b>.",
          conjugations: [
            ["Io",        "ho dormito"],
            ["Tu",        "hai dormito"],
            ["Lui / Lei", "ha dormito"],
            ["Noi",       "abbiamo dormito"],
            ["Voi",       "avete dormito"],
            ["Loro",      "hanno dormito"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Ho dormito} malissimo perché i vicini hanno fatto festa fino alle tre di notte.", en: "I slept terribly because the neighbours partied until three in the morning." },
            { pronoun: "Voi", it: "{Avete dormito} abbastanza o preferite riposare ancora un po' prima di uscire?", en: "Have you slept enough or would you prefer to rest a little longer before going out?" }
          ]
        },
        {
          name: "Trapassato Prossimo",
          what: 'The <b>"past of the past"</b> — something that happened <b>before</b> another past event. Like English "had done." Formed with <b>imperfetto di avere + dormito</b>.',
          conjugations: [
            ["Io",        "avevo dormito"],
            ["Tu",        "avevi dormito"],
            ["Lui / Lei", "aveva dormito"],
            ["Noi",       "avevamo dormito"],
            ["Voi",       "avevate dormito"],
            ["Loro",      "avevano dormito"]
          ],
          examples: [
            { pronoun: "Lei", it: "Non si sentiva stanca perché {aveva dormito} tutto il pomeriggio sul divano.", en: "She didn't feel tired because she had slept all afternoon on the sofa." },
            { pronoun: "Noi", it: "{Avevamo dormito} appena due ore quando la sveglia è suonata per sbaglio.", en: "We had slept barely two hours when the alarm went off by mistake." }
          ]
        },
        {
          name: "Trapassato Remoto",
          what: 'Also a "past of the past" but paired with the <b>passato remoto</b>. Very literary, rarely used in conversation. Formed with <b>passato remoto di avere + dormito</b>.',
          conjugations: [
            ["Io",        "ebbi dormito"],
            ["Tu",        "avesti dormito"],
            ["Lui / Lei", "ebbe dormito"],
            ["Noi",       "avemmo dormito"],
            ["Voi",       "aveste dormito"],
            ["Loro",      "ebbero dormito"]
          ],
          examples: [
            { pronoun: "Lui",  it: "Non appena {ebbe dormito} qualche ora, riprese il cammino attraverso la foresta.", en: "As soon as he had slept a few hours, he resumed his walk through the forest." },
            { pronoun: "Loro", it: "Dopo che {ebbero dormito}, i soldati si prepararono per la battaglia all'alba.", en: "After they had slept, the soldiers prepared for the battle at dawn." }
          ]
        },
        {
          name: "Futuro Semplice",
          what: 'The simple future — what <b>will</b> happen. Can also express <b>probability in the present</b> ("I wonder if...").',
          conjugations: [
            ["Io",        "dormir<b>ò</b>"],
            ["Tu",        "dormir<b>ai</b>"],
            ["Lui / Lei", "dormir<b>à</b>"],
            ["Noi",       "dormir<b>emo</b>"],
            ["Voi",       "dormir<b>ete</b>"],
            ["Loro",      "dormir<b>anno</b>"]
          ],
          notes: ['💡 <b>Futuro di probabilità:</b> "A quest\'ora <b>dormirà</b> già." = He\'s probably already sleeping (right now). The future tense used to express a guess about the present!'],
          examples: [
            { pronoun: "Tu",   it: "Stasera {dormirai} nella camera degli ospiti perché stiamo ristrutturando la tua.", en: "Tonight you will sleep in the guest room because we're renovating yours." },
            { pronoun: "Loro", it: "Con questo caldo, i bambini non {dormiranno} bene neanche con il ventilatore acceso.", en: "In this heat, the children won't sleep well even with the fan on." }
          ]
        },
        {
          name: "Futuro Anteriore",
          what: "The future perfect — something that <b>will have been completed</b> before another future action. Formed with <b>futuro di avere + dormito</b>.",
          conjugations: [
            ["Io",        "avrò dormito"],
            ["Tu",        "avrai dormito"],
            ["Lui / Lei", "avrà dormito"],
            ["Noi",       "avremo dormito"],
            ["Voi",       "avrete dormito"],
            ["Loro",      "avranno dormito"]
          ],
          examples: [
            { pronoun: "Io",  it: "Quando suonerà la sveglia, {avrò dormito} solo cinque ore e sarò distrutto.", en: "When the alarm rings, I will have slept only five hours and I'll be exhausted." },
            { pronoun: "Voi", it: "Spero che quando arriverò, {avrete dormito} abbastanza per affrontare il viaggio.", en: "I hope that when I arrive, you will have slept enough to face the trip." }
          ]
        }
      ]
    },

    // ══════════════ CONGIUNTIVO ══════════════
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
          what: "Present subjunctive — opinions/doubts about something happening <b>now or in the future</b>.",
          notes: ["⚠️ Notice: Io, Tu, and Lui/Lei are <b>all the same</b> (dorma). Context or the subject pronoun is needed to tell them apart!"],
          conjugations: [
            ["(che) Io",        "dorm<b>a</b>"],
            ["(che) Tu",        "dorm<b>a</b>"],
            ["(che) Lui / Lei", "dorm<b>a</b>"],
            ["(che) Noi",       "dorm<b>iamo</b>"],
            ["(che) Voi",       "dorm<b>iate</b>"],
            ["(che) Loro",      "dorm<b>ano</b>"]
          ],
          examples: [
            { pronoun: "Tu",   it: "Voglio che tu {dorma} almeno otto ore stanotte, domani hai l'esame.", en: "I want you to sleep at least eight hours tonight — you have the exam tomorrow." },
            { pronoun: "Loro", it: "È importante che i bambini {dormano} a sufficienza per crescere sani e forti.", en: "It's important that children sleep enough to grow up healthy and strong." }
          ]
        },
        {
          name: "Passato",
          what: "Past subjunctive — opinions/doubts about something that <b>already happened</b>. Formed with <b>congiuntivo presente di avere + dormito</b>.",
          conjugations: [
            ["(che) Io",        "abbia dormito"],
            ["(che) Tu",        "abbia dormito"],
            ["(che) Lui / Lei", "abbia dormito"],
            ["(che) Noi",       "abbiamo dormito"],
            ["(che) Voi",       "abbiate dormito"],
            ["(che) Loro",      "abbiano dormito"]
          ],
          examples: [
            { pronoun: "Lui", it: "Credo che Marco {abbia dormito} in ufficio perché stamattina indossava gli stessi vestiti di ieri.", en: "I think Marco slept in the office because this morning he was wearing the same clothes as yesterday." },
            { pronoun: "Noi", it: "È possibile che {abbiamo dormito} troppo e per questo ci siamo persi l'inizio dello spettacolo.", en: "It's possible that we slept too long and that's why we missed the beginning of the show." }
          ]
        },
        {
          name: "Imperfetto",
          what: 'Imperfect subjunctive — used when the main verb is <b>in the past</b>, or in <b>hypothetical "se" (if) clauses</b>.',
          notes: ['💡 Essential in <b>se (if)</b> clauses: "Se <b>dormissi</b> di più, starei meglio." = If I slept more, I\'d feel better.'],
          conjugations: [
            ["(che) Io",        "dorm<b>issi</b>"],
            ["(che) Tu",        "dorm<b>issi</b>"],
            ["(che) Lui / Lei", "dorm<b>isse</b>"],
            ["(che) Noi",       "dorm<b>issimo</b>"],
            ["(che) Voi",       "dorm<b>iste</b>"],
            ["(che) Loro",      "dorm<b>issero</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "Mia madre voleva che {dormissi} di più, ma avevo troppi compiti da finire.", en: "My mother wanted me to sleep more, but I had too much homework to finish." },
            { pronoun: "Voi", it: "Se {dormiste} di meno durante il giorno, forse riuscireste a dormire meglio la notte.", en: "If you slept less during the day, maybe you'd manage to sleep better at night." }
          ]
        },
        {
          name: "Trapassato",
          what: 'Pluperfect subjunctive — the most "past" of the subjunctive forms, used in <b>hypotheticals about the past</b>. Formed with <b>congiuntivo imperfetto di avere + dormito</b>.',
          conjugations: [
            ["(che) Io",        "avessi dormito"],
            ["(che) Tu",        "avessi dormito"],
            ["(che) Lui / Lei", "avesse dormito"],
            ["(che) Noi",       "avessimo dormito"],
            ["(che) Voi",       "aveste dormito"],
            ["(che) Loro",      "avessero dormito"]
          ],
          examples: [
            { pronoun: "Tu",  it: "Se {avessi dormito} di più ieri sera, non ti saresti addormentato durante la riunione.", en: "If you had slept more last night, you wouldn't have fallen asleep during the meeting." },
            { pronoun: "Noi", it: "Se {avessimo dormito} in albergo invece che in tenda, il viaggio sarebbe stato più comodo.", en: "If we had slept in a hotel instead of a tent, the trip would have been more comfortable." }
          ]
        }
      ]
    },

    // ══════════════ CONDIZIONALE ══════════════
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
          what: '<b>"Would do"</b> — used for hypotheticals, polite requests, wishes.',
          conjugations: [
            ["Io",        "dormir<b>ei</b>"],
            ["Tu",        "dormir<b>esti</b>"],
            ["Lui / Lei", "dormir<b>ebbe</b>"],
            ["Noi",       "dormir<b>emmo</b>"],
            ["Voi",       "dormir<b>este</b>"],
            ["Loro",      "dormir<b>ebbero</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Dormirei} volentieri fino a mezzogiorno, ma purtroppo domani devo lavorare.", en: "I would gladly sleep until noon, but unfortunately I have to work tomorrow." },
            { pronoun: "Lei", it: "Con questo materasso nuovo, mia sorella {dormirebbe} molto meglio di prima.", en: "With this new mattress, my sister would sleep much better than before." }
          ]
        },
        {
          name: "Passato",
          what: '<b>"Would have done"</b> — hypotheticals about the past. Formed with <b>condizionale presente di avere + dormito</b>.',
          conjugations: [
            ["Io",        "avrei dormito"],
            ["Tu",        "avresti dormito"],
            ["Lui / Lei", "avrebbe dormito"],
            ["Noi",       "avremmo dormito"],
            ["Voi",       "avreste dormito"],
            ["Loro",      "avrebbero dormito"]
          ],
          examples: [
            { pronoun: "Tu",  it: "{Avresti dormito} meglio se non avessi bevuto tutto quel caffè dopo cena.", en: "You would have slept better if you hadn't drunk all that coffee after dinner." },
            { pronoun: "Noi", it: "{Avremmo dormito} in campeggio, ma il tempo era troppo brutto per montare la tenda.", en: "We would have slept at the campsite, but the weather was too bad to set up the tent." }
          ]
        }
      ]
    },

    // ══════════════ IMPERATIVO ══════════════
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
          what: "Direct commands. <b>No Io form</b> — you can't command yourself! Lui/Lei form is for formal \"you\" (Lei).",
          conjugations: [
            ["(Tu)",          "dorm<b>i!</b>"],
            ["(Lei) formal",  "dorm<b>a!</b>"],
            ["(Noi)",         "dorm<b>iamo!</b>"],
            ["(Voi)",         "dorm<b>ite!</b>"],
            ["(Loro) formal", "dorm<b>ano!</b>"]
          ],
          examples: [
            { pronoun: "Tu",  it: "{Dormi} un po' prima di metterti alla guida, sei troppo stanco per guidare adesso!", en: "Sleep a little before getting behind the wheel — you're too tired to drive right now!" },
            { pronoun: "Noi", it: "{Dormiamo} qui stanotte e domattina decideremo cosa fare con calma.", en: "Let's sleep here tonight and tomorrow morning we'll decide what to do calmly." }
          ]
        }
      ]
    },

    // ══════════════ GERUNDIO ══════════════
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
          conjugations: [["Gerundio presente", "<b>dormendo</b>"]],
          examples: [
            { pronoun: "", it: "{Dormendo} con la finestra aperta, mi sono svegliato con il raffreddore.", en: "Sleeping with the window open, I woke up with a cold." }
          ]
        },
        {
          name: "Passato",
          what: "Something that happened <b>before</b> the main action.",
          conjugations: [["Gerundio passato", "<b>avendo dormito</b>"]],
          examples: [
            { pronoun: "", it: "{Avendo dormito} solo tre ore, non riuscivo a concentrarmi durante la lezione.", en: "Having slept only three hours, I couldn't concentrate during the lesson." }
          ]
        }
      ]
    },

    // ══════════════ INFINITO ══════════════
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
            ["Presente", "<b>dormire</b>"],
            ["Passato",  "<b>avere dormito</b>"]
          ],
          examples: [
            { pronoun: "", it: "Ho bisogno di {dormire} almeno otto ore per funzionare bene il giorno dopo.", en: "I need to sleep at least eight hours to function well the next day." },
            { pronoun: "", it: "Dopo {avere dormito} tutto il pomeriggio, finalmente mi sentivo riposato.", en: "After having slept all afternoon, I finally felt rested." }
          ]
        }
      ]
    },

    // ══════════════ PARTICIPIO ══════════════
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
            ["Presente", "<b>dormiente</b>", 'Literary / adjective: "la bella dormiente" = Sleeping Beauty'],
            ["Passato",  "<b>dormito</b>",   "Used in ALL compound tenses (ho dormito, avevo dormito, etc.)"]
          ],
          examples: [
            { pronoun: "", it: "La bella {dormiente} fu svegliata dal bacio del principe.", en: "Sleeping Beauty was awakened by the prince's kiss." }
          ]
        }
      ]
    }
  ],

  quickRef: [
    { tense: "Presente",               idea: "Now / habitual",                    example: "Dormo bene." },
    { tense: "Imperfetto",             idea: "Used to / background past",         example: "Dormivo sempre tardi." },
    { tense: "Passato Prossimo",       idea: "Completed recent past",             example: "Ho dormito bene." },
    { tense: "Passato Remoto",         idea: "Distant / literary past",           example: "Dormì profondamente." },
    { tense: "Trapassato Prossimo",    idea: "Had done (before another past)",    example: "Avevo dormito poco." },
    { tense: "Trapassato Remoto",      idea: "Had done (literary, with p. remoto)", example: "Ebbe dormito un'ora." },
    { tense: "Futuro Semplice",        idea: "Will do",                           example: "Dormirò presto." },
    { tense: "Futuro Anteriore",       idea: "Will have done",                    example: "Avrò dormito abbastanza." },
    { tense: "Congiuntivo Presente",   idea: "Doubt / opinion (present)",         example: "Penso che dorma." },
    { tense: "Congiuntivo Passato",    idea: "Doubt / opinion (past)",            example: "Penso che abbia dormito." },
    { tense: "Congiuntivo Imperfetto", idea: "Hypothetical / past doubt",         example: "Se dormissi di più..." },
    { tense: "Congiuntivo Trapassato", idea: "Hypothetical about the past",       example: "Se avessi dormito..." },
    { tense: "Condizionale Presente",  idea: "Would do",                          example: "Dormirei volentieri." },
    { tense: "Condizionale Passato",   idea: "Would have done",                   example: "Avrei dormito di più." },
    { tense: "Imperativo",            idea: "Commands",                           example: "Dormi!" },
    { tense: "Gerundio",              idea: "While doing / having done",          example: "Dormendo... / Avendo dormito..." }
  ]
};
