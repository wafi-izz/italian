const verbData = {
  verb: "dovere",
  meaning: "to have to / must / to owe",
  type: "ere",
  info: {
    subtitle: "Irregular -ERE modal verb",
    stem: "DOV- / DEV- / DEBB- / DOVR-",
    auxiliary: "AVERE (or ESSERE with essere-verbs)",
    gerundio: "dovendo",
    participioPassato: "dovuto",
    extra: "Modal verb — always followed by an infinitive. Also means 'to owe': 'Ti devo dieci euro' = I owe you ten euros. 'Dovuto' as adjective = due/owed."
  },
  moods: [
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
          what: "What you <b>must do now</b> or <b>habitually</b>. Highly irregular stem changes: <b>dev-/debb-/dobb-</b>. Alternative forms exist: devo/debbo, devono/debbono.",
          notes: ["⚠️ <b>Devo</b> and <b>debbo</b> are both correct for 'Io'; <b>devono</b> and <b>debbono</b> for 'Loro'. <b>Devo/devono</b> are more common in modern Italian."],
          conjugations: [
            ["Io",        "<b>devo</b> <i>(debbo)</i>"],
            ["Tu",        "<b>devi</b>"],
            ["Lui / Lei", "<b>deve</b>"],
            ["Noi",       "<b>dobbiamo</b>"],
            ["Voi",       "<b>dovete</b>"],
            ["Loro",      "<b>devono</b> <i>(debbono)</i>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Devo} finire questo progetto entro venerdì o il capo si arrabbierà moltissimo.", en: "I must finish this project by Friday or the boss will be very upset." },
            { pronoun: "Noi", it: "{Dobbiamo} partire presto domani mattina se vogliamo evitare il traffico.", en: "We must leave early tomorrow morning if we want to avoid traffic." }
          ]
        },
        {
          name: "Imperfetto",
          what: 'The <b>"used to have to"</b> past — ongoing obligations in the past. Regular conjugation.',
          conjugations: [
            ["Io",        "dov<b>evo</b>"],
            ["Tu",        "dov<b>evi</b>"],
            ["Lui / Lei", "dov<b>eva</b>"],
            ["Noi",       "dov<b>evamo</b>"],
            ["Voi",       "dov<b>evate</b>"],
            ["Loro",      "dov<b>evano</b>"]
          ],
          examples: [
            { pronoun: "Io",   it: "Quando ero studente, {dovevo} lavorare la sera per pagare l'affitto.", en: "When I was a student, I had to work in the evening to pay the rent." },
            { pronoun: "Loro", it: "I bambini {dovevano} alzarsi alle sei ogni mattina per prendere lo scuolabus.", en: "The children had to get up at six every morning to catch the school bus." }
          ]
        },
        {
          name: "Passato Remoto",
          what: "A <b>completed</b> past obligation, typically distant in time. Double forms exist: dovei/dovetti, dové/dovette, doverono/dovettero.",
          conjugations: [
            ["Io",        "<b>dovei</b> <i>(dovetti)</i>"],
            ["Tu",        "dov<b>esti</b>"],
            ["Lui / Lei", "<b>dové</b> <i>(dovette)</i>"],
            ["Noi",       "dov<b>emmo</b>"],
            ["Voi",       "dov<b>este</b>"],
            ["Loro",      "<b>doverono</b> <i>(dovettero)</i>"]
          ],
          examples: [
            { pronoun: "Lui",  it: "{Dovette} rinunciare al viaggio a causa di una malattia improvvisa.", en: "He had to give up the trip because of a sudden illness." },
            { pronoun: "Loro", it: "{Dovettero} aspettare tre ore alla frontiera prima di ottenere il visto.", en: "They had to wait three hours at the border before getting the visa." }
          ]
        },
        {
          name: "Passato Prossimo",
          what: "The most common past tense in <b>spoken Italian</b>. Formed with <b>avere + dovuto</b> (or essere + dovuto when followed by an essere-verb).",
          notes: ["💡 Auxiliary choice: <b>Ho dovuto lavorare</b> (lavorare takes avere) but <b>Sono dovuto andare</b> (andare takes essere). In everyday speech, <b>avere</b> is often used regardless."],
          conjugations: [
            ["Io",        "ho <b>dovuto</b>"],
            ["Tu",        "hai <b>dovuto</b>"],
            ["Lui / Lei", "ha <b>dovuto</b>"],
            ["Noi",       "abbiamo <b>dovuto</b>"],
            ["Voi",       "avete <b>dovuto</b>"],
            ["Loro",      "hanno <b>dovuto</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Ho dovuto} cambiare tre treni per arrivare a Napoli a causa dello sciopero.", en: "I had to change three trains to get to Naples because of the strike." },
            { pronoun: "Noi", it: "{Abbiamo dovuto} rinunciare alla vacanza perché il volo è stato cancellato.", en: "We had to give up the vacation because the flight was cancelled." }
          ]
        },
        {
          name: "Trapassato Prossimo",
          what: 'The <b>"past of the past"</b> — an obligation that existed before another past event. Formed with <b>imperfetto di avere + dovuto</b>.',
          conjugations: [
            ["Io",        "avevo <b>dovuto</b>"],
            ["Tu",        "avevi <b>dovuto</b>"],
            ["Lui / Lei", "aveva <b>dovuto</b>"],
            ["Noi",       "avevamo <b>dovuto</b>"],
            ["Voi",       "avevate <b>dovuto</b>"],
            ["Loro",      "avevano <b>dovuto</b>"]
          ],
          examples: [
            { pronoun: "Lei", it: "{Aveva dovuto} vendere la macchina perché non poteva più permettersi l'assicurazione.", en: "She had had to sell the car because she could no longer afford the insurance." },
            { pronoun: "Noi", it: "{Avevamo dovuto} cambiare albergo perché il primo era sporchissimo.", en: "We had had to change hotels because the first one was filthy." }
          ]
        },
        {
          name: "Trapassato Remoto",
          what: 'Also a "past of the past" paired with the <b>passato remoto</b>. Very literary. Formed with <b>passato remoto di avere + dovuto</b>.',
          conjugations: [
            ["Io",        "ebbi <b>dovuto</b>"],
            ["Tu",        "avesti <b>dovuto</b>"],
            ["Lui / Lei", "ebbe <b>dovuto</b>"],
            ["Noi",       "avemmo <b>dovuto</b>"],
            ["Voi",       "aveste <b>dovuto</b>"],
            ["Loro",      "ebbero <b>dovuto</b>"]
          ],
          examples: [
            { pronoun: "Lui",  it: "Dopo che {ebbe dovuto} affrontare mille difficoltà, finalmente trovò la pace.", en: "After he had had to face a thousand difficulties, he finally found peace." },
            { pronoun: "Loro", it: "Non appena {ebbero dovuto} lasciare il paese, capirono quanto fosse importante la loro terra.", en: "As soon as they had had to leave the country, they understood how important their land was." }
          ]
        },
        {
          name: "Futuro Semplice",
          what: 'What you <b>will have to do</b>. Uses the contracted stem <b>dovr-</b> (the -e- drops).',
          conjugations: [
            ["Io",        "dovr<b>ò</b>"],
            ["Tu",        "dovr<b>ai</b>"],
            ["Lui / Lei", "dovr<b>à</b>"],
            ["Noi",       "dovr<b>emo</b>"],
            ["Voi",       "dovr<b>ete</b>"],
            ["Loro",      "dovr<b>anno</b>"]
          ],
          examples: [
            { pronoun: "Tu",  it: "{Dovrai} studiare molto di più se vuoi superare l'esame di medicina.", en: "You will have to study much more if you want to pass the medical exam." },
            { pronoun: "Noi", it: "{Dovremo} trovare un altro appartamento prima della fine del mese.", en: "We will have to find another apartment before the end of the month." }
          ]
        },
        {
          name: "Futuro Anteriore",
          what: "Something that <b>will have been required</b> before another future action. Formed with <b>futuro di avere + dovuto</b>.",
          conjugations: [
            ["Io",        "avrò <b>dovuto</b>"],
            ["Tu",        "avrai <b>dovuto</b>"],
            ["Lui / Lei", "avrà <b>dovuto</b>"],
            ["Noi",       "avremo <b>dovuto</b>"],
            ["Voi",       "avrete <b>dovuto</b>"],
            ["Loro",      "avranno <b>dovuto</b>"]
          ],
          examples: [
            { pronoun: "Lui", it: "{Avrà dovuto} lavorare tutta la notte per finire la presentazione in tempo.", en: "He must have had to work all night to finish the presentation on time." },
            { pronoun: "Loro", it: "{Avranno dovuto} spendere una fortuna per riparare il tetto dopo la tempesta.", en: "They must have had to spend a fortune to fix the roof after the storm." }
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
          what: "Present subjunctive — doubts/opinions about obligations <b>now or in the future</b>. Uses the stem <b>debb-</b>. Alternative forms: debba/deva, debbano/devano.",
          notes: ["⚠️ Io, Tu, and Lui/Lei are <b>all the same</b> (debba). The alternative form <b>deva</b> exists but <b>debba</b> is preferred."],
          conjugations: [
            ["(che) Io",        "<b>debba</b> <i>(deva)</i>"],
            ["(che) Tu",        "<b>debba</b> <i>(deva)</i>"],
            ["(che) Lui / Lei", "<b>debba</b> <i>(deva)</i>"],
            ["(che) Noi",       "<b>dobbiamo</b>"],
            ["(che) Voi",       "<b>dobbiate</b>"],
            ["(che) Loro",      "<b>debbano</b> <i>(devano)</i>"]
          ],
          examples: [
            { pronoun: "Tu",   it: "Credo che tu {debba} parlare con il direttore prima di prendere qualsiasi decisione.", en: "I think you must speak with the director before making any decision." },
            { pronoun: "Loro", it: "È necessario che {debbano} completare il corso prima di ottenere la certificazione.", en: "It is necessary that they must complete the course before obtaining the certification." }
          ]
        },
        {
          name: "Passato",
          what: "Past subjunctive — opinions/doubts about a past obligation. Formed with <b>congiuntivo presente di avere + dovuto</b>.",
          conjugations: [
            ["(che) Io",        "abbia <b>dovuto</b>"],
            ["(che) Tu",        "abbia <b>dovuto</b>"],
            ["(che) Lui / Lei", "abbia <b>dovuto</b>"],
            ["(che) Noi",       "abbiamo <b>dovuto</b>"],
            ["(che) Voi",       "abbiate <b>dovuto</b>"],
            ["(che) Loro",      "abbiano <b>dovuto</b>"]
          ],
          examples: [
            { pronoun: "Lui", it: "Penso che Marco {abbia dovuto} rinunciare al concerto perché era malato.", en: "I think Marco had to give up the concert because he was sick." },
            { pronoun: "Loro", it: "Credo che {abbiano dovuto} vendere la casa per pagare i debiti della famiglia.", en: "I believe they had to sell the house to pay the family's debts." }
          ]
        },
        {
          name: "Imperfetto",
          what: 'Imperfect subjunctive — used when the main verb is <b>in the past</b>, or in <b>hypothetical "se" (if) clauses</b>. Regular formation.',
          notes: ['💡 Essential in <b>se (if)</b> clauses: "Se {dovessi} scegliere, sceglierei Roma." = If I had to choose, I\'d choose Rome.'],
          conjugations: [
            ["(che) Io",        "dov<b>essi</b>"],
            ["(che) Tu",        "dov<b>essi</b>"],
            ["(che) Lui / Lei", "dov<b>esse</b>"],
            ["(che) Noi",       "dov<b>essimo</b>"],
            ["(che) Voi",       "dov<b>este</b>"],
            ["(che) Loro",      "dov<b>essero</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "Se {dovessi} ricominciare da zero, sceglierei una carriera completamente diversa.", en: "If I had to start from scratch, I would choose a completely different career." },
            { pronoun: "Noi", it: "Pensavo che {dovessimo} consegnare il rapporto entro lunedì, non entro venerdì.", en: "I thought we had to submit the report by Monday, not by Friday." }
          ]
        },
        {
          name: "Trapassato",
          what: 'Pluperfect subjunctive — hypotheticals about past obligations. Formed with <b>congiuntivo imperfetto di avere + dovuto</b>.',
          conjugations: [
            ["(che) Io",        "avessi <b>dovuto</b>"],
            ["(che) Tu",        "avessi <b>dovuto</b>"],
            ["(che) Lui / Lei", "avesse <b>dovuto</b>"],
            ["(che) Noi",       "avessimo <b>dovuto</b>"],
            ["(che) Voi",       "aveste <b>dovuto</b>"],
            ["(che) Loro",      "avessero <b>dovuto</b>"]
          ],
          examples: [
            { pronoun: "Tu",  it: "Se {avessi dovuto} lavorare anche sabato, non saresti potuto venire al matrimonio.", en: "If you had had to work on Saturday too, you wouldn't have been able to come to the wedding." },
            { pronoun: "Noi", it: "Se {avessimo dovuto} pagare tutto noi, non ce la saremmo mai potuti permettere.", en: "If we had had to pay for everything ourselves, we could never have afforded it." }
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
          what: '<b>"Should / would have to"</b> — hypotheticals, polite obligations. Uses the contracted stem <b>dovr-</b>. Very common for giving polite advice.',
          notes: ["💡 <b>Dovresti</b> is one of the most useful Italian forms — it means 'you should': <b>Dovresti riposare</b> = You should rest."],
          conjugations: [
            ["Io",        "dovr<b>ei</b>"],
            ["Tu",        "dovr<b>esti</b>"],
            ["Lui / Lei", "dovr<b>ebbe</b>"],
            ["Noi",       "dovr<b>emmo</b>"],
            ["Voi",       "dovr<b>este</b>"],
            ["Loro",      "dovr<b>ebbero</b>"]
          ],
          examples: [
            { pronoun: "Tu",  it: "{Dovresti} andare dal medico se il dolore non passa entro domani.", en: "You should go to the doctor if the pain doesn't go away by tomorrow." },
            { pronoun: "Noi", it: "{Dovremmo} partire entro le otto se vogliamo arrivare in tempo per la cerimonia.", en: "We should leave by eight if we want to arrive in time for the ceremony." }
          ]
        },
        {
          name: "Passato",
          what: '<b>"Should have / would have had to"</b> — regrets about past obligations. Formed with <b>condizionale presente di avere + dovuto</b>.',
          conjugations: [
            ["Io",        "avrei <b>dovuto</b>"],
            ["Tu",        "avresti <b>dovuto</b>"],
            ["Lui / Lei", "avrebbe <b>dovuto</b>"],
            ["Noi",       "avremmo <b>dovuto</b>"],
            ["Voi",       "avreste <b>dovuto</b>"],
            ["Loro",      "avrebbero <b>dovuto</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Avrei dovuto} ascoltare i consigli di mia madre quando mi diceva di studiare di più.", en: "I should have listened to my mother's advice when she told me to study more." },
            { pronoun: "Voi", it: "{Avreste dovuto} prenotare l'albergo prima, adesso è tutto esaurito.", en: "You should have booked the hotel earlier — now everything is sold out." }
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
          what: "<b>Not used.</b> As a modal verb, <b>dovere</b> does not have a true imperative form — you cannot command someone to 'must.' Use the imperative of the following infinitive instead (e.g., <i>Studia!</i> rather than *Devi! studiare).",
          notes: ["⚠️ Modal verbs (<b>dovere, potere, volere</b>) do not have imperative forms in standard Italian. To give commands, use the main verb directly: <b>Fallo!</b> (Do it!) instead of *Devilo fare."],
          conjugations: [
            ["—", "<i>not used</i>"]
          ],
          examples: [
            { pronoun: "", it: "Instead of an imperative of dovere, use the main verb: <i>Studia!</i> (Study!), <i>Parti!</i> (Leave!), <i>Mangia!</i> (Eat!).", en: "Modal verbs express obligation through indicative/conditional forms, not commands." }
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
          what: "An obligation happening <b>at the same time</b> as the main action.",
          conjugations: [["Gerundio presente", "<b>dovendo</b>"]],
          examples: [
            { pronoun: "", it: "{Dovendo} partire presto, ha preparato la valigia la sera prima.", en: "Having to leave early, he packed his suitcase the evening before." }
          ]
        },
        {
          name: "Passato",
          what: "An obligation that existed <b>before</b> the main action.",
          conjugations: [["Gerundio passato", "<b>avendo dovuto</b>"]],
          examples: [
            { pronoun: "", it: "{Avendo dovuto} lavorare tutto il fine settimana, lunedì era completamente esausto.", en: "Having had to work all weekend, on Monday he was completely exhausted." }
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
            ["Presente", "<b>dovere</b>"],
            ["Passato",  "<b>avere dovuto</b>"]
          ],
          examples: [
            { pronoun: "", it: "Non mi piace {dovere} chiedere il permesso per ogni piccola cosa.", en: "I don't like having to ask permission for every little thing." },
            { pronoun: "", it: "Dopo {avere dovuto} aspettare due ore, finalmente è arrivato il nostro turno.", en: "After having had to wait two hours, it was finally our turn." }
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
            ["Presente", "—", "No presente participle in common use."],
            ["Passato",  "<b>dovuto</b>", "Used in ALL compound tenses (ho dovuto, avevo dovuto, etc.). As adjective: <b>dovuto</b> = due/owed ('il rispetto dovuto' = the respect owed/due)."]
          ],
          examples: [
            { pronoun: "", it: "Le scuse {dovute} non sono mai arrivate e la situazione è peggiorata.", en: "The apologies that were due never arrived and the situation got worse." },
            { pronoun: "", it: "Il pagamento è {dovuto} entro la fine del mese, altrimenti ci saranno delle penali.", en: "The payment is due by the end of the month, otherwise there will be penalties." }
          ]
        }
      ]
    }
  ],

  quickRef: [
    { tense: "Presente",               idea: "Must / have to (now)",                example: "Devo partire." },
    { tense: "Imperfetto",             idea: "Had to (ongoing past)",               example: "Dovevo studiare." },
    { tense: "Passato Prossimo",       idea: "Had to (completed)",                  example: "Ho dovuto aspettare." },
    { tense: "Passato Remoto",         idea: "Had to (distant/literary)",            example: "Dovette rinunciare." },
    { tense: "Trapassato Prossimo",    idea: "Had had to (before another past)",     example: "Aveva dovuto vendere." },
    { tense: "Trapassato Remoto",      idea: "Had had to (literary, with p. remoto)", example: "Ebbe dovuto partire." },
    { tense: "Futuro Semplice",        idea: "Will have to",                        example: "Dovrò lavorare." },
    { tense: "Futuro Anteriore",       idea: "Will have had to",                    example: "Avrà dovuto pagare." },
    { tense: "Congiuntivo Presente",   idea: "Doubt / opinion (must now)",          example: "Credo che debba." },
    { tense: "Congiuntivo Passato",    idea: "Doubt / opinion (had to)",            example: "Penso che abbia dovuto." },
    { tense: "Congiuntivo Imperfetto", idea: "Hypothetical / if I had to",          example: "Se dovessi scegliere..." },
    { tense: "Congiuntivo Trapassato", idea: "Hypothetical about the past",         example: "Se avessi dovuto..." },
    { tense: "Condizionale Presente",  idea: "Should / would have to",              example: "Dovresti riposare." },
    { tense: "Condizionale Passato",   idea: "Should have / would have had to",     example: "Avrei dovuto ascoltare." },
    { tense: "Imperativo",            idea: "Not used (modal verb)",                example: "—" },
    { tense: "Gerundio",              idea: "Having to / having had to",            example: "Dovendo... / Avendo dovuto..." }
  ]
};
