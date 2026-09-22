/*
 * Módulo 0 (Git) — Da Faixa 0 ao modelo do Git, sem decorar comandos.
 *
 * Rode com:  node git-zero.mjs        (Node 18+; usa o módulo node:crypto)
 *
 * Git não é uma lista de comandos mágicos: é um GRAFO de objetos endereçados
 * por hash. Aqui reproduzimos, com poucas linhas, as ideias que explicam TODO
 * comando: conteúdo endereçável (o mesmo conteúdo dá sempre o mesmo id),
 * commit apontando para o pai (um DAG imutável) e branch como um simples ponteiro.
 *
 * Liga os fundamentos da Faixa 0 à trilha de Git:
 *   1. o id de um objeto é o hash do próprio conteúdo (content-addressable);
 *   2. o mesmo formato de blob do Git reproduz o id de `git hash-object`;
 *   3. um commit aponta para o pai — a cadeia forma um DAG imutável;
 *   4. um branch é só um ponteiro (ref) para um commit — mover não reescreve nada;
 *   5. adulterar um objeto muda seu hash e QUEBRA a cadeia — integridade detectável.
 */

import { createHash } from 'node:crypto';

// Hash de um blob EXATAMENTE como o Git: sha1("blob <tamanho>\0<conteúdo>").
function hashBlob(conteudo) {
  const corpo = Buffer.from(conteudo, 'utf8');
  const cabecalho = Buffer.from(`blob ${corpo.length}\0`, 'utf8');
  return createHash('sha1').update(Buffer.concat([cabecalho, corpo])).digest('hex');
}

// Um "commit" é um objeto {tree, parent, message}; seu id é o hash do conteúdo.
function hashCommit(commit) {
  const texto = `tree ${commit.tree}\nparent ${commit.parent ?? ''}\n\n${commit.message}`;
  return createHash('sha1').update(texto).digest('hex');
}

function criarCommit(tree, parent, message) {
  const commit = { tree, parent, message };
  return { id: hashCommit(commit), ...commit };
}

function runChecks() {
  const checks = [];

  // 1. Content-addressable: mesmo conteúdo -> mesmo id; conteúdo diferente -> id diferente.
  checks.push(['mesmo conteúdo gera sempre o mesmo hash', hashBlob('hello') === hashBlob('hello')]);
  checks.push(['conteúdo diferente gera hash diferente', hashBlob('hello') !== hashBlob('world')]);

  // 2. É o id REAL do Git: `printf 'hello' | git hash-object --stdin`.
  const idReal = 'b6fc4c620b67d95f953a5c1c1230aaab5db5a1b0';
  checks.push(['o hash de "hello" é o mesmo que o do git hash-object', hashBlob('hello') === idReal]);

  // 3. DAG de commits: cada commit aponta para o pai.
  const c1 = criarCommit(hashBlob('v1'), null, 'primeiro commit');
  const c2 = criarCommit(hashBlob('v2'), c1.id, 'adiciona recurso');
  const c3 = criarCommit(hashBlob('v3'), c2.id, 'corrige bug');
  checks.push(['o commit aponta para o pai (c3 -> c2 -> c1)', c3.parent === c2.id && c2.parent === c1.id]);
  checks.push(['o primeiro commit não tem pai', c1.parent === null]);

  // 4. Branch é só um ponteiro (ref). Mover não altera os commits.
  let main = c3.id;                 // 'main' aponta para c3
  const featureAntes = c2.id;       // outra branch aponta para c2
  main = c1.id;                     // "mover" main para c1 (ex.: reset) — só muda o ponteiro
  checks.push(['mover o branch muda só o ponteiro, não os commits', main === c1.id && c3.id === hashCommit(c3)]);
  checks.push(['os commits continuam existindo com o mesmo id (imutáveis)', featureAntes === c2.id]);

  // 5. Integridade: adulterar o conteúdo muda o hash e QUEBRA a cadeia.
  const c1Adulterado = criarCommit(c1.tree, c1.parent, 'primeiro commit (alterado)');
  checks.push(['adulterar o commit muda seu id', c1Adulterado.id !== c1.id]);
  checks.push(['...e c2 deixa de apontar para ele: a adulteração é detectável', c2.parent !== c1Adulterado.id]);

  console.log('=== Módulo 0 (Git) — objetos, hash e o DAG ===\n');
  console.log('hash de "hello":', hashBlob('hello'), '(== git hash-object)');
  console.log('cadeia de commits:');
  for (const c of [c1, c2, c3]) console.log(`  ${c.id.slice(0, 8)}  parent=${c.parent ? c.parent.slice(0, 8) : '(nenhum)'}  "${c.message}"`);
  console.log('');

  let ok = 0;
  for (const [nome, cond] of checks) {
    console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${nome}`);
    if (cond) ok++;
  }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: o Git é um DAG de objetos endereçados por hash. Entender isso — e não decorar comandos —');
  console.log('é o que torna todo comando previsível e explica por que o histórico é íntegro.');
  return ok === checks.length;
}

const ok = runChecks();
if (typeof process !== 'undefined' && process.exit) process.exit(ok ? 0 : 1);
