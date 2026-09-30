import { refreshContext, sequenceKey, P, conteudoDaFase, trilhaAtiva, faseDeEntrada, chaveTrilha } from '../core/study-context.js';
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

import { ler, gravar } from '../core/storage.js';
import { escapeHtml } from '../core/render.js';

const CHAVE = 'faseAtual';

// Nome legível de cada trilha para o selo "o que estudar" nos horários da rotina.
const NOME_TRILHA = {
  java: 'Java', db: 'Banco de dados', dsa: 'Algoritmos e estruturas', arquitetura: 'Arquitetura',
  devops: 'DevOps', sec: 'Segurança', ingles: 'Inglês técnico', pratica: 'Prática', review: 'Revisão',
  frontend: 'Frontend', py: 'Python', ia: 'IA', math: 'Matemática', fin: 'Financeiro', aws: 'AWS'
};

/** Fase atualmente selecionada (1–12). Padrão: 1. */
export function getFaseAtual() {
  const id = Number(ler(sequenceKey(CHAVE), 1));
  return P.some((p) => p.id === id) ? id : 1;
}

/** Define a fase atual e persiste. */
export function setFaseAtual(id) {
  const n = Number(id);
  if (!P.some((p) => p.id === n)) return getFaseAtual();
  gravar(sequenceKey(CHAVE), n);
  refreshContext();
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
    // Todo o conteúdo da trilha nesta fase (o horário mostra a lista inteira),
    // mais o item "primário" do bloco por compatibilidade com quem só usa um.
    conteudos: ativa ? itens : [],
    conteudo: ativa && itens.length ? (itens[bloco.topicIndex || 0] || itens[0]) : null,
    entraNaFase: ativa ? null : faseDeEntrada(k)
  };
}

/**
 * Fatia do conteúdo que cabe a ESTE bloco quando a mesma trilha ocupa mais de um
 * bloco no dia. Retorna { index, total } — a posição do bloco entre os da mesma
 * trilha e quantos são — ou null se o bloco não tem conteúdo de trilha ativa.
 * Assim os itens da fase são DIVIDIDOS entre os blocos, sem repetir a lista.
 */
export function fatiaDoBloco(blocos, i, fase) {
  const alvo = contextoDoBloco(blocos[i], fase);
  if (!alvo || !alvo.ativa || !alvo.conteudos.length) return null;
  const mesmos = blocos
    .map((b, idx) => ({ idx, ctx: contextoDoBloco(b, fase) }))
    .filter((x) => x.ctx && x.ctx.ativa && x.ctx.conteudos.length && x.ctx.trilha === alvo.trilha)
    .map((x) => x.idx);
  return { index: mesmos.indexOf(i), total: mesmos.length };
}

/**
 * Selo HTML com o conteúdo da trilha na fase para um bloco, ou aviso de inativa.
 * Com `fatia` = { index, total } e total > 1, mostra apenas a porção deste bloco
 * (os itens são repartidos em blocos contíguos entre os horários da mesma trilha).
 */
export function seloDaFase(bloco, fase, fatia = null) {
  const ctx = contextoDoBloco(bloco, fase);
  if (!ctx) return '';

  if (!ctx.ativa) {
    const destino = ctx.entraNaFase ? `entra na Fase ${ctx.entraNaFase}` : 'sem conteúdo nesta fase';
    return `<div class="phase-slot phase-slot-off">
      <span class="phase-slot-tag">Inativa na ${escapeHtml(fase.l)}</span>
      <span class="phase-slot-text">Esta trilha ${destino}. Se o bloco cair hoje, use-o para reforçar o domínio principal da fase.</span>
    </div>`;
  }

  if (!ctx.conteudos.length) return '';
  let itens = ctx.conteudos;
  let parte = '';
  if (fatia && fatia.total > 1) {
    // Divisão equilibrada e "front-loaded": os primeiros blocos recebem o resto,
    // então uma trilha com menos itens que blocos preenche do primeiro em diante
    // (evita o primeiro bloco vazio quando há, por ex., 1 item para 2 blocos).
    const n = itens.length;
    const base = Math.floor(n / fatia.total);
    const resto = n % fatia.total;
    const inicio = fatia.index * base + Math.min(fatia.index, resto);
    const fim = inicio + base + (fatia.index < resto ? 1 : 0);
    itens = itens.slice(inicio, fim);
    if (!itens.length) return '';
    parte = ` · parte ${fatia.index + 1}/${fatia.total}`;
  }
  const nome = NOME_TRILHA[ctx.trilha] || ctx.trilha;
  return `<div class="phase-slot phase-slot--list">
    <span class="phase-slot-tag">${escapeHtml(fase.l)} · ${escapeHtml(nome)} — o que estudar neste horário${parte}</span>
    <ul class="phase-slot-list">${itens.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
  </div>`;
}

/** Seletor de fase. Chama `aoMudar(id)` a cada troca. */
export function renderSeletorDeFase(containerId, aoMudar) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const atual = getFaseAtual();

  el.innerHTML = `
    <div class="phase-picker">
      <label class="phase-picker-label" for="faseAtualSelect">Etapa atual</label>
      <select id="faseAtualSelect" class="phase-picker-select" aria-label="Selecionar a fase atual do plano">
        ${P.map((p) => `<option value="${p.id}"${p.id === atual ? ' selected' : ''}>${p.l} · ${escapeHtml(p.t)}</option>`).join('')}
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
