const verbData = {
  verb: "stare",
  meaning: "to stay / to be / to feel",
  type: "are",
  info: {
    subtitle: "Irregular -ARE verb",
    stem: "ST-",
    auxiliary: "ESSERE",
    gerundio: "stando",
    participioPassato: "stato/a/i/e",
    extra: "Essential for: stare + gerundio (progressive tenses), stare per + infinito (about to), and asking how someone is (come stai?). NOT interchangeable with essere!"
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
          what: "How one <b>is</b> or <b>feels</b> right now, or where one <b>stays</b>. Irregular — note the <b>sto, stai, sta, stanno</b> forms.",
          notes: ["💡 <b>Stare + gerundio</b> = progressive: \"Sto mangiando\" = I am eating (right now). This is how Italian expresses ongoing actions, similar to English \"-ing\"."],
          conjugations: [
            ["Io",        "<b>sto</b>"],
            ["Tu",        "<b>stai</b>"],
            ["Lui / Lei", "<b>sta</b>"],
            ["Noi",       "<b>stiamo</b>"],
            ["Voi",       "<b>state</b>"],
            ["Loro",      "<b>stanno</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Sto} benissimo da quando ho cominciato a fare esercizio fisico ogni mattina.", en: "I've been feeling great since I started exercising every morning." },
            { pronoun: "Noi", it: "{Stiamo} cercando un appartamento più grande perché il nostro è diventato troppo piccolo.", en: "We are looking for a bigger apartment because ours has become too small." }
          ]
        },
        {
          name: "Imperfetto",
          what: "The <b>\"used to stay/be\"</b> past — how things were, how one felt over time. Regular in this tense.",
          useFor: "Use it for: describing how someone was feeling, where they were staying, background states.",
          conjugations: [
            ["Io",        "st<b>avo</b>"],
            ["Tu",        "st<b>avi</b>"],
            ["Lui / Lei", "st<b>ava</b>"],
            ["Noi",       "st<b>avamo</b>"],
            ["Voi",       "st<b>avate</b>"],
            ["Loro",      "st<b>avano</b>"]
          ],
          examples: [
            { pronoun: "Io",   it: "{Stavo} per chiamarti quando ho ricevuto il tuo messaggio sul telefono.", en: "I was about to call you when I received your message on the phone." },
            { pronoun: "Loro", it: "{Stavano} sempre insieme al parco quando erano bambini e giocavano fino al tramonto.", en: "They were always together at the park when they were children and played until sunset." }
          ]
        },
        {
          name: "Passato Remoto",
          what: "A <b>completed</b> state or stay in the distant past. Irregular: <b>stetti, stette, stettero</b>.",
          conjugations: [
            ["Io",        "<b>stetti</b>"],
            ["Tu",        "st<b>esti</b>"],
            ["Lui / Lei", "<b>stette</b>"],
            ["Noi",       "st<b>emmo</b>"],
            ["Voi",       "st<b>este</b>"],
            ["Loro",      "<b>stettero</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Stetti} in silenzio per tutta la cena perché non volevo peggiorare la situazione.", en: "I stayed silent for the entire dinner because I didn't want to make the situation worse." },
            { pronoun: "Noi", it: "{Stemmo} a Firenze per tre settimane e visitammo ogni museo e ogni chiesa della città.", en: "We stayed in Florence for three weeks and visited every museum and church in the city." }
          ]
        },
        {
          name: "Passato Prossimo",
          what: "The most common past tense — a completed state with present relevance. Formed with <b>essere + stato/a/i/e</b>.",
          notes: ["⚠️ Uses <b>essere</b> as auxiliary, so the past participle <b>agrees</b> with the subject: sono stato (m), sono stata (f), siamo stati (m.pl), siamo state (f.pl)."],
          conjugations: [
            ["Io",        "sono <b>stato/a</b>"],
            ["Tu",        "sei <b>stato/a</b>"],
            ["Lui / Lei", "è <b>stato/a</b>"],
            ["Noi",       "siamo <b>stati/e</b>"],
            ["Voi",       "siete <b>stati/e</b>"],
            ["Loro",      "sono <b>stati/e</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Sono stato} male tutta la settimana e non sono riuscito ad andare a lavorare.", en: "I was unwell all week and couldn't go to work." },
            { pronoun: "Voi", it: "{Siete stati} molto gentili ad aiutarci con il trasloco nonostante la pioggia.", en: "You were very kind to help us with the move despite the rain." }
          ]
        },
        {
          name: "Trapassato Prossimo",
          what: "The <b>\"past of the past\"</b> — a state that existed <b>before</b> another past event. Formed with <b>imperfetto di essere + stato</b>.",
          conjugations: [
            ["Io",        "ero stato/a"],
            ["Tu",        "eri stato/a"],
            ["Lui / Lei", "era stato/a"],
            ["Noi",       "eravamo stati/e"],
            ["Voi",       "eravate stati/e"],
            ["Loro",      "erano stati/e"]
          ],
          examples: [
            { pronoun: "Lui",  it: "{Era stato} molto paziente con tutti, ma alla fine anche la sua pazienza si esaurì.", en: "He had been very patient with everyone, but in the end even his patience ran out." },
            { pronoun: "Noi",  it: "{Eravamo stati} avvertiti del pericolo, ma non avevamo preso la cosa seriamente.", en: "We had been warned of the danger, but we hadn't taken it seriously." }
          ]
        },
        {
          name: "Trapassato Remoto",
          what: "Literary \"past of the past\" paired with passato remoto. Formed with <b>passato remoto di essere + stato</b>.",
          conjugations: [
            ["Io",        "fui stato/a"],
            ["Tu",        "fosti stato/a"],
            ["Lui / Lei", "fu stato/a"],
            ["Noi",       "fummo stati/e"],
            ["Voi",       "foste stati/e"],
            ["Loro",      "furono stati/e"]
          ],
          examples: [
            { pronoun: "Lui",  it: "Dopo che {fu stato} lontano per molti anni, tornò al suo paese e trovò tutto cambiato.", en: "After he had been away for many years, he returned to his village and found everything changed." },
            { pronoun: "Loro", it: "Non appena {furono stati} informati della situazione, presero immediatamente provvedimenti.", en: "As soon as they had been informed of the situation, they immediately took measures." }
          ]
        },
        {
          name: "Futuro Semplice",
          what: "Where one <b>will stay</b> or how one <b>will be</b>. Uses the stem <b>star-</b>. Also expresses probability.",
          conjugations: [
            ["Io",        "star<b>ò</b>"],
            ["Tu",        "star<b>ai</b>"],
            ["Lui / Lei", "star<b>à</b>"],
            ["Noi",       "star<b>emo</b>"],
            ["Voi",       "star<b>ete</b>"],
            ["Loro",      "star<b>anno</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Starò} a casa tutto il weekend perché ho bisogno di riposarmi dopo questa settimana.", en: "I will stay home all weekend because I need to rest after this week." },
            { pronoun: "Noi", it: "{Staremo} attenti a non fare gli stessi errori che abbiamo fatto l'anno scorso.", en: "We will be careful not to make the same mistakes we made last year." }
          ]
        },
        {
          name: "Futuro Anteriore",
          what: "A state that <b>will have been completed</b> before another future event. Formed with <b>futuro di essere + stato</b>.",
          conjugations: [
            ["Io",        "sarò stato/a"],
            ["Tu",        "sarai stato/a"],
            ["Lui / Lei", "sarà stato/a"],
            ["Noi",       "saremo stati/e"],
            ["Voi",       "sarete stati/e"],
            ["Loro",      "saranno stati/e"]
          ],
          examples: [
            { pronoun: "Lei", it: "Quando la rivedremo, Maria {sarà stata} in Giappone per quasi un anno intero.", en: "When we see her again, Maria will have been in Japan for almost an entire year." },
            { pronoun: "Tu",  it: "A quel punto, {sarai stato} sveglio per più di venti ore e avrai bisogno di dormire.", en: "At that point, you will have been awake for more than twenty hours and will need to sleep." }
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
      description: "Doubt, opinion, emotion, subjectivity — almost always triggered by \"che\" and key verbs like pensare, credere, volere, sperare...",
      tenses: [
        {
          name: "Presente",
          what: "Present subjunctive — expressing doubt or opinion about a current state. Irregular: <b>stia</b> for all singular forms.",
          notes: ["⚠️ Io, Tu, and Lui/Lei are all <b>stia</b>. Noi and Voi follow the regular pattern: <b>stiamo, stiate</b>."],
          conjugations: [
            ["(che) Io",        "<b>stia</b>"],
            ["(che) Tu",        "<b>stia</b>"],
            ["(che) Lui / Lei", "<b>stia</b>"],
            ["(che) Noi",       "<b>stiamo</b>"],
            ["(che) Voi",       "<b>stiate</b>"],
            ["(che) Loro",      "<b>stiano</b>"]
          ],
          examples: [
            { pronoun: "Lui", it: "Spero che {stia} bene dopo l'operazione e che possa tornare a casa presto.", en: "I hope he's doing well after the surgery and can come home soon." },
            { pronoun: "Tu",  it: "Non credo che tu {stia} dicendo tutta la verità su quello che è successo ieri sera.", en: "I don't think you're telling the whole truth about what happened last night." }
          ]
        },
        {
          name: "Passato",
          what: "Past subjunctive — opinions/doubts about a past state. Formed with <b>congiuntivo presente di essere + stato</b>.",
          conjugations: [
            ["(che) Io",        "sia stato/a"],
            ["(che) Tu",        "sia stato/a"],
            ["(che) Lui / Lei", "sia stato/a"],
            ["(che) Noi",       "siamo stati/e"],
            ["(che) Voi",       "siate stati/e"],
            ["(che) Loro",      "siano stati/e"]
          ],
          examples: [
            { pronoun: "Lui",  it: "Penso che {sia stato} molto coraggioso ad affrontare quella situazione da solo.", en: "I think he was very brave to face that situation alone." },
            { pronoun: "Loro", it: "Credo che {siano stati} fortunati a trovare un volo disponibile all'ultimo momento.", en: "I think they were lucky to find an available flight at the last minute." }
          ]
        },
        {
          name: "Imperfetto",
          what: "Imperfect subjunctive — used when the main verb is <b>in the past</b>, or in <b>hypothetical \"se\" clauses</b>.",
          conjugations: [
            ["(che) Io",        "st<b>essi</b>"],
            ["(che) Tu",        "st<b>essi</b>"],
            ["(che) Lui / Lei", "st<b>esse</b>"],
            ["(che) Noi",       "st<b>essimo</b>"],
            ["(che) Voi",       "st<b>este</b>"],
            ["(che) Loro",      "st<b>essero</b>"]
          ],
          examples: [
            { pronoun: "Tu",  it: "Pensavo che tu {stessi} scherzando quando hai detto che volevi trasferirti in Alaska.", en: "I thought you were joking when you said you wanted to move to Alaska." },
            { pronoun: "Noi", it: "Voleva che {stessimo} zitti durante tutta la cerimonia, senza dire una parola.", en: "He wanted us to stay quiet during the entire ceremony, without saying a word." }
          ]
        },
        {
          name: "Trapassato",
          what: "Pluperfect subjunctive — hypotheticals about past states. Formed with <b>congiuntivo imperfetto di essere + stato</b>.",
          conjugations: [
            ["(che) Io",        "fossi stato/a"],
            ["(che) Tu",        "fossi stato/a"],
            ["(che) Lui / Lei", "fosse stato/a"],
            ["(che) Noi",       "fossimo stati/e"],
            ["(che) Voi",       "foste stati/e"],
            ["(che) Loro",      "fossero stati/e"]
          ],
          examples: [
            { pronoun: "Io",   it: "Se {fossi stato} più attento, non avrei perso il portafoglio con tutti i documenti.", en: "If I had been more careful, I wouldn't have lost the wallet with all the documents." },
            { pronoun: "Loro", it: "Se {fossero stati} più preparati, avrebbero superato l'esame senza difficoltà.", en: "If they had been more prepared, they would have passed the exam without difficulty." }
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
          what: "<b>\"Would stay / would be\"</b> — hypotheticals, polite expressions. Uses the stem <b>star-</b>.",
          conjugations: [
            ["Io",        "star<b>ei</b>"],
            ["Tu",        "star<b>esti</b>"],
            ["Lui / Lei", "star<b>ebbe</b>"],
            ["Noi",       "star<b>emmo</b>"],
            ["Voi",       "star<b>este</b>"],
            ["Loro",      "star<b>ebbero</b>"]
          ],
          examples: [
            { pronoun: "Io",  it: "{Starei} volentieri a letto tutto il giorno, ma purtroppo ho troppo lavoro da fare.", en: "I would gladly stay in bed all day, but unfortunately I have too much work to do." },
            { pronoun: "Noi", it: "{Staremmo} molto meglio se ci trasferissimo in un posto con un clima più mite.", en: "We would be much better off if we moved to a place with a milder climate." }
          ]
        },
        {
          name: "Passato",
          what: "<b>\"Would have stayed / been\"</b> — hypotheticals about the past. Formed with <b>condizionale di essere + stato</b>.",
          conjugations: [
            ["Io",        "sarei stato/a"],
            ["Tu",        "saresti stato/a"],
            ["Lui / Lei", "sarebbe stato/a"],
            ["Noi",       "saremmo stati/e"],
            ["Voi",       "sareste stati/e"],
            ["Loro",      "sarebbero stati/e"]
          ],
          examples: [
            { pronoun: "Io",   it: "{Sarei stato} più felice se avessi seguito la mia passione invece di scegliere la sicurezza.", en: "I would have been happier if I had followed my passion instead of choosing safety." },
            { pronoun: "Loro", it: "{Sarebbero stati} contenti di venire alla festa, ma nessuno li aveva invitati.", en: "They would have been happy to come to the party, but nobody had invited them." }
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
          what: "Direct commands to stay, be still, or be a certain way. Common in phrases like <b>sta' zitto!</b> (be quiet!) and <b>stai tranquillo!</b> (don't worry!).",
          notes: ["💡 <b>Sta'</b> (with apostrophe) and <b>stai</b> are both accepted for the tu form. Sta' is more informal/spoken."],
          conjugations: [
            ["(Tu)",          "<b>sta' / stai!</b>"],
            ["(Lei) formal",  "<b>stia!</b>"],
            ["(Noi)",         "<b>stiamo!</b>"],
            ["(Voi)",         "<b>state!</b>"],
            ["(Loro) formal", "<b>stiano!</b>"]
          ],
          examples: [
            { pronoun: "Tu",  it: "{Stai} tranquillo, andrà tutto bene e non devi preoccuparti di niente!", en: "Stay calm, everything will be fine and you don't need to worry about anything!" },
            { pronoun: "Voi", it: "{State} attenti quando attraversate la strada, c'è molto traffico a quest'ora!", en: "Be careful when you cross the street — there's a lot of traffic at this hour!" }
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
      description: "Ongoing or simultaneous actions — like \"-ing\" in English.",
      tenses: [
        {
          name: "Presente",
          what: "A state existing <b>at the same time</b> as the main action. Also used in the progressive construction <b>stare + gerundio</b>.",
          conjugations: [["Gerundio presente", "<b>stando</b>"]],
          examples: [
            { pronoun: "", it: "{Stando} così le cose, non abbiamo altra scelta che cambiare completamente strategia.", en: "Things being as they are, we have no other choice but to completely change strategy." }
          ]
        },
        {
          name: "Passato",
          what: "A state that existed <b>before</b> the main action.",
          conjugations: [["Gerundio passato", "<b>essendo stato/a/i/e</b>"]],
          examples: [
            { pronoun: "", it: "{Essendo stata} malata per una settimana, non aveva potuto partecipare alla conferenza.", en: "Having been sick for a week, she hadn't been able to attend the conference." }
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
            ["Presente", "<b>stare</b>"],
            ["Passato",  "<b>essere stato/a/i/e</b>"]
          ],
          examples: [
            { pronoun: "", it: "Preferisco {stare} a casa con un buon libro piuttosto che uscire con questo freddo.", en: "I prefer to stay home with a good book rather than go out in this cold." },
            { pronoun: "", it: "Dopo {essere stato} all'estero per cinque anni, sentiva la mancanza della sua terra.", en: "After having been abroad for five years, he missed his homeland." }
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
            ["Presente", "<b>stante</b>", "Literary/formal. Used in set phrases: \"ciò stante\" = that being the case; \"stante il problema\" = given the problem."],
            ["Passato",  "<b>stato/a/i/e</b>", "Used in all compound tenses. Also the past participle of ESSERE! Context determines which verb it belongs to."]
          ],
          examples: [
            { pronoun: "", it: "Sono {stato} a Napoli la settimana scorsa e ho mangiato la migliore pizza della mia vita.", en: "I was in Naples last week and ate the best pizza of my life." }
          ]
        }
      ]
    }
  ],

  quickRef: [
    { tense: "Presente",               idea: "Am / stay (now)",                   example: "Sto bene." },
    { tense: "Imperfetto",             idea: "Was / used to stay",                example: "Stavo a casa." },
    { tense: "Passato Prossimo",       idea: "Was / stayed (completed)",          example: "Sono stato bene." },
    { tense: "Passato Remoto",         idea: "Stayed (distant past)",             example: "Stetti in silenzio." },
    { tense: "Trapassato Prossimo",    idea: "Had been / stayed",                 example: "Ero stato male." },
    { tense: "Trapassato Remoto",      idea: "Had been (literary)",               example: "Fu stato avvertito." },
    { tense: "Futuro Semplice",        idea: "Will stay / will be",               example: "Starò a casa." },
    { tense: "Futuro Anteriore",       idea: "Will have been",                    example: "Sarò stato via." },
    { tense: "Congiuntivo Presente",   idea: "Doubt about state (present)",       example: "Spero che stia bene." },
    { tense: "Congiuntivo Passato",    idea: "Doubt about state (past)",          example: "Credo che sia stato." },
    { tense: "Congiuntivo Imperfetto", idea: "Hypothetical state",                example: "Se stessi meglio..." },
    { tense: "Congiuntivo Trapassato", idea: "Hypothetical about past state",     example: "Se fossi stato..." },
    { tense: "Condizionale Presente",  idea: "Would stay / be",                   example: "Starei a casa." },
    { tense: "Condizionale Passato",   idea: "Would have been",                   example: "Sarei stato felice." },
    { tense: "Imperativo",            idea: "Commands (stay/be)",                 example: "Stai tranquillo!" },
    { tense: "Gerundio",              idea: "Being / having been",                example: "Stando... / Essendo stato..." }
  ]
};
