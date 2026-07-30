/* ═══════════════════════════════════════════════
   ROUTINE — rotina diária e semanal (STUDY-019/021/023)

   Blocos são SLOTS: o conteúdo vem da fase ativa.
   Sono 7h30 fixo · zero estudo 01:00–05:00 ·
   máx. 2 domínios técnicos/dia · domingo de descanso.

   Fonte única de verdade — não duplicar estes dados
   em nenhuma página. Importe deste módulo.
═══════════════════════════════════════════════ */

export const weekDays = [
  { key: "segunda", label: "Segunda", short: "SEG" },
  { key: "terca", label: "Terça", short: "TER" },
  { key: "quarta", label: "Quarta", short: "QUA" },
  { key: "quinta", label: "Quinta", short: "QUI" },
  { key: "sexta", label: "Sexta", short: "SEX" },
  { key: "sabado", label: "Sábado", short: "SÁB" },
  { key: "domingo", label: "Domingo", short: "DOM" }
];

/*
 * Protocolo de carga (DIDATIC-022).
 *
 * O modo altera a expectativa da semana, não remove sono, treino ou descanso.
 * Mínima e Recuperação proíbem conteúdo novo: a meta é preservar continuidade.
 */
export const MODOS_ROTINA = {
  ideal: {
    nome: 'Ideal',
    carga: '38h',
    quando: 'Semana normal',
    regra: 'Executar a rotina completa, o lab encadeado e as revisões.',
    blocos: ['Java e domínio da fase', 'DSA', 'Trilhas complementares', 'Lab DevCore', 'D1/D7/D30']
  },
  minima: {
    nome: 'Mínima',
    carga: '12h',
    quando: 'Trabalho pesado, prova ou viagem',
    regra: 'Sem conteúdo novo. Preservar Java, DSA e apenas revisões vencidas.',
    blocos: ['Java 2×2h', 'DSA 3×40min', 'D1/D7', 'Fechamento e sono']
  },
  recuperacao: {
    nome: 'Recuperação',
    carga: '5h',
    quando: 'Doença, burnout ou atraso acumulado',
    regra: 'Zero cobrança de avanço. Limpar a fila e concluir um lab pequeno.',
    blocos: ['Revisões vencidas', '1 lab pequeno', 'Planejamento leve', 'Recuperação física']
  }
};

