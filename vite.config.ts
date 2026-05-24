import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vicinage from '@vicinage/unplugin'
import stylex from '@stylexjs/unplugin'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vicinage.vite(),

    stylex.vite({
      runtimeInjection: process.env['NODE_ENV'] === 'development',
      useCSSLayers: {
        before: ['reset', 'theme'],
        prefix: 'stylex',
      },
    }),

    tailwindcss(),
    react(),
  ],
})
