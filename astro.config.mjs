// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/data/content.ts';

// Deux cibles de publication :
//   npm run build                       -> Netlify, à la racine du domaine
//   PUBLIC_BASE_PATH=/portfolio/ ...    -> GitHub Pages, sous /portfolio/
// Les variables sont posées par le workflow .github/workflows/pages.yml.
const base = process.env.PUBLIC_BASE_PATH || '/';
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
