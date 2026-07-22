/* ═══════════════════════════════════════════════
   FEATURES / SYNC — ciclos, dependências e matriz fase × trilhas
═══════════════════════════════════════════════ */

import { CK } from '../../../data/tracks.js';
import { PC, syncCycles } from '../../../data/config.js';
import { P } from '../../../data/phases.js';
import { awsMilestones, syncDependencies, syncCheckpoints } from '../../../data/milestones.js';

export function syncShort(text, max = 92) {
  const clean = (text || '').replace(/\s+/g, ' ').trim();
  return clean.length > max ? clean.slice(0, max - 1) + '…' : clean;
}
export function syncFirst(arr, fallback = 'Revisão e consolidação') {
  return syncShort((arr && arr.length ? arr[0] : fallback), 88);
}
export function syncLast(arr, fallback = 'Entregável prático validado') {
  return syncShort((arr && arr.length ? arr[arr.length - 1] : fallback), 92);
}

export function renderSync() {
  const totalHours = P.reduce((s, p) => s + p.h, 0);
  const phases = P.length;
  const certCount = awsMilestones.length;

  const kpis = [
    { label: 'Estrutura', value: `${phases} fases · 6 ciclos`, text: 'Cada ciclo conecta fases complementares e evita estudar trilhas como blocos isolados.' },
    { label: 'Carga prevista', value: `${totalHours.toLocaleString('pt-BR')}h`, text: 'Horas distribuídas entre estudo, exercícios, labs, revisão, documentação e checkpoints.' },
    { label: 'Prática', value: 'Exercícios e labs', text: 'Cada fase fecha com exercícios resolvidos e labs isolados que comprovam o domínio do conteúdo daquela fase.' },
    { label: 'Validação', value: '80% para avançar', text: 'A fase só fecha quando houver entregável, evidência, revisão, correção e explicação técnica.' }
  ];
  const kpiEl = document.getElementById('syncKpis');
  if (kpiEl) {
    kpiEl.innerHTML = kpis.map(k => `<div class="col-12 col-sm-6 col-lg-3">
  <div class="sync-kpi-card">
    <div class="sync-kpi-label">${k.label}</div>
    <div class="sync-kpi-value">${k.value}</div>
    <p>${k.text}</p>
  </div>
</div>`).join('');
  }

  const cycleEl = document.getElementById('syncCycleCards');
  if (cycleEl) {
    cycleEl.innerHTML = syncCycles.map(c => `<div class="col-12 col-md-6 col-xl-4">
  <article class="sync-cycle-card" style="--cycle-color:${c.color}">
    <div class="cycle-eyebrow">${c.period} · ${c.phases}</div>
    <h6>${c.title}</h6>
    <p>${c.goal}</p>
    <div class="sync-pill-row">${c.tracks.map(t => `<span class="sync-pill">${t}</span>`).join('')}</div>
    <p class="mt-2"><strong style="color:${c.color};font-family:'IBM Plex Mono',monospace;font-size:.68rem">Saída:</strong> ${c.output}</p>
  </article>
</div>`).join('');
  }

  const html = `<thead><tr>
<th style="color:var(--text2)">Fase</th>
<th style="color:${CK.java.t}">Núcleo técnico</th>
<th style="color:${CK.pratica.t}">Prática e labs</th>
<th style="color:${CK.aws.t}">Cloud · DevOps · Segurança</th>
<th style="color:${CK.ia.t}">IA · Dados · Comunicação</th>
<th style="color:${CK.fin.t}">Entrega sincronizada</th>
  </tr></thead><tbody>${P.map((p, i) => `<tr>
<td>
  <span class="sync-phase-title" style="color:${PC[i]}">${p.l}</span>
  <span class="sync-phase-sub">${p.w}</span>
  <span class="sync-phase-sub">${p.h}h · ${p.t}</span>
</td>
<td>
  <span class="sync-cell-title" style="color:${CK.java.t}">Java/Spring</span>
  <div class="sync-cell-desc">${syncFirst(p.java)}</div>
  <span class="sync-cell-title mt-2" style="color:${CK.db.t}">Banco</span>
  <div class="sync-cell-desc">${syncFirst(p.db)}</div>
</td>
<td>
  <span class="sync-cell-title" style="color:${CK.pratica.t}">Prática</span>
  <div class="sync-cell-desc">${syncFirst(p.pratica)}</div>
  <span class="sync-cell-title mt-2" style="color:${CK.frontend.t}">Frontend/Arquitetura</span>
  <div class="sync-cell-desc">${syncShort(`${syncFirst(p.frontend)} · ${syncFirst(p.arquitetura)}`, 120)}</div>
</td>
<td>
  <span class="sync-cell-title" style="color:${CK.aws.t}">${p.aws.cert}</span>
  <div class="sync-cell-desc">${p.aws.exam ? `Marco: ${p.aws.exam}` : 'Sem prova — aplicação progressiva em labs'}</div>
  <span class="sync-cell-title mt-2" style="color:${CK.devops.t}">Operação/Security</span>
  <div class="sync-cell-desc">${syncShort(`${syncFirst(p.devops)} · ${syncFirst(p.sec)}`, 120)}</div>
</td>
<td>
  <span class="sync-cell-title" style="color:${CK.py.t}">Python/IA</span>
  <div class="sync-cell-desc">${syncShort(`${syncFirst(p.py)} · ${syncFirst(p.ia)}`, 120)}</div>
  <span class="sync-cell-title mt-2" style="color:${CK.ingles.t}">Inglês/Math</span>
  <div class="sync-cell-desc">${syncShort(`${syncFirst(p.ingles)} · ${syncFirst(p.math)}`, 120)}</div>
</td>
<td>
  <span class="sync-cell-title" style="color:${PC[i]}">Checkpoint</span>
  <div class="sync-cell-desc">${syncLast(p.pratica, p.t)}</div>
  <div class="sync-pill-row mt-2">
    <span class="sync-pill">GitHub</span>
    <span class="sync-pill">Testes</span>
    <span class="sync-pill">README/ADR</span>
    <span class="sync-pill">Revisão</span>
  </div>
</td>
  </tr>`).join('')}</tbody>`;
  document.getElementById('syncTable').innerHTML = html;

  const depEl = document.getElementById('syncDependencies');
  if (depEl) {
    depEl.innerHTML = syncDependencies.map(d => {
      const c = CK[d.k] || CK.n;
      return `<div class="sync-board-item">
    <div class="sync-board-dot" style="--item-color:${c.t}"></div>
    <div><strong style="color:${c.t}">${d.title}</strong><p>${d.text}</p></div>
  </div>`;
    }).join('');
  }

  const checkEl = document.getElementById('syncCheckpoints');
  if (checkEl) {
    checkEl.innerHTML = syncCheckpoints.map(d => {
      const c = CK[d.k] || CK.n;
      return `<div class="sync-board-item">
    <div class="sync-board-dot" style="--item-color:${c.t}"></div>
    <div><strong style="color:${c.t}">${d.title}</strong><p>${d.text}</p></div>
  </div>`;
    }).join('');
  }
}
