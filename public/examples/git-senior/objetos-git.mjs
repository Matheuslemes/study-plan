/*
 * Módulo 1 (Git) — O modelo de dados: blob, tree, commit e o DAG.
 * Rode com:  node objetos-git.mjs
 *
 * Todo comando do Git manipula quatro objetos endereçados por hash: blob (conteúdo),
 * tree (diretório: nomes -> blobs/trees), commit (aponta para uma tree e para pais) e
 * tag. Aqui montamos os objetos e mostramos que o commit referencia a árvore e o pai.
 */
import { createHash } from 'node:crypto';
const oid = (tipo, corpo) => createHash('sha1').update(`${tipo} ${corpo}`).digest('hex');

const blob = (conteudo) => ({ tipo: 'blob', oid: oid('blob', conteudo), conteudo });
const tree = (entradas) => { const corpo = entradas.map((e) => `${e.nome}:${e.oid}`).sort().join('\n'); return { tipo: 'tree', oid: oid('tree', corpo), entradas }; };
const commit = (treeOid, parent, msg) => ({ tipo: 'commit', oid: oid('commit', `${treeOid}|${parent}|${msg}`), tree: treeOid, parent, msg });

function run() {
  const checks = [];
  const b1 = blob('print("oi")'), b2 = blob('# README');
  const t = tree([{ nome: 'app.py', oid: b1.oid }, { nome: 'README.md', oid: b2.oid }]);
  const c1 = commit(t.oid, null, 'primeiro');
  const t2 = tree([{ nome: 'app.py', oid: blob('print("oi v2")').oid }, { nome: 'README.md', oid: b2.oid }]);
  const c2 = commit(t2.oid, c1.oid, 'edita app');

  checks.push(['blob é endereçado pelo conteúdo (mesmo conteúdo, mesmo oid)', blob('print("oi")').oid === b1.oid]);
  checks.push(['a tree lista nomes -> oids de blobs/trees', t.entradas.length === 2]);
  checks.push(['o commit aponta para uma tree', c1.tree === t.oid]);
  checks.push(['o commit aponta para o pai (DAG)', c2.parent === c1.oid && c1.parent === null]);
  checks.push(['mudar um blob muda a tree e o commit (efeito em cascata pelo hash)', t2.oid !== t.oid && c2.tree !== c1.tree]);
  checks.push(['blobs iguais são compartilhados entre trees (README não mudou)', t2.entradas.find((e) => e.nome === 'README.md').oid === b2.oid]);

  console.log('=== Módulo 1 — objetos do Git (blob/tree/commit) ===\n');
  console.log('commit1', c1.oid.slice(0, 8), '-> tree', t.oid.slice(0, 8));
  console.log('commit2', c2.oid.slice(0, 8), '-> tree', t2.oid.slice(0, 8), 'parent', c1.oid.slice(0, 8), '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: Git é um sistema de arquivos endereçado por conteúdo — blob/tree/commit formam um Merkle DAG; mudar um byte muda todos os hashes acima.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
