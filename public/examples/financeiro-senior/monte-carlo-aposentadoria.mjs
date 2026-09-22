/*
 * Módulo Fronteira (Financeiro) — Monte Carlo da aposentadoria e taxa de retirada.
 * Rode com:  node monte-carlo-aposentadoria.mjs
 *
 * "Dá pra viver de renda?" não é uma conta única — depende da SEQUÊNCIA de retornos.
 * Simulamos muitos caminhos (Monte Carlo) de uma carteira com retiradas anuais e
 * medimos a taxa de sucesso (o dinheiro durar). Retirar 4% é muito mais seguro que 8%.
 */
// PRNG determinístico (LCG) para o resultado ser reproduzível.
function makeRng(seed) { let s = seed >>> 0; return () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; }; }

// Uma trajetória: retorno real anual ~ média ± spread (uniforme), retirada fixa (% inicial).
function umaTrajetoria(rng, { taxaRetirada, anos = 30, media = 0.05, spread = 0.18 }) {
  let saldo = 100; // 100 unidades iniciais
  const retiradaAnual = 100 * taxaRetirada;
  for (let a = 0; a < anos; a++) {
    const r = media + (rng() - 0.5) * 2 * spread;   // retorno real do ano
    saldo = saldo * (1 + r) - retiradaAnual;         // rende e depois retira
    if (saldo <= 0) return false;                    // quebrou
  }
  return true;
}
function taxaSucesso(taxaRetirada, seed = 12345, paths = 2000) {
  const rng = makeRng(seed);
  let ok = 0;
  for (let i = 0; i < paths; i++) if (umaTrajetoria(rng, { taxaRetirada })) ok++;
  return ok / paths;
}

function run() {
  const checks = [];
  const s4 = taxaSucesso(0.04);
  const s6 = taxaSucesso(0.06);
  const s8 = taxaSucesso(0.08);

  checks.push(['retirar 4% tem alta taxa de sucesso (>= 80%)', s4 >= 0.8]);
  checks.push(['sucesso cai conforme a retirada sobe (4% > 6% > 8%)', s4 > s6 && s6 > s8]);
  checks.push(['retirar 8% é claramente arriscado (< 60% de sucesso)', s8 < 0.6]);

  // Reprodutível: mesma seed, mesmo resultado (não é aleatório de verdade).
  checks.push(['mesma seed => mesmo resultado (determinístico)', taxaSucesso(0.04, 999) === taxaSucesso(0.04, 999)]);
  // Seeds diferentes dão resultados próximos, mas não idênticos (variação de amostragem).
  checks.push(['seeds diferentes variam pouco (Monte Carlo estável com muitos caminhos)', Math.abs(taxaSucesso(0.04, 1) - taxaSucesso(0.04, 2)) < 0.1]);

  // Sequência importa: mesmo retorno médio, retirar mais cedo aumenta o risco de ruína.
  checks.push(['a taxa de retirada é o fator dominante da ruína', (s4 - s8) > 0.2]);

  console.log('=== Fronteira — Monte Carlo da aposentadoria ===\n');
  console.log('taxa de sucesso: 4% ->', (s4 * 100).toFixed(0) + '%  | 6% ->', (s6 * 100).toFixed(0) + '%  | 8% ->', (s8 * 100).toFixed(0) + '%\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: viver de renda depende da sequência de retornos, não da média — por isso se simula (Monte Carlo). A taxa de retirada segura (~4%) é o número que decide.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
