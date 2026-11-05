/* ═══════════════════════════════════════════════
   ROUTINE — rotina diária e semanal (STUDY-019/021/023)

   Blocos são SLOTS: o conteúdo vem da fase ativa.
   Máx. 2 domínios técnicos/dia · domingo de descanso.

   Duas rotinas com o mesmo início e o mesmo fim do dia:
   trabalho-9-18 (padrão): estudo de manhã e à noite, com janelas no expediente.
   estudo-integral: estudo garantido de manhã e à tarde, com revisão à noite.
   Segunda a sexta das 05:30 à 01:00; sábado e domingo são iguais nas duas, com
   academia ou casa de manhã e estudo das 13:00 à 01:00.
   O sono de 4h30 nos dias úteis é decisão do usuário e está declarado no bloco.

   Fonte única de verdade — não duplicar estes dados
   em nenhuma página. Importe deste módulo.
═══════════════════════════════════════════════ */

import { CONTEUDO_SEMANAL, DSA_CRONOMETRADO_DESDE, REGRAS_DE_FLEX, SLOTS_SEMANA, degrauDaSexta } from "./conteudo-semanal.js";
import { NOME_TRILHA } from "./tracks.js";

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
    carga: '25h',
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
    strategy: "Segurança aplicada ao próprio código toda semana retém muito mais que uma fase isolada."
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
    practice: "A partir das 13:00, 4h resolvendo os exercícios e labs da fase corrente. Cada fase tem sua lista própria: exercícios de Java na Fase 1, lab de Docker e CI na Fase 3, lab de Terraform na Fase 9.",
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
    practice: "Manhã de academia ou organização da casa. 1h de revisão ativa (D7/D30) às 13:00. Depois disso, o dia segue livre até a noite — sem estudo, sem projeto, sem conteúdo novo.",
    review: "Reproduzir de memória o que foi estudado há 7 e 30 dias. O que não sair sem consulta volta para a fila.",
    connection: "Descanso não é ausência de progresso: é a condição para que os outros 6 dias da semana existam.",
    strategy: "STUDY-018 — um plano longo só sobrevive com folga semanal real. Domingo produtivo é dívida de energia cobrada na terça."
  }
};

/* ─── Construtores de grade ─────────────────────
   As duas rotinas acordam às 05:30, começam a estudar às 06:00 e terminam à 01:00.
   buildWorkDayPlan     → Trabalho 09–18: 3h50 de foco garantido + janelas do expediente
   buildIntegralDayPlan → Estudo integral: 10h40 de foco garantido
   buildSaturday        → academia de manhã; prática das 13:00 à 01:00 (5h de foco)
   buildSunday          → academia ou casa de manhã; descanso das 13:00 à 01:00 (máx. 1h de revisão)

   No trabalho, o expediente é bônus condicionado à demanda, nunca dívida, e a noite
   é consolidação de escopo limitado. A janela das 18h às 23h não é subdividida
   porque a duração do treino e do deslocamento varia.
───────────────────────────────────────────────── */
const SONO_DO_DIA_UTIL = { time: "01:00 – 05:30", dur: "4h30", block: "Sono", k: "sleep", type: "sleep", priority: "FIXO", kind: "sono", tracks: ["Sono", "Recuperação"], d: "4h30 de sono, abaixo das 7h30 diárias de referência. Se a retenção cair, encerre a noite mais cedo e preserve a manhã." };

const ACADEMIA_DA_NOITE = { time: "18:00 – 23:00", dur: "5h", block: "Academia e rotina pessoal", k: "treino", type: "strength", priority: "FIXO", kind: "vida", tracks: ["Deslocamento", "Treino", "Banho", "Jantar"], d: "Deslocamento, academia com o cardio do dia, banho e jantar, com tudo concluído antes das 23:00. Se terminar antes, descanse ou antecipe o fechamento da noite." };

