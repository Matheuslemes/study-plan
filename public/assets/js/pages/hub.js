/*
 * Comportamento compartilhado dos 14 hubs.
 * Normaliza aliases legados, deriva contadores, renderiza a grade da Academia
 * e mantém a navegação entre Hub, Academia e O Sistema.
 */

import { escapeHtml } from '../core/render.js';
import { initNav } from '../core/nav.js';
import { registrarServiceWorker } from '../core/pwa.js';
import { renderSystemHeader } from '../core/system-header.js';
import { getTrackConfig } from '../../../data/tracks.js';

function setDerivedCounters(root, counts) {
  root.querySelectorAll('*').forEach((element) => {
    [...element.attributes].forEach((attribute) => {
      const name = attribute.name;
      const value = attribute.value;
      let counter = '';
      if (name === 'data-ac-count') counter = value;
      else if (name.endsWith('-module-count')) counter = 'modules';
      else if (name.endsWith('-part-count')) counter = 'parts';
      else if (name.endsWith('-book-count')) counter = 'books';
      else if (name.endsWith('-project-count')) counter = 'projects';
      else if (name.endsWith('-count')) counter = value;
      if (counter && counts[counter] != null) element.textContent = String(counts[counter]);
    });
  });
}

function normalizeMarkup() {
  const header = document.querySelector('header');
  header?.classList.add('ac-hub-hero');
  header?.querySelectorAll('.footer-link, .hero-back-link').forEach((link) => link.remove());

  const route = document.querySelector('.ac-route-map');
  const heroContainer = header?.querySelector(':scope > .container');
  if (heroContainer && !heroContainer.querySelector(':scope > .ac-hero-copy')) {
    const copy = document.createElement('div');
    copy.className = 'ac-hero-copy';
    [...heroContainer.children]
      .filter((child) => child !== route)
      .forEach((child) => copy.append(child));
    heroContainer.prepend(copy);
  }

  if (route) {
    route.classList.add('ac-route-map');
    route.parentElement?.classList.add('ac-hero-layout');
  }
}

function renderRouteMap(config, academy, modules, assessment) {
  const heroContainer = document.querySelector('.ac-hub-hero .container');
  if (!heroContainer || !academy) return;
  let route = document.querySelector('.ac-route-map');
  if (!route) {
    heroContainer.classList.add('ac-hero-layout');
    route = document.createElement('aside');
    heroContainer.append(route);
  } else {
    route.parentElement?.classList.add('ac-hero-layout');
  }
  route.className = 'ac-route-map';
  route.setAttribute('aria-label', `Rota de domínio de ${config.shortLabel}`);
  route.innerHTML = `
    <div class="ac-route-map__header">
      <span>Rota de domínio</span>
      <strong>${escapeHtml(academy.title)}</strong>
    </div>
    <ol class="ac-route-map__flow">
      ${Object.values(academy.parts).map((part, index) => `
        <li><span>${String(index + 1).padStart(2, '0')}</span>
          <div><strong>${escapeHtml(part.navLabel || part.title)}</strong><small>${escapeHtml(part.subtitle)}</small></div>
        </li>
      `).join('')}
    </ol>
    <p><strong>${modules.length}</strong> módulos ·
      <strong>${Object.keys(academy.parts).length}</strong> partes ·
      <strong>${assessment?.projects?.length || 0}</strong> entregas</p>
  `;
}

function renderAcademyGrid(config, academy) {
  if (!academy) return;
  let container = document.querySelector('[data-academy-grid]');
  if (!container) {
    const main = document.querySelector('main .main, main');
    if (!main) return;
    const section = document.createElement('section');
    section.className = 'doc-section ac-academy-overview searchable-section';
    section.dataset.searchSection = '';
    section.id = 'academia';
    section.innerHTML = `
      <div class="doc-section-heading">
        <div>
          <p class="ac-eyebrow">Percurso verificável</p>
          <h2>${escapeHtml(academy.title)}</h2>
          <p class="section-subtitle">Partes progressivas, evidências revisáveis e gate de domínio D30.</p>
        </div>
        <span class="section-badge">${Object.keys(academy.parts).length} partes</span>
      </div>
      <div class="ac-part-grid" data-academy-grid></div>
    `;
    main.prepend(section);
    container = section.querySelector('[data-academy-grid]');
  }
  container.classList.add('ac-part-grid');
  container.innerHTML = Object.entries(academy.parts).map(([id, part], index) => {
    const page = part.page || `${id}.html`;
    return `
      <a class="ac-part-card" href="./${escapeHtml(config.id)}/${escapeHtml(page)}">
        <span>Parte ${index + 1}/${Object.keys(academy.parts).length} · ${escapeHtml(part.range || '')}</span>
        <strong>${escapeHtml(part.title)}</strong>
        <p>${escapeHtml(part.subtitle)}</p>
        <b>Abrir parte →</b>
      </a>
    `;
  }).join('');
}

async function loadModel(config) {
  if (!config.academy) return null;
  const dataUrl = new URL(`../../../data/${config.dataFile}`, import.meta.url);
  dataUrl.search = new URL(import.meta.url).search;
  const data = await import(dataUrl.href);
  const pick = (name, fallback) => name && data[name] != null ? data[name] : fallback;
  const academy = pick(config.exports.academy);
  const modules = pick(config.exports.modules, []);
  const books = pick(config.exports.books, {});
  const assessment = pick(config.exports.assessment, {});
  const projects = pick(config.exports.projects, assessment.projects || []);
  return { academy, modules, books, assessment: { ...assessment, projects } };
}

async function start() {
  const config = getTrackConfig(document.body.dataset.track);
  if (!config) {
    console.error(`[hub] data-track desconhecido: "${document.body.dataset.track || ''}".`);
    return;
  }

  document.body.dataset.track = config.id;
  document.body.classList.add('track-page', 'is-hub');
  normalizeMarkup();

  try {
    const model = await loadModel(config);
    const firstPart = model ? Object.entries(model.academy.parts)[0] : null;
    const firstPage = firstPart ? firstPart[1].page || `${firstPart[0]}.html` : '';
    renderSystemHeader({ config, firstPage, view: 'hub', depth: 'hub' });
    if (model) {
      const interviews = model.modules.reduce((sum, module) =>
        sum + (module.interview || module.interviews || []).length, 0);
      const cases = model.assessment.caseStudies?.length
        || model.modules.filter((module) => module.caseStudy).length;
      const exercises = model.modules.reduce((sum, module) => sum + (module.exercises || []).length, 0);
      setDerivedCounters(document, {
        modules: model.modules.length,
        parts: Object.keys(model.academy.parts).length,
        books: Object.keys(model.books).length,
        projects: model.assessment.projects?.length || 0,
        questions: interviews,
        cases,
        exercises
      });
      renderRouteMap(config, model.academy, model.modules, model.assessment);
      renderAcademyGrid(config, model.academy);
    }
    initNav();
    registrarServiceWorker();
  } catch (error) {
    console.error(`[hub:${config.id}]`, error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}
