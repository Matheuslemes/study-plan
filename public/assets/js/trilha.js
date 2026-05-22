
const {
  PC,
  CK,
  P,
  trackDetails
} = window.STUDY_PLAN_DATA;

const htmlEscape = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

function list(items = [], className = 'list-clean') {
  return `<ul class="${className}">${items.map(item => `<li>${htmlEscape(item)}</li>`).join('')}</ul>`;
}

function contentGroups(groups = [], color) {
  return `<div class="info-grid">${groups.map(group => `
    <article class="info-card searchable" style="--section-color:${color}">
      <h3>${htmlEscape(group.title)}</h3>
      ${list(group.items)}
    </article>`).join('')}</div>`;
}

function projectCards(projects = []) {
  return `<div class="row g-3">${projects.map(project => `
    <div class="col-12 col-md-6">
      <article class="project-card searchable">
        <h3>${htmlEscape(project.name)}</h3>
        <p>${htmlEscape(project.description)}</p>
      </article>
    </div>`).join('')}</div>`;
}

function concepts(items = []) {
  return `<div class="row g-2">${items.map(item => `
    <div class="col-12 col-md-6">
      <div class="concept-item searchable">${htmlEscape(item)}</div>
    </div>`).join('')}</div>`;
}

function roadmap(detail, color) {
  const sourceKey = detail.sourceKey;
  return P.map((phase, index) => {
    let title = `${phase.l} — ${phase.t}`;
    let items = [];
    let extra = '';
    if (sourceKey === 'aws') {
      title = `${phase.l} — ${phase.aws.cert}`;
      items = phase.aws.topics || [];
      extra = phase.aws.exam ? `<span class="aws-exam">${htmlEscape(phase.aws.exam)}</span>` : '';
    } else {
      items = phase[sourceKey] || [];
    }
    return `
      <article class="roadmap-card searchable" style="--phase-color:${PC[index]};--section-color:${color}">
        <div class="roadmap-meta">${htmlEscape(phase.w)} · ${phase.h}h ${extra}</div>
        <h3>${htmlEscape(title)}</h3>
        ${phase.cand ? `<div class="cand-badge mb-2">${htmlEscape(phase.cn)}</div>` : ''}
        ${list(items)}
      </article>`;
  }).join('');
}

function renderTrackPage() {
  const key = document.body.dataset.track;
  const detail = trackDetails[key];
  if (!detail) {
    document.getElementById('trackMain').innerHTML = '<div class="container py-5"><p>Trilha não encontrada.</p></div>';
    return;
  }

  const colorKey = key === 'python' ? 'py' : key;
  const color = CK[colorKey]?.t || CK.n.t;
  const badgeClass = key === 'python' ? 'tb-py' : key === 'math' ? 'tb-math' : `tb-${key}`;

  document.documentElement.style.setProperty('--accent', color);
  document.title = `${detail.title} — Plano Integrado de Estudos`;

  document.getElementById('trackHeader').innerHTML = `
    <a class="back-link" href="../index.html">← Voltar ao plano</a>
    <div class="track-title-row">
      <div>
        <span class="track-badge ${badgeClass} mb-2">${htmlEscape(detail.badge)}</span>
        <h1 class="track-page-title">${htmlEscape(detail.title)}</h1>
      </div>
      <a class="btn btn-sm btn-outline-light" href="../index.html">Dashboard principal</a>
    </div>
    <p class="track-page-description mt-3 mb-0">${htmlEscape(detail.description)}</p>`;

  document.getElementById('trackMain').innerHTML = `
    <section id="resumo" class="track-section-page searchable">
      <div class="section-card" style="--section-color:${color}">
        <h2>Resumo</h2>
        <p><strong>Objetivo:</strong> ${htmlEscape(detail.objective)}</p>
        ${list(detail.summary)}
      </div>
    </section>

    <section id="conteudos" class="track-section-page">
      <h2>Conteúdos principais</h2>
      ${contentGroups(detail.contentGroups, color)}
    </section>

    <section id="roadmap" class="track-section-page">
      <h2>Roadmap por fase</h2>
      ${roadmap(detail, color)}
    </section>

    <section id="checklist" class="track-section-page searchable">
      <div class="section-card" style="--section-color:${color}">
        <h2>Checklist de domínio</h2>
        ${list(detail.checklist, 'list-clean check-list')}
      </div>
    </section>

    <section id="projetos" class="track-section-page">
      <h2>Mini projetos práticos</h2>
      ${projectCards(detail.projects)}
    </section>

    <section id="consulta" class="track-section-page">
      <h2>Consulta rápida de conceitos</h2>
      ${concepts(detail.concepts)}
    </section>

    ${detail.architectureText ? `
    <section id="arquitetura" class="track-section-page searchable">
      <h2>Diagrama textual da arquitetura</h2>
      <div class="architecture-box">${htmlEscape(detail.architectureText.join('\n'))}</div>
    </section>` : ''}

    <section id="referencias" class="track-section-page searchable">
      <div class="section-card" style="--section-color:${color}">
        <h2>Referências recomendadas</h2>
        ${list(detail.references)}
      </div>
    </section>

    <section id="proximos-passos" class="track-section-page searchable">
      <div class="section-card" style="--section-color:${color}">
        <h2>Próximos passos</h2>
        ${list(detail.nextSteps)}
      </div>
    </section>`;

  const footer = document.getElementById('trackFooterTitle');
  if (footer) footer.textContent = detail.title;

  setupSearch();
  setupBackToTop();
}

function setupSearch() {
  const input = document.getElementById('trackSearch');
  if (!input) return;
  input.addEventListener('input', () => {
    const term = input.value.trim().toLowerCase();
    document.querySelectorAll('.searchable').forEach((node) => {
      const visible = !term || node.textContent.toLowerCase().includes(term);
      node.classList.toggle('search-hidden', !visible);
    });
  });
}

function setupBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 450);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

document.addEventListener('DOMContentLoaded', renderTrackPage);
