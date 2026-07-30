/*
 * FEATURES / TRACK-ROADMAP — objetivos, evidências e domínio por trilha
 *
 * As páginas de trilha compartilham a fonte de dados de phases.js e o mesmo
 * estado persistido do dashboard. A escada de domínio torna o avanço explícito
 * sem transformar 295 objetivos em um formulário permanentemente aberto.
 */

import { P, conteudoDaFase, trilhaAtiva, faseDeEntrada, chaveTrilha } from '../../../data/phases.js';
import { CK, trilhasRelacionadas, ARQUIVO_TRILHA, NOME_TRILHA } from '../../../data/tracks.js';
import { PC } from '../../../data/config.js';
import { escapeHtml } from '../core/render.js';
import {
  ESTADOS,
  ESTADOS_INFO,
  ORDEM_ESTADOS,
  idTopico,
  estadoDoTopico,
  evidenciaDoTopico,
  historicoDeEvidencias,
  temEvidenciaValida,
  temD30Concluida,
  definirEstado,
  salvarEvidencia,
  progressoTrilha
} from './progress.js';
import { registrarEstudo, removerDaFila, situacaoRevisao } from './review.js';

/** Bloco "Trilhas relacionadas". */
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

const NOMES = {
  java: 'Java + Spring', dsa: 'Algoritmos e Estruturas de Dados', db: 'Banco de Dados',
  git: 'Git & Versionamento', arquitetura: 'Arquitetura', devops: 'DevOps / CI-CD',
  sec: 'Segurança', pratica: 'Prática e exercícios', frontend: 'Frontend',
  py: 'Python', ia: 'IA Engineering', math: 'Matemática', fin: 'Financeiro',
  ingles: 'Inglês Técnico', aws: 'AWS'
};

const NIVEL_PRATICADO = ORDEM_ESTADOS.indexOf(ESTADOS.PRATICADO);

function opcoesEstado(estadoAtual, d30Concluida) {
  return ORDEM_ESTADOS.map((estado) => {
    const bloqueado = estado === ESTADOS.DOMINADO && !d30Concluida;
    return `<option value="${estado}"${estado === estadoAtual ? ' selected' : ''}${bloqueado ? ' disabled' : ''}>
      ${ESTADOS_INFO[estado].rotulo}${bloqueado ? ' · exige D30' : ''}
    </option>`;
  }).join('');
}

function trilhaDeDominio(estadoAtual) {
  const nivel = ORDEM_ESTADOS.indexOf(estadoAtual);
  return `<span class="topic-state-rail" aria-hidden="true">
    ${ORDEM_ESTADOS.map((estado, i) =>
      `<i class="${i <= nivel ? 'is-reached' : ''}" data-rail-state="${estado}"></i>`
    ).join('')}
  </span>`;
}

function orientacaoDoTopico(id, estado, temEvidencia, revisao) {
  if (estado === ESTADOS.NAO_INICIADO) return 'Próximo passo: iniciar o estudo do objetivo.';
  if (estado === ESTADOS.EM_ESTUDO) return 'Próximo passo: praticar e registrar o resultado.';
  if (estado === ESTADOS.PRATICADO && !temEvidencia) return 'Próximo passo: adicionar a URL do commit, PR ou lab.';
  if (estado === ESTADOS.PRATICADO) return 'Evidência pronta: avance para Validado quando conferir o critério.';
  if (estado === ESTADOS.VALIDADO && !revisao.d30Concluida) {
    return revisao.marco
      ? `Retenção pendente: conclua ${revisao.marco}${revisao.proxima ? ` em ${revisao.proxima}` : ''}; D30 libera Dominado.`
      : 'Retenção pendente: pratique novamente para entrar no ciclo D1/D7/D30.';
  }
  if (estado === ESTADOS.VALIDADO) return 'D30 concluída: o objetivo já pode avançar para Dominado.';
  if (estado === ESTADOS.DOMINADO) return 'Domínio comprovado por evidência e revisão D30.';
  return `Estado atual: ${ESTADOS_INFO[estado]?.rotulo || estado}.`;
}

