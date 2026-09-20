/*
 * Service worker do sistema de estudos.
 * HTML usa network-first; assets versionados usam cache-first com revalidação.
 */

const VERSAO = 'v83-treino-ficha-ios-descanso-90s';
const CACHE = `plano-estudos-${VERSAO}`;

const PARTES_ACADEMIA = {
  arquitetura: ['avaliacao', 'distribuidos', 'estrategico', 'evolucao', 'fundamentos'],
  aws: ['arquitetura', 'avaliacao', 'confiabilidade', 'fundamentos', 'plataforma'],
  bancos: ['avaliacao', 'distribuidos', 'fundamentos', 'integracao', 'postgresql'],
  devops: ['avaliacao', 'confiabilidade', 'fundamentos', 'operacao', 'plataforma'],
  financeiro: ['avaliacao', 'carreira', 'controle', 'investimentos', 'planejamento'],
  frontend: ['aplicacoes', 'avaliacao', 'fundamentos', 'producao', 'sistemas'],
  git: ['avaliacao', 'colaboracao', 'fundamentos', 'governanca', 'plataformas'],
  ia: ['dados-ml', 'deep-learning', 'engenharia', 'fundamentos', 'generativa', 'pratica'],
  ingles: ['avaliacao', 'escrita', 'fala', 'fundamentos', 'producao'],
  java: ['avaliacao', 'fundamentos', 'producao', 'runtime'],
  matematica: ['avaliacao', 'discreta', 'linear', 'otimizacao', 'probabilidade'],
  python: ['avaliacao', 'fundamentos', 'performance', 'producao', 'qualidade'],
  sec: ['avaliacao', 'controles', 'modelagem', 'operacao', 'verificacao'],
  // treino não é uma Academia, mas seus submódulos seguem o mesmo caminho
  // ./trilhas/<id>/<parte>.html e precisam entrar no precache — inclusive a
  // ficha de bolso, que é justamente a página que precisa funcionar offline.
  treino: ['avaliacao', 'cardio', 'execucao', 'ficha']
};

const IDS_TRILHA = [
  'arquitetura', 'aws', 'bancos', 'devops', 'financeiro', 'frontend', 'git',
  'ia', 'ingles', 'java', 'matematica', 'python', 'sec', 'treino'
];

const PAGINAS_TRILHAS = [
  ...IDS_TRILHA.map((id) => `./trilhas/${id}.html`),
  ...Object.entries(PARTES_ACADEMIA).flatMap(([id, partes]) =>
    partes.map((parte) => `./trilhas/${id}/${parte}.html`))
];

const ESSENCIAIS = [
  './',
  './index.html',
  ...PAGINAS_TRILHAS,
  './manifest.webmanifest',
  './favicon.svg',

  // Camada visual única
  './assets/css/tokens.css',
  './assets/css/tracks-palette.css',
  './assets/css/base.css',
  './assets/css/system.css',
  './assets/css/hub.css',
  './assets/css/academy.css',
  './assets/vendor/bootstrap.min.css',
  './assets/vendor/bootstrap.bundle.min.js',
  './assets/vendor/fonts/fonts.css',

  // Dados
  './data/config.js',
  './data/tracks.js',
  './data/phases.js',
  './data/routine.js',
  './data/pdfs.js',
  './data/milestones.js',
  './data/track-guides.js',
  './data/track-exercises.js',
  './data/learning-path.js',
  './data/interviews.js',
  './data/academy-data-factory.js',
  './data/arquitetura-advanced.js',
  './data/aws-advanced.js',
  './data/bancos-advanced.js',
  './data/devops-advanced.js',
  './data/financeiro-advanced.js',
  './data/frontend-advanced.js',
  './data/git-advanced.js',
  './data/ia-advanced.js',
  './data/ingles-advanced.js',
  './data/java-advanced.js',
  './data/matematica-advanced.js',
  './data/python-advanced.js',
  './data/sec-advanced.js',

  // Núcleo
  './assets/js/core/render.js',
  './assets/js/core/search.js',
  './assets/js/core/nav.js',
  './assets/js/core/storage.js',
  './assets/js/core/pwa.js',
  './assets/js/core/public-url.js',
  './assets/js/core/system-header.js',

  // Funcionalidades do Sistema
  './assets/js/features/routine.js',
  './assets/js/features/tracks.js',
  './assets/js/features/phases.js',
  './assets/js/features/sync.js',
  './assets/js/features/active-phase.js',
  './assets/js/features/track-roadmap.js',
  './assets/js/features/track-guide.js',
  './assets/js/features/track-exercises.js',
  './assets/js/features/progress.js',
  './assets/js/features/review.js',
  './assets/js/features/history.js',
  './assets/js/features/charts.js',
  './assets/js/features/backup.js',
  './assets/js/features/certifications.js',
  './assets/js/features/checklist.js',
  './assets/js/features/today.js',
  './assets/js/features/global-search.js',
  './assets/js/features/recovery.js',
  './assets/js/features/dependency-map.js',
  './assets/js/features/interviews.js',

  // Renderers compartilhados
  './assets/js/pages/dashboard.js',
  './assets/js/pages/trilha.js',
  './assets/js/pages/hub.js',
  './assets/js/pages/academy.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => Promise.allSettled(ESSENCIAIS.map((url) => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.filter((name) => name !== CACHE).map((name) => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((response) => response || caches.match('./index.html')))
    );
    return;
  }

  const precisaCoerencia =
    request.destination === 'script'
    || request.destination === 'style'
    || url.pathname.includes('/data/');

  if (precisaCoerencia) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response?.status === 200) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response?.status === 200) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