const pausaDoExpediente = (time) => ({ time, dur: "15min", block: "Pausa", k: "break", type: "break", priority: "Se houver folga", kind: "pausa", tracks: ["Pausa", "Água"], d: "Pausa conforme a demanda do trabalho. Se houver folga, sem tela." });

const janelaDeTrabalho = (time, dur, [titulo, semDemanda], observacao = "") => ({ time, dur, block: `Trabalho · janela livre: ${titulo}`, k: "work", type: "work", priority: "Condicional", kind: "expediente", condicional: true, tracks: ["Trabalho", "Janela livre"], d: `Com demanda: trabalho. Sem demanda: ${semDemanda}${observacao}` });

const janelaDeConteudo = (cfg, time, dur, kind) => ({ ...cfg, time, dur, kind, priority: "Condicional", condicional: true, seloRotulo: "se houver janela livre", d: `Com demanda: trabalho. Sem demanda: estudar este bloco. ${cfg.d}` });

/* Textos dos horários fixos. Cada sequência pode trocá-los por `cfg.textos`. */
const TEXTOS_TRABALHO = {
  estudo: "Combinar leitura e pequenos exemplos e terminar com algo que consiga explicar ou aplicar.",
  pratica: "Resolver ou implementar antes de consultar a solução.",
  fechamentoManha: "Testar o que fez, salvar o progresso e anotar o próximo passo. A meta da manhã é uma entrega pequena e verificável, como \"implementar validação de pedido e testar os casos de erro\", nunca \"estudar Java\".",
  janelas: [
    ["continuar a prática", "continuar a prática iniciada pela manhã."],
    ["exercícios e testes", "exercícios, testes e correção de dificuldades."],
    ["aplicação prática", "aplicação prática no exercício ou laboratório da semana."],
    ["testes e documentação", "testes, documentação e conclusão do que estiver aberto."]
  ],
  fechamentoTrabalho: "Salvar o progresso e deixar a nota de retomada: o que estou fazendo, o que falta e qual é a próxima ação.",
  recuperacao: "Escrever ou explicar o que aprendeu, antes de abrir as anotações.",
  registro: "Salvar código, fazer commit quando couber e registrar dificuldades.",
  preparacao: "Escolher a tarefa das 06:00, separar o material e encerrar."
};

