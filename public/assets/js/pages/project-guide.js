import { normalizar } from '../core/render.js';

const input = document.getElementById('document-search');
const groups = [...document.querySelectorAll('[data-doc-group]')];
const documents = [...document.querySelectorAll('[data-document]')].map(element => ({ element, text: normalizar(element.textContent) }));
function filterDocuments() {
  const terms = normalizar(input.value).split(/\s+/).filter(Boolean);
  let count = 0;
  for (const { element, text } of documents) {
    element.hidden = !terms.every(term => text.includes(term));
    if (!element.hidden) count++;
  }
  for (const group of groups) {
    const visible = [...group.querySelectorAll('[data-document]')].filter(row => !row.hidden).length;
    group.hidden = visible === 0;
    group.querySelector('.guide-count').textContent = visible;
  }
  document.getElementById('document-count').textContent = `${count} de ${documents.length} documentos`;
  document.getElementById('document-empty').hidden = count !== 0;
}
input.addEventListener('input', filterDocuments);
// Links da leitura inicial e do índice continuam úteis mesmo após uma busca.
document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
  if (input.value) { input.value = ''; filterDocuments(); }
}));
document.querySelector('.guide-search').hidden = false;
filterDocuments();
