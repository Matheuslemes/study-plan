import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { LABS_ENCADEADOS, P } from '../public/data/phases.js';
import { GUIAS_TRILHA } from '../public/data/track-guides.js';
import { EXERCICIOS_TRILHA } from '../public/data/track-exercises.js';
import { MODOS_ROTINA } from '../public/data/routine.js';
import { DEPENDENCIAS_CURRICULO, TRILHAS_TRANSVERSAIS } from '../public/data/learning-path.js';
import { SIMULADOS_ENTREVISTA } from '../public/data/interviews.js';
import {
  TRACK_ALIASES,
  TRACK_REGISTRY,
  getTrackConfig,
  resolveTrackId
} from '../public/data/tracks.js';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const publicDir = join(root, 'public');
const trailsDir = join(publicDir, 'trilhas');
const cssDir = join(publicDir, 'assets', 'css');
const pagesJsDir = join(publicDir, 'assets', 'js', 'pages');
const failures = [];
const evidence = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

function recursiveFiles(directory, predicate = () => true) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return recursiveFiles(path, predicate);
    return entry.isFile() && predicate(path) ? [path] : [];
  });
}

function htmlClassTokens(html) {
  return [...html.matchAll(/\bclass="([^"]*)"/gi)]
    .flatMap((match) => match[1].split(/\s+/).filter(Boolean));
}

