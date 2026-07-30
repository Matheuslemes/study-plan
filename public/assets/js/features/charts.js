/* ═══════════════════════════════════════════════
   FEATURES / CHARTS — gráfico de evolução (STUDY-055)

   SVG gerado à mão, sem biblioteca: o projeto não tem build
   e uma lib de gráfico custaria mais que todo o resto do JS.

   Três leituras:
     · tópicos concluídos por semana (barras)
     · atividade diária dos últimos 30 dias (heatmap)
     · evolução por trilha (barras horizontais já em progress.js)
═══════════════════════════════════════════════ */

import { porSemana, ultimosDias, totais, sequenciaAtual } from './history.js';
import { escapeHtml } from '../core/render.js';

const fmtDia = (iso) => {
  const [, m, d] = iso.split('-');
  return `${d}/${m}`;
};

/** Barras de tópicos concluídos por semana. */
function svgBarras(dados, cor) {
  if (!dados.length) return '';
  const L = 560, A = 150, padB = 26, padL = 26;
  const max = Math.max(1, ...dados.map((d) => d.topicos));
  const larg = (L - padL) / dados.length;

  const barras = dados.map((d, i) => {
    const h = (d.topicos / max) * (A - padB - 10);
    const x = padL + i * larg + larg * 0.18;
    const w = larg * 0.64;
    const y = A - padB - h;
    return `<g>
      <rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${Math.max(h, 1).toFixed(1)}"
        rx="3" fill="${cor}" opacity="${d.topicos ? 0.9 : 0.18}">
        <title>${fmtDia(d.inicio)}–${fmtDia(d.fim)}: ${d.topicos} tópico(s), ${d.revisoes} revisão(ões)</title>
      </rect>
      ${d.topicos ? `<text x="${(x + w / 2).toFixed(1)}" y="${(y - 4).toFixed(1)}" text-anchor="middle"
        font-size="9" fill="${cor}" font-family="IBM Plex Mono, monospace">${d.topicos}</text>` : ''}
      <text x="${(x + w / 2).toFixed(1)}" y="${A - 8}" text-anchor="middle" font-size="8"
        fill="currentColor" opacity=".55" font-family="IBM Plex Mono, monospace">${fmtDia(d.fim)}</text>
    </g>`;
  }).join('');

  // linha de base e escala
  const eixo = `<line x1="${padL}" y1="${A - padB}" x2="${L}" y2="${A - padB}" stroke="currentColor" opacity=".18"/>
    <text x="4" y="${A - padB}" font-size="8" fill="currentColor" opacity=".5" font-family="IBM Plex Mono, monospace">0</text>
    <text x="4" y="16" font-size="8" fill="currentColor" opacity=".5" font-family="IBM Plex Mono, monospace">${max}</text>`;

  return `<svg viewBox="0 0 ${L} ${A}" class="chart-svg" role="img"
    aria-label="Objetivos praticados por semana nas últimas ${dados.length} semanas">${eixo}${barras}</svg>`;
}

/** Heatmap dos últimos 30 dias. */
function svgHeatmap(dias, cor) {
  const cell = 15, gap = 3, cols = 15;
  const linhas = Math.ceil(dias.length / cols);
  const L = cols * (cell + gap), A = linhas * (cell + gap);
  const max = Math.max(1, ...dias.map((d) => d.topicos + d.revisoes));

  const quadros = dias.map((d, i) => {
    const total = d.topicos + d.revisoes;
    const x = (i % cols) * (cell + gap);
    const y = Math.floor(i / cols) * (cell + gap);
    const op = total ? 0.25 + (total / max) * 0.75 : 0.07;
    return `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="3" fill="${cor}" opacity="${op.toFixed(2)}">
      <title>${fmtDia(d.dia)}: ${d.topicos} tópico(s), ${d.revisoes} revisão(ões)</title>
    </rect>`;
  }).join('');

  return `<svg viewBox="0 0 ${L} ${A}" class="chart-heat" role="img"
    aria-label="Atividade diária dos últimos ${dias.length} dias">${quadros}</svg>`;
}

export function renderEvolucao(containerId, cor = '#22d3b0') {
  const el = document.getElementById(containerId);
  if (!el) return;

  const semanas = porSemana(8);
  const dias = ultimosDias(30);
  const t = totais();
  const seq = sequenciaAtual();
  const houve = t.topicos + t.revisoes > 0;

  el.innerHTML = `
    <div class="chart-stats">
      <div class="chart-stat"><span class="chart-stat-num">${t.diasAtivos}</span><span>dias com atividade</span></div>
      <div class="chart-stat"><span class="chart-stat-num">${seq}</span><span>dias seguidos</span></div>
      <div class="chart-stat"><span class="chart-stat-num">${t.topicos}</span><span>objetivos praticados</span></div>
      <div class="chart-stat"><span class="chart-stat-num">${t.revisoes}</span><span>revisões feitas</span></div>
    </div>

    ${houve ? `
      <div class="chart-block">
        <h6 class="chart-title">Objetivos praticados por semana <span>últimas 8 semanas</span></h6>
        ${svgBarras(semanas, cor)}
      </div>
      <div class="chart-block">
        <h6 class="chart-title">Atividade diária <span>últimos 30 dias</span></h6>
        ${svgHeatmap(dias, cor)}
        <p class="chart-legend">Cada quadro é um dia; quanto mais forte, mais tópicos e revisões naquele dia.</p>
      </div>`
    : `<div class="chart-empty">
        <strong>Ainda não há histórico.</strong>
        <p>Leve objetivos a Praticado nas páginas de trilha e conclua revisões: a evolução por semana
        e a atividade diária aparecem aqui a partir do primeiro registro.</p>
      </div>`}`;
}
