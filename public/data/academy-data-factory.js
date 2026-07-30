/*
 * Fábrica de schema para Academias criadas diretamente no sistema unificado.
 * A estrutura é compartilhada; títulos, módulos, evidências e bibliografia
 * continuam sendo dados específicos de cada trilha.
 */

const ACTION_PREFIX = /^(aplicar|analisar|avaliar|calcular|comparar|comunicar|construir|criar|demonstrar|diagnosticar|documentar|explicar|implementar|modelar|operar|planejar|produzir|projetar|resolver|validar|verificar)\b/i;

function observableObjective(title) {
  const normalized = String(title).trim();
  if (ACTION_PREFIX.test(normalized)) return normalized;
  return `Aplicar ${normalized.toLocaleLowerCase('pt-BR')} em um cenário verificável e justificar a decisão com evidência.`;
}

function buildParts(partSpecs, moduleSpecs) {
  const total = partSpecs.length + 1;
  const parts = {};
  partSpecs.forEach((part, index) => {
    const count = moduleSpecs.filter((module) => module.part === part.id).length;
    parts[part.id] = {
      index: `${index + 1}/${total}`,
      range: `${count} módulos`,
      page: `${part.id}.html`,
      navLabel: part.navLabel || part.title,
      title: part.title,
      subtitle: part.subtitle,
      prerequisites: part.prerequisites || [
        'Concluir a parte anterior ou demonstrar conhecimento equivalente.',
        'Manter um repositório de evidências com histórico de revisão.'
      ],
      objectives: (part.objectives || [
        `Aplicar ${part.title.toLocaleLowerCase('pt-BR')} em uma entrega reproduzível.`,
        'Explicar decisões, alternativas descartadas e risco residual.'
      ]).map(observableObjective)
    };
  });
  parts.avaliacao = {
    index: `${total}/${total}`,
    range: 'Evidência e biblioteca',
    page: 'avaliacao.html',
    navLabel: 'Avaliação e biblioteca',
    title: 'Evidência, projetos e conclusão',
    subtitle: 'Defender decisões, revisar o artefato e comprovar domínio após D30.',
    prerequisites: [
      'Concluir todos os módulos com pelo menos uma evidência revisável.',
      'Reunir decisões, testes e retrospectivas no mesmo repositório.'
    ],
    objectives: [
      'Defender o produto evolutivo com critérios explícitos.',
      'Validar conhecimento por prática, revisão de código e revisão de arquitetura.',
      'Registrar a revisão D30 antes de marcar qualquer tópico como Dominado.'
    ]
  };
  return parts;
}

function buildModules(moduleSpecs) {
  return moduleSpecs.map((module, index) => {
    const number = index + 1;
    const objective = observableObjective(module.objective || module.title);
    return {
      id: module.id || `modulo-${String(number).padStart(2, '0')}`,
      number,
      part: module.part,
      level: module.level || (number <= 5 ? 'Fundamentos' : number <= 12 ? 'Aplicação' : 'Produção'),
      title: module.title,
      objective,
      problem: module.problem || `Decisões sobre ${module.title.toLocaleLowerCase('pt-BR')} falham quando não há critério observável nem registro da alternativa descartada.`,
      prerequisites: module.prerequisites || ['Conhecer os conceitos da parte atual.', 'Conseguir registrar mudanças em Git.'],
      concepts: module.concepts || [module.title, 'Critério de decisão', 'Evidência reproduzível'],
      useWhen: module.useWhen || [`Use quando ${module.title.toLocaleLowerCase('pt-BR')} alterar custo, risco ou qualidade do resultado.`],
      avoidWhen: module.avoidWhen || ['Não use uma técnica por hábito sem comparar restrições e alternativas.'],
      tradeoffs: module.tradeoffs || {
        ganho: 'Torna a decisão explícita, revisável e repetível.',
        custo: 'Exige instrumentação, documentação curta e revisão.'
      },
      production: module.production || 'A entrega deve incluir resultado, limite conhecido, risco residual e procedimento de verificação.',
      risks: module.risks || ['Confundir conclusão de leitura com domínio.', 'Guardar resultado sem contexto ou reprodução.'],
      checklist: module.checklist || [
        'Executar a prática em ambiente limpo.',
        'Registrar o resultado antes/depois.',
        'Anexar URL HTTP(S) de commit, PR ou laboratório.',
        'Classificar a revisão como conceito, código ou arquitetura.'
      ],
      exercises: module.exercises || [{
        level: module.level || 'Aplicação',
        title: `Produzir evidência de ${module.title}`,
        task: objective,
        acceptance: 'Outra pessoa reproduz o resultado apenas com o repositório e as instruções.',
        evidence: 'URL de commit, PR ou laboratório com resultado verificável.'
      }],
      interview: module.interview || [{
        level: module.level || 'Aplicação',
        question: `Como você decide e valida ${module.title.toLocaleLowerCase('pt-BR')}?`,
        expected: 'Comparar alternativas, explicitar restrições e apontar evidência do resultado.'
      }],
      challenge: module.challenge || `Repetir a prática com uma restrição adicional e registrar por que a decisão mudou ou permaneceu.`,
      summary: module.summary || `Domínio de ${module.title.toLocaleLowerCase('pt-BR')} exige aplicação, evidência revisável e retenção após D30.`,
      // Campos opcionais do schema §8.3 repassados quando presentes no spec:
      ...(module.internals ? { internals: module.internals } : {}),
      ...(module.books ? { books: module.books } : {}),
      ...(module.complements ? { complements: module.complements } : {})
    };
  });
}

