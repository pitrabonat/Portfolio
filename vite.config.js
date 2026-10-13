import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// GitHub Pages не умеет SPA-роутинг: при обновлении страницы /Portfolio/about даёт 404.
// Трюк: после сборки кладём копию index.html как 404.html — Pages отдаст её, и React Router сам откроет нужную страницу.
const spaFallback = () => ({
  name: 'spa-404-fallback',
  closeBundle() {
    const dist = path.resolve('dist')
    fs.copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'))
  },
})

export default defineConfig({
  plugins: [react(), spaFallback()],
  resolve: {
    // алиас @ -> src (раньше его создавал плагин base44)
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  // Имя репозитория на GitHub. Когда подключишь свой домен — поменяй на '/'
  base: '/',
})