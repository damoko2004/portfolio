// ---------------------------------------------------------------------------
// Étude de cas — supervision des interconnexions électriques (RTE via Scalian).
//
// RÈGLE DE RÉDACTION appliquée à tout ce fichier :
// on décrit le problème, la méthode, l'architecture et les choix d'ingénierie.
// On ne publie aucune valeur : pas de chiffre de flux, pas de prix, pas de
// volume, pas de seuil calibré, pas de capture d'un livrable réel.
// Si vous modifiez ce texte, gardez cette règle.
// ---------------------------------------------------------------------------

export const caseRte = {
  fr: {
    meta: {
      title:
        'Superviser les interconnexions électriques françaises — étude de cas | Dikers Amoko',
      description:
        'Comment une revue matinale manuelle est devenue un dispositif automatisé de surveillance et d’alerte, développé en R et déployé en production chez RTE. Méthode, architecture et choix d’ingénierie.',
    },
    eyebrow: 'Étude de cas',
    title: 'Superviser les interconnexions électriques, tous les matins avant l’ouverture',
    lede:
      'RTE exploite le réseau public de transport d’électricité : une infrastructure critique nationale, connectée à ses voisins européens. Les experts marché devaient reconstituer chaque matin, à la main, ce qui s’était passé la veille aux frontières. J’ai transformé cette revue en un dispositif automatisé de surveillance, de détection d’anomalies et d’alerte, développé en R et déployé en production.',

    facts: [
      { label: 'Client final', value: 'RTE — Réseau de Transport d’Électricité' },
      { label: 'Cadre', value: 'Mission via Scalian' },
      { label: 'Période', value: 'Février 2023 — janvier 2024' },
      { label: 'Rôle', value: 'Data Scientist, du recueil du besoin au run' },
    ],

    confidentiality: {
      title: 'Ce que cette page ne montre pas, et pourquoi',
      body: [
        'Les données de RTE sur les capacités d’échange, les flux réalisés et les prix, ainsi que les seuils d’alerte calibrés en interne, sont confidentiels. Ils ne figurent pas ici et ne figureront nulle part ailleurs sous ma signature.',
        'Ce qui suit décrit donc la démarche, l’architecture et les décisions d’ingénierie — c’est-à-dire ce qui est transférable à un autre contexte. Les visuels de cette page sont des reconstitutions construites à partir de données synthétiques, produites pour cette page et sans aucun rapport avec les valeurs réelles.',
        'Cette discipline n’est pas une contrainte subie : la même culture de traçabilité et de secret statistique m’a été transmise à l’INSEE, et c’est en général ce que cherche un client qui manipule des données sensibles.',
      ],
    },

    sections: [
      {
        title: 'Le problème n’était pas l’absence de données',
        body: [
          'L’information existait déjà. Elle était simplement dispersée dans plusieurs systèmes, produite à des rythmes différents, et disponible avec des délais qui n’étaient pas les mêmes d’une frontière à l’autre.',
          'Résultat : chaque matin, plusieurs experts refaisaient séparément la même collecte avant de pouvoir commencer à réfléchir. Le temps passé à rassembler mangeait le temps disponible pour analyser, et une journée chargée suffisait à faire sauter la revue — donc à laisser passer un événement.',
          'Le besoin réel n’était pas « un tableau de bord de plus ». C’était : que l’information vienne à l’expert, complète, à heure fixe, et qu’elle signale d’elle-même ce qui mérite attention.',
        ],
      },
      {
        title: 'Ce que j’ai livré',
        body: [
          'Trois produits complémentaires, conçus avec les experts métier plutôt que pour eux.',
        ],
        list: [
          {
            title: 'Une alerte quotidienne sur les interconnexions',
            body:
              'Un e-mail envoyé à heure fixe qui reconstitue la journée écoulée frontière par frontière : capacités d’échange journalières, flux réalisés sur les câbles d’interconnexion, signal de tension du système électrique, prix et événements de marché.',
          },
          {
            title: 'Une revue de marché élargie',
            body:
              'Un second e-mail couvrant les autres périmètres suivis par l’équipe : couplage des marchés, équilibrage, effacement de consommation, réserves contractualisées. Même format, même heure, même logique d’alerte.',
          },
          {
            title: 'Une application d’exploration',
            body:
              'Une application R Shiny déployée sur RStudio Connect, pour aller au-delà de l’e-mail : rejouer une période, croiser deux frontières, vérifier une intuition née de l’alerte du matin.',
          },
        ],
      },
      {
        title: 'L’architecture',
        body: [
          'Une chaîne planifiée, sans intervention humaine, dont chaque étape est vérifiable indépendamment.',
        ],
        list: [
          {
            title: 'Ingestion',
            body:
              'Récupération automatisée via API, par source, avec journalisation de ce qui a été demandé et de ce qui a été reçu. Chaque source garde sa propre horloge : on ne force pas des données de fraîcheurs différentes dans un même instantané.',
          },
          {
            title: 'Contrôles qualité en entrée',
            body:
              'Avant tout calcul : complétude, conformité des types, plages de valeurs plausibles, fraîcheur de la source. Une donnée qui échoue à ces contrôles ne devient jamais silencieusement un graphique.',
          },
          {
            title: 'Moteur de règles',
            body:
              'Les règles de détection sont déclarées à part du code de calcul et du code de rendu. Ajouter un périmètre de surveillance ne demande pas de toucher au pipeline.',
          },
          {
            title: 'Rendu et diffusion',
            body:
              'Génération d’un e-mail HTML autoportant en R Markdown, graphiques compris. Envoi planifié. Rejeu possible d’une journée passée à l’identique.',
          },
        ],
      },
      {
        title: 'Les règles de détection : deux familles',
        body: [
          'Toute la valeur d’un dispositif d’alerte tient dans son taux de fausses alertes. Une alerte qui se déclenche trop souvent est désactivée mentalement par ses destinataires en deux semaines, et le dispositif est mort sans que personne ne le dise.',
          'J’ai donc distingué deux familles de règles, avec des logiques de calibrage différentes.',
        ],
        list: [
          {
            title: 'Seuils fixes, adossés à des règles connues',
            body:
              'Certains événements sont définis par le fonctionnement même des marchés européens : franchissement de bornes réglementaires, passage en mode dégradé, signal officiel de tension du système. Ces règles ne se calibrent pas statistiquement, elles se transcrivent fidèlement — et se mettent à jour quand la règle change.',
          },
          {
            title: 'Seuils statistiques glissants',
            body:
              'Pour les grandeurs sans seuil réglementaire, comparer à une valeur figée n’a pas de sens : ce qui est exceptionnel en régime calme est banal en régime tendu. J’ai retenu des seuils calibrés sur un quantile élevé de l’historique récent, recalculés en continu. Le seuil suit le régime de marché, donc l’alerte reste rare et reste informative.',
          },
        ],
      },
      {
        title: 'Les décisions qui ont fait la différence',
        body: [],
        list: [
          {
            title: 'L’e-mail plutôt que le tableau de bord',
            body:
              'Un tableau de bord suppose que quelqu’un pense à l’ouvrir. C’est exactement ce qui n’arrive pas les jours chargés — c’est-à-dire les jours où il compte. L’e-mail arrive tout seul, y compris quand personne ne le demande. L’application Shiny reste disponible pour approfondir, mais elle n’est pas le point d’entrée.',
          },
          {
            title: 'Des graphiques embarqués dans le message',
            body:
              'Les visuels sont intégrés directement au corps de l’e-mail, pas hébergés ailleurs. L’expert les voit dans sa messagerie, sans autoriser le chargement d’images distantes, sans VPN, sans lien à cliquer. Sur un dispositif de surveillance, chaque clic supplémentaire est un endroit où la lecture s’arrête.',
          },
          {
            title: 'Les décalages de fraîcheur affichés, pas gommés',
            body:
              'Certaines sources arrivent avec un jour ou deux de retard. Plutôt que de laisser croire à une simultanéité qui n’existe pas, la date effective est indiquée à côté du bloc concerné. Un utilisateur qui sait que la donnée date d’avant-hier raisonne juste ; un utilisateur qui l’ignore raisonne faux.',
          },
          {
            title: 'Les incidents de source annoncés dans le livrable',
            body:
              'Quand une source amont se dégrade, la mention apparaît dans l’e-mail lui-même. Cacher un problème d’alimentation, c’est laisser un expert conclure à partir d’un trou de données. C’est le genre de silence qui détruit la confiance dans un outil, définitivement.',
          },
          {
            title: 'Les critères d’alerte publiés en bas de chaque envoi',
            body:
              'Chaque message rappelle les règles qui ont pu le déclencher. Un expert peut ainsi contester une alerte, demander un recalibrage, ou comprendre une absence d’alerte. C’est ce qui transforme un outil opaque en outil discutable — et donc adopté.',
          },
        ],
      },
      {
        title: 'La sortie de mission',
        body: [
          'Une mission de data science réussie se juge à ce qu’il reste quand le consultant part.',
          'La solution a été documentée — architecture, règles, procédures d’exploitation, conduite à tenir en cas d’incident — et les équipes d’exploitation ont été accompagnées jusqu’à la reprise complète. Aucune partie du dispositif ne dépendait de ma présence.',
        ],
      },
    ],

    mock: {
      title: 'À quoi ressemblait le livrable',
      note:
        'Reconstitution avec des données synthétiques générées pour cette page. Ni les valeurs, ni les seuils, ni les libellés internes réels n’y figurent.',
      badge: 'Données synthétiques',
      subject: 'Alertes journalières — surveillance des interconnexions',
      date: 'Exemple de rendu',
      blocks: [
        {
          title: 'Signal de tension du système électrique',
          note: 'Pas de signal de tension aujourd’hui.',
          kind: 'status',
        },
        {
          title: 'Capacités d’échange journalières — frontière A',
          note: 'Série de la journée comparée à l’enveloppe habituelle.',
          kind: 'band',
        },
        {
          title: 'Flux réalisés sur les câbles d’interconnexion — frontière B',
          note: 'Donnée disponible avec un décalage : date effective indiquée.',
          kind: 'bars',
        },
      ],
      criteriaTitle: 'Critères d’alerte rappelés en bas de message',
      criteria: [
        'Franchissement d’une borne réglementaire de marché',
        'Passage du système en mode dégradé',
        'Dépassement d’un seuil calibré sur l’historique récent',
        'Défaut ou retard signalé sur une source amont',
      ],
    },

    stackTitle: 'Environnement technique',
    stack: ['R', 'R Markdown', 'Shiny', 'RStudio Connect', 'API REST', 'SQL', 'Docker'],

    transferTitle: 'Ce qui est transférable à votre contexte',
    transfer: [
      'Le schéma vaut bien au-delà de l’énergie : dès qu’une équipe consacre sa première heure de la journée à rassembler de l’information plutôt qu’à en tirer des conclusions, il y a un dispositif à construire.',
      'La partie difficile n’est jamais le modèle. C’est de calibrer une alerte pour qu’elle reste crédible, de rendre les défauts de données visibles plutôt que confortables, et de livrer quelque chose que l’équipe puisse reprendre sans vous.',
    ],

    cta: {
      title: 'Une revue matinale qui vous coûte une heure par jour ?',
      body: 'Décrivez-moi votre situation, je vous dis en une conversation ce qui est automatisable et ce qui ne l’est pas.',
      button: 'Me contacter',
      back: 'Retour aux missions',
    },
  },

  en: {
    meta: {
      title: 'Monitoring French electricity interconnections — case study | Dikers Amoko',
      description:
        'How a manual morning review became an automated monitoring and alerting system, built in R and deployed in production at RTE. Method, architecture and engineering decisions.',
    },
    eyebrow: 'Case study',
    title: 'Monitoring electricity interconnections, every morning before the market opens',
    lede:
      'RTE operates the French electricity transmission network: critical national infrastructure, connected to its European neighbours. Every morning, market experts had to reconstruct by hand what had happened at the borders the day before. I turned that review into an automated monitoring, anomaly detection and alerting system, built in R and deployed in production.',

    facts: [
      { label: 'End client', value: 'RTE — French transmission system operator' },
      { label: 'Setting', value: 'Assignment through Scalian' },
      { label: 'Period', value: 'February 2023 — January 2024' },
      { label: 'Role', value: 'Data Scientist, from requirements to production run' },
    ],

    confidentiality: {
      title: 'What this page does not show, and why',
      body: [
        'RTE’s data on exchange capacities, realised flows and prices, along with the internally calibrated alert thresholds, are confidential. They do not appear here and will not appear anywhere else under my name.',
        'What follows therefore describes the approach, the architecture and the engineering decisions — that is, what transfers to another context. The visuals on this page are reconstructions built from synthetic data, produced for this page and unrelated to any real value.',
        'This discipline is not a constraint I put up with: the same culture of traceability and statistical secrecy was handed to me at INSEE, and it is usually what a client handling sensitive data is looking for.',
      ],
    },

    sections: [
      {
        title: 'The problem was not missing data',
        body: [
          'The information already existed. It was simply spread across several systems, produced at different rhythms, and available with delays that differed from one border to the next.',
          'The result: every morning, several experts separately redid the same collection work before they could start thinking. Time spent gathering ate into time available for analysis, and one busy day was enough to skip the review — and therefore to miss an event.',
          'The real need was not "one more dashboard". It was: information should come to the expert, complete, at a fixed time, and should flag by itself what deserves attention.',
        ],
      },
      {
        title: 'What I delivered',
        body: ['Three complementary products, designed with the domain experts rather than for them.'],
        list: [
          {
            title: 'A daily interconnection alert',
            body:
              'An email sent at a fixed time reconstructing the previous day border by border: daily exchange capacities, realised flows on the interconnection cables, system tension signal, prices and market events.',
          },
          {
            title: 'A broader market review',
            body:
              'A second email covering the other areas the team follows: market coupling, balancing, demand response, contracted reserves. Same format, same time, same alerting logic.',
          },
          {
            title: 'An exploration application',
            body:
              'An R Shiny application deployed on RStudio Connect, to go beyond the email: replay a period, cross two borders, check an intuition triggered by the morning alert.',
          },
        ],
      },
      {
        title: 'The architecture',
        body: ['A scheduled chain, without human intervention, where every step can be checked independently.'],
        list: [
          {
            title: 'Ingestion',
            body:
              'Automated API retrieval, source by source, logging both what was requested and what came back. Each source keeps its own clock: data of different freshness is never forced into a single snapshot.',
          },
          {
            title: 'Input quality controls',
            body:
              'Before any computation: completeness, type conformity, plausible value ranges, source freshness. Data that fails these checks never silently becomes a chart.',
          },
          {
            title: 'Rule engine',
            body:
              'Detection rules are declared separately from the computation code and the rendering code. Adding a monitored area does not require touching the pipeline.',
          },
          {
            title: 'Rendering and delivery',
            body:
              'A self-contained HTML email generated in R Markdown, charts included. Scheduled sending. Any past day can be replayed identically.',
          },
        ],
      },
      {
        title: 'Detection rules: two families',
        body: [
          'The entire value of an alerting system lies in its false alarm rate. An alert that fires too often is mentally switched off by its recipients within two weeks, and the system is dead without anyone saying so.',
          'I therefore separated two families of rules, with different calibration logic.',
        ],
        list: [
          {
            title: 'Fixed thresholds, anchored in known rules',
            body:
              'Some events are defined by how European markets work: crossing a regulatory bound, switching into degraded mode, an official system tension signal. These rules are not calibrated statistically, they are transcribed faithfully — and updated when the rule changes.',
          },
          {
            title: 'Rolling statistical thresholds',
            body:
              'For quantities with no regulatory threshold, comparing against a fixed value makes no sense: what is exceptional in a calm regime is ordinary in a tense one. I used thresholds calibrated on a high quantile of recent history, recomputed continuously. The threshold follows the market regime, so the alert stays rare and stays informative.',
          },
        ],
      },
      {
        title: 'The decisions that made the difference',
        body: [],
        list: [
          {
            title: 'Email rather than dashboard',
            body:
              'A dashboard assumes someone remembers to open it. That is exactly what does not happen on busy days — which are the days it matters. The email arrives on its own, including when nobody asks for it. The Shiny app remains available to dig deeper, but it is not the entry point.',
          },
          {
            title: 'Charts embedded in the message',
            body:
              'Visuals are embedded directly in the email body, not hosted elsewhere. The expert sees them in their inbox, without allowing remote images, without VPN, without a link to click. In a monitoring system, every extra click is a place where reading stops.',
          },
          {
            title: 'Freshness gaps shown, not smoothed over',
            body:
              'Some sources arrive a day or two late. Rather than implying a simultaneity that does not exist, the effective date is shown next to the block concerned. A user who knows the data is from two days ago reasons correctly; a user who does not, reasons wrongly.',
          },
          {
            title: 'Source incidents announced in the deliverable',
            body:
              'When an upstream source degrades, the notice appears in the email itself. Hiding a feed problem means letting an expert draw conclusions from a hole in the data. That is the kind of silence that destroys trust in a tool, permanently.',
          },
          {
            title: 'Alert criteria published at the bottom of every send',
            body:
              'Each message restates the rules that could have triggered it. An expert can then challenge an alert, ask for recalibration, or understand why no alert fired. That is what turns an opaque tool into a debatable one — and therefore an adopted one.',
          },
        ],
      },
      {
        title: 'Leaving the assignment',
        body: [
          'A successful data science assignment is judged by what remains once the consultant leaves.',
          'The solution was documented — architecture, rules, operating procedures, what to do in case of incident — and the operations teams were supported through full handover. No part of the system depended on my presence.',
        ],
      },
    ],

    mock: {
      title: 'What the deliverable looked like',
      note:
        'Reconstruction using synthetic data generated for this page. No real values, thresholds or internal labels appear in it.',
      badge: 'Synthetic data',
      subject: 'Daily alerts — interconnection monitoring',
      date: 'Example rendering',
      blocks: [
        {
          title: 'Electricity system tension signal',
          note: 'No tension signal today.',
          kind: 'status',
        },
        {
          title: 'Daily exchange capacities — border A',
          note: 'Today’s series against the usual envelope.',
          kind: 'band',
        },
        {
          title: 'Realised flows on interconnection cables — border B',
          note: 'Data available with a lag: effective date shown.',
          kind: 'bars',
        },
      ],
      criteriaTitle: 'Alert criteria restated at the bottom of the message',
      criteria: [
        'Crossing a regulatory market bound',
        'System switching into degraded mode',
        'Exceeding a threshold calibrated on recent history',
        'Fault or delay reported on an upstream source',
      ],
    },

    stackTitle: 'Technical environment',
    stack: ['R', 'R Markdown', 'Shiny', 'RStudio Connect', 'REST API', 'SQL', 'Docker'],

    transferTitle: 'What transfers to your context',
    transfer: [
      'The pattern goes well beyond energy: as soon as a team spends its first hour of the day gathering information rather than drawing conclusions from it, there is a system to build.',
      'The hard part is never the model. It is calibrating an alert so it stays credible, making data faults visible rather than comfortable, and delivering something the team can take over without you.',
    ],

    cta: {
      title: 'A morning review costing you an hour a day?',
      body: 'Describe your situation and I will tell you in one conversation what can be automated and what cannot.',
      button: 'Get in touch',
      back: 'Back to selected work',
    },
  },
};
