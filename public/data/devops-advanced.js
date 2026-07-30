/*
 * Academia DevOps, Cloud e SRE.
 * Conteúdo orientado a dados e ancorado nos 10 livros locais.
 */

export const DEVOPS_RESEARCH_DATE = '2026-07-28';

const official = Object.freeze({
  dora: { label: 'DORA - software delivery capabilities', url: 'https://dora.dev/capabilities/' },
  githubActions: { label: 'GitHub Actions - continuous integration', url: 'https://docs.github.com/en/actions/get-started/continuous-integration' },
  docker: { label: 'Docker - build best practices', url: 'https://docs.docker.com/build/building/best-practices/' },
  kubernetes: { label: 'Kubernetes - concepts', url: 'https://kubernetes.io/docs/concepts/' },
  kubernetesDebug: { label: 'Kubernetes - debugging applications', url: 'https://kubernetes.io/docs/tasks/debug/debug-application/' },
  networkPolicy: { label: 'Kubernetes - NetworkPolicy', url: 'https://kubernetes.io/docs/concepts/services-networking/network-policies/' },
  terraformState: { label: 'Terraform - state', url: 'https://developer.hashicorp.com/terraform/language/state' },
  terraformModules: { label: 'Terraform - modules', url: 'https://developer.hashicorp.com/terraform/language/modules' },
  terraformTest: { label: 'Terraform - test', url: 'https://developer.hashicorp.com/terraform/cli/commands/test' },
  otel: { label: 'OpenTelemetry - Collector', url: 'https://opentelemetry.io/docs/collector/' },
  otelSemconv: { label: 'OpenTelemetry - semantic conventions', url: 'https://opentelemetry.io/docs/concepts/semantic-conventions/' },
  prometheus: { label: 'Prometheus - overview', url: 'https://prometheus.io/docs/introduction/overview/' },
  alertmanager: { label: 'Prometheus - Alertmanager', url: 'https://prometheus.io/docs/alerting/latest/alertmanager/' },
  sre: { label: 'Google SRE - book', url: 'https://sre.google/sre-book/table-of-contents/' },
  sreWorkbook: { label: 'Google SRE - workbook', url: 'https://sre.google/workbook/table-of-contents/' },
  slsa: { label: 'SLSA - supply-chain levels', url: 'https://slsa.dev/spec/' },
  finops: { label: 'FinOps Framework', url: 'https://www.finops.org/framework/' },
  backstage: { label: 'Backstage - software catalog', url: 'https://backstage.io/docs/features/software-catalog/' }
});

export const devopsBooks = Object.freeze({
  handbook: {
    title: 'The DevOps Handbook',
    authors: 'Gene Kim, Jez Humble, Patrick Debois, John Willis e Nicole Forsgren',
    edition: '2ª edição',
    year: 2021,
    language: 'Inglês',
    pages: 696,
    path: '/pdfs/livros-devops/The DevOps Handbook- How to Create World-Class Agility, -- Gene Kim; Jez Humble; Patrick Debois; John Willis; Nicole -- ( WeLib.org ).azw3.pdf',
    depth: 'Fundamentos a sênior',
    prerequisites: 'Vivência básica com desenvolvimento, entrega e operação de software',
    structure: 'Three Ways: fluxo, feedback, aprendizado contínuo e integração entre tecnologia e organização',
    limitations: 'É uma referência sociotécnica ampla; não substitui documentação operacional de cada ferramenta.'
  },
  accelerate: {
    title: 'Accelerate',
    authors: 'Nicole Forsgren, Jez Humble e Gene Kim',
    edition: '1ª edição',
    year: 2018,
    language: 'Inglês',
    pages: 291,
    path: '/pdfs/livros-devops/Accelerate - The Science of Lean Software and DevOps- -- Nicole Forsgren, PhD; Jez Humble; Gene Kim -- ( WeLib.org ).epub.pdf',
    depth: 'Pleno a liderança',
    prerequisites: 'Noções de fluxo de entrega e métricas',
    structure: 'Resultados da pesquisa, método estatístico e transformação organizacional',
    limitations: 'As métricas orientam investigação; não devem virar metas isoladas nem ranking de equipes.'
  },
  continuousDelivery: {
    title: 'Continuous Delivery',
    authors: 'Jez Humble e David Farley',
    edition: '1ª edição',
    year: 2010,
    language: 'Inglês',
    pages: 641,
    path: '/pdfs/livros-devops/Continuous Delivery- Reliable Software Releases through -- Jez Humble; David Farley -- ( WeLib.org ).azw3.pdf',
    depth: 'Pleno a sênior',
    prerequisites: 'Build, testes automatizados, Git e ambientes',
    structure: 'Fundamentos, deployment pipeline e ecossistema de entrega',
    limitations: 'Algumas ferramentas envelheceram; os princípios de pipeline, configuração e release permanecem.'
  },
  infrastructureAsCode: {
    title: 'Infrastructure as Code',
    authors: 'Kief Morris',
    edition: '2ª edição',
    year: 2020,
    language: 'Inglês',
    pages: 430,
    path: '/pdfs/livros-devops/infrastructure-as-code-dynamic-systems-for-the-cloud-age-2_compress.pdf',
    depth: 'Pleno a staff',
    prerequisites: 'Cloud, redes, automação e controle de versão',
    structure: 'Fundamentos, stacks, runtimes, design e entrega de infraestrutura',
    limitations: 'É agnóstico de ferramenta; detalhes de provider e backend exigem documentação atual.'
  },
  terraform: {
    title: 'Terraform: Up & Running',
    authors: 'Yevgeniy Brikman',
    edition: '3ª edição',
    year: 2022,
    language: 'Inglês',
    pages: 680,
    path: '/pdfs/livros-devops/Terraform - up and running - writing infrastructure as code -- Yevgeniy Brikman -- ( WeLib.org ).pdf',
    depth: 'Básico a sênior',
    prerequisites: 'CLI, cloud e noções de infraestrutura',
    structure: 'State, módulos, expressões, segredos, múltiplos providers, testes e trabalho em equipe',
    limitations: 'Exemplos são orientados a Terraform e cloud pública; não cobrem toda governança organizacional.'
  },
  kubernetes: {
    title: 'Kubernetes: Up and Running',
    authors: 'Brendan Burns, Joe Beda, Kelsey Hightower e Lachlan Evenson',
    edition: '3ª edição',
    year: 2022,
    language: 'Inglês',
    pages: 393,
    path: '/pdfs/livros-devops/Kubernetes- Up and Running, 3rd Edition (Fourth Early -- Brendan Burns & Joe Beda & Kelsey Hightower & Lachlan -- ( WeLib.org ).pdf',
    depth: 'Básico a pleno',
    prerequisites: 'Containers, redes e YAML',
    structure: 'Objetos fundamentais, workloads, serviços, configuração, segurança e aplicações reais',
    limitations: 'Não substitui operação de um cluster específico nem decisões de custo e plataforma.'
  },
  observability: {
    title: 'Observability Engineering',
    authors: 'Charity Majors, Liz Fong-Jones e George Miranda',
    edition: '1ª edição',
    year: 2022,
    language: 'Inglês',
    pages: 418,
    path: '/pdfs/livros-devops/Observability engineering - achieving production excellence -- Charity Majors, Liz Fong-Jones, George Miranda -- ( WeLib.org ).epub.pdf',
    depth: 'Pleno a staff',
    prerequisites: 'Sistemas distribuídos, logs, métricas e incidentes',
    structure: 'Caminho até observabilidade, práticas de exploração e transformação organizacional',
    limitations: 'Defende eventos ricos e exploração; a arquitetura precisa respeitar custo, privacidade e cardinalidade.'
  },
  sre: {
    title: 'Site Reliability Engineering',
    authors: 'Betsy Beyer, Chris Jones, Jennifer Petoff e Niall Richard Murphy',
    edition: '1ª edição',
    year: 2016,
    language: 'Inglês',
    pages: 698,
    path: '/pdfs/livros-devops/Site Reliability Engineering - How Google Runs Production -- Betsy Beyer, Chris Jones, Niall Richard Murphy, Jennifer -- ( WeLib.org ).epub.pdf',
    depth: 'Pleno a staff',
    prerequisites: 'Operação de serviços, automação e sistemas distribuídos',
    structure: 'Princípios, práticas, gestão e experiências de SRE no Google',
    limitations: 'Práticas precisam ser adaptadas à escala, risco e capacidade da organização.'
  },
  sreWorkbook: {
    title: 'The Site Reliability Workbook',
    authors: 'Beyer, Murphy, Rensin, Kawahara e Thorne',
    edition: '1ª edição',
    year: 2018,
    language: 'Inglês',
    pages: 508,
    path: '/pdfs/livros-devops/The Site Reliability Workbook - Practical Ways to Implement -- Betsy Beyer et al. (eds.) -- ( WeLib.org ).pdf',
    depth: 'Aplicado a sênior',
    prerequisites: 'SLI, SLO, incidentes e automação operacional',
    structure: 'Fundamentos, práticas e processos para implantar SRE',
    limitations: 'Os exercícios exigem adaptação ao serviço e dados reais; copiar políticas não cria confiabilidade.'
  },
  phoenix: {
    title: 'The Phoenix Project',
    authors: 'Gene Kim, Kevin Behr e George Spafford',
    edition: '1ª edição',
    year: 2013,
    language: 'Inglês',
    pages: 410,
    path: '/pdfs/livros-devops/The Phoenix project - a novel about IT, DevOps, and helping -- Kim, Gene; Behr, Kevin; Spafford, George -- ( WeLib.org ).azw3.pdf',
    depth: 'Entrada a liderança',
    prerequisites: 'Experiência mínima em times de software',
    structure: 'Narrativa de transformação baseada em fluxo, restrições, trabalho invisível e feedback',
    limitations: 'É uma narrativa pedagógica; decisões técnicas precisam de evidência e fontes especializadas.'
  }
});

