/*
 * Módulo 5 (AIeng) — Revisão de código gerado por IA, dirigida por risco.
 * Rode com:  node revisao-por-risco.mjs
 *
 * Revisar código de IA como se fosse humano não escala: revise por INTENÇÃO e RISCO.
 * Tamanho do diff, caminhos sensíveis (auth, pagamento, migração) e nível de teste
 * definem a profundidade da revisão. Aqui calculamos o rigor exigido por mudança.
 */
const CAMINHOS_SENSIVEIS = ['auth/', 'payment/', 'migrations/', 'infra/'];
function nivelRevisao(mudanca) {
  let risco = 0;
  if (mudanca.linhas > 400) risco += 2; else if (mudanca.linhas > 100) risco += 1;
  if (mudanca.arquivos.some((a) => CAMINHOS_SENSIVEIS.some((s) => a.startsWith(s)))) risco += 3; // caminho sensível exige revisão profunda
  if (!mudanca.temTestes) risco += 2;
  if (mudanca.geradaPorIA) risco += 1;                    // IA exige verificação extra
  if (risco >= 4) return 'profunda (linha a linha + testes + par humano)';
  if (risco >= 2) return 'padrão (revisão de intenção + testes)';
  return 'leve (checagem rápida)';
}

function run() {
  const checks = [];

  const trivial = { linhas: 20, arquivos: ['docs/x.md'], temTestes: true, geradaPorIA: true };
  checks.push(['mudança trivial em docs -> revisão leve', nivelRevisao(trivial) === 'leve (checagem rápida)']);

  const sensivel = { linhas: 50, arquivos: ['auth/login.js'], temTestes: true, geradaPorIA: true };
  checks.push(['mudança em auth/ -> revisão profunda', nivelRevisao(sensivel).startsWith('profunda')]);

  const semTeste = { linhas: 120, arquivos: ['src/util.js'], temTestes: false, geradaPorIA: true };
  checks.push(['diff médio sem testes exige mais rigor', nivelRevisao(semTeste) !== 'leve (checagem rápida)']);

  const gigante = { linhas: 900, arquivos: ['payment/checkout.js'], temTestes: false, geradaPorIA: true };
  checks.push(['diff gigante + pagamento + sem teste -> profunda', nivelRevisao(gigante).startsWith('profunda')]);

  // Código gerado por IA sobe o risco em relação ao mesmo diff humano.
  const base = { linhas: 120, arquivos: ['src/util.js'], temTestes: true };
  checks.push(['gerado por IA exige revisão >= a do mesmo diff humano', nivelRevisao({ ...base, geradaPorIA: true }) !== 'leve (checagem rápida)' || nivelRevisao({ ...base, geradaPorIA: false }) === 'leve (checagem rápida)']);

  console.log('=== Módulo 5 — revisão por risco ===\n');
  console.log('auth/ pequeno:', nivelRevisao(sensivel));
  console.log('payment gigante sem teste:', nivelRevisao(gigante), '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: revise código de IA por risco — tamanho, caminhos sensíveis e cobertura de teste definem a profundidade; o gargalo assumido é a revisão, não a geração.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
