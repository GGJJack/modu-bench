// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.github.io',
  base: '/modu-bench',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap(),
    preact(),
    icon(),
  ],
});
