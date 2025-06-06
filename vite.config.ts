import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import eslint from "vite-plugin-eslint"

// https://vite.dev/config/
export default defineConfig({
  base: '/pet/',
  esbuild: {
    target: 'es2022',
    supported: {
      'top-level-await': true
    },
  },
  build: {
    target: 'es2022',
    outDir: 'dist',
    assetsDir: '.',
  },
  plugins: [
    react(),
    tailwindcss(),
    // eslint(),
  ],
})
