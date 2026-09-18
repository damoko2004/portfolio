// ---------------------------------------------------------------------------
// Étude de cas - Customer Intelligence pour un éditeur SaaS (Yubora).
//
// MÊME RÈGLE que les autres cas : méthode, architecture et arbitrages.
// Aucune valeur publiée - pas de MRR, pas d'ARR, pas de taux de churn, pas de
// LTV, pas de prix, pas de marge. Les visuels sont synthétiques.
//
// RÉFÉRENCE : le CV fait foi. Intitulé retenu « Associé & Lead Data Scientist
// - Pôle Customer Intelligence », depuis janvier 2026. C'est cette version qui
// doit figurer sur le site, sur le CV et sur LinkedIn.
// ---------------------------------------------------------------------------

export const caseYubora = {
  fr: {
    meta: {
      title: 'Piloter un SaaS par la donnée avant d’avoir de l’historique - étude de cas | Dikers Amoko',
      description:
        'Prévision du revenu récurrent, anticipation du churn, valeur client et pricing dynamique chez un éditeur SaaS en phase de lancement. Méthode, modèles et arbitrages, sans données confidentielles.',
    },
    eyebrow: 'Étude de cas',
    title: 'Piloter un SaaS par la donnée quand l’historique n’existe pas encore',
    lede:
      'Chez Yubora, éditeur SaaS de gestion et de facturation électronique pour les TPE et PME, il fallait construire le pilotage économique en même temps que l’entreprise. Pas de datawarehouse, pas de recul, mais des décisions de produit et de prix à prendre tout de suite. J’ai conçu le socle de données, les modèles de prévision et le dispositif de pilotage.',

    facts: [
      { label: 'Contexte', value: 'Éditeur SaaS, TPE / PME' },
      { label: 'Période', value: 'Depuis janvier 2026' },
      { label: 'Enjeux', value: 'Revenu récurrent, churn, valeur client, prix' },
      { label: 'Rôle', value: 'Associé & Lead Data Scientist, du socle à la recommandation' },
    ],

    confidentiality: {
      title: 'Ce que cette page ne montre pas, et pourquoi',
      body: [
        'Le revenu récurrent, les taux de churn, la valeur client, les marges, la structure de coûts et la grille tarifaire sont des informations stratégiques. Aucune valeur ne figure ici.',
        'Ce qui suit décrit la démarche, les choix de modélisation et les arbitrages - ce qui se transpose à un autre éditeur SaaS. Le visuel de cette page est une reconstitution synthétique.',
        'Même règle que pour mes missions chez RTE et LCL : je publie des méthodes, jamais des chiffres.',
      ],
    },

    sections: [
      {
        title: 'Le problème d’une entreprise jeune : décider sans historique',
        body: [
          'Une entreprise établie dispose de trois ans de données et peut entraîner un modèle dessus. Une entreprise en lancement doit prendre les mêmes décisions - quel prix, quelle offre, quel segment prioriser, où passe la marge - avec quelques mois de recul et peu de clients.',
          'La tentation est alors de renvoyer la question à plus tard, le temps d’accumuler de la donnée. Sauf que les décisions prises pendant cette attente engagent l’entreprise, et qu’il est plus coûteux de corriger un positionnement tarifaire deux ans plus tard.',
          'L’approche retenue a donc été inverse : construire dès le départ un socle propre et des modèles simples, explicitement limités, mais reconstruits à mesure que la donnée arrive. Un modèle honnête sur ses intervalles vaut mieux qu’une absence de modèle.',
        ],
      },
      {
        title: 'Ce que j’ai livré',
        body: ['Un socle, des modèles et un dispositif de décision, construits depuis zéro.'],
        list: [
          {
            title: 'Le socle de données',
            body:
              'Extraction et modélisation depuis la base applicative et les outils de gestion via leurs API, avec une vision client unifiée : un client, une ligne, une histoire - abonnement, usage, facturation, support.',
          },
          {
            title: 'Un référentiel de KPI documenté',
            body:
              'Acquisition, activation, revenu récurrent, croissance mensuelle, marge opérationnelle, rétention, churn et valeur client par segment. Chaque indicateur avec sa définition écrite, avant tout tableau de bord.',
          },
          {
            title: 'Les modèles prédictifs',
            body:
              'Prévision du revenu récurrent mensuel et annuel, anticipation du churn et estimation de la valeur client, par régression et forêts aléatoires - avec analyse de cohortes pour distinguer ce qui relève du produit de ce qui relève du millésime d’acquisition.',
          },
          {
            title: 'L’analyse économique',
            body:
              'Étude de la structure de coûts et de la rentabilité par segment de clientèle, puis modèle de tarification dynamique et simulation de son effet sur le revenu.',
          },
          {
            title: 'La restitution',
            body:
              'Tableau de bord économique et analytique, et notes écrites de recommandation à destination des décisions produit et commerciales.',
          },
        ],
      },
      {
        title: 'Les choix de modélisation qui ont compté',
        body: [],
        list: [
          {
            title: 'Cohortes plutôt que moyennes globales',
            body:
              'Sur une entreprise en croissance, une moyenne globale mélange des clients arrivés dans des conditions très différentes et masque toute dégradation. L’analyse par cohorte d’acquisition sépare ce qui vient du produit de ce qui vient du moment où le client est entré.',
          },
          {
            title: 'Une table analytique sans fuite temporelle',
            body:
              'Un modèle de churn entraîné sur des variables postérieures à l’événement prédit magnifiquement le passé et rien du tout. La construction de la table figée à la date de décision est la partie la moins spectaculaire du travail et celle qui détermine si le modèle sert à quelque chose.',
          },
          {
            title: 'Des modèles interprétables plutôt que performants',
            body:
              'Régression et forêts aléatoires, pas de réseau de neurones. Sur des volumes modestes et pour éclairer une décision de prix ou d’offre, la capacité à expliquer pourquoi le modèle dit ce qu’il dit vaut plus que quelques points de performance. Un dirigeant n’arbitre pas sur une sortie qu’il ne peut pas interroger.',
          },
          {
            title: 'Le prix traité comme une simulation, pas comme une prédiction',
            body:
              'Un modèle de tarification dynamique ne prédit pas le revenu futur : il compare des scénarios sous des hypothèses de sensibilité explicites. Présenter ces hypothèses avec le résultat évite la décision prise sur un chiffre qu’on croyait certain.',
          },
        ],
      },
      {
        title: 'Ce qui fait la différence dans une structure jeune',
        body: [
          'Dans une entreprise en lancement, personne n’est disponible pour reprendre un dispositif fragile. Les traitements ont donc été automatisés dès la conception, les contrôles qualité intégrés au flux plutôt qu’ajoutés après, et la documentation écrite en même temps que le code.',
          'La conformité RGPD applicable aux données clients a été traitée au moment de la conception du modèle de données, et non comme une couche à poser plus tard - un sujet nettement moins coûteux quand on le prend dans cet ordre.',
        ],
      },
    ],

    mock: {
      title: 'À quoi ressemblait le livrable',
      note:
        'Reconstitution avec des données synthétiques générées pour cette page. Ni les valeurs, ni les segments réels, ni les définitions du référentiel n’y figurent.',
      badge: 'Données synthétiques',
      subject: 'Pilotage économique et Customer Intelligence',
      date: 'Exemple de rendu',
      funnelTitle: 'Cycle de vie client',
      funnelNote: 'Chaque étape indique sa source et sa définition dans le référentiel.',
      funnel: ['Visiteurs', 'Essais', 'Abonnements', 'Actifs à 3 mois', 'Actifs à 12 mois'],
      channelsTitle: 'Valeur client estimée par segment',
      channelsNote: 'Estimation encadrée : intervalle et hypothèses rappelés sous le graphique.',
      channels: ['Segment A', 'Segment B', 'Segment C', 'Segment D', 'Segment E'],
      footTitle: 'Mentions portées sur chaque restitution',
      foot: [
        'Définition et propriétaire de chaque indicateur',
        'Profondeur d’historique disponible',
        'Intervalle de confiance des prévisions',
        'Hypothèses des simulations tarifaires',
      ],
    },

    outcome: {
      title: 'Ce qui reste, une fois la mission terminée',
      items: [
        'Une vision client unifiée construite avant l’arrivée du volume, pas après',
        'Un référentiel de KPI documenté dès la première version du produit',
        'Des modèles interprétables, discutables par des dirigeants non spécialistes',
        'Des prévisions livrées avec leur intervalle plutôt qu’en chiffre net',
        'La conformité RGPD traitée à la conception du modèle de données',
      ],
    },
    stackTitle: 'Environnement technique',
    stack: ['Python', 'Pandas', 'R', 'SQL', 'PostgreSQL', 'API REST', 'Power BI', 'Git'],

    transferTitle: 'Ce qui est transférable à votre contexte',
    transfer: [
      'Le schéma vaut pour tout éditeur SaaS avant sa série A : les décisions de prix, d’offre et de priorisation produit se prennent bien avant d’avoir l’historique qui permettrait de les fonder solidement.',
      'Ce qui rend le pilotage possible malgré tout : une vision client unifiée construite proprement dès le départ, des cohortes plutôt que des moyennes, des modèles interprétables, et des intervalles affichés plutôt que des chiffres nets. Le socle propre est ce qui coûte le moins cher au début et le plus cher à rattraper.',
    ],

    cta: {
      title: 'Vous pilotez un SaaS sans vraiment savoir ce que vaut un client ?',
      body: 'Décrivez-moi votre situation, je vous dis en une conversation ce qui est mesurable aujourd’hui et ce qui demande encore quelques mois de recul.',
      button: 'Me contacter',
      back: 'Voir les autres études de cas',
    },
  },

  en: {
    meta: {
      title: 'Running a SaaS on data before you have any history - case study | Dikers Amoko',
      description:
        'Recurring revenue forecasting, churn anticipation, customer value and dynamic pricing at an early-stage SaaS vendor. Method, models and trade-offs, without confidential data.',
    },
    eyebrow: 'Case study',
    title: 'Running a SaaS on data before the history exists',
    lede:
      'At Yubora, a SaaS vendor for business management and e-invoicing aimed at small companies, the economic steering had to be built at the same time as the company. No warehouse, no hindsight, but product and pricing decisions to take immediately. I designed the data foundation, the forecasting models and the steering system.',

    facts: [
      { label: 'Context', value: 'SaaS vendor, small businesses' },
      { label: 'Period', value: 'Since January 2026' },
      { label: 'Stakes', value: 'Recurring revenue, churn, customer value, pricing' },
      { label: 'Role', value: 'Partner & Lead Data Scientist, from foundation to recommendation' },
    ],

    confidentiality: {
      title: 'What this page does not show, and why',
      body: [
        'Recurring revenue, churn rates, customer value, margins, cost structure and pricing are strategic information. No value appears here.',
        'What follows describes the approach, the modelling choices and the trade-offs - what transfers to another SaaS vendor. The visual on this page is a synthetic reconstruction.',
        'Same rule as for my RTE and LCL assignments: I publish methods, never figures.',
      ],
    },

    sections: [
      {
        title: 'The young company problem: deciding without history',
        body: [
          'An established company has three years of data and can train a model on it. A company at launch has to take the same decisions - what price, what offer, which segment to prioritise, where the margin goes - with a few months of hindsight and few customers.',
          'The temptation is to postpone the question until enough data has accumulated. Except that decisions taken during that wait commit the company, and correcting a pricing position two years later costs far more.',
          'The approach was therefore the opposite: build a clean foundation and simple, explicitly limited models from the start, rebuilt as data arrives. A model honest about its intervals beats no model at all.',
        ],
      },
      {
        title: 'What I delivered',
        body: ['A foundation, models and a decision system, built from zero.'],
        list: [
          {
            title: 'The data foundation',
            body:
              'Extraction and modelling from the application database and management tools through their APIs, with a unified customer view: one customer, one row, one story - subscription, usage, invoicing, support.',
          },
          {
            title: 'A documented KPI reference',
            body:
              'Acquisition, activation, recurring revenue, monthly growth, operating margin, retention, churn and customer value by segment. Every indicator with its written definition, before any dashboard.',
          },
          {
            title: 'The predictive models',
            body:
              'Monthly and annual recurring revenue forecasting, churn anticipation and customer value estimation, using regression and random forests - with cohort analysis to separate what comes from the product from what comes from the acquisition vintage.',
          },
          {
            title: 'The economic analysis',
            body:
              'Cost structure and profitability study by customer segment, then a dynamic pricing model and simulation of its effect on revenue.',
          },
          {
            title: 'The reporting',
            body:
              'An economic and analytical dashboard, plus written recommendation notes feeding product and commercial decisions.',
          },
        ],
      },
      {
        title: 'The modelling choices that mattered',
        body: [],
        list: [
          {
            title: 'Cohorts rather than global averages',
            body:
              'In a growing company, a global average mixes customers who arrived under very different conditions and hides any degradation. Acquisition cohort analysis separates what comes from the product from what comes from when the customer joined.',
          },
          {
            title: 'A leak-free analytical table',
            body:
              'A churn model trained on variables dated after the event predicts the past beautifully and the future not at all. Freezing the table at the decision date is the least spectacular part of the work and the one that determines whether the model is useful.',
          },
          {
            title: 'Interpretable models over performant ones',
            body:
              'Regression and random forests, no neural networks. On modest volumes, and to inform a pricing or offer decision, being able to explain why the model says what it says is worth more than a few points of performance. An executive does not arbitrate on an output they cannot question.',
          },
          {
            title: 'Pricing treated as simulation, not prediction',
            body:
              'A dynamic pricing model does not predict future revenue: it compares scenarios under explicit sensitivity assumptions. Showing those assumptions alongside the result prevents decisions taken on a figure believed to be certain.',
          },
        ],
      },
      {
        title: 'What makes the difference in a young structure',
        body: [
          'In a company at launch, nobody is available to take over a fragile system. Processing was therefore automated from the design stage, quality controls built into the flow rather than added afterwards, and documentation written alongside the code.',
          'GDPR compliance for customer data was handled while designing the data model, not as a layer to add later - a considerably cheaper subject taken in that order.',
        ],
      },
    ],

    mock: {
      title: 'What the deliverable looked like',
      note:
        'Reconstruction using synthetic data generated for this page. No real values, segments or reference definitions appear in it.',
      badge: 'Synthetic data',
      subject: 'Economic steering and Customer Intelligence',
      date: 'Example rendering',
      funnelTitle: 'Customer lifecycle',
      funnelNote: 'Each step states its source and definition in the reference.',
      funnel: ['Visitors', 'Trials', 'Subscriptions', 'Active at 3 months', 'Active at 12 months'],
      channelsTitle: 'Estimated customer value by segment',
      channelsNote: 'Bounded estimate: interval and assumptions restated below the chart.',
      channels: ['Segment A', 'Segment B', 'Segment C', 'Segment D', 'Segment E'],
      footTitle: 'Notes carried on every report',
      foot: [
        'Definition and owner of each indicator',
        'Depth of available history',
        'Confidence interval of the forecasts',
        'Assumptions behind the pricing simulations',
      ],
    },

    outcome: {
      title: 'What remains once the assignment ends',
      items: [
        'A unified customer view built before the volume arrived, not after',
        'A documented KPI reference from the product’s first version',
        'Interpretable models that non-specialist executives can question',
        'Forecasts delivered with their interval rather than as a clean number',
        'GDPR compliance handled while designing the data model',
      ],
    },
    stackTitle: 'Technical environment',
    stack: ['Python', 'Pandas', 'R', 'SQL', 'PostgreSQL', 'REST API', 'Power BI', 'Git'],

    transferTitle: 'What transfers to your context',
    transfer: [
      'The pattern holds for any SaaS vendor before its Series A: pricing, offer and product prioritisation decisions are taken long before there is enough history to ground them solidly.',
      'What makes steering possible anyway: a unified customer view built cleanly from the start, cohorts rather than averages, interpretable models, and intervals shown rather than clean numbers. The clean foundation is what costs least at the beginning and most to retrofit.',
    ],

    cta: {
      title: 'Running a SaaS without really knowing what a customer is worth?',
      body: 'Describe your situation and I will tell you in one conversation what is measurable today and what still needs a few more months of history.',
      button: 'Get in touch',
      back: 'See the other case studies',
    },
  },
};
