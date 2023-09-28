import react from '@vitejs/plugin-react'
import { join } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {},
    },
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
      images: join(__dirname, 'src/assets/'),
    },
  },
})
