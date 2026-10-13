# Portfolio — Ihor Borysenko

Личная карточка на React + Vite + Tailwind. Хостится на GitHub Pages.

## Локально

```bash
npm install
npm run dev      # http://localhost:5173/Portfolio/
npm run build    # сборка в dist/
```

## Где что менять

- Весь текст сайта — `src/data/profile.js`
- Свои картинки — папка `public/images/`, путь в коде: `` `${import.meta.env.BASE_URL}images/photo.jpg` ``
- Иконка вкладки — `public/favicon.svg`

## Деплой

Любой push в ветку `main` автоматически собирает и публикует сайт (`.github/workflows/deploy.yml`).
Один раз включить: **Settings → Pages → Source: GitHub Actions**.

## Свой домен

1. В `vite.config.js` поменять `base: '/Portfolio/'` на `base: '/'`
2. Положить файл `public/CNAME` с одной строкой — твой домен (например `ihor.dev`)
3. Settings → Pages → Custom domain, и прописать DNS у регистратора
