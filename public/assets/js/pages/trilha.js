/* ═══════════════════════════════════════════════
   PAGES / TRILHA — ponto de entrada das páginas de trilha

   A página declara sua identidade no <body data-track="...">.
   Este módulo lê essa chave e injeta o roadmap de 12 fases
   vindo de data/phases.js.

   A navegação (busca por seção, scrollspy, back-to-top,
   barra horizontal) vem de core/nav.js — as 14 IIFEs inline
   que faziam isso foram removidas (STUDY-035/036).
═══════════════════════════════════════════════ */

import { renderTrackRoadmap } from '../features/track-roadmap.js';
import { renderTrackGuide } from '../features/track-guide.js';
import { renderTrackExercises } from '../features/track-exercises.js';
import { initNav } from '../core/nav.js?v=2';
import { ligarChecklist } from '../features/checklist.js';
import { registrarServiceWorker } from '../core/pwa.js';

function iniciar() {
  registrarServiceWorker();

  const trilha = document.body?.dataset?.track;
  const buscaDaTrilha = document.getElementById('searchInput');
  if (buscaDaTrilha && !buscaDaTrilha.hasAttribute('aria-label')
      && !buscaDaTrilha.hasAttribute('aria-labelledby')) {
    buscaDaTrilha.setAttribute('aria-label', 'Buscar nesta trilha');
  }

  // STUDY-051: os checkboxes de autoavaliação de financeiro.html agora persistem.
  // Seletor específico (.check-item) para limitar a persistência à autoavaliação
  // financeira; os objetivos do roadmap têm seu próprio modelo de domínio.
  if (trilha === 'fin') {
    ligarChecklist('financeiro', '.check-item input[type="checkbox"]');
  }

  if (!trilha) {
    initNav();
    return;
  }

  renderTrackGuide(trilha);
  renderTrackExercises(trilha);
  // treino.html não tem conteúdo por fase, mas também recebe seu contrato didático.
  renderTrackRoadmap('phaseRoadmap', trilha);

  // Observa a estrutura já estabilizada: contrato e exercícios são inseridos
  // antes da primeira seção e alteram a posição das âncoras.
  initNav();
  if (location.hash) {
    const alvoInicial = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    requestAnimationFrame(() => alvoInicial?.scrollIntoView({ block: 'start', behavior: 'instant' }));
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciar);
} else {
  iniciar();
}
