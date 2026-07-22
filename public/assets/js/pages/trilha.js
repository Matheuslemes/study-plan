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
import { initNav } from '../core/nav.js';
import { ligarChecklist } from '../features/checklist.js';
import { registrarServiceWorker } from '../core/pwa.js';

function iniciar() {
  registrarServiceWorker();
  // navegação vale para toda página de trilha, tenha roadmap ou não
  initNav();

  const trilha = document.body?.dataset?.track;

  // STUDY-051: os checkboxes de autoavaliação de financeiro.html agora persistem.
  // Seletor específico (.check-item) para não capturar os checkboxes de tópico
  // do roadmap, que têm persistência própria.
  if (trilha === 'fin') {
    ligarChecklist('financeiro', '.check-item input[type="checkbox"]');
  }

  // treino.html não tem conteúdo por fase: fica só com a navegação
  if (!trilha) return;
  renderTrackRoadmap('phaseRoadmap', trilha);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciar);
} else {
  iniciar();
}
