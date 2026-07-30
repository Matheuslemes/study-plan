/*
 * FEATURES / PROGRESS — domínio por tópico (DIDATIC-002/003)
 *
 * Cada tópico percorre cinco estados:
 * Não iniciado → Em estudo → Praticado → Validado → Dominado.
 *
 * Regras de integridade:
 * - Validado exige URL de evidência;
 * - Dominado exige URL de evidência e revisão D30 concluída;
 * - cada substituição de evidência preserva o histórico anterior;
 * - o checklist binário legado é migrado para Praticado, sem atribuir validação.
 */

import { P, conteudoDaFase, trilhaAtiva } from '../../../data/phases.js';
import { ler, gravar, remover } from '../core/storage.js';
import { registrarTopico } from './history.js';

const CHAVE = 'progressoTopicos';
const CHAVE_LEGADA = 'topicosConcluidos';

export const ESTADOS = Object.freeze({
  NAO_INICIADO: 'nao_iniciado',
  EM_ESTUDO: 'em_estudo',
  PRATICADO: 'praticado',
  VALIDADO: 'validado',
  DOMINADO: 'dominado'
});

export const ORDEM_ESTADOS = Object.freeze([
  ESTADOS.NAO_INICIADO,
  ESTADOS.EM_ESTUDO,
  ESTADOS.PRATICADO,
  ESTADOS.VALIDADO,
  ESTADOS.DOMINADO
]);

export const ESTADOS_INFO = Object.freeze({
  [ESTADOS.NAO_INICIADO]: { rotulo: 'Não iniciado', curto: 'Não iniciado' },
  [ESTADOS.EM_ESTUDO]: { rotulo: 'Em estudo', curto: 'Em estudo' },
  [ESTADOS.PRATICADO]: { rotulo: 'Praticado', curto: 'Praticado' },
  [ESTADOS.VALIDADO]: { rotulo: 'Validado', curto: 'Validado' },
  [ESTADOS.DOMINADO]: { rotulo: 'Dominado', curto: 'Dominado' }
});

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

const agoraIso = () => new Date().toISOString();
const indiceEstado = (estado) => Math.max(0, ORDEM_ESTADOS.indexOf(estado));
const estadoValido = (estado) => ORDEM_ESTADOS.includes(estado);
const emDocumento = () => typeof document !== 'undefined';

export const rotuloTrilha = (k) => ROTULOS[k] || k;

/** id estável de um tópico. */
export const idTopico = (trilha, faseId, indice) => `${trilha}:${faseId}:${indice}`;

function registroVazio() {
  return {
    estado: ESTADOS.NAO_INICIADO,
    evidencia: null,
    historicoEvidencias: [],
    d30ConcluidaEm: null,
    atualizadoEm: null
  };
}

function normalizarRegistro(valor) {
  if (typeof valor === 'string' && estadoValido(valor)) {
    return { ...registroVazio(), estado: valor };
  }
  if (!valor || typeof valor !== 'object') return registroVazio();
  const evidenciaInformada = valor.evidencia && typeof valor.evidencia === 'object'
    ? {
        url: String(valor.evidencia.url || '').trim(),
        salvaEm: valor.evidencia.salvaEm || null
      }
    : null;
  const evidencia = urlDeEvidenciaValida(evidenciaInformada?.url)
    ? evidenciaInformada
    : null;
  const historicoInformado = Array.isArray(valor.historicoEvidencias)
    ? valor.historicoEvidencias
        .map((item) => ({
          url: String(item?.url || '').trim(),
          salvaEm: item?.salvaEm || null
        }))
        .filter((item) => urlDeEvidenciaValida(item.url))
    : [];
  const historicoEvidencias = historicoInformado.length
    ? historicoInformado
    : (evidencia ? [evidencia] : []);
  const evidenciaAtual = evidencia || historicoEvidencias.at(-1) || null;
  const d30ConcluidaEm = valor.d30ConcluidaEm || null;
  let estado = estadoValido(valor.estado) ? valor.estado : ESTADOS.NAO_INICIADO;
  if (indiceEstado(estado) >= indiceEstado(ESTADOS.VALIDADO) && !evidenciaAtual) {
    estado = ESTADOS.PRATICADO;
  }
  if (estado === ESTADOS.DOMINADO && !d30ConcluidaEm) {
    estado = ESTADOS.VALIDADO;
  }
  return {
    estado,
    evidencia: evidenciaAtual,
    historicoEvidencias,
    d30ConcluidaEm,
    atualizadoEm: valor.atualizadoEm || null
  };
}

let _cache = null;

