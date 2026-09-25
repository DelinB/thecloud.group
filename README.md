# TCG Split Pages — Fixed v6

This version removes `react-router-dom` entirely. The site has two page URLs:

- `/` → AI Integration
- `/insights` → Insights

Both pages share the same global navigation, theme provider, hero WebGL background, atmosphere, cursor, scroll progress, and footer.

## Run

```bash
npm install
npm run dev
```

If you previously ran an older version, stop Vite, remove its cache, and restart:

```bash
Ctrl+C
rm -rf node_modules/.vite
npm run dev
```

Open:

- http://localhost:5173/
- http://localhost:5173/insights

## Important architecture change

This version intentionally does not use React Router. Navigation uses native anchors and `App.jsx` selects the page from `window.location.pathname`. This removes router-context failures such as `useLocation() may be used only in the context of a <Router> component`.

## Favicon

`public/favicon.svg` is included and referenced by `index.html`.
# thecloud.group
