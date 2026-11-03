// Resumos por assunto; números de ADR não são compartilhados entre projetos.
export function describeAdditionalDocument(path, title, text, featureText, featureTitle) {
  const clean = value => value.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[`*_]/g, '').replace(/\s+/g, ' ').trim();
  const subject = clean(title.replace(/^(?:ADR|FEAT)-\d+\s*[—–:-]\s*/, ''));
  if (path.startsWith('.specs/features/')) {
    const objective = featureText.match(/^##\s+(?:\d+\.?\s+)?Objetivo[^\n]*\r?\n([\s\S]*?)(?=^##\s|$(?![\s\S]))/mi)?.[1];
    const paragraph = objective?.split(/\r?\n\s*\r?\n/).map(clean).find(p => p && !/^[|>#]/.test(p));
    const purpose = paragraph && paragraph.length <= 650 ? paragraph : `Define o comportamento de “${clean(featureTitle.replace(/^FEAT-\d+\s*[—–:-]\s*/, ''))}”, suas regras e condições de aceitação.`;
    const prefix = path.endsWith('/design.md') ? 'Desenho técnico e componentes para esta funcionalidade. ' : path.endsWith('/tasks.md') ? 'Sequência de tarefas para implementar e verificar esta funcionalidade. ' : 'Requisitos da funcionalidade. ';
    return [2, prefix + purpose];
  }
  if (path.includes('/adr/')) {
    const rules = [
      ['acesso-operacional', 'Separa o acesso de manutenção do acesso normal da aplicação, limitando comandos privilegiados e registrando seu uso.'],
      ['filas-handoff', 'Define como tarefas entram na fila, passam para atendimento humano e mantêm um histórico coerente dos comandos.'],
      ['separacao-do-simulador', 'Mantém a demonstração local separada do canal oficial, evitando que testes disparem mensagens reais.'],
      ['desfecho-incerto', 'Trata envios cujo resultado não foi confirmado, preservando ordem por conversa e evitando duplicar ou perder reservas.'],
      ['modelo-explicavel', 'Define como avaliar e explicar o modelo, incluindo calibração e comparação de resultados entre grupos.'],
      ['liberacao-da-d2', 'Define critérios de avaliação e liberação das etapas analíticas D2 e D3, sem confundir metas com resultados medidos.'],
      ['ameacas-por-fronteira', 'Analisa riscos em cada troca de dados e limita a exposição de informações individuais em resultados estatísticos.'],
      ['base-publica-bff', 'Define o endereço de acesso, a intermediação do portal e o fluxo de autenticação com Keycloak e PKCE.'],
      ['protocolo-local', 'Define a persistência no dispositivo e como demonstrar a posse da chave que identifica a origem dos registros.'],
      ['ordem-no-servidor', 'Define a ordem de publicação e o tratamento de operações concorrentes para manter contagens e registros consistentes.'],
      ['ordem-logica', 'Organiza a sequência dos eventos e os conflitos para preservar integridade local e permitir verificar a exportação.'],
      ['resiliencia-dos-adaptadores', 'Define limites, tentativas e recuperação nas integrações e tarefas em segundo plano quando uma dependência falha.'],
      ['objetivos-de-servico', 'Define metas verificáveis de operação e testes automáticos que observam a disponibilidade do serviço.'],
      ['csp-e-preview', 'Restringe o que o navegador pode executar e separa a prévia do exercício da origem principal da aplicação.'],
      ['preview-runner', 'Separa prévia, execução e sugestões consultivas, delimitando o que cada mecanismo pode fazer.'],
      ['determinismo-comparadores', 'Define como comparar resultados de exercícios de forma reproduzível e estabelecer a resposta esperada.'],
      ['casos-ocultos', 'Limita as informações reveladas sobre testes ocultos para que saídas públicas não exponham respostas ou critérios internos.'],
      ['isolamento-local', 'Define como verificar o isolamento da execução e restringir os serviços e o processo auxiliar aos poderes necessários.'],
      ['coordenacao-entre-abas', 'Trata alterações simultâneas em várias abas para evitar perda de arquivos ou conflitos silenciosos no espaço de trabalho.'],
      ['quota-exportacao', 'Define limites de uso do laboratório, exportação e ações que exigem aprovação administrativa.'],
      ['fronteira-api-worker', 'Separa a resposta da API do processamento em segundo plano e define quando uma tarefa pode ser considerada concluída de forma durável.'],
      ['beta-rascunho', 'Define as condições de entrada no beta, a preservação de rascunhos e a confirmação de identidade para ações sensíveis.'],
      ['fila-quota', 'Coordena fila e limites de uso no PostgreSQL para admitir trabalho sem ultrapassar o orçamento permitido.'],
      ['avaliacao-de-ia', 'Define dados de avaliação, incerteza e acompanhamento de mudanças na qualidade da IA, incluindo comparação por grupos e provedores.'],
      ['latencia|coordinated-omission', 'Define como medir o tempo de resposta incluindo esperas sob carga, evitando resultados artificialmente otimistas.'],
      ['migrations|plano-fisico', 'Organiza as alterações do banco em uma ordem aplicável, com dependências, isolamento e recuperação definidos.'],
      ['pacelc|selecao-de-bancos', 'Compara as necessidades dos dados e justifica a escolha do banco e os gatilhos para considerar alternativas.'],
      ['confirmacao-da-stack|migracao-do-backend', 'Registra as tecnologias escolhidas e resolve diferenças com propostas anteriores; a escolha documental não significa implementação.'],
      ['contratos|read-models', 'Define quais dados cada parte do sistema envia ou consulta, como são identificados e quem pode acessá-los.'],
      ['sessao|identidade|autenticacao|cookies|csrf', 'Define regras de acesso e proteção da sessão, incluindo as fronteiras entre navegador, usuário e serviços.'],
      ['criptografico|segredos', 'Organiza chaves e segredos, suas responsabilidades e cuidados de armazenamento, troca e recuperação.'],
      ['entrada-hostil|upload-hostil|leitura-hostil|arquivos-recebidos', 'Limita o processamento de arquivos não confiáveis para evitar vazamentos, execução indevida ou consumo excessivo de recursos.'],
      ['durabilidade|defesas-no-postgresql|isolamento-travas', 'Define proteções do banco para preservar integridade, isolamento e comportamento previsível diante de falhas ou concorrência.'],
      ['backup|recuperacao|operacao-do-piloto', 'Define como operar, detectar falhas e recuperar o serviço e os dados com procedimentos verificáveis.'],
      ['consentimento', 'Separa autorizações por finalidade e define como registrar, verificar e revogar o uso permitido dos dados.'],
      ['licenca|procedencia', 'Define como identificar a origem dos dados e verificar as condições que permitem utilizá-los.'],
      ['sem-nota|sem-uso-em-credito', 'Delimita o produto para que os relatórios não classifiquem produtores nem sejam usados em decisões de crédito.'],
      ['parecer-juridico', 'Separa o registro operacional de obrigações da interpretação jurídica dos contratos.'],
      ['obrigacao-recorrente', 'Define como gerar obrigações repetidas respeitando vigência, calendário e fuso, sem alterar silenciosamente o histórico.'],
      ['evidencia-imutavel|prova-de-longo-prazo', 'Define como preservar e verificar a integridade das provas ao longo do tempo, inclusive fora da aplicação.'],
      ['fronteira-de-intermediacao', 'Delimita o papel da plataforma na compra e venda, separando intermediação de custódia e outros serviços de parceiros.'],
      ['comprador-ancora', 'Define um catálogo fechado ligado a um comprador central e aos fornecedores autorizados a atendê-lo.'],
      ['split-via-psp', 'Delega a divisão dos pagamentos ao provedor, mantendo a plataforma sem custódia de dinheiro.'],
      ['estados-do-pedido', 'Define os estados e as transições permitidas de um pedido para tratar respostas, entregas e divergências.'],
      ['credito-por-parceiro', 'Separa os registros comerciais usados como evidência da concessão de crédito, que pertence ao parceiro.'],
      ['gate|evidencia|rastreabilidade', 'Relaciona decisões e verificações às evidências necessárias para demonstrar que os requisitos foram atendidos.'],
      ['frontend|painel-htmx|rede-movel', 'Define como a interface apresenta estados, falhas e atualizações, preservando legibilidade e continuidade da tarefa.'],
      ['fronteira-de-coordenacao', 'Delimita a coordenação de ações da empresa sem substituir autoridades ou emitir instruções de emergência.'],
      ['fontes-oficiais', 'Define fontes autorizadas e como apresentar ausência, atraso ou indisponibilidade de informações.'],
      ['geoespaciais', 'Define representação e consulta de localizações para relacionar áreas de avisos e instalações.'],
      ['notificacao-com-confirmacao', 'Distingue envio, entrega e ciência da mensagem, sem confundir leitura com execução de uma ação.'],
      ['ciclo-de-alerta', 'Trata atualizações e repetição de avisos para manter o histórico sem produzir notificações desnecessárias.'],
      ['consolidacao|bootstrap', 'Consolida escolhas já documentadas e orienta o início da implementação sem reabrir decisões resolvidas.'],
    ];
    const match = rules.find(([pattern]) => new RegExp(pattern).test(path));
    return [3, match ? match[1] : `Registra as regras, justificativas e consequências de “${subject}”. Use este documento para entender a escolha técnica antes de implementar ou alterar esse comportamento.`];
  }
  if (path.startsWith('.notebook/')) return [0, 'Índice de notas de trabalho e referências do projeto, para localizar o contexto que acompanha a documentação principal.'];
  if (path.startsWith('design/') && path.endsWith('.html')) return [5, 'Referência visual navegável que acompanha a proposta de design e serve de base à apresentação da interface.'];
  const special = [
    ['product-requirements-and-architecture', 1, 'Apresenta os domínios de prática, requisitos do produto e arquitetura inicial do laboratório de exercícios. Consulte também as decisões posteriores.'],
    ['obligation-and-recurrence-model', 4, 'Detalha como obrigações geram ocorrências, com vigência, recorrência, dias úteis, fusos e recalculações rastreáveis.'],
    ['consent-and-explainability', 4, 'Define como vincular cada uso de dados ao consentimento e explicar a origem e o cálculo dos resultados.'],
    ['offline-sync-and-conflict', 4, 'Define o protocolo de sincronização offline, confirmação dos registros, detecção de conflitos e resolução sem apagar o histórico.'],
    ['alert-ingestion-and-geospatial', 4, 'Define como receber e atualizar alertas e associá-los a locais, preservando origem e limitações geográficas.'],
  ];
  for (const [pattern, group, summary] of special) if (path.includes(pattern)) return [group, summary];
  return null;
}
