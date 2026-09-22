/*
 * Módulo 5 (Financeiro) — Modelo de fluxo de caixa pessoal.
 * Rode com:  node fluxo-de-caixa.mjs
 *
 * Fluxo de caixa é o filme (não a foto): entradas e saídas ao longo do tempo e o
 * SALDO acumulado. Ele revela meses no vermelho mesmo com renda anual positiva, e
 * o "runway" (por quantos meses o saldo cobre os gastos sem renda). Centavos inteiros.
 */

// Projeta o saldo acumulado mês a mês a partir de um saldo inicial.
function projetar(saldoInicialCents, meses) {
  let saldo = saldoInicialCents;
  return meses.map((m) => {
    saldo += m.entradas - m.saidas;
    return { mes: m.mes, fluxo: m.entradas - m.saidas, saldo };
  });
}

// Runway: por quantos meses o saldo cobre um gasto mensal médio sem novas entradas.
function runway(saldoCents, gastoMensalCents) {
  return Math.floor(saldoCents / gastoMensalCents);
}

function run() {
  const checks = [];
  const meses = [
    { mes: 'jan', entradas: 500000, saidas: 400000 },
    { mes: 'fev', entradas: 500000, saidas: 450000 },
    { mes: 'mar', entradas: 500000, saidas: 700000 }, // IPTU/matrícula: mês no vermelho
    { mes: 'abr', entradas: 500000, saidas: 400000 },
  ];
  const proj = projetar(100000, meses);

  checks.push(['saldo acumulado de jan = 100000 + (500000−400000) = 200000', proj[0].saldo === 200000]);
  checks.push(['março tem fluxo negativo (−200000)', proj[2].fluxo === -200000]);
  checks.push(['mesmo com março no vermelho, o saldo acumulado nunca fica negativo aqui', proj.every((p) => p.saldo >= 0)]);
  checks.push(['saldo final = 100000 + soma dos fluxos (50000) = 150000', proj[proj.length - 1].saldo === 150000]);

  // Fluxo do período positivo pode esconder um mês apertado — por isso o filme importa.
  const somaFluxos = meses.reduce((s, m) => s + (m.entradas - m.saidas), 0);
  checks.push(['fluxo do período positivo (50000) apesar de um mês negativo', somaFluxos === 50000 && proj.some((p) => p.fluxo < 0)]);

  // Runway: saldo de 900000 cobre 3 meses de gasto de 300000.
  checks.push(['runway: R$9.000 / R$3.000 por mês = 3 meses', runway(900000, 300000) === 3]);

  console.log('=== Módulo 5 — modelo de fluxo de caixa ===\n');
  for (const p of proj) console.log(`  ${p.mes}: fluxo=${p.fluxo}  saldo=${p.saldo}`);
  console.log('runway (900000 / 300000):', runway(900000, 300000), 'meses\n');
  let ok = 0;
  for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: o fluxo de caixa é o filme do dinheiro — mostra o mês que aperta (que a média anual esconde) e quanto tempo o saldo dura.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
