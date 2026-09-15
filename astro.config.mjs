// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL, BASE_PATH } from './src/data/content.ts';

// Le site est publié sur GitHub Pages, sous https://damoko2004.github.io/portfolio/
// C'est la configuration par défaut : npm run build produit directement la
// version qui sera mise en ligne.
//
// Les deux variables d'environnement permettent de construire pour une autre
// cible sans toucher au code, par exemple une préversion à la racine d'un
// domaine :
//   PUBLIC_BASE_PATH=/ PUBLIC_SITE_URL=https://exemple.fr npm run build
const base = process.env.PUBLIC_BASE_PATH || BASE_PATH;
const site = process.env.PUBLIC_SITE_URL || SITE_URL;

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en-US' },
      },
    }),
  ],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
