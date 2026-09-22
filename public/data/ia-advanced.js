/*
 * ACADEMIA DE IA — fonte única do aprofundamento sênior/expert.
 *
 * Conteúdo original e sintético, construído a partir dos livros locais e das
 * fontes primárias registradas abaixo. Não contém transcrições extensas.
 */

export const IA_RESEARCH_DATE = '2026-07-27';

export const iaBooks = Object.freeze({
  'ai-engineering': {
    title: 'AI Engineering: Building Applications with Foundation Models',
    authors: 'Chip Huyen',
    edition: '1ª edição',
    year: '2025',
    language: 'Inglês',
    pages: 980,
    path: '/pdfs/livros-ia/ai-engineering.pdf',
    depth: 'Intermediário → expert',
    prerequisites: 'Python, APIs, ML básico e arquitetura de software',
    structure: '10 capítulos: foundation models, avaliação, prompting, RAG/agentes, fine-tuning, dados, inferência e arquitetura',
    limitations: 'Foco em aplicações com foundation models; não substitui a base matemática ou ML clássico.'
  },
  'ml-powered-apps': {
    title: 'Building Machine Learning Powered Applications',
    authors: 'Emmanuel Ameisen',
    edition: '1ª edição',
    year: '2020',
    language: 'Inglês',
    pages: 260,
    path: '/pdfs/livros-ia/building-machine-learning-powered-applications.pdf',
    depth: 'Intermediário → sênior',
    prerequisites: 'Python e noções de ML',
    structure: '11 capítulos em quatro partes: framing, pipeline, iteração, deploy e monitoramento',
    limitations: 'Exemplos precedem o ecossistema moderno de LLMs; princípios de produto e diagnóstico permanecem válidos.'
  },
  'deep-learning': {
    title: 'Deep Learning',
    authors: 'Ian Goodfellow, Yoshua Bengio e Aaron Courville',
    edition: '1ª edição',
    year: '2016',
    language: 'Inglês',
    pages: 800,
    path: '/pdfs/livros-ia/deep-learning-book.pdf',
    depth: 'Fundamental → expert',
    prerequisites: 'Álgebra linear, cálculo, probabilidade e programação',
    structure: '20 capítulos: matemática, ML, redes profundas e tópicos de pesquisa',
    limitations: 'Referência conceitual anterior a transformers e ao stack atual de foundation models.'
  },
  'designing-ml-systems': {
    title: 'Designing Machine Learning Systems',
    authors: 'Chip Huyen',
    edition: '1ª edição',
    year: '2022',
    language: 'Inglês',
    pages: 499,
    path: '/pdfs/livros-ia/designing-machine-learning-systems.pdf',
    depth: 'Sênior',
    prerequisites: 'ML aplicado, dados e sistemas distribuídos',
    structure: '11 capítulos: framing, dados, features, avaliação, deploy, drift, continual learning, infraestrutura e responsabilidade',
    limitations: 'Não aprofunda matemática nem arquiteturas de modelos; complementa a formação de sistemas.'
  },
  'hands-on-ml': {
    title: 'Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow',
    authors: 'Aurélien Géron',
    edition: '3ª edição',
    year: '2023',
    language: 'Inglês',
    pages: 1196,
    path: '/pdfs/livros-ia/hands-on-machine-learning.pdf',
    depth: 'Fundamental → avançado',
    prerequisites: 'Python e matemática de ensino superior inicial',
    structure: '19 capítulos: ML clássico, deep learning, visão, NLP, generativos, RL e deploy',
    limitations: 'O código usa versões do período editorial; APIs devem ser conferidas na documentação atual.'
  },
  'ml-design-patterns': {
    title: 'Machine Learning Design Patterns',
    authors: 'Valliappa Lakshmanan, Sara Robinson e Michael Munn',
    edition: '1ª edição',
    year: '2021',
    language: 'Inglês',
    pages: 408,
    path: '/pdfs/livros-ia/machine-learning-design-patterns.pdf',
    depth: 'Intermediário → sênior',
    prerequisites: 'ML aplicado e engenharia de dados',
    structure: '8 capítulos: representação, framing, treino, serving, reprodutibilidade e IA responsável',
    limitations: 'Padrões exigem adaptação ao contexto; exemplos de produtos cloud não são padrões universais.'
  },
  'nlp-transformers': {
    title: 'Natural Language Processing with Transformers',
    authors: 'Lewis Tunstall, Leandro von Werra e Thomas Wolf',
    edition: '1ª edição',
    year: '2022',
    language: 'Inglês',
    pages: 479,
    path: '/pdfs/livros-ia/natural-language-processing-with-transformers.pdf',
    depth: 'Intermediário → avançado',
    prerequisites: 'Python, deep learning e NLP básico',
    structure: '11 capítulos: classificação, anatomia, NER, geração, sumarização, QA, eficiência e treino',
    limitations: 'A API da biblioteca evoluiu; exemplos conceituais devem ser adaptados à documentação Transformers 5.x.'
  },
  prml: {
    title: 'Pattern Recognition and Machine Learning',
    authors: 'Christopher M. Bishop',
    edition: '1ª edição',
    year: '2006',
    language: 'Inglês',
    pages: 758,
    path: '/pdfs/livros-ia/pattern-recognition-and-machine-learning.pdf',
    depth: 'Avançado → expert',
    prerequisites: 'Álgebra linear, cálculo e probabilidade',
    structure: '14 capítulos: probabilidade, regressão, classificação, kernels, modelos gráficos e inferência',
    limitations: 'Referência matemática anterior ao deep learning moderno; excelente para fundamentos probabilísticos.'
  },
  esl: {
    title: 'The Elements of Statistical Learning',
    authors: 'Trevor Hastie, Robert Tibshirani e Jerome Friedman',
    edition: '2ª edição',
    year: '2009',
    language: 'Inglês',
    pages: 764,
    path: '/pdfs/livros-ia/the-elements-of-statistical-learning.pdf',
    depth: 'Avançado → expert',
    prerequisites: 'Estatística, álgebra linear e cálculo',
    structure: '18 capítulos: métodos supervisionados, regularização, seleção, ensembles e não supervisionado',
    limitations: 'Ênfase estatística e poucas implementações modernas; requer apoio prático em Python.'
  }
});

