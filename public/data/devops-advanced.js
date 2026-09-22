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
  backstage: { label: 'Backstage - software catalog', url: 'https://backstage.io/docs/features/software-catalog/' },
  doraAi: { label: 'DORA - State of AI-assisted Software Development 2025', url: 'https://dora.dev/dora-report-2025/' },
  doraAiModel: { label: 'DORA - AI Capabilities Model', url: 'https://dora.dev/research/ai/capabilities-model/' },
  crd: { label: 'Kubernetes - Custom Resources e CRDs', url: 'https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/' },
  operatorPattern: { label: 'Kubernetes - Operator pattern', url: 'https://kubernetes.io/docs/concepts/extend-kubernetes/operator/' },
  controllerRuntime: { label: 'controller-runtime - biblioteca de controllers', url: 'https://github.com/kubernetes-sigs/controller-runtime' },
  kubebuilder: { label: 'Kubebuilder Book', url: 'https://book.kubebuilder.io/' },
  apiConventions: { label: 'Kubernetes - API conventions', url: 'https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md' },
  ebpf: { label: 'eBPF - documentação', url: 'https://ebpf.io/what-is-ebpf/' },
  cilium: { label: 'Cilium - rede e observabilidade com eBPF', url: 'https://docs.cilium.io/' },
  bpftrace: { label: 'bpftrace - linguagem de rastreamento', url: 'https://github.com/bpftrace/bpftrace' },
  brendanGregg: { label: 'Brendan Gregg - Linux performance', url: 'https://www.brendangregg.com/linuxperf.html' },
  envoy: { label: 'Envoy Proxy - documentação', url: 'https://www.envoyproxy.io/docs/envoy/latest/' },
  xds: { label: 'Envoy - xDS API', url: 'https://www.envoyproxy.io/docs/envoy/latest/api-docs/xds_protocol' },
  gatewayApi: { label: 'Kubernetes - Gateway API', url: 'https://gateway-api.sigs.k8s.io/' },
  istio: { label: 'Istio - arquitetura', url: 'https://istio.io/latest/docs/ops/deployment/architecture/' },
  opentofu: { label: 'OpenTofu - documentação', url: 'https://opentofu.org/docs/' },
  tofuRegistry: { label: 'OpenTofu - registry de providers', url: 'https://search.opentofu.org/' },
  terraformProvider: { label: 'Terraform - escrever um provider', url: 'https://developer.hashicorp.com/terraform/plugin/framework' },
  platformEng: { label: 'CNCF - Platform Engineering maturity model', url: 'https://tag-app-delivery.cncf.io/whitepapers/platform-eng-maturity-model/' },
  teamTopologies: { label: 'Team Topologies - conceitos', url: 'https://teamtopologies.com/key-concepts' },
  k8sRepo: { label: 'Kubernetes - código-fonte no GitHub', url: 'https://github.com/kubernetes/kubernetes' },
  keps: { label: 'Kubernetes Enhancement Proposals (KEPs)', url: 'https://github.com/kubernetes/enhancements/tree/master/keps' },
  k8sContributor: { label: 'Kubernetes - Contributor Guide', url: 'https://www.kubernetes.dev/docs/' }
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

/*
 * Baseline tecnológico. Duas mudanças recentes alteram respostas que eram
 * corretas até pouco tempo: o licenciamento do Terraform (que criou o OpenTofu)
 * e a evolução do próprio modelo DORA, que deixou de ser "as quatro métricas".
 * Ambas são tratadas nos módulos, não escondidas aqui.
 */
export const devopsTechnologyBaseline = [
  { technology: 'Kubernetes', baseline: '1.34–1.36 em suporte', status: 'Três minors suportadas', note: 'A janela de suporte é curta: planeje atualização como rotina, não como projeto. A 1.35 é a última a suportar containerd 1.x.' },
  { technology: 'Gateway API', baseline: 'estável para HTTP', status: 'Sucessora do Ingress', note: 'Modelo com papéis separados (infra, cluster, aplicação). Ingress está em manutenção. Módulo 8.' },
  { technology: 'containerd', baseline: '2.x', status: 'Obrigatório a partir da 1.36', note: 'Migre antes de subir de versão do Kubernetes — é um bloqueio, não um aviso.' },
  { technology: 'Terraform', baseline: '1.x sob BSL', status: 'Licença mudou em 2023', note: 'Deixou de ser MPL. A BSL restringe uso competitivo e converte para MPL após quatro anos por release. Verifique com o jurídico.' },
  { technology: 'OpenTofu', baseline: '1.x, Linux Foundation', status: 'Alternativa consolidada', note: 'Fork MPL do Terraform. Cerca de 12% de adoção; o GitLab depreciou os templates Terraform em 2025 por licenciamento. Compatível na maior parte dos casos. Módulo 26.' },
  { technology: 'DORA — métricas', baseline: 'cinco, não quatro', status: 'Modelo evoluiu', note: 'Rework rate entrou; Reliability é quase-métrica; "MTTR" virou failed deployment recovery time. Módulo 5.' },
  { technology: 'DORA — modelo de IA', baseline: 'AI Capabilities Model (2025)', status: 'Novo eixo', note: 'Sete capacidades que amplificam o benefício de IA; os quatro níveis de performance deram lugar a sete arquétipos de time. Módulos 5 e 20.' },
  { technology: 'OpenTelemetry', baseline: 'convenções estáveis para HTTP', status: 'Em evolução por domínio', note: 'Fixe a versão da convenção semântica; mudança dela quebra dashboard e alerta. Módulo 11.' },
  { technology: 'eBPF', baseline: 'produção em larga escala', status: 'Maduro', note: 'Base de Cilium, Pixie e da geração atual de observabilidade sem instrumentação. Exige kernel recente. Módulo 22.' },
  { technology: 'Envoy / xDS', baseline: 'estável', status: 'Padrão de fato', note: 'Data plane da maioria dos meshes e gateways. Conhecer xDS é conhecer o mecanismo, não o produto. Módulo 23.' },
  { technology: 'SLSA', baseline: 'v1.x', status: 'Estável', note: 'Níveis de proveniência de build. Referência para supply chain. Módulo 17.' },
  { technology: 'Service mesh', baseline: 'adoção em queda', status: 'Reavaliar', note: 'A adoção caiu de ~18% (2023) para ~8% (2025): o custo passou a ser a restrição dominante. Adote por requisito medido, não por padrão de arquitetura.' }
];

