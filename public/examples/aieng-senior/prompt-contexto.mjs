/*
 * Módulo 2 (AIeng) — Prompting de engenharia e context engineering.
 * Rode com:  node prompt-contexto.mjs
 *
 * A qualidade da resposta segue a qualidade do CONTEXTO: objetivo, restrições, um
 * exemplo do formato e o material relevante (código, erro). Mas a janela de contexto
 * é finita — encher com irrelevante expulsa o que importa. Modelamos as duas coisas.
 */
function qualidadePrompt(p) {
  let score = 0;
  if (p.objetivo) score += 3;
  if (p.contexto) score += 3;         // código/erro/versões relevantes
  if (p.restricoes) score += 2;
  if (p.exemploFormato) score += 2;
  return score; // 0..10
}
// Orçamento de janela: prioriza o relevante; o que não cabe é cortado.
function montarContexto(itens, janela) {
  const ordenados = [...itens].sort((a, b) => b.relevancia - a.relevancia);
  const incluidos = []; let usado = 0;
  for (const it of ordenados) { if (usado + it.tokens <= janela) { incluidos.push(it); usado += it.tokens; } }
  return { incluidos: incluidos.map((i) => i.nome), usado };
}

function run() {
  const checks = [];

  const vago = qualidadePrompt({ objetivo: false, contexto: false });
  const bom = qualidadePrompt({ objetivo: true, contexto: true, restricoes: true, exemploFormato: true });
  checks.push(['prompt vago tem score baixo', vago <= 3]);
  checks.push(['prompt com objetivo+contexto+restrições+exemplo é máximo (10)', bom === 10]);
  checks.push(['mais componentes -> maior qualidade (monótono)', qualidadePrompt({ objetivo: true, contexto: true }) > vago]);

  // Janela de contexto: com orçamento apertado, o relevante entra e o ruído fica de fora.
  const itens = [
    { nome: 'funcao-alvo', tokens: 400, relevancia: 10 },
    { nome: 'teste-que-falha', tokens: 300, relevancia: 9 },
    { nome: 'log-do-erro', tokens: 200, relevancia: 8 },
    { nome: 'README-inteiro', tokens: 900, relevancia: 2 },
  ];
  const ctx = montarContexto(itens, 1000);
  checks.push(['a janela prioriza o relevante (função, teste, log)', ctx.incluidos.includes('funcao-alvo') && ctx.incluidos.includes('teste-que-falha')]);
  checks.push(['o irrelevante grande (README inteiro) fica de fora', !ctx.incluidos.includes('README-inteiro')]);
  checks.push(['respeita o orçamento da janela', ctx.usado <= 1000]);

  console.log('=== Módulo 2 — prompt e context engineering ===\n');
  console.log('score vago:', vago, '| score bom:', bom);
  console.log('contexto montado (janela 1000):', ctx, '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: dê objetivo, contexto, restrições e um exemplo do formato; e gerencie a janela — encher de irrelevante expulsa o que a IA precisa ver.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
