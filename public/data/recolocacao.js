/* ═══════════════════════════════════════════════
   RECOLOCAÇÃO — rotina alternativa para trocar de emprego

   Sprint de 13 a 26 semanas (90 a 180 dias) para vagas
   de desenvolvimento júnior/pleno, com âncora em Backend
   Java + React. Não altera a fase atual, a sequência nem
   o progresso das 12 fases: tem estado próprio.

   A duração muda a PROFUNDIDADE, não a velocidade:
   13 semanas cobrem o núcleo; cada semana a mais inclui
   uma semana de aprofundamento, na ordem de prioridade.

   A grade de horários é a do perfil escolhido na Rotina
   diária (mesmos construtores de data/routine.js): sono,
   academia, sábado e domingo continuam iguais.

   Fonte única de verdade da rotina de recolocação.
═══════════════════════════════════════════════ */

import { buildWeekPlan, buildSaturday, buildSunday, weekDays } from './routine.js';
import { SEMANAS_NUCLEO } from './recolocacao/nucleo.js';
import { SEMANAS_APROFUNDAMENTO } from './recolocacao/aprofundamento.js';
import { LIVROS, AREAS_LIVRO } from './recolocacao/livros.js';

export { LIVROS, AREAS_LIVRO };

/* ─── Duração ─────────────────────────────────── */

export const DURACAO = Object.freeze({
  minDias: 90,
  maxDias: 180,
  minSemanas: 13,   // 91 dias: o primeiro número de semanas que cobre 90 dias
  maxSemanas: 26,   // 26ª semana termina na sexta: 25 × 7 + 5 = 180 dias
  padraoSemanas: 13
});

/** Atalhos por mês, convertidos para semanas inteiras dentro do limite de 180 dias. */
export const OPCOES_MESES = Object.freeze([
  { meses: 3, semanas: 13 },
  { meses: 4, semanas: 17 },
  { meses: 5, semanas: 22 },
  { meses: 6, semanas: 26 }
]);

export const semanasValidas = (n) => {
  const semanas = Math.round(Number(n));
  return Number.isFinite(semanas)
    ? Math.min(DURACAO.maxSemanas, Math.max(DURACAO.minSemanas, semanas))
    : DURACAO.padraoSemanas;
};

/** Dias de calendário do sprint para N semanas, com teto de 180. */
export const diasDoSprint = (semanas) => Math.min(semanasValidas(semanas) * 7, DURACAO.maxDias);

/** Quantos dias a última semana tem (7, exceto na de 26 semanas, que termina na sexta). */
export const diasDaUltimaSemana = (semanas) => diasDoSprint(semanas) - (semanasValidas(semanas) - 1) * 7;

/* ─── Composição do sprint ────────────────────── */

export const TODAS_AS_SEMANAS = [...SEMANAS_NUCLEO, ...SEMANAS_APROFUNDAMENTO];

export const ROTULO_TIPO = Object.freeze({
  nucleo: 'Núcleo',
  aprofundamento: 'Aprofundamento',
  consolidacao: 'Consolidação'
});

/**
 * Semanas do sprint, em ordem de execução.
 * Núcleo sempre entra; das demais, entram as N − 13 de menor `prioridade`.
 */
export function semanasDoSprint(semanas) {
  const total = semanasValidas(semanas);
  const extras = [...SEMANAS_APROFUNDAMENTO]
    .sort((a, b) => a.prioridade - b.prioridade)
    .slice(0, total - SEMANAS_NUCLEO.length);
  return [...SEMANAS_NUCLEO, ...extras].sort((a, b) => a.ordem - b.ordem);
}

/** Semana do sprint em que as candidaturas começam (1-based). */
export function semanaDasCandidaturas(semanas) {
  return semanasDoSprint(semanas).findIndex((s) => s.marco === 'candidaturas') + 1;
}

/** Ordem em que cada aprofundamento entra quando o prazo cresce. */
export const ORDEM_DE_ENTRADA = [...SEMANAS_APROFUNDAMENTO]
  .sort((a, b) => a.prioridade - b.prioridade)
  .map((s, i) => ({ id: s.id, titulo: s.titulo, tipo: s.tipo, entraCom: SEMANAS_NUCLEO.length + i + 1 }));