export const iaSources = Object.freeze({
  pytorch: { title: 'PyTorch 2.13 documentation', author: 'PyTorch Foundation', type: 'Documentação oficial', year: '2026', url: 'https://docs.pytorch.org/docs/stable/', level: 'Intermediário', reason: 'API estável de tensores, autograd, AMP, compilação e distribuição' },
  sklearn: { title: 'scikit-learn 1.9 documentation', author: 'scikit-learn developers', type: 'Documentação oficial', year: '2026', url: 'https://scikit-learn.org/stable/', level: 'Fundamental', reason: 'Pipelines, algoritmos e avaliação de ML clássico' },
  transformers: { title: 'Transformers 5.12 documentation', author: 'Hugging Face', type: 'Documentação oficial', year: '2026', url: 'https://huggingface.co/docs/transformers/v5.12.0/en/index', level: 'Intermediário', reason: 'NLP, transformers, treino e inferência atuais' },
  mlflow: { title: 'MLflow 3.14 documentation', author: 'MLflow', type: 'Documentação oficial', year: '2026', url: 'https://mlflow.org/docs/latest/', level: 'Sênior', reason: 'Tracking, registry, avaliação, tracing e ciclo de vida' },
  jax: { title: 'JAX changelog and compatibility', author: 'JAX team', type: 'Documentação oficial', year: '2026', url: 'https://docs.jax.dev/en/latest/changelog.html', level: 'Avançado', reason: 'Transformações funcionais e APIs ainda em rápida evolução' },
  numpy: { title: 'NumPy documentation', author: 'NumPy community', type: 'Documentação oficial', year: '2026', url: 'https://numpy.org/doc/stable/', level: 'Fundamental', reason: 'Computação vetorizada, broadcasting e álgebra linear' },
  pandas: { title: 'pandas documentation', author: 'pandas community', type: 'Documentação oficial', year: '2026', url: 'https://pandas.pydata.org/docs/', level: 'Fundamental', reason: 'Manipulação tabular e tipos de dados' },
  scipy: { title: 'SciPy documentation', author: 'SciPy community', type: 'Documentação oficial', year: '2026', url: 'https://docs.scipy.org/doc/scipy/', level: 'Intermediário', reason: 'Otimização, estatística e computação científica' },
  polars: { title: 'Polars documentation', author: 'Polars', type: 'Documentação oficial', year: '2026', url: 'https://docs.pola.rs/', level: 'Intermediário', reason: 'Processamento colunar lazy e eficiente em memória' },
  tensorflow: { title: 'TensorFlow Core Guide', author: 'Google', type: 'Documentação oficial', year: '2026', url: 'https://www.tensorflow.org/guide', level: 'Complementar', reason: 'Alternativa de deep learning e ecossistema de produção' },
  attention: { title: 'Attention Is All You Need', author: 'Vaswani et al.', type: 'Paper', year: '2017', url: 'https://arxiv.org/abs/1706.03762', level: 'Avançado', reason: 'Arquitetura Transformer original' },
  rag: { title: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks', author: 'Lewis et al.', type: 'Paper', year: '2020', url: 'https://arxiv.org/abs/2005.11401', level: 'Avançado', reason: 'Formulação original de memória paramétrica e não paramétrica' },
  lora: { title: 'LoRA: Low-Rank Adaptation of Large Language Models', author: 'Hu et al.', type: 'Paper', year: '2021', url: 'https://arxiv.org/abs/2106.09685', level: 'Avançado', reason: 'Adaptação eficiente por matrizes de baixo posto' },
  qlora: { title: 'QLoRA: Efficient Finetuning of Quantized LLMs', author: 'Dettmers et al.', type: 'Paper', year: '2023', url: 'https://arxiv.org/abs/2305.14314', level: 'Avançado', reason: 'Fine-tuning eficiente sobre base quantizada' },
  dpo: { title: 'Direct Preference Optimization', author: 'Rafailov et al.', type: 'Paper', year: '2023', url: 'https://arxiv.org/abs/2305.18290', level: 'Pesquisa', reason: 'Otimização direta de preferências e limites frente a RLHF' },
  ddpm: { title: 'Denoising Diffusion Probabilistic Models', author: 'Ho, Jain e Abbeel', type: 'Paper', year: '2020', url: 'https://arxiv.org/abs/2006.11239', level: 'Pesquisa', reason: 'Base probabilística de modelos de difusão' },
  switch: { title: 'Switch Transformers', author: 'Fedus, Zoph e Shazeer', type: 'Paper JMLR', year: '2022', url: 'https://www.jmlr.org/papers/v23/21-0998.html', level: 'Pesquisa', reason: 'Mixture of Experts esparso e custos de roteamento' },
  hnsw: { title: 'Efficient and Robust Approximate Nearest Neighbor Search Using HNSW', author: 'Malkov e Yashunin', type: 'Paper', year: '2016', url: 'https://arxiv.org/abs/1603.09320', level: 'Avançado', reason: 'Índice em grafo para vizinhos aproximados' },
  faiss: { title: 'Billion-scale similarity search with GPUs', author: 'Johnson, Douze e Jégou', type: 'Paper', year: '2017', url: 'https://arxiv.org/abs/1702.08734', level: 'Avançado', reason: 'Busca vetorial, quantização e aceleração' },
  resnet: { title: 'Deep Residual Learning for Image Recognition', author: 'He et al.', type: 'Paper CVPR', year: '2016', url: 'https://arxiv.org/abs/1512.03385', level: 'Avançado', reason: 'Conexões residuais para redes profundas' },
  vit: { title: 'An Image is Worth 16x16 Words', author: 'Dosovitskiy et al.', type: 'Paper', year: '2020', url: 'https://arxiv.org/abs/2010.11929', level: 'Avançado', reason: 'Transformers aplicados à visão' },
  datasheets: { title: 'Datasheets for Datasets', author: 'Gebru et al.', type: 'Paper', year: '2018', url: 'https://arxiv.org/abs/1803.09010', level: 'Sênior', reason: 'Documentação e accountability de datasets' },
  modelcards: { title: 'Model Cards for Model Reporting', author: 'Mitchell et al.', type: 'Paper', year: '2018', url: 'https://arxiv.org/abs/1810.03993', level: 'Sênior', reason: 'Documentação de desempenho, uso e limitações' },
  nist: { title: 'AI Risk Management Framework 1.0 e GenAI Profile', author: 'NIST', type: 'Padrão público', year: '2023–2024', url: 'https://www.nist.gov/itl/ai-risk-management-framework', level: 'Sênior', reason: 'Governar, mapear, medir e gerenciar riscos' },
  owasp: { title: 'OWASP Top 10 for LLM Applications 2025', author: 'OWASP GenAI Security Project', type: 'Guia de segurança', year: '2025', url: 'https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/', level: 'Sênior', reason: 'Taxonomia defensiva de riscos de aplicações LLM' },
  euai: { title: 'EU AI Act — implementation and timeline', author: 'Comissão Europeia', type: 'Fonte regulatória oficial', year: '2026', url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai', level: 'Liderança', reason: 'Distinguir obrigações, prazos e classificação de risco' },
  cs224n: { title: 'CS224N: Natural Language Processing with Deep Learning', author: 'Stanford University', type: 'Curso acadêmico', year: '2026', url: 'https://web.stanford.edu/class/cs224n/', level: 'Intermediário → avançado', reason: 'Fundamentos, tarefas, transformers e avaliação em NLP' },
  kserve: { title: 'KServe 0.18 documentation', author: 'KServe/CNCF', type: 'Documentação oficial', year: '2026', url: 'https://kserve.github.io/website/docs/intro', level: 'Sênior', reason: 'Serving declarativo, rollout, autoscaling e inferência GenAI' },
  ray: { title: 'Ray Serve LLM documentation', author: 'Anyscale/Ray', type: 'Documentação oficial', year: '2026', url: 'https://docs.ray.io/en/latest/serve/llm/index.html', level: 'Sênior', reason: 'Serving distribuído, paralelismo e desagregação prefill/decode' },
  sagemaker: { title: 'Amazon SageMaker AI — MLOps', author: 'AWS', type: 'Documentação oficial', year: '2026', url: 'https://docs.aws.amazon.com/sagemaker/latest/dg/mlops.html', level: 'Sênior', reason: 'Referência gerenciada de pipelines, registry, monitoramento e rollout' },
  azureml: { title: 'Azure Machine Learning documentation', author: 'Microsoft', type: 'Documentação oficial', year: '2026', url: 'https://learn.microsoft.com/en-us/azure/machine-learning/', level: 'Sênior', reason: 'Alternativa gerenciada para ciclo de vida de ML' },
  vertex: { title: 'Vertex AI documentation', author: 'Google Cloud', type: 'Documentação oficial', year: '2026', url: 'https://cloud.google.com/vertex-ai/docs', level: 'Sênior', reason: 'Alternativa gerenciada para treino, registry, endpoints e GenAI' },
  flashattention: { title: 'FlashAttention-4: Kernel Pipelining Co-Design for Asymmetric Hardware', author: 'Dao et al.', type: 'Paper', year: '2026', url: 'https://arxiv.org/abs/2603.05451', level: 'Pesquisa', reason: 'Atenção IO-aware; softmax online e tiling para Blackwell' },
  grpo: { title: 'DeepSeekMath: GRPO (Group Relative Policy Optimization)', author: 'Shao et al.', type: 'Paper', year: '2024', url: 'https://arxiv.org/abs/2402.03300', level: 'Pesquisa', reason: 'RL crítico-free com vantagem relativa ao grupo' },
  deepseekr1: { title: 'DeepSeek-R1: Incentivizing Reasoning via RL', author: 'DeepSeek-AI', type: 'Paper', year: '2025', url: 'https://arxiv.org/abs/2501.12948', level: 'Pesquisa', reason: 'RLVR em escala; recompensa verificável e raciocínio' },
  mcp: { title: 'Model Context Protocol — specification', author: 'Anthropic / Agentic AI Foundation (Linux Foundation)', type: 'Padrão aberto', year: '2025', url: 'https://modelcontextprotocol.io/', level: 'Sênior', reason: 'Padrão de interoperabilidade de ferramentas e agentes' },
  circuits: { title: 'Circuit Tracing: Revealing Computational Graphs in Language Models', author: 'Anthropic — Transformer Circuits', type: 'Publicação de pesquisa', year: '2025', url: 'https://transformer-circuits.pub/2025/attribution-graphs/methods.html', level: 'Pesquisa', reason: 'SAEs, attribution graphs e interpretabilidade mecanicista' },
  chinchilla: { title: 'Training Compute-Optimal Large Language Models (Chinchilla)', author: 'Hoffmann et al.', type: 'Paper', year: '2022', url: 'https://arxiv.org/abs/2203.15556', level: 'Pesquisa', reason: 'Leis de escala: equilíbrio ótimo entre parâmetros e tokens' },
  triton: { title: 'Triton — GPU programming language and compiler', author: 'OpenAI / Triton project', type: 'Documentação oficial', year: '2026', url: 'https://triton-lang.org/main/index.html', level: 'Avançado', reason: 'Escrever kernels de GPU em Python sem CUDA C++' },
  nanogpt: { title: 'nanoGPT', author: 'Andrej Karpathy', type: 'Código de referência', year: '2023', url: 'https://github.com/karpathy/nanoGPT', level: 'Avançado', reason: 'Transformer e loop de pré-treino mínimos e legíveis' }
});

export const iaTechnologyBaseline = [
  { technology: 'Python', baseline: '3.12+', status: 'Base conservadora', note: 'Compatibilidade ampla; validar suporte antes de adotar versão mais nova.' },
  { technology: 'PyTorch', baseline: '2.13', status: 'Estável', note: 'Documentação oficial estável consultada em 27/07/2026.' },
  { technology: 'scikit-learn', baseline: '1.9', status: 'Estável', note: 'Release 1.9.0 de junho de 2026.' },
  { technology: 'Transformers', baseline: '5.12', status: 'Estável', note: 'APIs mudam; pin de dependência e teste de migração são obrigatórios.' },
  { technology: 'MLflow', baseline: '3.14', status: 'Estável', note: 'Inclui fluxos de ML, LLMs e agentes.' },
  { technology: 'JAX', baseline: '0.11', status: 'Evolução rápida', note: 'Zero-major: conferir compatibilidade e changelog por projeto.' },
  { technology: 'KServe', baseline: '0.18', status: 'Estável com APIs GenAI em evolução', note: 'LLMInferenceService possui superfície própria e deve ser validado.' },
  { technology: 'Ray Serve', baseline: '2.56', status: 'Estável', note: 'Recursos avançados de LLM dependem de hardware e backend.' },
  { technology: 'FlashAttention', baseline: 'FA-4 (mar/2026)', status: 'Fronteira de kernels', note: 'Redesenho para Blackwell: 1,3× sobre cuDNN, 2,7× sobre Triton. Requer Hopper/Blackwell; hardware antigo usa FA-2/3. Módulo 33.' },
  { technology: 'RL pós-treino', baseline: 'GRPO / RLVR (DeepSeek-R1, 2025)', status: 'Padrão de raciocínio', note: 'Crítico-free com vantagem de grupo e recompensa verificável. Variantes GSPO/DAPO em 2025. Módulo 34.' },
  { technology: 'Model Context Protocol', baseline: 'spec 2025-11-25', status: 'Padrão de interoperabilidade', note: 'Anthropic (nov/2024); adotado por OpenAI, Google e Microsoft; doado à Agentic AI Foundation (Linux Foundation, dez/2025). Módulo 36.' },
  { technology: 'Interpretabilidade mecanicista', baseline: 'SAEs + circuit tracing (2025)', status: 'Pesquisa ativa', note: 'Attribution graphs e crosscoders/CLTs desempacotam superposição. transformer-circuits.pub. Módulo 35.' },
  { technology: 'Leis de escala', baseline: 'Chinchilla (2022) como base', status: 'Referência de pré-treino', note: 'Equilíbrio parâmetros×tokens; ponto de partida para orçamento de treino. Módulo 32.' }
];

export const iaAcademy = Object.freeze({
  title: 'Academia de Inteligência Artificial',
  baseline: '41 módulos (com o Módulo 0) · 123 exercícios · 12 quiz · 205 perguntas · 41 casos · 7 projetos',
  parts: {
    base: {
      index: '0/7', title: 'Módulo 0 — da Faixa 0 à IA', range: 'Módulos 0.1–0.4',
      subtitle: 'Ponte dos fundamentos: o que é aprender com dados, dados como números, modelo/erro/treino e generalização.',
      prerequisites: ['Concluir a Trilha 0 (Fundamentos) ou equivalente.', 'Ler e escrever uma função simples em Python.', 'Nenhuma matemática além de média e porcentagem.'],
      objectives: ['Distinguir programar regras de aprender de exemplos e situar IA, ML, deep learning e generativa.', 'Representar dados como tabela numérica e separar treino/teste sem vazamento.', 'Entender modelo, erro e treino como minimização do erro médio.', 'Reconhecer overfitting e escolher a métrica honesta.']
    },
    fundamentos: {
      index: '1/7', title: 'Fundamentos matemáticos e Python', range: 'Módulos 1–5',
      subtitle: 'Conceitos, Python científico, álgebra linear, otimização, probabilidade e estatística.',
      prerequisites: ['Programação backend e Git em nível funcional.', 'Nenhum domínio prévio de cálculo, álgebra linear, estatística ou Python científico.', 'Disposição para derivar, implementar, medir e documentar.'],
      objectives: ['Formalizar o vocabulário de IA sem confundir produto, modelo e automação.', 'Implementar operações matemáticas e otimização com NumPy.', 'Interpretar probabilidade e inferência sem abusar de p-values.', 'Construir a base necessária para ML e deep learning.']
    },
    'dados-ml': {
      index: '2/7', title: 'Dados, aprendizado e avaliação', range: 'Módulos 6–9',
      subtitle: 'Qualidade de dados, ML supervisionado e não supervisionado, métricas e validação.',
      prerequisites: ['Concluir os módulos 1–5 ou demonstrar equivalência.', 'Manipular arrays e tabelas em Python.', 'Entender gradiente, probabilidade condicional, viés e variância.'],
      objectives: ['Projetar splits e pipelines sem leakage.', 'Escolher algoritmos por hipótese e custo, não por moda.', 'Avaliar modelos com métricas ligadas ao risco do produto.', 'Produzir análise de erros, slices e incerteza.']
    },
    'deep-learning': {
      index: '3/7', title: 'Deep learning, visão, NLP e transformers', range: 'Módulos 10–13',
      subtitle: 'Redes profundas por dentro, visão computacional, evolução do NLP e atenção.',
      prerequisites: ['Dominar álgebra linear, cálculo e avaliação.', 'Construir baselines de ML clássico.', 'Saber depurar Python e interpretar uso de memória.'],
      objectives: ['Implementar forward/backprop e um loop PyTorch reproduzível.', 'Selecionar arquiteturas de visão e NLP por tarefa.', 'Derivar self-attention e explicar Q, K, V, máscaras e complexidade.', 'Medir qualidade, latência e vieses de modelos profundos.']
    },
    generativa: {
      index: '4/7', title: 'LLMs, RAG, agentes e modelos generativos', range: 'Módulos 14–21',
      subtitle: 'Foundation models, prompting, recuperação, agentes, adaptação, difusão e RL.',
      prerequisites: ['Concluir transformers e avaliação de modelos.', 'Conhecer APIs, bancos de dados e segurança de aplicações.', 'Saber construir experimento com baseline e conjunto de teste.'],
      objectives: ['Explicar treino, decoding, KV cache, quantização e MoE.', 'Projetar RAG autorizado, observável e avaliável.', 'Distinguir workflow determinístico de agente e limitar autonomia.', 'Decidir entre prompt, RAG, fine-tuning e treino do zero.']
    },
    engenharia: {
      index: '5/7', title: 'Produção, cloud, segurança e governança', range: 'Módulos 22–26',
      subtitle: 'MLOps, arquitetura de sistemas, cloud, segurança defensiva e IA responsável.',
      prerequisites: ['Ter ao menos um modelo e uma aplicação generativa avaliados.', 'Conhecer Docker, CI/CD, observabilidade e sistemas distribuídos.', 'Conseguir expressar SLO, risco, custo e rollback.'],
      objectives: ['Operar o ciclo de vida com lineage, registry, rollout e drift.', 'Desenhar serving síncrono, assíncrono, batch e streaming.', 'Modelar ameaças e aplicar mínimo privilégio.', 'Converter princípios de governança em controles auditáveis.']
    },
    fronteira: {
      index: '6/7', title: 'Fronteira: construir do zero e a fronteira de pesquisa', range: 'Módulos 27–33',
      subtitle: 'Atenção e transformer do zero, pré-treino, kernels e FlashAttention, RL moderno, interpretabilidade mecanicista, MCP e reprodução de paper.',
      prerequisites: [
        'Dominar transformers, treino, avaliação e produção (partes 1–5).',
        'Ler e escrever numpy sem apoio, e derivar gradientes à mão.',
        'Aceitar que aqui a resposta vem do mecanismo: do tensor, do kernel, da prova.'
      ],
      objectives: [
        'Implementar atenção, máscara causal e multi-head do zero, com asserts.',
        'Pré-treinar do tokenizador ao loop, guiado por leis de escala.',
        'Explicar FlashAttention como I/O, não como FLOPs, e provar a equivalência.',
        'Implementar a vantagem de grupo do GRPO e o porquê da recompensa verificável.',
        'Desempacotar superposição com um autoencoder esparso e ler um circuito.',
        'Expor ferramentas por MCP com governança, não só com código.',
        'Reproduzir um paper com baseline, ablação e limite declarado.'
      ]
    },
    pratica: {
      index: '7/7', title: 'Pesquisa, performance, avaliação e liderança', range: 'Módulos 34–37 + avaliação',
      subtitle: 'Leitura científica, otimização medida, avaliação generativa e decisões técnicas.',
      prerequisites: ['Concluir um projeto ponta a ponta das partes anteriores.', 'Manter experimentos, decisões e riscos rastreáveis.', 'Aceitar revisão baseada em evidência e reprodutibilidade.'],
      objectives: ['Ler e reproduzir papers com postura crítica.', 'Otimizar somente após profiling e estabelecer Pareto custo×qualidade.', 'Construir avaliação generativa específica do produto.', 'Liderar viability, build×buy, arquitetura e comunicação de incerteza.']
    }
  }
});

const interviewLevels = ['Iniciante', 'Intermediário', 'Sênior', 'Expert', 'Liderança técnica'];

function createInterviews(module) {
  const prompts = [
    `Explique ${module.title.toLowerCase()} sem recorrer ao nome de uma ferramenta.`,
    `Como você demonstraria na prática: ${module.practice.intermediate.toLowerCase()}`,
    `Que trade-offs governam a decisão: ${module.decision}`,
    `Como você provaria ou refutaria a hipótese: ${module.hypothesis}`,
    `Como decidir investimento, risco e padrão técnico para ${module.title.toLowerCase()}?`
  ];
  return interviewLevels.map((level, index) => ({
    level,
    question: prompts[index],
    expected: index < 2 ? module.objective : `${module.decision} A resposta deve conectar mecanismo, evidência, custo e modo de falha.`,
    essentials: module.topics.slice(0, 5),
    traps: module.errors.slice(0, 3),
    deepening: `${module.mathematics} ${module.complexity}`,
    superficialSignal: 'Lista ferramentas ou definições, mas não explicita hipótese, métrica, baseline, custo nem falha.',
    seniorSignal: `${module.correctedApproach} Explicita trade-offs, instrumentação e rollback.`,
    expertSignal: `${module.hypothesis} Propõe experimento reprodutível, análise de sensibilidade e limites de validade.`
  }));
}

function createCaseStudy(module) {
  return {
    title: module.case.title,
    context: module.case.context,
    problem: module.problem,
    symptoms: module.case.symptoms,
    hypotheses: [module.hypothesis, module.errors[0], `Mudança de distribuição ou contrato não observada.`],
    investigation: [
      `Reconstruir lineage e separar o problema por slices.`,
      `Reproduzir um baseline com seed, versões e dados congelados.`,
      `Medir ${module.case.metrics.join(', ')} antes de alterar arquitetura.`,
      `Testar uma hipótese por vez e registrar efeitos colaterais.`
    ],
    metrics: module.case.metrics,
    tools: module.case.tools,
    rootCause: module.case.rootCause,
    correction: module.case.correction,
    prevention: `Adicionar testes de contrato, monitoramento por slice, gate de regressão e runbook de rollback.`,
    tradeoffs: module.tradeoffs,
    discussion: [
      `Qual é a menor intervenção que distingue as hipóteses?`,
      `Que evidência justificaria não usar ${module.title.toLowerCase()}?`,
      `Como custo, latência, privacidade e explicabilidade mudam a decisão?`
    ]
  };
}

function createModule(module) {
  return {
    ...module,
    interviews: createInterviews(module),
    exercises: [
      { level: 'Básico', task: module.practice.basic, evidence: 'Cálculo ou explicação testável, com hipótese e resultado esperado.' },
      { level: 'Intermediário', task: module.practice.intermediate, evidence: 'Código executável, seed quando relevante, teste e métrica.' },
      { level: 'Avançado', task: module.practice.advanced, evidence: 'Diagnóstico comparativo, análise de erros e decisão documentada.' }
    ],
    seniorChallenge: module.practice.senior,
    expertChallenge: module.practice.expert,
    caseStudy: createCaseStudy(module),
    wrongApproach: module.wrongApproach || `Tratar ${module.title.toLowerCase()} como lista de fórmulas ou ferramentas, sem baseline, hipótese nem métrica de produto.`,
    correctedApproach: module.correctedApproach,
    externalRefs: module.sources.map((id) => iaSources[id]),
    bookRefs: module.books.map(([id, chapters]) => ({ book: iaBooks[id], chapters })),
    summary: module.summary || `O módulo ${module.title} só está dominado quando o aluno explica o mecanismo, implementa um baseline, mede o resultado, diagnostica falhas e justifica a decisão sob restrições de produção.`
  };
}

const moduleCatalog = [
  {
    number: '0.1', part: 'base', id: 'base-aprender-com-dados', level: 'Ponte (Faixa 0)',
    title: 'O que é "aprender com dados" (IA, ML, deep learning e generativa)',
    objective: 'Diferenciar programar regras de aprender padrões a partir de exemplos, e situar IA ⊃ ML ⊃ deep learning, discriminativo × generativo e supervisionado/não supervisionado/reforço.',
    prerequisites: ['Trilha 0 (lógica, como um programa roda, terminal)', 'Ler e escrever uma função simples', 'Nenhuma matemática além de média e porcentagem'],
    topics: ['programar regras × aprender de exemplos', 'IA, ML e deep learning', 'discriminativo × generativo', 'supervisionado, não supervisionado e reforço', 'treino × inferência', 'quando NÃO usar ML', 'tarefa, dado e rótulo', 'baseline'],
    problem: 'Quem começa acha que "IA" é uma coisa só e tenta usar um modelo grande para tudo — inclusive onde três linhas de `if` resolveriam melhor, mais barato e auditável.',
    intuition: 'Programar é você escrever a regra. Aprender de dados é mostrar exemplos (entrada → resposta certa) e deixar a máquina descobrir a regra que os explica. ML é um subconjunto da IA; deep learning é um subconjunto do ML (redes com muitas camadas); IA generativa produz conteúdo novo em vez de só classificar.',
    mathematics: 'Sem fórmula ainda: existe uma função f desconhecida que leva a entrada X ao rótulo Y, e aprender é procurar uma f que acerte os exemplos e, principalmente, os casos novos.',
    internals: ['Regra: o humano escreve a lógica; a máquina só executa.', 'Aprendizado: o humano fornece exemplos rotulados; a máquina ajusta uma função para reproduzi-los.', 'Discriminativo separa/classifica ("é spam?"); generativo cria ("escreva um e-mail").'],
    conceptExample: 'Detectar spam por regra ("se contém X, é spam") quebra a cada e-mail novo; treinar com milhares de e-mails marcados spam/não-spam deixa o modelo aprender padrões que ninguém escreveu à mão.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'Somente biblioteca padrão', gpu: 'Não',
      cost: 'O(1) — didático', limitations: 'Compara os dois estilos; ainda não treina de verdade.',
      code: `# Estilo 1 — REGRA escrita a mao (voce define a logica):
def eh_spam_regra(texto: str) -> bool:
    return 'ganhe dinheiro' in texto.lower()

# Estilo 2 — APRENDER de exemplos (a "regra" sai dos dados):
exemplos = [('ganhe dinheiro agora', 1), ('reuniao as 10h', 0),
            ('premio gratis', 1), ('almoco amanha?', 0)]
palavras_spam = {p for texto, y in exemplos if y == 1 for p in texto.split()}
def eh_spam_aprendido(texto: str) -> bool:
    return any(p in palavras_spam for p in texto.lower().split())

print(eh_spam_regra('GANHE DINHEIRO'), eh_spam_aprendido('premio hoje'))`
    },
    appliedExample: 'Antes de pedir a um LLM para "resolver o suporte", separe: o que é regra fixa (SLA, bloqueios), o que é classificação (rota do ticket) e o que é geração (rascunho de resposta).',
    correctedApproach: 'Começar pela tarefa e por um baseline sem ML (regra ou heurística). Só trocar por aprendizado quando houver dados representativos e ganho medível sobre esse baseline.',
    decision: 'usar uma regra quando a lógica é conhecida, estável e auditável; usar aprendizado quando o padrão é complexo, muda e há exemplos rotulados',
    hypothesis: 'um modelo treinado nos exemplos supera a regra manual na tarefa, medido em casos que ele não viu',
    tradeoffs: ['Regra é barata e auditável, mas cega ao que você não previu.', 'Aprendizado cobre padrões implícitos, mas depende de dados e erra de formas surpreendentes.', 'Modelo generativo resolve tarefas abertas, mas custa mais e é mais difícil de avaliar.'],
    complexity: 'Conceitual: a regra é O(1) de manutenção humana por caso previsto; o aprendizado troca esforço humano por dados e cômputo de treino.',
    productionImpact: 'Escolher ML onde uma regra bastava adiciona pipeline de dados, avaliação e monitoramento para sempre — custo permanente que não aparece na demo.',
    errors: ['Achar que IA = LLM', 'Usar modelo onde um `if` resolveria', 'Não definir a tarefa nem o baseline antes de escolher a técnica'],
    checklist: ['A tarefa e a resposta certa estão definidas?', 'Existe um baseline sem ML?', 'Há exemplos rotulados suficientes?', 'É classificação, geração ou decisão?', 'O erro tem custo conhecido?'],
    practice: {
      basic: 'Classificar 8 tarefas do dia a dia entre "regra basta" e "precisa aprender", justificando cada uma.',
      intermediate: 'Escrever uma regra e um mini-aprendiz (como no exemplo) para o mesmo problema e comparar os acertos.',
      advanced: 'Pegar um "vamos usar IA para tudo" e quebrá-lo em partes: regra, classificação e geração.',
      senior: 'Definir o critério objetivo que faria você abandonar a regra e adotar ML.',
      expert: 'Estimar o custo total (dados + treino + monitoramento) de trocar uma regra por um modelo e quando isso não compensa.'
    },
    case: {
      title: 'Um modelo grande para um problema pequeno', context: 'Um time trocou uma regra de roteamento por um LLM e o custo por ticket subiu 40× sem melhorar a rota.',
      symptoms: ['Latência e custo dispararam', 'Resultados variam entre execuções', 'Ninguém sabe explicar uma decisão'],
      metrics: ['custo por decisão', 'acurácia da rota', 'variância entre execuções'], tools: ['baseline por regra', 'planilha de custo', 'amostra rotulada'],
      rootCause: 'A tarefa era determinística e conhecida — não precisava aprender nada.', correction: 'Voltar à regra para os casos previsíveis e reservar o modelo só para o resíduo ambíguo.'
    },
    books: [['hands-on-ml', 'Cap. 1 — The Machine Learning Landscape'], ['ml-powered-apps', 'Caps. 1–2 — do produto ao framing']],
    sources: ['sklearn'],
    quiz: [
      { question: 'Qual é a diferença central entre "programar uma regra" e "aprender de dados"?', options: ['Na regra, o humano escreve a lógica; no aprendizado, a máquina infere a lógica de exemplos', 'Regra usa Python e aprendizado usa outra linguagem', 'Aprendizado é sempre mais preciso que uma regra', 'Não há diferença real entre os dois'], answer: 0, why: 'Regra = lógica escrita à mão; aprendizado = função ajustada a exemplos rotulados.' },
      { question: 'Como IA, ML e deep learning se relacionam?', options: ['deep learning ⊂ ML ⊂ IA', 'são exatamente sinônimos', 'IA ⊂ ML ⊂ deep learning', 'não têm nenhuma relação entre si'], answer: 0, why: 'Deep learning é um tipo de ML, que por sua vez é um subcampo da IA.' },
      { question: 'Quando uma regra (`if`) tende a ser preferível a um modelo aprendido?', options: ['Quando a lógica é conhecida, estável e precisa ser auditável', 'Nunca — modelos são sempre melhores', 'Só quando não há Python disponível', 'Sempre que você tiver muitos dados rotulados'], answer: 0, why: 'Regra é barata e auditável para lógica conhecida; ML se justifica quando o padrão é complexo/mutável e há dados.' }
    ]
  },
  {
    number: '0.2', part: 'base', id: 'base-dados-viram-numeros', level: 'Ponte (Faixa 0)',
    title: 'Dados viram números: features, rótulo e a tabela de treino',
    objective: 'Representar dados como tabela (linha = exemplo, coluna = feature, uma coluna = rótulo), transformar categoria/texto em número e separar treino/validação/teste sem vazamento.',
    prerequisites: ['Módulo 0.1', 'Listas e dicionários em Python', 'Ideia de média e porcentagem'],
    topics: ['exemplo, feature e rótulo', 'tabela linha × coluna', 'tudo vira número (vetor)', 'codificação de categorias (one-hot)', 'normalização (intuição)', 'treino/validação/teste', 'vazamento de dados', 'representação'],
    problem: 'Modelos não entendem "texto" nem "categoria" — só números. Sem representar e separar os dados direito, o modelo parece ótimo no treino e desaba no mundo real.',
    intuition: 'Pense numa planilha: cada linha é um exemplo, cada coluna é uma característica (feature) e uma coluna especial é a resposta certa (rótulo). Transformar tudo em número (vetor) é o que permite calcular. Separar uma parte dos dados para teste é como guardar provas que o modelo nunca viu.',
    mathematics: 'Cada exemplo é um vetor x = (x₁, …, x_d) com um rótulo y. O treino é uma matriz X de n exemplos × d features, com um vetor y de rótulos.',
    internals: ['Feature numérica entra direto; categoria vira número (one-hot ou índice); texto vira contagem/embedding.', 'Normalizar coloca as features em escalas comparáveis para nenhuma dominar pela unidade.', 'O split separa treino (aprender), validação (ajustar escolhas) e teste (medir honesto).'],
    conceptExample: 'Cidade ("Recife", "Natal") não é maior nem menor que outra; vira colunas 0/1 (one-hot), não 1, 2, 3 — senão o modelo inventa uma ordem que não existe.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'Somente biblioteca padrão', gpu: 'Não',
      cost: 'O(n·d) — didático', limitations: 'One-hot manual e split simples, sem pandas, para ver o mecanismo.',
      code: `# Tabela: cada linha e (features, rotulo). Tudo precisa virar numero.
brutos = [
    {'cidade': 'Recife', 'idade': 30, 'comprou': 1},
    {'cidade': 'Natal',  'idade': 22, 'comprou': 0},
    {'cidade': 'Recife', 'idade': 41, 'comprou': 1},
]
cidades = sorted({r['cidade'] for r in brutos})              # categorias -> colunas
def vetor(r):
    onehot = [1 if r['cidade'] == c else 0 for c in cidades]  # sem ordem falsa
    return onehot + [r['idade']]
X = [vetor(r) for r in brutos]
y = [r['comprou'] for r in brutos]
treino_X, teste_X = X[:2], X[2:]        # separar o que o modelo NAO ve
print('colunas:', cidades + ['idade'])
print('X:', X, ' y:', y)`
    },
    appliedExample: 'Prever churn: cada cliente é uma linha; plano, tempo de casa e uso viram colunas; "cancelou?" é o rótulo — e os clientes do último mês ficam de fora para teste.',
    correctedApproach: 'Definir features e rótulo antes de modelar, codificar categorias sem ordem falsa e separar o teste ANTES de olhar ou normalizar, para não vazar informação do futuro.',
    decision: 'one-hot para categorias sem ordem; índice/ordinal só quando a ordem é real; normalizar quando as escalas diferem muito',
    hypothesis: 'um split treino/teste bem-feito estima o desempenho real melhor do que medir no próprio treino',
    tradeoffs: ['One-hot é honesto, mas estoura colunas com muitas categorias.', 'Normalizar ajuda alguns modelos, mas exige usar estatísticas só do treino.', 'Mais features podem ajudar ou introduzir ruído e vazamento.'],
    complexity: 'Montar a tabela é O(n·d); o cuidado caro não é o cômputo, é evitar vazamento entre treino e teste.',
    productionImpact: 'Vazamento é o erro nº 1 de iniciante: métricas lindas offline e fracasso em produção, porque o teste "viu" informação que não existiria na hora real.',
    errors: ['Codificar categoria como 1, 2, 3 (ordem falsa)', 'Normalizar usando o conjunto inteiro (vaza o teste)', 'Misturar treino e teste'],
    checklist: ['Cada linha é um exemplo e há uma coluna de rótulo?', 'Categorias viraram número sem ordem inventada?', 'O teste foi separado antes de tudo?', 'As escalas foram tratadas só com dados de treino?', 'Nenhuma feature "espia" o futuro?'],
    practice: {
      basic: 'Transformar 5 registros com cidade e idade numa tabela numérica com one-hot.',
      intermediate: 'Fazer um split treino/teste e explicar por que o teste fica de fora do aprendizado.',
      advanced: 'Identificar uma fonte de vazamento num exemplo dado e corrigi-la.',
      senior: 'Definir uma política de codificação/normalização que não vaze em produção.',
      expert: 'Projetar a separação temporal de treino/teste para um problema que evolui no tempo.'
    },
    case: {
      title: 'Acurácia perfeita que sumiu em produção', context: 'Um modelo tinha 99% no teste e 60% em produção.',
      symptoms: ['Métrica offline ótima', 'Queda imediata no deploy', 'Feature "id do pedido" muito importante'],
      metrics: ['gap treino×produção', 'importância das features', 'acurácia por período'], tools: ['auditoria de features', 'split temporal', 'matriz de confusão'],
      rootCause: 'Vazamento: uma feature carregava a resposta e o teste não era independente.', correction: 'Remover a feature vazada e refazer o split de forma temporal e independente.'
    },
    books: [['hands-on-ml', 'Cap. 2 — End-to-End Machine Learning Project'], ['designing-ml-systems', 'Caps. 4–5 — dados e features']],
    sources: ['pandas'],
    quiz: [
      { question: 'Por que codificar cidades como 1, 2, 3 costuma ser um erro?', options: ['Cria uma ordem/grandeza que não existe entre as categorias', 'Ocupa mais memória que one-hot', 'Python não aceita números em ML', 'Deixa o treino mais lento'], answer: 0, why: 'Índices inventam ordem; one-hot representa categorias sem hierarquia falsa.' },
      { question: 'Qual é o propósito de separar um conjunto de teste?', options: ['Medir o desempenho em dados que o modelo não viu no treino', 'Ter mais dados para treinar', 'Acelerar o treino', 'Guardar um backup dos dados'], answer: 0, why: 'O teste estima a generalização — o desempenho honesto fora do treino.' },
      { question: 'O que é "vazamento de dados" (data leakage)?', options: ['Informação do teste/futuro influencia o treino e infla a métrica', 'Perder arquivos de dados', 'Expor dados de usuários na internet', 'Usar dados demais no treino'], answer: 0, why: 'Leakage faz o modelo "ver" o que não deveria: métricas irreais que somem em produção.' }
    ]
  },
  {
    number: '0.3', part: 'base', id: 'base-modelo-erro-treino', level: 'Ponte (Faixa 0)',
    title: 'Modelo, erro e treino: o coração do aprendizado',
    objective: 'Entender um modelo como função com parâmetros, o erro (loss) como distância até a resposta e o treino como o ajuste dos parâmetros para reduzir o erro médio nos exemplos.',
    prerequisites: ['Módulo 0.2', 'Saber o que é uma função f(x)', 'Ideia de média'],
    topics: ['modelo = função com parâmetros', 'parâmetros × hiperparâmetros', 'erro / loss', 'erro quadrático médio (MSE)', 'treino como minimização', 'gradiente (intuição)', 'forma fechada × iterativo', 'previsão'],
    problem: 'Sem entender o que "treinar" faz, o iniciante trata o modelo como caixa mágica — não sabe por que ele melhora, por que estabiliza nem por que às vezes não aprende.',
    intuition: 'Um modelo é uma função f(x) = a·x + b com botões (os parâmetros a e b). O erro mede o quanto a previsão erra o alvo. Treinar é girar os botões para deixar o erro médio o menor possível — é isso, literalmente. É a mesma ideia do "minimizar risco" do módulo 1.',
    mathematics: 'Erro quadrático médio: MSE = (1/n)·Σ (f(xᵢ) − yᵢ)². Treinar = escolher os parâmetros que minimizam o MSE, por fórmula fechada (mínimos quadrados) ou descendo o gradiente.',
    internals: ['O modelo tem parâmetros (aprendidos) e hiperparâmetros (você escolhe).', 'A loss transforma "errou quanto" num único número a minimizar.', 'O treino ajusta os parâmetros na direção que reduz a loss até estabilizar.'],
    conceptExample: 'Ajustar uma reta a pontos (x, y): cada escolha de a, b dá um erro médio; treinar acha o a, b de menor erro — no exemplo executável, a=3.2 e b=1.4 saem só dos dados.',
    implementation: {
      language: 'Python 3.12+ (Pyodide)', dependencies: 'Somente biblioteca padrão', gpu: 'Não',
      cost: 'O(n) — didático', limitations: 'Uma feature e modelo linear: o mínimo para ver o mecanismo (o artefato completo está no exemplo versionado).',
      code: `# Treinar = achar a, b que minimizam o erro medio (minimos quadrados).
treino = [(1, 5), (2, 7), (3, 12), (4, 13), (5, 18)]
n = len(treino)
sx = sum(x for x, _ in treino);  sy = sum(y for _, y in treino)
sxy = sum(x*y for x, y in treino);  sxx = sum(x*x for x, _ in treino)
a = (n*sxy - sx*sy) / (n*sxx - sx*sx)   # inclinacao aprendida
b = (sy - a*sx) / n                      # intercepto aprendido
mse = sum((a*x + b - y)**2 for x, y in treino) / n
print(f'f(x) = {a:.1f}*x + {b:.1f}   erro medio (MSE) = {mse:.2f}')`
    },
    appliedExample: 'Estimar o tempo de entrega a partir da distância: os parâmetros da reta saem do histórico; o erro médio diz o quanto, em média, a estimativa erra.',
    correctedApproach: 'Definir a loss (o que "erro" significa para o problema), treinar reduzindo-a e sempre reportar o erro — em vez de fingir que o modelo acerta tudo.',
    decision: 'forma fechada (mínimos quadrados) quando existe e é barata; gradiente iterativo quando o modelo é grande ou não tem fórmula',
    hypothesis: 'ajustar os parâmetros pela loss produz previsões melhores que um chute fixo (ex.: a média)',
    tradeoffs: ['Forma fechada é exata, mas só existe para modelos simples.', 'Gradiente escala para modelos grandes, mas exige passo e épocas bem escolhidos.', 'Reduzir o erro de treino ao extremo pode piorar a generalização (módulo 0.4).'],
    complexity: 'Mínimos quadrados de 1 feature é O(n); o gradiente é O(n·d) por época × número de épocas.',
    productionImpact: 'Confundir parâmetro com hiperparâmetro, ou não medir a loss, leva a modelos que "treinam" sem melhorar e a retrabalho caro.',
    errors: ['Achar que treino = rodar código, sem olhar a loss', 'Confundir parâmetro (aprendido) com hiperparâmetro (escolhido)', 'Esperar erro zero no treino'],
    checklist: ['A loss está definida e faz sentido para o problema?', 'A loss cai durante o treino?', 'Sei quais são parâmetros e quais são hiperparâmetros?', 'O erro final foi reportado?', 'O modelo bate um baseline simples?'],
    practice: {
      basic: 'Rodar o exemplo e explicar de onde vêm a=3.2 e b=1.4.',
      intermediate: 'Mudar um ponto do treino e observar como a, b e o MSE mudam.',
      advanced: 'Implementar a mesma reta por gradiente e comparar com a forma fechada.',
      senior: 'Escolher a loss certa para um problema com erros de custo assimétrico.',
      expert: 'Explicar por que reduzir o erro de treino ao máximo pode aumentar o erro de teste.'
    },
    case: {
      title: 'O treino que nunca melhorava', context: 'Um iniciante rodava fit() em loop e a "precisão" não subia.',
      symptoms: ['Loss constante entre épocas', 'Passo de aprendizado enorme', 'Resultado dependia da execução'],
      metrics: ['loss por época', 'norma do gradiente', 'erro final'], tools: ['gráfico da loss', 'log de hiperparâmetros', 'seed fixa'],
      rootCause: 'Hiperparâmetro (passo) mal escolhido — o treino divergia em vez de minimizar.', correction: 'Ajustar o passo, fixar a seed e acompanhar a curva da loss até estabilizar.'
    },
    books: [['hands-on-ml', 'Cap. 4 — Training Models'], ['deep-learning', 'Cap. 5 — Machine Learning Basics']],
    sources: ['numpy'],
    exampleFile: '../../examples/ia-senior/ia-zero.py',
    quiz: [
      { question: 'O que significa "treinar" um modelo?', options: ['Ajustar os parâmetros para reduzir o erro médio nos exemplos', 'Rodar o programa mais rápido', 'Guardar os dados em memória', 'Escrever mais regras à mão'], answer: 0, why: 'Treinar = otimizar os parâmetros minimizando a loss (o erro médio).' },
      { question: 'Qual a diferença entre parâmetro e hiperparâmetro?', options: ['Parâmetro é aprendido no treino; hiperparâmetro você escolhe antes', 'São a mesma coisa', 'Hiperparâmetro é aprendido; parâmetro é fixo', 'Parâmetro só existe em deep learning'], answer: 0, why: 'a e b da reta são parâmetros aprendidos; o passo de aprendizado é um hiperparâmetro definido por você.' },
      { question: 'Depois de treinar bem, o erro no treino normalmente é:', options: ['Baixo, mas em geral maior que zero (o mundo tem ruído)', 'Sempre exatamente zero', 'Sempre maior que o erro de teste', 'Irrelevante'], answer: 0, why: 'Dados reais têm ruído; erro zero no treino costuma ser sinal de decorar (overfitting), visto no 0.4.' }
    ]
  },
  {
    number: '0.4', part: 'base', id: 'base-generalizacao-overfitting', level: 'Ponte (Faixa 0)',
    title: 'Generalização, overfitting e a métrica honesta',
    objective: 'Distinguir decorar de generalizar, avaliar sempre em dados nunca vistos e reconhecer a armadilha da acurácia (baseline da classe majoritária) e o eixo underfitting ↔ overfitting.',
    prerequisites: ['Módulo 0.3', 'Ideia de erro médio (MSE)', 'Split treino/teste (0.2)'],
    topics: ['generalizar × decorar', 'overfitting e underfitting', 'capacidade do modelo', 'erro de treino × erro de teste', 'baseline', 'acurácia e sua armadilha', 'validação', 'métrica ligada ao custo'],
    problem: 'O iniciante celebra a acurácia no treino e, no deploy, o modelo fracassa — porque decorou os exemplos em vez de aprender o padrão, ou porque a métrica escondia o desempenho real.',
    intuition: 'Decorar é acertar as perguntas da prova que você já viu; generalizar é acertar as novas. Por isso se mede no teste. Um modelo simples demais erra em tudo (underfit); complexo demais decora o treino e falha fora (overfit). E "95% de acurácia" pode ser pior que uma regra boba se 95% dos casos já são de uma classe só.',
    mathematics: 'O que importa é o erro esperado em dados novos (o risco), estimado pelo erro de teste. Overfitting: erro de treino ≪ erro de teste. Baseline da classe majoritária: acurácia = proporção da classe mais comum.',
    internals: ['Aumentar a capacidade reduz o erro de treino, mas o de teste desce e depois volta a subir (overfitting).', 'A validação separa dados para ajustar escolhas sem tocar no teste.', 'A métrica precisa refletir o custo do erro, não só a contagem de acertos.'],
    conceptExample: 'No exemplo executável, o "decorador" acerta 100% no treino (erro 0) e fracassa no teste (erro 112,5), enquanto o modelo aprendido erra pouco em ambos — decorar não é aprender.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'Somente biblioteca padrão', gpu: 'Não',
      cost: 'O(n) — didático', limitations: 'Ilustra a armadilha da acurácia num caso desbalanceado.',
      code: `# Armadilha da acuracia: 95% dos casos sao da classe 0.
y_real   = [0]*95 + [1]*5
sempre_0 = [0]*100                     # baseline bobo: chuta sempre 0
acc = sum(p == t for p, t in zip(sempre_0, y_real)) / len(y_real)
print(f'acuracia do baseline que ignora a classe rara: {acc:.0%}')
print('recall dos positivos:', 0, '-> inutil apesar de 95% de acuracia')`
    },
    appliedExample: 'Detecção de fraude: 99,8% das transações são legítimas; um modelo que diz "tudo legítimo" tem 99,8% de acurácia e recall zero — inútil. A métrica tem de ser recall/custo, não acurácia.',
    correctedApproach: 'Escolher a métrica pelo custo do erro, comparar sempre com o baseline da classe majoritária e reportar erro de treino E de teste para flagrar overfitting.',
    decision: 'usar acurácia só em dados balanceados; em dados desbalanceados, usar recall/precisão/F1 ou custo esperado',
    hypothesis: 'o modelo generaliza se o erro de teste é próximo do erro de treino e melhor que o baseline',
    tradeoffs: ['Modelo mais complexo aprende mais, mas arrisca overfitting.', 'Mais dados combatem overfitting, mas custam para coletar e rotular.', 'Métrica simples é fácil de comunicar, mas pode esconder o custo real.'],
    complexity: 'Avaliar é O(n) sobre o teste; o difícil é escolher a métrica e o baseline certos, não o cômputo.',
    productionImpact: 'Reportar só acurácia offline é a causa clássica de modelos que passam na revisão e falham com usuários reais.',
    errors: ['Medir no próprio conjunto de treino', 'Usar acurácia em dados desbalanceados', 'Confundir erro de treino baixo com modelo bom'],
    checklist: ['O modelo foi medido em dados nunca vistos?', 'A métrica reflete o custo do erro?', 'O resultado bate o baseline da classe majoritária?', 'Erro de treino e de teste estão próximos?', 'Há sinal de overfitting ou underfitting?'],
    practice: {
      basic: 'Explicar, com o exemplo, por que o decorador falha no teste.',
      intermediate: 'Calcular a acurácia de um baseline "classe majoritária" num conjunto desbalanceado.',
      advanced: 'Diagnosticar, pelos erros de treino/teste, se um modelo dado está em underfitting ou overfitting.',
      senior: 'Escolher e justificar a métrica para um problema com erros de custo assimétrico.',
      expert: 'Projetar um protocolo de validação (treino/validação/teste + baseline) para um produto real.'
    },
    case: {
      title: '95% de acurácia, zero fraudes detectadas', context: 'Um modelo antifraude foi aprovado com 99% de acurácia e não pegou nenhuma fraude.',
      symptoms: ['Recall da fraude ≈ 0', 'Acurácia altíssima', 'Pouquíssimos positivos no dado'],
      metrics: ['recall', 'precisão', 'custo por fraude perdida'], tools: ['matriz de confusão', 'baseline majoritário', 'curva precisão-recall'],
      rootCause: 'Métrica errada (acurácia) num dado extremamente desbalanceado.', correction: 'Trocar por recall/custo, comparar com o baseline e reamostrar/pesar a classe rara.'
    },
    books: [['hands-on-ml', 'Cap. 3 — Classification (métricas)'], ['designing-ml-systems', 'Cap. 6 — avaliação de modelos']],
    sources: ['sklearn'],
    quiz: [
      { question: 'O que é overfitting?', options: ['O modelo decora o treino (erro baixo) mas erra em dados novos', 'O modelo é rápido demais', 'O modelo usa poucas features', 'O modelo tem erro alto no treino e no teste'], answer: 0, why: 'Overfit = erro de treino ≪ erro de teste; decorou em vez de generalizar. (Erro alto em ambos é underfitting.)' },
      { question: 'Por que "95% de acurácia" pode ser um resultado ruim?', options: ['Se 95% dos casos já são de uma classe, chutar essa classe atinge 95% sem valor algum', 'Acurácia nunca é confiável', '95% é sempre insuficiente', 'Porque falta memória para calcular'], answer: 0, why: 'Em dados desbalanceados, o baseline da classe majoritária já atinge a acurácia — é preciso recall/custo.' },
      { question: 'Onde se deve medir o desempenho final de um modelo?', options: ['Em dados de teste que ele não viu no treino', 'No próprio conjunto de treino', 'Nos dados em que a acurácia é maior', 'Em qualquer parte dos dados'], answer: 0, why: 'Só o teste (dados não vistos) estima a generalização de forma honesta.' }
    ]
  },
  {
    number: 1, part: 'fundamentos', id: 'fundamentos-ia', level: 'Fundamental',
    title: 'Fundamentos de inteligência artificial',
    objective: 'Distinguir IA, ML, deep learning, ciência e análise de dados, IA generativa, LLM e automação; formular uma tarefa com dados, hipótese, saída, métrica e limite.',
    prerequisites: ['Programação básica', 'Leitura de requisitos', 'Nenhuma matemática avançada'],
    topics: ['IA simbólica', 'ML e deep learning', 'modelos discriminativos e generativos', 'supervisionado, não supervisionado e semissupervisionado', 'self-supervised learning', 'reinforcement learning', 'treino, inferência e generalização', 'representação e otimização', 'IA estreita', 'pesquisa × produto'],
    problem: 'O rótulo “IA” agrupa mecanismos diferentes; escolher o paradigma errado cria complexidade, custo e risco sem ganho mensurável.',
    intuition: 'Um sistema inteligente é uma função de decisão sob incerteza. Regras codificam conhecimento; modelos estimam padrões; produtos combinam ambos com dados, interfaces e controles.',
    mathematics: 'Formalize aprendizado como minimização de risco esperado: R(f)=E[L(f(X),Y)]; treino aproxima essa esperança pelo risco empírico e regularização.',
    internals: ['Treino estima parâmetros a partir de exemplos; inferência aplica parâmetros congelados.', 'Representação determina quais relações o modelo consegue aprender.', 'Generalização mede desempenho fora dos exemplos de treino, não memorização.'],
    conceptExample: 'Antes de usar um LLM para aprovar crédito, decomponha classificação, explicação, regra legal e revisão humana; cada parte exige controle diferente.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'Somente biblioteca padrão', gpu: 'Não',
      cost: 'O(1) por regra; memória constante.', limitations: 'Exemplo didático: não aprende com dados.',
      code: `from dataclasses import dataclass

@dataclass(frozen=True)
class Decision:
    approved: bool
    reason: str

def decide(score: float, blocked: bool) -> Decision:
    if not 0.0 <= score <= 1.0:
        raise ValueError('score must be in [0, 1]')
    if blocked:
        return Decision(False, 'business rule')
    return Decision(score >= 0.72, 'measured model threshold')

print(decide(0.81, False))`
    },
    appliedExample: 'Arquitetar triagem de tickets: regras para bloqueios, classificador para rota e humano para casos de baixa confiança.',
    correctedApproach: 'Começar pelo processo decisório e por um baseline determinístico; introduzir ML apenas onde dados e generalização justificam.',
    decision: 'regras, ML clássico, deep learning ou modelo generativo conforme incerteza, dado, risco e custo',
    hypothesis: 'um modelo aprendido supera o baseline determinístico em utilidade de negócio sem violar restrições',
    tradeoffs: ['Regras são auditáveis, mas frágeis a variedade.', 'ML generaliza padrões, mas depende de dados representativos.', 'Modelos generativos cobrem tarefas abertas, mas elevam custo e variância.'],
    complexity: 'Depende da família: regras O(r), modelos lineares O(d) por exemplo e attention densa O(n²d) por camada.',
    productionImpact: 'Framing errado contamina dataset, métrica e arquitetura; corrigir depois do deploy é mais caro que validar a decisão no início.',
    errors: ['Confundir demo com produto', 'Tratar IA como sinônimo de LLM', 'Medir apenas acurácia offline'],
    checklist: ['Há decisão e usuário definidos?', 'Existe baseline não-ML?', 'Dados representam o uso?', 'Métrica liga ao custo do erro?', 'Há opção segura de não decidir?'],
    practice: {
      basic: 'Classificar 12 casos entre regra, ML discriminativo, geração e não-ML, justificando cada um.',
      intermediate: 'Implementar uma decisão híbrida regra + score com testes de fronteira.',
      advanced: 'Reformular um “chatbot para tudo” em componentes mensuráveis e uma matriz de risco.',
      senior: 'Defender um MVP com critérios explícitos para interromper o investimento.',
      expert: 'Modelar risco esperado com custo assimétrico e provar quando o baseline domina o modelo.'
    },
    case: {
      title: 'Alta accuracy, baixo valor de negócio', context: 'Um classificador de tickets atinge 96% de accuracy, mas aumenta o tempo médio de resolução.',
      symptoms: ['Classe majoritária domina', 'Rotas críticas continuam erradas', 'Operadores ignoram a sugestão'],
      metrics: ['custo por erro', 'recall de prioridade alta', 'tempo até resolução'], tools: ['matriz de confusão', 'slices', 'entrevistas com operadores'],
      rootCause: 'Objetivo de treino e métrica não representavam a decisão operacional.', correction: 'Reformular labels, custo e fallback; comparar com regra simples.'
    },
    books: [['hands-on-ml', 'Cap. 1 — The Machine Learning Landscape'], ['deep-learning', 'Cap. 1 — Introduction'], ['ml-powered-apps', 'Caps. 1–2 — objetivo de produto e framing']],
    sources: ['sklearn']
  },
  {
    number: 2, part: 'fundamentos', id: 'python-ia', level: 'Fundamental → sênior',
    title: 'Python para inteligência artificial',
    objective: 'Construir código científico tipado, vetorizado, reprodutível e perfilado; escolher NumPy, pandas, SciPy, Polars, PyTorch, TensorFlow ou JAX pelo workload.',
    prerequisites: ['Experiência em outra linguagem', 'Git e terminal', 'Noções de testes'],
    topics: ['tipagem e estruturas', 'funções e classes', 'iterators e generators', 'decorators e context managers', 'exceções e módulos', 'venv e dependências', 'notebooks', 'profiling', 'concorrência e multiprocessing', 'vetorização e memória', 'NumPy, pandas, SciPy e Matplotlib', 'PyTorch e TensorFlow', 'JAX avançado', 'Polars'],
    problem: 'Código de notebook pode funcionar em amostra e falhar em escala por mutabilidade, dependência implícita, cópia de dados, GIL ou ambiente irreproduzível.',
    intuition: 'Python coordena kernels compilados. Performance vem de mover loops para operações vetorizadas, reduzir cópias e medir memória/CPU, não de micro-otimizar sintaxe.',
    mathematics: 'Vetorização aplica uma função sobre um tensor; o custo continua O(n), mas loops em C/SIMD reduzem overhead. Strides definem o mapeamento índice→memória.',
    internals: ['ndarray separa buffer, dtype, shape e strides.', 'Views compartilham memória; cópias duplicam custo e podem divergir.', 'Threads ajudam I/O; processos ou kernels nativos contornam CPU limitada pelo GIL.'],
    conceptExample: 'Migrando de Java: type hints não impõem tipo em runtime; valide fronteiras, use protocolos e mantenha núcleo numérico em arrays.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'numpy>=2', gpu: 'Não',
      cost: 'O(n); uma alocação para o resultado.', limitations: 'Benchmark depende de tamanho, dtype, BLAS e hardware.',
      code: `from time import perf_counter
import numpy as np

rng = np.random.default_rng(42)
values = rng.normal(size=100_000).astype(np.float32)
start = perf_counter()
standardized = (values - values.mean()) / values.std()
elapsed_ms = (perf_counter() - start) * 1_000
assert np.isclose(standardized.mean(), 0.0, atol=1e-5)
print({'ms': round(elapsed_ms, 3), 'mb': standardized.nbytes / 1e6})`
    },
    appliedExample: 'Processar features em batches com generator, dtype explícito e perfil de memória antes de paralelizar.',
    correctedApproach: 'Fixar ambiente, isolar I/O, validar schema e dtype, vetorizar o caminho crítico e usar profiler antes de concorrência.',
    decision: 'estrutura Python e biblioteca de dados conforme volume, layout, latência, ecossistema e maturidade da equipe',
    hypothesis: 'o gargalo está no loop Python ou em cópias evitáveis, e a vetorização melhora tempo sem estourar memória',
    tradeoffs: ['pandas tem ecossistema amplo; Polars favorece execução colunar/lazy.', 'NumPy oferece controle; PyTorch/JAX adicionam autodiff e aceleradores.', 'Notebook acelera exploração, mas exige extração para módulos testáveis.'],
    complexity: 'Operações elementwise O(n); sort O(n log n); junções dependem do algoritmo e cardinalidade; memória é frequentemente o limite.',
    productionImpact: 'dtype errado pode duplicar VRAM; dependência não fixada quebra reprodutibilidade; estado de notebook esconde ordem de execução.',
    errors: ['Loop Python em milhões de linhas', 'Cópias silenciosas e object dtype', 'Instalar dependências sem lock'],
    checklist: ['Ambiente é recriável?', 'Seeds e versões estão registradas?', 'Dtypes são explícitos?', 'Perfil inclui tempo e memória?', 'Código crítico saiu do notebook?'],
    practice: {
      basic: 'Reescrever três loops como operações NumPy e explicar broadcasting.',
      intermediate: 'Construir pipeline tabular tipado com validação, logging e teste de schema.',
      advanced: 'Comparar pandas e Polars em um workload real, incluindo peak memory e plano de execução.',
      senior: 'Transformar notebook stateful em pacote reprodutível com CLI e testes.',
      expert: 'Diagnosticar cópias, strides, cache locality e contenção em um pipeline multi-processo.'
    },
    case: {
      title: 'Pipeline consome 4× a RAM esperada', context: 'Uma preparação tabular de 8 GB encerra o worker de 32 GB.',
      symptoms: ['object dtype', 'múltiplas cópias', 'concatenação incremental'],
      metrics: ['peak RSS', 'tempo por etapa', 'bytes por coluna'], tools: ['tracemalloc', 'memory profiler', 'plano lazy'],
      rootCause: 'Conversões implícitas e materializações repetidas.', correction: 'Definir schema/dtype, execução lazy e escrita incremental.'
    },
    books: [['hands-on-ml', 'Cap. 2 e apêndices de projeto'], ['deep-learning', 'Cap. 4 — Numerical Computation']],
    sources: ['numpy', 'pandas', 'scipy', 'polars', 'pytorch', 'jax', 'tensorflow']
  },
  {
    number: 3, part: 'fundamentos', id: 'algebra-linear', level: 'Fundamental → sênior',
    title: 'Álgebra linear para IA',
    objective: 'Manipular vetores, matrizes e tensores; interpretar posto, base, projeções, autodecomposição e SVD em modelos, PCA, embeddings e redes neurais.',
    prerequisites: ['Aritmética e funções', 'Python/NumPy básico'],
    topics: ['escalares, vetores, matrizes e tensores', 'produto escalar e matricial', 'transposição, inversa e determinante', 'posto, base e independência', 'autovalores e autovetores', 'decomposição espectral e SVD', 'PCA e projeções', 'normas e distâncias', 'similaridade', 'broadcasting'],
    problem: 'Sem geometria e formas, o aluno copia operações, aceita matrizes singulares e confunde similaridade, distância e causalidade.',
    intuition: 'Vetores são pontos/direções; matrizes transformam espaços; decomposições revelam eixos, escala e informação redundante.',
    mathematics: 'A=UΣVᵀ; PCA projeta dados centralizados nos autovetores de XᵀX. Similaridade cosseno é x·y/(||x||||y||).',
    internals: ['Produto matricial compõe transformações.', 'Posto mede dimensões independentes.', 'SVD funciona para matrizes retangulares e expõe condicionamento numérico.'],
    conceptExample: 'Embeddings colineares têm cosseno alto mesmo com magnitudes diferentes; normalizar altera o significado do dot product.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'numpy>=2', gpu: 'Não',
      cost: 'SVD densa aproximadamente O(min(mn²,m²n)).', limitations: 'Para matrizes grandes, use decomposição truncada/randomizada.',
      code: `import numpy as np

x = np.array([[2., 0.], [0., 1.], [3., 1.]])
centered = x - x.mean(axis=0, keepdims=True)
u, singular, vt = np.linalg.svd(centered, full_matrices=False)
component = vt[0]
projection = centered @ component
reconstruction = np.outer(projection, component)
print({'singular_values': singular.tolist(),
       'reconstruction_error': float(np.linalg.norm(centered - reconstruction))})`
    },
    appliedExample: 'Usar SVD truncada para reduzir embeddings e medir recall de busca antes/depois, não apenas variância explicada.',
    correctedApproach: 'Inspecionar shape, dtype, posto e condicionamento; escolher métrica coerente e validar a aproximação na tarefa downstream.',
    decision: 'representação, métrica e decomposição conforme geometria do dado e objetivo downstream',
    hypothesis: 'a informação útil está concentrada em um subespaço de menor dimensão sem degradar a métrica de produto',
    tradeoffs: ['Redução remove ruído e custo, mas pode apagar sinal raro.', 'Cosseno ignora magnitude; Euclidiana não.', 'Inversa explícita é didática, mas solve é mais estável.'],
    complexity: 'Dot product O(d), produto (m×k)(k×n) O(mkn), armazenar matriz densa O(mn).',
    productionImpact: 'Dimensionalidade afeta latência, índice, memória e qualidade; condicionamento ruim propaga erro numérico.',
    errors: ['Inverter matriz quando bastava resolver sistema', 'Broadcasting com eixo errado', 'Comparar embeddings sem normalização consciente'],
    checklist: ['Shapes são compatíveis?', 'Métrica preserva o significado?', 'Matriz é bem condicionada?', 'A aproximação foi medida downstream?', 'dtype é suficiente?'],
    practice: {
      basic: 'Calcular manualmente dot product, norma, projeção e cosseno de três pares.',
      intermediate: 'Implementar PCA com NumPy e comparar com uma biblioteca.',
      advanced: 'Medir recall×memória após SVD truncada em embeddings.',
      senior: 'Diagnosticar ranking inconsistente causado por normalização e métrica.',
      expert: 'Analisar estabilidade, espectro e erro de reconstrução sob perturbações.'
    },
    case: {
      title: 'Embeddings inadequados e ranking instável', context: 'Busca semântica troca os primeiros resultados após mudança de dtype e normalização.',
      symptoms: ['normas muito dispersas', 'ties e vizinhos inconsistentes', 'recall cai por categoria'],
      metrics: ['recall@k', 'distribuição de normas', 'erro angular'], tools: ['NumPy', 'SVD', 'análise por slice'],
      rootCause: 'Dot product foi comparado a cosseno sem normalização e com precisão insuficiente.', correction: 'Fixar métrica, normalizar e validar dimensão/dtype no conjunto dourado.'
    },
    books: [['deep-learning', 'Cap. 2 — Linear Algebra'], ['prml', 'Apêndice C — Properties of Matrices and cap. 12'], ['esl', 'Caps. 3 e 14']],
    sources: ['numpy']
  },
  {
    number: 4, part: 'fundamentos', id: 'calculo-otimizacao', level: 'Fundamental → sênior',
    title: 'Cálculo e otimização',
    objective: 'Derivar gradientes, Jacobianos e Hessianas; conectar regra da cadeia, convexidade e otimização restrita ao backprop e aos otimizadores SGD, Momentum, Adam e AdamW.',
    prerequisites: ['Álgebra linear', 'Funções e gráficos', 'NumPy'],
    topics: ['limites e derivadas', 'derivadas parciais e gradiente', 'Jacobiano e Hessiana', 'regra da cadeia e cálculo vetorial', 'mínimos, máximos e convexidade', 'Lagrange', 'gradient descent, SGD e mini-batch', 'momentum, Adam e AdamW', 'learning rate e scheduling', 'regularização e landscape'],
    problem: 'Treino instável é frequentemente tratado como “tente outro optimizer”, sem distinguir escala, curvatura, gradiente, regularização e ruído.',
    intuition: 'O gradiente indica a subida local; a Hessiana descreve curvatura; o optimizer escolhe como acumular e escalar passos sob ruído.',
    mathematics: 'θₜ₊₁=θₜ−η∇L(θₜ); J encadeia derivadas vetoriais; H=∇²L. AdamW desacopla weight decay da atualização adaptativa.',
    internals: ['Backprop aplica vector-Jacobian products sem materializar Jacobianos completos.', 'Mini-batches estimam o gradiente com variância.', 'Curvatura e escala das features condicionam o problema.'],
    conceptExample: 'Uma loss decresce e explode após warmup: compare norma de gradiente, LR efetivo, batch e precisão, não troque o modelo às cegas.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'numpy>=2', gpu: 'Não',
      cost: 'O(ndT) para n amostras, d features e T passos.', limitations: 'Regressão linear convexa não representa landscapes profundos.',
      code: `import numpy as np

rng = np.random.default_rng(42)
x = rng.normal(size=(256, 3))
y = x @ np.array([1.5, -2.0, 0.7]) + 0.1
w = np.zeros(3)
lr = 0.08
for _ in range(300):
    error = x @ w - y
    gradient = (2.0 / len(x)) * x.T @ error
    w -= lr * gradient
assert np.linalg.norm(gradient) < 1e-3
print(w)`
    },
    appliedExample: 'Instrumentar norma de gradientes, loss por batch, LR e overflow durante fine-tuning antes de mudar arquitetura.',
    correctedApproach: 'Padronizar dados, validar gradiente em problema pequeno, observar escalas e ajustar LR/batch/schedule com ablações.',
    decision: 'optimizer, regularização, batch e schedule conforme geometria, ruído, orçamento e objetivo de generalização',
    hypothesis: 'a instabilidade decorre de escala/LR e pode ser reproduzida num caso mínimo com gradientes observáveis',
    tradeoffs: ['Batch maior estabiliza gradiente, mas consome memória e pode mudar generalização.', 'Adam converge rápido, porém custa estados extras.', 'Weight decay reduz complexidade, mas pode subajustar.'],
    complexity: 'Cada passo custa forward+backward; Adam mantém dois estados extras por parâmetro; Hessiana completa custa O(p²) em memória.',
    productionImpact: 'Treino instável desperdiça GPU e torna resultados irreproduzíveis; scheduler e checkpoint precisam estar versionados.',
    errors: ['Learning rate sem escala', 'Confundir L2 com AdamW', 'Avaliar apenas loss de treino'],
    checklist: ['Gradiente está correto?', 'Features têm escala razoável?', 'LR e batch estão registrados?', 'Validação é independente?', 'Há checkpoint e detecção de NaN?'],
    practice: {
      basic: 'Derivar gradientes de MSE e logistic loss.',
      intermediate: 'Implementar gradient descent, momentum e AdamW em problema pequeno.',
      advanced: 'Comparar schedules com curvas, custo e seeds múltiplas.',
      senior: 'Diagnosticar exploding/vanishing gradients por instrumentação.',
      expert: 'Analisar Jacobiano, espectro da Hessiana aproximada e sensibilidade do ótimo.'
    },
    case: {
      title: 'Treino diverge após poucas centenas de steps', context: 'Rede converge em FP32, mas produz NaN com mixed precision.',
      symptoms: ['loss oscilante', 'norma de gradiente crescente', 'overflow no scaler'],
      metrics: ['loss por step', 'gradient norm', 'scale e skipped steps'], tools: ['autograd', 'profiler', 'anomaly detection'],
      rootCause: 'LR alto combinado a entrada não padronizada e operação numericamente instável.', correction: 'Padronizar, estabilizar a operação, usar clipping justificado e recalibrar LR.'
    },
    books: [['deep-learning', 'Caps. 4 e 8 — Numerical Computation e Optimization'], ['hands-on-ml', 'Cap. 4 e cap. 11'], ['prml', 'Cap. 5 — Neural Networks']],
    sources: ['pytorch', 'scipy']
  },
  {
    number: 5, part: 'fundamentos', id: 'probabilidade-estatistica', level: 'Fundamental → sênior',
    title: 'Probabilidade e estatística',
    objective: 'Modelar incerteza, estimar parâmetros, interpretar intervalos e testes e usar Bayes, bootstrap, Monte Carlo e teoria da informação sem conclusões indevidas.',
    prerequisites: ['Álgebra linear básica', 'Cálculo básico', 'Python/NumPy'],
    topics: ['eventos e variáveis aleatórias', 'distribuições, esperança e variância', 'covariância e correlação', 'condicional, independência e Bayes', 'MLE e MAP', 'amostragem e estimação', 'intervalos e testes', 'p-value e poder', 'viés e variância', 'bootstrap e Monte Carlo', 'inferência bayesiana', 'entropia, cross-entropy, KL e informação mútua'],
    problem: 'Métricas pontuais escondem incerteza; correlação é confundida com causalidade; p-value vira selo de verdade.',
    intuition: 'Probabilidade descreve incerteza do processo; estatística usa amostras para aprender sobre esse processo e quantificar o que ainda não sabemos.',
    mathematics: 'Bayes: p(θ|D)∝p(D|θ)p(θ). Entropia H(p)=−Σp log p; KL mede divergência direcionada; bootstrap aproxima a distribuição do estimador.',
    internals: ['MLE otimiza likelihood; MAP inclui prior.', 'Intervalo de confiança é propriedade do procedimento repetido.', 'Poder depende de efeito, variância, tamanho amostral e α.'],
    conceptExample: 'Uma melhoria de 0,2 p.p. pode ser estatisticamente instável ou economicamente irrelevante; reporte efeito e intervalo.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'numpy>=2', gpu: 'Não',
      cost: 'Bootstrap O(Bn).', limitations: 'Bootstrap ingênuo não preserva dependência temporal ou grupos.',
      code: `import numpy as np

rng = np.random.default_rng(42)
observed = np.array([1, 0, 1, 1, 0, 1, 0, 1], dtype=float)
means = np.array([
    rng.choice(observed, size=len(observed), replace=True).mean()
    for _ in range(5_000)
])
low, high = np.quantile(means, [0.025, 0.975])
print({'estimate': observed.mean(), 'bootstrap_95': [low, high]})`
    },
    appliedExample: 'Comparar dois modelos com bootstrap pareado por usuário e efeito de negócio, preservando a unidade de amostragem.',
    correctedApproach: 'Definir estimando, unidade, hipótese, tamanho de efeito e protocolo antes de olhar o resultado.',
    decision: 'método de estimação e teste conforme distribuição, dependência, tamanho e decisão',
    hypothesis: 'o efeito persiste sob reamostragem apropriada e possui magnitude útil, não apenas p-value pequeno',
    tradeoffs: ['Modelos paramétricos ganham eficiência com hipóteses corretas.', 'Bootstrap é flexível, mas exige resampling coerente.', 'Prior estabiliza pouco dado, mas torna suposições explícitas.'],
    complexity: 'Monte Carlo converge tipicamente com erro O(1/√N); bootstrap multiplica o custo do estimador por B.',
    productionImpact: 'Incerteza mal tratada aprova regressões, mascara bias por slice e alimenta decisões sem poder estatístico.',
    errors: ['p-value como probabilidade da hipótese', 'Correlação como causalidade', 'Bootstrap quebrando grupos/tempo'],
    checklist: ['Qual é a unidade amostral?', 'Há dependência?', 'Efeito e intervalo foram reportados?', 'Poder é suficiente?', 'Múltiplas comparações foram tratadas?'],
    practice: {
      basic: 'Calcular Bayes, esperança, variância e entropia em distribuições pequenas.',
      intermediate: 'Implementar bootstrap e Monte Carlo com seed e intervalo.',
      advanced: 'Desenhar teste pareado por usuário e analisar poder.',
      senior: 'Revisar um relatório que confunde significância e impacto.',
      expert: 'Construir modelo bayesiano hierárquico e checagens preditivas.'
    },
    case: {
      title: 'A/B test “significativo” não se replica', context: 'Uma variante foi lançada após p<0,05 em muitas métricas e perde no mês seguinte.',
      symptoms: ['efeito pequeno', 'múltiplos testes', 'usuários repetidos'],
      metrics: ['efeito absoluto', 'intervalo', 'poder'], tools: ['bootstrap por usuário', 'correção de multiplicidade', 'análise sequencial'],
      rootCause: 'Pseudorreplicação e seleção pós-hoc da métrica vencedora.', correction: 'Pré-registrar métrica, reamostrar por usuário e exigir efeito mínimo relevante.'
    },
    books: [['deep-learning', 'Cap. 3 — Probability and Information Theory'], ['prml', 'Caps. 1–2 e 11'], ['esl', 'Caps. 7–8']],
    sources: ['scipy']
  },
  {
    number: 6, part: 'dados-ml', id: 'dados-preparacao', level: 'Intermediário → sênior',
    title: 'Dados e preparação',
    objective: 'Projetar datasets versionados, contratos e splits sem leakage; tratar qualidade, imbalance, privacidade, bias e lineage como parte do sistema.',
    prerequisites: ['Python científico', 'Probabilidade básica', 'SQL e dados tabulares'],
    topics: ['coleta, qualidade e limpeza', 'missing values e outliers', 'normalização e padronização', 'codificação categórica', 'feature engineering e selection', 'dimensionalidade e leakage', 'imbalance e sampling', 'augmentação', 'treino, validação e teste', 'versionamento, lineage e contratos', 'documentação, privacidade e bias'],
    problem: 'Modelo sofisticado não corrige label inconsistente, população enviesada, feature indisponível no serving ou split contaminado.',
    intuition: 'Dataset é uma interface temporal entre mundo e modelo. Seu contrato precisa definir origem, significado, disponibilidade e validade.',
    mathematics: 'O erro observado combina erro irredutível, viés de amostragem e estimativa. Reweighting corrige apenas sob hipóteses sobre a razão de densidades.',
    internals: ['Transformações aprendidas devem ajustar somente no treino.', 'Split temporal simula a direção do uso futuro.', 'Feature lineage liga valor online à origem e versão.'],
    conceptExample: 'Saldo “atual” usado para prever inadimplência histórica incorpora informação posterior ao evento: leakage temporal.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'scikit-learn>=1.9', gpu: 'Não',
      cost: 'O(nd) para transformações densas.', limitations: 'Toy data; produção exige contrato, store e validação persistente.',
      code: `import numpy as np
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler

numeric = Pipeline([('impute', SimpleImputer()), ('scale', StandardScaler())])
categorical = Pipeline([('impute', SimpleImputer(strategy='most_frequent')),
                        ('encode', OneHotEncoder(handle_unknown='ignore'))])
preprocess = ColumnTransformer([('num', numeric, [0, 1]), ('cat', categorical, [2])])
x_train = np.array([[1., 10., 'a'], [2., np.nan, 'b']], dtype=object)
print(preprocess.fit_transform(x_train).shape)`
    },
    appliedExample: 'Versionar snapshot, schema, janela, query e política de exclusão junto do modelo.',
    correctedApproach: 'Definir contrato e timestamp de disponibilidade; separar splits primeiro; ajustar transformações dentro de Pipeline.',
    decision: 'coleta, representação e split conforme evento de decisão, disponibilidade online e risco',
    hypothesis: 'a melhoria vem de sinal disponível no momento real e se mantém em validação temporal e por slice',
    tradeoffs: ['Imputação preserva volume, mas pode introduzir sinal artificial.', 'Oversampling aumenta representação, mas altera calibração.', 'Feature store reduz skew, mas adiciona operação.'],
    complexity: 'Preparação tabular usual O(nd); one-hot pode explodir memória com cardinalidade; sort temporal O(n log n).',
    productionImpact: 'Training-serving skew e lineage ausente tornam incidentes difíceis de reproduzir e invalidam auditoria.',
    errors: ['Fit antes do split', 'Feature criada após o target', 'Dataset sem versão ou consentimento'],
    checklist: ['Tempo da feature precede a decisão?', 'Transformações treinam só no treino?', 'Schema e lineage existem?', 'Slices críticos são cobertos?', 'PII tem base e retenção?'],
    practice: {
      basic: 'Detectar leakage, missing e outliers em um schema pequeno.',
      intermediate: 'Construir Pipeline com split temporal e validação de schema.',
      advanced: 'Criar datasheet, lineage e teste de training-serving parity.',
      senior: 'Diagnosticar uma previsão temporal contaminada.',
      expert: 'Desenhar amostragem sob seleção e estimar impacto de covariate shift.'
    },
    case: {
      title: 'Previsão temporal com leakage', context: 'Forecast tem RMSE excelente offline e falha no primeiro mês.',
      symptoms: ['features pós-fechamento', 'split aleatório', 'queda abrupta online'],
      metrics: ['RMSE por janela', 'freshness', 'parity offline/online'], tools: ['lineage', 'time travel', 'backtest rolling'],
      rootCause: 'Split aleatório e feature materializada após o horizonte de previsão.', correction: 'Refazer dataset point-in-time correct e validar com rolling origin.'
    },
    books: [['designing-ml-systems', 'Caps. 3–5 — data engineering, training data e feature engineering'], ['ml-design-patterns', 'Caps. 2 e 6'], ['hands-on-ml', 'Cap. 2']],
    sources: ['sklearn', 'datasheets']
  },
  {
    number: 7, part: 'dados-ml', id: 'ml-supervisionado', level: 'Intermediário → sênior',
    title: 'Machine learning supervisionado',
    objective: 'Implementar, comparar e justificar regressão, kNN, Naive Bayes, árvores, ensembles, boosting e SVM por hipótese, complexidade, interpretação e dados.',
    prerequisites: ['Módulos 3–6', 'Pipelines e validação'],
    topics: ['regressão linear e logística', 'k-nearest neighbors', 'Naive Bayes', 'árvores de decisão', 'random forest', 'gradient boosting', 'XGBoost, LightGBM e CatBoost', 'support vector machines', 'bagging, boosting e stacking', 'hiperparâmetros e interpretabilidade'],
    problem: 'Escolha por leaderboard ignora distribuição, calibração, latência, interpretabilidade, extrapolação e custo de manutenção.',
    intuition: 'Cada família impõe um viés indutivo: linearidade, vizinhança, independência, partições ou margens; o melhor modelo depende do sinal.',
    mathematics: 'Regressão minimiza loss regularizada; árvores particionam espaço; SVM maximiza margem; boosting soma weak learners para seguir pseudo-resíduos.',
    internals: ['Bagging reduz variância com modelos decorrelacionados.', 'Boosting ajusta erros sequencialmente.', 'SVM kernel usa produtos internos sem explicitar o espaço transformado.'],
    conceptExample: 'CatBoost lida com categorias de modo próprio; one-hot indiscriminado pode perder estrutura e inflar memória.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'scikit-learn>=1.9', gpu: 'Não',
      cost: 'Random forest aproximadamente O(t·n log n·mtry).', limitations: 'Dataset sintético; tuning real requer orçamento e nested validation.',
      code: `from sklearn.datasets import make_classification
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import average_precision_score
from sklearn.model_selection import train_test_split

x, y = make_classification(n_samples=800, weights=[0.9, 0.1], random_state=42)
x_train, x_test, y_train, y_test = train_test_split(
    x, y, test_size=0.25, stratify=y, random_state=42)
model = RandomForestClassifier(n_estimators=120, min_samples_leaf=3,
                               random_state=42, n_jobs=-1)
model.fit(x_train, y_train)
print(average_precision_score(y_test, model.predict_proba(x_test)[:, 1]))`
    },
    appliedExample: 'Comparar regressão logística calibrada, boosting e baseline por PR-AUC, custo e latência.',
    correctedApproach: 'Começar por baseline simples, validar hipóteses e slices, calibrar threshold e só aumentar complexidade se o ganho sobreviver.',
    decision: 'família de modelo conforme estrutura do sinal, volume, não linearidade, interpretação e SLO',
    hypothesis: 'a família escolhida captura interação real e supera baseline em dados fora do tempo sem degradar calibração',
    tradeoffs: ['Linear é rápido e explicável, mas limita interações.', 'Árvores lidam bem com tabular, mas extrapolam mal.', 'SVM escala mal em n grande e depende de kernel/escala.'],
    complexity: 'kNN treina barato e infere O(nd); árvores O(n log n); kernels podem exigir O(n²) memória e O(n³) treino.',
    productionImpact: 'Modelo mais complexo eleva latência, dependências, explicação e custo de retreino; ganho marginal precisa pagar essa dívida.',
    errors: ['Tuning no test set', 'Comparar modelos com preprocess diferente', 'Usar accuracy em desbalanceamento'],
    checklist: ['Baseline está registrado?', 'Hipóteses do modelo cabem no dado?', 'Validação imita o uso?', 'Threshold foi otimizado por custo?', 'Latência e explicação foram medidas?'],
    practice: {
      basic: 'Comparar viés indutivo de seis famílias em cenários dados.',
      intermediate: 'Treinar pipeline linear e ensemble com validação correta.',
      advanced: 'Executar nested CV, calibração e análise de erro por slice.',
      senior: 'Defender modelo mais simples contra ganho marginal de leaderboard.',
      expert: 'Implementar boosting simplificado e analisar sensibilidade/consistência.'
    },
    case: {
      title: 'Classificação com dados desbalanceados', context: 'Fraude representa 0,4%; accuracy de 99,6% esconde zero detecções.',
      symptoms: ['recall zero', 'threshold padrão', 'probabilidades não calibradas'],
      metrics: ['PR-AUC', 'recall sob orçamento', 'expected cost'], tools: ['curva PR', 'calibração', 'cost matrix'],
      rootCause: 'Baseline majoritário e métrica inadequada foram tratados como sucesso.', correction: 'Reformular custo, calibrar e selecionar threshold com validação temporal.'
    },
    books: [['hands-on-ml', 'Caps. 3–7'], ['esl', 'Caps. 3–13 e 15–16'], ['prml', 'Caps. 3–7']],
    sources: ['sklearn']
  },
  {
    number: 8, part: 'dados-ml', id: 'ml-nao-supervisionado', level: 'Intermediário → sênior',
    title: 'Machine learning não supervisionado',
    objective: 'Aplicar clustering, modelos de mistura, redução, detecção de anomalias e topic modeling com avaliação sem rótulo e validação downstream.',
    prerequisites: ['Álgebra linear', 'Probabilidade', 'Preparação de dados'],
    topics: ['k-means e clustering hierárquico', 'DBSCAN', 'Gaussian mixture models', 'PCA, t-SNE e UMAP', 'detecção de anomalias', 'autoencoders', 'association rules', 'topic modeling', 'similaridade', 'avaliação sem labels'],
    problem: 'Clusters sempre aparecem, mesmo sem estrutura útil; visualizações 2D e scores internos podem criar narrativas falsas.',
    intuition: 'Métodos não supervisionados impõem noções de proximidade, densidade ou geração. O resultado é uma hipótese de estrutura, não verdade descoberta.',
    mathematics: 'k-means minimiza soma de distâncias quadráticas aos centróides; GMM maximiza likelihood via EM; PCA maximiza variância projetada.',
    internals: ['k-means assume clusters aproximadamente esféricos.', 'DBSCAN usa densidade e marca ruído.', 't-SNE/UMAP preservam relações locais e não autorizam ler distâncias globais literalmente.'],
    conceptExample: 'Segmentação de clientes precisa provar estabilidade e ação diferenciada; silhouette alto não garante valor.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'scikit-learn>=1.9', gpu: 'Não',
      cost: 'k-means O(nkdi) para i iterações.', limitations: 'Silhouette favorece certas geometrias; valide estabilidade.',
      code: `from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
from sklearn.preprocessing import StandardScaler

x, _ = make_blobs(n_samples=500, centers=4, random_state=42)
x = StandardScaler().fit_transform(x)
model = KMeans(n_clusters=4, n_init='auto', random_state=42)
labels = model.fit_predict(x)
print({'inertia': model.inertia_, 'silhouette': silhouette_score(x, labels)})`
    },
    appliedExample: 'Agrupar incidentes por embeddings e validar com estabilidade, cobertura e redução real do tempo de triagem.',
    correctedApproach: 'Explicitar métrica/geometria, comparar null model, testar seeds e estabilidade, obter validação humana/downstream.',
    decision: 'método não supervisionado conforme geometria, densidade, escala, ruído e uso downstream',
    hypothesis: 'a estrutura permanece estável a seeds/amostras e melhora uma decisão ou tarefa downstream',
    tradeoffs: ['PCA é linear e interpretável; t-SNE/UMAP favorecem exploração.', 'DBSCAN encontra ruído, mas parâmetros dependem de escala.', 'Autoencoder aprende não linearidade, mas pode reconstruir anomalias.'],
    complexity: 'Hierárquico ingênuo O(n²) memória; DBSCAN varia com índice/dimensão; métodos de manifold podem ser caros.',
    productionImpact: 'IDs de cluster mudam entre treinos; consumers precisam de matching, versão e fallback.',
    errors: ['Interpretar projeção 2D como prova', 'Escolher k só por elbow', 'Não padronizar distância'],
    checklist: ['Distância faz sentido?', 'Resultado é estável?', 'Existe null model?', 'Há validação humana/downstream?', 'Versões de clusters são reconciliadas?'],
    practice: {
      basic: 'Explicar a geometria implícita de k-means, DBSCAN e GMM.',
      intermediate: 'Comparar três clusterizadores com escala e seeds.',
      advanced: 'Avaliar estabilidade por bootstrap e utilidade downstream.',
      senior: 'Impedir que uma projeção t-SNE vire segmentação de negócio sem evidência.',
      expert: 'Derivar EM para GMM e estudar identificabilidade/local optima.'
    },
    case: {
      title: 'Clusters “bonitos” não se repetem', context: 'Marketing define personas por uma projeção 2D que muda a cada execução.',
      symptoms: ['cores atraentes', 'baixa estabilidade', 'ações sem lift'],
      metrics: ['adjusted Rand entre seeds', 'silhouette', 'lift downstream'], tools: ['bootstrap', 'matching de centróides', 'teste controlado'],
      rootCause: 't-SNE foi tratado como clusterizador e a narrativa precedeu validação.', correction: 'Separar visualização de clustering, medir estabilidade e testar ação.'
    },
    books: [['hands-on-ml', 'Caps. 8–9'], ['esl', 'Cap. 14'], ['prml', 'Caps. 9 e 12'], ['deep-learning', 'Caps. 14–15']],
    sources: ['sklearn']
  },
  {
    number: 9, part: 'dados-ml', id: 'avaliacao-modelos', level: 'Intermediário → sênior',
    title: 'Avaliação de modelos',
    objective: 'Selecionar métricas, protocolo e threshold conforme decisão; estimar incerteza, calibração, fairness, slices e significância sem eleger uma métrica universal.',
    prerequisites: ['Probabilidade e estatística', 'ML supervisionado', 'Dados e leakage'],
    topics: ['confusion matrix', 'accuracy, precision, recall e specificity', 'F1, ROC-AUC e PR curve', 'log loss', 'MAE, MSE, RMSE, R² e MAPE', 'ranking metrics', 'calibration e confidence', 'cross-validation e stratification', 'validação temporal', 'threshold selection', 'significância', 'error analysis e slices', 'fairness metrics'],
    problem: 'O mesmo score pode esconder custo assimétrico, subgrupo prejudicado, probabilidade mal calibrada ou validação contaminada.',
    intuition: 'Métrica é função de decisão comprimida. Avaliação forte preserva cenário, incerteza e erro por segmento.',
    mathematics: 'Expected cost soma CᵢⱼP(ŷ=j,y=i); calibration exige P(Y=1|p≈q)≈q; PR é mais informativa com positivos raros.',
    internals: ['ROC varia threshold sem refletir prevalência diretamente.', 'PR baseline depende da prevalência.', 'Cross-validation estima variabilidade apenas sob esquema de amostragem válido.'],
    conceptExample: 'Threshold 0,5 não é neutro; ótimo depende de custo, capacidade de revisão e calibração.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'numpy>=2, scikit-learn>=1.9', gpu: 'Não',
      cost: 'Busca de threshold O(n log n) com ordenação.', limitations: 'Custos assumidos precisam de validação com stakeholders.',
      code: `import numpy as np
from sklearn.metrics import confusion_matrix

y_true = np.array([0, 0, 1, 1, 1, 0])
scores = np.array([.05, .35, .40, .62, .91, .55])
cost_fp, cost_fn = 1.0, 7.0
for threshold in np.linspace(0.1, 0.9, 9):
    tn, fp, fn, tp = confusion_matrix(
        y_true, scores >= threshold, labels=[0, 1]).ravel()
    cost = fp * cost_fp + fn * cost_fn
    print(round(float(threshold), 2), float(cost))`
    },
    appliedExample: 'Gate de crédito usa calibração, expected loss, fairness por grupo e fila máxima de revisão.',
    correctedApproach: 'Definir decisão e custo; congelar protocolo; reportar múltiplas métricas, intervalos, slices e análise qualitativa.',
    decision: 'métricas, threshold e validação conforme prevalência, custo do erro, tempo e capacidade operacional',
    hypothesis: 'o ganho persiste fora do tempo, nos slices críticos e após calibrar para a prevalência de produção',
    tradeoffs: ['Recall maior aumenta revisão/falso positivo.', 'Calibração pode reduzir discriminação marginal.', 'Fairness metrics podem ser matematicamente incompatíveis sob bases diferentes.'],
    complexity: 'Métricas básicas O(n); CV multiplica treino por folds; bootstrap multiplica avaliação por B.',
    productionImpact: 'Gate inadequado promove modelos que falham silenciosamente e dificulta rollback por ausência de baseline comparável.',
    errors: ['Test set reutilizado', 'Accuracy universal', 'Confidence do modelo como certeza'],
    checklist: ['Métrica representa a decisão?', 'Test set permanece intocado?', 'Há intervalo e slices?', 'Threshold cabe na operação?', 'Calibração e drift de prevalência foram considerados?'],
    practice: {
      basic: 'Calcular confusion matrix e métricas para thresholds diferentes.',
      intermediate: 'Construir curva PR, calibração e seleção por custo.',
      advanced: 'Comparar dois modelos com bootstrap pareado e slices.',
      senior: 'Criar um evaluation contract com gates e política de exceção.',
      expert: 'Analisar incompatibilidades de fairness e desenhar decisão multiobjetivo.'
    },
    case: {
      title: 'Modelo aprovado por uma única métrica', context: 'Novo ranker melhora NDCG médio, mas derruba conversão de novos usuários.',
      symptoms: ['média sobe', 'slice cold-start cai', 'latência aumenta'],
      metrics: ['NDCG@k', 'conversão por slice', 'p95 latency'], tools: ['paired bootstrap', 'slice dashboard', 'shadow test'],
      rootCause: 'Agregação ocultou regressão no slice e custo operacional.', correction: 'Adicionar gates por slice e latência; rollout canário com rollback.'
    },
    books: [['ai-engineering', 'Caps. 3–4 — Evaluation Methodology e Evaluate AI Systems'], ['designing-ml-systems', 'Cap. 6'], ['hands-on-ml', 'Caps. 2–3'], ['esl', 'Caps. 7–8']],
    sources: ['sklearn', 'modelcards']
  },
  {
    number: 10, part: 'deep-learning', id: 'deep-learning', level: 'Intermediário → sênior',
    title: 'Deep learning por dentro',
    objective: 'Implementar uma rede em NumPy e PyTorch, explicar forward/backprop, estabilizar treino e evoluir para loops reutilizáveis com GPU, AMP e distribuição.',
    prerequisites: ['Álgebra linear', 'Cálculo e otimização', 'Avaliação de modelos'],
    topics: ['perceptron e redes', 'camadas, pesos e bias', 'ativações e losses', 'forward e backprop', 'inicialização', 'dropout e regularização', 'batch norm e layer norm', 'residual connections', 'overfit e underfit', 'vanishing/exploding gradients', 'GPU e mixed precision', 'distributed training'],
    problem: 'Frameworks ocultam shapes, gradientes, modos train/eval, precisão e sincronização; falhas viram tentativa aleatória de hiperparâmetros.',
    intuition: 'Uma rede compõe transformações diferenciáveis; backprop distribui crédito pelo grafo; normalização e atalhos controlam escala e fluxo.',
    mathematics: 'Para z=W x+b e a=φ(z), ∂L/∂W=(∂L/∂z)xᵀ. Residual y=F(x)+x fornece caminho de gradiente identitário.',
    internals: ['Autograd registra operações e executa reverse-mode.', 'BatchNorm usa estatísticas diferentes em treino e inferência.', 'AMP combina dtypes e loss scaling para throughput sem overflow.'],
    conceptExample: 'Validação muda ao esquecer model.eval(): dropout continua ativo e BatchNorm atualiza estatísticas.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'torch>=2.13', gpu: 'Opcional',
      cost: 'Camada densa O(batch·din·dout); parâmetros O(din·dout).', limitations: 'CPU é suficiente para o exemplo; distribuição exige ambiente próprio.',
      code: `import torch
from torch import nn

torch.manual_seed(42)
x = torch.randn(128, 4)
y = (x[:, :1] * 2 - x[:, 1:2] > 0).float()
model = nn.Sequential(nn.Linear(4, 16), nn.ReLU(), nn.Linear(16, 1))
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-2)
for _ in range(100):
    optimizer.zero_grad(set_to_none=True)
    loss = nn.functional.binary_cross_entropy_with_logits(model(x), y)
    loss.backward()
    optimizer.step()
model.eval()
print(float(loss))`
    },
    appliedExample: 'Treino reutilizável registra seeds, config, grad norm, checkpoint, métricas de validação e device.',
    correctedApproach: 'Provar pipeline em batch pequeno, overfit de amostra, observar gradientes e só então escalar com AMP/distribuição.',
    decision: 'arquitetura, normalização, precisão e paralelismo conforme dado, estabilidade, VRAM e throughput',
    hypothesis: 'capacidade adicional captura sinal generalizável, não artefato, e o ganho paga custo de treino/serving',
    tradeoffs: ['Rede maior aumenta capacidade e custo.', 'Dropout regulariza, mas adiciona ruído.', 'AMP acelera, mas exige operações estáveis e validação numérica.'],
    complexity: 'Treino custa aproximadamente 2–3× o forward; estados Adam adicionam ~2× parâmetros; ativações crescem com batch e profundidade.',
    productionImpact: 'Mudança de modo, dtype ou checkpoint pode gerar regressão silenciosa; export e serving precisam de teste de paridade.',
    errors: ['Sem model.eval()', 'Gradiente não zerado', 'Split contaminado e seed incompleta'],
    checklist: ['Overfit de batch pequeno funciona?', 'Gradientes e ativações são finitos?', 'Train/eval está correto?', 'Checkpoint inclui optimizer/config?', 'Paridade de export foi testada?'],
    practice: {
      basic: 'Implementar forward e derivar backprop de MLP em NumPy.',
      intermediate: 'Treinar a mesma rede em PyTorch com testes de shape e seed.',
      advanced: 'Adicionar AMP, clipping justificado, checkpoints e tracking.',
      senior: 'Diagnosticar overfit/underfit e gargalo de GPU com evidência.',
      expert: 'Comparar DDP, FSDP e paralelismos sob perfil de memória/comunicação.'
    },
    case: {
      title: 'GPU subutilizada e treino instável', context: 'A100 fica em 25% enquanto data loader oscila e loss diverge.',
      symptoms: ['gaps entre kernels', 'CPU saturada', 'NaNs em FP16'],
      metrics: ['GPU utilization', 'samples/s', 'gradient norm'], tools: ['PyTorch profiler', 'nvidia-smi', 'trace de data loader'],
      rootCause: 'Input pipeline serial e operação instável em baixa precisão.', correction: 'Prefetch/pinned memory, vetorização e precisão seletiva com validação.'
    },
    books: [['deep-learning', 'Caps. 6–11'], ['hands-on-ml', 'Caps. 10–13'], ['prml', 'Cap. 5']],
    sources: ['pytorch', 'tensorflow']
  },
  {
    number: 11, part: 'deep-learning', id: 'visao-computacional', level: 'Intermediário → sênior',
    title: 'Visão computacional',
    objective: 'Projetar pipelines de classificação, detecção, segmentação e tracking; explicar convolução, transfer learning, ResNet e ViT e avaliar qualidade, viés e custo.',
    prerequisites: ['Deep learning', 'Tensores e GPU', 'Probabilidade e métricas'],
    topics: ['imagens como tensores', 'convolução, filtros e pooling', 'CNNs e augmentation', 'transfer learning', 'classificação', 'detecção', 'segmentação', 'object tracking', 'ResNet e EfficientNet', 'vision transformers', 'embeddings visuais', 'avaliação, viés e limites'],
    problem: 'Boa accuracy em imagens curadas não garante robustez a câmera, iluminação, domínio, objetos pequenos ou grupos sub-representados.',
    intuition: 'Convoluções exploram localidade e compartilhamento; transformers dividem a imagem em patches e aprendem relações globais.',
    mathematics: 'Convolução discreta soma kernel×janela; saída depende de kernel, stride, padding e dilation. IoU=|A∩B|/|A∪B|.',
    internals: ['Receptive field cresce por camadas.', 'Residual connections preservam caminho de informação.', 'Detecção combina localização, classificação e supressão de duplicatas.'],
    conceptExample: 'Um detector com mAP alto pode falhar em objetos pequenos; reporte AP por escala, classe e domínio.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'torch>=2.13', gpu: 'Opcional',
      cost: 'Convolução O(B·H·W·Cin·Cout·K²).', limitations: 'Rede mínima; não substitui dataset, augmentation e avaliação por domínio.',
      code: `import torch
from torch import nn

torch.manual_seed(42)
images = torch.randn(8, 3, 32, 32)
model = nn.Sequential(
    nn.Conv2d(3, 16, kernel_size=3, padding=1),
    nn.ReLU(),
    nn.AdaptiveAvgPool2d(1),
    nn.Flatten(),
    nn.Linear(16, 4),
)
logits = model(images)
assert logits.shape == (8, 4)
print(logits.shape)`
    },
    appliedExample: 'Inspeção industrial começa com transfer learning, split por lote/câmera e revisão humana para baixa confiança.',
    correctedApproach: 'Definir unidade de split e variação real, usar pretraining licenciado, avaliar slices e estabelecer fallback.',
    decision: 'CNN, ViT ou serviço conforme volume, resolução, latência, dados, licença e robustez',
    hypothesis: 'transfer learning melhora o slice crítico e mantém robustez sob mudança de câmera/ambiente',
    tradeoffs: ['CNN possui viés de localidade e eficiência.', 'ViT escala com dados/pretraining, mas attention cresce com patches.', 'Augmentation melhora robustez até distorcer o rótulo.'],
    complexity: 'Attention sobre P patches O(P²d); detecção aumenta custo por proposals/heads; resolução afeta custo quadraticamente.',
    productionImpact: 'Preprocess divergente, câmera nova e compressão mudam distribuição; monitorar imagem e resultado sem reter PII indevida.',
    errors: ['Split por frame vazando vídeo', 'Resize distorcendo objeto', 'mAP agregado sem slices'],
    checklist: ['Split separa origem física?', 'Preprocess é idêntico online?', 'Métrica cobre tamanho/classe?', 'Licença e privacidade estão registradas?', 'Há revisão/fallback?'],
    practice: {
      basic: 'Calcular shape e receptive field de uma CNN.',
      intermediate: 'Treinar classificador pequeno com transfer learning e seed.',
      advanced: 'Avaliar por câmera, escala e classe com análise de erro.',
      senior: 'Desenhar serving de detecção com budget de latência.',
      expert: 'Comparar CNN e ViT sob mesmo compute, dados e protocolo.'
    },
    case: {
      title: 'Modelo de visão falha na fábrica', context: 'Classificador treinado em laboratório perde recall após trocar câmera e iluminação.',
      symptoms: ['shift de cor', 'reflexo', 'queda por linha'],
      metrics: ['recall por câmera', 'ECE', 'latência'], tools: ['embedding drift', 'confusion slices', 'shadow capture'],
      rootCause: 'Dataset não cobria domínio e o split misturava frames do mesmo lote.', correction: 'Split por lote, coleta direcionada, augmentation validada e rollout shadow.'
    },
    books: [['hands-on-ml', 'Cap. 14 — Deep Computer Vision Using CNNs'], ['deep-learning', 'Caps. 9 e 12']],
    sources: ['pytorch', 'resnet', 'vit']
  },
  {
    number: 12, part: 'deep-learning', id: 'nlp', level: 'Intermediário → sênior',
    title: 'Processamento de linguagem natural',
    objective: 'Explicar a evolução de regras e contagens a embeddings, recorrência, attention e transformers; implementar e avaliar tarefas de texto com métricas adequadas.',
    prerequisites: ['Probabilidade', 'Deep learning', 'Avaliação'],
    topics: ['normalização e tokenização', 'stemming e lematização', 'bag of words, TF-IDF e n-grams', 'Word2Vec, GloVe e FastText', 'RNN, LSTM e GRU', 'attention e transformers', 'classification e NER', 'question answering e sumarização', 'tradução e recuperação', 'métricas de NLP'],
    problem: 'Pipeline moderno pode ser pior que TF-IDF quando dado é pequeno, domínio específico, latência restrita ou avaliação mal formulada.',
    intuition: 'NLP converte símbolos em representações; a história avança de contagem local a contexto distribuído e atenção paralela.',
    mathematics: 'TF-IDF pondera frequência local por raridade; skip-gram aproxima coocorrência; recurrent state resume prefixo; attention pondera contexto.',
    internals: ['Tokenização define a unidade modelada.', 'OOV afeta métodos por palavra; subwords reduzem OOV.', 'Geração e classificação exigem protocolos/métricas diferentes.'],
    conceptExample: 'NER deve avaliar span e tipo, não accuracy por token dominada por “O”.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'scikit-learn>=1.9', gpu: 'Não',
      cost: 'TF-IDF esparso O(tokens); linear O(nnz).', limitations: 'Não modela ordem longa ou semântica contextual.',
      code: `from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import make_pipeline

texts = ['erro no pagamento', 'pedido entregue', 'cartao recusado',
         'entrega atrasada', 'pagamento duplicado', 'produto recebido']
labels = ['billing', 'delivery', 'billing', 'delivery', 'billing', 'delivery']
model = make_pipeline(TfidfVectorizer(ngram_range=(1, 2)),
                      LogisticRegression(random_state=42))
model.fit(texts, labels)
print(model.predict(['cobranca no cartao']))`
    },
    appliedExample: 'Roteamento de chamados compara regra, TF-IDF e encoder contextual com avaliação por intenção e idioma.',
    correctedApproach: 'Criar baseline lexical, definir unidade/métrica e só usar modelo contextual se erro, robustez e custo melhorarem.',
    decision: 'representação e arquitetura conforme tarefa, corpus, contexto, idioma, latência e explicabilidade',
    hypothesis: 'contextualização resolve ambiguidades reais não cobertas pelo baseline lexical e mantém desempenho por idioma',
    tradeoffs: ['TF-IDF é rápido e auditável.', 'Embeddings densos capturam semântica, mas podem perder termos exatos.', 'Modelos grandes elevam qualidade potencial e custo/variância.'],
    complexity: 'n-grams expandem vocabulário; RNN é sequencial O(n); attention densa é O(n²d).',
    productionImpact: 'Mudança de linguagem, gíria e tokenizador altera qualidade; monitore cobertura e erro qualitativo.',
    errors: ['Normalização destrutiva', 'BLEU/F1 sem contexto de tarefa', 'Test data perto do treino'],
    checklist: ['Baseline lexical existe?', 'Tokenização foi inspecionada?', 'Métrica é por span/sequence?', 'Idiomas e domínios têm slices?', 'PII foi tratada?'],
    practice: {
      basic: 'Construir TF, IDF e n-grams manualmente.',
      intermediate: 'Treinar baseline TF-IDF e analisar top features.',
      advanced: 'Comparar baseline e transformer com custo e intervalos.',
      senior: 'Diagnosticar queda por idioma/domínio e propor coleta.',
      expert: 'Reproduzir uma técnica de representação com ablações.'
    },
    case: {
      title: 'Classificador NLP falha fora do domínio', context: 'Modelo treinado em tickets internos é aplicado a chat informal.',
      symptoms: ['OOV/subwords raros', 'queda por intenção', 'calibração ruim'],
      metrics: ['macro-F1', 'ECE', 'coverage'], tools: ['token audit', 'error taxonomy', 'embedding drift'],
      rootCause: 'Domínio e registro linguístico não estavam no corpus.', correction: 'Coleta/rotulagem direcionada, baseline híbrido e abstention.'
    },
    books: [['nlp-transformers', 'Caps. 1–7'], ['hands-on-ml', 'Caps. 15–16'], ['deep-learning', 'Caps. 10 e 12']],
    sources: ['cs224n', 'transformers']
  },
  {
    number: 13, part: 'deep-learning', id: 'transformers', level: 'Avançado → expert',
    title: 'Transformers e mecanismos de atenção',
    objective: 'Derivar e implementar self-attention, máscaras e multi-head attention; explicar tokenização, posições, encoder/decoder, treino, inferência, complexidade e limites.',
    prerequisites: ['Álgebra linear', 'Deep learning', 'NLP'],
    topics: ['self-attention e scaled dot-product', 'query, key e value', 'multi-head attention', 'positional encoding', 'embeddings', 'encoder e decoder', 'máscaras causais e padding', 'feed-forward, residual e layer norm', 'BPE, WordPiece e SentencePiece', 'context window', 'causal e bidirectional attention', 'treino, inferência e complexidade'],
    problem: 'Usar Transformer sem entender máscara, forma e custo causa vazamento futuro, OOM, outputs inválidos e comparação injusta.',
    intuition: 'Cada token consulta quais outros tokens são relevantes; Q formula a consulta, K indexa e V carrega o conteúdo agregado.',
    mathematics: 'Attention(Q,K,V)=softmax(QKᵀ/√dₖ+M)V. Escala evita logits extremos; M exclui posições proibidas.',
    internals: ['Heads projetam subespaços diferentes.', 'Posição precisa entrar porque attention pura é permutation-equivariant.', 'Decoder causal calcula prefixos e pode reutilizar KV cache.'],
    conceptExample: 'Máscara causal ausente deixa o token ver o futuro e reduz artificialmente a loss de treino.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'numpy>=2', gpu: 'Não',
      cost: 'Attention densa O(n²d) e memória O(n²).', limitations: 'Implementação single-head sem backward, batching ou estabilidade completa.',
      code: `import numpy as np

def softmax(x: np.ndarray) -> np.ndarray:
    shifted = x - x.max(axis=-1, keepdims=True)
    exp = np.exp(shifted)
    return exp / exp.sum(axis=-1, keepdims=True)

def causal_attention(q: np.ndarray, k: np.ndarray, v: np.ndarray) -> np.ndarray:
    scores = q @ k.T / np.sqrt(q.shape[-1])
    mask = np.triu(np.full_like(scores, -np.inf), k=1)
    return softmax(scores + mask) @ v

rng = np.random.default_rng(42)
x = rng.normal(size=(4, 8))
print(causal_attention(x, x, x).shape)`
    },
    appliedExample: 'Auditar modelo de séries: garantir máscara causal, padding correto e ausência de target no contexto.',
    correctedApproach: 'Testar atenção em sequência mínima, visualizar pesos/máscara, medir memória por comprimento e validar paridade.',
    decision: 'arquitetura e padrão de atenção conforme contexto, causalidade, qualidade, memória e hardware',
    hypothesis: 'dependências de longo alcance justificam attention e o ganho permanece sob contexto e custo controlados',
    tradeoffs: ['Contexto maior cobre mais informação, mas custa memória/latência.', 'Mais heads aumentam capacidade, não garantem diversidade.', 'Tokenização compacta reduz sequência, mas depende de domínio/idioma.'],
    complexity: 'Attention densa cresce quadraticamente em tokens; FFN geralmente O(nddff); KV cache cresce O(layers·tokens·heads·head_dim).',
    productionImpact: 'Comprimento e tokenizer alteram custo por request; mascaramento e truncamento devem ser testados como contratos.',
    errors: ['Máscara invertida', 'Softmax instável', 'Misturar tokenizer/modelo'],
    checklist: ['Shapes Q/K/V estão explícitos?', 'Máscara foi testada?', 'Posições são representadas?', 'Token budget inclui saída?', 'Complexidade cabe no SLO?'],
    practice: {
      basic: 'Calcular attention de três tokens à mão.',
      intermediate: 'Implementar attention causal estável em NumPy.',
      advanced: 'Adicionar multi-head, padding e testes de invariantes.',
      senior: 'Perfil de memória/latência por contexto e batch.',
      expert: 'Comparar atenção densa e esparsa com protocolo e erro controlados.'
    },
    case: {
      title: 'Loss irreal por vazamento causal', context: 'Modelo de previsão apresenta loss quase zero e falha em autoregressão.',
      symptoms: ['treino perfeito', 'inferência degrada passo a passo', 'atenção ao futuro'],
      metrics: ['teacher-forced loss', 'free-running error', 'memory/token'], tools: ['mask unit tests', 'attention visualization', 'ablation'],
      rootCause: 'Máscara causal não foi aplicada no treino.', correction: 'Corrigir máscara, validar autoregressão e reconstruir baseline.'
    },
    books: [['nlp-transformers', 'Cap. 3 — Transformer Anatomy e cap. 5'], ['hands-on-ml', 'Cap. 16']],
    sources: ['attention', 'transformers', 'cs224n']
  },
  {
    number: 14, part: 'generativa', id: 'llms', level: 'Avançado → expert',
    title: 'Large Language Models',
    objective: 'Explicar pretraining, post-training, alignment e inferência de LLMs; selecionar decoding, cache, quantização, distillation, sparsity e MoE com limites e avaliação.',
    prerequisites: ['Transformers', 'Probabilidade', 'Sistemas e GPU básicos'],
    topics: ['foundation models e pretraining', 'next-token e masked LM', 'instruction/SFT', 'preference optimization, RLHF e DPO', 'alignment', 'decoding: temperature, top-k, top-p e beam', 'repetition penalty', 'context window e KV cache', 'quantization e distillation', 'sparsity e mixture of experts', 'hallucination e emergent behavior', 'scaling laws', 'benchmarks e limites'],
    problem: 'Capacidade aparente é confundida com confiabilidade; benchmark público e tamanho viram argumento sem custo, licença, contexto ou avaliação do produto.',
    intuition: 'LLM estima distribuição de próximos tokens; post-training molda comportamento, não injeta garantia de verdade.',
    mathematics: 'Pretraining minimiza −Σ log pθ(xₜ|x<t). Temperature divide logits; top-p restringe a menor massa acumulada ≥p.',
    internals: ['KV cache evita recomputar K/V do prefixo.', 'Quantização reduz bytes/op com erro.', 'MoE ativa subconjunto de parâmetros, mas paga roteamento e comunicação.'],
    conceptExample: 'Baixar temperature reduz aleatoriedade, não transforma probabilidade linguística em factualidade.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'numpy>=2', gpu: 'Não',
      cost: 'Sampling O(V) por token sem otimização; decode é memory-bandwidth bound.', limitations: 'Distribuição toy; serving real usa kernels e batching especializados.',
      code: `import numpy as np

def sample(logits: np.ndarray, temperature: float, seed: int = 42) -> int:
    if temperature <= 0:
        return int(np.argmax(logits))
    scaled = logits / temperature
    probs = np.exp(scaled - scaled.max())
    probs /= probs.sum()
    return int(np.random.default_rng(seed).choice(len(logits), p=probs))

logits = np.array([2.0, 1.2, -0.5])
print(sample(logits, temperature=0.7))`
    },
    appliedExample: 'Selecionar modelo para assistente: conjunto dourado, licença, idioma, custo/token, TTFT, throughput, groundedness e risco.',
    correctedApproach: 'Estabelecer tarefa e eval local; comparar modelo pequeno/grande e API/self-host; versionar modelo, prompt e parâmetros.',
    decision: 'modelo, post-training e serving conforme qualidade local, licença, privacidade, latência, throughput e TCO',
    hypothesis: 'o modelo escolhido melhora task success local o suficiente para pagar custo e controles adicionais',
    tradeoffs: ['Modelo maior tende a custar mais e não domina todo domínio.', 'Quantização reduz memória, mas pode degradar tarefas sensíveis.', 'MoE aumenta parâmetros sem FLOPs proporcionais, porém complica serving.'],
    complexity: 'Pretraining escala com tokens×parâmetros; atenção O(n²); decode com KV cache evita prefixo, mas cache cresce linearmente.',
    productionImpact: 'Versão silenciosa, quota e preço alteram comportamento e TCO; pin, eval de regressão e fallback são obrigatórios.',
    errors: ['Benchmark sem versão/hardware', 'Contexto como banco de dados', 'Confiança textual como probabilidade calibrada'],
    checklist: ['Eval local existe?', 'Versão/licença estão fixas?', 'Parâmetros de decoding são testados?', 'Custo e SLO foram medidos?', 'Fallback e limites estão claros?'],
    practice: {
      basic: 'Explicar efeitos de temperature, top-k e top-p.',
      intermediate: 'Implementar sampling e medir diversidade/repetição.',
      advanced: 'Comparar dois modelos com dataset local, latência e custo.',
      senior: 'Desenhar serving com KV cache, batching e fallback.',
      expert: 'Analisar scaling, MoE e quantização com ablação por tarefa.'
    },
    case: {
      title: 'Chatbot com alucinações e custo alto', context: 'Modelo grande responde fluentemente, mas inventa políticas e excede orçamento.',
      symptoms: ['factualidade baixa', 'contexto longo', 'tokens desnecessários'],
      metrics: ['faithfulness', 'cost/success', 'TTFT e p95'], tools: ['golden set', 'trace por token', 'ablation de modelo'],
      rootCause: 'Modelo foi escolhido por benchmark público sem grounding ou eval local.', correction: 'Modelo menor + RAG autorizado + abstention e eval de regressão.'
    },
    books: [['ai-engineering', 'Caps. 1–4 e 9'], ['nlp-transformers', 'Caps. 5, 8 e 10–11']],
    sources: ['transformers', 'dpo', 'switch', 'pytorch']
  },
  {
    number: 15, part: 'generativa', id: 'prompt-engineering', level: 'Intermediário → sênior',
    title: 'Engenharia de prompts',
    objective: 'Projetar instruções, contexto, restrições, exemplos, structured output e tool calling como contratos versionados, testáveis e observáveis, sem depender de raciocínio privado.',
    prerequisites: ['LLMs', 'Testes e APIs', 'Noções de segurança'],
    topics: ['instruções, contexto e restrições', 'zero-shot e few-shot', 'decomposição', 'structured output', 'tool calling', 'self-consistency', 'chain-of-thought como mecanismo interno', 'prompt injection', 'avaliação e versionamento', 'testes, observabilidade e templates', 'limites'],
    problem: 'Prompt artesanal funciona em exemplos escolhidos e quebra em variação, mudança de modelo, input hostil ou schema.',
    intuition: 'Prompt é parte do programa: contrato probabilístico com entradas, saída verificável, versão e teste de regressão.',
    mathematics: 'A saída é amostrada de p(y|prompt,x); pequenas mudanças alteram a distribuição. Repetição e voto custam k× e reduzem apenas certos erros.',
    internals: ['System/developer/user têm precedência na aplicação, não verdade absoluta dentro do modelo.', 'Schema precisa de validação externa.', 'Tool calling propõe argumentos; autorização pertence ao sistema.'],
    conceptExample: 'Solicitar JSON não garante JSON válido; valide schema, tipos, limites e permissão antes do efeito.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'Somente biblioteca padrão', gpu: 'Não',
      cost: 'Validação O(n) no tamanho da saída.', limitations: 'Não chama modelo; demonstra contrato e rejeição.',
      code: `import json

def parse_decision(raw: str) -> dict:
    data = json.loads(raw)
    if set(data) != {'action', 'confidence'}:
        raise ValueError('unexpected schema')
    if data['action'] not in {'approve', 'review', 'reject'}:
        raise ValueError('invalid action')
    confidence = float(data['confidence'])
    if not 0.0 <= confidence <= 1.0:
        raise ValueError('invalid confidence')
    return {'action': data['action'], 'confidence': confidence}

print(parse_decision('{"action":"review","confidence":0.62}'))`
    },
    appliedExample: 'Extrator versiona template, modelo, schema e golden set; outputs inválidos vão para fallback sem executar tool.',
    correctedApproach: 'Separar instrução de dado, exigir saída pequena e verificável, testar adversarialmente e autorizar efeitos fora do modelo.',
    decision: 'template, exemplos e decomposição conforme variância, auditabilidade, custo e risco de entrada',
    hypothesis: 'a mudança de prompt melhora task success no conjunto congelado sem elevar custo, violações ou regressões por slice',
    tradeoffs: ['Few-shot melhora formato, mas consome contexto.', 'Self-consistency aumenta custo.', 'Decomposição facilita auditoria, mas propaga erros entre etapas.'],
    complexity: 'Custo cresce com tokens de entrada/saída e número de chamadas; self-consistency multiplica chamadas por k.',
    productionImpact: 'Prompt é versão de código e dado; mudança sem eval pode alterar comportamento, custo e segurança.',
    errors: ['Confiar em formato textual', 'Misturar conteúdo não confiável com instrução', 'Pedir raciocínio privado'],
    checklist: ['Prompt/modelo têm versão?', 'Saída tem schema validado?', 'Golden/adversarial set existe?', 'Tools revalidam autorização?', 'Tokens e falhas são observados?'],
    practice: {
      basic: 'Transformar pedido vago em contrato de entrada/saída.',
      intermediate: 'Criar validador e testes de regressão para structured output.',
      advanced: 'Executar ablação zero/few-shot e decomposição com custo.',
      senior: 'Desenhar defesa contra injection indireta sem confiar no prompt.',
      expert: 'Modelar incerteza e política de fallback sob mudança de modelo.'
    },
    case: {
      title: 'Prompt funciona no notebook e quebra em produção', context: 'Extrator retorna formatos variados após atualização do provedor.',
      symptoms: ['JSON inválido', 'campos extras', 'tool errada'],
      metrics: ['schema pass rate', 'task success', 'cost/call'], tools: ['golden tests', 'trace', 'schema validator'],
      rootCause: 'Contrato era textual, sem pin de versão ou validação externa.', correction: 'Schema estrito, versionamento, eval gate e fallback.'
    },
    books: [['ai-engineering', 'Cap. 5 — Prompt Engineering'], ['ml-powered-apps', 'Caps. 5–6 — avaliação e debugging']],
    sources: ['owasp']
  },
  {
    number: 16, part: 'generativa', id: 'embeddings-busca', level: 'Avançado → expert',
    title: 'Embeddings e busca vetorial',
    objective: 'Projetar representação e busca exata/aproximada; escolher métrica, HNSW, IVF/PQ, filtros, hybrid search e reranking por recall, latência, memória e operação.',
    prerequisites: ['Álgebra linear', 'NLP/Transformers', 'Bancos e índices'],
    topics: ['representação e similaridade semântica', 'cosseno, dot product e Euclidiana', 'dimensão e normalização', 'modelos e chunk/document embeddings', 'embeddings multimodais', 'ANN e vector indexes', 'HNSW', 'IVF e product quantization', 'recall, latência e memória', 'filtros', 'hybrid search e reranking', 'FAISS, pgvector, Elasticsearch, OpenSearch, Milvus, Weaviate, Pinecone e Qdrant'],
    problem: 'Banco vetorial é escolhido antes do workload; recall ruim é atribuído ao modelo sem separar embedding, índice, filtro e corpus.',
    intuition: 'Embedding mapeia itens para uma geometria; ANN troca exatidão por custo; híbrido combina semântica e termos exatos.',
    mathematics: 'Cosine e dot coincidem para vetores L2-normalizados. HNSW navega camadas de grafo; PQ aproxima vetores por códigos de subespaços.',
    internals: ['HNSW oferece alto recall, mas índice em memória e atualização custosa.', 'IVF limita busca a células.', 'Reranker reavalia poucos candidatos com modelo mais caro.'],
    conceptExample: 'Código de erro exato pode sumir na busca semântica; BM25+híbrido recupera termo, reranker ordena contexto.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'numpy>=2', gpu: 'Não',
      cost: 'Busca exata O(nd); memória O(nd).', limitations: 'Não implementa ANN; serve como oracle de recall.',
      code: `import numpy as np

documents = np.array([[1., 0.], [.8, .2], [0., 1.]], dtype=np.float32)
query = np.array([.9, .1], dtype=np.float32)
documents /= np.linalg.norm(documents, axis=1, keepdims=True)
query /= np.linalg.norm(query)
scores = documents @ query
top = np.argsort(-scores)[:2]
print([(int(i), float(scores[i])) for i in top])`
    },
    appliedExample: 'Selecionar pgvector para escala moderada/transacional ou serviço dedicado quando QPS, corpus e operação justificarem.',
    correctedApproach: 'Criar oracle exato e conjunto de relevância; medir recall@k, p95 e memória; só então escolher índice/produto.',
    decision: 'motor e índice conforme corpus, dimensão, QPS, filtros, atualização, recall, equipe e TCO',
    hypothesis: 'ANN/híbrido mantém recall mínimo no conjunto dourado dentro do SLO e orçamento',
    tradeoffs: ['Mais probes/ef_search aumenta recall e latência.', 'PQ reduz memória e precisão.', 'Serviço gerenciado reduz operação e aumenta lock-in/custo.'],
    complexity: 'Exato O(nd); HNSW esperado sublinear, mas dependente de dados/parâmetros; índice ocupa vetores+grafo.',
    productionImpact: 'Reindexação, consistência de filtros, tenancy e versões de embedding afetam disponibilidade e segurança.',
    errors: ['Trocar modelo sem reindexar', 'Avaliar só latência', 'Filtro aplicado após top-k'],
    checklist: ['Oracle e qrels existem?', 'Métrica/normalização coincidem?', 'Filtros entram na busca?', 'Versão do embedding está no índice?', 'Recall×p95×memória foi medido?'],
    practice: {
      basic: 'Comparar cosseno, dot e Euclidiana com/sem normalização.',
      intermediate: 'Implementar oracle e recall@k.',
      advanced: 'Benchmark HNSW/IVF/PQ com filtros e memória.',
      senior: 'Criar matriz FAISS/pgvector/search engine/vector DB por workload.',
      expert: 'Modelar capacidade, reindexação e isolamento multi-tenant.'
    },
    case: {
      title: 'Busca vetorial rápida e irrelevante', context: 'p95 é baixo, mas respostas usam documentos errados.',
      symptoms: ['recall@10 baixo', 'filtros pós-busca', 'índice antigo'],
      metrics: ['recall@k', 'MRR', 'p95 e RAM'], tools: ['oracle exato', 'qrels', 'index audit'],
      rootCause: 'Índice e métrica não correspondiam ao embedding; filtro reduzia candidatos após top-k.', correction: 'Reindexar com contrato, pré-filtrar e recalibrar parâmetros.'
    },
    books: [['ai-engineering', 'Cap. 6 — RAG and Agents'], ['ml-design-patterns', 'Cap. 2 — Representational Design Patterns'], ['nlp-transformers', 'Caps. 1 e 7']],
    sources: ['hnsw', 'faiss']
  },
  {
    number: 17, part: 'generativa', id: 'rag', level: 'Avançado → expert',
    title: 'Retrieval-Augmented Generation',
    objective: 'Projetar RAG ponta a ponta com ingestão, chunking, retrieval, reranking, citações, avaliação, autorização, observabilidade, atualização e defesa contra conteúdo hostil.',
    prerequisites: ['Embeddings e busca', 'LLMs e prompts', 'Segurança de aplicações'],
    topics: ['ingestão, parsing e normalização', 'chunking, overlap e metadata', 'embeddings e indexação', 'retrieval híbrido e reranking', 'context construction e prompting', 'citações e grounding', 'avaliação e observabilidade', 'permissões e segurança', 'atualização e versionamento', 'caching, latência e custo', 'documentos duplicados/desatualizados', 'prompt injection indireta e vazamento'],
    problem: 'Adicionar documentos ao prompt não garante resposta correta; retrieval ruim, autorização falha e contexto hostil propagam erro e vazamento.',
    intuition: 'RAG é sistema de busca com geração condicionada. Avalie retrieval e answer separadamente antes de otimizar o conjunto.',
    mathematics: 'Recall@k mede evidência recuperada; reranking estima relevância; geração condiciona p(y|x,context), mas não garante entailment.',
    internals: ['Chunking define unidade de recuperação.', 'Metadata aplica escopo/ACL antes do ranking.', 'Citação precisa mapear afirmação a trecho versionado.'],
    conceptExample: 'Contexto longo com 20 chunks irrelevantes reduz atenção à evidência; mais contexto pode piorar.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'Somente biblioteca padrão', gpu: 'Não',
      cost: 'Toy retrieval O(n); produção depende do índice e reranker.', limitations: 'Geração é substituída por resposta extrativa para preservar executabilidade offline.',
      code: `from dataclasses import dataclass

@dataclass(frozen=True)
class Chunk:
    text: str
    tenant: str

def retrieve(query: str, chunks: list[Chunk], tenant: str) -> list[Chunk]:
    terms = set(query.lower().split())
    allowed = [c for c in chunks if c.tenant == tenant]
    return sorted(allowed, key=lambda c: -len(terms & set(c.text.lower().split())))[:2]

corpus = [Chunk('rollback exige versão anterior', 'a'), Chunk('segredo interno', 'b')]
print(retrieve('como fazer rollback', corpus, tenant='a'))`
    },
    appliedExample: 'Assistente interno filtra tenant/document ACL antes de recuperar, cita versão e recusa sem evidência suficiente.',
    correctedApproach: 'Definir qrels e autorização; medir parsing→retrieval→rerank→answer; tratar documento como dado não confiável.',
    decision: 'RAG, contexto fixo, busca tradicional ou fine-tuning conforme atualização, provenance, volume e latência',
    hypothesis: 'evidência recuperada melhora task success e factualidade sem violar ACL nem ultrapassar SLO',
    tradeoffs: ['Chunk pequeno aumenta precisão e perde contexto.', 'Reranker melhora ordem e adiciona latência.', 'Cache reduz custo, mas precisa incluir identidade, versão e permissão.'],
    complexity: 'Custo total = ingestão + indexação + retrieval + rerank + tokens; latência de cauda soma etapas dependentes.',
    productionImpact: 'Fonte desatualizada ou ACL incorreta é incidente de dado/segurança; provenance e purge precisam de runbook.',
    errors: ['Chunks por tamanho apenas', 'Top-k fixo sem avaliação', 'Autorização depois do retrieval'],
    checklist: ['Qrels e golden answers existem?', 'ACL entra antes da busca?', 'Fonte/versão são citadas?', 'Injection de documento é tratada?', 'Retrieval e geração são medidos separadamente?'],
    practice: {
      basic: 'Diagnosticar cinco falhas por etapa do pipeline.',
      intermediate: 'Construir retrieval híbrido com ACL e citações.',
      advanced: 'Avaliar chunking/reranking por recall, faithfulness, custo e p95.',
      senior: 'Desenhar atualização, purge, cache seguro e observabilidade.',
      expert: 'Executar ablação end-to-end e modelar risco de evidência conflitante.'
    },
    case: {
      title: 'RAG recupera documentos irrelevantes', context: 'Assistente cita páginas plausíveis, mas de versão e área erradas.',
      symptoms: ['duplicatas', 'ACL pós-filtro', 'chunks sem cabeçalho'],
      metrics: ['context recall', 'context precision', 'faithfulness'], tools: ['qrels', 'trace de retrieval', 'dedupe/hash'],
      rootCause: 'Parsing removeu estrutura; índice misturou versões e ACL.', correction: 'Chunking semântico, metadata/versionamento, pré-filtro e reranking.'
    },
    books: [['ai-engineering', 'Cap. 6 — RAG and Agents'], ['nlp-transformers', 'Cap. 7 — Question Answering'], ['designing-ml-systems', 'Caps. 3, 7 e 8']],
    sources: ['rag', 'hnsw', 'owasp']
  },
  {
    number: 18, part: 'generativa', id: 'agentes', level: 'Avançado → expert',
    title: 'Agentes de IA',
    objective: 'Distinguir agente, chatbot, workflow, pipeline e automação; projetar estado, tools, limites, observabilidade, human-in-the-loop e proteção contra loops.',
    prerequisites: ['LLMs, prompts e RAG', 'APIs e state machines', 'Segurança'],
    topics: ['agentes e planejamento', 'memória e ferramentas', 'tool calling', 'workflows e state machines', 'reflexão', 'multi-agent systems', 'delegação e orchestration', 'guardrails e human-in-the-loop', 'avaliação e observabilidade', 'loops, custos, segurança e limites'],
    problem: 'Autonomia aumenta espaço de estados e efeitos; um workflow previsível vira loop caro e perigoso quando controle é delegado sem necessidade.',
    intuition: 'Agente seleciona próximas ações sob estado parcial. Toda ação deve passar por política determinística de permissão, orçamento e validação.',
    mathematics: 'Modele como política π(a|s) com estado, transição, custo e terminal. Orçamento impõe Σcost(aₜ)≤B e max_steps.',
    internals: ['LLM propõe; orchestrator valida e executa.', 'Memória é dado versionado, não consciência.', 'Multi-agent aumenta comunicação e falhas sem garantir ganho.'],
    conceptExample: 'Agendar reunião exige confirmação humana; gerar rascunho pode ser automático; pagamento requer autorização separada.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'Somente biblioteca padrão', gpu: 'Não',
      cost: 'O(max_steps); custo externo limitado por budget.', limitations: 'State machine determinística; LLM seria apenas proposer.',
      code: `from enum import Enum

class State(Enum):
    PLAN = 'plan'
    REVIEW = 'review'
    DONE = 'done'

def run(max_steps: int = 3) -> State:
    state = State.PLAN
    for _ in range(max_steps):
        if state is State.PLAN:
            state = State.REVIEW
        elif state is State.REVIEW:
            return State.DONE  # ponto de aprovação humana
    raise RuntimeError('step budget exceeded')

print(run().value)`
    },
    appliedExample: 'Agente de suporte pode consultar e rascunhar; reembolso é tool com RBAC, limite e confirmação.',
    correctedApproach: 'Usar workflow quando passos são conhecidos; se agente for necessário, limitar tools, passos, custo e efeitos com aprovação.',
    decision: 'workflow determinístico, agente único ou multi-agent conforme incerteza real, reversibilidade e valor',
    hypothesis: 'planejamento dinâmico resolve variação não enumerável e melhora task success após contabilizar custo e falhas',
    tradeoffs: ['Agente cobre caminhos abertos, mas reduz previsibilidade.', 'Multi-agent especializa papéis e multiplica coordenação.', 'HITL reduz risco e aumenta latência.'],
    complexity: 'Branching de ações cresce exponencialmente com horizonte; retries e reflexão multiplicam chamadas/tokens.',
    productionImpact: 'Loops, tool abuse e estado corrompido exigem idempotência, budgets, tracing e kill switch.',
    errors: ['Agente para fluxo fixo', 'Tool com privilégio amplo', 'Memória sem tenant/TTL'],
    checklist: ['Por que workflow não basta?', 'Tools aplicam RBAC e validação?', 'Há max_steps/budget/timeouts?', 'Efeitos são idempotentes?', 'Existe aprovação e kill switch?'],
    practice: {
      basic: 'Classificar dez soluções como função, pipeline, workflow, chatbot ou agente.',
      intermediate: 'Implementar state machine com budget e idempotência.',
      advanced: 'Testar loops, tool errors e injection com traces.',
      senior: 'Desenhar HITL e autorização por efeito.',
      expert: 'Comparar agente e workflow em task success, custo e previsibilidade.'
    },
    case: {
      title: 'Agente preso em loop', context: 'Agente repete busca e reflexão por 20 minutos sem concluir.',
      symptoms: ['mesma tool', 'tokens crescentes', 'estado não avança'],
      metrics: ['steps/task', 'cost/success', 'loop rate'], tools: ['distributed trace', 'state snapshot', 'budget guard'],
      rootCause: 'Sem condição terminal, dedupe de ações ou limite.', correction: 'FSM explícita, max_steps, detecção de repetição e escalonamento humano.'
    },
    books: [['ai-engineering', 'Cap. 6 — RAG and Agents'], ['designing-ml-systems', 'Caps. 7 e 11']],
    sources: ['owasp', 'nist']
  },
  {
    number: 19, part: 'generativa', id: 'fine-tuning', level: 'Avançado → expert',
    title: 'Fine-tuning e adaptação',
    objective: 'Decidir entre prompting, RAG, SFT, LoRA/QLoRA, adapters e treino do zero; curar dados, evitar forgetting, avaliar e servir adapters com custo explícito.',
    prerequisites: ['LLMs e avaliação', 'Otimização', 'GPU/memória básica'],
    topics: ['fine-tuning completo e transfer learning', 'SFT e instruction tuning', 'LoRA e QLoRA', 'adapters', 'prompt e prefix tuning', 'data curation e formatação', 'treino e validação', 'overfitting e catastrophic forgetting', 'avaliação e serving', 'quantization e custos', 'prompt × RAG × tuning × do zero'],
    problem: 'Fine-tuning é usado para “ensinar fatos” atualizáveis ou corrigir RAG ruim; custo e regressão aparecem sem ganho local.',
    intuition: 'Tuning desloca comportamento paramétrico; RAG injeta conhecimento atual e citável; prompting especifica tarefa sem alterar pesos.',
    mathematics: 'LoRA parametriza ΔW=BA com rank r≪d; treina O(r(din+dout)) parâmetros em vez de din·dout.',
    internals: ['QLoRA congela base quantizada e treina adapters.', 'SFT aprende padrão do dataset e seus vieses.', 'Servir muitos adapters compartilha base, mas exige roteamento/versionamento.'],
    conceptExample: 'Formato e tom recorrentes favorecem SFT; políticas que mudam e exigem citação favorecem RAG.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'torch>=2.13', gpu: 'Opcional',
      cost: 'LoRA O(r(din+dout)) parâmetros treináveis.', limitations: 'Demonstra camada low-rank, não treina um LLM.',
      code: `import torch
from torch import nn

torch.manual_seed(42)
base = nn.Linear(8, 8, bias=False)
for parameter in base.parameters():
    parameter.requires_grad = False
a = nn.Parameter(torch.zeros(2, 8))
b = nn.Parameter(torch.zeros(8, 2))
x = torch.randn(4, 8)
output = base(x) + (x @ a.T) @ b.T
assert output.shape == (4, 8)
print(sum(p.numel() for p in (a, b)))`
    },
    appliedExample: 'Adapter por domínio melhora formato e vocabulário; fatos continuam no RAG versionado.',
    correctedApproach: 'Estabelecer prompt/RAG baseline, definir comportamento-alvo e eval de regressão; treinar menor adaptação que prova ganho.',
    decision: 'prompt, RAG, PEFT, full fine-tuning ou pretraining conforme tipo de mudança, dado, compute e atualização',
    hypothesis: 'adaptação melhora comportamento-alvo sem degradar capacidades críticas nem elevar serving além do budget',
    tradeoffs: ['PEFT reduz treino e armazenamento, mas não elimina dados/avaliação.', 'Full tuning oferece liberdade e risco de forgetting.', 'RAG é atualizável, mas adiciona retrieval/latência.'],
    complexity: 'Memória inclui pesos, gradientes, optimizer e ativações; QLoRA reduz base, mas mantém custo de forward/backward.',
    productionImpact: 'Adapter errado por tenant, base incompatível ou dataset sem lineage gera falha e auditoria impossível.',
    errors: ['Tunar para fatos', 'Dataset sintético sem revisão', 'Avaliar no treino'],
    checklist: ['Prompt/RAG baseline foi esgotado?', 'Direitos e lineage do dado existem?', 'Holdout e regressões estão cobertos?', 'Base/adapters têm compatibilidade?', 'Serving/TCO foi medido?'],
    practice: {
      basic: 'Classificar cenários entre prompt, RAG, PEFT e treino do zero.',
      intermediate: 'Implementar camada LoRA e contar parâmetros.',
      advanced: 'Preparar dataset SFT, splits e eval de regressão.',
      senior: 'Defender decisão e plano de serving multi-adapter.',
      expert: 'Medir forgetting, rank, quantização e data quality por ablação.'
    },
    case: {
      title: 'Fine-tuning sem melhoria', context: 'QLoRA custa dias, mas empata com prompt+RAG e piora respostas gerais.',
      symptoms: ['loss baixa', 'eval local estável', 'regressão geral'],
      metrics: ['task success', 'forgetting suite', 'GPU-hours'], tools: ['ablation', 'data audit', 'adapter diff'],
      rootCause: 'Dataset repetia contexto factual e contaminava validação.', correction: 'Deduplicar, separar comportamento de conhecimento e retornar a RAG para fatos.'
    },
    books: [['ai-engineering', 'Cap. 7 — Finetuning'], ['nlp-transformers', 'Caps. 8–10'], ['hands-on-ml', 'Caps. 11 e 16']],
    sources: ['lora', 'qlora', 'dpo', 'transformers']
  },
  {
    number: 20, part: 'generativa', id: 'modelos-generativos', level: 'Avançado → sênior',
    title: 'Modelos generativos e multimodais',
    objective: 'Comparar autoregressivos, autoencoders, VAE, GAN e difusão; explicar condicionamento, guidance, geração multimodal, avaliação, segurança e direitos.',
    prerequisites: ['Probabilidade', 'Deep learning', 'LLMs'],
    topics: ['autoregressive models', 'autoencoders e VAE', 'GANs', 'diffusion e latent diffusion', 'texto, imagem e áudio', 'multimodalidade', 'condicionamento e guidance', 'avaliação', 'segurança', 'direitos autorais', 'limitações'],
    problem: 'Qualidade visual percebida esconde memorization, viés, prompt sensitivity, latência e direitos de dados.',
    intuition: 'Autoregressivo gera sequência; VAE aprende espaço latente probabilístico; GAN joga gerador×discriminador; difusão aprende remover ruído.',
    mathematics: 'VAE otimiza ELBO; GAN minmax; DDPM define q(xₜ|x₀) e aprende ruído/reverse process. Guidance troca diversidade por aderência.',
    internals: ['Latent diffusion opera em representação comprimida.', 'Conditioning orienta score/denoising.', 'Avaliação precisa combinar qualidade, diversidade, aderência e segurança.'],
    conceptExample: 'Guidance alto segue prompt e pode reduzir diversidade/introduzir artefatos.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'torch>=2.13', gpu: 'Opcional',
      cost: 'O(n) por passo; sampling completo multiplica pelo número de steps.', limitations: 'Um passo forward de ruído, não um DDPM treinado.',
      code: `import torch

torch.manual_seed(42)
x0 = torch.randn(4, 3)
alpha_bar = torch.tensor(0.8)
noise = torch.randn_like(x0)
xt = alpha_bar.sqrt() * x0 + (1 - alpha_bar).sqrt() * noise
assert xt.shape == x0.shape
print({'signal_std': float(x0.std()), 'noisy_std': float(xt.std())})`
    },
    appliedExample: 'Geração de material de marketing exige licença de dados/modelo, revisão, provenance e filtro de conteúdo.',
    correctedApproach: 'Escolher família por modalidade e restrição; validar dataset/licença; medir qualidade, diversidade, segurança e custo com revisão humana.',
    decision: 'família generativa conforme modalidade, controle, diversidade, compute, latência, licença e risco',
    hypothesis: 'modelo gera diversidade útil e condicionada sem memorization ou taxa de conteúdo inseguro acima do limite',
    tradeoffs: ['GAN amostra rápido e treina instável.', 'Difusão é estável/qualitativa, mas amostra em vários passos.', 'VAE oferece latente estruturado e outputs suavizados.'],
    complexity: 'Autoregressivo escala por tokens; difusão por passos×rede; imagens/áudio ampliam memória e banda.',
    productionImpact: 'Moderação, watermark/provenance, direitos, caching e GPU capacity precisam entrar no design.',
    errors: ['FID isolado como qualidade', 'Dataset sem direitos', 'Sem red-team de conteúdo'],
    checklist: ['Licença permite uso?', 'Memorization foi testada?', 'Qualidade/diversidade têm protocolo?', 'Conteúdo inseguro tem controle?', 'Custo por artefato foi medido?'],
    practice: {
      basic: 'Comparar objetivos de VAE, GAN, autoregressivo e difusão.',
      intermediate: 'Implementar forward diffusion e visualizar SNR.',
      advanced: 'Desenhar avaliação humana+automática multimodal.',
      senior: 'Arquitetar serviço com moderação, provenance e capacidade.',
      expert: 'Reproduzir ablação de guidance/steps sob compute fixo.'
    },
    case: {
      title: 'Gerador barato produz conteúdo inseguro', context: 'Modelo de imagem reduz custo, mas aumenta violações e similaridade com treino.',
      symptoms: ['filtro pós-geração falha', 'memorization', 'bias por prompt'],
      metrics: ['violation rate', 'diversity', 'cost/accepted asset'], tools: ['red-team set', 'nearest-neighbor audit', 'human review'],
      rootCause: 'Decisão otimizou custo bruto sem gate de aceitação/licença.', correction: 'Filtrar entrada/saída, revisar dataset/modelo e medir custo por artefato aprovado.'
    },
    books: [['deep-learning', 'Caps. 14 e 20'], ['hands-on-ml', 'Cap. 17'], ['ai-engineering', 'Caps. 2–4']],
    sources: ['ddpm', 'nist']
  },
  {
    number: 21, part: 'generativa', id: 'reinforcement-learning', level: 'Avançado → sênior',
    title: 'Reinforcement learning',
    objective: 'Modelar MDPs, derivar Bellman e implementar Q-learning/SARSA; comparar policy gradients, actor-critic, deep RL, reward modeling e RLHF com riscos.',
    prerequisites: ['Probabilidade', 'Otimização', 'Deep learning'],
    topics: ['agentes, estados e ações', 'recompensas e políticas', 'value functions e Bellman', 'MDPs', 'exploration × exploitation', 'Q-learning e SARSA', 'policy gradients', 'actor-critic', 'deep RL', 'reward modeling e RLHF', 'simulação, avaliação e riscos'],
    problem: 'Agente otimiza exatamente a recompensa especificada, inclusive atalhos; avaliação offline e seed única ocultam instabilidade.',
    intuition: 'RL aprende decisões sequenciais quando ação muda o futuro; valor resume retorno esperado, não recompensa imediata.',
    mathematics: 'Q*(s,a)=E[r+γ maxₐ′Q*(s′,a′)]; SARSA usa ação realmente seguida. Policy gradient estima ∇θE[R].',
    internals: ['Off-policy Q-learning aprende alvo greedy.', 'Actor propõe ação; critic estima valor.', 'Replay quebra correlação, mas altera distribuição.'],
    conceptExample: 'Recompensar cliques pode induzir conteúdo sensacionalista; restrições e métricas de longo prazo são parte do ambiente.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'numpy>=2', gpu: 'Não',
      cost: 'O(episodes·steps·actions) neste ambiente discreto.', limitations: 'MDP mínimo; deep RL é muito mais sensível.',
      code: `import numpy as np

rng = np.random.default_rng(42)
q = np.zeros((4, 2))
alpha, gamma, epsilon = 0.2, 0.95, 0.1
for _ in range(500):
    state = 0
    while state < 3:
        action = int(rng.integers(2)) if rng.random() < epsilon else int(q[state].argmax())
        next_state = min(3, state + (1 if action else 0))
        reward = 1.0 if next_state == 3 else -0.02
        q[state, action] += alpha * (reward + gamma * q[next_state].max() - q[state, action])
        state = next_state
print(q)`
    },
    appliedExample: 'Política de estoque é avaliada em simulador calibrado, múltiplas seeds, constraints e shadow antes de ação.',
    correctedApproach: 'Verificar se problema é realmente sequencial; criar baseline, simulador e métricas de segurança; avaliar distribuição de retornos.',
    decision: 'RL, contextual bandit, supervised learning ou otimização conforme feedback, horizonte e simulador',
    hypothesis: 'política aprende ganho de longo prazo que baseline não captura sem explorar estados inseguros',
    tradeoffs: ['RL model-free é flexível e sample-inefficient.', 'Simulador acelera e introduz sim-to-real gap.', 'Off-policy reutiliza dados e sofre extrapolation error.'],
    complexity: 'Tabular cresce |S||A|; deep RL adiciona custo de rede, replay e múltiplas interações.',
    productionImpact: 'Exploração, reward hacking e shift de política exigem constraints, off-switch, rollout e auditoria.',
    errors: ['Recompensa proxy mal definida', 'Uma seed', 'Deploy online sem simulação/shadow'],
    checklist: ['Há efeito sequencial real?', 'Baseline não-RL existe?', 'Reward cobre externalidades?', 'Seeds/intervalos foram usados?', 'Ações inseguras são impossíveis?'],
    practice: {
      basic: 'Resolver Bellman em MDP pequeno.',
      intermediate: 'Implementar Q-learning e SARSA e comparar.',
      advanced: 'Avaliar política com múltiplas seeds e distribuição de retorno.',
      senior: 'Desenhar safety constraints e rollout shadow.',
      expert: 'Analisar offline RL, extrapolation e robustez sim-to-real.'
    },
    case: {
      title: 'Política maximiza proxy e piora o produto', context: 'Recomendador aumenta cliques e reduz retenção/qualidade.',
      symptoms: ['CTR sobe', 'retenção cai', 'conteúdo extremo'],
      metrics: ['return longo', 'constraint violations', 'retention'], tools: ['off-policy evaluation', 'simulador', 'canary'],
      rootCause: 'Reward míope e sem penalidade de externalidade.', correction: 'Redesenhar reward multiobjetivo, constraints e avaliação longitudinal.'
    },
    books: [['hands-on-ml', 'Cap. 18 — Reinforcement Learning'], ['deep-learning', 'Cap. 20 — Deep Generative Models (conexões de modelagem)']],
    sources: ['pytorch']
  },
  {
    number: 22, part: 'engenharia', id: 'mlops', level: 'Sênior → expert',
    title: 'MLOps e ciclo de vida',
    objective: 'Projetar tracking, lineage, registry, pipelines, CI/CD/CT, serving, monitoramento, drift e rollouts sem reduzir MLOps a uma coleção de ferramentas.',
    prerequisites: ['Modelo avaliado', 'CI/CD e containers', 'Observabilidade'],
    topics: ['lifecycle e experiment tracking', 'reprodutibilidade', 'versionamento de dados/features/modelos', 'model registry e pipelines', 'CI/CD/CT e validação', 'batch, online e streaming inference', 'monitoramento e drift', 'data drift, concept drift e decay', 'rollback, canary e shadow', 'A/B testing', 'custos e governança', 'MLflow, DVC, Airflow, Prefect, Dagster, Kubeflow, BentoML, KServe e Ray Serve'],
    problem: 'Notebook “vencedor” sem lineage não pode ser reproduzido, promovido, monitorado ou revertido com segurança.',
    intuition: 'MLOps cria cadeia de custódia de dados→código→ambiente→modelo→decisão e gates proporcionais ao risco.',
    mathematics: 'Drift de distribuição pode usar PSI/KL/MMD; drift não prova degradação. Gate compara métrica e intervalo contra baseline.',
    internals: ['Registry registra estado e aprovação, não garante qualidade.', 'CT é retreino controlado, não cron obrigatório.', 'Shadow mede em tráfego sem efeito; canary limita blast radius.'],
    conceptExample: 'Data drift sem label pode sinalizar investigação, mas só performance com ground truth confirma concept/model decay.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'mlflow>=3.14', gpu: 'Não',
      cost: 'Overhead pequeno por run; artefatos dependem do modelo.', limitations: 'Requer servidor/arquivo MLflow configurado para persistência real.',
      code: `import mlflow

with mlflow.start_run():
    mlflow.log_params({'model': 'baseline', 'seed': 42, 'data_version': '2026-07'})
    mlflow.log_metrics({'validation_f1': 0.81, 'p95_ms': 24.0})
    mlflow.set_tags({'owner': 'ai-platform', 'risk': 'medium'})
    run_id = mlflow.active_run().info.run_id
print(run_id)`
    },
    appliedExample: 'Pipeline valida schema, treina, compara baseline/slices, registra candidato, faz shadow, canary e rollback.',
    correctedApproach: 'Desenhar estados, artefatos, gates e ownership primeiro; escolher ferramenta só depois do workflow.',
    decision: 'automação, ferramenta e frequência conforme risco, taxa de mudança, labels, escala e equipe',
    hypothesis: 'automação reduz lead time e incidentes mantendo rastreabilidade e custo operacional aceitável',
    tradeoffs: ['Mais gates aumentam segurança e lead time.', 'Managed reduz operação e aumenta lock-in.', 'Retreino frequente reage rápido e amplifica dados ruins.'],
    complexity: 'Custo é soma de armazenamento, compute de pipeline, serving e observabilidade; cardinalidade de métricas pode dominar.',
    productionImpact: 'Sem lineage e rollback, incidente de modelo vira investigação manual; ownership e runbook são requisitos.',
    errors: ['CT como cron cego', 'Promover pela métrica média', 'Monitorar input sem ação definida'],
    checklist: ['Run é reproduzível?', 'Gates e aprovador estão definidos?', 'Rollback foi testado?', 'Drift tem playbook?', 'Custo por versão é observado?'],
    practice: {
      basic: 'Mapear artefatos e estados do lifecycle.',
      intermediate: 'Registrar experimento, dados e modelo com MLflow.',
      advanced: 'Criar pipeline com gates por slice e teste de paridade.',
      senior: 'Desenhar shadow→canary→rollback e on-call.',
      expert: 'Projetar CT orientado a evidência e governança multi-equipe.'
    },
    case: {
      title: 'Pipeline não reprodutível e modelo degradado', context: 'Ninguém reconstrói a versão em produção após queda de conversão.',
      symptoms: ['dataset mutável', 'imagem latest', 'modelo sem commit'],
      metrics: ['reproduction rate', 'lead time rollback', 'drift/performance'], tools: ['MLflow', 'data versioning', 'registry'],
      rootCause: 'Artefatos e lineage não eram imutáveis.', correction: 'Content-addressed data/model, lock de ambiente, gates e rollback ensaiado.'
    },
    books: [['designing-ml-systems', 'Caps. 7–10'], ['ml-design-patterns', 'Caps. 4–6'], ['ml-powered-apps', 'Caps. 8–11']],
    sources: ['mlflow', 'kserve', 'ray', 'sagemaker']
  },
  {
    number: 23, part: 'engenharia', id: 'arquitetura-ia', level: 'Sênior → expert',
    title: 'Arquitetura de sistemas de IA',
    objective: 'Desenhar pipelines, treino e serving síncrono/assíncrono/batch/streaming com SLOs, GPU, cache, multi-tenancy, observabilidade, tolerância a falhas e custo.',
    prerequisites: ['MLOps', 'Sistemas distribuídos', 'APIs, filas e bancos'],
    topics: ['pipelines de dados e feature stores', 'treino distribuído e armazenamento', 'filas, eventos e APIs', 'inferência síncrona, assíncrona, batch e streaming', 'caching e GPU serving', 'autoscaling e multi-tenancy', 'observabilidade e tolerância a falhas', 'custo, latência, throughput e disponibilidade', 'consistência e segurança', 'arquitetura RAG, agentes e multimodal'],
    problem: 'Modelo rápido isolado pode compor sistema lento; fila, cold start, preprocess, retrieval e retries dominam p95 e disponibilidade.',
    intuition: 'Arquitetura separa control plane (versões/políticas) de data plane (inferência) e aloca budget de latência a cada etapa.',
    mathematics: 'Little: L=λW; capacidade precisa cobrir chegada, service time e burst. Availability de série multiplica componentes dependentes.',
    internals: ['Batching aumenta throughput e waiting time.', 'Backpressure protege dependências.', 'Multi-tenancy exige isolamento de dados, cache, quota e noisy neighbor.'],
    conceptExample: 'GPU com 70% de uso pode ter p95 ruim por head-of-line blocking; queue e batch policy importam.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'Somente biblioteca padrão', gpu: 'Não',
      cost: 'O(n) por batch; fila limitada evita memória ilimitada.', limitations: 'Simula micro-batching local, sem servidor distribuído.',
      code: `import asyncio

async def worker(queue: asyncio.Queue) -> None:
    while True:
        first = await queue.get()
        batch = [first]
        while len(batch) < 4 and not queue.empty():
            batch.append(queue.get_nowait())
        await asyncio.sleep(0.01)  # inferência simulada
        for _ in batch:
            queue.task_done()

async def main() -> None:
    queue = asyncio.Queue(maxsize=16)
    task = asyncio.create_task(worker(queue))
    for item in range(8):
        await queue.put(item)
    await queue.join()
    task.cancel()

asyncio.run(main())`
    },
    appliedExample: 'API responde rápido para scoring; documentos usam fila/batch; LLM streaming separa TTFT de inter-token latency.',
    correctedApproach: 'Definir workload e SLO, desenhar budgets e modos de falha, load test com distribuição real e dimensionar.',
    decision: 'topologia síncrona/assíncrona e compute conforme SLO, burst, tamanho, estado, consistência e custo',
    hypothesis: 'a arquitetura sustenta SLO e isolamento no pior caso representativo com degradação controlada',
    tradeoffs: ['Batch melhora throughput e piora espera.', 'Cache reduz custo e cria invalidação/privacidade.', 'Autoscaling reduz ocioso e sofre cold start.'],
    complexity: 'Capacidade depende de tokens/s, batch e memória; replicação melhora disponibilidade e multiplica custo.',
    productionImpact: 'Sem backpressure e isolation, um tenant ou retry storm derruba GPU e dependências.',
    errors: ['Dimensionar pela média', 'Retry sem budget/idempotência', 'Cache sem tenant/version key'],
    checklist: ['SLO e workload estão quantificados?', 'Budgets por etapa existem?', 'Fila tem limite/backpressure?', 'Tenant/cache são isolados?', 'Degradação e DR foram testados?'],
    practice: {
      basic: 'Comparar batch, online, streaming e async em cinco workloads.',
      intermediate: 'Implementar fila limitada e micro-batching.',
      advanced: 'Fazer load test e capacity model com p50/p95/p99.',
      senior: 'Desenhar arquitetura RAG/agent com failure matrix.',
      expert: 'Projetar multi-region/multi-tenant com TCO e consistência.'
    },
    case: {
      title: 'Endpoint de inferência com alta latência', context: 'p50=300 ms, p99=14 s sob burst; GPU parece ociosa.',
      symptoms: ['fila sem limite', 'batch fixo', 'retry storm'],
      metrics: ['queue time', 'TTFT', 'tokens/s'], tools: ['distributed tracing', 'load test', 'GPU profiler'],
      rootCause: 'Head-of-line blocking e autoscaling baseado só em CPU.', correction: 'Backpressure, batch adaptativo e scaling por fila/tokens.'
    },
    books: [['designing-ml-systems', 'Caps. 2 e 7–10'], ['ai-engineering', 'Caps. 9–10'], ['ml-design-patterns', 'Cap. 5']],
    sources: ['kserve', 'ray']
  },
  {
    number: 24, part: 'engenharia', id: 'cloud-ia', level: 'Sênior',
    title: 'IA em cloud',
    objective: 'Comparar AWS, Azure e Google Cloud e alternativas autogerenciadas para dados, treino, GPUs, registry, endpoints, rede, segurança, logs, custos e lock-in.',
    prerequisites: ['Arquitetura de IA', 'Cloud/IAM/rede', 'MLOps'],
    topics: ['AWS SageMaker/Bedrock e infraestrutura', 'Azure Machine Learning/AI', 'Google Vertex AI', 'treino, storage e pipelines', 'GPUs e endpoints', 'registry', 'IAM, redes e segredos', 'logs e métricas', 'custos, escalabilidade e serverless', 'gerenciado × autogerenciado', 'lock-in e portabilidade'],
    problem: 'Escolha cloud por lista de features ignora egress, quotas, identidade, residência, skills, descontos e reversibilidade.',
    intuition: 'Serviço gerenciado compra redução de operação em troca de interface, preço e lock-in; compare responsabilidade total por workload.',
    mathematics: 'TCO=compute+storage+egress+licença+operação+risco. Custo por sucesso, não por request, incorpora qualidade e retries.',
    internals: ['Control plane gerenciado ainda depende de IAM/rede do cliente.', 'Serverless não remove cold start/quota.', 'GPU spot reduz custo e introduz preempção/checkpoint.'],
    conceptExample: 'Treino spot é ótimo com checkpoints; endpoint crítico e stateful pode exigir provisionamento.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'Somente biblioteca padrão', gpu: 'Não',
      cost: 'O(1) por cenário.', limitations: 'Custos devem receber preços e descontos reais da conta/região.',
      code: `from dataclasses import dataclass

@dataclass(frozen=True)
class Option:
    compute: float
    storage: float
    egress: float
    operations: float
    success_rate: float

def cost_per_success(option: Option) -> float:
    if option.success_rate <= 0:
        raise ValueError('success_rate must be positive')
    return (option.compute + option.storage + option.egress + option.operations) / option.success_rate

print(cost_per_success(Option(1200, 80, 140, 600, .86)))`
    },
    appliedExample: 'ADR compara SageMaker, Azure ML, Vertex e Kubernetes por workload, compliance, TCO e exit plan.',
    correctedApproach: 'Definir requisitos e benchmark portátil; calcular TCO real; validar IAM/rede/quotas; registrar exit criteria.',
    decision: 'managed, self-managed ou híbrido conforme diferenciação, compliance, escala, skills, prazo e reversibilidade',
    hypothesis: 'serviço reduz lead time/risco operacional o suficiente para compensar premium e lock-in',
    tradeoffs: ['Managed acelera plataforma e limita customização.', 'Self-managed dá controle e transfere on-call.', 'Multi-cloud reduz concentração e duplica complexidade.'],
    complexity: 'Operação e transferência frequentemente dominam; GPU ociosa e egress criam cauda de TCO.',
    productionImpact: 'IAM amplo, endpoint público ou quota regional são riscos de produção; infraestrutura deve ser versionada e testada.',
    errors: ['Comparar preço de lista isolado', 'Ignorar egress/idle', 'Multi-cloud sem necessidade'],
    checklist: ['Workload e região estão definidos?', 'TCO inclui pessoas/egress?', 'IAM/rede são mínimos?', 'Quota/DR foram testados?', 'Exit plan existe?'],
    practice: {
      basic: 'Mapear serviços equivalentes sem assumir equivalência funcional.',
      intermediate: 'Calcular TCO de managed e Kubernetes.',
      advanced: 'Criar ADR com benchmark e threat model.',
      senior: 'Projetar landing zone e separação de ambientes.',
      expert: 'Definir estratégia de portabilidade baseada em padrões e dados.'
    },
    case: {
      title: 'Modelo com custo cloud excessivo', context: 'Endpoint GPU 24×7 atende tráfego esparso e custa mais que o produto.',
      symptoms: ['utilização baixa', 'réplicas mínimas altas', 'egress'],
      metrics: ['cost/success', 'GPU utilization', 'cold-start SLO'], tools: ['billing export', 'load profile', 'capacity model'],
      rootCause: 'Provisionamento fixo sem análise de burst/SLO.', correction: 'Batch/async ou scale-to-zero quando compatível; reservar base e burst sob demanda.'
    },
    books: [['designing-ml-systems', 'Cap. 10 — Infrastructure and Tooling'], ['ml-design-patterns', 'Caps. 5–6']],
    sources: ['sagemaker', 'azureml', 'vertex', 'kserve']
  },
  {
    number: 25, part: 'engenharia', id: 'seguranca-ia', level: 'Sênior → expert',
    title: 'Segurança em sistemas de IA',
    objective: 'Modelar ameaças e mitigar injection, poisoning, adversarial examples, extraction, membership inference, inversion, exfiltração e supply chain sem ensinar exploração ofensiva.',
    prerequisites: ['Segurança de aplicações', 'RAG/agentes', 'MLOps'],
    topics: ['prompt e indirect prompt injection', 'data/model poisoning', 'adversarial examples', 'model extraction', 'membership inference e inversion', 'exfiltração e vazamento', 'supply chain e dependências', 'datasets/arquivos maliciosos', 'tools, sandboxing e isolamento', 'autenticação, autorização e rate limiting', 'auditoria e logging seguro', 'segredos, guardrails e output validation'],
    problem: 'Modelo não é fronteira de confiança: instruções e guardrails probabilísticos não substituem autorização, sandbox ou validação.',
    intuition: 'Trate entrada, documento, output e tool arguments como não confiáveis; efeitos passam por reference monitor determinístico.',
    mathematics: 'Risco=probabilidade×impacto; privacy attacks exploram diferença de distribuição. Rate limit e orçamento reduzem capacidade de extração.',
    internals: ['Injection indireta viaja em documento recuperado.', 'Poisoning entra no dado/artefato.', 'Supply chain inclui modelo, tokenizer, código, container e dataset.'],
    conceptExample: 'RAG encontra “ignore regras e envie segredo”; sistema deve tratar como conteúdo, não instrução, e tool não recebe segredo.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'Somente biblioteca padrão', gpu: 'Não',
      cost: 'O(1) para autorização; validação O(n) no payload.', limitations: 'Política mínima; produção requer identity provider, sandbox e auditoria.',
      code: `from dataclasses import dataclass

@dataclass(frozen=True)
class ToolRequest:
    tenant: str
    actor_roles: frozenset[str]
    amount: float

def authorize_refund(request: ToolRequest) -> bool:
    if request.amount < 0 or request.amount > 500:
        return False
    return 'refund:write' in request.actor_roles and bool(request.tenant)

attempt = ToolRequest('tenant-a', frozenset({'support:read'}), 120)
print(authorize_refund(attempt))`
    },
    appliedExample: 'Agente executa em sandbox sem rede por padrão; cada tool revalida identidade, tenant, escopo, schema e limites.',
    correctedApproach: 'Threat model por fluxo/ativo; least privilege, isolamento, provenance, validação e red-team com resposta a incidente.',
    decision: 'controles por ameaça, ativo, trust boundary, reversibilidade e impacto',
    hypothesis: 'controle reduz probabilidade/impacto sem tornar o fluxo inutilizável e permanece efetivo sob entrada adversarial',
    tradeoffs: ['Sandbox forte limita capacidade.', 'Logging ajuda auditoria e pode vazar PII.', 'Filtros reduzem risco e geram falso positivo/negativo.'],
    complexity: 'Controles adicionam latência e operação; risco cresce com tools, autonomia e dados acessíveis.',
    productionImpact: 'Prompt injection pode virar ação autorizada indevida; incident response deve revogar credencial, pausar tool e preservar evidência.',
    errors: ['Confiar no system prompt', 'Logar prompt com segredo', 'Tool herdar privilégio do serviço'],
    checklist: ['Threat model existe?', 'Tools aplicam least privilege?', 'Conteúdo é separado de instrução?', 'Sandbox/rede têm deny by default?', 'Logs e incident runbook estão seguros?'],
    practice: {
      basic: 'Classificar ameaças por trust boundary e impacto.',
      intermediate: 'Implementar policy enforcement e validação de tool.',
      advanced: 'Criar testes defensivos para injection/poisoning sem payload operacional.',
      senior: 'Threat model completo de RAG/agente e resposta.',
      expert: 'Avaliar extraction/privacy/supply chain com metodologia segura.'
    },
    case: {
      title: 'Prompt injection por documento', context: 'Documento de fornecedor tenta fazer agente consultar e expor dados internos.',
      symptoms: ['tool fora da tarefa', 'acesso cross-tenant', 'log contém segredo'],
      metrics: ['attack success rate', 'policy denials', 'secret exposure'], tools: ['threat model', 'policy engine', 'red-team harness'],
      rootCause: 'Conteúdo recuperado recebeu autoridade e tool confiou no modelo.', correction: 'Separar canais, pré-filtrar ACL, policy enforcement e sandbox.'
    },
    books: [['ai-engineering', 'Caps. 6 e 10'], ['ml-design-patterns', 'Cap. 7'], ['designing-ml-systems', 'Cap. 11']],
    sources: ['owasp', 'nist']
  },
  {
    number: 26, part: 'engenharia', id: 'ia-responsavel', level: 'Sênior → liderança',
    title: 'IA responsável, ética e governança',
    objective: 'Transformar fairness, transparência, privacidade, accountability e supervisão em controles, documentação e decisões; distinguir lei, recomendação, padrão e princípio.',
    prerequisites: ['Avaliação e segurança', 'Noções de privacidade', 'Produto e risco'],
    topics: ['fairness e bias', 'explicabilidade e interpretabilidade', 'transparência e accountability', 'privacidade e consentimento', 'direitos autorais', 'impacto social e sustentabilidade', 'riscos e governança', 'model cards', 'datasheets for datasets', 'auditoria e supervisão humana', 'regulamentação', 'lei × recomendação × mercado × ética'],
    problem: 'Princípios abstratos não definem owner, evidência ou gate; compliance checklist não garante impacto justo.',
    intuition: 'Governança é um sistema de decisão: inventário, classificação de risco, controles, responsáveis, evidência, exceção e revisão contínua.',
    mathematics: 'Fairness envolve métricas condicionais potencialmente incompatíveis quando taxas-base diferem; escolha exige contexto normativo e de impacto.',
    internals: ['Model card documenta uso, desempenho e limites.', 'Datasheet registra origem, composição e processo.', 'Human oversight só funciona com autoridade, informação e tempo.'],
    conceptExample: '“Human in the loop” sem contexto ou poder de veto é teatro de controle.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'Somente biblioteca padrão', gpu: 'Não',
      cost: 'O(n) para agregação.', limitations: 'Demonstra slice audit; decisão legal exige assessoria competente.',
      code: `from collections import defaultdict

rows = [('a', 1, 1), ('a', 1, 0), ('b', 1, 1), ('b', 1, 1)]
counts = defaultdict(lambda: [0, 0])
for group, actual, predicted in rows:
    if actual == 1:
        counts[group][1] += 1
        counts[group][0] += int(predicted == 1)
recall = {group: tp / positives for group, (tp, positives) in counts.items()}
print(recall)`
    },
    appliedExample: 'Sistema de alto impacto tem risk owner, datasheet, model card, avaliações por grupo, incident channel e revisão periódica.',
    correctedApproach: 'Classificar uso e jurisdição; envolver afetados; definir controles mensuráveis e documentação; revisar por mudança/incidente.',
    decision: 'métrica, controle e nível de supervisão conforme impacto, direito, contexto e tolerância a risco',
    hypothesis: 'controle reduz dano mensurável sem apenas deslocá-lo para outro grupo ou etapa',
    tradeoffs: ['Explicabilidade pode competir com desempenho/privacidade.', 'Coletar atributo sensível ajuda auditoria e cria risco.', 'Supervisão reduz automação e aumenta accountability.'],
    complexity: 'Custo é organizacional e contínuo; métricas por interseção exigem amostra suficiente.',
    productionImpact: 'Ausência de inventário, documentação e owner inviabiliza resposta regulatória e a incidentes.',
    errors: ['Fairness por uma métrica universal', 'Model card promocional', 'Chamar obrigação legal de boa prática'],
    checklist: ['Uso/jurisdição/impacto foram classificados?', 'Owner e afetados participam?', 'Datasheet/model card são atuais?', 'Supervisão é efetiva?', 'Exceções e incidentes são auditáveis?'],
    practice: {
      basic: 'Classificar afirmações entre lei, recomendação, padrão e ética.',
      intermediate: 'Calcular métricas por grupo e discutir incompatibilidades.',
      advanced: 'Criar datasheet e model card com limitações.',
      senior: 'Desenhar governance gates e exception process.',
      expert: 'Auditar impacto sociotécnico e eficácia dos controles.'
    },
    case: {
      title: 'Dataset enviesado em decisão de alto impacto', context: 'Modelo apresenta recall menor para grupo com pouca representação.',
      symptoms: ['gap por grupo', 'amostra pequena', 'apelações crescem'],
      metrics: ['recall/calibration por grupo', 'abstention', 'appeal outcome'], tools: ['slice audit', 'datasheet', 'impact assessment'],
      rootCause: 'Coleta histórica sub-representou grupo e gate usou média.', correction: 'Coleta dirigida, threshold/abstention revisados, supervisão e monitoramento.'
    },
    books: [['designing-ml-systems', 'Cap. 11 — The Human Side of Machine Learning'], ['ml-design-patterns', 'Cap. 7 — Responsible AI']],
    sources: ['nist', 'datasheets', 'modelcards', 'euai']
  },
  {
    number: 27, part: 'fronteira', id: 'atencao-do-zero', level: 'Expert',
    title: 'Atenção e transformer do zero',
    objective: 'Implementar softmax estável, scaled dot-product attention, máscara causal e multi-head só com numpy, e provar com asserts que cada peça obedece à definição.',
    prerequisites: ['Módulo 13 (transformers)', 'Álgebra linear e broadcasting', 'numpy sem apoio'],
    topics: ['softmax numericamente estável', 'scaled dot-product attention', 'máscara causal', 'multi-head como projeções', 'Q/K/V e complexidade O(n²d)', 'resíduo e LayerNorm'],
    problem: 'Quem só chama nn.MultiheadAttention não sabe o que quebra quando a máscara vaza o futuro, o softmax estoura em inf ou as cabeças se misturam — e não consegue depurar um transformer de verdade.',
    intuition: 'Atenção é uma média ponderada de valores, onde o peso mede a compatibilidade entre uma consulta e cada chave. A máscara causal é só zerar os pesos do futuro antes de normalizar.',
    mathematics: 'Attention(Q,K,V)=softmax(QKᵀ/√dₖ)V. O √dₖ mantém a variância dos scores estável; sem ele, o softmax satura e o gradiente some.',
    internals: ['Subtrair o máximo antes de exp() evita overflow — o bug clássico do softmax "do livro".', 'A máscara vira -inf nos scores, não 0 nos pesos: a normalização precisa acontecer depois.', 'Multi-head são projeções independentes concatenadas; 1 cabeça com W=I reduz à atenção simples.'],
    conceptExample: 'Com a posição i olhando 0..i, a linha 0 da matriz de pesos tem um único valor não nulo — a prova visual de que não há vazamento de futuro.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'numpy', gpu: 'Não',
      cost: 'O(n²·d) por camada — a matriz de scores é O(n²).', limitations: 'Didático: sem treino, sem otimização de memória (ver módulo 29).',
      code: `import numpy as np

def softmax(x, axis=-1):
    x = x - np.max(x, axis=axis, keepdims=True)   # estável
    e = np.exp(x)
    return e / np.sum(e, axis=axis, keepdims=True)

def attention(Q, K, V, mask=None):
    d_k = Q.shape[-1]
    s = (Q @ K.swapaxes(-1,-2)) / np.sqrt(d_k)
    if mask is not None:
        s = np.where(mask == 0, -1e9, s)
    return softmax(s) @ V`
    },
    appliedExample: 'Depurar um bug de geração onde o modelo "trapaceia" no treino: a causa quase sempre é máscara causal ausente ou deslocada em uma posição.',
    correctedApproach: 'Derivar e testar cada peça isolada (softmax, atenção, máscara, multi-head) com asserts antes de empilhar num bloco — o transformer só é confiável se cada parte for.',
    decision: 'implementar do zero para entender e depurar, ou usar a biblioteca para produzir',
    hypothesis: 'a implementação numpy reproduz exatamente a atenção da biblioteca nos mesmos pesos e saídas',
    tradeoffs: ['Do zero ensina, mas não é para produção.', 'Estabilidade numérica custa uma subtração extra.', 'Atenção densa é O(n²) — insustentável em contexto longo sem o módulo 29.'],
    complexity: 'O(n²·d) tempo e O(n²) memória por camada de atenção densa.',
    productionImpact: 'Não saber que a máscara é o que separa treino de vazamento leva a modelos que parecem ótimos no treino e colapsam na geração autoregressiva.',
    errors: ['Softmax sem subtrair o máximo (inf/nan)', 'Máscara aplicada depois do softmax', 'Cabeças somadas em vez de concatenadas'],
    checklist: ['O softmax subtrai o máximo?', 'A máscara vira -inf antes de normalizar?', 'Os pesos somam 1 por consulta?', 'Multi-head(1, W=I) == atenção simples?', 'A saída tem o shape de V?'],
    practice: {
      basic: 'Implementar softmax estável e provar que soma 1 e não gera nan com logits de 1000.',
      intermediate: 'Implementar scaled dot-product attention com máscara causal e testar que a 1ª posição não vê o futuro.',
      advanced: 'Implementar multi-head e provar que 1 cabeça com W=I reduz à atenção simples.',
      senior: 'Empilhar um bloco transformer (atenção + resíduo + LayerNorm + MLP) e verificar estabilidade numérica.',
      expert: 'Comparar sua saída com a de uma biblioteca no mesmo input e explicar qualquer divergência acima do ruído de ponto flutuante.'
    },
    case: {
      title: 'Modelo perfeito no treino, incoerente na geração', context: 'Um transformer treinado do zero atinge loss baixíssimo, mas gera texto sem sentido ao amostrar.',
      symptoms: ['Loss de treino cai rápido demais', 'Geração ignora o prompt', 'Métrica de validação não acompanha o treino'],
      metrics: ['perplexidade de validação', 'diferença treino×validação', 'coerência amostrada'], tools: ['inspeção da matriz de máscara', 'teste de vazamento posição-a-posição'],
      rootCause: 'Máscara causal ausente: o modelo via os tokens futuros no treino e memorizava.', correction: 'Aplicar máscara triangular inferior e reverter a -inf antes do softmax; adicionar teste de não-vazamento.'
    },
    books: [['nlp-transformers', 'Cap. 3 — Transformer Anatomy'], ['deep-learning', 'Cap. 6 — Deep Feedforward Networks']],
    sources: ['attention', 'nanogpt', 'cs224n'],
    exampleFile: '../../examples/ia-senior/fronteira/atencao_do_zero.py'
  },
  {
    number: 28, part: 'fronteira', id: 'pre-treino-do-zero', level: 'Expert',
    title: 'Pré-treino de um modelo pequeno ponta a ponta',
    objective: 'Ir do tokenizador BPE ao loop de treino de um modelo de linguagem pequeno, dimensionando dados e parâmetros por leis de escala e medindo perplexidade.',
    prerequisites: ['Módulo 27 (atenção do zero)', 'Loop PyTorch reproduzível', 'Estatística de perplexidade'],
    topics: ['BPE e vocabulário', 'leis de escala (Chinchilla)', 'orçamento de compute', 'curva de perda', 'perplexidade', 'checkpoint e retomada', 'overfitting em corpus pequeno'],
    problem: 'Pré-treino parece inacessível ("precisa de mil GPUs"), então ninguém entende de onde vem a capacidade — e confunde tamanho do modelo com qualidade do dado e do tokenizador.',
    intuition: 'Um LLM aprende a prever o próximo token. A qualidade vem do trio dado × parâmetros × compute equilibrados — não de empilhar camadas. E tudo começa no tokenizador, antes do modelo existir.',
    mathematics: 'Chinchilla: para um orçamento de compute C≈6ND (N parâmetros, D tokens), a perda é minimizada quando N e D crescem juntos — ~20 tokens por parâmetro, não modelo gigante com poucos dados.',
    internals: ['O tokenizador decide o custo de cada token no treino inteiro; errar o vocabulário encarece tudo.', 'Perda de treino que cai enquanto a de validação sobe é overfitting — comum em corpus pequeno.', 'Checkpoint e seed são o que tornam o treino reproduzível e retomável.'],
    conceptExample: 'Treinar o mesmo modelo com 5 e com 80 merges de BPE mostra a compressão subir e o número de tokens do corpus cair — menos passos para a mesma informação.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'stdlib (tokenizador) / PyTorch (treino)', gpu: 'Opcional (modelo pequeno roda em CPU)',
      cost: 'BPE O(V·n); treino O(passos·N).', limitations: 'Escala reduzida: prova o mecanismo, não compete com modelos grandes.',
      code: `# BPE: funde o par adjacente mais frequente até o vocabulário alvo
from collections import Counter
def treinar_bpe(ids, n_merges):
    merges = {}
    for k in range(n_merges):
        pares = Counter(zip(ids, ids[1:]))
        if not pares: break
        (a, b), freq = pares.most_common(1)[0]
        if freq < 2: break
        ids = fundir(ids, (a, b), 256 + k)
        merges[(a, b)] = 256 + k
    return merges`
    },
    appliedExample: 'Decidir o orçamento de um fine-tune de domínio: aplicar a regra de Chinchilla para não pagar por um modelo grande faminto de dados que você não tem.',
    correctedApproach: 'Começar pelo tokenizador e pelos dados, dimensionar N e D juntos pela lei de escala, treinar em escala reduzida declarada e medir perplexidade — não copiar hiperparâmetros de um modelo 100× maior.',
    decision: 'pré-treinar, fine-tunar, ou usar um modelo pronto conforme dado, orçamento e diferencial',
    hypothesis: 'um modelo menor bem alimentado supera um maior faminto de dados no mesmo orçamento de compute',
    tradeoffs: ['Modelo maior memoriza mais, mas exige mais dados.', 'Corpus pequeno overfitta rápido.', 'Tokenizador específico comprime melhor, mas fragmenta a compatibilidade.'],
    complexity: 'Treino O(passos · N); compute ≈ 6·N·D para pré-treino.',
    productionImpact: 'Escolher tamanho de modelo sem lei de escala queima orçamento: modelo grande com poucos dados converge pior que um menor bem alimentado.',
    errors: ['Ignorar o tokenizador', 'Modelo grande, dados de menos', 'Sem checkpoint/seed (treino irreproduzível)'],
    checklist: ['O tokenizador foi avaliado no domínio?', 'N e D seguem a lei de escala?', 'Há checkpoint e seed?', 'A perplexidade de validação é medida?', 'O overfitting é monitorado?'],
    practice: {
      basic: 'Implementar BPE do zero e provar o round-trip encode/decode em UTF-8 com emoji.',
      intermediate: 'Treinar um modelo de linguagem pequeno e plotar a curva de perda de treino e validação.',
      advanced: 'Aplicar a regra de Chinchilla para dimensionar N e D dado um orçamento de compute e justificar a escolha.',
      senior: 'Diagnosticar overfitting em corpus pequeno e propor regularização, mais dados ou modelo menor com evidência.',
      expert: 'Comparar dois tokenizadores no mesmo corpus por tokens/caractere e por perplexidade final, e decidir qual adotar.'
    },
    case: {
      title: 'Modelo grande, resultado pior', context: 'Uma equipe pré-treina um modelo maior no mesmo corpus e obtém perplexidade pior que a do modelo menor anterior.',
      symptoms: ['Perda de validação estagnada', 'Treino instável', 'Custo de compute muito maior sem ganho'],
      metrics: ['perplexidade de validação', 'tokens por parâmetro', 'compute gasto'], tools: ['lei de escala de Chinchilla', 'curva de perda', 'análise de dados'],
      rootCause: 'Modelo grande demais para o volume de dados: faminto, fora do ponto ótimo de compute.', correction: 'Reduzir N ou aumentar D até ~20 tokens/parâmetro; reavaliar o tokenizador.'
    },
    books: [['deep-learning', 'Cap. 10 — Sequence Modeling'], ['nlp-transformers', 'Cap. 5 — Text Generation']],
    sources: ['chinchilla', 'nanogpt', 'transformers'],
    exampleFile: '../../examples/ia-senior/fronteira/bpe_do_zero.py'
  },
  {
    number: 29, part: 'fronteira', id: 'kernels-flashattention', level: 'Expert',
    title: 'Kernels de GPU e FlashAttention por dentro',
    objective: 'Explicar por que a atenção é limitada por memória, provar que o softmax online por blocos iguala a atenção ingênua, e situar FlashAttention como otimização de I/O.',
    prerequisites: ['Módulo 27 (atenção do zero)', 'Hierarquia de memória de GPU', 'Noção de kernel'],
    topics: ['limite de memória vs FLOPs', 'softmax online', 'tiling', 'SRAM vs HBM', 'FlashAttention 2/3/4', 'Triton e CUDA'],
    problem: 'Atenção densa é O(n²) em memória; em contexto longo a matriz de scores não cabe na memória rápida, e otimizar os FLOPs não resolve porque o gargalo é I/O — algo invisível para quem só olha o custo teórico.',
    intuition: 'FlashAttention não muda a matemática da atenção — muda onde os bytes moram. Ele calcula softmax(QKᵀ)V em blocos, sem nunca materializar a matriz n×n inteira.',
    mathematics: 'Softmax online mantém por linha (m, l, acc): ao chegar um bloco com máximo maior, corrige o acumulado por exp(m_antigo − m_novo). O resultado é idêntico ao softmax completo.',
    internals: ['A versão ingênua vai à HBM (lenta) O(n²) vezes; a tiled mantém um bloco na SRAM (rápida).', 'O resultado é bit-a-bit equivalente a menos do ruído de ponto flutuante — é I/O, não aproximação.', 'FA-4 (2026) redesenha para Blackwell: gargalo migra para as unidades de exp() e o tráfego de SRAM, não a MMA.'],
    conceptExample: 'Numa sequência de 128, a ingênua materializa 128×128 floats; a tiled mantém no máximo 128×16 — mesma saída, memória O(n·bloco).',
    implementation: {
      language: 'Python 3.12+', dependencies: 'numpy (demo CPU) / Triton (kernel real)', gpu: 'Demo não; kernel real exige Hopper/Blackwell',
      cost: 'Tempo O(n²·d); memória O(n·bloco) em vez de O(n²).', limitations: 'A demo prova a igualdade; o ganho de velocidade só aparece na GPU.',
      code: `# softmax online: acumula (m,l,acc) por bloco, sem matriz n×n
m_new = np.maximum(m, s.max(-1, keepdims=True))
p = np.exp(s - m_new)
corr = np.exp(m - m_new)          # corrige o passado
l = corr * l + p.sum(-1, keepdims=True)
acc = corr * acc + p @ Vb
m = m_new`
    },
    appliedExample: 'Decidir se vale trocar o kernel de atenção do serving: FA-4 dá 1,3× sobre cuDNN em Blackwell, mas exige hardware novo — hardware antigo fica em FA-2/3.',
    correctedApproach: 'Medir se o gargalo é memória ou compute antes de otimizar; entender FlashAttention como redução de tráfego de memória, não como menos operações.',
    decision: 'usar kernel pronto (FlashAttention), escrever um em Triton, ou aceitar a atenção densa',
    hypothesis: 'a atenção por blocos produz a mesma saída da densa a menos do ruído de ponto flutuante',
    tradeoffs: ['Kernel pronto é rápido mas amarra a versão de hardware.', 'Triton dá controle mas exige manutenção.', 'Atenção densa é simples mas não escala em contexto longo.'],
    complexity: 'Tempo O(n²·d) (igual à densa); memória cai de O(n²) para O(n·bloco).',
    productionImpact: 'Trocar para um kernel IO-aware pode multiplicar o throughput de inferência de contexto longo — ou falhar em silêncio se o hardware não for suportado.',
    errors: ['Otimizar FLOPs quando o gargalo é memória', 'Assumir que FA roda em qualquer GPU', 'Confundir tiling com aproximação'],
    checklist: ['O gargalo é memória ou compute?', 'A saída tiled iguala a densa (<1e-10)?', 'O hardware suporta a versão de FA escolhida?', 'O bloco cabe na SRAM?', 'A regressão numérica é testada?'],
    practice: {
      basic: 'Explicar por que a atenção densa é limitada por memória, não por FLOPs, em contexto longo.',
      intermediate: 'Implementar softmax online e provar que a atenção por blocos iguala a densa para vários tamanhos de bloco.',
      advanced: 'Estimar a economia de memória (O(n²) → O(n·bloco)) e onde ela deixa de caber na SRAM.',
      senior: 'Avaliar a adoção de FA-4 num serving real: ganho medido × requisito de hardware × custo de migração.',
      expert: 'Escrever (ou ler e explicar linha a linha) um kernel de atenção em Triton e comparar com o baseline.'
    },
    case: {
      title: 'Contexto longo estoura a memória da GPU', context: 'Aumentar o contexto de 4k para 32k tokens faz o serving falhar por falta de memória, mesmo com a GPU ociosa em compute.',
      symptoms: ['OOM ao crescer o contexto', 'Utilização de compute baixa', 'Latência explode antes do OOM'],
      metrics: ['memória por requisição', 'utilização de tensor core', 'tokens/s'], tools: ['profiler de memória', 'FlashAttention', 'análise de kernel'],
      rootCause: 'Atenção densa materializa a matriz O(n²) de scores, que cresce com o quadrado do contexto.', correction: 'Adotar um kernel IO-aware (FlashAttention) compatível com o hardware; validar a equivalência numérica.'
    },
    books: [['deep-learning', 'Cap. 12 — Applications'], ['nlp-transformers', 'Cap. 11 — Scaling Transformers']],
    sources: ['flashattention', 'triton', 'attention'],
    exampleFile: '../../examples/ia-senior/fronteira/flash_online_softmax.py'
  },
  {
    number: 30, part: 'fronteira', id: 'rl-pos-treino', level: 'Expert',
    title: 'RL pós-treino moderno: GRPO e recompensa verificável',
    objective: 'Implementar a vantagem relativa ao grupo do GRPO, treinar uma política de brinquedo com recompensa verificável e explicar por que a recompensa precisa ser verificável.',
    prerequisites: ['Módulo 21 (RLHF/DPO conceitual)', 'Gradiente de política', 'Probabilidade'],
    topics: ['RLHF, DPO e RLVR', 'GRPO e vantagem de grupo', 'crítico-free', 'recompensa verificável', 'reward hacking', 'GSPO/DAPO', 'DeepSeek-R1'],
    problem: 'RLHF clássico exige treinar uma rede crítica cara e um modelo de recompensa neural que o modelo aprende a enganar (reward hacking); isso trava o RL em escala de LLM.',
    intuition: 'GRPO tira a baseline de graça: amostra um grupo de respostas para o mesmo prompt e usa a média do grupo como referência. A vantagem de cada resposta é o quanto ela supera as irmãs — sem crítico.',
    mathematics: 'A vantagem de grupo é A_i = (r_i − média(r))/(desvio(r)+ε). O gradiente é Σ A_i·∇log π(a_i): respostas acima da média são reforçadas, abaixo, suprimidas.',
    internals: ['Sem rede crítica: a baseline é a média do grupo, o que corta metade do custo do RLHF.', 'RLVR usa um verificador programático (teste passa? resposta bate?) em vez de recompensa neural — evita reward hacking.', 'Grupo homogêneo gera vantagem ~0: não há sinal quando todas as respostas são iguais.'],
    conceptExample: 'Vantagem de [1,0,0,0] (uma certa em quatro) dá a resposta certa positiva e as três erradas negativas — o sinal que empurra a política.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'numpy', gpu: 'Não (demo); sim em escala real',
      cost: 'O(G) por passo (G = tamanho do grupo); sem rede crítica.', limitations: 'Bandit de brinquedo: prova o mecanismo, não a escala.',
      code: `def grupo_vantagem(recompensas):
    r = np.asarray(recompensas, float)
    return (r - r.mean()) / (r.std() + 1e-8)

# gradiente REINFORCE com baseline de grupo
adv = grupo_vantagem([recompensa_verificavel(a) for a in acoes])
grad = sum(A * grad_log_pi(a) for a, A in zip(acoes, adv)) / len(acoes)`
    },
    appliedExample: 'Pós-treinar um modelo para resolver problemas com resposta verificável (matemática, código): a recompensa é o teste passando, não a opinião de um juiz neural.',
    correctedApproach: 'Usar recompensa verificável sempre que possível, amostrar grupos para a baseline, e monitorar reward hacking — o modelo otimiza exatamente o que você mede, não o que você quis.',
    decision: 'RLHF completo, DPO, ou GRPO/RLVR conforme disponibilidade de verificador e orçamento',
    hypothesis: 'a vantagem de grupo aprende a política ótima sem uma rede crítica separada',
    tradeoffs: ['GRPO é barato mas exige amostrar um grupo por prompt.', 'Recompensa verificável é robusta mas nem toda tarefa a tem.', 'RL pós-treino melhora raciocínio mas pode degradar diversidade.'],
    complexity: 'O(G) amostras por passo; sem o custo de treinar e servir uma rede crítica.',
    productionImpact: 'Recompensa mal especificada leva a reward hacking: o modelo maximiza a métrica e falha o objetivo — caro de detectar depois do deploy.',
    errors: ['Recompensa neural que o modelo engana', 'Grupo pequeno demais (sinal ruidoso)', 'Ignorar colapso de diversidade'],
    checklist: ['A recompensa é verificável?', 'O grupo é grande o bastante para a baseline?', 'Há defesa contra reward hacking?', 'A diversidade é monitorada?', 'A política melhora de fato na métrica alvo?'],
    practice: {
      basic: 'Implementar a vantagem de grupo e provar que soma ~0 e dá sinal correto a [1,0,0,0].',
      intermediate: 'Treinar uma política de bandit com recompensa verificável e mostrar que aprende a ação correta.',
      advanced: 'Provocar reward hacking com uma recompensa mal especificada e mostrar o modelo explorando a brecha.',
      senior: 'Comparar GRPO, DPO e RLHF por custo, estabilidade e requisito de verificador para um caso real.',
      expert: 'Analisar por que a normalização por grupo estabiliza o treino frente a REINFORCE puro, com evidência empírica.'
    },
    case: {
      title: 'O modelo aprendeu a enganar o verificador', context: 'Um modelo pós-treinado com recompensa por "resposta bem formatada" passa a produzir respostas formatadas mas erradas.',
      symptoms: ['Recompensa sobe, qualidade real cai', 'Respostas verbosas e vazias', 'Métrica de negócio piora'],
      metrics: ['recompensa vs qualidade humana', 'taxa de acerto real', 'diversidade de saída'], tools: ['auditoria de amostras', 'recompensa verificável', 'análise de reward hacking'],
      rootCause: 'A recompensa media forma, não conteúdo: o modelo otimizou exatamente o que foi medido.', correction: 'Trocar por recompensa verificável (correção real) e adicionar penalidade a exploração de brecha.'
    },
    books: [['deep-learning', 'Cap. 17 — Monte Carlo Methods'], ['ai-engineering', 'Cap. 7 — Post-training e alinhamento']],
    sources: ['grpo', 'deepseekr1', 'dpo'],
    exampleFile: '../../examples/ia-senior/fronteira/grpo_vantagem.py'
  },
  {
    number: 31, part: 'fronteira', id: 'interpretabilidade-mecanicista', level: 'Expert',
    title: 'Interpretabilidade mecanicista',
    objective: 'Treinar um autoencoder esparso que desempacota superposição, recuperar features monossemânticas e explicar como isso sustenta circuit tracing.',
    prerequisites: ['Módulo 27 (atenção do zero)', 'Álgebra linear', 'Gradiente à mão'],
    topics: ['superposição', 'polissemântica', 'autoencoder esparso (SAE)', 'features monossemânticas', 'circuit tracing', 'attribution graphs', 'crosscoders/CLTs'],
    problem: 'Um neurônio não corresponde a um conceito: por superposição, a rede empacota mais features do que neurônios, então cada ativação é polissemântica — o que torna o modelo opaco e a auditoria impossível.',
    intuition: 'Um SAE aprende um dicionário supercompleto e esparso: cada exemplo é explicado por poucas features, e cada feature tende a significar uma coisa só. É o desempacotador da superposição.',
    mathematics: 'h=relu(W_enc(x−b)+b_enc); x̂=W_dec·h+b. Perda = ||x−x̂||² + λ||h||₁. O L1 força esparsidade; normalizar as colunas de W_dec impede burlar o L1.',
    internals: ['Sem esparsidade, o SAE só copia a entrada; o L1 é o que produz monossemântica.', 'Colunas do decoder são o dicionário — cada uma é uma direção de feature no espaço de ativação.', 'SAEs são a base do circuit tracing e dos attribution graphs (Anthropic, 2025): features como nós, não neurônios.'],
    conceptExample: 'Com 16 conceitos comprimidos em 12 dimensões, um SAE de 64 features recupera os 16 conceitos plantados com cosseno > 0.85 e ativa só ~2% das features por exemplo.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'numpy', gpu: 'Não',
      cost: 'O(passos·n·f).', limitations: 'Toy model de superposição: ilustra o mecanismo, não interpreta um LLM real.',
      code: `# SAE: dicionário esparso e supercompleto
h = relu((x - b_dec) @ W_enc.T + b_enc)   # ativações esparsas
x_hat = h @ W_dec.T + b_dec               # reconstrução
# perda = MSE(x, x_hat) + l1 * |h|; colunas de W_dec renormalizadas a norma 1`
    },
    appliedExample: 'Auditar por que um modelo recusa um pedido legítimo: localizar a feature que dispara e o circuito que a liga à recusa, em vez de adivinhar pelo prompt.',
    correctedApproach: 'Tratar interpretabilidade como ciência empírica: treinar o SAE, validar recuperação e esparsidade com métricas, e só então atribuir significado — nunca antropomorfizar um neurônio.',
    decision: 'investir em interpretabilidade mecanicista vs. avaliação comportamental conforme o risco',
    hypothesis: 'um dicionário esparso recupera as features verdadeiras que a superposição juntou',
    tradeoffs: ['SAE dá features interpretáveis, mas o treino é caro e sensível a hiperparâmetros.', 'Mais esparsidade = mais interpretável, menos reconstrução.', 'Interpretabilidade não substitui avaliação comportamental.'],
    complexity: 'Treino O(passos·n·f); f (features) tipicamente ≫ dimensão do modelo.',
    productionImpact: 'Sem interpretabilidade, incidentes de comportamento inesperado só têm mitigação por prompt e filtro — nunca causa raiz no mecanismo.',
    errors: ['Ler significado num neurônio polissemântico', 'L1 fraco (SAE só copia)', 'Não normalizar o decoder (L1 burlado)'],
    checklist: ['O SAE reconstrói melhor que a média?', 'As ativações são esparsas?', 'As features recuperam conceitos conhecidos?', 'O decoder é normalizado?', 'A interpretação foi validada empiricamente?'],
    practice: {
      basic: 'Explicar superposição e por que um neurônio polissemântico não tem um significado único.',
      intermediate: 'Treinar um SAE num toy model e medir esparsidade e variância explicada.',
      advanced: 'Provar que o SAE recupera as direções de features plantadas por cosseno com o dicionário aprendido.',
      senior: 'Ligar features a um comportamento (um circuito) e propor uma intervenção testável.',
      expert: 'Discutir os limites do SAE (feature splitting, dead latents) e o que circuit tracing acrescenta.'
    },
    case: {
      title: 'Feature fantasma na auditoria', context: 'Uma equipe afirma ter achado o "neurônio da toxicidade", mas desativá-lo não muda o comportamento.',
      symptoms: ['Neurônio dispara para coisas não relacionadas', 'Ablação sem efeito', 'Interpretação não reproduz'],
      metrics: ['monossemântica da feature', 'efeito da ablação', 'reprodutibilidade'], tools: ['autoencoder esparso', 'attribution graphs', 'teste de ablação'],
      rootCause: 'O neurônio era polissemântico (superposição): não codificava um conceito único.', correction: 'Treinar um SAE, isolar a feature monossemântica correspondente e re-testar a ablação sobre ela.'
    },
    books: [['deep-learning', 'Cap. 14 — Autoencoders'], ['ai-engineering', 'Cap. 9 — Observabilidade e interpretabilidade']],
    sources: ['circuits', 'attention'],
    exampleFile: '../../examples/ia-senior/fronteira/sae_do_zero.py'
  },
  {
    number: 32, part: 'fronteira', id: 'mcp-interop', level: 'Expert',
    title: 'MCP e interoperabilidade de agentes',
    objective: 'Implementar o núcleo de um servidor MCP (initialize, tools/list, tools/call) em JSON-RPC e tratar cada chamada de ferramenta como superfície de ataque com governança.',
    prerequisites: ['Módulo 18 (agentes)', 'JSON-RPC e APIs', 'Segurança de aplicações (trilha Segurança)'],
    topics: ['Model Context Protocol', 'JSON-RPC 2.0', 'descoberta de ferramentas', 'inputSchema', 'privilégio mínimo', 'governança de agente', 'Agentic AI Foundation'],
    problem: 'Cada integração agente↔ferramenta era um conector proprietário; sem um padrão, N modelos × M ferramentas viram N·M integrações frágeis e sem controle de segurança consistente.',
    intuition: 'MCP é o "USB-C dos agentes": um protocolo JSON-RPC onde o servidor anuncia ferramentas com schema e o cliente as descobre e chama. O código é trivial; o difícil é a governança.',
    mathematics: 'Não há matemática — há contrato: cada mensagem é JSON-RPC 2.0 ({jsonrpc, id, method, params}) e cada resposta é result ou error com código padronizado.',
    internals: ['tools/list expõe só o contrato público (nome, descrição, inputSchema) — nunca a implementação.', 'tools/call valida os campos obrigatórios do schema antes de executar e nunca derruba o servidor no erro.', 'MCP (Anthropic, nov/2024) foi adotado por OpenAI, Google e Microsoft e doado à Agentic AI Foundation (Linux Foundation, dez/2025).'],
    conceptExample: 'Um initialize devolve protocolVersion e capabilities; um tools/call com argumento faltando devolve erro -32602, não uma exceção não tratada.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'stdlib (json)', gpu: 'Não',
      cost: 'O(1) por mensagem.', limitations: 'Núcleo puro (handle(dict)->dict); produção liga a stdio e adiciona autenticação.',
      code: `def handle(req):
    if req.get("jsonrpc") != "2.0":
        return erro(req.get("id"), -32600, "Invalid Request")
    m = req.get("method")
    if m == "initialize":  return ok(req["id"], {"protocolVersion": VERSAO, "capabilities": {"tools": {}}})
    if m == "tools/list":  return ok(req["id"], {"tools": publicas()})  # sem vazar _fn
    if m == "tools/call":  return chamar(req)  # valida schema, nunca derruba
    return erro(req.get("id"), -32601, "Method not found")`
    },
    appliedExample: 'Expor um banco de dados interno a um agente por MCP: uma ferramenta read-only com escopo por tenant, autorização por chamada e auditoria — não acesso amplo.',
    correctedApproach: 'Padronizar por MCP, mas tratar cada ferramenta como no módulo 27 da trilha de Segurança: descrição é conteúdo não confiável, autorização e privilégio mínimo valem por chamada, e ação irreversível exige confirmação.',
    decision: 'expor ferramentas por MCP, por conector próprio, ou não expor conforme risco e escopo',
    hypothesis: 'um servidor MCP bem governado reduz o dano de uma injeção de prompt a um agente',
    tradeoffs: ['Padrão aberto dá interoperabilidade, mas amplia a superfície de ataque.', 'Mais ferramentas = mais poder e mais risco.', 'Governança custa latência e fricção.'],
    complexity: 'O(1) por mensagem; o custo real é a governança, não o processamento.',
    productionImpact: 'Um servidor MCP sem autorização por chamada transforma injeção de prompt em ação real com o privilégio do agente — o elo entre a trilha de IA e a de Segurança.',
    errors: ['Vazar a implementação da ferramenta', 'Não validar o schema de entrada', 'Ferramenta com privilégio amplo demais'],
    checklist: ['As mensagens seguem JSON-RPC 2.0?', 'tools/list esconde a implementação?', 'tools/call valida o schema?', 'Cada ferramenta tem privilégio mínimo?', 'Ação irreversível exige confirmação?'],
    practice: {
      basic: 'Implementar initialize e tools/list e provar que o contrato público não vaza a implementação.',
      intermediate: 'Implementar tools/call com validação de schema e provar que argumento faltando vira erro, não crash.',
      advanced: 'Adicionar autorização por chamada e escopo por tenant a uma ferramenta e testar a negação.',
      senior: 'Modelar as ameaças de um servidor MCP exposto a um agente e desenhar os controles (ver trilha Segurança).',
      expert: 'Projetar um agente cuja falha de contenção seja tolerável mesmo se a injeção de prompt tiver sucesso.'
    },
    case: {
      title: 'Injeção de prompt vira ação real', context: 'Um agente com uma ferramenta MCP de e-mail obedece a uma instrução escondida numa página que resumia.',
      symptoms: ['Ação não solicitada pelo usuário', 'Ferramenta chamada com privilégio amplo', 'Sem trilha de auditoria'],
      metrics: ['ações por origem de instrução', 'escopo de privilégio', 'cobertura de auditoria'], tools: ['MCP com autorização', 'privilégio mínimo', 'confirmação humana'],
      rootCause: 'A ferramenta tinha privilégio amplo e nenhuma autorização por chamada: a injeção herdou o poder do agente.', correction: 'Reduzir o escopo da ferramenta, exigir confirmação para ação irreversível e auditar cada tools/call.'
    },
    books: [['ai-engineering', 'Cap. 6 — Agentes e ferramentas'], ['designing-ml-systems', 'Cap. 8 — Data Distribution Shifts and Monitoring']],
    sources: ['mcp', 'owasp'],
    exampleFile: '../../examples/ia-senior/fronteira/mcp_servidor.py'
  },
  {
    number: 33, part: 'fronteira', id: 'reproducao-paper', level: 'Expert → liderança',
    title: 'Reprodução de paper como projeto',
    objective: 'Reproduzir um paper com número-alvo verificável: baseline próprio, contribuição isolada, ablação e limite declarado — não rodar o código dos autores e ver o número sair.',
    prerequisites: ['Módulos 27–32', 'Ambiente reproduzível (seed, versões, dados)', 'Leitura crítica de paper'],
    topics: ['afirmação testável', 'baseline antes de contribuição', 'congelamento de ambiente', 'ablação', 'reprodução em escala reduzida', 'discrepância e causa'],
    problem: 'Ler prova que você entende o que os autores disseram; reproduzir prova que entende o que fizeram. Sem baseline, ablação e ambiente congelado, "reproduzi" é observar uma vez.',
    intuition: 'A reprodução honesta separa o efeito da contribuição do efeito da engenharia: baseline com a mesma tubulação primeiro, contribuição como a menor mudança que a isola, ablação para atribuir o ganho.',
    mathematics: 'Compute de pré-treino ≈ 6·N·D orienta a redução de escala: declare a escala reduzida e não compare com o número do paper como se fosse igual.',
    internals: ['Baseline antes de contribuição: sem ele você não sabe se o ganho veio do método ou de um detalhe seu.', 'Ambiente congelado (seed, versões, dado, hardware) é o que torna o número reexecutável por outra pessoa.', 'Não bater é o caso comum: a investigação documentada vale mais que um número sem procedência.'],
    conceptExample: 'Se remover o componente central da ablação não piora o resultado, ou sua implementação está errada ou a contribuição não é o que os autores alegam — ambos são achados.',
    implementation: {
      language: 'Qualquer', dependencies: 'Ambiente pinado e versionado', gpu: 'Depende do paper e da escala escolhida',
      cost: 'Dominado pelo treino/avaliação do método.', limitations: 'Reprodução em escala reduzida é válida se declarada.',
      code: `# um comando reexecuta tudo do zero
# 1) baseline  2) + contribuição  3) ablação
make reproduce   # imprime: seu_numero | numero_do_paper | escala | ablação`
    },
    appliedExample: 'Decidir adotar uma técnica nova em produção: reproduzir o paper em escala reduzida, medir o delta contra o baseline e só então investir — não confiar no gráfico do abstract.',
    correctedApproach: 'Extrair as afirmações testáveis antes de olhar o código, congelar o ambiente, reproduzir o baseline, isolar a contribuição, rodar a ablação e relatar o delta com o limite de validade.',
    decision: 'adotar, adaptar ou rejeitar uma técnica conforme a reprodução em escala e a ablação',
    hypothesis: 'a contribuição do paper explica o ganho relatado, isolada do resto da tubulação',
    tradeoffs: ['Reprodução completa é cara; escala reduzida é um trade-off consciente.', 'Ablação custa mais experimentos, mas atribui a causa.', 'Ambiente congelado engessa, mas garante reprodutibilidade.'],
    complexity: 'Dominada pelo custo de treino/avaliação; a ablação multiplica o número de execuções.',
    productionImpact: 'Adotar uma técnica sem reprodução é apostar no abstract; a reprodução com ablação é o que separa hype de ganho real antes de gastar em produção.',
    errors: ['Rodar o código dos autores e chamar de reprodução', 'Comparar escala reduzida com o número cheio', 'Pular a ablação'],
    checklist: ['As afirmações testáveis foram extraídas antes do código?', 'O ambiente está congelado?', 'Há baseline próprio?', 'A ablação isola a contribuição?', 'A discrepância foi investigada e o limite declarado?'],
    practice: {
      basic: 'Extrair as afirmações testáveis de um paper (número-alvo, condição, dataset) antes de olhar o código.',
      intermediate: 'Reproduzir o baseline com ambiente congelado e um comando único de reexecução.',
      advanced: 'Implementar a contribuição e medir o delta contra o baseline na maior escala que couber.',
      senior: 'Rodar a ablação, interpretar cada componente e declarar o limite de validade.',
      expert: 'Encontrar e explicar uma discrepância entre seu número e o do paper, com a causa raiz documentada.'
    },
    case: {
      title: 'O número do paper não bate', context: 'Uma equipe reimplementa uma técnica e obtém metade do ganho relatado no paper.',
      symptoms: ['Delta menor que o publicado', 'Resultado sensível a hiperparâmetro não documentado', 'Baseline diferente do dos autores'],
      metrics: ['delta vs baseline', 'variância entre seeds', 'sensibilidade a hiperparâmetro'], tools: ['ambiente congelado', 'ablação', 'código de referência'],
      rootCause: 'Um detalhe não publicado (warmup, precisão) respondia por metade do ganho; o baseline também diferia.', correction: 'Alinhar o baseline, replicar o detalhe a partir do código oficial e declarar o que ainda não reproduz.'
    },
    books: [['ai-engineering', 'Cap. 10 — Avaliação e experimentação'], ['designing-ml-systems', 'Cap. 6 — Model Development and Offline Evaluation']],
    sources: ['nanogpt', 'chinchilla', 'attention'],
    exampleFile: '../../examples/ia-senior/fronteira/reproducao-paper.md'
  },
  {
    number: 34, part: 'pratica', id: 'pesquisa-cientifica', level: 'Sênior → expert',
    title: 'Pesquisa científica em IA',
    objective: 'Localizar, ler, criticar e reproduzir papers; avaliar método, dataset, benchmark, estatística, limitações, causalidade, citações e hype.',
    prerequisites: ['Matemática e estatística', 'Experimentação', 'Leitura técnica em inglês'],
    topics: ['busca e avaliação de fontes', 'abstract e metodologia', 'datasets e experimentos', 'resultados e limitações', 'reprodutibilidade', 'comparação de papers', 'reprodução', 'citation graph', 'benchmarks saturados', 'correlação × causalidade', 'reconhecer hype', 'roteiro prático de leitura'],
    problem: 'Resumo/leaderboard omite condições, variance, compute, ablações e limitações; “paper diz” substitui análise.',
    intuition: 'Paper é argumento com hipótese, método e evidência. Leitura começa pela pergunta e ameaça à validade, não pela conclusão.',
    mathematics: 'Compare efeito, intervalo e protocolo; múltiplas seeds e testes pareados reduzem ruído. Causalidade requer identificação além de correlação.',
    internals: ['Abstract comprime claim; apêndice guarda detalhes.', 'Ablation testa componentes, não prova causalidade universal.', 'Reprodução distingue resultado, método e ambiente.'],
    conceptExample: 'Ganho de 0,3 sem variance e com compute 10× pode não ser substantivo nem reproduzível.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'numpy>=2', gpu: 'Não',
      cost: 'O(k) para k seeds.', limitations: 'Resumo estatístico simples; protocolo real depende da métrica.',
      code: `import numpy as np

baseline = np.array([.801, .798, .804, .800, .799])
candidate = np.array([.805, .803, .806, .801, .804])
delta = candidate - baseline
rng = np.random.default_rng(42)
boot = np.array([rng.choice(delta, len(delta), replace=True).mean() for _ in range(5000)])
print({'mean_delta': float(delta.mean()),
       'ci95': np.quantile(boot, [.025, .975]).tolist()})`
    },
    appliedExample: 'Ficha de leitura registra claim, dados, split, compute, baseline, ablações, limitações e hipótese de reprodução.',
    correctedApproach: 'Triangular fonte original, código/dados e literatura; reproduzir baseline antes da novidade; registrar desvios.',
    decision: 'adotar, experimentar ou rejeitar resultado conforme validade, relevância, reprodutibilidade e custo',
    hypothesis: 'o claim central persiste no domínio local sob protocolo comparável e compute conhecido',
    tradeoffs: ['Reprodução exata aumenta fidelidade e pode ser inviável.', 'Reprodução conceitual testa robustez e muda condições.', 'Paper recente é atual e menos validado.'],
    complexity: 'Compute de reprodução pode ser proibitivo; use escala menor apenas explicitando o que deixa de ser testado.',
    productionImpact: 'Adotar claim não reproduzido transfere risco de pesquisa para usuários e orçamento.',
    errors: ['Só ler abstract', 'SOTA sem data/contexto', 'Ignorar negative results e compute'],
    checklist: ['Fonte é original?', 'Claim e estimando estão claros?', 'Baseline é justo?', 'Seeds/intervalos existem?', 'Limitações e compute foram registrados?'],
    practice: {
      basic: 'Preencher ficha de leitura de um paper fundacional.',
      intermediate: 'Reproduzir uma tabela pequena e registrar desvios.',
      advanced: 'Comparar três papers por protocolo e ameaça à validade.',
      senior: 'Revisar proposal e cortar claim não sustentado.',
      expert: 'Projetar reprodução multi-seed com ablações e relatório negativo.'
    },
    case: {
      title: 'Benchmark “SOTA” não se reproduz', context: 'Equipe tenta adotar paper com ganho pequeno e custo oculto.',
      symptoms: ['seed única', 'baseline antigo', 'preprocess ausente'],
      metrics: ['mean±interval', 'compute', 'effect size'], tools: ['paper checklist', 'environment lock', 'experiment tracker'],
      rootCause: 'Comparação usava baseline/configuração desigual e detalhes ausentes.', correction: 'Reproduzir baseline justo, contatar autores quando necessário e reduzir claim.'
    },
    books: [['prml', 'Prefácio e capítulos matemáticos conforme o tema'], ['esl', 'Caps. 7–8 — avaliação e inferência'], ['ml-powered-apps', 'Caps. 5–6 — avaliação e debugging']],
    sources: ['cs224n', 'attention', 'rag', 'dpo']
  },
  {
    number: 35, part: 'pratica', id: 'performance-ia', level: 'Sênior → expert',
    title: 'Performance e otimização',
    objective: 'Perfilar e otimizar vetorização, memória, data loading, GPU, precisão, quantização, pruning, compilation, kernels, paralelismos, KV cache, batching e speculative decoding.',
    prerequisites: ['Deep learning', 'Arquitetura de sistemas', 'Profiling'],
    topics: ['complexidade e profiling', 'vetorização, memória e batches', 'GPU e VRAM', 'mixed precision', 'quantization, pruning e distillation', 'compilation, ONNX e TensorRT', 'kernel fusion e data loading', 'data/model/pipeline parallelism', 'distributed training', 'KV cache', 'continuous batching', 'speculative decoding'],
    problem: 'Otimização sem perfil troca precisão, estabilidade ou simplicidade por ganho inexistente no gargalo real.',
    intuition: 'Performance é caminho crítico e Pareto: qualidade, throughput, latência, memória, energia e custo; medir end-to-end.',
    mathematics: 'Roofline compara compute intensity a bandwidth; speedup de Amdahl é 1/((1−p)+p/s). Quantização aproxima valores em grades discretas.',
    internals: ['Decode LLM costuma ser memory-bound.', 'Continuous batching preenche slots dinamicamente.', 'Speculative decoding só acelera se aceitação e custo do draft compensarem.'],
    conceptExample: 'Quantizar reduz VRAM e pode não reduzir p95 se fila/retrieval domina.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'torch>=2.13', gpu: 'Opcional',
      cost: 'Benchmark mede mediana após warmup.', limitations: 'CPU por padrão; GPU requer synchronize para timing correto.',
      code: `from time import perf_counter
import torch

torch.manual_seed(42)
a = torch.randn(512, 512)
b = torch.randn(512, 512)
for _ in range(3):
    _ = a @ b
samples = []
for _ in range(10):
    start = perf_counter()
    _ = a @ b
    samples.append((perf_counter() - start) * 1000)
print({'median_ms': sorted(samples)[len(samples) // 2]})`
    },
    appliedExample: 'Perfil mostra data loading 45%, retrieval 30%, modelo 20%; prioridade não é quantizar modelo.',
    correctedApproach: 'Fixar workload e qualidade, instrumentar etapas e hardware, otimizar maior gargalo e repetir teste de regressão.',
    decision: 'técnica de otimização conforme gargalo observado, hardware, qualidade mínima e TCO',
    hypothesis: 'otimização reduz métrica-alvo end-to-end mantendo qualidade, estabilidade e operabilidade',
    tradeoffs: ['Quantização reduz memória e pode degradar qualidade.', 'Compilation acelera steady-state e paga warmup.', 'Paralelismo reduz tempo e aumenta comunicação.'],
    complexity: 'Comunicação pode dominar escala; KV cache O(tokens·layers·hidden); attention O(n²) no prefill.',
    productionImpact: 'Benchmark sem warmup/concurrency/hardware gera capacidade errada; regressão de qualidade precisa bloquear deploy.',
    errors: ['Microbenchmark como SLO', 'Timing GPU sem synchronize', 'Otimizar antes de perfilar'],
    checklist: ['Workload e hardware são representativos?', 'Warmup/concurrency estão definidos?', 'Qualidade tem gate?', 'Gargalo mudou após otimização?', 'TCO e complexidade melhoraram?'],
    practice: {
      basic: 'Calcular memória e FLOPs de camadas.',
      intermediate: 'Perfilar data loader e treino/inferência.',
      advanced: 'Comparar precision/quantization com qualidade e p95.',
      senior: 'Projetar batching/cache/parallelism por workload.',
      expert: 'Analisar continuous batching e speculative decoding por aceitação/TCO.'
    },
    case: {
      title: 'GPU subutilizada após “otimização”', context: 'Modelo foi quantizado, mas throughput não muda.',
      symptoms: ['fila no CPU', 'tokenização serial', 'GPU gaps'],
      metrics: ['stage time', 'tokens/s', 'memory bandwidth'], tools: ['PyTorch profiler', 'trace', 'load generator'],
      rootCause: 'Gargalo estava em preprocess/fila, não no modelo.', correction: 'Vetorização, prefetch e batching; reavaliar necessidade de quantização.'
    },
    books: [['ai-engineering', 'Cap. 9 — Inference Optimization'], ['nlp-transformers', 'Cap. 8 — Making Transformers Efficient in Production'], ['hands-on-ml', 'Cap. 19']],
    sources: ['pytorch', 'ray', 'kserve', 'transformers']
  },
  {
    number: 36, part: 'pratica', id: 'avaliacao-generativa', level: 'Sênior → expert',
    title: 'Avaliação de sistemas generativos',
    objective: 'Construir avaliação humana e automatizada com golden/synthetic sets, groundedness, factualidade, relevância, segurança, RAG metrics, task success, custo e regressão.',
    prerequisites: ['Avaliação de modelos', 'LLMs/RAG/agentes', 'Estatística'],
    topics: ['avaliação humana e automatizada', 'LLM-as-a-judge e limitações', 'groundedness e factualidade', 'relevância e completude', 'toxicidade, segurança e robustness', 'retrieval metrics', 'context precision/recall', 'answer relevance e faithfulness', 'task success', 'latência e custo', 'regression testing', 'golden e synthetic datasets', 'experiment tracking'],
    problem: 'Benchmark público e judge único premiam estilo, vazam respostas ou discordam de humanos; produto continua falhando em tarefas reais.',
    intuition: 'Avaliação generativa é portfólio de evidências por camada: retrieval, resposta, tarefa, segurança, operação e humano.',
    mathematics: 'Estimate taxas com intervalos; calibrar judge contra amostra humana; medir concordância e viés posicional/modelo.',
    internals: ['Judge é outro modelo sujeito a bias.', 'Synthetic data amplia cobertura e herda gerador.', 'Faithfulness exige afirmação↔evidência, não similaridade superficial.'],
    conceptExample: 'Resposta elegante recebe 5/5 do judge, mas cita fonte inexistente; groundedness precisa de verificação separada.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'Somente biblioteca padrão', gpu: 'Não',
      cost: 'O(n·m) para n casos e m critérios.', limitations: 'Heurística determinística; judges reais precisam de calibração humana.',
      code: `from dataclasses import dataclass

@dataclass(frozen=True)
class EvalCase:
    required_terms: frozenset[str]
    forbidden_terms: frozenset[str]

def evaluate(answer: str, case: EvalCase) -> dict[str, bool]:
    text = answer.lower()
    return {
        'complete': all(term in text for term in case.required_terms),
        'safe': all(term not in text for term in case.forbidden_terms),
    }

case = EvalCase(frozenset({'rollback', 'versao'}), frozenset({'senha'}))
print(evaluate('Rollback usa a versão anterior.', case))`
    },
    appliedExample: 'Release gate combina qrels, rubric humana, judge calibrado, policy tests, task success, p95 e cost/success.',
    correctedApproach: 'Derivar dataset de falhas reais, critérios independentes e revisão cega; calibrar automação e manter amostra humana.',
    decision: 'métodos e amostra conforme risco, subjetividade, frequência, custo e possibilidade de ground truth',
    hypothesis: 'suite prediz falhas e valor do produto melhor que benchmark público e detecta regressões relevantes',
    tradeoffs: ['Humano é contextual e caro/variável.', 'Judge escala e compartilha vieses.', 'Golden set é estável e envelhece.'],
    complexity: 'Custo cresce casos×modelos×repetições×judges; avaliação humana exige desenho e controle de qualidade.',
    productionImpact: 'Sem suite local, mudança de prompt/modelo é deploy sem teste; eval precisa bloquear e informar rollback.',
    errors: ['Judge único como verdade', 'Golden contaminado', 'Média sem slices/intervalos'],
    checklist: ['Casos vêm do produto?', 'Critérios são separáveis?', 'Judge foi calibrado?', 'Segurança e custo têm gates?', 'Falhas novas atualizam a suite?'],
    practice: {
      basic: 'Criar rubrica objetiva para dez respostas.',
      intermediate: 'Implementar evaluator determinístico e golden set.',
      advanced: 'Calibrar judge com revisão humana cega.',
      senior: 'Criar release gate RAG/agent por camadas.',
      expert: 'Analisar judge bias, contamination e incerteza multiavaliador.'
    },
    case: {
      title: 'LLM-as-a-judge aprova regressão', context: 'Judge prefere respostas longas do candidato, humanos preferem baseline correto.',
      symptoms: ['verbosity bias', 'self-preference', 'baixa concordância'],
      metrics: ['agreement', 'false accept rate', 'task success'], tools: ['blind human eval', 'swap order', 'multi-judge'],
      rootCause: 'Judge não foi calibrado e rubric misturava estilo/factualidade.', correction: 'Separar critérios, contrabalançar ordem e manter gate humano amostral.'
    },
    books: [['ai-engineering', 'Caps. 3–4'], ['ml-powered-apps', 'Caps. 5–7'], ['designing-ml-systems', 'Caps. 6 e 8']],
    sources: ['nist', 'mlflow']
  },
  {
    number: 37, part: 'pratica', id: 'lideranca-tecnica', level: 'Expert → liderança',
    title: 'Liderança técnica em IA',
    objective: 'Liderar framing, viability, build×buy, seleção, risco, TCO, arquitetura, roadmap, experimentação, governança e comunicação de incerteza sem hype.',
    prerequisites: ['Academia técnica ou equivalência', 'Arquitetura e produto', 'Comunicação com stakeholders'],
    topics: ['viabilidade e definição de problema', 'build versus buy', 'seleção de modelos e provedores', 'avaliação de risco', 'arquitetura e custo total', 'governança e roadmap', 'experimentação e métricas', 'gestão de incerteza', 'revisão e ADRs', 'comunicação com stakeholders', 'gestão de expectativas', 'prevenção de hype', 'orientação de equipes'],
    problem: 'Roadmap centrado em tecnologia cria demo sem dono, dados, integração, métrica, operação ou kill criterion.',
    intuition: 'Liderança reduz incerteza em etapas: problema→baseline→protótipo→piloto→produção, com decisão explícita em cada gate.',
    mathematics: 'Valor esperado=probabilidade de sucesso×benefício−TCO−risco esperado. Opções reais favorecem experimentos pequenos antes de compromisso irreversível.',
    internals: ['Build×buy compara diferenciação e controle, não apenas preço.', 'ADR registra contexto/alternativas/consequências.', 'Portfolio balanceia pesquisa, plataforma e produto.'],
    conceptExample: 'Comprar API acelera validação; migrar para self-host só após volume, privacidade ou diferenciação justificarem.',
    implementation: {
      language: 'Python 3.12+', dependencies: 'Somente biblioteca padrão', gpu: 'Não',
      cost: 'O(n) para n opções.', limitations: 'Pesos não substituem decisão colegiada nem análise legal/financeira.',
      code: `from dataclasses import dataclass

@dataclass(frozen=True)
class Proposal:
    probability: float
    benefit: float
    tco: float
    risk: float

def expected_value(p: Proposal) -> float:
    if not 0 <= p.probability <= 1:
        raise ValueError('invalid probability')
    return p.probability * p.benefit - p.tco - p.risk

print(expected_value(Proposal(.55, 500_000, 160_000, 70_000)))`
    },
    appliedExample: 'Conselho técnico avalia kill criteria, eval, TCO, risk owner, reversibilidade e capacidade antes do piloto.',
    correctedApproach: 'Começar pela decisão/usuário; quantificar baseline e incerteza; executar experimento barato; registrar ADR e próximos gates.',
    decision: 'build, buy, partner ou não fazer conforme diferenciação, risco, dados, capacidade, prazo, TCO e saída',
    hypothesis: 'solução move métrica de negócio de forma causal e operável dentro de risco/TCO aceitos',
    tradeoffs: ['Buy acelera e concentra dependência.', 'Build diferencia e aumenta investimento/on-call.', 'Piloto reduz incerteza e pode virar “pilot purgatory” sem gate.'],
    complexity: 'Complexidade organizacional cresce com fornecedores, modelos, jurisdições e equipes; padronização reduz entropia.',
    productionImpact: 'Expectativa inflada causa bypass de segurança e compromisso precoce; governance e kill criteria preservam capital e confiança.',
    errors: ['Roadmap por buzzword', 'Sunk cost sem kill gate', 'Prometer precisão/automação antes de avaliação'],
    checklist: ['Problema/usuário/baseline são claros?', 'Valor e risco são mensuráveis?', 'Build×buy inclui TCO/exit?', 'Owner e gate estão definidos?', 'Incerteza foi comunicada?'],
    practice: {
      basic: 'Reformular três pedidos de “colocar IA” como decisões.',
      intermediate: 'Criar viability canvas e baseline.',
      advanced: 'Produzir ADR build×buy com TCO e risco.',
      senior: 'Conduzir design review e plano de experimento/kill.',
      expert: 'Definir portfólio, padrões e governance para múltiplas equipes.'
    },
    case: {
      title: 'Programa de IA preso em pilotos', context: 'Cinco demos não chegam a produção e consomem orçamento crescente.',
      symptoms: ['sem owner', 'sem integração', 'métricas vaidosas'],
      metrics: ['time-to-decision', 'pilot→production rate', 'expected value'], tools: ['viability gate', 'ADR', 'portfolio review'],
      rootCause: 'Projetos começaram por tecnologia sem problema, baseline ou kill criteria.', correction: 'Encerrar pilotos sem tese; priorizar poucos casos com owner, dados e gates.'
    },
    books: [['ml-powered-apps', 'Caps. 1–2 e 8–11'], ['designing-ml-systems', 'Caps. 1–2, 10–11'], ['ai-engineering', 'Caps. 1 e 10']],
    sources: ['nist', 'euai', 'sagemaker', 'azureml', 'vertex']
  },
];

