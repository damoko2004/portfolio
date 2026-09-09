// ---------------------------------------------------------------------------
// Source unique de vérité du site.
// Tout le texte affiché vient d'ici : pour modifier le portfolio, éditez ce
// fichier, pas les composants.
// ---------------------------------------------------------------------------

export const LANGS = ['fr', 'en'] as const;
export type Lang = (typeof LANGS)[number];

// --- À COMPLÉTER -----------------------------------------------------------
// Remplacez ces valeurs par vos vraies URLs. Un champ laissé vide ('')
// masque simplement le lien : rien ne casse.
export const links = {
  email: 'diamoko@gmail.com',
  phone: '+33658479506',
  phoneDisplay: '06 58 47 95 06',
  linkedin: 'https://www.linkedin.com/in/dikers-amoko',
  github: 'https://github.com/damoko2004',

  // Package R statAfrikR
  cran: 'https://CRAN.R-project.org/package=statAfrikR',
  cranUniverse: 'https://cran.r-universe.dev/statAfrikR',
  statafrikrDocs: 'https://damoko2004.github.io/statAfrikR/index.html',

  // Ouvrages
  ebookStore: 'https://da-ia-data.mychariow.co/',
  bookData: 'https://www.amazon.fr/dp/B0HJ2RTF6F',
  bookAI: 'https://www.amazon.fr/dp/B0HCKCG8V5',

  // Certification
  blockchainCert:
    'https://certificate.bcdiploma.com/check/98F3EEAF037D8576BD1E016F8877AF2DA0F4205B1C0B356B99DCF4626ABA6FB6RkhHYTl2RlVRQWhPbGlYeTJzTXg3eStkM0FQR0V0L1ZQS0k5UDRFZStpdkZpNW13',

  cvFr: '/cv/Dikers-Amoko-CV-fr.pdf',
  cvEn: '/cv/Dikers-Amoko-CV-fr.pdf',
};

/** Chemins des pages, par langue. */
export const routes = {
  fr: { home: '/', services: '/prestations/', caseRte: '/etudes-de-cas/rte/' },
  en: { home: '/en/', services: '/en/services/', caseRte: '/en/case-studies/rte/' },
} as const;

export const SITE_URL = 'https://dikers-amoko.netlify.app';

export interface Job {
  period: string;
  role: string;
  org: string;
  context: string;
  sector: string;
  bullets: string[];
  stack: string[];
  current?: boolean;
  caseUrl?: string;
  caseLabel?: string;
}

export interface PubItem {
  kind: string;
  year: string;
  title: string;
  subtitle: string;
  desc: string;
  facts: string[];
  url: string;
  cta: string;
  extra?: { label: string; url: string }[];
}

export interface EduItem {
  year: string;
  title: string;
  org: string;
  url?: string;
  urlLabel?: string;
}

export interface Brief {
  period: string;
  role: string;
  org: string;
  desc: string;
  stack: string;
}

