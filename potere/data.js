const verbData = {
  verb: "potere",
  meaning: "to be able to / can",
  type: "ere",
  info: {
    subtitle: "Irregular -ERE modal verb",
    stem: "POT- / POSS- / POTR-",
    auxiliary: "AVERE (or ESSERE with essere-verbs)",
    gerundio: "potendo",
    participioPassato: "potuto",
    extra: "Modal verb — always followed by an infinitive. Auxiliary can be AVERE or ESSERE depending on the verb that follows: 'ho potuto mangiare' but 'sono potuto andare'."
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
          what: "What you <b>can</b> do <b>now</b> or <b>habitually</b>. Highly irregular — the stem alternates between <b>poss-</b> (io, loro) and <b>pu-</b> (tu, lui/lei).",
          notes: ["\u26A0\uFE0F The stem changes are unpredictable: <b>posso</b> (poss-), <b>puoi</b> (pu-), <b>pu\u00F2</b> (pu-), <b>possiamo</b> (poss-), <b>potete</b> (pot-), <b>possono</b> (poss-). Just memorize them!"],
          conjugations: [
            ["Io",        "<b>posso</b>"],
            ["Tu",        "<b>puoi</b>"],
            ["Lui / Lei", "<b>pu\u00F2</b>"],
            ["Noi",       "<b>possiamo</b>"],
            ["Voi",       "<b>potete</b>"],
            ["Loro",      "<b>possono</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "Non {posso} venire alla festa stasera perch\u00E9 devo finire un progetto importante.", en: "I can't come to the party tonight because I have to finish an important project." },
            { pronoun: "Noi", it: "{Possiamo} aiutarti a traslocare sabato se hai ancora bisogno di una mano.", en: "We can help you move on Saturday if you still need a hand." }
          ]
        },
        {
          name: "Imperfetto",
          what: 'The <b>"could / was able to"</b> past — ongoing ability or possibility in the past. Regular conjugation on the <b>pot-</b> stem.',
          conjugations: [
            ["Io",        "pot<b>evo</b>"],
            ["Tu",        "pot<b>evi</b>"],
            ["Lui / Lei", "pot<b>eva</b>"],
            ["Noi",       "pot<b>evamo</b>"],
            ["Voi",       "pot<b>evate</b>"],
            ["Loro",      "pot<b>evano</b>"]
          ],
          examples: [
            { pronoun: "Io",   it: "Quando ero giovane, {potevo} correre per ore senza stancarmi.", en: "When I was young, I could run for hours without getting tired." },
            { pronoun: "Loro", it: "Non {potevano} uscire di casa a causa della forte nevicata che aveva bloccato le strade.", en: "They couldn't leave the house because of the heavy snowfall that had blocked the roads." }
          ]
        },
        {
          name: "Passato Remoto",
          what: "A <b>completed</b> past ability, typically distant in time. Has <b>two accepted forms</b> for some persons (potei/potetti, pot\u00E9/potette, poterono/potettero).",
          notes: ["\uD83D\uDCA1 Both forms are correct: <b>potei / potetti</b>, <b>pot\u00E9 / potette</b>, <b>poterono / potettero</b>. The -etti forms are more common in modern usage."],
          conjugations: [
            ["Io",        "<b>potei</b> (potetti)"],
            ["Tu",        "pot<b>esti</b>"],
            ["Lui / Lei", "<b>pot\u00E9</b> (potette)"],
            ["Noi",       "pot<b>emmo</b>"],
            ["Voi",       "pot<b>este</b>"],
            ["Loro",      "<b>poterono</b> (potettero)"]
          ],
          examples: [
            { pronoun: "Lui",  it: "Grazie all'aiuto di un amico, {pot\u00E9} finalmente lasciare il paese e trasferirsi all'estero.", en: "Thanks to a friend's help, he was finally able to leave the country and move abroad." },
            { pronoun: "Loro", it: "Non {poterono} fare nulla per salvare la vecchia chiesa dal terremoto.", en: "They could do nothing to save the old church from the earthquake." }
          ]
        },
        {
          name: "Passato Prossimo",
          what: "The most common past tense in <b>spoken Italian</b>. Formed with <b>avere + potuto</b> (or <b>essere + potuto</b> if the following verb takes essere).",
          notes: ["\u26A0\uFE0F Auxiliary choice: <b>Ho potuto mangiare</b> (mangiare takes avere) vs <b>Sono potuto andare</b> (andare takes essere). In modern spoken Italian, avere is increasingly used for both."],
          conjugations: [
            ["Io",        "ho <b>potuto</b>"],
            ["Tu",        "hai <b>potuto</b>"],
            ["Lui / Lei", "ha <b>potuto</b>"],
            ["Noi",       "abbiamo <b>potuto</b>"],
            ["Voi",       "avete <b>potuto</b>"],
            ["Loro",      "hanno <b>potuto</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "Non {ho potuto} dormire tutta la notte a causa del rumore dei vicini.", en: "I couldn't sleep all night because of the neighbors' noise." },
            { pronoun: "Voi", it: "{Avete potuto} parlare con il direttore o era gi\u00E0 andato via?", en: "Were you able to speak with the director or had he already left?" }
          ]
        },
        {
          name: "Trapassato Prossimo",
          what: 'The <b>"past of the past"</b> — something you had been able to do before another past event. Formed with <b>imperfetto di avere + potuto</b>.',
          conjugations: [
            ["Io",        "avevo potuto"],
            ["Tu",        "avevi potuto"],
            ["Lui / Lei", "aveva potuto"],
            ["Noi",       "avevamo potuto"],
            ["Voi",       "avevate potuto"],
            ["Loro",      "avevano potuto"]
          ],
          examples: [
            { pronoun: "Lei", it: "Non {aveva potuto} avvisarci in tempo perch\u00E9 il suo telefono era scarico.", en: "She hadn't been able to warn us in time because her phone was dead." },
            { pronoun: "Noi", it: "{Avevamo potuto} visitare il museo solo perch\u00E9 un amico lavorava l\u00EC.", en: "We had been able to visit the museum only because a friend worked there." }
          ]
        },
        {
          name: "Trapassato Remoto",
          what: 'Also a "past of the past" paired with the <b>passato remoto</b>. Very literary. Formed with <b>passato remoto di avere + potuto</b>.',
          conjugations: [
            ["Io",        "ebbi potuto"],
            ["Tu",        "avesti potuto"],
            ["Lui / Lei", "ebbe potuto"],
            ["Noi",       "avemmo potuto"],
            ["Voi",       "aveste potuto"],
            ["Loro",      "ebbero potuto"]
          ],
          examples: [
            { pronoun: "Lui",  it: "Dopo che {ebbe potuto} dimostrare la sua innocenza, fu finalmente rilasciato.", en: "After he had been able to prove his innocence, he was finally released." },
            { pronoun: "Loro", it: "Solo quando {ebbero potuto} raccogliere abbastanza fondi, iniziarono la costruzione.", en: "Only when they had been able to gather enough funds did they begin construction." }
          ]
        },
        {
          name: "Futuro Semplice",
          what: 'The simple future — what you <b>will be able to</b> do. Uses the contracted stem <b>potr-</b> (the -e- drops).',
          conjugations: [
            ["Io",        "potr<b>\u00F2</b>"],
            ["Tu",        "potr<b>ai</b>"],
            ["Lui / Lei", "potr<b>\u00E0</b>"],
            ["Noi",       "potr<b>emo</b>"],
            ["Voi",       "potr<b>ete</b>"],
            ["Loro",      "potr<b>anno</b>"]
          ],
          examples: [
            { pronoun: "Tu",   it: "Quando avrai la patente, {potrai} finalmente andare al lavoro in macchina.", en: "When you have your license, you'll finally be able to drive to work." },
            { pronoun: "Noi",  it: "{Potremo} partire solo dopo che avranno riparato la macchina.", en: "We'll be able to leave only after they've repaired the car." }
          ]
        },
        {
          name: "Futuro Anteriore",
          what: "The future perfect — something that <b>will have been possible</b> before another future action. Formed with <b>futuro di avere + potuto</b>.",
          conjugations: [
            ["Io",        "avr\u00F2 potuto"],
            ["Tu",        "avrai potuto"],
            ["Lui / Lei", "avr\u00E0 potuto"],
            ["Noi",       "avremo potuto"],
            ["Voi",       "avrete potuto"],
            ["Loro",      "avranno potuto"]
          ],
          examples: [
            { pronoun: "Io",  it: "Entro domani {avr\u00F2 potuto} finire almeno met\u00E0 del lavoro arretrato.", en: "By tomorrow I will have been able to finish at least half of the backlog." },
            { pronoun: "Lei", it: "{Avr\u00E0 potuto} riposarsi un po' durante il fine settimana, spero.", en: "She will have been able to rest a bit during the weekend, I hope." }
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
      description: 'Doubt, opinion, emotion, subjectivity — almost always triggered by "che" and key verbs like pensare, credere, volere, sperare...',
      tenses: [
        {
          name: "Presente",
          what: "Present subjunctive — opinions/doubts about being able to do something <b>now or in the future</b>. Uses the stem <b>poss-</b>.",
          notes: ["\u26A0\uFE0F Io, Tu, and Lui/Lei are <b>all the same</b> (possa). Use the subject pronoun to disambiguate!"],
          conjugations: [
            ["(che) Io",        "<b>possa</b>"],
            ["(che) Tu",        "<b>possa</b>"],
            ["(che) Lui / Lei", "<b>possa</b>"],
            ["(che) Noi",       "<b>possiamo</b>"],
            ["(che) Voi",       "<b>possiate</b>"],
            ["(che) Loro",      "<b>possano</b>"]
          ],
          examples: [
            { pronoun: "Tu",   it: "Spero che tu {possa} venire alla cena di sabato, ci saranno tutti i vecchi amici.", en: "I hope you can come to Saturday's dinner — all our old friends will be there." },
            { pronoun: "Loro", it: "Non credo che {possano} finire il progetto entro la scadenza senza aiuto.", en: "I don't think they can finish the project by the deadline without help." }
          ]
        },
        {
          name: "Passato",
          what: "Past subjunctive — opinions/doubts about something that <b>already happened</b>. Formed with <b>congiuntivo presente di avere + potuto</b>.",
          conjugations: [
            ["(che) Io",        "abbia potuto"],
            ["(che) Tu",        "abbia potuto"],
            ["(che) Lui / Lei", "abbia potuto"],
            ["(che) Noi",       "abbiamo potuto"],
            ["(che) Voi",       "abbiate potuto"],
            ["(che) Loro",      "abbiano potuto"]
          ],
          examples: [
            { pronoun: "Lui", it: "Sono contento che Marco {abbia potuto} partecipare alla riunione nonostante i suoi impegni.", en: "I'm glad Marco was able to attend the meeting despite his commitments." },
            { pronoun: "Noi", it: "\u00C8 un peccato che non {abbiamo potuto} salutare tutti prima di partire.", en: "It's a shame we weren't able to say goodbye to everyone before leaving." }
          ]
        },
        {
          name: "Imperfetto",
          what: 'Imperfect subjunctive — used when the main verb is <b>in the past</b>, or in <b>hypothetical "se" (if) clauses</b>.',
          notes: ['\uD83D\uDCA1 Essential in <b>se (if)</b> clauses: "Se {potessi} scegliere, vivrei al mare." = If I could choose, I\'d live by the sea.'],
          conjugations: [
            ["(che) Io",        "pot<b>essi</b>"],
            ["(che) Tu",        "pot<b>essi</b>"],
            ["(che) Lui / Lei", "pot<b>esse</b>"],
            ["(che) Noi",       "pot<b>essimo</b>"],
            ["(che) Voi",       "pot<b>este</b>"],
            ["(che) Loro",      "pot<b>essero</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "Se {potessi} tornare indietro nel tempo, studierei medicina invece di legge.", en: "If I could go back in time, I would study medicine instead of law." },
            { pronoun: "Voi", it: "Vorrei che {poteste} vedere quanto \u00E8 bella questa citt\u00E0 in primavera.", en: "I wish you could see how beautiful this city is in spring." }
          ]
        },
        {
          name: "Trapassato",
          what: 'Pluperfect subjunctive — hypotheticals about the past. Formed with <b>congiuntivo imperfetto di avere + potuto</b>.',
          conjugations: [
            ["(che) Io",        "avessi potuto"],
            ["(che) Tu",        "avessi potuto"],
            ["(che) Lui / Lei", "avesse potuto"],
            ["(che) Noi",       "avessimo potuto"],
            ["(che) Voi",       "aveste potuto"],
            ["(che) Loro",      "avessero potuto"]
          ],
          examples: [
            { pronoun: "Tu",  it: "Se {avessi potuto} avvisarmi prima, avrei organizzato tutto diversamente.", en: "If you had been able to warn me earlier, I would have organized everything differently." },
            { pronoun: "Noi", it: "Se {avessimo potuto} prevedere la crisi, avremmo risparmiato molto di pi\u00F9.", en: "If we had been able to foresee the crisis, we would have saved much more." }
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
          what: '<b>"Could / would be able to"</b> — hypotheticals, polite requests. Uses the contracted stem <b>potr-</b>.',
          conjugations: [
            ["Io",        "potr<b>ei</b>"],
            ["Tu",        "potr<b>esti</b>"],
            ["Lui / Lei", "potr<b>ebbe</b>"],
            ["Noi",       "potr<b>emmo</b>"],
            ["Voi",       "potr<b>este</b>"],
            ["Loro",      "potr<b>ebbero</b>"]
          ],
          examples: [
            { pronoun: "Tu",  it: "{Potresti} chiudere la finestra, per favore? Fa un po' freddo qui dentro.", en: "Could you close the window, please? It's a bit cold in here." },
            { pronoun: "Noi", it: "{Potremmo} andare al cinema stasera se non hai altri programmi.", en: "We could go to the cinema tonight if you don't have other plans." }
          ]
        },
        {
          name: "Passato",
          what: '<b>"Could have / would have been able to"</b> — hypotheticals about the past. Formed with <b>condizionale presente di avere + potuto</b>.',
          conjugations: [
            ["Io",        "avrei potuto"],
            ["Tu",        "avresti potuto"],
            ["Lui / Lei", "avrebbe potuto"],
            ["Noi",       "avremmo potuto"],
            ["Voi",       "avreste potuto"],
            ["Loro",      "avrebbero potuto"]
          ],
          examples: [
            { pronoun: "Io",   it: "{Avrei potuto} fare di meglio all'esame se avessi studiato con pi\u00F9 costanza.", en: "I could have done better on the exam if I had studied more consistently." },
            { pronoun: "Loro", it: "{Avrebbero potuto} evitare l'incidente se avessero controllato i freni prima di partire.", en: "They could have avoided the accident if they had checked the brakes before leaving." }
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
          what: "Modal verbs <b>rarely have imperative forms</b> in practice. You don't normally command someone to \"be able to\" do something. The theoretical forms exist but are essentially unused in everyday Italian. Where a command is needed, use the infinitive of the following verb instead.",
          notes: ["\u26A0\uFE0F These forms are <b>extremely rare</b> and largely theoretical. In practice, Italians would rephrase: instead of commanding someone to \"be able to,\" they would say something like \"Cerca di farcela!\" (Try to manage it!) or simply use the imperative of the main verb."],
          conjugations: [
            ["(Tu)",          "<b>\u2014</b>"],
            ["(Lei) formal",  "<b>\u2014</b>"],
            ["(Noi)",         "<b>\u2014</b>"],
            ["(Voi)",         "<b>\u2014</b>"],
            ["(Loro) formal", "<b>\u2014</b>"]
          ],
          examples: [
            { pronoun: "", it: "Instead of an imperative of potere, Italians rephrase: \"Cerca di venire!\" (Try to come!) rather than commanding someone to \"be able to.\"", en: "Modal verbs are not used in the imperative in natural Italian speech." }
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
          what: "Something happening <b>at the same time</b> as the main action — \"being able to.\"",
          conjugations: [["Gerundio presente", "<b>potendo</b>"]],
          examples: [
            { pronoun: "", it: "Non {potendo} uscire a causa della pioggia, abbiamo deciso di guardare un film a casa.", en: "Not being able to go out because of the rain, we decided to watch a movie at home." }
          ]
        },
        {
          name: "Passato",
          what: "Something that happened <b>before</b> the main action — \"having been able to.\"",
          conjugations: [["Gerundio passato", "<b>avendo potuto</b>"]],
          examples: [
            { pronoun: "", it: "{Avendo potuto} risparmiare abbastanza durante l'anno, si sono concessi una vacanza in Giappone.", en: "Having been able to save enough during the year, they treated themselves to a vacation in Japan." }
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
            ["Presente", "<b>potere</b>"],
            ["Passato",  "<b>avere potuto</b>"]
          ],
          examples: [
            { pronoun: "", it: "Il {potere} della musica \u00E8 capace di unire persone di culture completamente diverse.", en: "The power of music is capable of uniting people from completely different cultures." },
            { pronoun: "", it: "Dopo {avere potuto} parlare con il medico, si \u00E8 sentita molto pi\u00F9 tranquilla.", en: "After having been able to speak with the doctor, she felt much calmer." }
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
            ["Presente", "<b>potente</b>", "Used as an adjective meaning 'powerful, potent': 'un uomo potente' = a powerful man."],
            ["Passato",  "<b>potuto</b>",   "Used in ALL compound tenses (ho potuto, avevo potuto, etc.)"]
          ],
          examples: [
            { pronoun: "", it: "\u00C8 un uomo molto {potente} che ha influenza in tutti i settori della politica.", en: "He is a very powerful man who has influence in all sectors of politics." }
          ]
        }
      ]
    }
  ],

  quickRef: [
    { tense: "Presente",               idea: "Can / am able to",                  example: "Posso aiutarti." },
    { tense: "Imperfetto",             idea: "Could / was able to (ongoing)",     example: "Potevo correre." },
    { tense: "Passato Prossimo",       idea: "Was able to (completed)",           example: "Ho potuto parlare." },
    { tense: "Passato Remoto",         idea: "Was able to (distant past)",        example: "Pot\u00E9 fuggire." },
    { tense: "Trapassato Prossimo",    idea: "Had been able to",                  example: "Avevo potuto vedere." },
    { tense: "Trapassato Remoto",      idea: "Had been able to (literary)",       example: "Ebbe potuto finire." },
    { tense: "Futuro Semplice",        idea: "Will be able to",                   example: "Potr\u00F2 venire." },
    { tense: "Futuro Anteriore",       idea: "Will have been able to",            example: "Avr\u00F2 potuto finire." },
    { tense: "Congiuntivo Presente",   idea: "Doubt / opinion (can)",             example: "Spero che possa." },
    { tense: "Congiuntivo Passato",    idea: "Doubt / opinion (could have)",      example: "Credo che abbia potuto." },
    { tense: "Congiuntivo Imperfetto", idea: "Hypothetical (if I could)",         example: "Se potessi scegliere..." },
    { tense: "Congiuntivo Trapassato", idea: "Hypothetical about the past",       example: "Se avessi potuto..." },
    { tense: "Condizionale Presente",  idea: "Could / would be able to",          example: "Potrei aiutarti." },
    { tense: "Condizionale Passato",   idea: "Could have / would have been able", example: "Avrei potuto farlo." },
    { tense: "Imperativo",            idea: "Commands (not used)",                example: "\u2014" },
    { tense: "Gerundio",              idea: "Being able to / having been able",   example: "Potendo... / Avendo potuto..." }
  ]
};