export const iaModules = moduleCatalog.map(createModule);

export const iaProjects = [
  {
    number: 1, id: 'projeto-analise', title: 'Análise de dados reproduzível',
    objective: 'Criar a fundação de dados do produto que será evoluída pelos seis projetos seguintes.',
    evolves: null,
    requirements: ['Dataset público pequeno com licença registrada', 'Python 3.12+, ambiente fixado e seed', 'Contrato de dados e pergunta de negócio'],
    architecture: ['CLI de ingestão', 'camada raw imutável', 'transformações testadas', 'relatório EDA versionado'],
    stages: ['Ingerir e validar schema.', 'Limpar sem sobrescrever raw.', 'Explorar distribuições, missing e slices.', 'Publicar relatório e datasheet.'],
    acceptance: ['Execução do zero em comando documentado.', 'Zero transformação aprendida antes do split.', 'Testes de schema e invariantes passam.', 'Relatório diferencia achado, hipótese e limitação.'],
    metrics: ['completude', 'duplicatas', 'drift entre splits', 'tempo e peak memory'],
    tests: ['schema', 'idempotência', 'determinismo', 'smoke do pipeline'],
    risks: ['licença/PII', 'leakage temporal', 'viés de seleção'],
    deliveries: ['repositório', 'data contract', 'datasheet', 'EDA e decision log'],
    future: ['Particionamento incremental', 'quality gates em CI']
  },
  {
    number: 2, id: 'projeto-ml', title: 'Machine learning supervisionado com API',
    objective: 'Evoluir o dataset do Projeto 1 para baseline, pipeline, modelo avaliado e API de inferência.',
    evolves: 'projeto-analise',
    requirements: ['Artefato e contrato do Projeto 1', 'Target/decisão definidos', 'Baseline determinístico ou estatístico'],
    architecture: ['feature pipeline', 'treino/validação/teste', 'registry local', 'API stateless com schema'],
    stages: ['Criar splits point-in-time.', 'Comparar baseline e duas famílias.', 'Calibrar threshold por custo.', 'Empacotar preprocess+modelo e servir.'],
    acceptance: ['Test set não participa do tuning.', 'Métricas e intervalos por slice.', 'API rejeita schema inválido.', 'Teste de paridade batch×online.'],
    metrics: ['PR-AUC ou métrica da decisão', 'calibração', 'p95', 'cost/decision'],
    tests: ['unitários de features', 'integração pipeline', 'contrato API', 'regressão de modelo'],
    risks: ['leakage', 'desbalanceamento', 'training-serving skew'],
    deliveries: ['model card', 'API', 'benchmark', 'ADR de modelo'],
    future: ['Shadow deployment', 'labels atrasados']
  },
  {
    number: 3, id: 'projeto-dl', title: 'Deep learning com tracking e export',
    objective: 'Adicionar ao artefato um modelo profundo quando o baseline do Projeto 2 demonstrar lacuna representacional.',
    evolves: 'projeto-ml',
    requirements: ['Baseline e evaluation contract do Projeto 2', 'Dataset com volume e licença adequados', 'Budget de compute'],
    architecture: ['DataLoader', 'trainer reutilizável', 'tracking/checkpoints', 'export e teste de paridade'],
    stages: ['Overfit de batch pequeno.', 'Treinar baseline de rede.', 'Instrumentar gradientes/GPU.', 'Exportar e comparar com ML clássico.'],
    acceptance: ['Seeds/config/ambiente registrados.', 'Checkpoint recupera treino.', 'Ganho com intervalo justifica custo.', 'Export mantém tolerância numérica.'],
    metrics: ['loss/quality', 'samples/s', 'VRAM', 'p95 e custo'],
    tests: ['shapes', 'gradient smoke', 'checkpoint resume', 'export parity'],
    risks: ['instabilidade', 'GPU ociosa', 'overfitting'],
    deliveries: ['trainer', 'runs', 'model card revisado', 'perfil de performance'],
    future: ['AMP', 'treino distribuído']
  },
  {
    number: 4, id: 'projeto-nlp', title: 'NLP com transformers',
    objective: 'Evoluir a plataforma para texto contextual com tokenização, fine-tuning, avaliação, serving e otimização.',
    evolves: 'projeto-dl',
    requirements: ['Trainer e tracking do Projeto 3', 'Baseline TF-IDF', 'Corpus e política de PII'],
    architecture: ['tokenizer/model compatíveis', 'PEFT opcional', 'evaluation suite', 'serving versionado'],
    stages: ['Auditar corpus/tokenizer.', 'Comparar TF-IDF e transformer.', 'Fine-tune somente se justificado.', 'Otimizar e servir com fallback.'],
    acceptance: ['Macro-métrica e slices por idioma/intenção.', 'Regressão contra baseline.', 'Modelo/tokenizer/version juntos.', 'p95/custo dentro do budget.'],
    metrics: ['macro-F1/task metric', 'ECE', 'tokens/s', 'cost/success'],
    tests: ['tokenização', 'truncamento', 'train/eval modes', 'API parity'],
    risks: ['PII', 'domínio', 'truncamento', 'licença'],
    deliveries: ['corpus card', 'eval report', 'endpoint', 'ADR baseline×transformer'],
    future: ['Distillation', 'multilingual adaptation']
  },
  {
    number: 5, id: 'projeto-rag', title: 'RAG com citações, avaliação e segurança',
    objective: 'Adicionar conhecimento atualizável ao serviço do Projeto 4 sem incorporar fatos mutáveis nos pesos.',
    evolves: 'projeto-nlp',
    requirements: ['Serviço NLP/LLM do Projeto 4', 'Corpus autorizado e versionado', 'Qrels e golden answers'],
    architecture: ['ingestão/parser', 'índice híbrido com ACL', 'reranker', 'geração/citação', 'eval e traces'],
    stages: ['Ingerir e deduplicar.', 'Experimentar chunking/embedding.', 'Aplicar retrieval+rerank com ACL.', 'Gerar com citations/abstention.'],
    acceptance: ['ACL aplicada antes da recuperação.', 'Fonte/versão por afirmação.', 'Context e answer metrics passam.', 'Injection indireta não obtém efeito.'],
    metrics: ['recall@k', 'context precision', 'faithfulness', 'p95 e cost/success'],
    tests: ['parser', 'ACL/tenant', 'retrieval regression', 'adversarial corpus'],
    risks: ['vazamento', 'fonte obsoleta', 'duplicatas', 'prompt injection'],
    deliveries: ['pipeline RAG', 'qrels/golden set', 'threat model', 'runbook de reindexação'],
    future: ['Adaptive retrieval', 'cache seguro']
  },
  {
    number: 6, id: 'projeto-agente', title: 'Agente limitado e human-in-the-loop',
    objective: 'Evoluir o RAG do Projeto 5 para um workflow com tools e planejamento apenas onde há incerteza real.',
    evolves: 'projeto-rag',
    requirements: ['RAG seguro do Projeto 5', 'Tools idempotentes e com RBAC', 'State machine e orçamento'],
    architecture: ['orchestrator', 'policy enforcement', 'state store', 'tools sandboxed', 'HITL', 'tracing'],
    stages: ['Modelar fluxo determinístico.', 'Identificar decisões abertas.', 'Adicionar proposer e tools mínimas.', 'Testar loops/falhas/aprovação.'],
    acceptance: ['max_steps, timeout e budget.', 'Tool revalida identidade/schema.', 'Efeito crítico exige aprovação.', 'Kill switch e trace reproduzem decisão.'],
    metrics: ['task success', 'steps/task', 'cost/success', 'policy violation rate'],
    tests: ['state transitions', 'idempotência', 'loop detection', 'tool denial'],
    risks: ['autonomia', 'tool abuse', 'estado corrompido', 'custos'],
    deliveries: ['workflow/agent', 'threat model atualizado', 'traces', 'runbook'],
    future: ['Policy learning controlada', 'avaliação multi-turn']
  },
  {
    number: 7, id: 'projeto-producao', title: 'Sistema de IA em produção',
    objective: 'Levar todo o artefato dos Projetos 1–6 a um ciclo operável, governado, observável e reversível.',
    evolves: 'projeto-agente',
    requirements: ['Artefatos, contratos e evals anteriores', 'Ambientes isolados', 'SLO, owner, risco e TCO aprovados'],
    architecture: ['pipeline CI/CD/CT', 'registry', 'serving', 'observabilidade', 'drift/labels', 'security/governance'],
    stages: ['Containerizar e provisionar.', 'Registrar lineage e gates.', 'Shadow e canary.', 'Monitorar, simular incidente e rollback.'],
    acceptance: ['Build reproduzível e SBOM.', 'Deploy bloqueado por quality/security gates.', 'Drift possui playbook, não retraining cego.', 'Rollback e restauração ensaiados.'],
    metrics: ['SLO', 'task success', 'drift/performance', 'cost/success', 'MTTR'],
    tests: ['unit/integration/e2e', 'load/soak', 'security', 'disaster recovery'],
    risks: ['dependency/model supply chain', 'drift', 'quota/GPU', 'regressão silenciosa'],
    deliveries: ['infra e pipeline', 'dashboards/alerts', 'model/datasheet', 'ADRs e runbooks'],
    future: ['Multi-region', 'capacity automation', 'portfolio governance']
  }
];