const fr = {
  langLabel: 'Français',
  otherLangLabel: 'English',
  otherLangHref: '/en/',
  meta: {
    title: 'Dikers Amoko - Data Scientist senior, MLOps & Product Owner Data & IA',
    description:
      'Dix ans sur la chaîne complète de la donnée : cadrage du besoin, modélisation statistique et machine learning, mise en production et run. Banque, énergie, statistique publique, SaaS. Freelance en Île-de-France et à distance.',
  },
  nav: {
    items: [
      { href: '#profil', label: 'Profil' },
      { href: '#missions', label: 'Missions' },
      { href: '/etudes-de-cas/rte/', label: 'Étude de cas' },
      { href: '/prestations/', label: 'Prestations' },
      { href: '#publications', label: 'Publications' },
      { href: '#contact', label: 'Contact' },
    ],
    cv: 'CV (PDF)',
    menu: 'Menu',
    close: 'Fermer',
    skip: 'Aller au contenu',
  },
  hero: {
    available: 'Freelance - disponible immédiatement',
    name: 'Dikers Amoko',
    title: 'Data Scientist senior · MLOps · Product Owner Data & IA',
    verbs: ['Je cadre le besoin.', 'Je conçois le modèle.', 'Je le mets en production.'],
    lead:
      'Dix ans sur la chaîne complète de la donnée, en banque, énergie, statistique publique et SaaS. Trois métiers que l’on confie d’ordinaire à trois personnes, tenus par une seule - avec la culture de traçabilité et de reproductibilité héritée de la banque et de la statistique publique.',
    ctaPrimary: 'Voir les missions',
    ctaSecondary: 'Me contacter',
    facts: [
      { label: 'Expérience', value: '10 ans' },
      { label: 'Secteurs', value: 'Banque, énergie, statistique publique, SaaS' },
      { label: 'Ouvrages publiés', value: '2 en 2026' },
      { label: 'Open source', value: 'statAfrikR, publié sur le CRAN' },
    ],
  },
  workflow: {
    title: 'De la donnée brute à la décision',
    note: 'La chaîne que je couvre entièrement. Chaque étape produit quelque chose de vérifiable par la suivante.',
    entry: 'Besoin métier',
    exit: 'Décision',
    stages: [
      {
        name: 'Collecte',
        desc: 'Ingestion automatisée des sources internes et externes, avec journalisation de ce qui entre.',
        tools: ['API REST', 'SQL', 'Teradata', 'SQL Server'],
      },
      {
        name: 'Qualité & consolidation',
        desc: 'Contrôles de complétude et de cohérence, réconciliation multi-sources, vue unifiée, datamarts.',
        tools: ['R', 'Python', 'Dataiku', 'DBeaver'],
      },
      {
        name: 'Modélisation',
        desc: 'Table analytique sans fuite temporelle, scoring, segmentation, prévision, détection d’anomalies.',
        tools: ['R', 'Python', 'SAS'],
      },
      {
        name: 'Industrialisation',
        desc: 'Versioning, conteneurisation, ordonnancement, batchs de surveillance et alerting.',
        tools: ['Git', 'Docker', 'RStudio Connect'],
      },
      {
        name: 'Restitution & activation',
        desc: 'Tableaux de bord, applications métier, alertes automatiques, activation du score dans le CRM.',
        tools: ['Power BI', 'R Shiny', 'Tableau', 'Qlik Sense'],
      },
    ],
    acrossTitle: 'Sur toute la chaîne',
    across: ['Traçabilité', 'Documentation', 'Reproductibilité', 'Contrôles qualité', 'Conformité RGPD'],
  },
  roles: {
    title: 'Trois casquettes, un seul interlocuteur',
    intro:
      'La plupart des projets data échouent aux jonctions : entre le métier et la modélisation, entre le prototype et la production. Je tiens les trois maillons, donc les jonctions disparaissent.',
    servicesLink: 'Voir les cinq formats d’intervention',
    items: [
      {
        title: 'Data Scientist',
        desc:
          'Modélisation statistique et machine learning de bout en bout, avec une formation en statistique publique qui impose la rigueur sur la représentativité des données.',
        points: [
          'Exploration, scoring, segmentation, analyses de cohortes',
          'Modèles prédictifs et détection d’anomalies',
          'Plans de sondage, redressement, qualité et représentativité',
          'Mesure d’impact et de ROI',
        ],
      },
      {
        title: 'MLOps & industrialisation',
        desc:
          'La mise en production et l’exploitation dans la durée : un modèle qui tourne le lundi et qu’on sait réparer le samedi.',
        points: [
          'Conteneurisation, versioning, déploiement d’applications analytiques',
          'Automatisation des flux et des traitements',
          'Batchs de surveillance, alerting, contrôles qualité automatisés',
          'Reproductibilité, documentation, gestion des incidents',
        ],
      },
      {
        title: 'Product Owner Data & IA',
        desc:
          'L’interface entre les métiers, la DSI et les prestataires - y compris pour challenger l’architecture et les garde-fous des éditeurs IA.',
        points: [
          'Recueil du besoin, animation d’ateliers, feuille de route',
          'Règles de gestion, spécifications, critères d’acceptation',
          'Recette fonctionnelle et comités de pilotage',
          'Adoption, formation et transfert de compétences',
        ],
      },
    ],
  },
  genai: {
    title: 'IA générative : de la démo au système tenable',
    body:
      'Agents, RAG, systèmes multi-agents et tool calling - mais surtout ce qui vient après la démo : évaluation de la qualité des réponses, garde-fous, observabilité, sécurité et maîtrise des coûts. Deux ouvrages publiés sur le sujet me permettent de porter la vision produit d’une plateforme IA autant que de challenger les choix techniques d’un éditeur ou d’un prestataire.',
    tags: [
      'Agents IA',
      'RAG',
      'Multi-agents',
      'Tool calling',
      'Évaluation',
      'Garde-fous',
      'Observabilité',
      'Coûts',
      'Python & R',
    ],
  },
  experience: {
    title: 'Missions',
    intro:
      'Quatre contextes où la donnée devait être juste, tracée et disponible tous les jours : un éditeur SaaS en lancement, une banque de détail, une infrastructure électrique critique, l’institut national de la statistique.',
    jobs: [
      {
        period: '01/2026 - aujourd’hui',
        role: 'Associé & Lead Data Scientist - Pôle Customer Intelligence',
        org: 'Yubora',
        sector: 'SaaS',
        context:
          'Éditeur SaaS de gestion d’entreprise et de facturation électronique (TPE/PME). Structuration du dispositif data depuis l’origine.',
        bullets: [
          'Vision & feuille de route - stratégie data et CRM d’une société en phase de lancement : cadrage des enjeux avec les directions Produit, Marketing, Commerciale, Finance et Support, arbitrage des priorités et séquencement des chantiers.',
          'Modélisation & data science - analyses de cohortes, segmentation et modélisation prédictive : prévision des revenus, anticipation du churn, estimation de la valeur client, au service des décisions Produit, Offres et CRM.',
          'Socle & référentiel - conception depuis zéro du modèle de données, de la vision client unifiée, des datamarts et d’un référentiel de KPI documenté : acquisition, activation, revenus, rentabilité, rétention, churn et valeur client par segment.',
          'Industrialisation & gouvernance - automatisation des traitements, contrôles qualité intégrés dès la conception, traçabilité et documentation ; choix de la stack analytique, intégration des connecteurs API, standards de conformité RGPD.',
        ],
        stack: ['SQL', 'R', 'Python', 'Power BI', 'API REST', 'Git', 'CRM'],
        current: true,
      },
      {
        period: '06/2024 - 12/2025',
        role: 'Consultant Data Scientist - Interface métiers / Data Factory',
        org: 'Banque LCL',
        sector: 'Banque de détail',
        context:
          'Pilotage quantitatif, contrôles et performance de l’acquisition digitale.',
        bullets: [
          'Cadrage & interface métier - recueil des besoins Marketing et Produit, traduction en expressions de besoin, règles de gestion et spécifications pour la Data Factory ; arbitrage de la faisabilité et du séquencement des livraisons.',
          'Analyses quantitatives - définition et suivi des KPI de performance digitale : trafic, conversion, coût d’acquisition, rentabilité, ROI, contribution des canaux ; segmentations, études de sensibilité, détection d’anomalies.',
          'Datamart & qualité - conception d’un datamart multi-sources consolidant acquisition, conversion et parcours client, avec rapprochements, contrôles qualité et documentation des indicateurs.',
          'Industrialisation & recette - industrialisation des reportings Power BI et des traitements automatisés ; recettes fonctionnelles, contrôles de complétude, suivi des anomalies jusqu’à la mise en production.',
        ],
        stack: ['SQL', 'Teradata', 'SAS', 'R', 'Dataiku', 'Power BI', 'VBA'],
      },
      {
        period: '02/2023 - 01/2024',
        role: 'Data Scientist - Supervision des interconnexions électriques',
        org: 'Scalian - mission RTE',
        sector: 'Énergie',
        context:
          'RTE, gestionnaire du réseau public de transport d’électricité - infrastructure critique nationale.',
        bullets: [
          'Besoin & conception - recueil du besoin auprès des experts métier ; conception des KPI, des traitements statistiques et des règles de détection d’anomalies.',
          'Développement & mise en production - application R Shiny d’analyse des flux d’import-export d’électricité et de supervision des interconnexions, déployée et stabilisée en production sur RStudio Connect.',
          'Run, monitoring & alerting - automatisation de l’ingestion via API, contrôles qualité en continu, alertes automatisées vers les experts, correction des incidents en production.',
          'Transfert - documentation de la solution et accompagnement des équipes d’exploitation à la reprise.',
        ],
        stack: ['R', 'Shiny', 'RStudio Connect', 'SQL', 'API REST', 'Docker'],
        caseUrl: '/etudes-de-cas/rte/',
        caseLabel: 'Lire l’étude de cas détaillée',
      },
      {
        period: '10/2021 - 02/2023',
        role: 'Statisticien - Responsable du référentiel statistique d’entreprises',
        org: 'INSEE',
        sector: 'Statistique publique',
        context:
          'Institut national de la statistique et des études économiques - statistiques structurelles d’entreprises, Paris / Montrouge.',
        bullets: [
          'Pilotage d’une production récurrente - cadrage, échantillonnage et conduite de l’Enquête Sectorielle Annuelle : plans de sondage, suivi de la collecte et des taux de réponse, traitement de la non-réponse et redressement.',
          'Modélisation & agrégats - production d’agrégats économiques sectoriels, modélisation statistique, exploitation d’enquêtes ad hoc et appariement avec les sources administratives.',
          'Automatisation & surveillance - développement de contrôles et de batchs de surveillance pour détecter et corriger les anomalies, et fiabiliser les données avant diffusion.',
          'Refonte technique - migration de programmes SAS vers R : cadrage, réécriture, documentation méthodologique et transfert aux équipes, au service de la reproductibilité.',
        ],
        stack: ['SAS', 'R', 'Python', 'SQL', 'DBeaver'],
      },
    ] as Job[],
    earlierTitle: 'Avant cela',
    earlier: [
      {
        period: '10/2022 - 06/2023',
        role: 'Enseignant vacataire - Master 1 MéDAS',
        org: 'CNAM, Paris',
        desc:
          'Cours et travaux pratiques en statistique décisionnelle et inférentielle, modélisation, machine learning et programmation R.',
        stack: 'R · Statistiques · Économétrie · ML',
      },
      {
        period: '09/2019 - 09/2021',
        role: 'Ingénieur Data',
        org: 'SAUR, Serris / Paris',
        desc:
          'Outil de fiabilisation des données terrain : contrôles de cohérence, workflows de validation, traçabilité des corrections ; machine learning, détection d’anomalies et automatisation des reportings opérationnels.',
        stack: 'R · Python · SQL Server · SSRS · Power BI · Tableau · Git',
      },
      {
        period: '02/2019 - 09/2019',
        role: 'Consultant Data Science',
        org: 'Soft Computing, Paris',
        desc:
          'Analyse de campagnes CRM, segmentation, scoring, mesure d’impact et de ROI, recommandations de ciblage et de pression marketing.',
        stack: 'R · IBM SPSS Modeler',
      },
      {
        period: '03/2017 - 02/2019',
        role: 'Data Manager',
        org: 'TERRA, Paris',
        desc:
          'Consolidation de données multi-sources, indicateurs de pilotage, tableaux de bord interactifs et cartographies thématiques ; segmentations, modèles prédictifs et automatisation des traitements.',
        stack: 'R · Shiny · Python · SQL · Qlik Sense',
      },
      {
        period: '12/2011 - 08/2012',
        role: 'Chargé d’études statistiques',
        org: 'DRC, Bangui (RCA)',
        desc:
          'Conception et pilotage d’enquêtes quantitatives de terrain : protocole, échantillonnage, questionnaires, formation et supervision des équipes ; rapports restitués aux partenaires humanitaires.',
        stack: 'SPSS · CSPro',
      },
    ] as Brief[],
  },
  publications: {
    title: 'Publications & open source',
    intro:
      'Ce que j’applique en mission, je l’écris et je le publie. Deux ouvrages professionnels parus en 2026 et un package R disponible sur le CRAN.',
    note: 'Les deux ouvrages sont aussi disponibles en version numérique.',
    noteCta: 'Voir la boutique',
    noteUrl: links.ebookStore,
    items: [
      {
        kind: 'Ouvrage',
        year: '2026',
        title: 'Ce que vos données savent de vos clients',
        subtitle: 'De la question métier à l’impact prouvé',
        desc:
          'Machine learning, IA générative et décision : vue client 360°, table analytique sans fuite temporelle, segmentation et scoring, prédiction de l’attrition, de la conversion et de la valeur, choix du seuil, recommandation, activation du score dans le CRM et mesure du ROI.',
        facts: ['40 chapitres', '21 cas métiers', '6 projets', '89 blocs de code Python & R', 'Dépôt public reproductible'],
        url: links.bookData,
        cta: 'Voir sur Amazon',
      },
      {
        kind: 'Ouvrage',
        year: '2026',
        title: 'Devenir Orchestrateur IA',
        subtitle: 'Du débutant à l’expert',
        desc:
          'Agents IA, RAG, systèmes multi-agents, tool calling, sécurité, évaluation, observabilité, MLOps et mise en production, en Python et en R.',
        facts: ['19 modules', '14 cas d’usage', '60 activités corrigées'],
        url: links.bookAI,
        cta: 'Voir sur Amazon',
      },
      {
        kind: 'Package R - CRAN',
        year: '2026',
        title: 'statAfrikR',
        subtitle: 'Boîte à outils statistique pour les instituts nationaux de statistique',
        desc:
          'Produit open source porté de bout en bout - conception, feuille de route, développement, documentation, versioning, diffusion et maintenance. Import d’enquêtes (KoboToolbox, ODK, CSPro, Excel, Stata, SPSS), validation, analyses pondérées, indices composites, visualisation et diffusion (SDMX, métadonnées DDI, anonymisation). Pensé pour fonctionner hors ligne et en français.',
        facts: ['Publié sur le CRAN', 'Auteur & mainteneur', 'GPL (≥ 3)'],
        url: links.statafrikrDocs,
        cta: 'Documentation du package',
        extra: [
          { label: 'CRAN', url: links.cran },
          { label: 'R-universe', url: links.cranUniverse },
        ],
      },
    ] as PubItem[],
  },
  skills: {
    title: 'Compétences',
    intro:
      'Regroupées par ce qu’elles permettent de livrer, pas par technologie.',
    groups: [
      {
        name: 'Data science & machine learning',
        body:
          'Exploration, régression, classification, clustering, scoring, analyses de cohortes, modèles prédictifs, détection d’anomalies, plans de sondage et redressement, analyses de sensibilité, mesure d’impact et de ROI.',
      },
      {
        name: 'IA générative & LLM',
        body:
          'Agents IA, RAG, systèmes multi-agents, tool calling, évaluation de la qualité des réponses, garde-fous, observabilité, sécurité et maîtrise des coûts - en Python et en R.',
      },
      {
        name: 'MLOps & industrialisation',
        body:
          'Mise en production et run, conteneurisation, versioning, déploiement d’applications analytiques, APIs REST, automatisation des flux, batchs de surveillance et alerting, contrôles qualité automatisés, reproductibilité et gestion des incidents.',
      },
      {
        name: 'Product ownership Data & IA',
        body:
          'Recueil du besoin et animation d’ateliers, spécifications et règles de gestion, priorisation et séquencement, critères d’acceptation, recette fonctionnelle, comités de suivi, formation et transfert de compétences.',
      },
      {
        name: 'Données & gouvernance',
        body:
          'Modélisation, consolidation multi-sources, datamarts et référentiels de KPI documentés, qualité et réconciliation, traçabilité, gouvernance et conformité RGPD.',
      },
      {
        name: 'BI & restitution',
        body:
          'Tableaux de bord interactifs, storytelling data, comités de pilotage, vulgarisation auprès d’audiences non techniques.',
      },
    ],
    stackTitle: 'Environnement technique',
    stack: [
      { name: 'Langages', items: ['Python', 'R', 'SQL', 'SAS', 'VBA'] },
      { name: 'Industrialisation', items: ['Docker', 'Git', 'API REST', 'RStudio Connect'] },
      { name: 'Données', items: ['Teradata', 'SQL Server / SSMS', 'DBeaver', 'Dataiku'] },
      { name: 'Restitution', items: ['Power BI', 'Tableau', 'Qlik Sense', 'R Shiny', 'SSRS'] },
    ],
  },
  education: {
    title: 'Formation & certification',
    items: [
      {
        year: '2024',
        title: 'Certification Consultant Blockchain (RS6410)',
        org: 'Alyra - mettre en œuvre des solutions numériques avec les technologies blockchain',
        url: links.blockchainCert,
        urlLabel: 'Vérifier le certificat',
      },
      { year: '2016', title: 'Master 2 Statistique & analyse décisionnelle', org: 'Université de Caen Normandie' },
      { year: '2013', title: 'Licence professionnelle Statistique & informatique décisionnelle', org: 'IUT de Pau' },
      { year: '2011', title: 'Technicien supérieur en statistique', org: 'ISSEA - Yaoundé' },
    ] as EduItem[],
    languagesTitle: 'Langues',
    languages: 'Français, langue de travail. Anglais professionnel : lecture et rédaction technique.',
  },
  contact: {
    title: 'Parlons de votre chaîne de données',
    lead:
      'Un besoin métier encore flou, un modèle qui ne passe pas en production, une plateforme IA à cadrer ou à challenger : dites-moi où vous en êtes, je vous dis en une conversation ce qui est réaliste.',
    availability: 'Disponible immédiatement - Île-de-France et à distance',
    emailLabel: 'E-mail',
    phoneLabel: 'Téléphone',
    locationLabel: 'Localisation',
    location: 'Île-de-France, France',
    linkedinLabel: 'LinkedIn',
    cvLabel: 'Télécharger le CV',
    copy: 'Copier l’adresse',
    copied: 'Adresse copiée',
  },
  footer: {
    tagline: 'Data Scientist senior · MLOps · Product Owner Data & IA',
    rights: 'Tous droits réservés.',
    built: 'Site construit avec Astro.',
    linksTitle: 'Aller à',
    pages: [
      { href: '/', label: 'Accueil' },
      { href: '/prestations/', label: 'Prestations' },
      { href: '/etudes-de-cas/rte/', label: 'Étude de cas - RTE' },
    ],
  },
};

