/*
 * Módulo 0 (Frontend) — Da Faixa 0 ao JavaScript, com código que roda.
 *
 * Rode com:  node frontend-zero.mjs      (Node 18+; sem dependências)
 * Também roda no navegador; aqui usa Node para autoverificar.
 *
 * Liga os fundamentos universais (tipos, ponto flutuante) à forma concreta em
 * JavaScript — e mostra as pegadinhas que todo iniciante encontra no front:
 *   1. number é um double IEEE 754 (0.1 + 0.2 ≠ 0.3), como na Faixa 0;
 *   2. == faz coerção de tipo; === compara sem coerção (use ===);
 *   3. valores "falsy" (0, '', null, undefined, NaN, false) e o resto é truthy;
 *   4. NaN não é igual a nada, nem a si mesmo.
 */

function typeOf(v) {
  return typeof v; // 'number' | 'string' | 'boolean' | 'object' | 'undefined' | 'function'
}

function isFalsy(v) {
  return !v; // true para os valores falsy
}

function somaAte(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i;
  return total;
}

function runChecks() {
  const checks = [];

  // 1. number é double: mesma imprecisão da Faixa 0.
  const soma = 0.1 + 0.2;
  checks.push(['number é double: 0.1 + 0.2 ≠ 0.3', soma !== 0.3 && Math.abs(soma - 0.3) < 1e-9]);
  checks.push(['não há int separado: typeof 5 é "number"', typeOf(5) === 'number' && typeOf(5.5) === 'number']);

  // 2. == faz coerção; === não.
  checks.push(["'1' == 1 é true (coerção)", ('1' == 1) === true]);
  checks.push(["'1' === 1 é false (sem coerção)", ('1' === 1) === false]);
  checks.push(['0 == "" é true, mas 0 === "" é false', (0 == '') === true && (0 === '') === false]);
  checks.push(['null == undefined é true; null === undefined é false', (null == undefined) === true && (null === undefined) === false]);

  // 3. truthy / falsy.
  const falsies = [0, '', null, undefined, NaN, false];
  checks.push(['os seis valores falsy são falsy', falsies.every(isFalsy)]);
  checks.push(['"0" (string) e [] são truthy', !isFalsy('0') && !isFalsy([])]);

  // 4. NaN não é igual a nada.
  checks.push(['NaN !== NaN (use Number.isNaN)', (NaN === NaN) === false && Number.isNaN(NaN)]);

  // 5. const não pode ser reatribuído.
  let constProtege = false;
  try {
    // eslint-disable-next-line no-eval
    eval('const x = 1; x = 2;');
  } catch {
    constProtege = true;
  }
  checks.push(['const impede reatribuição (TypeError)', constProtege]);

  // 6. controle de fluxo.
  checks.push(['laço soma 1..5 = 15', somaAte(5) === 15]);

  console.log('=== Módulo 0 (Frontend) — JavaScript do fundamento ===');
  console.log(`number: 0.1 + 0.2 = ${soma}`);
  console.log(`coerção: '1' == 1 -> ${'1' == 1} | '1' === 1 -> ${'1' === 1}`);
  console.log(`falsy: [0, '', null, undefined, NaN, false] -> todos falsy`);
  console.log(`NaN === NaN -> ${NaN === NaN} (use Number.isNaN)`);
  console.log('');

  let ok = 0;
  for (const [name, cond] of checks) {
    console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${name}`);
    if (cond) ok++;
  }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: em JS todo número é double (float da Faixa 0); use === para evitar coerção,');
  console.log('conheça os valores falsy e trate NaN com Number.isNaN.');
  return ok === checks.length;
}

const ok = runChecks();
if (typeof process !== 'undefined' && process.exit) process.exit(ok ? 0 : 1);
