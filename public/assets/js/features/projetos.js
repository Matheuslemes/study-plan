/* ═══════════════════════════════════════════════
   FEATURES / PROJETOS — projetos de portfólio por trilha × fase.
   Cada projeto é autocontido; agrupados por fase.
═══════════════════════════════════════════════ */

import { projetos } from '../../../data/projetos.js';
import { escapeHtml } from '../core/render.js';

export function renderProjetos(alvoId = 'projetosView') {
  const el = document.getElementById(alvoId);
  if (!el) return;

  // Agrupa por fase preservando a ordem do arquivo.
  const fases = [];
  let atual = null;
  for (const p of projetos) {
    if (!atual || atual.fase !== p.fase) { atual = { fase: p.fase, faseLabel: p.faseLabel, itens: [] }; fases.push(atual); }
    atual.itens.push(p);
  }

  const card = (p) => `
    <article class="proj-card" data-track="${escapeHtml(p.track)}">
      <div class="proj-card-top">
        <span class="proj-track">${escapeHtml(p.trackLabel)}</span>
        <span class="proj-fase-chip">Fase ${p.fase}</span>
      </div>
      <h6 class="proj-titulo">${escapeHtml(p.titulo)}</h6>
      <p class="proj-resumo">${escapeHtml(p.resumo)}</p>
      <p class="proj-desc">${escapeHtml(p.descricao)}</p>
      <div class="proj-bloco">
        <span class="proj-bloco-lab">Entregáveis</span>
        <ul>${p.entregaveis.map((e) => `<li>${escapeHtml(e)}</li>`).join('')}</ul>
      </div>
      <div class="proj-bloco">
        <span class="proj-bloco-lab">Evidência</span>
        <p>${escapeHtml(p.evidencia)}</p>
      </div>
      <div class="proj-tags">${p.competencias.map((c) => `<span class="proj-tag">${escapeHtml(c)}</span>`).join('')}</div>
    </article>`;

  el.innerHTML = `
    <p class="proj-intro text-muted small">Um projeto independente por trilha curricular, na sua fase de foco.
      Cada um é um repositório separado, com evidência própria — não dependem uns dos outros. Transversais
      (Git, Inglês, Matemática, Financeiro, DSA) seguem como prática diária, sem projeto por fase.</p>
    ${fases.map((f) => `
      <section class="proj-fase">
        <h5 class="proj-fase-titulo"><span class="proj-fase-num">Fase ${f.fase}</span> ${escapeHtml(f.faseLabel)}
          <span class="proj-fase-count">${f.itens.length}</span></h5>
        <div class="proj-grid">${f.itens.map(card).join('')}</div>
      </section>`).join('')}`;
}