export function buildWorkDayPlan(cfg) {
  const t = { ...TEXTOS_TRABALHO, ...cfg.textos };
  const limiteTransversal = cfg.extra.type === "dsa" ? "até 40min" : "até 30min";
  const consolidacao = cfg.consolidacao || { ...cfg.extra, block: "Consolidação prática", priority: "Núcleo", kind: "consolidação", seloRotulo: `se não houve janela no expediente · ${limiteTransversal}`, d: `${cfg.focoNoite} Refazer um exercício, corrigir um erro ou concluir uma tarefa pequena. Nada de laboratório grande: se não terminar, registrar o próximo passo.` };
  return [
    SONO_DO_DIA_UTIL,
    { time: "05:30 – 06:00", dur: "30min", block: "Preparação", k: "break", type: "break", priority: "FIXO", kind: "preparação", tracks: ["Higiene", "Café", "Mesa"], d: "Higiene, café e organização da mesa. O material já fica escolhido na noite anterior." },
    { ...cfg.deep1, time: "06:00 – 07:30", dur: "1h30", kind: "foco profundo", intensity: "alta", d: `${cfg.deep1.d} ${t.estudo}` },
    { time: "07:30 – 07:45", dur: "15min", block: "Pausa", k: "break", type: "break", priority: "FIXO", kind: "pausa", tracks: ["Pausa", "Água"], d: "Levantar, beber água e descansar da tela." },
    { ...cfg.deep2, time: "07:45 – 08:45", dur: "1h", kind: "foco profundo", intensity: "alta", d: `${cfg.deep2.d} ${t.pratica}`.trim() },
    { time: "08:45 – 09:00", dur: "15min", block: "Fechamento da manhã e transição", k: "closing", type: "closing", priority: "FIXO", kind: "fechamento", tracks: ["Teste", "Progresso", "Próximo passo"], d: t.fechamentoManha },
    janelaDeTrabalho("09:00 – 10:30", "1h30", t.janelas[0], " Estas horas não entram na meta obrigatória: se o trabalho ocupar o expediente, não fica dívida para a madrugada."),
    pausaDoExpediente("10:30 – 10:45"),
    janelaDeTrabalho("10:45 – 12:00", "1h15", t.janelas[1]),
    { time: "12:00 – 13:00", dur: "1h", block: "Almoço e descanso", k: "break", type: "break", priority: "FIXO", kind: "pausa real", tracks: ["Almoço", "Descanso"], d: "Preservado com ou sem demanda de trabalho." },
    janelaDeConteudo(cfg.complement, "13:00 – 14:00", "1h", "complementar"),
    pausaDoExpediente("14:00 – 14:15"),
    janelaDeConteudo(cfg.extra, "14:15 – 15:00", "45min", "transversal"),
    janelaDeTrabalho("15:00 – 16:30", "1h30", t.janelas[2]),
    pausaDoExpediente("16:30 – 16:45"),
    janelaDeTrabalho("16:45 – 17:45", "1h", t.janelas[3]),
    { time: "17:45 – 18:00", dur: "15min", block: "Fechamento do trabalho", k: "closing", type: "closing", priority: "FIXO", kind: "fechamento", tracks: ["Progresso", "Retomada"], d: t.fechamentoTrabalho },
    ACADEMIA_DA_NOITE,
    { time: "23:00 – 23:15", dur: "15min", block: "Recuperação de memória", k: "review", type: "review", priority: "Recall", kind: "revisão ativa", tracks: ["Active Recall"], d: t.recuperacao },
    { ...consolidacao, time: "23:15 – 00:00", dur: "45min" },
    { time: "00:00 – 00:10", dur: "10min", block: "Pausa", k: "break", type: "break", priority: "FIXO", kind: "pausa", tracks: ["Pausa"], d: "Descansar da tela." },
    { ...cfg.night, time: "00:10 – 00:30", dur: "20min", kind: "revisão ativa", intensity: "média" },
    { time: "00:30 – 00:45", dur: "15min", block: "Registro", k: "closing", type: "closing", priority: "FIXO", kind: "fechamento", tracks: ["Git", "Notas"], d: t.registro },
    { time: "00:45 – 01:00", dur: "15min", block: "Preparação do próximo dia", k: "closing", type: "closing", priority: "FIXO", kind: "fechamento", tracks: ["Planejamento"], d: t.preparacao }
  ];
}

