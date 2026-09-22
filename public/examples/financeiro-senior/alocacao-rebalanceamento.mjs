/*
 * Módulo 24 (Financeiro) — Alocação de ativos e rebalanceamento.
 * Rode com:  node alocacao-rebalanceamento.mjs
 *
 * A alocação (quanto em cada classe) explica a maior parte do risco/retorno. Com o
 * tempo, o mercado desalinha os pesos; rebalancear traz de volta ao alvo — e força a
 * disciplina de "vender o que subiu, comprar o que caiu". Centavos inteiros.
 */

function pesosAtuais(carteira) {
  const total = Object.values(carteira).reduce((s, v) => s + v, 0);
  const pesos = {};
  for (const [k, v] of Object.entries(carteira)) pesos[k] = v / total;
  return { total, pesos };
}

// Ordens para voltar ao alvo: quanto comprar (+) ou vender (−) de cada classe.
function rebalancear(carteira, alvo) {
  const { total } = pesosAtuais(carteira);
  const ordens = {};
  for (const k of Object.keys(alvo)) ordens[k] = Math.round(total * alvo[k]) - (carteira[k] || 0);
  return ordens;
}

function run() {
  const checks = [];
  const alvo = { acoes: 0.60, rendaFixa: 0.30, caixa: 0.10 };

  // Carteira que começou no alvo, mas ações subiram e desalinharam.
  const carteira = { acoes: 780000, rendaFixa: 300000, caixa: 100000 }; // total 1.180.000
  const { total, pesos } = pesosAtuais(carteira);
  checks.push(['os pesos somam 100%', Math.abs(pesos.acoes + pesos.rendaFixa + pesos.caixa - 1) < 1e-9]);
  checks.push(['ações subiram acima do alvo de 60%', pesos.acoes > 0.60]);

  const ordens = rebalancear(carteira, alvo);
  checks.push(['rebalancear manda VENDER ações (peso acima do alvo)', ordens.acoes < 0]);
  checks.push(['rebalancear manda COMPRAR renda fixa e caixa (abaixo do alvo)', ordens.rendaFixa > 0 && ordens.caixa > 0]);

  // As ordens não mudam o patrimônio total (só realocam) — soma ~0.
  const somaOrdens = Object.values(ordens).reduce((s, v) => s + v, 0);
  checks.push(['as ordens de rebalanceamento somam ~0 (só realocam)', Math.abs(somaOrdens) <= 1]);

  // Após aplicar as ordens, a carteira volta ao alvo.
  const nova = {};
  for (const k of Object.keys(alvo)) nova[k] = carteira[k] + ordens[k];
  const pn = pesosAtuais(nova).pesos;
  checks.push(['após rebalancear, os pesos batem o alvo', Math.abs(pn.acoes - 0.60) < 0.01 && Math.abs(pn.rendaFixa - 0.30) < 0.01]);

  // Disciplina: rebalancear vende o que subiu e compra o que caiu (contra o impulso).
  checks.push(['rebalancear impõe "vender na alta, comprar na baixa"', ordens.acoes < 0 && ordens.rendaFixa > 0]);

  console.log('=== Módulo 24 — alocação e rebalanceamento ===\n');
  console.log('pesos atuais:', Object.fromEntries(Object.entries(pesos).map(([k, v]) => [k, (v * 100).toFixed(1) + '%'])));
  console.log('ordens (centavos, + compra / − vende):', ordens, '\n');
  let ok = 0;
  for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: a alocação-alvo define o risco; rebalancear periodicamente restaura os pesos e força, com disciplina, vender na alta e comprar na baixa.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