function localTarget(sourceFile, reference) {
  const clean = decodeURIComponent(reference.split(/[?#]/)[0]);
  if (!clean) return null;
  return clean.startsWith('/')
    ? join(publicDir, clean.replace(/^\/+/, ''))
    : resolve(dirname(sourceFile), clean);
}

const canonicalIds = Object.keys(TRACK_REGISTRY);
const expectedIds = [
  'java', 'ia', 'arquitetura', 'python', 'aws', 'devops', 'frontend',
  'bancos', 'git', 'ingles', 'matematica', 'sec', 'financeiro', 'treino'
];
check(canonicalIds.length === 14, `Registro central deveria conter 14 trilhas; contém ${canonicalIds.length}.`);
check(JSON.stringify(canonicalIds.sort()) === JSON.stringify([...expectedIds].sort()),
  'O registro central não corresponde aos 14 identificadores canônicos.');
check(JSON.stringify(TRACK_ALIASES) === JSON.stringify({
  py: 'python', db: 'bancos', math: 'matematica', fin: 'financeiro'
}), 'Aliases legados não estão centralizados no mapa esperado.');
Object.entries(TRACK_ALIASES).forEach(([alias, canonical]) => {
  check(resolveTrackId(alias) === canonical, `Alias ${alias} não resolve para ${canonical}.`);
});
check(getTrackConfig('sec')?.id === 'sec', 'Segurança deve manter sec como identificador canônico.');

const curriculumKeys = [
  'java', 'db', 'dsa', 'git', 'arquitetura', 'devops', 'sec',
  'frontend', 'py', 'ia', 'math', 'ingles', 'pratica', 'fin'
];
const allTopics = P.flatMap((phase) => [
  ...curriculumKeys.flatMap((key) => phase[key] || []),
  ...(phase.aws?.topics || [])
]).filter((item) => !item.startsWith('Trilha inativa'));
const observableTopics = allTopics.filter((item) => item.includes('critério observável:'));
check(P.length === 12, `Esperadas 12 fases; encontradas ${P.length}.`);
check(observableTopics.length / allTopics.length >= .8,
  `Somente ${observableTopics.length}/${allTopics.length} tópicos possuem critério observável.`);

const dsaText = P.flatMap((phase) => phase.dsa || []).join('\n').toLocaleLowerCase('pt-BR');
[
  'Collections Framework', 'Contrato de equals', 'Contrato de hashCode',
  'Comparator e Comparable', 'prefix sum', 'binary search',
  'divide and conquer', 'greedy', 'trie'
].forEach((pattern) => check(
  dsaText.includes(pattern.toLocaleLowerCase('pt-BR')),
  `Padrão DSA ausente: ${pattern}.`
));

check(LABS_ENCADEADOS.length === 12, `Esperados 12 labs; encontrados ${LABS_ENCADEADOS.length}.`);
LABS_ENCADEADOS.forEach((lab, index) => {
  const previous = index === 0 ? null : LABS_ENCADEADOS[index - 1].id;
  check(lab.fase === index + 1, `Lab ${lab.id} está associado à fase incorreta.`);
  check(lab.dependeDe === previous, `Lab ${lab.id} não evolui o artefato da fase anterior.`);
  check(P[index]?.lab?.id === lab.id, `Fase ${index + 1} não expõe o lab ${lab.id}.`);
});

const legacyCurriculumKey = {
  bancos: 'db',
  python: 'py',
  matematica: 'math',
  financeiro: 'fin'
};
const hubFiles = readdirSync(trailsDir)
  .filter((name) => name.endsWith('.html'))
  .map((name) => join(trailsDir, name));
check(hubFiles.length === 14, `Esperados 14 hubs; encontrados ${hubFiles.length}.`);

const forbiddenLegacyClasses = new Set([
  'section', 'hero', 'grid2', 'ia-hero-map', 'ia-module-grid', 'ia-module-card',
  'aws-part-grid', 'aws-part-card', 'fe-part-grid', 'fe-part-card',
  'sec-part-grid', 'sec-part-card', 'db-academy-grid'
]);
const trackPrefixedComponent = /^(?:java|ia|arq|py|aws|db|devops|fe|sec|fin|math)-/;

for (const file of hubFiles) {
  const html = readFileSync(file, 'utf8');
  const slug = fileURLToPath(pathToFileURL(file)).split(/[/\\]/).at(-1).replace(/\.html$/, '');
  const track = html.match(/<body[^>]*data-track="([^"]+)"/i)?.[1];
  check(track === slug, `${relative(publicDir, file)} usa data-track="${track}" em vez de "${slug}".`);
  check(/class="[^"]*\bis-hub\b/.test(html), `${slug}.html não declara o estado is-hub.`);
  check(/assets\/css\/tokens\.css/.test(html), `${slug}.html não carrega tokens.css.`);
  check(/assets\/css\/tracks-palette\.css/.test(html), `${slug}.html não carrega tracks-palette.css.`);
  check(/assets\/css\/hub\.css/.test(html), `${slug}.html não carrega hub.css.`);
  check(/assets\/js\/pages\/hub\.js/.test(html), `${slug}.html não usa hub.js.`);
  check(!/<style\b/i.test(html), `${slug}.html ainda possui CSS inline.`);
  check(/<main\b/i.test(html), `${slug}.html não possui landmark main.`);
  check(/class="skip-link"/.test(html), `${slug}.html não possui link para pular ao conteúdo.`);
  htmlClassTokens(html).forEach((token) => check(
    !forbiddenLegacyClasses.has(token),
    `${slug}.html ainda usa a classe legada .${token}.`
  ));
  htmlClassTokens(html).forEach((token) => check(
    !trackPrefixedComponent.test(token),
    `${slug}.html ainda usa o componente específico .${token}.`
  ));
  const didacticKey = resolveTrackId(legacyCurriculumKey[slug] || slug);
  check(Boolean(GUIAS_TRILHA[didacticKey]), `Guia didático ausente para ${slug}.`);
  check((EXERCICIOS_TRILHA[didacticKey] || []).length >= 3,
    `Banco de exercícios insuficiente para ${slug}.`);
}

const academyIds = canonicalIds.filter((id) => TRACK_REGISTRY[id].academy);
check(academyIds.length === 13, `Esperadas 13 Academias e Treino como registro; encontradas ${academyIds.length}.`);
const actionVerb = /^(aplicar|analisar|auditar|automatizar|avaliar|bloquear|calcular|comparar|comunicar|conduzir|configurar|construir|criar|definir|demonstrar|diagnosticar|dimensionar|documentar|escolher|escrever|executar|explicar|implementar|integrar|interpretar|investigar|mapear|medir|modelar|operar|otimizar|planejar|produzir|projetar|proteger|reduzir|relacionar|reproduzir|resolver|responder|selecionar|validar|verificar|versionar)\b/i;
let academyShellCount = 0;
let moduleCount = 0;
let bookCount = 0;
let measurableCount = 0;
const allBookPaths = new Set();

for (const id of academyIds) {
  const config = getTrackConfig(id);
  const dataUrl = pathToFileURL(join(publicDir, 'data', config.dataFile)).href;
  const data = await import(`${dataUrl}?validate=${Date.now()}-${id}`);
  const academy = data[config.exports.academy];
  const modules = data[config.exports.modules];
  const books = data[config.exports.books] || {};
  const assessment = data[config.exports.assessment] || {};
  const projects = data[config.exports.projects] || assessment.projects || [];

  check(Boolean(academy?.parts), `${id}: academy.parts ausente.`);
  check(Array.isArray(modules) && modules.length > 0, `${id}: modules[] ausente ou vazio.`);
  check(Array.isArray(assessment.levels) && assessment.levels.length >= 4,
    `${id}: rubricas de senioridade insuficientes.`);
  check(Array.isArray(assessment.completion) && assessment.completion.length >= 5,
    `${id}: critérios de conclusão insuficientes.`);

  const parts = Object.keys(academy?.parts || {});
  const curricularParts = new Set(parts);
  check(parts.includes(config.assessmentPart || 'avaliacao'), `${id}: parte de avaliação ausente.`);
  check(projects.length >= 2, `${id}: projetos encadeados insuficientes.`);

  parts.forEach((part) => {
    const page = academy.parts[part].page || `${part}.html`;
    const file = join(trailsDir, id, page);
    academyShellCount += 1;
    check(existsSync(file), `${id}: shell ausente ${page}.`);
    if (!existsSync(file)) return;
    const html = readFileSync(file, 'utf8');
    const body = html.match(/<body\b([^>]*)>/i)?.[1] || '';
    check(body.includes(`data-track="${id}"`), `${id}/${page}: data-track não canônico.`);
    check(body.includes(`data-part="${part}"`), `${id}/${page}: data-part incorreto.`);
    check(/\bis-academy\b/.test(body), `${id}/${page}: estado is-academy ausente.`);
    check(/assets\/css\/academy\.css/.test(html), `${id}/${page}: academy.css ausente.`);
    check(/assets\/css\/tracks-palette\.css/.test(html), `${id}/${page}: paleta compartilhada ausente.`);
    check(/assets\/js\/pages\/academy\.js/.test(html), `${id}/${page}: academy.js ausente.`);
    check(!/<style\b/i.test(html), `${id}/${page}: CSS inline presente.`);
    check(/id="viewNav"/.test(html), `${id}/${page}: navegação das três vistas ausente.`);
    check(/<main\b[^>]*id="conteudo"/i.test(html), `${id}/${page}: landmark principal inconsistente.`);
  });

  modules.forEach((module, index) => {
    moduleCount += 1;
    check(module.number === index + 1, `${id}: módulo fora de sequência ${module.id}.`);
    check(Boolean(module.id), `${id}: módulo ${index + 1} sem id.`);
    check(curricularParts.has(module.part), `${id}: módulo ${module.id} usa parte inválida ${module.part}.`);
    ['title', 'objective', 'problem', 'prerequisites'].forEach((field) => check(
      Boolean(module[field]) && (!Array.isArray(module[field]) || module[field].length > 0),
      `${id}: módulo ${module.id} sem ${field}.`
    ));
    if (actionVerb.test(module.objective || '')) measurableCount += 1;
    check((module.exercises || []).length > 0, `${id}: módulo ${module.id} sem prática verificável.`);
    check((module.interview || module.interviews || []).length > 0,
      `${id}: módulo ${module.id} sem pergunta de defesa.`);
  });

  Object.values(books).forEach((book) => {
    bookCount += 1;
    const path = String(book.path || '').replace(/^\/+/, '');
    allBookPaths.add(path);
    check(Boolean(path), `${id}: livro sem caminho local.`);
    check(existsSync(join(publicDir, path)), `${id}: PDF inexistente ${book.path}.`);
  });

  projects.forEach((project, index) => {
    if (index === 0 || !Object.hasOwn(project, 'evolves')) return;
    const previousId = projects[index - 1].id;
    const previousTitle = projects[index - 1].title;
    check(
      project.evolves === previousId
        || project.evolves === previousTitle
        || String(project.evolves).toLocaleLowerCase('pt-BR').includes('mesmo'),
      `${id}: projeto ${project.id || index + 1} não declara evolução do artefato anterior.`
    );
  });
}

check(measurableCount / moduleCount >= .8,
  `Somente ${measurableCount}/${moduleCount} objetivos de Academia começam com verbo mensurável.`);

const sharedCss = ['tokens.css', 'tracks-palette.css', 'hub.css', 'academy.css'];
sharedCss.forEach((name) => check(existsSync(join(cssDir, name)), `CSS compartilhado ausente: ${name}.`));
const specificCss = readdirSync(cssDir).filter((name) => /-(?:hub|academy)\.css$/i.test(name));
const specificRenderers = readdirSync(pagesJsDir).filter((name) => /-(?:module|hub)\.js$/i.test(name));
check(specificCss.length === 0, `CSS específico restante: ${specificCss.join(', ')}.`);
check(specificRenderers.length === 0, `Renderer específico restante: ${specificRenderers.join(', ')}.`);
['components.css', 'trilha-components.css'].forEach((name) => check(
  !existsSync(join(cssDir, name)),
  `Arquivo legado ainda existe: ${name}.`
));

const hubCss = readFileSync(join(cssDir, 'hub.css'), 'utf8');
const academyCss = readFileSync(join(cssDir, 'academy.css'), 'utf8');
const tokensCss = readFileSync(join(cssDir, 'tokens.css'), 'utf8');
const paletteCss = readFileSync(join(cssDir, 'tracks-palette.css'), 'utf8');
const systemCss = readFileSync(join(cssDir, 'system.css'), 'utf8');
const academyJs = readFileSync(join(pagesJsDir, 'academy.js'), 'utf8');
const hubJs = readFileSync(join(pagesJsDir, 'hub.js'), 'utf8');
check(/prefers-reduced-motion:\s*reduce/.test(tokensCss), 'tokens.css não trata prefers-reduced-motion.');
check(/focus-visible/.test(hubCss) && /focus-visible/.test(academyCss), 'Foco visível ausente em Hub ou Academia.');
check(/overflow-x:\s*auto/.test(hubCss) && /overflow-x:\s*auto/.test(academyCss),
  'Tabelas/conteúdo largo não possuem rolagem própria.');
check(/body\.dataset\.track/.test(academyJs), 'academy.js não lê body.dataset.track.');
check(/dataset\.part/.test(academyJs), 'academy.js não lê data-part.');
check(/core\/render\.js/.test(academyJs) && /core\/public-url\.js/.test(academyJs),
  'academy.js não reutiliza core/render.js e core/public-url.js.');
check(/import\(moduleUrl\.href\)/.test(academyJs), 'academy.js não resolve dados dinamicamente.');
check(!/(?:java|ia|arq|py|fe|db|sec)-module/i.test(academyJs),
  'academy.js contém vocabulário específico por trilha.');
check(!/(?:ia|aws|fe|sec|db)-(?:hero|part|module|academy)/i.test(hubCss + hubJs),
  'Hub compartilhado ainda contém aliases de componente por trilha.');
['--surface2', '--surface3', '--border2', '--accent-blue', '--accent-purple', '--accent-orange']
  .forEach((alias) => check(
    !new RegExp(`var\\(${alias}(?:[,\\)])`).test(systemCss + hubCss + academyCss),
    `Alias CSS legado ainda é consumido: ${alias}.`
  ));

const requiredPalette = {
  java: '#34d399', ia: '#a78bfa', arquitetura: '#f472b6', python: '#60a5fa',
  aws: '#f59e0b', devops: '#fb7185', frontend: '#06b6d4', bancos: '#2dd4bf',
  git: '#fb923c', ingles: '#818cf8', matematica: '#e879f9', sec: '#f87171',
  financeiro: '#a3e635', treino: '#facc15'
};
Object.entries(requiredPalette).forEach(([id, color]) => check(
  new RegExp(`--track-${id}:\\s*${color}`, 'i').test(paletteCss),
  `Paleta principal incorreta para ${id}.`
));
const componentCss = recursiveFiles(cssDir, (file) =>
  extname(file) === '.css' && !['tokens.css', 'tracks-palette.css'].includes(file.split(/[/\\]/).at(-1)));
componentCss.forEach((file) => {
  const css = readFileSync(file, 'utf8');
  Object.values(requiredPalette).forEach((color) => check(
    !css.toLocaleLowerCase('pt-BR').includes(color),
    `${relative(publicDir, file)} repete a cor de marca ${color} fora da paleta.`
  ));
});

const reviewJs = readFileSync(join(publicDir, 'assets', 'js', 'features', 'review.js'), 'utf8');
['conceito', 'codigo', 'arquitetura'].forEach((type) => check(
  reviewJs.includes(`${type}: {`),
  `Tipo de revisão ausente: ${type}.`
));
const javaHub = readFileSync(join(trailsDir, 'java.html'), 'utf8').toLocaleLowerCase('pt-BR');
['cpu-bound', 'pool de conexões', 'pinning', 'backpressure', 'latência'].forEach((limit) => check(
  javaHub.includes(limit),
  `Limite de Virtual Threads ausente: ${limit}.`
));
check(Object.keys(MODOS_ROTINA).join(',') === 'ideal,minima,recuperacao', 'Protocolo de recuperação incompleto.');
check(DEPENDENCIAS_CURRICULO.length === 8, `Mapa deveria ter 8 etapas; possui ${DEPENDENCIAS_CURRICULO.length}.`);
check(TRILHAS_TRANSVERSAIS.length >= 5, 'Mapa não declara trilhas transversais suficientes.');
check(SIMULADOS_ENTREVISTA.length === 12, `Esperados 12 simulados; encontrados ${SIMULADOS_ENTREVISTA.length}.`);

const allHtml = recursiveFiles(publicDir, (file) => extname(file) === '.html');
for (const file of allHtml) {
  const html = readFileSync(file, 'utf8');
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  const references = [...html.matchAll(/\b(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  references.forEach((reference) => {
    if (reference.startsWith('#')) {
      const anchor = decodeURIComponent(reference.slice(1));
      if (anchor) check(ids.has(anchor), `${relative(publicDir, file)} referencia #${anchor} inexistente.`);
      return;
    }
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(reference)) return;
    const target = localTarget(file, reference);
    if (target) check(existsSync(target), `${relative(publicDir, file)} referencia arquivo inexistente: ${reference}.`);
  });
}

const pdfReferences = new Set(allBookPaths);
recursiveFiles(publicDir, (file) => ['.html', '.js'].includes(extname(file))).forEach((file) => {
  const source = readFileSync(file, 'utf8');
  [...source.matchAll(/(?:["'`](\/?pdfs\/[^"'`?#]+\.pdf)(?:[?#][^"'`]*)?["'`])/gi)]
    .forEach((match) => pdfReferences.add(decodeURIComponent(match[1].replace(/^\/+/, ''))));
});
pdfReferences.forEach((path) => check(existsSync(join(publicDir, path)), `PDF referenciado não existe: ${path}.`));

const storageMemory = new Map();
globalThis.localStorage = {
  get length() { return storageMemory.size; },
  getItem(key) { return storageMemory.has(key) ? storageMemory.get(key) : null; },
  setItem(key, value) { storageMemory.set(String(key), String(value)); },
  removeItem(key) { storageMemory.delete(String(key)); },
  key(index) { return [...storageMemory.keys()][index] ?? null; }
};
globalThis.document = { dispatchEvent() {} };
globalThis.CustomEvent = class {
  constructor(type, options = {}) {
    this.type = type;
    this.detail = options.detail;
  }
};
const progress = await import('../public/assets/js/features/progress.js?redesign-validation');
const testTopic = 'java:redesign:0';
check(!progress.definirEstado(testTopic, progress.ESTADOS.VALIDADO).ok,
  'Um tópico chegou a Validado sem evidência.');
check(!progress.salvarEvidencia(testTopic, 'javascript:alert(1)').ok,
  'O progresso aceitou evidência fora de HTTP(S).');
progress.salvarEvidencia(testTopic, 'https://example.test/commit/1');
check(progress.definirEstado(testTopic, progress.ESTADOS.VALIDADO).ok,
  'Tópico com evidência HTTP(S) não chegou a Validado.');
check(!progress.definirEstado(testTopic, progress.ESTADOS.DOMINADO).ok,
  'Um tópico chegou a Dominado sem revisão D30.');
progress.registrarD30Concluida(testTopic, '2026-07-29T00:00:00.000Z');
check(progress.estadoDoTopico(testTopic) === progress.ESTADOS.DOMINADO,
  'Revisão D30 não promoveu o tópico a Dominado.');

evidence.push(`${observableTopics.length}/${allTopics.length} tópicos observáveis`);
evidence.push(`${LABS_ENCADEADOS.length} labs encadeados`);
evidence.push(`${hubFiles.length} hubs canônicos`);
evidence.push(`${academyIds.length} Academias · ${academyShellCount} shells · ${moduleCount} módulos`);
evidence.push(`${bookCount} livros catalogados · ${pdfReferences.size} PDFs referenciados`);
evidence.push(`${specificCss.length} CSS específicos · ${specificRenderers.length} renderers específicos`);
evidence.push(`${allHtml.length} páginas HTML com referências locais válidas`);

if (failures.length) {
  console.error(failures.map((failure) => `✗ ${failure}`).join('\n'));
  process.exitCode = 1;
} else {
  evidence.forEach((item) => console.log(`✓ ${item}`));
  console.log('✓ Validado exige evidência HTTP(S); Dominado exige revisão D30');
  console.log('✓ Tokens, paletas, Hub e Academia usam a arquitetura unificada');
}