export const weeklyFocusByDay = {
  segunda: {
    day: "Segunda-feira",
    focus: "Backend Java/Spring — domínio principal da fase",
    priority: "45% — núcleo do plano",
    k: "java",
    tracks: ["Java", "Spring Boot", "REST", "JPA", "Banco/SQL", "DSA", "Git"],
    practice: "Implementar a entrega principal da semana no domínio ativo da fase: caso de uso completo, do contrato à persistência.",
    review: "Validar contrato, camadas, tratamento de erro, commit semântico e teste do comportamento central.",
    connection: "A segunda abre a semana no domínio de maior peso do plano. O conteúdo exato vem da fase corrente — na Fase 2 é Spring/REST, na Fase 7 é refatoração hexagonal.",
    strategy: "Dois blocos profundos no mesmo domínio, sem troca de contexto. Banco entra como complemento porque é o par natural do backend."
  },
  terca: {
    day: "Terça-feira",
    focus: "Backend Java/Spring — testes e refino",
    priority: "45% — núcleo do plano",
    k: "java",
    tracks: ["Testes", "JUnit", "Mockito", "Refatoração", "Arquitetura", "Inglês"],
    practice: "Cobrir com testes o que foi construído na segunda e refatorar o que ficou confuso. Arquitetura entra como leitura aplicada ao próprio código.",
    review: "Checar se o teste falha quando deve, se cobre regra de negócio e não implementação, e se a refatoração manteve o comportamento.",
    connection: "Construir e testar em dias consecutivos no mesmo domínio consolida muito mais que alternar assuntos.",
    strategy: "Testes deixam de ser apêndice e ganham um dia próprio. Inglês entra no bloco curto, aplicado ao que foi escrito."
  },
  quarta: {
    day: "Quarta-feira",
    focus: "Banco de dados e performance — com ambiente como complemento",
    priority: "Principal: Banco/SQL · Complementar: Docker/CI-CD",
    k: "db",
    tracks: ["PostgreSQL", "SQL", "Modelagem", "EXPLAIN", "JPA", "Docker", "CI/CD", "DSA"],
    practice: "Dois blocos profundos em dados (modelar, consultar, medir) e um bloco complementar mantendo o ambiente reproduzível.",
    review: "Validar schema, migrations, rollback, índices justificados por medição e pipeline verde.",
    connection: "Banco é a base física do backend; o ambiente é o que permite executá-lo de forma confiável. Na Fase 5 o dia inteiro pende para performance.",
    strategy: "STUDY-019: este dia tinha três domínios (banco, DevOps e Java) e foi reduzido a dois. Um dia com três assuntos não é um dia temático — é a rotina antiga disfarçada."
  },
  quinta: {
    day: "Quinta-feira",
    focus: "Backend Java/Spring — integração e segurança",
    priority: "45% núcleo + segurança transversal",
    k: "java",
    tracks: ["Integração", "API", "Spring Security", "OWASP", "Inglês"],
    practice: "Integrar o que foi construído na semana e aplicar o checklist de segurança do endpoint ou fluxo entregue.",
    review: "Checar autenticação, autorização, validação de entrada, secrets e ausência de vazamento em log e erro.",
    connection: "Segurança é transversal desde a Fase 1 e ganha módulo forte na Fase 4 — mas nunca deixa de aparecer semanalmente.",
    strategy: "Segurança aplicada ao próprio código toda semana retém muito mais que uma fase isolada no mês 25."
  },
  sexta: {
    day: "Sexta-feira",
    focus: "Operação: cloud, deploy, observabilidade e arquitetura",
    priority: "12% Cloud/DevOps + 9% Arquitetura",
    k: "devops",
    tracks: ["Docker", "CI/CD", "Deploy", "Logs", "Métricas", "Arquitetura", "DSA"],
    practice: "Rodar, publicar, observar e diagnosticar. Arquitetura entra como decisão documentada em ADR sobre o que foi feito na semana.",
    review: "Checar execução limpa, variáveis, health check, logs úteis, rollback e ADR escrito.",
    connection: "Saber operar o próprio software é o que separa quem escreve código de quem entrega sistema.",
    strategy: "Sexta fecha o ciclo técnico da semana: o que foi construído precisa rodar e ser observável."
  },
  sabado: {
    day: "Sábado",
    focus: "Prática livre — exercícios e labs da fase",
    priority: "Aplicação: onde a teoria vira habilidade",
    k: "pratica",
    tracks: ["Exercícios", "Labs", "System Design", "Git"],
    practice: "4h contínuas resolvendo os exercícios e labs da fase corrente. Cada fase tem sua lista própria: exercícios de Java na Fase 1, lab de Docker e CI na Fase 3, lab de Terraform na Fase 9.",
    review: "O exercício foi resolvido sem consultar solução pronta? O lab roda do zero em outra máquina?",
    connection: "O exercício prova a habilidade da semana; o lab evolui a mesma release do DevCore iniciada na fase anterior.",
    strategy: "Um bloco longo e contínuo produz mais que quatro blocos picados. Sábado é o dia de aplicar sem interrupção o que foi estudado na semana."
  },
  domingo: {
    day: "Domingo",
    focus: "Descanso real — recuperação e revisão leve",
    priority: "Máx. 1h de revisão. Sem conteúdo novo.",
    k: "review",
    tracks: ["Revisão D7/D30", "Planejamento", "Descanso"],
    practice: "1h de revisão ativa (D7/D30) pela manhã. Depois disso, o dia é livre — sem estudo, sem projeto, sem conteúdo novo.",
    review: "Reproduzir de memória o que foi estudado há 7 e 30 dias. O que não sair sem consulta volta para a fila.",
    connection: "Descanso não é ausência de progresso: é a condição para que as outras 6 semanas do mês existam.",
    strategy: "STUDY-018 — um plano de 156 semanas só sobrevive com folga semanal real. Domingo produtivo é dívida de energia cobrada na terça."
  }
};

