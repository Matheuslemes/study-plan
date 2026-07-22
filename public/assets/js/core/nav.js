/* ═══════════════════════════════════════════════
   CORE / NAV — navegação das páginas de trilha (STUDY-035)

   Substitui as 14 IIFEs duplicadas que viviam inline em cada
   página de trilha. Elas faziam a mesma coisa, mas haviam
   divergido: ids diferentes para o mesmo botão (`backToTop`
   e `btt`), classes diferentes para o mesmo estado
   (`is-visible` e `show`), limiares de 400, 420 e 500px, e
   uma página inteira sem scrollspy.

   Este módulo é tolerante a essas diferenças: cada recurso
   só é ativado se os elementos dele existirem na página.
   Corrigir um bug de navegação passa a ser uma edição, não
   quatorze.
═══════════════════════════════════════════════ */

import { ligarBuscaDeSecoes } from './search.js';

/** Escolhe o seletor de seções que realmente existe na página. */
function resolveSeletorDeSecoes(cfg) {
  if (document.querySelector(cfg.secoes)) return cfg.secoes;
  if (cfg.secoesFallback && document.querySelector(cfg.secoesFallback)) return cfg.secoesFallback;
  return cfg.secoes;
}

const PADROES = {
  // a maioria das páginas marca seções com data-search-section; matematica.html
  // usa .section[id]. resolveSeletorDeSecoes escolhe o que existir na página.
  secoes: '[data-search-section]',
  secoesFallback: '.section[id]',
  buscaId: 'searchInput',
  barraId: 'navSectionsBar',
  btnEsqId: 'navScrollLeft',
  btnDirId: 'navScrollRight',
  passo: 320,
  // ids e classes que as páginas usam para o botão "voltar ao topo"
  topoIds: ['backToTop', 'btt'],
  topoClasses: ['is-visible', 'show'],
  topoLimiar: 450
};

/* ─── voltar ao topo ─────────────────────────── */
function ligarVoltarAoTopo(cfg) {
  const botao = cfg.topoIds.map((id) => document.getElementById(id)).find(Boolean);
  if (!botao) return;

  // a página pode estilizar por `is-visible` ou por `show`: aplicamos as duas
  const alternar = () => {
    const visivel = window.scrollY > cfg.topoLimiar;
    cfg.topoClasses.forEach((c) => botao.classList.toggle(c, visivel));
  };

  window.addEventListener('scroll', alternar, { passive: true });
  botao.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  alternar();
}

/* ─── barra horizontal de seções ─────────────── */
function ligarBarraDeSecoes(cfg) {
  const barra = document.getElementById(cfg.barraId);
  const esq = document.getElementById(cfg.btnEsqId);
  const dir = document.getElementById(cfg.btnDirId);
  if (!barra || !esq || !dir) return null;

  const atualizar = () => {
    esq.classList.toggle('hidden', barra.scrollLeft <= 4);
    dir.classList.toggle('hidden', barra.scrollLeft + barra.clientWidth >= barra.scrollWidth - 4);
  };

  esq.addEventListener('click', () => barra.scrollBy({ left: -cfg.passo, behavior: 'smooth' }));
  dir.addEventListener('click', () => barra.scrollBy({ left: cfg.passo, behavior: 'smooth' }));
  barra.addEventListener('scroll', atualizar, { passive: true });

  atualizar();
  // o layout pode assentar depois das fontes carregarem
  setTimeout(atualizar, 400);
  return barra;
}

/* ─── âncoras com rolagem suave ──────────────── */
function ligarAncoras() {
  document.querySelectorAll('a[href^="#"]').forEach((ancora) => {
    ancora.addEventListener('click', (evento) => {
      const href = ancora.getAttribute('href');
      if (!href || href === '#') return;
      const alvo = document.querySelector(href);
      if (!alvo) return;
      evento.preventDefault();
      alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    });
  });
}

/* ─── scrollspy ──────────────────────────────── */
function ligarScrollspy(cfg, barra) {
  const secoes = Array.from(document.querySelectorAll(cfg.secoes));
  if (!secoes.length || !('IntersectionObserver' in window)) return;

  const linksNav = Array.from(document.querySelectorAll('.nav-link'));
  const linksSidebar = Array.from(document.querySelectorAll('.sidebar a'));

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      const alvo = '#' + entrada.target.id;
      linksNav.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === alvo));
      linksSidebar.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === alvo));

      // mantém o item ativo visível na barra horizontal
      const ativo = barra?.querySelector('.nav-link.active');
      if (ativo) ativo.scrollIntoView({ inline: 'nearest', block: 'nearest', behavior: 'smooth' });
    });
  }, { threshold: 0.15, rootMargin: '-100px 0px -55% 0px' });

  secoes.forEach((s) => observador.observe(s));
}

/**
 * Inicializa a navegação de uma página de trilha.
 * Todos os recursos são opcionais: ativam-se apenas se os
 * elementos correspondentes existirem.
 *
 * @param {object} [opcoes] sobrescreve os ids/limiares padrão
 */
export function initNav(opcoes = {}) {
  const cfg = { ...PADROES, ...opcoes };
  // fixa o seletor de seções conforme o que a página realmente usa
  cfg.secoes = resolveSeletorDeSecoes(cfg);

  const barra = ligarBarraDeSecoes(cfg);
  ligarVoltarAoTopo(cfg);
  ligarAncoras();
  ligarScrollspy(cfg, barra);
  ligarBuscaDeSecoes(cfg.buscaId, cfg.secoes);   // STUDY-036
}
