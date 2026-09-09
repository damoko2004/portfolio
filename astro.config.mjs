// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/data/content.ts';

export default defineConfig({
  site: SITE_URL,
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
