/* ═══════════════════════════════════════════════
   CORE / RENDER — helpers de template

   Helpers compartilhados pelos módulos de render.
   Todo texto de dados deve passar por escapeHtml antes
   de ser interpolado em uma template string.
═══════════════════════════════════════════════ */

/** Escapa texto antes de interpolar em HTML. */
export const escapeHtml = (valor = '') => String(valor)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

/** Normaliza texto para busca: minúsculo e sem acentos. */
export const normalizar = (valor) => (valor || '')
  .toLowerCase()
  .normalize('NFD')
  .replace(/[̀-ͯ]/g, '')
  .trim();

/** Escreve HTML em um elemento por id. Silencioso se o id não existir. */
export function setHtml(id, html) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.innerHTML = html;
  return true;
}

/** Encurta um texto em `max` caracteres, colapsando espaços. */
export function encurtar(texto, max = 92) {
  const limpo = (texto || '').replace(/\s+/g, ' ').trim();
  return limpo.length > max ? limpo.slice(0, max - 1).trimEnd() + '…' : limpo;
}

/** Primeiro item de um array, com fallback. */
export const primeiro = (arr, fallback = 'Revisão e consolidação') =>
  Array.isArray(arr) && arr.length ? arr[0] : fallback;

/** Último item de um array, com fallback. */
export const ultimo = (arr, fallback = 'Entregável prático validado') =>
  Array.isArray(arr) && arr.length ? arr[arr.length - 1] : fallback;
