import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The public address of the site. Change it here if the domain changes.
const site = process.env.SITE_URL || 'https://oluwafunto-abimbola.vercel.app';

export default defineConfig({
  site,
  integrations: [sitemap()],
});
