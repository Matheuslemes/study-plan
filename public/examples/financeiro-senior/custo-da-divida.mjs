/*
 * Módulo 6 (Financeiro) — Modelo do custo real de dívidas e crédito.
 * Rode com:  node custo-da-divida.mjs
 *
 * O perigo da dívida é o juro COMPOSTO: uma taxa mensal "pequena" vira uma taxa
 * anual enorme, e pagar só o mínimo faz o saldo mal cair. Aqui convertemos taxa
 * mensal↔anual, comparamos crédito com o rendimento e simulamos o "mínimo".
 */

// Juro composto: (1 + i_mensal)^12 − 1 = i_anual efetivo.
function mensalParaAnual(iMes) {
  return (1 + iMes) ** 12 - 1;
}

// Evolução da dívida pagando um valor fixo por mês.
function simularPagamento(saldoInicial, iMes, pagamento, maxMeses = 600) {
  let saldo = saldoInicial, meses = 0, jurosTotais = 0;
  while (saldo > 0 && meses < maxMeses) {
    const juros = saldo * iMes;
    jurosTotais += juros;
    saldo = saldo + juros - pagamento;
    meses++;
    if (pagamento <= saldoInicial * iMes) return { quita: false, meses: Infinity, jurosTotais: Infinity };
  }
  return { quita: saldo <= 0, meses, jurosTotais };
}

function run() {
  const checks = [];

  // Cartão a 14% ao mês vira ~381% ao ano (juro composto, não 14×12=168%).
  const anual = mensalParaAnual(0.14);
  checks.push(['14%/mês compõe para ~381%/ano (não 168%)', anual > 3.7 && anual < 3.9]);
  checks.push(['juro composto anual > taxa simples (12× a mensal)', anual > 0.14 * 12]);

  // Pagar só o "mínimo" (perto do juro do mês) quase não reduz o saldo.
  const soMinimo = simularPagamento(100000, 0.14, 14000); // paga = juro do 1º mês
  checks.push(['pagar apenas o juro do mês nunca quita a dívida', soMinimo.quita === false]);

  // Pagar acima do juro quita — e antecipar reduz muito o juro total.
  const pagaMais = simularPagamento(100000, 0.14, 30000);
  checks.push(['pagar acima do juro quita em prazo finito', pagaMais.quita === true && pagaMais.meses < 12]);
  const pagaAindaMais = simularPagamento(100000, 0.14, 50000);
  checks.push(['pagar mais por mês reduz o juro total pago', pagaAindaMais.jurosTotais < pagaMais.jurosTotais]);

  // Regra de ouro: dívida cara (14%/mês) supera qualquer rendimento comum — quitar rende mais.
  const rendimentoMes = 0.01; // ~1%/mês
  checks.push(['quitar dívida de 14%/mês "rende" mais que investir a 1%/mês', 0.14 > rendimentoMes]);

  console.log('=== Módulo 6 — custo real da dívida ===\n');
  console.log('14%/mês -> ' + (anual * 100).toFixed(0) + '%/ano efetivo');
  console.log('só o mínimo:', soMinimo, '| pagando 30000/mês:', pagaMais, '\n');
  let ok = 0;
  for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: taxa mensal engana — ela COMPÕE. Pagar só o mínimo é quase eterno; quitar dívida cara rende mais que quase qualquer investimento.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
