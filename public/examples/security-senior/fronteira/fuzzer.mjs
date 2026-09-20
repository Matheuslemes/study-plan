/*
 * Fuzzer guiado por cobertura — artefato do módulo 23.
 *
 * Rode com:  node fuzzer.mjs
 *
 * O que este arquivo demonstra, com medição e não com afirmação:
 *
 *   1. O ORÁCULO é o que define o fuzzer. Sem ele você só encontra crash.
 *   2. Cobertura como realimentação transforma busca cega em escalada de degraus.
 *   3. Minimização é obrigatória: o input bruto não é um relatório de bug.
 *
 * Não há dependência externa. O alvo é um parser de formato binário com um
 * defeito plantado, e um "sanitizer" que cumpre o papel do AddressSanitizer:
 * ele não corrige nada, ele TRANSFORMA leitura fora dos limites em falha
 * observável. Em C/C++ isso é o ASan; aqui é uma função de 6 linhas.
 */

// ---------------------------------------------------------------------------
// 1. O sanitizer — o oráculo
// ---------------------------------------------------------------------------

class SanitizerError extends Error {
  constructor(offset, length, size) {
    super(`heap-buffer-overflow: leitura de ${length} byte(s) em ${offset}, buffer tem ${size}`);
    this.name = 'SanitizerError';
  }
}

class ParseError extends Error {
  constructor(message) { super(message); this.name = 'ParseError'; }
}

/*
 * Toda leitura do alvo passa por aqui. Em JavaScript, `buf.subarray(10, 999)`
 * devolve um buffer curto em silêncio — exatamente o tipo de falha silenciosa
 * que em C seria leitura de memória alheia. O sanitizer torna isso audível.
 */
function read(buf, offset, length) {
  if (offset < 0 || length < 0 || offset + length > buf.length) {
    throw new SanitizerError(offset, length, buf.length);
  }
  return buf.subarray(offset, offset + length);
}

// ---------------------------------------------------------------------------
// 2. O alvo — um parser com um defeito plantado
// ---------------------------------------------------------------------------

/*
 * Formato:  'F' 'Z' <versao:1> <qtd:1> [ <len:1> <bytes:len> ]*
 *
 * O defeito: a partir da versão 3 alguém adicionou um caminho "rápido" que
 * confia no comprimento declarado sem conferir o limite do buffer. É o bug
 * mais comum de parser binário do mundo real, escrito do jeito que ele
 * costuma nascer: como otimização, num caminho que "só a versão nova usa".
 */
function parse(data, cov) {
  cov.add(1);
  if (data.length < 4) { cov.add(2); throw new ParseError('cabeçalho curto'); }
  if (data[0] !== 0x46) { cov.add(3); throw new ParseError('magic[0]'); }
  cov.add(4);
  if (data[1] !== 0x5a) { cov.add(5); throw new ParseError('magic[1]'); }
  cov.add(6);

  const versao = data[2];
  if (versao > 3) { cov.add(7); throw new ParseError('versão desconhecida'); }
  cov.add(10 + versao); // uma aresta por versão: o fuzzer as descobre uma a uma

  const qtd = data[3];
  let off = 4;
  const registros = [];

  for (let i = 0; i < qtd; i += 1) {
    cov.add(20);
    if (off >= data.length) { cov.add(21); throw new ParseError('registros truncados'); }
    const len = data[off];
    off += 1;

    if (versao >= 3) {
      cov.add(22);
      // ---- O DEFEITO -------------------------------------------------------
      // Caminho rápido: pula a checagem porque "a versão 3 já valida no
      // produtor". O produtor é o atacante.
      registros.push(read(data, off, len).toString('latin1'));
      // ----------------------------------------------------------------------
    } else {
      cov.add(23);
      if (off + len > data.length) { cov.add(24); throw new ParseError('registro estoura o buffer'); }
      registros.push(read(data, off, len).toString('latin1'));
    }
    off += len;
  }

  cov.add(30);
  return registros;
}

// ---------------------------------------------------------------------------
// 3. Motor de fuzzing
// ---------------------------------------------------------------------------

