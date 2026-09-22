/*
 * Módulo 13 (Arquitetura) — Resiliência: timeout e circuit breaker.
 * Rode com:  node circuit-breaker.mjs
 *
 * Uma dependência lenta/instável derruba quem a chama se não houver contenção.
 * O circuit breaker "abre" após N falhas e passa a falhar rápido (sem esperar a
 * dependência morta), protegendo o chamador — e testa recuperação depois de um tempo.
 */

function criarBreaker({ limite = 3, cooldownMs = 1000 } = {}) {
  let estado = 'fechado';        // fechado -> aberto -> meio-aberto
  let falhas = 0;
  let abertoDesde = 0;
  return {
    get estado() { return estado; },
    chamar(fn, agora) {
      if (estado === 'aberto') {
        if (agora - abertoDesde >= cooldownMs) estado = 'meio-aberto'; // hora de testar
        else return { ok: false, curto: true }; // falha rápido, sem chamar a dependência
      }
      try {
        const r = fn();
        falhas = 0; estado = 'fechado'; // sucesso fecha o circuito
        return { ok: true, r };
      } catch {
        falhas++;
        if (falhas >= limite) { estado = 'aberto'; abertoDesde = agora; }
        return { ok: false, curto: false };
      }
    },
  };
}

function run() {
  const checks = [];
  const cb = criarBreaker({ limite: 3, cooldownMs: 1000 });
  const dependenciaMorta = () => { throw new Error('timeout'); };
  const dependenciaViva = () => 'ok';

  // 3 falhas abrem o circuito.
  cb.chamar(dependenciaMorta, 0);
  cb.chamar(dependenciaMorta, 10);
  cb.chamar(dependenciaMorta, 20);
  checks.push(['após 3 falhas o circuito ABRE', cb.estado === 'aberto']);

  // Aberto: falha rápido (curto-circuito) sem chamar a dependência.
  const r = cb.chamar(dependenciaMorta, 30);
  checks.push(['aberto: falha rápido (curto-circuito), sem esperar a dependência', r.curto === true]);

  // Passado o cooldown, entra em meio-aberto e uma chamada bem-sucedida fecha.
  const rec = cb.chamar(dependenciaViva, 1100);
  checks.push(['após o cooldown, um sucesso fecha o circuito', rec.ok === true && cb.estado === 'fechado']);

  // Fechado de novo: opera normalmente.
  checks.push(['fechado: opera normalmente de novo', cb.chamar(dependenciaViva, 1200).ok === true]);

  // Contraste: sem breaker, cada chamada tentaria (e esperaria) a dependência morta.
  let tentativasSemBreaker = 0;
  for (let i = 0; i < 5; i++) { try { (() => { tentativasSemBreaker++; throw new Error('x'); })(); } catch {} }
  checks.push(['sem breaker, as 5 chamadas batem na dependência morta', tentativasSemBreaker === 5]);

  console.log('=== Módulo 13 — circuit breaker ===\n');
  console.log('estado final:', cb.estado, '| curto-circuito quando aberto:', r.curto, '\n');
  let ok = 0;
  for (const [n, cond] of checks) { console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${n}`); if (cond) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: o circuit breaker converte "esperar uma dependência morta" em "falhar rápido", contendo a falha em vez de propagá-la.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
