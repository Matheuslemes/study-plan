/* ═══════════════════════════════════════════════
   FEATURES / PROGRESS — progresso por trilha e global (STUDY-047/048/050)

   Modelo: cada item de conteúdo de uma fase (em phases.js) é um
   tópico com id estável `trilha:faseId:indice`. Marcar um tópico
   como concluído persiste esse id. O progresso de uma trilha é
   a fração de tópicos concluídos entre os que existem nela.

   O storage guarda apenas a lista de ids concluídos — nada de
   estado de UI. A cada mudança, dispara `progress:change` para
   quem quiser re-renderizar (barras, card global, revisões).
═══════════════════════════════════════════════ */

import { P, conteudoDaFase, trilhaAtiva } from '../../../data/phases.js';
import { ler, gravar } from '../core/storage.js';
import { registrarTopico } from './history.js';

const CHAVE = 'topicosConcluidos';

/** Trilhas contáveis para progresso (as que têm conteúdo por fase). */
export const TRILHAS_PROGRESSO = [
  'java', 'db', 'dsa', 'git', 'arquitetura', 'devops', 'sec',
  'frontend', 'py', 'ia', 'math', 'ingles', 'aws', 'pratica'
];

const ROTULOS = {
  java: 'Java + Spring', db: 'Banco de Dados', dsa: 'Algoritmos e ED',
  git: 'Git & Versionamento', arquitetura: 'Arquitetura', devops: 'DevOps / CI-CD',
  sec: 'Segurança', frontend: 'Frontend', py: 'Python', ia: 'IA Engineering',
  math: 'Matemática', ingles: 'Inglês', aws: 'AWS', pratica: 'Prática e labs'
};

export const rotuloTrilha = (k) => ROTULOS[k] || k;

/** id estável de um tópico. */
export const idTopico = (trilha, faseId, indice) => `${trilha}:${faseId}:${indice}`;

/* ─── estado ─────────────────────────────────── */

let _cache = null;
function conjunto() {
  if (_cache) return _cache;
  _cache = new Set(ler(CHAVE, []));
  return _cache;
}
function persistir() {
  gravar(CHAVE, [...conjunto()]);
  document.dispatchEvent(new CustomEvent('progress:change'));
}

export const estaConcluido = (id) => conjunto().has(id);

export function definirConcluido(id, valor) {
  const s = conjunto();
  const jaEstava = s.has(id);
  if (valor) s.add(id); else s.delete(id);
  // só registra no histórico quando o estado realmente mudou
  if (jaEstava !== Boolean(valor)) {
    registrarTopico(valor ? 1 : -1, id.split(':')[0]);
  }
  persistir();
  return valor;
}

export function alternar(id) {
  return definirConcluido(id, !estaConcluido(id));
}

/* ─── cálculo ────────────────────────────────── */

/** Todos os ids de tópicos de uma trilha (nas fases em que está ativa). */
export function topicosDaTrilha(trilha) {
  const ids = [];
  for (const p of P) {
    if (!trilhaAtiva(p, trilha)) continue;
    conteudoDaFase(p, trilha).forEach((_, i) => ids.push(idTopico(trilha, p.id, i)));
  }
  return ids;
}

/** { feitos, total, pct } de uma trilha. */
export function progressoTrilha(trilha) {
  const ids = topicosDaTrilha(trilha);
  const feitos = ids.filter((id) => estaConcluido(id)).length;
  const total = ids.length;
  return { feitos, total, pct: total ? Math.round((feitos / total) * 100) : 0 };
}

/** Progresso agregado de todas as trilhas contáveis. */
export function progressoGlobal() {
  let feitos = 0; let total = 0;
  for (const t of TRILHAS_PROGRESSO) {
    const p = progressoTrilha(t);
    feitos += p.feitos; total += p.total;
  }
  return { feitos, total, pct: total ? Math.round((feitos / total) * 100) : 0 };
}

/* ─── render ─────────────────────────────────── */

/** Barra de progresso por trilha, ordenada por percentual. */
export function renderProgressoTrilhas(containerId, corDe) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const linhas = TRILHAS_PROGRESSO
    .map((t) => ({ t, ...progressoTrilha(t) }))
    .filter((x) => x.total > 0)
    .sort((a, b) => b.pct - a.pct);

  el.innerHTML = linhas.map((x) => {
    const cor = corDe ? corDe(x.t) : 'var(--accent)';
    return `<div class="prog-row">
      <div class="prog-head">
        <span class="prog-label">${rotuloTrilha(x.t)}</span>
        <span class="prog-num" style="color:${cor}">${x.pct}% <span class="prog-frac">${x.feitos}/${x.total}</span></span>
      </div>
      <div class="prog-track"><div class="prog-fill" style="width:${x.pct}%;background:${cor}"></div></div>
    </div>`;
  }).join('');
}

/** Card de progresso global + fase atual (STUDY-048). */
export function renderProgressoGlobal(containerId, faseAtualId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const g = progressoGlobal();
  const fase = P.find((p) => p.id === faseAtualId);

  el.innerHTML = `
    <div class="global-prog">
      <div class="global-prog-ring" style="--pct:${g.pct}">
        <span class="global-prog-pct">${g.pct}%</span>
      </div>
      <div class="global-prog-info">
        <div class="global-prog-title">Progresso geral do plano</div>
        <div class="global-prog-sub">${g.feitos} de ${g.total} tópicos concluídos</div>
        ${fase ? `<div class="global-prog-phase">Fase atual: <strong>${fase.id} · ${fase.t}</strong> <span class="mono">(${fase.w})</span></div>` : ''}
      </div>
    </div>`;
}
