/*
 * Módulo 13 (AIeng) — DORA AI Capabilities Model: o que amplifica o benefício da IA.
 * Rode com:  node dora-capabilities.mjs
 *
 * O ganho da IA não vem do modelo, e sim das CAPACIDADES organizacionais que o
 * amplificam: base de código saudável, testes/CI, plataforma interna, fluxo de trabalho
 * claro e política de uso. Aqui pontuamos as capacidades e estimamos o uplift esperado.
 */
const CAPACIDADES = ['baseSaudavel', 'testesCI', 'plataformaInterna', 'fluxoClaro', 'politicaDeUso', 'dadosInternos'];
function pontuar(org) {
  return CAPACIDADES.reduce((s, c) => s + (org[c] ? 1 : 0), 0); // 0..6
}
// Uplift esperado da IA cresce com a capacidade; base fraca pode dar uplift negativo.
function upliftEsperado(org) {
  const score = pontuar(org);
  return +(-0.1 + 0.06 * score).toFixed(2); // score 0 -> -0.10 (piora); score 6 -> +0.26
}

function run() {
  const checks = [];
  const forte = Object.fromEntries(CAPACIDADES.map((c) => [c, true]));
  const fraca = Object.fromEntries(CAPACIDADES.map((c) => [c, false]));
  const media = { baseSaudavel: true, testesCI: true, plataformaInterna: false, fluxoClaro: true, politicaDeUso: false, dadosInternos: false };

  checks.push(['org forte pontua 6/6', pontuar(forte) === 6]);
  checks.push(['org fraca pontua 0/6', pontuar(fraca) === 0]);

  checks.push(['org forte tem uplift positivo com a IA', upliftEsperado(forte) > 0]);
  checks.push(['org fraca tem uplift NEGATIVO (a IA amplifica o caos)', upliftEsperado(fraca) < 0]);
  checks.push(['uplift cresce com a capacidade (monótono)', upliftEsperado(media) > upliftEsperado(fraca) && upliftEsperado(forte) > upliftEsperado(media)]);

  // Recomendação: abaixo de um limiar, investir em capacidade ANTES de escalar a IA.
  const recomendar = (org) => (pontuar(org) < 3 ? 'construir capacidade antes de escalar IA' : 'escalar IA com medição');
  checks.push(['org fraca: construir capacidade antes de escalar', recomendar(fraca) === 'construir capacidade antes de escalar IA']);
  checks.push(['org forte: escalar com medição', recomendar(forte) === 'escalar IA com medição']);

  console.log('=== Módulo 13 — DORA AI Capabilities ===\n');
  console.log('forte: score', pontuar(forte), 'uplift', upliftEsperado(forte));
  console.log('fraca: score', pontuar(fraca), 'uplift', upliftEsperado(fraca), '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: o benefício da IA é função das capacidades organizacionais (base, testes/CI, plataforma, fluxo, política); sem elas, o uplift pode ser negativo — invista na base primeiro.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
