/* ═══════════════════════════════════════════════
   FEATURES / TODAY — a view "Hoje" (STUDY-046)

   A informação mais importante do painel: o que estudar HOJE.
   Cruza três fontes:
     · o dia da semana (relógio do navegador)
     · a fase ativa (active-phase) → o que cada trilha significa agora
     · a fila de revisão (review) → quantas revisões vencem hoje

   Transforma o dashboard de enciclopédia em painel de execução.
═══════════════════════════════════════════════ */

import { P, conteudoDaFase, chaveTrilha } from '../../../data/phases.js';
import { weeklyFocusByDay, dailyPlansByDay, weekDays } from '../../../data/routine.js';
import { CK } from '../../../data/tracks.js';
import { escapeHtml } from '../core/render.js';
import { getFaseAtual } from './active-phase.js';
import { revisoesDeHoje } from './review.js';
import { progressoGlobal } from './progress.js';

// getDay(): 0=domingo … 6=sábado → chaves do routine.js
const CHAVE_DIA = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];

const cor = (k) => (CK[chaveTrilha(k)] || CK.n).t;

/** Primeiro conteúdo da trilha `k` na fase, ou null se inativa. */
function conteudoAtivo(fase, k) {
  const itens = conteudoDaFase(fase, chaveTrilha(k));
  if (!itens.length) return null;
  if (/^Trilha inativa/.test(itens[0])) return null;
  return itens[0];
}

/** Bloco de destaque: rótulo, domínio, conteúdo da fase. */
function blocoInfo(bloco, fase, rotulo) {
  if (!bloco) return null;
  const conteudo = conteudoAtivo(fase, bloco.k);
  return {
    rotulo,
    dominio: bloco.block,
    cor: cor(bloco.k),
    tracks: (bloco.tracks || []).slice(0, 4),
    conteudo
  };
}

export function renderHoje(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const hojeKey = CHAVE_DIA[new Date().getDay()];
  const diaLabel = (weekDays.find((d) => d.key === hojeKey) || {}).label || 'Hoje';
  const foco = weeklyFocusByDay[hojeKey];
  const blocos = dailyPlansByDay[hojeKey] || [];
  const faseId = getFaseAtual();
  const fase = P.find((p) => p.id === faseId);

  const ehDescanso = hojeKey === 'domingo';

  // classifica os blocos técnicos do dia
  const principal = blocos.find((b) => b.kind === 'foco profundo' && b.type !== 'testing')
    || blocos.find((b) => b.kind === 'foco profundo');
  const complementar = blocos.find((b) => b.kind === 'complementar');
  const transversal = blocos.find((b) => b.type === 'dsa') || blocos.find((b) => b.type === 'english');

  const destaques = [
    blocoInfo(principal, fase, 'Principal'),
    blocoInfo(complementar, fase, 'Complementar'),
    blocoInfo(transversal, fase, transversal?.type === 'dsa' ? 'Algoritmos (DSA)' : 'Inglês')
  ].filter(Boolean);

  const revisoes = revisoesDeHoje().length;
  const g = progressoGlobal();

  el.innerHTML = `
    <div class="today-head">
      <div>
        <span class="today-eyebrow">Hoje · ${new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' })}</span>
        <h2 class="today-day">${diaLabel}</h2>
      </div>
      ${fase ? `<div class="today-phase" style="--phase-color:${cor('java')}">
        <span class="today-phase-tag">Fase ${fase.id}</span>
        <span class="today-phase-title">${escapeHtml(fase.t)}</span>
        <span class="today-phase-week mono">${escapeHtml(fase.w)}</span>
      </div>` : ''}
    </div>

    ${ehDescanso ? `
      <div class="today-rest">
        <strong>🌴 Domingo é descanso real.</strong>
        <p>${escapeHtml(foco?.strategy || 'Máximo 1h de revisão leve. Sem conteúdo novo, sem projeto. A folga semanal é o que torna 156 semanas possíveis.')}</p>
      </div>` : `
      <div class="today-focus">${escapeHtml(foco?.focus || '')}</div>
      <div class="today-grid">
        ${destaques.map((d) => `
          <div class="today-card" style="--tcard:${d.cor}">
            <span class="today-card-label">${d.rotulo}</span>
            <div class="today-card-domain">${escapeHtml(d.dominio)}</div>
            ${d.conteudo
              ? `<p class="today-card-content">${escapeHtml(d.conteudo)}</p>`
              : `<p class="today-card-content today-card-off">Esta trilha ainda não está ativa na Fase ${faseId}. Use o bloco para reforçar o domínio principal.</p>`}
            ${d.tracks.length ? `<div class="today-card-tracks">${d.tracks.map((t) => `<span>${escapeHtml(t)}</span>`).join('')}</div>` : ''}
          </div>`).join('')}
      </div>`}

    <div class="today-footer">
      <a class="today-stat" href="#tabProgress" data-bs-toggle="pill">
        <span class="today-stat-num" style="color:${revisoes ? 'var(--accent-orange)' : 'var(--accent)'}">${revisoes}</span>
        <span class="today-stat-label">revisão(ões) para hoje</span>
      </a>
      <a class="today-stat" href="#tabProgress" data-bs-toggle="pill">
        <span class="today-stat-num">${g.pct}%</span>
        <span class="today-stat-label">progresso geral · ${g.feitos}/${g.total} tópicos</span>
      </a>
      <a class="today-stat" href="#tabDaily" data-bs-toggle="pill">
        <span class="today-stat-num">▸</span>
        <span class="today-stat-label">ver a rotina completa do dia</span>
      </a>
    </div>`;
}
