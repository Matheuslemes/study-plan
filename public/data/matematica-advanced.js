/*
 * ACADEMIA DE MATEMÁTICA — matemática aplicada à Engenharia de Software e IA.
 *
 * Objetivo da trilha: dar a base matemática que sustenta algoritmos (fase 1) e a
 * trilha de IA (fases 11–12). Cada módulo é ancorado nos livros do acervo local
 * (public/pdfs/livros-matematica) e exige evidência reproduzível, nunca só leitura.
 *
 * Estrutura conforme PADRAO-TRILHAS-ACADEMIA.md (§8): schema pela fábrica
 * compartilhada; conteúdo, referências e bibliografia específicos da trilha.
 * Os campos auxiliares (useWhen, avoidWhen, tradeoffs, production, risks,
 * checklist, prerequisites, summary) são AUTORAIS por módulo — não caem no
 * texto genérico da fábrica.
 */

import { createAcademyData } from './academy-data-factory.js';

const data = createAcademyData({
  title: 'Matemática Aplicada à Engenharia e IA',
  baseline: 'Álgebra escolar revisada, Python com NumPy e disposição para demonstrar resultados, não apenas usá-los.',
  projectNoun: 'notebook matemático versionado',
  partSpecs: [
    {
      id: 'discreta',
      title: 'Lógica e matemática discreta',
      subtitle: 'Proposições, provas, conjuntos, relações, combinatória, grafos e recorrências.',
      objectives: [
        'Formalizar afirmações e demonstrá-las por prova direta, contradição e indução.',
        'Modelar dados e dependências com conjuntos, relações e grafos.',
        'Contar espaços de estados e estimar crescimento com recorrências.'
      ]
    },
    {
      id: 'linear',
      title: 'Álgebra linear e geometria',
      subtitle: 'Vetores, matrizes, projeção, mínimos quadrados, autovalores, SVD e embeddings.',
      objectives: [
        'Interpretar matrizes como transformações e diagnosticar posto e núcleo.',
        'Derivar mínimos quadrados por projeção e reduzir dimensão com SVD.',
        'Aplicar produto interno e cosseno a espaços de embeddings.'
      ]
    },
    {
      id: 'probabilidade',
      title: 'Probabilidade e estatística',
      subtitle: 'Incerteza, Bayes, distribuições, estimação, concentração, testes e métricas.',
      objectives: [
        'Atualizar crenças com Bayes e escolher distribuições adequadas.',
        'Estimar parâmetros com incerteza e limitar o erro por concentração.',
        'Avaliar modelos com métricas corretas e controle de erro.'
      ]
    },
    {
      id: 'otimizacao',
      title: 'Cálculo e otimização para IA',
      subtitle: 'Derivadas, gradientes, regra da cadeia, descida de gradiente, estabilidade e attention.',
      objectives: [
        'Diferenciar funções compostas de várias variáveis com rigor.',
        'Implementar descida de gradiente e diagnosticar convergência.',
        'Corrigir instabilidade numérica e explicar a matemática do self-attention.'
      ]
    },
    {
      id: 'fronteira',
      title: 'Fronteira: a matemática por trás da IA moderna',
      subtitle: 'Teoria da informação, aprendizado estatístico, processos estocásticos, otimização convexa, inferência variacional e análise real.',
      objectives: [
        'Derivar entropia, KL e cross-entropy e ligá-las à perda de classificação.',
        'Decompor o erro em viés, variância e ruído e explicar generalização.',
        'Modelar processos com cadeias de Markov e diagnosticar convergência pelo espectro.',
        'Provar otimalidade por KKT e dualidade em problemas convexos.',
        'Derivar o ELBO e explicar a inferência variacional que sustenta VAEs e difusão.',
        'Usar o rigor da análise real para não tirar conclusões falsas sobre limites, séries e amostras.'
      ]
    }
  ],
  moduleSpecs: [
    // ── Parte 1 · Lógica e matemática discreta ──
    {
      part: 'discreta', level: 'Fundamentos',
      title: 'Lógica proposicional e de predicados',
      objective: 'Construir e verificar argumentos com lógica proposicional e de predicados, provando validade por tabela-verdade ou regras de inferência.',
      problem: 'Especificações, invariantes e condições de código ficam ambíguas quando não são escritas como proposições e quantificadores verificáveis.',
      concepts: ['Conectivos e tabelas-verdade', 'Equivalências lógicas', 'Quantificadores ∀/∃', 'Regras de inferência'],
      internals: ['Uma implicação p→q só é falsa quando p é verdadeira e q é falsa; a contrapositiva ¬q→¬p é equivalente, mas a recíproca não.', 'Negar ∀x P(x) produz ∃x ¬P(x) — a receita para achar contraexemplos.'],
      prerequisites: ['Álgebra escolar e leitura de símbolos lógicos.', 'Disposição para escrever afirmações formalmente.'],
      useWhen: ['Use ao escrever specs, invariantes e pré/pós-condições que precisam ser inequívocas.', 'Priorize quando uma condição de negócio precisa virar teste ou prova.'],
      avoidWhen: ['Não formalize o que já é trivial e claro em linguagem natural.', 'Não confunda a recíproca com a implicação original.'],
      tradeoffs: { ganho: 'Afirmações viram objetos verificáveis, sem ambiguidade.', custo: 'Formalizar tem custo de notação e disciplina que nem todo caso justifica.' },
      production: 'A evidência é um notebook versionado que formaliza três condições de negócio e prova validade ou dá contraexemplo, citando a regra em cada passo.',
      risks: ['Trocar a implicação pela recíproca e inverter o requisito.', 'Negar um quantificador errado e perder o contraexemplo.'],
      checklist: ['Traduzir cada condição para proposições e quantificadores.', 'Provar validade por tabela-verdade ou regras de inferência.', 'Testar a contrapositiva e checar a recíproca.', 'Registrar a regra usada em cada passo.'],
      summary: 'Implicação equivale à contrapositiva, não à recíproca; negar ∀ dá ∃¬ — a receita do contraexemplo.',
      books: ['discrete', 'proof'],
      exercises: [{ level: 'Fundamentos', title: 'Formalizar e validar um argumento', task: 'Traduzir três condições de negócio para proposições e provar validade ou apresentar contraexemplo.', acceptance: 'Cada passo cita a regra de inferência ou equivalência usada.', evidence: 'Notebook/PDF versionado com o argumento formal.' }],
      interview: [{ level: 'Fundamentos', question: 'Qual a diferença entre implicação, recíproca e contrapositiva, e por que importa em código?', expected: 'Reconhecer a equivalência entre implicação e contrapositiva e a não-equivalência da recíproca.' }]
    },
    {
      part: 'discreta', level: 'Fundamentos',
      title: 'Provas: direta, contrapositiva, contradição e indução',
      objective: 'Demonstrar propriedades por prova direta, contrapositiva, contradição e indução matemática, justificando a escolha do método.',
      problem: 'Afirmações sobre correção de algoritmos e invariantes ficam sem garantia quando são apenas testadas por exemplos.',
      concepts: ['Prova direta e contrapositiva', 'Redução ao absurdo', 'Indução fraca e forte', 'Invariantes de laço'],
      internals: ['Indução prova ∀n≥n₀ P(n) via caso-base mais o passo P(k)→P(k+1); a indução forte assume P(n₀..k).', 'Uma prova por contradição assume a negação da tese e deriva um absurdo lógico.'],
      prerequisites: ['Dominar lógica proposicional e quantificadores.', 'Conforto com manipulação algébrica.'],
      useWhen: ['Use para garantir correção de algoritmo ou invariante além do teste por exemplo.', 'Priorize quando o custo de um contraexemplo em produção é alto.'],
      avoidWhen: ['Não substitua teste por prova onde a especificação é incerta ou muda muito.', 'Não use indução onde o passo não se reduz a casos anteriores.'],
      tradeoffs: { ganho: 'Garantia sobre todos os casos, não só os testados.', custo: 'Provar é caro e frágil se a especificação muda.' },
      production: 'A evidência é um documento com a prova por indução de uma fórmula fechada e de um invariante de laço, com caso-base e passo explícitos.',
      risks: ['Caso-base ausente ou errado que invalida a indução.', 'Assumir a tese na prova por contradição (petição de princípio).'],
      checklist: ['Escolher o método pela estrutura da afirmação.', 'Enunciar caso-base e passo indutivo (ou a hipótese de contradição).', 'Justificar cada passo.', 'Ligar o invariante ao laço correspondente.'],
      summary: 'Indução prova ∀n≥n₀ via caso-base + P(k)→P(k+1); a forte assume todos os casos até k.',
      books: ['proof', 'discrete'],
      exercises: [{ level: 'Aplicação', title: 'Provar correção por indução', task: 'Provar por indução a fórmula fechada de uma soma e o invariante de um laço simples.', acceptance: 'Caso-base e passo indutivo explícitos e corretos.', evidence: 'Documento com a prova e o laço correspondente.' }],
      interview: [{ level: 'Aplicação', question: 'Quando você usa indução forte em vez de fraca?', expected: 'Quando o passo depende de vários casos anteriores, não só do imediatamente anterior.' }]
    },
    {
      part: 'discreta', level: 'Fundamentos',
      title: 'Conjuntos, relações e funções',
      objective: 'Modelar dados e restrições com conjuntos, relações e funções, classificando relações por reflexividade, simetria, transitividade e ordem.',
      problem: 'Modelos de domínio e esquemas ficam inconsistentes quando cardinalidade, equivalência e ordem não são explícitas.',
      concepts: ['Operações de conjuntos e cardinalidade', 'Relações de equivalência e de ordem', 'Funções: injeção, sobrejeção, bijeção', 'Fecho transitivo'],
      internals: ['Uma relação de equivalência particiona o conjunto em classes disjuntas que o cobrem.', 'Bijeção garante inversa — base de mapeamentos reversíveis e de hashing sem colisão.'],
      prerequisites: ['Noção de conjuntos e operações básicas.', 'Ter modelado algum domínio ou esquema de dados.'],
      useWhen: ['Use ao modelar domínios, esquemas e restrições com precisão.', 'Priorize quando cardinalidade, equivalência ou ordem afetam o design.'],
      avoidWhen: ['Não assuma que uma relação é de equivalência sem provar as três propriedades.', 'Não trate como bijeção um mapeamento que não tem inversa.'],
      tradeoffs: { ganho: 'Modelos de domínio consistentes, com equivalência e ordem explícitas.', custo: 'Formalizar relações exige provar propriedades que a intuição costuma pular.' },
      production: 'A evidência é um notebook que modela três relações de um domínio real e prova quais são de equivalência ou de ordem.',
      risks: ['Supor equivalência sem transitividade e criar classes inconsistentes.', 'Confundir injeção, sobrejeção e bijeção ao projetar mapeamentos.'],
      checklist: ['Modelar o domínio com conjuntos e relações.', 'Testar reflexividade, simetria e transitividade.', 'Classificar cada função (injeção/sobrejeção/bijeção).', 'Provar ou refutar cada propriedade com exemplo.'],
      summary: 'Uma relação de equivalência particiona em classes disjuntas; bijeção garante inversa (base de mapeamentos reversíveis).',
      books: ['discrete', 'proof'],
      exercises: [{ level: 'Aplicação', title: 'Classificar relações de um domínio real', task: 'Modelar três relações do seu domínio e provar quais são de equivalência ou de ordem.', acceptance: 'Cada propriedade é provada ou refutada com exemplo.', evidence: 'Notebook com as relações e as provas.' }],
      interview: [{ level: 'Aplicação', question: 'Por que uma relação de equivalência induz uma partição?', expected: 'As classes são disjuntas e cobrem o conjunto por reflexividade, simetria e transitividade.' }]
    },
    {
      part: 'discreta', level: 'Aplicação',
      title: 'Contagem e combinatória',
      objective: 'Resolver problemas de contagem com os princípios aditivo e multiplicativo, permutações, combinações e inclusão-exclusão.',
      problem: 'Estimativas de espaço de estados, colisões e complexidade combinatória ficam erradas sem contagem rigorosa.',
      concepts: ['Princípios aditivo e multiplicativo', 'Permutações e combinações', 'Inclusão-exclusão', 'Princípio da casa dos pombos'],
      internals: ['C(n,k)=n!/(k!(n−k)!) conta subconjuntos sem ordem e é a base do binômio de Newton.', 'Inclusão-exclusão corrige a sobrecontagem de uniões não disjuntas.'],
      prerequisites: ['Operações aritméticas e fatorial.', 'Noção de conjuntos e uniões.'],
      useWhen: ['Use ao estimar espaço de estados, colisões e complexidade combinatória.', 'Priorize antes de assumir que um espaço é pequeno o bastante para força bruta.'],
      avoidWhen: ['Não conte uniões não disjuntas sem inclusão-exclusão.', 'Não confunda arranjo (com ordem) com combinação (sem ordem).'],
      tradeoffs: { ganho: 'Estimativas de tamanho e colisão corretas, verificáveis por simulação.', custo: 'Contagem rigorosa exige identificar ordem e sobrecontagem com cuidado.' },
      production: 'A evidência é um notebook que calcula o número de configurações válidas de um recurso real e o confirma por simulação.',
      risks: ['Sobrecontar uniões por ignorar a inclusão-exclusão.', 'Trocar permutação por combinação e errar o fator k!.'],
      checklist: ['Identificar se a ordem importa.', 'Aplicar princípio aditivo/multiplicativo, C(n,k) ou P(n,k).', 'Corrigir uniões com inclusão-exclusão.', 'Verificar a fórmula fechada por simulação.'],
      summary: 'C(n,k) conta subconjuntos sem ordem; inclusão-exclusão corrige a sobrecontagem de uniões.',
      books: ['discrete', 'concrete'],
      exercises: [{ level: 'Aplicação', title: 'Contar o espaço de um problema real', task: 'Calcular o número de configurações válidas de um recurso do seu sistema e verificar por simulação.', acceptance: 'A fórmula fechada bate com a contagem por simulação.', evidence: 'Notebook com a fórmula e a verificação.' }],
      interview: [{ level: 'Aplicação', question: 'Como o princípio da casa dos pombos garante colisões em hashing?', expected: 'Mais itens que compartimentos força pelo menos uma colisão.' }]
    },
    {
      part: 'discreta', level: 'Aplicação',
      title: 'Grafos e relações de recorrência',
      objective: 'Modelar dependências e fluxos com grafos e resolver recorrências para estimar o crescimento de custo.',
      problem: 'Ciclos de dependência, caminhos e crescimento de custo passam despercebidos sem modelo de grafo e análise de recorrência.',
      concepts: ['Grafos dirigidos e não dirigidos', 'Percursos e ordenação topológica', 'Recorrências e teorema mestre', 'Somatórios e séries'],
      internals: ['Ordenação topológica só existe em DAG; um ciclo impede o escalonamento de dependências.', 'O teorema mestre resolve T(n)=aT(n/b)+f(n) comparando f(n) com n^(log_b a).'],
      prerequisites: ['Conjuntos e relações (módulo anterior).', 'Noção de complexidade assintótica.'],
      useWhen: ['Use ao modelar dependências, fluxos e estimar o crescimento de custo.', 'Priorize quando há risco de ciclo ou recursão de custo desconhecido.'],
      avoidWhen: ['Não tente ordenação topológica em grafo com ciclo.', 'Não estime custo de recursão sem resolver a recorrência.'],
      tradeoffs: { ganho: 'Dependências e custo ficam explícitos e analisáveis.', custo: 'Modelar como grafo e resolver a recorrência tem custo de formalização.' },
      production: 'A evidência é um notebook que modela as dependências de um build como grafo, detecta ciclos e resolve a recorrência do custo.',
      risks: ['Não detectar um ciclo e travar o escalonamento de dependências.', 'Aplicar o teorema mestre fora de suas hipóteses.'],
      checklist: ['Modelar o problema como grafo dirigido/não dirigido.', 'Detectar ciclos e tentar ordenação topológica.', 'Montar a recorrência do custo.', 'Resolver com o teorema mestre e conferir.'],
      summary: 'Ordenação topológica só existe em DAG; o teorema mestre resolve T(n)=aT(n/b)+f(n) comparando f com n^(log_b a).',
      books: ['discrete', 'concrete'],
      exercises: [{ level: 'Aplicação', title: 'Detectar ciclo e estimar custo', task: 'Modelar as dependências de um build como grafo, detectar ciclos e resolver a recorrência do custo.', acceptance: 'Ciclo detectado corretamente e complexidade justificada.', evidence: 'Notebook com o grafo e a análise.' }],
      interview: [{ level: 'Aplicação', question: 'Por que uma ordenação topológica exige um DAG?', expected: 'Um ciclo cria dependência mútua, sem ordem linear consistente.' }]
    },

    // ── Parte 2 · Álgebra linear e geometria ──
    {
      part: 'linear', level: 'Fundamentos',
      title: 'Vetores, normas e produto interno',
      objective: 'Operar vetores com normas e produto interno, interpretando distância, ângulo e projeção geometricamente.',
      problem: 'Similaridade, distância e magnitude em dados vetoriais são mal usadas sem entender normas e produto interno.',
      concepts: ['Espaços vetoriais', 'Normas L1, L2 e L∞', 'Produto interno e ortogonalidade', 'Desigualdade de Cauchy-Schwarz'],
      internals: ['⟨u,v⟩=‖u‖‖v‖cosθ liga produto interno a ângulo — base da similaridade de cosseno.', 'A norma L2 induz a geometria euclidiana; a L1 é robusta a outliers e induz esparsidade.'],
      prerequisites: ['Álgebra escolar e Python com NumPy.', 'Noção de coordenadas e geometria.'],
      useWhen: ['Use ao medir distância, ângulo e similaridade entre dados vetoriais.', 'Priorize ao escolher a métrica para busca e clustering.'],
      avoidWhen: ['Não use L2 quando a magnitude não deveria pesar — prefira cosseno.', 'Não misture normas sem entender o que cada uma penaliza.'],
      tradeoffs: { ganho: 'Escolha de métrica coerente com a geometria do problema.', custo: 'Cada norma tem viés (esparsidade, robustez) que precisa ser entendido.' },
      production: 'A evidência é um notebook que implementa L1, L2 e cosseno em NumPy e compara os rankings, batendo com as fórmulas manuais.',
      risks: ['Usar distância euclidiana onde só a direção importa.', 'Ignorar que L1 induz esparsidade e L2 penaliza outliers.'],
      checklist: ['Implementar L1, L2 e cosseno.', 'Ligar produto interno a ângulo (Cauchy-Schwarz).', 'Comparar rankings das métricas em um caso pequeno.', 'Conferir com o cálculo manual.'],
      summary: '⟨u,v⟩=‖u‖‖v‖cosθ é a base do cosseno; L2 dá geometria euclidiana, L1 é robusta e esparsa.',
      books: ['linear', 'mlMath'],
      exercises: [{ level: 'Fundamentos', title: 'Implementar métricas de distância', task: 'Implementar L1, L2 e cosseno em NumPy e comparar rankings em um conjunto pequeno.', acceptance: 'Resultados batem com as fórmulas manuais em casos-teste.', evidence: 'Notebook com as três métricas e os rankings.' }],
      interview: [{ level: 'Fundamentos', question: 'Quando cosseno é melhor que distância euclidiana?', expected: 'Quando a magnitude não importa e apenas a direção do vetor é semanticamente relevante.' }]
    },
    {
      part: 'linear', level: 'Fundamentos',
      title: 'Matrizes e transformações lineares',
      objective: 'Aplicar matrizes como transformações lineares, compondo rotação, escala e projeção e relacionando posto e núcleo.',
      problem: 'Operações sobre dados (rotação, redução, mudança de base) ficam opacas quando a matriz não é vista como transformação.',
      concepts: ['Multiplicação matriz-vetor', 'Composição de transformações', 'Posto, núcleo e imagem', 'Mudança de base'],
      internals: ['Cada coluna da matriz é a imagem de um vetor da base; multiplicar aplica a transformação.', 'Posto é a dimensão da imagem; núcleo não trivial indica dimensões colapsadas e não invertibilidade.'],
      prerequisites: ['Vetores e produto interno (módulo anterior).', 'Multiplicação de matrizes.'],
      useWhen: ['Use ao interpretar operações sobre dados como transformações (rotação, projeção, mudança de base).', 'Priorize ao diagnosticar perda de informação por posto.'],
      avoidWhen: ['Não trate matriz como tabela de números quando ela é uma transformação.', 'Não inverta uma matriz com núcleo não trivial.'],
      tradeoffs: { ganho: 'Operações sobre dados ganham interpretação geométrica clara.', custo: 'Pensar em bases e posto exige abstração além da mecânica de multiplicar.' },
      production: 'A evidência é um notebook que compõe matrizes de escala e rotação e verifica o efeito sobre um conjunto de pontos.',
      risks: ['Assumir invertibilidade sem checar o posto.', 'Errar a ordem da composição de transformações.'],
      checklist: ['Ler cada coluna como imagem de um vetor da base.', 'Compor transformações e conferir com a aplicação sequencial.', 'Calcular posto, núcleo e imagem.', 'Relacionar posto à invertibilidade.'],
      summary: 'Cada coluna é a imagem de um vetor da base; posto menor que a dimensão indica dimensões colapsadas e sem inversa.',
      books: ['linear', 'axler'],
      exercises: [{ level: 'Aplicação', title: 'Compor transformações geométricas', task: 'Construir e compor matrizes de escala e rotação e verificar o efeito sobre um conjunto de pontos.', acceptance: 'A composição bate com a aplicação sequencial.', evidence: 'Notebook com as matrizes e a visualização.' }],
      interview: [{ level: 'Aplicação', question: 'O que o posto de uma matriz diz sobre perda de informação?', expected: 'Posto menor que a dimensão indica dimensões colapsadas e ausência de inversa.' }]
    },
    {
      part: 'linear', level: 'Aplicação',
      title: 'Sistemas lineares, projeção e mínimos quadrados',
      objective: 'Resolver sistemas lineares e derivar a solução de mínimos quadrados por projeção ortogonal.',
      problem: 'Regressão e sistemas superdeterminados são aplicados como caixa-preta, sem entender a projeção que os justifica.',
      concepts: ['Eliminação de Gauss e fatoração LU', 'Espaço coluna e projeção', 'Equações normais AᵀAx=Aᵀb', 'Regressão linear'],
      internals: ['Mínimos quadrados projetam b no espaço coluna de A; o resíduo é ortogonal às colunas.', 'AᵀA pode ser mal-condicionada; QR e SVD são numericamente mais estáveis.'],
      prerequisites: ['Matrizes como transformações (módulo anterior).', 'Noção de espaço coluna e projeção.'],
      useWhen: ['Use ao ajustar regressão ou resolver sistemas superdeterminados.', 'Priorize quando o sistema não tem solução exata e é preciso o melhor ajuste.'],
      avoidWhen: ['Não use as equações normais em problema mal-condicionado — prefira QR/SVD.', 'Não aplique regressão sem entender a projeção que a justifica.'],
      tradeoffs: { ganho: 'Regressão deixa de ser caixa-preta: é projeção no espaço coluna.', custo: 'AᵀA pode ser mal-condicionada, exigindo métodos mais estáveis.' },
      production: 'A evidência é um notebook que ajusta regressão via equações normais e a compara com a solução de biblioteca dentro da tolerância.',
      risks: ['Instabilidade numérica ao usar AᵀA mal-condicionada.', 'Confundir o resíduo com erro de medição em vez de projeção ortogonal.'],
      checklist: ['Resolver o sistema por eliminação/LU.', 'Derivar mínimos quadrados por projeção ortogonal.', 'Montar as equações normais AᵀAx=Aᵀb.', 'Comparar com QR/SVD quando mal-condicionado.'],
      summary: 'Mínimos quadrados projetam b no espaço coluna de A; o resíduo é ortogonal, e QR/SVD são mais estáveis que AᵀA.',
      books: ['linear', 'mlMath'],
      exercises: [{ level: 'Aplicação', title: 'Regressão por equações normais', task: 'Ajustar uma regressão linear via equações normais e comparar com a solução de biblioteca.', acceptance: 'Coeficientes coincidem dentro da tolerância numérica.', evidence: 'Notebook com o ajuste e a comparação.' }],
      interview: [{ level: 'Aplicação', question: 'Por que o resíduo de mínimos quadrados é ortogonal ao espaço coluna?', expected: 'A projeção minimiza a distância; o erro mínimo é perpendicular ao subespaço.' }]
    },
    {
      part: 'linear', level: 'Produção',
      title: 'Autovalores, autovetores e SVD',
      objective: 'Interpretar autovalores, autovetores e a decomposição em valores singulares, aplicando-os a redução de dimensionalidade.',
      problem: 'PCA e redução de dimensionalidade são usados sem entender o que os valores singulares preservam ou descartam.',
      concepts: ['Autovalores e autovetores', 'Diagonalização', 'Decomposição SVD', 'PCA'],
      internals: ['A SVD A=UΣVᵀ existe para qualquer matriz; os valores singulares medem energia por direção.', 'PCA mantém as direções de maior variância, que são os maiores valores singulares da matriz centrada.'],
      prerequisites: ['Matrizes, posto e projeção.', 'Noção de variância.'],
      useWhen: ['Use ao reduzir dimensão (PCA) ou analisar a energia por direção.', 'Priorize ao decidir quantas componentes reter.'],
      avoidWhen: ['Não aplique PCA sem centrar os dados.', 'Não descarte componentes sem olhar a variância explicada.'],
      tradeoffs: { ganho: 'Compressão e denoising com perda controlada e mensurável.', custo: 'A SVD é O(min(mn², m²n)); em dados enormes exige variantes truncadas.' },
      production: 'A evidência é um notebook que aplica SVD a um conjunto e mede a variância retida e o erro de reconstrução por número de componentes.',
      risks: ['Reter componentes de baixa energia e não comprimir de fato.', 'Esquecer de centrar antes do PCA e distorcer as direções.'],
      checklist: ['Computar autovalores/autovetores ou a SVD A=UΣVᵀ.', 'Centrar os dados antes do PCA.', 'Plotar a variância explicada por componente.', 'Medir o erro de reconstrução do truncamento.'],
      summary: 'A SVD existe para qualquer matriz; valores singulares medem energia por direção — PCA mantém as maiores.',
      books: ['linear', 'axler', 'mlMath'],
      exercises: [{ level: 'Produção', title: 'Reduzir dimensão com SVD', task: 'Aplicar SVD a um conjunto e medir a variância retida por número de componentes.', acceptance: 'Curva de variância explicada correta e erro de reconstrução medido.', evidence: 'Notebook com a SVD e as métricas.' }],
      interview: [{ level: 'Produção', question: 'O que os valores singulares dizem sobre quanto você pode comprimir?', expected: 'Valores pequenos indicam direções de baixa energia, descartáveis com pouca perda.' }]
    },
    {
      part: 'linear', level: 'Produção',
      title: 'Similaridade de cosseno e espaços de embeddings',
      objective: 'Implementar e validar similaridade de cosseno em espaços de embeddings, tratando normalização e maldição da dimensionalidade.',
      problem: 'Busca semântica e retrieval degradam quando a métrica, a normalização e a dimensionalidade não são tratadas.',
      concepts: ['Embeddings e espaço vetorial', 'Normalização L2', 'Similaridade de cosseno', 'Maldição da dimensionalidade'],
      internals: ['Com vetores normalizados, cosseno é igual ao produto interno — o que acelera o retrieval.', 'Em alta dimensão as distâncias se concentram; a escolha de métrica e normalização torna-se crítica.'],
      prerequisites: ['Produto interno e normas (módulos anteriores).', 'Um conjunto de embeddings para indexar.'],
      useWhen: ['Use ao construir busca semântica e retrieval por embeddings.', 'Priorize quando a dimensão é alta e a métrica/normalização decide o recall.'],
      avoidWhen: ['Não use cosseno sem normalizar quando a magnitude varia muito.', 'Não ignore a concentração de distâncias em alta dimensão.'],
      tradeoffs: { ganho: 'Retrieval rápido e estável com vetores normalizados (cosseno = produto interno).', custo: 'A maldição da dimensionalidade exige cuidado com métrica e normalização.' },
      production: 'A evidência é um notebook que constrói um índice de embeddings e reporta recall@k com e sem normalização.',
      risks: ['Recall ruim por não normalizar antes do cosseno.', 'Confiar em distâncias que se concentram em alta dimensão.'],
      checklist: ['Normalizar os embeddings em L2.', 'Medir recall@k com e sem normalização.', 'Explicar o efeito da normalização.', 'Considerar a maldição da dimensionalidade.'],
      summary: 'Com vetores normalizados, cosseno é igual ao produto interno; em alta dimensão a normalização é crítica.',
      books: ['mlMath', 'linear'],
      exercises: [{ level: 'Produção', title: 'Retrieval por cosseno', task: 'Construir um índice de embeddings e avaliar recall@k com e sem normalização.', acceptance: 'Recall reportado e o efeito da normalização explicado.', evidence: 'Notebook com o índice e as métricas.' }],
      interview: [{ level: 'Produção', question: 'Por que normalizar embeddings antes de usar cosseno?', expected: 'Remove o efeito da magnitude e reduz o cosseno a um produto interno estável.' }]
    },

    // ── Parte 3 · Probabilidade e estatística ──
    {
      part: 'probabilidade', level: 'Fundamentos',
      title: 'Probabilidade, condicional e Bayes',
      objective: 'Modelar eventos com probabilidade condicional e aplicar o teorema de Bayes para atualizar crenças.',
      problem: 'Decisões sob incerteza e classificadores probabilísticos erram quando condicional e priori são confundidas.',
      concepts: ['Espaço amostral e axiomas', 'Probabilidade condicional', 'Independência', 'Teorema de Bayes'],
      internals: ['P(A|B)=P(B|A)P(A)/P(B); a priori pondera a verossimilhança.', 'A falácia da taxa-base ignora P(A) e superestima eventos raros.'],
      prerequisites: ['Frações e probabilidade básica.', 'Noção de evento e independência.'],
      useWhen: ['Use ao atualizar crenças com evidência e ao interpretar classificadores probabilísticos.', 'Priorize quando a prevalência (taxa-base) do evento é baixa.'],
      avoidWhen: ['Não ignore a priori ao interpretar um resultado positivo.', 'Não confunda P(A|B) com P(B|A).'],
      tradeoffs: { ganho: 'Decisões sob incerteza calibradas pela taxa-base.', custo: 'Requer estimar priori e verossimilhança, nem sempre disponíveis.' },
      production: 'A evidência é um notebook que calcula a posterior de um diagnóstico dado sensibilidade, especificidade e prevalência, batendo com Monte Carlo.',
      risks: ['Falácia da taxa-base: superestimar eventos raros ignorando P(A).', 'Inverter a condicional (P(A|B) vs P(B|A)).'],
      checklist: ['Escrever P(A|B)=P(B|A)P(A)/P(B).', 'Incluir a prevalência (priori).', 'Calcular a posterior.', 'Verificar por simulação de Monte Carlo.'],
      summary: 'A priori pondera a verossimilhança; com prevalência baixa, a taxa-base domina o posterior.',
      books: ['probability'],
      exercises: [{ level: 'Aplicação', title: 'Atualização bayesiana de um teste', task: 'Calcular a probabilidade posterior de um diagnóstico dado sensibilidade, especificidade e prevalência.', acceptance: 'O resultado bate com uma simulação de Monte Carlo.', evidence: 'Notebook com o cálculo e a simulação.' }],
      interview: [{ level: 'Aplicação', question: 'Por que um teste 99% preciso pode gerar mais falsos que verdadeiros positivos?', expected: 'Quando a prevalência é baixa, a taxa-base domina o posterior.' }]
    },
    {
      part: 'probabilidade', level: 'Fundamentos',
      title: 'Variáveis aleatórias e distribuições',
      objective: 'Aplicar variáveis aleatórias discretas e contínuas e escolher a distribuição adequada a um fenômeno.',
      problem: 'Modelos assumem a distribuição errada (ex.: normal onde há cauda pesada) e produzem estimativas frágeis.',
      concepts: ['VA discretas e contínuas', 'PMF, PDF e CDF', 'Bernoulli, binomial, Poisson, normal, exponencial', 'Transformações de variáveis'],
      internals: ['A CDF é monotônica e liga a PDF a probabilidades por integração.', 'A binomial tende à Poisson quando n é grande e p pequeno; a normal aproxima somas pelo TCL.'],
      prerequisites: ['Probabilidade e Bayes (módulo anterior).', 'Noção de integral e soma.'],
      useWhen: ['Use ao escolher a distribuição que modela um fenômeno.', 'Priorize quando a forma da cauda afeta o risco (ex.: eventos extremos).'],
      avoidWhen: ['Não assuma normalidade onde há cauda pesada ou contagem rara.', 'Não confunda PMF (discreta) com PDF (contínua).'],
      tradeoffs: { ganho: 'Modelos que refletem o fenômeno em vez de uma normal por conveniência.', custo: 'Escolher e validar a distribuição exige teste de aderência.' },
      production: 'A evidência é um notebook que ajusta uma distribuição a dados reais e valida com teste de aderência, gráfico e número.',
      risks: ['Assumir normal onde há cauda pesada e subestimar extremos.', 'Trocar Poisson por normal (ou vice-versa) fora das hipóteses.'],
      checklist: ['Identificar se a variável é discreta ou contínua.', 'Escolher a distribuição pela natureza do fenômeno.', 'Ajustar e validar com teste de aderência.', 'Checar o comportamento das caudas.'],
      summary: 'A binomial tende à Poisson (n grande, p pequeno) e somas viram normal pelo TCL; a cauda decide a escolha.',
      books: ['probability', 'mlMath'],
      exercises: [{ level: 'Aplicação', title: 'Ajustar uma distribuição a dados', task: 'Escolher e ajustar uma distribuição a um conjunto real e validar com teste de aderência.', acceptance: 'Escolha justificada e ajuste verificado graficamente e numericamente.', evidence: 'Notebook com o ajuste e o teste.' }],
      interview: [{ level: 'Aplicação', question: 'Como você decide entre Poisson e normal para contagens?', expected: 'Poisson para eventos raros/contagens; normal quando o TCL se aplica a somas.' }]
    },
    {
      part: 'probabilidade', level: 'Aplicação',
      title: 'Esperança, variância e concentração',
      objective: 'Calcular esperança e variância e usar desigualdades de concentração para limitar o erro de estimativas.',
      problem: 'Métricas de amostra são reportadas sem intervalo, escondendo variância e risco de conclusão precipitada.',
      concepts: ['Esperança e linearidade', 'Variância e covariância', 'Lei dos grandes números', 'Desigualdades de Chebyshev e Hoeffding'],
      internals: ['A linearidade de E vale mesmo com dependência; a variância de uma soma exige covariância.', 'Hoeffding limita o desvio da média amostral para variáveis limitadas — base do tamanho de amostra.'],
      prerequisites: ['VA e distribuições (módulo anterior).', 'Noção de média e desvio.'],
      useWhen: ['Use ao reportar métricas com incerteza e dimensionar amostras.', 'Priorize antes de declarar uma diferença sem intervalo.'],
      avoidWhen: ['Não reporte média amostral sem uma medida de dispersão/erro.', 'Não some variâncias ignorando a covariância.'],
      tradeoffs: { ganho: 'Erro limitado e tamanho de amostra justificado por desigualdade.', custo: 'Limites de concentração exigem hipóteses (ex.: variáveis limitadas em Hoeffding).' },
      production: 'A evidência é um notebook que usa uma desigualdade de concentração para dimensionar a amostra e verifica a taxa de erro por simulação.',
      risks: ['Concluir de uma amostra sem intervalo, escondendo a variância.', 'Somar variâncias de variáveis correlacionadas sem a covariância.'],
      checklist: ['Calcular esperança e variância.', 'Aplicar a linearidade de E (vale mesmo com dependência).', 'Escolher Chebyshev/Hoeffding pelas hipóteses.', 'Dimensionar a amostra e verificar por simulação.'],
      summary: 'A linearidade da esperança dispensa independência; Hoeffding limita o desvio da média e dá o tamanho de amostra.',
      books: ['probability'],
      exercises: [{ level: 'Produção', title: 'Dimensionar uma amostra', task: 'Usar uma desigualdade de concentração para definir o tamanho de amostra de um experimento.', acceptance: 'Tamanho justificado e verificado por simulação da taxa de erro.', evidence: 'Notebook com a derivação e a simulação.' }],
      interview: [{ level: 'Aplicação', question: 'Por que a linearidade da esperança não exige independência?', expected: 'E[X+Y]=E[X]+E[Y] sempre; só a variância depende de covariância.' }]
    },
    {
      part: 'probabilidade', level: 'Aplicação',
      title: 'Estimação, máxima verossimilhança e intervalos',
      objective: 'Estimar parâmetros por máxima verossimilhança e reportar intervalos de confiança.',
      problem: 'Parâmetros de modelos são reportados como pontos, sem incerteza, mascarando o risco da decisão.',
      concepts: ['Estimadores e viés', 'Máxima verossimilhança (MLE)', 'Intervalos de confiança', 'Bootstrap'],
      internals: ['MLE maximiza a log-verossimilhança; muitas perdas de ML são MLE disfarçado (ex.: MSE sob ruído gaussiano).', 'O bootstrap estima incerteza reamostrando, sem supor a distribuição.'],
      prerequisites: ['Distribuições e verossimilhança.', 'Esperança e variância (módulo anterior).'],
      useWhen: ['Use ao estimar parâmetros de um modelo com incerteza reportada.', 'Priorize quando a decisão depende da faixa, não do ponto.'],
      avoidWhen: ['Não reporte estimativa pontual sem intervalo.', 'Não suponha a distribuição quando o bootstrap dispensa isso.'],
      tradeoffs: { ganho: 'Parâmetros com incerteza explícita, expondo o risco da decisão.', custo: 'MLE pode ser enviesado em amostra pequena; o bootstrap custa reamostragem.' },
      production: 'A evidência é um notebook que estima um parâmetro por MLE e constrói o intervalo por bootstrap, com a cobertura verificada por simulação.',
      risks: ['Reportar o ponto sem incerteza, mascarando o risco.', 'Usar um estimador enviesado sem corrigir.'],
      checklist: ['Escrever a log-verossimilhança e maximizá-la.', 'Checar o viés do estimador.', 'Construir o intervalo (fechado ou por bootstrap).', 'Verificar a cobertura por simulação.'],
      summary: 'MLE maximiza a log-verossimilhança (muita perda de ML é MLE disfarçado); o bootstrap dá incerteza sem supor a distribuição.',
      books: ['probability', 'mlMath'],
      exercises: [{ level: 'Produção', title: 'MLE e intervalo por bootstrap', task: 'Estimar um parâmetro por MLE e construir o intervalo por bootstrap.', acceptance: 'A cobertura do intervalo é verificada por simulação.', evidence: 'Notebook com a estimativa e o intervalo.' }],
      interview: [{ level: 'Produção', question: 'Por que minimizar MSE equivale a MLE sob ruído gaussiano?', expected: 'A log-verossimilhança gaussiana é proporcional ao negativo do erro quadrático.' }]
    },
    {
      part: 'probabilidade', level: 'Produção',
      title: 'Testes de hipótese e métricas de avaliação',
      objective: 'Avaliar hipóteses controlando erros e validar modelos com métricas de classificação e de retrieval.',
      problem: 'Comparações de modelo e experimentos declaram vitória sem controlar o erro tipo I nem escolher a métrica certa.',
      concepts: ['Hipótese nula, p-valor e poder', 'Erros tipo I e II', 'Precisão, recall, F1 e ROC-AUC', 'Precision@k, MAP e nDCG'],
      internals: ['O p-valor é P(dado|H0), não P(H0|dado); múltiplos testes inflam falsos positivos.', 'Sob desbalanceamento, a acurácia engana; PR-AUC e recall são mais informativos.'],
      prerequisites: ['Estimação e intervalos (módulo anterior).', 'Noção de erro tipo I e II.'],
      useWhen: ['Use ao comparar modelos ou experimentos controlando o erro.', 'Priorize em dados desbalanceados, onde a acurácia engana.'],
      avoidWhen: ['Não declare vitória sem controlar múltiplos testes.', 'Não use acurácia como métrica única em classes raras.'],
      tradeoffs: { ganho: 'Comparações confiáveis com erro controlado e métrica adequada.', custo: 'Controle de múltiplos testes e escolha de métrica adicionam rigor e trabalho.' },
      production: 'A evidência é um notebook que compara dois modelos em dado desbalanceado com métricas adequadas e teste de significância.',
      risks: ['Interpretar o p-valor como P(H0|dado).', 'Inflar falsos positivos com múltiplos testes; confiar na acurácia em dado desbalanceado.'],
      checklist: ['Definir H0, p-valor e poder.', 'Controlar o erro tipo I em múltiplos testes.', 'Escolher a métrica pela distribuição de classes (PR-AUC, recall).', 'Testar a significância da diferença.'],
      summary: 'O p-valor é P(dado|H0), não P(H0|dado); sob desbalanceamento, PR-AUC e recall informam mais que a acurácia.',
      books: ['probability'],
      exercises: [{ level: 'Produção', title: 'Avaliar um classificador desbalanceado', task: 'Comparar dois modelos em dado desbalanceado com métricas adequadas e teste de significância.', acceptance: 'Escolha de métrica justificada e diferença testada.', evidence: 'Notebook com a avaliação e o teste.' }],
      interview: [{ level: 'Produção', question: 'Por que acurácia engana em dados desbalanceados?', expected: 'A classe majoritária domina; recall e precisão da classe rara revelam o desempenho real.' }]
    },

    // ── Parte 4 · Cálculo e otimização para IA ──
    {
      part: 'otimizacao', level: 'Fundamentos',
      title: 'Limites, derivadas e continuidade',
      objective: 'Calcular derivadas e analisar continuidade com rigor, ligando taxa de variação a otimização.',
      problem: 'Otimização e análise de sensibilidade são aplicadas sem o rigor de limite e derivada que garante o comportamento.',
      concepts: ['Limites e continuidade', 'Derivada como taxa e inclinação', 'Regras de derivação', 'Teorema do valor médio'],
      internals: ['Diferenciabilidade implica continuidade, mas não o contrário (ex.: |x| em 0).', 'Pontos críticos (f′=0) são candidatos a extremo; a segunda derivada classifica máximo, mínimo ou sela.'],
      prerequisites: ['Funções e álgebra escolar.', 'Noção intuitiva de limite.'],
      useWhen: ['Use ao analisar taxa de variação e sensibilidade com rigor.', 'Priorize antes de otimizar uma função cujo comportamento não é óbvio.'],
      avoidWhen: ['Não assuma diferenciabilidade só porque a função é contínua.', 'Não confie em ponto crítico sem classificar por segunda derivada.'],
      tradeoffs: { ganho: 'Base rigorosa para otimização e análise de sensibilidade.', custo: 'O rigor de limite e continuidade exige cuidado com casos-limite.' },
      production: 'A evidência é um notebook que deriva funções à mão e valida com diferença finita dentro da tolerância.',
      risks: ['Supor diferenciabilidade em pontos de quina (ex.: |x| em 0).', 'Confundir ponto crítico com extremo sem checar a curvatura.'],
      checklist: ['Verificar continuidade e diferenciabilidade.', 'Aplicar as regras de derivação.', 'Achar pontos críticos (f′=0).', 'Classificar com a segunda derivada e validar numericamente.'],
      summary: 'Diferenciabilidade implica continuidade, não o contrário; a segunda derivada classifica máximo, mínimo ou sela.',
      books: ['calculus'],
      exercises: [{ level: 'Fundamentos', title: 'Derivar e verificar numericamente', task: 'Derivar funções à mão e validar com diferença finita.', acceptance: 'A derivada analítica bate com a numérica dentro da tolerância.', evidence: 'Notebook com as derivadas e a verificação.' }],
      interview: [{ level: 'Fundamentos', question: 'Uma função contínua é sempre diferenciável?', expected: 'Não; |x| é contínua mas não é diferenciável em 0.' }]
    },
    {
      part: 'otimizacao', level: 'Aplicação',
      title: 'Gradientes, jacobianas e regra da cadeia',
      objective: 'Aplicar gradientes, jacobianas e a regra da cadeia para diferenciar funções compostas de várias variáveis.',
      problem: 'A retropropagação vira mágica quando a regra da cadeia multivariada não é entendida.',
      concepts: ['Derivadas parciais e gradiente', 'Jacobiana e hessiana', 'Regra da cadeia multivariada', 'Autodiferenciação'],
      internals: ['O gradiente aponta na direção de maior crescimento; o backprop é a regra da cadeia aplicada de trás para frente.', 'A hessiana descreve a curvatura e condiciona a velocidade de convergência.'],
      prerequisites: ['Derivadas de uma variável (módulo anterior).', 'Álgebra de matrizes.'],
      useWhen: ['Use ao diferenciar funções compostas de várias variáveis (ex.: uma rede).', 'Priorize ao entender ou depurar retropropagação.'],
      avoidWhen: ['Não trate o backprop como mágica — é a regra da cadeia de trás para frente.', 'Não ignore a curvatura (hessiana) ao analisar convergência.'],
      tradeoffs: { ganho: 'Retropropagação deixa de ser caixa-preta e vira derivação verificável.', custo: 'Jacobianas e hessianas crescem rápido e são caras em alta dimensão.' },
      production: 'A evidência é um notebook que deriva e implementa o gradiente de uma pequena rede e confere com autodiff.',
      risks: ['Errar a ordem/forma na regra da cadeia multivariada.', 'Ignorar o condicionamento da hessiana ao analisar velocidade.'],
      checklist: ['Calcular derivadas parciais e o gradiente.', 'Montar a jacobiana/hessiana onde necessário.', 'Aplicar a regra da cadeia de trás para frente.', 'Conferir o gradiente com autodiff.'],
      summary: 'O gradiente aponta na direção de maior crescimento; o backprop é a regra da cadeia aplicada de trás para frente.',
      books: ['mlMath', 'calculus'],
      exercises: [{ level: 'Aplicação', title: 'Retropropagação manual', task: 'Derivar e implementar o gradiente de uma pequena rede e conferir com autodiff.', acceptance: 'O gradiente manual bate com o de uma biblioteca.', evidence: 'Notebook com a derivação e a conferência.' }],
      interview: [{ level: 'Aplicação', question: 'Como a regra da cadeia justifica a retropropagação?', expected: 'Cada camada multiplica sua derivada local, propagando o gradiente da perda.' }]
    },
    {
      part: 'otimizacao', level: 'Aplicação',
      title: 'Descida de gradiente e convexidade',
      objective: 'Implementar descida de gradiente e diagnosticar a convergência usando convexidade e taxa de aprendizado.',
      problem: 'Treinos divergem ou estagnam quando taxa de aprendizado, convexidade e condicionamento são ignorados.',
      concepts: ['Convexidade e mínimos', 'Descida de gradiente e variantes', 'Taxa de aprendizado e condicionamento', 'Momentum'],
      internals: ['Em função convexa, todo mínimo local é global; fora disso, as garantias enfraquecem.', 'Taxa alta diverge, baixa demora; o número de condição da hessiana controla a velocidade.'],
      prerequisites: ['Gradientes e regra da cadeia (módulo anterior).', 'Noção de mínimo de função.'],
      useWhen: ['Use ao treinar modelos por otimização iterativa.', 'Priorize ao diagnosticar treino que diverge ou estagna.'],
      avoidWhen: ['Não confie em ótimo global fora de problema convexo.', 'Não escolha a taxa de aprendizado no chute sem observar a curva de perda.'],
      tradeoffs: { ganho: 'Treino que converge de forma diagnosticável pela convexidade e pela taxa.', custo: 'Em não convexo, as garantias enfraquecem e exigem tuning.' },
      production: 'A evidência é um notebook com descida de gradiente do zero para uma regressão e o estudo do efeito da taxa na convergência.',
      risks: ['Taxa alta que diverge ou baixa que estagna.', 'Assumir ótimo global em superfície não convexa (mínimos locais, selas).'],
      checklist: ['Implementar a descida de gradiente.', 'Testar várias taxas de aprendizado.', 'Relacionar a convergência ao número de condição.', 'Verificar a convexidade antes de afirmar ótimo global.'],
      summary: 'Em função convexa todo mínimo local é global; a taxa e o número de condição da hessiana controlam a velocidade.',
      books: ['mlMath', 'calculus'],
      exercises: [{ level: 'Produção', title: 'Descida de gradiente do zero', task: 'Implementar GD para uma regressão e estudar o efeito da taxa de aprendizado na convergência.', acceptance: 'Curvas de perda para várias taxas com análise.', evidence: 'Notebook com a implementação e as curvas.' }],
      interview: [{ level: 'Aplicação', question: 'Por que a convexidade importa para garantir o ótimo global?', expected: 'Sem ela, o método pode parar em mínimos locais ou pontos de sela.' }]
    },
    {
      part: 'otimizacao', level: 'Produção',
      title: 'Estabilidade numérica: softmax e log-sum-exp',
      objective: 'Diagnosticar e corrigir instabilidade numérica em softmax, log-verossimilhança e somas de ponto flutuante.',
      problem: 'Modelos produzem NaN e overflow em produção quando exponenciais e logaritmos não são estabilizados.',
      concepts: ['Ponto flutuante e erro', 'Overflow e underflow', 'Truque log-sum-exp', 'Softmax estável'],
      internals: ['Subtrair o máximo antes do exp no softmax evita overflow sem mudar o resultado.', 'log-sum-exp calcula log Σexp com estabilidade — base da cross-entropy numérica.'],
      prerequisites: ['Ponto flutuante e as funções exp/log.', 'Softmax e cross-entropy (contexto de ML).'],
      useWhen: ['Use ao implementar softmax, log-verossimilhança e somas de probabilidade.', 'Priorize quando aparecem NaN, inf ou overflow em produção.'],
      avoidWhen: ['Não exponencie valores grandes sem deslocar pelo máximo.', 'Não some probabilidades minúsculas fora do espaço log.'],
      tradeoffs: { ganho: 'Modelos estáveis, sem NaN/overflow, com o mesmo resultado matemático.', custo: 'Exige reescrever expressões ingênuas na forma estável.' },
      production: 'A evidência é um notebook que reproduz overflow num softmax ingênuo e o corrige com o deslocamento pelo máximo, batendo com a referência.',
      risks: ['NaN/overflow por exponenciar valores grandes.', 'Underflow ao multiplicar muitas probabilidades fora do log.'],
      checklist: ['Subtrair o máximo antes do exp no softmax.', 'Usar log-sum-exp para calcular log Σexp.', 'Trabalhar no espaço log ao multiplicar probabilidades.', 'Comparar a versão estável com a de referência.'],
      summary: 'Subtrair o máximo antes do exp evita overflow sem mudar o resultado; log-sum-exp estabiliza a cross-entropy.',
      books: ['mlMath'],
      exercises: [{ level: 'Produção', title: 'Softmax estável', task: 'Reproduzir overflow em um softmax ingênuo e corrigir com o deslocamento pelo máximo.', acceptance: 'A versão estável evita NaN e bate com a de referência.', evidence: 'Notebook com o caso instável e a correção.' }],
      interview: [{ level: 'Produção', question: 'Por que subtrair o máximo estabiliza o softmax?', expected: 'Reduz o maior expoente a 0, evitando overflow, e o resultado é invariante a esse deslocamento.' }]
    },
    {
      part: 'otimizacao', level: 'Produção',
      title: 'A matemática do self-attention',
      objective: 'Explicar e implementar o self-attention como produto escalar escalonado com softmax, justificando a escala 1/√d.',
      problem: 'Transformers viram caixa-preta quando a álgebra do attention (QKᵀ, escala e softmax) não é derivada.',
      concepts: ['Query, Key e Value', 'Produto escalar escalonado', 'Softmax como distribuição de pesos', 'Complexidade quadrática'],
      internals: ['Attention = softmax(QKᵀ/√d)V; QKᵀ mede similaridade e a softmax normaliza em pesos.', 'Dividir por √d evita que produtos internos grandes saturem a softmax; o custo é O(n²) no comprimento.'],
      prerequisites: ['Álgebra linear (produto de matrizes) e softmax estável.', 'Noção de query/key/value.'],
      useWhen: ['Use para entender e implementar o núcleo de um transformer.', 'Priorize ao explicar por que a escala 1/√d existe.'],
      avoidWhen: ['Não omita a escala 1/√d — a softmax satura e o gradiente some.', 'Não ignore o custo O(n²) ao escalar o comprimento de sequência.'],
      tradeoffs: { ganho: 'O transformer deixa de ser caixa-preta: é QKᵀ escalonado + softmax + V.', custo: 'A complexidade quadrática no comprimento limita a janela de contexto.' },
      production: 'A evidência é um notebook que implementa uma cabeça de self-attention em NumPy e mede o efeito da escala 1/√d na softmax.',
      risks: ['Omitir a escala e saturar a softmax (gradiente que desaparece).', 'Subestimar o custo O(n²) em sequências longas.'],
      checklist: ['Computar QKᵀ como similaridade.', 'Dividir por √d antes da softmax.', 'Aplicar a softmax e ponderar V.', 'Medir o efeito da escala e conferir com uma referência.'],
      summary: 'Attention = softmax(QKᵀ/√d)V; a escala evita a saturação da softmax e o custo é O(n²) no comprimento.',
      books: ['mlMath', 'linear'],
      exercises: [{ level: 'Produção', title: 'Self-attention em NumPy', task: 'Implementar uma cabeça de self-attention e verificar o efeito da escala 1/√d na softmax.', acceptance: 'A saída bate com uma referência e o efeito da escala é medido.', evidence: 'Notebook com a implementação e a análise.' }],
      interview: [{ level: 'Produção', question: 'Por que dividir QKᵀ por √d antes da softmax?', expected: 'Sem a escala, a variância do produto cresce com d, a softmax satura e o gradiente desaparece.' }]
    },

    // ── Parte 5 · Fronteira: a matemática por trás da IA moderna ──
    {
      part: 'fronteira', level: 'Fronteira',
      title: 'Teoria da informação: entropia, KL e cross-entropy',
      objective: 'Derivar entropia, divergência KL e cross-entropy, provar KL≥0 e mostrar que treinar um classificador com cross-entropy é minimizar a KL entre rótulo e predição.',
      problem: 'Perdas de classificação (cross-entropy, log-loss) e métricas de distribuição (KL) são usadas como caixa-preta, sem entender que uma é a outra mais a entropia do rótulo.',
      concepts: ['Entropia e bits de incerteza', 'Divergência KL e desigualdade de Gibbs', 'Cross-entropy = entropia + KL', 'Informação mútua', 'Entropia cruzada como perda'],
      internals: ['H(p) é máxima na uniforme e vale log₂n; KL(p‖q)≥0 e zera só quando p=q, mas não é simétrica.', 'H(p,q)=H(p)+KL(p‖q); como H(p) do rótulo é fixa, minimizar cross-entropy é minimizar a KL.'],
      prerequisites: ['Probabilidade e distribuições.', 'Ambiente com Python/NumPy.'],
      useWhen: ['Use para entender a cross-entropy como perda e a KL como divergência.', 'Priorize ao comparar distribuições ou calibrar classificadores.'],
      avoidWhen: ['Não use a KL como distância (não é simétrica).', 'Não trate a cross-entropy como algo desligado de entropia e KL.'],
      tradeoffs: { ganho: 'A perda de classificação ganha sentido: minimizar cross-entropy é minimizar a KL.', custo: 'Exige derivar e verificar identidades, não só chamar a função de perda.' },
      production: 'A evidência é um notebook que implementa entropia, KL e cross-entropy e verifica H(p,q)=H(p)+KL(p‖q) e KL≥0.',
      risks: ['Usar a KL como se fosse métrica simétrica.', 'Não perceber que a entropia do rótulo é constante no treino.'],
      checklist: ['Implementar entropia, KL e cross-entropy.', 'Verificar KL≥0 e KL(p‖p)=0.', 'Confirmar H(p,q)=H(p)+KL(p‖q).', 'Ligar a cross-entropy com one-hot a −log p da classe correta.'],
      summary: 'H(p,q)=H(p)+KL(p‖q); como H(p) do rótulo é fixa, minimizar cross-entropy é minimizar a KL.',
      books: ['mlMath', 'probability'],
      complements: [{ title: 'MacKay — Information Theory, Inference, and Learning Algorithms (livre)', url: 'https://www.inference.org.uk/mackay/itila/' }],
      exercises: [
        { level: 'Aplicação', title: 'Implementar e verificar as identidades', task: 'Implementar entropia, KL e cross-entropy em NumPy e verificar H(p,q)=H(p)+KL(p‖q) e KL≥0.', acceptance: 'As identidades batem numericamente e KL(p‖p)=0.', evidence: 'Notebook com as três funções e os asserts.' },
        { level: 'Produção', title: 'Cross-entropy como perda', task: 'Mostrar que a cross-entropy com rótulo one-hot é −log da probabilidade da classe correta e ligar ao treino.', acceptance: 'A equivalência é demonstrada e a perda pune a predição pior.', evidence: 'Notebook comparando predições boa e ruim.' }
      ],
      interview: [
        { level: 'Aplicação', question: 'Qual a relação entre cross-entropy, entropia e KL?', expected: 'H(p,q)=H(p)+KL(p‖q); minimizar cross-entropy minimiza a KL, pois H(p) do rótulo é constante.' },
        { level: 'Produção', question: 'Por que a KL não serve como distância?', expected: 'Não é simétrica nem satisfaz a desigualdade triangular; é uma divergência, não métrica.' }
      ],
      exampleFile: '../../examples/matematica-senior/fronteira/informacao.py'
    },
    {
      part: 'fronteira', level: 'Fronteira',
      title: 'Aprendizado estatístico: viés, variância e capacidade',
      objective: 'Decompor o erro esperado de predição em viés², variância e ruído irredutível e explicar generalização em termos de capacidade do modelo (dimensão VC).',
      problem: 'Escolher a complexidade do modelo por tentativa e erro esconde a troca viés-variância e leva a sobreajuste ou subajuste sem diagnóstico.',
      concepts: ['Decomposição viés-variância', 'Ruído irredutível', 'Capacidade e dimensão VC', 'Sobreajuste e subajuste', 'Curva em U do erro'],
      internals: ['E[(y−f̂)²]=viés²+variância+ruído; mais capacidade baixa o viés e sobe a variância.', 'A dimensão VC formaliza capacidade e limita a diferença entre erro de treino e de teste (PAC).'],
      prerequisites: ['Estimação e variância.', 'Noção de treino/teste e overfitting.'],
      useWhen: ['Use ao escolher a complexidade do modelo com diagnóstico.', 'Priorize quando há sobreajuste ou subajuste sem explicação.'],
      avoidWhen: ['Não escolha a complexidade por tentativa e erro sem medir as parcelas.', 'Não trate o ruído irredutível como algo a eliminar.'],
      tradeoffs: { ganho: 'A escolha de complexidade vira decisão explicável pela troca viés-variância.', custo: 'Estimar as parcelas exige Monte Carlo sobre datasets independentes.' },
      production: 'A evidência é um notebook que estima viés², variância e ruído por Monte Carlo, reproduz o erro total e acha o grau ótimo.',
      risks: ['Aumentar a capacidade e explodir a variância sem perceber.', 'Confundir ruído irredutível com erro do modelo.'],
      checklist: ['Treinar modelos de várias complexidades em datasets independentes.', 'Estimar viés², variância e ruído.', 'Somar as parcelas e comparar com o erro total.', 'Plotar a curva em U e achar o ótimo.'],
      summary: 'E[(y−f̂)²]=viés²+variância+ruído; mais capacidade baixa o viés e sobe a variância — a VC formaliza isso.',
      books: ['mlMath', 'probability'],
      complements: [{ title: 'Shalev-Shwartz & Ben-David — Understanding Machine Learning (livre)', url: 'https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/' }],
      exercises: [
        { level: 'Aplicação', title: 'Medir a decomposição por Monte Carlo', task: 'Treinar polinômios de vários graus em datasets independentes e estimar viés², variância e ruído.', acceptance: 'A soma das três parcelas reproduz o erro total medido.', evidence: 'Notebook com a tabela por grau.' },
        { level: 'Produção', title: 'Achar o vale', task: 'Plotar o erro total por complexidade e identificar o grau ótimo, justificando pela troca viés-variância.', acceptance: 'A curva em U aparece e o ótimo não é o extremo.', evidence: 'Notebook com a curva e a análise.' }
      ],
      interview: [
        { level: 'Aplicação', question: 'O que a decomposição viés-variância explica?', expected: 'Que o erro tem três fontes; complexidade troca viés por variância, e o ruído é irredutível.' },
        { level: 'Produção', question: 'O que a dimensão VC diz sobre generalização?', expected: 'Capacidade maior permite ajustar mais, mas afrouxa o limite entre erro de treino e de teste.' }
      ],
      exampleFile: '../../examples/matematica-senior/fronteira/vies_variancia.py'
    },
    {
      part: 'fronteira', level: 'Fronteira',
      title: 'Processos estocásticos e cadeias de Markov',
      objective: 'Modelar processos com cadeias de Markov, calcular a distribuição estacionária e diagnosticar a velocidade de convergência pelo segundo autovalor.',
      problem: 'PageRank, MCMC e modelos de sequência são usados sem entender quando convergem, para onde, e com que velocidade — o que esconde amostragem enviesada.',
      concepts: ['Propriedade de Markov', 'Matriz de transição', 'Distribuição estacionária πP=π', 'Ergodicidade', 'Gap espectral e mistura'],
      internals: ['π é o autovetor à esquerda de P com autovalor 1; para cadeia ergódica é única e atinge-se de qualquer início.', 'O erro após k passos decai como |λ₂|ᵏ; |λ₂| perto de 1 significa mistura lenta.'],
      prerequisites: ['Álgebra linear (autovetores) e probabilidade.', 'Noção de matriz de transição.'],
      useWhen: ['Use ao modelar PageRank, MCMC e modelos de sequência.', 'Priorize ao diagnosticar convergência e amostragem enviesada.'],
      avoidWhen: ['Não confie na estacionária de uma cadeia não ergódica.', 'Não assuma convergência rápida sem olhar o segundo autovalor.'],
      tradeoffs: { ganho: 'Saber se, para onde e com que velocidade a cadeia converge.', custo: 'O diagnóstico espectral exige computar autovalores da matriz de transição.' },
      production: 'A evidência é um notebook que calcula π por autovetor e por iteração de potência (concordantes, πP=π) e mede a mistura por |λ₂|.',
      risks: ['Amostrar de cadeia periódica que não converge à estacionária.', 'Confiar em MCMC com mistura lenta (|λ₂| perto de 1).'],
      checklist: ['Montar a matriz de transição.', 'Calcular π como autovetor à esquerda com autovalor 1.', 'Confirmar por iteração de potência.', 'Medir a razão de erro por passo contra |λ₂|.'],
      summary: 'π é o autovetor à esquerda com autovalor 1; o erro decai como |λ₂|ᵏ, então |λ₂|≈1 significa mistura lenta.',
      books: ['probability', 'linear'],
      exercises: [
        { level: 'Aplicação', title: 'Estacionária por dois métodos', task: 'Calcular π por autovetor e por iteração de potência e verificar que concordam e satisfazem πP=π.', acceptance: 'Os dois métodos concordam e π soma 1.', evidence: 'Notebook com os dois cálculos.' },
        { level: 'Produção', title: 'Diagnóstico de mistura', task: 'Medir a razão de erro por passo e compará-la a |λ₂|; contrastar com uma cadeia periódica que não converge.', acceptance: 'A razão de erro ≈ |λ₂| e a cadeia periódica é identificada.', evidence: 'Notebook com o gap espectral e a análise.' }
      ],
      interview: [
        { level: 'Aplicação', question: 'O que garante uma distribuição estacionária única?', expected: 'Cadeia irredutível e aperiódica (ergódica); então πP=π tem solução única atingível de qualquer início.' },
        { level: 'Produção', question: 'Por que alguns MCMC misturam devagar?', expected: 'Quando |λ₂| é próximo de 1, o gap espectral é pequeno e a convergência à estacionária é lenta.' }
      ],
      exampleFile: '../../examples/matematica-senior/fronteira/markov.py'
    },
    {
      part: 'fronteira', level: 'Fronteira',
      title: 'Otimização convexa: KKT e dualidade',
      objective: 'Distinguir problemas convexos, provar otimalidade por condições KKT e usar a dualidade como certificado de ótimo em um QP com restrições.',
      problem: 'Otimizadores são aplicados sem saber se o problema é convexo; sem isso não há garantia de ótimo global nem certificado de parada.',
      concepts: ['Conjuntos e funções convexas', 'Condições KKT', 'Dualidade fraca e forte', 'Multiplicadores de Lagrange', 'Certificado de otimalidade'],
      internals: ['Em problema convexo, KKT é suficiente: um ponto que as satisfaz é o mínimo global.', 'A dualidade fraca dá g(ν)≤f* sempre; a forte fecha o gap em problemas convexos bem-postos.'],
      prerequisites: ['Gradientes e multiplicadores de Lagrange.', 'Noção de convexidade.'],
      useWhen: ['Use ao provar otimalidade e obter um certificado de parada.', 'Priorize antes de confiar num otimizador para achar o ótimo global.'],
      avoidWhen: ['Não aplique KKT como suficiente em problema não convexo.', 'Não pare a otimização sem um certificado (gap dual).'],
      tradeoffs: { ganho: 'Otimalidade global garantida e certificada pela dualidade.', custo: 'Verificar convexidade e resolver o sistema KKT tem custo analítico.' },
      production: 'A evidência é um notebook que resolve o sistema KKT de um QP e certifica o ótimo por dualidade (gap primal-dual ≈ 0).',
      risks: ['Tratar KKT como suficiente fora de problema convexo.', 'Ignorar a qualificação de restrição (ex.: Slater) ao invocar dualidade forte.'],
      checklist: ['Verificar a convexidade do objetivo e das restrições.', 'Montar e resolver o sistema KKT.', 'Checar estacionariedade e viabilidade.', 'Calcular o valor dual e confirmar gap ≈ 0.'],
      summary: 'Em problema convexo, KKT é suficiente e a dualidade forte fecha o gap — um certificado de ótimo global.',
      books: ['mlMath', 'calculus'],
      complements: [{ title: 'Boyd & Vandenberghe — Convex Optimization (livre)', url: 'https://web.stanford.edu/~boyd/cvxbook/' }],
      exercises: [
        { level: 'Aplicação', title: 'Resolver um QP pela KKT', task: 'Montar e resolver o sistema KKT de um QP com restrição de igualdade e verificar estacionariedade e viabilidade.', acceptance: 'Qx+c+Aᵀν=0 e Ax=b são satisfeitas na tolerância numérica.', evidence: 'Notebook com o sistema e a solução.' },
        { level: 'Produção', title: 'Certificado por dualidade', task: 'Calcular o valor dual e verificar que o gap primal-dual é ~0 e que nenhum ponto viável tem custo menor.', acceptance: 'Gap ≈ 0 e o mínimo global é confirmado.', evidence: 'Notebook com primal, dual e a busca por contraexemplo.' }
      ],
      interview: [
        { level: 'Aplicação', question: 'Por que a convexidade muda tudo na otimização?', expected: 'Garante mínimo global único acessível; KKT vira condição suficiente e há certificado dual.' },
        { level: 'Produção', question: 'O que é dualidade forte e quando vale?', expected: 'Gap primal-dual zero; vale em problemas convexos que satisfazem uma qualificação de restrição (ex.: Slater).' }
      ],
      exampleFile: '../../examples/matematica-senior/fronteira/dualidade.py'
    },
    {
      part: 'fronteira', level: 'Fronteira',
      title: 'Inferência variacional e o ELBO',
      objective: 'Derivar o ELBO, provar que é um limite inferior da log-evidência e mostrar que maximizá-lo equivale a minimizar a KL entre a aproximação e a posterior.',
      problem: 'VAEs e modelos de difusão treinam maximizando o ELBO, mas a quantidade vira mágica quando não se deriva a identidade log p(x)=ELBO+KL.',
      concepts: ['Evidência e posterior intratável', 'ELBO (limite inferior)', 'Identidade log p(x)=ELBO+KL', 'Família variacional q', 'Gap = KL(q‖posterior)'],
      internals: ['log p(x)=ELBO(q)+KL(q‖p(z|x)); como KL≥0, o ELBO é limite inferior e o gap é exatamente a KL.', 'Maximizar o ELBO minimiza a KL: troca-se uma integral intratável por uma otimização.'],
      prerequisites: ['Bayes, KL e verossimilhança.', 'Noção de posterior intratável.'],
      useWhen: ['Use ao entender o treino de VAEs e modelos de difusão.', 'Priorize quando a posterior é intratável e precisa ser aproximada.'],
      avoidWhen: ['Não trate o ELBO como mágica — é log p(x) menos a KL.', 'Não espere que uma família q simples capture uma posterior complexa.'],
      tradeoffs: { ganho: 'Troca uma integral intratável por uma otimização (maximizar o ELBO).', custo: 'A família q escolhida deixa um gap (a KL) e pode subestimar a incerteza.' },
      production: 'A evidência é um notebook que estima o ELBO por Monte Carlo, verifica ELBO ≤ log-evidência e mostra que o gap é a KL(q‖posterior).',
      risks: ['Escolher q simples demais e subestimar a incerteza.', 'Não perceber que o gap é exatamente a KL.'],
      checklist: ['Escrever log p(x)=ELBO(q)+KL(q‖p(z|x)).', 'Estimar o ELBO por Monte Carlo.', 'Verificar ELBO ≤ log-evidência.', 'Mostrar que o q ótimo (a posterior) fecha o gap.'],
      summary: 'log p(x)=ELBO+KL; como KL≥0, o ELBO é limite inferior e maximizá-lo minimiza a KL entre q e a posterior.',
      books: ['mlMath', 'probability'],
      complements: [{ title: 'Blei, Kucukelbir, McAuliffe — Variational Inference: A Review for Statisticians', url: 'https://arxiv.org/abs/1601.00670' }],
      exercises: [
        { level: 'Aplicação', title: 'ELBO ≤ evidência', task: 'Num modelo conjugado gaussiano, estimar o ELBO por Monte Carlo e verificar que fica abaixo da log-evidência para vários q.', acceptance: 'ELBO(q)≤log p(x) em todos os q testados.', evidence: 'Notebook com o ELBO e a evidência fechada.' },
        { level: 'Produção', title: 'O gap é a KL', task: 'Mostrar que log p(x)−ELBO é exatamente KL(q‖posterior) e que o q ótimo (a posterior) fecha o gap.', acceptance: 'Gap ≈ KL calculada em forma fechada; no ótimo, gap ≈ 0.', evidence: 'Notebook com o gap e a KL.' }
      ],
      interview: [
        { level: 'Aplicação', question: 'Por que o ELBO é um limite inferior?', expected: 'Porque log p(x)=ELBO+KL e a KL é não negativa; o ELBO só encosta na evidência quando a KL zera.' },
        { level: 'Produção', question: 'O que se perde ao usar inferência variacional?', expected: 'O gap da KL entre a família q escolhida e a posterior real; famílias simples subestimam a incerteza.' }
      ],
      exampleFile: '../../examples/matematica-senior/fronteira/elbo.py'
    },
    {
      part: 'fronteira', level: 'Fronteira',
      title: 'Análise real e por que o rigor importa',
      objective: 'Usar convergência absoluta, uniforme e a lei dos grandes números para evitar conclusões falsas sobre séries, limites de funções e estimativas por amostragem.',
      problem: 'Manipular somas infinitas, limites e integrais por intuição produz erros silenciosos: soma que muda com a ordem, limite que perde continuidade, estimativa que não converge.',
      concepts: ['Convergência absoluta vs condicional', 'Rearranjo de Riemann', 'Convergência pontual vs uniforme', 'Lei dos grandes números', 'Medida e integração'],
      internals: ['Série condicionalmente convergente pode ser rearranjada para somar qualquer valor (Riemann); só convergência absoluta é comutativa.', 'Convergência pontual não preserva continuidade; a uniforme sim — e a LGN dá erro de Monte Carlo ~1/√n.'],
      prerequisites: ['Cálculo (limites, séries) e probabilidade.', 'Noção de convergência.'],
      useWhen: ['Use ao manipular somas infinitas, limites de funções e estimativas por amostragem.', 'Priorize quando conclusões dependem de convergência ou troca de limites.'],
      avoidWhen: ['Não rearranje série condicionalmente convergente esperando o mesmo valor.', 'Não troque limite e integral/soma sem convergência uniforme.'],
      tradeoffs: { ganho: 'Evita erros silenciosos sobre séries, limites e amostragem.', custo: 'O rigor de convergência custa cuidado que a intuição costuma dispensar.' },
      production: 'A evidência é um notebook que soma a harmônica alternada em duas ordens (ln2 vs (3/2)ln2) e mede o erro de Monte Carlo caindo como 1/√n.',
      risks: ['Somar série condicionalmente convergente em ordem arbitrária.', 'Supor que convergência pontual preserva continuidade.'],
      checklist: ['Distinguir convergência absoluta de condicional.', 'Checar convergência uniforme antes de trocar limites.', 'Ligar a LGN ao erro de Monte Carlo (~1/√n).', 'Verificar os resultados numericamente.'],
      summary: 'Só a convergência absoluta é comutativa; a uniforme preserva continuidade e a LGN dá erro de Monte Carlo ~1/√n.',
      books: ['calculus', 'probability'],
      complements: [{ title: 'Terence Tao — An Introduction to Measure Theory (livre)', url: 'https://terrytao.wordpress.com/books/an-introduction-to-measure-theory/' }],
      exercises: [
        { level: 'Aplicação', title: 'Rearranjo de Riemann', task: 'Somar a série harmônica alternada na ordem natural e num rearranjo 2:1 e mostrar que convergem para valores diferentes.', acceptance: 'Ordem natural → ln2; rearranjo → (3/2)ln2, comprovados numericamente.', evidence: 'Notebook com as duas somas.' },
        { level: 'Produção', title: 'Uniforme × pontual e Monte Carlo', task: 'Mostrar que xⁿ em [0,1] não converge uniformemente e medir o erro de integração de Monte Carlo caindo como 1/√n.', acceptance: 'sup|fₙ−f|≈1 e a inclinação log-log do erro ≈ −0,5.', evidence: 'Notebook com os dois experimentos.' }
      ],
      interview: [
        { level: 'Aplicação', question: 'Por que a ordem de uma soma infinita pode importar?', expected: 'Se a convergência é apenas condicional, rearranjar muda a soma; só a absoluta garante comutatividade.' },
        { level: 'Produção', question: 'Por que teoria da medida importa para probabilidade?', expected: 'Dá base rigorosa a esperança, integração e limites (LGN, convergência) sobre espaços contínuos e infinitos.' }
      ],
      exampleFile: '../../examples/matematica-senior/fronteira/convergencia.py'
    }
  ],
  books: {
    discrete: {
      title: 'Discrete Mathematics and Its Applications',
      authors: 'Kenneth H. Rosen',
      edition: 'Edição local',
      language: 'Inglês',
      depth: 'Lógica, provas, contagem e grafos — referência',
      path: 'pdfs/livros-matematica/Discrete Mathematics and Its Applications -- Kenneth Rosen, Kenneth H. Rosen -- ( WeLib.org ).pdf'
    },
    proof: {
      title: 'How to Prove It: A Structured Approach',
      authors: 'Daniel J. Velleman',
      edition: 'Edição local',
      language: 'Inglês',
      depth: 'Técnica de demonstração',
      path: 'pdfs/livros-matematica/How to prove it - a structured approach -- Daniel J. Velleman -- ( WeLib.org ).pdf'
    },
    concrete: {
      title: 'Concrete Mathematics: A Foundation for Computer Science',
      authors: 'Ronald L. Graham, Donald E. Knuth e Oren Patashnik',
      edition: 'Edição local',
      language: 'Inglês',
      depth: 'Somatórios, combinatória e recorrências',
      path: 'pdfs/livros-matematica/Concrete mathematics - a foundation for computer science -- Ronald L Graham, Donald E Knuth, And Oren Patashnik -- ( WeLib.org ).pdf'
    },
    linear: {
      title: 'Introduction to Linear Algebra',
      authors: 'Gilbert Strang',
      edition: '5ª edição (inclui Solutions’ Manual)',
      language: 'Inglês',
      depth: 'Álgebra linear aplicada',
      path: 'pdfs/livros-matematica/Introduction to Linear Algebra (Gilbert Strang, 5) -- Strang, Gilbert -- ( WeLib.org ).pdf'
    },
    axler: {
      title: 'Linear Algebra Done Right',
      authors: 'Sheldon Axler',
      edition: '3ª edição (2015)',
      language: 'Inglês',
      depth: 'Álgebra linear teórica, sem determinantes',
      path: 'pdfs/livros-matematica/LinearAlgebraDoneRight_Sheldon Axler_2015.pdf'
    },
    probability: {
      title: 'Introduction to Probability',
      authors: 'Joseph K. Blitzstein e Jessica Hwang',
      edition: '2ª edição',
      language: 'Inglês',
      depth: 'Probabilidade e inferência',
      path: 'pdfs/livros-matematica/Introduction to Probability, Second Edition (Chapman & -- Joseph K Blitzstein; Jessica Hwang; Taylor & Francis -- ( WeLib.org ).pdf'
    },
    calculus: {
      title: 'Calculus',
      authors: 'Michael Spivak',
      edition: '4ª edição',
      language: 'Inglês',
      depth: 'Cálculo com rigor',
      path: 'pdfs/livros-matematica/Calculus, 4th edition -- Michael Spivak -- ( WeLib.org ).pdf'
    },
    mlMath: {
      title: 'Mathematics for Machine Learning',
      authors: 'Marc Peter Deisenroth, A. Aldo Faisal e Cheng Soon Ong',
      edition: 'Edição local',
      language: 'Inglês',
      depth: 'Ponte da matemática para ML',
      path: 'pdfs/livros-matematica/Mathematics for Machine Learning -- Marc Peter Deisenroth; A Aldo Faisal; Cheng Soon Ong; -- ( WeLib.org ).pdf'
    }
  }
});

