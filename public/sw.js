/* ═══════════════════════════════════════════════
   SERVICE WORKER — suporte offline (STUDY-069)

   Só é viável porque o Bootstrap e as fontes passaram a ser
   autohospedados (STUDY-067): não há mais nada externo a
   cachear, exceto o Mermaid (usado só em sec.html).

   Estratégia deliberadamente conservadora:
   · navegação (HTML) → network-first: online você SEMPRE vê a
     versão nova; offline cai para o cache. Isso evita o
     problema clássico de service worker servindo página velha.
   · assets (css/js/fontes/svg) → cache-first: são estáveis e
     o ganho de velocidade é real.
   · caches de versões antigas são apagados na ativação.

   Para publicar uma mudança, suba VERSAO.
═══════════════════════════════════════════════ */

const VERSAO = 'v2';
const CACHE = `plano-estudos-${VERSAO}`;

// Todos os módulos ES precisam estar aqui: um import que falha
// derruba o módulo inteiro, e offline não há rede para buscá-lo.
const ESSENCIAIS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './favicon.svg',

  // estilos
  './assets/css/tokens.css',
  './assets/css/base.css',
  './assets/css/components.css',
  './assets/vendor/bootstrap.min.css',
  './assets/vendor/bootstrap.bundle.min.js',
  './assets/vendor/fonts/fonts.css',

  // dados (fonte única)
  './data/config.js',
  './data/tracks.js',
  './data/phases.js',
  './data/routine.js',
  './data/pdfs.js',
  './data/milestones.js',

  // core
  './assets/js/core/render.js',
  './assets/js/core/search.js',
  './assets/js/core/nav.js',
  './assets/js/core/storage.js',
  './assets/js/core/pwa.js',

  // features
  './assets/js/features/routine.js',
  './assets/js/features/tracks.js',
  './assets/js/features/phases.js',
  './assets/js/features/sync.js',
  './assets/js/features/active-phase.js',
  './assets/js/features/track-roadmap.js',
  './assets/js/features/progress.js',
  './assets/js/features/review.js',
  './assets/js/features/history.js',
  './assets/js/features/charts.js',
  './assets/js/features/backup.js',
  './assets/js/features/certifications.js',
  './assets/js/features/checklist.js',
  './assets/js/features/today.js',
  './assets/js/features/global-search.js',

  // páginas
  './assets/js/pages/dashboard.js',
  './assets/js/pages/trilha.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      // addAll falha inteiro se um item falhar: adiciona um a um e ignora faltas
      .then((c) => Promise.allSettled(ESSENCIAIS.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((nomes) => Promise.all(nomes.filter((n) => n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // não intercepta CDN externo (mermaid)

  // HTML → network-first
  if (req.mode === 'navigate' || req.destination === 'document') {
    e.respondWith(
      fetch(req)
        .then((resp) => {
          const copia = resp.clone();
          caches.open(CACHE).then((c) => c.put(req, copia));
          return resp;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
    );
    return;
  }

  // assets → cache-first, com atualização em segundo plano
  e.respondWith(
    caches.match(req).then((cacheado) => {
      const rede = fetch(req)
        .then((resp) => {
          if (resp && resp.status === 200) {
            const copia = resp.clone();
            caches.open(CACHE).then((c) => c.put(req, copia));
          }
          return resp;
        })
        .catch(() => cacheado);
      return cacheado || rede;
    })
  );
});
