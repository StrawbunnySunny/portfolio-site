# Sunny Ni — Portfolio

A professional portfolio website showcasing finance and software engineering projects.

Built with **React 19**, **Vite**, **Tailwind CSS 4**, and **Framer Motion**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Production Build

```bash
npm run build
npm run preview   # preview the production build locally
```

The static output lands in `dist/` and can be deployed to any static host.

## Deploy to GitHub Pages

```bash
npm run deploy:gh-pages
```

For Vercel or Netlify, just connect your repo — zero config needed.

## Customization

- **Projects**: Edit `src/data/projects.js` to add, remove, or update projects and commentary.
- **Contact links**: Update URLs in `src/components/Contact.jsx` and `src/components/Footer.jsx`.
- **Resume**: Drop a `resume.pdf` into the `public/` folder (the navbar links to `/resume.pdf`).
- **Images**: Add project screenshots to `public/images/` and reference them in `projects.js`.
- **Colors**: Tweak the theme variables in `src/index.css` under `@theme`.