/* ─── Construtores de grade ─────────────────────
   buildDailyPlan  → segunda a sexta (~6h30 de foco)
   buildSaturday   → prática: exercícios e labs da fase (~5h)
   buildSunday     → descanso (máx. 1h)
───────────────────────────────────────────────── */
export function buildDailyPlan(cfg) {
  return [
    { time: "23:00 – 06:30", dur: "7h30", block: "Sono — bloco fixo inegociável", k: "sleep", type: "sleep", priority: "FIXO", kind: "sono", tracks: ["Sono", "Recuperação", "Consolidação de memória"], d: "Sete horas e meia de sono. É durante o sono que o estudo do dia vira memória de longo prazo — sem este bloco, as outras horas rendem uma fração. Não é tempo perdido: é parte do método." },
    { time: "06:30 – 07:15", dur: "45min", block: "Cardio leve, mobilidade e higiene", k: "cardio", type: "cardio", priority: "FIXO", kind: "ativação", tracks: ["Cardio", "Mobilidade", "Higiene"], d: "Cardio em intensidade controlada, mobilidade, banho e hidratação para ativar o corpo antes do primeiro bloco profundo." },
    { time: "07:15 – 07:45", dur: "30min", block: "Café da manhã e definição do foco do dia", k: "break", type: "break", priority: "FIXO", kind: "alimentação", tracks: ["Café", "Planejamento", "Prioridade"], d: "Café da manhã e definição objetiva da entrega do dia: uma frase escrita sobre o que precisa estar pronto às 15h." },
    { time: "07:45 – 09:45", dur: "2h", kind: "foco profundo", intensity: "alta", ...cfg.deep1 },
    { time: "09:45 – 10:15", dur: "30min", block: "Pausa sem tela", k: "break", type: "break", priority: "FIXO", kind: "pausa", tracks: ["Pausa", "Alongamento", "Água"], d: "Pausa real sem tela, alongamento, água e caminhada curta. Não substituir por vídeo ou rede social." },
    { time: "10:15 – 11:45", dur: "1h30", kind: "foco profundo", intensity: "alta", ...cfg.deep2 },
    { time: "11:45 – 13:00", dur: "1h15", block: "Almoço e descanso real", k: "break", type: "break", priority: "FIXO", kind: "pausa real", tracks: ["Almoço", "Descanso", "Sem tela"], d: "Alimentação e recuperação visual. Este bloco não deve virar videoaula nem revisão pesada." },
    { time: "13:00 – 14:00", dur: "1h", kind: "complementar", intensity: "média", ...cfg.complement },
    { time: "14:00 – 14:20", dur: "20min", block: "Pausa curta", k: "break", type: "break", priority: "FIXO", kind: "pausa", tracks: ["Descanso visual", "Água"], d: "Pausa curta antes do último bloco técnico do dia." },
    { time: "14:20 – 15:00", dur: "40min", kind: "transversal", intensity: "média", ...cfg.extra },
    { time: "15:00 – 18:00", dur: "3h", block: "Vida, trabalho, deslocamento e folga", k: "break", type: "break", priority: "FIXO", kind: "vida", tracks: ["Trabalho", "Vida pessoal", "Deslocamento"], d: "Janela livre para trabalho, compromissos, família e descanso. Um plano de 36 meses precisa caber dentro de uma vida real." },
    { time: "18:00 – 19:30", dur: "1h30", block: "Musculação", k: "treino", type: "strength", priority: "FIXO", kind: "musculação", tracks: ["Treino", "Força", "Saúde"], d: "Treino de musculação preservado como bloco fixo: saúde, energia e sustentabilidade da rotina de 156 semanas." },
    { time: "19:30 – 21:00", dur: "1h30", block: "Banho, jantar e descompressão", k: "dinner", type: "dinner", priority: "FIXO", kind: "recuperação", tracks: ["Banho", "Jantar", "Descanso"], d: "Recuperação pós-treino, jantar e descompressão. Não substituir por estudo pesado." },
    { time: "21:00 – 22:15", dur: "1h15", kind: "revisão ativa", intensity: "média", ...cfg.night },
    { time: "22:15 – 23:00", dur: "45min", block: "Fechamento: commit, notas e plano do dia seguinte", k: "closing", type: "closing", priority: "FIXO", kind: "fechamento", tracks: ["Git", "Notas", "D0", "Planejamento"], d: "Commit do dia, registro das 3 perguntas D0 sobre o que foi estudado, atualização do checklist e definição do foco de amanhã. Depois disso, tela desligada." }
  ];
}

