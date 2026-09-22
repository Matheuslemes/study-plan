/*
 * Gerador do sitemap.xml — fonte única e reprodutível.
 *
 * Varre public/ e emite uma entrada por página pública, com URLs "limpas"
 * (sem .html, como o Vercel serve). Assim o sitemap deixa de ser mantido à
 * mão e nunca mais fica para trás quando uma trilha, um Módulo 0 (base.html)
 * ou uma Fronteira nova é adicionada.
 *
 * Rode com:  node scripts/gen-sitemap.mjs
 * Convenção de prioridade: raiz 1.0 · hub de trilha 0.8 · página de parte 0.7.
 */
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUB = join(ROOT, 'public');
const TRILHAS = join(PUB, 'trilhas');
const BASE = 'https://study-plan.vercel.app';
const LASTMOD = new Date().toISOString().slice(0, 10);

const htmlIn = (dir) => {
  try { return readdirSync(dir).filter((f) => f.endsWith('.html')).map((f) => f.replace(/\.html$/, '')).sort(); }
  catch { return []; }
};

const entries = [];
const push = (path, priority) => entries.push({ loc: `${BASE}${path}`, priority });

// raiz
push('/', '1.0');

// hubs de trilha (trilhas/<track>.html) + suas partes (trilhas/<track>/<part>.html)
const hubs = htmlIn(TRILHAS);
for (const track of hubs) {
  push(`/trilhas/${track}`, '0.8');
  const dir = join(TRILHAS, track);
  let isDir = false;
  try { isDir = statSync(dir).isDirectory(); } catch { /* sem pasta de partes */ }
  if (!isDir) continue;
  for (const part of htmlIn(dir)) push(`/trilhas/${track}/${part}`, '0.7');
}

const body = entries.map(({ loc, priority }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(join(PUB, 'sitemap.xml'), xml, 'utf8');
console.log(`sitemap.xml gerado: ${entries.length} URLs (${hubs.length} hubs + partes), lastmod ${LASTMOD}`);
