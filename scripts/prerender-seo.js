// scripts/prerender-seo.js
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGES, SITE_URL, SITE_NAME, DEFAULT_IMAGE } from '../seo.config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '../dist');
const TEMPLATE = path.join(DIST, 'index.html');

if (!fs.existsSync(TEMPLATE)) {
  console.error('✗ dist/index.html not found. Run `vite build` first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(TEMPLATE, 'utf8');

/* ------------------------------------------------------------------ */
/*  helpers                                                            */
/* ------------------------------------------------------------------ */

const escapeAttr = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const escapeHtml = (s = '') =>
  String(s).replace(/</g, '&lt;').replace(/>/g, '&gt;');

const absoluteUrl = (p) => `${SITE_URL}${p === '/' ? '' : p}`;
const absoluteImage = (p) =>
  `${SITE_URL}/${(p || DEFAULT_IMAGE).replace(/^\//, '')}`;

/* ------------------------------------------------------------------ */
/*  <head> tags                                                        */
/* ------------------------------------------------------------------ */

function buildSeoTags(page) {
  const url = absoluteUrl(page.path);
  const image = absoluteImage(page.image);

  return `
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeAttr(page.description)}" />
    <link rel="canonical" href="${url}" />

    <meta property="og:site_name" content="${escapeAttr(SITE_NAME)}" />
    <meta property="og:type" content="${page.type || 'website'}" />
    <meta property="og:title" content="${escapeAttr(page.title)}" />
    <meta property="og:description" content="${escapeAttr(page.description)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:url" content="${url}" />
    <meta property="og:locale" content="en_US" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(page.title)}" />
    <meta name="twitter:description" content="${escapeAttr(page.description)}" />
    <meta name="twitter:image" content="${image}" />

    <script type="application/ld+json">
    ${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: absoluteImage('favicon.svg'),
      sameAs: [],
    })}
    </script>
  `.trim();
}

/* ------------------------------------------------------------------ */
/*  Fallback body content — what crawlers see                          */
/*                                                                     */
/*  React's createRoot() wipes #root on mount, so real users never     */
/*  see this. Google reads it before JS runs.                          */
/* ------------------------------------------------------------------ */

function buildBodyContent(page) {
  const otherPages = PAGES.filter((p) => p.path !== page.path);

  const navLinks = otherPages
    .map(
      (p) =>
        `<li><a href="${p.path}">${escapeHtml(p.title.split('|')[0].trim())}</a></li>`
    )
    .join('');

  const bullets = (page.bullets || [])
    .map((b) => `<li>${escapeHtml(b)}</li>`)
    .join('');

  return `
    <header>
      <a href="/"><strong>${escapeHtml(SITE_NAME)}</strong></a>
      <nav aria-label="Primary">
        <ul>${navLinks}</ul>
      </nav>
    </header>
    <main>
      <h1>${escapeHtml(page.h1 || page.title)}</h1>
      <p>${escapeHtml(page.intro || page.description)}</p>
      ${bullets ? `<ul>${bullets}</ul>` : ''}
      <p><a href="/contact">Book a free consultation →</a></p>
    </main>
    <footer>
      <p>© ${new Date().getFullYear()} ${escapeHtml(SITE_NAME)}</p>
    </footer>
  `.trim();
}

/* ------------------------------------------------------------------ */
/*  Build one page                                                     */
/* ------------------------------------------------------------------ */

function renderPage(page) {
  const seoTags = buildSeoTags(page);
  const bodyContent = buildBodyContent(page);

  // Strip any default tags Vite added.
  let html = baseHtml
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta name="description"[^>]*>/i, '')
    .replace(/<meta property="og:[^"]*"[^>]*>/gi, '')
    .replace(/<meta name="twitter:[^"]*"[^>]*>/gi, '');

  // Inject <head> tags.
  html = html.replace(/<\/head>/i, `  ${seoTags}\n  </head>`);

  // Inject fallback content INSIDE #root. React wipes it on mount.
  html = html.replace(
    /<div id="root"><\/div>/i,
    `<div id="root">${bodyContent}</div>`
  );

  return html;
}

/* ------------------------------------------------------------------ */
/*  Write everything                                                   */
/* ------------------------------------------------------------------ */

let written = 0;
for (const page of PAGES) {
  const html = renderPage(page);
  const outDir =
    page.path === '/'
      ? DIST
      : path.join(DIST, page.path.replace(/^\//, ''));

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  written++;
  console.log(`  ✓ ${path.relative(DIST, path.join(outDir, 'index.html'))}`);
}

/* sitemap.xml */
const today = new Date().toISOString().split('T')[0];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(
  (p) => `  <url>
    <loc>${absoluteUrl(p.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${p.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`
).join('\n')}
</urlset>`;
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap, 'utf8');
console.log('  ✓ sitemap.xml');

/* robots.txt */
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
fs.writeFileSync(path.join(DIST, 'robots.txt'), robots, 'utf8');
console.log('  ✓ robots.txt');

console.log(`\n✓ Pre-rendered SEO for ${written} routes into dist/`);