function carregar() {
  if (_cache) return _cache;

  const atual = ler(CHAVE, null);
  if (atual && typeof atual === 'object' && !Array.isArray(atual)) {
    _cache = Object.fromEntries(
      Object.entries(atual).map(([id, valor]) => [id, normalizarRegistro(valor)])
    );
    // Regrava a versão saneada para que backup e próximas sessões também
    // preservem as invariantes, não apenas a renderização atual.
    gravar(CHAVE, _cache);
    return _cache;
  }

  // Migração sem perda: o antigo "concluído" prova prática, não validação.
  const legados = ler(CHAVE_LEGADA, []);
  _cache = {};
  if (Array.isArray(legados)) {
    legados.forEach((id) => {
      _cache[id] = {
        ...registroVazio(),
        estado: ESTADOS.PRATICADO,
        atualizadoEm: agoraIso()
      };
    });
  }
  if (gravar(CHAVE, _cache)) remover(CHAVE_LEGADA);
  return _cache;
}

function dispararMudanca(detalhe = {}) {
  if (!emDocumento()) return;
  document.dispatchEvent(new CustomEvent('progress:change', { detail: detalhe }));
}

function persistir(detalhe = {}) {
  const ok = gravar(CHAVE, carregar());
  dispararMudanca(detalhe);
  return ok;
}

export function progressoDoTopico(id) {
  return normalizarRegistro(carregar()[id]);
}

export const estadoDoTopico = (id) => progressoDoTopico(id).estado;
export const evidenciaDoTopico = (id) => progressoDoTopico(id).evidencia;
export const historicoDeEvidencias = (id) => progressoDoTopico(id).historicoEvidencias;
export const temD30Concluida = (id) => Boolean(progressoDoTopico(id).d30ConcluidaEm);

export function urlDeEvidenciaValida(valor) {
  try {
    const url = new URL(String(valor || '').trim());
    return ['http:', 'https:'].includes(url.protocol) && Boolean(url.hostname);
  } catch {
    return false;
  }
}

export const temEvidenciaValida = (id) =>
  urlDeEvidenciaValida(evidenciaDoTopico(id)?.url);

/**
 * Altera o estado preservando as invariantes didáticas.
 * Retorna um resultado explícito para a interface explicar bloqueios.
 */
export function definirEstado(id, novoEstado) {
  if (!estadoValido(novoEstado)) {
    return { ok: false, motivo: 'estado-invalido', estado: estadoDoTopico(id) };
  }

  const anterior = progressoDoTopico(id);
  const novoIndice = indiceEstado(novoEstado);

  if (novoIndice >= indiceEstado(ESTADOS.VALIDADO) &&
      !urlDeEvidenciaValida(anterior.evidencia?.url)) {
    return { ok: false, motivo: 'evidencia-obrigatoria', estado: anterior.estado };
  }
  if (novoEstado === ESTADOS.DOMINADO && !anterior.d30ConcluidaEm) {
    return { ok: false, motivo: 'd30-obrigatoria', estado: anterior.estado };
  }
  if (anterior.estado === novoEstado) {
    return { ok: true, alterou: false, registro: anterior };
  }

  const cruzavaPraticaAntes = indiceEstado(anterior.estado) >= indiceEstado(ESTADOS.PRATICADO);
  const cruzaPraticaAgora = novoIndice >= indiceEstado(ESTADOS.PRATICADO);
  carregar()[id] = {
    ...anterior,
    estado: novoEstado,
    // Regressar abaixo de Validado declara que a retenção precisa ser provada
    // novamente; uma D30 antiga não pode liberar domínio em um novo ciclo.
    d30ConcluidaEm: novoIndice < indiceEstado(ESTADOS.VALIDADO)
      ? null
      : anterior.d30ConcluidaEm,
    atualizadoEm: agoraIso()
  };

  if (cruzavaPraticaAntes !== cruzaPraticaAgora) {
    registrarTopico(cruzaPraticaAgora ? 1 : -1, id.split(':')[0]);
  }
  persistir({ id, tipo: 'estado', estado: novoEstado });
  return { ok: true, alterou: true, registro: progressoDoTopico(id) };
}

export function salvarEvidencia(id, url) {
  const limpa = String(url || '').trim();
  if (!urlDeEvidenciaValida(limpa)) {
    return { ok: false, motivo: 'url-invalida' };
  }
  const anterior = progressoDoTopico(id);
  const salvaEm = agoraIso();
  const novaEvidencia = { url: limpa, salvaEm };
  const historico = anterior.historicoEvidencias || [];
  const historicoAtualizado = anterior.evidencia?.url === limpa
    ? historico
    : [...historico, novaEvidencia];
  carregar()[id] = {
    ...anterior,
    evidencia: novaEvidencia,
    historicoEvidencias: historicoAtualizado.length ? historicoAtualizado : [novaEvidencia],
    atualizadoEm: salvaEm
  };
  persistir({ id, tipo: 'evidencia' });
  return { ok: true, evidencia: progressoDoTopico(id).evidencia };
}

