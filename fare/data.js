const verbData = {
  verb: "fare",
  meaning: "to do / to make",
  type: "are",
  info: {
    subtitle: "Irregular -ARE verb (from Latin: <b>facere</b>)",
    stem: "FA- / FAC-",
    auxiliary: "AVERE",
    gerundio: "facendo",
    participioPassato: "fatto (irregular)",
    extra: "Extremely versatile — used in hundreds of expressions: fare colazione (have breakfast), fare freddo (be cold), fare una domanda (ask a question)..."
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
          what: "What is happening <b>now</b> or <b>habitually</b>. Uses the Latin root <b>fac-</b> in most forms.",
          conjugations: [
            ["Io",        "<b>faccio</b>"],
            ["Tu",        "<b>fai</b>"],
            ["Lui / Lei", "<b>fa</b>"],
            ["Noi",       "<b>facciamo</b>"],
            ["Voi",       "<b>fate</b>"],
            ["Loro",      "<b>fanno</b>"]
          ],
          examples: [
            { pronoun: "Io",   it: "{Faccio} sempre colazione al bar perché a casa non ho mai tempo.", en: "I always have breakfast at the café because at home I never have time." },
            { pronoun: "Loro", it: "I ragazzi {fanno} troppo rumore quando giocano nel cortile dopo la scuola.", en: "The kids make too much noise when they play in the courtyard after school." }
          ]
        },
        {
          name: "Imperfetto",
          what: 'The <b>"used to do"</b> past — ongoing or habitual actions. Uses the full Latin stem <b>fac-</b> with -ERE endings (because fare comes from facere).',
          useFor: "Use it for: habits in the past, descriptions, background situations.",
          notes: ["💡 Like dire, fare takes <b>-ERE</b> imperfetto endings (-evo, -evi...) because it descends from Latin <b>facere</b>."],
          conjugations: [
            ["Io",        "fac<b>evo</b>"],
            ["Tu",        "fac<b>evi</b>"],
            ["Lui / Lei", "fac<b>eva</b>"],
            ["Noi",       "fac<b>evamo</b>"],
            ["Voi",       "fac<b>evate</b>"],
            ["Loro",      "fac<b>evano</b>"]
          ],
          examples: [
            { pronoun: "Noi", it: "Da bambini {facevamo} sempre i compiti insieme a casa della mia migliore amica.", en: "As children, we always did homework together at my best friend's house." },
            { pronoun: "Lei", it: "Mia madre {faceva} il pane in casa ogni domenica mattina, e il profumo riempiva tutta la casa.", en: "My mother used to make bread at home every Sunday morning, and the smell filled the whole house." }
          ]
        },
        {
          name: "Passato Remoto",
          what: "A <b>completed</b> past action. Fare has irregular doubled-consonant forms: <b>feci, fece, fecero</b>.",
          useFor: "Use it for: historical events, finished stories.",
          conjugations: [
            ["Io",        "<b>feci</b>"],
            ["Tu",        "fac<b>esti</b>"],
            ["Lui / Lei", "<b>fece</b>"],
            ["Noi",       "fac<b>emmo</b>"],
            ["Voi",       "fac<b>este</b>"],
            ["Loro",      "<b>fecero</b>"]
          ],
          examples: [
            { pronoun: "Lui", it: "Garibaldi {fece} l'impresa dei Mille e cambiò per sempre la storia d'Italia.", en: "Garibaldi undertook the Expedition of the Thousand and changed the history of Italy forever." },
            { pronoun: "Io",  it: "{Feci} un errore gravissimo quel giorno e me ne pentii per anni.", en: "I made a very serious mistake that day and I regretted it for years." }
          ]
        },
        {
          name: "Passato Prossimo",
          what: "The most common past tense in <b>spoken Italian</b>. Formed with <b>avere + fatto</b> (irregular past participle!).",
          notes: ["⚠️ The past participle is <b>fatto</b>, NOT 'faciuto' or 'fato'. Memorize it!"],
          conjugations: [
            ["Io",        "ho <b>fatto</b>"],
            ["Tu",        "hai <b>fatto</b>"],
            ["Lui / Lei", "ha <b>fatto</b>"],
            ["Noi",       "abbiamo <b>fatto</b>"],
            ["Voi",       "avete <b>fatto</b>"],
            ["Loro",      "hanno <b>fatto</b>"]
          ],
          examples: [
            { pronoun: "Noi", it: "{Abbiamo fatto} una lunga passeggiata lungo il fiume e ci siamo fermati a mangiare un gelato.", en: "We took a long walk along the river and stopped to eat an ice cream." },
            { pronoun: "Tu",  it: "Che cosa {hai fatto} questo fine settimana? Sei rimasto a casa o sei uscito?", en: "What did you do this weekend? Did you stay home or go out?" }
          ]
        },
        {
          name: "Trapassato Prossimo",
          what: 'The <b>"past of the past"</b>. Formed with <b>imperfetto di avere + fatto</b>.',
          conjugations: [
            ["Io",        "avevo fatto"],
            ["Tu",        "avevi fatto"],
            ["Lui / Lei", "aveva fatto"],
            ["Noi",       "avevamo fatto"],
            ["Voi",       "avevate fatto"],
            ["Loro",      "avevano fatto"]
          ],
          examples: [
            { pronoun: "Io",   it: "{Avevo già fatto} la valigia quando mi hanno detto che il volo era stato cancellato.", en: "I had already packed my suitcase when they told me the flight had been cancelled." },
            { pronoun: "Loro", it: "{Avevano fatto} tutto il possibile per salvare il ristorante, ma purtroppo non è bastato.", en: "They had done everything possible to save the restaurant, but unfortunately it wasn't enough." }
          ]
        },
        {
          name: "Trapassato Remoto",
          what: 'Very literary "past of the past". Formed with <b>passato remoto di avere + fatto</b>.',
          conjugations: [
            ["Io",        "ebbi fatto"],
            ["Tu",        "avesti fatto"],
            ["Lui / Lei", "ebbe fatto"],
            ["Noi",       "avemmo fatto"],
            ["Voi",       "aveste fatto"],
            ["Loro",      "ebbero fatto"]
          ],
          examples: [
            { pronoun: "Lui",  it: "Dopo che {ebbe fatto} testamento, il vecchio conte si ritirò nella sua camera.", en: "After he had made his will, the old count withdrew to his room." },
            { pronoun: "Loro", it: "Non appena {ebbero fatto} le valigie, partirono per il loro nuovo paese.", en: "As soon as they had packed their bags, they left for their new country." }
          ]
        },
        {
          name: "Futuro Semplice",
          what: 'The simple future — what you <b>will do</b>. Uses the contracted stem <b>far-</b>.',
          conjugations: [
            ["Io",        "far<b>ò</b>"],
            ["Tu",        "far<b>ai</b>"],
            ["Lui / Lei", "far<b>à</b>"],
            ["Noi",       "far<b>emo</b>"],
            ["Voi",       "far<b>ete</b>"],
            ["Loro",      "far<b>anno</b>"]
          ],
          examples: [
            { pronoun: "Io",   it: "Domani {farò} una torta al cioccolato per il compleanno di mia figlia.", en: "Tomorrow I will make a chocolate cake for my daughter's birthday." },
            { pronoun: "Voi", it: "Che cosa {farete} durante le vacanze di Natale quest'anno?", en: "What will you do during the Christmas holidays this year?" }
          ]
        },
        {
          name: "Futuro Anteriore",
          what: "The future perfect. Formed with <b>futuro di avere + fatto</b>.",
          conjugations: [
            ["Io",        "avrò fatto"],
            ["Tu",        "avrai fatto"],
            ["Lui / Lei", "avrà fatto"],
            ["Noi",       "avremo fatto"],
            ["Voi",       "avrete fatto"],
            ["Loro",      "avranno fatto"]
          ],
          examples: [
            { pronoun: "Tu",  it: "Quando avrai finito, {avrai fatto} il lavoro più difficile della tua carriera.", en: "When you finish, you will have done the hardest work of your career." },
            { pronoun: "Lei", it: "Maria {avrà già fatto} la spesa prima che noi arriviamo a casa.", en: "Maria will have already done the shopping before we get home." }
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
          what: "Present subjunctive — opinions/doubts about doing something <b>now or in the future</b>. Uses the stem <b>fac-</b>.",
          notes: ["⚠️ Io, Tu, and Lui/Lei are <b>all the same</b> (faccia)."],
          conjugations: [
            ["(che) Io",        "<b>faccia</b>"],
            ["(che) Tu",        "<b>faccia</b>"],
            ["(che) Lui / Lei", "<b>faccia</b>"],
            ["(che) Noi",       "<b>facciamo</b>"],
            ["(che) Voi",       "<b>facciate</b>"],
            ["(che) Loro",      "<b>facciano</b>"]
          ],
          examples: [
            { pronoun: "Tu",   it: "Voglio che tu {faccia} i compiti prima di accendere la televisione.", en: "I want you to do your homework before turning on the TV." },
            { pronoun: "Loro", it: "È necessario che {facciano} un piano dettagliato prima di iniziare il progetto.", en: "It's necessary that they make a detailed plan before starting the project." }
          ]
        },
        {
          name: "Passato",
          what: "Past subjunctive. Formed with <b>congiuntivo presente di avere + fatto</b>.",
          conjugations: [
            ["(che) Io",        "abbia fatto"],
            ["(che) Tu",        "abbia fatto"],
            ["(che) Lui / Lei", "abbia fatto"],
            ["(che) Noi",       "abbiamo fatto"],
            ["(che) Voi",       "abbiate fatto"],
            ["(che) Loro",      "abbiano fatto"]
          ],
          examples: [
            { pronoun: "Lui", it: "Credo che Marco {abbia fatto} la cosa giusta lasciando quel lavoro che lo rendeva infelice.", en: "I think Marco did the right thing leaving that job that made him unhappy." },
            { pronoun: "Noi", it: "Spero che {abbiamo fatto} una buona impressione durante il colloquio di ieri.", en: "I hope we made a good impression during yesterday's interview." }
          ]
        },
        {
          name: "Imperfetto",
          what: 'Imperfect subjunctive — used in <b>hypothetical "se" (if) clauses</b> and past contexts.',
          notes: ['💡 "Se {facessi} sport, saresti più in forma." = If you exercised, you\'d be in better shape.'],
          conjugations: [
            ["(che) Io",        "fac<b>essi</b>"],
            ["(che) Tu",        "fac<b>essi</b>"],
            ["(che) Lui / Lei", "fac<b>esse</b>"],
            ["(che) Noi",       "fac<b>essimo</b>"],
            ["(che) Voi",       "fac<b>este</b>"],
            ["(che) Loro",      "fac<b>essero</b>"]
          ],
          examples: [
            { pronoun: "Tu",  it: "Se {facessi} più attenzione in classe, non avresti bisogno di ripetizioni.", en: "If you paid more attention in class, you wouldn't need tutoring." },
            { pronoun: "Noi", it: "Il capo voleva che {facessimo} straordinari ogni giorno, ma noi ci siamo rifiutati.", en: "The boss wanted us to do overtime every day, but we refused." }
          ]
        },
        {
          name: "Trapassato",
          what: 'Pluperfect subjunctive — hypotheticals about the past. Formed with <b>congiuntivo imperfetto di avere + fatto</b>.',
          conjugations: [
            ["(che) Io",        "avessi fatto"],
            ["(che) Tu",        "avessi fatto"],
            ["(che) Lui / Lei", "avesse fatto"],
            ["(che) Noi",       "avessimo fatto"],
            ["(che) Voi",       "aveste fatto"],
            ["(che) Loro",      "avessero fatto"]
          ],
          examples: [
            { pronoun: "Io",  it: "Se {avessi fatto} il medico come voleva mio padre, ora guadagnerei molto di più.", en: "If I had become a doctor as my father wanted, I would earn much more now." },
            { pronoun: "Loro", it: "Se {avessero fatto} le riparazioni in tempo, il tetto non sarebbe crollato.", en: "If they had done the repairs in time, the roof wouldn't have collapsed." }
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
          what: '<b>"Would do/make"</b> — hypotheticals, polite expressions. Uses the contracted stem <b>far-</b>.',
          conjugations: [
            ["Io",        "far<b>ei</b>"],
            ["Tu",        "far<b>esti</b>"],
            ["Lui / Lei", "far<b>ebbe</b>"],
            ["Noi",       "far<b>emmo</b>"],
            ["Voi",       "far<b>este</b>"],
            ["Loro",      "far<b>ebbero</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Farei} qualsiasi cosa per riavere indietro quei momenti felici della mia infanzia.", en: "I would do anything to have back those happy moments of my childhood." },
            { pronoun: "Tu",  it: "Al posto mio, che cosa {faresti}? Accetteresti l'offerta di lavoro all'estero?", en: "In my place, what would you do? Would you accept the job offer abroad?" }
          ]
        },
        {
          name: "Passato",
          what: '<b>"Would have done/made"</b> — hypotheticals about the past. Formed with <b>condizionale presente di avere + fatto</b>.',
          conjugations: [
            ["Io",        "avrei fatto"],
            ["Tu",        "avresti fatto"],
            ["Lui / Lei", "avrebbe fatto"],
            ["Noi",       "avremmo fatto"],
            ["Voi",       "avreste fatto"],
            ["Loro",      "avrebbero fatto"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Avrei fatto} meglio a restare a casa invece di uscire con quel tempo orribile.", en: "I would have done better to stay home instead of going out in that horrible weather." },
            { pronoun: "Noi", it: "{Avremmo fatto} una festa più grande se avessimo avuto un giardino.", en: "We would have had a bigger party if we had had a garden." }
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
          what: "Direct commands. Note: the Tu form <b>fa'/fai</b> has two accepted forms — the apostrophe version is more common in everyday speech.",
          notes: ["💡 Both <b>fa'</b> and <b>fai</b> are correct for the Tu imperative. Fa' is more colloquial, fai is more standard."],
          conjugations: [
            ["(Tu)",          "<b>fa' / fai!</b>"],
            ["(Lei) formal",  "<b>faccia!</b>"],
            ["(Noi)",         "<b>facciamo!</b>"],
            ["(Voi)",         "<b>fate!</b>"],
            ["(Loro) formal", "<b>facciano!</b>"]
          ],
          examples: [
            { pronoun: "Tu",  it: "{Fa'} silenzio e ascolta quello che ti sto dicendo, è molto importante!", en: "Be quiet and listen to what I'm telling you — it's very important!" },
            { pronoun: "Noi", it: "{Facciamo} una pausa e prendiamoci un caffè prima di continuare a lavorare.", en: "Let's take a break and have a coffee before continuing to work." }
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
          what: "Something happening <b>at the same time</b> as the main action. Uses the Latin stem <b>fac-</b>.",
          conjugations: [["Gerundio presente", "<b>facendo</b>"]],
          examples: [
            { pronoun: "", it: "{Facendo} sport regolarmente, ho migliorato la mia salute e il mio umore.", en: "By exercising regularly, I improved my health and my mood." }
          ]
        },
        {
          name: "Passato",
          what: "Something that happened <b>before</b> the main action.",
          conjugations: [["Gerundio passato", "<b>avendo fatto</b>"]],
          examples: [
            { pronoun: "", it: "{Avendo fatto} tutti i compiti, i bambini hanno potuto guardare la televisione.", en: "Having done all the homework, the children were able to watch TV." }
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
            ["Presente", "<b>fare</b>"],
            ["Passato",  "<b>avere fatto</b>"]
          ],
          examples: [
            { pronoun: "", it: "Non so {fare} la carbonara come la fa mia nonna, la sua è imbattibile.", en: "I don't know how to make carbonara like my grandmother — hers is unbeatable." },
            { pronoun: "", it: "Dopo {avere fatto} un brutto sogno, non sono riuscito a riaddormentarmi.", en: "After having had a bad dream, I couldn't fall back asleep." }
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
            ["Presente", "<b>facente</b>", "Formal: 'facente funzione' = acting (as), interim."],
            ["Passato",  "<b>fatto</b>",   "IRREGULAR. Also used as adjective/noun: 'fatto in casa' = homemade, 'un fatto' = a fact."]
          ],
          examples: [
            { pronoun: "", it: "Questo formaggio è {fatto} in casa con latte fresco delle nostre mucche.", en: "This cheese is homemade with fresh milk from our cows." }
          ]
        }
      ]
    }
  ],

  quickRef: [
    { tense: "Presente",               idea: "Now / habitual",                    example: "Faccio colazione." },
    { tense: "Imperfetto",             idea: "Used to / background past",         example: "Facevo sport." },
    { tense: "Passato Prossimo",       idea: "Completed recent past",             example: "Ho fatto bene." },
    { tense: "Passato Remoto",         idea: "Distant / literary past",           example: "Fece un errore." },
    { tense: "Trapassato Prossimo",    idea: "Had done (before another past)",    example: "Avevo fatto tutto." },
    { tense: "Trapassato Remoto",      idea: "Had done (literary, with p. remoto)", example: "Ebbe fatto testamento." },
    { tense: "Futuro Semplice",        idea: "Will do",                           example: "Farò una torta." },
    { tense: "Futuro Anteriore",       idea: "Will have done",                    example: "Avrò fatto tutto." },
    { tense: "Congiuntivo Presente",   idea: "Doubt / opinion (present)",         example: "Penso che faccia." },
    { tense: "Congiuntivo Passato",    idea: "Doubt / opinion (past)",            example: "Penso che abbia fatto." },
    { tense: "Congiuntivo Imperfetto", idea: "Hypothetical / past doubt",         example: "Se facessi sport..." },
    { tense: "Congiuntivo Trapassato", idea: "Hypothetical about the past",       example: "Se avessi fatto..." },
    { tense: "Condizionale Presente",  idea: "Would do",                          example: "Farei qualsiasi cosa." },
    { tense: "Condizionale Passato",   idea: "Would have done",                   example: "Avrei fatto meglio." },
    { tense: "Imperativo",            idea: "Commands",                           example: "Fa' silenzio!" },
    { tense: "Gerundio",              idea: "While doing / having done",          example: "Facendo... / Avendo fatto..." }
  ]
};
