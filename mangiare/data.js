const verbData = {
  verb: "mangiare",
  meaning: "to eat",
  type: "are",

  info: {
    subtitle: "Regular -ARE verb",
    stem: "MANG-",
    auxiliary: "AVERE",
    gerundio: "mangiando",
    participioPassato: "mangiato",
    extra: ""
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
          what: "Current actions, habits, general truths. <b>When</b>: now, today, this week, etc.",
          notes: ["⚠️ Spelling rule: Keep the 'i' before 'a/o' to preserve the soft 'g' sound (/dʒ/), like 'mangiare' not 'mangare'."],
          conjugations: [
            ["Io", "<b>mang</b>io"],
            ["Tu", "<b>mang</b>i"],
            ["Lui / Lei", "<b>mang</b>ia"],
            ["Noi", "<b>mang</b>iamo"],
            ["Voi", "<b>mang</b>iate"],
            ["Loro", "<b>mang</b>iano"]
          ],
          examples: [
            {
              pronoun: "Io",
              it: "Ogni mattina prima di andare al lavoro, {mangio} una mela fresca e bevo un caffè.",
              en: "Every morning before going to work, I eat a fresh apple and drink a coffee."
            },
            {
              pronoun: "Noi",
              it: "Durante le vacanze estive, noi {mangiamo} sempre pasta fresca al ristorante del mare.",
              en: "During summer vacations, we always eat fresh pasta at the seaside restaurant."
            }
          ]
        },
        {
          name: "Imperfetto",
          what: "Past continuous actions, habits, descriptions. <b>When</b>: while, when, used to, always (past).",
          conjugations: [
            ["Io", "<b>mang</b>iavo"],
            ["Tu", "<b>mang</b>iavi"],
            ["Lui / Lei", "<b>mang</b>iava"],
            ["Noi", "<b>mang</b>iavamo"],
            ["Voi", "<b>mang</b>iavate"],
            ["Loro", "<b>mang</b>iavano"]
          ],
          examples: [
            {
              pronoun: "Io",
              it: "Da bambino {mangiavo} sempre i dolci dopo cena.",
              en: "As a child I always used to eat sweets after dinner."
            },
            {
              pronoun: "Tu",
              it: "Mentre studiavi, io {mangiavo} un panino.",
              en: "While you were studying, I was eating a sandwich."
            }
          ]
        },
        {
          name: "Passato Remoto",
          what: "Completed past actions, especially distant or single events. <em>When</em>: yesterday, last week, in 1999, once upon a time.",
          conjugations: [
            ["Io", "<b>mang</b>iai"],
            ["Tu", "<b>mang</b>iasti"],
            ["Lui / Lei", "<b>mang</b>iò"],
            ["Noi", "<b>mang</b>iammo"],
            ["Voi", "<b>mang</b>iaste"],
            ["Loro", "<b>mang</b>iarono"]
          ],
          examples: [
            {
              pronoun: "Io",
              it: "Ieri sera {mangiai} una pizza deliziosa al ristorante.",
              en: "Last night I ate a delicious pizza at the restaurant."
            },
            {
              pronoun: "Noi",
              it: "L'anno scorso {mangiammo} il pesce fresco al mare.",
              en: "Last year we ate fresh fish by the sea."
            }
          ]
        },
        {
          name: "Passato Prossimo",
          what: "Recent past actions with present relevance. <em>When</em>: today, this week, since, just, ever, never.",
          conjugations: [
            ["Io", "ho <b>mang</b>iato"],
            ["Tu", "hai <b>mang</b>iato"],
            ["Lui / Lei", "ha <b>mang</b>iato"],
            ["Noi", "abbiamo <b>mang</b>iato"],
            ["Voi", "avete <b>mang</b>iato"],
            ["Loro", "hanno <b>mang</b>iato"]
          ],
          examples: [
            {
              pronoun: "Io",
              it: "Oggi ho già {mangiato} due mele.",
              en: "Today I've already eaten two apples."
            },
            {
              pronoun: "Tu",
              it: "Hai mai {mangiato} il sushi giapponese?",
              en: "Have you ever eaten Japanese sushi?"
            }
          ]
        },
        {
          name: "Trapassato Prossimo",
          what: "Past actions completed before another past action. <em>When</em>: after, before, when, already, just (past).",
          conjugations: [
            ["Io", "avevo <b>mang</b>iato"],
            ["Tu", "avevi <b>mang</b>iato"],
            ["Lui / Lei", "aveva <b>mang</b>iato"],
            ["Noi", "avevamo <b>mang</b>iato"],
            ["Voi", "avevate <b>mang</b>iato"],
            ["Loro", "avevano <b>mang</b>iato"]
          ],
          examples: [
            {
              pronoun: "Io",
              it: "Quando arrivasti, io avevo già {mangiato} il pranzo.",
              en: "When you arrived, I had already eaten lunch."
            },
            {
              pronoun: "Noi",
              it: "Prima di partire, avevamo {mangiato} un pasto abbondante.",
              en: "Before leaving, we had eaten a hearty meal."
            }
          ]
        },
        {
          name: "Trapassato Remoto",
          what: "Rare — past actions completed before another past action (literary/formal). <em>When</em>: after, before, when (distant past).",
          conjugations: [
            ["Io", "ebbi <b>mang</b>iato"],
            ["Tu", "avesti <b>mang</b>iato"],
            ["Lui / Lei", "ebbe <b>mang</b>iato"],
            ["Noi", "avemmo <b>mang</b>iato"],
            ["Voi", "aveste <b>mang</b>iato"],
            ["Loro", "ebbero <b>mang</b>iato"]
          ],
          examples: [
            {
              pronoun: "Io",
              it: "Dopo che ebbi {mangiato}, uscii di casa.",
              en: "After I had eaten, I left the house."
            },
            {
              pronoun: "Noi",
              it: "Quando avemmo {mangiato}, iniziammo il viaggio.",
              en: "When we had eaten, we began the journey."
            }
          ]
        },
        {
          name: "Futuro Semplice",
          what: "Future actions or predictions. <em>When</em>: tomorrow, next week, in 2025, will.",
          conjugations: [
            ["Io", "<b>mang</b>erò"],
            ["Tu", "<b>mang</b>erai"],
            ["Lui / Lei", "<b>mang</b>erà"],
            ["Noi", "<b>mang</b>eremo"],
            ["Voi", "<b>mang</b>erete"],
            ["Loro", "<b>mang</b>eranno"]
          ],
          examples: [
            {
              pronoun: "Io",
              it: "Domani {mangerò} la pasta con i miei amici.",
              en: "Tomorrow I will eat pasta with my friends."
            },
            {
              pronoun: "Noi",
              it: "Quest'estate {mangeremo} il gelato ogni giorno.",
              en: "This summer we will eat ice cream every day."
            }
          ]
        },
        {
          name: "Futuro Anteriore",
          what: "Future actions completed before another future action. <em>When</em>: by, before, when (future).",
          conjugations: [
            ["Io", "avrò <b>mang</b>iato"],
            ["Tu", "avrai <b>mang</b>iato"],
            ["Lui / Lei", "avrà <b>mang</b>iato"],
            ["Noi", "avremo <b>mang</b>iato"],
            ["Voi", "avrete <b>mang</b>iato"],
            ["Loro", "avranno <b>mang</b>iato"]
          ],
          examples: [
            {
              pronoun: "Io",
              it: "Entro domani avrò {mangiato} tutto il cioccolato.",
              en: "By tomorrow I will have eaten all the chocolate."
            },
            {
              pronoun: "Tu",
              it: "Quando arriverai, avrai già {mangiato} il pranzo?",
              en: "When you arrive, will you have already eaten lunch?"
            }
          ]
        }
      ]
    },
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
          what: "Present subjunctive for current doubts/wishes. <b>Triggers</b>: che + pensare, volere, sperare, etc.",
          conjugations: [
            ["(che) Io", "<b>mang</b>i"],
            ["(che) Tu", "<b>mang</b>i"],
            ["(che) Lui / Lei", "<b>mang</b>i"],
            ["(che) Noi", "<b>mang</b>iamo"],
            ["(che) Voi", "<b>mang</b>iate"],
            ["(che) Loro", "<b>mang</b>ino"]
          ],
          examples: [
            {
              pronoun: "Io",
              it: "Spero che tu {mangi} qualcosa di sano oggi.",
              en: "I hope that you eat something healthy today."
            },
            {
              pronoun: "Noi",
              it: "È importante che noi {mangiamo} frutta ogni giorno.",
              en: "It's important that we eat fruit every day."
            }
          ]
        },
        {
          name: "Passato",
          what: "Past subjunctive for completed actions in doubt/wish contexts. <em>Triggers</em>: che + pensare, volere, sperare, etc.",
          conjugations: [
            ["(che) Io", "abbia <b>mang</b>iato"],
            ["(che) Tu", "abbia <b>mang</b>iato"],
            ["(che) Lui / Lei", "abbia <b>mang</b>iato"],
            ["(che) Noi", "abbiamo <b>mang</b>iato"],
            ["(che) Voi", "abbiate <b>mang</b>iato"],
            ["(che) Loro", "abbiano <b>mang</b>iato"]
          ],
          examples: [
            {
              pronoun: "Io",
              it: "Penso che tu abbia già {mangiato} il dessert.",
              en: "I think that you have already eaten the dessert."
            },
            {
              pronoun: "Noi",
              it: "Siamo felici che abbiate {mangiato} bene al ristorante.",
              en: "We are happy that you ate well at the restaurant."
            }
          ]
        },
        {
          name: "Imperfetto",
          what: "Past continuous subjunctive for hypothetical past situations. <em>Triggers</em>: che + pensare, volere, sperare, etc.",
          conjugations: [
            ["(che) Io", "<b>mang</b>iassi"],
            ["(che) Tu", "<b>mang</b>iassi"],
            ["(che) Lui / Lei", "<b>mang</b>iasse"],
            ["(che) Noi", "<b>mang</b>iassimo"],
            ["(che) Voi", "<b>mang</b>iaste"],
            ["(che) Loro", "<b>mang</b>iassero"]
          ],
          examples: [
            {
              pronoun: "Io",
              it: "Vorrei che tu {mangiassi} più verdura da bambino.",
              en: "I wish that you ate more vegetables as a child."
            },
            {
              pronoun: "Noi",
              it: "Era meglio se {mangiassimo} meno dolci ieri.",
              en: "It would have been better if we ate fewer sweets yesterday."
            }
          ]
        },
        {
          name: "Trapassato",
          what: "Past perfect subjunctive for hypothetical completed actions. <em>Triggers</em>: che + pensare, volere, sperare, etc.",
          conjugations: [
            ["(che) Io", "avessi <b>mang</b>iato"],
            ["(che) Tu", "avessi <b>mang</b>iato"],
            ["(che) Lui / Lei", "avesse <b>mang</b>iato"],
            ["(che) Noi", "avessimo <b>mang</b>iato"],
            ["(che) Voi", "aveste <b>mang</b>iato"],
            ["(che) Loro", "avessero <b>mang</b>iato"]
          ],
          examples: [
            {
              pronoun: "Io",
              it: "Mi dispiace che non avessi {mangiato} abbastanza.",
              en: "I'm sorry that you hadn't eaten enough."
            },
            {
              pronoun: "Noi",
              it: "Saremmo stati felici se aveste {mangiato} con noi.",
              en: "We would have been happy if you had eaten with us."
            }
          ]
        }
      ]
    },
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
          what: "Polite requests, hypothetical present situations. <b>When</b>: would, could (polite), if.",
          conjugations: [
            ["Io", "<b>mang</b>erei"],
            ["Tu", "<b>mang</b>eresti"],
            ["Lui / Lei", "<b>mang</b>erebbe"],
            ["Noi", "<b>mang</b>eremmo"],
            ["Voi", "<b>mang</b>ereste"],
            ["Loro", "<b>mang</b>erebbero"]
          ],
          examples: [
            {
              pronoun: "Io",
              it: "Mi {mangerei} volentieri una pizza margherita in quel ristorante italiano.",
              en: "I would gladly eat a margherita pizza at that Italian restaurant."
            },
            {
              pronoun: "Tu",
              it: "Cosa {mangeresti} se vincessi un milione di euro alla lotteria?",
              en: "What would you eat if you won a million euros in the lottery?"
            }
          ]
        },
        {
          name: "Passato",
          what: "Polite requests about past actions, hypothetical past situations. <em>When</em>: would have, could have (polite).",
          conjugations: [
            ["Io", "avrei <b>mang</b>iato"],
            ["Tu", "avresti <b>mang</b>iato"],
            ["Lui / Lei", "avrebbe <b>mang</b>iato"],
            ["Noi", "avremmo <b>mang</b>iato"],
            ["Voi", "avreste <b>mang</b>iato"],
            ["Loro", "avrebbero <b>mang</b>iato"]
          ],
          examples: [
            {
              pronoun: "Io",
              it: "Avrei {mangiato} di più se avessi avuto fame.",
              en: "I would have eaten more if I had been hungry."
            },
            {
              pronoun: "Noi",
              it: "Avremmo {mangiato} al ristorante se fossimo stati liberi.",
              en: "We would have eaten at the restaurant if we had been free."
            }
          ]
        }
      ]
    },
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
          what: "Direct commands, advice, requests. <em>When</em>: telling people what to do.",
          conjugations: [
            ["(Tu)", "<b>mang</b>ia"],
            ["(Lei) formal", "<b>mang</b>i"],
            ["(Noi)", "<b>mang</b>iamo"],
            ["(Voi)", "<b>mang</b>iate"],
            ["(Loro) formal", "<b>mang</b>ino"]
          ],
          examples: [
            {
              pronoun: "Tu",
              it: "{Mangia} la tua verdura prima del dolce!",
              en: "Eat your vegetables before dessert!"
            },
            {
              pronoun: "Noi",
              it: "{Mangiamo} qualcosa di leggero stasera.",
              en: "Let's eat something light tonight."
            }
          ]
        }
      ]
    },
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
          what: "Ongoing present actions. <em>When</em>: while, by (doing), when (doing).",
          conjugations: [
            ["Gerundio presente", "<b>mang</b>iando"]
          ],
          examples: [
            {
              pronoun: "",
              it: "Mi piace leggere un libro {mangiando} un panino al parco.",
              en: "I like to read a book while eating a sandwich in the park."
            },
            {
              pronoun: "",
              it: "Mentre studio all'università, spesso {mangio} uno snack veloce tra le lezioni.",
              en: "While studying at university, I often eat a quick snack between classes."
            }
          ]
        },
        {
          name: "Passato",
          what: "Completed actions in progressive contexts. <em>When</em>: after having done.",
          conjugations: [
            ["Gerundio passato", "avendo <b>mang</b>iato"]
          ],
          examples: [
            {
              pronoun: "",
              it: "Avendo {mangiato} troppo, mi sentivo pieno.",
              en: "Having eaten too much, I felt full."
            },
            {
              pronoun: "",
              it: "Dopo aver {mangiato}, usciamo a passeggiare.",
              en: "After having eaten, let's go for a walk."
            }
          ]
        }
      ]
    },
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
          what: "Base verb form. <em>When</em>: after modals, after prepositions, in compound tenses.",
          conjugations: [
            ["Presente", "<b>mang</b>iare"],
            ["Passato", "avere <b>mang</b>iato"]
          ],
          examples: [
            {
              pronoun: "",
              it: "Devo imparare a {mangiare} con le bacchette.",
              en: "I need to learn to eat with chopsticks."
            },
            {
              pronoun: "",
              it: "Dopo aver finito di {mangiare}, laviamo i piatti.",
              en: "After finishing eating, let's wash the dishes."
            }
          ]
        }
      ]
    },
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
          what: "Adjectival verb forms. <b>When</b>: describing nouns, in compound tenses.",
          headers: ["Form", "Conjugation", "Note"],
          conjugations: [
            ["Presente", "<b>mang</b>ante", "eating (active) - rare, literary form"],
            ["Passato", "<b>mang</b>iato", "eaten (passive)"]
          ],
          examples: [
            {
              pronoun: "",
              it: "La persona {mangiante} sembra affamata.",
              en: "The eating person seems hungry."
            },
            {
              pronoun: "",
              it: "Il cibo {mangiato} era delizioso.",
              en: "The eaten food was delicious."
            }
          ]
        }
      ]
    }
  ],

  quickRef: [
    { tense: "Presente", idea: "I eat / I am eating", example: "Mangio una mela." },
    { tense: "Imperfetto", idea: "I used to eat / I was eating", example: "Mangiavo sempre dolci." },
    { tense: "Passato Prossimo", idea: "I have eaten / I ate", example: "Ho mangiato la pasta." },
    { tense: "Passato Remoto", idea: "I ate (distant past)", example: "Mangiai al ristorante." },
    { tense: "Trapassato Prossimo", idea: "I had eaten", example: "Avevo mangiato prima." },
    { tense: "Trapassato Remoto", idea: "I had eaten (literary)", example: "Ebbi mangiato tutto." },
    { tense: "Futuro Semplice", idea: "I will eat", example: "Mangerò domani." },
    { tense: "Futuro Anteriore", idea: "I will have eaten", example: "Avrò mangiato entro sera." },
    { tense: "Congiuntivo Presente", idea: "That I eat / I hope I eat", example: "Spero che mangi." },
    { tense: "Congiuntivo Passato", idea: "That I have eaten", example: "Penso che abbia mangiato." },
    { tense: "Congiuntivo Imperfetto", idea: "That I ate (hypothetical)", example: "Vorrei che mangiassi." },
    { tense: "Congiuntivo Trapassato", idea: "That I had eaten", example: "Mi dispiace che avessi mangiato." },
    { tense: "Condizionale Presente", idea: "I would eat", example: "Mangerei volentieri." },
    { tense: "Condizionale Passato", idea: "I would have eaten", example: "Avrei mangiato di più." },
    { tense: "Imperativo", idea: "Eat! / Let's eat!", example: "Mangia la frutta!" },
    { tense: "Gerundio", idea: "Eating / By eating", example: "Mangiando, penso." }
  ]
};