function buildAssessment(label, modules, projectNoun = 'artefato') {
  return {
    levels: [
      {
        level: 'Fundamentos',
        expected: 'Executa o fluxo guiado e explica o vocabulário essencial.',
        evidence: 'Laboratório reproduzível com notas de decisão.',
        redFlags: ['Somente leitura', 'Resultado sem evidência']
      },
      {
        level: 'Aplicação',
        expected: 'Resolve um caso sem roteiro e compara alternativas.',
        evidence: 'PR revisado com critérios de aceite e teste.',
        redFlags: ['Decisão por preferência', 'Ausência de teste']
      },
      {
        level: 'Produção',
        expected: 'Opera o resultado, diagnostica falhas e reduz risco residual.',
        evidence: 'Runbook, métricas e retrospectiva vinculados ao produto.',
        redFlags: ['Sem rollback', 'Sem observabilidade']
      },
      {
        level: 'Domínio',
        expected: 'Defende arquitetura, ensina o raciocínio e mantém o aprendizado.',
        evidence: 'Revisão D30 aprovada com nova execução ou explicação.',
        redFlags: ['Dominado antes de D30', 'Evidência inacessível']
      }
    ],
    caseStudies: [
      {
        id: 'caso-decisao',
        title: `Decisão incompleta em ${label}`,
        scenario: `Uma entrega de ${label} funciona no cenário feliz, mas não registra restrições, alternativa descartada nem forma de reversão.`,
        constraints: ['Prazo curto', 'Revisão assíncrona', 'Evidência deve permanecer acessível'],
        decisions: ['Definir critério observável', 'Comparar duas alternativas', 'Registrar risco residual'],
        deliverables: ['ADR curto', 'Teste reproduzível', 'Plano de revisão D30']
      },
      {
        id: 'caso-falha',
        title: 'Falha após mudança de contexto',
        scenario: 'O resultado deixa de ser válido quando volume, equipe ou restrições mudam.',
        investigation: ['Reproduzir a condição', 'Separar sintoma de causa', 'Medir antes e depois'],
        correction: ['Atualizar o artefato', 'Adicionar teste de regressão'],
        prevention: ['Definir limite operacional', 'Agendar revisão por tipo']
      },
      {
        id: 'caso-defesa',
        title: 'Defesa técnica para públicos diferentes',
        scenario: 'A mesma decisão precisa ser explicada para revisão técnica e para impacto de produto.',
        decisions: ['Adequar o vocabulário', 'Preservar fatos e incertezas'],
        deliverables: ['Resumo executivo', 'Anexo técnico', 'Registro de perguntas abertas']
      }
    ],
    projects: [
      {
        id: 'entrega-01',
        title: `Baseline do ${projectNoun}`,
        objective: 'Construir a menor versão útil com critérios de aceite e histórico.',
        stages: ['Mapear o problema', 'Executar a primeira versão', 'Registrar evidência'],
        acceptance: ['Reprodução em ambiente limpo', 'URL revisável', 'Limites documentados']
      },
      {
        id: 'entrega-02',
        title: `Evolução orientada a risco do ${projectNoun}`,
        evolves: 'O mesmo artefato da entrega 1.',
        objective: 'Adicionar um requisito real e tratar uma falha observada.',
        stages: ['Medir baseline', 'Implementar mudança', 'Executar regressão'],
        acceptance: ['Comparação antes/depois', 'Rollback documentado', 'Revisão de código ou conteúdo']
      },
      {
        id: 'entrega-03',
        title: `Operação e defesa do ${projectNoun}`,
        evolves: 'O mesmo artefato das entregas 1 e 2.',
        objective: 'Operar, explicar e defender o resultado sob uma restrição adversa.',
        stages: ['Simular incidente', 'Aplicar correção', 'Conduzir revisão D30'],
        acceptance: ['Runbook ou guia de uso', 'Retrospectiva', 'Revisão D30 registrada'],
        seniorSignal: 'A pessoa consegue explicar por que a solução serve, onde falha e como seria substituída.'
      }
    ],
    completion: [
      `Concluir os ${modules.length} módulos com prática executada.`,
      'Anexar ao menos uma URL HTTP(S) de evidência por módulo validado.',
      'Entregar as três versões encadeadas do mesmo produto.',
      'Aprovar revisão de conceito, revisão de código/conteúdo e revisão de arquitetura.',
      'Responder aos casos com decisões, alternativas e risco residual.',
      'Não marcar Dominado antes da revisão D30 registrada.'
    ]
  };
}

export function createAcademyData({
  title,
  baseline,
  partSpecs,
  moduleSpecs,
  books = {},
  projectNoun
}) {
  const modules = buildModules(moduleSpecs);
  return {
    academy: {
      title,
      baseline,
      parts: buildParts(partSpecs, moduleSpecs)
    },
    modules,
    books,
    assessment: buildAssessment(title, modules, projectNoun)
  };
}
