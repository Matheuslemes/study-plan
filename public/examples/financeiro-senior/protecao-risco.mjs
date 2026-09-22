/*
 * Módulo Fronteira (Financeiro) — Proteção patrimonial: seguro como transferência de risco.
 * Rode com:  node protecao-risco.mjs
 *
 * Seguro tem valor esperado NEGATIVO (a seguradora cobra o custo esperado + margem) — e
 * ainda assim é racional para perdas RUINOSAS. A regra não é "compensa em média", é
 * "a perda me quebraria?". Transfere-se o risco de cauda; auto-segura-se o pequeno.
 */
// Prêmio = perda esperada × (1 + carregamento da seguradora).
function premio(prob, severidade, carregamento = 0.4) { return prob * severidade * (1 + carregamento); }
function valorEsperadoDoSeguro(prob, severidade, carregamento) {
  const perdaEsperada = prob * severidade;
  return perdaEsperada - premio(prob, severidade, carregamento); // sempre <= 0 (EV negativo)
}
// Decisão: segure se a severidade for ruinosa vs a reserva (risco de cauda), não pelo EV.
function decisao(prob, severidade, reserva) {
  const ruinoso = severidade > reserva;
  return ruinoso ? 'transferir (segurar)' : 'auto-segurar (reter)';
}

function run() {
  const checks = [];
  const reserva = 30000; // reserva de emergência disponível

  // Seguro sempre tem EV negativo para o segurado (é o preço da proteção).
  checks.push(['o valor esperado do seguro é negativo (preço da proteção)', valorEsperadoDoSeguro(0.01, 500000, 0.4) < 0]);

  // Perda catastrófica (casa, invalidez) > reserva -> transferir, apesar do EV negativo.
  checks.push(['perda ruinosa (500k > reserva) -> segurar mesmo com EV negativo', decisao(0.01, 500000, reserva) === 'transferir (segurar)']);

  // Perda pequena (celular 2k < reserva) -> auto-segurar (não vale o carregamento).
  checks.push(['perda pequena (2k < reserva) -> auto-segurar', decisao(0.05, 2000, reserva) === 'auto-segurar (reter)']);

  // Alta probabilidade + baixa severidade: o prêmio fica caro e o dano é absorvível -> reter.
  checks.push(['alta freq./baixa severidade -> reter (prêmio caro, dano absorvível)', decisao(0.30, 1000, reserva) === 'auto-segurar (reter)']);

  // Baixa probabilidade + severidade ruinosa: exatamente o caso clássico de seguro.
  checks.push(['baixa prob./alta severidade -> transferir (caso clássico de seguro)', decisao(0.005, 800000, reserva) === 'transferir (segurar)']);

  // Diversificação de risco de cauda: seguro protege contra a RUÍNA, não maximiza retorno.
  const premioCasa = premio(0.01, 500000);
  checks.push(['o prêmio é uma fração pequena da perda catastrófica evitada', premioCasa < 500000 * 0.05]);

  console.log('=== Fronteira — proteção e transferência de risco ===\n');
  console.log('casa (1% / 500k, reserva 30k):', decisao(0.01, 500000, reserva), '| prêmio ~', premio(0.01, 500000).toFixed(0));
  console.log('celular (5% / 2k):', decisao(0.05, 2000, reserva), '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: seguro é transferência de risco de cauda — racional para perdas que te quebrariam, não para as pequenas. Decida por "isto me arruína?", não por "compensa em média".');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