/* Estudo integral: estudo garantido de manhã e à tarde, dentro do mesmo início e fim do dia. */
export function buildIntegralDayPlan(cfg) {
  const t = { ...TEXTOS_TRABALHO, ...cfg.textos };
  const comMaiuscula = (texto) => texto[0].toUpperCase() + texto.slice(1);
  // Blocos que aprofundam um tema já aberto no dia, com os mesmos itens da fase.
  const continuacao = (base, time, dur, kind, [titulo, oQueFazer], complemento = "") => ({ ...base, time, dur, kind, block: comMaiuscula(titulo), tracks: [], modulos: undefined, d: `${comMaiuscula(oQueFazer)} ${complemento}`.trim() });
  return [
    SONO_DO_DIA_UTIL,
    { time: "05:30 – 06:00", dur: "30min", block: "Preparação e foco do dia", k: "break", type: "break", priority: "FIXO", kind: "preparação", tracks: ["Higiene", "Café", "Prioridade"], d: "Higiene, café e definição objetiva da entrega do dia: uma frase escrita sobre o que precisa estar pronto às 18h." },
    { time: "06:00 – 08:00", dur: "2h", kind: "foco profundo", intensity: "alta", ...cfg.deep1 },
    { time: "08:00 – 08:30", dur: "30min", block: "Pausa sem tela", k: "break", type: "break", priority: "FIXO", kind: "pausa", tracks: ["Pausa", "Alongamento", "Água"], d: "Pausa real sem tela, alongamento e água. Não substituir por vídeo ou rede social." },
    { time: "08:30 – 10:00", dur: "1h30", kind: "foco profundo", intensity: "alta", ...cfg.deep2 },
    { time: "10:00 – 10:15", dur: "15min", block: "Pausa", k: "break", type: "break", priority: "FIXO", kind: "pausa", tracks: ["Pausa", "Água"], d: "Levantar, beber água e descansar da tela." },
    continuacao(cfg.deep2, "10:15 – 11:45", "1h30", "foco profundo", t.janelas[0], t.pratica),
    { time: "11:45 – 13:00", dur: "1h15", block: "Almoço e descanso real", k: "break", type: "break", priority: "FIXO", kind: "pausa real", tracks: ["Almoço", "Descanso", "Sem tela"], d: "Alimentação e recuperação visual. Este bloco não deve virar videoaula nem revisão pesada." },
    { time: "13:00 – 14:00", dur: "1h", kind: "complementar", intensity: "média", ...cfg.complement },
    { time: "14:00 – 14:20", dur: "20min", block: "Pausa curta", k: "break", type: "break", priority: "FIXO", kind: "pausa", tracks: ["Descanso visual", "Água"], d: "Pausa curta antes do último bloco técnico da tarde." },
    { time: "14:20 – 15:00", dur: "40min", kind: "transversal", intensity: "média", ...cfg.extra },
    continuacao(cfg.deep1, "15:00 – 16:30", "1h30", "aplicação", t.janelas[2]),
    { time: "16:30 – 16:45", dur: "15min", block: "Pausa", k: "break", type: "break", priority: "FIXO", kind: "pausa", tracks: ["Pausa", "Água"], d: "Levantar, beber água e descansar da tela." },
    continuacao(cfg.deep1, "16:45 – 18:00", "1h15", "aplicação", t.janelas[3]),
    ACADEMIA_DA_NOITE,
    { time: "23:00 – 00:15", dur: "1h15", kind: "revisão ativa", intensity: "média", ...cfg.night },
    { time: "00:15 – 01:00", dur: "45min", block: "Fechamento: commit, notas e plano do dia seguinte", k: "closing", type: "closing", priority: "FIXO", kind: "fechamento", tracks: ["Git", "Notas", "D0", "Planejamento"], d: "Commit do dia, registro das 3 perguntas D0 sobre o que foi estudado, atualização do checklist e definição do foco de amanhã. Depois disso, tela desligada." }
  ];
}

/* Sábado e domingo: academia ou casa de manhã e estudo a partir das 13:00, até a 01:00. */
const manhaDoFimDeSemana = (noiteAnterior, atividade) => [
  { time: "01:00 – 07:30", dur: "6h30", block: "Sono", k: "sleep", type: "sleep", priority: "FIXO", kind: "sono", tracks: ["Sono", "Recuperação"], d: `Seis horas e meia de sono depois ${noiteAnterior}, que termina à 01:00.` },
  { time: "07:30 – 08:00", dur: "30min", block: "Café e preparação", k: "break", type: "break", priority: "FIXO", kind: "preparação", tracks: ["Café", "Preparação"], d: "Café e preparação para a atividade da manhã." },
  { time: "08:00 – 12:00", dur: "4h", k: "treino", type: "strength", priority: "FIXO", ...atividade },
  { time: "12:00 – 13:00", dur: "1h", block: "Almoço e higiene", k: "break", type: "break", priority: "FIXO", kind: "pausa real", tracks: ["Almoço", "Higiene"], d: "Almoço e higiene antes de começar os estudos às 13:00." }
];

