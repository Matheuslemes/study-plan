/* ═══════════════════════════════════════════════
   MILESTONES — regras, certificações e sincronização

   Apenas CLF-C02 (mês 8) e SAA-C03 (mês 26) são obrigatórias.

   Fonte única de verdade — não duplicar estes dados
   em nenhuma página. Importe deste módulo.
═══════════════════════════════════════════════ */

export const rules = [
  {
    "k": "sleep",
    "r": "STUDY-016 — O bloco de sono de 7h30 (23:00–06:30) é o único bloco verdadeiramente inegociável do plano. É durante o sono que o estudo do dia vira memória de longo prazo: cortar sono para estudar mais destrói exatamente aquilo que se tentava construir. Nenhuma fase, prazo ou atraso justifica invadir este bloco."
  },
  {
    "k": "review",
    "r": "STUDY-018 — Domingo é descanso real: no máximo 1h de revisão leve, sem conteúdo novo, sem projeto, sem código. A folga semanal é parte do cronograma, não uma falha nele. Um plano de 156 semanas não sobrevive sem ela."
  },
  {
    "k": "java",
    "r": "STUDY-001 — A FASE é a fonte única de verdade. A fase define o conteúdo ativo, e o conteúdo ativo define a rotina — nunca o contrário. Uma trilha marcada como inativa na fase corrente não ocupa nenhum bloco da rotina diária, por mais interessante que pareça."
  },
  {
    "k": "java",
    "r": "Avance de fase apenas após cumprir pelo menos 80% dos critérios: projeto entregue, testes, deploy/execução reproduzível, README em inglês, revisão semanal, bugs corrigidos, explicação oral, evidência no GitHub e checkpoint técnico."
  },
  {
    "k": "dsa",
    "r": "STUDY-006 — Algoritmos e estruturas de dados são trilha contínua: 3× por semana, 40 minutos, do mês 1 ao mês 36, sem interrupção em nenhuma fase. É o principal filtro de entrevista para pleno e sênior, e a única competência do plano que exige ritmo constante em vez de imersão concentrada."
  },
  {
    "k": "review",
    "r": "Revisão é obrigatória, não opcional: D0 (registrar 3 perguntas no fechamento), D1 (responder sem consultar), D7 (reexplicar em voz alta) e D30 (reimplementar do zero). O que não sair sem consulta volta para a fila."
  },
  {
    "k": "pratica",
    "r": "Nenhum tópico conta como dominado até ter sido aplicado em um exercício resolvido sem consulta ou em um lab que roda do zero em outra máquina. Ler e assistir não é prática; reproduzir é. Cada fase tem sua própria lista de exercícios e labs, independentes entre si."
  },
  {
    "k": "sec",
    "r": "STUDY-005 — Segurança é transversal desde a Fase 1: secrets fora do repositório, validação de entrada e menor privilégio valem desde o primeiro commit. O módulo forte (OWASP, OAuth2, threat modeling) acontece na Fase 4, entre os meses 10 e 12, e o checklist por release passa a ser permanente a partir dali."
  },
  {
    "k": "devops",
    "r": "STUDY-004 — CI/CD entra na Fase 3 (meses 7–9), não no mês 22. A partir do primeiro pipeline verde, nenhuma entrega está completa sem forma reproduzível de executar, testar e publicar. Pipeline vermelho bloqueia merge."
  },
  {
    "k": "ingles",
    "r": "Inglês não é trilha isolada: todo README, PR, issue, ADR, changelog e runbook tem versão ou resumo em inglês, em todas as 12 fases."
  },
  {
    "k": "git",
    "r": "Todo repositório importante precisa ter commits pequenos, Conventional Commits, branch naming, PR revisável, README, tags/releases e proteção contra secrets."
  },
  {
    "k": "arquitetura",
    "r": "Toda decisão relevante vira ADR ou RFC com contexto, alternativas, trade-offs, riscos, impacto em custo, segurança e operação, e critério de reversão."
  },
  {
    "k": "db",
    "r": "Mudanças de banco precisam considerar compatibilidade, rollback, backfill, lock, impacto em dados, monitoramento e documentação da migração."
  },
  {
    "k": "aws",
    "r": "STUDY-010 — Apenas duas certificações são obrigatórias: CLF-C02 na Fase 3 (mês 8) e SAA-C03 na Fase 9 (mês 26). DVA-C02, SOA-C03 e DOP-C02 foram removidas do plano — só entram se houver exigência concreta de uma vaga. Duas certificações bem preparadas valem mais que cinco superficiais."
  },
  {
    "k": "ia",
    "r": "IA só conta como domínio quando houver problema definido, dados controlados, avaliação objetiva, métricas, custo, segurança, citação de fontes e análise de erro. Prompt isolado não é entrega. A trilha ativa na Fase 11 — antes disso, IA é ferramenta de apoio, não objeto de estudo."
  },
  {
    "k": "fin",
    "r": "STUDY-011 — Finanças saíram do cronograma técnico semanal e viraram revisão mensal de 1h. É conhecimento valioso, mas não é engenharia de software e não deve competir por blocos de foco técnico."
  },
  {
    "k": "treino",
    "r": "Treino, alimentação, pausas e recuperação são parte do cronograma. Sem consistência física, o plano de 36 meses não se sustenta."
  }
];