const en: typeof fr = {
  langLabel: 'English',
  otherLangLabel: 'Français',
  otherLangHref: '/',
  meta: {
    title: 'Dikers Amoko - Senior Data Scientist, MLOps & Data/AI Product Owner',
    description:
      'Ten years across the full data chain: framing the business need, statistical and machine learning modelling, production deployment and run. Banking, energy, official statistics, SaaS. Freelance in the Paris region and remote.',
  },
  nav: {
    items: [
      { href: '#profil', label: 'Profile' },
      { href: '#missions', label: 'Work' },
      { href: '/en/case-studies/rte/', label: 'Case study' },
      { href: '/en/services/', label: 'Services' },
      { href: '#publications', label: 'Publications' },
      { href: '#contact', label: 'Contact' },
    ],
    cv: 'Résumé (PDF)',
    menu: 'Menu',
    close: 'Close',
    skip: 'Skip to content',
  },
  hero: {
    available: 'Freelance - available now',
    name: 'Dikers Amoko',
    title: 'Senior Data Scientist · MLOps · Data & AI Product Owner',
    verbs: ['I frame the need.', 'I build the model.', 'I ship it to production.'],
    lead:
      'Ten years across the full data chain, in banking, energy, official statistics and SaaS. Three jobs usually handed to three different people, held by one - with the traceability and reproducibility culture that banking and official statistics demand.',
    ctaPrimary: 'See the work',
    ctaSecondary: 'Get in touch',
    facts: [
      { label: 'Experience', value: '10 years' },
      { label: 'Sectors', value: 'Banking, energy, official statistics, SaaS' },
      { label: 'Books published', value: '2 in 2026' },
      { label: 'Open source', value: 'statAfrikR, published on CRAN' },
    ],
  },
  workflow: {
    title: 'From raw data to decision',
    note: 'The chain I cover end to end. Each step produces something the next one can verify.',
    entry: 'Business need',
    exit: 'Decision',
    stages: [
      {
        name: 'Collection',
        desc: 'Automated ingestion of internal and external sources, logging what comes in.',
        tools: ['REST API', 'SQL', 'Teradata', 'SQL Server'],
      },
      {
        name: 'Quality & consolidation',
        desc: 'Completeness and consistency checks, multi-source reconciliation, unified view, datamarts.',
        tools: ['R', 'Python', 'Dataiku', 'DBeaver'],
      },
      {
        name: 'Modelling',
        desc: 'Leak-free analytical table, scoring, segmentation, forecasting, anomaly detection.',
        tools: ['R', 'Python', 'SAS'],
      },
      {
        name: 'Industrialisation',
        desc: 'Versioning, containerisation, scheduling, monitoring batches and alerting.',
        tools: ['Git', 'Docker', 'RStudio Connect'],
      },
      {
        name: 'Reporting & activation',
        desc: 'Dashboards, business applications, automated alerts, activating the score in the CRM.',
        tools: ['Power BI', 'R Shiny', 'Tableau', 'Qlik Sense'],
      },
    ],
    acrossTitle: 'Across the whole chain',
    across: ['Traceability', 'Documentation', 'Reproducibility', 'Quality controls', 'GDPR compliance'],
  },
  roles: {
    title: 'Three roles, one counterpart',
    intro:
      'Most data projects fail at the seams: between business and modelling, between prototype and production. I hold all three links, so the seams disappear.',
    servicesLink: 'See the five engagement formats',
    items: [
      {
        title: 'Data Scientist',
        desc:
          'End-to-end statistical and machine learning modelling, with an official-statistics background that keeps data representativeness honest.',
        points: [
          'Exploration, scoring, segmentation, cohort analysis',
          'Predictive models and anomaly detection',
          'Sampling designs, weighting, quality and representativeness',
          'Impact and ROI measurement',
        ],
      },
      {
        title: 'MLOps & industrialisation',
        desc:
          'Deployment and long-term operation: a model that runs on Monday and can be fixed on Saturday.',
        points: [
          'Containerisation, versioning, analytical app deployment',
          'Workflow and processing automation',
          'Monitoring batches, alerting, automated quality controls',
          'Reproducibility, documentation, incident handling',
        ],
      },
      {
        title: 'Data & AI Product Owner',
        desc:
          'The interface between business teams, IT and vendors - including challenging AI vendors on architecture and guardrails.',
        points: [
          'Requirements gathering, workshop facilitation, roadmap',
          'Business rules, specifications, acceptance criteria',
          'Functional acceptance testing and steering committees',
          'Adoption, training and knowledge transfer',
        ],
      },
    ],
  },
  genai: {
    title: 'Generative AI: from demo to something you can run',
    body:
      'Agents, RAG, multi-agent systems and tool calling - but above all what comes after the demo: answer quality evaluation, guardrails, observability, security and cost control. Two published books on the subject let me own the product vision of an AI platform as much as challenge a vendor’s technical choices.',
    tags: [
      'AI agents',
      'RAG',
      'Multi-agent',
      'Tool calling',
      'Evaluation',
      'Guardrails',
      'Observability',
      'Cost control',
      'Python & R',
    ],
  },
  experience: {
    title: 'Selected work',
    intro:
      'Four settings where data had to be correct, traceable and available every single day: a SaaS company at launch, a retail bank, critical national power infrastructure, the national statistics institute.',
    jobs: [
      {
        period: '01/2026 - present',
        role: 'Partner & Lead Data Scientist - Customer Intelligence',
        org: 'Yubora',
        sector: 'SaaS',
        context:
          'SaaS vendor for business management and e-invoicing (small and mid-sized companies). Built the data function from scratch.',
        bullets: [
          'Vision & roadmap - data and CRM strategy for a company at launch: framing with Product, Marketing, Sales, Finance and Support, priority arbitration and sequencing.',
          'Modelling & data science - cohort analysis, segmentation and predictive modelling: revenue forecasting, churn anticipation, customer value estimation, feeding Product, Offer and CRM decisions.',
          'Foundation & KPI reference - data model, unified customer view, datamarts and a documented KPI reference built from zero: acquisition, activation, revenue, profitability, retention, churn and customer value by segment.',
          'Industrialisation & governance - process automation, quality controls designed in from the start, traceability and documentation; analytical stack selection, API connector integration, GDPR compliance standards.',
        ],
        stack: ['SQL', 'R', 'Python', 'Power BI', 'REST API', 'Git', 'CRM'],
        current: true,
      },
      {
        period: '06/2024 - 12/2025',
        role: 'Data Scientist Consultant - Business / Data Factory interface',
        org: 'Banque LCL',
        sector: 'Retail banking',
        context: 'Quantitative steering, controls and digital acquisition performance.',
        bullets: [
          'Framing & business interface - gathering Marketing and Product needs, translating them into requirements, business rules and specifications for the Data Factory; arbitrating feasibility and delivery sequencing.',
          'Quantitative analysis - definition and tracking of digital performance KPIs: traffic, conversion, acquisition cost, profitability, ROI, channel contribution; segmentation, sensitivity studies, anomaly detection.',
          'Datamart & quality - a multi-source datamart consolidating acquisition, conversion and customer journey, with reconciliation, quality controls and indicator documentation.',
          'Industrialisation & acceptance - industrialising Power BI reporting and automated processing; functional acceptance testing, completeness checks, anomaly tracking through to production.',
        ],
        stack: ['SQL', 'Teradata', 'SAS', 'R', 'Dataiku', 'Power BI', 'VBA'],
      },
      {
        period: '02/2023 - 01/2024',
        role: 'Data Scientist - Electricity interconnection monitoring',
        org: 'Scalian - RTE assignment',
        sector: 'Energy',
        context:
          'RTE, the French electricity transmission system operator - critical national infrastructure.',
        bullets: [
          'Needs & design - requirements gathering with domain experts; design of KPIs, statistical processing and anomaly detection rules.',
          'Development & deployment - an R Shiny application analysing electricity import-export flows and monitoring interconnections, deployed and stabilised in production on RStudio Connect.',
          'Run, monitoring & alerting - API ingestion automation, continuous quality controls, automated alerts to domain experts, production incident resolution.',
          'Handover - solution documentation and support to the operations teams taking over.',
        ],
        stack: ['R', 'Shiny', 'RStudio Connect', 'SQL', 'REST API', 'Docker'],
        caseUrl: '/en/case-studies/rte/',
        caseLabel: 'Read the detailed case study',
      },
      {
        period: '10/2021 - 02/2023',
        role: 'Statistician - Head of the business statistics reference',
        org: 'INSEE',
        sector: 'Official statistics',
        context:
          'French national institute of statistics and economic studies - structural business statistics, Paris / Montrouge.',
        bullets: [
          'Running a recurring production - framing, sampling and delivery of the Annual Sector Survey: sampling designs, collection and response-rate monitoring, non-response treatment and weighting.',
          'Modelling & aggregates - sector economic aggregates, statistical modelling, ad hoc survey exploitation and matching with administrative sources.',
          'Automation & monitoring - controls and monitoring batches to detect and correct anomalies, making data dependable before publication.',
          'Technical overhaul - migrating SAS programs to R: framing, rewriting, methodological documentation and team handover, in service of reproducibility.',
        ],
        stack: ['SAS', 'R', 'Python', 'SQL', 'DBeaver'],
      },
    ] as Job[],
    earlierTitle: 'Earlier',
    earlier: [
      {
        period: '10/2022 - 06/2023',
        role: 'Adjunct lecturer - MSc 1 MéDAS',
        org: 'CNAM, Paris',
        desc:
          'Lectures and lab sessions in decision and inferential statistics, modelling, machine learning and R programming.',
        stack: 'R · Statistics · Econometrics · ML',
      },
      {
        period: '09/2019 - 09/2021',
        role: 'Data Engineer',
        org: 'SAUR, Serris / Paris',
        desc:
          'Field data reliability tool: consistency checks, validation workflows, correction traceability; machine learning, anomaly detection and operational reporting automation.',
        stack: 'R · Python · SQL Server · SSRS · Power BI · Tableau · Git',
      },
      {
        period: '02/2019 - 09/2019',
        role: 'Data Science Consultant',
        org: 'Soft Computing, Paris',
        desc:
          'CRM campaign analysis, segmentation, scoring, impact and ROI measurement, targeting and marketing pressure recommendations.',
        stack: 'R · IBM SPSS Modeler',
      },
      {
        period: '03/2017 - 02/2019',
        role: 'Data Manager',
        org: 'TERRA, Paris',
        desc:
          'Multi-source data consolidation, steering indicators, interactive dashboards and thematic maps; segmentation, predictive models and process automation.',
        stack: 'R · Shiny · Python · SQL · Qlik Sense',
      },
      {
        period: '12/2011 - 08/2012',
        role: 'Statistical Studies Officer',
        org: 'DRC, Bangui (CAR)',
        desc:
          'Design and delivery of quantitative field surveys: protocol, sampling, questionnaires, team training and supervision; reports delivered to humanitarian partners.',
        stack: 'SPSS · CSPro',
      },
    ] as Brief[],
  },
  publications: {
    title: 'Publications & open source',
    intro:
      'What I apply on assignments, I write down and publish. Two professional books released in 2026 and an R package available on CRAN.',
    note: 'Both books are also available as ebooks.',
    noteCta: 'Visit the store',
    noteUrl: links.ebookStore,
    items: [
      {
        kind: 'Book',
        year: '2026',
        title: 'What your data knows about your customers',
        subtitle: 'From the business question to proven impact',
        desc:
          'Machine learning, generative AI and decision-making: 360° customer view, leak-free analytical table, segmentation and scoring, churn, conversion and value prediction, threshold selection, recommendation, activating the score in the CRM and measuring ROI.',
        facts: ['40 chapters', '21 business cases', '6 projects', '89 Python & R code blocks', 'Public reproducible repository'],
        url: links.bookData,
        cta: 'View on Amazon',
      },
      {
        kind: 'Book',
        year: '2026',
        title: 'Becoming an AI Orchestrator',
        subtitle: 'From beginner to expert',
        desc:
          'AI agents, RAG, multi-agent systems, tool calling, security, evaluation, observability, MLOps and production deployment, in Python and R.',
        facts: ['19 modules', '14 use cases', '60 solved exercises'],
        url: links.bookAI,
        cta: 'View on Amazon',
      },
      {
        kind: 'R package - CRAN',
        year: '2026',
        title: 'statAfrikR',
        subtitle: 'Statistical toolbox for national statistics institutes',
        desc:
          'An open source product owned end to end - design, roadmap, development, documentation, versioning, release and maintenance. Survey import (KoboToolbox, ODK, CSPro, Excel, Stata, SPSS), validation, weighted analysis, composite indices, visualisation and dissemination (SDMX, DDI metadata, anonymisation). Built to work offline and in French.',
        facts: ['Published on CRAN', 'Author & maintainer', 'GPL (≥ 3)'],
        url: links.statafrikrDocs,
        cta: 'Package documentation',
        extra: [
          { label: 'CRAN', url: links.cran },
          { label: 'R-universe', url: links.cranUniverse },
        ],
      },
    ] as PubItem[],
  },
  skills: {
    title: 'Skills',
    intro: 'Grouped by what they let me deliver, not by technology.',
    groups: [
      {
        name: 'Data science & machine learning',
        body:
          'Exploration, regression, classification, clustering, scoring, cohort analysis, predictive models, anomaly detection, sampling designs and weighting, sensitivity analysis, impact and ROI measurement.',
      },
      {
        name: 'Generative AI & LLMs',
        body:
          'AI agents, RAG, multi-agent systems, tool calling, answer quality evaluation, guardrails, observability, security and cost control - in Python and R.',
      },
      {
        name: 'MLOps & industrialisation',
        body:
          'Deployment and run, containerisation, versioning, analytical app deployment, REST APIs, workflow automation, monitoring batches and alerting, automated quality controls, reproducibility and incident handling.',
      },
      {
        name: 'Data & AI product ownership',
        body:
          'Requirements gathering and workshop facilitation, specifications and business rules, prioritisation and sequencing, acceptance criteria, functional testing, steering committees, training and knowledge transfer.',
      },
      {
        name: 'Data & governance',
        body:
          'Modelling, multi-source consolidation, datamarts and documented KPI references, quality and reconciliation, traceability, governance and GDPR compliance.',
      },
      {
        name: 'BI & communication',
        body:
          'Interactive dashboards, data storytelling, steering committees, making technical results legible to non-technical audiences.',
      },
    ],
    stackTitle: 'Technical environment',
    stack: [
      { name: 'Languages', items: ['Python', 'R', 'SQL', 'SAS', 'VBA'] },
      { name: 'Industrialisation', items: ['Docker', 'Git', 'REST API', 'RStudio Connect'] },
      { name: 'Data', items: ['Teradata', 'SQL Server / SSMS', 'DBeaver', 'Dataiku'] },
      { name: 'Reporting', items: ['Power BI', 'Tableau', 'Qlik Sense', 'R Shiny', 'SSRS'] },
    ],
  },
  education: {
    title: 'Education & certification',
    items: [
      {
        year: '2024',
        title: 'Blockchain Consultant certification (RS6410)',
        org: 'Alyra - implementing digital solutions with blockchain technologies',
        url: links.blockchainCert,
        urlLabel: 'Verify the certificate',
      },
      { year: '2016', title: 'MSc Statistics & Decision Analysis', org: 'University of Caen Normandie' },
      { year: '2013', title: 'BSc Statistics & Business Intelligence', org: 'IUT de Pau' },
      { year: '2011', title: 'Higher Technician in Statistics', org: 'ISSEA - Yaoundé' },
    ] as EduItem[],
    languagesTitle: 'Languages',
    languages: 'French, working language. Professional English: technical reading and writing.',
  },
  contact: {
    title: 'Let’s talk about your data chain',
    lead:
      'A business need that is still fuzzy, a model that never reaches production, an AI platform to frame or to challenge: tell me where you stand and I will tell you in one conversation what is realistic.',
    availability: 'Available now - Paris region and remote',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    location: 'Île-de-France, France',
    linkedinLabel: 'LinkedIn',
    cvLabel: 'Download the résumé',
    copy: 'Copy address',
    copied: 'Address copied',
  },
  footer: {
    tagline: 'Senior Data Scientist · MLOps · Data & AI Product Owner',
    rights: 'All rights reserved.',
    built: 'Built with Astro.',
    linksTitle: 'Go to',
    pages: [
      { href: '/en/', label: 'Home' },
      { href: '/en/services/', label: 'Services' },
      { href: '/en/case-studies/rte/', label: 'Case study - RTE' },
    ],
  },
};

export const content = { fr, en };
export type Content = typeof fr;
