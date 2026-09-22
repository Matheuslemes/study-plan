/*
 * Módulo 14 (Arquitetura) — Escala e performance: cache e a Lei de Little.
 * Rode com:  node cache-little.mjs
 *
 * Escala não é "só adicionar servidor". Duas ferramentas medíveis: um cache reduz
 * a latência média conforme o hit ratio, e a Lei de Little (L = λ·W) liga usuários
 * simultâneos, taxa de chegada e tempo no sistema — e revela o teto de vazão.
 */

// Latência média com cache: hit rápido, miss lento.
function latenciaMedia(hitRatio, msHit, msMiss) {
  return hitRatio * msHit + (1 - hitRatio) * msMiss;
}

// Lei de Little: L (em progresso) = λ (chegadas/s) × W (tempo no sistema, s).
const little = { L: (lambda, W) => lambda * W, lambda: (L, W) => L / W, W: (L, lambda) => L / lambda };

// Vazão máxima estável: throughput não passa de (concorrência / tempo de serviço).
function vazaoMax(concorrencia, msServico) {
  return concorrencia / (msServico / 1000);
}

function run() {
  const checks = [];

  // Cache 90% de hit reduz muito a latência média (hit=1ms, miss=50ms).
  const semCache = latenciaMedia(0, 1, 50);
  const com90 = latenciaMedia(0.9, 1, 50);
  checks.push(['sem cache a latência média é 50ms', semCache === 50]);
  checks.push(['cache com 90% de hit derruba a média para ~5.9ms', Math.abs(com90 - 5.9) < 1e-9]);
  checks.push(['mais hit = menos latência (monótono)', latenciaMedia(0.99, 1, 50) < com90]);

  // Lei de Little: 100 req/s com 0.2s no sistema => 20 em progresso.
  checks.push(['Lei de Little: L = λ·W (100/s × 0.2s = 20 em progresso)', little.L(100, 0.2) === 20]);
  checks.push(['Little inverte: com L=20 e W=0.2s, λ = 100/s', little.lambda(20, 0.2) === 100]);

  // Teto de vazão: 50 threads e 20ms de serviço => 2500 req/s.
  checks.push(['vazão máxima estável = concorrência / tempo de serviço (50/0.02 = 2500/s)', vazaoMax(50, 20) === 2500]);
  // Passar do teto só cresce a fila (W sobe), não a vazão.
  checks.push(['acima do teto, a fila cresce (mais W), não a vazão', vazaoMax(50, 40) < vazaoMax(50, 20)]);

  console.log('=== Módulo 14 — cache e Lei de Little ===\n');
  console.log('latência: sem cache=' + semCache + 'ms  com 90% hit=' + com90.toFixed(1) + 'ms');
  console.log('Little: L=' + little.L(100, 0.2) + ' em progresso  | vazão máx (50 thr, 20ms)=' + vazaoMax(50, 20) + '/s', '\n');
  let ok = 0;
  for (const [n, cond] of checks) { console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${n}`); if (cond) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: escala se calcula — o hit ratio governa a latência do cache e a Lei de Little revela quantos cabem e onde está o teto.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