// ── Módulo 0 (ponte da Faixa 0) — construído fora da fábrica para usar numeração
//    0.x, campo `quiz` objetivo e um exemplo executável verificado. ──
const matematicaBaseParte = {
  index: '0/6',
  range: '4 módulos',
  page: 'base.html',
  navLabel: 'Módulo 0',
  title: 'Módulo 0 — da Faixa 0 à matemática',
  subtitle: 'Ponte dos fundamentos: a linguagem (variáveis, funções, notação), lógica e prova, somatório e crescimento, e vetores/probabilidade.',
  prerequisites: [
    'Concluir a Trilha 0 (Fundamentos) ou equivalente.',
    'Aritmética escolar e um pouco de Python.',
    'Disposição para conferir uma fórmula, não só usá-la.'
  ],
  objectives: [
    'Ler a notação matemática (variáveis, funções, símbolos) sem medo.',
    'Distinguir provar de testar: lógica, implicação e contraexemplo.',
    'Entender somatório (Σ), forma fechada e ritmos de crescimento.',
    'Usar vetor (lista de números), média e probabilidade como base de IA.'
  ]
};

const matematicaBaseModules = [
  {
    id: 'base-linguagem', number: '0.1', part: 'base', level: 'Ponte (Faixa 0)',
    title: 'A linguagem da matemática: variáveis, funções e notação',
    objective: 'Ler e escrever a notação básica (variável, função f(x), conjunto, símbolos) e entender por que a matemática é a linguagem que descreve algoritmos e IA.',
    problem: 'Quem sai da Faixa 0 sabe aritmética, mas trava ao ver f(x), Σ, ∈ ou ∀. Sem decifrar a notação, todo texto técnico de CS/IA parece hostil — e o problema é a linguagem, não a capacidade.',
    prerequisites: ['Aritmética escolar (somar, multiplicar, frações).', 'Ideia de variável em programação.'],
    concepts: ['Variável e constante', 'Função como regra f(x)', 'Conjunto e pertence (∈)', 'Notação e símbolos comuns', 'Do símbolo ao código'],
    internals: ['Uma variável em matemática é um nome para um valor, igual a uma variável no código; uma função f(x) é uma regra que leva cada entrada a uma saída.', 'A notação existe para ser precisa e curta: ∈ é "pertence a", ∀ é "para todo", Σ é "some" — cada símbolo troca uma frase por um sinal.'],
    useWhen: ['Traduza cada símbolo desconhecido para uma frase antes de seguir.', 'Ligue a notação ao equivalente em código (função, laço, lista).'],
    avoidWhen: ['Não pule uma fórmula sem traduzir os símbolos.', 'Não decore notação sem entender o que ela descreve.'],
    tradeoffs: { ganho: 'A notação é precisa e compacta: descreve muito em pouco espaço.', custo: 'Exige aprender os símbolos antes de ler fluentemente.' },
    production: 'Um texto de ML fica ilegível porque a pessoa nunca traduziu Σ, f(x) e ∈. O exercício reescreve três fórmulas em português e em código, mostrando que a barreira era a notação.',
    risks: ['Traumatizar-se com símbolos e desistir.', 'Confundir a notação com a dificuldade real do conceito.'],
    checklist: ['Sei dizer, em português, o que cada símbolo significa?', 'Consigo escrever a fórmula como uma função/laço em código?', 'Distingo variável, função e conjunto?', 'Reconheço ∈, ∀, ∃ e Σ?'],
    interview: [
      { level: 'Fundamentos', question: 'O que é uma função f(x) e como ela se relaciona com uma função em código?', expected: 'Uma regra que associa cada entrada a uma saída; é o mesmo conceito de uma função que recebe um argumento e retorna um valor.' },
      { level: 'Aplicação', question: 'Por que a matemática usa tanta notação simbólica?', expected: 'Para ser precisa e compacta — cada símbolo substitui uma frase e elimina ambiguidade; a barreira inicial é aprender os símbolos, não o conceito.' }
    ],
    exercises: [
      { level: 'Fundamentos', title: 'Traduzir notação para português e código', task: 'Pegar três fórmulas simples (com f(x), Σ, ∈) e reescrever cada uma em uma frase e em um trecho de código.', acceptance: 'Cada símbolo é explicado em palavras e no código equivalente.', evidence: 'Notebook/arquivo versionado com as três traduções.' },
      { level: 'Aplicação', title: 'Definir funções próprias', task: 'Escrever três funções f(x) (regra matemática) e avaliá-las em alguns valores.', acceptance: 'Entrada e saída conferem com a regra escrita.', evidence: 'Código com as funções e testes.' }
    ],
    challenge: 'Explicar, sem jargão, o que "∀x ∈ N, f(x) = 2x" quer dizer — e escrever isso em código.',
    summary: 'A matemática é uma linguagem: variável é nome de valor, f(x) é regra de entrada→saída e os símbolos trocam frases por sinais. Traduzir vem antes de resolver.',
    books: ['discrete', 'mlMath'],
    quiz: [
      { question: 'O que é uma função f(x) em matemática?', options: ['Uma regra que leva cada entrada a uma saída', 'Um número fixo', 'Um tipo de gráfico', 'Uma equação sem solução'], answer: 0, why: 'f(x) associa cada entrada a exatamente uma saída — o mesmo conceito de uma função no código.' },
      { question: 'O símbolo Σ (sigma) significa:', options: ['Somar uma sequência de termos', 'Multiplicar', 'Derivar', 'Pertencer a um conjunto'], answer: 0, why: 'Σ é o somatório: some os termos indicados (∏ seria o produto).' },
      { question: 'Qual é a melhor atitude diante de uma notação desconhecida?', options: ['Traduzir cada símbolo para uma frase (e código) antes de seguir', 'Pular a fórmula', 'Decorar sem entender', 'Desistir do texto'], answer: 0, why: 'A barreira costuma ser a linguagem, não o conceito; traduzir destrava a leitura.' }
    ]
  },
  {
    id: 'base-logica-prova', number: '0.2', part: 'base', level: 'Ponte (Faixa 0)',
    title: 'Lógica e prova: proposições, implicação e contraexemplo',
    objective: 'Entender proposições e conectivos (E, OU, NÃO), a implicação p→q e a diferença entre provar (vale sempre) e testar (vale nos casos vistos), usando o contraexemplo.',
    problem: 'O iniciante confunde "testei e passou" com "está certo". Sem lógica e a ideia de prova, invariantes e condições de código ficam ambíguas e conclusões falsas passam despercebidas.',
    prerequisites: ['Módulo 0.1', 'Ideia de verdadeiro/falso e de condição (if).'],
    concepts: ['Proposição (verdadeiro/falso)', 'Conectivos: E, OU, NÃO', 'Implicação p→q', 'Provar × testar', 'Contraexemplo'],
    internals: ['Uma implicação p→q só é falsa quando p é verdadeira e q é falsa; a contrapositiva (¬q→¬p) é equivalente, mas a recíproca (q→p) não.', 'Testar mostra que algo vale nos casos experimentados; provar mostra que vale sempre. Um único contraexemplo derruba uma afirmação universal.'],
    useWhen: ['Formalize uma condição ambígua como proposição antes de codificar.', 'Procure um contraexemplo antes de acreditar numa afirmação "para todo".'],
    avoidWhen: ['Não troque a implicação pela recíproca (elas não são equivalentes).', 'Não conclua "sempre" a partir de alguns testes que passaram.'],
    tradeoffs: { ganho: 'Afirmações viram objetos verificáveis, sem ambiguidade.', custo: 'Formalizar e provar custa disciplina que nem todo caso exige.' },
    production: 'Uma regra de negócio escrita como recíproca inverte o requisito e libera acesso indevido. O exercício reescreve a condição como implicação e busca um contraexemplo.',
    risks: ['Confundir testar com provar.', 'Trocar implicação por recíproca.', 'Negar um "para todo" sem achar o contraexemplo.'],
    checklist: ['A condição está escrita como proposição?', 'Sei distinguir p→q de q→p?', 'Tentei um contraexemplo antes de aceitar o "sempre"?', 'A contrapositiva confirma a implicação?'],
    interview: [
      { level: 'Fundamentos', question: 'Qual a diferença entre provar e testar?', expected: 'Testar verifica alguns casos; provar garante que vale para todos. Um contraexemplo basta para refutar uma afirmação universal.' },
      { level: 'Aplicação', question: 'Por que a recíproca de uma implicação não é equivalente a ela?', expected: 'p→q afirma que p leva a q; q→p é outra afirmação. A equivalente de p→q é a contrapositiva ¬q→¬p, não a recíproca.' }
    ],
    exercises: [
      { level: 'Fundamentos', title: 'Provar ou refutar', task: 'Para três afirmações "para todo n...", provar informalmente ou apresentar um contraexemplo.', acceptance: 'Cada refutação traz um contraexemplo concreto.', evidence: 'Documento com o raciocínio de cada caso.' },
      { level: 'Aplicação', title: 'Implicação vs recíproca', task: 'Dada uma regra de negócio, escrever a implicação, a recíproca e a contrapositiva e dizer qual o sistema deve usar.', acceptance: 'A escolha correta é justificada.', evidence: 'Tabela com as três formas e a decisão.' }
    ],
    challenge: 'Pegar uma afirmação "óbvia" (ex.: todo número primo é ímpar) e derrubá-la com um contraexemplo.',
    summary: 'Provar é garantir que vale sempre; testar, só nos casos vistos. Implicação equivale à contrapositiva, não à recíproca, e um contraexemplo derruba um "para todo".',
    books: ['proof', 'discrete'],
    quiz: [
      { question: 'Qual a diferença entre provar e testar?', options: ['Provar garante para todos os casos; testar verifica só os experimentados', 'São a mesma coisa', 'Testar é mais forte que provar', 'Provar só serve para números'], answer: 0, why: 'Um teste que passa não garante o caso geral; a prova sim. Um contraexemplo refuta o "sempre".' },
      { question: 'A implicação p→q é equivalente a:', options: ['Sua contrapositiva ¬q→¬p', 'Sua recíproca q→p', 'p E q', 'NÃO p'], answer: 0, why: 'Implicação e contrapositiva são equivalentes; a recíproca é uma afirmação diferente.' },
      { question: 'Para refutar "para todo n, P(n)" basta:', options: ['Um único contraexemplo onde P(n) é falso', 'Testar muitos casos verdadeiros', 'Reescrever a fórmula', 'Provar a recíproca'], answer: 0, why: 'Uma afirmação universal cai com um só contraexemplo.' }
    ]
  },
  {
    id: 'base-somatorio-crescimento', number: '0.3', part: 'base', level: 'Ponte (Faixa 0)',
    title: 'Somatório, funções e crescimento',
    objective: 'Entender o somatório (Σ) e sua forma fechada (1+…+n = n(n+1)/2), avaliar funções e reconhecer ritmos de crescimento (log < linear < quadrático < exponencial).',
    problem: 'Sem enxergar somatório e crescimento, o iniciante não entende por que um algoritmo "trava" com entradas grandes nem de onde vêm as fórmulas fechadas — e a trilha de algoritmos depende disso.',
    prerequisites: ['Módulo 0.2', 'Saber escrever um laço em Python.', 'Ideia de potência e logaritmo (intuitiva).'],
    concepts: ['Somatório (Σ)', 'Forma fechada', 'Avaliar uma função', 'Ritmos de crescimento', 'Prova por conferência'],
    internals: ['Σ de 1 a n é apenas "some de 1 até n"; existe uma forma fechada, n(n+1)/2, que dá o mesmo resultado sem laço — e você PROVA que bate conferindo.', 'Funções crescem em ritmos muito diferentes: log cresce devagar, linear em linha reta, quadrático acelera e exponencial explode — é isso que decide se um algoritmo escala.'],
    useWhen: ['Troque um laço de soma pela forma fechada quando ela existir.', 'Compare o ritmo de crescimento antes de escolher um algoritmo.'],
    avoidWhen: ['Não confie numa fórmula que você não conferiu ao menos numericamente.', 'Não ignore o crescimento: o que funciona com n=10 pode travar com n=10^6.'],
    tradeoffs: { ganho: 'Forma fechada é O(1); reconhecer crescimento evita algoritmos que não escalam.', custo: 'Achar/entender a forma fechada exige um pouco de álgebra.' },
    production: 'Um relatório soma 1..n num laço a cada requisição e fica lento; trocar pela forma fechada o torna instantâneo. O exercício mede os dois e confere a igualdade.',
    risks: ['Usar fórmula sem conferir.', 'Ignorar o crescimento e escolher um algoritmo que não escala.', 'Confundir crescimento exponencial com quadrático.'],
    checklist: ['Sei expandir um Σ em uma soma concreta?', 'Confirmei a forma fechada numericamente?', 'Sei ordenar log, linear, quadrático e exponencial?', 'Considerei o crescimento para entradas grandes?'],
    interview: [
      { level: 'Fundamentos', question: 'O que é a forma fechada de 1+2+...+n e por que ela importa?', expected: 'É n(n+1)/2; calcula a soma em O(1) sem laço, e ilustra como uma fórmula substitui uma iteração.' },
      { level: 'Aplicação', question: 'Ordene do mais lento ao mais rápido de crescer: linear, exponencial, log, quadrático.', expected: 'log < linear < quadrático < exponencial — a ordem que decide se um algoritmo escala.' }
    ],
    exercises: [
      { level: 'Fundamentos', title: 'Conferir a forma fechada', task: 'Rodar o exemplo e comparar a soma por laço com n(n+1)/2 para vários n.', acceptance: 'Laço e fórmula coincidem em todos os n testados.', evidence: 'Saída do script com as comparações.' },
      { level: 'Aplicação', title: 'Comparar crescimentos', task: 'Tabular n, n², 2^n e log2(n) para alguns n e descrever o que acontece quando n cresce.', acceptance: 'A tabela evidencia a ordem dos ritmos.', evidence: 'Tabela + observação escrita.' }
    ],
    challenge: 'Explicar, com o exemplo, por que um algoritmo O(2^n) é inviável já com n modesto, enquanto O(n) escala.',
    summary: 'Σ tem forma fechada que você prova conferindo (1+…+n = n(n+1)/2); e reconhecer log < linear < quadrático < exponencial é o que separa um algoritmo que escala de um que trava.',
    books: ['concrete', 'discrete'],
    exampleFile: '../../examples/matematica-senior/matematica-zero.py',
    quiz: [
      { question: 'Quanto vale a soma 1+2+...+n (forma fechada)?', options: ['n(n+1)/2', 'n²', '2^n', 'n/2'], answer: 0, why: 'A fórmula de Gauss dá a soma em O(1); o laço serve para conferir que ela bate.' },
      { question: 'Do mais lento ao mais rápido de crescer:', options: ['log < linear < quadrático < exponencial', 'linear < log < exponencial < quadrático', 'exponencial < quadrático < linear < log', 'todos crescem igual'], answer: 0, why: 'Essa ordem decide se um algoritmo escala; exponencial explode, log mal cresce.' },
      { question: 'Por que reconhecer o ritmo de crescimento importa?', options: ['O que funciona com n pequeno pode travar com n grande', 'Deixa o código mais bonito', 'Economiza memória sempre', 'Não importa na prática'], answer: 0, why: 'O crescimento decide a viabilidade do algoritmo em escala — a base de complexidade.' }
    ]
  },
  {
    id: 'base-vetores-probabilidade', number: '0.4', part: 'base', level: 'Ponte (Faixa 0)',
    title: 'Vetores e probabilidade: os dois pilares para IA',
    objective: 'Entender um vetor como lista de números (com soma e média) e a probabilidade como fração de casos, incluindo a ideia de valor esperado — a base de álgebra linear e estatística usadas em IA.',
    problem: 'A trilha de IA e a de estatística assumem vetor, média e probabilidade. Sem essa base, o iniciante decora fórmulas de ML sem entender que são só listas de números e contagens de casos.',
    prerequisites: ['Módulo 0.3', 'Somar e dividir; ideia de fração.', 'Lista em Python.'],
    concepts: ['Vetor como lista de números', 'Soma e média', 'Probabilidade como fração de casos', 'Valor esperado (média ponderada)', 'Da contagem à IA'],
    internals: ['Um vetor é uma lista ordenada de números; média é a soma dividida pela quantidade — a estatística mais básica e a base de embeddings/features.', 'Probabilidade de um evento é (casos favoráveis)/(casos possíveis) quando são equiprováveis; o valor esperado é a média dos resultados ponderada pelas probabilidades.'],
    useWhen: ['Represente dados como vetores para calcular média, soma e comparação.', 'Estime a chance de um evento pela fração de casos favoráveis.'],
    avoidWhen: ['Não trate probabilidade como certeza.', 'Não confunda média (centro) com o valor de um caso isolado.'],
    tradeoffs: { ganho: 'Vetor e probabilidade transformam dados e incerteza em contas simples e comparáveis.', custo: 'Modelos probabilísticos exigem cuidado com hipóteses (casos equiprováveis, independência).' },
    production: 'Um modelo "decide" sem medir incerteza e erra caro. O exercício calcula média de um vetor e o valor esperado de um dado, mostrando de onde vêm as métricas de ML.',
    risks: ['Confundir probabilidade com certeza.', 'Somar/mediar vetores de tamanhos diferentes.', 'Ignorar a hipótese de casos equiprováveis.'],
    checklist: ['Sei calcular a média de um vetor?', 'Sei escrever a probabilidade como fração de casos?', 'Entendo valor esperado como média ponderada?', 'Reconheço quando os casos são (ou não) equiprováveis?'],
    interview: [
      { level: 'Fundamentos', question: 'O que é um vetor e como se calcula sua média?', expected: 'Uma lista ordenada de números; a média é a soma dos elementos dividida pela quantidade.' },
      { level: 'Aplicação', question: 'O que é valor esperado?', expected: 'A média dos resultados possíveis ponderada pelas probabilidades; para um dado justo, (1+2+3+4+5+6)/6 = 3.5.' }
    ],
    exercises: [
      { level: 'Fundamentos', title: 'Média e probabilidade', task: 'Calcular a média de um vetor e a probabilidade de um evento simples (ex.: par no dado).', acceptance: 'Os valores conferem com o cálculo manual.', evidence: 'Código/notebook com os cálculos.' },
      { level: 'Aplicação', title: 'Valor esperado', task: 'Calcular o valor esperado de um dado e de uma aposta simples e interpretar o resultado.', acceptance: 'O valor esperado é calculado e explicado.', evidence: 'Cálculo com interpretação escrita.' }
    ],
    challenge: 'Explicar por que um valor esperado positivo não garante ganho num único jogo — só no longo prazo.',
    summary: 'Vetor é lista de números (soma, média); probabilidade é fração de casos e valor esperado é média ponderada. São a base concreta da álgebra linear e da estatística de IA.',
    books: ['linear', 'probability'],
    quiz: [
      { question: 'O que é um vetor, no sentido mais básico?', options: ['Uma lista ordenada de números', 'Uma equação', 'Um gráfico de barras', 'Um tipo de função'], answer: 0, why: 'Vetor = lista de números; média/soma sobre ele são a estatística e os embeddings mais básicos.' },
      { question: 'A probabilidade de um evento com casos equiprováveis é:', options: ['casos favoráveis / casos possíveis', 'casos favoráveis × casos possíveis', 'sempre 1/2', 'a soma dos casos'], answer: 0, why: 'Com casos igualmente prováveis, a probabilidade é a fração de favoráveis sobre o total.' },
      { question: 'O valor esperado de um dado justo (faces 1..6) é:', options: ['3.5', '6', '1', '21'], answer: 0, why: 'É a média ponderada: (1+2+3+4+5+6)/6 = 3.5 — o centro dos resultados no longo prazo.' }
    ]
  }
];

data.modules = [...matematicaBaseModules, ...data.modules];
data.academy.parts = { base: matematicaBaseParte, ...data.academy.parts };

export const matematicaAcademy = data.academy;
export const matematicaModules = data.modules;
export const matematicaBooks = data.books;
export const matematicaAssessment = data.assessment;

export const matematicaAnswerKey = matematicaModules.map((module) => ({
  module: module.number,
  title: module.title,
  objetivoAtingido: module.objective,
  respostaEsperadaNaEntrevista: (module.interview || []).map((item) => `${item.level}: ${item.expected}`),
  erroMaisComum: (module.risks && module.risks[0]) || 'Concluir a leitura sem demonstrar o resultado.',
  criterioDeAceite: (module.exercises || []).map((item) => `${item.level} — evidência: ${item.evidence}`),
  sinalDeQueNaoDominou: module.risks || []
}));
