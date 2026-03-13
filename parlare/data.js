const verbData = {
  verb: "parlare",
  meaning: "to speak / to talk",
  type: "are",

  info: {
    subtitle: "Regular -ARE verb",
    stem: "PARL-",
    auxiliary: "AVERE",
    gerundio: "parlando",
    participioPassato: "parlato",
    extra: "Common expressions: parlare chiaro (speak clearly), parlare al telefono (talk on the phone), parlare di (talk about), parlare con (talk to/with).",
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
          what: "What is happening <b>now</b> or <b>habitually</b>.",
          notes: ["💡 Parlare is a model -ARE verb — all regular -ARE verbs follow the same pattern: -o, -i, -a, -iamo, -ate, -ano."],
          conjugations: [
            ["Io","<b>parlo</b>"],
            ["Tu","<b>parli</b>"],
            ["Lui / Lei","<b>parla</b>"],
            ["Noi","<b>parliamo</b>"],
            ["Voi","<b>parlate</b>"],
            ["Loro","<b>parlano</b>"],
          ],
          examples: [
            { pronoun: "Io", it: "{Parlo} italiano con i miei nonni perché non capiscono l'inglese.", en: "I speak Italian with my grandparents because they don't understand English." },
            { pronoun: "Noi", it: "{Parliamo} spesso di politica a cena, anche se non siamo mai d'accordo.", en: "We often talk about politics at dinner, even though we never agree." },
          ],
        },
        {
          name: "Imperfetto",
          what: "The <b>\"used to\"</b> past — ongoing, repeated, or background actions.",
          conjugations: [
            ["Io","<b>parlavo</b>"],
            ["Tu","<b>parlavi</b>"],
            ["Lui / Lei","<b>parlava</b>"],
            ["Noi","<b>parlavamo</b>"],
            ["Voi","<b>parlavate</b>"],
            ["Loro","<b>parlavano</b>"],
          ],
          examples: [
            { pronoun: "Io", it: "Da bambino {parlavo} solo dialetto, poi a scuola ho imparato l'italiano.", en: "As a child I only spoke dialect, then at school I learned Italian." },
            { pronoun: "Loro", it: "{Parlavano} a bassa voce per non svegliare il bambino che dormiva.", en: "They were speaking quietly so as not to wake the child who was sleeping." },
          ],
        },
        {
          name: "Passato Remoto",
          what: "A <b>completed</b> past action, typically distant or literary.",
          conjugations: [
            ["Io","<b>parlai</b>"],
            ["Tu","<b>parlasti</b>"],
            ["Lui / Lei","<b>parlò</b>"],
            ["Noi","<b>parlammo</b>"],
            ["Voi","<b>parlaste</b>"],
            ["Loro","<b>parlarono</b>"],
          ],
          examples: [
            { pronoun: "Lui", it: "Il presidente {parlò} alla nazione dopo la tragedia e chiese unità.", en: "The president spoke to the nation after the tragedy and asked for unity." },
            { pronoun: "Noi", it: "{Parlammo} per ore quella sera e decidemmo di cambiare tutto.", en: "We talked for hours that evening and decided to change everything." },
          ],
        },
        {
          name: "Passato Prossimo",
          what: "The most common past tense in <b>spoken Italian</b> — a completed action with present relevance.",
          conjugations: [
            ["Io","<b>ho parlato</b>"],
            ["Tu","<b>hai parlato</b>"],
            ["Lui / Lei","<b>ha parlato</b>"],
            ["Noi","<b>abbiamo parlato</b>"],
            ["Voi","<b>avete parlato</b>"],
            ["Loro","<b>hanno parlato</b>"],
          ],
          examples: [
            { pronoun: "Io", it: "{Ho parlato} con il professore e mi ha detto che l'esame è stato rinviato.", en: "I spoke with the professor and he told me the exam has been postponed." },
            { pronoun: "Voi", it: "{Avete parlato} con il medico? Che cosa vi ha consigliato?", en: "Did you speak with the doctor? What did he advise you?" },
          ],
        },
        {
          name: "Trapassato Prossimo",
          what: "The <b>\"past of the past\"</b> — something that happened <b>before</b> another past event.",
          conjugations: [
            ["Io","<b>avevo parlato</b>"],
            ["Tu","<b>avevi parlato</b>"],
            ["Lui / Lei","<b>aveva parlato</b>"],
            ["Noi","<b>avevamo parlato</b>"],
            ["Voi","<b>avevate parlato</b>"],
            ["Loro","<b>avevano parlato</b>"],
          ],
          examples: [
            { pronoun: "Io", it: "{Avevo già parlato} con Marco prima che tu arrivassi, quindi sapeva tutto.", en: "I had already spoken with Marco before you arrived, so he knew everything." },
            { pronoun: "Loro", it: "{Avevano parlato} del problema molte volte, ma nessuno aveva mai agito.", en: "They had talked about the problem many times, but nobody had ever acted." },
          ],
        },
        {
          name: "Trapassato Remoto",
          what: "Literary \"past of the past\" — paired with the passato remoto.",
          conjugations: [
            ["Io","<b>ebbi parlato</b>"],
            ["Tu","<b>avesti parlato</b>"],
            ["Lui / Lei","<b>ebbe parlato</b>"],
            ["Noi","<b>avemmo parlato</b>"],
            ["Voi","<b>aveste parlato</b>"],
            ["Loro","<b>ebbero parlato</b>"],
          ],
          examples: [
            { pronoun: "Lui", it: "Dopo che {ebbe parlato}, si sedette e attese la risposta in silenzio.", en: "After he had spoken, he sat down and waited for the answer in silence." },
            { pronoun: "Noi", it: "Non appena {avemmo parlato} con l'avvocato, capimmo la gravità della situazione.", en: "As soon as we had spoken with the lawyer, we understood the gravity of the situation." },
          ],
        },
        {
          name: "Futuro Semplice",
          what: "What <b>will happen</b> — future actions, predictions, promises.",
          conjugations: [
            ["Io","<b>parlerò</b>"],
            ["Tu","<b>parlerai</b>"],
            ["Lui / Lei","<b>parlerà</b>"],
            ["Noi","<b>parleremo</b>"],
            ["Voi","<b>parlerete</b>"],
            ["Loro","<b>parleranno</b>"],
          ],
          examples: [
            { pronoun: "Io", it: "{Parlerò} con il capo domani e gli chiederò un aumento.", en: "I will speak with the boss tomorrow and ask him for a raise." },
            { pronoun: "Noi", it: "{Parleremo} di questo argomento nella prossima riunione, ora non c'è tempo.", en: "We will talk about this topic at the next meeting — there's no time now." },
          ],
        },
        {
          name: "Futuro Anteriore",
          what: "What <b>will have happened</b> — a future action completed before another future event.",
          conjugations: [
            ["Io","<b>avrò parlato</b>"],
            ["Tu","<b>avrai parlato</b>"],
            ["Lui / Lei","<b>avrà parlato</b>"],
            ["Noi","<b>avremo parlato</b>"],
            ["Voi","<b>avrete parlato</b>"],
            ["Loro","<b>avranno parlato</b>"],
          ],
          examples: [
            { pronoun: "Io", it: "Quando arriverai, {avrò già parlato} con tutti e saprò che cosa pensano.", en: "When you arrive, I will have already spoken with everyone and will know what they think." },
            { pronoun: "Lui", it: "Entro stasera, Luigi {avrà parlato} con il direttore e ci darà una risposta.", en: "By tonight, Luigi will have spoken with the director and will give us an answer." },
          ],
        },
      ],
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
          what: "Subjunctive present — doubt, opinion, desire about <b>current</b> situations.",
          notes: ["💡 Common triggers: È importante che {parli} (It's important that you speak), Spero che {parli} (I hope that you speak), Non credo che {parli} (I don't believe that you speak)."],
          conjugations: [
            ["(che) Io","<b>parli</b>"],
            ["(che) Tu","<b>parli</b>"],
            ["(che) Lui / Lei","<b>parli</b>"],
            ["(che) Noi","<b>parliamo</b>"],
            ["(che) Voi","<b>parliate</b>"],
            ["(che) Loro","<b>parlino</b>"],
          ],
          examples: [
            { pronoun: "Tu", it: "Voglio che tu {parli} con tua sorella prima che sia troppo tardi.", en: "I want you to talk to your sister before it's too late." },
            { pronoun: "Loro", it: "È strano che non {parlino} mai dei loro problemi con nessuno.", en: "It's strange that they never talk about their problems with anyone." },
          ],
        },
        {
          name: "Passato",
          what: "Subjunctive past — doubt, opinion about <b>completed</b> actions.",
          conjugations: [
            ["(che) Io","<b>abbia parlato</b>"],
            ["(che) Tu","<b>abbia parlato</b>"],
            ["(che) Lui / Lei","<b>abbia parlato</b>"],
            ["(che) Noi","<b>abbiamo parlato</b>"],
            ["(che) Voi","<b>abbiate parlato</b>"],
            ["(che) Loro","<b>abbiano parlato</b>"],
          ],
          examples: [
            { pronoun: "Lui", it: "Credo che Marco {abbia parlato} troppo e abbia rivelato il segreto.", en: "I think Marco spoke too much and revealed the secret." },
            { pronoun: "Noi", it: "Sembra che {abbiamo parlato} invano — nessuno ha ascoltato i nostri consigli.", en: "It seems we spoke in vain — nobody listened to our advice." },
          ],
        },
        {
          name: "Imperfetto",
          what: "Subjunctive imperfect — hypothetical or past subjunctive, often in \"se\" clauses.",
          conjugations: [
            ["(che) Io","<b>parlassi</b>"],
            ["(che) Tu","<b>parlassi</b>"],
            ["(che) Lui / Lei","<b>parlasse</b>"],
            ["(che) Noi","<b>parlassimo</b>"],
            ["(che) Voi","<b>parlaste</b>"],
            ["(che) Loro","<b>parlassero</b>"],
          ],
          examples: [
            { pronoun: "Tu", it: "Se {parlassi} più lentamente, tutti ti capirebbero senza problemi.", en: "If you spoke more slowly, everyone would understand you without problems." },
            { pronoun: "Noi", it: "Il professore voleva che {parlassimo} solo in italiano durante la lezione.", en: "The professor wanted us to speak only in Italian during the lesson." },
          ],
        },
        {
          name: "Trapassato",
          what: "Subjunctive past perfect — \"if I had...\" — unrealized past conditions.",
          conjugations: [
            ["(che) Io","<b>avessi parlato</b>"],
            ["(che) Tu","<b>avessi parlato</b>"],
            ["(che) Lui / Lei","<b>avesse parlato</b>"],
            ["(che) Noi","<b>avessimo parlato</b>"],
            ["(che) Voi","<b>aveste parlato</b>"],
            ["(che) Loro","<b>avessero parlato</b>"],
          ],
          examples: [
            { pronoun: "Io", it: "Se {avessi parlato} prima, avremmo potuto evitare tutto questo problema.", en: "If I had spoken up sooner, we could have avoided this whole problem." },
            { pronoun: "Tu", it: "Se tu {avessi parlato} con lei quel giorno, forse non se ne sarebbe andata.", en: "If you had talked to her that day, maybe she wouldn't have left." },
          ],
        },
      ],
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
          what: "What <b>would happen</b> — hypothetical, polite requests.",
          conjugations: [
            ["Io","<b>parlerei</b>"],
            ["Tu","<b>parleresti</b>"],
            ["Lui / Lei","<b>parlerebbe</b>"],
            ["Noi","<b>parleremmo</b>"],
            ["Voi","<b>parlereste</b>"],
            ["Loro","<b>parlerebbero</b>"],
          ],
          examples: [
            { pronoun: "Io", it: "{Parlerei} volentieri con lui, ma non risponde mai al telefono.", en: "I would gladly talk to him, but he never answers the phone." },
            { pronoun: "Noi", it: "{Parleremmo} con il direttore, ma è sempre in riunione.", en: "We would talk to the director, but he's always in a meeting." },
          ],
        },
        {
          name: "Passato",
          what: "What <b>would have happened</b> — unrealized past hypotheticals.",
          conjugations: [
            ["Io","<b>avrei parlato</b>"],
            ["Tu","<b>avresti parlato</b>"],
            ["Lui / Lei","<b>avrebbe parlato</b>"],
            ["Noi","<b>avremmo parlato</b>"],
            ["Voi","<b>avreste parlato</b>"],
            ["Loro","<b>avrebbero parlato</b>"],
          ],
          examples: [
            { pronoun: "Io", it: "{Avrei parlato} con il capo, ma ero troppo nervoso in quel momento.", en: "I would have spoken with the boss, but I was too nervous at that moment." },
            { pronoun: "Loro", it: "{Avrebbero parlato} prima, ma avevano paura delle conseguenze.", en: "They would have spoken up sooner, but they were afraid of the consequences." },
          ],
        },
      ],
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
          what: "Direct commands and instructions.",
          notes: ["💡 Formal vs informal: Use {parla} (tu) with friends/family, {parli} (Lei) with strangers/elders, {parlate} (voi) with groups."],
          conjugations: [
            ["(Tu)","<b>parla</b>"],
            ["(Lei) formal","<b>parli</b>"],
            ["(Noi)","<b>parliamo</b>"],
            ["(Voi)","<b>parlate</b>"],
            ["(Loro) formal","<b>parlino</b>"],
          ],
          examples: [
            { pronoun: "Tu", it: "{Parla} più forte, non ti sento con tutto questo rumore!", en: "Speak louder, I can't hear you with all this noise!" },
            { pronoun: "Voi", it: "{Parlate} uno alla volta, altrimenti non capisco niente!", en: "Speak one at a time, otherwise I can't understand anything!" },
          ],
        },
      ],
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
          what: "Ongoing action happening simultaneously with another action.",
          conjugations: [
            ["Gerundio presente","<b>parlando</b>"],
          ],
          examples: [
            { pronoun: "", it: "{Parlando} con Maria, ho scoperto che anche lei vuole trasferirsi all'estero.", en: "Talking with Maria, I found out that she also wants to move abroad." },
          ],
        },
        {
          name: "Passato",
          what: "A completed action that happened before the main action.",
          conjugations: [
            ["Gerundio passato","<b>avendo parlato</b>"],
          ],
          examples: [
            { pronoun: "", it: "{Avendo parlato} con l'avvocato, finalmente sapevamo come procedere.", en: "Having spoken with the lawyer, we finally knew how to proceed." },
          ],
        },
      ],
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
          what: "The base form — used after modal verbs, prepositions, and in verb chains.",
          conjugations: [
            ["Presente","<b>parlare</b>"],
            ["Passato","<b>avere parlato</b>"],
          ],
          examples: [
            { pronoun: "", it: "Devo {parlare} con te di una cosa importante prima di domani.", en: "I need to talk to you about something important before tomorrow." },
            { pronoun: "", it: "Dopo {avere parlato} con il dottore, mi sono sentito molto più tranquillo.", en: "After having spoken with the doctor, I felt much calmer." },
          ],
        },
      ],
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
          what: "Verb forms that can function as adjectives. The <b>passato</b> form is used in all compound tenses.",
          headers: ["Form","Conjugation","Note"],
          conjugations: [
            ["Presente","<b>parlante</b>","Adjective-like form — e.g. un pappagallo parlante (a talking parrot)"],
            ["Passato","<b>parlato</b>","Used in all compound tenses"],
          ],
          examples: [
            { pronoun: "", it: "L'italiano {parlato} al sud è molto diverso da quello del nord.", en: "The Italian spoken in the south is very different from that of the north." },
          ],
        },
      ],
    },
  ],

  quickRef: [
    { tense: "Presente", idea: "now / habits", example: "Io parlo italiano." },
    { tense: "Imperfetto", idea: "used to / was ...ing", example: "Io parlavo sempre." },
    { tense: "Passato Prossimo", idea: "I have / I did (recent)", example: "Io ho parlato con lui." },
    { tense: "Passato Remoto", idea: "I did (distant/literary)", example: "Io parlai al pubblico." },
    { tense: "Trapassato Prossimo", idea: "I had done", example: "Io avevo già parlato." },
    { tense: "Trapassato Remoto", idea: "after I had done (literary)", example: "Ebbi parlato e partii." },
    { tense: "Futuro Semplice", idea: "I will", example: "Io parlerò con lui." },
    { tense: "Futuro Anteriore", idea: "I will have", example: "Avrò parlato entro sera." },
    { tense: "Congiuntivo Presente", idea: "that I (doubt/wish)", example: "Vuole che io parli." },
    { tense: "Congiuntivo Passato", idea: "that I have (doubt/wish)", example: "Credo che abbia parlato." },
    { tense: "Congiuntivo Imperfetto", idea: "if I were / wished", example: "Se parlassi piano..." },
    { tense: "Congiuntivo Trapassato", idea: "if I had (unrealized)", example: "Se avessi parlato..." },
    { tense: "Condizionale Presente", idea: "I would", example: "Io parlerei con lui." },
    { tense: "Condizionale Passato", idea: "I would have", example: "Avrei parlato prima." },
    { tense: "Imperativo", idea: "do it!", example: "Parla più forte!" },
    { tense: "Gerundio", idea: "while ...ing", example: "Parlando con lei..." },
  ],
};