function htmlTopico(texto, id) {
  const estado = estadoDoTopico(id);
  const evidencia = evidenciaDoTopico(id);
  const historico = historicoDeEvidencias(id);
  const d30 = temD30Concluida(id);
  const revisao = situacaoRevisao(id);
  const temEvidencia = temEvidenciaValida(id);
  const nivel = ORDEM_ESTADOS.indexOf(estado);

  return `<li class="topic-item is-state-${estado}" data-topic-item="${id}" style="--topic-level:${nivel}">
    <div class="topic-objective-row">
      <div class="topic-objective-copy">
        ${trilhaDeDominio(estado)}
        <span class="topic-objective-text">${escapeHtml(texto)}</span>
        <span class="topic-next-step">${escapeHtml(orientacaoDoTopico(id, estado, temEvidencia, revisao))}</span>
      </div>
      <label class="topic-state-field">
        <span>Estado</span>
        <select data-topic-state="${id}" aria-label="Estado do objetivo: ${escapeHtml(texto)}">
          ${opcoesEstado(estado, d30)}
        </select>
      </label>
    </div>
    <div class="topic-proof-row">
      <button type="button" class="topic-proof-toggle" data-evidence-toggle="${id}" aria-expanded="false">
        ${temEvidencia ? 'Editar evidência' : 'Adicionar evidência'}
      </button>
      ${temEvidencia
        ? `<a class="topic-proof-link" href="${escapeHtml(evidencia.url)}" target="_blank" rel="noopener noreferrer">Abrir evidência ↗</a>`
        : '<span class="topic-proof-missing">Commit, PR ou lab</span>'}
      ${d30 ? '<span class="topic-d30-badge">D30 concluída</span>' : ''}
    </div>
    <form class="topic-evidence-form" data-evidence-form="${id}" hidden novalidate>
      <label for="evidence-${id}">URL da evidência</label>
      <div class="topic-evidence-fields">
        <input id="evidence-${id}" name="evidence" type="url" inputmode="url"
          placeholder="https://github.com/.../commit/..." value="${escapeHtml(evidencia?.url || '')}"
          autocomplete="url" required>
        <button type="submit">Salvar evidência</button>
      </div>
      <span class="topic-field-hint">Use uma URL http(s) para commit, Pull Request, lab publicado ou relatório reproduzível.</span>
      <span class="topic-field-error" data-evidence-error role="alert"></span>
      ${historico.length ? `<details class="topic-evidence-history">
        <summary>Histórico de evidências (${historico.length})</summary>
        <ol>
          ${[...historico].reverse().map((item) => `<li>
            <a href="${escapeHtml(item.url)}" title="${escapeHtml(item.url)}"
              target="_blank" rel="noopener noreferrer">${escapeHtml(item.url)}</a>
            <time datetime="${escapeHtml(item.salvaEm || '')}">${item.salvaEm
              ? new Date(item.salvaEm).toLocaleDateString('pt-BR')
              : 'data não registrada'}</time>
          </li>`).join('')}
        </ol>
      </details>` : ''}
    </form>
  </li>`;
}

function htmlLegendaDominio() {
  return `<div class="mastery-legend" aria-label="Escada de domínio">
    ${ORDEM_ESTADOS.map((estado, i) => `
      <span class="mastery-legend-item" data-legend-state="${estado}">
        <i aria-hidden="true">${i + 1}</i>${ESTADOS_INFO[estado].rotulo}
      </span>`).join('')}
  </div>`;
}

