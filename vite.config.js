import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

// --- KONFIGURACJA TRAS ---
// Definiujemy trasy w jednym miejscu, aby użyć ich w Sitemap i Prerender
const routesToPrerender = [
  '/',
  '/uslugi/czyszczenie-kominow',
  '/uslugi/przeglady-kominarskie'
]

// Custom plugin to convert images to WebP and generate mobile versions
const imageOptimizer = () => {
  return {
    name: 'image-optimizer',
    async buildStart() {
      const publicDir = path.resolve(__dirname, 'public')
      if (!fs.existsSync(publicDir)) return;

      const files = fs.readdirSync(publicDir)

      for (const file of files) {
        const filePath = path.join(publicDir, file)
        const parsed = path.parse(file)
        const fileName = parsed.name
        const ext = parsed.ext.toLowerCase()

        if (fileName.includes('-mobile')) continue;

        if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
          const webpPath = path.join(publicDir, `${fileName}.webp`)
          if (ext !== '.webp' && !fs.existsSync(webpPath)) {
            console.log(`Converting ${file} to WebP...`)
            await sharp(filePath)
              .webp({ quality: 80 })
              .toFile(webpPath)
          }

          const mobileWebpPath = path.join(publicDir, `${fileName}-mobile.webp`)
          if (!fs.existsSync(mobileWebpPath)) {
            console.log(`Generating mobile version for ${file}...`)
            await sharp(filePath)
              .resize({ width: 800, withoutEnlargement: true })
              .webp({ quality: 75 })
              .toFile(mobileWebpPath)
          }
        }
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),



    // <--- 3. Konfiguracja Sitemap
    Sitemap({
      dynamicRoutes: routesToPrerender, // Używamy tej samej zmiennej
      hostname: 'https://kominiarz-test.web.app',
      generateRobotsTxt: true // Zmieniłem na true, warto mieć robots.txt
    }),

    imageOptimizer()
  ],
  build: {
    minify: 'esbuild',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue') || id.includes('vue-router') || id.includes('pinia')) {
              return 'vendor-core';
            }
            return 'vendor-libs';
          }
        }
      }
    }
  }
})