export const devopsAcademy = Object.freeze({
  title: 'Academia DevOps, Cloud e SRE',
  baseline: `Pesquisa técnica: ${DEVOPS_RESEARCH_DATE} · evidência operacional acima de presença`,
  book: 'handbook',
  parts: {
    base: {
      index: '0/6',
      range: 'Módulos 0.1-0.4',
      page: 'base.html',
      navLabel: 'Módulo 0',
      title: 'Módulo 0 — da Faixa 0 ao DevOps',
      subtitle: 'Ponte dos fundamentos: o que é DevOps, automação repetível, pipeline/CI com gate e medir com as métricas DORA.',
      prerequisites: ['Concluir a Trilha 0 (Fundamentos) ou equivalente', 'Terminal e Git básico', 'Ter rodado um programa com testes localmente'],
      objectives: ['Entender DevOps como cultura + automação para encurtar o caminho até produção', 'Ver por que passos manuais são o inimigo e o que é idempotência', 'Ler um pipeline como esteira automática com um gate que barra o quebrado', 'Medir entrega com as 4 métricas DORA e a ideia de error budget']
    },
    fundamentos: {
      index: '1/6',
      range: 'Módulos 1-5',
      page: 'fundamentos.html',
      navLabel: 'Fluxo e entrega',
      title: 'Fluxo, sistemas e entrega contínua',
      subtitle: 'Transforme trabalho invisível em fluxo pequeno, testável, rastreável e reversível.',
      prerequisites: ['Operar Linux e Git pela linha de comando', 'Executar uma aplicação com testes automatizados', 'Explicar HTTP, DNS, processo, porta e variável de ambiente'],
      objectives: ['Mapear um fluxo de valor com espera e retrabalho', 'Diagnosticar falha de host ou rede por evidência', 'Projetar pipeline com feedback rápido e gates proporcionais', 'Medir entrega sem transformar métrica em meta local']
    },
    plataforma: {
      index: '2/6',
      range: 'Módulos 6-10',
      page: 'plataforma.html',
      navLabel: 'Plataforma e IaC',
      title: 'Containers, Kubernetes e infraestrutura como código',
      subtitle: 'Modele runtime e infraestrutura como produtos versionados, testáveis e recuperáveis.',
      prerequisites: ['Pipeline com build e testes verdes', 'Dockerfile e rede de containers em nível prático', 'Noções de cloud, IAM, CIDR e balanceamento'],
      objectives: ['Construir imagem mínima e verificável', 'Operar workloads e rede Kubernetes com probes e limites', 'Projetar state remoto e módulos Terraform', 'Testar infraestrutura e bloquear mudanças inseguras']
    },
    confiabilidade: {
      index: '3/6',
      range: 'Módulos 11-15',
      page: 'confiabilidade.html',
      navLabel: 'Observabilidade e SRE',
      title: 'Observabilidade, SLO e resposta a falhas',
      subtitle: 'Converta telemetria em perguntas, objetivos de serviço e resposta disciplinada.',
      prerequisites: ['Serviço implantado em ambiente reproduzível', 'Logs estruturados e métricas básicas', 'Noções de percentis, taxa de erro e capacidade'],
      objectives: ['Instrumentar sinais correlacionáveis com OpenTelemetry', 'Definir SLI, SLO e política de error budget', 'Projetar alertas acionáveis e resposta a incidentes', 'Testar capacidade, recuperação e continuidade']
    },
    operacao: {
      index: '4/6',
      range: 'Módulos 16-20',
      page: 'operacao.html',
      navLabel: 'Operação e liderança',
      title: 'Plataforma, segurança e evolução operacional',
      subtitle: 'Escalone autonomia com guardrails, custo visível, aprendizado e desenho sociotécnico.',
      prerequisites: ['Pipeline, IaC e SLO demonstráveis', 'Experiência com incidentes ou game days', 'Capacidade de escrever ADR, runbook e postmortem'],
      objectives: ['Projetar golden path como produto de plataforma', 'Proteger supply chain e identidade de workloads', 'Alocar custo e capacidade por unidade econômica', 'Conduzir melhoria contínua sem otimização local']
    },
    fronteira: {
      index: '5/6',
      range: 'Módulos 21-27',
      page: 'fronteira.html',
      navLabel: 'Fronteira',
      title: 'Fronteira: estender a plataforma',
      subtitle: 'Operator próprio, eBPF, Envoy e xDS, kernel e latência, IDP como produto, OpenTofu e o código do Kubernetes.',
      prerequisites: [
        'Dominar os módulos 6-10: containers, workloads, rede Kubernetes e IaC.',
        'Ter operado um incidente real e lido telemetria sob pressão.',
        'Aceitar que aqui a resposta costuma estar no código do componente, não na documentação dele.'
      ],
      objectives: [
        'Escrever um operator que reconcilia estado desejado e real, e explicar por que é um laço e não um script.',
        'Instrumentar kernel e rede com eBPF sem alterar a aplicação observada.',
        'Explicar o data plane pelo mecanismo (Envoy e xDS) em vez de pelo produto que o embala.',
        'Diagnosticar latência abaixo do runtime, com perf e ferramentas de kernel.',
        'Tratar a plataforma interna como produto, com contrato, versionamento e clientes.',
        'Decidir entre Terraform e OpenTofu por critério técnico e jurídico, e publicar um módulo testado.',
        'Responder uma dúvida de comportamento lendo o código e os KEPs do Kubernetes.'
      ]
    },
    avaliacao: {
      index: '6/6',
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
    number: '0.1', part: 'base', id: 'base-o-que-e-devops', title: 'O que é DevOps (e o que não é)', level: 'Ponte (Faixa 0)',
    objective: 'Entender DevOps como cultura + automação para encurtar o tempo entre "escrevi" e "está em produção funcionando", com feedback rápido — e não como uma ferramenta ou um cargo.',
    prerequisites: ['Trilha 0 (terminal, Git básico, como um programa roda)', 'Ter rodado um programa localmente', 'Nenhuma experiência prévia de operação'],
    problem: 'Quem sai da Faixa 0 roda o código na própria máquina, mas nunca pensou em como levá-lo a produção de forma confiável e repetível. Sem isso, "DevOps" vira o nome de uma ferramenta ou de uma pessoa, e o abismo entre dev e operação continua.',
    concepts: ['Cultura + automação', 'Silo Dev × Ops', 'Ciclo código→build→teste→deploy→operar→feedback', 'Feedback rápido', 'Velocidade E estabilidade (não é trade-off)'],
    internals: ['DevOps encurta e automatiza o caminho do commit à produção, e realimenta com o que acontece lá.', 'O muro entre "quem escreve" e "quem opera" gera espera, retrabalho e culpa; a cultura DevOps derruba esse muro.', 'Segundo o DORA, times de elite entregam mais rápido E com menos falhas — velocidade e estabilidade andam juntas.'],
    useWhen: ['Trate operar em produção como parte do trabalho de quem desenvolve.', 'Automatize o caminho até produção em vez de repetir passos manuais.', 'Meça o ciclo inteiro (do commit ao valor), não só a codificação.'],
    avoidWhen: ['Não chame de "DevOps" só instalar uma ferramenta de CI.', 'Não crie um silo "time de DevOps" que vira mais um muro.', 'Não persiga velocidade jogando fora a estabilidade (ou vice-versa).'],
    contrast: { bad: 'Dev "termina" e joga por cima do muro; Ops sobe manualmente à noite e reza para funcionar.', good: 'A mudança segue um caminho automático e testado até produção, e o time acompanha como ela se comporta lá.' },
    tradeoffs: ['Cultura muda devagar; automação dá retorno rápido — os dois se reforçam.', 'Automatizar cedo custa tempo e paga em previsibilidade.', 'Mais autonomia para deployar exige mais guardrails automáticos.'],
    production: 'Um deploy manual de sexta à noite quebra e ninguém sabe reverter. O exercício mapeia o caminho atual da mudança e aponta onde o manual vira automático.',
    risks: ['Confundir DevOps com uma ferramenta', 'Criar um novo silo "DevOps"', 'Otimizar velocidade sem estabilidade', 'Ignorar o feedback de produção'],
    checklist: ['Existe um caminho definido do commit à produção?', 'Ele é automático ou depende de passos manuais?', 'Dev acompanha o comportamento em produção?', 'O ciclo inteiro é medido?', 'Velocidade e estabilidade são tratadas juntas?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que é DevOps, em uma frase honesta?', expected: 'Cultura e automação para reduzir o tempo entre escrever código e tê-lo funcionando em produção, com feedback rápido — não é uma ferramenta nem um cargo.' },
      { level: 'Sênior/Staff', question: 'Velocidade e estabilidade são um trade-off?', expected: 'Segundo o DORA, não: times de elite entregam mais rápido e com menor taxa de falha; automação e lotes pequenos melhoram os dois ao mesmo tempo.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Descrever o caminho que uma mudança sua percorre do commit até "no ar".', evidence: 'Lista de passos marcando manual vs automático.' },
      { level: 'Aplicado', task: 'Apontar dois passos manuais que poderiam ser automatizados e o risco que cada um carrega.', evidence: 'Tabela passo → risco → automação proposta.' },
      { level: 'Sênior', task: 'Explicar, com um exemplo, por que velocidade e estabilidade não precisam se opor.', evidence: 'Meia página citando lote pequeno e gate automático.' }
    ],
    challenge: 'Explicar, sem jargão, por que "temos uma ferramenta de CI" não significa "fazemos DevOps".',
    book: 'The DevOps Handbook, introdução e parte I; Accelerate, parte I.',
    complements: [official.dora],
    quiz: [
      { question: 'O que descreve melhor DevOps?', options: ['Cultura + automação para encurtar e dar feedback ao caminho até produção', 'Uma ferramenta de CI/CD específica', 'Um cargo que cuida dos servidores', 'Escrever mais testes'], answer: 0, why: 'DevOps é cultura e automação do ciclo commit→produção→feedback; não é uma ferramenta nem um cargo.' },
      { question: 'Velocidade e estabilidade são necessariamente um trade-off?', options: ['Não — segundo o DORA, times de elite têm as duas juntas', 'Sim, sempre se troca uma pela outra', 'Só importa velocidade', 'Só importa estabilidade'], answer: 0, why: 'Automação e lotes pequenos melhoram entrega e confiabilidade ao mesmo tempo.' },
      { question: 'Criar um "time de DevOps" separado costuma:', options: ['Virar mais um silo/muro, contra o próprio objetivo', 'Resolver todos os problemas', 'Ser a única forma correta', 'Eliminar a necessidade de automação'], answer: 0, why: 'DevOps busca derrubar o muro entre dev e ops; um silo novo recria o problema.' }
    ]
  }),
  moduleOf({
    number: '0.2', part: 'base', id: 'base-automacao-idempotencia', title: 'Automação: do manual e repetível ao script idempotente', level: 'Ponte (Faixa 0)',
    objective: 'Entender por que passos manuais são o inimigo (erro humano, irreproduzível) e o que torna a automação confiável: script determinístico, versionado e idempotente.',
    prerequisites: ['Módulo 0.1', 'Rodar comandos no terminal', 'Saber o que é um script'],
    problem: 'O iniciante configura o ambiente clicando e digitando comandos de memória. Funciona uma vez, na máquina dele — e falha quando outra pessoa, ou o servidor, tenta repetir.',
    concepts: ['Passo manual vs automatizado', 'Determinismo', 'Idempotência (rodar 2x = mesmo estado)', 'Versionar a automação (é código)', '"Funciona na minha máquina"'],
    internals: ['Um passo manual não é reproduzível nem auditável: cada execução pode ser diferente.', 'Automação boa é determinística (mesma entrada → mesmo resultado) e idempotente (rodar de novo não estraga).', 'Como a automação é código, ela é versionada, revisada e testada como qualquer código.'],
    useWhen: ['Automatize o que é repetido e propenso a erro.', 'Faça o script idempotente: seguro de rodar de novo.', 'Versione a automação junto com o projeto.'],
    avoidWhen: ['Não guarde passos críticos só na memória ou num doc solto.', 'Não escreva script que quebra se rodar duas vezes.', 'Não automatize algo raro e trivial só por automatizar.'],
    contrast: { bad: 'Um "passo a passo" no wiki com 15 comandos que cada um roda de um jeito.', good: 'Um script versionado, idempotente, que qualquer pessoa (ou o CI) roda com o mesmo resultado.' },
    tradeoffs: ['Escrever automação custa agora e paga a cada repetição.', 'Idempotência exige checar o estado antes de agir (mais código).', 'Automatizar o raro pode não compensar — priorize o repetido.'],
    production: 'Um provisionamento manual esquece um passo e o ambiente de produção fica sutilmente diferente do de teste. O exercício converte o passo a passo num script idempotente e versionado.',
    risks: ['Conhecimento só na cabeça de alguém', 'Script não idempotente (quebra na 2ª vez)', 'Ambiente irreproduzível ("drift")', 'Automação sem versionamento'],
    checklist: ['O passo é repetido e arriscado?', 'Está em script, não em doc/memória?', 'Rodar 2x dá o mesmo resultado?', 'Está versionado?', 'Outra pessoa consegue rodar igual?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que passos manuais são um problema em operação?', expected: 'Não são reproduzíveis nem auditáveis; dependem da pessoa e do momento, causando erro humano e o clássico "funciona na minha máquina".' },
      { level: 'Sênior/Staff', question: 'O que é idempotência e por que importa na automação?', expected: 'É a propriedade de rodar a operação várias vezes e chegar ao mesmo estado final; importa porque scripts de infra reexecutam (retry, convergência) e não podem estragar o que já está correto.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Pegar um "passo a passo" de setup e listar onde ele pode falhar entre pessoas.', evidence: 'Lista de pontos frágeis.' },
      { level: 'Aplicado', task: 'Escrever um script que crie uma pasta/arquivo só se não existir (idempotente).', evidence: 'Script que roda 2x sem erro nem duplicação.' },
      { level: 'Sênior', task: 'Tornar idempotente um script que hoje falha ao rodar de novo.', evidence: 'Antes/depois com verificação de estado.' }
    ],
    challenge: 'Defender qual passo manual da sua rotina daria mais retorno se fosse automatizado, e por quê.',
    book: 'The DevOps Handbook, parte III (práticas técnicas); Infrastructure as Code (fundamentos).',
    complements: [official.githubActions],
    quiz: [
      { question: 'Por que passos manuais são o "inimigo" em operação?', options: ['Não são reproduzíveis nem auditáveis e dependem da pessoa', 'São mais rápidos que scripts', 'Ocupam menos disco', 'Não têm problema algum'], answer: 0, why: 'Manual = irreproduzível e propenso a erro humano; o oposto do que operação confiável precisa.' },
      { question: 'O que é uma operação idempotente?', options: ['Rodar várias vezes leva ao mesmo estado final', 'Roda só uma vez', 'É mais rápida na segunda vez', 'Nunca falha'], answer: 0, why: 'Idempotência garante que reexecutar (retry, convergência) não estraga o que já está correto.' },
      { question: 'Por que tratar automação como código (versionada)?', options: ['Para revisar, testar e reproduzir a infraestrutura como qualquer código', 'Para ocupar o repositório', 'Porque é obrigatório por lei', 'Para deixar mais lento'], answer: 0, why: 'Automação versionada é auditável, revisável e reproduzível — a base de IaC e CI.' }
    ]
  }),
  moduleOf({
    number: '0.3', part: 'base', id: 'base-pipeline-ci', title: 'Pipeline e CI: build, teste e o gate que barra o quebrado', level: 'Ponte (Faixa 0)',
    objective: 'Ler um pipeline como uma esteira automática (build → teste → deploy), entender integração contínua e o gate que impede código quebrado de avançar (fail-fast), com lotes pequenos.',
    prerequisites: ['Módulo 0.2', 'Saber rodar testes de um projeto', 'Ideia de commit e branch'],
    problem: 'Sem uma esteira automática, cada integração é manual e arriscada; código quebrado chega longe antes de alguém perceber, e o "big bang" de juntar tudo no fim vira caos.',
    concepts: ['Pipeline (esteira de estágios)', 'Integração contínua (integrar cedo e sempre)', 'Estágios: build, teste, deploy', 'Gate e fail-fast', 'Lotes pequenos'],
    internals: ['O pipeline roda estágios em ordem e para no primeiro que falha (fail-fast): nada quebrado avança.', 'Integração contínua junta o trabalho cedo e frequentemente, com teste automático a cada mudança.', 'O gate de teste é o que protege a produção — automatizado, ele barra o defeito antes do deploy.'],
    useWhen: ['Rode build e testes automáticos a cada commit.', 'Faça o pipeline falhar rápido no primeiro problema.', 'Integre em lotes pequenos e frequentes.'],
    avoidWhen: ['Não deixe o deploy depender de um gate manual lento.', 'Não acumule mudanças enormes para integrar de uma vez.', 'Não pule o gate de teste "para ir mais rápido".'],
    contrast: { bad: 'Juntar semanas de trabalho num merge gigante e testar só no fim, na mão.', good: 'Cada commit dispara build+teste; se o teste falha, a esteira para e nada quebrado vai a produção.' },
    tradeoffs: ['Pipeline custa manutenção e devolve feedback rápido.', 'Gate rígido barra defeito mas pode bloquear se instável (flaky).', 'Lotes pequenos exigem disciplina e dão menos risco por deploy.'],
    production: 'Um merge grande quebra produção e ninguém sabe qual mudança foi. O exercício mostra, no exemplo executável, o gate barrando o código quebrado antes do deploy. (Ver o exemplo versionado.)',
    risks: ['Pular o gate de teste', 'Testes lentos/flaky que ninguém confia', 'Lotes gigantes', 'Deploy manual como gargalo'],
    checklist: ['Cada commit dispara build e teste?', 'O pipeline para no primeiro erro (fail-fast)?', 'O gate barra código quebrado antes do deploy?', 'Os lotes são pequenos?', 'O feedback chega em minutos?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que é integração contínua?', expected: 'Integrar o trabalho no tronco cedo e com frequência, disparando build e testes automáticos a cada mudança para detectar problemas rápido.' },
      { level: 'Sênior/Staff', question: 'Para que serve o gate do pipeline e o que significa fail-fast?', expected: 'O gate (build/testes) impede que código quebrado avance para produção; fail-fast é parar no primeiro estágio que falha, dando feedback imediato e barato.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Rodar o exemplo e explicar por que "feature-carrinho" não chegou a produção.', evidence: 'Saída do script + identificação do estágio que barrou.' },
      { level: 'Aplicado', task: 'Desenhar um pipeline de 4 estágios para um projeto seu, marcando o gate.', evidence: 'Diagrama build→teste→deploy→smoke.' },
      { level: 'Sênior', task: 'Explicar como lotes pequenos reduzem o risco de cada deploy.', evidence: 'Meia página ligando lote pequeno a fail-fast e recuperação.' }
    ],
    challenge: 'Defender por que um gate de teste automático vale mais que uma revisão manual demorada — e quando a revisão ainda é necessária.',
    book: 'Continuous Delivery (Humble & Farley), caps. 1-5; The DevOps Handbook, parte III.',
    complements: [official.githubActions, official.dora],
    exampleFile: '../../examples/devops-senior/devops-zero.mjs',
    quiz: [
      { question: 'O que é um pipeline de CI/CD?', options: ['Uma esteira de estágios automáticos (build→teste→deploy) executados em ordem', 'Um servidor de produção', 'Um editor de código', 'Um tipo de banco de dados'], answer: 0, why: 'O pipeline automatiza a sequência do commit ao deploy, com feedback a cada estágio.' },
      { question: 'O que significa "fail-fast" num pipeline?', options: ['Parar no primeiro estágio que falha, dando feedback imediato', 'Rodar tudo mesmo com erros', 'Falhar de propósito', 'Ir direto ao deploy'], answer: 0, why: 'Fail-fast evita gastar tempo e barra código quebrado o mais cedo possível.' },
      { question: 'Qual é o papel do gate de teste?', options: ['Impedir que código quebrado avance para produção', 'Deixar o deploy mais lento', 'Substituir o build', 'Contar linhas de código'], answer: 0, why: 'O gate automatizado é o que protege a produção antes do deploy.' }
    ]
  }),
  moduleOf({
    number: '0.4', part: 'base', id: 'base-metricas-dora', title: 'Medir para melhorar: as 4 métricas DORA e o error budget', level: 'Ponte (Faixa 0)',
    objective: 'Conhecer as 4 métricas DORA (frequência de deploy, lead time, taxa de falha de mudança, tempo de restauração) e a ideia de SLO/error budget, para melhorar entrega com base em dado.',
    prerequisites: ['Módulo 0.3', 'Ideia de porcentagem e média', 'Noção de deploy e incidente'],
    problem: 'Times "acham" que estão melhorando sem medir nada; sem números, toda discussão de velocidade vs estabilidade é opinião, e ninguém sabe se um deploy está seguro.',
    concepts: ['Você melhora o que mede', 'As 4 métricas DORA', 'Throughput (deploy freq, lead time) × estabilidade (CFR, MTTR)', 'SLO e error budget', 'Métrica vs meta (lei de Goodhart)'],
    internals: ['DORA resume entrega em 4 números: dois de velocidade (frequência de deploy, lead time) e dois de estabilidade (taxa de falha de mudança, tempo de restauração).', 'Um SLO define o alvo (ex.: 99,9% de sucesso); o error budget é o quanto se pode falhar antes de frear releases.', 'Quando a métrica vira meta cega, ela deixa de medir (lei de Goodhart) — meça o sistema, não a pessoa.'],
    useWhen: ['Meça as 4 métricas DORA antes de decidir onde melhorar.', 'Use o error budget para decidir entre lançar e estabilizar.', 'Compare antes/depois de uma mudança de processo.'],
    avoidWhen: ['Não transforme uma métrica em meta individual.', 'Não otimize velocidade ignorando a taxa de falha.', 'Não meça só o que é fácil e ignore o feedback de produção.'],
    contrast: { bad: 'Reportar "fizemos 200 deploys!" sem olhar quantos quebraram nem quanto demorou para restaurar.', good: 'Acompanhar as 4 métricas DORA juntas e usar o error budget para decidir o ritmo de release.' },
    tradeoffs: ['Medir custa instrumentar eventos confiáveis.', 'Error budget dá autonomia mas exige acordo sobre o SLO.', 'Foco só em velocidade infla CFR; só em estabilidade trava a entrega.'],
    production: 'Um time acelera deploys e a taxa de falha dispara sem ninguém notar. O exercício calcula as 4 métricas DORA de um log e classifica o desempenho.',
    risks: ['Métrica vira meta (Goodhart)', 'Medir só velocidade', 'Ignorar MTTR', 'SLO sem acordo do time/negócio'],
    checklist: ['As 4 métricas DORA estão sendo medidas?', 'Velocidade e estabilidade aparecem juntas?', 'Há um SLO e um error budget definidos?', 'As métricas medem o sistema, não pessoas?', 'A decisão de release usa o dado?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Quais são as 4 métricas DORA?', expected: 'Frequência de deploy e lead time para mudanças (velocidade), taxa de falha de mudança e tempo de restauração/MTTR (estabilidade).' },
      { level: 'Sênior/Staff', question: 'O que é error budget e como ele orienta decisões?', expected: 'É a folga permitida pelo SLO (ex.: 0,1% de falhas): com budget disponível, prioriza-se lançar; esgotado, prioriza-se estabilizar antes de novos releases.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Dado um mês de deploys e incidentes, classificar cada métrica DORA como velocidade ou estabilidade.', evidence: 'Tabela com as 4 métricas rotuladas.' },
      { level: 'Aplicado', task: 'Calcular a taxa de falha de mudança de um log de 10 deploys.', evidence: 'Cálculo CFR = deploys que quebraram / total.' },
      { level: 'Sênior', task: 'Definir um SLO e o error budget correspondente para um serviço simples.', evidence: 'SLO em % e budget de falha derivado.' }
    ],
    challenge: 'Defender uma decisão de "congelar releases" usando o error budget, e o que faria você voltar a lançar.',
    book: 'Accelerate (Forsgren, Humble & Kim), parte I; Site Reliability Engineering (Google), capítulos de SLO.',
    complements: [official.dora, official.sre],
    quiz: [
      { question: 'Quais dimensões as 4 métricas DORA equilibram?', options: ['Velocidade (deploy freq, lead time) e estabilidade (taxa de falha, tempo de restauração)', 'Só velocidade', 'Só custo', 'Só número de linhas'], answer: 0, why: 'DORA mede throughput e estabilidade juntos — é o coração da avaliação de entrega.' },
      { question: 'O que é um error budget?', options: ['A folga de falhas permitida pelo SLO antes de frear releases', 'O orçamento em dinheiro do time', 'O número de bugs no backlog', 'O tempo de build'], answer: 0, why: 'Com budget disponível, prioriza-se lançar; esgotado, prioriza-se estabilizar.' },
      { question: 'Por que "métrica não deve virar meta cega" (lei de Goodhart)?', options: ['Ao virar meta, a métrica é gamificada e deixa de medir o que importa', 'Porque métricas são inúteis', 'Porque medir é proibido', 'Porque metas não existem'], answer: 0, why: 'Meça o sistema, não a pessoa; metas cegas corrompem a própria medição.' }
    ]
  }),
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
    concepts: ['Deployment frequency', 'Lead time for changes', 'Change failure rate', 'Failed deployment recovery time', 'Reliability', 'Rework rate', 'Arquétipos de time e o fim dos quatro níveis'],
    internals: ['A unidade de mudança precisa ser consistente.', 'Percentis revelam cauda escondida pela média.', 'Métricas funcionam em conjunto; otimizar uma isolada distorce comportamento.', 'O modelo evoluiu: não são mais "as quatro métricas". Rework rate entrou como medida de retrabalho não planejado, Reliability é quase-métrica, e o antigo MTTR virou failed deployment recovery time — nome que deixa explícito o que está sendo medido.', 'A classificação em quatro níveis de performance deu lugar a sete arquétipos de time, obtidos por análise de agrupamento: a pergunta deixou de ser "em que nível estamos" e passou a ser "com qual perfil nos parecemos, e qual é a nossa restrição".', 'O relatório de 2025 acrescenta o eixo de IA: a tese central é que IA é amplificadora — ela magnifica a capacidade existente, boa ou ruim. Um time com fluxo ruim entrega problemas mais rápido. Módulo 20 trata o modelo de capacidades.'],
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
    concepts: ['State e binding', 'Backend remoto', 'Locking', 'Módulo root/child', 'Outputs e dependências', 'Terraform e OpenTofu: a escolha da ferramenta'],
    internals: ['State liga endereço lógico a objeto remoto.', 'Plan compara configuração, state e leitura do provider.', 'Módulo é unidade de composição; state é unidade operacional.', 'Desde 2023 "usar Terraform" deixou de ser decisão puramente técnica: a licença passou de MPL para BSL, e o fork OpenTofu nasceu sob a Linux Foundation mantendo licença aberta. Os conceitos deste módulo — state, plan, módulos, locking — valem igualmente nos dois. A escolha da ferramenta é tratada no módulo 26.'],
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
    complements: [official.dora, official.sre, official.doraAiModel], exampleFile: '../../examples/devops-senior/operacao-e-lideranca.md'
  }),
  moduleOf({
    number: 21,
    part: 'fronteira',
    id: 'operator-kubernetes',
    title: 'Escrever um operator: CRD, reconciliação e controller-runtime',
    level: 'Expert',
    objective: 'Estender a API do Kubernetes com um recurso próprio e um laço de reconciliação, entendendo por que o modelo é um laço convergente e não um script de instalação.',
    prerequisites: ['Módulo 7 (workloads e ciclo de vida)', 'Módulo 8 (rede, RBAC e ServiceAccount)', 'Leitura de YAML e noção de API declarativa'],
    problem: 'Toda operação recorrente vira script: criar banco, rotacionar credencial, provisionar tenant. Script roda uma vez, falha no meio e deixa estado parcial que ninguém reconcilia. O Kubernetes resolveu isso com um padrão, e quem não o entende reimplementa a parte fácil e ignora a difícil.',
    concepts: ['CRD: estender a API sem alterar o núcleo', 'Spec (desejado) versus Status (observado)', 'Reconciliação: função idempotente de convergência, não sequência de passos', 'Nível versus borda: reagir ao estado, não ao evento', 'Requeue, backoff e o que fazer quando não converge', 'Finalizers e remoção ordenada', 'Owner references e coleta de lixo', 'Conditions e o contrato de status da API'],
    internals: [
      'O reconciler recebe apenas uma chave e vai LER o estado atual — ele não recebe o evento nem confia nele. É por isso que perder um evento não quebra o sistema: o próximo laço corrige.',
      'Reconciliação precisa ser idempotente: será chamada muitas vezes para o mesmo objeto, inclusive sem mudança alguma.',
      'Finalizer impede a remoção até o operator limpar o recurso externo; esquecer de removê-lo deixa o objeto preso para sempre — o erro clássico de quem começa.',
      'Owner reference faz o Kubernetes apagar os filhos quando o pai some, sem o operator precisar orquestrar a remoção.'
    ],
    useWhen: ['Use operator quando há conhecimento operacional recorrente a codificar (backup, failover, provisionamento).', 'Use CRD quando o conceito é de domínio e merece ser um recurso de primeira classe.', 'Use um operator pronto antes de escrever o seu.'],
    avoidWhen: ['Não escreva operator para instalar algo uma vez — isso é um Job.', 'Não use CRD como banco de dados: etcd não é para isso.', 'Não faça reconciliação com efeito colateral não idempotente.'],
    contrast: {
      bad: 'Um controller que reage ao evento de criação, executa cinco passos em sequência e, se falhar no terceiro, deixa o recurso em estado inconsistente sem nunca mais tentar.',
      good: 'Um reconciler que lê o estado atual, calcula a diferença para o desejado, aplica o próximo passo convergente e devolve requeue — chamado mil vezes, converge sempre.'
    },
    tradeoffs: ['Operator codifica operação e adiciona um componente crítico a manter e atualizar.', 'CRD dá vocabulário de domínio na API e acopla o time ao ciclo de versões do Kubernetes.', 'Reconciliação frequente converge rápido e pressiona o servidor de API.'],
    production: 'Um operator de provisionamento de tenants entra em laço: a reconciliação falha ao criar um recurso externo, requeue imediato, e o servidor de API recebe milhares de requisições por minuto. A causa é backoff ausente; a correção é requeue exponencial e uma condition de erro no status — que também torna o problema visível em vez de silencioso.',
    risks: ['Reconciliação não idempotente', 'Laço de requeue sem backoff saturando a API', 'Finalizer que nunca é removido, travando a exclusão', 'RBAC amplo demais no ServiceAccount do operator', 'Status que não reflete a realidade'],
    checklist: ['A reconciliação é idempotente?', 'O requeue tem backoff?', 'Existe finalizer, e ele é removido em todos os caminhos?', 'O RBAC é mínimo?', 'O status usa conditions e é observável?'],
    interview: [
      { level: 'Pleno/Sênior', question: 'Qual a diferença entre reagir a evento e reconciliar estado?', expected: 'Reagir a evento depende de receber todos os eventos, em ordem; reconciliar lê o estado atual e converge para o desejado, o que torna o sistema tolerante a evento perdido, duplicado ou fora de ordem.' },
      { level: 'Sênior/Expert', question: 'Quando você recusaria a proposta de escrever um operator?', expected: 'Quando a tarefa é pontual (é um Job), quando já existe operator maduro para o caso, ou quando o time não tem capacidade de manter um componente crítico acoplado ao ciclo de versões do Kubernetes.' }
    ],
    exercises: [
      { level: 'Aplicado', task: 'Definir um CRD com spec, status, conditions e validação de esquema, e aplicá-lo num cluster.', evidence: 'Manifesto do CRD, recurso de exemplo aceito e um inválido rejeitado pela API.' },
      { level: 'Aplicado', task: 'Implementar um reconciler que cria e mantém um Deployment a partir do recurso próprio.', evidence: 'Código do controller, teste de idempotência e demonstração de convergência após deleção manual do Deployment.' },
      { level: 'Sênior', task: 'Adicionar finalizer com limpeza de recurso externo e provar que a exclusão não trava em caso de falha.', evidence: 'Teste de exclusão com o recurso externo indisponível e o caminho de saída.' }
    ],
    challenge: 'Escolher uma operação recorrente do seu time, modelá-la como recurso e provar que o operator converge mesmo quando morto no meio da reconciliação.',
    book: 'Kubernetes: Up and Running (extensão da API e padrões de controller); The Site Reliability Workbook (automação e eliminação de toil).',
    complements: [official.crd, official.operatorPattern, official.controllerRuntime, official.kubebuilder],
    exampleFile: '../../examples/devops-senior/fronteira/operator/tenant-crd.yaml'
  }),
  moduleOf({
    number: 22,
    part: 'fronteira',
    id: 'ebpf',
    title: 'eBPF: observar e controlar o kernel sem tocar na aplicação',
    level: 'Expert',
    objective: 'Instrumentar chamadas de sistema, rede e latência com eBPF, e avaliar quando isso substitui instrumentação na aplicação.',
    prerequisites: ['Módulo 2 (Linux, processos e rede)', 'Módulo 11 (telemetria)', 'Acesso a um kernel recente'],
    problem: 'Boa parte do que importa em produção acontece abaixo da aplicação: syscall lenta, retransmissão de TCP, pressão de memória, DNS demorando. A instrumentação tradicional não enxerga nada disso, e adicionar código à aplicação para medir o kernel não é opção — nem sempre existe código para alterar.',
    concepts: ['eBPF: programas verificados executando no kernel', 'O verificador e por que ele recusa seu programa', 'Pontos de anexação: kprobe, tracepoint, uprobe, XDP, tc', 'Mapas como canal entre kernel e espaço de usuário', 'bpftrace para investigação ad hoc', 'Cilium: rede e política sem iptables', 'Observabilidade sem instrumentação, e seus limites', 'Custo real do overhead'],
    internals: [
      'O verificador rejeita programas que possam travar o kernel: sem laço ilimitado, sem acesso arbitrário à memória. É essa garantia que permite rodar código de terceiro no kernel com segurança.',
      'Tracepoint é interface estável; kprobe é ponto de implementação e pode sumir entre versões do kernel — a mesma distinção entre contrato e implementação dos outros módulos de fronteira.',
      'Mapas são a única forma de o programa em kernel conversar com o espaço de usuário, e o custo de leitura deles é parte do overhead que precisa ser medido.',
      'Cilium substitui a cadeia de iptables por programas eBPF, o que muda o perfil de latência da rede do cluster à medida que o número de serviços cresce.'
    ],
    useWhen: ['Use quando precisa observar o que a aplicação não expõe.', 'Use para instrumentar software de terceiros sem alterá-lo.', 'Use bpftrace para investigar hipótese pontual em incidente.'],
    avoidWhen: ['Não substitua métrica de negócio por métrica de kernel — elas respondem perguntas diferentes.', 'Não rode programa não auditado em produção.', 'Não presuma overhead zero: meça.'],
    contrast: {
      bad: 'Latência inexplicada atribuída ao "banco lento" porque a instrumentação da aplicação termina na chamada ao driver.',
      good: 'Rastreamento de syscall mostrando a espera real em `connect` por esgotamento de porta efêmera — um problema que nenhuma métrica da aplicação revelaria.'
    },
    tradeoffs: ['eBPF vê tudo e exige kernel recente e privilégio elevado.', 'Sem instrumentação é rápido de aplicar e não conhece semântica de negócio.', 'Tracepoint é estável e cobre menos pontos que kprobe.'],
    production: 'Um serviço apresenta p99 alto sem causa aparente: CPU baixa, banco rápido, sem erro. O rastreamento de syscalls revela tempo em `getaddrinfo` — o DNS do cluster com cache mal dimensionado. Nenhuma métrica da aplicação apontava para isso, porque a resolução acontecia dentro de uma biblioteca.',
    risks: ['Programa eBPF com overhead não medido', 'Dependência de kprobe que some em atualização de kernel', 'Privilégio elevado ampliando a superfície de ataque', 'Coleta de dado sensível no rastreamento'],
    checklist: ['O ponto de anexação é estável ou de implementação?', 'O overhead foi medido sob carga?', 'O programa foi auditado?', 'A coleta captura dado sensível?', 'Existe alternativa mais simples que responda à mesma pergunta?'],
    interview: [
      { level: 'Pleno/Sênior', question: 'Por que eBPF permite rodar código no kernel com segurança?', expected: 'Porque o verificador prova, antes de carregar, que o programa termina e não acessa memória arbitrária — sem laço ilimitado e com acesso restrito a estruturas conhecidas.' },
      { level: 'Sênior/Expert', question: 'Quando você usaria eBPF em vez de instrumentar a aplicação?', expected: 'Quando o que interessa está abaixo da aplicação (syscall, rede, escalonamento), quando não há código para alterar, ou quando a instrumentação precisa cobrir processos de terceiros — sabendo que ele não conhece semântica de negócio.' }
    ],
    exercises: [
      { level: 'Aplicado', task: 'Usar bpftrace para medir a distribuição de latência de uma syscall específica de um processo.', evidence: 'Histograma capturado e a interpretação do que ele mostra.' },
      { level: 'Aplicado', task: 'Rastrear conexões TCP de um pod sem alterar a aplicação, identificando destino e latência.', evidence: 'Saída do rastreamento correlacionada com a telemetria da aplicação.' },
      { level: 'Sênior', task: 'Medir o overhead da própria instrumentação sob carga e definir um limite aceitável.', evidence: 'Comparação com e sem o programa carregado, e o limite adotado.' }
    ],
    challenge: 'Pegar um incidente em que a causa raiz ficou como "não identificada" e verificar se instrumentação de kernel a teria revelado.',
    book: 'Observability Engineering (o que a telemetria tradicional não alcança); Site Reliability Engineering (Google), capítulos de monitoramento e depuração em produção.',
    complements: [official.ebpf, official.bpftrace, official.cilium, official.brendanGregg],
    exampleFile: '../../examples/devops-senior/fronteira/ebpf-playbook.md'
  }),
  moduleOf({
    number: 23,
    part: 'fronteira',
    id: 'envoy-xds',
    title: 'Data plane por dentro: Envoy, xDS e o que um service mesh realmente faz',
    level: 'Expert',
    objective: 'Explicar mesh e gateway pelo mecanismo — proxy, descoberta dinâmica e mTLS — e decidir a adoção por requisito medido, não por padrão de arquitetura.',
    prerequisites: ['Módulo 8 (rede e Gateway API)', 'Módulo 13 (resiliência)', 'Noção de TLS e certificados'],
    problem: 'Service mesh foi adotado como default por muita gente e desadotado depois: a participação caiu de cerca de 18% para 8% entre 2023 e 2025, porque o custo passou a ser a restrição dominante. Quem só conhece o produto não consegue avaliar o que está pagando, nem o que perderia ao remover.',
    concepts: ['Proxy sidecar versus modo sem sidecar', 'Envoy como data plane e o control plane que o configura', 'xDS: descoberta dinâmica de listeners, rotas, clusters e endpoints', 'mTLS e identidade de workload (SPIFFE)', 'Retry, timeout e circuit breaking na camada de rede', 'Onde a resiliência deve morar: rede ou aplicação', 'Custo: latência adicional, memória por pod e um control plane a operar', 'Gateway API como alternativa parcial'],
    internals: [
      'O Envoy não sabe nada ao subir: ele pergunta ao control plane, por xDS, quais listeners, rotas, clusters e endpoints existem — e continua recebendo atualizações. É essa dinâmica que permite mudar roteamento sem reiniciar nada.',
      'Cada sidecar adiciona um salto de proxy na ida e outro na volta: duas travessias a mais por requisição, com latência e memória por pod.',
      'mTLS automático é o argumento mais forte do mesh: identidade criptográfica por workload sem a aplicação participar.',
      'Retry configurado no mesh e na aplicação se multiplicam: três tentativas em cada camada viram nove no serviço de destino.'
    ],
    useWhen: ['Use mesh quando mTLS entre serviços e política de tráfego uniforme são requisitos e o número de serviços justifica.', 'Use Gateway API quando o problema é só tráfego de entrada.', 'Use biblioteca na aplicação quando há poucos serviços e uma linguagem só.'],
    avoidWhen: ['Não adote mesh por padrão de arquitetura sem medir custo e latência.', 'Não duplique retry entre mesh e aplicação.', 'Não trate o mesh como substituto de autorização na aplicação.'],
    contrast: {
      bad: 'Instalar um mesh completo para obter mTLS entre seis serviços, e descobrir depois um control plane crítico que ninguém sabe operar.',
      good: 'Medir o requisito real — mTLS — e avaliar mesh, mTLS na aplicação e mTLS no gateway, com latência, memória e carga operacional de cada um.'
    },
    tradeoffs: ['Mesh dá política uniforme e mTLS de graça para a aplicação, e cobra latência, memória e um control plane.', 'Sem sidecar reduz o custo por pod e amarra mais ao provedor.', 'Resiliência na rede é uniforme; na aplicação é específica e consciente do domínio.'],
    production: 'Um cluster com mesh apresenta p99 40 ms acima do esperado. A investigação mostra retry configurado nas duas camadas: três tentativas no mesh multiplicadas por três na aplicação geram nove chamadas ao destino sob degradação, que passa a ser saturado pelo próprio mecanismo de resiliência. A correção é decidir uma camada e desligar a outra.',
    risks: ['Retry multiplicado entre camadas', 'Control plane como ponto único não operado', 'Latência adicional não medida antes da adoção', 'Certificado expirado derrubando toda a comunicação', 'Mesh usado como se fosse autorização'],
    checklist: ['Qual requisito exige mesh, em uma frase?', 'A latência adicional foi medida?', 'Retry existe em quantas camadas?', 'Quem opera o control plane, e quem é o reserva?', 'O que acontece quando o certificado expira?'],
    interview: [
      { level: 'Pleno/Sênior', question: 'O que um sidecar de service mesh faz com o tráfego?', expected: 'Intercepta entrada e saída do pod, aplica política (mTLS, retry, timeout, roteamento) e encaminha. Adiciona dois saltos de proxy por requisição.' },
      { level: 'Sênior/Expert', question: 'Um time propõe adotar service mesh. O que você exige antes?', expected: 'O requisito em uma frase, a medição da latência adicional no workload real, quem opera o control plane, a decisão sobre onde a resiliência mora, e a comparação com alternativas mais baratas (Gateway API, mTLS na aplicação).' }
    ],
    exercises: [
      { level: 'Aplicado', task: 'Ler uma configuração de Envoy e identificar listener, rota, cluster e endpoint, explicando o caminho de uma requisição.', evidence: 'Configuração anotada com o percurso descrito.' },
      { level: 'Aplicado', task: 'Medir a latência adicional de um sidecar em um serviço real, com e sem ele.', evidence: 'p50 e p99 nas duas configurações e o custo de memória por pod.' },
      { level: 'Sênior', task: 'Avaliar mesh, Gateway API e mTLS na aplicação para um requisito concreto e recomendar um.', evidence: 'ADR com latência, custo operacional e critério de reversão.' }
    ],
    challenge: 'Escrever a justificativa de remoção do mesh de um cluster que o adotou sem requisito — ou a justificativa medida de mantê-lo.',
    book: 'Kubernetes: Up and Running (rede e extensão); Release It! (padrões de estabilidade, para decidir onde a resiliência mora).',
    complements: [official.envoy, official.xds, official.gatewayApi, official.istio],
    exampleFile: '../../examples/devops-senior/fronteira/envoy-xds.yaml'
  }),
  moduleOf({
    number: 24,
    part: 'fronteira',
    id: 'kernel-latencia',
    title: 'Abaixo do runtime: kernel, perf e análise de latência',
    level: 'Expert',
    objective: 'Diagnosticar latência que não aparece na aplicação nem no runtime, usando as ferramentas do sistema operacional e um método que não depende de palpite.',
    prerequisites: ['Módulo 2 (Linux e diagnóstico)', 'Módulo 22', 'Módulo 14 (capacidade e degradação)'],
    problem: 'Chega um ponto em que todas as camadas observáveis dizem estar bem e a latência continua alta. A causa está no escalonador, na pressão de memória, na rede do host, no throttling de cgroup ou no disco — e nenhuma dessas aparece no dashboard da aplicação.',
    concepts: ['Método USE: utilização, saturação e erros por recurso', 'Escalonador, run queue e latência de agendamento', 'Throttling de CPU por cgroup e o efeito do limite em cargas com picos', 'Pressão de memória, reclaim e PSI', 'Rede do host: retransmissão, fila e buffer', 'perf e flame graph de CPU', 'off-CPU: onde o tempo passa esperando, não executando', 'Ruído de vizinho em ambiente compartilhado'],
    internals: [
      'Limite de CPU em cgroup não desacelera de forma suave: ele impõe janelas de throttling, e uma carga com picos curtos pode ser penalizada mesmo com utilização média baixa.',
      'Flame graph de CPU mostra onde o tempo é gasto executando; boa parte dos problemas de latência é tempo esperando, que só aparece em análise off-CPU.',
      'PSI (pressure stall information) mede quanto tempo tarefas ficaram bloqueadas por falta de CPU, memória ou I/O — é a métrica que separa "está usando" de "está sofrendo".',
      'Retransmissão de TCP entre pods costuma ser atribuída à aplicação; o contador está no host e desmente.'
    ],
    useWhen: ['Use quando o runtime e a aplicação não explicam a latência.', 'Use o método USE para não depender de intuição sobre qual recurso investigar.', 'Use análise off-CPU quando a CPU está baixa e a latência é alta.'],
    avoidWhen: ['Não faça tuning de kernel sem baseline nem hipótese.', 'Não copie parâmetro de blog sem entender o que ele troca.', 'Não desça para o kernel antes de esgotar as camadas acima.'],
    contrast: {
      bad: 'Aumentar o limite de CPU do pod porque "estava lento", sem olhar o contador de throttling nem o perfil de carga.',
      good: 'Verificar o throttling, constatar que o limite recorta picos curtos, e decidir entre elevar o limite, remover o limite mantendo o request, ou suavizar o pico na aplicação — com medição.'
    },
    tradeoffs: ['Limite de CPU dá previsibilidade ao cluster e pode penalizar carga com picos.', 'Tuning de kernel pode resolver e reduz a portabilidade da conclusão.', 'Análise profunda dá certeza e consome tempo que o incidente nem sempre permite.'],
    production: 'Um serviço apresenta p99 de 800 ms com CPU média em 30%. O contador de throttling do cgroup mostra o container recortado em quase metade das janelas: a carga tem picos curtos e o limite é baixo. Remover o limite, mantendo o request, elimina a cauda sem aumentar o consumo médio.',
    risks: ['Tuning aplicado sem baseline', 'Conclusão tirada só de CPU média', 'Ruído de vizinho confundido com problema da aplicação', 'Parâmetro de kernel copiado sem entender o trade-off'],
    checklist: ['Utilização, saturação e erros foram verificados por recurso?', 'Há throttling de cgroup?', 'O tempo é on-CPU ou off-CPU?', 'Existe baseline antes da mudança?', 'A conclusão vale fora deste host?'],
    interview: [
      { level: 'Pleno/Sênior', question: 'CPU média em 30% e latência alta. O que investigar?', expected: 'Throttling de cgroup (picos recortados), saturação por run queue, tempo off-CPU esperando I/O ou lock, pressão de memória e rede do host — média esconde cauda.' },
      { level: 'Sênior/Expert', question: 'Quando remover o limite de CPU de um container é a decisão certa?', expected: 'Quando a carga tem picos curtos, o request está corretamente dimensionado e o cluster tem folga: o limite recorta o pico sem beneficiar ninguém. Exige medir throttling antes e monitorar o vizinho depois.' }
    ],
    exercises: [
      { level: 'Aplicado', task: 'Aplicar o método USE a um host sob carga e preencher a matriz recurso × utilização, saturação e erros.', evidence: 'Matriz preenchida com a origem de cada número.' },
      { level: 'Aplicado', task: 'Provocar throttling de cgroup com um limite baixo e medir o efeito na cauda de latência.', evidence: 'Contador de throttling e distribuição de latência com e sem limite.' },
      { level: 'Sênior', task: 'Gerar um flame graph de um processo sob carga e identificar o caminho quente.', evidence: 'Flame graph e a conclusão, inclusive se for "o gargalo não é CPU".' }
    ],
    challenge: 'Escrever o runbook de investigação de latência do seu serviço, das camadas de cima até o kernel, com o comando de cada etapa.',
    book: 'Site Reliability Engineering (Google), capítulos de monitoramento e depuração; The Site Reliability Workbook (prática de investigação).',
    complements: [official.brendanGregg, official.ebpf, official.kubernetesDebug],
    exampleFile: '../../examples/devops-senior/fronteira/latency-runbook.md'
  }),
  moduleOf({
    number: 25,
    part: 'fronteira',
    id: 'plataforma-produto',
    title: 'Plataforma interna como produto: contrato, versionamento e clientes',
    level: 'Staff/Principal',
    objective: 'Tratar a plataforma interna como produto com clientes reais, contrato explícito e métricas de adoção — e reconhecer quando ela virou gargalo em vez de alavanca.',
    prerequisites: ['Módulo 16 (golden paths)', 'Módulo 20 (sistema sociotécnico)', 'Ter sido cliente de uma plataforma interna'],
    problem: 'Times de plataforma costumam nascer de uma reorganização e não de uma demanda. Sem cliente definido, contrato e métrica de adoção, a plataforma vira um portão: todo mundo precisa passar por ela, ninguém escolheu usá-la, e a carga cognitiva que ela deveria reduzir só mudou de lugar.',
    concepts: ['Plataforma como produto: quem é o cliente e qual o problema dele', 'Golden path é caminho recomendado, não caminho obrigatório', 'Contrato de interface e versionamento do que a plataforma oferece', 'Adoção voluntária como métrica de qualidade', 'Carga cognitiva: reduzir de fato, não transferir', 'Modelo de maturidade de plataforma', 'Autosserviço com guardrails versus portão de aprovação', 'Quando a plataforma vira gargalo — e como perceber'],
    internals: [
      'A diferença entre plataforma e portão é a possibilidade de saída: se o time não pode sair do caminho, a qualidade dele nunca é medida, porque a adoção é compulsória.',
      'Adoção voluntária é o melhor sinal de qualidade que uma plataforma interna tem: se o caminho é bom, as pessoas o escolhem.',
      'Toda abstração vaza; a pergunta é se, quando vaza, o cliente tem como descer um nível ou fica preso.',
      'Plataforma tem versionamento e compatibilidade como qualquer API pública — quebrar o contrato interno custa a confiança que sustenta a adoção voluntária.'
    ],
    useWhen: ['Construa plataforma quando há repetição cara entre times, medida.', 'Ofereça golden path com saída explícita documentada.', 'Meça adoção voluntária e tempo até o primeiro deploy.'],
    avoidWhen: ['Não crie plataforma por reorganização, sem demanda medida.', 'Não torne o caminho obrigatório para garantir adoção.', 'Não esconda complexidade a ponto de o cliente não conseguir diagnosticar o próprio serviço.'],
    contrast: {
      bad: 'Toda mudança de infraestrutura passa por um ticket para o time de plataforma, que virou fila. O tempo de espera não aparece em nenhuma métrica DORA de produto.',
      good: 'Autosserviço com guardrails: o time faz sozinho dentro do permitido, e o time de plataforma só entra quando o caso sai do envelope.'
    },
    tradeoffs: ['Padronizar reduz variedade e custo, e limita casos legítimos fora do padrão.', 'Autosserviço acelera e exige investimento grande em guardrails.', 'Abstrair reduz carga cognitiva e afasta o time do que ele opera.'],
    production: 'Uma plataforma interna é celebrada internamente e os times de produto reclamam de lentidão. A medição do tempo entre pedido e entrega de infraestrutura mostra fila de cinco dias, invisível nas métricas de deploy. A mudança para autosserviço com guardrails reduz o ciclo a minutos e transforma o time de plataforma em autor de caminhos, não em aprovador.',
    risks: ['Plataforma obrigatória mascarando baixa qualidade', 'Fila de tickets invisível nas métricas', 'Abstração sem escotilha de saída', 'Quebra de contrato interno sem aviso', 'Time de plataforma sem cliente definido'],
    checklist: ['Quem é o cliente, nominalmente?', 'A adoção é voluntária?', 'Existe saída documentada do golden path?', 'O tempo de espera por plataforma é medido?', 'O contrato tem versionamento e política de depreciação?'],
    interview: [
      { level: 'Sênior', question: 'Como saber se uma plataforma interna está funcionando?', expected: 'Adoção voluntária, tempo até o primeiro deploy de um serviço novo, ausência de fila de tickets e redução medida de carga cognitiva — não pelo número de recursos entregues.' },
      { level: 'Staff/Principal', question: 'A plataforma virou gargalo. Como você reverte sem desmontá-la?', expected: 'Medir o tempo de espera e torná-lo visível, converter aprovações em guardrails automatizados, abrir escotilhas de saída, e mudar a métrica do time de entregas para adoção e tempo de ciclo dos clientes.' }
    ],
    exercises: [
      { level: 'Aplicado', task: 'Escrever o contrato de um golden path: o que ele garante, o que exige e como sair dele.', evidence: 'Documento de contrato com versionamento e política de depreciação.' },
      { level: 'Sênior', task: 'Medir o tempo entre pedido e entrega de um recurso de infraestrutura no seu contexto.', evidence: 'Distribuição do tempo de espera e onde ele aparece (ou não) nas métricas atuais.' },
      { level: 'Sênior', task: 'Avaliar a plataforma contra um modelo de maturidade e definir o próximo nível.', evidence: 'Avaliação, lacuna priorizada e a métrica que provará o avanço.' }
    ],
    challenge: 'Entrevistar três times clientes da sua plataforma e descobrir o que eles fariam se pudessem não usá-la.',
    book: 'Team Topologies (plataforma como serviço para times de stream); Accelerate (autonomia, arquitetura e desempenho); The DevOps Handbook.',
    complements: [official.platformEng, official.backstage, official.teamTopologies],
    exampleFile: '../../examples/devops-senior/fronteira/platform-contract.md'
  }),
  moduleOf({
    number: 26,
    part: 'fronteira',
    id: 'iac-avancado',
    title: 'IaC além do Terraform: OpenTofu, providers próprios e testes de infraestrutura',
    level: 'Expert',
    objective: 'Decidir entre Terraform e OpenTofu por critério técnico e jurídico, e publicar um módulo versionado com testes que rodam em CI.',
    prerequisites: ['Módulo 9 (state, módulos e composição)', 'Módulo 10 (testes e policy as code)', 'Noção de versionamento semântico'],
    problem: 'A mudança de licença do Terraform em 2023 transformou uma decisão puramente técnica em decisão com eixo jurídico, e a maior parte dos times nunca a tomou explicitamente — continuou onde estava. Ao mesmo tempo, módulos internos crescem sem versionamento nem teste, e uma mudança quebra dez times ao mesmo tempo.',
    concepts: ['A mudança de licença e o que a BSL restringe na prática', 'OpenTofu: fork, governança e compatibilidade', 'Critério de decisão: técnico, jurídico e de ecossistema', 'Módulo como produto: interface, versionamento e depreciação', 'Testes de infraestrutura: unidade, contrato e integração', 'Escrever um provider e quando isso se justifica', 'Registry e distribuição interna', 'Migração e caminho de volta'],
    internals: [
      'A BSL não é software livre: ela restringe uso competitivo e converte para licença aberta após um período por release. Para a maioria dos usuários finais não muda nada, e para quem oferece serviço gerenciado muda tudo — por isso a avaliação é caso a caso.',
      'A compatibilidade entre as duas ferramentas cobre a maior parte dos casos, mas as bases divergiram: recursos exclusivos de cada lado existem e crescem.',
      'Módulo sem versionamento é dependência sem contrato: quem consome fica refém de qualquer commit no branch principal.',
      'Teste de infraestrutura que só valida sintaxe não testa nada relevante; o valor está em verificar o plano gerado e o comportamento sob mudança.'
    ],
    useWhen: ['Avalie OpenTofu quando a licença for restrição real ou quando quiser governança em fundação.', 'Versione todo módulo consumido por mais de um time.', 'Teste o plano gerado, não só a sintaxe.'],
    avoidWhen: ['Não migre por ideologia sem checar os providers que você usa.', 'Não escreva provider próprio antes de esgotar os existentes.', 'Não publique módulo sem política de depreciação.'],
    contrast: {
      bad: 'Módulo interno referenciado pelo branch principal, sem versão, consumido por dez times. Um commit muda o comportamento de todos ao mesmo tempo.',
      good: 'Módulo versionado por tag, com testes de plano em CI, changelog e janela de depreciação anunciada.'
    },
    tradeoffs: ['OpenTofu remove a restrição de licença e tem ecossistema menor.', 'Permanecer no Terraform mantém compatibilidade e aceita a licença.', 'Testar infraestrutura custa tempo de CI e evita mudança destrutiva em produção.'],
    production: 'Um módulo interno de rede é atualizado no branch principal para corrigir um caso específico. A mudança altera o nome de um recurso e, no próximo plano de outro time, aparece como destruição e recriação da sub-rede de produção. O incidente é evitado por um segundo par de olhos, não por processo — a correção é versionar e testar o plano em CI.',
    risks: ['Módulo sem versão consumido por vários times', 'Mudança que aparece como destruir/recriar no plano', 'Migração de ferramenta sem checar providers', 'State corrompido ou perdido sem backup', 'Provider próprio sem manutenção'],
    checklist: ['A decisão Terraform/OpenTofu está registrada e datada?', 'Todo módulo compartilhado tem versão?', 'O CI valida o plano, não só a sintaxe?', 'Existe alerta para plano com destruição inesperada?', 'O state tem backup e procedimento de recuperação?'],
    interview: [
      { level: 'Pleno/Sênior', question: 'Por que existe o OpenTofu?', expected: 'A HashiCorp mudou a licença do Terraform de MPL para BSL em 2023, restringindo uso competitivo. A comunidade criou um fork sob a Linux Foundation, mantendo licença aberta.' },
      { level: 'Sênior/Expert', question: 'Como você conduziria a decisão entre Terraform e OpenTofu?', expected: 'Levantar se a restrição da BSL afeta o negócio (jurídico), inventariar providers e recursos usados, testar o plano com as duas ferramentas no mesmo state, avaliar ecossistema e suporte, e registrar em ADR com gatilho de revisão — não decidir por preferência.' }
    ],
    exercises: [
      { level: 'Aplicado', task: 'Escrever um módulo com interface explícita, validação de variáveis e saídas documentadas.', evidence: 'Módulo versionado por tag, com README e exemplo de uso.' },
      { level: 'Aplicado', task: 'Criar testes que validem o plano gerado e falhem diante de uma mudança destrutiva.', evidence: 'Testes rodando em CI e um caso em que o teste barra a mudança.' },
      { level: 'Sênior', task: 'Avaliar a migração para OpenTofu inventariando providers e testando o plano.', evidence: 'ADR com inventário, resultado do teste comparado e recomendação com gatilho de revisão.' }
    ],
    challenge: 'Pegar o módulo interno mais usado do seu time, versioná-lo e adicionar o teste que teria barrado a última mudança arriscada.',
    book: 'Terraform: Up & Running (state, módulos e testes); Infrastructure as Code (Kief Morris) para os princípios independentes de ferramenta.',
    complements: [official.opentofu, official.tofuRegistry, official.terraformTest, official.terraformProvider],
    exampleFile: '../../examples/devops-senior/fronteira/iac/main.tf'
  }),
  moduleOf({
    number: 27,
    part: 'fronteira',
    id: 'ler-kubernetes',
    title: 'Ler o Kubernetes: código-fonte, KEPs e comunidade',
    level: 'Expert → fronteira',
    objective: 'Responder uma dúvida de comportamento lendo o código e os KEPs do Kubernetes, distinguindo o que é garantido do que é implementação da versão.',
    prerequisites: ['Módulos 21–23', 'Inglês técnico de leitura', 'Git e leitura de histórico'],
    problem: 'A documentação do Kubernetes descreve o que os recursos fazem, e quase nunca por quê nem em que ordem. Perguntas como "por que meu pod demorou a ser removido", "qual a ordem exata de terminação" ou "quando o scheduler desiste" têm resposta no código e nos KEPs — e uma quantidade enorme de folclore operacional existe por ninguém ter ido lá.',
    concepts: ['Estrutura do repositório: apimachinery, kubelet, scheduler, controller-manager', 'O ciclo de terminação de um pod, passo a passo', 'KEP: como uma mudança entra e por que foi decidida assim', 'Feature gates e estágios alpha, beta e GA', 'API conventions: o contrato que todo recurso segue', 'Diferença entre comportamento documentado e de implementação', 'SIGs e onde cada assunto é discutido', 'Construir e rodar os testes'],
    internals: [
      'A ordem de terminação de um pod — remoção do endpoint, sinal de término, período de graça, sinal de morte — é implementada em pontos distintos, e é a fonte da maioria dos casos de erro durante deploy que aparecem como "problema da aplicação".',
      'Feature gate em alpha pode mudar ou sumir entre versões; construir operação em cima de um sem plano de saída é assumir uma dívida com vencimento.',
      'Os KEPs registram a motivação e as alternativas descartadas — é onde está o porquê que a documentação não traz.',
      'As convenções de API definem o contrato que todo recurso segue; conhecê-las é o que permite desenhar um CRD que parece nativo (módulo 21).'
    ],
    useWhen: ['Use quando o comportamento observado não bate com a documentação.', 'Use o KEP para saber se um recurso é estável e para onde vai.', 'Use o código para entender ordem e tempo de operações do ciclo de vida.'],
    avoidWhen: ['Não construa operação sobre detalhe de implementação não documentado.', 'Não dependa de feature gate alpha sem plano de saída.', 'Não aprofunde além do que o problema exige.'],
    contrast: {
      bad: 'Adicionar um sleep no encerramento da aplicação "porque resolve" os erros durante deploy, sem entender o que acontece entre a remoção do endpoint e o sinal de término.',
      good: 'Ler a ordem real de terminação, identificar a janela em que o pod ainda recebe tráfego, e resolver com preStop e período de graça dimensionados — com o motivo registrado.'
    },
    tradeoffs: ['Ler a fonte dá certeza e custa tempo.', 'Conhecer internals melhora o diagnóstico e tenta a depender do não garantido.', 'Contribuir ensina muito e envolve processo, SIG e revisão.'],
    production: 'Um serviço apresenta erros a cada deploy, sempre nos primeiros segundos. A leitura da sequência de terminação mostra que a remoção do endpoint e o sinal de término são concorrentes: o pod pode receber requisição depois de começar a encerrar. A correção é um preStop com espera curta e encerramento gracioso — e agora o time sabe por quê.',
    risks: ['Ler versão diferente da que roda em produção', 'Depender de comportamento não documentado', 'Feature gate alpha em produção sem saída', 'Conclusão generalizada para outra distribuição do Kubernetes'],
    checklist: ['Estou lendo a versão do cluster em produção?', 'Isso é documentado ou é implementação?', 'Existe KEP sobre o assunto?', 'Consigo reproduzir num cluster descartável?', 'O achado virou runbook, teste ou ADR?'],
    interview: [
      { level: 'Pleno/Sênior', question: 'O que acontece, em ordem, quando um pod é removido?', expected: 'O objeto recebe deletionTimestamp; em paralelo o endpoint é removido do Service e o container recebe o sinal de término, com preStop antes dele; após o período de graça vem o sinal de morte. O paralelismo entre remoção de endpoint e término é a origem dos erros durante deploy.' },
      { level: 'Sênior/Expert', question: 'Como você investigaria uma mudança de comportamento após atualizar o cluster?', expected: 'Notas de versão primeiro, depois o KEP e o commit relacionados, feature gates alterados entre as versões, e reprodução mínima num cluster descartável — antes de considerar reverter.' }
    ],
    exercises: [
      { level: 'Aplicado', task: 'Documentar a sequência completa de terminação de um pod, com o ponto em que cada etapa é implementada.', evidence: 'Diagrama de sequência com referência ao código ou à documentação de cada etapa.' },
      { level: 'Aplicado', task: 'Escolher um recurso que você usa e ler o KEP correspondente, registrando motivação e alternativas descartadas.', evidence: 'Nota com o porquê da decisão e o estágio atual do recurso.' },
      { level: 'Sênior', task: 'Investigar uma dúvida real pelo código ou pelos KEPs e produzir a reprodução mínima.', evidence: 'Pergunta, caminho até a fonte, citação e reprodução em cluster descartável.' }
    ],
    challenge: 'Escolher uma prática operacional que seu time adota "porque funciona" e descobrir, na fonte, se o motivo real é o que se imagina.',
    book: 'Kubernetes: Up and Running como mapa antes de entrar no código; The Site Reliability Workbook (investigação disciplinada).',
    complements: [official.k8sRepo, official.keps, official.apiConventions, official.k8sContributor],
    exampleFile: '../../examples/devops-senior/fronteira/pod-termination.md'
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
    'Não marca Dominado antes de evidência HTTP(S) validada e revisão D30.',
    'Fronteira (módulos 21–27) é opcional para o gate sênior e obrigatória para reivindicar nível expert.',
    'Fronteira concluída exige: um operator que converge após ser morto no meio da reconciliação, uma causa de latência encontrada por instrumentação de kernel, o custo do sidecar medido no workload real, um caso de throttling de cgroup diagnosticado, o contrato de um golden path com escotilha de saída, um módulo IaC versionado cujos testes barram a mudança destrutiva, e uma prática operacional do time confrontada com o código do Kubernetes.'
  ]
});

/*
 * Gabarito de autoavaliação. Não substitui a evidência operacional exigida pela
 * rubrica: serve para o estudo solo verificar a resposta antes de concluir.
 */
export const devopsAnswerKey = devopsModules.map((module) => ({
  module: module.number,
  title: module.title,
  objetivoAtingido: module.objective,
  respostaEsperadaNaEntrevista: (module.interview || []).map((item) => `${item.level}: ${item.expected}`),
  erroMaisComum: module.contrast?.bad || module.risks?.[0] || 'Mudar sem baseline.',
  criterioDeAceite: (module.exercises || []).map((item) => `${item.level} — evidência: ${item.evidence}`),
  sinalDeQueNaoDominou: module.risks || []
}));
