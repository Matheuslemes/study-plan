/*
 * Módulo 2 (Financeiro) — Modelo de orçamento pessoal (50/30/20 e base-zero).
 * Rode com:  node orcamento.mjs
 *
 * Um orçamento é uma planilha versionada: renda, gastos por categoria e a sobra.
 * Aqui o modelo aplica a regra 50/30/20 (necessidades/desejos/poupança) e valida
 * um orçamento base-zero (toda renda é alocada: entradas = saídas + poupança).
 * Valores em CENTAVOS (inteiro) — dinheiro nunca em float.
 */

// Regra 50/30/20 sobre a renda líquida.
function alvo503020(rendaCents) {
  return {
    necessidades: Math.round(rendaCents * 0.50),
    desejos: Math.round(rendaCents * 0.30),
    poupanca: Math.round(rendaCents * 0.20),
  };
}

// Orçamento base-zero: nada "sobra sem nome" — a poupança absorve o resto.
function baseZero(rendaCents, gastos) {
  const totalGastos = Object.values(gastos).reduce((s, v) => s + v, 0);
  return { totalGastos, poupanca: rendaCents - totalGastos, alocadoTudo: totalGastos <= rendaCents };
}

function run() {
  const checks = [];
  const renda = 500000; // R$ 5.000,00 em centavos

  const alvo = alvo503020(renda);
  checks.push(['50/30/20 de R$5.000: necessidades=2500, desejos=1500, poupança=1000',
    alvo.necessidades === 250000 && alvo.desejos === 150000 && alvo.poupanca === 100000]);
  checks.push(['as três fatias somam a renda inteira', alvo.necessidades + alvo.desejos + alvo.poupanca === renda]);

  const gastos = { aluguel: 180000, mercado: 90000, transporte: 40000, lazer: 60000, assinaturas: 30000 };
  const bz = baseZero(renda, gastos);
  checks.push(['base-zero: gastos somam R$4.000', bz.totalGastos === 400000]);
  checks.push(['base-zero: poupança = renda − gastos = R$1.000', bz.poupanca === 100000]);
  checks.push(['orçamento é viável (gastos não excedem a renda)', bz.alocadoTudo === true]);

  // Um orçamento estourado é detectado (gastos > renda => poupança negativa).
  const estourado = baseZero(renda, { ...gastos, lazer: 200000 });
  checks.push(['orçamento estourado é sinalizado (poupança negativa)', estourado.poupanca < 0 && !estourado.alocadoTudo]);

  // Taxa de poupança medida (o número que realmente importa).
  const taxaPoupanca = bz.poupanca / renda;
  checks.push(['taxa de poupança = 20%', Math.abs(taxaPoupanca - 0.20) < 1e-9]);

  console.log('=== Módulo 2 — modelo de orçamento (50/30/20 e base-zero) ===\n');
  console.log('alvo 50/30/20 (centavos):', alvo);
  console.log('base-zero:', bz, '| taxa de poupança:', (taxaPoupanca * 100).toFixed(0) + '%\n');
  let ok = 0;
  for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: orçamento é um modelo versionável — 50/30/20 dá o alvo, o base-zero garante que toda renda tem destino e a taxa de poupança é o placar.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