export const awsMilestones = [
  {
    "w": "Fase 3 · Mês 8",
    "c": "CLF-C02 ✓ Cloud Practitioner",
    "col": "#22d3b0"
  },
  {
    "w": "Fase 9 · Mês 26",
    "c": "SAA-C03 ✓ Solutions Architect Associate",
    "col": "#38bdf8"
  },
  {
    "w": "Fase 12 · Mês 36",
    "c": "Well-Architected Review do lab de cloud — sem nova prova",
    "col": "#a78bfa"
  },
  {
    "w": "Removidas do plano",
    "c": "DVA-C02 · SOA-C03 · DOP-C02 — só com exigência concreta de vaga",
    "col": "#64748b"
  }
];

export const syncDependencies = [
  { k: 'java', title: 'A fase define a rotina — nunca o contrário', text: 'STUDY-001: a fase corrente determina quais trilhas estão ativas. Uma trilha marcada como inativa não ocupa nenhum bloco da rotina diária, por mais atraente que pareça no momento.' },
  { k: 'sleep', title: 'Sono e folga são pré-requisitos, não recompensas', text: 'Sem 7h30 de sono e sem o domingo livre, nenhuma das dependências abaixo se sustenta por 156 semanas. Este é o alicerce de todo o resto.' },
  { k: 'dsa', title: 'DSA é a única trilha verdadeiramente contínua', text: 'Três vezes por semana, do mês 1 ao 36. Diferente do resto do plano, algoritmos exigem ritmo constante em vez de imersão concentrada.' },
  { k: 'git', title: 'Git + Inglês atravessam todas as fases', text: 'Commits, PRs, README, ADRs e runbooks funcionam como evidência técnica em todas as 12 fases, desde o primeiro dia.' },
  { k: 'db', title: 'Banco vem antes de performance e escala', text: 'Modelagem, transações e queries reais (Fases 1–2) precisam estar sólidos antes de cache (Fase 5), distribuição (Fase 8) e escala (Fase 10).' },
  { k: 'devops', title: 'CI/CD antes de arquitetura', text: 'STUDY-004: pipeline verde na Fase 3 (mês 7–9). Sem rede de segurança automatizada, toda refatoração arquitetural posterior é feita no escuro.' },
  { k: 'sec', title: 'Segurança é transversal, com módulo forte na Fase 4', text: 'STUDY-005: secrets e validação desde o primeiro commit; OWASP, OAuth2 e threat modeling entre os meses 10 e 12; checklist por release permanente a partir dali.' },
  { k: 'arquitetura', title: 'Arquitetura precisa de código para nascer', text: 'Hexagonal e DDD entram na Fase 7 porque exigem um sistema real, testado e operável para refatorar. Antes disso, seria teoria sem substrato.' },
  { k: 'pratica', title: 'Prática é a prova de domínio', text: 'Sem projeto contínuo, cada fase se prova por exercícios resolvidos sem consulta e labs que rodam do zero. Teoria sem aplicação não fecha fase.' },
  { k: 'frontend', title: 'Complementares só depois da base', text: 'STUDY-007: Frontend, Python, IA e Matemática entram na Fase 11 (mês 31). Antes ocupavam 54% da rotina desde o dia 1 e diluíam a âncora Java.' }
];

export const syncCheckpoints = [
  { k: 'sleep', title: 'Checkpoint diário', text: 'Dormiu 7h30? Não estudou entre 01:00 e 05:00? Registrou as 3 perguntas D0 no bloco de fechamento? Se a resposta for não por três dias seguidos, a rotina precisa de ajuste, não de esforço.' },
  { k: 'review', title: 'Checkpoint semanal', text: 'Fila D1/D7/D30 em dia, exercícios e lab do sábado commitados, e domingo respeitado como folga real.' },
  { k: 'arquitetura', title: 'Checkpoint mensal (semana 4)', text: 'Semana de consolidação: sem conteúdo novo. Revisão D30, refatoração, ADR atualizado, deploy validado e ajuste de rota da fase.' },
  { k: 'java', title: 'Checkpoint de fase (80%)', text: 'Projeto entregue, testes executados, deploy reproduzível, README em inglês, bugs corrigidos, explicação oral e evidência no GitHub.' },
  { k: 'dsa', title: 'Checkpoint de DSA', text: '~60 problemas por fase, resolvidos, explicados em voz alta e reimplementados sem consulta. A partir da Fase 10, cronometrados.' },
  { k: 'devops', title: 'Checkpoint de produção', text: 'Execução reproduzível, pipeline verde, logs úteis, rollback documentado e ambiente observável.' },
  { k: 'sec', title: 'Checkpoint de segurança', text: 'Secrets fora do código, dependências verificadas, permissões revisadas e checklist OWASP aplicado ao que foi entregue.' },
  { k: 'aws', title: 'Checkpoint de certificação', text: 'Apenas CLF-C02 (mês 8) e SAA-C03 (mês 26). Simulado, revisão de erros e lab prático antes de marcar a prova.' },
  { k: 'ingles', title: 'Checkpoint de comunicação', text: 'Resumo técnico em inglês, README/PR claro e explicação oral gravada da entrega da fase.' }
];
