/*
 * Renderer único das Academias.
 *
 * A trilha fornece apenas identidade, dados e shells. Este arquivo normaliza
 * diferenças históricas de schema, deriva todos os contadores e emite somente
 * o vocabulário ac-*.
 */

import { initNav } from '../core/nav.js';
import { registrarServiceWorker } from '../core/pwa.js';
import { escapeHtml } from '../core/render.js';
import { resolvePublicUrl } from '../core/public-url.js';
import { renderSystemHeader } from '../core/system-header.js';
import { getTrackConfig } from '../../../data/tracks.js';

const LABELS = {
  intuition: 'Intuição',
  mathematics: 'Formalização',
  conceptExample: 'Exemplo conceitual',
  implementation: 'Implementação de referência',
  appliedExample: 'Aplicação',
  correctedApproach: 'Abordagem corrigida',
  decision: 'Decisão',
  hypothesis: 'Hipótese verificável',
  complexity: 'Complexidade',
  practice: 'Prática por senioridade',
  case: 'Caso operacional',
  wrongApproach: 'Abordagem que falha',
  summary: 'Síntese de domínio'
};

const FIELD_ORDER = [
  'intuition',
  'mathematics',
  'conceptExample',
  'implementation',
  'appliedExample',
  'correctedApproach',
  'decision',
  'hypothesis',
  'complexity',
  'practice',
  'case',
  'wrongApproach'
];

function asArray(value) {
  if (value == null || value === '') return [];
  return Array.isArray(value) ? value : [value];
}

function titleFromKey(key) {
  return String(key)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replaceAll('_', ' ')
    .replace(/^./, (character) => character.toUpperCase());
}

function renderValue(value, depth = 0) {
  if (value == null || value === '') return '';
  if (Array.isArray(value)) {
    return `<ul class="ac-list">${value.map((item) => `<li>${renderValue(item, depth + 1)}</li>`).join('')}</ul>`;
  }
  if (typeof value === 'object') {
    return `<dl class="ac-data-list">${Object.entries(value).map(([key, item]) => {
      if (item == null || item === '') return '';
      const content = key === 'code'
        ? `<pre class="ac-code"><code>${escapeHtml(item)}</code></pre>`
        : renderValue(item, depth + 1);
      return `<div><dt>${escapeHtml(titleFromKey(key))}</dt><dd>${content}</dd></div>`;
    }).join('')}</dl>`;
  }
  if (depth > 0) return escapeHtml(value);
  return `<p>${escapeHtml(value)}</p>`;
}

