import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, '/nested/Contact.html'),
        nested: resolve(__dirname, '/nested/Gallery.html'),
        nested: resolve(__dirname, '/nested/landing.html'),
        nested: resolve(__dirname, '/nested/me.html'),
        nested: resolve(__dirname, '/nested/Portfolio.html'),
      },
    },
  },
})