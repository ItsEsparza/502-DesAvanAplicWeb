import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // This is likely your main application entry point
        main: resolve(__dirname, 'index.html'),

        // Class 1
        'src/class1/A01784521/index': resolve(__dirname, 'src/class1/A01784521/index.html'),
        'src/class1/A01784521/menu/menu': resolve(__dirname, 'src/class1/A01784521/menu/menu.html'),

        // Class 2
        'src/class2/A01784521/index': resolve(__dirname, 'src/class2/A01784521/index.html'),

        // Class 3
        'src/class3/A01784521/index': resolve(__dirname, 'src/class3/A01784521/index.html'),

        // Class 4
        'src/class4/L03535511/index': resolve(__dirname, 'src/class4/L03535511/index.html'),

        // Class 5
        'src/class5/A01782557/index': resolve(__dirname, 'src/class5/A01782557/index.html'),

        // Class 6
        'src/class6/A01782557/index': resolve(__dirname, 'src/class6/A01782557/index.html'),

	//Class 7
	
        'src/class7/A01782557/index': resolve(__dirname, 'src/class7/A01782557/index.html'),
	}
    }
  }
})