/* ─── Grade de horários da semana ─────────────── */

const TIPO_DA_TRILHA = {
  java: 'deep-work', frontend: 'deep-work', ia: 'deep-work', aieng: 'deep-work',
  db: 'database', sec: 'security', devops: 'devops', aws: 'devops', git: 'devops',
  arquitetura: 'architecture', dsa: 'dsa', ingles: 'english', testing: 'testing',
  mercado: 'project', review: 'review', pratica: 'project'
};

const tipoDe = (k) => TIPO_DA_TRILHA[k] || 'study';

const ROTULO_TRANSVERSAL = { ingles: 'Inglês técnico', mercado: 'Mercado e candidaturas' };

const TEXTOS_RECOLOCACAO = {
  estudo: 'Ler com o objetivo de conseguir explicar sem consulta e terminar com 3 perguntas de entrevista escritas sobre o tema.',
  pratica: 'Implementar antes de consultar a solução e deixar o resultado commitado.',
  fechamentoManha: 'Rodar os testes, commitar e anotar o próximo passo. A meta da manhã é uma entrega pequena e verificável do dia, nunca "estudar o assunto".',
  recuperacao: 'Explicar em voz alta, sem anotações, o que foi estudado de manhã.',
  registro: 'Commitar, marcar o dia como feito na rotina de recolocação e registrar o que travou.',
  preparacao: 'Abrir o dia seguinte da rotina de recolocação, separar o material e encerrar.'
};

/** Blocos de um dia útil a partir da semana do sprint. */
function blocosDoDia(semana, indice) {
  const d = semana.dias[indice];
  const k = d.k || semana.k;
  const prioridade = ROTULO_TIPO[semana.tipo];
  const [kTransversal, textoTransversal] = semana.transversal[indice];
  const pergunta = semana.perguntas[indice] || semana.perguntas[0];
  const dsa = {
    block: `DSA · ${semana.dsa.padrao}: ${semana.dsa.problemas[indice]}`,
    k: 'dsa', type: 'dsa', priority: 'Núcleo', tracks: ['DSA', 'Big O'],
    d: 'Resolver sem consultar, dizer a complexidade de tempo e de espaço em voz alta e, se travou, reimplementar amanhã antes do problema novo.'
  };
  return {
    deep1: { block: d.estudo[0], k, type: tipoDe(k), priority: prioridade, tracks: [], d: d.estudo[1] },
    deep2: { block: d.pratica[0], k, type: tipoDe(k), priority: prioridade, tracks: [], d: d.pratica[1] },
    complement: { block: semana.complemento.titulo, k: semana.complemento.k, type: tipoDe(semana.complemento.k), priority: 'Complemento', tracks: [], d: semana.complemento.itens[indice] },
    transversal: { block: ROTULO_TRANSVERSAL[kTransversal] || 'Transversal', k: kTransversal, type: tipoDe(kTransversal), priority: 'Transversal', tracks: [], d: textoTransversal },
    dsa,
    night: { block: 'Revisão ativa — pergunta de entrevista do dia', k: 'review', type: 'review', priority: 'Recall', tracks: ['Active Recall', 'Entrevista'], d: `Responder em voz alta, sem consultar: ${pergunta}` }
  };
}

/** Configuração do dia no formato dos construtores de routine.js, por perfil. */
function configDoDia(semana, indice, perfil) {
  const b = blocosDoDia(semana, indice);
  if (perfil === 'estudo-integral') {
    // No integral, o bloco das 14:20 é garantido: vira DSA. O transversal entra na revisão da noite.
    return {
      deep1: b.deep1, deep2: b.deep2, complement: b.complement, extra: b.dsa,
      night: { ...b.night, d: `${b.night.d} Depois, ${b.transversal.block.toLowerCase()}: ${b.transversal.d}` },
      textos: TEXTOS_RECOLOCACAO
    };
  }
  // Trabalho 09–18: 13:00 e 14:15 são janelas condicionais; o DSA vai para a consolidação garantida das 23:15.
  return {
    deep1: b.deep1, deep2: b.deep2, complement: b.complement, extra: b.transversal,
    consolidacao: { ...b.dsa, kind: 'consolidação', seloRotulo: 'garantido · 45min' },
    night: b.night,
    focoNoite: '',
    textos: TEXTOS_RECOLOCACAO
  };
}

