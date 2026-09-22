/*
 * Módulo 3 (Git) — Commits atômicos e mensagens legíveis.
 * Rode com:  node commits-atomicos.mjs
 *
 * Um commit atômico trata de UM assunto. Isso torna o histórico legível, permite
 * revert isolado e faz o bisect apontar a causa certa. Aqui separamos uma mudança
 * misturada em commits atômicos e mostramos que o revert de um não afeta o outro.
 */
function separarPorAssunto(mudancas) {
  const porAssunto = {};
  for (const m of mudancas) (porAssunto[m.assunto] ??= []).push(m.arquivo);
  return Object.entries(porAssunto).map(([assunto, arquivos]) => ({ assunto, arquivos }));
}
function mensagemConvencional(tipo, escopo, resumo) {
  const ok = /^(feat|fix|refactor|docs|test|chore)$/.test(tipo) && resumo.length > 0 && resumo.length <= 72;
  return { texto: `${tipo}(${escopo}): ${resumo}`, valida: ok };
}

function run() {
  const checks = [];
  const mudancasMisturadas = [
    { arquivo: 'auth.js', assunto: 'fix-login' },
    { arquivo: 'auth.test.js', assunto: 'fix-login' },
    { arquivo: 'README.md', assunto: 'docs' },
    { arquivo: 'theme.css', assunto: 'refactor-css' },
  ];
  const commits = separarPorAssunto(mudancasMisturadas);
  checks.push(['3 assuntos viram 3 commits atômicos', commits.length === 3]);
  checks.push(['o fix agrupa código + teste juntos', commits.find((c) => c.assunto === 'fix-login').arquivos.sort().join() === 'auth.js,auth.test.js']);

  // Revert isolado: desfazer o commit de docs não toca no fix nem no css.
  let aplicados = new Set(commits.map((c) => c.assunto));
  aplicados.delete('docs'); // revert do commit de docs
  checks.push(['revert de um commit atômico não afeta os outros', aplicados.has('fix-login') && aplicados.has('refactor-css') && !aplicados.has('docs')]);

  // Mensagens convencionais.
  checks.push(['mensagem convencional válida', mensagemConvencional('fix', 'auth', 'corrige expiração de sessão').valida === true]);
  checks.push(['tipo inválido é rejeitado', mensagemConvencional('conserta', 'auth', 'x').valida === false]);
  checks.push(['resumo acima de 72 chars é rejeitado', mensagemConvencional('feat', 'x', 'a'.repeat(80)).valida === false]);

  console.log('=== Módulo 3 — commits atômicos ===\n');
  for (const c of commits) console.log(`  ${c.assunto}: ${c.arquivos.join(', ')}`);
  console.log('mensagem:', mensagemConvencional('fix', 'auth', 'corrige expiração de sessão').texto, '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: um assunto por commit + mensagem convencional torna o histórico revisável, o revert cirúrgico e o bisect preciso.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
