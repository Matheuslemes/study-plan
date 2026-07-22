/* ═══════════════════════════════════════════════
   PAGES / DASHBOARD — ponto de entrada do index.html

   Substitui as ~2.200 linhas que viviam inline no HTML.
   Dados vêm de /data, comportamento de /features.
═══════════════════════════════════════════════ */

import { CK, heroTagsData, tracks } from '../../../data/tracks.js';
import { PC, PBG } from '../../../data/config.js';
import { P } from '../../../data/phases.js';
import { rules, awsMilestones } from '../../../data/milestones.js';

import { renderDailyDayTabs, setActiveDay, renderMonthlyCycle } from '../features/routine.js';
import { renderQuickTrackCards, renderPdfCards, setupNavbarTrackSearch, setupPdfSearch, renderBibliografia } from '../features/tracks.js';
import { renderPhaseDetails, filterPhase, filterTrack } from '../features/phases.js';
import { renderSync } from '../features/sync.js';
import { renderSeletorDeFase, getFaseAtual } from '../features/active-phase.js';
import { renderProgressoTrilhas, renderProgressoGlobal } from '../features/progress.js';
import { renderRevisoesDeHoje } from '../features/review.js';
import { renderCertificacoes } from '../features/certifications.js';
import { renderHoje } from '../features/today.js';
import { setupBuscaGlobal } from '../features/global-search.js';
import { renderEvolucao } from '../features/charts.js';
import { renderBackup } from '../features/backup.js';
import { registrarServiceWorker } from '../core/pwa.js';

const corDaTrilha = (k) => (CK[k] || CK.n).t;

function renderPhaseCards(faseAtualId) {
  const el = document.getElementById('phaseCards');
  if (!el) return;
  el.innerHTML = P.map((p, i) => {
    const atual = p.id === faseAtualId;
    return `
<div class="col-12 col-sm-6 col-lg-3">
  <div class="phase-card${atual ? ' is-current' : ''}">
    <div class="phase-stripe" style="background:${PC[i]}"></div>
    <div class="phase-top">
      <div class="d-flex justify-content-between align-items-start mb-1">
        <span class="s-label" style="background:${PBG[i]};color:${PC[i]}">${p.l}</span>
        <span class="s-hours" style="color:${PC[i]}">${p.h}h</span>
      </div>
      ${atual ? `<span class="phase-current-tag" style="background:${PC[i]}">▸ FASE ATUAL</span>` : ''}
      <div class="small mb-1" style="font-family:'IBM Plex Mono',monospace;font-size:.68rem;color:var(--text3)">${p.w}</div>
      <div class="phase-title">${p.t}</div>
      <div class="small mt-1" style="color:${CK.aws.t};font-family:'IBM Plex Mono',monospace;font-size:.7rem">${p.aws.cert}</div>
      ${p.aws.exam ? `<div class="aws-exam mt-1">${p.aws.exam}</div>` : ''}
      ${p.cand ? `<div class="cand-badge">${p.cn}</div>` : ''}
    </div>
  </div>
</div>`;
  }).join('');
}

function renderPainelProgresso() {
  const fase = getFaseAtual();
  renderProgressoGlobal('globalProgress', fase);
  renderProgressoTrilhas('trackProgressBars', corDaTrilha);
  renderRevisoesDeHoje('reviewToday', corDaTrilha);
  renderCertificacoes('certPanel');
  renderEvolucao('evolucaoChart', corDaTrilha('java'));
  renderBackup('backupPanel');
}

