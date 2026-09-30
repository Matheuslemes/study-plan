import { DEPENDENCIAS_CURRICULO, TRILHAS_TRANSVERSAIS } from '../core/study-context.js';
/*
 * FEATURES / DEPENDENCY MAP — mapa visual do encadeamento (DIDATIC-023)
 */

import { escapeHtml } from '../core/render.js';

export function renderDependencyMap(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = `
    <section class="dependency-map" aria-labelledby="dependency-map-title">
      <header class="dependency-map__header">
        <div>
          <span class="dependency-map__eyebrow">Mapa de dependências</span>
          <h5 id="dependency-map-title">Cada bloco desbloqueia o próximo</h5>
        </div>
        <p>A ordem não é cronológica por conveniência: cada etapa depende de evidência produzida na anterior.</p>
      </header>
      <div class="dependency-map__rail">
        ${DEPENDENCIAS_CURRICULO.map((etapa, indice) => `
          <article class="dependency-node" data-dependency="${escapeHtml(etapa.id)}">
            <div class="dependency-node__phase">${escapeHtml(etapa.fases)}</div>
            <h6>${escapeHtml(etapa.titulo)}</h6>
            <ul>${etapa.itens.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
            ${indice < DEPENDENCIAS_CURRICULO.length - 1
              ? '<span class="dependency-node__arrow" aria-hidden="true">→</span>'
              : '<span class="dependency-node__finish">Release</span>'}
          </article>`).join('')}
      </div>
      <div class="dependency-map__transversal">
        <span>Transversais da sequência</span>
        <div>${TRILHAS_TRANSVERSAIS.map((item) => `<b>${escapeHtml(item)}</b>`).join('')}</div>
      </div>
    </section>`;
}
