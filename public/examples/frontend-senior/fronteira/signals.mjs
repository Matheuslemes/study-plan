/**
 * Academia Frontend · módulo 23 — reatividade granular do zero.
 *
 * Sem dependências. Roda em Node 18+ e no navegador (é um módulo ES).
 *
 *     node signals.mjs
 *
 * O sistema inteiro cabe em ~90 linhas. Depois de escrevê-lo, as decisões de
 * React, Vue, Solid e Svelte deixam de ser preferência e viram trade-offs
 * comparáveis — que é o ponto do módulo.
 */

// O truque central: uma pilha global de "quem está executando agora".
// Ao LER um sinal, o observador no topo se registra como dependente.
// Ninguém declara dependência — ela é observada em tempo de execução.
const stack = [];

let batchDepth = 0;
const pending = new Set();

function enqueue(observers) {
  for (const observer of observers) pending.add(observer);
}

function flush() {
  // O laço externo existe porque um computado, ao ser invalidado, enfileira os
  // observadores DELE: a propagação é em cascata e precisa drenar até o fim.
  //
  // Agrupar antes de propagar é o que evita o GLITCH: sem isto, um computado
  // que depende de dois sinais pode ser recalculado no meio da atualização e
  // enxergar um valor novo junto com um velho.
  while (pending.size) {
    const queue = [...pending];
    pending.clear();
    for (const observer of queue) observer.run();
  }
}

export function batch(fn) {
  batchDepth++;
  try {
    return fn();
  } finally {
    batchDepth--;
    if (batchDepth === 0) flush();
  }
}

function notify(observers) {
  enqueue(observers);
  if (batchDepth === 0) flush();
}

export function signal(initial) {
  let value = initial;
  const observers = new Set();

  const read = () => {
    const current = stack[stack.length - 1];
    if (current) {
      observers.add(current);
      current.deps.add(observers);   // guarda para poder se desinscrever
    }
    return value;
  };

  read.set = (next) => {
    const resolved = typeof next === 'function' ? next(value) : next;
    if (Object.is(resolved, value)) return;  // não propaga o que não mudou
    value = resolved;
    notify([...observers]);
  };

  read.peek = () => value;  // lê SEM criar dependência
  return read;
}

function createObserver(fn, { lazy = false } = {}) {
  const observer = {
    deps: new Set(),
    dirty: true,
    run() {
      // Desinscrever antes de reexecutar: dependência condicional muda a cada
      // execução, e sem isto o grafo acumula arestas mortas.
      for (const set of observer.deps) set.delete(observer);
      observer.deps.clear();

      stack.push(observer);
      try {
        observer.value = fn();
        observer.dirty = false;
      } finally {
        stack.pop();
      }
      return observer.value;
    },
    dispose() {
      for (const set of observer.deps) set.delete(observer);
      observer.deps.clear();
    }
  };
  if (!lazy) observer.run();
  return observer;
}

export function computed(fn) {
  // Um computado é as duas coisas ao mesmo tempo: OBSERVADOR das suas fontes e
  // OBSERVÁVEL para quem o lê. Modelar isso explicitamente — um `node` que
  // assina as fontes e um `observers` próprio — é o que faz a invalidação
  // funcionar. Tentar reaproveitar o observador do efeito aqui não fecha.
  const observers = new Set();
  let value;
  let dirty = true;

  const node = {
    deps: new Set(),
    run() {
      // Invalidação é preguiçosa: não recalcula agora, só marca e avisa quem
      // depende. O recálculo acontece na próxima leitura.
      dirty = true;
      enqueue(observers);
    }
  };

  const read = () => {
    if (dirty) {
      for (const set of node.deps) set.delete(node);
      node.deps.clear();
      stack.push(node);
      try {
        value = fn();
        dirty = false;
      } finally {
        stack.pop();
      }
    }
    const current = stack[stack.length - 1];
    if (current) {
      observers.add(current);
      current.deps.add(observers);
    }
    return value;
  };
  return read;
}

export function effect(fn) {
  const observer = createObserver(fn);
  return () => observer.dispose();   // SEMPRE devolva o descarte: sem ele, vaza.
}

// ---------------------------------------------------------------------------
// Demonstração
// ---------------------------------------------------------------------------
function main() {
  const assert = (cond, msg) => {
    if (!cond) throw new Error('FALHOU: ' + msg);
    console.log('  ok  ' + msg);
  };

  console.log('-- rastreamento automático de dependências --');
  const preco = signal(100);
  const quantidade = signal(2);
  const total = computed(() => preco() * quantidade());

  let visto = null;
  const parar = effect(() => { visto = total(); });

  assert(visto === 200, 'efeito executou na criação e viu 200');
  preco.set(150);
  assert(visto === 300, 'mudar o preço propagou até o efeito (300)');

  console.log('\n-- não propaga o que não mudou --');
  let execucoes = 0;
  const contador = signal(1);
  effect(() => { contador(); execucoes++; });
  const antes = execucoes;
  contador.set(1);            // mesmo valor
  assert(execucoes === antes, 'set com valor igual não reexecutou o efeito');

  console.log('\n-- agrupamento evita o glitch --');
  const a = signal(1);
  const b = signal(1);
  const soma = computed(() => a() + b());
  const vistos = [];
  effect(() => { vistos.push(soma()); });
  vistos.length = 0;
  batch(() => { a.set(10); b.set(20); });
  assert(vistos.length === 1, `duas mudanças em lote = 1 reexecução (foi ${vistos.length})`);
  assert(vistos[0] === 30, 'o efeito viu o estado final consistente (30)');

  console.log('\n-- descarte impede vazamento --');
  const fonte = signal(0);
  let contagem = 0;
  const dispose = effect(() => { fonte(); contagem++; });
  fonte.set(1);
  const depoisDeUm = contagem;
  dispose();
  fonte.set(2);
  assert(contagem === depoisDeUm, 'após o descarte, o efeito não roda mais');

  parar();
  console.log('\n-- dependência condicional --');
  const usar = signal(true);
  const x = signal('X');
  const y = signal('Y');
  const saida = [];
  effect(() => { saida.push(usar() ? x() : y()); });
  saida.length = 0;
  y.set('Y2');                // y não é dependência enquanto usar() é true
  assert(saida.length === 0, 'mudar ramo não observado não reexecuta');
  usar.set(false);
  y.set('Y3');
  assert(saida.at(-1) === 'Y3', 'após trocar o ramo, y passa a ser dependência');

  console.log('\nsignals: OK — reatividade granular em ~90 linhas.');
  console.log('Agora compare: o seu framework atualiza o nó exato, ou reconcilia a árvore?');
}

// Executa só quando chamado direto, para poder ser importado nos exercícios.
if (typeof process !== 'undefined' && process.argv?.[1]?.endsWith('signals.mjs')) {
  main();
}
