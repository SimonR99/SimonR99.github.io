import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://simonr99.github.io',
  output: 'static',
  integrations: [sitemap()],
});
