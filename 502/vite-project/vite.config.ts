// vite.config.ts
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

// Para poder usar __dirname en un config ESM/TS
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  // si tu app se va a servir desde una IP o ruta relativa, esto ayuda a que los assets funcionen
  base: './',
  build: {
    rollupOptions: {
      input: {
        // tu HTML secundario
        menu: resolve(__dirname, 'src/class1/A01784521/menu/menu.html'),
      }
    }
  }
})