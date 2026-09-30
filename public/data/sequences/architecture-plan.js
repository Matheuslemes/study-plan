// Planejamento puro: conteúdo e distribuição da sequência, sem persistência nem DOM.
import { trilhaAtiva } from '../phases.js';
import { PC } from '../config.js';
import { weekDays } from '../routine.js';

function architectureRoutine(P, hours, phaseId, mode) {
  const phase = P.find(p => p.id === phaseId) || P[0];
  const reduced = mode === 'minima' || mode === 'recuperacao';
  if (mode === 'minima') hours = Math.min(hours, 6);
  if (mode === 'recuperacao') hours = Math.min(hours, 3);
  const names = ['Requisitos e alternativas', 'Domínio, contratos e fluxos', 'Experimento executável', 'Falhas, segurança e operação', 'Decisão e apresentação', 'Consolidação e revisões', 'Descanso'];
  const keys = ['arquitetura', 'arquitetura', 'java', 'devops', 'arquitetura', 'pratica', 'break'];
  if (reduced) for (let i = 0; i < 6; i++) names[i] = 'Revisar decisão e consolidar experimento existente';
  const focus = {}, plans = {};
  // Orçamento semanal, sem impor horários de trabalho ou reduzir sono/descanso.
  const totalMinutes = Math.round(hours * 60);
  let assigned = 0;
  weekDays.forEach((day, i) => {
    focus[day.key] = { day: day.label, focus: names[i], k: keys[i], priority: i === 6 ? 'Descanso' : reduced ? 'Sem conteúdo novo' : 'Conteúdo da etapa ativa', tracks: [names[i]], practice: reduced ? 'Somente revisar e concluir trabalho já iniciado. Sem conteúdo novo.' : 'Aplicar ao DevCore de pedidos, pagamentos e conciliação.', review: 'Recuperar decisões sem consulta e conferir evidências e revisões D1/D7/D30.', connection: 'Um produto, seis etapas e decisões testáveis.', strategy: i === 6 ? 'Domingo livre. Não transferir atrasos para o descanso.' : 'Registrar hipótese, alternativa, resultado e condição de revisão.' };
    if (i === 6) { plans[day.key] = [{ time: 'Domingo', dur: 'Livre', block: 'Descanso', k: 'break', type: 'break', kind: 'descanso', d: 'Sem conteúdo novo. Preserve sono, treino e vida pessoal.', tracks: [] }]; return; }
    const minutes = i === 5 ? totalMinutes - assigned : Math.floor(totalMinutes / 6);
    assigned += minutes;
    const review = Math.round(minutes * .15), english = Math.round(minutes * .1), support = Math.round(minutes * .2), main = minutes - review - english - support;
    const primaryKey = trilhaAtiva(phase, keys[i]) ? keys[i] : 'pratica';
    const preferredSupport = ['db', 'sec', 'db', 'sec', 'aws', 'arquitetura'][i];
    const supportKey = trilhaAtiva(phase, preferredSupport) ? preferredSupport : 'git';
    const labels = { db: 'Dados e invariantes', sec: 'Segurança aplicada', aws: 'Arquitetura AWS', git: 'Versionar evidências', arquitetura: 'Revisar decisões' };
    plans[day.key] = [
      { time: 'Bloco principal', dur: `${main}min`, minutes: main, block: names[i], k: primaryKey, topicIndex: i === 1 ? 1 : i === 4 ? 2 : 0, type: primaryKey, kind: 'foco profundo', tracks: [names[i]], d: 'Use o objetivo da etapa abaixo. Divida o bloco com pausas e registre evidência reproduzível.' },
      { time: 'Complemento', dur: `${support}min`, minutes: support, block: labels[supportKey], k: supportKey, type: supportKey, kind: 'complementar', tracks: [labels[supportKey]], d: 'Aplicar o conteúdo de apoio ao mesmo experimento da etapa.' },
      { time: 'Comunicação', dur: `${english}min`, minutes: english, block: 'Apresentar a decisão em inglês', k: 'ingles', type: 'english', kind: 'transversal', tracks: ['Inglês'], d: 'Explique contexto, decisão e trade-off sem ler o documento.' },
      { time: 'Revisões', dur: `${review}min`, minutes: review, block: 'Revisão e checkpoint', k: 'review', type: 'review', kind: 'revisão', tracks: ['D1', 'D7', 'D30'], d: 'Conclua revisões vencidas e registre o próximo experimento. Sono e pausas ficam fora deste orçamento técnico.' }
    ];
  });
  return { focus, plans };
}


export function createArchitecturePlan(sequence, { hours, phaseId, mode }) {
  let P, weeklyFocusByDay, dailyPlansByDay, monthlyCycle, MODOS_ROTINA, syncCycles, rules, awsMilestones, syncDependencies, syncCheckpoints, DEPENDENCIAS_CURRICULO, TRILHAS_TRANSVERSAIS, SIMULADOS_ENTREVISTA, projetos, heroTagsData, tracks;
  const weeks = Math.ceil(sequence.hours / hours);
  P = sequence.phases.map(p => ({ ...p, w: `Sem ${Math.floor((p.id - 1) * 80 / hours) + 1}–${Math.ceil(p.id * 80 / hours)} · estimativa` }));
  const schedule = architectureRoutine(P, hours, phaseId, mode);
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
  heroTagsData = [{ label: '6 etapas', cls: 'htag-g' }, { label: `~${weeks} semanas`, cls: 'htag-b' }, { label: `${hours}h/semana`, cls: 'htag-b' }, { label: '480h estimadas', cls: 'htag-b' }, { label: 'Domingo livre', cls: 'htag-p' }];
  tracks = [{ key: 'arquitetura', label: 'Arquitetura e decisões', h: '35%', suffix: '' }, { key: 'db', label: 'Integração e dados', h: '25%', suffix: '' }, { key: 'aws', label: 'Cloud e operação', h: '20%', suffix: '' }, { key: 'java', label: 'Java específico', h: '10%', suffix: '' }, { key: 'ingles', label: 'Comunicação', h: '10%', suffix: '' }];
  return { P, weeklyFocusByDay, dailyPlansByDay, monthlyCycle, MODOS_ROTINA, syncCycles, rules, awsMilestones, syncDependencies, syncCheckpoints, DEPENDENCIAS_CURRICULO, TRILHAS_TRANSVERSAIS, SIMULADOS_ENTREVISTA, projetos, heroTagsData, tracks };
}
