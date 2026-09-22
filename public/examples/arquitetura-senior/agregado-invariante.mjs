/*
 * Módulo 7 (Arquitetura) — DDD tático: o agregado como limite de consistência.
 * Rode com:  node agregado-invariante.mjs
 *
 * Um agregado protege uma invariante: só se muda seu estado por dentro, de forma
 * que a regra nunca seja violada. Aqui um Pedido garante "total = soma dos itens" e
 * "não confirmar pedido vazio" — a consistência é do agregado, não do chamador.
 */

class Pedido {
  #itens = [];
  #confirmado = false;
  adicionar(nome, precoCents, qtd) {
    if (this.#confirmado) throw new Error('pedido já confirmado');
    if (qtd <= 0 || precoCents < 0) throw new RangeError('item inválido');
    this.#itens.push({ nome, precoCents, qtd });
  }
  get totalCents() { return this.#itens.reduce((s, i) => s + i.precoCents * i.qtd, 0); }
  confirmar() {
    if (this.#itens.length === 0) throw new Error('não confirmar pedido vazio'); // invariante
    this.#confirmado = true;
    return { total: this.totalCents, itens: this.#itens.length };
  }
  get confirmado() { return this.#confirmado; }
}

function run() {
  const checks = [];

  const p = new Pedido();
  p.adicionar('café', 1500, 2);
  p.adicionar('bolo', 800, 1);
  checks.push(['a invariante total = soma dos itens é mantida pelo agregado', p.totalCents === 1500 * 2 + 800]);

  const rec = p.confirmar();
  checks.push(['pedido com itens confirma e expõe o total', rec.total === 3800 && p.confirmado]);

  // Invariante: não confirmar pedido vazio.
  let vazioBloqueado = false;
  try { new Pedido().confirmar(); } catch { vazioBloqueado = true; }
  checks.push(['a invariante "não confirmar vazio" é garantida pelo agregado', vazioBloqueado]);

  // Não dá para alterar um agregado confirmado (limite de consistência fechado).
  let posConfirmacaoBloqueada = false;
  try { p.adicionar('extra', 100, 1); } catch { posConfirmacaoBloqueada = true; }
  checks.push(['não se altera um agregado já confirmado', posConfirmacaoBloqueada]);

  // O estado interno é privado: só muda pela interface do agregado.
  checks.push(['o estado é encapsulado (itens privados, sem acesso externo direto)', p.itens === undefined]);

  console.log('=== Módulo 7 — o agregado como limite de consistência ===\n');
  console.log('pedido confirmado:', rec, '\n');
  let ok = 0;
  for (const [n, cond] of checks) { console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${n}`); if (cond) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: o agregado é a fronteira que garante a invariante — a consistência mora nele, não espalhada pelo chamador.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
