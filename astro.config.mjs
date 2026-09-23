// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://rodnm.github.io',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    sitemap(),
    AstroPWA({
      registerType: 'autoUpdate',
      scope: '/',
      base: '/',
      manifest: {
        name: 'Rodrigo Norabuena - Portfolio',
        short_name: 'RN Portfolio',
        description: 'Portafolio Profesional de Rodrigo Norabuena - Economista y Data Scientist',
        theme_color: '#440154',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      experimental: {
        // Precache both /en and /en/ (GitHub Pages redirects to the slash form).
        directoryAndTrailingSlashHandler: true
      },
      workbox: {
        // PDFs stay out so a replaced CV is never served stale.
        globPatterns: ['**/*.{js,css,html,svg,webp,ico}'],
        // Static multi-page site: unmatched navigations must reach the network, not the 404 page.
        navigateFallback: null,
        maximumFileSizeToCacheInBytes: 5000000,
      }
    })
  ]
});