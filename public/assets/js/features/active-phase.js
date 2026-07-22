/* ═══════════════════════════════════════════════
   FEATURES / ACTIVE-PHASE — a fase ativa comanda a rotina (STUDY-020)

   Fluxo:
     fase atual (persistida)
        ↓
     phases.js informa quais trilhas estão ativas e o conteúdo de cada uma
        ↓
     a grade da rotina é anotada: cada bloco mostra o que aquele slot
     significa NA FASE CORRENTE, e blocos de trilha inativa são marcados

   Sem isso, a rotina seria uma grade genérica — que foi exatamente o
   problema diagnosticado: dois planos incompatíveis na mesma página.
═══════════════════════════════════════════════ */

import { P, conteudoDaFase, trilhaAtiva, faseDeEntrada, chaveTrilha } from '../../../data/phases.js';
import { ler, gravar } from '../core/storage.js';
import { escapeHtml } from '../core/render.js';

const CHAVE = 'faseAtual';

/** Fase atualmente selecionada (1–12). Padrão: 1. */
export function getFaseAtual() {
  const id = Number(ler(CHAVE, 1));
  return P.some((p) => p.id === id) ? id : 1;
}

/** Define a fase atual e persiste. */
export function setFaseAtual(id) {
  const n = Number(id);
  if (!P.some((p) => p.id === n)) return getFaseAtual();
  gravar(CHAVE, n);
  return n;
}

/** Objeto da fase atualmente selecionada. */
export const faseAtual = () => P.find((p) => p.id === getFaseAtual());

/**
 * Contexto de um bloco da rotina dentro da fase corrente.
 * Retorna null quando o bloco não pertence a uma trilha (sono, pausa, treino).
 */
export function contextoDoBloco(bloco, fase) {
  const NAO_TRILHA = ['sleep', 'break', 'cardio', 'strength', 'dinner', 'buffer', 'closing', 'review'];
  if (!bloco || NAO_TRILHA.includes(bloco.type)) return null;

  const k = chaveTrilha(bloco.k);
  const ativa = trilhaAtiva(fase, k);
  const itens = conteudoDaFase(fase, k);

  return {
    trilha: k,
    ativa,
    conteudo: ativa && itens.length ? itens[0] : null,
    entraNaFase: ativa ? null : faseDeEntrada(k)
  };
}

/** Selo HTML com o conteúdo da fase para um bloco, ou aviso de trilha inativa. */
export function seloDaFase(bloco, fase) {
  const ctx = contextoDoBloco(bloco, fase);
  if (!ctx) return '';

  if (!ctx.ativa) {
    const destino = ctx.entraNaFase ? `entra na Fase ${ctx.entraNaFase}` : 'sem conteúdo nesta fase';
    return `<div class="phase-slot phase-slot-off">
      <span class="phase-slot-tag">Inativa na Fase ${fase.id}</span>
      <span class="phase-slot-text">Esta trilha ${destino}. Se o bloco cair hoje, use-o para reforçar o domínio principal da fase.</span>
    </div>`;
  }

  if (!ctx.conteudo) return '';
  return `<div class="phase-slot">
    <span class="phase-slot-tag">Na Fase ${fase.id}</span>
    <span class="phase-slot-text">${escapeHtml(ctx.conteudo)}</span>
  </div>`;
}

/** Seletor de fase. Chama `aoMudar(id)` a cada troca. */
export function renderSeletorDeFase(containerId, aoMudar) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const atual = getFaseAtual();

  el.innerHTML = `
    <div class="phase-picker">
      <label class="phase-picker-label" for="faseAtualSelect">Fase atual</label>
      <select id="faseAtualSelect" class="phase-picker-select" aria-label="Selecionar a fase atual do plano">
        ${P.map((p) => `<option value="${p.id}"${p.id === atual ? ' selected' : ''}>Fase ${p.id} · ${escapeHtml(p.t)}</option>`).join('')}
      </select>
      <span class="phase-picker-hint" id="faseAtualHint"></span>
    </div>`;

  const atualizarHint = (id) => {
    const f = P.find((p) => p.id === id);
    const hint = document.getElementById('faseAtualHint');
    if (!hint || !f) return;
    const ativas = ['java', 'db', 'devops', 'sec', 'arquitetura', 'frontend', 'py', 'ia', 'aws']
      .filter((k) => trilhaAtiva(f, k)).length;
    hint.textContent = `${f.w} · ${ativas} trilhas técnicas ativas`;
  };

  atualizarHint(atual);
  document.getElementById('faseAtualSelect')?.addEventListener('change', (e) => {
    const id = setFaseAtual(e.target.value);
    atualizarHint(id);
    if (aoMudar) aoMudar(id);
  });
}
