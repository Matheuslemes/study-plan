/*
 * Módulo 30 (Financeiro) — Simular cenários adversos (stress test do plano).
 * Rode com:  node stress-test.mjs
 *
 * Um plano só é robusto se sobrevive ao mau cenário. Aqui submetemos as finanças a
 * choques (perda de renda, gasto emergencial, inflação, queda de mercado) e medimos
 * o "runway" e a solvência. O objetivo não é prever, é saber onde o plano quebra.
 */

// Meses que a reserva cobre o gasto essencial sob um choque de renda/gasto.
function runwaySobChoque(reserva, gastoEssencial, { rendaRestante = 0, gastoExtra = 0 } = {}) {
  const queimaMensal = gastoEssencial + gastoExtra - rendaRestante;
  if (queimaMensal <= 0) return Infinity; // renda ainda cobre os gastos: não queima reserva
  return Math.floor(reserva / queimaMensal);
}

// Poder de compra corroído pela inflação em n anos.
function poderDeCompra(valor, inflacaoAnual, anos) {
  return valor / (1 + inflacaoAnual) ** anos;
}

function run() {
  const checks = [];
  const reserva = 1800000;       // R$18.000
  const gastoEssencial = 300000; // R$3.000/mês

  // Cenário base (com renda): a renda cobre os gastos, reserva intacta.
  checks.push(['com renda cobrindo os gastos, a reserva não é consumida', runwaySobChoque(reserva, gastoEssencial, { rendaRestante: 300000 }) === Infinity]);

  // Choque 1: perda total de renda -> reserva cobre 6 meses.
  checks.push(['perda total de renda: reserva cobre 6 meses', runwaySobChoque(reserva, gastoEssencial) === 6]);

  // Choque 2: perda de renda + gasto emergencial (saúde) de 6.000 no gasto mensal reduz o runway.
  const comEmergencia = runwaySobChoque(reserva, gastoEssencial, { gastoExtra: 300000 });
  checks.push(['perda de renda + gasto dobrado: runway cai para 3 meses', comEmergencia === 3]);
  checks.push(['o choque combinado é pior que o isolado', comEmergencia < runwaySobChoque(reserva, gastoEssencial)]);

  // Choque 3: renda parcial (bico de 1.500) estende o runway.
  const rendaParcial = runwaySobChoque(reserva, gastoEssencial, { rendaRestante: 150000 });
  checks.push(['renda parcial estende o runway (para 12 meses)', rendaParcial === 12]);

  // Choque 4: inflação de 6%/ano corrói o poder de compra da reserva em 5 anos.
  const corroido = poderDeCompra(reserva, 0.06, 5);
  checks.push(['inflação 6%/ano por 5 anos corrói ~25% do poder de compra', corroido < reserva * 0.76 && corroido > reserva * 0.74]);

  // Robustez: o plano "passa" se sobrevive ao pior cenário plausível (>= 3 meses).
  const piorCenario = comEmergencia;
  checks.push(['critério de robustez: sobreviver >= 3 meses ao pior cenário', piorCenario >= 3]);

  console.log('=== Módulo 30 — stress test do plano financeiro ===\n');
  console.log('runway sem renda:', runwaySobChoque(reserva, gastoEssencial), 'meses');
  console.log('runway sem renda + gasto dobrado:', comEmergencia, 'meses');
  console.log('reserva corroída por 5 anos de inflação 6%:', Math.round(corroido), 'centavos\n');
  let ok = 0;
  for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: stress test não prevê o futuro — mostra onde o plano quebra. Reserva, renda parcial e proteção contra inflação são o que o tornam robusto.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
