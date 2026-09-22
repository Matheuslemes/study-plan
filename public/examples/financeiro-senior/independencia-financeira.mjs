/*
 * Módulo Fronteira (Financeiro) — Independência financeira (FIRE) e a taxa de poupança.
 * Rode com:  node independencia-financeira.mjs
 *
 * O tempo até a independência financeira depende, acima de tudo, da TAXA DE POUPANÇA
 * (não do valor absoluto da renda): quem poupa mais gasta menos (alvo menor) e acumula
 * mais rápido (dois efeitos somados). Modelamos o "número FIRE" e os anos até atingi-lo.
 */
const SWR = 0.04;                      // taxa de retirada segura -> número FIRE = 25× gasto anual
const numeroFIRE = (gastoAnual) => gastoAnual / SWR;

// Anos até o patrimônio × SWR cobrir o gasto anual, dada a taxa de poupança e o retorno real.
function anosAteFI(taxaPoupanca, retornoReal = 0.05, rendaAnual = 100) {
  const gasto = rendaAnual * (1 - taxaPoupanca);
  const aporte = rendaAnual * taxaPoupanca;
  const alvo = numeroFIRE(gasto);
  let patrimonio = 0, anos = 0;
  while (patrimonio < alvo && anos < 100) { patrimonio = patrimonio * (1 + retornoReal) + aporte; anos++; }
  return anos;
}

function run() {
  const checks = [];

  checks.push(['número FIRE = 25× o gasto anual (SWR 4%)', numeroFIRE(40) === 1000 && numeroFIRE(40) === 25 * 40]);

  const y10 = anosAteFI(0.10), y30 = anosAteFI(0.30), y50 = anosAteFI(0.50), y70 = anosAteFI(0.70);
  checks.push(['mais poupança => menos anos até FI (monótono)', y10 > y30 && y30 > y50 && y50 > y70]);
  checks.push(['poupar 10% leva décadas (> 40 anos)', y10 > 40]);
  checks.push(['poupar 50% chega perto de ~17 anos (clássico)', y50 >= 15 && y50 <= 19]);
  checks.push(['poupar 70% torna FI rápido (< 10 anos)', y70 < 10]);

  // O que domina é a TAXA de poupança, não a renda: dobrar a renda com o MESMO % não muda os anos.
  checks.push(['dobrar a renda com a mesma taxa de poupança NÃO muda os anos até FI', anosAteFI(0.5, 0.05, 100) === anosAteFI(0.5, 0.05, 200)]);

  // Retorno real ajuda, mas menos que a taxa de poupança nesta faixa.
  checks.push(['retorno real maior reduz os anos (mas o poupar pesa mais)', anosAteFI(0.5, 0.07) <= anosAteFI(0.5, 0.05)]);

  console.log('=== Fronteira — independência financeira (FIRE) ===\n');
  console.log('anos até FI por taxa de poupança: 10% ->', y10, '| 30% ->', y30, '| 50% ->', y50, '| 70% ->', y70, '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: a taxa de poupança é o botão principal do FIRE — ela baixa o alvo e sobe o aporte ao mesmo tempo; a renda absoluta importa muito menos.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
