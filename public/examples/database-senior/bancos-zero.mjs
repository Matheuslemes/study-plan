/*
 * Módulo 0 (Bancos) — Da Faixa 0 ao SQL, com um banco de verdade.
 *
 * Rode com:  node bancos-zero.mjs        (Node 22+; usa node:sqlite embutido)
 * Sem servidor: SQLite em memória — perfeito para a faixa 0. Os mesmos comandos
 * (CREATE/INSERT/SELECT/JOIN, PK/UNIQUE, transação) valem em PostgreSQL.
 *
 * Liga os fundamentos da Faixa 0 ao banco de dados:
 *   1. um banco é tabelas (linhas × colunas) — não um arquivo solto;
 *   2. SELECT/WHERE consulta; INSERT/UPDATE/DELETE alteram (CRUD);
 *   3. JOIN combina tabelas por chave;
 *   4. PK/UNIQUE garante integridade que a aplicação sozinha não garante;
 *   5. transação é tudo-ou-nada (atomicidade) — e dinheiro fica em inteiro (centavos).
 */

import { DatabaseSync } from 'node:sqlite';

function setup() {
  const db = new DatabaseSync(':memory:');
  db.exec(`
    CREATE TABLE clientes (
      id     INTEGER PRIMARY KEY,
      nome   TEXT NOT NULL,
      cidade TEXT NOT NULL
    );
    CREATE TABLE pedidos (
      id          INTEGER PRIMARY KEY,
      cliente_id  INTEGER NOT NULL REFERENCES clientes(id),
      valor_cents INTEGER NOT NULL          -- dinheiro em centavos (inteiro), nunca float
    );
  `);
  const insCliente = db.prepare('INSERT INTO clientes (id, nome, cidade) VALUES (?, ?, ?)');
  insCliente.run(1, 'Ana', 'Recife');
  insCliente.run(2, 'Bruno', 'Recife');
  insCliente.run(3, 'Carla', 'Natal');
  const insPedido = db.prepare('INSERT INTO pedidos (id, cliente_id, valor_cents) VALUES (?, ?, ?)');
  insPedido.run(1, 1, 1500);
  insPedido.run(2, 1, 500);
  insPedido.run(3, 2, 3000);
  return db;
}

function runChecks() {
  const db = setup();
  const checks = [];

  // 1. tabela = linhas × colunas; contar linhas.
  const totalClientes = db.prepare('SELECT COUNT(*) AS n FROM clientes').get().n;
  checks.push(['a tabela clientes tem 3 linhas', totalClientes === 3]);

  // 2. WHERE filtra.
  const doRecife = db.prepare('SELECT nome FROM clientes WHERE cidade = ? ORDER BY nome').all('Recife');
  checks.push(['WHERE cidade = "Recife" traz Ana e Bruno', doRecife.map((r) => r.nome).join(',') === 'Ana,Bruno']);

  // 3. JOIN combina tabelas por chave.
  const join = db.prepare(`
    SELECT c.nome, COUNT(p.id) AS pedidos, SUM(p.valor_cents) AS total_cents
    FROM clientes c LEFT JOIN pedidos p ON p.cliente_id = c.id
    GROUP BY c.id ORDER BY c.nome
  `).all();
  const ana = join.find((r) => r.nome === 'Ana');
  checks.push(['JOIN + GROUP BY: Ana tem 2 pedidos somando 2000 centavos', ana.pedidos === 2 && ana.total_cents === 2000]);
  const carla = join.find((r) => r.nome === 'Carla');
  checks.push(['LEFT JOIN mantém Carla (0 pedidos)', carla.pedidos === 0]);

  // 4. UPDATE e DELETE (o resto do CRUD).
  db.prepare('UPDATE pedidos SET valor_cents = ? WHERE id = ?').run(2000, 2);
  const anaTotal = db.prepare('SELECT SUM(valor_cents) AS t FROM pedidos WHERE cliente_id = 1').get().t;
  checks.push(['UPDATE muda o valor: total da Ana vira 3500', anaTotal === 3500]);
  db.prepare('DELETE FROM pedidos WHERE id = ?').run(2);
  const restam = db.prepare('SELECT COUNT(*) AS n FROM pedidos').get().n;
  checks.push(['DELETE remove 1 pedido (restam 2)', restam === 2]);

  // 5. integridade: PRIMARY KEY impede id duplicado (a aplicação sozinha não garante).
  let pkBloqueou = false;
  try {
    db.prepare('INSERT INTO clientes (id, nome, cidade) VALUES (1, "Duplicada", "X")').run();
  } catch {
    pkBloqueou = true;
  }
  checks.push(['PRIMARY KEY rejeita id duplicado (constraint)', pkBloqueou]);

  // 6. transação é tudo-ou-nada: um erro no meio desfaz tudo (ROLLBACK).
  const antes = db.prepare('SELECT COUNT(*) AS n FROM clientes').get().n;
  let reverteu = false;
  try {
    db.exec('BEGIN');
    db.prepare('INSERT INTO clientes (id, nome, cidade) VALUES (4, "Diego", "João Pessoa")').run();
    db.prepare('INSERT INTO clientes (id, nome, cidade) VALUES (1, "Colide", "X")').run(); // viola PK
    db.exec('COMMIT');
  } catch {
    db.exec('ROLLBACK');
    reverteu = true;
  }
  const depois = db.prepare('SELECT COUNT(*) AS n FROM clientes').get().n;
  checks.push(['transação atômica: erro no meio faz ROLLBACK (nada é inserido)', reverteu && depois === antes]);

  console.log('=== Módulo 0 (Bancos) — do fundamento ao SQL ===');
  console.log('clientes:', db.prepare('SELECT id, nome, cidade FROM clientes ORDER BY id').all());
  console.log('por cliente (JOIN):', join.map((r) => `${r.nome}:${r.pedidos}p/${r.total_cents}c`).join('  '));
  console.log('');

  let ok = 0;
  for (const [name, cond] of checks) {
    console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${name}`);
    if (cond) ok++;
  }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: um banco é tabelas com integridade garantida (PK/UNIQUE/FK) e transações atômicas —');
  console.log('o que um arquivo ou planilha não dão. E dinheiro fica em inteiro (centavos), nunca em float.');
  db.close();
  return ok === checks.length;
}

const ok = runChecks();
if (typeof process !== 'undefined' && process.exit) process.exit(ok ? 0 : 1);
