/*
 * Módulo 0 (Arquitetura) — Da Faixa 0 à estrutura de sistemas, sem framework.
 *
 * Rode com:  node arquitetura-zero.mjs        (Node 18+; só a biblioteca padrão)
 *
 * Arquitetura não é diagrama bonito: é a ESTRUTURA de dependências entre as partes.
 * Aqui um sistema é um grafo (módulo -> de quem ele depende). Medimos acoplamento
 * (fan-in / fan-out), detectamos ciclos — o inimigo da modularidade — e mostramos
 * que apontar as dependências para um núcleo estável quebra o ciclo e localiza a mudança.
 *
 * Liga os fundamentos da Faixa 0 à trilha de Arquitetura:
 *   1. um sistema é um grafo de módulos e dependências, não um monte de arquivos;
 *   2. acoplamento (fan-out) alto deixa um módulo refém de mudanças alheias;
 *   3. um ciclo de dependência faz a mudança se propagar em vão — evite-o;
 *   4. dependências que apontam para um núcleo estável (fan-out 0, fan-in alto)
 *      dão modularidade: cada parte muda sem arrastar o resto.
 */

// fan-out: de quantos módulos ESTE depende (quanto maior, mais frágil a mudanças alheias).
function fanOut(grafo, modulo) {
  return grafo[modulo].length;
}

// fan-in: quantos módulos dependem DESTE (fan-in alto + fan-out 0 = núcleo estável).
function fanIn(grafo, modulo) {
  return Object.keys(grafo).filter((outro) => grafo[outro].includes(modulo)).length;
}

// Detecta ciclo por DFS com cores. Um ciclo A->B->A significa que mudar A pode
// obrigar a mudar B — e vice-versa: acoplamento que a modularidade quer eliminar.
function temCiclo(grafo) {
  const BRANCO = 0, CINZA = 1, PRETO = 2;
  const cor = {};
  for (const n of Object.keys(grafo)) cor[n] = BRANCO;
  const visita = (n) => {
    cor[n] = CINZA;
    for (const vizinho of grafo[n]) {
      if (cor[vizinho] === CINZA) return true;              // aresta para nó em aberto = ciclo
      if (cor[vizinho] === BRANCO && visita(vizinho)) return true;
    }
    cor[n] = PRETO;
    return false;
  };
  return Object.keys(grafo).some((n) => cor[n] === BRANCO && visita(n));
}

// DESIGN RUIM: pedidos e pagamento se chamam mutuamente (ciclo); a UI conhece tudo.
const ruim = {
  ui: ['pedidos', 'pagamento', 'estoque'],
  pedidos: ['pagamento', 'estoque'],
  pagamento: ['pedidos'],      // <- ciclo: pagamento volta a depender de pedidos
  estoque: [],
};

// DESIGN BOM: as dependências apontam para um núcleo estável (dominio). Sem ciclo.
// ui -> servico -> dominio ; infra -> dominio. O dominio não depende de ninguém.
const bom = {
  ui: ['servico'],
  servico: ['dominio'],
  infra: ['dominio'],
  dominio: [],                 // núcleo estável: fan-out 0, o resto aponta para cá
};

// CORREÇÃO: quebrar o ciclo do design ruim — pagamento emite um evento em vez de
// chamar pedidos de volta. Uma inversão de dependência: some a aresta pagamento->pedidos.
const corrigido = { ...ruim, pagamento: [] };

function moduloMaisEstavel(grafo) {
  return Object.keys(grafo).sort((a, b) => fanIn(grafo, b) - fanIn(grafo, a))[0];
}

function runChecks() {
  const checks = [];

  checks.push(['um sistema é um grafo de módulos e dependências (4 módulos)', Object.keys(ruim).length === 4]);
  checks.push(['acoplamento se mede: a UI do design ruim depende de 3 módulos (fan-out 3)', fanOut(ruim, 'ui') === 3]);
  checks.push(['o design ruim tem um ciclo (pedidos <-> pagamento)', temCiclo(ruim) === true]);
  checks.push(['o design bom é acíclico: dá para ordenar em camadas', temCiclo(bom) === false]);

  const nucleo = moduloMaisEstavel(bom);
  checks.push(['no design bom o núcleo é o "dominio" (maior fan-in)', nucleo === 'dominio']);
  checks.push(['o núcleo é estável: fan-out 0 e fan-in 2 (servico + infra apontam para ele)', fanOut(bom, 'dominio') === 0 && fanIn(bom, 'dominio') === 2]);

  checks.push(['quebrar o ciclo remove o acoplamento de volta: o corrigido é acíclico', temCiclo(corrigido) === false]);
  checks.push(['e o fan-out de pagamento cai de 1 para 0', fanOut(ruim, 'pagamento') === 1 && fanOut(corrigido, 'pagamento') === 0]);

  console.log('=== Módulo 0 (Arquitetura) — estrutura, acoplamento e ciclos ===\n');
  console.log('design ruim  -> ciclo?', temCiclo(ruim), '| fan-out(ui):', fanOut(ruim, 'ui'));
  console.log('design bom   -> ciclo?', temCiclo(bom), '| núcleo estável:', moduloMaisEstavel(bom),
    `(fan-in ${fanIn(bom, 'dominio')}, fan-out ${fanOut(bom, 'dominio')})`);
  console.log('corrigido    -> ciclo?', temCiclo(corrigido), '| fan-out(pagamento):', fanOut(corrigido, 'pagamento'), '\n');

  let ok = 0;
  for (const [nome, cond] of checks) {
    console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${nome}`);
    if (cond) ok++;
  }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: arquitetura é a estrutura das dependências. Baixo acoplamento, sem ciclos e');
  console.log('dependências apontando para um núcleo estável são o que deixa cada parte mudar sozinha.');
  return ok === checks.length;
}

const ok = runChecks();
if (typeof process !== 'undefined' && process.exit) process.exit(ok ? 0 : 1);
