// vite.config.ts
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

// 1) Obtenemos __filename y __dirname correctamente
const __filename = fileURLToPath(import.meta.url)
const __dirname  = dirname(__filename)

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        // Página principal
        main: resolve(__dirname, 'index.html'),
        // Tu HTML secundario: apunta al path real dentro de src/
        menu: resolve(__dirname, 'src/class1/A01784521/index.html')
      }
    }
  }
})