function criarRng(semente) {
  // PRNG determinístico (xorshift32): a execução precisa ser reproduzível.
  let estado = semente >>> 0 || 1;
  return () => {
    estado ^= estado << 13; estado >>>= 0;
    estado ^= estado >>> 17;
    estado ^= estado << 5;  estado >>>= 0;
    return estado / 0x1_0000_0000;
  };
}

const MUTACOES = ['flip', 'byte', 'insere', 'remove', 'splice', 'interessante'];
const INTERESSANTES = [0x00, 0x01, 0x7f, 0x80, 0xff, 0x46, 0x5a];

function mutar(entrada, rng, corpus) {
  const bytes = Array.from(entrada);
  const tipo = MUTACOES[Math.floor(rng() * MUTACOES.length)];
  const pos = bytes.length ? Math.floor(rng() * bytes.length) : 0;

  if (tipo === 'flip' && bytes.length) {
    bytes[pos] ^= 1 << Math.floor(rng() * 8);
  } else if (tipo === 'byte' && bytes.length) {
    bytes[pos] = Math.floor(rng() * 256);
  } else if (tipo === 'insere') {
    bytes.splice(pos, 0, Math.floor(rng() * 256));
  } else if (tipo === 'remove' && bytes.length > 1) {
    bytes.splice(pos, 1);
  } else if (tipo === 'splice' && corpus.length > 1) {
    const outro = corpus[Math.floor(rng() * corpus.length)];
    const corte = Math.floor(rng() * (outro.length + 1));
    bytes.splice(pos, 0, ...Array.from(outro.subarray(0, corte)));
  } else if (bytes.length) {
    bytes[pos] = INTERESSANTES[Math.floor(rng() * INTERESSANTES.length)];
  }

  return Buffer.from(bytes.slice(0, 128));
}

function executar(entrada) {
  const cov = new Set();
  let falha = null;
  try {
    parse(entrada, cov);
  } catch (erro) {
    // O ORÁCULO: ParseError é o alvo funcionando. SanitizerError é o bug.
    if (erro instanceof SanitizerError) falha = erro;
  }
  return { cov, falha };
}

function fuzzar({ guiado, orcamento, semente }) {
  const rng = criarRng(semente);
  const corpus = [Buffer.from('FZ\x00\x00', 'latin1')]; // uma semente mínima e válida
  const arestasVistas = new Set();
  let execucoes = 0;

  for (let i = 0; i < orcamento; i += 1) {
    const base = corpus[Math.floor(rng() * corpus.length)];
    const entrada = mutar(base, rng, corpus);
    const { cov, falha } = executar(entrada);
    execucoes += 1;

    if (falha) return { achou: true, execucoes, entrada, falha, corpus: corpus.length };

    if (guiado) {
      // Realimentação: guardo a entrada só se ela abriu uma aresta nova.
      let nova = false;
      for (const aresta of cov) if (!arestasVistas.has(aresta)) { arestasVistas.add(aresta); nova = true; }
      if (nova) corpus.push(entrada);
    }
  }

  return { achou: false, execucoes, corpus: corpus.length, arestas: arestasVistas.size };
}

// ---------------------------------------------------------------------------
// 4. Minimização — o input bruto não é um relatório de bug
// ---------------------------------------------------------------------------

function minimizar(entrada) {
  let atual = Buffer.from(entrada);
  let mudou = true;

  const aindaFalha = (candidato) => executar(candidato).falha instanceof SanitizerError;

  while (mudou) {
    mudou = false;
    // 4a. tenta remover blocos, do maior para o menor
    for (let tamanho = Math.max(1, atual.length >> 1); tamanho >= 1; tamanho >>= 1) {
      for (let i = 0; i + tamanho <= atual.length; i += 1) {
        const candidato = Buffer.concat([atual.subarray(0, i), atual.subarray(i + tamanho)]);
        if (aindaFalha(candidato)) { atual = candidato; mudou = true; break; }
      }
      if (mudou) break;
    }
    if (mudou) continue;
    // 4b. tenta baixar cada byte para zero (normaliza o ruído da mutação)
    for (let i = 0; i < atual.length; i += 1) {
      if (atual[i] === 0) continue;
      const candidato = Buffer.from(atual);
      candidato[i] = 0;
      if (aindaFalha(candidato)) { atual = candidato; mudou = true; break; }
    }
  }

  return atual;
}