export const devopsAcademy = Object.freeze({
  title: 'Academia DevOps, Cloud e SRE',
  baseline: `Pesquisa técnica: ${DEVOPS_RESEARCH_DATE} · evidência operacional acima de presença`,
  book: 'handbook',
  parts: {
    fundamentos: {
      index: '1/5',
      range: 'Módulos 1-5',
      page: 'fundamentos.html',
      navLabel: 'Fluxo e entrega',
      title: 'Fluxo, sistemas e entrega contínua',
      subtitle: 'Transforme trabalho invisível em fluxo pequeno, testável, rastreável e reversível.',
      prerequisites: ['Operar Linux e Git pela linha de comando', 'Executar uma aplicação com testes automatizados', 'Explicar HTTP, DNS, processo, porta e variável de ambiente'],
      objectives: ['Mapear um fluxo de valor com espera e retrabalho', 'Diagnosticar falha de host ou rede por evidência', 'Projetar pipeline com feedback rápido e gates proporcionais', 'Medir entrega sem transformar métrica em meta local']
    },
    plataforma: {
      index: '2/5',
      range: 'Módulos 6-10',
      page: 'plataforma.html',
      navLabel: 'Plataforma e IaC',
      title: 'Containers, Kubernetes e infraestrutura como código',
      subtitle: 'Modele runtime e infraestrutura como produtos versionados, testáveis e recuperáveis.',
      prerequisites: ['Pipeline com build e testes verdes', 'Dockerfile e rede de containers em nível prático', 'Noções de cloud, IAM, CIDR e balanceamento'],
      objectives: ['Construir imagem mínima e verificável', 'Operar workloads e rede Kubernetes com probes e limites', 'Projetar state remoto e módulos Terraform', 'Testar infraestrutura e bloquear mudanças inseguras']
    },
    confiabilidade: {
      index: '3/5',
      range: 'Módulos 11-15',
      page: 'confiabilidade.html',
      navLabel: 'Observabilidade e SRE',
      title: 'Observabilidade, SLO e resposta a falhas',
      subtitle: 'Converta telemetria em perguntas, objetivos de serviço e resposta disciplinada.',
      prerequisites: ['Serviço implantado em ambiente reproduzível', 'Logs estruturados e métricas básicas', 'Noções de percentis, taxa de erro e capacidade'],
      objectives: ['Instrumentar sinais correlacionáveis com OpenTelemetry', 'Definir SLI, SLO e política de error budget', 'Projetar alertas acionáveis e resposta a incidentes', 'Testar capacidade, recuperação e continuidade']
    },
    operacao: {
      index: '4/5',
      range: 'Módulos 16-20',
      page: 'operacao.html',
      navLabel: 'Operação e liderança',
      title: 'Plataforma, segurança e evolução operacional',
      subtitle: 'Escalone autonomia com guardrails, custo visível, aprendizado e desenho sociotécnico.',
      prerequisites: ['Pipeline, IaC e SLO demonstráveis', 'Experiência com incidentes ou game days', 'Capacidade de escrever ADR, runbook e postmortem'],
      objectives: ['Projetar golden path como produto de plataforma', 'Proteger supply chain e identidade de workloads', 'Alocar custo e capacidade por unidade econômica', 'Conduzir melhoria contínua sem otimização local']
    },
    avaliacao: {
      index: '5/5',
      range: 'Evidência',
      page: 'avaliacao.html',
      navLabel: 'Avaliação e projetos',
      title: 'Avaliação, projetos e biblioteca',
      subtitle: 'Defenda decisões, reproduza falhas e opere um produto evolutivo sob critérios explícitos.',
      prerequisites: ['Concluir os 20 módulos ou comprovar equivalência', 'Manter repositório com pipeline e ambiente reproduzível', 'Possuir evidências HTTP(S) revisáveis'],
      objectives: ['Demonstrar senioridade por decisões e resultados', 'Resolver casos com restrições operacionais', 'Evoluir um único produto em quatro entregas', 'Validar domínio com evidência e revisão D30']
    }
  }
});

function moduleOf(config) {
  return Object.freeze(config);
}

