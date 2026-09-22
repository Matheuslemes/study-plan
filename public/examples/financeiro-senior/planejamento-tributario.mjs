/*
 * Módulo Fronteira (Financeiro) — Planejamento tributário: diferir imposto compõe.
 * Rode com:  node planejamento-tributario.mjs
 *
 * Imposto pago cedo deixa de render. Dois efeitos reais no Brasil: (1) a tabela
 * REGRESSIVA de IR premia o longo prazo (22,5% -> 15%); (2) o "come-cotas" antecipa
 * imposto semestral e trava o juro composto. Diferir legalmente o imposto acumula mais.
 */
// IR regressivo por prazo (dias).
function aliquota(dias) { return dias <= 180 ? 0.225 : dias <= 360 ? 0.20 : dias <= 720 ? 0.175 : 0.15; }

// Investimento que só é tributado no RESGATE (diferido) — ex.: ação/ETF/Tesouro no fim.
function diferido(principal, i, anos) {
  const bruto = principal * (1 + i) ** anos;
  const ganho = bruto - principal;
  return bruto - ganho * aliquota(anos * 365);
}
// Fundo com "come-cotas": imposto de 15% incide sobre o ganho a cada ano (antecipa e trava o composto).
function comeCotas(principal, i, anos, aliq = 0.15) {
  let saldo = principal;
  for (let a = 0; a < anos; a++) { const ganho = saldo * i; saldo += ganho - ganho * aliq; }
  return saldo;
}

function run() {
  const checks = [];

  // Tabela regressiva: segurar por > 2 anos paga a menor alíquota.
  checks.push(['IR regressivo: até 180d = 22,5%; > 720d = 15%', aliquota(180) === 0.225 && aliquota(1000) === 0.15]);

  // Diferir o imposto (pagar só no resgate) rende mais que o come-cotas, no mesmo retorno.
  const dif = diferido(1000, 0.10, 10);
  const cc = comeCotas(1000, 0.10, 10);
  checks.push(['diferir o imposto até o resgate acumula MAIS que o come-cotas', dif > cc]);
  checks.push(['a diferença é material no longo prazo (> 1% do principal)', (dif - cc) / 1000 > 0.01]);

  // Longo prazo x curto prazo no diferido: alíquota menor => líquido maior por real de ganho.
  const curto = diferido(1000, 0.10, 0.5);   // 6 meses (22,5%)
  const longo10 = diferido(1000, 0.10, 10);  // 10 anos (15%) — mais tempo E menor alíquota
  checks.push(['no diferido, o longo prazo soma composto + alíquota menor', longo10 > curto]);

  // Regra de decisão: para o mesmo ativo, preferir veículo que difere imposto e prazo > 2 anos.
  const melhorVeiculo = (a, b) => (a >= b ? 'diferido' : 'come-cotas');
  checks.push(['a decisão de veículo prefere o que difere o imposto', melhorVeiculo(dif, cc) === 'diferido']);

  console.log('=== Fronteira — planejamento tributário ===\n');
  console.log('R$1.000 a 10%/ano por 10 anos:');
  console.log('  diferido (IR 15% no resgate):', dif.toFixed(2), '| come-cotas (15%/ano):', cc.toFixed(2));
  console.log('  vantagem de diferir:', (dif - cc).toFixed(2), '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: imposto pago cedo deixa de compor — diferir legalmente (resgate no fim, prazo > 2 anos, evitar come-cotas) acumula mais. Otimização tributária é engenharia, não sonegação.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