// ---------------------------------------------------------------------------
// 5. Execução
// ---------------------------------------------------------------------------

const ORCAMENTO = 200_000;
const SEMENTE = 0x5eed;

const cego = fuzzar({ guiado: false, orcamento: ORCAMENTO, semente: SEMENTE });
const guiado = fuzzar({ guiado: true, orcamento: ORCAMENTO, semente: SEMENTE });

const hex = (b) => Array.from(b).map((x) => x.toString(16).padStart(2, '0')).join(' ');

console.log('=== Fuzzing guiado por cobertura ===\n');
console.log(`Orçamento por estratégia: ${ORCAMENTO.toLocaleString('pt-BR')} execuções · semente 0x${SEMENTE.toString(16)}\n`);

console.log('--- 1. Sem realimentação (mutação cega a partir da semente) ---');
console.log(cego.achou
  ? `  achou em ${cego.execucoes.toLocaleString('pt-BR')} execuções`
  : `  NÃO achou em ${cego.execucoes.toLocaleString('pt-BR')} execuções`);

console.log('\n--- 2. Com realimentação de cobertura ---');
if (guiado.achou) {
  console.log(`  achou em ${guiado.execucoes.toLocaleString('pt-BR')} execuções`);
  console.log(`  corpus acumulado: ${guiado.corpus} entradas`);
  console.log(`  falha: ${guiado.falha.name} — ${guiado.falha.message}`);
  console.log(`  entrada bruta (${guiado.entrada.length} bytes): ${hex(guiado.entrada)}`);

  const min = minimizar(guiado.entrada);
  console.log(`\n--- 3. Depois da minimização ---`);
  console.log(`  ${min.length} bytes: ${hex(min)}`);
  console.log(`  legível: magic 'FZ' · versão ${min[2]} · qtd ${min[3]} · len declarado ${min[4]}`);
  console.log(`  reprodução: ${executar(min).falha.message}`);
} else {
  console.log(`  NÃO achou em ${guiado.execucoes.toLocaleString('pt-BR')} execuções`);
}

// ---------------------------------------------------------------------------
// 6. Verificação — este arquivo falha se a lição deixar de ser verdadeira
// ---------------------------------------------------------------------------

const checagens = [];
const ok = (nome, cond) => checagens.push({ nome, cond });

ok('o alvo aceita entrada válida sem acusar o sanitizer',
  executar(Buffer.from('FZ\x00\x00', 'latin1')).falha === null);

ok('entrada malformada gera ParseError, não SanitizerError (o oráculo separa os dois)',
  executar(Buffer.from('XX\x00\x00', 'latin1')).falha === null);

ok('a versão 2 valida o limite e NÃO dispara o sanitizer',
  executar(Buffer.from([0x46, 0x5a, 0x02, 0x01, 0x40])).falha === null);

ok('a versão 3 com o mesmo input dispara o sanitizer (o defeito é do caminho rápido)',
  executar(Buffer.from([0x46, 0x5a, 0x03, 0x01, 0x40])).falha instanceof SanitizerError);

ok('o fuzzing guiado encontra o defeito', guiado.achou === true);

if (guiado.achou) {
  const min = minimizar(guiado.entrada);
  ok('a minimização chega a 5 bytes', min.length === 5);
  ok('o input minimizado ainda reproduz a falha', executar(min).falha instanceof SanitizerError);
}

console.log('\n=== Verificação ===');
let falhou = 0;
for (const { nome, cond } of checagens) {
  console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${nome}`);
  if (!cond) falhou += 1;
}
console.log(falhou === 0 ? `\n${checagens.length}/${checagens.length} checagens passaram.` : `\n${falhou} checagem(ns) falharam.`);
process.exitCode = falhou === 0 ? 0 : 1;
