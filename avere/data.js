const verbData = {
  verb: "avere",
  meaning: "to have",
  type: "ere",
  info: {
    subtitle: "Irregular -ERE verb — one of the two most essential Italian verbs",
    stem: "(irregular)",
    auxiliary: "AVERE",
    gerundio: "avendo",
    participioPassato: "avuto",
    extra: "Used as auxiliary verb for most transitive verbs and many intransitive verbs."
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
          what: "What is happening <b>now</b> or <b>habitually</b>. Note the silent <b>h</b> in ho, hai, ha, hanno — it distinguishes them from other words (o=or, ai=to the, a=to/at, anno=year).",
          notes: ["⚠️ The <b>h</b> is silent but essential in writing! <b>Ho</b> (I have) vs <b>o</b> (or). <b>Ha</b> (he/she has) vs <b>a</b> (to/at). This is one of the most common spelling mistakes."],
          conjugations: [
            ["Io",        "<b>ho</b>"],
            ["Tu",        "<b>hai</b>"],
            ["Lui / Lei", "<b>ha</b>"],
            ["Noi",       "<b>abbiamo</b>"],
            ["Voi",       "<b>avete</b>"],
            ["Loro",      "<b>hanno</b>"]
          ],
          examples: [
            { pronoun: "Noi", it: "{Abbiamo} tre settimane di ferie quest'anno e vogliamo andare in Grecia.", en: "We have three weeks of vacation this year and we want to go to Greece." },
            { pronoun: "Tu",  it: "{Hai} ancora la chiave del vecchio appartamento o l'hai restituita al padrone di casa?", en: "Do you still have the key to the old apartment or did you return it to the landlord?" }
          ]
        },
        {
          name: "Imperfetto",
          what: 'The <b>"used to have"</b> past — ongoing possessions or states in the past.',
          useFor: "Use it for: describing what you had, states of being in the past, age references.",
          conjugations: [
            ["Io",        "av<b>evo</b>"],
            ["Tu",        "av<b>evi</b>"],
            ["Lui / Lei", "av<b>eva</b>"],
            ["Noi",       "av<b>evamo</b>"],
            ["Voi",       "av<b>evate</b>"],
            ["Loro",      "av<b>evano</b>"]
          ],
          examples: [
            { pronoun: "Io",   it: "Quando {avevo} vent'anni, non {avevo} la minima idea di cosa fare della mia vita.", en: "When I was twenty, I had no idea what to do with my life." },
            { pronoun: "Loro", it: "I miei nonni {avevano} una casa bellissima in collina con un grande giardino.", en: "My grandparents had a beautiful house on a hill with a large garden." }
          ]
        },
        {
          name: "Passato Remoto",
          what: "A <b>completed</b> past action, typically distant in time. Somewhat irregular.",
          useFor: "Use it for: historical events, finished stories.",
          conjugations: [
            ["Io",        "<b>ebbi</b>"],
            ["Tu",        "av<b>esti</b>"],
            ["Lui / Lei", "<b>ebbe</b>"],
            ["Noi",       "av<b>emmo</b>"],
            ["Voi",       "av<b>este</b>"],
            ["Loro",      "<b>ebbero</b>"]
          ],
          examples: [
            { pronoun: "Lui",  it: "{Ebbe} il coraggio di parlare davanti a migliaia di persone senza alcuna preparazione.", en: "He had the courage to speak in front of thousands of people without any preparation." },
            { pronoun: "Loro", it: "{Ebbero} finalmente la possibilità di tornare nel loro paese dopo anni di esilio.", en: "They finally had the chance to return to their country after years of exile." }
          ]
        },
        {
          name: "Passato Prossimo",
          what: "The most common past tense in <b>spoken Italian</b>. Formed with <b>avere + avuto</b> (avere uses itself as auxiliary!).",
          conjugations: [
            ["Io",        "ho <b>avuto</b>"],
            ["Tu",        "hai <b>avuto</b>"],
            ["Lui / Lei", "ha <b>avuto</b>"],
            ["Noi",       "abbiamo <b>avuto</b>"],
            ["Voi",       "avete <b>avuto</b>"],
            ["Loro",      "hanno <b>avuto</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Ho avuto} un'idea fantastica per il progetto mentre tornavo a casa in treno.", en: "I had a fantastic idea for the project while I was coming home on the train." },
            { pronoun: "Voi", it: "{Avete avuto} problemi con il nuovo software o ha funzionato tutto bene?", en: "Did you have problems with the new software or did everything work fine?" }
          ]
        },
        {
          name: "Trapassato Prossimo",
          what: 'The <b>"past of the past"</b> — something you had before another past event. Formed with <b>imperfetto di avere + avuto</b>.',
          conjugations: [
            ["Io",        "avevo avuto"],
            ["Tu",        "avevi avuto"],
            ["Lui / Lei", "aveva avuto"],
            ["Noi",       "avevamo avuto"],
            ["Voi",       "avevate avuto"],
            ["Loro",      "avevano avuto"]
          ],
          examples: [
            { pronoun: "Lei", it: "{Aveva avuto} una giornata terribile al lavoro e voleva solo stare da sola.", en: "She had had a terrible day at work and just wanted to be alone." },
            { pronoun: "Noi", it: "Non {avevamo mai avuto} così tanti ospiti a cena e non sapevamo come organizzarci.", en: "We had never had so many guests for dinner and didn't know how to organize ourselves." }
          ]
        },
        {
          name: "Trapassato Remoto",
          what: 'Also a "past of the past" paired with the <b>passato remoto</b>. Very literary. Formed with <b>passato remoto di avere + avuto</b>.',
          conjugations: [
            ["Io",        "ebbi avuto"],
            ["Tu",        "avesti avuto"],
            ["Lui / Lei", "ebbe avuto"],
            ["Noi",       "avemmo avuto"],
            ["Voi",       "aveste avuto"],
            ["Loro",      "ebbero avuto"]
          ],
          examples: [
            { pronoun: "Lui",  it: "Dopo che {ebbe avuto} la conferma, partì immediatamente per Roma.", en: "After he had received confirmation, he left immediately for Rome." },
            { pronoun: "Loro", it: "Non appena {ebbero avuto} il permesso, iniziarono a costruire la nuova ala dell'ospedale.", en: "As soon as they had gotten permission, they began building the new wing of the hospital." }
          ]
        },
        {
          name: "Futuro Semplice",
          what: 'The simple future — what you <b>will have</b>. Uses the stem <b>avr-</b>.',
          conjugations: [
            ["Io",        "avr<b>ò</b>"],
            ["Tu",        "avr<b>ai</b>"],
            ["Lui / Lei", "avr<b>à</b>"],
            ["Noi",       "avr<b>emo</b>"],
            ["Voi",       "avr<b>ete</b>"],
            ["Loro",      "avr<b>anno</b>"]
          ],
          examples: [
            { pronoun: "Tu",   it: "{Avrai} molto più tempo libero quando finirai l'università a giugno.", en: "You will have much more free time when you finish university in June." },
            { pronoun: "Loro", it: "I ragazzi {avranno} bisogno di almeno due ore per completare l'esame.", en: "The students will need at least two hours to complete the exam." }
          ]
        },
        {
          name: "Futuro Anteriore",
          what: "The future perfect — something that <b>will have been had/done</b> before another future action. Formed with <b>futuro di avere + avuto</b>.",
          conjugations: [
            ["Io",        "avrò avuto"],
            ["Tu",        "avrai avuto"],
            ["Lui / Lei", "avrà avuto"],
            ["Noi",       "avremo avuto"],
            ["Voi",       "avrete avuto"],
            ["Loro",      "avranno avuto"]
          ],
          examples: [
            { pronoun: "Io",  it: "Entro la fine dell'anno, {avrò avuto} abbastanza esperienza per candidarmi a quel ruolo.", en: "By the end of the year, I will have had enough experience to apply for that role." },
            { pronoun: "Lei", it: "{Avrà avuto} i suoi motivi per non venire alla festa, non giudichiamola.", en: "She must have had her reasons for not coming to the party — let's not judge her." }
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
          what: "Present subjunctive — opinions/doubts about having something <b>now or in the future</b>.",
          notes: ["⚠️ Io, Tu, and Lui/Lei are <b>all the same</b> (abbia). Use the subject pronoun to disambiguate!"],
          conjugations: [
            ["(che) Io",        "<b>abbia</b>"],
            ["(che) Tu",        "<b>abbia</b>"],
            ["(che) Lui / Lei", "<b>abbia</b>"],
            ["(che) Noi",       "<b>abbiamo</b>"],
            ["(che) Voi",       "<b>abbiate</b>"],
            ["(che) Loro",      "<b>abbiano</b>"]
          ],
          examples: [
            { pronoun: "Tu",   it: "Spero che tu {abbia} ancora il biglietto perché senza non possiamo entrare.", en: "I hope you still have the ticket because without it we can't get in." },
            { pronoun: "Loro", it: "Credo che {abbiano} ragione a lamentarsi delle condizioni di lavoro.", en: "I think they are right to complain about the working conditions." }
          ]
        },
        {
          name: "Passato",
          what: "Past subjunctive — opinions/doubts about something that <b>already happened</b>. Formed with <b>congiuntivo presente di avere + avuto</b>.",
          conjugations: [
            ["(che) Io",        "abbia avuto"],
            ["(che) Tu",        "abbia avuto"],
            ["(che) Lui / Lei", "abbia avuto"],
            ["(che) Noi",       "abbiamo avuto"],
            ["(che) Voi",       "abbiate avuto"],
            ["(che) Loro",      "abbiano avuto"]
          ],
          examples: [
            { pronoun: "Lui", it: "Credo che Marco {abbia avuto} un incidente stradale, per questo non è venuto al lavoro.", en: "I think Marco had a car accident — that's why he didn't come to work." },
            { pronoun: "Noi", it: "È possibile che {abbiamo avuto} torto noi fin dall'inizio e non ce ne siamo resi conto.", en: "It's possible that we were wrong from the beginning and didn't realize it." }
          ]
        },
        {
          name: "Imperfetto",
          what: 'Imperfect subjunctive — used when the main verb is <b>in the past</b>, or in <b>hypothetical "se" (if) clauses</b>.',
          notes: ['💡 Essential in <b>se (if)</b> clauses: "Se {avessi} più tempo, viaggerei di più." = If I had more time, I\'d travel more.'],
          conjugations: [
            ["(che) Io",        "av<b>essi</b>"],
            ["(che) Tu",        "av<b>essi</b>"],
            ["(che) Lui / Lei", "av<b>esse</b>"],
            ["(che) Noi",       "av<b>essimo</b>"],
            ["(che) Voi",       "av<b>este</b>"],
            ["(che) Loro",      "av<b>essero</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "Se {avessi} più soldi, comprerei una casa al mare per tutta la famiglia.", en: "If I had more money, I would buy a house by the sea for the whole family." },
            { pronoun: "Voi", it: "Pensavo che {aveste} già prenotato l'albergo per le vacanze di agosto.", en: "I thought you had already booked the hotel for the August vacation." }
          ]
        },
        {
          name: "Trapassato",
          what: 'Pluperfect subjunctive — hypotheticals about the past. Formed with <b>congiuntivo imperfetto di avere + avuto</b>.',
          conjugations: [
            ["(che) Io",        "avessi avuto"],
            ["(che) Tu",        "avessi avuto"],
            ["(che) Lui / Lei", "avesse avuto"],
            ["(che) Noi",       "avessimo avuto"],
            ["(che) Voi",       "aveste avuto"],
            ["(che) Loro",      "avessero avuto"]
          ],
          examples: [
            { pronoun: "Tu",  it: "Se {avessi avuto} più fiducia in te stesso, avresti ottenuto quel lavoro.", en: "If you had had more confidence in yourself, you would have gotten that job." },
            { pronoun: "Noi", it: "Se {avessimo avuto} più tempo, avremmo visitato anche Firenze durante il viaggio.", en: "If we had had more time, we would have visited Florence too during the trip." }
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
          what: '<b>"Would have"</b> — hypotheticals, polite expressions. Uses the stem <b>avr-</b>.',
          conjugations: [
            ["Io",        "avr<b>ei</b>"],
            ["Tu",        "avr<b>esti</b>"],
            ["Lui / Lei", "avr<b>ebbe</b>"],
            ["Noi",       "avr<b>emmo</b>"],
            ["Voi",       "avr<b>este</b>"],
            ["Loro",      "avr<b>ebbero</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Avrei} bisogno di un consiglio, potresti aiutarmi quando hai un momento libero?", en: "I would need some advice — could you help me when you have a free moment?" },
            { pronoun: "Noi", it: "{Avremmo} voglia di uscire stasera, ma il tempo è davvero orribile.", en: "We would feel like going out tonight, but the weather is really terrible." }
          ]
        },
        {
          name: "Passato",
          what: '<b>"Would have had"</b> — hypotheticals about the past. Formed with <b>condizionale presente di avere + avuto</b>.',
          conjugations: [
            ["Io",        "avrei avuto"],
            ["Tu",        "avresti avuto"],
            ["Lui / Lei", "avrebbe avuto"],
            ["Noi",       "avremmo avuto"],
            ["Voi",       "avreste avuto"],
            ["Loro",      "avrebbero avuto"]
          ],
          examples: [
            { pronoun: "Tu",  it: "{Avresti avuto} più successo se avessi seguito i consigli del tuo professore.", en: "You would have had more success if you had followed your professor's advice." },
            { pronoun: "Loro", it: "{Avrebbero avuto} una vita più facile se fossero rimasti nel loro paese.", en: "They would have had an easier life if they had stayed in their country." }
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
            ["(Tu)",          "<b>abbi!</b>"],
            ["(Lei) formal",  "<b>abbia!</b>"],
            ["(Noi)",         "<b>abbiamo!</b>"],
            ["(Voi)",         "<b>abbiate!</b>"],
            ["(Loro) formal", "<b>abbiano!</b>"]
          ],
          examples: [
            { pronoun: "Tu",  it: "{Abbi} pazienza, il dottore ti riceverà il prima possibile.", en: "Be patient (have patience) — the doctor will see you as soon as possible." },
            { pronoun: "Voi", it: "{Abbiate} cura di voi stessi e non lavorate troppo durante le feste!", en: "Take care of yourselves (have care) and don't work too much during the holidays!" }
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
          conjugations: [["Gerundio presente", "<b>avendo</b>"]],
          examples: [
            { pronoun: "", it: "{Avendo} molto tempo libero, ha deciso di iscriversi a un corso di pittura.", en: "Having a lot of free time, he decided to sign up for a painting course." }
          ]
        },
        {
          name: "Passato",
          what: "Something that happened <b>before</b> the main action.",
          conjugations: [["Gerundio passato", "<b>avendo avuto</b>"]],
          examples: [
            { pronoun: "", it: "{Avendo avuto} problemi con il volo, sono arrivati all'albergo a mezzanotte.", en: "Having had problems with the flight, they arrived at the hotel at midnight." }
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
            ["Presente", "<b>avere</b>"],
            ["Passato",  "<b>avere avuto</b>"]
          ],
          examples: [
            { pronoun: "", it: "Per {avere} successo nella vita bisogna lavorare sodo e non arrendersi mai.", en: "To have success in life, one must work hard and never give up." },
            { pronoun: "", it: "Dopo {avere avuto} quell'incidente, ha deciso di non guidare più di notte.", en: "After having had that accident, he decided not to drive at night anymore." }
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
            ["Presente", "<b>avente</b>", "Formal/legal: 'aventi diritto' = those having the right (entitled parties)."],
            ["Passato",  "<b>avuto</b>",   "Used in ALL compound tenses (ho avuto, avevo avuto, etc.)"]
          ],
          examples: [
            { pronoun: "", it: "Le persone {aventi} diritto al rimborso devono presentare la domanda entro trenta giorni.", en: "People entitled to the refund must submit the application within thirty days." }
          ]
        }
      ]
    }
  ],

  quickRef: [
    { tense: "Presente",               idea: "Now / habitual",                    example: "Ho fame." },
    { tense: "Imperfetto",             idea: "Used to / background past",         example: "Avevo paura." },
    { tense: "Passato Prossimo",       idea: "Completed recent past",             example: "Ho avuto fortuna." },
    { tense: "Passato Remoto",         idea: "Distant / literary past",           example: "Ebbe successo." },
    { tense: "Trapassato Prossimo",    idea: "Had done (before another past)",    example: "Avevo avuto torto." },
    { tense: "Trapassato Remoto",      idea: "Had done (literary, with p. remoto)", example: "Ebbe avuto il permesso." },
    { tense: "Futuro Semplice",        idea: "Will have",                         example: "Avrò tempo." },
    { tense: "Futuro Anteriore",       idea: "Will have had",                     example: "Avrò avuto ragione." },
    { tense: "Congiuntivo Presente",   idea: "Doubt / opinion (present)",         example: "Penso che abbia." },
    { tense: "Congiuntivo Passato",    idea: "Doubt / opinion (past)",            example: "Penso che abbia avuto." },
    { tense: "Congiuntivo Imperfetto", idea: "Hypothetical / past doubt",         example: "Se avessi tempo..." },
    { tense: "Congiuntivo Trapassato", idea: "Hypothetical about the past",       example: "Se avessi avuto..." },
    { tense: "Condizionale Presente",  idea: "Would have",                        example: "Avrei bisogno." },
    { tense: "Condizionale Passato",   idea: "Would have had",                    example: "Avrei avuto ragione." },
    { tense: "Imperativo",            idea: "Commands",                           example: "Abbi pazienza!" },
    { tense: "Gerundio",              idea: "While having / having had",          example: "Avendo... / Avendo avuto..." }
  ]
};
