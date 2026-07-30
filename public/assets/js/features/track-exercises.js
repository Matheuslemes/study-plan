/*
 * FEATURES / TRACK EXERCISES — banco de prática por trilha (DIDATIC-016)
 */

import { exerciciosDaTrilha } from '../../../data/track-exercises.js';
import { escapeHtml } from '../core/render.js';

export function renderTrackExercises(trilha) {
  const exercicios = exerciciosDaTrilha(trilha);
  const contrato = document.querySelector('[data-track-guide]');
  if (!contrato || !exercicios.length || document.querySelector('[data-track-exercises]')) return false;

  const secao = document.createElement('section');
  secao.className = 'doc-section ac-practice searchable-section';
  secao.dataset.trackExercises = '';
  secao.dataset.searchSection = '';
  secao.setAttribute('aria-labelledby', 'ac-practice-title');
  secao.innerHTML = `
    <header class="ac-practice__header">
      <div>
        <span class="ac-eyebrow">Prática verificável</span>
        <h2 id="ac-practice-title">Exercícios para produzir evidência</h2>
      </div>
      <p>Não marque como concluído: execute, verifique e guarde o artefato.</p>
    </header>
    <div class="ac-practice__list">
      ${exercicios.map((exercicio, indice) => `
        <article class="ac-practice__item">
          <div class="ac-practice__index" aria-hidden="true">${String(indice + 1).padStart(2, '0')}</div>
          <div class="ac-practice__body">
            <span class="ac-practice__type">${escapeHtml(exercicio.tipo)}</span>
            <h3>${escapeHtml(exercicio.titulo)}</h3>
            <p>${escapeHtml(exercicio.tarefa)}</p>
          </div>
          <div class="ac-practice__proof">
            <span>Evidência</span>
            <p>${escapeHtml(exercicio.evidencia)}</p>
          </div>
        </article>`).join('')}
    </div>`;

  contrato.insertAdjacentElement('afterend', secao);
  return true;
}
