import { createReadStream, existsSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';

const porta = Number(process.argv[2] || 5599);
const raiz = join(import.meta.dirname, '..', 'public');
// Progresso de estudo persistido em arquivo (fonte durável, versionável no Git).
const PROGRESSO = join(import.meta.dirname, '..', 'progresso.json');
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

  // ── API de progresso: GET lê, POST grava progresso.json ──
  if (url.pathname === '/progress') {
    const cab = { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' };
    if (req.method === 'POST') {
      let corpo = '';
      req.on('data', (c) => { corpo += c; if (corpo.length > 8e6) req.destroy(); });
      req.on('end', () => {
        try {
          JSON.parse(corpo); // valida antes de gravar
          writeFileSync(PROGRESSO, corpo);
          res.writeHead(200, cab).end('{"ok":true}');
        } catch {
          res.writeHead(400, cab).end('{"ok":false}');
        }
      });
      return;
    }
    res.writeHead(200, cab).end(existsSync(PROGRESSO) ? readFileSync(PROGRESSO) : '{}');
    return;
  }

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
