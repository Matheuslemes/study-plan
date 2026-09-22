/*
 * Módulo 0 (Eng. Assistida por IA) — Da base à disciplina: verificar, não confiar.
 *
 * Rode com:  node aieng-zero.mjs        (Node 18+; só a biblioteca padrão)
 *
 * A IA gera texto plausível — não código garantidamente correto. A disciplina
 * central da engenharia assistida por IA é: trate a saída como um RASCUNHO e
 * verifique-a com um oráculo objetivo (spec/testes), nunca "no olho". Aqui,
 * sem chamar nenhum modelo, reproduzimos as duas verificações mais concretas:
 *   1. "parece certo" ≠ correto — a spec/teste barra uma implementação sutilmente errada;
 *   2. dependências alucinadas (slopsquatting) — checar os imports sugeridos contra o real.
 */

// ── 1. Verificar com spec/teste, não por aparência ──
// Duas implementações "geradas por IA" para: desconto com limite de 0 a 90%.
function descontoCorreto(preco, pct) {
  if (pct < 0 || pct > 90) throw new RangeError('pct deve estar entre 0 e 90');
  return Math.round(preco * (1 - pct / 100));
}
// "Parece certo": mesma fórmula, mas NÃO valida o limite — aceita 150% de desconto.
function descontoPlausivelMasErrado(preco, pct) {
  return Math.round(preco * (1 - pct / 100));
}

// A spec como oráculo: casos felizes + a invariante (rejeitar pct fora de 0..90).
const CASOS = [[100, 10, 90], [100, 0, 100], [200, 50, 100]];
function passaNaSpec(fn) {
  const casosOk = CASOS.every(([p, d, esperado]) => {
    try { return fn(p, d) === esperado; } catch { return false; }
  });
  let rejeitaInvalido = false;
  try { fn(100, 150); } catch { rejeitaInvalido = true; } // deve lançar erro
  return casosOk && rejeitaInvalido;
}

// ── 2. Dependências alucinadas (slopsquatting) ──
// A IA "sugeriu" imports; verificamos contra um registro de pacotes reais.
const PACOTES_REAIS = new Set(['react', 'express', 'lodash', 'zod', 'vitest']);
function verificarDependencias(sugeridos) {
  return sugeridos.map((p) => ({ pacote: p, existe: PACOTES_REAIS.has(p) }));
}

function runChecks() {
  const checks = [];

  const smoke = (fn) => fn(100, 10) === 90;   // o "olhar rápido" que ambas passam
  checks.push(['as duas versões passam no olhar rápido (smoke fn(100,10)=90)',
    smoke(descontoCorreto) && smoke(descontoPlausivelMasErrado)]);
  checks.push(['a implementação correta passa na spec completa', passaNaSpec(descontoCorreto) === true]);
  checks.push(['a "plausível" FALHA na spec: parece certo, não é (não rejeita pct=150)',
    passaNaSpec(descontoPlausivelMasErrado) === false]);

  const sugeridos = ['react', 'expresss', 'lodahs', 'zod'];  // expresss/lodahs = alucinados
  const resultado = verificarDependencias(sugeridos);
  const alucinadas = resultado.filter((r) => !r.existe).map((r) => r.pacote);
  checks.push(['pacotes reais sugeridos são confirmados (react, zod)',
    resultado.find((r) => r.pacote === 'react').existe && resultado.find((r) => r.pacote === 'zod').existe]);
  checks.push(['dependências alucinadas são flagradas (expresss, lodahs)',
    alucinadas.length === 2 && alucinadas.includes('expresss') && alucinadas.includes('lodahs')]);
  checks.push(['confiar "no olho" aceitaria a versão errada; o oráculo (spec) a barra',
    smoke(descontoPlausivelMasErrado) && !passaNaSpec(descontoPlausivelMasErrado)]);

  console.log('=== Módulo 0 (Eng. Assistida por IA) — verificar, não confiar ===\n');
  console.log('desconto — smoke fn(100,10):  correto=' + descontoCorreto(100, 10) + '  plausível=' + descontoPlausivelMasErrado(100, 10));
  console.log('desconto — passa na spec?     correto=' + passaNaSpec(descontoCorreto) + '  plausível=' + passaNaSpec(descontoPlausivelMasErrado));
  console.log('deps sugeridas pela IA:', sugeridos.join(', '));
  console.log('  alucinadas detectadas:', alucinadas.join(', '), '\n');

  let ok = 0;
  for (const [nome, cond] of checks) {
    console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${nome}`);
    if (cond) ok++;
  }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: a IA amplifica, não substitui. Trate a saída como rascunho e verifique com um oráculo');
  console.log('objetivo (spec/testes) e contra o mundo real (deps existem?) — "parece certo" nunca é evidência.');
  return ok === checks.length;
}

const ok = runChecks();
if (typeof process !== 'undefined' && process.exit) process.exit(ok ? 0 : 1);
