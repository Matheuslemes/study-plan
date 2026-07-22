/* ═══════════════════════════════════════════════
   FEATURES / PHASES — detalhe por fase e progressão por trilha
═══════════════════════════════════════════════ */

import { CK } from '../../../data/tracks.js';
import { PC, PBG } from '../../../data/config.js';
import { P } from '../../../data/phases.js';

export function renderPhaseDetails(filterId) {
  const phases = filterId ? P.filter(p => p.id === filterId) : P;
  document.getElementById('phaseDetails').innerHTML = phases.map((p) => {
    const i = p.id - 1;
    const awsHtml = `<div class="track-section">
  <div class="section-head" style="color:${CK.aws.t};border-color:${CK.aws.t}">AWS: ${p.aws.cert}</div>
  ${p.aws.topics.map(t => `<div class="bullet-item">${t}</div>`).join('')}
  ${p.aws.exam ? `<div class="aws-exam mt-1">${p.aws.exam}</div>` : ''}
</div>`;
    return `<div class="phase-detail-card" style="border-top:3px solid ${PC[i]}">
  <div class="phase-detail-header" style="background:${PBG[i]}">
    <div>
      <span class="s-label" style="background:${PC[i]}22;color:${PC[i]}">${p.l}</span>
      <span class="text-muted small ms-2">${p.w} · ${p.h}h</span>
    </div>
    <span style="color:${PC[i]};font-family:'Syne',sans-serif;font-weight:700;font-size:.9rem">${p.t}</span>
  </div>
  ${p.cand ? `<div class="px-3 pb-2"><div class="cand-badge">${p.cn}</div></div>` : ''}
  <div class="phase-detail-body">
    <div class="row g-3">
      <div class="col-12 col-lg-3">
        ${['java', 'dsa', 'git', 'arquitetura', 'ingles'].map(k => `<div class="track-section">
          <div class="section-head" style="color:${CK[k].t};border-color:${CK[k].t}">${k === 'java' ? 'Java + Spring' : k === 'dsa' ? 'Algoritmos e Estruturas de Dados' : k === 'git' ? 'Git & Versionamento' : k === 'arquitetura' ? 'Arquitetura de Solução/Integração' : 'Inglês Técnico'}</div>
          ${(p[k] || []).map(t => `<div class="bullet-item">${t}</div>`).join('')}
        </div>`).join('')}
      </div>
      <div class="col-12 col-lg-3">
        ${['pratica', 'frontend', 'db'].map(k => `<div class="track-section">
          <div class="section-head" style="color:${CK[k].t};border-color:${CK[k].t}">${k === 'pratica' ? 'Prática e exercícios' : k === 'frontend' ? 'Frontend Engineering' : 'Banco de Dados SQL/NoSQL'}</div>
          ${(p[k] || []).map(t => `<div class="bullet-item">${t}</div>`).join('')}
        </div>`).join('')}
      </div>
      <div class="col-12 col-lg-3">
        ${['py', 'devops', 'sec'].map(k => `<div class="track-section">
          <div class="section-head" style="color:${CK[k].t};border-color:${CK[k].t}">${k === 'py' ? 'Python' : k === 'devops' ? 'DevOps' : 'Segurança Full Stack'}</div>
          ${(p[k] || []).map(t => `<div class="bullet-item">${t}</div>`).join('')}
        </div>`).join('')}
        ${awsHtml}
      </div>
      <div class="col-12 col-lg-3">
        <div class="track-section">
          <div class="section-head" style="color:${CK.math.t};border-color:${CK.math.t}">Matemática</div>
          ${p.math.map(t => `<div class="bullet-item">${t}</div>`).join('')}
        </div>
        <div class="track-section">
          <div class="section-head" style="color:${CK.ia.t};border-color:${CK.ia.t}">IA Engineering</div>
          ${p.ia.map(t => `<div class="bullet-item">${t}</div>`).join('')}
        </div>
        <div class="track-section">
          <div class="section-head" style="color:${CK.fin.t};border-color:${CK.fin.t}">Financeiro</div>
          ${p.fin.map(t => `<div class="bullet-item">${t}</div>`).join('')}
        </div>
      </div>
    </div>
  </div>
</div>`;
  }).join('');
}
export const filterPhase = (id) => renderPhaseDetails(id);

/* ─── Track filter ───────────────────────── */
export function filterTrack(k) {
  const labels = {
    java: 'Java + Spring', ingles: 'Inglês Técnico', pratica: 'Prática e exercícios', git: 'Git & Versionamento', arquitetura: 'Arquitetura', frontend: 'Frontend Eng', py: 'Python',
    devops: 'DevOps / CI-CD', sec: 'Segurança', aws: 'AWS Certs', db: 'Banco SQL/NoSQL', dsa: 'Algoritmos e ED',
    math: 'Matemática', ia: 'IA Engineering', fin: 'Financeiro'
  };
  const label = labels[k] || k;
  const color = CK[k] ? CK[k].t : CK.n.t;
  document.getElementById('trackProgression').innerHTML = P.map((p, i) => {
    let items; let extra = '';
    if (k === 'aws') {
      items = p.aws.topics;
      extra = `<div class="mb-2">
    <span style="font-family:'IBM Plex Mono',monospace;font-size:.75rem;color:${CK.aws.t};font-weight:700">${p.aws.cert}</span>
    ${p.aws.exam ? `<span class="aws-exam ms-2">${p.aws.exam}</span>` : ''}
  </div>`;
    } else { items = p[k] || [] }
    return `<div class="phase-detail-card mb-2" style="border-left:3px solid ${PC[i]}">
  <div class="phase-detail-header py-2 px-3">
    <span style="color:${PC[i]};font-family:'IBM Plex Mono',monospace;font-weight:700;font-size:.82rem">${p.l} — ${p.w}</span>
    <span class="text-muted small">${p.t}</span>
  </div>
  <div class="px-3 pb-3">${extra}${items.map(t => `<div class="bullet-item">${t}</div>`).join('')}</div>
</div>`;
  }).join('');
  // o botão ativo é identificado pela chave em data-track-filter,
  // não mais comparando o texto visível (que quebra ao renomear um rótulo)
  document.querySelectorAll('[data-track-filter]').forEach(btn => {
    const isActive = btn.dataset.trackFilter === k;
    btn.style.background = isActive ? (CK[k] ? CK[k].b + 'cc' : '#141a24') : 'transparent';
    btn.style.fontWeight = isActive ? '700' : '500';
    btn.setAttribute('aria-pressed', String(isActive));
  });
}
