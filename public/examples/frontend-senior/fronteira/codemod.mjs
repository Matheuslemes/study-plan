/**
 * Academia Frontend · módulo 24 — por que AST e não busca e substituição.
 *
 * Sem dependências: usa o próprio parser de expressões do Node para construir
 * uma árvore mínima. Um codemod de verdade usa jscodeshift, ts-morph ou Babel —
 * o ponto aqui é o MECANISMO, não a ferramenta.
 *
 *     node codemod.mjs
 *
 * A tese: texto não distingue um identificador de uma string que por acaso tem
 * o mesmo conteúdo, nem sabe o que é escopo. A árvore sabe. Este arquivo prova
 * isso com contraexemplos que a busca e substituição erra.
 */

// ---------------------------------------------------------------------------
// O caso: renomear a função `track` para `trackEvent`.
// ---------------------------------------------------------------------------
const SOURCE = `
import { track } from './analytics';

const LABEL = 'track';                 // string: NÃO deve ser renomeada
const doc = "chame track() ao clicar"; // texto livre: NÃO deve ser renomeada

function track_legacy() {}             // prefixo: NÃO deve ser renomeada

export function onClick() {
  track('click');                      // <- deve virar trackEvent
  const obj = { track: 1 };            // propriedade: depende da política
  obj.track = 2;                       // acesso a propriedade: idem
}

export function outroEscopo() {
  const track = () => 'local';         // SOMBRA: variável local, não a importada
  return track();                      // <- NÃO deve ser renomeada
}
`;

// ---------------------------------------------------------------------------
// 1. A abordagem ingênua
// ---------------------------------------------------------------------------
function buscaESubstituicao(source) {
  return source.replaceAll('track', 'trackEvent');
}

// Um pouco menos ingênua: fronteira de palavra.
function regexComFronteira(source) {
  return source.replace(/\btrack\b/g, 'trackEvent');
}

// ---------------------------------------------------------------------------
// 2. Tokenizador mínimo — o primeiro estágio de qualquer compilador.
//    Ele já resolve o problema das strings e dos comentários, porque passa a
//    SABER o que é cada pedaço do texto em vez de ver uma sequência de chars.
// ---------------------------------------------------------------------------
function tokenize(source) {
  const tokens = [];
  let i = 0;

  while (i < source.length) {
    const char = source[i];

    // Espaço em branco é descartado. Emiti-lo como token foi o primeiro erro ao
    // escrever este arquivo: a busca pelo `const` anterior encontrava o espaço,
    // e a detecção de escopo nunca disparava. Tokenizador que não separa ruído
    // de conteúdo não ajuda em nada.
    if (/\s/.test(char)) {
      i++;
      continue;
    }

    // comentário de linha
    if (char === '/' && source[i + 1] === '/') {
      const end = source.indexOf('\n', i);
      const stop = end === -1 ? source.length : end;
      tokens.push({ type: 'comment', value: source.slice(i, stop), start: i });
      i = stop;
      continue;
    }

    // string
    if (char === '"' || char === "'" || char === '`') {
      let j = i + 1;
      while (j < source.length && source[j] !== char) {
        if (source[j] === '\\') j++;
        j++;
      }
      tokens.push({ type: 'string', value: source.slice(i, j + 1), start: i });
      i = j + 1;
      continue;
    }

    // identificador
    if (/[A-Za-z_$]/.test(char)) {
      let j = i;
      while (j < source.length && /[A-Za-z0-9_$]/.test(source[j])) j++;
      tokens.push({ type: 'identifier', value: source.slice(i, j), start: i });
      i = j;
      continue;
    }

    tokens.push({ type: 'punct', value: char, start: i });
    i++;
  }
  return tokens;
}

/**
 * Renomeia apenas IDENTIFICADORES, respeitando:
 *   - strings e comentários (o tokenizador já os separou)
 *   - acesso a propriedade (`obj.track`), que é outro símbolo
 *   - sombra de escopo: um `const track` local redeclara o nome
 *
 * A análise de escopo aqui é deliberadamente simplificada — um codemod real
 * usa a tabela de símbolos do parser. O objetivo é mostrar que ESCOPO é a
 * informação que o texto não tem.
 */