function list(items, className = 'ac-list') {
  const values = asArray(items);
  if (!values.length) return '';
  return `<ul class="${className}">${values.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

function renderTop(model, partId) {
  const { academy, config, modules } = model;
  const part = academy.parts[partId];
  const partEntries = Object.entries(academy.parts);
  const firstPage = partEntries[0][1].page || `${partEntries[0][0]}.html`;

  document.title = `${part.title} — ${academy.title}`;
  document.querySelector('#moduleTotal').textContent = `${modules.length} módulos`;
  document.querySelector('#moduleIndex').textContent = `${config.shortLabel} · parte ${part.index}`;
  document.querySelector('#moduleTitle').textContent = part.title;
  document.querySelector('#moduleLead').textContent = `${part.range || `Parte ${part.index}`} · ${part.subtitle}`;
  document.querySelector('#moduleBaseline').textContent = academy.baseline;
  document.querySelector('#academyBrand').firstChild.textContent = `${config.brand} `;
  document.querySelector('#hubLink').href = `../${config.id}.html`;
  document.querySelector('#moduleNav').innerHTML = partEntries.map(([id, item]) => {
    const page = item.page || `${id}.html`;
    return `<a class="nav-link" href="./${escapeHtml(page)}"
      ${id === partId ? 'aria-current="page"' : ''}>${escapeHtml(item.navLabel || item.title)}</a>`;
  }).join('');
  document.querySelector('#viewNav')?.remove();
  renderSystemHeader({ config, firstPage, view: 'academy', depth: 'academy' });
}

function renderGuide(part) {
  return `
    <section class="doc-section ac-guide searchable-section" data-search-section id="guia">
      <div class="doc-section-heading">
        <div>
          <p class="ac-eyebrow">Contrato da parte</p>
          <h2>Pré-requisitos e objetivos</h2>
          <p class="section-subtitle">Entrada explícita e resultado observável.</p>
        </div>
        <span class="section-badge">${escapeHtml(part.range || `Parte ${part.index}`)}</span>
      </div>
      <div class="ac-split">
        <article class="ac-panel">
          <h3>Pré-requisitos</h3>
          ${list(part.prerequisites)}
        </article>
        <article class="ac-panel">
          <h3>Ao concluir, você consegue</h3>
          ${list(part.objectives)}
        </article>
      </div>
      <aside class="ac-callout">
        <strong>Regra de evidência</strong>
        <p>“Validado” exige uma URL HTTP(S) revisável. “Dominado” exige revisão D30 registrada.</p>
      </aside>
    </section>
  `;
}

function renderInterview(items) {
  return asArray(items).map((item) => {
    if (typeof item !== 'object') return `<article class="ac-interview-card"><p>${escapeHtml(item)}</p></article>`;
    return `
      <article class="ac-interview-card">
        <span>${escapeHtml(item.level || 'Discussão')}</span>
        <h4>${escapeHtml(item.question || item.title || 'Pergunta')}</h4>
        ${item.expected ? `<p><strong>Critério:</strong> ${escapeHtml(item.expected)}</p>` : ''}
      </article>
    `;
  }).join('');
}

function renderExercises(items) {
  return asArray(items).map((item, index) => {
    if (typeof item !== 'object') {
      return `<article class="ac-exercise-card"><span>${String(index + 1).padStart(2, '0')}</span><p>${escapeHtml(item)}</p></article>`;
    }
    return `
      <article class="ac-exercise-card">
        <span>${String(index + 1).padStart(2, '0')} · ${escapeHtml(item.level || item.kind || 'Prática')}</span>
        <h4>${escapeHtml(item.title || item.task || 'Exercício verificável')}</h4>
        ${item.task && item.title ? `<p>${escapeHtml(item.task)}</p>` : ''}
        ${item.acceptance ? `<p><strong>Aceite:</strong> ${escapeHtml(item.acceptance)}</p>` : ''}
        ${item.evidence ? `<p><strong>Evidência:</strong> ${escapeHtml(item.evidence)}</p>` : ''}
      </article>
    `;
  }).join('');
}

function renderOptionalDetails(module) {
  const cards = FIELD_ORDER
    .filter((key) => module[key] != null && module[key] !== '')
    .map((key) => `
      <article class="ac-detail-card">
        <h3>${escapeHtml(LABELS[key])}</h3>
        ${renderValue(module[key])}
      </article>
    `);
  return cards.length ? `<div class="ac-detail-grid">${cards.join('')}</div>` : '';
}

function resolveBook(model, reference) {
  if (!reference) return null;
  if (typeof reference === 'object') return reference;
  return model.books[reference] || null;
}

function renderSources(model, module) {
  const references = [
    ...asArray(module.book),
    ...asArray(module.books),
    ...asArray(module.bookRefs)
  ];
  const bookLinks = references.map((reference) => {
    const book = resolveBook(model, reference);
    if (!book) return `<li>${escapeHtml(reference)}</li>`;
    return `<li><a href="${escapeHtml(resolvePublicUrl(book.path))}" target="_blank" rel="noopener noreferrer">
      ${escapeHtml(book.title)}</a> · ${escapeHtml(book.edition || String(book.year || ''))}</li>`;
  });
  const textSources = [
    ...asArray(module.complements),
    ...asArray(module.sources),
    ...asArray(module.externalRefs)
  ].map((source) => {
    if (typeof source === 'object' && source.url) {
      return `<li><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title || source.url)}</a></li>`;
    }
    return `<li>${escapeHtml(typeof source === 'object' ? JSON.stringify(source) : source)}</li>`;
  });
  const example = module.exampleFile
    ? `<a class="ac-source-link" href="${escapeHtml(resolvePublicUrl(module.exampleFile))}">Abrir exemplo versionado →</a>`
    : '';
  if (!bookLinks.length && !textSources.length && !example) return '';
  return `
    <details class="ac-details">
      <summary>Fontes, livros e exemplo</summary>
      ${bookLinks.length ? `<h4>Bibliografia</h4><ul>${bookLinks.join('')}</ul>` : ''}
      ${textSources.length ? `<h4>Complementos</h4><ul>${textSources.join('')}</ul>` : ''}
      ${example}
    </details>
  `;
}

function renderModule(model, module) {
  const concepts = module.concepts || module.topics || [];
  const useWhen = module.useWhen || (module.decision ? [module.decision] : []);
  const avoidWhen = module.avoidWhen || (module.wrongApproach ? [module.wrongApproach] : []);
  const production = module.production || module.productionImpact;
  const risks = module.risks || module.errors || [];
  const interviews = module.interview || module.interviews || [];
  const challenge = [
    module.challenge,
    module.seniorChallenge && `Sênior: ${module.seniorChallenge}`,
    module.expertChallenge && `Expert: ${module.expertChallenge}`
  ].filter(Boolean);

  return `
    <section class="doc-section ac-module searchable-section" data-search-section id="${escapeHtml(module.id)}">
      <div class="doc-section-heading">
        <div>
          <p class="ac-eyebrow">Módulo ${module.number} · ${escapeHtml(module.level || 'Progressivo')}</p>
          <h2>${escapeHtml(module.title)}</h2>
          <p class="section-subtitle">${escapeHtml(module.objective)}</p>
        </div>
        <span class="section-badge">${module.number}/${model.modules.length}</span>
      </div>

      <div class="ac-contract">
        <article><span>Problema</span><p>${escapeHtml(module.problem || 'Definir a decisão e o risco antes da solução.')}</p></article>
        <article><span>Pré-requisitos</span>${list(module.prerequisites)}</article>
      </div>

      ${concepts.length ? `
        <h3>Conceitos obrigatórios</h3>
        <div class="ac-module-grid">${asArray(concepts).map((item) => `<div class="ac-module-card">${escapeHtml(item)}</div>`).join('')}</div>
      ` : ''}

      ${module.internals ? `<div class="ac-panel"><h3>Como funciona por dentro</h3>${renderValue(module.internals)}</div>` : ''}

      ${(asArray(useWhen).length || asArray(avoidWhen).length) ? `
        <div class="ac-contrast">
          <article><span>Use quando</span>${list(useWhen)}</article>
          <article><span>Evite quando</span>${list(avoidWhen)}</article>
        </div>
      ` : ''}

      ${module.contrast ? `
        <div class="ac-contrast">
          <article><span>Abordagem frágil</span>${renderValue(module.contrast.bad)}</article>
          <article><span>Abordagem defensável</span>${renderValue(module.contrast.good)}</article>
        </div>
      ` : ''}

      ${renderOptionalDetails(module)}

      <div class="ac-split">
        ${module.tradeoffs ? `<article class="ac-panel"><h3>Trade-offs</h3>${renderValue(module.tradeoffs)}</article>` : ''}
        ${production ? `<article class="ac-panel"><h3>Impacto em produção</h3>${renderValue(production)}</article>` : ''}
        ${asArray(risks).length ? `<article class="ac-panel"><h3>Riscos e falhas</h3>${renderValue(risks)}</article>` : ''}
        ${module.checklist ? `<article class="ac-panel"><h3>Checklist verificável</h3>${renderValue(module.checklist)}</article>` : ''}
      </div>

      ${asArray(interviews).length ? `<h3>Entrevista e defesa</h3><div class="ac-interview-grid">${renderInterview(interviews)}</div>` : ''}
      ${asArray(module.exercises).length ? `<h3>Exercícios</h3><div class="ac-exercise-grid">${renderExercises(module.exercises)}</div>` : ''}
      ${challenge.length ? `<aside class="ac-callout"><strong>Desafio de senioridade</strong>${renderValue(challenge)}</aside>` : ''}
      ${module.caseStudy ? `<details class="ac-details"><summary>Estudo de caso completo</summary>${renderValue(module.caseStudy)}</details>` : ''}
      ${module.summary ? `<p class="ac-summary"><strong>Resumo:</strong> ${escapeHtml(module.summary)}</p>` : ''}
      ${renderSources(model, module)}
    </section>
  `;
}

function renderModulePage(model, partId) {
  const part = model.academy.parts[partId];
  const modules = model.modules.filter((module) => module.part === partId);
  document.querySelector('#moduleSidebar').innerHTML = `
    <div class="sidebar-label">${escapeHtml(part.title)}</div>
    <a href="#guia">Pré-requisitos e objetivos</a>
    ${modules.map((module) => `<a href="#${escapeHtml(module.id)}">${module.number}. ${escapeHtml(module.title)}</a>`).join('')}
  `;
  document.querySelector('#moduleContent').innerHTML = renderGuide(part) + modules.map((module) => renderModule(model, module)).join('');
}

function renderLevels(levels) {
  return asArray(levels).map((item) => `
    <article class="ac-level-card">
      <span>${escapeHtml(item.level)}</span>
      <h3>${escapeHtml(item.expected)}</h3>
      <p><strong>Evidência:</strong> ${escapeHtml(item.evidence)}</p>
      <p><strong>Sinais de alerta:</strong> ${escapeHtml(asArray(item.redFlags).join(' · '))}</p>
    </article>
  `).join('');
}

function renderCases(cases) {
  return asArray(cases).map((item, index) => `
    <article class="ac-case-card searchable-section" data-search-section id="${escapeHtml(item.id || `caso-${index + 1}`)}">
      <p class="ac-eyebrow">Caso ${index + 1}/${cases.length}</p>
      <h3>${escapeHtml(item.title)}</h3>
      ${renderValue(item.scenario || item.context || item.problem)}
      ${item.constraints ? `<h4>Restrições</h4>${renderValue(item.constraints)}` : ''}
      ${item.decisions ? `<h4>Decisões</h4>${renderValue(item.decisions)}` : ''}
      ${item.deliverables ? `<h4>Entregáveis</h4>${renderValue(item.deliverables)}` : ''}
      ${item.investigation ? `<h4>Investigação</h4>${renderValue(item.investigation)}` : ''}
      ${item.correction ? `<h4>Correção</h4>${renderValue(item.correction)}` : ''}
      ${item.prevention ? `<h4>Prevenção</h4>${renderValue(item.prevention)}` : ''}
    </article>
  `).join('');
}

function renderProjects(projects) {
  return asArray(projects).map((project, index) => `
    <article class="ac-project-card searchable-section" data-search-section id="${escapeHtml(project.id || `entrega-${index + 1}`)}">
      <p class="ac-eyebrow">Entrega ${index + 1}/${projects.length}</p>
      <h3>${escapeHtml(project.title)}</h3>
      ${project.evolves ? `<p><strong>Evolui:</strong> ${escapeHtml(project.evolves)}</p>` : ''}
      ${renderValue(project.objective)}
      ${project.architecture ? `<h4>Arquitetura</h4>${renderValue(project.architecture)}` : ''}
      ${project.requirements ? `<h4>Requisitos</h4>${renderValue(project.requirements)}` : ''}
      ${project.stages ? `<h4>Evolução do artefato</h4>${renderValue(project.stages)}` : ''}
      ${project.acceptance ? `<h4>Critérios de aceite</h4>${renderValue(project.acceptance)}` : ''}
      ${project.metrics ? `<h4>Métricas</h4>${renderValue(project.metrics)}` : ''}
      ${project.tests ? `<h4>Testes</h4>${renderValue(project.tests)}` : ''}
      ${project.seniorSignal ? `<aside class="ac-callout"><strong>Sinal de nível</strong><p>${escapeHtml(project.seniorSignal)}</p></aside>` : ''}
    </article>
  `).join('');
}

function renderBooks(books) {
  return Object.values(books).map((book) => `
    <article class="ac-book-card">
      <span>${escapeHtml(book.edition || 'Edição local')} · ${escapeHtml(book.year || '')} · ${book.pages || '—'} páginas</span>
      <h3><a href="${escapeHtml(resolvePublicUrl(book.path))}" target="_blank" rel="noopener noreferrer">${escapeHtml(book.title)}</a></h3>
      <p><strong>${escapeHtml(book.authors || 'Autoria indicada no arquivo')}</strong> · ${escapeHtml(book.language || '')} · ${escapeHtml(book.depth || '')}</p>
      ${book.structure ? `<p><strong>Estrutura:</strong> ${escapeHtml(book.structure)}</p>` : ''}
      ${book.prerequisites ? `<p><strong>Pré-requisitos:</strong> ${escapeHtml(book.prerequisites)}</p>` : ''}
      ${book.limitations ? `<p><strong>Limite editorial:</strong> ${escapeHtml(book.limitations)}</p>` : ''}
    </article>
  `).join('');
}

function interviewRows(modules) {
  return modules.flatMap((module) => asArray(module.interview || module.interviews).map((item) => `
    <tr>
      <td>${module.number}. ${escapeHtml(module.title)}</td>
      <td>${escapeHtml(typeof item === 'object' ? item.level || 'Discussão' : 'Discussão')}</td>
      <td>${escapeHtml(typeof item === 'object' ? item.question || item.title || '' : item)}</td>
      <td>${escapeHtml(typeof item === 'object' ? item.expected || 'Defender a decisão com evidência.' : 'Resposta argumentada.')}</td>
    </tr>
  `)).join('');
}

function renderAssessment(model, partId) {
  const part = model.academy.parts[partId];
  const cases = model.assessment.caseStudies?.length
    ? model.assessment.caseStudies
    : model.modules.map((module) => module.caseStudy).filter(Boolean);
  const projects = model.projects?.length ? model.projects : model.assessment.projects || [];
  const interviewCount = model.modules.reduce((sum, module) => sum + asArray(module.interview || module.interviews).length, 0);
  const sidebarLinks = [
    ['guia', 'Pré-requisitos e objetivos'],
    ['rubricas', 'Rubricas por nível'],
    cases.length && ['casos', 'Estudos de caso'],
    projects.length && ['projetos', 'Produto evolutivo'],
    Object.keys(model.books).length && ['biblioteca', 'Biblioteca técnica'],
    model.baseline?.length && ['baseline-tecnologico', 'Baseline tecnológico'],
    interviewCount && ['entrevista', 'Banco de entrevista'],
    model.answerKey?.length && ['gabarito', 'Gabarito por módulo'],
    ['conclusao', 'Critérios de conclusão']
  ].filter(Boolean);

  document.querySelector('#moduleSidebar').innerHTML = `
    <div class="sidebar-label">Avaliação prática</div>
    ${sidebarLinks.map(([id, label]) => `<a href="#${id}">${escapeHtml(label)}</a>`).join('')}
  `;

  document.querySelector('#moduleContent').innerHTML = `
    ${renderGuide(part)}
    <section class="doc-section searchable-section" data-search-section id="rubricas">
      <div class="doc-section-heading"><div><p class="ac-eyebrow">Avaliação</p><h2>Rubricas por senioridade</h2>
      <p class="section-subtitle">Profundidade aparece na decisão, no risco residual e no aprendizado.</p></div>
      <span class="section-badge">${model.assessment.levels.length} níveis</span></div>
      <div class="ac-level-grid">${renderLevels(model.assessment.levels)}</div>
    </section>
    ${cases.length ? `<section class="doc-section" id="casos"><div class="doc-section-heading"><div><p class="ac-eyebrow">Decisão sob restrição</p>
      <h2>Estudos de caso</h2></div><span class="section-badge">${cases.length} casos</span></div>
      <div class="ac-case-list">${renderCases(cases)}</div></section>` : ''}
    ${projects.length ? `<section class="doc-section" id="projetos"><div class="doc-section-heading"><div><p class="ac-eyebrow">Portfólio incremental</p>
      <h2>Produto evolutivo</h2></div><span class="section-badge">${projects.length} entregas</span></div>
      <div class="ac-project-list">${renderProjects(projects)}</div></section>` : ''}
    ${Object.keys(model.books).length ? `<section class="doc-section searchable-section" data-search-section id="biblioteca">
      <div class="doc-section-heading"><div><p class="ac-eyebrow">Referências rastreáveis</p><h2>Biblioteca técnica local</h2></div>
      <span class="section-badge">${Object.keys(model.books).length} livros</span></div>
      <div class="ac-library">${renderBooks(model.books)}</div></section>` : ''}
    ${model.baseline?.length ? `<section class="doc-section" id="baseline-tecnologico"><div class="doc-section-heading"><div>
      <p class="ac-eyebrow">Contrato vigente</p><h2>Baseline tecnológico</h2></div><span class="section-badge">${model.baseline.length} itens</span></div>
      <div class="table-responsive"><table class="doc-table"><thead><tr><th>Tecnologia</th><th>Baseline</th><th>Status</th><th>Nota</th></tr></thead>
      <tbody>${model.baseline.map((item) => `<tr><td>${escapeHtml(item.technology)}</td><td>${escapeHtml(item.baseline)}</td>
      <td>${escapeHtml(item.status)}</td><td>${escapeHtml(item.note)}</td></tr>`).join('')}</tbody></table></div></section>` : ''}
    ${interviewCount ? `<section class="doc-section searchable-section" data-search-section id="entrevista">
      <div class="doc-section-heading"><div><p class="ac-eyebrow">Defesa oral</p><h2>Banco de entrevistas</h2></div>
      <span class="section-badge">${interviewCount} perguntas</span></div>
      <div class="table-responsive"><table class="doc-table"><thead><tr><th>Módulo</th><th>Nível</th><th>Pergunta</th><th>Critério</th></tr></thead>
      <tbody>${interviewRows(model.modules)}</tbody></table></div></section>` : ''}
    ${model.answerKey?.length ? `<section class="doc-section" id="gabarito"><div class="doc-section-heading"><div>
      <p class="ac-eyebrow">Autoavaliação</p><h2>Gabarito por módulo</h2></div><span class="section-badge">${model.answerKey.length} módulos</span></div>
      <div class="ac-answer-grid">${model.answerKey.map((item) => `<details class="ac-details"><summary>${item.module}. ${escapeHtml(item.title)}</summary>
      ${renderValue(Object.fromEntries(Object.entries(item).filter(([key]) => !['module', 'title'].includes(key))))}</details>`).join('')}</div></section>` : ''}
    <section class="doc-section" id="conclusao"><div class="doc-section-heading"><div><p class="ac-eyebrow">Gate final</p>
      <h2>Critérios de conclusão</h2></div><span class="section-badge">${model.assessment.completion.length} critérios</span></div>
      <div class="ac-completion">${list(model.assessment.completion, 'ac-check-list')}</div></section>
  `;
}

function scrollToRequestedSection() {
  const targetId = decodeURIComponent(window.location.hash.slice(1));
  if (targetId) document.getElementById(targetId)?.scrollIntoView({ block: 'start' });
}

function restoreHashAfterLayout() {
  scrollToRequestedSection();
  requestAnimationFrame(() => requestAnimationFrame(scrollToRequestedSection));
  document.fonts?.ready.then(scrollToRequestedSection);
  [80, 250, 700].forEach((delay) => window.setTimeout(scrollToRequestedSection, delay));
  window.addEventListener('load', scrollToRequestedSection, { once: true });
  window.addEventListener('hashchange', scrollToRequestedSection);
}

async function loadModel(config) {
  const moduleUrl = new URL(`../../../data/${config.dataFile}`, import.meta.url);
  moduleUrl.search = new URL(import.meta.url).search;
  const data = await import(moduleUrl.href);
  const pick = (name, fallback) => name && data[name] != null ? data[name] : fallback;
  const academy = pick(config.exports.academy);
  const modules = pick(config.exports.modules, []);
  const books = pick(config.exports.books, {});
  const assessment = pick(config.exports.assessment, { levels: [], completion: [] });
  if (!academy?.parts || !Array.isArray(modules)) {
    throw new Error(`Dados inválidos para "${config.id}": academy.parts e modules[] são obrigatórios.`);
  }
  return {
    config,
    academy,
    modules,
    books,
    assessment,
    projects: pick(config.exports.projects, []),
    answerKey: pick(config.exports.answerKey, []),
    baseline: pick(config.exports.baseline, [])
  };
}

function showError(error) {
  const target = document.querySelector('#moduleContent');
  if (target) {
    target.innerHTML = `<section class="doc-section ac-error" role="alert"><h2>Não foi possível abrir esta Academia</h2>
      <p>${escapeHtml(error.message)}</p><p>Confira data-track, data-part e o registro central da trilha.</p></section>`;
  }
  console.error('[academy]', error);
}

async function start() {
  try {
    const rawTrack = document.body.dataset.track;
    const config = getTrackConfig(rawTrack);
    if (!config?.academy) throw new Error(`Trilha sem Academia registrada: "${rawTrack || 'não informada'}".`);
    document.body.dataset.track = config.id;
    const partId = document.body.dataset.part;
    const model = await loadModel(config);
    if (!model.academy.parts[partId]) throw new Error(`Parte desconhecida: "${partId || 'não informada'}".`);
    renderTop(model, partId);
    if (partId === (config.assessmentPart || 'avaliacao')) renderAssessment(model, partId);
    else renderModulePage(model, partId);
    registrarServiceWorker();
    initNav();
    restoreHashAfterLayout();
  } catch (error) {
    showError(error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}