export const devopsModules = Object.freeze([
  moduleOf({
    number: 1, part: 'fundamentos', id: 'fluxo-valor', title: 'Fluxo de valor e os Three Ways', level: 'Base operacional',
    objective: 'Mapear uma mudança do pedido à produção e medir espera, retrabalho, handoffs e tempo de feedback.',
    prerequisites: ['Fluxo básico de Git', 'Noção de backlog e deploy', 'Um serviço usado como estudo de caso'],
    problem: 'Times otimizam etapas locais enquanto a entrega completa acumula fila, trabalho invisível e risco.',
    concepts: ['Value stream', 'Work in progress', 'Flow', 'Feedback', 'Aprendizado contínuo'],
    internals: ['Lead time inclui fila e execução; touch time mede apenas trabalho ativo.', 'Lotes grandes ampliam variabilidade, risco e tempo de recuperação.', 'Feedback só reduz risco quando chega antes de a decisão se tornar cara.'],
    useWhen: ['Priorizar gargalos sistêmicos.', 'Explicar por que mais ocupação pode reduzir throughput.'],
    avoidWhen: ['Não use mapa como cerimônia sem dados.', 'Não confunda produtividade individual com resultado do sistema.'],
    contrast: { bad: 'Cada área maximiza utilização e transfere lotes grandes.', good: 'O fluxo limita WIP, encurta lotes e mede tempo até valor e recuperação.' },
    tradeoffs: ['Menos WIP pode parecer ociosidade local.', 'Automação desloca gargalos.', 'Medir fluxo exige eventos confiáveis.'],
    production: 'Uma correção urgente espera aprovação, janela e repasse por quatro equipes; o mapa mostra que codificar ocupa minutos e esperar ocupa dias.',
    risks: ['Métrica virar meta.', 'Ocultar retrabalho.', 'Mapear apenas caminho feliz.'],
    checklist: ['Limites do fluxo estão claros?', 'Fila e execução são separadas?', 'O gargalo tem dado?', 'Lote pode diminuir?', 'Feedback chega a quem decide?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que limita throughput?', expected: 'Identificar gargalo, WIP, tamanho de lote e tempo de feedback.' },
      { level: 'Sênior/Staff', question: 'Como melhorar fluxo sem acelerar o gargalo errado?', expected: 'Medir ponta a ponta, limitar WIP, explorar a restrição e reavaliar o sistema.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Desenhar o fluxo atual de uma mudança.', evidence: 'Mapa com etapas, filas e responsáveis.' },
      { level: 'Aplicado', task: 'Medir lead time de dez mudanças.', evidence: 'Dataset e histograma com espera versus execução.' },
      { level: 'Sênior', task: 'Reduzir um gargalo sem aumentar risco.', evidence: 'Experimento antes/depois e decisão registrada.' }
    ],
    challenge: 'Defender qual etapa não deve ser automatizada ainda e qual dado mudaria essa decisão.',
    book: 'The DevOps Handbook, partes I-III; Accelerate, parte I; The Phoenix Project.',
    complements: [official.dora], exampleFile: '../../examples/devops-senior/fundamentos-e-entrega.md'
  }),
  moduleOf({
    number: 2, part: 'fundamentos', id: 'diagnostico-sistemas', title: 'Linux, processos e diagnóstico de rede', level: 'Fundação',
    objective: 'Diagnosticar uma indisponibilidade distinguindo processo, recurso, DNS, rota, conexão e aplicação.',
    prerequisites: ['Shell e filesystem', 'HTTP e TCP básicos', 'Acesso a um host ou container'],
    problem: 'Reiniciar serviços sem hipótese apaga sintomas e prolonga incidentes.',
    concepts: ['Processo e sinais', 'File descriptors', 'DNS e resolução', 'TCP e sockets', 'Pressão de CPU, memória e I/O'],
    internals: ['Um processo pode estar vivo e incapaz de atender.', 'DNS, rota e aplicação falham em camadas distintas.', 'Load average não equivale diretamente a uso de CPU.'],
    useWhen: ['Criar hipótese por camada.', 'Coletar evidência antes de alterar estado.'],
    avoidWhen: ['Não comece por reboot.', 'Não trate ping como prova de saúde HTTP.'],
    contrast: { bad: 'Reinicia tudo até voltar.', good: 'Preserva sinais, delimita camada, testa hipótese e só então intervém.' },
    tradeoffs: ['Mais telemetria custa recursos.', 'Acesso de diagnóstico amplia superfície.', 'Captura detalhada pode conter dados sensíveis.'],
    production: 'Pods reiniciam por OOM enquanto o balanceador acusa timeout; métricas, eventos e limites revelam memória, não rede.',
    risks: ['Comandos destrutivos.', 'Viés de confirmação.', 'Diagnóstico sem timestamp.'],
    checklist: ['Sintoma e impacto estão definidos?', 'Relógios estão alinhados?', 'Processo aceita conexões?', 'DNS e rota foram testados?', 'Mudança preserva evidência?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Como separar falha DNS de falha da aplicação?', expected: 'Resolver nome, testar IP/porta e comparar resposta por camada.' },
      { level: 'Sênior/Staff', question: 'Por que restart automático pode piorar diagnóstico?', expected: 'Apaga estado, causa thundering herd e mascara causa recorrente.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Identificar processo, porta e dependência de um serviço.', evidence: 'Comandos e diagrama de conexão.' },
      { level: 'Aplicado', task: 'Reproduzir falha DNS e timeout de upstream.', evidence: 'Logs, testes e hipótese diferenciada.' },
      { level: 'Sênior', task: 'Criar runbook de triagem por camadas.', evidence: 'Runbook executado por outra pessoa.' }
    ],
    challenge: 'Diagnosticar degradação sem reiniciar o serviço e justificar a primeira ação mutável.',
    book: 'Site Reliability Engineering, capítulos sobre troubleshooting; The Site Reliability Workbook, resposta a incidentes.',
    complements: [official.sreWorkbook], exampleFile: '../../examples/devops-senior/fundamentos-e-entrega.md'
  }),
  moduleOf({
    number: 3, part: 'fundamentos', id: 'configuracao-release', title: 'Configuração, artefato e contrato de release', level: 'Fundação',
    objective: 'Produzir um artefato imutável e promovê-lo entre ambientes sem reconstrução nem segredo embutido.',
    prerequisites: ['Git', 'Build automatizado', 'Configuração por ambiente'],
    problem: 'Reconstruir por ambiente cria binários diferentes e torna rollback não determinístico.',
    concepts: ['Artefato imutável', 'Configuração externa', 'Versionamento semântico', 'Proveniência', 'Migração compatível'],
    internals: ['Build gera identidade; release decide exposição.', 'Configuração muda comportamento sem alterar bytes.', 'Migrações expand-contract preservam compatibilidade durante rollout.'],
    useWhen: ['Promover o mesmo artefato.', 'Auditar exatamente o que foi implantado.'],
    avoidWhen: ['Não versionar apenas como latest.', 'Não guardar segredo na imagem.'],
    contrast: { bad: 'Cada ambiente recompila com variáveis próprias.', good: 'Um artefato assinado recebe configuração e política no deploy.' },
    tradeoffs: ['Imutabilidade exige registry confiável.', 'Compatibilidade aumenta passos.', 'Config externa precisa de validação.'],
    production: 'Rollback falha porque a imagem anterior é incompatível com schema já migrado; expand-contract teria preservado os dois binários.',
    risks: ['Tag mutável.', 'Segredo em layer.', 'Migração destrutiva antes da aplicação.'],
    checklist: ['Artefato tem digest?', 'Build é único?', 'Configuração é validada?', 'Migração é compatível?', 'Rollback inclui dados?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Build e release são a mesma coisa?', expected: 'Build cria artefato; release o torna disponível; deploy altera ambiente.' },
      { level: 'Sênior/Staff', question: 'Como liberar mudança incompatível de schema?', expected: 'Expand-contract, compatibilidade de versões, observação e remoção posterior.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Gerar artefato com versão e digest.', evidence: 'Registro do build e checksum.' },
      { level: 'Aplicado', task: 'Promover o mesmo digest em dois ambientes.', evidence: 'Manifestos e comprovação de identidade.' },
      { level: 'Sênior', task: 'Executar migração expand-contract com rollback.', evidence: 'Teste das duas versões e plano de reversão.' }
    ],
    challenge: 'Projetar release sem downtime para aplicação e schema que evoluem em ritmos diferentes.',
    book: 'Continuous Delivery, capítulos 2, 6, 10 e 12.',
    complements: [official.githubActions], exampleFile: '../../examples/devops-senior/fundamentos-e-entrega.md'
  }),
  moduleOf({
    number: 4, part: 'fundamentos', id: 'deployment-pipeline', title: 'Deployment pipeline e estratégia de testes', level: 'Aplicado',
    objective: 'Projetar pipeline que falhe cedo, preserve diagnóstico e promova somente artefato comprovado.',
    prerequisites: ['Testes automatizados', 'Artefato imutável', 'Runner de CI'],
    problem: 'Pipeline longo, flakey e opaco vira fila ignorada em vez de mecanismo de confiança.',
    concepts: ['Commit stage', 'Test pyramid', 'Gates', 'Paralelismo', 'Cache verificável'],
    internals: ['O commit stage rejeita rápido defeitos baratos.', 'Fan-out reduz duração até o limite de recursos e dependências.', 'Cache sem chave completa pode servir resultado incorreto.'],
    useWhen: ['Automatizar feedback repetível.', 'Separar verificação de promoção.'],
    avoidWhen: ['Não serializar jobs independentes.', 'Não mascarar falha com retry indiscriminado.'],
    contrast: { bad: 'Um job monolítico recompila tudo e permite deploy manual fora do fluxo.', good: 'Stages pequenos publicam artefato único, evidência e promoção controlada.' },
    tradeoffs: ['Mais paralelismo custa runners.', 'Gates reduzem velocidade aparente.', 'Ambientes efêmeros custam provisionamento.'],
    production: 'Teste flakey bloqueia hotfix; a equipe o ignora e normaliza pipeline vermelho, removendo o principal sinal de qualidade.',
    risks: ['Segredo no log.', 'Dependência não fixada.', 'Pipeline com permissão excessiva.'],
    checklist: ['Falha rápida?', 'Artefato é reutilizado?', 'Logs explicam causa?', 'Permissões são mínimas?', 'Promoção tem política?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual deve ser o primeiro gate?', expected: 'Verificação barata, determinística e de alto sinal.' },
      { level: 'Sênior/Staff', question: 'Como reduzir duração sem reduzir confiança?', expected: 'Perfil de tempos, paralelismo, seleção segura, cache correto e ambientes efêmeros.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Criar pipeline de build, lint e teste.', evidence: 'Execução verde a partir de clone limpo.' },
      { level: 'Aplicado', task: 'Plantar três falhas e medir tempo até diagnóstico.', evidence: 'Runs vermelhos e tabela de feedback.' },
      { level: 'Sênior', task: 'Reduzir p95 do pipeline preservando cobertura.', evidence: 'Baseline, alteração e comparação.' }
    ],
    challenge: 'Desenhar pipeline para monorepo que evita testes irrelevantes sem omitir impactos transitivos.',
    book: 'Continuous Delivery, capítulos 3-9; The DevOps Handbook, práticas de fluxo e feedback.',
    complements: [official.githubActions, official.dora], exampleFile: '../../examples/devops-senior/fundamentos-e-entrega.md'
  }),
  moduleOf({
    number: 5, part: 'fundamentos', id: 'metricas-entrega', title: 'Métricas DORA e melhoria baseada em evidência', level: 'Aplicado',
    objective: 'Calcular métricas de entrega com definições auditáveis e usá-las para testar uma hipótese de melhoria.',
    prerequisites: ['Eventos de commit, deploy e incidente', 'Noções de percentis', 'Mapa de fluxo'],
    problem: 'Contadores sem definição comum geram comparação falsa, gaming e decisões locais.',
    concepts: ['Deployment frequency', 'Lead time for changes', 'Change failure rate', 'Failed deployment recovery time', 'Reliability'],
    internals: ['A unidade de mudança precisa ser consistente.', 'Percentis revelam cauda escondida pela média.', 'Métricas funcionam em conjunto; otimizar uma isolada distorce comportamento.'],
    useWhen: ['Avaliar tendência do mesmo sistema.', 'Priorizar capacidade de entrega.'],
    avoidWhen: ['Não ranquear indivíduos.', 'Não comparar contextos sem normalização.'],
    contrast: { bad: 'Meta de deploys força mudanças artificiais.', good: 'Equipe define eventos, acompanha tendência e conecta melhoria a resultado e confiabilidade.' },
    tradeoffs: ['Instrumentação exige qualidade de dados.', 'Definição uniforme perde nuance.', 'Janela curta reage a ruído.'],
    production: 'Frequência sobe, mas falhas e recuperação pioram; o conjunto mostra que throughput aumentou sem capacidade operacional.',
    risks: ['Goodhart.', 'Deploy fantasma.', 'Incidente sem vínculo com mudança.'],
    checklist: ['Eventos estão definidos?', 'Bots são tratados?', 'Percentis existem?', 'Confiabilidade acompanha velocidade?', 'Hipótese tem janela?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Quais métricas DORA medem entrega?', expected: 'Frequência, lead time, falha de mudança, recuperação e confiabilidade no modelo atual.' },
      { level: 'Sênior/Staff', question: 'Por que DORA não deve avaliar indivíduo?', expected: 'Mede capacidade sociotécnica; incentivo individual produz gaming e otimização local.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Definir eventos e calcular métricas em amostra.', evidence: 'Query e dicionário de dados.' },
      { level: 'Aplicado', task: 'Construir painel com tendência e percentis.', evidence: 'Dashboard com filtros e definições.' },
      { level: 'Sênior', task: 'Executar experimento de melhoria.', evidence: 'Hipótese, baseline, resultado e limite.' }
    ],
    challenge: 'Explicar queda de lead time que não melhorou satisfação nem confiabilidade.',
    book: 'Accelerate, partes I-III; The DevOps Handbook, feedback e melhoria contínua.',
    complements: [official.dora], exampleFile: '../../examples/devops-senior/fundamentos-e-entrega.md'
  }),
  moduleOf({
    number: 6, part: 'plataforma', id: 'containers-supply-chain', title: 'Imagens, runtime e supply chain de containers', level: 'Aplicado',
    objective: 'Construir imagem mínima, não privilegiada, reproduzível e rastreável por digest, SBOM e proveniência.',
    prerequisites: ['Dockerfile', 'Linux namespaces e permissões básicas', 'Registry'],
    problem: 'Imagem funciona localmente, mas carrega ferramentas, CVEs, segredos e usuário root para produção.',
    concepts: ['Layers e cache', 'Multi-stage build', 'Digest', 'SBOM', 'Runtime não privilegiado'],
    internals: ['Layer permanece no histórico mesmo após remoção posterior.', 'Digest identifica conteúdo; tag é ponteiro mutável.', 'Base menor reduz superfície, mas exige diagnóstico externo.'],
    useWhen: ['Empacotar processo com contrato de runtime.', 'Promover conteúdo idêntico.'],
    avoidWhen: ['Não usar container como VM.', 'Não instalar depuradores permanentes sem necessidade.'],
    contrast: { bad: 'Imagem latest, root e segredo em ARG.', good: 'Build multi-stage, dependências fixadas, usuário sem privilégio, digest, SBOM e assinatura.' },
    tradeoffs: ['Imagem mínima dificulta shell de emergência.', 'Scan gera falsos positivos.', 'Fixar digest exige rotina de atualização.'],
    production: 'Token removido do último layer continua recuperável no histórico da imagem publicada.',
    risks: ['Base abandonada.', 'Privilégio excessivo.', 'Dependência não fixada.'],
    checklist: ['Base é mantida?', 'Usuário é não root?', 'Segredo ficou fora?', 'Digest e SBOM existem?', 'Imagem inicia read-only?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que apagar segredo depois não basta?', expected: 'Layers são imutáveis; conteúdo anterior continua no histórico.' },
      { level: 'Sênior/Staff', question: 'Como equilibrar imagem mínima e diagnósticos?', expected: 'Ephemeral debug, observabilidade externa, imagem de suporte controlada e política.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Converter Dockerfile para multi-stage.', evidence: 'Imagem menor com teste funcional.' },
      { level: 'Aplicado', task: 'Gerar SBOM e executar como não root.', evidence: 'SBOM, scan e teste de permissão.' },
      { level: 'Sênior', task: 'Assinar e verificar imagem no deploy.', evidence: 'Política que rejeita artefato não verificado.' }
    ],
    challenge: 'Projetar patch de CVE crítica preservando reprodutibilidade e evidência do artefato.',
    book: 'Continuous Delivery, configuração e artefatos; The DevOps Handbook, segurança integrada.',
    complements: [official.docker, official.slsa], exampleFile: '../../examples/devops-senior/plataforma-e-iac.md'
  }),
  moduleOf({
    number: 7, part: 'plataforma', id: 'kubernetes-workloads', title: 'Workloads, scheduling e ciclo de vida Kubernetes', level: 'Aplicado',
    objective: 'Implantar workload Kubernetes com requests, limits, probes, rollout e política de interrupção justificadas.',
    prerequisites: ['Containers', 'YAML', 'Rede e armazenamento básicos'],
    problem: 'Manifesto sem contrato de recurso e saúde funciona em teste e colapsa sob pressão ou rollout.',
    concepts: ['Pod e controller', 'Requests e limits', 'Readiness/liveness/startup probes', 'Scheduling', 'Rolling update'],
    internals: ['Scheduler usa requests, não uso real.', 'Readiness remove endpoint sem reiniciar processo.', 'Controller reconcilia estado desejado; não executa sequência imperativa.'],
    useWhen: ['Operar workloads declarativos.', 'Escalar e recuperar processos replicáveis.'],
    avoidWhen: ['Não adotar cluster para um único processo simples sem capacidade operacional.', 'Não usar liveness para dependência externa.'],
    contrast: { bad: 'Sem requests, probe única e latest.', good: 'Recursos medidos, probes semânticas, digest e rollout observado.' },
    tradeoffs: ['Limits protegem vizinhos e podem causar throttling/OOM.', 'Probe agressiva cria cascata.', 'Replica aumenta custo.'],
    production: 'Liveness consulta banco; falha do banco reinicia todos os pods e amplifica a recuperação.',
    risks: ['Eviction.', 'CrashLoopBackOff.', 'Rollout sem capacidade.'],
    checklist: ['Requests vêm de medida?', 'Probes têm papéis distintos?', 'Rollout preserva capacidade?', 'PDB é coerente?', 'Imagem usa digest?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Readiness e liveness diferem como?', expected: 'Readiness controla tráfego; liveness reinicia processo incapaz de se recuperar.' },
      { level: 'Sênior/Staff', question: 'Por que limit de CPU pode aumentar latência?', expected: 'Quota e throttling no cgroup mesmo com CPU disponível no nó.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Implantar Deployment e Service.', evidence: 'Manifestos e rollout concluído.' },
      { level: 'Aplicado', task: 'Calibrar probes e recursos sob carga.', evidence: 'Métricas antes/depois e eventos.' },
      { level: 'Sênior', task: 'Simular drain durante rollout.', evidence: 'Teste de interrupção sem perda acima do SLO.' }
    ],
    challenge: 'Defender quando não usar Kubernetes para este produto.',
    book: 'Kubernetes: Up and Running, capítulos de Pods, Deployments, Services e aplicações reais.',
    complements: [official.kubernetes, official.kubernetesDebug], exampleFile: '../../examples/devops-senior/plataforma-e-iac.md'
  }),
  moduleOf({
    number: 8, part: 'plataforma', id: 'kubernetes-rede-seguranca', title: 'Rede, configuração, storage e segurança Kubernetes', level: 'Avançado',
    objective: 'Segmentar comunicação, identidade, configuração e persistência Kubernetes com menor privilégio e diagnóstico reproduzível.',
    prerequisites: ['Workloads Kubernetes', 'DNS, TCP e TLS', 'IAM e segredo'],
    problem: 'Cluster plano permite movimento lateral, dependências implícitas e exposição de credenciais.',
    concepts: ['Service e DNS', 'Ingress/Gateway', 'NetworkPolicy', 'RBAC e ServiceAccount', 'PersistentVolume e Secret'],
    internals: ['Service oferece endereço virtual para endpoints mutáveis.', 'NetworkPolicy depende do plugin de rede.', 'Secret codificado em base64 não é criptografia.'],
    useWhen: ['Declarar fronteiras de tráfego.', 'Separar identidade de workload.'],
    avoidWhen: ['Não expor tudo por Ingress.', 'Não compartilhar ServiceAccount padrão.'],
    contrast: { bad: 'Namespace único, allow-all e segredo no manifesto.', good: 'Default deny, identidade por workload, secret store e contratos de rede explícitos.' },
    tradeoffs: ['Segmentação aumenta diagnóstico.', 'Storage stateful amplia operação.', 'Rotação exige integração.'],
    production: 'Aplicação comprometida acessa banco de outra equipe porque nenhuma NetworkPolicy limita egress.',
    risks: ['DNS bloqueado.', 'RBAC curinga.', 'Volume preso a zona.'],
    checklist: ['Existe default deny?', 'Egress necessário está declarado?', 'RBAC evita curingas?', 'Segredo rota?', 'Storage tem recuperação testada?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'NetworkPolicy funciona sozinha?', expected: 'Precisa de CNI que a implemente; seleção e direção importam.' },
      { level: 'Sênior/Staff', question: 'Como depurar Service sem endpoints?', expected: 'Selector, labels, EndpointSlice, readiness, porta-alvo e políticas.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Mapear Service até Pod.', evidence: 'Diagrama e comandos de verificação.' },
      { level: 'Aplicado', task: 'Aplicar default deny e liberar fluxo mínimo.', evidence: 'Teste positivo e negativo.' },
      { level: 'Sênior', task: 'Rotacionar segredo sem indisponibilidade.', evidence: 'Runbook e prova das duas versões.' }
    ],
    challenge: 'Projetar isolamento multi-tenant e declarar o risco residual.',
    book: 'Kubernetes: Up and Running, Services, ConfigMaps, Secrets, RBAC e storage.',
    complements: [official.networkPolicy, official.kubernetesDebug], exampleFile: '../../examples/devops-senior/plataforma-e-iac.md'
  }),
  moduleOf({
    number: 9, part: 'plataforma', id: 'terraform-state-modulos', title: 'Terraform state, módulos e composição', level: 'Aplicado',
    objective: 'Projetar state remoto, locking, módulos pequenos e composição com blast radius explícito.',
    prerequisites: ['Cloud e IAM', 'HCL básico', 'Git e pipeline'],
    problem: 'State monolítico ou local mistura equipes, amplia impacto e permite concorrência destrutiva.',
    concepts: ['State e binding', 'Backend remoto', 'Locking', 'Módulo root/child', 'Outputs e dependências'],
    internals: ['State liga endereço lógico a objeto remoto.', 'Plan compara configuração, state e leitura do provider.', 'Módulo é unidade de composição; state é unidade operacional.'],
    useWhen: ['Gerenciar lifecycle declarativo.', 'Reutilizar abstração estável.'],
    avoidWhen: ['Não guardar state no Git.', 'Não criar módulo para cada recurso isolado.'],
    contrast: { bad: 'Um state global e módulo universal.', good: 'States por ciclo de vida, backend protegido e módulos orientados a capacidade.' },
    tradeoffs: ['Mais states reduzem blast radius e aumentam coordenação.', 'Módulos abstraem e podem esconder decisões.', 'Lock reduz concorrência.'],
    production: 'Pipeline concorrente sobrescreve state local e planeja recriar recurso crítico.',
    risks: ['State com segredo.', 'Target como rotina.', 'Provider atualizado sem lockfile.'],
    checklist: ['Backend cifra e controla acesso?', 'Lock existe?', 'Blast radius é aceitável?', 'Módulo tem contrato?', 'Versões estão fixadas?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que Terraform precisa de state?', expected: 'Mapear objetos, guardar metadados e calcular mudanças.' },
      { level: 'Sênior/Staff', question: 'Como escolher fronteira de state?', expected: 'Ciclo de vida, ownership, blast radius, frequência, dependência e recuperação.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Configurar backend remoto e locking.', evidence: 'Init e tentativa concorrente bloqueada.' },
      { level: 'Aplicado', task: 'Extrair módulo com contrato.', evidence: 'Inputs, outputs, versão e exemplo.' },
      { level: 'Sênior', task: 'Dividir state sem recriar recurso.', evidence: 'Plano sem mudança destrutiva e runbook.' }
    ],
    challenge: 'Migrar state crítico entre backends com janela e rollback definidos.',
    book: 'Terraform: Up & Running, capítulos 3, 4, 8 e 10; Infrastructure as Code, partes II e IV.',
    complements: [official.terraformState, official.terraformModules], exampleFile: '../../examples/devops-senior/plataforma-e-iac.md'
  }),
  moduleOf({
    number: 10, part: 'plataforma', id: 'iac-testes-politicas', title: 'Testes, policy as code e entrega de infraestrutura', level: 'Avançado',
    objective: 'Construir pipeline de IaC com validação, plano revisável, testes, política e promoção controlada.',
    prerequisites: ['Terraform state e módulos', 'CI/CD', 'IAM e custos cloud'],
    problem: 'Aplicar infraestrutura diretamente da máquina local remove revisão, rastreabilidade e limites.',
    concepts: ['Static validation', 'Plan como artefato', 'Terraform test', 'Policy as code', 'Drift'],
    internals: ['Validação sintática não prova comportamento remoto.', 'Plan pode envelhecer entre revisão e apply.', 'Teste de infraestrutura pode criar recursos reais e custo.'],
    useWhen: ['Revisar mudança antes do apply.', 'Codificar guardrails repetíveis.'],
    avoidWhen: ['Não aprovar só pelo diff textual.', 'Não executar teste destrutivo em conta compartilhada.'],
    contrast: { bad: 'Apply local com credencial admin.', good: 'Identidade efêmera, plan vinculado ao commit, política, aprovação proporcional e apply único.' },
    tradeoffs: ['Ambiente de teste custa.', 'Política rígida bloqueia exceção legítima.', 'Drift remediation pode apagar correção emergencial.'],
    production: 'Plan aprovado muda porque provider e dados remotos foram atualizados antes do apply.',
    risks: ['TOCTOU.', 'Credencial longa.', 'Cleanup incompleto.'],
    checklist: ['Plan pertence ao commit?', 'Identidade é efêmera?', 'Teste usa conta isolada?', 'Política tem exceção auditada?', 'Drift gera ação clara?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Validate substitui plan?', expected: 'Não; validate checa configuração, plan calcula efeitos com state/provider.' },
      { level: 'Sênior/Staff', question: 'Como testar módulo sem criar custo órfão?', expected: 'Mocks quando cabíveis, conta efêmera, tags, budget, cleanup e reconciliação.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Adicionar fmt, validate e plan ao CI.', evidence: 'Pipeline e plan anexado.' },
      { level: 'Aplicado', task: 'Escrever terraform test com assertions.', evidence: 'Teste verde e falha intencional.' },
      { level: 'Sênior', task: 'Bloquear recurso público por política.', evidence: 'Policy testada e exceção documentada.' }
    ],
    challenge: 'Projetar break-glass que preserve velocidade de incidente e reconciliação posterior.',
    book: 'Terraform: Up & Running, capítulos 8-10; Infrastructure as Code, parte V.',
    complements: [official.terraformTest, official.terraformState], exampleFile: '../../examples/devops-senior/plataforma-e-iac.md'
  }),
  moduleOf({
    number: 11, part: 'confiabilidade', id: 'telemetria-correlacao', title: 'Telemetria, contexto e OpenTelemetry', level: 'Aplicado',
    objective: 'Instrumentar logs, métricas e traces correlacionáveis com atributos semânticos, limites de cardinalidade e custo.',
    prerequisites: ['Serviço distribuído', 'HTTP e filas', 'Logs estruturados'],
    problem: 'Sinais desconectados obrigam busca manual e não respondem por que um usuário específico falhou.',
    concepts: ['Trace e span', 'Context propagation', 'Metric temporality', 'Structured events', 'Semantic conventions'],
    internals: ['Contexto precisa atravessar processos e filas.', 'Alta cardinalidade é útil para exploração e cara para índices.', 'Collector separa instrumentação de exportação e processamento.'],
    useWhen: ['Correlacionar jornada ponta a ponta.', 'Trocar backend sem reinstrumentar tudo.'],
    avoidWhen: ['Não registrar payload sensível.', 'Não transformar todo campo em label de métrica.'],
    contrast: { bad: 'Logs textuais sem request id e métricas por endpoint bruto.', good: 'Eventos estruturados, trace context, métricas agregadas e política de amostragem.' },
    tradeoffs: ['Mais detalhe aumenta custo.', 'Sampling perde eventos.', 'Padronização limita atributos livres.'],
    production: 'ID de cliente vira label Prometheus e explode séries; a mesma dimensão deveria estar em trace/evento.',
    risks: ['PII.', 'Cardinalidade.', 'Contexto quebrado em async.'],
    checklist: ['Sinais compartilham IDs?', 'Atributos seguem convenção?', 'PII foi removida?', 'Cardinalidade tem limite?', 'Collector tem backpressure?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que usar Collector?', expected: 'Receber, processar e exportar com desacoplamento e controle operacional.' },
      { level: 'Sênior/Staff', question: 'Onde colocar alta cardinalidade?', expected: 'Eventos/traces para exploração; métricas agregadas para alerta e tendência.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Propagar trace id por duas chamadas.', evidence: 'Trace com spans pai/filho.' },
      { level: 'Aplicado', task: 'Configurar Collector com redaction e batch.', evidence: 'Config e prova de remoção de PII.' },
      { level: 'Sênior', task: 'Medir custo e perda sob sampling.', evidence: 'Experimento com volume, custo e lacunas.' }
    ],
    challenge: 'Desenhar observabilidade multi-tenant sem vazar dados e sem cardinalidade ilimitada.',
    book: 'Observability Engineering, partes I-II.',
    complements: [official.otel, official.otelSemconv], exampleFile: '../../examples/devops-senior/confiabilidade-sre.md'
  }),
  moduleOf({
    number: 12, part: 'confiabilidade', id: 'sli-slo-error-budget', title: 'SLI, SLO e error budget', level: 'Aplicado',
    objective: 'Definir SLI orientado ao usuário, calcular SLO em janela explícita e aplicar uma política de error budget.',
    prerequisites: ['Telemetria confiável', 'Percentis e proporções', 'Jornada crítica do usuário'],
    problem: 'Meta de disponibilidade vaga não orienta mudança, risco nem prioridade.',
    concepts: ['SLI', 'SLO', 'Error budget', 'Burn rate', 'Janela rolante'],
    internals: ['SLI mede eventos bons sobre válidos.', 'Budget converte confiabilidade em tolerância explícita a falhas.', 'Burn rate compara consumo atual ao ritmo sustentável.'],
    useWhen: ['Arbitrar velocidade versus confiabilidade.', 'Alertar por risco ao objetivo.'],
    avoidWhen: ['Não usar 100%.', 'Não medir apenas saúde interna.'],
    contrast: { bad: 'Uptime mensal do servidor.', good: 'Proporção de requisições elegíveis que atende sucesso e latência, com exclusões documentadas.' },
    tradeoffs: ['SLO rigoroso aumenta custo.', 'Janela longa reage devagar.', 'Exclusões podem esconder impacto.'],
    production: 'Serviço está up, mas checkout excede latência; uptime não captura experiência e budget de latência é consumido.',
    risks: ['Denominador errado.', 'Dados atrasados.', 'SLO sem política.'],
    checklist: ['Usuário e jornada estão claros?', 'Evento válido está definido?', 'Fonte é confiável?', 'Janela é explícita?', 'Ação ao consumir budget existe?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'SLA e SLO diferem como?', expected: 'SLO é objetivo interno; SLA é compromisso com consequências, geralmente contratuais.' },
      { level: 'Sênior/Staff', question: 'Como escolher SLO?', expected: 'Necessidade do usuário, baseline, custo, dependências e capacidade de resposta.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Definir SLI de disponibilidade e latência.', evidence: 'Especificação com numerador e denominador.' },
      { level: 'Aplicado', task: 'Calcular budget e burn rate.', evidence: 'Query e painel em janela rolante.' },
      { level: 'Sênior', task: 'Aplicar política após consumo.', evidence: 'Decisão de release e revisão do backlog.' }
    ],
    challenge: 'Defender SLO diferente por jornada sem criar contrato impossível de operar.',
    book: 'Site Reliability Engineering, capítulos 3-4; The Site Reliability Workbook, capítulos de SLO.',
    complements: [official.sre, official.sreWorkbook], exampleFile: '../../examples/devops-senior/confiabilidade-sre.md'
  }),
  moduleOf({
    number: 13, part: 'confiabilidade', id: 'alertas-incidentes', title: 'Alertas, on-call e resposta a incidentes', level: 'Avançado',
    objective: 'Projetar alerta acionável e conduzir incidente com papéis, comunicação, mitigação e timeline verificáveis.',
    prerequisites: ['SLI e SLO', 'Alertmanager ou equivalente', 'Runbooks'],
    problem: 'Alertas ruidosos exaurem on-call; incidentes sem comando produzem ações conflitantes.',
    concepts: ['Symptom-based alert', 'Multi-window burn rate', 'Incident command', 'Mitigation', 'Postmortem sem culpa'],
    internals: ['Alerta deve representar ação humana urgente.', 'Agrupamento e deduplicação controlam tempestade.', 'Mitigação reduz impacto antes da causa raiz.'],
    useWhen: ['Risco ao SLO exige resposta.', 'Coordenar incidente multi-equipe.'],
    avoidWhen: ['Não paginar por toda anomalia.', 'Não investigar causa antes de conter impacto quando o dano cresce.'],
    contrast: { bad: 'CPU alta pagina sem contexto.', good: 'Burn rate do SLO pagina com impacto, dashboard, runbook e ownership.' },
    tradeoffs: ['Sensibilidade antecipa falha e aumenta ruído.', 'Automação acelera e pode amplificar erro.', 'Postmortem custa tempo e gera aprendizado.'],
    production: 'Alerta por CPU dispara durante batch saudável; um burn alert da jornada teria permanecido silencioso.',
    risks: ['Fadiga.', 'Canal único.', 'Timeline reconstruída por memória.'],
    checklist: ['Alerta exige ação agora?', 'Impacto está descrito?', 'Runbook é acessível?', 'Há incident commander?', 'Ações têm timestamp?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que torna um alerta acionável?', expected: 'Impacto, urgência, responsável, contexto e ação concreta.' },
      { level: 'Sênior/Staff', question: 'Por que mitigar antes de achar root cause?', expected: 'Reduz dano e compra tempo; investigação continua com sistema estabilizado.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Converter alerta de infraestrutura em sintoma.', evidence: 'Regra, severidade e runbook.' },
      { level: 'Aplicado', task: 'Executar incidente simulado.', evidence: 'Timeline, papéis e comunicação.' },
      { level: 'Sênior', task: 'Escrever postmortem com ações sistêmicas.', evidence: 'Documento revisado sem culpabilização.' }
    ],
    challenge: 'Reduzir 60% do volume de páginas sem aumentar falhas não detectadas.',
    book: 'The Site Reliability Workbook, monitoramento e incident response; Site Reliability Engineering, práticas.',
    complements: [official.alertmanager, official.sreWorkbook], exampleFile: '../../examples/devops-senior/confiabilidade-sre.md'
  }),
  moduleOf({
    number: 14, part: 'confiabilidade', id: 'capacidade-resiliencia', title: 'Capacidade, degradação e resiliência', level: 'Avançado',
    objective: 'Dimensionar capacidade por carga e saturação e validar timeout, retry, backoff, limite e degradação controlada.',
    prerequisites: ['Métricas de recurso e negócio', 'Sistemas distribuídos', 'Teste de carga'],
    problem: 'Escalar componente isolado ou repetir sem limite transforma lentidão em cascata.',
    concepts: ['Demand e utilization', 'Queueing', 'Timeout budget', 'Retry amplification', 'Load shedding'],
    internals: ['Filas escondem saturação até a latência explodir.', 'Retries multiplicam carga quando dependência já falha.', 'Degradação preserva função crítica sacrificando opcional.'],
    useWhen: ['Planejar pico e crescimento.', 'Conter falha transitória sem cascata.'],
    avoidWhen: ['Não retry em operação não idempotente sem proteção.', 'Não autoscalar por métrica atrasada sem limite.'],
    contrast: { bad: 'Timeout padrão e três retries em cada camada.', good: 'Budget ponta a ponta, jitter, limite, idempotência e shedding.' },
    tradeoffs: ['Headroom custa.', 'Shedding reduz funcionalidade.', 'Fila absorve burst e aumenta latência.'],
    production: 'Dependência lenta recebe nove vezes mais chamadas por retries em três camadas e colapsa.',
    risks: ['Retry storm.', 'Autoscaling atrasado.', 'Capacidade sem teste de falha.'],
    checklist: ['Carga é medida em unidade útil?', 'Saturação tem sinal?', 'Timeout cabe no budget?', 'Retry tem limite/jitter?', 'Modo degradado foi testado?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Quando retry piora falha?', expected: 'Sob saturação, não idempotência, timeout ruim ou multiplicação por camadas.' },
      { level: 'Sênior/Staff', question: 'Como dimensionar headroom?', expected: 'Pico, crescimento, falha N+1, tempo de escala, SLO e custo.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Medir ponto de saturação.', evidence: 'Curvas de throughput, latência e erro.' },
      { level: 'Aplicado', task: 'Implementar timeout e jitter.', evidence: 'Teste de falha sem amplificação.' },
      { level: 'Sênior', task: 'Validar degradação controlada.', evidence: 'Game day e impacto por jornada.' }
    ],
    challenge: 'Manter jornada crítica dentro do SLO durante perda de uma zona.',
    book: 'Site Reliability Engineering, capítulos de overload e cascading failures; SRE Workbook.',
    complements: [official.sre, official.prometheus], exampleFile: '../../examples/devops-senior/confiabilidade-sre.md'
  }),
  moduleOf({
    number: 15, part: 'confiabilidade', id: 'backup-dr-game-day', title: 'Backup, disaster recovery e game day', level: 'Avançado',
    objective: 'Definir RTO e RPO, restaurar dados em ambiente limpo e provar continuidade por game day.',
    prerequisites: ['Arquitetura de dados', 'IaC', 'Runbooks e SLO'],
    problem: 'Backup não testado é uma hipótese; plano de DR sem execução não define tempo real de recuperação.',
    concepts: ['RTO', 'RPO', 'Backup e réplica', 'Restore', 'Game day'],
    internals: ['Réplica propaga corrupção; backup preserva ponto no tempo.', 'RTO inclui decisão, acesso, restore e validação.', 'Runbook envelhece com a arquitetura.'],
    useWhen: ['Proteger dado e serviço crítico.', 'Validar resposta antes do desastre.'],
    avoidWhen: ['Não chamar réplica de backup.', 'Não testar restore no mesmo ambiente comprometido.'],
    contrast: { bad: 'Job de backup verde sem restore.', good: 'Cópia imutável, inventário, restore isolado, validação e medição contra RTO/RPO.' },
    tradeoffs: ['RPO menor aumenta custo.', 'Restore frequente consome capacidade.', 'DR multi-região amplia complexidade.'],
    production: 'Snapshot existe, mas chave e permissão foram perdidas; o tempo de restore excede RTO.',
    risks: ['Backup corrupto.', 'Credencial indisponível.', 'Dependência externa esquecida.'],
    checklist: ['RTO/RPO têm dono?', 'Cópia é imutável?', 'Restore é automatizado?', 'Integridade é validada?', 'Game day gera ações?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'RTO e RPO significam o quê?', expected: 'Tempo para recuperar e perda máxima de dados aceitável.' },
      { level: 'Sênior/Staff', question: 'Por que réplica não é backup?', expected: 'Replica exclusão/corrupção; backup oferece retenção e ponto no tempo.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Documentar dependências de restore.', evidence: 'Inventário e sequência.' },
      { level: 'Aplicado', task: 'Restaurar em ambiente vazio.', evidence: 'Log, duração e validação de dados.' },
      { level: 'Sênior', task: 'Executar game day de perda regional.', evidence: 'Timeline, RTO/RPO medidos e ações.' }
    ],
    challenge: 'Projetar recuperação quando plano de controle e identidade primária também falham.',
    book: 'Site Reliability Engineering e The Site Reliability Workbook, disaster recovery e preparedness.',
    complements: [official.sreWorkbook], exampleFile: '../../examples/devops-senior/confiabilidade-sre.md'
  }),
  moduleOf({
    number: 16, part: 'operacao', id: 'platform-engineering', title: 'Platform engineering e golden paths', level: 'Sênior',
    objective: 'Projetar golden path como produto self-service com contrato, guardrails, telemetria e feedback de adoção.',
    prerequisites: ['CI/CD, Kubernetes e IaC', 'Catálogo de serviços', 'Pesquisa com desenvolvedores'],
    problem: 'Portal sem produto vira camada de tickets; autonomia sem guardrails multiplica variações inseguras.',
    concepts: ['Internal developer platform', 'Golden path', 'Self-service', 'Software catalog', 'Platform as a product'],
    internals: ['Golden path reduz carga cognitiva sem bloquear escape hatch.', 'Catálogo liga ownership, lifecycle e recursos.', 'Adoção é resultado; volume de componentes não prova valor.'],
    useWhen: ['Capacidade repetida atravessa equipes.', 'Guardrails precisam chegar no fluxo.'],
    avoidWhen: ['Não construir portal antes de descobrir dor.', 'Não centralizar toda operação na plataforma.'],
    contrast: { bad: 'Equipe de plataforma recebe YAML por ticket.', good: 'Template cria serviço operável com ownership, pipeline, SLO e documentação.' },
    tradeoffs: ['Padronização reduz escolha.', 'Self-service exige suporte.', 'Abstração pode vazar.'],
    production: 'Template acelera criação, mas não prevê upgrade; dezenas de serviços ficam presos a versão insegura.',
    risks: ['Plataforma mandatória.', 'Golden path sem lifecycle.', 'Métrica de adoção vaidosa.'],
    checklist: ['Problema foi pesquisado?', 'Contrato inclui upgrade?', 'Escape hatch existe?', 'Ownership está no catálogo?', 'Adoção mede tempo/qualidade?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que diferencia plataforma de time de operações?', expected: 'Produto self-service com interfaces e feedback, não execução manual centralizada.' },
      { level: 'Sênior/Staff', question: 'Como evitar lock-in interno?', expected: 'Contratos, escape hatch, padrões abertos, lifecycle e feedback de consumidores.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Mapear jornada de criar serviço.', evidence: 'Service blueprint com dores.' },
      { level: 'Aplicado', task: 'Criar template de golden path.', evidence: 'Serviço gerado com pipeline e catálogo.' },
      { level: 'Sênior', task: 'Medir adoção e tempo até produção.', evidence: 'Baseline, coorte e feedback qualitativo.' }
    ],
    challenge: 'Defender o que a plataforma deliberadamente não abstrai.',
    book: 'The DevOps Handbook, enablement e arquitetura organizacional; Accelerate, transformação.',
    complements: [official.backstage, official.dora], exampleFile: '../../examples/devops-senior/operacao-e-lideranca.md'
  }),
  moduleOf({
    number: 17, part: 'operacao', id: 'devsecops-identidade', title: 'DevSecOps, identidade e proveniência', level: 'Sênior',
    objective: 'Aplicar menor privilégio, identidade efêmera, assinatura e verificação de proveniência do commit ao runtime.',
    prerequisites: ['Pipeline e registry', 'IAM', 'Containers e Kubernetes'],
    problem: 'Credenciais longas e artefatos não verificáveis transformam pipeline em caminho privilegiado de ataque.',
    concepts: ['Workload identity', 'OIDC federation', 'Least privilege', 'SLSA provenance', 'Policy enforcement'],
    internals: ['Identidade efêmera reduz janela de roubo.', 'Proveniência liga artefato a builder e entrada.', 'Assinatura sem política de verificação não muda risco.'],
    useWhen: ['Autorizar automação por contexto.', 'Bloquear artefato fora do fluxo.'],
    avoidWhen: ['Não compartilhar token entre jobs.', 'Não depender apenas de scan de CVE.'],
    contrast: { bad: 'Secret cloud permanente no CI.', good: 'OIDC, sessão curta, escopo por ambiente, proveniência e admission policy.' },
    tradeoffs: ['Política adiciona dependência.', 'Rotação exige automação.', 'Verificação pode bloquear emergência.'],
    production: 'Token de CI vaza em log e cria recurso; federação com audiência e sessão curta limitaria alcance.',
    risks: ['Confused deputy.', 'Permissão curinga.', 'Builder comprometido.'],
    checklist: ['Credencial é efêmera?', 'Audiência e subject são restritos?', 'Artefato tem proveniência?', 'Deploy verifica?', 'Break-glass é auditado?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que OIDC reduz segredo no CI?', expected: 'Troca identidade do job por credencial curta sem armazenar chave longa.' },
      { level: 'Sênior/Staff', question: 'Assinar imagem basta?', expected: 'Não; precisa identidade confiável, proveniência, política, transparência e resposta.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Remover credencial longa do pipeline.', evidence: 'Federação OIDC funcionando.' },
      { level: 'Aplicado', task: 'Gerar e verificar proveniência.', evidence: 'Attestation ligada ao digest.' },
      { level: 'Sênior', task: 'Aplicar política de admissão.', evidence: 'Deploy não autorizado rejeitado.' }
    ],
    challenge: 'Projetar break-glass para hotfix sem destruir a cadeia de custódia.',
    book: 'The DevOps Handbook, segurança no fluxo; Continuous Delivery, configuração e acesso.',
    complements: [official.slsa], exampleFile: '../../examples/devops-senior/operacao-e-lideranca.md'
  }),
  moduleOf({
    number: 18, part: 'operacao', id: 'finops-capacidade', title: 'FinOps e custo unitário', level: 'Sênior',
    objective: 'Alocar custo por produto e unidade de valor, detectar anomalia e decidir otimização sem degradar SLO.',
    prerequisites: ['Tags/labels de ownership', 'Métricas de uso', 'SLO e capacidade'],
    problem: 'Corte linear de custo remove headroom e confiabilidade sem mostrar quem gera valor ou desperdício.',
    concepts: ['Allocation', 'Unit economics', 'Budget e forecast', 'Anomaly detection', 'Commitment e elasticity'],
    internals: ['Custo compartilhado precisa de regra explícita.', 'Unit cost separa crescimento saudável de ineficiência.', 'Compromisso troca desconto por risco de subutilização.'],
    useWhen: ['Priorizar otimização por impacto.', 'Conectar arquitetura a economia.'],
    avoidWhen: ['Não culpar equipe por custo sem ownership.', 'Não desligar redundância sem modelar risco.'],
    contrast: { bad: 'Meta de reduzir 20% em tudo.', good: 'Custo por transação, SLO, baseline e hipótese por driver.' },
    tradeoffs: ['Mais granularidade custa telemetria.', 'Headroom parece ocioso.', 'Spot reduz preço e aumenta interrupção.'],
    production: 'Rightsizing reduz réplicas e falha no pico; economia mensal é menor que perda de receita e budget.',
    risks: ['Tag ausente.', 'Custo compartilhado arbitrário.', 'Otimização sem teste de pico.'],
    checklist: ['Ownership está completo?', 'Custo unitário existe?', 'SLO limita corte?', 'Forecast considera sazonalidade?', 'Ação tem rollback?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que custo total pode subir de forma saudável?', expected: 'Volume e valor crescem; custo unitário e margem contextualizam.' },
      { level: 'Sênior/Staff', question: 'Como decidir reserved versus elastic?', expected: 'Baseline estável, previsão, risco, flexibilidade e horizonte de compromisso.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Criar política de tags e ownership.', evidence: 'Relatório de cobertura.' },
      { level: 'Aplicado', task: 'Calcular custo por transação.', evidence: 'Query e dashboard com drivers.' },
      { level: 'Sênior', task: 'Executar otimização com SLO.', evidence: 'Antes/depois de custo e confiabilidade.' }
    ],
    challenge: 'Defender headroom para diretoria com risco e valor quantificados.',
    book: 'Accelerate, performance organizacional; Infrastructure as Code, governança e evolução.',
    complements: [official.finops], exampleFile: '../../examples/devops-senior/operacao-e-lideranca.md'
  }),
  moduleOf({
    number: 19, part: 'operacao', id: 'estrategias-release', title: 'Estratégias de release e controle de mudança', level: 'Sênior',
    objective: 'Escolher rollout, canary, blue-green ou feature flag por risco, observabilidade, custo e reversibilidade.',
    prerequisites: ['Artefato imutável', 'SLO e telemetria', 'Automação de deploy'],
    problem: 'Toda mudança recebe a mesma cerimônia ou é exposta de uma vez, independentemente do risco.',
    concepts: ['Progressive delivery', 'Canary', 'Blue-green', 'Feature flag', 'Rollback e roll-forward'],
    internals: ['Deploy muda software; release muda exposição.', 'Canary exige segmentação e análise comparável.', 'Rollback de código não reverte automaticamente estado e efeitos.'],
    useWhen: ['Reduzir blast radius.', 'Separar implantação de exposição.'],
    avoidWhen: ['Não usar canary sem sinal confiável.', 'Não manter flag sem lifecycle.'],
    contrast: { bad: 'Big bang na janela noturna.', good: 'Risco classificado, exposição progressiva, gates automáticos e critério de abortar.' },
    tradeoffs: ['Blue-green duplica capacidade.', 'Canary aumenta complexidade estatística.', 'Flag acumula dívida.'],
    production: 'Canary parece saudável porque usuários de maior risco não entram na amostra.',
    risks: ['Amostra enviesada.', 'Migração irreversível.', 'Flag órfã.'],
    checklist: ['Risco foi classificado?', 'Coorte representa uso?', 'Gate mede jornada?', 'Estado é compatível?', 'Critério de abortar é automático?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Deploy e release diferem?', expected: 'Deploy instala; release expõe funcionalidade aos usuários.' },
      { level: 'Sênior/Staff', question: 'Quando canary não ajuda?', expected: 'Sem volume, sinal, segmentação comparável ou quando efeito é irreversível.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Executar blue-green com rollback.', evidence: 'Troca e tempo de recuperação.' },
      { level: 'Aplicado', task: 'Liberar feature por coorte.', evidence: 'Flag, métrica e remoção planejada.' },
      { level: 'Sênior', task: 'Automatizar abort de canary por SLO.', evidence: 'Falha plantada e rollback automático.' }
    ],
    challenge: 'Liberar migração de dados irreversível com exposição progressiva.',
    book: 'Continuous Delivery, capítulos 10 e 15; The DevOps Handbook, práticas de fluxo.',
    complements: [official.dora], exampleFile: '../../examples/devops-senior/operacao-e-lideranca.md'
  }),
  moduleOf({
    number: 20, part: 'operacao', id: 'sistema-sociotecnico', title: 'Sistema sociotécnico e melhoria contínua', level: 'Staff/Principal',
    objective: 'Conduzir melhoria operacional que altera política, arquitetura e aprendizagem sem criar dependência heroica.',
    prerequisites: ['Métricas de fluxo e confiabilidade', 'Postmortems', 'Ownership e plataforma'],
    problem: 'Ferramentas novas não corrigem incentivos, filas, silos nem conhecimento concentrado.',
    concepts: ['Three Ways', 'Conway e arquitetura', 'Blameless learning', 'Toil', 'Improvement kata'],
    internals: ['Estrutura de comunicação molda interfaces e handoffs.', 'Toil cresce linearmente e reduz capacidade de engenharia.', 'Segurança psicológica aumenta qualidade do relato, não ausência de responsabilização.'],
    useWhen: ['Transformar padrão recorrente.', 'Redesenhar ownership e feedback.'],
    avoidWhen: ['Não impor transformação por ferramenta.', 'Não usar postmortem para encontrar culpado.'],
    contrast: { bad: 'Criar time DevOps que recebe todos os tickets.', good: 'Times de produto operam com plataforma habilitadora, contratos e feedback comum.' },
    tradeoffs: ['Autonomia cria variação.', 'Padronização reduz exploração.', 'Eliminar toil exige investimento antes do retorno.'],
    production: 'Só uma pessoa sabe recuperar o serviço; cada incidente reforça heroísmo e impede documentação.',
    risks: ['Cargo sem autoridade.', 'Blameless sem ação.', 'Toil normalizado.'],
    checklist: ['Outcome é compartilhado?', 'Ownership inclui operação?', 'Toil é medido?', 'Ação tem dono e prazo?', 'Conhecimento foi exercitado por outro?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'DevOps é um cargo?', expected: 'É abordagem sociotécnica; funções existem, mas não substituem colaboração e ownership.' },
      { level: 'Sênior/Staff', question: 'Como reduzir heroísmo sem perder resposta rápida?', expected: 'Runbooks, rotação, automação, pairing, game days e melhoria de design.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Medir toil de uma semana.', evidence: 'Categorias, volume e impacto.' },
      { level: 'Aplicado', task: 'Automatizar um toil recorrente.', evidence: 'Tempo antes/depois e runbook.' },
      { level: 'Sênior', task: 'Conduzir improvement kata de 30 dias.', evidence: 'Condição-alvo, experimentos e aprendizado.' }
    ],
    challenge: 'Redesenhar interação entre plataforma e produtos com limites de responsabilidade e métricas de outcome.',
    book: 'The DevOps Handbook, Three Ways e transformação; Accelerate, parte III; The Phoenix Project.',
    complements: [official.dora, official.sre], exampleFile: '../../examples/devops-senior/operacao-e-lideranca.md'
  })
]);

