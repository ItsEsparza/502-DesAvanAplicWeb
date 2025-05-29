import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        app: path.resolve(__dirname, 'index.html'),
        menu: path.resolve(__dirname, 'http://172.16.62.127/class1/A01784521/menu/menu.html'),
      }
    },
    outDir: 'dist', // carpeta de salida común
    emptyOutDir: true
  }
})