function init() {
  registrarServiceWorker();
  // Hero tags
  document.getElementById('heroTags').innerHTML =
    heroTagsData.map(t => `<span class="htag ${t.cls}">${t.label}</span>`).join('');

  // Track badges
  document.getElementById('trackBadges').innerHTML =
    tracks.map(t => `<span class="track-badge tb-${t.key}">${t.label} · ${t.h}${t.suffix !== undefined ? t.suffix : '/dia'}</span>`).join('');

  // Phase cards — o card da fase atual recebe destaque (STUDY-059)
  renderPhaseCards(getFaseAtual());

  // Phase progress
  const totalH = P.reduce((s, p) => s + p.h, 0);
  document.getElementById('phaseProgress').innerHTML = P.map((p, i) => `
<div class="mb-2">
  <div class="d-flex justify-content-between small mb-1">
    <span style="color:var(--text2);font-size:.8rem">${p.l}: ${p.t}</span>
    <span style="font-family:'IBM Plex Mono',monospace;font-size:.78rem;color:${PC[i]}">${p.h}h</span>
  </div>
  <div class="progress-bar-custom">
    <div class="progress-bar-fill" style="width:${Math.round(p.h / totalH * 100)}%;background:${PC[i]}"></div>
  </div>
</div>`).join('');

  renderQuickTrackCards();
  renderMonthlyCycle();
  renderPdfCards();
  renderBibliografia();
  setupNavbarTrackSearch();
  setupPdfSearch();

  // View "Hoje" — a informação principal do painel (STUDY-046)
  renderHoje('todayView');

  // Busca global: trilhas + PDFs + tópicos, com atalho "/" (STUDY-060/061)
  setupBuscaGlobal('trackSearchInput', 'globalSearchResults');

  // Painel de progresso, revisão e certificações (Etapa 8)
  renderPainelProgresso();
  // reflete conclusões marcadas nas páginas de trilha (storage) e revisões feitas
  document.addEventListener('progress:change', () => { renderPainelProgresso(); renderHoje('todayView'); });
  document.addEventListener('review:change', () => { renderRevisoesDeHoje('reviewToday', corDaTrilha); renderHoje('todayView'); });
  document.addEventListener('history:change', () => renderEvolucao('evolucaoChart', corDaTrilha('java')));

  // STUDY-066: mantém aria-selected coerente ao trocar de aba
  document.getElementById('mainTabs')?.addEventListener('shown.bs.tab', (e) => {
    document.querySelectorAll('#mainTabs [role="tab"]').forEach((t) => t.setAttribute('aria-selected', String(t === e.target)));
  });

  // Fase ativa: comanda o conteúdo da rotina (STUDY-020) e o painel de progresso
  renderSeletorDeFase('faseAtualPicker', (faseId) => {
    const diaAtivo = document.querySelector('#dailyDayTabs .active')?.dataset.dayKey || 'segunda';
    setActiveDay(diaAtivo);
    renderProgressoGlobal('globalProgress', faseId);
    renderPhaseCards(faseId); // move o destaque "FASE ATUAL"
    renderHoje('todayView');  // "Hoje" reflete o conteúdo da nova fase
  });

  // Daily weekly navigation
  renderDailyDayTabs();
  setActiveDay('segunda');

  // Phase filter buttons
  document.getElementById('phaseFilterBtns').innerHTML =
    `<button type="button" class="btn btn-sm" data-phase="all" style="background:var(--accent);color:#000;font-family:'IBM Plex Mono',monospace;font-size:.72rem;padding:.28rem .75rem;border-radius:6px;font-weight:700">Todas</button>` +
    P.map((p, i) => `<button type="button" class="btn btn-sm" data-phase="${p.id}" style="border:1px solid ${PC[i]};color:${PC[i]};font-family:'IBM Plex Mono',monospace;font-size:.72rem;padding:.28rem .75rem;border-radius:6px">${p.l}</button>`).join('');

  // event delegation: um listener no container, não um onclick por botão
  document.getElementById('phaseFilterBtns')?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-phase]');
    if (!btn) return;
    const valor = btn.dataset.phase;
    filterPhase(valor === 'all' ? null : Number(valor));
  });

  renderPhaseDetails(null);

  // Track filter buttons
  const tf = [
    { k: 'java', l: 'Java + Spring' }, { k: 'db', l: 'Banco SQL/NoSQL' }, { k: 'dsa', l: 'Algoritmos e ED' },
    { k: 'devops', l: 'DevOps / CI-CD' }, { k: 'sec', l: 'Segurança' }, { k: 'arquitetura', l: 'Arquitetura' },
    { k: 'aws', l: 'AWS Certs' }, { k: 'git', l: 'Git & Versionamento' }, { k: 'ingles', l: 'Inglês Técnico' },
    { k: 'pratica', l: 'Prática e exercícios' }, { k: 'frontend', l: 'Frontend Eng' }, { k: 'py', l: 'Python' },
    { k: 'ia', l: 'IA Engineering' }, { k: 'math', l: 'Matemática' }, { k: 'fin', l: 'Financeiro' }
  ];
  document.getElementById('trackFilterBtns').innerHTML = tf.map(t =>
    `<button type="button" class="btn btn-sm" data-track-filter="${t.k}" style="border:1px solid ${CK[t.k] ? CK[t.k].t : CK.n.t};color:${CK[t.k] ? CK[t.k].t : CK.n.t};font-family:'IBM Plex Mono',monospace;font-size:.72rem;padding:.28rem .75rem;border-radius:6px">${t.l}</button>`).join('');

  document.getElementById('trackFilterBtns')?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-track-filter]');
    if (btn) filterTrack(btn.dataset.trackFilter);
  });

  filterTrack('java');

  renderSync();

  // AWS timeline
  document.getElementById('awsTimeline').innerHTML =
    `<div class="timeline-line"></div>` + awsMilestones.map(m => `
  <div style="position:relative;padding-left:18px;margin-bottom:16px">
    <div class="timeline-dot" style="background:${m.col}"></div>
    <span style="font-family:'IBM Plex Mono',monospace;font-size:.68rem;color:var(--text3)">${m.w}</span>
    <div style="font-family:'IBM Plex Mono',monospace;color:${m.col};font-weight:700;font-size:.88rem;margin-top:1px">${m.c}</div>
  </div>`).join('');

  // Rules
  document.getElementById('rulesList').innerHTML = rules.map(r => {
    const c = CK[r.k] || CK.n;
    return `<div class="rule-item">
  <div class="rule-bar" style="background:${c.t}"></div>
  <div class="rule-text">${r.r}</div>
</div>`;
  }).join('');
}

/* ─── Quick track cards ──────────────────── */

document.addEventListener('DOMContentLoaded', init);
