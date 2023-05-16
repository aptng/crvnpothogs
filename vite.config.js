import { resolve } from 'path'
import { defineConfig } from 'vite'

const nested = resolve(__dirname, 'nested')
export default defineConfig({
  nested, 
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        me: resolve(nested, 'me.html'),
        landing: resolve(nested, 'landing.html'),
        gallery: resolve(nested, 'Gallery.html'),
        portfolio: resolve(nested, 'Portfolio.html'),
      },
    },
  },
})