/*
 * ACADEMIA DE GESTÃO FINANCEIRA — finanças pessoais e de carreira (contexto BR).
 *
 * Objetivo da trilha: construir um sistema financeiro pessoal saudável — controle,
 * investimento, renda e planejamento — sustentado por comportamento e evidência.
 *
 * ⚠ Conteúdo EDUCACIONAL. Ensina conceitos e métodos; NÃO é recomendação
 * personalizada de investimento. Cada decisão depende do perfil e dos objetivos de
 * cada pessoa. Os módulos são ancorados nos livros do acervo local
 * (public/pdfs/livros-financeiro) e, para o conteúdo regulatório BR (Tesouro, B3,
 * IR), em fontes OFICIAIS gratuitas como complemento.
 *
 * Estrutura conforme PADRAO-TRILHAS-ACADEMIA.md (§8).
 */

import { createAcademyData } from './academy-data-factory.js';

// Fontes oficiais gratuitas (BR) — complementos regulatórios/educacionais.
const TESOURO = { title: 'Tesouro Direto (oficial)', url: 'https://www.tesourodireto.com.br/' };
const B3 = { title: 'B3 — Educação do investidor', url: 'https://www.b3.com.br/pt_br/para-voce/' };
const CVM = { title: 'CVM — Portal do Investidor', url: 'https://www.investidor.gov.br/' };
const RECEITA = { title: 'Receita Federal — Imposto de Renda', url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda' };
const BCB = { title: 'Banco Central — Cidadania Financeira', url: 'https://www.bcb.gov.br/cidadaniafinanceira' };
const SEBRAE = { title: 'SEBRAE (oficial)', url: 'https://sebrae.com.br/' };

const data = createAcademyData({
  title: 'Gestão Financeira Pessoal e de Carreira',
  baseline: 'Registros pessoais atualizados, moeda local e decisões adequadas ao próprio perfil de risco e objetivos.',
  projectNoun: 'sistema financeiro pessoal',
  partSpecs: [
    {
      id: 'controle',
      title: 'Controle e segurança financeira',
      subtitle: 'Comportamento, orçamento, fluxo de caixa, dívidas e reserva de emergência.',
      objectives: [
        'Diagnosticar o próprio comportamento e a situação financeira com dados.',
        'Operar orçamento e fluxo de caixa que sobrem por escolha, não por sorte.',
        'Eliminar dívidas caras e dimensionar a reserva de emergência.'
      ]
    },
    {
      id: 'investimentos',
      title: 'Investimentos e matemática financeira',
      subtitle: 'Juros compostos, sistema financeiro, renda fixa, fundos, renda variável e riscos.',
      objectives: [
        'Aplicar juros compostos e comparar produtos por custo e risco.',
        'Entender o sistema financeiro BR e escolher com base em objetivo e horizonte.',
        'Avaliar riscos de renda variável, FIIs, exterior e criptoativos.'
      ]
    },
    {
      id: 'carreira',
      title: 'Renda, carreira e negócios',
      subtitle: 'Aumento de renda, precificação, contabilidade básica, economia e pequenos negócios.',
      objectives: [
        'Planejar o crescimento da renda como principal alavanca financeira.',
        'Precificar serviços e interpretar contabilidade e economia aplicadas.',
        'Modelar e validar uma fonte de renda extra com risco controlado.'
      ]
    },
    {
      id: 'planejamento',
      title: 'Planejamento e proteção',
      subtitle: 'Alocação de ativos, risco, impostos, objetivos de vida, proteção e revisão.',
      objectives: [
        'Definir alocação de ativos alinhada a objetivos e tolerância a risco.',
        'Planejar impostos, proteção patrimonial e objetivos de vida.',
        'Revisar o plano, simular cenários adversos e documentar a política.'
      ]
    }
  ],
  moduleSpecs: [
    // ── Parte 1 · Controle e segurança financeira ──
    {
      part: 'controle', level: 'Fundamentos',
      title: 'Analisar mentalidade financeira e comportamento',
      objective: 'Analisar o próprio comportamento financeiro e os vieses que sabotam decisões de longo prazo.',
      problem: 'Boa parte dos erros financeiros é comportamental, não técnica: gasto por impulso, comparação social e falta de paciência.',
      concepts: ['Vieses e gatilhos de gasto', 'Comportamento vs planilha', 'Custo de oportunidade', 'Paciência e juros compostos'],
      internals: ['Housel: fazer bem com dinheiro depende mais de comportamento que de inteligência; consistência vence brilhantismo.', 'Gasto é frequentemente identidade e emoção; identificar o gatilho é pré-requisito para mudá-lo.'],
      books: ['psychologyOfMoney', 'doMilAoMilhao'],
      exercises: [{ level: 'Fundamentos', title: 'Mapa de comportamento', task: 'Registrar 30 dias de gastos e classificar cada um por gatilho (necessidade, impulso, social) e emoção.', acceptance: 'Padrões de gatilho identificados com evidência dos registros.', evidence: 'Planilha/doc versionado do diário de gastos.' }],
      interview: [{ level: 'Fundamentos', question: 'Qual viés mais afeta suas decisões de dinheiro e como você o contém?', expected: 'Nomear um viés concreto e um mecanismo prático de contenção, não força de vontade genérica.' }]
    },
    {
      part: 'controle', level: 'Fundamentos',
      title: 'Construir um orçamento pessoal',
      objective: 'Construir um orçamento pessoal que reflita renda, despesas fixas e variáveis e uma meta de poupança.',
      problem: 'Sem orçamento, o dinheiro "some"; despesas invisíveis e ausência de meta impedem qualquer avanço patrimonial.',
      concepts: ['Renda líquida vs bruta', 'Despesas fixas e variáveis', 'Meta de poupança primeiro', 'Categorias e limites'],
      internals: ['Nigro: pagar-se primeiro (poupança como despesa fixa) inverte a lógica de sobrar no fim do mês.', 'Orçamento é hipótese: só vira controle quando comparado ao realizado.'],
      books: ['doMilAoMilhao', 'investimentosInteligentes'],
      complements: [BCB],
      exercises: [{ level: 'Aplicação', title: 'Orçamento com meta', task: 'Montar um orçamento mensal com poupança tratada como despesa fixa e comparar com o realizado do mês.', acceptance: 'Orçamento com meta de poupança e comparação previsto × realizado.', evidence: 'Planilha versionada do orçamento.' }],
      interview: [{ level: 'Aplicação', question: 'Por que "pagar-se primeiro" muda o resultado do mês?', expected: 'A poupança deixa de depender do que sobra e passa a ser prioridade orçada.' }]
    },
    {
      part: 'controle', level: 'Aplicação',
      title: 'Comparar métodos de orçamento',
      objective: 'Comparar métodos de orçamento (50-30-20, base zero, envelopes) e escolher o adequado ao próprio perfil.',
      problem: 'Um método que não cabe na rotina é abandonado; a escolha errada faz a pessoa desistir de orçar.',
      concepts: ['50-30-20', 'Orçamento base zero', 'Método dos envelopes', 'Aderência × precisão'],
      internals: ['Métodos trocam precisão por aderência; o melhor é o que a pessoa mantém por meses.', 'Base zero dá controle máximo, mas exige disciplina; 50-30-20 é um teto simples de começar.'],
      books: ['doMilAoMilhao'],
      exercises: [{ level: 'Aplicação', title: 'Testar dois métodos', task: 'Aplicar dois métodos por um mês cada e registrar aderência e resultado de poupança.', acceptance: 'Comparação com dados dos dois métodos e escolha justificada.', evidence: 'Doc versionado com os dois meses.' }],
      interview: [{ level: 'Aplicação', question: 'Como você escolhe entre 50-30-20 e orçamento base zero?', expected: 'Pela aderência à rotina e ao nível de controle necessário, não por moda.' }]
    },
    {
      part: 'controle', level: 'Aplicação',
      title: 'Diagnosticar a situação financeira',
      objective: 'Diagnosticar a situação financeira com um balanço pessoal (ativos, passivos e patrimônio líquido).',
      problem: 'Sem balanço, decisões são tomadas no escuro; dívida e patrimônio ficam invisíveis.',
      concepts: ['Balanço pessoal', 'Patrimônio líquido', 'Índice de endividamento', 'Taxa de poupança'],
      internals: ['Patrimônio líquido = ativos − passivos; é a única medida que resume a saúde financeira num número.', 'A taxa de poupança prevê o futuro melhor que a renda absoluta.'],
      books: ['investimentosInteligentes'],
      exercises: [{ level: 'Aplicação', title: 'Balanço e indicadores', task: 'Montar o próprio balanço pessoal e calcular patrimônio líquido, endividamento e taxa de poupança.', acceptance: 'Balanço completo com os três indicadores calculados.', evidence: 'Planilha versionada do balanço.' }],
      interview: [{ level: 'Aplicação', question: 'Por que a taxa de poupança importa mais que a renda?', expected: 'Renda alta com poupança baixa não gera patrimônio; a taxa de poupança determina o acúmulo.' }]
    },
    {
      part: 'controle', level: 'Aplicação',
      title: 'Operar fluxo de caixa pessoal',
      objective: 'Operar o fluxo de caixa pessoal antecipando entradas e saídas para nunca faltar liquidez.',
      problem: 'Contas certas em datas erradas geram atraso e juros mesmo com saldo positivo no mês.',
      concepts: ['Calendário de vencimentos', 'Entradas × saídas no tempo', 'Colchão de liquidez', 'Antecipação de sazonais'],
      internals: ['Solvência é sobre o tempo: ter o dinheiro na data certa, não só no total do mês.', 'Despesas sazonais (IPVA, matrícula) previstas mensalmente evitam o "susto" anual.'],
      books: ['doMilAoMilhao'],
      exercises: [{ level: 'Aplicação', title: 'Fluxo de caixa de 90 dias', task: 'Projetar o fluxo de caixa dos próximos 90 dias com vencimentos e sazonais provisionados.', acceptance: 'Projeção sem saldo negativo em nenhuma data.', evidence: 'Planilha versionada do fluxo.' }],
      interview: [{ level: 'Aplicação', question: 'Como ter saldo no mês e ainda atrasar contas?', expected: 'Descasamento de datas entre entradas e saídas; solvência é temporal.' }]
    },
    {
      part: 'controle', level: 'Aplicação',
      title: 'Calcular custo de dívidas e crédito',
      objective: 'Calcular o custo real de dívidas e crédito (CET, juros compostos) e priorizar o que quitar.',
      problem: 'Parcelas "que cabem no bolso" escondem juros altíssimos; o custo total é ignorado.',
      concepts: ['CET (custo efetivo total)', 'Juros compostos na dívida', 'Rotativo do cartão e cheque especial', 'Priorização por taxa'],
      internals: ['Juros compostos trabalham contra você na dívida com a mesma força com que trabalham a favor no investimento.', 'Priorizar por maior taxa (avalanche) minimiza o custo total; por menor saldo (bola de neve) ajuda o comportamento.'],
      books: ['doMilAoMilhao', 'psychologyOfMoney'],
      complements: [BCB],
      exercises: [{ level: 'Aplicação', title: 'Raio-x das dívidas', task: 'Listar todas as dívidas com CET e simular a ordem de quitação por avalanche e por bola de neve.', acceptance: 'Custo total comparado nas duas estratégias.', evidence: 'Planilha versionada das dívidas.' }],
      interview: [{ level: 'Aplicação', question: 'Avalanche ou bola de neve — quando cada uma?', expected: 'Avalanche minimiza custo (maior taxa primeiro); bola de neve reforça o comportamento (menor saldo primeiro).' }]
    },
    {
      part: 'controle', level: 'Produção',
      title: 'Planejar quitação de dívidas',
      objective: 'Planejar a quitação de dívidas com renegociação, ordem de pagamento e prevenção de recaída.',
      problem: 'Quitar sem mudar o comportamento e sem renegociar leva a re-endividar em poucos meses.',
      concepts: ['Renegociação e portabilidade', 'Ordem de quitação', 'Corte de gatilhos de dívida', 'Fundo anti-recaída'],
      internals: ['Trocar dívida cara por barata (portabilidade) libera caixa sem esforço adicional.', 'Sem remover o gatilho comportamental, a dívida volta; o plano precisa incluir prevenção.'],
      books: ['doMilAoMilhao', 'psychologyOfMoney'],
      exercises: [{ level: 'Produção', title: 'Plano de quitação', task: 'Escrever um plano de quitação com renegociação, ordem, prazo e medidas anti-recaída.', acceptance: 'Plano com prazo realista e prevenção comportamental.', evidence: 'Doc versionado do plano.' }],
      interview: [{ level: 'Produção', question: 'Por que quitar dívida sem mudar comportamento falha?', expected: 'O gatilho permanece; sem prevenção e renegociação, o endividamento retorna.' }]
    },
    {
      part: 'controle', level: 'Produção',
      title: 'Dimensionar reserva de emergência',
      objective: 'Dimensionar e alocar a reserva de emergência conforme estabilidade de renda e custos fixos.',
      problem: 'Sem reserva, qualquer imprevisto vira dívida cara; reserva mal alocada perde liquidez quando mais precisa.',
      concepts: ['Meses de custo fixo', 'Estabilidade de renda (CLT vs autônomo)', 'Liquidez diária', 'Onde guardar (Selic/CDB liquidez)'],
      internals: ['Reserva é seguro, não investimento: prioriza liquidez e baixo risco sobre rentabilidade.', 'Renda instável exige reserva maior; a reserva evita vender investimentos no pior momento.'],
      books: ['doMilAoMilhao', 'investimentosInteligentes'],
      complements: [TESOURO],
      exercises: [{ level: 'Produção', title: 'Reserva dimensionada', task: 'Calcular o tamanho da reserva pelo próprio custo fixo e definir o veículo de liquidez diária.', acceptance: 'Valor justificado pela estabilidade de renda e veículo líquido escolhido.', evidence: 'Doc versionado com o cálculo.' }],
      interview: [{ level: 'Produção', question: 'Por que a reserva prioriza liquidez em vez de rentabilidade?', expected: 'Ela precisa estar disponível na emergência sem risco de perda ou carência.' }]
    },

    // ── Parte 2 · Investimentos e matemática financeira ──
    {
      part: 'investimentos', level: 'Fundamentos',
      title: 'Aplicar matemática financeira',
      objective: 'Aplicar juros compostos, valor do dinheiro no tempo e taxa real para projetar objetivos.',
      problem: 'Sem matemática financeira, a pessoa subestima o custo da inflação e o poder do tempo nos investimentos.',
      concepts: ['Juros simples vs compostos', 'Valor futuro e valor presente', 'Taxa real (desconto da inflação)', 'Aportes periódicos'],
      internals: ['Juros compostos crescem exponencialmente; o tempo é a variável mais poderosa, não o valor do aporte.', 'Taxa real = ((1+nominal)/(1+inflação))−1; render abaixo da inflação é perder poder de compra.'],
      books: ['investimentosInteligentes'],
      exercises: [{ level: 'Aplicação', title: 'Projeção de objetivo', task: 'Projetar um objetivo de longo prazo com aportes mensais e comparar taxa nominal e real.', acceptance: 'Projeção correta com juros compostos e taxa real.', evidence: 'Planilha versionada da projeção.' }],
      interview: [{ level: 'Aplicação', question: 'Por que uma aplicação pode "render" e ainda te empobrecer?', expected: 'Se o rendimento nominal for menor que a inflação, a taxa real é negativa.' }]
    },
    {
      part: 'investimentos', level: 'Fundamentos',
      title: 'Explicar o sistema financeiro brasileiro',
      objective: 'Explicar o papel de Banco Central, CVM, B3, tesouro e intermediários no sistema financeiro BR.',
      problem: 'Sem entender quem regula e protege o quê, a pessoa cai em promessas de retorno e fraudes.',
      concepts: ['Banco Central e CVM', 'B3 e custódia', 'FGC e garantias', 'Corretoras e intermediários'],
      internals: ['CVM regula o mercado de capitais; o FGC garante certos produtos até um limite por instituição/CPF.', 'Rentabilidade garantida acima do razoável é o sinal mais comum de fraude.'],
      books: ['investimentosInteligentes'],
      complements: [CVM, B3, BCB],
      exercises: [{ level: 'Aplicação', title: 'Mapa do sistema', task: 'Mapear, para 3 produtos, quem regula, quem custodia e qual a garantia (FGC ou nenhuma).', acceptance: 'Mapa correto de regulação, custódia e garantia.', evidence: 'Doc versionado do mapa.' }],
      interview: [{ level: 'Aplicação', question: 'O que o FGC cobre e o que não cobre?', expected: 'Cobre certos produtos bancários até um limite por CPF/instituição; não cobre fundos e renda variável.' }]
    },
    {
      part: 'investimentos', level: 'Aplicação',
      title: 'Comparar produtos de renda fixa',
      objective: 'Comparar produtos de renda fixa (Tesouro, CDB, LCI/LCA) por indexador, prazo, liquidez e tributação.',
      problem: 'Comparar só pela taxa nominal ignora IR, liquidez e risco de crédito, levando a escolhas piores.',
      concepts: ['Prefixado, pós (Selic/CDI) e IPCA+', 'Liquidez e marcação a mercado', 'IR regressivo e isenção (LCI/LCA)', 'Risco de crédito e FGC'],
      internals: ['Tesouro IPCA+ protege o poder de compra; prefixado aposta na queda de juros e sofre marcação se vender antes.', 'LCI/LCA isentas de IR podem render menos que um CDB tributado com taxa maior — compare o líquido.'],
      books: ['investimentosInteligentes'],
      complements: [TESOURO],
      exercises: [{ level: 'Produção', title: 'Comparação líquida', task: 'Comparar 3 produtos de renda fixa pelo retorno líquido (após IR) para um mesmo prazo e objetivo.', acceptance: 'Comparação pelo líquido, considerando liquidez e indexador.', evidence: 'Planilha versionada da comparação.' }],
      interview: [{ level: 'Produção', question: 'Quando um prefixado é arriscado mesmo sendo renda fixa?', expected: 'Se vendido antes do vencimento, sofre marcação a mercado com a alta de juros.' }]
    },
    {
      part: 'investimentos', level: 'Aplicação',
      title: 'Avaliar fundos de investimento',
      objective: 'Avaliar fundos de investimento por taxa, benchmark, consistência e custo total.',
      problem: 'Taxas altas e fundos que só seguem o índice corroem o retorno sem que o investidor perceba.',
      concepts: ['Taxa de administração e performance', 'Benchmark e tracking', 'Come-cotas', 'Custo composto no tempo'],
      internals: ['Bogle: no longo prazo, o custo é o determinante mais previsível do retorno líquido — taxa alta raramente se paga.', 'Muitos fundos ativos não superam o índice após taxas; o custo é certo, o desempenho não.'],
      books: ['commonSenseInvesting', 'randomWalk'],
      exercises: [{ level: 'Produção', title: 'Custo composto de um fundo', task: 'Simular o impacto de 1% a mais de taxa ao ano sobre 20 anos e comparar com um índice de baixo custo.', acceptance: 'Impacto do custo quantificado no longo prazo.', evidence: 'Planilha versionada da simulação.' }],
      interview: [{ level: 'Produção', question: 'Por que 1% de taxa importa tanto no longo prazo?', expected: 'Composta por décadas, uma taxa pequena consome uma fração enorme do patrimônio final.' }]
    },
    {
      part: 'investimentos', level: 'Produção',
      title: 'Analisar ações e renda variável',
      objective: 'Analisar ações com foco em valor, margem de segurança e distinção entre investir e especular.',
      problem: 'Comprar ações por dica ou euforia, sem entender o negócio nem preço, é especulação disfarçada de investimento.',
      concepts: ['Investir vs especular', 'Margem de segurança', 'Valor intrínseco vs preço', 'Mr. Market e emoção'],
      internals: ['Graham: preço é o que você paga, valor é o que você recebe; a margem de segurança protege do erro.', '"Mr. Market" oferece preços emocionais todo dia — cabe ao investidor decidir quando ignorá-lo.'],
      books: ['intelligentInvestor'],
      complements: [B3],
      exercises: [{ level: 'Produção', title: 'Tese de uma empresa', task: 'Escrever uma tese educacional sobre uma empresa: negócio, riscos e por que preço ≠ valor (sem recomendação).', acceptance: 'Tese distingue valor de preço e explicita riscos e incertezas.', evidence: 'Doc versionado da tese.' }],
      interview: [{ level: 'Produção', question: 'Qual a diferença entre investir e especular?', expected: 'Investir baseia-se em análise e margem de segurança; especular aposta no preço de curto prazo.' }]
    },
    {
      part: 'investimentos', level: 'Aplicação',
      title: 'Avaliar fundos imobiliários',
      objective: 'Avaliar fundos imobiliários (FIIs) por tipo, vacância, dividend yield sustentável e riscos.',
      problem: 'Escolher FII só pelo dividend yield alto ignora vacância, qualidade dos imóveis e sustentabilidade da renda.',
      concepts: ['FIIs de tijolo vs papel', 'Vacância e inadimplência', 'Dividend yield sustentável', 'Liquidez e gestão'],
      internals: ['Yield alto pode refletir risco alto ou preço em queda; a pergunta é se a renda é sustentável.', 'FII de papel segue índices de crédito/juros; de tijolo segue aluguéis e vacância — riscos diferentes.'],
      books: ['investimentosInteligentes'],
      complements: [B3, CVM],
      exercises: [{ level: 'Aplicação', title: 'Análise de um FII', task: 'Analisar um FII quanto a tipo, vacância e sustentabilidade do dividendo (educacional, sem recomendação).', acceptance: 'Análise conecta yield a vacância e qualidade, com riscos.', evidence: 'Doc versionado da análise.' }],
      interview: [{ level: 'Aplicação', question: 'Por que um dividend yield alto pode ser um alerta?', expected: 'Pode indicar risco elevado ou queda de preço; a sustentabilidade importa mais que o número.' }]
    },
    {
      part: 'investimentos', level: 'Aplicação',
      title: 'Comparar ETFs, BDRs e ativos internacionais',
      objective: 'Comparar ETFs, BDRs e exposição internacional por custo, diversificação e tributação.',
      problem: 'Concentrar tudo no Brasil e numa só moeda aumenta o risco; sem entender ETFs/BDRs, a diversificação global fica inacessível.',
      concepts: ['Indexação e ETFs', 'BDRs e exposição cambial', 'Diversificação por país e moeda', 'Tributação de ativos no exterior'],
      internals: ['Malkiel/Bogle: a indexação ampla captura o retorno do mercado a custo baixo, batendo a maioria dos ativos.', 'Diversificar em moeda e geografia reduz o risco específico de um país sem exigir stock picking.'],
      books: ['commonSenseInvesting', 'randomWalk'],
      complements: [B3, RECEITA],
      exercises: [{ level: 'Produção', title: 'Exposição global educacional', task: 'Montar uma carteira-modelo educacional com exposição internacional via ETF/BDR e explicar custo e tributação.', acceptance: 'Modelo com diversificação global e regras tributárias corretas.', evidence: 'Doc versionado do modelo.' }],
      interview: [{ level: 'Produção', question: 'Por que a indexação ampla costuma bater a maioria dos fundos ativos?', expected: 'Captura o retorno do mercado a custo baixo; a maioria dos ativos não supera o índice após taxas.' }]
    },
    {
      part: 'investimentos', level: 'Produção',
      title: 'Avaliar riscos de criptoativos',
      objective: 'Avaliar criptoativos com foco em risco, volatilidade, custódia e fraudes, sem euforia.',
      problem: 'A promessa de ganho rápido leva a alocar demais em ativos voláteis e a cair em golpes.',
      concepts: ['Volatilidade e drawdown', 'Custódia e chaves', 'Golpes e esquemas', 'Tamanho de posição vs risco'],
      internals: ['Housel: o maior risco não é a volatilidade, é ser forçado a vender no fundo por ter alocado demais.', 'Sem custódia própria segura e sem regulação clara, o risco operacional soma-se ao de mercado.'],
      books: ['psychologyOfMoney'],
      complements: [CVM],
      exercises: [{ level: 'Produção', title: 'Política de risco para cripto', task: 'Definir uma política pessoal de exposição máxima a criptoativos e critérios anti-golpe.', acceptance: 'Política com teto de exposição e checklist de segurança.', evidence: 'Doc versionado da política.' }],
      interview: [{ level: 'Produção', question: 'Qual o maior risco de alocar demais em um ativo volátil?', expected: 'Ser forçado a vender no pior momento; o tamanho da posição, não só o ativo, define o dano.' }]
    },

    // ── Parte 3 · Renda, carreira e negócios ──
    {
      part: 'carreira', level: 'Aplicação',
      title: 'Planejar aumento de renda e carreira',
      objective: 'Planejar o crescimento da renda ativa como a principal alavanca financeira da fase atual.',
      problem: 'Focar só em cortar gastos ignora a maior alavanca de quem está começando: aumentar a renda.',
      concepts: ['Renda ativa vs passiva', 'Capital humano', 'Negociação salarial', 'Metas de carreira mensuráveis'],
      internals: ['Nigro: no início, aumentar a renda supera qualquer otimização de gasto; o capital humano é o maior ativo.', 'Renda extra investida cedo se beneficia mais dos juros compostos que cortes marginais.'],
      books: ['doMilAoMilhao', 'psychologyOfMoney'],
      exercises: [{ level: 'Aplicação', title: 'Plano de renda', task: 'Definir uma meta de aumento de renda em 12 meses com ações concretas (qualificação, negociação, extra).', acceptance: 'Meta mensurável com ações e prazos.', evidence: 'Doc versionado do plano.' }],
      interview: [{ level: 'Aplicação', question: 'Por que aumentar a renda supera cortar gastos no início?', expected: 'Há um piso para cortes; a renda tem teto muito maior e alimenta os aportes iniciais.' }]
    },
    {
      part: 'carreira', level: 'Aplicação',
      title: 'Calcular preço de serviços e freelas',
      objective: 'Calcular o preço de serviços e freelas cobrindo custos, impostos, tempo ocioso e margem.',
      problem: 'Precificar por "achismo" ou copiando o mercado leva a trabalhar muito e não sobrar nada.',
      concepts: ['Custos fixos e variáveis', 'Hora produtiva vs ociosa', 'Impostos e reserva', 'Margem e valor percebido'],
      internals: ['Preço sustentável cobre custo, imposto, tempo não faturável e margem — não apenas as horas trabalhadas.', 'Preço por valor entregue costuma superar preço por hora quando o resultado é claro.'],
      books: ['investimentosInteligentes'],
      complements: [SEBRAE],
      exercises: [{ level: 'Aplicação', title: 'Calculadora de preço', task: 'Montar uma calculadora de preço-hora que cubra custos, impostos, ociosidade e margem.', acceptance: 'Preço-hora justificado por todos os componentes.', evidence: 'Planilha versionada da calculadora.' }],
      interview: [{ level: 'Aplicação', question: 'Por que cobrar só pelas horas trabalhadas costuma dar prejuízo?', expected: 'Ignora tempo ocioso, impostos e custos; o preço precisa cobri-los além da margem.' }]
    },
    {
      part: 'carreira', level: 'Fundamentos',
      title: 'Interpretar contabilidade básica',
      objective: 'Interpretar demonstrações básicas (DRE, balanço, fluxo de caixa) aplicadas à vida e a pequenos negócios.',
      problem: 'Sem ler o básico de contabilidade, decisões de negócio e de investimento em empresas ficam cegas.',
      concepts: ['DRE (receita, custo, lucro)', 'Balanço patrimonial', 'Fluxo de caixa vs lucro', 'Regime de caixa vs competência'],
      internals: ['Lucro não é caixa: uma empresa lucrativa pode quebrar por falta de caixa (e vice-versa).', 'Os três demonstrativos se conectam; ler os três evita conclusões erradas de um só.'],
      books: ['investimentosInteligentes'],
      complements: [SEBRAE],
      exercises: [{ level: 'Aplicação', title: 'DRE pessoal/negócio', task: 'Montar uma DRE simples de uma atividade (freela ou negócio) separando caixa de lucro.', acceptance: 'DRE correta com distinção caixa × lucro.', evidence: 'Planilha versionada da DRE.' }],
      interview: [{ level: 'Aplicação', question: 'Como uma empresa lucrativa quebra?', expected: 'Falta de caixa: lucro em competência não paga contas que vencem em caixa.' }]
    },
    {
      part: 'carreira', level: 'Aplicação',
      title: 'Analisar economia aplicada às decisões',
      objective: 'Analisar indicadores econômicos (juros, inflação, câmbio) e seu efeito sobre decisões pessoais.',
      problem: 'Ignorar Selic, inflação e câmbio leva a decidir investimento e consumo na contramão do ciclo.',
      concepts: ['Selic e inflação', 'Câmbio e poder de compra', 'Ciclo econômico', 'Efeito nas classes de ativo'],
      internals: ['Selic alta favorece renda fixa e encarece crédito; ela reprecifica todos os ativos.', 'Malkiel: prever o mercado no curto prazo é quase impossível; entender o regime é mais útil que adivinhar.'],
      books: ['randomWalk', 'psychologyOfMoney'],
      complements: [BCB],
      exercises: [{ level: 'Aplicação', title: 'Leitura de conjuntura', task: 'Relacionar Selic, inflação e câmbio atuais a duas decisões pessoais (crédito e investimento).', acceptance: 'Decisões coerentes com o regime econômico descrito.', evidence: 'Doc versionado da análise.' }],
      interview: [{ level: 'Aplicação', question: 'Como a Selic afeta suas decisões de crédito e investimento?', expected: 'Alta encarece dívida e favorece renda fixa; reprecifica risco e retorno esperado.' }]
    },
    {
      part: 'carreira', level: 'Produção',
      title: 'Modelar um negócio pequeno',
      objective: 'Modelar um negócio pequeno com custos, ponto de equilíbrio e projeção de caixa conservadora.',
      problem: 'Negócios pequenos quebram por falta de caixa e por otimismo na projeção, não por falta de ideia.',
      concepts: ['Ponto de equilíbrio', 'Custos fixos vs variáveis', 'Projeção conservadora', 'Capital de giro'],
      internals: ['O ponto de equilíbrio diz quanto vender para não ter prejuízo; abaixo dele, cada venda perde dinheiro.', 'Capital de giro insuficiente mata negócios lucrativos no papel.'],
      books: ['investimentosInteligentes'],
      complements: [SEBRAE],
      exercises: [{ level: 'Produção', title: 'Modelo de negócio', task: 'Modelar um negócio com ponto de equilíbrio e projeção de caixa de 6 meses em cenário conservador.', acceptance: 'Ponto de equilíbrio e capital de giro calculados.', evidence: 'Planilha versionada do modelo.' }],
      interview: [{ level: 'Produção', question: 'Por que um negócio lucrativo pode quebrar por caixa?', expected: 'Descasamento entre receber e pagar; sem capital de giro, falta dinheiro para operar.' }]
    },
    {
      part: 'carreira', level: 'Produção',
      title: 'Validar um produto digital',
      objective: 'Validar um produto digital com hipótese, público e teste barato antes de investir tempo e dinheiro.',
      problem: 'Construir por meses sem validar leva a produtos que ninguém quer e a dinheiro perdido.',
      concepts: ['Hipótese de valor', 'Público-alvo', 'MVP e teste barato', 'Métrica de validação'],
      internals: ['Validar é testar a hipótese mais arriscada primeiro, com o menor custo possível.', 'Interesse declarado ≠ demanda; a validação boa mede comportamento, não opinião.'],
      books: ['psychologyOfMoney'],
      complements: [SEBRAE],
      exercises: [{ level: 'Produção', title: 'Teste de validação', task: 'Definir a hipótese mais arriscada de um produto e um teste barato com métrica de sucesso.', acceptance: 'Hipótese, teste e métrica de comportamento definidos.', evidence: 'Doc versionado da validação.' }],
      interview: [{ level: 'Produção', question: 'Qual a diferença entre interesse e demanda ao validar um produto?', expected: 'Interesse é opinião; demanda é comportamento (pagar, usar, comprometer-se).' }]
    },
    {
      part: 'carreira', level: 'Produção',
      title: 'Aplicar IA ao aumento de produtividade e renda',
      objective: 'Aplicar ferramentas de IA para aumentar produtividade e renda com critério e verificação.',
      problem: 'Usar IA sem verificar gera erros caros; ignorá-la deixa produtividade e renda na mesa.',
      concepts: ['Automação de tarefas repetitivas', 'Verificação de saídas de IA', 'Alavancagem de tempo', 'Ética e limites'],
      internals: ['IA alavanca tempo em tarefas de rascunho e pesquisa, mas a verificação humana continua obrigatória.', 'O ganho real vem de aplicar o tempo liberado a atividades de maior valor, não de acumular ferramentas.'],
      books: ['psychologyOfMoney'],
      exercises: [{ level: 'Produção', title: 'Fluxo com IA verificado', task: 'Automatizar uma tarefa recorrente com IA, medir o tempo economizado e definir o passo de verificação.', acceptance: 'Ganho de tempo medido e verificação garantida.', evidence: 'Doc versionado do fluxo e da medição.' }],
      interview: [{ level: 'Produção', question: 'Como usar IA sem introduzir erros caros?', expected: 'Manter verificação humana das saídas e aplicá-la onde o custo do erro é aceitável.' }]
    },

    // ── Parte 4 · Planejamento e proteção ──
    {
      part: 'planejamento', level: 'Aplicação',
      title: 'Definir uma alocação de ativos',
      objective: 'Definir uma alocação de ativos alinhada a objetivos, horizonte e tolerância a risco.',
      problem: 'Sem alocação definida, a carteira vira coleção de dicas, concentrada e sem coerência com os objetivos.',
      concepts: ['Alocação por classe de ativo', 'Horizonte e objetivo', 'Correlação e diversificação', 'Rebalanceamento'],
      internals: ['Bernstein: a alocação entre classes explica a maior parte do resultado e do risco — mais que a escolha do ativo.', 'Rebalancear força comprar barato e vender caro de forma disciplinada.'],
      books: ['assetAllocator', 'randomWalk'],
      exercises: [{ level: 'Produção', title: 'Alocação-alvo', task: 'Definir uma alocação-alvo por classe para um objetivo e horizonte, com regra de rebalanceamento.', acceptance: 'Alocação coerente com objetivo/horizonte e regra de rebalanceamento.', evidence: 'Doc versionado da alocação.' }],
      interview: [{ level: 'Produção', question: 'Por que a alocação importa mais que a escolha do ativo?', expected: 'A divisão entre classes explica a maior parte do risco e do retorno da carteira.' }]
    },
    {
      part: 'planejamento', level: 'Aplicação',
      title: 'Gerenciar risco e liquidez',
      objective: 'Gerenciar risco e liquidez casando o horizonte de cada objetivo com o ativo adequado.',
      problem: 'Colocar dinheiro de curto prazo em ativo volátil (ou o de longo em ativo sem retorno) sabota os objetivos.',
      concepts: ['Horizonte × volatilidade', 'Liquidez por objetivo', 'Margem de segurança', 'Risco de sequência'],
      internals: ['Graham: a margem de segurança é o núcleo do investimento defensivo — proteger-se do erro e do azar.', 'Dinheiro necessário em breve não pode estar sujeito a drawdown; casar prazo e ativo é gestão de risco.'],
      books: ['assetAllocator', 'intelligentInvestor'],
      exercises: [{ level: 'Produção', title: 'Objetivos por horizonte', task: 'Classificar seus objetivos por horizonte e associar cada um ao tipo de ativo com liquidez e risco adequados.', acceptance: 'Cada objetivo casado a um ativo por horizonte e liquidez.', evidence: 'Doc versionado do mapeamento.' }],
      interview: [{ level: 'Produção', question: 'Por que dinheiro de curto prazo não pode ficar em ativo volátil?', expected: 'Pode ser necessário durante um drawdown, forçando venda com perda.' }]
    },
    {
      part: 'planejamento', level: 'Produção',
      title: 'Planejar impostos e declaração',
      objective: 'Planejar a tributação dos investimentos e organizar a declaração de imposto de renda corretamente.',
      problem: 'Ignorar IR e prazos gera multa, malha fina e retorno líquido menor que o esperado.',
      concepts: ['IR regressivo e come-cotas', 'Isenções (LCI/LCA, ações até limite)', 'DARF e prazos', 'Organização de documentos'],
      internals: ['A tributação muda o retorno líquido e varia por produto; planejar reduz imposto legalmente.', 'Ganhos em ações acima do limite mensal exigem DARF no mês seguinte — controle contínuo evita multa.'],
      books: ['investimentosInteligentes'],
      complements: [RECEITA],
      exercises: [{ level: 'Produção', title: 'Mapa tributário', task: 'Montar um mapa da tributação da própria carteira e um checklist de organização para a declaração.', acceptance: 'Tributação correta por produto e checklist de documentos.', evidence: 'Doc versionado do mapa tributário.' }],
      interview: [{ level: 'Produção', question: 'Por que vender ações acima do limite mensal exige atenção?', expected: 'Gera IR com DARF no mês seguinte; sem pagar, há multa e malha fina.' }]
    },
    {
      part: 'planejamento', level: 'Aplicação',
      title: 'Construir objetivos financeiros de vida',
      objective: 'Construir objetivos financeiros de vida específicos, com prazo, valor e prioridade.',
      problem: 'Investir sem objetivo definido leva a decisões incoerentes e à sensação de nunca chegar a lugar nenhum.',
      concepts: ['Objetivos SMART financeiros', 'Prazo e valor por objetivo', 'Prioridade e trade-off', 'Objetivo ligado a valores'],
      internals: ['Housel: dinheiro compra, sobretudo, controle sobre o próprio tempo; objetivos claros dão direção às escolhas.', 'Objetivo com prazo e valor vira meta de aporte; sem isso, "investir mais" é vago.'],
      books: ['psychologyOfMoney', 'investimentosInteligentes'],
      exercises: [{ level: 'Aplicação', title: 'Objetivos com prazo e valor', task: 'Definir 3 objetivos financeiros com prazo, valor e aporte mensal necessário.', acceptance: 'Objetivos específicos com aporte calculado.', evidence: 'Doc versionado dos objetivos.' }],
      interview: [{ level: 'Aplicação', question: 'Por que investir sem objetivo definido costuma frustrar?', expected: 'Sem prazo/valor não há meta de aporte nem critério de escolha; a decisão fica incoerente.' }]
    },
    {
      part: 'planejamento', level: 'Aplicação',
      title: 'Avaliar proteção patrimonial e seguros',
      objective: 'Avaliar necessidades de proteção (seguros, previdência) conforme dependentes e riscos reais.',
      problem: 'Ficar sem proteção expõe a família a ruína por um único evento; contratar demais desperdiça renda.',
      concepts: ['Seguro de vida e por dependentes', 'Seguro de renda/invalidez', 'Previdência (PGBL/VGBL)', 'Risco a proteger vs a assumir'],
      internals: ['Seguro faz sentido para perdas catastróficas e improváveis, não para o que você pode absorver.', 'A necessidade de vida cresce com dependentes e dívidas; sem eles, o foco muda.'],
      books: ['investimentosInteligentes'],
      exercises: [{ level: 'Aplicação', title: 'Mapa de proteção', task: 'Mapear riscos pessoais e decidir quais transferir (seguro) e quais reter, com justificativa.', acceptance: 'Decisões de proteção coerentes com dependentes e riscos.', evidence: 'Doc versionado do mapa.' }],
      interview: [{ level: 'Aplicação', question: 'Que tipo de risco justifica um seguro?', expected: 'Perdas catastróficas e improváveis que você não conseguiria absorver sozinho.' }]
    },
    {
      part: 'planejamento', level: 'Produção',
      title: 'Revisar o plano financeiro mensalmente',
      objective: 'Revisar o plano financeiro mensalmente, comparando previsto × realizado e ajustando com disciplina.',
      problem: 'Planos sem revisão viram ficção; sem o ritual mensal, o desvio se acumula despercebido.',
      concepts: ['Rotina de revisão mensal', 'Previsto × realizado', 'Ajuste sem abandono do plano', 'Indicadores-chave'],
      internals: ['Housel: consistência ao longo do tempo importa mais que decisões brilhantes pontuais.', 'A revisão separa desvio pontual de mudança de tendência, evitando reação exagerada.'],
      books: ['psychologyOfMoney'],
      exercises: [{ level: 'Produção', title: 'Ritual de revisão', task: 'Definir e executar uma revisão mensal com indicadores (poupança, patrimônio, aderência) por dois meses.', acceptance: 'Duas revisões registradas com ajustes justificados.', evidence: 'Docs versionados das revisões.' }],
      interview: [{ level: 'Produção', question: 'O que uma revisão mensal deve comparar?', expected: 'Previsto × realizado dos indicadores-chave, para ajustar sem abandonar o plano.' }]
    },
    {
      part: 'planejamento', level: 'Produção',
      title: 'Simular cenários financeiros adversos',
      objective: 'Simular cenários adversos (perda de renda, emergência, crise de mercado) e testar a resiliência do plano.',
      problem: 'Planos calibrados só para o cenário bom desmoronam no primeiro choque; sem teste, a fragilidade fica oculta.',
      concepts: ['Perda de renda e desemprego', 'Drawdown de mercado', 'Estresse da reserva', 'Plano de contingência'],
      internals: ['Bernstein: quem não passou por um grande drawdown ainda não conhece a própria tolerância a risco.', 'Simular o pior caso revela se a reserva e a alocação aguentam sem venda forçada.'],
      books: ['assetAllocator', 'psychologyOfMoney'],
      exercises: [{ level: 'Produção', title: 'Teste de estresse pessoal', task: 'Simular 6 meses sem renda principal e uma queda de 30% na carteira, e verificar se o plano sobrevive.', acceptance: 'Plano resiste ou recebe ajustes de contingência definidos.', evidence: 'Doc versionado da simulação.' }],
      interview: [{ level: 'Produção', question: 'Por que testar o pior caso antes que ele aconteça?', expected: 'Revela a real tolerância a risco e evita venda forçada e decisões emocionais no choque.' }]
    },
    {
      part: 'planejamento', level: 'Produção',
      title: 'Documentar a política financeira pessoal',
      objective: 'Documentar a política financeira pessoal (IPS) com regras de aporte, alocação, risco e revisão.',
      problem: 'Sem regras escritas, cada decisão é tomada na emoção do momento e a estratégia se perde.',
      concepts: ['Investment Policy Statement (IPS)', 'Regras de aporte e alocação', 'Critérios de risco e rebalanceamento', 'Gatilhos de revisão'],
      internals: ['Um IPS escrito é o antídoto contra a emoção: define de antemão o que fazer em cada situação.', 'Graham: disciplina escrita protege o investidor de si mesmo nos extremos do mercado.'],
      books: ['assetAllocator', 'intelligentInvestor'],
      exercises: [{ level: 'Produção', title: 'IPS pessoal', task: 'Escrever a própria política financeira: aporte, alocação-alvo, regras de risco, rebalanceamento e revisão.', acceptance: 'IPS completa que orienta decisões sem depender da emoção.', evidence: 'Doc versionado da política financeira pessoal.' }],
      interview: [{ level: 'Produção', question: 'Para que serve uma política financeira escrita?', expected: 'Definir regras antes da emoção, mantendo disciplina nos extremos do mercado.' }]
    }
  ],
  books: {
    psychologyOfMoney: {
      title: 'The Psychology of Money',
      authors: 'Morgan Housel',
      edition: 'Edição local',
      language: 'Inglês',
      depth: 'Comportamento e decisões financeiras',
      path: 'pdfs/livros-financeiro/The Psychology of Money -- Morgan Housel -- ( WeLib.org ).epub.pdf'
    },
    doMilAoMilhao: {
      title: 'Do Mil ao Milhão',
      authors: 'Thiago Nigro',
      edition: 'Edição local',
      language: 'Português',
      depth: 'Finanças pessoais no contexto BR',
      path: 'pdfs/livros-financeiro/Do_mil_ao_milhao_thiago_nigro.pdf'
    },
    investimentosInteligentes: {
      title: 'Investimentos Inteligentes',
      authors: 'Gustavo Cerbasi',
      edition: 'Edição local',
      language: 'Português',
      depth: 'Planejamento e investimento no BR',
      path: 'pdfs/livros-financeiro/Investimentos inteligentes -- Gustavo Cerbasi -- ( WeLib.org ).epub.pdf'
    },
    intelligentInvestor: {
      title: 'The Intelligent Investor',
      authors: 'Benjamin Graham (com Jason Zweig)',
      edition: 'Revised Edition',
      language: 'Inglês',
      depth: 'Value investing e margem de segurança',
      path: 'pdfs/livros-financeiro/The Intelligent Investor, Rev. Ed - The Definitive Book on -- Graham, Benjamin, Jason Zweig -- ( WeLib.org ).epub.pdf'
    },
    commonSenseInvesting: {
      title: 'The Little Book of Common Sense Investing',
      authors: 'John C. Bogle',
      edition: 'Edição local',
      language: 'Inglês',
      depth: 'Indexação e custo baixo',
      path: 'pdfs/livros-financeiro/The Little Book of Common Sense Investing -- John C. Bogle -- ( WeLib.org ).pdf'
    },
    randomWalk: {
      title: 'A Random Walk Down Wall Street',
      authors: 'Burton G. Malkiel',
      edition: 'Edição local',
      language: 'Inglês',
      depth: 'Mercados eficientes e diversificação',
      path: 'pdfs/livros-financeiro/A Random Walk Down Wall Street- The Time-Tested Strategy for -- Burton G.] Burton G. Malkiel -- ( WeLib.org ).mobi.pdf'
    },
    assetAllocator: {
      title: 'The Intelligent Asset Allocator',
      authors: 'William J. Bernstein',
      edition: 'Edição local',
      language: 'Inglês',
      depth: 'Alocação de ativos e risco',
      path: 'pdfs/livros-financeiro/The intelligent asset allocator - how to build your -- William Bernstein; William J Bernstein -- ( WeLib.org ).pdf'
    }
  }
});

export const financeiroAcademy = data.academy;
export const financeiroModules = data.modules;
export const financeiroBooks = data.books;
export const financeiroAssessment = data.assessment;
