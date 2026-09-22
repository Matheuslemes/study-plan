/*
 * Módulo 3 (AIeng) — Fluxo com agentes de código: dirigir → gerar → verificar.
 * Rode com:  node loop-agente.mjs
 *
 * Um agente de código é um LOOP: você dirige (define a meta e o critério), ele gera, e
 * um VERIFICADOR objetivo (testes) decide se aceita. Sem o verificador no loop, o agente
 * "conclui" com código errado. Aqui simulamos o loop com um teste como porta.
 */
// Verificador objetivo: a tentativa passa se satisfaz o critério (aqui, todos os testes).
function verificar(tentativa, testes) {
  return testes.every((t) => t(tentativa));
}
// Loop do agente: gera candidatos até passar no verificador ou esgotar as iterações.
function loopAgente(gerarCandidato, testes, maxIter = 5) {
  for (let i = 1; i <= maxIter; i++) {
    const cand = gerarCandidato(i);
    if (verificar(cand, testes)) return { aceito: true, iteracoes: i, resultado: cand };
  }
  return { aceito: false, iteracoes: maxIter };
}

function run() {
  const checks = [];
  // Critério: a função de desconto rejeita pct inválido e calcula certo.
  const testes = [
    (f) => f(100, 10) === 90,
    (f) => f(100, 0) === 100,
    (f) => { try { f(100, 150); return false; } catch { return true; } },
  ];

  // Agente que só na 2ª tentativa adiciona a validação (a 1ª "parece certa").
  const gerar = (i) => (i < 2 ? (p, d) => Math.round(p * (1 - d / 100))
                              : (p, d) => { if (d < 0 || d > 90) throw new RangeError('pct'); return Math.round(p * (1 - d / 100)); });

  const r = loopAgente(gerar, testes);
  checks.push(['o loop rejeita a 1ª versão (falha no teste) e aceita a corrigida', r.aceito === true && r.iteracoes === 2]);
  checks.push(['a versão aceita passa em TODOS os testes (verificador é a porta)', verificar(r.resultado, testes)]);

  // Sem verificador no loop, a 1ª "plausível" seria aceita (o erro do agente ingênuo).
  const semVerificador = gerar(1);
  checks.push(['sem verificador, a versão plausível-porém-errada passaria', semVerificador(100, 10) === 90 && !verificar(semVerificador, testes)]);

  // O loop é LIMITADO: se nunca passa, desiste (não itera para sempre).
  const nuncaPassa = loopAgente(() => ((p, d) => -1), testes, 4);
  checks.push(['loop limitado: desiste após maxIter sem sucesso', nuncaPassa.aceito === false && nuncaPassa.iteracoes === 4]);

  // Dirigir = definir o critério: sem testes, "aceito" vira vazio de significado.
  checks.push(['sem critério (testes vazios) tudo "passa" — por isso o critério é seu trabalho', verificar(() => 42, [])]);

  console.log('=== Módulo 3 — loop do agente (dirigir/gerar/verificar) ===\n');
  console.log('resultado do loop:', { aceito: r.aceito, iteracoes: r.iteracoes }, '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: o agente é um loop dirigir→gerar→verificar; o verificador objetivo (testes/critério) é o que separa "gerou" de "resolveu" — e você é quem define o critério.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
