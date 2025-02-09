// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
    integrations: [react(), tailwind(), alpinejs()],
    adapter: cloudflare(),
    site: import.meta.env.DEV ? 'http://localhost:4321' : 'https://digest.juw.ee'
});