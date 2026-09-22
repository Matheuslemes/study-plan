/*
 * Módulo 8 (Git) — Resolver conflitos preservando a intenção de ambos.
 * Rode com:  node resolucao-conflito.mjs
 *
 * Um conflito ocorre quando os dois lados mudam a MESMA linha em relação à base. Se
 * mudaram linhas diferentes, o merge é automático. Aqui detectamos conflito por linha
 * (3-way) e mostramos que a resolução deve combinar a intenção dos dois, não escolher um.
 */
function merge3(base, nosso, deles) {
  const linhas = Math.max(base.length, nosso.length, deles.length);
  const resultado = [], conflitos = [];
  for (let i = 0; i < linhas; i++) {
    const b = base[i], a = nosso[i], d = deles[i];
    if (a === d) resultado.push(a);                 // ambos iguais (mudaram igual ou não mudaram)
    else if (a === b) resultado.push(d);            // só "deles" mudou -> aceita deles
    else if (d === b) resultado.push(a);            // só "nosso" mudou -> aceita nosso
    else { resultado.push({ conflito: { nosso: a, deles: d } }); conflitos.push(i); } // ambos mudaram: CONFLITO
  }
  return { resultado, conflitos };
}

function run() {
  const checks = [];
  const base = ['a', 'b', 'c'];

  // Mudanças em linhas diferentes -> merge automático, sem conflito.
  const auto = merge3(base, ['A', 'b', 'c'], ['a', 'b', 'C']);
  checks.push(['mudanças em linhas diferentes: merge automático', auto.conflitos.length === 0 && auto.resultado.join() === 'A,b,C']);

  // Mesma linha mudada nos dois lados -> conflito na linha 1.
  const conf = merge3(base, ['a', 'B1', 'c'], ['a', 'B2', 'c']);
  checks.push(['mesma linha mudada dos dois lados: conflito detectado', conf.conflitos.length === 1 && conf.conflitos[0] === 1]);
  checks.push(['o conflito preserva os dois lados para o humano decidir', conf.resultado[1].conflito.nosso === 'B1' && conf.resultado[1].conflito.deles === 'B2']);

  // Resolução que preserva a INTENÇÃO dos dois (não descarta um lado cegamente).
  const resolvido = conf.resultado.map((l) => (l && l.conflito ? l.conflito.nosso + '+' + l.conflito.deles : l));
  checks.push(['resolução combina a intenção dos dois lados', resolvido.join() === 'a,B1+B2,c']);

  // Só um lado mudou -> aceita esse lado sem conflito.
  const umLado = merge3(base, ['a', 'B', 'c'], base);
  checks.push(['se só um lado mudou, aceita esse lado sem conflito', umLado.conflitos.length === 0 && umLado.resultado.join() === 'a,B,c']);

  console.log('=== Módulo 8 — resolução de conflito (3-way) ===\n');
  console.log('auto:', auto.resultado.join(), '| conflitos:', conf.conflitos, '| resolvido:', resolvido.join(), '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: conflito = mesma linha mudada dos dois lados em relação à base; resolver bem é combinar as duas intenções, não apagar uma.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
