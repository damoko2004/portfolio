// ---------------------------------------------------------------------------
// Pages secondaires : index des études de cas, parcours, mentions légales.
// ---------------------------------------------------------------------------

// --- À COMPLÉTER --------------------------------------------------------
// Renseignez ces informations avant de publier les mentions légales. Un site
// professionnel qui commercialise des prestations en France doit permettre
// d'identifier son éditeur. Faites relire par un juriste si vous avez un doute.
export const legalIdentity = {
  name: 'Dikers Amoko',
  status: 'À COMPLÉTER - statut juridique (entreprise individuelle, EURL, SASU…)',
  siret: 'À COMPLÉTER - numéro SIRET',
  vat: 'À COMPLÉTER - numéro de TVA intracommunautaire, ou mention de franchise en base',
  address: 'À COMPLÉTER - adresse du siège',
  email: 'diamoko@gmail.com',
  phone: '06 58 47 95 06',
  director: 'Dikers Amoko',
  host: 'Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis - netlify.com',
};

export const pages = {
  fr: {
    cases: {
      meta: {
        title: 'Études de cas - missions data en production | Dikers Amoko',
        description:
          'Deux missions racontées en détail : supervision des interconnexions électriques chez RTE, pilotage de l’acquisition digitale chez LCL. Méthode, architecture et arbitrages, sans données confidentielles.',
      },
      eyebrow: 'Études de cas',
      title: 'Deux missions racontées comme elles se sont passées',
      lede:
        'Pas des listes de technologies, mais le raisonnement : quel était le problème, quelles décisions ont été prises, pourquoi celles-là, et ce qui restait une fois la mission terminée. Aucune donnée client n’y figure - c’est expliqué sur chaque page.',
      items: [
        {
          sector: 'Énergie - infrastructure critique',
          org: 'RTE, via Scalian',
          period: '2023 - 2024',
          title: 'Superviser les interconnexions électriques, tous les matins',
          desc:
            'Une revue matinale manuelle transformée en dispositif automatisé de surveillance, de détection d’anomalies et d’alerte. Ingestion par API, contrôles qualité, moteur de règles, e-mail autoportant et application Shiny en production.',
          tags: ['R', 'Shiny', 'RStudio Connect', 'API REST', 'Docker'],
          href: '/etudes-de-cas/rte/',
        },
        {
          sector: 'Banque de détail',
          org: 'Banque LCL',
          period: '2024 - 2025',
          title: 'Mesurer ce que rapporte vraiment l’acquisition digitale',
          desc:
            'Trois outils, trois chiffres pour la même question. Cube de données multi-sources, référentiel de KPI documenté avec un propriétaire par indicateur, reporting industrialisé et mesure d’impact assumée comme un travail statistique.',
          tags: ['SQL', 'Teradata', 'SAS', 'Dataiku', 'Power BI'],
          href: '/etudes-de-cas/lcl/',
        },
      ],
      cta: 'Discuter de votre situation',
    },

    background: {
      meta: {
        title: 'Parcours et compétences | Dikers Amoko',
        description:
          'Dix ans en banque, énergie, statistique publique, utilities et SaaS. Compétences détaillées, environnement technique, expériences antérieures, enseignement et formation.',
      },
      eyebrow: 'Parcours',
      title: 'Dix ans, cinq secteurs, une même exigence',
      lede:
        'Le détail de ce que je sais faire, d’où je l’ai appris, et avec quels outils. Les missions récentes sont présentées sur la page d’accueil ; cette page rassemble tout le reste.',
      cta: 'Me contacter',
    },

    legal: {
      meta: {
        title: 'Mentions légales et confidentialité | Dikers Amoko',
        description: 'Informations légales, hébergement et traitement des données personnelles.',
      },
      eyebrow: 'Informations légales',
      title: 'Mentions légales et confidentialité',
      lede:
        'Informations relatives à l’éditeur du site, à son hébergement et au traitement des données personnelles.',
      editorTitle: 'Éditeur du site',
      labels: {
        name: 'Éditeur',
        status: 'Statut juridique',
        siret: 'SIRET',
        vat: 'TVA intracommunautaire',
        address: 'Adresse',
        email: 'E-mail',
        phone: 'Téléphone',
        director: 'Directeur de la publication',
        host: 'Hébergeur',
      },
      sections: [
        {
          title: 'Données personnelles',
          body: [
            'Ce site ne comporte ni formulaire, ni compte utilisateur, ni espace de commentaires. Aucune donnée personnelle n’est collectée à travers lui.',
            'Si vous me contactez par e-mail ou par téléphone, les informations que vous transmettez sont utilisées uniquement pour vous répondre et pour la gestion de la relation qui pourrait en découler. Elles ne sont ni cédées, ni revendues, ni exploitées à d’autres fins.',
            'Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition sur ces données. Il s’exerce par simple demande à l’adresse e-mail indiquée ci-dessus.',
          ],
        },
        {
          title: 'Cookies et mesure d’audience',
          body: [
            'Ce site ne dépose aucun cookie et n’utilise aucun outil de mesure d’audience. C’est pourquoi aucune bannière de consentement ne vous est présentée : il n’y a rien à consentir.',
            'L’hébergeur conserve des journaux de connexion techniques, nécessaires au fonctionnement et à la sécurité du service.',
          ],
        },
        {
          title: 'Propriété intellectuelle et confidentialité des missions',
          body: [
            'Les textes, visuels et le code de ce site sont la propriété de son éditeur, sauf mention contraire.',
            'Les études de cas publiées décrivent des méthodes et des choix d’architecture. Elles ne reproduisent aucune donnée, aucun seuil calibré et aucun livrable de client. Les visuels qui les accompagnent sont des reconstitutions établies à partir de données synthétiques, signalées comme telles.',
          ],
        },
      ],
      disclaimer:
        'Ces mentions sont fournies à titre informatif et ne constituent pas un conseil juridique.',
    },
  },

  en: {
    cases: {
      meta: {
        title: 'Case studies - data work in production | Dikers Amoko',
        description:
          'Two assignments told in detail: monitoring electricity interconnections at RTE, steering digital acquisition at LCL. Method, architecture and trade-offs, without confidential data.',
      },
      eyebrow: 'Case studies',
      title: 'Two assignments told the way they happened',
      lede:
        'Not lists of technologies, but the reasoning: what the problem was, which decisions were taken, why those ones, and what remained once the assignment ended. No client data appears - each page explains why.',
      items: [
        {
          sector: 'Energy - critical infrastructure',
          org: 'RTE, through Scalian',
          period: '2023 - 2024',
          title: 'Monitoring electricity interconnections, every morning',
          desc:
            'A manual morning review turned into an automated monitoring, anomaly detection and alerting system. API ingestion, quality controls, rule engine, self-contained email and a Shiny application in production.',
          tags: ['R', 'Shiny', 'RStudio Connect', 'REST API', 'Docker'],
          href: '/en/case-studies/rte/',
        },
        {
          sector: 'Retail banking',
          org: 'Banque LCL',
          period: '2024 - 2025',
          title: 'Measuring what digital acquisition really returns',
          desc:
            'Three tools, three answers to the same question. A multi-source data cube, a documented KPI reference with an owner per indicator, industrialised reporting and impact measurement treated as statistical work.',
          tags: ['SQL', 'Teradata', 'SAS', 'Dataiku', 'Power BI'],
          href: '/en/case-studies/lcl/',
        },
      ],
      cta: 'Discuss your situation',
    },

    background: {
      meta: {
        title: 'Background and skills | Dikers Amoko',
        description:
          'Ten years across banking, energy, official statistics, utilities and SaaS. Detailed skills, technical environment, earlier roles, teaching and education.',
      },
      eyebrow: 'Background',
      title: 'Ten years, five sectors, one standard',
      lede:
        'The detail of what I can do, where I learned it, and with which tools. Recent assignments are on the home page; this page gathers everything else.',
      cta: 'Get in touch',
    },

    legal: {
      meta: {
        title: 'Legal notice and privacy | Dikers Amoko',
        description: 'Publisher information, hosting and personal data handling.',
      },
      eyebrow: 'Legal information',
      title: 'Legal notice and privacy',
      lede: 'Information about the site publisher, its hosting and the handling of personal data.',
      editorTitle: 'Site publisher',
      labels: {
        name: 'Publisher',
        status: 'Legal status',
        siret: 'Company number (SIRET)',
        vat: 'VAT number',
        address: 'Address',
        email: 'Email',
        phone: 'Phone',
        director: 'Publication director',
        host: 'Hosting provider',
      },
      sections: [
        {
          title: 'Personal data',
          body: [
            'This site has no form, no user account and no comment section. No personal data is collected through it.',
            'If you contact me by email or phone, the information you send is used only to reply to you and to manage any relationship that follows. It is never shared, sold or used for other purposes.',
            'You have rights of access, rectification, erasure, restriction and objection regarding this data. Simply write to the email address above.',
          ],
        },
        {
          title: 'Cookies and analytics',
          body: [
            'This site sets no cookies and uses no analytics tool. That is why no consent banner is shown: there is nothing to consent to.',
            'The hosting provider keeps technical connection logs, necessary for the operation and security of the service.',
          ],
        },
        {
          title: 'Intellectual property and client confidentiality',
          body: [
            'The texts, visuals and code of this site belong to its publisher unless stated otherwise.',
            'The published case studies describe methods and architectural choices. They reproduce no data, no calibrated threshold and no client deliverable. The accompanying visuals are reconstructions built from synthetic data, and are labelled as such.',
          ],
        },
      ],
      disclaimer: 'This notice is provided for information and does not constitute legal advice.',
    },
  },
};
