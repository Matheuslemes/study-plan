// Planejamento puro: conteúdo e distribuição da sequência, sem persistência nem DOM.
import { PC } from '../config.js';
import { weekDays, buildWeekPlan, PERFIS_ROTINA, PERFIL_PADRAO } from '../routine.js';

/*
 * A grade e o sono vêm de routine.js. Aqui ficam a cadência fixa da semana e os
 * textos; o conteúdo de cada dia vem de `cadencia`, em arquitetura.js.
 */
const SLOTS_DA_SEMANA = {
  segunda: { nome: 'Enquadrar', intencao: 'definir o problema, os requisitos e as alternativas' },
  terca: { nome: 'Modelar e decidir', intencao: 'transformar o problema em modelo e decisão registrada' },
  quarta: { nome: 'Experimentar e dados', intencao: 'examinar o mecanismo no concreto e decidir os dados' },
  quinta: { nome: 'Resiliência, segurança e operação', intencao: 'examinar falhas, ameaças e a operação da solução' },
  sexta: { nome: 'Decidir e defender', intencao: 'consolidar a decisão da semana e defendê-la em inglês' }
};

const TEXTOS_ARQUITETURA = {
  estudo: 'Ler a fonte, raciocinar sobre o DevCore e terminar com uma decisão que consiga explicar.',
  pratica: '',
  fechamentoManha: 'Salvar o artefato e anotar o próximo passo. A meta da manhã é uma decisão documentada e defensável, como "ADR comparando duas alternativas com o trade-off explícito", nunca "estudar arquitetura".',
  janelas: [
    ['continuar o artefato', 'continuar o artefato iniciado pela manhã.'],
    ['ler o módulo da academia', 'ler com calma o módulo indicado às 06:00, de preferência a fonte no original.'],
    ['aprofundar a evidência', 'aprofundar o experimento ou a evidência da semana.'],
    ['refinar e preparar a defesa', 'refinar o artefato e preparar a defesa da semana.']
  ],
  fechamentoTrabalho: 'Salvar o progresso e deixar a nota de retomada: que decisão estou tomando, que evidência falta e qual é o próximo passo.',
  recuperacao: 'Explicar a decisão do dia (o quê, por quê e qual trade-off) antes de abrir as anotações.',
  registro: 'Fazer commit do ADR, do diagrama ou da evidência no portfólio e registrar dificuldades.',
  preparacao: 'Escolher o artefato das 06:00, separar o módulo indicado e encerrar.'
};

const ROTULOS_APOIO = { db: 'Dados e invariantes', sec: 'Segurança aplicada', devops: 'Operação e entrega', java: 'Mecanismo em Java', git: 'Versionar evidências' };
const TIPO_DA_TRILHA = { ingles: 'english', pratica: 'project' };
const BLOCOS_SEM_ESTUDO = new Set(['sleep', 'break', 'cardio', 'strength', 'dinner', 'buffer', 'closing', 'review']);

function blocoDeObjetivo(phase, ref) {
  const [k, id] = ref.split(':');
  const indice = phase.objectives[k].findIndex(o => o.id === id);
  return { k, type: TIPO_DA_TRILHA[k] || k, topicos: [indice], topicIndex: indice, priority: 'Núcleo' };
}

