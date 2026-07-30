import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';

const porta = Number(process.argv[2] || 5599);
const raiz = join(import.meta.dirname, '..', 'public');
const tipos = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json',
  '.woff2': 'font/woff2'
};

createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const relativa = decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'index.html';
  let arquivo = normalize(join(raiz, relativa));
  if (!arquivo.startsWith(raiz)) {
    res.writeHead(403).end('Forbidden');
    return;
  }
  if (existsSync(arquivo) && statSync(arquivo).isDirectory()) arquivo = join(arquivo, 'index.html');
  if (!existsSync(arquivo) && !extname(arquivo) && existsSync(`${arquivo}.html`)) arquivo += '.html';
  if (!existsSync(arquivo)) {
    res.writeHead(404).end('Not found');
    return;
  }
  res.writeHead(200, {
    'Content-Type': tipos[extname(arquivo)] || 'application/octet-stream',
    'Cache-Control': 'no-store'
  });
  createReadStream(arquivo).pipe(res);
}).listen(porta, '127.0.0.1', () => {
  console.log(`Study Plan em http://127.0.0.1:${porta}`);
});
