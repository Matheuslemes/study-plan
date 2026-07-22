/* ═══════════════════════════════════════════════
   FEATURES / ROUTINE — rotina diária, semanal e mensal
═══════════════════════════════════════════════ */

import { CK } from '../../../data/tracks.js';
import { weekDays, weeklyFocusByDay, dailyPlansByDay } from '../../../data/routine.js';
import { monthlyCycle } from '../../../data/config.js';
import { faseAtual, seloDaFase } from './active-phase.js';

export function getDailyColor(block) {
  return CK[block.k] || CK[block.type] || CK.n;
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

export function renderDailySchedule(dayKey) {
  const fase = faseAtual();
  const scheduleEl = document.getElementById('dailySchedule');
  if (!scheduleEl) return;
  const blocks = dailyPlansByDay[dayKey] || dailyPlansByDay.segunda;
  scheduleEl.innerHTML = blocks.map(b => {
    const c = getDailyColor(b);
    const type = b.type || 'study';
    const isBreak = type === 'break';
    const tracks = Array.isArray(b.tracks) && b.tracks.length
      ? `<div class="daily-track-row">${b.tracks.map(t => `<span class="daily-track-tag">${t}</span>`).join('')}</div>`
      : '';
    const priority = b.priority ? `<span class="daily-priority">${b.priority}</span>` : '';
    const selo = seloDaFase(b, fase);
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
