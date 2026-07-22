/* ═══════════════════════════════════════════════
   CORE / SEARCH — busca unificada

   A mesma lógica de filtro estava escrita três vezes
   no index.html (trilhas, PDFs e busca por seção).
   Aqui existe uma vez só, parametrizada.

   Usa a classe `is-hidden-by-search` já definida no
   CSS, em vez de mexer em style.display direto.
═══════════════════════════════════════════════ */

import { normalizar } from './render.js';

/**
 * Filtra cards por um termo e controla os avisos de "nada encontrado".
 *
 * @param {object} opcoes
 * @param {string} opcoes.seletor    seletor dos cards filtráveis
 * @param {string} opcoes.atributo   atributo do card com o texto pesquisável
 * @param {string[]} opcoes.vaziosIds ids dos avisos de lista vazia
 * @param {string} termo             termo digitado
 * @returns {{visiveis:number,total:number}}
 */
export function filtrarCards({ seletor, atributo, vaziosIds = [] }, termo) {
  const q = normalizar(termo);
  const cards = [...document.querySelectorAll(seletor)];
  let visiveis = 0;

  cards.forEach((card) => {
    const alvo = normalizar(card.getAttribute(atributo) || '');
    const combina = !q || alvo.includes(q);
    card.classList.toggle('is-hidden-by-search', !combina);
    if (combina) visiveis++;
  });

  const mostrarVazio = Boolean(q) && visiveis === 0;
  vaziosIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.style.display = mostrarVazio ? 'block' : 'none';
  });

  return { visiveis, total: cards.length };
}

/**
 * Liga um input de busca a uma coleção de cards.
 *
 * @param {object} opcoes  além dos campos de filtrarCards:
 * @param {string} opcoes.inputId      id do <input type="search">
 * @param {Function} [opcoes.aoBuscar] callback recebendo (termo, resultado)
 */
export function ligarBusca(opcoes) {
  const input = document.getElementById(opcoes.inputId);
  if (!input) return null;

  const executar = (termo) => {
    const resultado = filtrarCards(opcoes, termo);
    if (opcoes.aoBuscar) opcoes.aoBuscar(termo, resultado);
    return resultado;
  };

  input.addEventListener('input', (e) => executar(e.target.value));
  return executar;
}

/**
 * Busca por SEÇÃO dentro de uma página de trilha (STUDY-036).
 *
 * Diferente da busca por card: aqui o alvo é o texto visível da seção
 * inteira (`innerText`), não um atributo. Seções que combinam recebem
 * `search-hit`; as demais, `is-hidden-by-search`.
 *
 * @param {string} termo
 * @param {Element[]} secoes
 * @returns {{visiveis:number,total:number}}
 */
export function filtrarSecoes(termo, secoes) {
  const q = normalizar(termo);
  let visiveis = 0;

  secoes.forEach((secao) => {
    secao.classList.remove('is-hidden-by-search', 'search-hit');
    if (!q) { visiveis++; return; }
    // textContent (não innerText) para não depender do render: seções com
    // content-visibility:auto fora da viewport ainda são pesquisáveis.
    const combina = normalizar(secao.textContent).includes(q);
    secao.classList.toggle('is-hidden-by-search', !combina);
    secao.classList.toggle('search-hit', combina);
    if (combina) visiveis++;
  });

  return { visiveis, total: secoes.length };
}

/**
 * Liga um input à busca por seção.
 *
 * @param {string} inputId
 * @param {string} [seletorSecao] seletor das seções pesquisáveis
 */
export function ligarBuscaDeSecoes(inputId, seletorSecao = '[data-search-section]') {
  const input = document.getElementById(inputId);
  if (!input) return null;
  const secoes = Array.from(document.querySelectorAll(seletorSecao));
  if (!secoes.length) return null;

  const executar = (termo) => filtrarSecoes(termo, secoes);
  input.addEventListener('input', (e) => executar(e.target.value));
  return executar;
}