export function buildSaturday() {
  return [
    { time: "23:00 – 07:00", dur: "8h", block: "Sono — recuperação de fim de semana", k: "sleep", type: "sleep", priority: "FIXO", kind: "sono", tracks: ["Sono", "Recuperação"], d: "Oito horas de sono. O sábado tem o bloco de prática mais longo da semana e exige recuperação completa." },
    { time: "07:00 – 08:00", dur: "1h", block: "Café, mobilidade e escolha dos exercícios do dia", k: "break", type: "break", priority: "FIXO", kind: "preparação", tracks: ["Café", "Mobilidade", "Backlog"], d: "Início sem pressa: café, mobilidade e escolha dos exercícios e labs da fase que serão resolvidos hoje." },
    { time: "08:00 – 10:00", dur: "2h", block: "Prática — exercícios da fase", k: "pratica", type: "project", priority: "Prática", kind: "exercícios", tracks: ["Exercícios", "Código", "Git"], d: "Primeiro bloco contínuo de prática: resolver os exercícios da fase corrente aplicando o que foi estudado de segunda a sexta. Sem consultar solução pronta antes de tentar." },
    { time: "10:00 – 10:30", dur: "30min", block: "Pausa sem tela", k: "break", type: "break", priority: "FIXO", kind: "pausa", tracks: ["Pausa", "Água", "Caminhada"], d: "Pausa real entre o bloco de exercícios e o lab." },
    { time: "10:30 – 12:30", dur: "2h", block: "Lab da fase — ambiente reproduzível", k: "pratica", type: "project", priority: "Prática", kind: "lab", tracks: ["Lab", "Testes", "Documentação", "Git"], d: "Segundo bloco: montar o lab isolado da fase (Docker, pipeline, Terraform, RAG — o que a fase pedir), com README que permita rodar do zero em outra máquina." },
    { time: "12:30 – 14:00", dur: "1h30", block: "Almoço e descanso", k: "break", type: "break", priority: "FIXO", kind: "pausa real", tracks: ["Almoço", "Descanso"], d: "Almoço sem pressa e descanso real antes do último bloco técnico." },
    { time: "14:00 – 15:00", dur: "1h", block: "System Design cronometrado", k: "arquitetura", type: "architecture", priority: "Arquitetura", kind: "system design", tracks: ["System Design", "Estimativa", "Trade-offs", "Diagrama"], d: "Um desenho completo em 45 minutos + 15 de revisão: requisitos, estimativa de capacidade, API, modelo de dados, gargalos e trade-offs. Ganha peso real a partir da Fase 10." },
    { time: "15:00 – 18:00", dur: "3h", block: "Buffer semanal — reposição ou tempo livre", k: "buffer", type: "buffer", priority: "3h/sem", kind: "buffer", tracks: ["Reposição", "Imprevistos", "Conteúdo difícil"], d: "STUDY-023: as únicas 3h de folga estrutural da semana. Use para repor um bloco perdido, terminar um lab que travou ou reforçar o conteúdo que não entrou. Se a semana fechou em dia, este bloco é tempo livre — e deve ser usado como tempo livre, sem culpa. Um buffer que é sempre consumido não é buffer: é sinal de que o plano da semana está grande demais." },
    { time: "18:00 – 19:30", dur: "1h30", block: "Treino", k: "treino", type: "strength", priority: "FIXO", kind: "musculação", tracks: ["Treino", "Força", "Saúde"], d: "Treino mantido como bloco fixo." },
    { time: "19:30 – 21:00", dur: "1h30", block: "Banho, jantar e lazer", k: "dinner", type: "dinner", priority: "FIXO", kind: "recuperação", tracks: ["Banho", "Jantar", "Lazer"], d: "Recuperação e lazer." },
    { time: "21:00 – 21:45", dur: "45min", block: "Fechamento da semana técnica", k: "closing", type: "closing", priority: "Recall", kind: "fechamento", tracks: ["Checklist", "Git", "D0/D1", "Métricas"], d: "Revisar o que foi entregue na semana, atualizar o checklist da fase, registrar as revisões pendentes e anotar o que ficou travado." },
    { time: "21:45 – 23:00", dur: "1h15", block: "Desaceleração", k: "break", type: "break", priority: "FIXO", kind: "descanso", tracks: ["Lazer", "Sem tela técnica"], d: "Desaceleração antes do sono. Nada de código ou documentação técnica neste bloco." }
  ];
}

