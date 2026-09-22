/* ═══════════════════════════════════════════════
   FEATURES / TRACKS — cards de trilha, biblioteca de PDFs e busca
═══════════════════════════════════════════════ */

import { CK, quickTracks } from '../../../data/tracks.js';
import { bibliografiaNotas } from '../../../data/pdfs.js';
import { biblioteca } from '../../../data/biblioteca.js';
import { normalizar, escapeHtml } from '../core/render.js';
import { resolvePublicUrl } from '../core/public-url.js';
import { filtrarCards, ligarBusca } from '../core/search.js';

export function renderQuickTrackCards() {
  const html = quickTracks.map(t => {
    const c = CK[t.key] || CK.n;
    const badgeRow = t.extraBadges
      ? `<div class="track-chip-row">${t.extraBadges.map(b => `<span class="track-chip">${b.label}</span>`).join('')}</div>`
      : '';
    return `<div class="col-12 col-sm-6 col-lg-3 track-card-item" data-track-card data-track-name="${(t.label + ' ' + (t.extraBadges || []).map(b => b.label).join(' ')).toLowerCase()}" data-track-key="${t.key}">
  <a class="quick-track-card" href="${t.href}"
     style="--track-color:${c.t};--track-bg:${c.b}">
    <span class="quick-chip">${t.badge}</span>
    <h6 class="quick-title">${t.label}</h6>
    ${badgeRow}
    <p class="quick-desc">${t.desc}</p>
    <span class="quick-link">Abrir trilha <span aria-hidden="true">→</span></span>
  </a>
</div>`;
  }).join('');
  const full = document.getElementById('quickTrackCards');
  const home = document.getElementById('quickTrackCardsHome');
  if (full) full.innerHTML = html;
  if (home) home.innerHTML = html;
}


// mantido como alias: o render usa este nome ao montar data-track-name/data-pdf-name
export const normalizeTrackTerm = normalizar;

const BUSCA_TRILHAS = {
  seletor: '[data-track-card]',
  atributo: 'data-track-name',
  vaziosIds: ['trackSearchEmptyHome', 'trackSearchEmptyQuick']
};

export function filterTrackCardsByName(term) {
  return filtrarCards(BUSCA_TRILHAS, term);
}

export function setupNavbarTrackSearch() {
  const input = document.getElementById('trackSearchInput');
  if (!input) return;
  const quickTabTrigger = document.querySelector('a[href="#tabQuick"]');
  input.addEventListener('input', e => {
    const value = e.target.value;
    filterTrackCardsByName(value);
    if (value.trim() && quickTabTrigger) {
      bootstrap.Tab.getOrCreateInstance(quickTabTrigger).show();
    }
  });
}

/* ─── PDF library cards ───────────────────── */
/**
 * BIBLIOTECA — catálogo completo de livros do plano (data/biblioteca.js),
 * já ordenado por tema → fase → importância. Nenhum PDF é hospedado.
 */
function statusLivro(status) {
  if (status === 'online') return '<span class="biblio-status is-online" title="Curso online gratuito">online</span>';
  if (status === 'ausente') return '<span class="biblio-status is-ausente" title="A adquirir">a adquirir</span>';
  return '<span class="biblio-status is-presente" title="No acervo">no acervo</span>';
}

export function renderBibliografia() {
  const el = document.getElementById('bibliografiaList');
  if (!el) return;

  const counter = document.getElementById('pdfCounter');
  const presentes = biblioteca.filter(l => l.status === 'presente').length;
  if (counter) counter.textContent = `${biblioteca.length} livros · ${presentes} no acervo`;

  // A lista já vem ordenada por tema → fase → importância; agrupa preservando a ordem.
  const grupos = [];
  let atual = null;
  for (const l of biblioteca) {
    if (!atual || atual.tema !== l.tema) { atual = { tema: l.tema, livros: [] }; grupos.push(atual); }
    atual.livros.push(l);
  }

  const listaHtml = grupos.map(g => `
    <section class="biblio-group" data-biblio-group>
      <h5 class="biblio-area">${escapeHtml(g.tema)} <span class="biblio-count">${g.livros.length}</span></h5>
      ${g.livros.map(l => {
        const busca = normalizar(`${l.titulo} ${l.autor} ${l.tema} ${l.prioridade} ${l.fase}`);
        const link = l.path ? resolvePublicUrl(l.path) : (l.url || '');
        const tag = link ? 'a' : 'div';
        const attrs = link ? ` href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer"` : '';
        return `<${tag} class="biblio-item${link ? ' is-linked' : ''}"${attrs} data-biblio-card data-biblio-name="${escapeHtml(busca)}">
        <div class="biblio-main">
          <span class="biblio-title">${escapeHtml(l.titulo)}${l.gratis ? ' <span class="biblio-free" title="Gratuito/oficial">🆓</span>' : ''}</span>
          <span class="biblio-author">${escapeHtml(l.autor)}${l.ano ? ` · ${escapeHtml(l.ano)}` : ''}</span>
          ${l.nota ? `<span class="biblio-nota">${escapeHtml(l.nota)}</span>` : ''}
          ${l.alerta ? `<span class="biblio-alerta" role="alert">${escapeHtml(l.alerta)}</span>` : ''}
        </div>
        <div class="biblio-meta">
          <span class="biblio-phase">${escapeHtml(l.fase)}</span>
          <span class="biblio-prio biblio-prio-${l.prioridade.toLowerCase().replace(/[^a-z]/g, '')}">${escapeHtml(l.prioridade)}</span>
          ${statusLivro(l.status)}
          ${link ? '<span class="biblio-open" aria-hidden="true">↗</span>' : ''}
        </div>
      </${tag}>`;
      }).join('')}
    </section>`).join('');

  el.innerHTML = `
    <div class="biblio-note">
      <strong>Clique em um livro para abrir o PDF.</strong> Acervo pessoal de estudo — obras protegidas por
      direitos autorais; use apenas para leitura própria e não redistribua. Ordenado por tema, fase e importância.
      <ul class="biblio-rules">${bibliografiaNotas.map(n => `<li>${escapeHtml(n)}</li>`).join('')}</ul>
    </div>
    ${listaHtml}`;
}

export function setupPdfSearch() {
  ligarBusca({
    inputId: 'pdfSearchInput',
    seletor: '[data-biblio-card]',
    atributo: 'data-biblio-name',
    vaziosIds: ['pdfSearchEmpty'],
    aoBuscar: () => {
      document.querySelectorAll('[data-biblio-group]').forEach((g) => {
        const algum = g.querySelector('[data-biblio-card]:not(.is-hidden-by-search)');
        g.classList.toggle('is-hidden-by-search', !algum);
      });
    }
  });
}

/* ─── Phase details ──────────────────────── */