export function buildSaturday() {
  return [
    ...manhaDoFimDeSemana("da sexta", { block: "Academia", kind: "musculação", tracks: ["Treino", "Força", "Saúde"], d: "Academia com o cardio do dia, das 08:00 às 12:00. Sem estudo neste período." }),
    { time: "13:00 – 15:00", dur: "2h", block: "Prática — exercícios da fase", k: "pratica", type: "project", priority: "Prática", kind: "exercícios", tracks: ["Exercícios", "Código", "Git"], d: "Primeiro bloco contínuo de prática: resolver os exercícios da fase corrente aplicando o que foi estudado de segunda a sexta. Sem consultar solução pronta antes de tentar." },
    { time: "15:00 – 15:30", dur: "30min", block: "Pausa sem tela", k: "break", type: "break", priority: "FIXO", kind: "pausa", tracks: ["Pausa", "Água"], d: "Pausa real entre o bloco de exercícios e o lab." },
    { time: "15:30 – 17:30", dur: "2h", block: "Lab da fase — ambiente reproduzível", k: "pratica", type: "project", priority: "Prática", kind: "lab", tracks: ["Lab", "Testes", "Documentação", "Git"], d: "Segundo bloco: montar o lab isolado da fase (Docker, pipeline, Terraform, RAG — o que a fase pedir), com README que permita rodar do zero em outra máquina." },
    { time: "17:30 – 19:00", dur: "1h30", block: "Pausa longa", k: "break", type: "break", priority: "FIXO", kind: "descanso", tracks: ["Descanso", "Sem tela técnica"], d: "Descanso entre a prática e o último bloco técnico do dia." },
    { time: "19:00 – 20:30", dur: "1h30", block: "Jantar", k: "dinner", type: "dinner", priority: "FIXO", kind: "recuperação", tracks: ["Jantar", "Descanso"], d: "Jantar e descanso antes do System Design." },
    { time: "20:30 – 21:30", dur: "1h", block: "System Design cronometrado", k: "arquitetura", type: "architecture", priority: "Arquitetura", kind: "system design", tracks: ["System Design", "Estimativa", "Trade-offs", "Diagrama"], d: "Um desenho completo em 45 minutos + 15 de revisão: requisitos, estimativa de capacidade, API, modelo de dados, gargalos e trade-offs. Ganha peso real a partir da Fase 10." },
    { time: "21:30 – 00:30", dur: "3h", block: "Buffer semanal — reposição ou tempo livre", k: "buffer", type: "buffer", priority: "3h/sem", kind: "buffer", tracks: ["Reposição", "Imprevistos", "Conteúdo difícil"], d: "STUDY-023: as únicas 3h de folga estrutural da semana. Use para repor um bloco perdido, terminar um lab que travou ou reforçar o conteúdo que não entrou. Se a semana fechou em dia, este bloco é tempo livre — e deve ser usado como tempo livre, sem culpa. Um buffer que é sempre consumido não é buffer: é sinal de que o plano da semana está grande demais." },
    { time: "00:30 – 01:00", dur: "30min", block: "Fechamento da semana técnica", k: "closing", type: "closing", priority: "Recall", kind: "fechamento", tracks: ["Checklist", "Git", "D0/D1", "Métricas"], d: "Revisar o que foi entregue na semana, atualizar o checklist da fase, registrar as revisões pendentes e anotar o que ficou travado." }
  ];
}

