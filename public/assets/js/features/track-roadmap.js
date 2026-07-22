/* ═══════════════════════════════════════════════
   FEATURES / TRACK-ROADMAP — roadmap de 12 fases por trilha (STUDY-003)

   As páginas de trilha tinham o roadmap escrito à mão, no modelo
   antigo de 8 fases / 64 semanas. Cada mudança no plano exigia
   editar 14 arquivos — e por isso elas nunca foram atualizadas.

   Agora o roadmap é renderizado a partir de data/phases.js:
   a página só declara qual trilha é, e o conteúdo vem da fonte única.
═══════════════════════════════════════════════ */

import { P, conteudoDaFase, trilhaAtiva, faseDeEntrada, chaveTrilha } from '../../../data/phases.js';
import { CK, trilhasRelacionadas, ARQUIVO_TRILHA, NOME_TRILHA } from '../../../data/tracks.js';
import { PC } from '../../../data/config.js';
import { escapeHtml } from '../core/render.js';
import { idTopico, estaConcluido, definirConcluido, progressoTrilha } from './progress.js';
import { registrarEstudo, removerDaFila } from './review.js';

/** Bloco "Trilhas relacionadas" (STUDY-057). */
export function htmlRelacionadas(trilha) {
  const k = chaveTrilha(trilha);
  const ligadas = (trilhasRelacionadas[k] || []).filter((r) => ARQUIVO_TRILHA[r]);
  if (!ligadas.length) return '';
  return `<div class="related-tracks">
    <span class="related-label">Trilhas relacionadas</span>
    <div class="related-links">
      ${ligadas.map((r) => {
        const cor = (CK[r] || CK.n).t;
        return `<a class="related-chip" href="./${ARQUIVO_TRILHA[r]}.html" style="--rel-color:${cor}">
          <span class="related-arrow" aria-hidden="true">→</span>${escapeHtml(NOME_TRILHA[r] || r)}</a>`;
      }).join('')}
    </div>
  </div>`;
}

/** Nome legível de cada trilha, para o cabeçalho do roadmap. */
const NOMES = {
  java: 'Java + Spring', dsa: 'Algoritmos e Estruturas de Dados', db: 'Banco de Dados',
  git: 'Git & Versionamento', arquitetura: 'Arquitetura', devops: 'DevOps / CI-CD',
  sec: 'Segurança', pratica: 'Prática e exercícios', frontend: 'Frontend',
  py: 'Python', ia: 'IA Engineering', math: 'Matemática', fin: 'Financeiro',
  ingles: 'Inglês Técnico', aws: 'AWS'
};

/**
 * Renderiza o roadmap completo de uma trilha nas 12 fases.
 * @param {string} containerId  id do elemento destino
 * @param {string} trilha       chave da trilha (aceita os aliases das páginas)
 */
export function renderTrackRoadmap(containerId, trilha) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const k = chaveTrilha(trilha);
  const cor = (CK[k] || CK.n).t;
  const entrada = faseDeEntrada(k);

  const cards = P.map((p, i) => {
    const ativa = trilhaAtiva(p, k);
    const itens = conteudoDaFase(p, k);
    const corFase = PC[i] || cor;

    const corpo = ativa
      ? `<ul class="roadmap-list roadmap-check">${itens.map((t, idx) => {
          const id = idTopico(k, p.id, idx);
          const feito = estaConcluido(id);
          return `<li class="${feito ? 'is-done' : ''}">
            <label class="topic-check">
              <input type="checkbox" data-topic="${id}"${feito ? ' checked' : ''}>
              <span>${escapeHtml(t)}</span>
            </label>
          </li>`;
        }).join('')}</ul>`
      : `<p class="roadmap-off">Trilha inativa nesta fase${entrada ? ` — entra na Fase ${entrada}` : ''}. Não ocupa blocos da rotina.</p>`;

    const cert = k === 'aws' && p.aws?.cert
      ? `<span class="roadmap-cert">${escapeHtml(p.aws.cert)}</span>` : '';

    return `<article class="roadmap-card${ativa ? '' : ' is-off'}" style="--roadmap-color:${corFase}">
      <header class="roadmap-head">
        <div>
          <span class="roadmap-phase">Fase ${p.id}</span>
          <span class="roadmap-weeks">${escapeHtml(p.w)}</span>
        </div>
        <span class="roadmap-hours">${p.h}h</span>
      </header>
      <h3 class="roadmap-title">${escapeHtml(p.t)}</h3>
      ${cert}
      ${corpo}
    </article>`;
  }).join('');

  const prog = progressoTrilha(k);

  el.innerHTML = `
    <p class="roadmap-intro">
      Progressão de <strong>${escapeHtml(NOMES[k] || k)}</strong> ao longo das 12 fases do plano
      (36 meses · 156 semanas · ~6.000h). Este bloco é renderizado a partir de
      <code>data/phases.js</code> — a mesma fonte que alimenta o dashboard, então nunca fica dessincronizado.
      ${entrada && entrada > 1 ? `<br><strong>Esta trilha entra na Fase ${entrada}.</strong> Antes disso ela não ocupa espaço na rotina diária.` : ''}
    </p>
    ${prog.total ? `<div class="roadmap-progress" id="roadmapProgress">
      <div class="roadmap-progress-head">
        <span>Seu progresso nesta trilha</span>
        <span class="roadmap-progress-num" style="color:${cor}">${prog.pct}% <span class="prog-frac">${prog.feitos}/${prog.total}</span></span>
      </div>
      <div class="prog-track"><div class="prog-fill" style="width:${prog.pct}%;background:${cor}"></div></div>
      <p class="roadmap-progress-hint">Marque os tópicos concluídos. Cada um entra na fila de revisão D1/D7/D30 e conta no progresso do dashboard.</p>
    </div>` : ''}
    <div class="roadmap-grid">${cards}</div>
    ${htmlRelacionadas(k)}`;

  // marcar/desmarcar tópico: persiste, agenda revisão e atualiza a barra
  el.addEventListener('change', (e) => {
    const cb = e.target.closest('[data-topic]');
    if (!cb) return;
    const id = cb.dataset.topic;
    definirConcluido(id, cb.checked);
    if (cb.checked) registrarEstudo(id); else removerDaFila(id);
    cb.closest('li')?.classList.toggle('is-done', cb.checked);
    atualizarBarra(el, k, cor);
  });
}

function atualizarBarra(el, trilha, cor) {
  const prog = progressoTrilha(trilha);
  const num = el.querySelector('.roadmap-progress-num');
  const fill = el.querySelector('.roadmap-progress .prog-fill');
  if (num) num.innerHTML = `${prog.pct}% <span class="prog-frac">${prog.feitos}/${prog.total}</span>`;
  if (fill) fill.style.width = prog.pct + '%';
}
