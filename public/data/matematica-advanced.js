/*
 * ACADEMIA DE MATEMÁTICA — matemática aplicada à Engenharia de Software e IA.
 *
 * Objetivo da trilha: dar a base matemática que sustenta algoritmos (fase 1) e a
 * trilha de IA (fases 11–12). Cada módulo é ancorado nos livros do acervo local
 * (public/pdfs/livros-matematica) e exige evidência reproduzível, nunca só leitura.
 *
 * Estrutura conforme PADRAO-TRILHAS-ACADEMIA.md (§8): schema pela fábrica
 * compartilhada; conteúdo, referências e bibliografia específicos da trilha.
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
      books: ['mlMath', 'linear'],
      exercises: [{ level: 'Produção', title: 'Self-attention em NumPy', task: 'Implementar uma cabeça de self-attention e verificar o efeito da escala 1/√d na softmax.', acceptance: 'A saída bate com uma referência e o efeito da escala é medido.', evidence: 'Notebook com a implementação e a análise.' }],
      interview: [{ level: 'Produção', question: 'Por que dividir QKᵀ por √d antes da softmax?', expected: 'Sem a escala, a variância do produto cresce com d, a softmax satura e o gradiente desaparece.' }]
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

export const matematicaAcademy = data.academy;
export const matematicaModules = data.modules;
export const matematicaBooks = data.books;
export const matematicaAssessment = data.assessment;
