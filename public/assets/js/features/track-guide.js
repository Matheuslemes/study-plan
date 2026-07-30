/*
 * FEATURES / TRACK GUIDE — contrato didático da trilha (DIDATIC-005/006)
 *
 * Expõe, antes do conteúdo de consulta, as condições de entrada,
 * o resultado esperado e a régua observável de conclusão da trilha.
 */

import { guiaDaTrilha } from '../../../data/track-guides.js';
import { escapeHtml } from '../core/render.js';

const lista = (itens) => itens
  .map((item) => `<li><span aria-hidden="true"></span>${escapeHtml(item)}</li>`)
  .join('');

export function renderTrackGuide(trilha) {
  const guia = guiaDaTrilha(trilha);
  if (!guia || document.querySelector('[data-track-guide]')) return false;

  const destino = document.querySelector('.main > .content') || document.querySelector('main.content');
  if (!destino) return false;

  const secao = document.createElement('section');
  secao.className = 'doc-section ac-contract searchable-section';
  secao.dataset.trackGuide = '';
  secao.dataset.searchSection = '';
  secao.setAttribute('aria-labelledby', 'ac-contract-title');
  secao.innerHTML = `
    <header class="ac-contract__header">
      <div>
        <span class="ac-eyebrow">Contrato da trilha</span>
        <h2 id="ac-contract-title">${escapeHtml(guia.nome)}</h2>
      </div>
      <p>Use esta régua para decidir quando começar, o que produzir e quando considerar a trilha concluída.</p>
    </header>
    <div class="ac-contract__flow">
      <article class="ac-contract__stage ac-contract__stage--entry">
        <span class="ac-contract__step">01 · Entrada</span>
        <h3>Pré-requisitos</h3>
        <ul>${lista(guia.prerequisitos)}</ul>
      </article>
      <article class="ac-contract__stage ac-contract__stage--outcome">
        <span class="ac-contract__step">02 · Resultado</span>
        <h3>Objetivos</h3>
        <ul>${lista(guia.objetivos)}</ul>
      </article>
      <article class="ac-contract__stage ac-contract__stage--exit">
        <span class="ac-contract__step">03 · Saída</span>
        <h3>Critérios de conclusão</h3>
        <ul>${lista(guia.criterios)}</ul>
      </article>
    </div>`;

  destino.prepend(secao);
  return true;
}