/**
 * Registra a prova de retenção. Se o tópico já estava Validado, a conclusão
 * real de D30 promove automaticamente para Dominado.
 */
export function registrarD30Concluida(id, data = agoraIso()) {
  const anterior = progressoDoTopico(id);
  const podeDominar = anterior.estado === ESTADOS.VALIDADO &&
    urlDeEvidenciaValida(anterior.evidencia?.url);
  carregar()[id] = {
    ...anterior,
    estado: podeDominar ? ESTADOS.DOMINADO : anterior.estado,
    d30ConcluidaEm: data,
    atualizadoEm: agoraIso()
  };
  persistir({
    id,
    tipo: 'd30',
    estado: carregar()[id].estado
  });
  return progressoDoTopico(id);
}

/* Compatibilidade com integrações antigas que ainda tratem Praticado como "feito". */
export const estaConcluido = (id) =>
  indiceEstado(estadoDoTopico(id)) >= indiceEstado(ESTADOS.PRATICADO);

export function definirConcluido(id, valor) {
  const atual = estadoDoTopico(id);
  if (valor && indiceEstado(atual) < indiceEstado(ESTADOS.PRATICADO)) {
    return definirEstado(id, ESTADOS.PRATICADO).ok;
  }
  if (!valor) return definirEstado(id, ESTADOS.NAO_INICIADO).ok;
  return true;
}

export function alternar(id) {
  return definirConcluido(id, !estaConcluido(id));
}

/** Todos os ids de tópicos de uma trilha (nas fases em que está ativa). */
export function topicosDaTrilha(trilha) {
  const ids = [];
  for (const p of P) {
    if (!trilhaAtiva(p, trilha)) continue;
    conteudoDaFase(p, trilha).forEach((_, i) => ids.push(idTopico(trilha, p.id, i)));
  }
  return ids;
}

function resumir(ids) {
  const estados = Object.fromEntries(ORDEM_ESTADOS.map((estado) => [estado, 0]));
  let pontos = 0;
  ids.forEach((id) => {
    const estado = estadoDoTopico(id);
    const nivel = indiceEstado(estado);
    estados[estado] += 1;
    pontos += nivel / (ORDEM_ESTADOS.length - 1);
  });
  const total = ids.length;
  const iniciados = total - estados[ESTADOS.NAO_INICIADO];
  return {
    feitos: estados[ESTADOS.DOMINADO],
    total,
    pct: total ? Math.round((pontos / total) * 100) : 0,
    iniciados,
    emEstudo: estados[ESTADOS.EM_ESTUDO],
    praticados: estados[ESTADOS.PRATICADO],
    validados: estados[ESTADOS.VALIDADO],
    dominados: estados[ESTADOS.DOMINADO],
    estados
  };
}

/** Progresso ponderado de uma trilha: 0%, 25%, 50%, 75% e 100% por tópico. */
export function progressoTrilha(trilha) {
  return resumir(topicosDaTrilha(trilha));
}

/** Progresso ponderado agregado de todas as trilhas contáveis. */
export function progressoGlobal() {
  return resumir(TRILHAS_PROGRESSO.flatMap(topicosDaTrilha));
}

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
        <span class="prog-num" style="color:${cor}">${x.pct}% <span class="prog-frac">${x.dominados}/${x.total} dominados</span></span>
      </div>
      <div class="prog-track" role="progressbar" aria-label="${rotuloTrilha(x.t)}"
        aria-valuemin="0" aria-valuemax="100" aria-valuenow="${x.pct}">
        <div class="prog-fill" style="width:${x.pct}%;background:${cor}"></div>
      </div>
    </div>`;
  }).join('');
}

/** Card de progresso global + fase atual. */
export function renderProgressoGlobal(containerId, faseAtualId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const g = progressoGlobal();
  const fase = P.find((p) => p.id === faseAtualId);

  el.innerHTML = `
    <div class="global-prog">
      <div class="global-prog-ring" style="--pct:${g.pct}" role="progressbar"
        aria-label="Progresso geral por nível de domínio" aria-valuemin="0"
        aria-valuemax="100" aria-valuenow="${g.pct}">
        <span class="global-prog-pct">${g.pct}%</span>
      </div>
      <div class="global-prog-info">
        <div class="global-prog-title">Domínio geral do plano</div>
        <div class="global-prog-sub">${g.dominados} dominados · ${g.validados} validados · ${g.praticados} praticados · ${g.emEstudo} em estudo</div>
        ${fase ? `<div class="global-prog-phase">Fase atual: <strong>${fase.id} · ${fase.t}</strong> <span class="mono">(${fase.w})</span></div>` : ''}
      </div>
    </div>`;
}
