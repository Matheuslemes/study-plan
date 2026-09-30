/*
 * Gate das SEQUÊNCIAS de estudo (Backend e Arquitetura).
 *
 * A sequência de Arquitetura referencia, por id, módulos e páginas que vivem em
 * outras trilhas. Sem esta rede, renomear um módulo em arquitetura-advanced.js
 * quebraria os links da etapa SILENCIOSAMENTE (o find() volta undefined e o link
 * some). Aqui validamos essas amarras a cada build.
 *
 * Rode com:  node scripts/validate-sequences.mjs
 */
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const publicDir = join(root, 'public');
const imp = (rel) => import(pathToFileURL(join(publicDir, rel)).href);
const failures = [];
const evidence = [];
const check = (cond, msg) => { if (!cond) failures.push(msg); };

const { SEQUENCES, OBJECTIVE_EQUIVALENCES, objectiveId, describeObjective } = await imp('data/sequences.js');
const { arquiteturaModules } = await imp('data/arquitetura-advanced.js');
const { CONFIG } = await imp('data/config.js');

// ── Registro das sequências ────────────────────────────────
check(Boolean(SEQUENCES.backend) && Boolean(SEQUENCES.arquitetura),
  'SEQUENCES deve conter "backend" e "arquitetura".');
check(SEQUENCES.backend?.id === 'backend' && SEQUENCES.arquitetura?.id === 'arquitetura',
  'Cada sequência deve expor id coerente com a chave.');

// ── Backend: preserva o plano original ─────────────────────
const backend = SEQUENCES.backend;
check(Array.isArray(backend.phases) && backend.phases.length === 12,
  `Backend deveria ter 12 fases; tem ${backend.phases?.length}.`);
check(backend.weeks === CONFIG.semanas && backend.hours === CONFIG.horasTotais,
  'Backend deve herdar semanas/horas do CONFIG (globais pertencem ao Backend).');

// ── Arquitetura: estrutura e amarras ───────────────────────
const arch = SEQUENCES.arquitetura;
const known = new Set(arquiteturaModules.map((m) => m.id));
const partOf = new Map(arquiteturaModules.map((m) => [m.id, m.part]));

check(Array.isArray(arch.phases) && arch.phases.length === 6,
  `Arquitetura deveria ter 6 etapas; tem ${arch.phases?.length}.`);
check(arch.weeks === 24 && arch.hours === 480, 'Arquitetura deveria declarar 24 semanas / 480h.');
check(Array.isArray(arch.optional) && arch.optional.length > 0, 'Arquitetura sem aprofundamentos opcionais.');

let moduleRefs = 0;
const partPagesChecked = new Set();
arch.phases.forEach((p, index) => {
  check(p.id === index + 1, `Arquitetura: etapa fora de sequência (${p.slug || p.id}).`);
  ['slug', 'l', 't', 'w', 'proof'].forEach((f) => check(Boolean(p[f]), `Arquitetura ${p.l || p.id}: campo "${f}" ausente.`));
  check(Boolean(p.lab?.entrega), `Arquitetura ${p.l}: lab.entrega ausente.`);
  check(Array.isArray(p.modules) && p.modules.length > 0, `Arquitetura ${p.l}: sem módulos referenciados.`);
  check(p.objectives && typeof p.objectives === 'object', `Arquitetura ${p.l}: objectives ausente.`);

  // Módulos referenciados existem na Academia de Arquitetura e têm página de parte.
  (p.modules || []).forEach((id) => {
    moduleRefs += 1;
    if (!known.has(id)) { failures.push(`Arquitetura ${p.l}: module id inexistente "${id}".`); return; }
    const part = partOf.get(id);
    const page = join(publicDir, 'trilhas', 'arquitetura', `${part}.html`);
    if (!existsSync(page)) failures.push(`Arquitetura ${p.l}: página de parte ausente para "${id}" (trilhas/arquitetura/${part}.html).`);
    else partPagesChecked.add(part);
  });
});

// ── Ids de objetivo: estáveis, únicos e reversíveis ────────
const ids = new Set();
let objectiveCount = 0;
for (const p of arch.phases) {
  for (const [track, arr] of Object.entries(p.objectives || {})) {
    if (!Array.isArray(arr)) continue;
    arr.forEach((o, i) => {
      objectiveCount += 1;
      check(Boolean(o.id) && Boolean(o.text), `Arquitetura ${p.l}/${track}: objetivo sem id ou texto.`);
      let id;
      try { id = objectiveId(arch, track, p, i); }
      catch (e) { failures.push(`Arquitetura ${p.l}/${track}[${i}]: objectiveId lançou erro (${e.message}).`); return; }
      check(!ids.has(id), `Arquitetura: id de objetivo duplicado "${id}".`);
      ids.add(id);
      // describeObjective tem de reencontrar o objetivo (não cair no fallback "Histórico").
      const d = describeObjective(id);
      check(d.sequenceId === 'arquitetura', `Arquitetura: describeObjective não reencontrou "${id}" (voltou "${d.sequenceName}").`);
    });
  }
}

// ── Diagnóstico de entrada ─────────────────────────────────
check(Array.isArray(arch.diagnostic) && arch.diagnostic.length > 0, 'Arquitetura sem diagnóstico de entrada.');
(arch.diagnostic || []).forEach((d) => {
  ['id', 'text', 'href'].forEach((f) => check(Boolean(d[f]), `Diagnóstico: item sem "${f}".`));
  if (!d.href) return;
  const rel = d.href.replace(/^\/+/, '').split('#')[0];
  check(existsSync(join(publicDir, rel)), `Diagnóstico: href inexistente "${d.href}".`);
});

// ── Equivalências: só ids conhecidos podem ser remapeados ──
for (const [from, to] of Object.entries(OBJECTIVE_EQUIVALENCES || {})) {
  check(ids.has(from) || ids.has(to), `Equivalência aponta para id desconhecido: ${from} → ${to}.`);
}

evidence.push(`2 sequências (backend 12 fases · arquitetura 6 etapas)`);
evidence.push(`${moduleRefs} referências de módulo válidas em ${partPagesChecked.size} páginas de parte`);
evidence.push(`${objectiveCount} objetivos com id único e reversível (describeObjective)`);
evidence.push(`${arch.diagnostic.length} itens de diagnóstico com href válido`);
evidence.push(`${Object.keys(OBJECTIVE_EQUIVALENCES || {}).length} equivalências declaradas`);

if (failures.length) {
  console.error(failures.map((f) => `✗ ${f}`).join('\n'));
  process.exitCode = 1;
} else {
  evidence.forEach((e) => console.log(`✓ ${e}`));
  console.log('✓ Sequências íntegras: módulos, objetivos, diagnóstico e equivalências consistentes');
}