function configDoDia(phase, chaveDoDia) {
  const slot = SLOTS_DA_SEMANA[chaveDoDia];
  const { temas, objetivos, modulos, apoio } = phase.cadencia[chaveDoDia];
  const estudo = blocoDeObjetivo(phase, objetivos[0]);
  const pitch = objetivos[1]?.startsWith('ingles:');
  const producao = objetivos[1]
    ? { ...blocoDeObjetivo(phase, objetivos[1]), block: `${slot.nome} · ${temas[1]}`, tracks: [temas[1]], d: pitch ? 'Apresentar a decisão da semana em inglês por cinco minutos, sem ler o documento.' : 'Estudar o tema e produzir o artefato que o critério observável pede. Tentar antes de consultar a referência.' }
    : { ...estudo, topicos: [], block: `${slot.nome} · produzir o artefato`, tracks: ['Artefato'], d: 'Transformar o estudo das 06:00 no artefato que o critério observável pede. Tentar antes de consultar a referência.' };
  return {
    textos: TEXTOS_ARQUITETURA,
    deep1: { ...estudo, block: `${slot.nome} · ${temas[0]}`, tracks: [temas[0]], modulos, d: `Hoje: ${slot.intencao}. Usar o objetivo abaixo e o módulo indicado.` },
    deep2: producao,
    complement: { block: ROTULOS_APOIO[apoio], k: apoio, type: apoio, tracks: [ROTULOS_APOIO[apoio]], d: 'Aplicar o conteúdo de apoio ao artefato do dia.' },
    extra: { block: 'Inglês técnico: ler a fonte no original', k: 'ingles', type: 'english', tracks: ['Inglês', 'Fonte original'], d: 'Ler a fonte do módulo no original e explicar em voz alta. DSA é opcional nesta sequência: use esta janela para ele só se estiver mirando entrevista.' },
    night: { block: 'Revisões D1/D7/D30', k: 'review', type: 'review', priority: 'Recall', tracks: ['D1', 'D7', 'D30'], d: 'Re-derivar uma decisão antiga, como CAP, Saga ou um trade-off, sem consultar. O que não sair volta para a fila.' },
    consolidacao: chaveDoDia === 'sexta'
      ? { block: 'Consolidação: ensaiar o pitch em inglês', k: 'ingles', type: 'review', priority: 'Núcleo', kind: 'consolidação', tracks: ['Inglês', 'Pitch'], d: 'Ensaiar o pitch de cinco minutos em inglês, gravar e revisar clareza, termos e argumentos.' }
      : { block: 'Consolidação: avançar a entrega da etapa', k: 'pratica', type: 'project', priority: 'Núcleo', kind: 'consolidação', tracks: ['Entrega', 'Evidência'], topicos: [0], seloRotulo: 'entrega que esta noite avança', d: 'Refinar o artefato de hoje dentro da entrega da etapa. Nada de artefato novo perto da meia-noite: se não terminar, registrar o próximo passo.' }
  };
}

const ajustesDoSabado = (phase) => ({
  '13:00 – 15:00': { block: 'Exercícios dos módulos da etapa', k: 'arquitetura', tracks: ['Exercícios', 'Módulos da etapa'], modulos: phase.modules, d: 'Resolver os exercícios dos módulos da academia ligados à etapa, aplicando ao DevCore. Tentar antes de consultar a referência.' },
  '15:30 – 17:30': { block: 'Consolidar a entrega da etapa', priority: 'Entrega', kind: 'entrega', tracks: ['Entrega', 'Evidência', 'Git'], d: `Fechar a entrega da semana. Critério: ${phase.proof}` },
  '20:30 – 21:30': { topicos: [], d: 'Um desenho completo em 45 minutos + 15 de revisão, usando o DevCore: requisitos, estimativa de capacidade, API, modelo de dados, gargalos e trade-offs. Ganha peso em A4 e A5.' }
});

