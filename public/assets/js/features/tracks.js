/* ═══════════════════════════════════════════════
   FEATURES / TRACKS — cards de trilha, biblioteca de PDFs e busca
═══════════════════════════════════════════════ */

import { CK, quickTracks } from '../../../data/tracks.js';
import { pdfDocuments, bibliografia, bibliografiaNotas } from '../../../data/pdfs.js';
import { normalizar, escapeHtml } from '../core/render.js';
import { filtrarCards, ligarBusca } from '../core/search.js';

export function renderQuickTrackCards() {
  const html = quickTracks.map(t => {
    const c = CK[t.key] || CK.n;
    const badgeRow = t.extraBadges
      ? `<div class="track-chip-row">${t.extraBadges.map(b => `<span class="track-chip" style="background:${b.color}18;color:${b.color};border:1px solid ${b.color}40">${b.label}</span>`).join('')}</div>`
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
export function renderPdfCards() {
  const container = document.getElementById('pdfCards');
  const counter = document.getElementById('pdfCounter');
  if (!container) return;
  if (counter) counter.textContent = `${pdfDocuments.length} PDFs disponíveis`;
  container.innerHTML = pdfDocuments.map(pdf => {
    const c = CK[pdf.key] || CK.n;
    const searchable = normalizeTrackTerm(`${pdf.title} ${pdf.area} ${pdf.level} ${pdf.desc} ${(pdf.tags || []).join(' ')}`);
    const tags = (pdf.tags || []).slice(0, 6).map(tag => `<span class="pdf-meta">${tag}</span>`).join('');
    return `<div class="col-12 col-sm-6 col-lg-4 pdf-card-item" data-pdf-card data-pdf-name="${searchable}">
  <article class="pdf-card" style="--pdf-color:${c.t};--pdf-bg:${c.b}">
    <div class="pdf-card-top">
      <div class="d-flex align-items-center gap-2">
        <div class="pdf-icon">PDF</div>
        <span class="pdf-chip">${pdf.area}</span>
      </div>
      <span class="pdf-chip">${pdf.level}</span>
    </div>
    <h6 class="pdf-title">${pdf.title}</h6>
    <p class="pdf-desc">${pdf.desc}</p>
    <div class="pdf-meta-row">${tags}</div>
    <a class="pdf-open-link" href="${pdf.file}" target="_blank" rel="noopener noreferrer">
      Abrir PDF em nova guia <span aria-hidden="true">↗</span>
    </a>
  </article>
</div>`;
  }).join('');
}

/**
 * STUDY-015 — bibliografia de livros comerciais.
 * Só referência: título, autor, área e fase. Nenhum PDF é hospedado.
 */
export function renderBibliografia() {
  const el = document.getElementById('bibliografiaList');
  if (!el) return;

  const porArea = bibliografia.reduce((acc, l) => {
    (acc[l.area] = acc[l.area] || []).push(l);
    return acc;
  }, {});

  const grupos = Object.entries(porArea).map(([area, livros]) => `
    <div class="biblio-group">
      <h6 class="biblio-area">${escapeHtml(area)} <span class="biblio-count">${livros.length}</span></h6>
      ${livros.map(l => `<div class="biblio-item">
        <div class="biblio-main">
          <span class="biblio-title">${escapeHtml(l.titulo)}</span>
          <span class="biblio-author">${escapeHtml(l.autor)}</span>
        </div>
        <div class="biblio-meta">
          <span class="biblio-phase">Fase ${l.fase}</span>
          <span class="biblio-prio biblio-prio-${l.prioridade.toLowerCase().replace(/[^a-z]/g, '')}">${escapeHtml(l.prioridade)}</span>
        </div>
      </div>`).join('')}
    </div>`).join('');

  el.innerHTML = `
    <div class="biblio-note">
      <strong>Os PDFs destes livros não são hospedados neste site.</strong> São obras comerciais protegidas por
      direitos autorais — aqui existe apenas a referência bibliográfica e a fase em que cada uma entra no plano.
      <ul class="biblio-rules">${bibliografiaNotas.map(n => `<li>${escapeHtml(n)}</li>`).join('')}</ul>
    </div>
    ${grupos}`;
}

export function setupPdfSearch() {
  ligarBusca({
    inputId: 'pdfSearchInput',
    seletor: '[data-pdf-card]',
    atributo: 'data-pdf-name',
    vaziosIds: ['pdfSearchEmpty']
  });
}

/* ─── Phase details ──────────────────────── */
