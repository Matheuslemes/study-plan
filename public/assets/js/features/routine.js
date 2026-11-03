import { weekDays, weeklyFocusByDay, dailyPlansByDay, monthlyCycle, PERFIS_ROTINA, perfilRotina, setPerfilRotina, isArchitecture, weeklyHours } from '../core/study-context.js';
/* ═══════════════════════════════════════════════
   FEATURES / ROUTINE — rotina diária, semanal e mensal
═══════════════════════════════════════════════ */

import { CK } from '../../../data/tracks.js';
import { faseAtual, seloDaFase, fatiaDoBloco } from './active-phase.js';
import { escapeHtml } from '../core/render.js';
import { flushProgress } from '../core/storage.js';
import { resolvePublicUrl } from '../core/public-url.js';
import { arquiteturaModules } from '../../../data/arquitetura-advanced.js';

export function getDailyColor(block) {
  return CK[block.k] || CK[block.type] || CK.n;
}

/** Seletor do perfil de horário. */
export function renderSeletorDePerfil(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const atual = perfilRotina();
  el.innerHTML = `
    <div class="phase-picker">
      <label class="phase-picker-label" for="perfilRotinaSelect">Perfil de horário</label>
      <select id="perfilRotinaSelect" class="phase-picker-select">
        ${Object.entries(PERFIS_ROTINA).map(([id, perfil]) => `<option value="${id}"${id === atual ? ' selected' : ''}>${escapeHtml(perfil.nome)}</option>`).join('')}
      </select>
      <span class="phase-picker-hint" id="perfilRotinaHint"></span>
      <p class="routine-profile-warning" id="perfilRotinaAviso" role="note" hidden></p>
    </div>`;

  const atualizarDetalhes = () => {
    const perfil = PERFIS_ROTINA[perfilRotina()];
    // Sem horário fixo, a Arquitetura usa a carga escolhida, não as horas do Backend.
    document.getElementById('perfilRotinaHint').textContent = isArchitecture() && !perfil.horasSemanais
      ? `${weeklyHours()}h por semana em blocos flexíveis · sono 7h30`
      : perfil.resumo;
    const aviso = document.getElementById('perfilRotinaAviso');
    aviso.textContent = perfil.aviso || '';
    aviso.hidden = !perfil.aviso;
  };

  atualizarDetalhes();
  document.getElementById('perfilRotinaSelect').addEventListener('change', async (e) => {
    setPerfilRotina(e.target.value);
    // Estimativas e textos dependem da carga do perfil e só são montados no
    // carregamento; a recarga volta para a aba da rotina.
    await flushProgress();
    location.hash = 'tabDaily';
    location.reload();
  });
}

export function renderDailyDayTabs() {
  const el = document.getElementById('dailyDayTabs');
  if (!el) return;
  el.innerHTML = weekDays.map((d, index) => `
    <li class="nav-item" role="presentation">
      <button type="button" class="nav-link daily-day-btn${index === 0 ? ' active' : ''}" data-day-key="${d.key}" role="tab" aria-selected="${index === 0 ? 'true' : 'false'}" aria-controls="dailySchedule">
        <span class="d-none d-sm-inline">${d.label}</span><span class="d-sm-none">${d.short}</span>
      </button>
    </li>`).join('');
  el.querySelectorAll('[data-day-key]').forEach(btn => {
    btn.addEventListener('click', () => setActiveDay(btn.dataset.dayKey));
  });
}

export function setActiveDay(dayKey) {
  const selected = dailyPlansByDay[dayKey] ? dayKey : 'segunda';
  document.querySelectorAll('#dailyDayTabs [data-day-key]').forEach(btn => {
    const isActive = btn.dataset.dayKey === selected;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', String(isActive));
  });
  renderDailySchedule(selected);
  renderWeeklyFocus(selected);
}

/** Links para as seções da academia que o bloco manda estudar. */
function linksDeModulos(ids = []) {
  const links = ids
    .map((id) => arquiteturaModules.find((m) => m.id === id))
    .filter(Boolean)
    .map((m) => `<a href="${resolvePublicUrl(`trilhas/arquitetura/${m.part}.html`)}#${escapeHtml(m.id)}">Módulo ${escapeHtml(m.number)} · ${escapeHtml(m.title)} <span class="ml-arrow" aria-hidden="true">↗</span></a>`);
  return links.length ? `<div class="sequence-module-links" role="group" aria-label="Módulos da academia">${links.join('')}</div>` : '';
}

/** O que este dia significa na fase ativa, de onde veio e para onde vai. */
function focoDoDiaNaFase(dayKey, fase) {
  const foco = weeklyFocusByDay[dayKey];
  if (!foco?.nestaFase) return '';
  const { intencao, foco: tema, pico, degrau, anterior, proxima } = foco.nestaFase;
  const caminho = [
    anterior && `<li><span class="mono">Antes · F${fase.id - 1}</span> ${escapeHtml(anterior)}</li>`,
    proxima && `<li><span class="mono">Depois · F${fase.id + 1}</span> ${escapeHtml(proxima)}</li>`
  ].filter(Boolean).join('');
  return `<section class="daily-phase-focus" aria-label="Foco de ${escapeHtml(foco.day)} na ${escapeHtml(fase.l)}">
    <div class="daily-phase-focus-head">
      <span class="phase-slot-tag">${escapeHtml(fase.l)} · ${escapeHtml(foco.day)} · ${escapeHtml(intencao)}</span>
      ${pico ? '<span class="daily-priority">Pico da fase</span>' : ''}
    </div>
    <p class="daily-phase-focus-theme">${escapeHtml(tema)}</p>
    ${degrau ? `<p class="daily-phase-focus-note">Degrau da operação: ${escapeHtml(degrau)}</p>` : ''}
    <ul class="daily-phase-focus-path" aria-label="Este mesmo dia nas fases vizinhas">${caminho}</ul>
  </section>`;
}

