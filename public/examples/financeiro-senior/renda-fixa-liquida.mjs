/*
 * Módulo 11 (Financeiro) — Comparar renda fixa pelo rendimento LÍQUIDO.
 * Rode com:  node renda-fixa-liquida.mjs
 *
 * Comparar CDB, LCI/LCA e Tesouro pela taxa "de vitrine" engana: o que importa é o
 * líquido, depois do Imposto de Renda (tabela regressiva) e taxas. LCI/LCA é isenta
 * de IR — um CDB precisa render MAIS para empatar. O modelo calcula o líquido e a
 * taxa "bruta equivalente" para comparar maçãs com maçãs.
 */

// IR regressivo sobre o rendimento, pelo prazo em dias.
function aliquotaIR(dias) {
  if (dias <= 180) return 0.225;
  if (dias <= 360) return 0.20;
  if (dias <= 720) return 0.175;
  return 0.15;
}

// Rendimento líquido de um produto tributável (ex.: CDB) em um período.
function liquidoTributavel(principal, taxaPeriodo, dias) {
  const bruto = principal * taxaPeriodo;
  const ir = bruto * aliquotaIR(dias);
  return { bruto, ir, liquido: bruto - ir };
}

// Rendimento líquido de um isento (LCI/LCA/poupança): sem IR.
function liquidoIsento(principal, taxaPeriodo) {
  const bruto = principal * taxaPeriodo;
  return { bruto, ir: 0, liquido: bruto };
}

function run() {
  const checks = [];

  checks.push(['IR: até 180 dias = 22,5%', aliquotaIR(180) === 0.225]);
  checks.push(['IR: acima de 720 dias = 15% (mínima)', aliquotaIR(721) === 0.15]);

  // CDB rendendo 12% x LCI rendendo 10%, ambos por 2 anos (730 dias, IR 15%).
  const cdb = liquidoTributavel(100000, 0.12, 730);
  const lci = liquidoIsento(100000, 0.10);
  checks.push(['CDB 12% bruto, IR 15% => líquido 10,2%', cdb.liquido === 10200]);
  checks.push(['LCI 10% isenta => líquido 10%', lci.liquido === 10000]);
  checks.push(['o CDB de 12% ganha da LCI de 10% no líquido (10,2% > 10%)', cdb.liquido > lci.liquido]);

  // "Bruta equivalente": que taxa a LCI de 10% representa para um CDB (que paga 15% IR)?
  const equivalente = 0.10 / (1 - 0.15);
  checks.push(['LCI 10% equivale a um CDB de ~11,76% bruto', Math.abs(equivalente - 0.1176) < 0.0002]);
  checks.push(['um CDB de 11% perderia para a LCI de 10% (11% < 11,76% equivalente)', 0.11 < equivalente]);

  console.log('=== Módulo 11 — renda fixa pelo líquido (pós-IR) ===\n');
  console.log('CDB 12% (IR 15%):', cdb, '| LCI 10% (isenta):', lci);
  console.log('taxa bruta equivalente da LCI 10%:', (equivalente * 100).toFixed(2) + '%\n');
  let ok = 0;
  for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: compare renda fixa pelo LÍQUIDO. Isentos (LCI/LCA) exigem calcular a "bruta equivalente" — a taxa de vitrine mente.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
