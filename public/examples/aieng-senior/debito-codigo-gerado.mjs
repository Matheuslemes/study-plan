/*
 * Módulo 7 (AIeng) — Débito e propriedade do código gerado.
 * Rode com:  node debito-codigo-gerado.mjs
 *
 * Aceitar código sem entender troca velocidade agora por manutenção depois: é DÉBITO.
 * A propriedade (e a responsabilidade) do código é de quem faz o merge, não da IA.
 * Aqui medimos o débito acumulado e o efeito de uma taxa de revisão/entendimento.
 */
// Cada mudança aceita sem entendimento vira débito proporcional ao seu tamanho e risco.
function debitoDaMudanca(m) {
  if (m.entendida) return 0;
  const risco = m.sensivel ? 2 : 1;
  return m.linhas * risco;
}
function acumular(mudancas) {
  return mudancas.reduce((s, m) => s + debitoDaMudanca(m), 0);
}

function run() {
  const checks = [];

  // Time A: aceita tudo sem entender (velocidade sentida, débito silencioso).
  const timeA = [
    { linhas: 120, entendida: false, sensivel: false },
    { linhas: 80, entendida: false, sensivel: true },
    { linhas: 200, entendida: false, sensivel: false },
  ];
  // Time B: mesmas mudanças, mas revisadas/entendidas antes de aceitar.
  const timeB = timeA.map((m) => ({ ...m, entendida: true }));

  const dA = acumular(timeA), dB = acumular(timeB);
  checks.push(['aceitar sem entender acumula débito', dA > 0]);
  checks.push(['revisar/entender antes de aceitar zera o débito de compreensão', dB === 0]);
  checks.push(['mudança sensível não entendida pesa o dobro', debitoDaMudanca({ linhas: 100, entendida: false, sensivel: true }) === 200]);

  // A responsabilidade é de quem aceita: "a IA escreveu" não transfere a conta.
  const responsavel = (mudanca) => mudanca.mergePor;   // quem deu merge é o dono
  checks.push(['o dono do código é quem faz o merge, não a IA', responsavel({ mergePor: '@dev', geradaPor: 'IA' }) === '@dev']);

  // Métrica de saúde: taxa de entendimento (entendidas / total) deve ser alta.
  const taxaEntendimento = (ms) => ms.filter((m) => m.entendida).length / ms.length;
  checks.push(['taxa de entendimento do time A é baixa (0)', taxaEntendimento(timeA) === 0]);
  checks.push(['taxa de entendimento do time B é 100%', taxaEntendimento(timeB) === 1]);

  console.log('=== Módulo 7 — débito do código gerado ===\n');
  console.log('débito time A (aceita cego):', dA, '| time B (revisa):', dB);
  console.log('taxa de entendimento A:', taxaEntendimento(timeA), '| B:', taxaEntendimento(timeB), '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: código aceito sem entender é débito com juros; a propriedade é de quem dá merge. Meça a taxa de entendimento, não a velocidade sentida.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