function sabadoDaSemana(semana) {
  const [k, titulo, detalhe] = semana.sabado.noite;
  return buildSaturday().map((bloco) => {
    if (bloco.time === '13:00 – 15:00') return { ...bloco, block: 'Exercícios da semana', d: semana.sabado.exercicios };
    if (bloco.time === '15:30 – 17:30') return { ...bloco, block: 'Lab: entregável da semana', d: semana.sabado.lab };
    if (bloco.time === '20:30 – 21:30') return { ...bloco, block: titulo, k, type: tipoDe(k), kind: k === 'mercado' ? 'mercado' : 'aplicação', tracks: [], d: detalhe };
    if (bloco.time === '00:30 – 01:00') return { ...bloco, d: 'Marcar os entregáveis da semana, registrar a URL de evidência de cada um e anotar o que ficou pendente para o buffer.' };
    return bloco;
  });
}

function domingoDaSemana(semana) {
  return buildSunday().map((bloco) => {
    if (bloco.time === '13:00 – 14:00') return { ...bloco, d: `${semana.domingo} Sem conteúdo novo, sem código novo e sem candidaturas.` };
    if (bloco.time === '23:00 – 23:30') return { ...bloco, d: 'Abrir a próxima semana do sprint, ler o objetivo e os entregáveis e conferir o pipeline de candidaturas. Planejar não é estudar: manter leve.' };
    return bloco;
  });
}

/** Grade completa (segunda a domingo) de uma semana do sprint no perfil de horário. */
export function gradeDaSemana(semana, perfil) {
  const diasUteis = Object.fromEntries(
    weekDays.slice(0, 5).map((dia, i) => [dia.key, configDoDia(semana, i, perfil)])
  );
  return {
    ...buildWeekPlan(diasUteis, perfil),
    sabado: sabadoDaSemana(semana),
    domingo: domingoDaSemana(semana)
  };
}

/* ─── Evidência de mercado ────────────────────── */

/*
 * Coleta de 06/11/2026: Gupy (2.089 vagas lidas; 619 de desenvolvimento publicadas
 * de 01/08 a 06/11/2026; 189 júnior/pleno), Programathor (32 ativas), backend-br e
 * frontendbr no GitHub (54 abertas) e LinkedIn (volume por busca). Contagem por
 * palavra-chave nas descrições: aproximada.
 */
