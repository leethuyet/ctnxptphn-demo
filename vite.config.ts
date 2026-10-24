import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: '/ctnxptphn-demo/', // Đường dẫn cơ sở chuẩn cho GitHub Pages
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt', // Cơ chế an toàn: hiển thị thông báo để người dùng chủ động tải lại
      includeAssets: [
        'favicon.ico',
        'favicon.png',
        'favicon-32x32.png',
        'apple-touch-icon.png',
        'logo-hoi-tnxp.png',
        'logo-hoi-tnxp.webp',
        'pwa-192x192.png',
        'pwa-512x512.png',
        'pwa-maskable-512x512.png'
      ],
      manifest: {
        name: 'Hội Cựu TNXP TP Hà Nội',
        short_name: 'CTNXPTPHN',
        description: 'Cổng thông tin điện tử và tra cứu hội viên Hội Cựu Thanh niên xung phong TP Hà Nội (Bản demo)',
        lang: 'vi',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#138348',
        background_color: '#FFFFFF',
        start_url: '/ctnxptphn-demo/',
        scope: '/ctnxptphn-demo/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,webp,svg,woff2}'],
        navigateFallback: '/ctnxptphn-demo/index.html',
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            // Cache phông chữ Google Fonts (Be Vietnam Pro)
            urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 năm
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ]
});
