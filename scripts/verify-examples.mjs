/*
 * verify-examples.mjs — porta de qualidade única dos exemplos autoverificáveis.
 *
 * Roda TODOS os exemplos de public/examples/ que se autoverificam e falha (exit 1)
 * se qualquer um que foi EXECUTADO não terminar com exit 0. É portável:
 *   - .mjs  -> sempre executados com `node` (não exigem nada além do Node);
 *   - .py   -> executados se houver Python 3; senão, PULADOS com aviso;
 *   - .java -> compilados (--release 21 -Xlint:all) e o CompileSmoke roda, se houver javac; senão PULADOS;
 *   - .sql  -> PULADOS (exigem PostgreSQL; o SQL executável já é exercido por bancos-zero.mjs via node:sqlite).
 *
 * Uso:  node scripts/verify-examples.mjs [--only=mjs,py,java]
 */

import { readdirSync, mkdtempSync } from 'node:fs';
import { dirname, extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const examplesDir = join(root, 'public', 'examples');
const TIMEOUT = 60000;

const onlyArg = process.argv.find((a) => a.startsWith('--only='));
const only = onlyArg ? new Set(onlyArg.slice('--only='.length).split(',')) : null;
const want = (kind) => !only || only.has(kind);

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const rel = (p) => relative(examplesDir, p).replaceAll('\\', '/');
const files = walk(examplesDir);
const byExt = (ext) => files.filter((f) => extname(f) === ext).sort();

// Detecta um binário rodando `--version` e conferindo o texto esperado.
function detect(cmd, args, needle) {
  try {
    const r = spawnSync(cmd, args, { encoding: 'utf8', timeout: 15000 });
    const out = `${r.stdout || ''}${r.stderr || ''}`;
    if (r.status === 0 && (!needle || out.includes(needle))) return { cmd, args, out: out.trim() };
  } catch { /* ausente */ }
  return null;
}

const failures = [];
const summary = [];

function runOne(cmd, args, label) {
  const r = spawnSync(cmd, args, { encoding: 'utf8', timeout: TIMEOUT });
  const ok = r.status === 0;
  if (!ok) {
    const motivo = r.signal ? `sinal ${r.signal} (timeout?)` : `exit ${r.status}`;
    const cauda = `${r.stdout || ''}${r.stderr || ''}`.trim().split('\n').slice(-4).join('\n   ');
    failures.push(`✗ ${label} — ${motivo}\n   ${cauda}`);
  }
  return ok;
}

// ── .mjs (sempre) ──────────────────────────────────────────────────────────
if (want('mjs')) {
  const mjs = byExt('.mjs');
  let ok = 0;
  for (const f of mjs) if (runOne(process.execPath, [f], rel(f))) ok++;
  summary.push(`[.mjs]  ${ok}/${mjs.length} executados com sucesso (Node ${process.version})`);
}

// ── .py (se houver Python 3) ─────────────────────────────────────────────────
if (want('py')) {
  const py = byExt('.py');
  const python = detect('python3', ['--version'], 'Python 3') || detect('python', ['--version'], 'Python 3') || detect('py', ['-3', '--version'], 'Python 3');
  if (!python) {
    summary.push(`[.py]   ${py.length} PULADOS (Python 3 ausente neste ambiente; execução real sob Pyodide)`);
  } else {
    const base = python.args.slice(0, -1); // remove o "--version"
    let ok = 0;
    for (const f of py) if (runOne(python.cmd, [...base, f], rel(f))) ok++;
    summary.push(`[.py]   ${ok}/${py.length} executados com sucesso (${python.out.split('\n')[0]})`);
  }
}

// ── .java (se houver javac) ──────────────────────────────────────────────────
if (want('java')) {
  const javaFiles = byExt('.java');
  const javac = detect('javac', ['-version'], 'javac');
  if (!javac) {
    summary.push(`[.java] ${javaFiles.length} PULADOS (javac ausente; compilam sob JDK 21+ com CompileSmoke)`);
  } else {
    const out = mkdtempSync(join(tmpdir(), 'verify-java-'));
    const compilou = runOne('javac', ['--release', '21', '-Xlint:all', '-d', out, ...javaFiles], 'javac --release 21 (todas as classes)');
    let smokeOk = true;
    if (compilou) {
      const smoke = files.find((f) => f.endsWith('CompileSmoke.java'));
      if (smoke) smokeOk = runOne('java', ['-ea', '-cp', out, 'dev.studyplan.javaexpert.CompileSmoke'], 'java -ea CompileSmoke');
    }
    summary.push(`[.java] ${compilou && smokeOk ? 'OK' : 'FALHOU'} — ${javaFiles.length} classes compiladas (--release 21) + CompileSmoke (${javac.out.split('\n')[0]})`);
  }
}

// ── .sql (pulado; exige PostgreSQL) ──────────────────────────────────────────
if (want('sql')) {
  const sql = byExt('.sql');
  summary.push(`[.sql]  ${sql.length} PULADOS (requerem PostgreSQL; SQL executável já coberto por bancos-zero.mjs via node:sqlite)`);
}

// ── Relatório ────────────────────────────────────────────────────────────────
console.log('=== Verificação de exemplos autoverificáveis ===\n');
summary.forEach((s) => console.log((s.includes('FALHOU') ? '✗ ' : '✓ ') + s));
console.log('');
if (failures.length) {
  console.error(failures.join('\n'));
  console.error(`\n✗ ${failures.length} exemplo(s) falharam.`);
  process.exitCode = 1;
} else {
  console.log('✓ Todos os exemplos executáveis passaram; os demais foram pulados por falta de runtime (não é falha).');
}
