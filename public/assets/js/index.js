
const {
  PC,
  PBG,
  CK,
  tracks,
  metrics,
  daily,
  weekly,
  P,
  rules,
  awsMilestones,
  trackDetails
} = window.STUDY_PLAN_DATA;

function getTrackHref(key) {
  const detail = trackDetails[key] || (key === 'py' ? trackDetails.python : null) || (key === 'math' ? trackDetails.math : null) || (key === 'fin' ? trackDetails.fin : null);
  return detail ? detail.page : '#';
}

function renderQuickTrackCards(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  const cardKeys = ['java', 'blog', 'aws', 'python', 'devops', 'math', 'ia', 'fin'];
  target.innerHTML = cardKeys.map((key) => {
    const detail = trackDetails[key];
    const colorKey = key === 'python' ? 'py' : key;
    const color = CK[colorKey]?.t || CK.n.t;
    const badgeClass = key === 'python' ? 'tb-py' : key === 'math' ? 'tb-math' : `tb-${key}`;
    return `
      <div class="col-12 col-sm-6 col-lg-3">
        <article class="quick-card" style="--track-color:${color}">
          <div class="d-flex justify-content-between align-items-start gap-2 mb-2">
            <span class="track-badge ${badgeClass}">${detail.badge}</span>
            <span class="mini-meta mono">${detail.shortName}</span>
          </div>
          <h6>${detail.title}</h6>
          <p>${detail.description}</p>
          <a href="${detail.page}">Abrir consulta rápida →</a>
        </article>
      </div>`;
  }).join('');
}

function init(){
  document.getElementById('metrics').innerHTML=metrics.map(m=>`
    <div class="col-6 col-sm-4 col-md-3 col-lg"><div class="metric-card">
      <div class="val mono">${m.v}</div><div class="lbl">${m.l}</div>
    </div></div>`).join('');

  document.getElementById('trackBadges').innerHTML=tracks.map(t=>
    `<span class="track-badge tb-${t.key}">${t.label} (${t.h}/dia)</span>`).join('');

  document.getElementById('phaseCards').innerHTML=P.map((p,i)=>`
    <div class="col-12 col-sm-6 col-lg-3"><div class="phase-card">
      <div class="phase-stripe" style="background:${PC[i]}"></div>
      <div class="phase-top">
        <div class="d-flex justify-content-between align-items-start mb-1">
          <span class="s-label" style="background:${PBG[i]};color:${PC[i]}">${p.l}</span>
          <span class="s-hours mono" style="color:${PC[i]}">${p.h}h</span>
        </div>
        <div class="small text-muted mb-1">${p.w}</div>
        <div class="phase-title">${p.t}</div>
        <div class="small" style="color:${CK.aws.t}">${p.aws.cert}</div>
        ${p.aws.exam?`<div class="aws-exam mt-1">${p.aws.exam}</div>`:''}
        ${p.cand?`<div class="cand-badge mt-2">${p.cn}</div>`:''}
      </div>
    </div></div>`).join('');

  const totalH=P.reduce((s,p)=>s+p.h,0);
  document.getElementById('phaseProgress').innerHTML=P.map((p,i)=>`
    <div class="mb-2">
      <div class="d-flex justify-content-between small mb-1">
        <span class="text-muted">${p.l}: ${p.t}</span>
        <span class="mono" style="color:${PC[i]}">${p.h}h</span>
      </div>
      <div class="progress-bar-custom"><div class="progress-bar-fill" style="width:${Math.round(p.h/totalH*100)}%;background:${PC[i]}"></div></div>
    </div>`).join('');

  renderQuickTrackCards('quickTrackCardsHome');
  renderQuickTrackCards('quickTrackCards');

  document.getElementById('dailySchedule').innerHTML=daily.map(b=>{
    const c=CK[b.k]; const isPause=b.block.includes('pausa');
    return `<div class="daily-block" style="${isPause?'opacity:0.55':''}">
      <div class="daily-time" style="background:${c.b}">
        <span class="mono small" style="color:${c.t};font-weight:600">${b.time}</span>
        <span class="mono" style="font-size:0.7rem;color:${c.t};opacity:0.7">${b.dur}</span>
      </div>
      <div class="daily-content">
        <h6 style="color:${c.t}">${b.block}</h6>
        <p>${b.d}</p>
      </div>
    </div>`;
  }).join('');

  document.getElementById('weeklyFocus').innerHTML=weekly.map(d=>`
    <div class="col-6 col-md-4 col-lg"><div class="weekly-card">
      <div class="day">${d.day}</div><h6>${d.focus}</h6><p>${d.d}</p>
    </div></div>`).join('');

  document.getElementById('phaseFilterBtns').innerHTML=
    `<button class="btn btn-sm" style="background:var(--accent);color:#fff;font-size:0.75rem;padding:3px 10px;border-radius:20px" onclick="filterPhase(null)">Todas</button>`+
    P.map((p,i)=>`<button class="btn btn-sm" style="border:1px solid ${PC[i]};color:${PC[i]};font-size:0.75rem;padding:3px 10px;border-radius:20px" onclick="filterPhase(${p.id})">${p.l}</button>`).join('');
  renderPhaseDetails(null);

  const tf=[
    {k:'java',l:'Java + SW Eng'},{k:'blog',l:'Blog Pessoal'},
    {k:'py',l:'Python'},{k:'devops',l:'DevOps'},
    {k:'aws',l:'AWS Certs'},{k:'math',l:'Matemática'},
    {k:'ia',l:'Trilha IA'},{k:'fin',l:'Financeiro'}
  ];
  document.getElementById('trackFilterBtns').innerHTML=tf.map(t=>
    `<button class="btn btn-sm" style="border:1px solid ${CK[t.k]?CK[t.k].t:CK.n.t};color:${CK[t.k]?CK[t.k].t:CK.n.t};font-size:0.8rem;padding:4px 14px;border-radius:20px" onclick="filterTrack('${t.k}')">${t.l}</button>`).join('');
  filterTrack('java');

  renderSync();

  document.getElementById('awsTimeline').innerHTML=
    `<div class="timeline-line"></div>`+awsMilestones.map(m=>`
      <div style="position:relative;padding-left:18px;margin-bottom:14px">
        <div class="timeline-dot" style="background:${m.col}"></div>
        <span class="text-muted small">${m.w}</span>
        <div class="mono" style="color:${m.col};font-weight:600;font-size:0.9rem">${m.c}</div>
      </div>`).join('');

  document.getElementById('rulesList').innerHTML=rules.map((r)=>{
    const c=CK[r.k]||CK.n;
    return `<div class="rule-item"><div class="rule-bar" style="background:${c.t}"></div>
      <div class="rule-text">${r.r}</div></div>`;
  }).join('');
}