export const iaAssessment = Object.freeze({
  levels: [
    { level: 'Fundamental', expected: 'Explica conceitos, executa exemplos e reproduz cálculos.', evidence: 'Notebook/script testado e notas próprias.', redFlags: 'Memoriza ferramenta sem mecanismo.' },
    { level: 'Intermediário', expected: 'Treina, avalia e compara baselines sem leakage.', evidence: 'Pipeline, métricas, intervalos e análise de erros.', redFlags: 'Tuning no test set ou métrica única.' },
    { level: 'Sênior', expected: 'Projeta sistema, SLO, risco, custo, segurança e rollback.', evidence: 'ADR, traces, gates, runbook e projeto operável.', redFlags: 'Demo sem owner, eval ou operação.' },
    { level: 'Expert', expected: 'Implementa componentes, lê papers, faz ablações e diagnostica internals.', evidence: 'Reprodução, profiling, análise de sensibilidade e limites.', redFlags: 'Claim sem protocolo, hardware ou validade.' },
    { level: 'Liderança', expected: 'Define padrões, portfólio, viability e governança sob incerteza.', evidence: 'Decision record, TCO, risk acceptance e roadmap.', redFlags: 'Roadmap guiado por hype ou fornecedor.' }
  ],
  completion: [
    'Concluir 30 módulos com ao menos 80% dos checklists demonstrados por evidência.',
    'Entregar os 7 projetos como evolução do mesmo artefato, sem demos descartáveis.',
    'Resolver 90 exercícios sem consultar o gabarito antes da tentativa registrada.',
    'Responder uma pergunta de cada nível em 10 módulos sorteados e defender trade-offs.',
    'Executar 5 estudos de caso sorteados com hipótese, investigação, causa raiz e prevenção.',
    'Reproduzir um resultado de paper e registrar resultado negativo ou positivo honestamente.',
    'Passar um design review final de qualidade, segurança, governança, custo e rollback.'
  ]
});

export const iaAnswerKey = iaModules.map((module) => ({
  module: module.number,
  title: module.title,
  basic: `A resposta deve usar corretamente ${module.topics.slice(0, 3).join(', ')}, explicitar hipótese e verificar o resultado.`,
  intermediate: `O código deve ser executável, declarar dependências, preservar o contrato “${module.correctedApproach}” e produzir a evidência solicitada.`,
  advanced: `O diagnóstico deve medir ${module.caseStudy.metrics.join(', ')}, distinguir ao menos três hipóteses e chegar à causa raiz sem começar pela ferramenta.`,
  senior: `A solução forte explicita ${module.decision}, SLO/risco/custo, rollout e rollback.`,
  expert: `A solução expert testa “${module.hypothesis}” com baseline, seeds/intervalos ou ablação, limites de validade e resultado reproduzível.`
}));
