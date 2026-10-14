// Objetivos possuem IDs editoriais: mudar a ordem não muda o progresso.
const objective = (id, text) => ({ id, text });
/*
 * Sequência de perfil TEÓRICO e orientada ao ESTUDO. Cada objetivo começa
 * nomeando o TEMA/FUNDAMENTO a estudar e seus subconceitos, depois a ação
 * teórica (explicar, comparar, projetar no papel, especificar) sobre o DevCore
 * (pedidos, pagamentos, conciliação), e fecha com o critério observável. Assim
 * a rotina diz O QUE estudar, não só o que produzir. Cada `id` é estável (o
 * progresso depende dele); só o texto muda.
 */
const definitions = [
  {
    slug: 'fundamentos', title: 'Fundamentos e decisões arquiteturais',
    modules: ['natureza-arquitetura', 'atributos-qualidade', 'estilos-arquiteturais', 'documentacao-c4-adr'],
    arquitetura: [objective('requisitos', 'Atributos de qualidade (requisitos não-funcionais): o que são latência, disponibilidade, escalabilidade, custo e segurança, e como derivá-los das restrições do negócio em metas numéricas. Definir três para o DevCore. critério observável: cada atributo tem um número-alvo e a fonte do requisito'), objective('c4', 'Modelo C4 (Simon Brown): os níveis Contexto e Container — o que cada um comunica, a notação e seus limites. Desenhar os dois para o DevCore, com responsabilidades, fronteiras e integrações. critério observável: um C4 nível 1 e 2 que um não-especialista entende'), objective('decisoes', 'ADR (Architecture Decision Record): a estrutura (contexto, decisão, consequências), quando registrar e como comparar alternativas por custo, risco e trade-off. Escrever três decisões do DevCore. critério observável: três ADRs versionados, cada um com trade-off explícito e a condição que dispararia revisão')],
    java: [objective('api-base', 'Arquitetura em camadas de uma API: separação controller/serviço/repositório, a fronteira do domínio e o papel de um teste de integração. Analisar como isso se aplica ao DevCore. critério observável: um mapa de camadas e responsabilidades que um revisor valida sem rodar o sistema')],
    db: [objective('invariantes', 'Invariantes de negócio e transações: o que é uma invariante, como constraints e transações ACID a protegem e a diferença entre garantir no código e no banco. Modelar pedidos e pagamentos. critério observável: uma invariante que o banco (constraint/transação) impede de violar')],
    sec: [objective('dados-sensiveis', 'Classificação de dados e menor privilégio: o que é dado sensível (PII, financeiro), atores/papéis e o princípio do menor privilégio. Mapear a superfície do DevCore. critério observável: uma matriz dado × ator × permissão com o menor privilégio justificado')],
    delivery: 'Dossiê de contexto, requisitos mensuráveis, C4 e três ADRs.',
    proof: 'Relacionar cada decisão a um requisito e justificar a estrutura da API sem depender de execução.'
  },
  {
    slug: 'dominio', title: 'Domínio, modularidade e contratos',
    modules: ['ddd-estrategico', 'ddd-tatico', 'modularidade-acoplamento', 'decomposicao-servicos', 'integracao-mensageria'],
    arquitetura: [objective('contextos', 'DDD estratégico: linguagem ubíqua, bounded context e context mapping (as relações entre contextos). Mapear os contextos de pedidos, pagamentos e conciliação. critério observável: um context map que nomeia as relações entre os contextos'), objective('fronteiras', 'Monólito modular, coesão e acoplamento: dependências acíclicas e por que a direção da dependência importa. Justificar as fronteiras entre os módulos do DevCore. critério observável: a regra de dependência entre módulos e o argumento de por que a direção proibida é proibida'), objective('contratos', 'Contratos de API e versionamento (OpenAPI): compatibilidade para trás/para frente, mudança aditiva vs quebrante. Especificar um contrato do DevCore e classificar mudanças. critério observável: um contrato e a regra que classifica cada mudança como compatível ou quebrante')],
    java: [objective('modulos', 'DDD tático e fitness functions: agregados/módulos de domínio e como uma fitness function (ex.: ArchUnit) verifica dependências permitidas. Projetar os módulos do DevCore. critério observável: um diagrama de dependências permitidas e a regra que uma violação quebraria')],
    db: [objective('ownership', 'Ownership de dados por módulo: cada módulo dono do seu schema, por que a escrita cruzada quebra a fronteira e a ideia de banco por serviço. Definir o ownership no DevCore. critério observável: um mapa dado → dono e o argumento de integridade que a proíbe')],
    sec: [objective('autorizacao', 'Autorização e controle de acesso: autenticação vs autorização, RBAC/ABAC e o risco de IDOR (acessar recurso de outro usuário). Modelar as regras do DevCore. critério observável: uma matriz operação × papel e o caso de abuso que ela nega')],
    delivery: 'Monólito modular (desenho), mapa de contextos e contrato versionado.',
    proof: 'Explicar como o pipeline detectaria uma quebra de contrato e uma violação de fronteira, e por que cada uma é barrada.'
  },
  {
    slug: 'integracao', title: 'Integração e consistência distribuída',
    modules: ['integracao-mensageria', 'fundamentos-distribuidos', 'dados-intensivos', 'consistencia-transacoes', 'arquitetura-dados'],
    arquitetura: [objective('sincrono-eventos', 'Integração síncrona vs por eventos: acoplamento temporal, falha parcial, ordem e latência (padrões de mensageria — EIP). Comparar as duas para o fluxo de pagamento. critério observável: uma tabela de trade-offs que orienta a escolha por cenário'), objective('saga', 'Saga e consistência sem transação distribuída: coreografia vs orquestração, passos de compensação e estados intermediários. Desenhar a saga do pagamento. critério observável: um diagrama de Saga que trata falha em cada passo com compensação'), objective('contrato-evento', 'Contrato de evento e evolução de schema: envelope (CloudEvents), compatibilidade de schema, retenção e reprocessamento. Especificar o versionamento de um evento do DevCore. critério observável: um schema de evento que evolui sem quebrar consumidores, com a regra explicada')],
    java: [objective('outbox', 'Transactional outbox e idempotência: como o outbox garante "salvar estado e publicar evento" na mesma transação e como um consumidor idempotente trata duplicação e restart. Explicar para o DevCore. critério observável: um documento que descreve o mecanismo e por que reprocessar e reiniciar não cobra em dobro')],
    db: [objective('atomicidade', 'Atomicidade entre estado e evento: o problema do dual-write, por que negócio e outbox ficam na mesma transação e os limites da garantia (entrega ao menos uma vez). Explicar no DevCore. critério observável: o argumento de por que estado e evento saem juntos ou não saem, com o cenário de falha')],
    devops: [objective('dlq', 'Retry, dead-letter queue e reprocessamento: retry com backoff, quando mandar para a DLQ, poison messages e rastreabilidade. Projetar a política do DevCore. critério observável: um fluxo de uma mensagem que falha, vai para a DLQ e é reprocessada com trilha')],
    delivery: 'Desenho do fluxo de pagamento assíncrono com outbox, idempotência e conciliação.',
    proof: 'Explicar, passo a passo, por que repetir a mensagem e reiniciar o consumidor não gera cobrança duplicada.'
  },
  {
    slug: 'operacao', title: 'Segurança, resiliência e operação',
    modules: ['resiliencia-estabilidade', 'observabilidade-operacao', 'seguranca-arquitetural', 'escala-performance', 'conteineres-orquestracao', 'cicd-iac', 'platform-engineering'],
    arquitetura: [objective('slo', 'SLI, SLO e error budget: como definir um indicador (SLI), a meta (SLO) e o orçamento de erro que autoriza risco. Definir para o fluxo de pagamento. critério observável: um SLO com a fórmula do SLI e o error budget do período'), objective('resiliencia', 'Padrões de estabilidade (Release It!): timeout, retry, circuit breaker, bulkhead e backpressure — que falha cada um contém. Justificar os do DevCore e descrever o experimento que os validaria. critério observável: a explicação de como o circuit breaker abre e o sistema degrada sem cair')],
    sec: [objective('threat-model', 'Modelagem de ameaças (STRIDE): fronteiras de confiança, superfícies de ataque e como escolher mitigações. Produzir o threat model do DevCore. critério observável: duas mitigações com o ataque que cada uma neutraliza')],
    devops: [objective('tracing', 'Observabilidade — tracing distribuído: trace id/span, propagação de contexto e correlação de logs (OpenTelemetry). Projetar o rastreamento de um pedido pelo DevCore. critério observável: o desenho de como o mesmo trace id liga API, fila e consumidor'), objective('runbook', 'Prontidão operacional — runbook e game day: o que um runbook precisa conter e como um game day (falha ensaiada) expõe conhecimento tácito. Planejar para o DevCore. critério observável: um runbook que leva da falha à recuperação sem conhecimento tácito')],
    java: [objective('falhas', 'Degradação graciosa e teste de falha de dependência: fallback, timeout e o que "degradar em vez de cair" significa. Explicar como testar a indisponibilidade de uma dependência do DevCore. critério observável: a descrição do comportamento degradado em vez de queda')],
    db: [objective('carga', 'Performance de consulta sob carga: plano de execução, índices, problema N+1 e como medir latência/throughput. Analisar o gargalo provável de uma consulta do DevCore. critério observável: a métrica-alvo (latência ou throughput) e o efeito esperado da correção')],
    delivery: 'SLOs, threat model, desenho de tracing e runbook.',
    proof: 'Relatório que argumenta hipótese, falha esperada, métricas a observar e caminho de recuperação.'
  },
  {
    slug: 'cloud', title: 'Solução cloud, capacidade e custo',
    modules: ['arquitetura-nuvem', 'escala-performance', 'dados-intensivos', 'seguranca-arquitetural'],
    arquitetura: [objective('topologia', 'Topologias de implantação: instância única vs multi-AZ vs multi-região — trade-offs de disponibilidade, custo e operação (AWS Well-Architected). Comparar duas para o DevCore. critério observável: uma recomendação justificada pelos três eixos'), objective('capacidade', 'Estimativa de capacidade (back-of-the-envelope): QPS, volume e crescimento de dados, armazenamento e como declarar hipóteses e limites. Estimar para o DevCore. critério observável: uma estimativa com as premissas explícitas')],
    aws: [objective('implantacao', 'Fundamentos de nuvem: rede (VPC/sub-redes), identidade (IAM) e menor privilégio, e por que o ambiente deve ser reproduzível. Projetar (no papel/IaC) o ambiente do DevCore, sem provisioná-lo. critério observável: um diagrama e um IaC de referência comentado que outro arquiteto conseguiria aplicar'), objective('custo', 'FinOps básico: modelos de custo na nuvem, orçamento com alerta e a importância do teardown. Estimar o custo do workload do DevCore. critério observável: uma estimativa de custo com premissas e o plano de teardown que zera o gasto')],
    devops: [objective('iac', 'Infraestrutura como código: estado declarativo, idempotência e apply/rollback reproduzíveis (Terraform/CloudFormation). Explicar para o ambiente do DevCore. critério observável: o argumento de por que apply e rollback deixam o ambiente em estado conhecido')],
    db: [objective('recuperacao', 'Recuperação de desastre: backup vs restore, RTO (tempo) e RPO (perda), réplica e failover. Definir a estratégia do DevCore. critério observável: o RTO/RPO alvo e o procedimento que os atingiria')],
    sec: [objective('segredos', 'Gestão de segredos e criptografia: cofre de segredos, criptografia em trânsito e em repouso e isolamento de rede. Especificar para o ambiente do DevCore. critério observável: a regra que garante nenhum segredo em texto puro e acesso negado fora do escopo')],
    delivery: 'Arquitetura cloud, IaC de referência, estimativa de custo e plano de recuperação.',
    proof: 'Justificar como recriar o ambiente e restaurar dados dentro das metas de tempo e perda.'
  },
  {
    slug: 'evolucao', title: 'Evolução, governança e comunicação',
    modules: ['evolucao-migracao', 'topologias-governanca', 'decomposicao-servicos', 'comunicacao-arquitetura', 'niveis-ea-togaf'],
    arquitetura: [objective('rfc', 'RFC de arquitetura: como estruturar uma proposta de evolução com alternativas, riscos, custo e plano incremental para revisão por pares. Escrever uma para o DevCore. critério observável: uma RFC que colegas conseguem contestar pelos trade-offs'), objective('migracao', 'Strangler fig e migração incremental (Monolith to Microservices): fatiar por capacidade, manter compatibilidade e garantir reversibilidade. Planejar para o DevCore. critério observável: um plano em fatias reversíveis, cada uma verificável'), objective('governanca', 'Governança evolutiva: ownership de contratos, política de depreciação (prazo e comunicação) e revisão de decisões. Definir para o DevCore. critério observável: uma política de depreciação com prazo e comunicação'), objective('defesa', 'Comunicação de arquitetura: adaptar a mensagem para público técnico e executivo, registrar objeções e defender trade-offs. Defender a solução do DevCore. critério observável: sustentar a decisão para os dois públicos, adaptando a linguagem')],
    java: [objective('fitness', 'Fitness functions no CI: como automatizar uma verificação que protege uma decisão arquitetural (ArchUnit / testes de arquitetura). Explicar uma para o DevCore. critério observável: a decisão protegida e a mudança que o CI reprovaria')],
    devops: [objective('rollout', 'Estratégias de rollout: blue-green, canário e rollback de uma mudança compatível de contrato. Planejar para o DevCore. critério observável: o passo a passo de promover e reverter sem quebrar o consumidor')],
    delivery: 'RFC, plano de migração, portfólio de evidências e defesa do DevCore.',
    proof: 'Explicar quando manter o monólito e qual evidência justificaria extrair um serviço.'
  }
];

