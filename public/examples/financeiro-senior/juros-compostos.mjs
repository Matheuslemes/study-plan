/*
 * Módulo 9 (Financeiro) — Matemática financeira: juros compostos, VF, VP e aportes.
 * Rode com:  node juros-compostos.mjs
 *
 * O motor de todo investimento é o juro composto. Aqui: valor futuro de um montante,
 * valor futuro de aportes mensais, valor presente (trazer a valor de hoje) e a
 * "regra dos 72" (tempo para dobrar). Centavos inteiros na saída de dinheiro.
 */

// Valor futuro de um montante único: VF = VP·(1+i)^n.
function valorFuturo(vp, i, n) {
  return vp * (1 + i) ** n;
}

// Valor futuro de uma série de aportes mensais (anuidade): PMT·[((1+i)^n − 1)/i].
function futuroDeAportes(pmt, i, n) {
  if (i === 0) return pmt * n;
  return pmt * (((1 + i) ** n - 1) / i);
}

// Valor presente: quanto vale hoje um valor VF daqui a n períodos.
function valorPresente(vf, i, n) {
  return vf / (1 + i) ** n;
}

// Regra dos 72: anos para dobrar ≈ 72 / (taxa anual em %).
const regra72 = (taxaAnualPct) => 72 / taxaAnualPct;

function run() {
  const checks = [];

  // R$1.000 a 1%/mês por 12 meses.
  const vf = valorFuturo(100000, 0.01, 12);
  checks.push(['VF de R$1.000 a 1%/mês por 12m ≈ R$1.126,83', Math.round(vf) === 112683]);

  // Aportes de R$500/mês a 1%/mês por 12 meses.
  const va = futuroDeAportes(50000, 0.01, 12);
  checks.push(['12 aportes de R$500 a 1%/mês ≈ R$6.341,25', Math.round(va) === 634125]);

  // Juro composto supera o simples no longo prazo.
  const simples = 100000 * (1 + 0.01 * 120);
  const composto = valorFuturo(100000, 0.01, 120);
  checks.push(['em 120 meses, composto > simples', composto > simples]);

  // Valor presente é o inverso do valor futuro.
  checks.push(['VP(VF(x)) volta ao valor original', Math.round(valorPresente(valorFuturo(100000, 0.01, 24), 0.01, 24)) === 100000]);

  // Regra dos 72: a ~8%/ano, dobra em ~9 anos.
  checks.push(['regra dos 72: a 8%/ano dobra em ~9 anos', Math.abs(regra72(8) - 9) < 1e-9]);
  checks.push(['a 12%/ano dobra em ~6 anos', Math.abs(regra72(12) - 6) < 1e-9]);

  // Aporte cedo vale muito mais (tempo é o maior fator do composto).
  const cedo = futuroDeAportes(50000, 0.01, 240);  // 20 anos
  const tarde = futuroDeAportes(50000, 0.01, 120);  // 10 anos
  checks.push(['dobrar o tempo de aporte mais que dobra o resultado (composto)', cedo > 2 * tarde]);

  console.log('=== Módulo 9 — juros compostos e valor do dinheiro no tempo ===\n');
  console.log('VF R$1.000 @1%/12m:', (vf / 100).toFixed(2));
  console.log('aportes R$500 @1%/12m:', (va / 100).toFixed(2));
  console.log('regra dos 72 @8%:', regra72(8), 'anos\n');
  let ok = 0;
  for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: o juro composto premia o TEMPO — aporte constante e cedo supera aporte maior e tarde; e a regra dos 72 dá o tempo de dobrar de cabeça.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
