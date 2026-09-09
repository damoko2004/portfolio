// ---------------------------------------------------------------------------
// Étude de cas - pilotage de l'acquisition digitale (Banque LCL).
//
// MÊME RÈGLE que case-rte.ts : on décrit le problème, la méthode et les choix
// d'ingénierie. Aucune valeur n'est publiée - pas de volume de campagne, pas de
// coût d'acquisition, pas de taux de conversion, pas de budget média, aucune
// capture d'un tableau de bord réel. Les visuels sont des reconstitutions
// synthétiques. Gardez ce commentaire si vous ajoutez un autre cas client.
// ---------------------------------------------------------------------------

export const caseLcl = {
  fr: {
    meta: {
      title: 'Mesurer ce que rapporte l’acquisition digitale d’une banque - étude de cas | Dikers Amoko',
      description:
        'Comment des chiffres dispersés entre plusieurs outils sont devenus un référentiel de KPI unique, industrialisé et opposable en comité de direction. Méthode, architecture et arbitrages.',
    },
    eyebrow: 'Étude de cas',
    title: 'Mesurer ce que rapporte vraiment l’acquisition digitale d’une banque',
    lede:
      'Chez LCL, les indicateurs de performance des campagnes digitales existaient déjà - dans plusieurs outils, avec plusieurs définitions, et donc plusieurs réponses possibles à la même question. J’ai conçu le socle de données, le référentiel d’indicateurs et le dispositif de reporting qui ont permis de n’en donner qu’une.',

    facts: [
      { label: 'Client', value: 'Banque LCL' },
      { label: 'Direction', value: 'Marketing digital & Data Factory' },
      { label: 'Période', value: 'Juin 2024 - décembre 2025' },
      { label: 'Rôle', value: 'Consultant Data Scientist, interface métiers' },
    ],

    confidentiality: {
      title: 'Ce que cette page ne montre pas, et pourquoi',
      body: [
        'Les volumes de campagne, les coûts d’acquisition, les taux de conversion, les budgets média et les définitions internes d’indicateurs sont confidentiels. Ils ne figurent pas ici.',
        'Ce qui suit décrit la démarche, l’architecture et les arbitrages - ce qui se transpose à un autre annonceur. Le visuel de cette page est une reconstitution construite à partir de données synthétiques, sans rapport avec les valeurs réelles.',
        'C’est la même règle que pour ma mission chez RTE : je publie des méthodes, jamais des chiffres de client.',
      ],
    },

    sections: [
      {
        title: 'Trois chiffres pour la même question',
        body: [
          'Le suivi des campagnes reposait sur plusieurs outils, chacun légitime dans son périmètre : les plateformes média pour les impressions et les clics, les outils web pour le parcours, les systèmes internes pour les entrées en relation. Chacun comptait correctement - selon sa propre définition.',
          'Résultat : à la question « combien cette campagne a-t-elle rapporté ? », trois interlocuteurs pouvaient répondre trois chiffres, tous défendables. Le débat en comité portait alors sur la donnée plutôt que sur la décision, et l’arbitrage budgétaire s’en trouvait retardé.',
          'Le problème n’était donc pas de produire davantage d’indicateurs. C’était d’en produire moins, mais opposables.',
        ],
      },
      {
        title: 'Ce que j’ai livré',
        body: ['Un socle, un référentiel et un dispositif de restitution, conçus ensemble.'],
        list: [
          {
            title: 'Un cube de données multi-sources',
            body:
              'Un socle consolidant acquisition, conversion et parcours client sur plusieurs dimensions d’analyse, alimenté automatiquement et rapproché des systèmes internes avant publication.',
          },
          {
            title: 'Un référentiel de KPI documenté',
            body:
              'Chaque indicateur avec sa définition écrite, sa source, sa maille, ses règles d’exclusion et son propriétaire métier. C’est le livrable qui a mis fin au débat sur les chiffres.',
          },
          {
            title: 'Un dispositif de reporting industrialisé',
            body:
              'Tableaux de bord Power BI automatisés et maintenus, alimentant les revues mensuelles, trimestrielles et annuelles présentées à la Direction.',
          },
          {
            title: 'Des analyses à la demande',
            body:
              'Mesure de l’impact des campagnes fil rouge et temps fort, segmentation comportementale des audiences prospects, tests A/B, études de sensibilité et détection d’anomalies.',
          },
        ],
      },
      {
        title: 'Le vrai sujet : relier une impression à une entrée en relation',
        body: [
          'Une bannière vue n’est pas un client gagné. Entre les deux, il y a un parcours qui traverse des systèmes qui ne se parlent pas, et qui se termine parfois hors du web - en agence.',
          'C’est la difficulté centrale de cette mission. Un clic est identifié ; une entrée en relation en agence ne l’est pas de la même manière. Prétendre attribuer l’une à l’autre avec une précision qu’on n’a pas produit des chiffres flatteurs et faux.',
          'J’ai donc traité la mesure de l’impact comme un travail de modélisation statistique assumé, avec ses hypothèses écrites et ses limites annoncées, plutôt que comme un calcul d’attribution présenté comme exact. Une direction préfère un chiffre encadré à un chiffre faussement précis - à condition qu’on lui dise lequel des deux on lui présente.',
        ],
      },
      {
        title: 'L’interface entre le métier et la Data Factory',
        body: [
          'Une partie substantielle de la mission ne consistait pas à produire de la donnée, mais à faire en sorte que la bonne soit produite par l’équipe qui en avait la charge.',
        ],
        list: [
          {
            title: 'Traduire un besoin en spécification',
            body:
              'Recueil auprès du Marketing et du Produit, puis traduction en expressions de besoin, règles de gestion et spécifications exploitables par la Data Factory - avec les critères d’acceptation écrits avant le développement, pas après.',
          },
          {
            title: 'Arbitrer la faisabilité et le séquencement',
            body:
              'Dire ce qui est coûteux, ce qui est impossible en l’état, et ce qui peut attendre. C’est le rôle le moins visible et celui qui fait gagner le plus de temps.',
          },
          {
            title: 'Recetter avant la mise en production',
            body:
              'Contrôles de complétude, rapprochements, suivi des anomalies jusqu’à leur correction. Un indicateur faux publié une fois coûte plus cher en confiance que trois semaines de retard.',
          },
        ],
      },
      {
        title: 'Les décisions qui ont compté',
        body: [],
        list: [
          {
            title: 'Une définition, un propriétaire',
            body:
              'Chaque indicateur du référentiel porte le nom d’un responsable métier. Ce n’est pas une formalité de gouvernance : c’est ce qui permet de trancher quand deux directions ne sont pas d’accord, sans arbitrage technique.',
          },
          {
            title: 'La réconciliation avant la publication',
            body:
              'Les chiffres sont rapprochés des systèmes internes avant d’apparaître dans un tableau de bord. Un écart non expliqué bloque la publication plutôt que de la décorer d’un astérisque.',
          },
          {
            title: 'Les hypothèses affichées à côté du résultat',
            body:
              'Les mesures d’impact indiquent leur périmètre et leurs limites. Cela réduit l’effet d’annonce et augmente la durée de vie du chiffre : personne ne le découvre fragile six mois plus tard.',
          },
          {
            title: 'L’industrialisation plutôt que la production manuelle',
            body:
              'Les traitements et les tableaux de bord sont automatisés. Le temps récupéré est passé en analyse, ce qui est la seule partie du travail que personne d’autre ne peut faire à ma place.',
          },
        ],
      },
      {
        title: 'La sortie de mission',
        body: [
          'Le référentiel de KPI, les règles de gestion et les procédures de recette ont été documentés et transmis. Les tableaux de bord tournent sans intervention manuelle.',
          'Comme chez RTE et à l’INSEE, ce qui reste après mon départ fait partie du livrable, pas des bonnes intentions.',
        ],
      },
    ],

    mock: {
      title: 'À quoi ressemblait le livrable',
      note:
        'Reconstitution avec des données synthétiques générées pour cette page. Ni les valeurs, ni les libellés internes, ni les définitions du référentiel réel n’y figurent.',
      badge: 'Données synthétiques',
      subject: 'Performance de l’acquisition digitale',
      date: 'Exemple de rendu',
      funnelTitle: 'Du média à l’entrée en relation',
      funnelNote: 'Chaque étape indique sa source et sa maille dans le référentiel.',
      funnel: ['Impressions', 'Clics', 'Visites qualifiées', 'Demandes', 'Entrées en relation'],
      channelsTitle: 'Contribution par levier',
      channelsNote: 'Contribution estimée, périmètre et hypothèses rappelés sous le graphique.',
      channels: ['Levier A', 'Levier B', 'Levier C', 'Levier D', 'Levier E'],
      footTitle: 'Mentions portées sur chaque restitution',
      foot: [
        'Définition et propriétaire de chaque indicateur',
        'Source, maille et règles d’exclusion',
        'Périmètre et hypothèses de la mesure d’impact',
        'Écarts de réconciliation non résolus',
      ],
    },

    stackTitle: 'Environnement technique',
    stack: ['SQL', 'Teradata', 'SAS', 'R', 'Dataiku', 'Power BI', 'Excel / VBA'],

    transferTitle: 'Ce qui est transférable à votre contexte',
    transfer: [
      'Le symptôme est reconnaissable : plusieurs équipes produisent des chiffres différents sur le même sujet, et les réunions servent à les réconcilier plutôt qu’à décider. Ce n’est presque jamais un problème d’outil.',
      'Ce qui règle la situation, c’est un référentiel écrit avec un propriétaire par indicateur, une réconciliation systématique avant publication, et l’honnêteté sur ce que la mesure ne peut pas établir. Le reste - le cube, les tableaux de bord, l’automatisation - est de l’exécution.',
    ],

    cta: {
      title: 'Trois équipes, trois chiffres, la même question ?',
      body: 'Décrivez-moi votre situation, je vous dis en une conversation où se trouve l’écart et ce qu’il faut construire pour le fermer.',
      button: 'Me contacter',
      back: 'Voir les autres études de cas',
    },
  },

  en: {
    meta: {
      title: 'Measuring what a bank’s digital acquisition really returns - case study | Dikers Amoko',
      description:
        'How figures scattered across several tools became a single, industrialised KPI reference that holds up in an executive committee. Method, architecture and trade-offs.',
    },
    eyebrow: 'Case study',
    title: 'Measuring what a bank’s digital acquisition really returns',
    lede:
      'At LCL, performance indicators for digital campaigns already existed - across several tools, with several definitions, and therefore several possible answers to the same question. I designed the data foundation, the KPI reference and the reporting system that made it possible to give only one.',

    facts: [
      { label: 'Client', value: 'Banque LCL' },
      { label: 'Department', value: 'Digital marketing & Data Factory' },
      { label: 'Period', value: 'June 2024 - December 2025' },
      { label: 'Role', value: 'Data Scientist consultant, business interface' },
    ],

    confidentiality: {
      title: 'What this page does not show, and why',
      body: [
        'Campaign volumes, acquisition costs, conversion rates, media budgets and internal indicator definitions are confidential. They do not appear here.',
        'What follows describes the approach, the architecture and the trade-offs - what transfers to another advertiser. The visual on this page is a reconstruction built from synthetic data, unrelated to any real value.',
        'Same rule as for my RTE assignment: I publish methods, never a client’s figures.',
      ],
    },

    sections: [
      {
        title: 'Three numbers for the same question',
        body: [
          'Campaign tracking relied on several tools, each legitimate within its own scope: media platforms for impressions and clicks, web tools for the journey, internal systems for new customer relationships. Each counted correctly - according to its own definition.',
          'The result: asked "what did this campaign return?", three people could give three figures, all defensible. Committee discussions then focused on the data rather than the decision, and budget arbitration was delayed.',
          'So the problem was not producing more indicators. It was producing fewer, but ones that could not be argued with.',
        ],
      },
      {
        title: 'What I delivered',
        body: ['A foundation, a reference and a reporting system, designed together.'],
        list: [
          {
            title: 'A multi-source data cube',
            body:
              'A foundation consolidating acquisition, conversion and customer journey across several analysis dimensions, fed automatically and reconciled against internal systems before publication.',
          },
          {
            title: 'A documented KPI reference',
            body:
              'Every indicator with its written definition, source, granularity, exclusion rules and business owner. This is the deliverable that ended the argument about numbers.',
          },
          {
            title: 'An industrialised reporting system',
            body:
              'Automated and maintained Power BI dashboards, feeding the monthly, quarterly and annual reviews presented to management.',
          },
          {
            title: 'Analysis on demand',
            body:
              'Impact measurement for always-on and peak campaigns, behavioural segmentation of prospect audiences, A/B tests, sensitivity studies and anomaly detection.',
          },
        ],
      },
      {
        title: 'The real problem: linking an impression to a new relationship',
        body: [
          'A banner seen is not a customer won. Between the two lies a journey crossing systems that do not talk to each other, and sometimes ending off the web - in a branch.',
          'That is the central difficulty of this assignment. A click is identified; a branch visit is not identified the same way. Claiming to attribute one to the other with a precision you do not have produces flattering, false numbers.',
          'I therefore treated impact measurement as deliberate statistical modelling, with written assumptions and stated limits, rather than as an attribution calculation presented as exact. Management prefers a bounded figure to a falsely precise one - provided you say which of the two you are showing.',
        ],
      },
      {
        title: 'The interface between business and the Data Factory',
        body: [
          'A substantial part of the assignment was not producing data, but making sure the right data was produced by the team responsible for it.',
        ],
        list: [
          {
            title: 'Turning a need into a specification',
            body:
              'Gathering from Marketing and Product, then translating into requirements, business rules and specifications the Data Factory could act on - with acceptance criteria written before development, not after.',
          },
          {
            title: 'Arbitrating feasibility and sequencing',
            body:
              'Saying what is expensive, what is impossible as things stand, and what can wait. The least visible role, and the one that saves the most time.',
          },
          {
            title: 'Testing before production',
            body:
              'Completeness checks, reconciliation, anomaly tracking through to resolution. One wrong indicator published costs more in trust than three weeks of delay.',
          },
        ],
      },
      {
        title: 'The decisions that mattered',
        body: [],
        list: [
          {
            title: 'One definition, one owner',
            body:
              'Every indicator in the reference carries the name of a business owner. Not a governance formality: it is what settles disagreements between departments without technical arbitration.',
          },
          {
            title: 'Reconciliation before publication',
            body:
              'Figures are reconciled against internal systems before appearing in a dashboard. An unexplained gap blocks publication rather than decorating it with an asterisk.',
          },
          {
            title: 'Assumptions shown next to the result',
            body:
              'Impact measurements state their scope and limits. This reduces the announcement effect and extends the figure’s shelf life: nobody discovers it was fragile six months later.',
          },
          {
            title: 'Industrialisation over manual production',
            body:
              'Processing and dashboards are automated. The time recovered goes into analysis, the only part of the work nobody else can do in my place.',
          },
        ],
      },
      {
        title: 'Leaving the assignment',
        body: [
          'The KPI reference, business rules and testing procedures were documented and handed over. The dashboards run without manual intervention.',
          'As at RTE and INSEE, what remains after I leave is part of the deliverable, not part of the good intentions.',
        ],
      },
    ],

    mock: {
      title: 'What the deliverable looked like',
      note:
        'Reconstruction using synthetic data generated for this page. No real values, internal labels or reference definitions appear in it.',
      badge: 'Synthetic data',
      subject: 'Digital acquisition performance',
      date: 'Example rendering',
      funnelTitle: 'From media to new relationship',
      funnelNote: 'Each step states its source and granularity in the reference.',
      funnel: ['Impressions', 'Clicks', 'Qualified visits', 'Applications', 'New relationships'],
      channelsTitle: 'Contribution by channel',
      channelsNote: 'Estimated contribution, with scope and assumptions restated below the chart.',
      channels: ['Channel A', 'Channel B', 'Channel C', 'Channel D', 'Channel E'],
      footTitle: 'Notes carried on every report',
      foot: [
        'Definition and owner of each indicator',
        'Source, granularity and exclusion rules',
        'Scope and assumptions of the impact measurement',
        'Unresolved reconciliation gaps',
      ],
    },

    stackTitle: 'Technical environment',
    stack: ['SQL', 'Teradata', 'SAS', 'R', 'Dataiku', 'Power BI', 'Excel / VBA'],

    transferTitle: 'What transfers to your context',
    transfer: [
      'The symptom is recognisable: several teams produce different figures on the same subject, and meetings are spent reconciling them rather than deciding. It is almost never a tooling problem.',
      'What fixes it is a written reference with an owner per indicator, systematic reconciliation before publication, and honesty about what the measurement cannot establish. The rest - the cube, the dashboards, the automation - is execution.',
    ],

    cta: {
      title: 'Three teams, three numbers, one question?',
      body: 'Describe your situation and I will tell you in one conversation where the gap sits and what needs building to close it.',
      button: 'Get in touch',
      back: 'See the other case studies',
    },
  },
};
