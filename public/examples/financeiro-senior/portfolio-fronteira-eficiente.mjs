/*
 * Módulo Fronteira (Financeiro) — Otimização de portfólio (Markowitz).
 * Rode com:  node portfolio-fronteira-eficiente.mjs
 *
 * O "almoço grátis" da diversificação: com dois ativos cuja correlação é < 1, a
 * volatilidade da carteira fica ABAIXO da média ponderada das volatilidades — e
 * existe uma carteira de variância mínima. Modelamos a matemática de Markowitz.
 */
// Variância de carteira de 2 ativos: w1²σ1² + w2²σ2² + 2·w1·w2·ρ·σ1·σ2.
function volCarteira(w1, a, b, rho) {
  const w2 = 1 - w1;
  const varc = w1 ** 2 * a.vol ** 2 + w2 ** 2 * b.vol ** 2 + 2 * w1 * w2 * rho * a.vol * b.vol;
  return Math.sqrt(varc);
}
const retCarteira = (w1, a, b) => w1 * a.ret + (1 - w1) * b.ret; // retorno é linear (não diversifica)
// Peso de variância mínima (forma fechada para 2 ativos).
function pesoMinVar(a, b, rho) {
  const cov = rho * a.vol * b.vol;
  return (b.vol ** 2 - cov) / (a.vol ** 2 + b.vol ** 2 - 2 * cov);
}

function run() {
  const checks = [];
  const A = { ret: 0.10, vol: 0.20 };  // ações: mais retorno, mais risco
  const B = { ret: 0.06, vol: 0.10 };  // renda fixa: menos de ambos
  const rho = 0.2;                       // baixa correlação

  // 50/50: retorno é a média; volatilidade fica ABAIXO da média ponderada.
  const volMedia = 0.5 * A.vol + 0.5 * B.vol;         // 15%
  const vol5050 = volCarteira(0.5, A, B, rho);
  checks.push(['retorno 50/50 é a média ponderada (8%)', Math.abs(retCarteira(0.5, A, B) - 0.08) < 1e-9]);
  checks.push(['volatilidade 50/50 < média ponderada das vols (o "almoço grátis")', vol5050 < volMedia]);

  // Carteira de variância mínima: vol abaixo até do ativo menos volátil.
  const w = pesoMinVar(A, B, rho);
  const volMin = volCarteira(w, A, B, rho);
  checks.push(['peso de variância mínima fica entre 0 e 1', w > 0 && w < 1]);
  checks.push(['a carteira de variância mínima tem vol < a do ativo menos volátil', volMin < B.vol]);
  checks.push(['nenhuma outra mistura tem vol menor que a de variância mínima', [0.05, 0.1, 0.3, 0.5, 0.9].every((x) => volCarteira(x, A, B, rho) >= volMin - 1e-9)]);

  // Correlação = 1 elimina o benefício (vol vira a média ponderada).
  checks.push(['com ρ=1 não há diversificação (vol = média ponderada)', Math.abs(volCarteira(0.5, A, B, 1) - volMedia) < 1e-9]);
  // Correlação negativa aumenta o benefício.
  checks.push(['ρ negativa reduz ainda mais a vol da carteira', volCarteira(0.5, A, B, -0.5) < vol5050]);

  console.log('=== Fronteira — otimização de portfólio (Markowitz) ===\n');
  console.log('vol média 50/50:', (volMedia * 100).toFixed(1) + '%  | vol real 50/50:', (vol5050 * 100).toFixed(2) + '%');
  console.log('variância mínima: w(ações)=' + (w * 100).toFixed(1) + '%  vol=' + (volMin * 100).toFixed(2) + '%\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: diversificar entre ativos pouco correlacionados baixa o risco sem baixar o retorno esperado — é o único "almoço grátis" das finanças.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