export function buildSunday() {
  return [
    ...manhaDoFimDeSemana("do sábado", { block: "Academia ou organização completa da casa", kind: "academia ou casa", tracks: ["Treino", "Casa", "Sem estudo"], d: "Academia ou organizar a casa por completo, conforme a semana. Sem estudo neste período." }),
    { time: "13:00 – 14:00", dur: "1h", block: "Revisão leve D7/D30 — único bloco técnico do dia", k: "review", type: "review", priority: "Máx. 1h", kind: "revisão", tracks: ["D7", "D30", "Recall ativo", "Flashcards"], d: "Uma hora de revisão ativa: reproduzir de memória o que foi estudado há 7 e 30 dias. Sem conteúdo novo, sem código novo, sem projeto. O que não sair sem consulta volta para a fila de revisão da semana." },
    { time: "14:00 – 20:00", dur: "6h", block: "Descanso real — sem estudo, sem projeto", k: "break", type: "break", priority: "FIXO", kind: "descanso", tracks: ["Lazer", "Vida pessoal", "Recuperação"], d: "STUDY-018: a folga semanal é parte do cronograma, não uma falha nele. Este bloco não deve ser convertido em estudo sob nenhuma justificativa de atraso." },
    { time: "20:00 – 23:00", dur: "3h", block: "Jantar e lazer", k: "dinner", type: "dinner", priority: "FIXO", kind: "recuperação", tracks: ["Jantar", "Lazer"], d: "Jantar e lazer." },
    { time: "23:00 – 23:30", dur: "30min", block: "Planejamento leve da semana", k: "closing", type: "closing", priority: "Leve", kind: "planejamento", tracks: ["Fase atual", "Metas da semana", "Revisões"], d: "Trinta minutos para olhar a fase corrente, definir a entrega da semana e conferir a fila de revisão. Planejar não é estudar — mantenha leve." },
    { time: "23:30 – 01:00", dur: "1h30", block: "Desaceleração e preparação do sono", k: "break", type: "break", priority: "FIXO", kind: "descanso", tracks: ["Sem tela", "Leitura leve", "Sono"], d: "Redução de estímulo, sem tela técnica. A segunda começa às 05:30: se o cansaço pedir, encerre antes." }
  ];
}

const FOCO_DA_NOITE = {
  segunda: "Revisar a implementação e as decisões tomadas.",
  terca: "Refazer testes ou exercícios que apresentaram dificuldade.",
  quarta: "Revisar consultas, transações e erros encontrados.",
  quinta: "Revisar o fluxo completo e os pontos de segurança.",
  sexta: "Fazer o balanço da semana e preparar a prática de sábado."
};

/*
 * Perfil de rotina: como o estudo se distribui no dia. É separado de MODOS_ROTINA,
 * que define a carga da semana; os dois eixos são independentes.
 */
export const PERFIL_PADRAO = "trabalho-9-18";

const CONSTRUTOR_DO_DIA = { "trabalho-9-18": buildWorkDayPlan, "estudo-integral": buildIntegralDayPlan };

/* Semana completa: cada sequência fornece só o conteúdo dos dias úteis. */
export function buildWeekPlan(configDias, perfil = PERFIL_PADRAO) {
  return {
    ...Object.fromEntries(Object.entries(configDias).map(([dia, cfg]) => [dia, CONSTRUTOR_DO_DIA[perfil](cfg)])),
    sabado: buildSaturday(),
    domingo: buildSunday()
  };
}

/* Temas da semana. */
const CONFIG_DIAS = {
  segunda: {
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
      d: "STUDY-006: bloco transversal do início ao fim do plano. Resolver, explicar em voz alta e reimplementar sem consultar."
    },
    night: {
      block: "Revisão ativa e fila D1/D7/D30",
      k: "review",
      type: "review",
      priority: "Recall",
      tracks: ["Active Recall", "D1", "D7", "D30"],
      d: "Responder sem consultar as perguntas registradas ontem (D1) e as que vencem hoje (D7/D30). O que não sair volta para a fila."
    }
  },
  terca: {
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
  },
  quarta: {
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
      d: "STUDY-004 — CI/CD antecipado para a Fase 3. Containerizar, automatizar build e testes, manter o pipeline verde. Antes da Fase 3, este bloco é ambiente local e linha de comando."
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
  },
  quinta: {
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
      d: "STUDY-005 — segurança é transversal desde a Fase 1 e ganha módulo forte na Fase 4. Aplicar o checklist ao endpoint ou fluxo da semana: validação, autenticação, autorização, secrets e log sem vazamento."
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
  },
  sexta: {
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
  }
};

