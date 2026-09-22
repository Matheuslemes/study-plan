/*
 * Módulo 6 (Arquitetura) — DDD estratégico: bounded contexts e context mapping.
 * Rode com:  node context-mapping.mjs
 *
 * Um termo pode significar coisas diferentes em contextos diferentes ("Cliente" em
 * Vendas ≠ em Cobrança). Bounded contexts delimitam o modelo; o context map descreve
 * a relação entre eles. Aqui detectamos termos ambíguos e classificamos a integração.
 */

// Cada contexto tem seu próprio modelo de termos.
const contextos = {
  Vendas:   { Cliente: 'lead com histórico de compras', Pedido: 'carrinho confirmado' },
  Cobranca: { Cliente: 'CNPJ/CPF com limite de crédito', Fatura: 'pedido faturável' },
  Estoque:  { Produto: 'SKU com saldo' },
};

// Termos que aparecem em mais de um contexto com significado próprio = ambíguos (precisam de tradução).
function termosAmbiguos(ctx) {
  const contagem = {};
  for (const c of Object.values(ctx)) for (const t of Object.keys(c)) contagem[t] = (contagem[t] || 0) + 1;
  return Object.keys(contagem).filter((t) => contagem[t] > 1);
}

// Relação no context map: 'anticorruption-layer' protege o downstream de um modelo alheio.
function relacaoMap(upstream, downstream) {
  return { upstream, downstream, padrao: 'anticorruption-layer', traduz: true };
}

function run() {
  const checks = [];

  const ambiguos = termosAmbiguos(contextos);
  checks.push(['"Cliente" é ambíguo entre Vendas e Cobrança', ambiguos.includes('Cliente')]);
  checks.push(['cada contexto tem seu próprio modelo (Vendas e Cobrança definem Cliente diferente)',
    contextos.Vendas.Cliente !== contextos.Cobranca.Cliente]);
  checks.push(['termos não compartilhados não são ambíguos (Fatura só em Cobrança)', !ambiguos.includes('Fatura')]);

  const rel = relacaoMap('Vendas', 'Cobranca');
  checks.push(['o context map define uma relação com tradução (anticorruption layer)', rel.traduz && rel.padrao === 'anticorruption-layer']);
  checks.push(['há 3 bounded contexts', Object.keys(contextos).length === 3]);

  console.log('=== Módulo 6 — bounded contexts e context mapping ===\n');
  console.log('termos ambíguos (precisam de tradução):', ambiguos.join(', '));
  console.log('relação no map:', `${rel.upstream} -> ${rel.downstream} via ${rel.padrao}`, '\n');
  let ok = 0;
  for (const [n, cond] of checks) { console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${n}`); if (cond) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: o mesmo termo muda de sentido por contexto; bounded contexts delimitam o modelo e o context map traduz entre eles.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
