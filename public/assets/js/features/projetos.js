import { projetos } from '../../../data/projetos.js?v=portfolio-11';
/* ═══════════════════════════════════════════════
   FEATURES / PROJETOS — catálogo compartilhado pelas sequências de estudo.
═══════════════════════════════════════════════ */

import { escapeHtml } from '../core/render.js';

export function renderProjetos(alvoId = 'projetosView') {
  const el = document.getElementById(alvoId);
  if (!el) return;

  const categorias = new Map();
  for (const p of projetos) {
    if (!categorias.has(p.categoria)) categorias.set(p.categoria, []);
    categorias.get(p.categoria).push(p);
  }

  const card = (p) => `
    <article class="proj-card" data-track="${escapeHtml(p.track)}">
      <div class="proj-card-top">
        <span class="proj-track">${escapeHtml(p.trackLabel)}</span>
        <span class="proj-fase-chip">Implementação não iniciada</span>
      </div>
      <h6 class="proj-titulo">${escapeHtml(p.titulo)}</h6>
      <p class="proj-resumo">${escapeHtml(p.resumo)}</p>
      <p class="proj-desc">${escapeHtml(p.descricao)}</p>
      <div class="proj-bloco">
        <span class="proj-bloco-lab">Entregáveis previstos</span>
        <ul>${p.entregaveis.map((e) => `<li>${escapeHtml(e)}</li>`).join('')}</ul>
      </div>
      <div class="proj-bloco">
        <span class="proj-bloco-lab">Pasta de origem</span>
        <p>${escapeHtml(p.pasta)}</p>
      </div>
      <div class="proj-tags">${p.competencias.map((c) => `<span class="proj-tag">${escapeHtml(c)}</span>`).join('')}</div>
      ${p.pagina ? `<a class="proj-guide-link" href="${escapeHtml(p.pagina)}" aria-label="Abrir documentação: ${escapeHtml(p.titulo)}">Abrir documentação →</a>` : ''}
    </article>`;

  el.innerHTML = `
    <p class="proj-intro text-muted small">${projetos.length} projetos da pasta project-ideias/portfolio, organizados por área.
      A documentação descreve o escopo planejado; os entregáveis ainda serão implementados.</p>
    ${[...categorias].map(([categoria, itens]) => `
      <section class="proj-fase">
        <h5 class="proj-fase-titulo">${escapeHtml(categoria)}
          <span class="proj-fase-count">${itens.length}</span></h5>
        <div class="proj-grid">${itens.map(card).join('')}</div>
      </section>`).join('')}`;
}