export function buildSunday() {
  return [
    { time: "23:00 – 07:30", dur: "8h30", block: "Sono — recuperação semanal", k: "sleep", type: "sleep", priority: "FIXO", kind: "sono", tracks: ["Sono", "Recuperação"], d: "Oito horas e meia. O domingo é o dia de pagar a dívida de sono acumulada na semana e chegar na segunda com capacidade cognitiva cheia." },
    { time: "07:30 – 09:00", dur: "1h30", block: "Manhã livre: café, caminhada e sem tela", k: "break", type: "break", priority: "FIXO", kind: "descanso", tracks: ["Café", "Caminhada", "Sem tela"], d: "Início lento e deliberado. Sem notificações, sem backlog, sem planejamento." },
    { time: "09:00 – 10:00", dur: "1h", block: "Revisão leve D7/D30 — único bloco técnico do dia", k: "review", type: "review", priority: "Máx. 1h", kind: "revisão", tracks: ["D7", "D30", "Recall ativo", "Flashcards"], d: "Uma hora de revisão ativa: reproduzir de memória o que foi estudado há 7 e 30 dias. Sem conteúdo novo, sem código novo, sem projeto. O que não sair sem consulta volta para a fila de revisão da semana." },
    { time: "10:00 – 12:30", dur: "2h30", block: "Tempo livre", k: "break", type: "break", priority: "FIXO", kind: "descanso", tracks: ["Lazer", "Família", "Descanso"], d: "Livre. Este bloco não deve ser convertido em estudo sob nenhuma justificativa de atraso." },
    { time: "12:30 – 14:00", dur: "1h30", block: "Almoço", k: "break", type: "break", priority: "FIXO", kind: "alimentação", tracks: ["Almoço", "Descanso"], d: "Almoço sem pressa." },
    { time: "14:00 – 18:00", dur: "4h", block: "Descanso real — sem estudo, sem projeto", k: "break", type: "break", priority: "FIXO", kind: "descanso", tracks: ["Lazer", "Vida pessoal", "Recuperação"], d: "STUDY-018: a folga semanal é parte do cronograma, não uma falha nele. Quatro horas contínuas sem obrigação técnica são o que torna 156 semanas possíveis." },
    { time: "18:00 – 19:00", dur: "1h", block: "Caminhada leve ou mobilidade", k: "cardio", type: "cardio", priority: "FIXO", kind: "recuperação", tracks: ["Caminhada", "Mobilidade"], d: "Atividade leve de recuperação — sem treino pesado, sem cronômetro." },
    { time: "19:00 – 21:00", dur: "2h", block: "Jantar e lazer", k: "dinner", type: "dinner", priority: "FIXO", kind: "recuperação", tracks: ["Jantar", "Lazer"], d: "Jantar e lazer." },
    { time: "21:00 – 21:30", dur: "30min", block: "Planejamento leve da semana", k: "closing", type: "closing", priority: "Leve", kind: "planejamento", tracks: ["Fase atual", "Metas da semana", "Revisões"], d: "Trinta minutos para olhar a fase corrente, definir a entrega da semana e conferir a fila de revisão. Planejar não é estudar — mantenha leve." },
    { time: "21:30 – 23:00", dur: "1h30", block: "Desaceleração e preparação do sono", k: "break", type: "break", priority: "FIXO", kind: "descanso", tracks: ["Sem tela", "Leitura leve", "Sono"], d: "Redução de estímulo, sem tela técnica, para entrar na segunda-feira com o ciclo de sono já regulado." }
  ];
}

