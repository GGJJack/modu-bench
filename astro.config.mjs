// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';
import icon from 'astro-icon';

// 로컬 dev 는 루트(/) 로 서빙, 그 외(build/preview) 는 GitHub Pages 경로 유지.
const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  site: 'https://example.github.io',
  base: isDev ? '/' : '/modu-bench/',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap(),
    preact(),
    icon(),
  ],
});