const planejarDiasUteis = (construir) => Object.fromEntries(
  Object.entries(CONFIG_DIAS).map(([dia, cfg]) => [dia, construir(cfg, dia)])
);

export const PERFIS_ROTINA = {
  "trabalho-9-18": {
    nome: "Trabalho 09–18",
    resumo: "25h10 de foco garantido por semana + até 35h em janelas do expediente",
    // 25h10 arredondadas: base das estimativas em semanas das duas sequências.
    horasSemanais: 25,
    cargaIdeal: "25h",
    rotuloCarga: "25h10/semana + janelas",
    duracao: "~55 meses",
    semanas: "~240 semanas",
    heroTags: {}
  },
  "estudo-integral": {
    nome: "Estudo integral",
    resumo: "59h20 de foco garantido por semana",
    // 59h20 arredondadas: base das estimativas em semanas das duas sequências.
    horasSemanais: 59,
    cargaIdeal: "59h",
    rotuloCarga: "59h20/semana",
    duracao: "~23 meses",
    semanas: "~102 semanas",
    heroTags: {
      "~55 meses": "~23 meses",
      "~240 semanas": "~102 semanas",
      "25h10/semana + janelas": "59h20/semana"
    },
    // Trechos de index.html marcados com data-carga, que descrevem o perfil padrão.
    textos: {
      rotinaHero: "Rotina de <strong>59h20/semana garantidas</strong>, com 4h30 de sono de segunda a sexta, estudo no fim de semana das 13h à 01h e domingo de descanso real.",
      faseIntro: "Cada fase leva de 8 a 9 semanas nesta carga, incluindo o checkpoint.",
      notaHoras: 'A carga do perfil Estudo integral é <span class="mono">59h20/semana de foco garantido</span>: <span class="mono">10h40 por dia útil</span>, <span class="mono">5h no sábado</span> e <span class="mono">1h no domingo</span>. O dia começa e termina nos mesmos horários da rotina com trabalho, das <span class="mono">05:30</span> à <span class="mono">01:00</span>; a diferença é que o estudo de manhã e à tarde é garantido. No sábado e no domingo, a manhã é de academia ou casa e o estudo vai das <span class="mono">13h</span> à <span class="mono">01h</span>. O conteúdo continua em <span class="mono">~500h por fase</span> e <span class="mono">~6.000h totais</span>, o que dá <span class="mono">~23 meses</span>. O sono fica em <span class="mono">35h30 por semana</span>, com 4h30 de segunda a sexta e 6h30 no fim de semana. Considere margem de <span class="mono">±10%</span>: bugs, revisões e imprevistos fazem parte. Checkpoint mensal na semana 4 e critério mínimo de 80% para avançar de fase.',
      metricaSemanas: "Cada fase de ~500h leva de 8 a 9 semanas, incluindo checkpoint, validação, correções, revisão e ajuste de rota.",
      metricaCarga: "59h20/sem",
      metricaCargaTexto: "10h40 por dia útil, 5h no sábado e 1h no domingo, com o mesmo início e fim de dia da rotina com trabalho."
    }
  }
};

export const dailyPlansByPerfil = Object.fromEntries(Object.keys(PERFIS_ROTINA).map((perfil) => [
  perfil,
  buildWeekPlan(planejarDiasUteis((cfg, dia) => ({ ...cfg, focoNoite: FOCO_DA_NOITE[dia] })), perfil)
]));

export const dailyPlansByDay = dailyPlansByPerfil[PERFIL_PADRAO];