export const dailyPlansByDay = {
  segunda: buildDailyPlan({
    deep1: {
      block: "Domínio principal da fase — construção",
      k: "java",
      type: "deep-work",
      priority: "45%",
      tracks: ["Java", "Spring Boot", "REST", "Domínio da fase"],
      d: "Bloco mais profundo da semana no domínio principal da fase corrente. Fase 2: endpoint completo com Spring. Fase 5: otimização medida. Fase 7: refatoração hexagonal. O slot é fixo; o conteúdo vem da fase."
    },
    deep2: {
      block: "Domínio principal da fase — aplicação e regra de negócio",
      k: "java",
      type: "deep-work",
      priority: "45%",
      tracks: ["Camadas", "Regra de negócio", "Tratamento de erro", "Clean Code"],
      d: "Continuação do mesmo domínio, sem troca de contexto: aplicar a regra de negócio, separar responsabilidades e deixar o código legível."
    },
    complement: {
      block: "Banco de dados e SQL",
      k: "db",
      type: "database",
      priority: "12%",
      tracks: ["PostgreSQL", "SQL", "Modelagem", "Migrations"],
      d: "Complemento natural do backend: modelar, escrever a query, criar a migration e entender o custo do que foi escrito."
    },
    extra: {
      block: "Algoritmos e estruturas de dados",
      k: "dsa",
      type: "dsa",
      priority: "3x/sem",
      tracks: ["DSA", "Big O", "Recall"],
      d: "STUDY-006: bloco transversal do mês 1 ao 36. Resolver, explicar em voz alta e reimplementar sem consultar."
    },
    night: {
      block: "Revisão ativa e fila D1/D7/D30",
      k: "review",
      type: "review",
      priority: "Recall",
      tracks: ["Active Recall", "D1", "D7", "D30"],
      d: "Responder sem consultar as perguntas registradas ontem (D1) e as que vencem hoje (D7/D30). O que não sair volta para a fila."
    }
  }),
  terca: buildDailyPlan({
    deep1: {
      block: "Testes do que foi construído na segunda",
      k: "java",
      type: "testing",
      priority: "10%",
      tracks: ["JUnit", "Mockito", "AssertJ", "Testcontainers"],
      d: "Cobrir o comportamento central com teste que falha quando deve. Testar regra de negócio, não implementação. A partir da Fase 3, inclui teste de integração com container real."
    },
    deep2: {
      block: "Refatoração e qualidade do domínio da fase",
      k: "java",
      type: "deep-work",
      priority: "45%",
      tracks: ["Refatoração", "SOLID", "Code smells", "Legibilidade"],
      d: "Melhorar o que ficou confuso na segunda, com os testes de rede de segurança. Refatorar sem teste é apostar."
    },
    complement: {
      block: "Arquitetura aplicada ao próprio código",
      k: "arquitetura",
      type: "architecture",
      priority: "9%",
      tracks: ["Camadas", "Acoplamento", "ADR", "C4"],
      d: "Ler e aplicar arquitetura no código da semana. A partir da Fase 7, este bloco produz ADRs e diagramas C4 formais."
    },
    extra: {
      block: "Inglês técnico aplicado",
      k: "ingles",
      type: "english",
      priority: "2x/sem",
      tracks: ["Docs", "README", "Commits", "Speaking"],
      d: "Ler documentação oficial no original, escrever README/PR em inglês e explicar em voz alta o que foi implementado."
    },
    night: {
      block: "Revisão ativa e fila D1/D7/D30",
      k: "review",
      type: "review",
      priority: "Recall",
      tracks: ["Active Recall", "D1", "D7", "D30"],
      d: "Recuperação ativa do conteúdo de ontem e das revisões que vencem hoje."
    }
  }),
  quarta: buildDailyPlan({
    deep1: {
      block: "Banco de dados — modelagem e consulta",
      k: "db",
      type: "database",
      priority: "12%",
      tracks: ["PostgreSQL", "SQL", "Modelagem", "Índices", "EXPLAIN"],
      d: "Bloco profundo em dados: modelar, escrever consultas reais e ler o plano de execução. Na Fase 5 este bloco vira performance e tuning."
    },
    deep2: {
      block: "Banco — performance e integração com a aplicação",
      k: "db",
      type: "database",
      priority: "12%",
      tracks: ["JPA", "Migrations", "Transações", "N+1", "EXPLAIN"],
      d: "Continuação do mesmo domínio, sem troca de contexto: mapear, versionar a migration, medir o custo da consulta e caçar N+1. Na Fase 5 este bloco vira tuning e leitura de plano de execução."
    },
    complement: {
      block: "Ambiente reproduzível — Docker e CI/CD",
      k: "devops",
      type: "devops",
      priority: "12%",
      tracks: ["Docker", "Compose", "CI/CD", "GitHub Actions"],
      d: "STUDY-004 — CI/CD antecipado para a Fase 3 (mês 7–9). Containerizar, automatizar build e testes, manter o pipeline verde. Antes da Fase 3, este bloco é ambiente local e linha de comando."
    },
    extra: {
      block: "Algoritmos e estruturas de dados",
      k: "dsa",
      type: "dsa",
      priority: "3x/sem",
      tracks: ["DSA", "Complexidade", "Recall"],
      d: "STUDY-006: segundo bloco semanal de DSA. Manter o ritmo importa mais que o volume por sessão."
    },
    night: {
      block: "Revisão ativa e fila D1/D7/D30",
      k: "review",
      type: "review",
      priority: "Recall",
      tracks: ["Active Recall", "D1", "D7", "D30"],
      d: "Recuperação ativa do conteúdo de ontem e das revisões que vencem hoje."
    }
  }),
  quinta: buildDailyPlan({
    deep1: {
      block: "Domínio principal da fase — integração",
      k: "java",
      type: "deep-work",
      priority: "45%",
      tracks: ["Integração", "API", "Contrato", "Erro"],
      d: "Integrar as partes construídas na semana em um fluxo que funciona ponta a ponta, com contrato estável e erro tratado."
    },
    deep2: {
      block: "Segurança aplicada ao que foi entregue",
      k: "sec",
      type: "security",
      priority: "Transversal",
      tracks: ["OWASP", "Auth", "Validação", "Secrets"],
      d: "STUDY-005 — segurança é transversal desde a Fase 1 e ganha módulo forte na Fase 4 (mês 10–12). Aplicar o checklist ao endpoint ou fluxo da semana: validação, autenticação, autorização, secrets e log sem vazamento."
    },
    complement: {
      block: "Consolidação do domínio da fase",
      k: "java",
      type: "deep-work",
      priority: "45%",
      tracks: ["Domínio da fase", "Documentação", "Ajustes"],
      d: "Fechar pendências técnicas do domínio principal e documentar o que foi decidido."
    },
    extra: {
      block: "Inglês técnico aplicado",
      k: "ingles",
      type: "english",
      priority: "2x/sem",
      tracks: ["Docs", "Vocabulário", "Speaking", "Escrita"],
      d: "Segundo bloco semanal de inglês: leitura no original, escrita técnica e explicação oral."
    },
    night: {
      block: "Revisão ativa e fila D1/D7/D30",
      k: "review",
      type: "review",
      priority: "Recall",
      tracks: ["Active Recall", "D1", "D7", "D30"],
      d: "Recuperação ativa do conteúdo de ontem e das revisões que vencem hoje."
    }
  }),
  sexta: buildDailyPlan({
    deep1: {
      block: "Operação: executar, publicar e observar",
      k: "devops",
      type: "devops",
      priority: "12%",
      tracks: ["Docker", "Deploy", "Logs", "Health check"],
      d: "Colocar para rodar de forma reproduzível e observar o comportamento. Na Fase 6 este bloco é observabilidade (métricas, tracing); na Fase 9, cloud e Terraform."
    },
    deep2: {
      block: "Diagnóstico e troubleshooting",
      k: "devops",
      type: "devops",
      priority: "12%",
      tracks: ["Logs", "Métricas", "Debug", "Rollback"],
      d: "Investigar um problema real ou simulado: ler log, medir, formular hipótese, validar e corrigir. Diagnóstico é habilidade treinável."
    },
    complement: {
      block: "Arquitetura — decisão documentada da semana",
      k: "arquitetura",
      type: "architecture",
      priority: "9%",
      tracks: ["ADR", "Trade-offs", "Diagrama", "Alternativas"],
      d: "Transformar a principal decisão técnica da semana em ADR: contexto, alternativas, escolha, trade-offs e critério de reversão."
    },
    extra: {
      block: "Algoritmos e estruturas de dados",
      k: "dsa",
      type: "dsa",
      priority: "3x/sem",
      tracks: ["DSA", "Simulado", "Recall"],
      d: "STUDY-006: terceiro bloco semanal. A partir da Fase 10, passa a ser cronometrado em formato de entrevista."
    },
    night: {
      block: "Revisão ativa e fechamento do ciclo semanal",
      k: "review",
      type: "review",
      priority: "Recall",
      tracks: ["Active Recall", "D1", "D7", "D30", "Semana"],
      d: "Revisão ativa e balanço da semana: o que foi dominado, o que ficou frágil e o que entra na fila de revisão."
    }
  }),
  sabado: buildSaturday(),
  domingo: buildSunday()
};