function architectureRoutine(P, phaseId, mode, perfil) {
  const phase = P.find(p => p.id === phaseId) || P[0];
  const reduced = mode === 'minima' || mode === 'recuperacao';
  const configs = Object.fromEntries(Object.keys(SLOTS_DA_SEMANA).map(chave => [chave, configDoDia(phase, chave)]));
  const semana = buildWeekPlan(configs, perfil);
  const ajustes = ajustesDoSabado(phase);
  semana.sabado = semana.sabado.map(bloco => ({ ...bloco, ...ajustes[bloco.time] }));
  const plans = !reduced ? semana : Object.fromEntries(Object.entries(semana).map(([chave, blocos]) => [chave, blocos.map(bloco => (
    BLOCOS_SEM_ESTUDO.has(bloco.type) ? bloco : { ...bloco, priority: 'Sem conteúdo novo', d: `Somente revisar e concluir trabalho já iniciado. ${bloco.d}` }
  ))]));

  const base = {
    priority: reduced ? 'Sem conteúdo novo' : 'Conteúdo da etapa ativa',
    practice: reduced ? 'Somente revisar e concluir trabalho já iniciado. Sem conteúdo novo.' : 'Aplicar ao DevCore de pedidos, pagamentos e conciliação.',
    review: 'Recuperar decisões sem consulta e conferir evidências e revisões D1/D7/D30.',
    connection: 'Um produto, seis etapas e decisões testáveis.',
    strategy: 'Registrar hipótese, alternativa, resultado e condição de revisão.'
  };
  const focus = {};
  weekDays.forEach(({ key, label }) => {
    const plano = phase.cadencia[key];
    if (plano) focus[key] = { ...base, day: label, focus: `${SLOTS_DA_SEMANA[key].nome}: ${plano.temas.join(' e ')}`, k: plano.objetivos[0].split(':')[0], tracks: plano.temas };
  });
  focus.sabado = { ...base, day: 'Sábado', focus: `Entrega da etapa: ${phase.lab.entrega}`, k: 'pratica', tracks: ['Exercícios', 'Entrega', 'System Design'] };
  focus.domingo = { ...base, day: 'Domingo', focus: 'Descanso e revisão leve', k: 'break', priority: 'Descanso', tracks: ['Revisão leve', 'Planejamento', 'Descanso'], strategy: 'No máximo 1h de revisão leve, às 13:00. Não transferir atrasos para o descanso.' };
  return { focus, plans };
}


