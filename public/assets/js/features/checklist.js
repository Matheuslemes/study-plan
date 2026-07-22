/* ═══════════════════════════════════════════════
   FEATURES / CHECKLIST — checkboxes persistentes de página (STUDY-051)

   Para checkboxes que já existem no HTML estático (como os 28 de
   financeiro.html) e não têm id. A posição no documento é estável,
   então a chave é `checklist:<escopo>:<índice>`. Restaura o estado
   no carregamento e salva a cada mudança.
═══════════════════════════════════════════════ */

import { ler, gravar } from '../core/storage.js';

/**
 * Liga todos os checkboxes de um escopo à persistência.
 *
 * @param {string} escopo   nome estável (ex.: 'financeiro')
 * @param {string} [seletor] onde procurar os checkboxes
 */
export function ligarChecklist(escopo, seletor = 'input[type="checkbox"]') {
  const chave = 'checklist:' + escopo;
  const caixas = [...document.querySelectorAll(seletor)];
  if (!caixas.length) return;

  const estado = ler(chave, {});

  caixas.forEach((cb, i) => {
    if (estado[i]) {
      cb.checked = true;
      cb.closest('.check-item, label, li')?.classList.add('is-checked');
    }
    cb.addEventListener('change', () => {
      const atual = ler(chave, {});
      if (cb.checked) atual[i] = true; else delete atual[i];
      gravar(chave, atual);
      cb.closest('.check-item, label, li')?.classList.toggle('is-checked', cb.checked);
    });
  });

  return caixas.length;
}
