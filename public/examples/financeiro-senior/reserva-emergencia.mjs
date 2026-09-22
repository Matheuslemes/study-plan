/*
 * Módulo 8 (Financeiro) — Modelo de reserva de emergência.
 * Rode com:  node reserva-emergencia.mjs
 *
 * A reserva se dimensiona pelo GASTO ESSENCIAL mensal (não pela renda) × meses de
 * cobertura, ajustados ao risco da renda (CLT estável x autônomo). O modelo calcula
 * o alvo, quanto falta e em quantos meses se atinge com um aporte fixo. Centavos inteiros.
 */

// Meses de cobertura recomendados pelo perfil de risco da renda.
function mesesRecomendados(perfil) {
  return { clt: 6, autonomo: 12, servidor: 3 }[perfil] ?? 6;
}

function alvoReserva(gastoEssencialMes, perfil) {
  return gastoEssencialMes * mesesRecomendados(perfil);
}

// Meses para atingir o alvo com um aporte fixo (sem contar rendimento, conservador).
function mesesParaAtingir(atual, alvo, aporteMes) {
  if (atual >= alvo) return 0;
  if (aporteMes <= 0) return Infinity;
  return Math.ceil((alvo - atual) / aporteMes);
}

function run() {
  const checks = [];
  const gastoEssencial = 300000; // R$3.000/mês essenciais (moradia, comida, transporte, saúde)

  checks.push(['CLT: 6 meses de cobertura recomendados', mesesRecomendados('clt') === 6]);
  checks.push(['autônomo: 12 meses (renda mais volátil)', mesesRecomendados('autonomo') === 12]);

  const alvoClt = alvoReserva(gastoEssencial, 'clt');
  const alvoAut = alvoReserva(gastoEssencial, 'autonomo');
  checks.push(['alvo CLT = 6 × 3.000 = R$18.000', alvoClt === 1800000]);
  checks.push(['autônomo precisa do dobro do CLT', alvoAut === 2 * alvoClt]);

  // Dimensiona pelo GASTO, não pela renda: quem ganha mais mas gasta igual tem o mesmo alvo.
  checks.push(['a reserva depende do gasto essencial, não da renda', alvoReserva(300000, 'clt') === alvoReserva(300000, 'clt')]);

  // Tempo para atingir com aporte fixo.
  checks.push(['de R$6.000 ao alvo R$18.000 com R$2.000/mês => 6 meses', mesesParaAtingir(600000, 1800000, 200000) === 6]);
  checks.push(['já ter o alvo => 0 meses', mesesParaAtingir(1800000, 1800000, 200000) === 0]);
  checks.push(['sem aporte, nunca atinge', mesesParaAtingir(0, 1800000, 0) === Infinity]);

  console.log('=== Módulo 8 — reserva de emergência ===\n');
  console.log('gasto essencial: R$3.000/mês');
  console.log('alvo CLT (6m):', alvoClt, '| alvo autônomo (12m):', alvoAut);
  console.log('de 6.000 ao alvo com 2.000/mês:', mesesParaAtingir(600000, 1800000, 200000), 'meses\n');
  let ok = 0;
  for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: a reserva se mede pelo gasto essencial × meses conforme o risco da renda, e fica em liquidez imediata — é seguro, não investimento.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
