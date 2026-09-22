/*
 * Módulo 1 (AIeng) — IA como amplificador, não substituto (tese DORA 2025).
 * Rode com:  node amplificador-dora.mjs
 *
 * A IA amplifica a CAPACIDADE que já existe: melhora um time com base sólida (testes,
 * revisão, CI) e piora um time frágil, ao acelerar a produção de débito. Aqui modelamos
 * throughput e estabilidade antes/depois da adoção conforme a capacidade do time.
 */
// A IA multiplica o throughput; a estabilidade muda conforme a capacidade conter os erros.
function comIA(time) {
  const throughput = time.throughput * 1.8;                       // IA acelera a escrita
  const fatorEstab = time.capacidade;                             // 0..1: quão bem contém erros
  const estabilidade = time.estabilidade * (0.6 + 0.6 * fatorEstab); // <1 piora, >1 melhora
  return { throughput: +throughput.toFixed(2), estabilidade: +Math.min(1, estabilidade).toFixed(2) };
}

function run() {
  const checks = [];
  const forte = { throughput: 10, estabilidade: 0.9, capacidade: 0.9 };  // testes/CI/revisão sólidos
  const fraco = { throughput: 10, estabilidade: 0.9, capacidade: 0.2 };  // sem base

  const f = comIA(forte), w = comIA(fraco);
  checks.push(['a IA aumenta o throughput dos dois times', f.throughput > forte.throughput && w.throughput > fraco.throughput]);
  checks.push(['time forte: estabilidade se mantém/melhora', f.estabilidade >= forte.estabilidade - 0.05]);
  checks.push(['time fraco: estabilidade PIORA (amplifica a ausência de base)', w.estabilidade < fraco.estabilidade]);
  checks.push(['mesmo ganho de throughput, resultados de estabilidade opostos', f.throughput === w.throughput && f.estabilidade > w.estabilidade]);

  // "Mais rápido" não é "melhor": medir throughput E estabilidade (DORA), não velocidade percebida.
  const decisao = (r) => (r.estabilidade < 0.7 ? 'estabilizar a base antes de acelerar' : 'seguir acelerando');
  checks.push(['time fraco: recomendação é estabilizar a base primeiro', decisao(w) === 'estabilizar a base antes de acelerar']);
  checks.push(['time forte: recomendação é seguir', decisao(f) === 'seguir acelerando']);

  console.log('=== Módulo 1 — IA como amplificador (DORA) ===\n');
  console.log('time forte + IA:', f, '\ntime fraco + IA:', w, '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: a IA amplifica a capacidade existente — sem base (testes, revisão, CI) ela acelera o caos. Meça throughput E estabilidade, não a velocidade sentida.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
