import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate', 
      includeAssets: ['/**/*.js', '/**/*.png', '/**/*.jpg', '/**/*.jpeg', '/**/*.gif', '/**/*.svg'],
      manifest: {
        display: 'fullscreen',
      },
      swSrc: 'src/custom-service-worker.js', // Specify the path to your custom Service Worker file
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'docs'
  }
})
