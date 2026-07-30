/* ═══════════════════════════════════════════════
   CONFIG — estrutura global do plano

   Fases, semanas, ciclos e carga horária.
   Alterar o número de fases aqui reflete em todas as páginas.

   Fonte única de verdade — não duplicar estes dados
   em nenhuma página. Importe deste módulo.
═══════════════════════════════════════════════ */

export const CONFIG = {
  meses: 36,
  semanas: 156,
  fases: 12,
  horasPorFase: 500,
  horasTotais: 6000,
  focoSemanalHoras: '36–40h',
  focoDiaUtil: '6h25',
  sonoDiario: '7h30',
  bufferSemanalHoras: 3,
  criterioAvanco: 0.8
};

// Paleta das 12 fases. As cores vivem em tracks-palette.css (--phase-*);
// aqui só referenciamos, para não duplicar hex de marca fora da tabela central.
export const PC = [
  "var(--phase-1)",
  "var(--phase-2)",
  "var(--phase-3)",
  "var(--phase-4)",
  "var(--phase-5)",
  "var(--phase-6)",
  "var(--phase-7)",
  "var(--phase-8)",
  "var(--phase-9)",
  "var(--phase-10)",
  "var(--phase-11)",
  "var(--phase-12)"
];
export const PBG = [
  "#0d1a2e",
  "#0d2e28",
  "#1a1735",
  "#2e1a10",
  "#0e2538",
  "#2e1025",
  "#0d2e1a",
  "#2e2010",
  "#0c2623",
  "#0d1e35",
  "#22173a",
  "#2f1115"
];

export const syncCycles = [
  {
    title: 'Ciclo 1 — Base de engenharia', period: 'Meses 1–6', phases: 'Fases 1–2', color: 'var(--ui-blue)',
    goal: 'Consolidar Java, SQL, Git, Spring Boot, REST e JPA. Nenhuma tecnologia complementar compete por espaço nesta base.',
    tracks: ['Java 21', 'SQL/PostgreSQL', 'Spring Boot', 'JPA', 'Git', 'DSA', 'Inglês'],
    output: 'API REST autenticada e documentada + 50 exercícios de Java e 30 de SQL resolvidos.'
  },
  {
    title: 'Ciclo 2 — Qualidade e entrega', period: 'Meses 7–12', phases: 'Fases 3–4', color: 'var(--ui-teal)',
    goal: 'Testes profissionais, Docker, CI/CD (antecipado do mês 22) e módulo forte de segurança. É aqui que o código vira entrega confiável.',
    tracks: ['JUnit/Testcontainers', 'Docker', 'GitHub Actions', 'OWASP', 'OAuth2', 'CLF-C02'],
    output: 'Lab de Docker e CI com pipeline verde, suíte de testes escrita do zero, checklist OWASP aplicado e CLF-C02 no mês 8.'
  },
  {
    title: 'Ciclo 3 — Produção e operação', period: 'Meses 13–18', phases: 'Fases 5–6', color: 'var(--track-ia)',
    goal: 'Performance medida, cache com Redis e observabilidade completa. Aprender a operar o próprio software antes de distribuí-lo.',
    tracks: ['EXPLAIN/Índices', 'Redis', 'OpenTelemetry', 'Prometheus/Grafana', 'SLO', 'Resiliência'],
    output: 'Relatório de performance antes/depois, lab de cache com Redis e lab de observabilidade com dashboard e runbook.'
  },
  {
    title: 'Ciclo 4 — Arquitetura e sistemas distribuídos', period: 'Meses 19–24', phases: 'Fases 7–8', color: 'var(--track-git)',
    goal: 'Arquitetura hexagonal, DDD e, em seguida, mensageria integrada à arquitetura distribuída — Kafka como meio, nunca como fase isolada.',
    tracks: ['Hexagonal', 'DDD', 'C4', 'ADR/RFC', 'Kafka', 'Outbox/Saga', 'CQRS'],
    output: 'Exercício de refatoração para hexagonal, lab de Kafka com outbox e DLQ, e 5 ADRs completos.'
  },
  {
    title: 'Ciclo 5 — Cloud e escala', period: 'Meses 25–30', phases: 'Fases 9–10', color: 'var(--ui-sky)',
    goal: 'Deploy real em AWS com Terraform e Kubernetes, SAA-C03 no mês 26, e System Design praticado semanalmente.',
    tracks: ['AWS', 'Terraform', 'Kubernetes', 'Well-Architected', 'System Design', 'SAA-C03'],
    output: 'Ambiente cloud provisionado por Terraform com custo medido, lab de Kubernetes e 12 documentos de system design.'
  },
  {
    title: 'Ciclo 6 — Complementares e senioridade', period: 'Meses 31–36', phases: 'Fases 11–12', color: 'var(--track-sec)',
    goal: 'Só agora entram Frontend, Python e IA aplicada — sobre uma base backend consolidada. Depois, portfólio e entrevistas.',
    tracks: ['React/TypeScript', 'Python/FastAPI', 'LLMs/RAG', 'Matemática aplicada', 'Portfólio', 'Entrevistas'],
    output: 'DevCore ampliado com React, FastAPI e RAG avaliado no mesmo produto, portfólio publicado e prontidão para entrevista sênior.'
  }
];

export const monthlyCycle = [
  {
    week: "Semana 1",
    mode: "Execução",
    k: "java",
    newContent: true,
    focus: "Abertura do mês — conteúdo novo da fase",
    detail: "Ritmo normal de dias temáticos. É a semana com maior capacidade de absorver conteúdo difícil, porque a fadiga do mês ainda não acumulou.",
    checklist: ["Definir a entrega do mês na primeira segunda", "Conteúdo novo da fase em ritmo pleno", "Fila D1/D7 em dia"]
  },
  {
    week: "Semana 2",
    mode: "Execução",
    k: "java",
    newContent: true,
    focus: "Aprofundamento — a parte densa da fase",
    detail: "Semana de maior densidade técnica. O conteúdo mais difícil da fase deve cair aqui, com o buffer de sábado disponível para reforço.",
    checklist: ["Conteúdo novo em ritmo pleno", "Buffer usado para o tópico mais difícil, se necessário", "Fila D1/D7 em dia"]
  },
  {
    week: "Semana 3",
    mode: "Execução",
    k: "db",
    newContent: true,
    focus: "Aplicação — o conteúdo do mês vira exercício e lab",
    detail: "Última semana de conteúdo novo. O sábado é dedicado a fechar os exercícios e o lab que comprovam o que foi estudado no mês.",
    checklist: ["Fechar conteúdo novo do mês", "Exercícios e lab do mês concluídos", "Listar o que ficou frágil para a semana 4"]
  },
  {
    week: "Semana 4",
    mode: "Consolidação",
    k: "review",
    newContent: false,
    focus: "Sem conteúdo novo — revisão, refatoração e checkpoint",
    detail: "A semana que faz o mês valer. Nenhum tópico novo entra: o tempo vai para revisão D30, refatoração do que ficou torto, checkpoint da fase e recuperação real. Pular esta semana por sensação de atraso é a forma mais rápida de perder os três meses da fase.",
    checklist: [
      "Revisão D30 de tudo que venceu no mês",
      "Refatorar o código e os labs que ficaram confusos",
      "Atualizar ADR, README e documentação da fase",
      "Checkpoint: medir os critérios de 80% da fase",
      "Recuperação: dormir bem, treinar e reduzir carga cognitiva",
      "Ajuste de rota: o que muda no mês seguinte"
    ]
  }
];