/* ─── Semana da fase ────────────────────────────
   Os slots de CONFIG_DIAS continuam fixos; conteudo-semanal.js diz o que cada um
   estuda em cada fase. Os construtores são os mesmos, então horários, sono e
   carga ficam iguais em todas as fases.
───────────────────────────────────────────────── */
const TIPO_DA_TRILHA = {
  java: "deep-work", frontend: "deep-work", py: "deep-work", ia: "deep-work",
  db: "database", sec: "security", devops: "devops", aws: "devops",
  arquitetura: "architecture", dsa: "dsa", ingles: "english", pratica: "project"
};

const textoDoTransversal = (k, faseId) => {
  if (k === "ingles") return "Produzir em inglês sobre o trabalho da semana: o item abaixo define o artefato, escrito ou falado.";
  return faseId >= DSA_CRONOMETRADO_DESDE
    ? "Resolver cronometrado, em formato de entrevista, explicando o raciocínio em voz alta."
    : "Resolver, explicar em voz alta e reimplementar sem consultar. Manter o ritmo importa mais que o volume.";
};

function configDaFase(cfg, dia, faseId) {
  const conteudo = CONTEUDO_SEMANAL[faseId][dia];
  const { metodo } = SLOTS_SEMANA[dia];
  const intencao = conteudo.intencao || SLOTS_SEMANA[dia].intencao;
  const blocoDoSlot = (slot) => {
    const [k, topicos, tema, metodoProprio] = conteudo[slot];
    return {
      ...cfg[slot],
      k,
      type: k === cfg[slot].k ? cfg[slot].type : TIPO_DA_TRILHA[k],
      block: tema,
      priority: conteudo.pico ? "Pico da fase" : intencao,
      tracks: [],
      topicos,
      topicIndex: topicos[0],
      d: metodoProprio || metodo[slot]
    };
  };
  return {
    ...cfg,
    deep1: blocoDoSlot("deep1"),
    deep2: blocoDoSlot("deep2"),
    complement: blocoDoSlot("complement"),
    extra: { ...cfg.extra, topicos: conteudo.extra, topicIndex: conteudo.extra[0], d: textoDoTransversal(cfg.extra.k, faseId) },
    focoNoite: conteudo.noite || FOCO_DA_NOITE[dia]
  };
}

/* Grade da semana do perfil com o conteúdo da fase. */
export function dailyPlansDaFase(perfil, faseId) {
  return buildWeekPlan(planejarDiasUteis((cfg, dia) => configDaFase(cfg, dia, faseId)), perfil);
}

/* Resumo de cada dia na fase. `nestaFase` é o que muda e de onde veio. */
export function weeklyFocusDaFase(faseId) {
  const focoDoDia = (id, dia) => CONTEUDO_SEMANAL[id]?.[dia]?.foco || null;
  const diasDaFase = Object.entries(CONTEUDO_SEMANAL[faseId]).map(([dia, conteudo]) => {
    const slot = SLOTS_SEMANA[dia];
    const intencao = conteudo.intencao || slot.intencao;
    const trilhas = [...new Set([conteudo.deep1[0], conteudo.deep2[0], conteudo.complement[0], CONFIG_DIAS[dia].extra.k])];
    return [dia, {
      ...weeklyFocusByDay[dia],
      focus: conteudo.foco,
      priority: conteudo.pico ? `${intencao} · pico da fase` : intencao,
      k: conteudo.deep1[0],
      tracks: trilhas.map((k) => k === "pratica" ? "Prática" : NOME_TRILHA[k]),
      practice: conteudo.practice || slot.practice,
      review: conteudo.review || slot.review,
      connection: conteudo.papel || slot.papel,
      strategy: REGRAS_DE_FLEX[faseId] || slot.strategy,
      nestaFase: {
        intencao,
        foco: conteudo.foco,
        pico: Boolean(conteudo.pico),
        degrau: dia === "sexta" ? degrauDaSexta(faseId) : null,
        anterior: focoDoDia(faseId - 1, dia),
        proxima: focoDoDia(faseId + 1, dia)
      }
    }];
  });
  return { ...weeklyFocusByDay, ...Object.fromEntries(diasDaFase) };
}
