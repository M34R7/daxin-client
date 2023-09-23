import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const root = process.cwd()

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(root, 'src'),
      pages: path.resolve(root, 'src/pages'),
      store: path.resolve(root, 'src/store'),
      components: path.resolve(root, 'src/components'),
      images: path.resolve(root, 'src/assets/images'),
      styles: path.resolve(root, 'src/assets/styles'),
      helpers: path.resolve(root, 'src/helpers'),
    },
  },
  server: {
    port: 3000,
  },
})
