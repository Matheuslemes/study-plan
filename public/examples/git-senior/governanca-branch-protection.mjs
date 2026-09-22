/*
 * Módulo 14 (Git) — Governança de repositórios: branch protection e CODEOWNERS.
 * Rode com:  node governanca-branch-protection.mjs
 *
 * Governança transforma boas práticas em regras que a plataforma impõe: proibir push
 * direto na main, exigir PR + review + CI, e CODEOWNERS para áreas sensíveis. Aqui
 * avaliamos uma tentativa de mudança contra a política de proteção do branch.
 */
function avaliar(evento, politica, codeowners) {
  const bloqueios = [];
  if (evento.tipo === 'push-direto' && politica.proibirPushDireto) bloqueios.push('push direto na main proibido');
  if (evento.tipo === 'merge') {
    if (evento.aprovacoes < politica.minAprovacoes) bloqueios.push('aprovações insuficientes');
    if (politica.exigeCiVerde && !evento.ciVerde) bloqueios.push('CI vermelho');
    if (politica.exigeLinear && evento.temMergeCommit) bloqueios.push('exige história linear');
    const donos = evento.arquivos.flatMap((a) => Object.entries(codeowners).filter(([glob]) => a.startsWith(glob)).map(([, d]) => d));
    if (donos.length && !donos.every((d) => evento.aprovadores.includes(d))) bloqueios.push('falta aprovação de code owner');
  }
  return { permitido: bloqueios.length === 0, bloqueios };
}

function run() {
  const checks = [];
  const politica = { proibirPushDireto: true, minAprovacoes: 1, exigeCiVerde: true, exigeLinear: true };
  const codeowners = { 'infra/': '@sre', 'auth/': '@security' };

  checks.push(['push direto na main é bloqueado', avaliar({ tipo: 'push-direto' }, politica, codeowners).bloqueios.includes('push direto na main proibido')]);

  const mergeOk = { tipo: 'merge', aprovacoes: 1, ciVerde: true, temMergeCommit: false, arquivos: ['src/app.js'], aprovadores: ['@dev'] };
  checks.push(['merge que cumpre a política passa', avaliar(mergeOk, politica, codeowners).permitido === true]);

  checks.push(['CI vermelho bloqueia o merge', avaliar({ ...mergeOk, ciVerde: false }, politica, codeowners).bloqueios.includes('CI vermelho')]);
  checks.push(['merge commit bloqueia quando a política exige história linear', avaliar({ ...mergeOk, temMergeCommit: true }, politica, codeowners).bloqueios.includes('exige história linear')]);

  // CODEOWNERS: mudar auth/ exige aprovação de @security.
  const tocaAuth = { ...mergeOk, arquivos: ['auth/login.js'], aprovadores: ['@dev'] };
  checks.push(['mudar área de code owner sem a aprovação dele é bloqueado', avaliar(tocaAuth, politica, codeowners).bloqueios.includes('falta aprovação de code owner')]);
  checks.push(['com a aprovação do code owner, passa', avaliar({ ...tocaAuth, aprovadores: ['@dev', '@security'] }, politica, codeowners).permitido === true]);

  console.log('=== Módulo 14 — branch protection e CODEOWNERS ===\n');
  console.log('push direto:', avaliar({ tipo: 'push-direto' }, politica, codeowners));
  console.log('merge tocando auth/ sem owner:', avaliar(tocaAuth, politica, codeowners), '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: governança é política imposta pela plataforma — sem push direto, PR com review + CI, história linear e CODEOWNERS para áreas sensíveis.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