function renderPhaseDetails(filterId){
  const phases=filterId?P.filter(p=>p.id===filterId):P;
  document.getElementById('phaseDetails').innerHTML=phases.map((p)=>{
    const i=p.id-1;
    const awsHtml=`<div class="track-section">
      <div class="section-head" style="color:${CK.aws.t};border-color:${CK.aws.t}">AWS: ${p.aws.cert}</div>
      ${p.aws.topics.map(t=>`<div class="bullet-item" style="color:${CK.aws.t}">${t}</div>`).join('')}
      ${p.aws.exam?`<div class="aws-exam mt-1">${p.aws.exam}</div>`:''}
    </div>`;
    return `<div class="phase-detail-card" style="border-top:3px solid ${PC[i]}">
      <div class="phase-detail-header" style="background:${PBG[i]}">
        <div>
          <span class="s-label" style="background:${PC[i]}20;color:${PC[i]}">${p.l}</span>
          <span class="text-muted small ms-2">${p.w} · ${p.h}h</span>
        </div>
        <span style="color:${PC[i]};font-weight:600">${p.t}</span>
      </div>
      ${p.cand?`<div class="px-3 pb-2"><div class="cand-badge">${p.cn}</div></div>`:''}
      <div class="phase-detail-body">
        <div class="row g-3">
          <div class="col-12 col-md-4">
            ${['java','blog'].map(k=>`<div class="track-section">
              <div class="section-head" style="color:${CK[k].t};border-color:${CK[k].t}">${k==='java'?'Java + SW Engineering':'Blog Pessoal'}</div>
              ${p[k].map(t=>`<div class="bullet-item">${t}</div>`).join('')}
            </div>`).join('')}
          </div>
          <div class="col-12 col-md-4">
            ${['py','devops'].map(k=>`<div class="track-section">
              <div class="section-head" style="color:${CK[k].t};border-color:${CK[k].t}">${k==='py'?'Python':'DevOps'}</div>
              ${p[k].map(t=>`<div class="bullet-item">${t}</div>`).join('')}
            </div>`).join('')}
          </div>
          <div class="col-12 col-md-4">
            ${awsHtml}
            <div class="track-section">
              <div class="section-head" style="color:${CK.math.t};border-color:${CK.math.t}">Matemática</div>
              ${p.math.map(t=>`<div class="bullet-item">${t}</div>`).join('')}
            </div>
            <div class="track-section">
              <div class="section-head" style="color:${CK.ia.t};border-color:${CK.ia.t}">Trilha IA</div>
              ${p.ia.map(t=>`<div class="bullet-item">${t}</div>`).join('')}
            </div>
            <div class="track-section">
              <div class="section-head" style="color:${CK.fin.t};border-color:${CK.fin.t}">Financeiro</div>
              ${p.fin.map(t=>`<div class="bullet-item">${t}</div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}
window.filterPhase=function(id){ renderPhaseDetails(id); };

window.filterTrack=function(k){
  const labels={java:'Java + SW Eng',blog:'Blog Pessoal',py:'Python',devops:'DevOps',aws:'AWS Certs',math:'Matemática',ia:'Trilha IA',fin:'Financeiro'};
  const label=labels[k]||k;
  document.getElementById('trackProgression').innerHTML=P.map((p,i)=>{
    let items;
    let extra='';
    if(k==='aws'){
      items=p.aws.topics;
      extra=`<div class="mb-2"><span class="mono small" style="color:${CK.aws.t};font-weight:600">${p.aws.cert}</span>
        ${p.aws.exam?`<span class="aws-exam ms-2">${p.aws.exam}</span>`:''}</div>`;
    } else {
      items=p[k]||[];
    }
    const detailKey = k === 'py' ? 'python' : k;
    const href = getTrackHref(detailKey);
    return `<div class="phase-detail-card mb-2" style="border-left:3px solid ${PC[i]}">
      <div class="phase-detail-header py-2 px-3">
        <span style="color:${PC[i]};font-weight:600;font-size:0.85rem">${p.l} — ${p.w}</span>
        <span class="text-muted small">${p.t}</span>
      </div>
      <div class="px-3 pb-3">
        ${extra}
        ${items.map(t=>`<div class="bullet-item">${t}</div>`).join('')}
        <a class="small mt-2 d-inline-block" style="color:${CK[k]?.t || CK.n.t};text-decoration:none;font-weight:700" href="${href}">Abrir página completa da trilha →</a>
      </div>
    </div>`;
  }).join('');
  document.querySelectorAll('.track-filter .btn').forEach(btn=>{
    const isActive=btn.textContent.trim()===label;
    btn.style.background=isActive?(CK[k]?CK[k].b:'#1c1c20'):'transparent';
    btn.style.fontWeight=isActive?'600':'400';
  });
};

function renderSync(){
  const html=`<thead><tr>
    <th style="color:var(--text2)">Semanas</th>
    <th style="color:${CK.java.t}">Java + Blog</th>
    <th style="color:${CK.py.t}">Python + DevOps</th>
    <th style="color:${CK.aws.t}">AWS + Math</th>
    <th style="color:${CK.ia.t}">IA + Financeiro</th>
  </tr></thead><tbody>${P.map((p,i)=>`<tr>
    <td class="mono" style="color:${PC[i]};font-weight:600">${p.w.replace('Sem ','')}</td>
    <td>${p.java[0].split(':')[0]}… <br><small class="text-muted">Blog: ${p.blog[0].split(':')[0]}…</small></td>
    <td style="color:${CK.py.t}">${p.py[0].split(':')[0]}… <br><small style="color:${CK.devops.t}">DevOps: ${p.devops[0].split(':')[0]}…</small></td>
    <td style="color:${CK.aws.t}">${p.aws.cert.split('—')[0]} ${p.aws.exam?'✓ PROVA':''}<br><small style="color:${CK.math.t}">Math: ${p.math[0].split(':')[0]}…</small></td>
    <td style="color:${CK.ia.t}">${p.ia[0]?.split('(')[0]||'Revisão'}<br><small style="color:${CK.fin.t}">${p.fin[0]?.split(':')[0]}…</small></td>
  </tr>`).join('')}</tbody>`;
  document.getElementById('syncTable').innerHTML=html;
}

document.addEventListener('DOMContentLoaded',init);
