// ---------------------------------------------------------------------------
// Page « Prestations » — offres d'intervention en freelance.
// Aucun tarif n'est affiché : le prix dépend du périmètre, et l'afficher
// attire des demandes mal cadrées. Le CTA est un appel de cadrage.
// ---------------------------------------------------------------------------

export const services = {
  fr: {
    meta: {
      title: 'Prestations freelance — Data Science, MLOps, Product Ownership | Dikers Amoko',
      description:
        'Cinq façons de travailler ensemble : cadrage d’une feuille de route data, mise en production d’un modèle, industrialisation d’un existant, product ownership en temps partagé, audit d’une plateforme IA. Île-de-France et à distance.',
    },
    eyebrow: 'Prestations',
    title: 'Cinq façons de travailler ensemble',
    lede:
      'Je n’interviens pas sur tout. Les missions ci-dessous correspondent aux situations où dix ans passés sur la chaîne complète de la donnée font une différence mesurable — et où un seul interlocuteur remplace utilement trois prestataires.',
    availability: 'Disponible immédiatement — Île-de-France et à distance',

    offersTitle: 'Les missions',
    offers: [
      {
        title: 'Cadrage et feuille de route data / IA',
        duration: '2 à 4 semaines',
        pitch:
          'Vous savez que la donnée doit vous servir à quelque chose, sans savoir par quoi commencer — ou vos équipes ont dix idées et aucun arbitrage.',
        deliverables: [
          'Ateliers avec les directions concernées, état des lieux des sources et de leur qualité réelle',
          'Cas d’usage qualifiés, chiffrés en valeur attendue et en effort',
          'Feuille de route séquencée, avec ce qu’on ne fait pas et pourquoi',
          'Critères d’acceptation écrits pour le premier chantier',
        ],
      },
      {
        title: 'Conception et mise en production d’un modèle',
        duration: '2 à 4 mois',
        pitch:
          'Un besoin identifié — churn, valeur client, prévision, détection d’anomalies, scoring — à emmener de la question métier jusqu’à un modèle qui tourne et qui sert.',
        deliverables: [
          'Table analytique construite sans fuite temporelle, documentée',
          'Modélisation, choix du seuil de décision aligné sur le coût métier réel',
          'Déploiement, automatisation des traitements, surveillance et alerting',
          'Activation dans les outils existants et mesure de l’impact',
        ],
      },
      {
        title: 'Industrialisation d’un existant',
        duration: '4 à 8 semaines',
        pitch:
          'Vous avez des notebooks qui marchent sur le poste de leur auteur, des traitements manuels du lundi matin, ou un modèle prometteur bloqué depuis six mois avant la production.',
        deliverables: [
          'Reprise du code existant, reproductibilité, versioning, conteneurisation',
          'Automatisation des flux et suppression des étapes manuelles',
          'Contrôles qualité automatisés, batchs de surveillance, alerting',
          'Documentation et transfert pour que vos équipes tiennent le run',
        ],
      },
      {
        title: 'Product Ownership Data & IA en temps partagé',
        duration: 'Mission longue, 2 à 3 jours par semaine',
        pitch:
          'Il vous manque la personne qui parle métier avec les directions, spécifications avec la DSI, et architecture avec les prestataires — sans avoir besoin d’un recrutement à plein temps.',
        deliverables: [
          'Recueil du besoin, règles de gestion, spécifications, backlog priorisé',
          'Recette fonctionnelle, comités de pilotage, suivi des livraisons',
          'Arbitrage technique face aux éditeurs et aux intégrateurs',
          'Adoption, formation des utilisateurs, transfert de compétences',
        ],
      },
      {
        title: 'Audit d’une plateforme ou d’un prestataire IA',
        duration: '1 à 3 semaines',
        pitch:
          'Un agent, un RAG ou une plateforme IA vous est proposé ou déjà livré, et vous voulez un avis indépendant avant de signer, de généraliser ou de renouveler.',
        deliverables: [
          'Évaluation de la qualité des réponses sur un protocole reproductible',
          'Revue des garde-fous, de la sécurité et du traitement des données',
          'Observabilité, traçabilité des décisions, maîtrise des coûts',
          'Note de synthèse actionnable, lisible par une direction non technique',
        ],
      },
    ],

    principlesTitle: 'Comment je travaille',
    principles: [
      {
        title: 'Le premier livrable arrive vite',
        body:
          'Quelque chose d’utilisable est mis entre vos mains dans les premières semaines, même imparfait. C’est ce qui permet de corriger la trajectoire pendant qu’elle coûte encore peu.',
      },
      {
        title: 'Je livre en production, pas en slides',
        body:
          'Une recommandation qui reste sur un document n’a rien changé. La mission se termine quand le dispositif tourne, qu’il est surveillé, et que quelqu’un chez vous sait le réparer.',
      },
      {
        title: 'Aucune dépendance à ma personne',
        body:
          'Tout ce que je produis est documenté, versionné et reproductible. À la fin d’une mission, vos équipes reprennent le dispositif — c’est ce qui s’est passé chez RTE comme à l’INSEE.',
      },
      {
        title: 'Je dis quand un cas d’usage n’est pas mûr',
        body:
          'Certains projets doivent attendre un socle de données, une décision d’organisation ou un sponsor. Le dire tôt coûte une conversation ; ne pas le dire coûte un trimestre.',
      },
      {
        title: 'Confidentialité par défaut',
        body:
          'NDA signé sans discussion. Rien de ce qui est produit chez un client n’est publié ni réutilisé sans accord écrit — mon étude de cas publique ne contient aucune valeur, aucun seuil et aucune capture de livrable réel.',
      },
    ],

    practicalTitle: 'Modalités',
    practical: [
      { label: 'Statut', value: 'Freelance, facturation directe ou via portage selon votre process achat' },
      { label: 'Lieu', value: 'Île-de-France sur site, une à deux journées par semaine si le projet l’exige, le reste à distance' },
      { label: 'Format', value: 'Régie quand le périmètre évolue, forfait quand il est stabilisé par un cadrage préalable' },
      { label: 'Langues', value: 'Français en langue de travail, anglais professionnel en lecture et rédaction technique' },
      { label: 'Secteurs déjà pratiqués', value: 'Banque de détail, énergie et infrastructure critique, statistique publique, utilities, éditeur SaaS' },
    ],

    processTitle: 'Comment ça démarre',
    process: [
      {
        title: 'Un appel de trente minutes',
        body: 'Vous décrivez la situation. Je vous dis franchement si c’est pour moi, et ce que je ferais en premier. Sans engagement.',
      },
      {
        title: 'Une note de cadrage',
        body: 'Je vous renvoie par écrit ma lecture du problème, le périmètre que je propose, les livrables et les hypothèses. Vous voyez exactement ce que vous achetez.',
      },
      {
        title: 'Une proposition chiffrée',
        body: 'Durée, rythme, prix et critères de fin de mission. Si le cadrage a montré que le projet n’est pas mûr, je vous le dis à cette étape plutôt qu’au troisième mois.',
      },
    ],

    cta: {
      title: 'Décrivez-moi votre situation',
      body: 'Un besoin encore flou est un bon point de départ : le cadrage fait partie du travail.',
      button: 'Me contacter',
      caseLink: 'Voir une mission en détail',
    },
  },

  en: {
    meta: {
      title: 'Freelance services — Data Science, MLOps, Product Ownership | Dikers Amoko',
      description:
        'Five ways to work together: framing a data roadmap, taking a model to production, industrialising existing work, fractional data product ownership, auditing an AI platform. Paris region and remote.',
    },
    eyebrow: 'Services',
    title: 'Five ways to work together',
    lede:
      'I do not take on everything. The engagements below match the situations where ten years across the full data chain make a measurable difference — and where one counterpart usefully replaces three vendors.',
    availability: 'Available now — Paris region and remote',

    offersTitle: 'Engagements',
    offers: [
      {
        title: 'Data / AI framing and roadmap',
        duration: '2 to 4 weeks',
        pitch:
          'You know data should be working for you but not where to start — or your teams have ten ideas and no arbitration.',
        deliverables: [
          'Workshops with the departments involved, review of sources and their actual quality',
          'Qualified use cases, sized by expected value and by effort',
          'A sequenced roadmap, including what we will not do and why',
          'Written acceptance criteria for the first workstream',
        ],
      },
      {
        title: 'Designing and shipping a model',
        duration: '2 to 4 months',
        pitch:
          'An identified need — churn, customer value, forecasting, anomaly detection, scoring — taken from the business question to a model that runs and gets used.',
        deliverables: [
          'A documented analytical table built without temporal leakage',
          'Modelling, decision threshold aligned with the real business cost',
          'Deployment, process automation, monitoring and alerting',
          'Activation in existing tools and impact measurement',
        ],
      },
      {
        title: 'Industrialising existing work',
        duration: '4 to 8 weeks',
        pitch:
          'You have notebooks that only run on their author’s machine, manual Monday-morning processing, or a promising model stuck six months short of production.',
        deliverables: [
          'Taking over existing code: reproducibility, versioning, containerisation',
          'Workflow automation and removal of manual steps',
          'Automated quality controls, monitoring batches, alerting',
          'Documentation and handover so your teams own the run',
        ],
      },
      {
        title: 'Fractional Data & AI Product Ownership',
        duration: 'Long engagement, 2 to 3 days a week',
        pitch:
          'You are missing the person who speaks business with departments, specifications with IT and architecture with vendors — without needing a full-time hire.',
        deliverables: [
          'Requirements, business rules, specifications, prioritised backlog',
          'Functional acceptance testing, steering committees, delivery tracking',
          'Technical arbitration facing vendors and integrators',
          'Adoption, user training, knowledge transfer',
        ],
      },
      {
        title: 'Auditing an AI platform or vendor',
        duration: '1 to 3 weeks',
        pitch:
          'An agent, a RAG system or an AI platform is being proposed to you or already delivered, and you want an independent view before signing, scaling or renewing.',
        deliverables: [
          'Answer quality evaluation on a reproducible protocol',
          'Review of guardrails, security and data handling',
          'Observability, decision traceability, cost control',
          'An actionable summary, readable by a non-technical executive',
        ],
      },
    ],

    principlesTitle: 'How I work',
    principles: [
      {
        title: 'The first deliverable comes early',
        body:
          'Something usable is in your hands within the first few weeks, even if imperfect. That is what lets you correct course while correcting is still cheap.',
      },
      {
        title: 'I deliver to production, not to slides',
        body:
          'A recommendation that stays in a document has changed nothing. The engagement ends when the system runs, is monitored, and someone on your side knows how to fix it.',
      },
      {
        title: 'No dependency on me',
        body:
          'Everything I produce is documented, versioned and reproducible. At the end of an engagement your teams take the system over — that is what happened at RTE and at INSEE.',
      },
      {
        title: 'I say when a use case is not ready',
        body:
          'Some projects need a data foundation, an organisational decision or a sponsor first. Saying so early costs a conversation; not saying so costs a quarter.',
      },
      {
        title: 'Confidentiality by default',
        body:
          'NDA signed without discussion. Nothing produced for a client is published or reused without written agreement — my public case study contains no values, no thresholds and no screenshot of a real deliverable.',
      },
    ],

    practicalTitle: 'Practicalities',
    practical: [
      { label: 'Status', value: 'Freelance, direct invoicing or through an umbrella company depending on your procurement process' },
      { label: 'Location', value: 'On site in the Paris region one or two days a week when the project requires it, remote otherwise' },
      { label: 'Format', value: 'Time and materials while scope evolves, fixed price once framing has stabilised it' },
      { label: 'Languages', value: 'French as working language, professional English for technical reading and writing' },
      { label: 'Sectors already worked in', value: 'Retail banking, energy and critical infrastructure, official statistics, utilities, SaaS' },
    ],

    processTitle: 'How it starts',
    process: [
      {
        title: 'A thirty-minute call',
        body: 'You describe the situation. I tell you frankly whether it is for me, and what I would do first. No commitment.',
      },
      {
        title: 'A framing note',
        body: 'I send back in writing my reading of the problem, the scope I propose, the deliverables and the assumptions. You see exactly what you are buying.',
      },
      {
        title: 'A priced proposal',
        body: 'Duration, rhythm, price and end-of-engagement criteria. If framing showed the project is not ready, I tell you at this stage rather than in the third month.',
      },
    ],

    cta: {
      title: 'Describe your situation',
      body: 'A need that is still fuzzy is a good starting point: framing is part of the work.',
      button: 'Get in touch',
      caseLink: 'See an engagement in detail',
    },
  },
};