export const architecturePhases = definitions.map((d, i) => {
  const objectives = {};
  for (const key of ['arquitetura', 'java', 'db', 'devops', 'sec', 'aws']) objectives[key] = d[key] || [];
  objectives.ingles = [objective(`${d.slug}-apresentacao`, 'Apresentar a decisão desta etapa em inglês por cinco minutos e revisar clareza, termos e argumentos. critério observável: gravar a fala e revisar com um checklist de comunicação técnica')];
  objectives.git = [objective(`${d.slug}-evidencias`, 'Versionar código, documentos e evidências desta etapa em commits reproduzíveis. critério observável: um histórico que reconstrói a decisão e a evidência da etapa')];
  objectives.pratica = [objective(`${d.slug}-entrega`, `${d.delivery} critério observável: ${d.proof}`)];
  const p = { id: i + 1, slug: d.slug, l: `A${i + 1}`, t: d.title, w: `Sem ${i * 4 + 1}–${i * 4 + 4} · referência a 20h/sem`, h: 80, cand: false, cn: '', modules: d.modules, objectives,
    lab: { titulo: d.title, entrega: d.delivery, dependeDe: i ? `arquitetura-a${i}` : null }, proof: d.proof };
  for (const key of ['java', 'dsa', 'db', 'git', 'arquitetura', 'devops', 'sec', 'pratica', 'frontend', 'py', 'ia', 'math', 'fin', 'ingles']) p[key] = (objectives[key] || []).map(o => o.text);
  p.aws = { cert: objectives.aws.length ? 'AWS aplicada · certificação opcional' : 'Sem AWS nesta etapa', exam: '', topics: objectives.aws.map(o => o.text) };
  return p;
});

export const architectureDiagnostic = [
  { id: 'api', text: 'Implementar e testar uma API HTTP com validação e tratamento de erros.', href: '/trilhas/java/producao.html' },
  { id: 'dados', text: 'Explicar e testar uma transação e uma restrição de integridade.', href: '/trilhas/bancos/postgresql.html' },
  { id: 'entrega', text: 'Executar aplicação e banco em ambiente reproduzível com testes.', href: '/trilhas/devops/fundamentos.html' },
  { id: 'seguranca', text: 'Distinguir autenticação e autorização e proteger segredos.', href: '/trilhas/sec/modelagem.html' }
];

export const architectureSequence = {
  id: 'arquitetura', name: 'Arquitetura de Soluções e Integração', shortName: 'Arquitetura',
  description: 'Aprofundamento para quem já constrói APIs e opera aplicações. Decisões, contratos e evidências no DevCore de pedidos, pagamentos e conciliação.',
  phases: architecturePhases, weeks: 24, hours: 480, weeklyHours: 20, mainTrack: 'arquitetura',
  optional: ['Frontend', 'Python e IA', 'DSA para entrevistas', 'Métodos formais', 'Simulação determinística', 'Células e papers'],
  diagnostic: architectureDiagnostic
};
