/*
 * Resolve recursos publicados sem assumir que o site está hospedado na raiz
 * do domínio. No desenvolvimento, por exemplo, a raiz pública é /public/.
 */

const PUBLIC_BASE_URL = new URL('../../../', import.meta.url);

export function resolvePublicUrl(path = '') {
  const relativePath = String(path).replace(/^\/+/, '');
  return new URL(relativePath, PUBLIC_BASE_URL).href;
}
