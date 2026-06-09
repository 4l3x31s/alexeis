import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Two deploy targets share this build:
//   - GitHub Pages at https://4l3x31s.github.io/alexeis/  -> base '/alexeis/' (default)
//   - Custom domain at https://alexeis.yvaganet.com/       -> base '/'  (DEPLOY_TARGET=domain)
// Dev keeps '/' so the local server stays at the root path.
export default defineConfig(({ command }) => {
  const isBuild = command === 'build'
  const isDomain = process.env.DEPLOY_TARGET === 'domain'
  return {
    base: isBuild && !isDomain ? '/alexeis/' : '/',
    server: {
      port: 5177,
    },
    plugins: [react(), tailwindcss()],
  }
})
