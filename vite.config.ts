import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import crypto from 'crypto'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    modules: {
      generateScopedName: (name, filename) => {
        const component = path.basename(filename, path.extname(filename)).replace(/\.module$/, '')
        const hash = crypto.createHash('md5').update(filename + name).digest('hex').slice(0, 5)
        return `${component}__${name}__${hash}`
      },
    }
  }
})
