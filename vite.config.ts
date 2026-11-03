import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages serves the site from the root of www.braidsplace.com.
  base: '/',
  plugins: [react(), tailwindcss()],
})
