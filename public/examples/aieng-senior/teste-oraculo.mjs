/*
 * Módulo 6 (AIeng) — Testes como oráculo: propriedades que a IA não escreve por você.
 * Rode com:  node teste-oraculo.mjs
 *
 * O oráculo (o teste) é a única coisa que separa "parece certo" de "está certo" — e é
 * justamente o que você NÃO deve deixar a IA escrever para o próprio código dela.
 * Aqui um teste baseado em PROPRIEDADES pega uma ordenação sutilmente errada da IA.
 */
// Propriedades que qualquer sort correto satisfaz (independem da implementação):
function ehOrdenacaoValida(sortFn, casos) {
  for (const arr of casos) {
    const r = sortFn([...arr]);
    // P1: mesmo tamanho; P2: não-decrescente; P3: mesma multiplicidade (permutação).
    if (r.length !== arr.length) return false;
    for (let i = 1; i < r.length; i++) if (r[i - 1] > r[i]) return false;
    const conta = (a) => a.slice().sort((x, y) => x - y).join(',');
    if (conta(r) !== conta(arr)) return false;
  }
  return true;
}

function run() {
  const checks = [];
  const casos = [[3, 1, 2], [1], [], [5, 5, 1, 2, 2], [9, -3, 0, -3, 7]];

  const correto = (a) => a.sort((x, y) => x - y);
  // Erro sutil da IA: remove duplicatas "sem querer" (parece ordenar, mas perde elementos).
  const bugada = (a) => [...new Set(a)].sort((x, y) => x - y);

  checks.push(['o oráculo aprova a implementação correta', ehOrdenacaoValida(correto, casos) === true]);
  checks.push(['o oráculo REPROVA a versão que perde duplicatas', ehOrdenacaoValida(bugada, casos) === false]);

  // A bugada "parece certa" num caso feliz sem duplicatas — por isso testar 1 caso engana.
  checks.push(['sem duplicatas, a bugada passaria num único caso (engana)', ehOrdenacaoValida(bugada, [[3, 1, 2]]) === true]);
  checks.push(['propriedade da permutação (multiplicidade) é o que pega o bug', ehOrdenacaoValida(bugada, [[2, 2, 1]]) === false]);

  // Property-based cobre casos que exemplos escolhidos a dedo não cobririam.
  const aleatorios = Array.from({ length: 20 }, () => Array.from({ length: 6 }, () => Math.floor(Math.random() * 5)));
  checks.push(['property-based valida o correto em 20 casos aleatórios', ehOrdenacaoValida(correto, aleatorios) === true]);

  console.log('=== Módulo 6 — testes como oráculo (property-based) ===\n');
  console.log('correto passa?', ehOrdenacaoValida(correto, casos), '| bugada passa?', ehOrdenacaoValida(bugada, casos), '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: o teste é o oráculo — propriedades (tamanho, ordem, permutação) pegam erros sutis que "parece certo" esconde; não terceirize o oráculo para a IA.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