export const devopsAssessment = Object.freeze({
  levels: [
    { level: 'Fundamentos', expected: 'Executa pipeline, container e diagnóstico guiado com comandos seguros.', evidence: 'Build verde, manifesto funcional e runbook reproduzido.', redFlags: 'Memoriza ferramentas, reinicia sem hipótese e não preserva evidência.' },
    { level: 'Júnior/Pleno', expected: 'Automatiza entrega e opera um serviço com recursos, logs, métricas e rollback.', evidence: 'Ambiente reproduzível e incidente simples resolvido.', redFlags: 'Pipeline depende de passos locais e alertas não têm ação.' },
    { level: 'Pleno forte', expected: 'Relaciona fluxo, IaC, SLO e falhas e mede efeito das mudanças.', evidence: 'Dashboard, plan revisado, SLO e game day.', redFlags: 'Otimiza métrica isolada e ignora custo operacional.' },
    { level: 'Sênior', expected: 'Projeta guardrails, reduz blast radius e conduz incidentes e evolução com trade-offs.', evidence: 'Plataforma evolutiva, policy as code e postmortem com ações.', redFlags: 'Escolhe ferramenta antes de restrições e depende de acesso heroico.' },
    { level: 'Staff/Principal', expected: 'Muda capacidade sociotécnica, conecta custo, confiabilidade e fluxo e influencia múltiplos times.', evidence: 'Outcome medido, padrão adotado e mecanismo de governança reversível.', redFlags: 'Centraliza decisões e confunde padronização com controle total.' }
  ],
  caseStudies: [
    {
      id: 'caso-pipeline-lento', title: 'Pipeline de 52 minutos e sempre vermelho',
      scenario: 'Monorepo executa tudo em série, testes flakey recebem retry e deploy manual contorna o CI.',
      constraints: ['Quatro equipes', 'Sem pausa de feature', 'Runner com custo limitado'],
      decisions: ['Perfilar tempo e falha', 'Separar commit stage', 'Corrigir ou quarentenar com dono', 'Reutilizar artefato'],
      deliverables: ['Mapa do pipeline', 'Plano incremental', 'Métrica p50/p95 e taxa de falha']
    },
    {
      id: 'caso-cluster-instavel', title: 'Cluster estável até o pico',
      scenario: 'Pods sem requests sofrem eviction, probes reiniciam aplicações e retry amplia a carga.',
      constraints: ['SLO de checkout', 'Capacidade limitada', 'Sem troca de plataforma'],
      decisions: ['Medir saturação', 'Calibrar recursos/probes', 'Limitar retry', 'Testar perda de nó'],
      deliverables: ['Manifests corrigidos', 'Teste de carga', 'Runbook de degradação']
    },
    {
      id: 'caso-state-compartilhado', title: 'State global bloqueia vinte times',
      scenario: 'Plan leva 40 minutos, lock vira fila e um módulo compartilhado pode destruir recursos cruzados.',
      constraints: ['Recursos existentes', 'Sem downtime', 'Auditoria obrigatória'],
      decisions: ['Fatiar por lifecycle/ownership', 'Migrar endereços', 'Proteger backend', 'Versionar módulos'],
      deliverables: ['Mapa de state', 'Plano de migração', 'Teste sem recriação']
    },
    {
      id: 'caso-alertas', title: 'On-call recebe 900 alertas por semana',
      scenario: 'Alertas por CPU e fila não refletem impacto; incidentes importantes se perdem no ruído.',
      constraints: ['Equipe pequena', 'SLO recente', 'Telemetria incompleta'],
      decisions: ['Inventariar ação', 'Criar burn alerts', 'Agrupar/deduplicar', 'Medir páginas úteis'],
      deliverables: ['Política de alerta', 'Runbooks', 'Comparação de volume e detecção']
    },
    {
      id: 'caso-custo-confiabilidade', title: 'Corte de custo ameaça confiabilidade',
      scenario: 'Diretoria exige redução de 25%; serviço tem crescimento sazonal e RTO não testado.',
      constraints: ['Prazo de 60 dias', 'SLO contratual', 'Custo compartilhado'],
      decisions: ['Alocar custo', 'Medir unit cost', 'Proteger headroom crítico', 'Testar DR antes do corte'],
      deliverables: ['Modelo econômico', 'Experimento de otimização', 'Risco residual e reversão']
    }
  ],
  projects: [
    {
      id: 'servico-operavel', title: 'Entrega 1 - Serviço operável',
      objective: 'Transformar uma aplicação existente em artefato imutável com pipeline, diagnóstico e rollback.',
      evolves: null,
      stages: ['Mapear fluxo e riscos', 'Criar build único', 'Adicionar pipeline e gates', 'Publicar e praticar rollback'],
      acceptance: ['Clone limpo produz artefato', 'Pipeline preserva logs e digest', 'Segredo não entra na imagem', 'Rollback cumpre limite declarado'],
      seniorSignal: 'Explica por que cada gate existe e remove um gate que não produz sinal.'
    },
    {
      id: 'plataforma-reproduzivel', title: 'Entrega 2 - Plataforma reproduzível',
      objective: 'Evoluir o serviço operável para infraestrutura versionada e workload Kubernetes protegido.',
      evolves: 'servico-operavel',
      stages: ['Criar módulos e state remoto', 'Adicionar testes/políticas', 'Implantar workload', 'Testar rede, recursos e rollout'],
      acceptance: ['Plan pertence ao commit', 'State possui locking e recuperação', 'Workload usa probes e recursos medidos', 'Default deny possui testes'],
      seniorSignal: 'Delimita blast radius e executa migração de state sem recriação.'
    },
    {
      id: 'produto-confiavel', title: 'Entrega 3 - Produto confiável',
      objective: 'Evoluir a plataforma com telemetria, SLO, alertas e resposta a incidentes.',
      evolves: 'plataforma-reproduzivel',
      stages: ['Instrumentar contexto', 'Definir SLI/SLO', 'Criar burn alerts', 'Executar incidente e postmortem'],
      acceptance: ['Trace correlaciona jornada', 'SLO tem política de budget', 'Página possui ação e runbook', 'Incidente gera ações sistêmicas'],
      seniorSignal: 'Reduz ruído sem criar falha silenciosa e demonstra custo da telemetria.'
    },
    {
      id: 'plataforma-autonoma', title: 'Entrega 4 - Plataforma autônoma e game day',
      objective: 'Evoluir o produto confiável para golden path self-service com segurança, custo e continuidade comprovados.',
      evolves: 'produto-confiavel',
      stages: ['Publicar template e catálogo', 'Aplicar identidade/proveniência', 'Medir custo unitário', 'Executar game day e revisão D30'],
      acceptance: ['Novo serviço nasce operável', 'Deploy rejeita artefato sem proveniência', 'Custo e SLO orientam capacidade', 'Restore e game day cumprem RTO/RPO'],
      seniorSignal: 'Demonstra adoção real, escape hatch e uma decisão revertida por evidência.'
    }
  ],
  completion: [
    'Conclui os 20 módulos com pelo menos um exercício aplicado por módulo.',
    'Produz artefato imutável, pipeline e ambiente reproduzível a partir de clone limpo.',
    'Demonstra state remoto, policy as code e workload Kubernetes com falhas testadas.',
    'Define SLI/SLO e diagnostica um incidente correlacionando logs, métricas e traces.',
    'Executa rollback, restore e game day dentro dos limites declarados.',
    'Entrega as quatro evoluções do mesmo produto com runbooks, decisões e métricas.',
    'Não marca Dominado antes de evidência HTTP(S) validada e revisão D30.'
  ]
});