export function createArchitecturePlan(sequence, { hours, phaseId, mode, perfil = PERFIL_PADRAO }) {
  let P, weeklyFocusByDay, dailyPlansByDay, monthlyCycle, MODOS_ROTINA, syncCycles, rules, awsMilestones, syncDependencies, syncCheckpoints, DEPENDENCIAS_CURRICULO, TRILHAS_TRANSVERSAIS, SIMULADOS_ENTREVISTA, projetos, heroTagsData, tracks;
  const weeks = Math.ceil(sequence.hours / hours);
  P = sequence.phases.map(p => ({ ...p, w: `Sem ${Math.floor((p.id - 1) * 80 / hours) + 1}–${Math.ceil(p.id * 80 / hours)} · estimativa` }));
  const schedule = architectureRoutine(P, phaseId, mode, perfil);
  weeklyFocusByDay = schedule.focus; dailyPlansByDay = schedule.plans;
  MODOS_ROTINA = {
    ideal: { nome: 'Ideal', carga: `${hours}h`, quando: 'Semana normal', regra: 'Executar estudo, experimento e defesa da etapa.', blocos: ['Arquitetura', 'DevCore', 'Revisões', 'Inglês'] },
    minima: { nome: 'Mínima', carga: `${Math.min(hours, 6)}h`, quando: 'Semana apertada', regra: 'Sem conteúdo novo. Revisar uma decisão e concluir um pequeno experimento.', blocos: ['ADR', 'Revisões vencidas', 'Experimento'] },
    recuperacao: { nome: 'Recuperação', carga: `${Math.min(hours, 3)}h`, quando: 'Retomada gradual', regra: 'Sem cobrança de avanço. Reduzir escopo e preservar descanso.', blocos: ['Revisão leve', 'Planejamento'] }
  };
  monthlyCycle = ['Problema e alternativas', 'Modelagem e experimento', 'Implementação e validação', 'Consolidação e defesa'].map((focus, i) => ({ week: `Semana ${i + 1} do ciclo de referência`, mode: i === 3 ? 'Consolidação' : 'Execução', k: 'arquitetura', newContent: i !== 3, focus, detail: 'Ajuste o calendário à carga disponível. Avance pela evidência, não pela passagem de semanas.', checklist: [i === 3 ? 'Revisar, corrigir e apresentar; sem conteúdo novo' : 'Aplicar ao DevCore e registrar o resultado'] }));
  syncCycles = P.map(p => ({ title: `${p.l} — ${p.t}`, period: p.w, phases: p.l, color: PC[p.id - 1], goal: p.arquitetura[0], tracks: ['Arquitetura', 'DevCore', 'Inglês'], output: p.lab.entrega }));
  DEPENDENCIAS_CURRICULO = P.map((p, i) => ({ id: p.slug, fases: p.l, titulo: p.t, itens: [p.lab.entrega], desbloqueia: P[i + 1]?.slug || null }));
  TRILHAS_TRANSVERSAIS = ['Git', 'Inglês', 'Documentação', 'Segurança', 'Revisões'];
  syncDependencies = P.map(p => ({ k: 'arquitetura', title: p.l, text: p.lab.dependeDe ? `Usar a entrega da etapa anterior. ${p.lab.entrega}` : 'Diagnóstico de API, dados, entrega e segurança antes do primeiro experimento.' }));
  syncCheckpoints = P.map(p => ({ k: 'pratica', title: p.l, text: p.proof }));
  awsMilestones = [{ w: 'A5 · após os fundamentos', c: 'AWS aplicada; certificações opcionais, sem prazo imposto', col: 'var(--track-aws)' }];
  rules = [
    { k: 'arquitetura', r: 'Comparar alternativas e vincular decisões a requisitos mensuráveis.' },
    { k: 'pratica', r: 'Validar os entregáveis da etapa com evidência antes de avançar. D30 continua na fila de revisão.' },
    { k: 'java', r: 'Implementar os pontos de incerteza; manter o monólito modular até haver motivo demonstrável para distribuir.' },
    { k: 'ingles', r: 'Apresentar decisões em linguagem técnica e de negócio, incluindo risco, custo e prazo.' },
    { k: 'review', r: 'Preservar sono, pausas e domingo livre. Ajustar o horizonte quando a carga mudar.' }
  ];
  SIMULADOS_ENTREVISTA = P.map(p => ({ id: `arquitetura-${p.slug}`, fase: p.id, titulo: `Defesa: ${p.t}`, tipo: 'Revisão arquitetural', duracao: 45, roteiro: ['Apresentar contexto e requisitos.', 'Comparar alternativas e defender a decisão.', 'Demonstrar evidência e responder a um cenário de falha.'], criterio: p.proof }));
  projetos = P.map(p => ({ fase: p.id, faseLabel: p.t, track: 'arquitetura', trackLabel: 'Arquitetura', titulo: `DevCore · ${p.l}`, resumo: p.lab.entrega, descricao: 'Evolução do mesmo produto de pedidos, pagamentos e conciliação.', entregaveis: [p.lab.entrega], evidencia: p.proof, competencias: ['Decisão', 'Implementação', 'Validação'] }));
  heroTagsData = [{ label: '6 etapas', cls: 'htag-g' }, { label: `~${weeks} semanas`, cls: 'htag-b' }, { label: PERFIS_ROTINA[perfil].rotuloCarga, cls: 'htag-b' }, { label: '480h estimadas', cls: 'htag-b' }, { label: 'sono 4h30 de seg a sex', cls: 'htag-p' }, { label: 'Estudo no fim de semana: 13h à 01h', cls: 'htag-p' }];
  tracks = [{ key: 'arquitetura', label: 'Arquitetura e decisões', h: '35%', suffix: '' }, { key: 'db', label: 'Integração e dados', h: '25%', suffix: '' }, { key: 'aws', label: 'Cloud e operação', h: '20%', suffix: '' }, { key: 'java', label: 'Java específico', h: '10%', suffix: '' }, { key: 'ingles', label: 'Comunicação', h: '10%', suffix: '' }];
  return { P, weeklyFocusByDay, dailyPlansByDay, monthlyCycle, MODOS_ROTINA, syncCycles, rules, awsMilestones, syncDependencies, syncCheckpoints, DEPENDENCIAS_CURRICULO, TRILHAS_TRANSVERSAIS, SIMULADOS_ENTREVISTA, projetos, heroTagsData, tracks };
}
