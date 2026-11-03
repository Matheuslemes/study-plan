import { readFileSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, relative, extname, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { projetos as catalog } from '../public/data/projetos.js';
import { additionalGuides } from './project-guide-introductions.mjs';
import { describeAdditionalDocument } from './project-guide-documentation.mjs';
import { escapeHtml as esc } from '../public/assets/js/core/render.js';

// Recria o catálogo a partir dos documentos locais, sem modificar as fontes.
// Uso: node scripts/build-project-guides.mjs [pasta-do-portfolio]
const source = process.argv[2] || 'C:/Users/mathe/Desktop/project-ideias/portfolio';
const output = join(dirname(dirname(fileURLToPath(import.meta.url))), 'public/projetos');
const projects = [
  { id: 'o08', slug: 'acessibilidade-digital-continua', folder: 'acessibilidade digital contínua', brand: 'Passagem', title: 'Acessibilidade digital contínua',
    lead: 'Descobrir quando uma mudança no site cria uma barreira para quem o utiliza.',
    intro: 'Imagine uma loja virtual em que uma pessoa navega usando apenas o teclado. Uma atualização pode deixar o botão de compra inacessível. Este projeto propõe testar caminhos da loja a cada alteração e mostrar quais problemas surgiram, quais já existiam e quais foram corrigidos.',
    audience: 'Equipes que desenvolvem sites e precisam acompanhar problemas de acessibilidade durante as mudanças do produto.',
    example: 'Uma alteração remove o nome acessível de um botão. O teste automático encontra o problema, compara com a versão de referência e registra a nova barreira. Uma regra previamente definida decide se essa alteração deve ser bloqueada até a correção.',
    steps: ['Uma alteração chega ao repositório', 'Jornadas automáticas procuram barreiras', 'Os achados são comparados com a referência', 'Uma decisão explica o que precisa ser corrigido'],
    scope: 'A demonstração planejada usa um e-commerce próprio e dados sintéticos. Testes automáticos cobrem parte da acessibilidade; não substituem toda a avaliação humana nem certificam conformidade. Auditoria com participantes reais está fora do MVP.',
    terms: [['Achado', 'Um problema encontrado pelo teste, como um campo sem identificação.'], ['Baseline', 'Versão de referência usada para saber o que mudou.'], ['Regressão', 'Um problema novo ou que voltou depois de uma alteração.'], ['Gate', 'Regra de aprovação ou bloqueio da alteração, acompanhada de uma justificativa.']],
  },
  { id: 'o03', slug: 'governanca-observabilidade-ia', folder: 'governança e observabilidade de IA', brand: 'Crivo IA', title: 'Governança, avaliação e observabilidade de IA',
    lead: 'Verificar se uma nova versão de uma aplicação de IA pode ser liberada com confiança.',
    intro: 'Imagine um assistente de atendimento de uma loja. Ao mudar seu modelo ou suas instruções, algumas respostas podem melhorar e outras piorar. Este projeto propõe repetir testes conhecidos, comparar as versões e guardar as razões da decisão de liberar ou bloquear a mudança.',
    audience: 'Equipes que mantêm aplicações com IA e precisam entender mudanças de comportamento, investigar falhas e justificar liberações.',
    example: 'Uma nova instrução faz o assistente responder incorretamente a um caso crítico de atendimento. O sistema executa uma coleção de testes, compara com a versão anterior e preserva os resultados. Uma falha determinística pode bloquear a liberação; um resultado inconclusivo permanece identificado como tal.',
    steps: ['Uma versão candidata é registrada', 'Uma coleção de testes é executada', 'Resultados são comparados com a referência', 'A decisão e suas evidências são preservadas'],
    scope: 'A demonstração planejada usa um assistente de e-commerce e dados sintéticos, com provedor de IA simulado para testes reproduzíveis. Não exige uma API paga. Resultados estatísticos e decisão de bloqueio são separados; apenas FAILED determinístico bloqueia o CI.',
    terms: [['Governança', 'Regras e registros que permitem entender quem decidiu e por quê.'], ['Observabilidade', 'Informações sobre o que aconteceu durante uma execução, para investigar problemas.'], ['Suite e baseline', 'Uma coleção de testes e uma versão de referência para comparar resultados.'], ['Gate de release', 'Decisão registrada sobre a liberação de uma nova versão.']],
  },
  { id: 'o06', slug: 'conciliacao-cobranca-caixa-pme', folder: 'conciliação, cobrança e caixa para PME', brand: 'Compasso Caixa', title: 'Conciliação, cobrança e caixa para PME', category: 'Operação e negócios', track: 'bancos', inventoryDate: '01/11/2026',
    lead: 'Entender o que foi recebido, o que está pendente e como isso afeta o caixa da empresa.',
    intro: 'Imagine uma academia que recebe mensalidades por diferentes meios. O valor registrado no controle interno nem sempre aparece da mesma forma no extrato: pode haver taxas, pagamentos parciais ou lançamentos repetidos. O Compasso Caixa propõe reunir esses registros, explicar quais valores correspondem entre si e separar as diferenças que uma pessoa precisa revisar.',
    audience: 'Pequenas e médias empresas e escritórios contábeis autorizados a acompanhar seus recebimentos. O recorte de demonstração é o de academias.',
    example: 'Uma academia espera uma mensalidade de R$ 100, mas o extrato mostra R$ 97 após uma taxa de R$ 3. O sistema propõe a correspondência e mostra os registros que explicam a diferença. Se faltar informação, envia o caso para revisão. Uma mensalidade realmente em atraso pode gerar uma sugestão de cobrança, que exige aprovação de outra pessoa e termina apenas no simulador local.',
    steps: ['Importar arquivos e eventos simulados', 'Comparar recebimentos e explicar diferenças', 'Revisar pendências e aprovar ações', 'Projetar o caixa e fechar o período'],
    scope: 'O projeto está documentado e ainda não foi implementado. A demonstração prevê três academias fictícias e a Contabilidade Prisma, também fictícia. Importações, provedores e cobranças usam dados sintéticos e simuladores locais. A plataforma não guarda nem transfere dinheiro; cobrança exige aprovação humana e nova conferência antes do envio simulado.',
    terms: [['Conciliação', 'Conferir se os registros internos e os recebimentos correspondem, incluindo taxas e diferenças.'], ['Idempotência', 'Processar novamente o mesmo arquivo ou evento sem registrar o pagamento em duplicidade.'], ['Projeção de caixa', 'Estimativa de saldo futuro com premissas explícitas e indicação do grau de certeza dos valores.'], ['Fechamento de competência', 'Consolidar os registros de um período e preservar uma versão verificável, com regras para reabertura.']],
  },
];
projects.push(...additionalGuides.map(p => {
  const item = catalog.find(item => item.id === p.id);
  if (!item) throw new Error(`Projeto ausente do catálogo: ${p.id}`);
  return { ...p, folder: item.pasta, title: item.titulo, category: item.categoria, track: item.track };
}));
for (const p of projects) { p.category ||= 'Qualidade e governança'; p.inventoryDate = '01/11/2026'; }
const groups = ['Comece por aqui', 'Planejamento e arquitetura', 'Funcionalidades', 'Decisões técnicas', 'Dados e integrações', 'Interface e design', 'Operação e demonstração', 'Pesquisa e referências', 'Revisões e histórico'];
const featureSummaries = {
  'benchmark-sintetico-de-fechamento': 'Medir esforço de fechamento e prazo de recebimento em dados fictícios, com resultados reproduzíveis e identificados como sintéticos.',
  'cobranca-com-aprovacao-humana': 'Sugerir cobranças, exigir aprovação de outra pessoa e conferir novamente o recebível antes do envio ao simulador local.',
  'conciliacao-cardinalidades': 'Relacionar um ou vários lançamentos a um ou vários recebíveis, conferindo somas, moeda, período e diferenças restantes.',
  'confirmacao-e-reversao': 'Confirmar uma conciliação ou desfazê-la por um registro compensatório, sem apagar o histórico e respeitando períodos fechados.',
  'consultas-e-read-models': 'Consultar lançamentos, recebíveis e conciliações com filtros permitidos, origem e atualização dos dados visíveis.',
  'criacao-empresa-usuarios-papeis': 'Cadastrar a empresa, usuários e permissões iniciais, garantindo acesso apenas ao que cada papel pode realizar.',
  'delegacao-escritorio-contabil': 'Autorizar um escritório contábil a acessar uma empresa por vínculo explícito, limitado e revogável.',
  'fechamento-de-competencia': 'Consolidar o período em uma versão imutável, verificar pendências e permitir exportação e reabertura com justificativa.',
  'importacao-csv-ofx-idempotente': 'Importar arquivos CSV e OFX com prévia, preservação do original e proteção contra duplicidade e importação parcial.',
  'inbox-de-excecoes': 'Organizar divergências em uma fila com causa, responsável, prioridade e ações de resolução.',
  'matching-explicavel': 'Propor correspondências entre lançamentos e recebíveis usando regras versionadas e evidências para cada sugestão.',
  'projecao-de-caixa': 'Projetar o saldo a partir de fatos conciliados, exibindo premissas, grau de certeza e dados desatualizados.',
  'simulacao-conexao-e-degradacao': 'Simular conexão e falhas de um provedor financeiro, incluindo demora, limites e consentimento expirado, sem acesso externo.',
  'webhook-psp-sintetico-idempotente': 'Receber eventos assinados de um simulador de pagamentos e produzir um único efeito mesmo quando o envio se repete.',
  'armazenamento-de-evidencia': 'Guardar provas dos testes de forma privada, com verificação de integridade e prazo de retenção.',
  'atualizacao-controlada-do-motor': 'Atualizar o motor de testes sem confundir mudanças das regras com novos problemas no site.',
  'auditoria-humana': 'Registrar os requisitos de avaliação por pessoas e os limites que deixam essa atividade fora do MVP.',
  'backup-e-restauracao': 'Demonstrar a recuperação do banco e dos arquivos a partir de backups verificados.',
  'cadastro-organizacao-aplicacao': 'Cadastrar organizações e aplicações mantendo os dados de cada organização separados.',
  'calculo-de-gate': 'Aplicar regras versionadas para decidir se uma alteração passa ou deve ser bloqueada.',
  'correcao-e-reteste': 'Verificar uma correção em nova execução e preservar o histórico de problemas resolvidos ou reabertos.',
  'deteccao-de-regressao': 'Comparar achados com uma referência e distinguir problemas novos, recorrentes e resolvidos.',
  'execucao-automatica-em-pr': 'Executar testes quando uma alteração é proposta e ligar o resultado ao commit correspondente.',
  'execucao-on-demand-autorizada': 'Permitir testes avulsos apenas em destinos previamente autorizados.',
  'instalacao-integracao-pipeline': 'Autorizar o vínculo com um repositório para executar testes e publicar resultados.',
  'integracao-issue-tracker': 'Definir o vínculo entre achados e tarefas externas, com os limites dessa integração no escopo.',
  'operacao-degradada': 'Distinguir indisponibilidade da plataforma de uma falha real de acessibilidade.',
  'publicacao-de-status-check': 'Publicar o resultado no pull request correto sem duplicar efeitos ou expor credenciais.',
  'relatorio-e-exportacao': 'Exportar achados e evidências em formatos definidos, sem emitir certificação.',
  'revogacao-de-integracao': 'Retirar a autorização de uma integração e impedir novas ações, preservando o histórico.',
  'supressao-de-achados': 'Permitir exceções temporárias para achados, com justificativa, aprovação e expiração.',
  'aprovacao-e-override': 'Registrar aprovação ou exceção à decisão automática com justificativa e rastreabilidade.',
  'atribuicao-de-custo': 'Relacionar consumo e custo às execuções de IA de forma verificável.',
  'comparacao-baseline-candidato': 'Comparar a versão de referência com a candidata usando os mesmos casos de teste.',
  'decisao-de-gate-auditavel': 'Produzir uma decisão de liberação que possa ser explicada e reproduzida.',
  'exclusao-comprovavel': 'Excluir dados conforme regras de retenção e registrar prova da operação.',
  'execucao-de-suite-versionada': 'Executar uma coleção de testes cuja versão e entradas ficam registradas.',
  'exportacao-de-evidencia': 'Gerar um pacote verificável com os resultados e as razões da decisão.',
  'gestao-de-incidente': 'Acompanhar incidentes ligando investigação, ações e evidências.',
  'ingestao-idempotente': 'Receber registros de execução sem criar duplicatas quando o envio se repete.',
  'redaction-antes-da-persistencia': 'Remover ou mascarar conteúdo sensível antes de gravá-lo.',
  'registro-de-release-candidato': 'Congelar a identidade da versão candidata, incluindo modelo, instruções e configurações.',
  'replay-seguro': 'Repetir uma execução para diagnóstico sem refazer ações com efeitos reais.',
};
const adrSummaries = {
  '048': 'Reúne decisões já aceitas e delimita o que entra na primeira versão do produto.',
  '049': 'Completa regras de filas, upload e exportação e fixa limites para o laboratório.',
  '050': 'Separa a loja de demonstração dos demais destinos e esclarece a revogação de trabalhos.',
  '051': 'Define recuperação consistente e retirada de permissões sem depender de cache.',
  '052': 'Define os dados de consulta do portal, sempre limitados à organização autorizada.',
  '053': 'Separa credenciais operacionais dos acessos usados no portal.',
  '054': 'Define a autoridade dos formatos de dados e a ligação entre telas, APIs, dados e testes.',
  '055': 'Justifica a escolha dos bancos considerando consistência, disponibilidade e latência.',
  '056': 'Confirma Java, Next.js e MinIO e resolve divergências com recomendações anteriores.',
  '057': 'Ordena mudanças do banco por fase e trata identidade e operações anteriores à seleção da organização.',
  '058': 'Define testes de latência que também contabilizam espera e filas sob carga.',
  '059': 'Limita os destinos de rede do navegador executor e separa suas credenciais.',
  '067': 'Consolida a revisão arquitetural, os resultados possíveis do gate e os limites de dados sintéticos.',
  '068': 'Completa contratos de consulta do portal, paginação e regras de autorização.',
  '069': 'Define criação e revogação de tokens e os limites de exposição do conteúdo capturado.',
  '070': 'Alinha decisões, aprovações, pacotes de evidência, replay e integrações.',
  '071': 'Completa regras de custo, incidentes, exclusão e formatos de dados.',
  '072': 'Justifica PostgreSQL e as condições para considerar outros bancos no futuro.',
  '073': 'Confirma a stack Java, Next.js e MinIO frente às alternativas documentadas.',
  '074': 'Define como avaliar se a candidata preserva a qualidade, com margem tolerável e tamanho de amostra.',
  '075': 'Define revisão humana sem revelar a identidade da versão e como medir acordo entre avaliadores.',
  '076': 'Evita medições otimistas de latência que deixam de contar a espera nas filas.',
  '077': 'Planeja um experimento de concorrência e coleta de memória no Java 25 antes de adotar otimizações.',
  '078': 'Reforça o isolamento de dados entre organizações e define como os workers recebem tarefas.',
  '079': 'Corrige ordem, dependências e responsabilidades das mudanças versionadas do banco.',
};
function walk(root) { return readdirSync(root, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(join(root, e.name)) : [join(root, e.name)]); }
const financeAdrSummaries = {
  '064': 'Consolida decisões de preparação e contratos já aceitas, distinguindo documentação resolvida de implementação concluída.',
  '065': 'Padroniza rotas, dados de consulta, paginação e autorização por empresa e vínculo contábil.',
  '066': 'Define como arredondar valores e distribuir diferenças de centavos de forma determinística e rastreável.',
  '067': 'Completa as regras de importação, fechamento, reabertura e geração de relatórios.',
  '068': 'Justifica PostgreSQL como banco único e define quando outras tecnologias poderiam ser consideradas.',
  '069': 'Confirma Java, Spring Boot, Next.js e MinIO, resolvendo divergências com recomendações anteriores.',
  '070': 'Ordena mudanças do banco por fase, define como tarefas são obtidas com isolamento por empresa e trata acessos anteriores à escolha da empresa.',
  '071': 'Unifica papéis de acesso e regras de autenticação em dois fatores, reautenticação e autorização de tarefas em segundo plano.',
  '072': 'Define medições de latência que contam a espera sob carga, evitando resultados artificialmente otimistas.',
  '073': 'Define proteção para arquivos CSV/OFX, downloads e eventos de pagamento recebidos de fontes não confiáveis.',
  '074': 'Esclarece rateios com valores negativos, revisão obrigatória, medição de correspondências incorretas e integridade dos vínculos financeiros.',
};
function describe(path, title, projectId) {
  const file = basename(path);
  if (path === 'README.md') return [0, 'Apresenta o problema, a solução planejada, a stack e o estado real do projeto. É a visão geral inicial.'];
  if (file === 'COMECE-AQUI.md') return [0, 'Explica quais decisões valem hoje, a ordem para iniciar o desenvolvimento e onde encontrar cada detalhe.'];
  if (path === 'docs/README.md') return [0, 'Índice mestre que organiza os documentos e orienta a navegação entre as fontes.'];
  if (extname(path) === '.html') return [0, 'Visão geral navegável do projeto, preparada para consultar a proposta e o planejamento em uma página.'];
  if (path.includes('/history/')) return [8, 'Preserva uma versão anterior ou um registro de substituições. Serve para entender a evolução; consulte as decisões mais recentes antes de implementar.'];
  if (path.startsWith('.specs/features/')) {
    const subject = path.split('/')[2];
    if (!featureSummaries[subject]) throw new Error(`Funcionalidade sem resumo: ${path}`);
    const prefix = file === 'design.md' ? 'Desenho técnico da funcionalidade: ' : file === 'tasks.md' ? 'Tarefas para implementar e verificar a funcionalidade: ' : 'Requisitos e critérios de aceitação: ';
    return [2, prefix + featureSummaries[subject]];
  }
  if (path === '.specs/STATE.md') return [1, 'Mapa do estado das especificações, decisões e pendências. Documentação pronta não significa implementação concluída.'];
  if (path.includes('/adr/')) {
    const number = file.slice(0, 3);
    const summaries = projectId === 'o06' ? financeAdrSummaries : adrSummaries;
    if (!summaries[number]) throw new Error(`ADR sem resumo: ${projectId}/${path}`);
    return [3, summaries[number]];
  }
  if (path.startsWith('design/')) return [5, extname(path) === '.pdf' ? 'Referência visual em PDF que acompanha a proposta de interface e identidade do produto.' : 'Apresenta a identidade visual, a linguagem da interface e a proposta de experiência do produto.'];
  const rules = [
    ['tese-saas', 1, 'Expõe a hipótese de produto: problema, público, proposta de valor e possibilidades de negócio. Não comprova demanda comercial.'],
    ['stack-recommendation', 1, 'Compara alternativas de tecnologia e suas justificativas. É uma recomendação histórica: as confirmações posteriores nos ADRs prevalecem.'],
    ['architecture-and-technical', 1, 'Descreve componentes, responsabilidades, regras essenciais e decisões de arquitetura, incluindo ADRs reunidos no próprio documento.'],
    ['fullstack-development-roadmap', 1, 'Organiza a implementação em fases, tarefas e critérios para avançar de uma etapa para outra.'],
    ['full-stack-development-mapping', 1, 'Liga requisitos às partes da solução, dependências, dados, telas e verificações necessárias.'],
    ['documentation-completeness', 8, 'Audita o que a documentação já cobre e o que falta, com um plano para fechar as lacunas.'],
    ['decision-audit', 8, 'Confere decisões e referências para identificar inconsistências entre documentos.'],
    ['/decisions/', 8, 'Registra a resolução de divergências documentais e indica as escolhas que substituem textos anteriores.'],
    ['/rfc/', 8, 'Explica uma revisão coordenada dos documentos e os ajustes necessários para alinhar decisões e contratos. Tema: ' + title.replace(/^RFC-\d+\s*—\s*/, '') + '.'],
    ['contract-catalog', 4, 'Lista os acordos entre as partes do sistema: entradas, saídas, erros e regras de comunicação.'],
    ['contract-verification', 4, 'Define como verificar se os contratos de comunicação foram atendidos e quais evidências são necessárias.'],
    ['contract-closure', 4, 'Consolida as decisões que fecham lacunas de comunicação entre interface e backend.'],
    ['supplemental-contract', 4, 'Complementa contratos com regras que precisavam de definição adicional.'],
    ['physical-data-model', 4, 'Detalha tabelas, relacionamentos, restrições e a sequência de mudanças do banco de dados.'],
    ['external-integrations', 4, 'Define como conversar com sistemas externos, incluindo autorização, falhas e limites da integração.'],
    ['screen-specification', 5, 'Descreve telas, ações, estados e os dados necessários em cada interação.'],
    ['backup-restore', 6, 'Planeja cópias de segurança, restauração e comprovação de que os dados foram recuperados corretamente.'],
    ['observability-and-operational', 6, 'Define métricas, registros, alertas e procedimentos para investigar e responder a falhas.'],
    ['technical-demonstration', 6, 'Organiza os cenários e as evidências para demonstrar tecnicamente o projeto no portfólio.'],
    ['code-performance-research', 7, 'Pesquisa formas de melhorar importação, conciliação, consultas e processamento em Java/Spring, preservando correção financeira e exigindo medições antes de otimizar.'],
    ['external-research', 7, 'Reúne fontes externas e evidências utilizadas para fundamentar as escolhas do projeto.'],
    ['leitura-tecnica', 7, 'Relaciona conceitos de livros técnicos às decisões e aos problemas concretos do projeto.'],
    ['solucoes-lacunas', 7, 'Aprofunda soluções metodológicas e técnicas para as lacunas identificadas no Crivo IA.'],
  ];
  for (const [pattern, group, summary] of rules) if (path.includes(pattern)) return [group, summary];
  throw new Error(`Documento sem descrição: ${path}`);
}
mkdirSync(output, { recursive: true });
for (const p of projects) {
  const root = join(source, p.folder);
  const docs = walk(root).sort().map((file, i) => {
    const path = relative(root, file).replaceAll('\\', '/');
    const text = extname(file) === '.md' ? readFileSync(file, 'utf8') : '';
    let featureText = text, featureTitle = '';
    if (path.startsWith('.specs/features/')) {
      featureText = readFileSync(join(dirname(file), 'spec.md'), 'utf8');
      featureTitle = featureText.match(/^# (.+)$/m)?.[1]?.trim() || path.split('/')[2];
    }
    let title = text.match(/^# (.+)$/m)?.[1]?.trim() || (extname(file) === '.pdf' ? 'Referência visual do design' : `Visão geral — ${p.brand}`);
    if (path.startsWith('.specs/features/') && basename(path) !== 'spec.md') {
      const spec = readFileSync(join(dirname(file), 'spec.md'), 'utf8').match(/^# (.+)$/m)?.[1] || path.split('/')[2];
      title = spec.trim() + (basename(path) === 'design.md' ? ' — desenho técnico' : ' — tarefas');
    }
    const extra = additionalGuides.some(g => g.id === p.id) ? describeAdditionalDocument(path, title, text, featureText, featureTitle) : null;
    const [group, summary] = extra || describe(path, title, p.id);
    return { path, title, group, summary, id: `doc-${i + 1}`, format: extname(file).slice(1).toUpperCase() };
  });
  const sections = groups.map((group, index) => {
    const rows = docs.filter(d => d.group === index);
    if (!rows.length) return '';
    return `<section class="guide-group" id="grupo-${index}" data-doc-group><h3>${group} <span class="guide-count">${rows.length}</span></h3>${rows.map(d => `<article class="guide-document" id="${d.id}" data-document><div><h4>${esc(d.title)}</h4><p>${esc(d.summary)}</p><code>${esc(d.path)}</code></div><span class="guide-format">${d.format}</span></article>`).join('\n')}</section>`;
  }).join('\n');
  const preferred = p.id === 'o20' ? ['README.md', 'o20-marketplace-b2b-regional-tese-saas.md', 'docs/o20-architecture-and-technical-decisions.md'] : ['README.md', 'docs/COMECE-AQUI.md', 'docs/README.md'];
  const start = preferred.map(path => docs.find(d => d.path === path)).filter(Boolean);
  const formats = [...new Set(docs.map(d => d.format))].map(format => `${docs.filter(d => d.format === format).length} ${format}`).join(', ');
  const html = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)} — Guia do projeto</title><meta name="description" content="${esc(p.lead)} Introdução e catálogo comentado da documentação.">
<link rel="icon" href="../favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="../assets/vendor/fonts/fonts.css?v=project-guides-1"><link rel="stylesheet" href="../assets/css/tokens.css?v=project-guides-1"><link rel="stylesheet" href="../assets/css/tracks-palette.css?v=project-guides-1"><link rel="stylesheet" href="../assets/css/project-guide.css?v=project-guides-1">
<script type="module" src="../assets/js/pages/project-guide.js"></script></head>
<body data-track="${p.track || (p.id === 'o03' ? 'ia' : 'devops')}"><a class="guide-skip" href="#introducao">Pular para o conteúdo</a>
<div class="guide-shell"><header class="guide-header"><a href="../index.html#tabProjetos">← Voltar ao plano de estudos</a><span>Portfólio / ${esc(p.category || 'Qualidade e governança')}</span></header>
<div class="guide-layout"><aside class="guide-sidebar"><p class="guide-eyebrow">${p.id.toUpperCase()} · ${p.brand}</p><nav aria-label="Nesta página"><a href="#introducao">Entenda o projeto</a><a href="#leitura">Por onde começar</a><a href="#documentacao">Documentação</a>${groups.map((g, i) => docs.some(d => d.group === i) ? `<a class="guide-subnav" href="#grupo-${i}">${g}</a>` : '').join('')}</nav>${projects.filter(other => other.id !== p.id && other.category === p.category).map(other => `<a class="guide-other" href="${other.slug}.html">Ver ${esc(other.brand)} →</a>`).join('')}</aside>
<main id="introducao"><p class="guide-eyebrow">Guia introdutório · ${p.brand}</p><h1>${esc(p.title)}</h1><p class="guide-lead">${esc(p.lead)}</p>
<p class="guide-status">Documentado · implementação não iniciada</p><p>${esc(p.intro)}</p><p><strong>Para quem:</strong> ${esc(p.audience)}</p>
<section class="guide-example"><h2>Um exemplo simples</h2><p>${esc(p.example)}</p><ol class="guide-flow">${p.steps.map(step => `<li>${esc(step)}</li>`).join('')}</ol></section>
<p class="guide-scope">${esc(p.scope)}</p>
<details class="guide-glossary"><summary>Quatro termos para entender a proposta</summary><dl>${p.terms.map(([term, meaning]) => `<dt>${esc(term)}</dt><dd>${esc(meaning)}</dd>`).join('')}</dl></details>
<section id="leitura" class="guide-reading"><p class="guide-eyebrow">Primeira leitura</p><h2>Por onde começar</h2><ol>${start.map(d => `<li><a href="#${d.id}">${esc(d.path)}</a><p>${esc(d.summary)}</p></li>`).join('')}</ol><p>${esc(p.readingNote || 'Depois, leia a arquitetura para entender as partes do sistema e o roadmap para conhecer a ordem de implementação. Em caso de divergência, consulte o guia Comece aqui e as decisões posteriores.')} ADR é um registro de decisão técnica; RFC registra uma proposta ou revisão.</p></section>
<section id="documentacao"><p class="guide-eyebrow">Mapa de leitura</p><h2>Documentação comentada</h2><p>${docs.length} arquivos: ${formats}. O catálogo inclui os arquivos históricos e as especificações existentes nesta pasta; decisões reunidas dentro de um documento não são contadas como arquivos separados.</p><p class="guide-source">Pasta de origem: <code>project-ideias/portfolio/${esc(p.folder)}</code><br>Inventário de ${p.inventoryDate || '26/10/2026'}. Os caminhos abaixo são relativos a essa pasta; esta página apresenta os resumos, sem copiar os documentos originais.</p>
<div class="guide-search" hidden><label for="document-search">Buscar documento, assunto ou caminho</label><input id="document-search" type="search" placeholder="Ex.: contratos, backup, regras…" autocomplete="off"><p id="document-count" role="status" aria-live="polite">${docs.length} documentos</p></div><p id="document-empty" hidden>Nenhum documento encontrado. Tente outro termo ou limpe a busca.</p>
${sections}</section><footer class="guide-footer">Catálogo baseado na documentação local. Objetivos, testes e entregas descritos são planejados; não representam uma implementação validada.<a href="#introducao">Voltar ao início ↑</a></footer></main></div></div></body></html>`;
  writeFileSync(join(output, `${p.slug}.html`), html);
  console.log(`${p.slug}: ${docs.length} documentos catalogados.`);
}

