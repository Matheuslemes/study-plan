/*
 * Módulo 11 (Git) — Automatizar qualidade com hooks e CI.
 * Rode com:  node hooks-ci-gate.mjs
 *
 * Hooks (pre-commit) dão feedback local rápido; a CI é a rede de segurança que roda
 * no servidor e não pode ser pulada. Aqui modelamos um pre-commit (lint/format/test)
 * e o gate de CI, mostrando por que a CI é a fonte da verdade (hook é --no-verify-ável).
 */
function preCommit(mudanca) {
  const falhas = [];
  if (!mudanca.formatado) falhas.push('formatação');
  if (mudanca.lintErros > 0) falhas.push(`lint (${mudanca.lintErros})`);
  if (!mudanca.testesLocaisPassam) falhas.push('testes locais');
  return { ok: falhas.length === 0, falhas };
}
function ci(commit) {
  const falhas = [];
  if (commit.lintErros > 0) falhas.push('lint');
  if (!commit.testesPassam) falhas.push('testes');
  if (!commit.buildOk) falhas.push('build');
  return { verde: falhas.length === 0, falhas };
}

function run() {
  const checks = [];

  // pre-commit bloqueia localmente uma mudança mal formatada / com lint.
  const ruimLocal = preCommit({ formatado: false, lintErros: 2, testesLocaisPassam: true });
  checks.push(['pre-commit bloqueia formatação e lint antes do commit', !ruimLocal.ok && ruimLocal.falhas.length === 2]);
  const bomLocal = preCommit({ formatado: true, lintErros: 0, testesLocaisPassam: true });
  checks.push(['pre-commit passa quando tudo está ok', bomLocal.ok]);

  // Mas o hook pode ser pulado (--no-verify) -> um commit ruim chega ao servidor.
  const commitPulouHook = { lintErros: 3, testesPassam: false, buildOk: true }; // passou por --no-verify
  const resultadoCi = ci(commitPulouHook);
  checks.push(['a CI PEGA o que o hook pulado deixou passar', !resultadoCi.verde && resultadoCi.falhas.includes('lint')]);

  // CI verde é condição para merge (o gate real, não burlável).
  const commitBom = { lintErros: 0, testesPassam: true, buildOk: true };
  checks.push(['CI verde libera o merge', ci(commitBom).verde === true]);
  checks.push(['CI vermelho bloqueia o merge', ci({ lintErros: 0, testesPassam: false, buildOk: true }).verde === false]);

  // Hook = feedback rápido; CI = fonte da verdade (roda sempre, no servidor).
  checks.push(['CI é a fonte da verdade (hook é local e pulável)', true]);

  console.log('=== Módulo 11 — hooks + CI ===\n');
  console.log('pre-commit ruim:', ruimLocal, '\nCI do commit que pulou o hook:', resultadoCi, '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: hooks dão feedback rápido, mas são puláveis; a CI no servidor é o gate inegociável — a qualidade real mora nela.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
