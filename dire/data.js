const verbData = {
  verb: "dire",
  meaning: "to say / to tell",
  type: "ire",
  info: {
    subtitle: "Irregular -IRE verb (from Latin: <b>dicere</b>)",
    stem: "DIC-",
    auxiliary: "AVERE",
    gerundio: "dicendo",
    participioPassato: "detto (irregular)",
    extra: "Compounds: predire, contraddire, maledire, benedire, disdire..."
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
          what: "What is happening <b>now</b> or <b>habitually</b>. Dire is highly irregular here — the stem <b>dic-</b> appears throughout.",
          notes: ["⚠️ <b>Voi dite</b> is the odd one out — it doesn't use the dic- stem. This is a remnant of the old Latin form."],
          conjugations: [
            ["Io",        "<b>dico</b>"],
            ["Tu",        "<b>dici</b>"],
            ["Lui / Lei", "<b>dice</b>"],
            ["Noi",       "<b>diciamo</b>"],
            ["Voi",       "<b>dite</b>"],
            ["Loro",      "<b>dicono</b>"]
          ],
          examples: [
            { pronoun: "Noi", it: "{Diciamo} sempre la verità anche quando è difficile da accettare.", en: "We always tell the truth even when it's hard to accept." },
            { pronoun: "Tu",  it: "Tu {dici} che vuoi cambiare, ma non fai mai niente di diverso.", en: "You say you want to change, but you never do anything different." }
          ]
        },
        {
          name: "Imperfetto",
          what: 'The <b>"used to"</b> past — ongoing, repeated, or background actions. Uses the hidden stem <b>dic-</b> with <b>-ERE endings</b> (because dire comes from Latin dicere).',
          useFor: "Use it for: habits in the past, descriptions, background situations.",
          notes: ["💡 Notice the <b>-ERE</b> imperfetto endings (-evo, -evi...) instead of -IRE endings (-ivo, -ivi...). This is because dire descends from Latin <b>dicere</b>, a 3rd conjugation (-ERE) verb."],
          conjugations: [
            ["Io",        "dic<b>evo</b>"],
            ["Tu",        "dic<b>evi</b>"],
            ["Lui / Lei", "dic<b>eva</b>"],
            ["Noi",       "dic<b>evamo</b>"],
            ["Voi",       "dic<b>evate</b>"],
            ["Loro",      "dic<b>evano</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "Da bambino, {dicevo} sempre che volevo diventare un astronauta.", en: "As a child, I always used to say I wanted to become an astronaut." },
            { pronoun: "Lei", it: "Mia nonna {diceva} che la pazienza è la virtù dei forti.", en: "My grandmother used to say that patience is the virtue of the strong." }
          ]
        },
        {
          name: "Passato Remoto",
          what: "A <b>completed</b> past action, typically distant in time or used in literature. Dire has irregular doubled-consonant forms: <b>dissi, disse, dissero</b>.",
          useFor: "Use it for: historical events, finished stories. In northern Italy, people use passato prossimo instead in everyday speech.",
          conjugations: [
            ["Io",        "<b>dissi</b>"],
            ["Tu",        "dic<b>esti</b>"],
            ["Lui / Lei", "<b>disse</b>"],
            ["Noi",       "dic<b>emmo</b>"],
            ["Voi",       "dic<b>este</b>"],
            ["Loro",      "<b>dissero</b>"]
          ],
          examples: [
            { pronoun: "Lui",  it: "Il professore {disse} qualcosa di importante, ma nessuno lo ascoltò.", en: "The professor said something important, but nobody listened to him." },
            { pronoun: "Loro", it: "{Dissero} che non sarebbero mai più tornati in quella città.", en: "They said they would never return to that city again." }
          ]
        },
        {
          name: "Passato Prossimo",
          what: "The most common past tense in <b>spoken Italian</b> — a completed action with present relevance. Formed with <b>avere + detto</b> (irregular past participle!).",
          notes: ['⚠️ The past participle is <b>detto</b>, NOT "dirito" or "dito". This is one of the most common irregular past participles — memorize it!'],
          conjugations: [
            ["Io",        "ho <b>detto</b>"],
            ["Tu",        "hai <b>detto</b>"],
            ["Lui / Lei", "ha <b>detto</b>"],
            ["Noi",       "abbiamo <b>detto</b>"],
            ["Voi",       "avete <b>detto</b>"],
            ["Loro",      "hanno <b>detto</b>"]
          ],
          examples: [
            { pronoun: "Lui", it: "{Ha detto} che avrebbe chiamato appena fosse arrivato a casa.", en: "He said he would call as soon as he got home." },
            { pronoun: "Voi", it: "{Avete detto} che il progetto sarebbe stato pronto entro venerdì.", en: "You (all) said the project would be ready by Friday." }
          ]
        },
        {
          name: "Trapassato Prossimo",
          what: 'The <b>"past of the past"</b> — something that happened <b>before</b> another past event. Like English "had said." Formed with <b>imperfetto di avere + detto</b>.',
          conjugations: [
            ["Io",        "avevo detto"],
            ["Tu",        "avevi detto"],
            ["Lui / Lei", "aveva detto"],
            ["Noi",       "avevamo detto"],
            ["Voi",       "avevate detto"],
            ["Loro",      "avevano detto"]
          ],
          examples: [
            { pronoun: "Io",   it: "{Avevo già detto} tutto quando lui è arrivato e ha ricominciato a fare domande.", en: "I had already said everything when he arrived and started asking questions again." },
            { pronoun: "Loro", it: "Gli insegnanti {avevano detto} ai genitori che il ragazzo aveva bisogno di più sostegno.", en: "The teachers had told the parents that the boy needed more support." }
          ]
        },
        {
          name: "Trapassato Remoto",
          what: 'Also a "past of the past" but paired with the <b>passato remoto</b>. Very literary, rarely used in conversation. Formed with <b>passato remoto di avere + detto</b>.',
          conjugations: [
            ["Io",        "ebbi detto"],
            ["Tu",        "avesti detto"],
            ["Lui / Lei", "ebbe detto"],
            ["Noi",       "avemmo detto"],
            ["Voi",       "aveste detto"],
            ["Loro",      "ebbero detto"]
          ],
          examples: [
            { pronoun: "Lui",  it: "Dopo che {ebbe detto} quelle parole, si voltò e partì senza guardarsi indietro.", en: "After he had said those words, he turned around and left without looking back." },
            { pronoun: "Loro", it: "Non appena {ebbero detto} la verità, tutti nella stanza rimasero in silenzio.", en: "As soon as they had told the truth, everyone in the room fell silent." }
          ]
        },
        {
          name: "Futuro Semplice",
          what: "The simple future — what <b>will</b> happen. Uses the contracted stem <b>dir-</b>. Can also express <b>probability in the present</b>.",
          notes: ['💡 <b>Futuro di probabilità:</b> "Che cosa <b>dirà</b> di noi la gente?" = What do people probably say about us? (guessing about the present!)'],
          conjugations: [
            ["Io",        "dir<b>ò</b>"],
            ["Tu",        "dir<b>ai</b>"],
            ["Lui / Lei", "dir<b>à</b>"],
            ["Noi",       "dir<b>emo</b>"],
            ["Voi",       "dir<b>ete</b>"],
            ["Loro",      "dir<b>anno</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Dirò} a Marco di venire alla festa solo quando sarò sicuro della data.", en: "I will tell Marco to come to the party only when I'm sure of the date." },
            { pronoun: "Noi", it: "{Diremo} ai nostri genitori la notizia quando ci incontreremo a Natale.", en: "We will tell our parents the news when we meet at Christmas." }
          ]
        },
        {
          name: "Futuro Anteriore",
          what: "The future perfect — something that <b>will have been completed</b> before another future action. Formed with <b>futuro di avere + detto</b>.",
          conjugations: [
            ["Io",        "avrò detto"],
            ["Tu",        "avrai detto"],
            ["Lui / Lei", "avrà detto"],
            ["Noi",       "avremo detto"],
            ["Voi",       "avrete detto"],
            ["Loro",      "avranno detto"]
          ],
          examples: [
            { pronoun: "Tu",  it: "Quando ti chiederanno scusa, tu {avrai già detto} tutto quello che pensavi.", en: "When they apologize to you, you will have already said everything you were thinking." },
            { pronoun: "Lei", it: "Entro domani sera, Maria {avrà detto} a tutti del matrimonio.", en: "By tomorrow evening, Maria will have told everyone about the wedding." }
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
          what: "Present subjunctive — opinions/doubts about something happening <b>now or in the future</b>. Uses the stem <b>dic-</b>.",
          notes: ["⚠️ Io, Tu, and Lui/Lei are <b>all the same</b> (dica). You need the subject pronoun or context to tell them apart!"],
          conjugations: [
            ["(che) Io",        "<b>dica</b>"],
            ["(che) Tu",        "<b>dica</b>"],
            ["(che) Lui / Lei", "<b>dica</b>"],
            ["(che) Noi",       "<b>diciamo</b>"],
            ["(che) Voi",       "<b>diciate</b>"],
            ["(che) Loro",      "<b>dicano</b>"]
          ],
          examples: [
            { pronoun: "Tu",   it: "Penso che tu {dica} la verità, ma non tutti ti crederanno facilmente.", en: "I think you're telling the truth, but not everyone will believe you easily." },
            { pronoun: "Loro", it: "Non credo che {dicano} queste cose per cattiveria, forse è solo un malinteso.", en: "I don't think they say these things out of malice — maybe it's just a misunderstanding." }
          ]
        },
        {
          name: "Passato",
          what: "Past subjunctive — opinions/doubts about something that <b>already happened</b>. Formed with <b>congiuntivo presente di avere + detto</b>.",
          conjugations: [
            ["(che) Io",        "abbia detto"],
            ["(che) Tu",        "abbia detto"],
            ["(che) Lui / Lei", "abbia detto"],
            ["(che) Noi",       "abbiamo detto"],
            ["(che) Voi",       "abbiate detto"],
            ["(che) Loro",      "abbiano detto"]
          ],
          examples: [
            { pronoun: "Lui", it: "Credo che Marco {abbia detto} qualcosa di sbagliato durante la riunione con il cliente.", en: "I think Marco said something wrong during the meeting with the client." },
            { pronoun: "Voi", it: "Mi sembra che {abbiate detto} cose molto diverse da quello che era stato concordato.", en: "It seems to me that you said very different things from what had been agreed upon." }
          ]
        },
        {
          name: "Imperfetto",
          what: 'Imperfect subjunctive — used when the main verb is <b>in the past</b>, or in <b>hypothetical "se" (if) clauses</b>.',
          notes: ['💡 Essential in <b>se (if)</b> clauses: "Se tu <b>dicessi</b> la verità, tutto sarebbe più semplice." = If you told the truth, everything would be simpler.'],
          conjugations: [
            ["(che) Io",        "dic<b>essi</b>"],
            ["(che) Tu",        "dic<b>essi</b>"],
            ["(che) Lui / Lei", "dic<b>esse</b>"],
            ["(che) Noi",       "dic<b>essimo</b>"],
            ["(che) Voi",       "dic<b>este</b>"],
            ["(che) Loro",      "dic<b>essero</b>"]
          ],
          examples: [
            { pronoun: "Tu",  it: "Pensavo che tu {dicessi} la verità, invece mi stavi mentendo per tutto il tempo.", en: "I thought you were telling the truth, but you were lying to me the whole time." },
            { pronoun: "Noi", it: "Il capo voleva che {dicessimo} ai clienti che il prodotto era pronto, ma non lo era.", en: "The boss wanted us to tell the clients that the product was ready, but it wasn't." }
          ]
        },
        {
          name: "Trapassato",
          what: 'Pluperfect subjunctive — the most "past" of the subjunctive forms, used in <b>hypotheticals about the past</b>. Formed with <b>congiuntivo imperfetto di avere + detto</b>.',
          conjugations: [
            ["(che) Io",        "avessi detto"],
            ["(che) Tu",        "avessi detto"],
            ["(che) Lui / Lei", "avesse detto"],
            ["(che) Noi",       "avessimo detto"],
            ["(che) Voi",       "aveste detto"],
            ["(che) Loro",      "avessero detto"]
          ],
          examples: [
            { pronoun: "Tu",   it: "Se tu {avessi detto} la verità fin dall'inizio, non saremmo in questa situazione.", en: "If you had told the truth from the beginning, we wouldn't be in this situation." },
            { pronoun: "Loro", it: "Se {avessero detto} quello che sapevano, l'indagine si sarebbe conclusa molto prima.", en: "If they had said what they knew, the investigation would have ended much sooner." }
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
          what: '<b>"Would say/tell"</b> — hypotheticals, polite expressions, wishes. Uses the contracted stem <b>dir-</b>.',
          conjugations: [
            ["Io",        "dir<b>ei</b>"],
            ["Tu",        "dir<b>esti</b>"],
            ["Lui / Lei", "dir<b>ebbe</b>"],
            ["Noi",       "dir<b>emmo</b>"],
            ["Voi",       "dir<b>este</b>"],
            ["Loro",      "dir<b>ebbero</b>"]
          ],
          examples: [
            { pronoun: "Io", it: "{Direi} che questo ristorante è il migliore che abbiamo provato finora.", en: "I would say this restaurant is the best we've tried so far." },
            { pronoun: "Tu", it: "{Diresti} la stessa cosa se fossi al mio posto e avessi visto tutto?", en: "Would you say the same thing if you were in my place and had seen everything?" }
          ]
        },
        {
          name: "Passato",
          what: '<b>"Would have said/told"</b> — hypotheticals about the past. Formed with <b>condizionale presente di avere + detto</b>.',
          conjugations: [
            ["Io",        "avrei detto"],
            ["Tu",        "avresti detto"],
            ["Lui / Lei", "avrebbe detto"],
            ["Noi",       "avremmo detto"],
            ["Voi",       "avreste detto"],
            ["Loro",      "avrebbero detto"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Avrei detto} la verità, ma avevo paura di perdere il lavoro.", en: "I would have told the truth, but I was afraid of losing my job." },
            { pronoun: "Noi", it: "{Avremmo detto} tutto ai giornalisti, ma l'avvocato ci ha consigliato di tacere.", en: "We would have told the journalists everything, but the lawyer advised us to keep quiet." }
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
          what: "Direct commands. Note the <b>apostrophe in di'</b> — it's a shortened form unique to dire!",
          notes: ['⚠️ <b>Di\'</b> (with apostrophe) is the Tu imperative — don\'t confuse it with the preposition "di" (of/from). The apostrophe marks it as a truncated verb form.'],
          conjugations: [
            ["(Tu)",          "<b>di'!</b>"],
            ["(Lei) formal",  "<b>dica!</b>"],
            ["(Noi)",         "<b>diciamo!</b>"],
            ["(Voi)",         "<b>dite!</b>"],
            ["(Loro) formal", "<b>dicano!</b>"]
          ],
          examples: [
            { pronoun: "Tu",  it: "{Di'} a tuo fratello di spegnere la televisione e venire a tavola!", en: "Tell your brother to turn off the TV and come to the table!" },
            { pronoun: "Voi", it: "{Dite} chiaramente quello che pensate invece di restare in silenzio!", en: "Say clearly what you think instead of staying silent!" }
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
          conjugations: [["Gerundio presente", "<b>dicendo</b>"]],
          examples: [
            { pronoun: "", it: "{Dicendo} questo, si alzò dalla sedia e uscì dalla stanza senza aggiungere nulla.", en: "Saying this, he got up from the chair and left the room without adding anything." }
          ]
        },
        {
          name: "Passato",
          what: "Something that happened <b>before</b> the main action.",
          conjugations: [["Gerundio passato", "<b>avendo detto</b>"]],
          examples: [
            { pronoun: "", it: "{Avendo detto} tutto quello che doveva, si sentì finalmente libero da quel peso.", en: "Having said everything he needed to, he finally felt free of that burden." }
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
            ["Presente", "<b>dire</b>"],
            ["Passato",  "<b>avere detto</b>"]
          ],
          examples: [
            { pronoun: "", it: "Voglio {dire} qualcosa di importante prima che sia troppo tardi.", en: "I want to say something important before it's too late." },
            { pronoun: "", it: "Dopo {avere detto} quelle parole, si rese conto che aveva esagerato.", en: "After having said those words, he realized he had gone too far." }
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
            ["Presente", "<b>dicente</b>", "Very rare, literary. Mostly found in legal/formal language."],
            ["Passato",  "<b>detto</b>",   'IRREGULAR — used in ALL compound tenses. Also used as noun: "un detto popolare" = a popular saying.']
          ],
          examples: [
            { pronoun: "", it: '"Chi ha {detto} che la vita è facile?" è un vecchio {detto} che mia madre ripeteva spesso.', en: '"Who said life is easy?" is an old saying that my mother often repeated.' }
          ]
        }
      ]
    }
  ],

  quickRef: [
    { tense: "Presente",               idea: "Now / habitual",                    example: "Dico la verità." },
    { tense: "Imperfetto",             idea: "Used to / background past",         example: "Dicevo sempre così." },
    { tense: "Passato Prossimo",       idea: "Completed recent past",             example: "Ho detto tutto." },
    { tense: "Passato Remoto",         idea: "Distant / literary past",           example: "Disse la verità." },
    { tense: "Trapassato Prossimo",    idea: "Had done (before another past)",    example: "Avevo già detto tutto." },
    { tense: "Trapassato Remoto",      idea: "Had done (literary, with p. remoto)", example: "Ebbe detto quelle parole." },
    { tense: "Futuro Semplice",        idea: "Will do",                           example: "Dirò la verità." },
    { tense: "Futuro Anteriore",       idea: "Will have done",                    example: "Avrò detto tutto." },
    { tense: "Congiuntivo Presente",   idea: "Doubt / opinion (present)",         example: "Penso che dica." },
    { tense: "Congiuntivo Passato",    idea: "Doubt / opinion (past)",            example: "Penso che abbia detto." },
    { tense: "Congiuntivo Imperfetto", idea: "Hypothetical / past doubt",         example: "Se dicessi la verità..." },
    { tense: "Congiuntivo Trapassato", idea: "Hypothetical about the past",       example: "Se avessi detto..." },
    { tense: "Condizionale Presente",  idea: "Would do",                          example: "Direi di sì." },
    { tense: "Condizionale Passato",   idea: "Would have done",                   example: "Avrei detto la verità." },
    { tense: "Imperativo",            idea: "Commands",                           example: "Di' la verità!" },
    { tense: "Gerundio",              idea: "While doing / having done",          example: "Dicendo... / Avendo detto..." }
  ]
};
