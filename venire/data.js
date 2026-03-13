const verbData = {
  verb: "venire",
  meaning: "to come",
  type: "ire",
  info: {
    subtitle: "Irregular -IRE verb — one of the most common verbs of motion",
    stem: "VEN- / VENG- / VERR-",
    auxiliary: "ESSERE",
    gerundio: "venendo",
    participioPassato: "venuto/a/i/e",
    extra: "Uses ESSERE as auxiliary — past participle agrees with subject! Compounds: divenire, provenire, prevenire, convenire..."
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
          what: "What is happening <b>now</b> or <b>habitually</b>. Irregular stem <b>VENG-</b> in io and loro, diphthong <b>VIEN-</b> in tu and lui.",
          notes: ["⚠️ Three stem patterns: <b>vengo/vengono</b> (VENG-), <b>vieni/viene</b> (VIEN- with diphthong), <b>veniamo/venite</b> (regular VEN-)."],
          conjugations: [
            ["Io",        "<b>vengo</b>"],
            ["Tu",        "<b>vieni</b>"],
            ["Lui / Lei", "<b>viene</b>"],
            ["Noi",       "ven<b>iamo</b>"],
            ["Voi",       "ven<b>ite</b>"],
            ["Loro",      "<b>vengono</b>"]
          ],
          examples: [
            { pronoun: "Io",   it: "Ogni domenica {vengo} a pranzo dai miei genitori con tutta la famiglia.", en: "Every Sunday I come to lunch at my parents' with the whole family." },
            { pronoun: "Loro", it: "I miei amici {vengono} sempre da me quando hanno bisogno di un consiglio sincero.", en: "My friends always come to me when they need honest advice." }
          ]
        },
        {
          name: "Imperfetto",
          what: "The <b>\"used to come\"</b> past — repeated or ongoing arrivals in the past. Regular in this tense.",
          useFor: "Use it for: habits in the past, descriptions, background situations.",
          conjugations: [
            ["Io",        "ven<b>ivo</b>"],
            ["Tu",        "ven<b>ivi</b>"],
            ["Lui / Lei", "ven<b>iva</b>"],
            ["Noi",       "ven<b>ivamo</b>"],
            ["Voi",       "ven<b>ivate</b>"],
            ["Loro",      "ven<b>ivano</b>"]
          ],
          examples: [
            { pronoun: "Lei", it: "Quando ero piccolo, mia nonna {veniva} a trovarci ogni fine settimana senza mai mancare.", en: "When I was little, my grandmother used to come visit us every weekend without ever missing." },
            { pronoun: "Loro", it: "I turisti {venivano} da tutto il mondo per ammirare i capolavori di quel museo.", en: "Tourists used to come from all over the world to admire the masterpieces of that museum." }
          ]
        },
        {
          name: "Passato Remoto",
          what: "A <b>completed</b> arrival in the distant past. Irregular doubled-NN: <b>venni, venne, vennero</b>.",
          conjugations: [
            ["Io",        "<b>venni</b>"],
            ["Tu",        "ven<b>isti</b>"],
            ["Lui / Lei", "<b>venne</b>"],
            ["Noi",       "ven<b>immo</b>"],
            ["Voi",       "ven<b>iste</b>"],
            ["Loro",      "<b>vennero</b>"]
          ],
          examples: [
            { pronoun: "Loro", it: "Molti anni fa i miei nonni {vennero} in Italia dalla campagna per cercare lavoro.", en: "Many years ago my grandparents came to Italy from the countryside to look for work." },
            { pronoun: "Io",   it: "{Venni} a sapere della notizia solo quando ormai era troppo tardi per fare qualcosa.", en: "I came to know about the news only when it was already too late to do anything." }
          ]
        },
        {
          name: "Passato Prossimo",
          what: "The most common past tense in <b>spoken Italian</b> — a completed arrival with present relevance. Formed with <b>essere + venuto/a/i/e</b>.",
          notes: ["⚠️ Uses <b>essere</b> as auxiliary — past participle <b>agrees</b> with the subject: sono venuto (m), sono venuta (f), sono venuti (m.pl), sono venute (f.pl)."],
          conjugations: [
            ["Io",        "sono <b>venuto/a</b>"],
            ["Tu",        "sei <b>venuto/a</b>"],
            ["Lui / Lei", "è <b>venuto/a</b>"],
            ["Noi",       "siamo <b>venuti/e</b>"],
            ["Voi",       "siete <b>venuti/e</b>"],
            ["Loro",      "sono <b>venuti/e</b>"]
          ],
          examples: [
            { pronoun: "Loro", it: "Ieri sera i nostri amici {sono venuti} a cena e abbiamo parlato fino a tardi.", en: "Last night our friends came over for dinner and we talked until late." },
            { pronoun: "Io",   it: "{Sono venuto} apposta per dirti che ho cambiato idea sul progetto.", en: "I came on purpose to tell you that I've changed my mind about the project." }
          ]
        },
        {
          name: "Trapassato Prossimo",
          what: "The <b>\"past of the past\"</b> — an arrival that happened <b>before</b> another past event. Formed with <b>imperfetto di essere + venuto</b>.",
          conjugations: [
            ["Io",        "ero venuto/a"],
            ["Tu",        "eri venuto/a"],
            ["Lui / Lei", "era venuto/a"],
            ["Noi",       "eravamo venuti/e"],
            ["Voi",       "eravate venuti/e"],
            ["Loro",      "erano venuti/e"]
          ],
          examples: [
            { pronoun: "Lui", it: "Quando ho telefonato, Marco {era già venuto} a prendere le chiavi dell'appartamento.", en: "When I called, Marco had already come to pick up the apartment keys." },
            { pronoun: "Loro", it: "{Erano venuti} apposta dall'altra parte della città, ma il negozio era chiuso.", en: "They had come all the way from the other side of the city, but the shop was closed." }
          ]
        },
        {
          name: "Trapassato Remoto",
          what: "Literary \"past of the past\" paired with passato remoto. Formed with <b>passato remoto di essere + venuto</b>.",
          conjugations: [
            ["Io",        "fui venuto/a"],
            ["Tu",        "fosti venuto/a"],
            ["Lui / Lei", "fu venuto/a"],
            ["Noi",       "fummo venuti/e"],
            ["Voi",       "foste venuti/e"],
            ["Loro",      "furono venuti/e"]
          ],
          examples: [
            { pronoun: "Lui", it: "Dopo che {fu venuto} il dottore, il paziente cominciò finalmente a sentirsi meglio.", en: "After the doctor had come, the patient finally started to feel better." },
            { pronoun: "Loro", it: "Non appena {furono venuti} a conoscenza dei fatti, decisero di agire immediatamente.", en: "As soon as they had come to know the facts, they decided to act immediately." }
          ]
        },
        {
          name: "Futuro Semplice",
          what: "What <b>will come</b>. Uses the contracted stem <b>VERR-</b> with doubled R. Can also express probability.",
          notes: ["💡 The doubled R in <b>VERR-</b> is a key irregularity — don't write \"venirò\"! Same pattern as tenere → terrò."],
          conjugations: [
            ["Io",        "verr<b>ò</b>"],
            ["Tu",        "verr<b>ai</b>"],
            ["Lui / Lei", "verr<b>à</b>"],
            ["Noi",       "verr<b>emo</b>"],
            ["Voi",       "verr<b>ete</b>"],
            ["Loro",      "verr<b>anno</b>"]
          ],
          examples: [
            { pronoun: "Loro", it: "La prossima estate {verranno} a trovarci i nostri cugini dall'Australia.", en: "Next summer our cousins from Australia will come to visit us." },
            { pronoun: "Io",   it: "{Verrò} a prenderti alla stazione quando il tuo treno arriverà domani sera.", en: "I will come to pick you up at the station when your train arrives tomorrow evening." }
          ]
        },
        {
          name: "Futuro Anteriore",
          what: "Something that <b>will have happened</b> before another future event. Formed with <b>futuro di essere + venuto</b>.",
          conjugations: [
            ["Io",        "sarò venuto/a"],
            ["Tu",        "sarai venuto/a"],
            ["Lui / Lei", "sarà venuto/a"],
            ["Noi",       "saremo venuti/e"],
            ["Voi",       "sarete venuti/e"],
            ["Loro",      "saranno venuti/e"]
          ],
          examples: [
            { pronoun: "Lui", it: "Quando tornerai a casa, il tecnico {sarà già venuto} a riparare la lavatrice.", en: "When you get back home, the technician will have already come to fix the washing machine." },
            { pronoun: "Loro", it: "A quell'ora {saranno già venuti} a prendere i documenti che avevamo preparato.", en: "By that time they will have already come to pick up the documents we had prepared." }
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
          what: "Present subjunctive — opinions/doubts about someone coming <b>now or in the future</b>. Uses the irregular stem <b>VENG-</b>.",
          notes: ["⚠️ Io, Tu, and Lui/Lei are <b>all the same</b> (venga). Noi/voi use the regular stem: <b>veniamo, veniate</b>."],
          conjugations: [
            ["(che) Io",        "<b>venga</b>"],
            ["(che) Tu",        "<b>venga</b>"],
            ["(che) Lui / Lei", "<b>venga</b>"],
            ["(che) Noi",       "ven<b>iamo</b>"],
            ["(che) Voi",       "ven<b>iate</b>"],
            ["(che) Loro",      "<b>vengano</b>"]
          ],
          examples: [
            { pronoun: "Tu",   it: "Spero che tu {venga} alla mia festa di compleanno sabato prossimo.", en: "I hope you come to my birthday party next Saturday." },
            { pronoun: "Loro", it: "È importante che {vengano} tutti alla riunione per discutere del nuovo progetto.", en: "It's important that everyone comes to the meeting to discuss the new project." }
          ]
        },
        {
          name: "Passato",
          what: "Past subjunctive — opinions/doubts about someone having come. Formed with <b>congiuntivo presente di essere + venuto</b>.",
          conjugations: [
            ["(che) Io",        "sia venuto/a"],
            ["(che) Tu",        "sia venuto/a"],
            ["(che) Lui / Lei", "sia venuto/a"],
            ["(che) Noi",       "siamo venuti/e"],
            ["(che) Voi",       "siate venuti/e"],
            ["(che) Loro",      "siano venuti/e"]
          ],
          examples: [
            { pronoun: "Lei", it: "Credo che Maria {sia venuta} a cercarti mentre eri fuori ufficio.", en: "I think Maria came looking for you while you were out of the office." },
            { pronoun: "Loro", it: "Mi sembra che {siano venuti} apposta per parlare con il direttore della situazione.", en: "It seems to me that they came on purpose to talk to the director about the situation." }
          ]
        },
        {
          name: "Imperfetto",
          what: "Imperfect subjunctive — used when the main verb is <b>in the past</b>, or in <b>hypothetical \"se\" clauses</b>.",
          conjugations: [
            ["(che) Io",        "ven<b>issi</b>"],
            ["(che) Tu",        "ven<b>issi</b>"],
            ["(che) Lui / Lei", "ven<b>isse</b>"],
            ["(che) Noi",       "ven<b>issimo</b>"],
            ["(che) Voi",       "ven<b>iste</b>"],
            ["(che) Loro",      "ven<b>issero</b>"]
          ],
          examples: [
            { pronoun: "Tu",  it: "Vorrei tanto che {venissi} con me a visitare Firenze questo weekend.", en: "I really wish you would come with me to visit Florence this weekend." },
            { pronoun: "Noi", it: "Il professore insisteva che {venissimo} tutti alle lezioni anche quando pioveva.", en: "The professor insisted that we all come to the lessons even when it rained." }
          ]
        },
        {
          name: "Trapassato",
          what: "Pluperfect subjunctive — hypotheticals about the past. Formed with <b>congiuntivo imperfetto di essere + venuto</b>.",
          conjugations: [
            ["(che) Io",        "fossi venuto/a"],
            ["(che) Tu",        "fossi venuto/a"],
            ["(che) Lui / Lei", "fosse venuto/a"],
            ["(che) Noi",       "fossimo venuti/e"],
            ["(che) Voi",       "foste venuti/e"],
            ["(che) Loro",      "fossero venuti/e"]
          ],
          examples: [
            { pronoun: "Tu",   it: "Se {fossi venuto} prima, avresti potuto incontrare il famoso scrittore di persona.", en: "If you had come earlier, you could have met the famous writer in person." },
            { pronoun: "Loro", it: "Se {fossero venuti} alla riunione, avrebbero saputo della decisione prima di tutti.", en: "If they had come to the meeting, they would have known about the decision before everyone." }
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
          what: "<b>\"Would come\"</b> — hypotheticals, polite expressions. Uses the contracted stem <b>VERR-</b> (same as futuro).",
          conjugations: [
            ["Io",        "verr<b>ei</b>"],
            ["Tu",        "verr<b>esti</b>"],
            ["Lui / Lei", "verr<b>ebbe</b>"],
            ["Noi",       "verr<b>emmo</b>"],
            ["Voi",       "verr<b>este</b>"],
            ["Loro",      "verr<b>ebbero</b>"]
          ],
          examples: [
            { pronoun: "Io",   it: "Se non dovessi lavorare, {verrei} volentieri al concerto con voi stasera.", en: "If I didn't have to work, I would gladly come to the concert with you tonight." },
            { pronoun: "Loro", it: "{Verrebbero} anche loro se qualcuno li invitasse invece di dimenticarli sempre.", en: "They would come too if someone invited them instead of always forgetting them." }
          ]
        },
        {
          name: "Passato",
          what: "<b>\"Would have come\"</b> — hypotheticals about the past. Formed with <b>condizionale di essere + venuto</b>.",
          conjugations: [
            ["Io",        "sarei venuto/a"],
            ["Tu",        "saresti venuto/a"],
            ["Lui / Lei", "sarebbe venuto/a"],
            ["Noi",       "saremmo venuti/e"],
            ["Voi",       "sareste venuti/e"],
            ["Loro",      "sarebbero venuti/e"]
          ],
          examples: [
            { pronoun: "Noi", it: "Se avessimo saputo della festa, {saremmo venuti} sicuramente con grande piacere.", en: "If we had known about the party, we would have surely come with great pleasure." },
            { pronoun: "Io",  it: "{Sarei venuto} a trovarti in ospedale, ma non sapevo che eri stato ricoverato.", en: "I would have come to visit you in the hospital, but I didn't know you had been admitted." }
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
          what: "Direct commands to come. Tu uses the diphthong stem <b>VIEN-</b>, formal forms use <b>VENG-</b>.",
          notes: ["💡 <b>Vieni qui!</b> (Come here!) is one of the most common imperative phrases in Italian."],
          conjugations: [
            ["(Tu)",          "<b>vieni!</b>"],
            ["(Lei) formal",  "<b>venga!</b>"],
            ["(Noi)",         "<b>veniamo!</b>"],
            ["(Voi)",         "<b>venite!</b>"],
            ["(Loro) formal", "<b>vengano!</b>"]
          ],
          examples: [
            { pronoun: "Tu",  it: "{Vieni} qui subito, devo mostrarti una cosa incredibile che ho trovato!", en: "Come here right away, I have to show you something incredible I found!" },
            { pronoun: "Voi", it: "{Venite} a vedere il tramonto dal balcone, è uno spettacolo meraviglioso stasera!", en: "Come see the sunset from the balcony — it's a wonderful sight tonight!" }
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
          what: "Coming <b>at the same time</b> as the main action.",
          conjugations: [["Gerundio presente", "<b>venendo</b>"]],
          examples: [
            { pronoun: "", it: "{Venendo} a piedi dalla stazione, ho scoperto un bellissimo giardino nascosto.", en: "Coming on foot from the station, I discovered a beautiful hidden garden." }
          ]
        },
        {
          name: "Passato",
          what: "Having come <b>before</b> the main action.",
          conjugations: [["Gerundio passato", "<b>essendo venuto/a/i/e</b>"]],
          examples: [
            { pronoun: "", it: "{Essendo venuti} in anticipo, abbiamo avuto il tempo di visitare il centro storico.", en: "Having come early, we had time to visit the old town center." }
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
            ["Presente", "<b>venire</b>"],
            ["Passato",  "<b>essere venuto/a/i/e</b>"]
          ],
          examples: [
            { pronoun: "", it: "Puoi {venire} a prendere il pacco quando vuoi, sarò a casa tutto il giorno.", en: "You can come pick up the package whenever you want — I'll be home all day." },
            { pronoun: "", it: "Dopo {essere venuti} in Italia, hanno deciso di restarci per sempre.", en: "After having come to Italy, they decided to stay forever." }
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
            ["Presente", "<b>venente</b>", "Very rare and mostly archaic. Almost never used in modern Italian."],
            ["Passato",  "<b>venuto/a/i/e</b>", "Used in all compound tenses with ESSERE. Agrees with subject. Also used as adjective: \"le persone venute dall'estero\" = people who came from abroad."]
          ],
          examples: [
            { pronoun: "", it: "Le persone {venute} dall'estero devono registrarsi all'ufficio anagrafe del comune.", en: "People who came from abroad must register at the municipal registry office." }
          ]
        }
      ]
    }
  ],

  quickRef: [
    { tense: "Presente",               idea: "Come (now / habitual)",             example: "Vengo a casa tua." },
    { tense: "Imperfetto",             idea: "Used to come",                      example: "Venivo ogni giorno." },
    { tense: "Passato Prossimo",       idea: "Came (completed)",                  example: "Sono venuto ieri." },
    { tense: "Passato Remoto",         idea: "Came (distant past)",               example: "Venni a sapere." },
    { tense: "Trapassato Prossimo",    idea: "Had come",                          example: "Era venuto prima." },
    { tense: "Trapassato Remoto",      idea: "Had come (literary)",               example: "Fu venuto il dottore." },
    { tense: "Futuro Semplice",        idea: "Will come",                         example: "Verrò domani." },
    { tense: "Futuro Anteriore",       idea: "Will have come",                    example: "Sarà venuto." },
    { tense: "Congiuntivo Presente",   idea: "Doubt about coming (present)",      example: "Spero che venga." },
    { tense: "Congiuntivo Passato",    idea: "Doubt about coming (past)",         example: "Credo che sia venuto." },
    { tense: "Congiuntivo Imperfetto", idea: "Hypothetical coming",               example: "Se venissi con me..." },
    { tense: "Congiuntivo Trapassato", idea: "Hypothetical about past",           example: "Se fossi venuto..." },
    { tense: "Condizionale Presente",  idea: "Would come",                        example: "Verrei volentieri." },
    { tense: "Condizionale Passato",   idea: "Would have come",                   example: "Sarei venuto." },
    { tense: "Imperativo",            idea: "Commands (come!)",                   example: "Vieni qui!" },
    { tense: "Gerundio",              idea: "Coming / having come",               example: "Venendo... / Essendo venuto..." }
  ]
};
