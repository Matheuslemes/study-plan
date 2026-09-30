/*
 * Cabeçalho global das três vistas.
 *
 * O componente é compartilhado por Hub e Academia e deriva o seletor de
 * trilhas do registro canônico. Nenhuma shell precisa duplicar essa marcação.
 */

import { escapeHtml } from './render.js';
import { TRACK_REGISTRY } from '../../../data/tracks.js';
import { sequence, SEQUENCES, setSequence } from './study-context.js';
import { flushProgress } from './storage.js';

const VIEW_LABELS = {
  system: 'O Sistema',
  hub: 'Hub da trilha',
  academy: 'Academia'
};

function viewLink(label, href, active = false) {
  return `<a href="${escapeHtml(href)}"${active ? ' aria-current="page"' : ''}>${escapeHtml(label)}</a>`;
}

export function renderSystemHeader({ config, firstPage = '', view, depth }) {
  const existing = document.querySelector('.ac-system-header');
  existing?.remove();

  const isSystem = depth === 'system';
  const rootPath = isSystem ? './' : depth === 'academy' ? '../../' : '../';
  const trackPath = isSystem ? './trilhas/' : depth === 'academy' ? '../' : './';
  const academyPath = isSystem
    ? `./trilhas/${escapeHtml(config.id)}/`
    : depth === 'academy'
      ? './'
      : `./${escapeHtml(config.id)}/`;
  const academyHref = config.academy && firstPage ? `${academyPath}${escapeHtml(firstPage)}` : '';

  const header = document.createElement('header');
  header.className = 'ac-system-header';
  header.innerHTML = `
    <div class="ac-system-header__top">
      <div class="ac-system-container">
        <a class="ac-system-brand" href="${rootPath}index.html">
          <strong>${isSystem ? 'Dashboard Principal' : escapeHtml(config.shortLabel)}</strong>
        </a>
        ${isSystem ? '' : `<nav class="ac-view-nav" aria-label="Vistas do projeto">
          ${viewLink(VIEW_LABELS.hub, `${trackPath}${escapeHtml(config.id)}.html`, view === 'hub')}
          ${academyHref
            ? viewLink(VIEW_LABELS.academy, academyHref, view === 'academy')
            : '<span aria-disabled="true">Academia não aplicável</span>'}
          ${viewLink(VIEW_LABELS.system, `${rootPath}index.html`, view === 'system')}
        </nav>`}
      </div>
    </div>
    <div class="ac-track-switcher">
      <div class="ac-system-container">
        <span class="ac-track-switcher__label">data-track · academia</span>
        <nav aria-label="Selecionar trilha">
          ${Object.entries(TRACK_REGISTRY).map(([id, item]) => `
            <a href="${trackPath}${escapeHtml(id)}.html"
              ${id === config.id ? 'aria-current="page"' : ''}
              title="${escapeHtml(item.label)}">${escapeHtml(item.shortLabel)}</a>
          `).join('')}
        </nav>
      </div>
    </div>
  `;

  const skipLink = document.querySelector('.skip-link');
  if (!isSystem) {
    const control = document.createElement('div');
    control.className = 'sequence-header-control';
    control.innerHTML = `<label for="headerSequence">Sequência</label><select id="headerSequence">${Object.values(SEQUENCES).map(s => `<option value="${s.id}"${s.id === sequence.id ? ' selected' : ''}>${escapeHtml(s.name)}</option>`).join('')}</select><a href="${rootPath}index.html">Retomar percurso →</a><span role="status"></span>`;
    header.append(control);
    control.querySelector('select').addEventListener('change', async e => {
      if (!setSequence(e.target.value)) { control.querySelector('[role="status"]').textContent = 'Não foi possível salvar a seleção.'; return; }
      await flushProgress(); location.reload();
    });
  }
  if (skipLink) skipLink.insertAdjacentElement('afterend', header);
  else document.body.prepend(header);
}