function renomearIdentificador(source, de, para) {
  const tokens = tokenize(source);
  const shadowed = new Set();

  // Passagem 1: achar declarações locais que sombreiam o nome.
  // Agora que o tokenizador descarta espaço, o token anterior a `track` em
  // `const track = ...` é literalmente `const`.
  tokens.forEach((token, index) => {
    const anterior = tokens[index - 1];
    if (
      token.type === 'identifier' && token.value === de &&
      anterior && anterior.type === 'identifier' &&
      ['const', 'let', 'var', 'function'].includes(anterior.value)
    ) {
      shadowed.add(token.start);
    }
  });

  // Se houve sombra, tudo dentro daquele bloco fica de fora. Simplificação:
  // marcamos o bloco pelo intervalo entre a declaração e o fechamento seguinte.
  const blocosSombreados = [];
  for (const start of shadowed) {
    const fim = source.indexOf('\n}', start);
    blocosSombreados.push([start, fim === -1 ? source.length : fim]);
  }
  const estaSombreado = (pos) =>
    blocosSombreados.some(([a, b]) => pos >= a && pos <= b);

  // Passagem 2: reescrever, de trás para frente para não invalidar offsets.
  let resultado = source;
  const alvos = tokens
    .map((token, index) => ({ token, anterior: tokens[index - 1] }))
    .filter(({ token, anterior }) =>
      token.type === 'identifier' &&
      token.value === de &&
      !(anterior && anterior.type === 'punct' && anterior.value === '.') && // obj.track
      !estaSombreado(token.start)
    )
    .reverse();

  for (const { token } of alvos) {
    resultado =
      resultado.slice(0, token.start) + para +
      resultado.slice(token.start + de.length);
  }
  return resultado;
}

// ---------------------------------------------------------------------------
// Demonstração
// ---------------------------------------------------------------------------
function contar(texto, agulha) {
  return texto.split(agulha).length - 1;
}

function main() {
  const ingenuo = buscaESubstituicao(SOURCE);
  const regex = regexComFronteira(SOURCE);
  const ast = renomearIdentificador(SOURCE, 'track', 'trackEvent');

  const casos = [
    ['renomeou dentro de string literal', "'trackEvent'", false],
    ['renomeou dentro de comentário', 'chame trackEvent()', false],
    ['quebrou identificador com prefixo', 'trackEvent_legacy', false],
    ['renomeou a chamada real', 'trackEvent(\'click\')', true],
    ['renomeou o import', 'import { trackEvent }', true]
  ];

  const linha = (nome, texto) => {
    console.log(`\n-- ${nome} --`);
    for (const [descricao, agulha, esperado] of casos) {
      const achou = texto.includes(agulha);
      const ok = achou === esperado;
      console.log(`  ${ok ? 'ok  ' : 'ERRO'} ${descricao}: ${achou ? 'sim' : 'não'}`);
    }
    console.log(`  ocorrências restantes de 'track' isolado: ${contar(texto, ' track(')}`);
  };

  linha('busca e substituição', ingenuo);
  linha('regex com fronteira de palavra', regex);
  linha('tokenizador com escopo', ast);

  console.log('\n-- a sombra de escopo --');
  const trechoSombra = ast.split('export function outroEscopo')[1] ?? '';
  const preservou = trechoSombra.includes('const track =') &&
                    trechoSombra.includes('return track()');
  console.log(`  ${preservou ? 'ok  ' : 'ERRO'} variável local 'track' preservada: ${preservou}`);
  console.log('  Nenhuma regex resolve isto: escopo não está no texto, está na árvore.');

  console.log('\n-- lição do módulo 24 --');
  console.log('  Busca e substituição opera sobre CARACTERES.');
  console.log('  Tokenizador sabe o que é string, comentário e identificador.');
  console.log('  Parser + tabela de símbolos sabe ESCOPO, tipo e binding.');
  console.log('  Cada estágio a mais é uma classe inteira de erro que desaparece.');
  console.log('\n  Em produção use jscodeshift, ts-morph ou Babel — eles têm as três.');
}

if (typeof process !== 'undefined' && process.argv?.[1]?.endsWith('codemod.mjs')) {
  main();
}

export { tokenize, renomearIdentificador, buscaESubstituicao, regexComFronteira, SOURCE };
