/*
 * Módulo 16 (Git) — Versionar APIs, schemas e contratos (SemVer + breaking change).
 * Rode com:  node versionar-contratos.mjs
 *
 * Versionar contrato não é escolher um número: é detectar a natureza da mudança.
 * Remover/renomear campo ou apertar um tipo é BREAKING (major). Adicionar campo
 * opcional é compatível (minor). Aqui comparamos dois schemas e derivamos o bump.
 */
function diffSchema(antigo, novo) {
  const mudancas = [];
  for (const [campo, def] of Object.entries(antigo)) {
    if (!(campo in novo)) mudancas.push({ tipo: 'breaking', motivo: `removeu ${campo}` });
    else if (novo[campo].tipo !== def.tipo) mudancas.push({ tipo: 'breaking', motivo: `mudou tipo de ${campo}` });
    else if (def.opcional && !novo[campo].opcional) mudancas.push({ tipo: 'breaking', motivo: `${campo} virou obrigatório` });
  }
  for (const [campo, def] of Object.entries(novo)) {
    if (!(campo in antigo)) mudancas.push({ tipo: def.opcional ? 'minor' : 'breaking', motivo: `adicionou ${campo}${def.opcional ? ' (opcional)' : ' (obrigatório)'}` });
  }
  return mudancas;
}
function bump(versao, mudancas) {
  const [maj, min, pat] = versao.split('.').map(Number);
  if (mudancas.some((m) => m.tipo === 'breaking')) return `${maj + 1}.0.0`;
  if (mudancas.some((m) => m.tipo === 'minor')) return `${maj}.${min + 1}.0`;
  return `${maj}.${min}.${pat + 1}`;
}

function run() {
  const checks = [];
  const v1 = { id: { tipo: 'int' }, nome: { tipo: 'string' }, apelido: { tipo: 'string', opcional: true } };

  // Adicionar campo opcional -> minor.
  const addOpcional = diffSchema(v1, { ...v1, email: { tipo: 'string', opcional: true } });
  checks.push(['adicionar campo opcional é minor', addOpcional.every((m) => m.tipo === 'minor') && bump('1.4.2', addOpcional) === '1.5.0']);

  // Remover campo -> breaking (major).
  const removeu = diffSchema(v1, { nome: { tipo: 'string' }, apelido: { tipo: 'string', opcional: true } });
  checks.push(['remover campo é breaking (major)', removeu.some((m) => m.tipo === 'breaking') && bump('1.4.2', removeu) === '2.0.0']);

  // Mudar tipo -> breaking.
  const mudouTipo = diffSchema(v1, { ...v1, id: { tipo: 'string' } });
  checks.push(['mudar o tipo de um campo é breaking', bump('1.0.0', mudouTipo) === '2.0.0']);

  // Tornar opcional obrigatório -> breaking.
  const apertou = diffSchema(v1, { ...v1, apelido: { tipo: 'string' } });
  checks.push(['tornar opcional obrigatório é breaking', apertou.some((m) => m.tipo === 'breaking')]);

  // Adicionar campo OBRIGATÓRIO -> breaking (quebra clientes antigos).
  const addObrigatorio = diffSchema(v1, { ...v1, cpf: { tipo: 'string' } });
  checks.push(['adicionar campo obrigatório é breaking', bump('1.0.0', addObrigatorio) === '2.0.0']);

  // Sem mudanças -> patch.
  checks.push(['sem mudanças de contrato -> patch', bump('1.4.2', diffSchema(v1, v1)) === '1.4.3']);

  console.log('=== Módulo 16 — versionar contratos (SemVer) ===\n');
  console.log('remover campo:', removeu, '-> ', bump('1.4.2', removeu));
  console.log('add opcional :', addOpcional, '-> ', bump('1.4.2', addOpcional), '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: o bump sai da NATUREZA da mudança no contrato — remover/renomear/apertar é breaking (major); adicionar opcional é minor. Automatize essa detecção no CI.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
