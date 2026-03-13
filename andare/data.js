const verbData = {
  verb: "andare",
  meaning: "to go",
  type: "are",
  info: {
    subtitle: "Irregular -ARE verb — the most common verb of motion",
    stem: "AND- / VAD- / ANDR-",
    auxiliary: "ESSERE",
    gerundio: "andando",
    participioPassato: "andato/a/i/e",
    extra: "Uses ESSERE as auxiliary — past participle agrees with subject! Irregular stems: VAD- (presente: vado, vai, va, vanno), ANDR- (futuro/condizionale). Common expressions: andare via (go away), andare d'accordo (get along), andare a letto (go to bed)."
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
          what: "What is happening <b>now</b> or <b>habitually</b>. Andare is highly irregular here — note the <b>VAD-</b> stem in most forms.",
          notes: ["⚠️ Irregular stem <b>VAD-</b> in io, tu, lui/lei, and loro. Only noi and voi use the regular <b>AND-</b> stem."],
          conjugations: [
            ["Io",        "<b>vado</b>"],
            ["Tu",        "<b>vai</b>"],
            ["Lui / Lei", "<b>va</b>"],
            ["Noi",       "<b>andiamo</b>"],
            ["Voi",       "<b>andate</b>"],
            ["Loro",      "<b>vanno</b>"]
          ],
          examples: [
            { pronoun: "Io", it: "{Vado} al mercato ogni sabato mattina per comprare frutta e verdura fresca.", en: "I go to the market every Saturday morning to buy fresh fruit and vegetables." },
            { pronoun: "Noi", it: "Di solito {andiamo} a correre nel parco prima di colazione, anche quando fa freddo.", en: "We usually go running in the park before breakfast, even when it's cold." }
          ]
        },
        {
          name: "Imperfetto",
          what: 'The <b>"used to"</b> past — ongoing, repeated, or background actions in the past. Andare is <b>regular</b> in the imperfetto.',
          conjugations: [
            ["Io",        "<b>andavo</b>"],
            ["Tu",        "<b>andavi</b>"],
            ["Lui / Lei", "<b>andava</b>"],
            ["Noi",       "<b>andavamo</b>"],
            ["Voi",       "<b>andavate</b>"],
            ["Loro",      "<b>andavano</b>"]
          ],
          examples: [
            { pronoun: "Io", it: "Quando ero bambino, {andavo} sempre dai nonni durante le vacanze estive.", en: "When I was a child, I always used to go to my grandparents' during the summer holidays." },
            { pronoun: "Loro", it: "I miei genitori {andavano} a ballare ogni venerdì sera quando erano giovani.", en: "My parents used to go dancing every Friday evening when they were young." }
          ]
        },
        {
          name: "Passato Remoto",
          what: "A <b>completed</b> past action, typically distant in time or used in literature / southern Italy. Andare is <b>regular</b> here.",
          conjugations: [
            ["Io",        "<b>andai</b>"],
            ["Tu",        "<b>andasti</b>"],
            ["Lui / Lei", "<b>andò</b>"],
            ["Noi",       "<b>andammo</b>"],
            ["Voi",       "<b>andaste</b>"],
            ["Loro",      "<b>andarono</b>"]
          ],
          examples: [
            { pronoun: "Noi", it: "L'anno scorso {andammo} in Sicilia e visitammo molti luoghi storici affascinanti.", en: "Last year we went to Sicily and visited many fascinating historical sites." },
            { pronoun: "Lui", it: "Dante {andò} in esilio da Firenze e non vi fece mai più ritorno.", en: "Dante went into exile from Florence and never returned there again." }
          ]
        },
        {
          name: "Passato Prossimo",
          what: "The most common past tense in <b>spoken Italian</b> — a completed action, usually recent or with present relevance. Formed with <b>essere + andato/a/i/e</b>.",
          notes: ["⚠️ Uses <b>ESSERE</b> — the past participle <b>agrees</b> with the subject in gender and number: andato (m.sg.), andata (f.sg.), andati (m.pl.), andate (f.pl.)."],
          conjugations: [
            ["Io",        "<b>sono andato/a</b>"],
            ["Tu",        "<b>sei andato/a</b>"],
            ["Lui / Lei", "<b>è andato/a</b>"],
            ["Noi",       "<b>siamo andati/e</b>"],
            ["Voi",       "<b>siete andati/e</b>"],
            ["Loro",      "<b>sono andati/e</b>"]
          ],
          examples: [
            { pronoun: "Lei", it: "Ieri sera Maria {è andata} al cinema con le sue amiche a vedere l'ultimo film di Sorrentino.", en: "Yesterday evening Maria went to the cinema with her friends to see the latest Sorrentino film." },
            { pronoun: "Noi", it: "{Siamo andati} in montagna il fine settimana scorso e abbiamo fatto un'escursione bellissima.", en: "We went to the mountains last weekend and did a beautiful hike." }
          ]
        },
        {
          name: "Trapassato Prossimo",
          what: 'The <b>"past of the past"</b> — something that happened <b>before</b> another past event. Formed with <b>imperfetto di essere + andato/a/i/e</b>.',
          conjugations: [
            ["Io",        "<b>ero andato/a</b>"],
            ["Tu",        "<b>eri andato/a</b>"],
            ["Lui / Lei", "<b>era andato/a</b>"],
            ["Noi",       "<b>eravamo andati/e</b>"],
            ["Voi",       "<b>eravate andati/e</b>"],
            ["Loro",      "<b>erano andati/e</b>"]
          ],
          examples: [
            { pronoun: "Lui", it: "Quando sono arrivato alla stazione, il treno {era già andato} via da dieci minuti.", en: "When I arrived at the station, the train had already left ten minutes earlier." },
            { pronoun: "Loro", it: "I ragazzi {erano andati} a fare la spesa prima che cominciasse a piovere.", en: "The boys had gone grocery shopping before it started raining." }
          ]
        },
        {
          name: "Trapassato Remoto",
          what: 'Also a "past of the past" but paired with the <b>passato remoto</b>. Very literary, rarely used in conversation. Formed with <b>passato remoto di essere + andato/a/i/e</b>.',
          conjugations: [
            ["Io",        "<b>fui andato/a</b>"],
            ["Tu",        "<b>fosti andato/a</b>"],
            ["Lui / Lei", "<b>fu andato/a</b>"],
            ["Noi",       "<b>fummo andati/e</b>"],
            ["Voi",       "<b>foste andati/e</b>"],
            ["Loro",      "<b>furono andati/e</b>"]
          ],
          examples: [
            { pronoun: "Lui", it: "Dopo che {fu andato} via l'ultimo ospite, chiudemmo finalmente la porta a chiave.", en: "After the last guest had left, we finally locked the door." },
            { pronoun: "Noi", it: "Non appena {fummo andati} via dalla città, il temporale si abbatté con violenza.", en: "As soon as we had left the city, the storm struck with violence." }
          ]
        },
        {
          name: "Futuro Semplice",
          what: 'The simple future — what <b>will</b> happen. Andare uses the contracted stem <b>ANDR-</b> (not ander-). Can also express <b>probability</b>.',
          notes: ["⚠️ Irregular contracted stem <b>ANDR-</b> — the same stem is used in the condizionale. This is a key irregularity to memorize."],
          conjugations: [
            ["Io",        "<b>andrò</b>"],
            ["Tu",        "<b>andrai</b>"],
            ["Lui / Lei", "<b>andrà</b>"],
            ["Noi",       "<b>andremo</b>"],
            ["Voi",       "<b>andrete</b>"],
            ["Loro",      "<b>andranno</b>"]
          ],
          examples: [
            { pronoun: "Noi", it: "Quest'estate {andremo} in vacanza in Sardegna per due settimane a scoprire le spiagge.", en: "This summer we will go on holiday to Sardinia for two weeks to explore the beaches." },
            { pronoun: "Tu", it: "Se continui a studiare così bene, {andrai} sicuramente all'università a settembre.", en: "If you keep studying so well, you will surely go to university in September." }
          ]
        },
        {
          name: "Futuro Anteriore",
          what: "The future perfect — something that <b>will have been completed</b> before another future action. Formed with <b>futuro di essere + andato/a/i/e</b>.",
          conjugations: [
            ["Io",        "<b>sarò andato/a</b>"],
            ["Tu",        "<b>sarai andato/a</b>"],
            ["Lui / Lei", "<b>sarà andato/a</b>"],
            ["Noi",       "<b>saremo andati/e</b>"],
            ["Voi",       "<b>sarete andati/e</b>"],
            ["Loro",      "<b>saranno andati/e</b>"]
          ],
          examples: [
            { pronoun: "Noi", it: "Quando arriverai tu, noi {saremo già andati} a dormire perché domani ci alziamo presto.", en: "When you arrive, we will have already gone to sleep because we're getting up early tomorrow." },
            { pronoun: "Loro", it: "A quest'ora {saranno andati} via — non vale la pena passare a trovarli.", en: "By now they will have left — it's not worth stopping by to visit them." }
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
          what: "Present subjunctive — opinions/doubts about something happening <b>now or in the future</b>. Uses the irregular <b>VAD-</b> stem in singular and 3rd person plural.",
          notes: ["⚠️ Irregular stem <b>VAD-</b> in io, tu, lui/lei (all <b>vada</b>) and loro (<b>vadano</b>). Noi and voi use the regular <b>AND-</b> stem."],
          conjugations: [
            ["(che) Io",        "<b>vada</b>"],
            ["(che) Tu",        "<b>vada</b>"],
            ["(che) Lui / Lei", "<b>vada</b>"],
            ["(che) Noi",       "<b>andiamo</b>"],
            ["(che) Voi",       "<b>andiate</b>"],
            ["(che) Loro",      "<b>vadano</b>"]
          ],
          examples: [
            { pronoun: "Lui", it: "Penso che Marco {vada} in palestra almeno tre volte alla settimana per tenersi in forma.", en: "I think Marco goes to the gym at least three times a week to stay in shape." },
            { pronoun: "Noi", it: "È meglio che {andiamo} via subito, altrimenti perderemo l'ultimo treno per Roma.", en: "It's better that we leave right away, otherwise we'll miss the last train to Rome." }
          ]
        },
        {
          name: "Passato",
          what: "Past subjunctive — opinions/doubts about something that <b>already happened</b>. Formed with <b>congiuntivo presente di essere + andato/a/i/e</b>.",
          conjugations: [
            ["(che) Io",        "<b>sia andato/a</b>"],
            ["(che) Tu",        "<b>sia andato/a</b>"],
            ["(che) Lui / Lei", "<b>sia andato/a</b>"],
            ["(che) Noi",       "<b>siamo andati/e</b>"],
            ["(che) Voi",       "<b>siate andati/e</b>"],
            ["(che) Loro",      "<b>siano andati/e</b>"]
          ],
          examples: [
            { pronoun: "Loro", it: "Credo che {siano andati} al supermercato prima di venire qui a cena.", en: "I think they went to the supermarket before coming here for dinner." },
            { pronoun: "Lei", it: "È possibile che Giulia {sia andata} a trovare i suoi genitori nel fine settimana.", en: "It's possible that Giulia went to visit her parents over the weekend." }
          ]
        },
        {
          name: "Imperfetto",
          what: 'Imperfect subjunctive — used when the main verb is <b>in the past</b>, or in <b>hypothetical "se" (if) clauses</b>. Andare is <b>regular</b> here.',
          notes: ['💡 Essential in <b>se (if)</b> clauses: "Se <b>andassi</b> a Roma, visiterei il Colosseo." = If I went to Rome, I would visit the Colosseum.'],
          conjugations: [
            ["(che) Io",        "<b>andassi</b>"],
            ["(che) Tu",        "<b>andassi</b>"],
            ["(che) Lui / Lei", "<b>andasse</b>"],
            ["(che) Noi",       "<b>andassimo</b>"],
            ["(che) Voi",       "<b>andaste</b>"],
            ["(che) Loro",      "<b>andassero</b>"]
          ],
          examples: [
            { pronoun: "Tu", it: "Vorrei che tu {andassi} a parlare con il professore il prima possibile per chiarire la situazione.", en: "I wish you would go talk to the professor as soon as possible to clarify the situation." },
            { pronoun: "Noi", it: "Se {andassimo} a piedi invece che in macchina, potremmo goderci il paesaggio lungo la strada.", en: "If we went on foot instead of by car, we could enjoy the scenery along the way." }
          ]
        },
        {
          name: "Trapassato",
          what: 'Pluperfect subjunctive — the most "past" of the subjunctive forms, used in <b>hypotheticals about the past</b>. Formed with <b>congiuntivo imperfetto di essere + andato/a/i/e</b>.',
          conjugations: [
            ["(che) Io",        "<b>fossi andato/a</b>"],
            ["(che) Tu",        "<b>fossi andato/a</b>"],
            ["(che) Lui / Lei", "<b>fosse andato/a</b>"],
            ["(che) Noi",       "<b>fossimo andati/e</b>"],
            ["(che) Voi",       "<b>foste andati/e</b>"],
            ["(che) Loro",      "<b>fossero andati/e</b>"]
          ],
          examples: [
            { pronoun: "Tu", it: "Se {fossi andato} alla festa, avresti incontrato tanti vecchi amici del liceo.", en: "If you had gone to the party, you would have met many old friends from high school." },
            { pronoun: "Noi", it: "Se {fossimo andati} in vacanza a luglio invece che ad agosto, avremmo speso molto meno.", en: "If we had gone on holiday in July instead of August, we would have spent much less." }
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
          what: '<b>"Would do"</b> — used for hypotheticals, polite requests, wishes. Uses the contracted stem <b>ANDR-</b> (same as the futuro).',
          conjugations: [
            ["Io",        "<b>andrei</b>"],
            ["Tu",        "<b>andresti</b>"],
            ["Lui / Lei", "<b>andrebbe</b>"],
            ["Noi",       "<b>andremmo</b>"],
            ["Voi",       "<b>andreste</b>"],
            ["Loro",      "<b>andrebbero</b>"]
          ],
          examples: [
            { pronoun: "Io", it: "Se avessi più tempo libero, {andrei} volentieri a visitare i musei della città.", en: "If I had more free time, I would gladly go visit the city's museums." },
            { pronoun: "Loro", it: "I ragazzi {andrebbero} al concerto, ma i biglietti sono già esauriti da settimane.", en: "The boys would go to the concert, but the tickets have been sold out for weeks." }
          ]
        },
        {
          name: "Passato",
          what: '<b>"Would have done"</b> — hypotheticals about the past. Formed with <b>condizionale presente di essere + andato/a/i/e</b>.',
          conjugations: [
            ["Io",        "<b>sarei andato/a</b>"],
            ["Tu",        "<b>saresti andato/a</b>"],
            ["Lui / Lei", "<b>sarebbe andato/a</b>"],
            ["Noi",       "<b>saremmo andati/e</b>"],
            ["Voi",       "<b>sareste andati/e</b>"],
            ["Loro",      "<b>sarebbero andati/e</b>"]
          ],
          examples: [
            { pronoun: "Noi", it: "Se non avesse piovuto, {saremmo andati} a fare un picnic al lago come avevamo programmato.", en: "If it hadn't rained, we would have gone for a picnic at the lake as we had planned." },
            { pronoun: "Io", it: "{Sarei andato} volentieri alla tua laurea, ma quel giorno ero bloccato all'estero per lavoro.", en: "I would have gladly gone to your graduation, but that day I was stuck abroad for work." }
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
          what: "Direct commands. <b>No Io form</b> — you can't command yourself! Both <b>va'</b> (with apostrophe) and <b>vai</b> are correct for Tu.",
          notes: ["💡 <b>Va'</b> (with apostrophe) is more colloquial; <b>vai</b> is slightly more formal. Both are equally correct."],
          conjugations: [
            ["(Tu)",          "<b>va' / vai!</b>"],
            ["(Lei) formal",  "<b>vada!</b>"],
            ["(Noi)",         "<b>andiamo!</b>"],
            ["(Voi)",         "<b>andate!</b>"],
            ["(Loro) formal", "<b>vadano!</b>"]
          ],
          examples: [
            { pronoun: "Tu", it: "{Va'} a lavarti le mani prima di sederti a tavola, per favore!", en: "Go wash your hands before sitting down at the table, please!" },
            { pronoun: "Noi", it: "{Andiamo} a fare una passeggiata lungo il fiume prima che faccia buio!", en: "Let's go for a walk along the river before it gets dark!" }
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
          conjugations: [["Gerundio presente", "<b>andando</b>"]],
          examples: [
            { pronoun: "", it: "{Andando} a scuola ogni giorno a piedi, ho imparato a conoscere bene il quartiere.", en: "Going to school on foot every day, I got to know the neighbourhood well." },
            { pronoun: "", it: "{Andando} avanti di questo passo, finiremo il progetto entro la fine del mese.", en: "Going on at this pace, we will finish the project by the end of the month." }
          ]
        },
        {
          name: "Passato",
          what: "Something that happened <b>before</b> the main action. Uses <b>essendo</b> (not avendo) because andare takes ESSERE.",
          conjugations: [["Gerundio passato", "<b>essendo andato/a/i/e</b>"]],
          examples: [
            { pronoun: "", it: "{Essendo andati} a letto tardi, la mattina dopo eravamo tutti esausti.", en: "Having gone to bed late, the next morning we were all exhausted." },
            { pronoun: "", it: "{Essendo andata} via presto dalla festa, non ha saputo della sorpresa fino al giorno dopo.", en: "Having left the party early, she didn't find out about the surprise until the next day." }
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
            ["Presente", "<b>andare</b>"],
            ["Passato",  "<b>essere andato/a/i/e</b>"]
          ],
          examples: [
            { pronoun: "", it: "Vorrei {andare} in Italia quest'estate per migliorare il mio italiano.", en: "I would like to go to Italy this summer to improve my Italian." },
            { pronoun: "", it: "Dopo {essere andati} al mercato, siamo tornati a casa per cucinare insieme.", en: "After having gone to the market, we went back home to cook together." }
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
            ["Presente", "<b>andante</b>", 'Rare — mainly used in music (tempo andante) and some fixed expressions.'],
            ["Passato",  "<b>andato/a/i/e</b>", "Used in ALL compound tenses with ESSERE (sono andato, ero andato, etc.). Agrees with subject."]
          ],
          examples: [
            { pronoun: "", it: "I ragazzi {andati} in gita ieri sono tornati molto contenti dell'esperienza.", en: "The boys who went on the trip yesterday came back very happy with the experience." },
            { pronoun: "", it: "La lettera {andata} persa conteneva informazioni importanti sul contratto.", en: "The letter that went missing contained important information about the contract." }
          ]
        }
      ]
    }
  ],

  quickRef: [
    { tense: "Presente",               idea: "Go (now / habitual)",                example: "Vado a casa." },
    { tense: "Imperfetto",             idea: "Used to go / was going",             example: "Andavo a scuola." },
    { tense: "Passato Prossimo",       idea: "Went (recent past)",                 example: "Sono andato al mare." },
    { tense: "Passato Remoto",         idea: "Went (distant / literary past)",     example: "Andò via per sempre." },
    { tense: "Trapassato Prossimo",    idea: "Had gone (before another past)",     example: "Era andato via." },
    { tense: "Trapassato Remoto",      idea: "Had gone (literary, with p. remoto)", example: "Fu andato via." },
    { tense: "Futuro Semplice",        idea: "Will go",                            example: "Andrò in Italia." },
    { tense: "Futuro Anteriore",       idea: "Will have gone",                     example: "Sarò andato via." },
    { tense: "Congiuntivo Presente",   idea: "Doubt / opinion (present)",          example: "Penso che vada." },
    { tense: "Congiuntivo Passato",    idea: "Doubt / opinion (past)",             example: "Credo che sia andato." },
    { tense: "Congiuntivo Imperfetto", idea: "Hypothetical / past doubt",          example: "Se andassi a Roma..." },
    { tense: "Congiuntivo Trapassato", idea: "Hypothetical about the past",        example: "Se fossi andato..." },
    { tense: "Condizionale Presente",  idea: "Would go",                           example: "Andrei volentieri." },
    { tense: "Condizionale Passato",   idea: "Would have gone",                    example: "Sarei andato via." },
    { tense: "Imperativo",            idea: "Commands",                            example: "Va' a casa!" },
    { tense: "Gerundio",              idea: "While going / having gone",           example: "Andando... / Essendo andato..." }
  ]
};
