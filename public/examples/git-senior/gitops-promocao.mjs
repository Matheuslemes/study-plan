/*
 * Módulo 17 (Git) — GitOps: o repositório como fonte da verdade e promoção auditável.
 * Rode com:  node gitops-promocao.mjs
 *
 * Em GitOps, o estado desejado de cada ambiente vive no Git; um reconciliador aplica o
 * que está commitado. Promover é um commit que copia a versão de um ambiente para o
 * próximo (dev -> staging -> prod), com aprovação — e rollback é `git revert`.
 */
function criarSistema() {
  const desejado = { dev: 'v1', staging: 'v1', prod: 'v1' };
  const realObservado = { dev: 'v1', staging: 'v1', prod: 'v1' };
  const historico = [];
  const reconciliar = () => { for (const amb of Object.keys(desejado)) realObservado[amb] = desejado[amb]; };
  return {
    desejado, realObservado,
    deploy(amb, versao) { desejado[amb] = versao; historico.push({ amb, versao, tipo: 'deploy' }); reconciliar(); },
    promover(de, para, aprovado) {
      if (!aprovado) return { ok: false, motivo: 'promoção exige aprovação' };
      desejado[para] = desejado[de]; historico.push({ amb: para, versao: desejado[de], tipo: `promover ${de}->${para}` }); reconciliar();
      return { ok: true };
    },
    rollback(amb) { const evs = historico.filter((h) => h.amb === amb); if (evs.length >= 2) { const alvo = evs[evs.length - 2].versao; desejado[amb] = alvo; historico.push({ amb, versao: alvo, tipo: 'revert' }); reconciliar(); } },
    historico,
  };
}

function run() {
  const checks = [];
  const s = criarSistema();

  s.deploy('dev', 'v2');
  checks.push(['deploy em dev muda o estado desejado e o reconciliador aplica', s.desejado.dev === 'v2' && s.realObservado.dev === 'v2']);
  checks.push(['staging e prod não mudam (promoção é explícita)', s.desejado.staging === 'v1' && s.desejado.prod === 'v1']);

  // Promover dev->staging exige aprovação.
  checks.push(['promover sem aprovação é bloqueado', s.promover('dev', 'staging', false).ok === false]);
  s.promover('dev', 'staging', true);
  checks.push(['promover com aprovação copia a versão de dev para staging', s.desejado.staging === 'v2']);

  // Prod só recebe o que passou por staging (promoção encadeada).
  s.promover('staging', 'prod', true);
  checks.push(['prod recebe a versão promovida de staging', s.desejado.prod === 'v2' && s.realObservado.prod === 'v2']);

  // Rollback = reverter para o deploy anterior (auditável no histórico).
  s.deploy('prod', 'v3');
  s.rollback('prod');
  checks.push(['rollback volta prod ao deploy anterior', s.desejado.prod === 'v2']);

  // Tudo fica registrado (git como trilha de auditoria).
  checks.push(['cada mudança é um evento auditável no histórico', s.historico.length >= 5 && s.historico.some((h) => h.tipo.startsWith('promover'))]);

  console.log('=== Módulo 17 — GitOps: promoção auditável ===\n');
  console.log('estado desejado:', s.desejado);
  console.log('histórico:'); for (const h of s.historico) console.log(`  ${h.tipo}: ${h.amb}=${h.versao}`);
  console.log('');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: em GitOps o Git é a fonte da verdade; promover é um commit aprovado que avança a versão por ambiente, e rollback é reverter — tudo auditável.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