export const EVIDENCIA_MERCADO = Object.freeze({
  coletaEm: '2026-11-06',
  amostra: '189 vagas júnior/pleno de desenvolvimento na Gupy (65 com Java, 57 com Node/TypeScript), publicadas de 01/08 a 06/11/2026',
  requisitos: [
    { requisito: 'API REST', geral: 76, java: 75, node: 82, semana: 'c03' },
    { requisito: 'Testes automatizados', geral: 66, java: 68, node: 74, semana: 'c05' },
    { requisito: 'SQL / banco relacional', geral: 59, java: 78, node: 75, semana: 'c02' },
    { requisito: 'Git', geral: 54, java: 69, node: 67, semana: 'c03' },
    { requisito: 'CI/CD', geral: 42, java: 54, node: 58, semana: 'c06' },
    { requisito: 'Menciona IA', geral: 40, java: 51, node: 51, semana: 'c11' },
    { requisito: 'React ou Angular', geral: 30, java: 48, node: 67, semana: 'c10' },
    { requisito: 'Docker', geral: 30, java: 45, node: 40, semana: 'c06' },
    { requisito: 'Mensageria (Kafka, RabbitMQ, SQS)', geral: 25, java: 49, node: 35, semana: 'c08' },
    { requisito: 'Microsserviços', geral: 23, java: 40, node: 35, semana: 'c08' },
    { requisito: 'Kubernetes', geral: 21, java: 40, node: 33, semana: 'c09' },
    { requisito: 'Azure', geral: 27, java: 34, node: 35, semana: 'c09' },
    { requisito: 'AWS', geral: 21, java: 28, node: 30, semana: 'c09' },
    { requisito: 'Observabilidade', geral: 23, java: 26, node: 32, semana: 'c09' },
    { requisito: 'SOLID, Clean Code e padrões', geral: 22, java: 29, node: 25, semana: 'd-arq' },
    { requisito: 'Inglês', geral: 17, java: 17, node: 9, semana: 'c01' }
  ],
  leituras: [
    'Vaga júnior está escassa: entre as vagas de desenvolvimento com nível no título, foram 52 júnior, 135 pleno e 252 sênior ou acima. O alvo realista é pleno inicial, ou júnior que entrega como pleno.',
    'Stacks nas vagas não sênior (378): Java 29%, Node/TypeScript 29%, Python 28%, front (React, Angular, Vue) 26%, .NET 15%, low-code/RPA/SAP 15%, mobile 12% e PHP 5%.',
    'Quase não aparecem: DDD (3%), algoritmos explícitos (5%), hexagonal (6%), Terraform (7%) e TDD (8%). Por isso entram como aprofundamento, não como núcleo.',
    'Modalidade das vagas júnior/pleno: 42% remoto, 28% híbrido e 30% presencial.',
    'Salário de referência: Java júnior de R$ 3,5 a 6,5 mil e pleno de R$ 7 a 12 mil (JobRise); backend pleno em São Paulo com mediana de R$ 12 mil (Robert Half); média de anúncios de Java pleno de R$ 6,4 mil (Indeed).'
  ],
  fontes: [
    { nome: 'Gupy — busca pública de vagas', url: 'https://portal.gupy.io/job-search/term=desenvolvedor%20pleno' },
    { nome: 'Programathor', url: 'https://programathor.com.br/jobs' },
    { nome: 'backend-br/vagas', url: 'https://github.com/backend-br/vagas/issues' },
    { nome: 'frontendbr/vagas', url: 'https://github.com/frontendbr/vagas/issues' },
    { nome: 'Stack Overflow Developer Survey 2026', url: 'https://stackoverflow.blog/2026/10/06/the-results-of-the-2026-developer-survey-are-here/' },
    { nome: 'JobRise — salários de desenvolvedor 2026', url: 'https://jobrise.io/pt/blog/quanto-ganha-um-desenvolvedor-no-brasil-2026/' },
    { nome: 'Robert Half — guia salarial (backend)', url: 'https://www.roberthalf.com/br/pt/vagas-detalhes/desenvolvedora-back-end-junior/sao-paulo' },
    { nome: 'Indeed — salário de Desenvolvedor Java Pleno', url: 'https://br.indeed.com/career/desenvolvedor-java-pleno/salaries' }
  ]
});

/* ─── Regras da rotina ────────────────────────── */

export const REGRAS_RECOLOCACAO = Object.freeze([
  'A rotina de recolocação usa a grade do perfil escolhido na Rotina diária: sono, academia, sábado e domingo continuam iguais. Domingo segue sendo descanso real, sem candidaturas.',
  'Ela não muda a fase atual, a sequência nem o progresso das 12 fases. O progresso dela (dias e entregáveis) fica separado e é salvo junto com o restante do plano.',
  'A duração muda a profundidade, não a velocidade: 13 semanas cobrem o núcleo; cada semana a mais acrescenta um aprofundamento na ordem de prioridade do mercado.',
  'No perfil Trabalho 09–18, os blocos das 13:00 e das 14:15 são janelas condicionais do expediente; o DSA fica na consolidação garantida das 23:15.',
  'As candidaturas começam na semana de Docker e CI/CD: 10 por semana, só em vagas com 60% ou mais de aderência.',
  'Nenhum entregável conta sem evidência: marque como feito e registre a URL (repositório, PR, deploy ou gravação).',
  'Semana de consolidação não recebe conteúdo novo: é revisão D30, refatoração, simulado e ajuste de rota.'
]);