export function renderDailySchedule(dayKey) {
  const fase = faseAtual();
  const scheduleEl = document.getElementById('dailySchedule');
  if (!scheduleEl) return;
  const blocks = dailyPlansByDay[dayKey] || dailyPlansByDay.segunda;
  scheduleEl.innerHTML = focoDoDiaNaFase(dayKey, fase) + blocks.map((b, i) => {
    const c = getDailyColor(b);
    const type = b.type || 'study';
    const isBreak = type === 'break';
    const tracks = Array.isArray(b.tracks) && b.tracks.length
      ? `<div class="daily-track-row">${b.tracks.map(t => `<span class="daily-track-tag">${t}</span>`).join('')}</div>`
      : '';
    const priority = b.priority ? `<span class="daily-priority">${b.priority}</span>` : '';
    const selo = seloDaFase(b, fase, fatiaDoBloco(blocks, i, fase));
    return `<article class="daily-block daily-block-${type}" style="--daily-kind-color:${c.t};--daily-kind-bg:${c.b};${isBreak ? 'opacity:.88' : ''}">
  <div class="daily-time" style="background:${c.b}">
    <span class="mono small" style="color:${c.t};font-weight:600;font-size:.72rem">${b.time}</span>
    <span style="font-family:'IBM Plex Mono',monospace;font-size:.65rem;color:${c.t};opacity:.75">${b.dur || ''}</span>
  </div>
  <div class="daily-content">
    <span class="daily-kind">${b.kind || type}</span>${priority}
    <h6 style="color:${c.t}">${b.block}</h6>
    <p>${b.d}</p>
    ${tracks}
    ${selo}
    ${linksDeModulos(b.modulos)}
  </div>
</article>`;
  }).join('');
}

export function renderMonthlyCycle() {
  const el = document.getElementById('monthlyCycle');
  if (!el) return;
  el.innerHTML = monthlyCycle.map(c => {
    const cor = (CK[c.k] || CK.n).t;
    const fundo = (CK[c.k] || CK.n).b;
    return `<div class="col-12 col-sm-6 col-lg-3">
  <div class="cycle-card${c.newContent ? '' : ' is-consolidation'}" style="--cycle-color:${cor}">
    <span class="cycle-week">${c.week}</span>
    <span class="cycle-mode" style="background:${fundo};color:${cor}">${c.mode}</span>
    <div class="cycle-focus" style="color:${cor}">${c.focus}</div>
    ${c.newContent ? '' : '<span class="cycle-no-new">SEM CONTEÚDO NOVO</span>'}
    <p class="cycle-detail">${c.detail}</p>
    ${c.checklist.map(i => `<div class="cycle-check">${i}</div>`).join('')}
  </div>
</div>`;
  }).join('');
}

export function renderWeeklyFocus(dayKey) {
  const el = document.getElementById('weeklyFocus');
  if (!el) return;
  const d = weeklyFocusByDay[dayKey] || weeklyFocusByDay.segunda;
  const c = CK[d.k] || CK.n;
  el.innerHTML = `
<div class="col-12 col-xl-4">
  <div class="weekly-card h-100" style="--weekly-color:${c.t};border-color:color-mix(in srgb, ${c.t} 32%, var(--border));">
    <div class="day">${d.day}</div>
    <h6>${d.focus}</h6>
    <div class="weekly-tag-row">
      <span class="weekly-tag">${d.priority}</span>
      ${(d.tracks || []).map(t => `<span class="weekly-tag">${t}</span>`).join('')}
    </div>
    <p>${d.connection}</p>
    <div class="weekly-detail"><strong>Estratégia de mercado</strong><span>${d.strategy}</span></div>
  </div>
</div>
<div class="col-12 col-md-6 col-xl-4">
  <div class="weekly-card h-100" style="--weekly-color:${c.t}">
    <div class="day">Prática recomendada</div>
    <h6>Como executar</h6>
    <p>${d.practice}</p>
    <div class="weekly-detail"><strong>Revisão obrigatória</strong><span>${d.review}</span></div>
  </div>
</div>
<div class="col-12 col-md-6 col-xl-4">
  <div class="weekly-card h-100" style="--weekly-color:${c.t}">
    <div class="day">Conteúdos do dia</div>
    <h6>Trilhas em foco</h6>
    <p>${(d.tracks || []).join(' · ')}</p>
    <div class="weekly-detail"><strong>Eixo de estudos</strong><span>Organização do dia por prioridade técnica, revisão ativa, prática orientada, aprofundamento conceitual e continuidade da rotina.</span></div>
  </div>
</div>`;
}
