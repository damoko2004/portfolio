// ---------------------------------------------------------------------------
// Étude de cas - migration d'un patrimoine SAS vers R (INSEE).
//
// MÊME RÈGLE que les autres cas : méthode, architecture et arbitrages, aucune
// valeur publiée. Pas de volumétrie, pas de nombre de programmes, pas de durée
// de traitement, pas de contenu de règle métier. Le visuel est synthétique.
// ---------------------------------------------------------------------------

export const caseSasR = {
  fr: {
    meta: {
      title: 'Migrer un patrimoine SAS vers R sans casser la production - étude de cas | Dikers Amoko',
      description:
        'Comment des programmes SAS de production statistique ont été réécrits en R : stratégie de non-régression, golden dataset, tolérances documentées, recette conjointe avec le métier et transfert aux équipes.',
    },
    eyebrow: 'Étude de cas',
    title: 'Migrer un patrimoine SAS vers R sans casser la production',
    lede:
      'À l’INSEE, des programmes SAS alimentaient une production statistique diffusée publiquement. Les réécrire en R supposait de garantir que les chiffres resteraient les mêmes - et de le prouver, indicateur par indicateur, avant que quiconque accepte de basculer.',

    facts: [
      { label: 'Contexte', value: 'INSEE - statistiques structurelles d’entreprises' },
      { label: 'Enjeu', value: 'Reproductibilité et maintenabilité' },
      { label: 'Période', value: 'Octobre 2021 - février 2023' },
      { label: 'Rôle', value: 'Statisticien, cadrage, réécriture et transfert' },
    ],

    confidentiality: {
      title: 'Ce que cette page ne montre pas, et pourquoi',
      body: [
        'Le contenu des règles métier, la volumétrie traitée, le nombre de programmes et les résultats de production sont confidentiels. Ils ne figurent pas ici.',
        'Ce qui suit décrit la méthode de migration et la stratégie de validation - ce qui se transpose à n’importe quel patrimoine SAS. Le visuel de cette page est une reconstitution construite à partir de données synthétiques.',
        'Le guide de bonnes pratiques proposé en téléchargement plus bas est un document méthodologique générique, sans aucune donnée ni règle de client.',
      ],
    },

    sections: [
      {
        title: 'Le vrai risque n’est pas technique',
        body: [
          'Réécrire un programme SAS en R est une tâche mécanique. Ce qui bloque une migration, c’est autre chose : personne ne veut être celui qui a fait changer un chiffre publié.',
          'Tant que le métier n’a pas la preuve que la nouvelle chaîne produit les mêmes résultats, la bascule n’a pas lieu - et le patrimoine SAS survit dix ans de plus, avec ses coûts de licence et ses programmes que plus personne ne sait relire.',
          'La migration est donc d’abord un problème de démonstration, et seulement ensuite un problème de code.',
        ],
      },
      {
        title: 'Ne pas traduire ligne à ligne',
        body: [
          'La tentation est de transcrire chaque étape SAS en son équivalent R. C’est le plus rapide à écrire, et le pire résultat possible : on obtient du R qui pense en SAS, illisible pour un développeur R et toujours aussi difficile à maintenir.',
          'Le principe retenu : conserver à l’identique les règles métier et les contrôles, mais adopter les standards R pour tout le reste. Un DATA step devient un pipeline explicite, une macro devient une fonction paramétrée, un format devient un dictionnaire de recodage versionné.',
          'Ce qui se transmet, ce sont les règles ; ce qui se réécrit, c’est leur expression.',
        ],
      },
      {
        title: 'La stratégie de validation',
        body: [
          'C’est le cœur de la mission, et ce qui décide de son acceptation.',
        ],
        list: [
          {
            title: 'Un jeu de référence figé',
            body:
              'Un golden dataset et ses sorties attendues, produits par la chaîne SAS existante. Toute la validation se fait contre cette référence, pas contre une exécution du jour qui bougerait entre deux tests.',
          },
          {
            title: 'Quatre familles de contrôles',
            body:
              'Volumétrie ligne à ligne aux étapes clés, unicité et intégrité des clés de jointure, bornes et distributions, puis agrégats et sous-totaux comparés au résultat SAS. Un écart sur l’un des quatre bloque la bascule.',
          },
          {
            title: 'Des tolérances écrites à l’avance',
            body:
              'SAS et R ne représentent pas toujours les nombres de la même façon, n’arrondissent pas toujours pareil, et ne trient pas à l’identique. Ces écarts sont inévitables : la seule question est de savoir lesquels sont acceptés, et pourquoi. La règle est fixée avant les tests, pas découverte pendant.',
          },
          {
            title: 'Une traçabilité des divergences',
            body:
              'Chaque écart constaté est consigné avec sa cause, la décision prise - corriger ou accepter - et la validation métier correspondante. C’est ce registre qui permet de dire oui à la bascule, et d’y revenir six mois plus tard.',
          },
        ],
      },
      {
        title: 'Les pièges propres au passage SAS vers R',
        body: [],
        list: [
          {
            title: 'Les valeurs manquantes',
            body:
              'SAS distingue le manquant numérique du manquant caractère ; R n’a qu’un NA. S’y ajoutent les codes métier - les valeurs conventionnelles qui signifient « non renseigné » sans être vides. Sans table de correspondance explicite, une agrégation change silencieusement de résultat.',
          },
          {
            title: 'Les types devinés',
            body:
              'Une colonne dont R infère le type à l’import est une régression qui attend son heure. Les schémas sont déclarés et contrôlés à l’entrée : un fichier qui ne correspond pas arrête le traitement plutôt que de produire un chiffre faux.',
          },
          {
            title: 'Les jointures',
            body:
              'Un merge SAS et un join R ne se comportent pas identiquement sur les doublons. Le contrôle de volumétrie avant et après chaque jointure n’est pas une précaution de confort : c’est le filet qui rattrape les produits cartésiens.',
          },
          {
            title: 'Les dates et les encodages',
            body:
              'Normalisation dès l’import, fuseaux documentés, encodage déclaré. Ce sont les écarts les plus bêtes et les plus longs à diagnostiquer quand on les découvre en recette.',
          },
        ],
      },
      {
        title: 'Ce qui rend la migration durable',
        body: [
          'Une réécriture réussie qui laisse un patrimoine R aussi difficile à maintenir que le SAS d’origine n’a rien réglé. La structure compte autant que le code.',
        ],
        list: [
          {
            title: 'Une arborescence de projet standard',
            body:
              'Configuration, import, transformations, contrôles qualité, exports : chaque responsabilité à sa place, la même d’un projet à l’autre. Un nouvel arrivant sait où chercher.',
          },
          {
            title: 'Des dépendances figées',
            body:
              'Les versions des packages et de R sont verrouillées et versionnées. Sans cela, la reproductibilité tient jusqu’à la prochaine mise à jour d’un package, et pas au-delà.',
          },
          {
            title: 'Les contrôles qualité dans la chaîne',
            body:
              'Volumétrie, clés, bornes et agrégats sont exécutés et journalisés à chaque run, pas seulement pendant la recette. C’est ce qui transforme la validation ponctuelle en surveillance permanente.',
          },
          {
            title: 'Un glossaire SAS vers R',
            body:
              'Les équivalences de concepts écrites pour les équipes qui connaissent SAS et pas R. C’est l’artefact le moins spectaculaire de la mission et celui qui décide de l’adoption.',
          },
        ],
      },
      {
        title: 'La recette, avec le métier et pas seulement l’IT',
        body: [
          'Une équipe informatique peut valider qu’un programme s’exécute. Elle ne peut pas valider qu’un indicateur veut toujours dire la même chose.',
          'Les sorties métier ont donc été standardisées - mêmes colonnes, mêmes libellés, mêmes contrôles - pour qu’une comparaison soit possible sans effort. Et la recette a été conduite conjointement : le métier valide l’équivalence, l’IT valide l’exécution.',
          'La documentation méthodologique et le transfert aux équipes faisaient partie du livrable, pas des bonnes intentions de fin de mission.',
        ],
      },
    ],

    mock: {
      title: 'À quoi ressemblait le contrôle de non-régression',
      note:
        'Reconstitution avec des données synthétiques générées pour cette page. Ni les indicateurs réels, ni les volumétries, ni les tolérances du projet n’y figurent.',
      badge: 'Données synthétiques',
      subject: 'Contrôle de non-régression - SAS de référence contre R',
      date: 'Exemple de rendu',
      columns: ['Contrôle', 'SAS', 'R', 'Écart', 'Décision'],
      rows: [
        ['Volumétrie après jointure', '148 302', '148 302', '0', 'Conforme'],
        ['Clés uniques', '148 302', '148 302', '0', 'Conforme'],
        ['Agrégat principal', '4 812 664', '4 812 664', '0', 'Conforme'],
        ['Sous-total secteur B', '918 240', '918 239', '1', 'Arrondi, accepté'],
        ['Valeurs manquantes', '2 117', '2 143', '26', 'Recodage à corriger'],
      ],
      footTitle: 'Règles fixées avant la comparaison',
      foot: [
        'Jeu de référence figé, produit par la chaîne existante',
        'Tolérance d’arrondi définie et documentée',
        'Table de correspondance des codes manquants',
        'Toute divergence consignée avec sa décision et sa validation métier',
      ],
    },

    guide: {
      title: 'Le guide de bonnes pratiques',
      body:
        'La méthode décrite ici est formalisée dans un guide que j’apporte en début de mission : structure de projet, conventions de nommage, gestion des dépendances, équivalences SAS vers R, pièges de sémantique entre les deux langages, stratégie de non-régression, phasage de la migration et checklist de recette. Document générique, sans aucune donnée ni règle de client.',
      cta: 'Télécharger le guide (PDF)',
      url: '/guides/guide-bonnes-pratiques-R-migration-SAS-vers-R-v2.pdf',
      meta: 'Version 2.0 - 18 pages',
    },

    outcome: {
      title: 'Ce qui reste, une fois la mission terminée',
      items: [
        'Un patrimoine réécrit aux standards R, lisible par un développeur qui ne connaît pas SAS',
        'Un registre des écarts, chacun avec sa cause, sa décision et sa validation métier',
        'Des contrôles qualité exécutés à chaque run, pas seulement pendant la recette',
        'Des dépendances figées, donc une reproductibilité qui survit aux mises à jour',
        'Un glossaire SAS vers R et des équipes accompagnées jusqu’à l’autonomie',
      ],
    },
    stackTitle: 'Environnement technique',
    stack: ['SAS', 'R', 'renv', 'haven', 'dplyr', 'data.table', 'testthat', 'Quarto', 'Git'],

    transferTitle: 'Ce qui est transférable à votre contexte',
    transfer: [
      'Le déclencheur est presque toujours le même : des coûts de licence, des programmes que plus personne ne sait relire, ou un départ en retraite qui approche. Le blocage, lui, est toujours le même aussi - personne ne veut valider un chiffre qui aurait bougé.',
      'Ce qui débloque : un jeu de référence figé, quatre familles de contrôles, des tolérances écrites avant les tests, et une recette où le métier valide l’équivalence. Le reste est de la réécriture, et la réécriture n’est pas la partie difficile.',
    ],

    cta: {
      title: 'Un patrimoine SAS que personne ne veut toucher ?',
      body: 'Décrivez-moi votre situation : je vous dis ce qui se migre vite, ce qui demande une recette lourde, et ce qui ne vaut pas la peine d’être migré.',
      button: 'Me contacter',
      back: 'Voir les autres études de cas',
    },
  },

  en: {
    meta: {
      title: 'Migrating a SAS codebase to R without breaking production - case study | Dikers Amoko',
      description:
        'How SAS production statistics programs were rewritten in R: non-regression strategy, golden dataset, documented tolerances, joint acceptance testing with business teams and handover.',
    },
    eyebrow: 'Case study',
    title: 'Migrating a SAS codebase to R without breaking production',
    lede:
      'At INSEE, SAS programs fed a publicly released statistical production. Rewriting them in R meant guaranteeing the figures would stay the same - and proving it, indicator by indicator, before anyone agreed to switch over.',

    facts: [
      { label: 'Context', value: 'INSEE - structural business statistics' },
      { label: 'Stake', value: 'Reproducibility and maintainability' },
      { label: 'Period', value: 'October 2021 - February 2023' },
      { label: 'Role', value: 'Statistician: framing, rewriting and handover' },
    ],

    confidentiality: {
      title: 'What this page does not show, and why',
      body: [
        'The content of the business rules, the volumes processed, the number of programs and the production results are confidential. They do not appear here.',
        'What follows describes the migration method and the validation strategy - what transfers to any SAS codebase. The visual on this page is a reconstruction built from synthetic data.',
        'The best-practice guide offered for download below is a generic methodological document, containing no client data or rules.',
      ],
    },

    sections: [
      {
        title: 'The real risk is not technical',
        body: [
          'Rewriting a SAS program in R is mechanical work. What blocks a migration is something else: nobody wants to be the person who changed a published figure.',
          'Until the business has proof that the new chain produces the same results, the switch does not happen - and the SAS codebase survives another decade, with its licence costs and its programs nobody can read any more.',
          'A migration is therefore first a demonstration problem, and only then a coding problem.',
        ],
      },
      {
        title: 'Do not translate line by line',
        body: [
          'The temptation is to transcribe each SAS step into its R equivalent. It is the fastest to write and the worst possible outcome: you end up with R that thinks in SAS, unreadable to an R developer and just as hard to maintain.',
          'The principle: keep the business rules and controls identical, but adopt R standards for everything else. A DATA step becomes an explicit pipeline, a macro becomes a parameterised function, a format becomes a versioned recoding dictionary.',
          'What carries over are the rules; what gets rewritten is how they are expressed.',
        ],
      },
      {
        title: 'The validation strategy',
        body: ['This is the heart of the assignment, and what decides its acceptance.'],
        list: [
          {
            title: 'A frozen reference dataset',
            body:
              'A golden dataset and its expected outputs, produced by the existing SAS chain. All validation runs against that reference, not against a daily run that would shift between two tests.',
          },
          {
            title: 'Four families of controls',
            body:
              'Row counts at key steps, uniqueness and integrity of join keys, bounds and distributions, then aggregates and subtotals compared with the SAS result. A discrepancy in any of the four blocks the switch.',
          },
          {
            title: 'Tolerances written in advance',
            body:
              'SAS and R do not always represent numbers the same way, do not always round the same way, and do not sort identically. These gaps are unavoidable: the only question is which ones are accepted, and why. The rule is set before testing, not discovered during it.',
          },
          {
            title: 'A trace of every divergence',
            body:
              'Each observed gap is logged with its cause, the decision taken - fix or accept - and the corresponding business validation. That register is what makes it possible to approve the switch, and to revisit it six months later.',
          },
        ],
      },
      {
        title: 'The pitfalls specific to SAS-to-R',
        body: [],
        list: [
          {
            title: 'Missing values',
            body:
              'SAS distinguishes numeric from character missing values; R has a single NA. On top of that come business codes - conventional values meaning "not provided" without being empty. Without an explicit mapping table, an aggregation silently changes result.',
          },
          {
            title: 'Inferred types',
            body:
              'A column whose type R infers at import is a regression waiting to happen. Schemas are declared and checked at the gate: a file that does not match stops the job rather than producing a wrong figure.',
          },
          {
            title: 'Joins',
            body:
              'A SAS merge and an R join do not behave identically on duplicates. Checking row counts before and after every join is not a comfort measure: it is the net that catches cartesian products.',
          },
          {
            title: 'Dates and encodings',
            body:
              'Normalised at import, time zones documented, encoding declared. These are the silliest gaps and the longest to diagnose when discovered during acceptance testing.',
          },
        ],
      },
      {
        title: 'What makes the migration last',
        body: [
          'A successful rewrite that leaves an R codebase as hard to maintain as the original SAS has solved nothing. Structure matters as much as code.',
        ],
        list: [
          {
            title: 'A standard project layout',
            body:
              'Configuration, import, transformations, quality controls, exports: each responsibility in its place, the same from one project to the next. A newcomer knows where to look.',
          },
          {
            title: 'Frozen dependencies',
            body:
              'Package and R versions are locked and versioned. Without that, reproducibility lasts until the next package update, and no longer.',
          },
          {
            title: 'Quality controls inside the chain',
            body:
              'Row counts, keys, bounds and aggregates run and are logged on every execution, not only during acceptance testing. That is what turns one-off validation into permanent monitoring.',
          },
          {
            title: 'A SAS-to-R glossary',
            body:
              'Concept equivalences written for teams who know SAS and not R. The least spectacular artefact of the assignment, and the one that decides adoption.',
          },
        ],
      },
      {
        title: 'Acceptance testing, with the business and not only IT',
        body: [
          'An IT team can validate that a program runs. It cannot validate that an indicator still means the same thing.',
          'Business outputs were therefore standardised - same columns, same labels, same controls - so that comparison required no effort. And acceptance testing was run jointly: the business validates equivalence, IT validates execution.',
          'Methodological documentation and team handover were part of the deliverable, not part of end-of-assignment good intentions.',
        ],
      },
    ],

    mock: {
      title: 'What the non-regression check looked like',
      note:
        'Reconstruction using synthetic data generated for this page. No real indicators, volumes or project tolerances appear in it.',
      badge: 'Synthetic data',
      subject: 'Non-regression check - reference SAS against R',
      date: 'Example rendering',
      columns: ['Check', 'SAS', 'R', 'Gap', 'Decision'],
      rows: [
        ['Row count after join', '148,302', '148,302', '0', 'Pass'],
        ['Unique keys', '148,302', '148,302', '0', 'Pass'],
        ['Main aggregate', '4,812,664', '4,812,664', '0', 'Pass'],
        ['Sector B subtotal', '918,240', '918,239', '1', 'Rounding, accepted'],
        ['Missing values', '2,117', '2,143', '26', 'Recoding to fix'],
      ],
      footTitle: 'Rules set before the comparison',
      foot: [
        'Frozen reference dataset, produced by the existing chain',
        'Rounding tolerance defined and documented',
        'Mapping table for missing-value codes',
        'Every divergence logged with its decision and business sign-off',
      ],
    },

    guide: {
      title: 'The best-practice guide',
      body:
        'The method described here is formalised in a guide I bring at the start of an engagement: project structure, naming conventions, dependency management, SAS-to-R equivalences, semantic pitfalls between the two languages, non-regression strategy, migration phasing and acceptance checklist. A generic document, with no client data or rules.',
      cta: 'Download the guide (PDF, in French)',
      url: '/guides/guide-bonnes-pratiques-R-migration-SAS-vers-R-v2.pdf',
      meta: 'Version 2.0 - 18 pages',
    },

    outcome: {
      title: 'What remains once the assignment ends',
      items: [
        'A codebase rewritten to R standards, readable by a developer who does not know SAS',
        'A register of discrepancies, each with its cause, decision and business sign-off',
        'Quality controls running on every execution, not only during acceptance testing',
        'Frozen dependencies, so reproducibility survives package updates',
        'A SAS-to-R glossary and teams supported through to autonomy',
      ],
    },
    stackTitle: 'Technical environment',
    stack: ['SAS', 'R', 'renv', 'haven', 'dplyr', 'data.table', 'testthat', 'Quarto', 'Git'],

    transferTitle: 'What transfers to your context',
    transfer: [
      'The trigger is almost always the same: licence costs, programs nobody can read any more, or an approaching retirement. The blocker is always the same too - nobody wants to sign off on a figure that might have moved.',
      'What unblocks it: a frozen reference dataset, four families of controls, tolerances written before testing, and acceptance testing where the business validates equivalence. The rest is rewriting, and rewriting is not the hard part.',
    ],

    cta: {
      title: 'A SAS codebase nobody wants to touch?',
      body: 'Describe your situation and I will tell you what migrates quickly, what needs heavy acceptance testing, and what is not worth migrating at all.',
      button: 'Get in touch',
      back: 'See the other case studies',
    },
  },
};
