// vite.config.ts
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // fija la ruta correcta aquí:
        menu: resolve(__dirname, '/class1/A01784521/menu/menu.html')
      }
    }
  }
})