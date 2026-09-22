/*
 * Módulo 0 (DevOps) — Da Faixa 0 ao pipeline, sem servidor de CI.
 *
 * Rode com:  node devops-zero.mjs        (Node 18+; só a biblioteca padrão)
 *
 * DevOps não é uma ferramenta nem uma pessoa: é reduzir o tempo entre "escrevi"
 * e "está em produção funcionando", com feedback rápido e passos automáticos e
 * repetíveis. Aqui um pipeline é uma esteira de estágios (build -> teste ->
 * deploy -> smoke); o GATE de teste impede código quebrado de chegar à produção,
 * e no fim medimos a taxa de falha de mudança (uma das 4 métricas DORA).
 *
 * Liga os fundamentos da Faixa 0 à trilha de DevOps:
 *   1. um pipeline é uma sequência de estágios automáticos, não cliques manuais;
 *   2. fail-fast: o primeiro estágio que falha para a esteira (nada avança quebrado);
 *   3. o gate de teste protege a produção — o valor de automatizar;
 *   4. determinismo: rodar de novo dá o mesmo resultado (repetível, não "na minha máquina");
 *   5. você melhora o que mede: change failure rate = deploys que quebraram / deploys.
 */

// Cada estágio recebe a mudança e devolve se passou. A ordem importa: é uma esteira.
const ESTAGIOS = [
  { nome: 'build', ok: (m) => m.compila },
  { nome: 'teste', ok: (m) => m.testesPassam },     // <- o GATE: barra o que está quebrado
  { nome: 'deploy', ok: () => true },
  { nome: 'smoke', ok: (m) => m.saudavelEmProd },   // valida em produção; falhou -> rollback
];

// Roda a esteira com fail-fast: para no primeiro estágio que falha.
function rodarPipeline(mudanca) {
  const trilha = [];
  for (const estagio of ESTAGIOS) {
    const passou = estagio.ok(mudanca);
    trilha.push(`${estagio.nome}:${passou ? 'ok' : 'FALHOU'}`);
    if (!passou) {
      return { deployed: false, saudavel: false, barradoEm: estagio.nome, trilha };
    }
  }
  // Chegou ao fim: passou por deploy. "saudavel" = passou também no smoke pós-deploy.
  return { deployed: true, saudavel: true, barradoEm: null, trilha };
}

// Uma mudança que passou pelo deploy mas falhou no smoke chegou à produção e quebrou.
function rodarComProd(mudanca) {
  const semSmoke = ESTAGIOS.slice(0, 3);              // build, teste, deploy
  for (const estagio of semSmoke) {
    if (!estagio.ok(mudanca)) return { deployed: false, saudavel: false, barradoEm: estagio.nome };
  }
  const saudavel = ESTAGIOS[3].ok(mudanca);           // smoke em produção
  return { deployed: true, saudavel, barradoEm: saudavel ? null : 'smoke' };
}

const MUDANCAS = [
  { nome: 'feature-login', compila: true, testesPassam: true, saudavelEmProd: true },
  { nome: 'bug-de-sintaxe', compila: false, testesPassam: false, saudavelEmProd: false },
  { nome: 'feature-carrinho', compila: true, testesPassam: false, saudavelEmProd: false }, // gate barra
  { nome: 'feature-busca', compila: true, testesPassam: true, saudavelEmProd: false },     // quebra em prod
];

function runChecks() {
  const checks = [];
  const r = Object.fromEntries(MUDANCAS.map((m) => [m.nome, rodarComProd(m)]));

  checks.push(['um pipeline é uma sequência de 4 estágios automáticos', ESTAGIOS.length === 4]);
  checks.push(['código que não compila é barrado no build (não vai a produção)',
    r['bug-de-sintaxe'].barradoEm === 'build' && r['bug-de-sintaxe'].deployed === false]);
  checks.push(['o GATE de teste barra código quebrado antes do deploy (fail-fast)',
    r['feature-carrinho'].barradoEm === 'teste' && r['feature-carrinho'].deployed === false]);
  checks.push(['mudança saudável passa por tudo e faz deploy', r['feature-login'].deployed && r['feature-login'].saudavel]);

  // determinismo: rodar duas vezes dá exatamente o mesmo resultado (repetível).
  const a = rodarPipeline(MUDANCAS[0]);
  const b = rodarPipeline(MUDANCAS[0]);
  checks.push(['o pipeline é determinístico: 2 execuções, mesmo resultado', JSON.stringify(a) === JSON.stringify(b)]);

  // métrica DORA: change failure rate = deploys que quebraram / deploys realizados.
  const deployados = Object.values(r).filter((x) => x.deployed);
  const falharam = deployados.filter((x) => !x.saudavel);
  const cfr = falharam.length / deployados.length;
  checks.push(['change failure rate = 1/2 (só feature-busca quebrou em produção)', cfr === 0.5]);
  checks.push(['o gate impediu que feature-carrinho contasse como falha de produção', !r['feature-carrinho'].deployed]);

  console.log('=== Módulo 0 (DevOps) — pipeline, gate e medição ===\n');
  for (const m of MUDANCAS) {
    const res = r[m.nome];
    console.log(`  ${m.nome.padEnd(16)} -> ${res.deployed ? (res.saudavel ? 'deploy OK ' : 'deploy+QUEBROU') : 'barrado em ' + res.barradoEm}`);
  }
  console.log(`\n  deploys: ${deployados.length} | falhas em prod: ${falharam.length} | change failure rate: ${(cfr * 100).toFixed(0)}%\n`);

  let ok = 0;
  for (const [nome, cond] of checks) {
    console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${nome}`);
    if (cond) ok++;
  }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: automatizar a esteira e barrar o quebrado no gate é o que dá velocidade COM estabilidade —');
  console.log('e o que não se mede (as métricas DORA) não se melhora.');
  return ok === checks.length;
}

const ok = runChecks();
if (typeof process !== 'undefined' && process.exit) process.exit(ok ? 0 : 1);