/**
 * Renderiza o roadmap completo de uma trilha nas 12 fases.
 * @param {string} containerId id do elemento destino
 * @param {string} trilha chave da trilha (aceita aliases das páginas)
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
      ? `<ul class="roadmap-list roadmap-objectives">${itens.map((t, idx) =>
          htmlTopico(t, idTopico(k, p.id, idx))
        ).join('')}</ul>`
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
      Progressão de <strong>${escapeHtml(NOMES[k] || k)}</strong> ao longo das 12 fases.
      Cada item é um objetivo com critério observável e percorre uma escada de domínio baseada em prática, evidência e retenção.
      ${entrada && entrada > 1 ? `<br><strong>Esta trilha entra na Fase ${entrada}.</strong> Antes disso ela não ocupa espaço na rotina diária.` : ''}
    </p>
    ${prog.total ? `<div class="roadmap-progress" id="roadmapProgress">
      <div class="roadmap-progress-head">
        <span>Seu domínio nesta trilha</span>
        <span class="roadmap-progress-num" style="color:${cor}">${prog.pct}% <span class="prog-frac">${prog.dominados}/${prog.total} dominados</span></span>
      </div>
      <div class="prog-track" role="progressbar" aria-label="Domínio da trilha"
        aria-valuemin="0" aria-valuemax="100" aria-valuenow="${prog.pct}">
        <div class="prog-fill" style="width:${prog.pct}%;background:${cor}"></div>
      </div>
      ${htmlLegendaDominio()}
      <p class="roadmap-progress-hint">O percentual pondera os cinco níveis. Validado exige evidência; Dominado exige evidência e revisão D30.</p>
    </div>` : ''}
    <div class="roadmap-feedback" data-roadmap-feedback role="status" aria-live="polite"></div>
    <div class="roadmap-grid">${cards}</div>
    ${htmlRelacionadas(k)}`;

  ligarInteracoes(el, k, cor);
}

function mostrarFeedback(el, mensagem, tipo = 'info') {
  const feedback = el.querySelector('[data-roadmap-feedback]');
  if (!feedback) return;
  feedback.textContent = mensagem;
  feedback.dataset.type = tipo;
  feedback.classList.add('is-visible');
  clearTimeout(mostrarFeedback._timer);
  mostrarFeedback._timer = setTimeout(() => feedback.classList.remove('is-visible'), 5000);
}

function substituirTopico(el, id, trilha) {
  const [,, idx] = id.split(':');
  const faseId = Number(id.split(':')[1]);
  const fase = P.find((p) => p.id === faseId);
  const texto = conteudoDaFase(fase, trilha)[Number(idx)];
  const item = el.querySelector(`[data-topic-item="${id}"]`);
  if (item && texto) item.outerHTML = htmlTopico(texto, id);
}

function abrirEvidencia(item, mensagem = '') {
  const form = item?.querySelector('[data-evidence-form]');
  const toggle = item?.querySelector('[data-evidence-toggle]');
  if (!form || !toggle) return;
  form.hidden = false;
  toggle.setAttribute('aria-expanded', 'true');
  const erro = form.querySelector('[data-evidence-error]');
  if (erro) erro.textContent = mensagem;
  form.querySelector('input')?.focus();
}

function ligarInteracoes(el, trilha, cor) {
  el.addEventListener('click', (e) => {
    const toggle = e.target.closest('[data-evidence-toggle]');
    if (!toggle) return;
    const item = toggle.closest('[data-topic-item]');
    const form = item?.querySelector('[data-evidence-form]');
    if (!form) return;
    form.hidden = !form.hidden;
    toggle.setAttribute('aria-expanded', String(!form.hidden));
    if (!form.hidden) form.querySelector('input')?.focus();
  });

  el.addEventListener('change', (e) => {
    const select = e.target.closest('[data-topic-state]');
    if (!select) return;
    const id = select.dataset.topicState;
    const estadoAnterior = estadoDoTopico(id);
    const estadoSolicitado = select.value;
    const resultado = definirEstado(id, estadoSolicitado);

    if (!resultado.ok) {
      select.value = estadoAnterior;
      if (resultado.motivo === 'evidencia-obrigatoria') {
        const item = select.closest('[data-topic-item]');
        const form = item?.querySelector('[data-evidence-form]');
        if (form) form.dataset.promoteTo = estadoSolicitado;
        abrirEvidencia(item, 'Salve uma URL de evidência antes de validar este objetivo.');
        mostrarFeedback(el, 'Validação bloqueada: adicione a evidência do objetivo.', 'warning');
      } else if (resultado.motivo === 'd30-obrigatoria') {
        mostrarFeedback(el, 'Domínio bloqueado: conclua a revisão D30 deste objetivo.', 'warning');
      }
      return;
    }

    const nivelAnterior = ORDEM_ESTADOS.indexOf(estadoAnterior);
    const nivelNovo = ORDEM_ESTADOS.indexOf(select.value);
    if (nivelNovo >= NIVEL_PRATICADO && nivelAnterior < NIVEL_PRATICADO) registrarEstudo(id);
    if (nivelNovo < NIVEL_PRATICADO) removerDaFila(id);

    substituirTopico(el, id, trilha);
    atualizarBarra(el, trilha, cor);
    mostrarFeedback(el, `Estado alterado para ${ESTADOS_INFO[select.value].rotulo}.`, 'success');
  });

  el.addEventListener('submit', (e) => {
    const form = e.target.closest('[data-evidence-form]');
    if (!form) return;
    e.preventDefault();
    const id = form.dataset.evidenceForm;
    const input = form.querySelector('input[name="evidence"]');
    const erro = form.querySelector('[data-evidence-error]');
    const resultado = salvarEvidencia(id, input?.value);

    if (!resultado.ok) {
      if (erro) erro.textContent = 'Informe uma URL completa começando com http:// ou https://.';
      input?.focus();
      return;
    }

    const estadoAnterior = estadoDoTopico(id);
    const promocao = form.dataset.promoteTo;
    const resultadoPromocao = promocao ? definirEstado(id, promocao) : null;
    const estadoNovo = estadoDoTopico(id);
    if (ORDEM_ESTADOS.indexOf(estadoNovo) >= NIVEL_PRATICADO &&
        ORDEM_ESTADOS.indexOf(estadoAnterior) < NIVEL_PRATICADO) {
      registrarEstudo(id);
    }

    substituirTopico(el, id, trilha);
    atualizarBarra(el, trilha, cor);
    mostrarFeedback(
      el,
      resultadoPromocao?.motivo === 'd30-obrigatoria'
        ? 'Evidência salva. Conclua D30 antes de avançar para Dominado.'
        : promocao ? `Evidência salva e objetivo ${ESTADOS_INFO[estadoNovo].rotulo.toLowerCase()}.` : 'Evidência salva.',
      resultadoPromocao?.motivo === 'd30-obrigatoria' ? 'warning' : 'success'
    );
  });
}

function atualizarBarra(el, trilha, cor) {
  const prog = progressoTrilha(trilha);
  const num = el.querySelector('.roadmap-progress-num');
  const track = el.querySelector('.roadmap-progress .prog-track');
  const fill = el.querySelector('.roadmap-progress .prog-fill');
  if (num) num.innerHTML = `${prog.pct}% <span class="prog-frac">${prog.dominados}/${prog.total} dominados</span>`;
  if (track) track.setAttribute('aria-valuenow', String(prog.pct));
  if (fill) {
    fill.style.width = `${prog.pct}%`;
    fill.style.background = cor;
  }
}
