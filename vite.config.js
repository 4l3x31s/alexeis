import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Project page served at https://4l3x31s.github.io/alexeis/, so the build needs
// base '/alexeis/'. Dev keeps '/' so the local server stays at the root path.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/alexeis/' : '/',
  server: {
    port: 5177,
  },
  plugins: [react(), tailwindcss()],
}))
