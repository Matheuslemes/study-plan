/* ═══════════════════════════════════════════════
   CORE / PWA — registro do service worker (STUDY-069)

   Registra apenas quando servido por HTTP(S). Em file:// o
   registro falha por design, e não faz sentido tentar.
   Falha de registro nunca deve quebrar a página: o site
   funciona igual sem service worker.
═══════════════════════════════════════════════ */

/** Caminho do sw.js relativo à página (raiz do site). */
function caminhoSw() {
  // páginas de trilha ficam um nível abaixo
  return location.pathname.includes('/trilhas/') ? '../sw.js' : './sw.js';
}

export function registrarServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  if (location.protocol === 'file:') return;

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(caminhoSw(), { scope: location.pathname.includes('/trilhas/') ? '../' : './' })
      .catch(() => { /* offline é um extra: sem SW o site funciona igual */ });
  });
}
