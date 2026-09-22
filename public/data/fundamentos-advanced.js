/*
 * Fonte única da Academia de FUNDAMENTOS DE COMPUTAÇÃO (Faixa 0).
 *
 * Preenche a maior lacuna do projeto: a "faixa 0" (o básico), até aqui tratada
 * como pré-requisito e não como conteúdo. Começa do zero absoluto — como a
 * máquina conta, o que é memória/processo/rede, lógica de resolução de problemas
 * e o ferramental do dev (terminal, IDE, DEBUGGER, versionamento).
 *
 * Padrão de 23 campos, 100% autoral, MAIS um campo `quiz` de RESPOSTA OBJETIVA
 * (certo/errado) — a faixa 0 precisa de exercícios com gabarito fechado, não só
 * de julgamento aberto. Referências são fontes abertas e canônicas.
 */

const refs = Object.freeze({
  missingSemester: { title: 'MIT — The Missing Semester of Your CS Education', url: 'https://missing.csail.mit.edu/' },
  ostep: { title: 'Operating Systems: Three Easy Pieces (livre)', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/' },
  nand2tetris: { title: 'Nand2Tetris — The Elements of Computing Systems', url: 'https://www.nand2tetris.org/' },
  goldberg: { title: 'Goldberg — What Every Computer Scientist Should Know About Floating-Point', url: 'https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html' },
  spolsky: { title: 'Joel Spolsky — The Absolute Minimum About Unicode', url: 'https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/' },
  mdnWeb: { title: 'MDN — How the web works', url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works' },
  mdnHttp: { title: 'MDN — An overview of HTTP', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview' },
  proGit: { title: 'Pro Git (livre, oficial)', url: 'https://git-scm.com/book' }
});

export const fundamentosBooks = Object.freeze({});

export const fundamentosAcademy = Object.freeze({
  title: 'Academia de Fundamentos de Computação',
  brand: 'Fundamentos (Faixa 0)',
  baseline: 'Nenhum pré-requisito além de saber ligar um computador e digitar. Aqui o básico é conteúdo, não suposição.',
  book: null,
  assessmentPart: 'avaliacao',
  parts: {
    maquina: {
      index: '1/5', range: 'Módulos 1–5', page: 'maquina.html', navLabel: 'A máquina',
      title: 'Como a máquina funciona',
      subtitle: 'Binário e hex, texto como bytes, ponto flutuante, memória (pilha/heap) e processo/SO/arquivos.',
      prerequisites: ['Saber usar um computador (abrir programas, arquivos)', 'Aritmética escolar', 'Nenhuma programação prévia'],
      objectives: [
        'Ler e converter números em binário e hexadecimal e explicar por que o computador os usa.',
        'Entender que texto é byte + codificação, e que float é aproximado.',
        'Descrever onde os dados vivem (pilha, heap) e o que é um processo e um arquivo.'
      ]
    },
    rede: {
      index: '2/5', range: 'Módulos 6–7', page: 'rede.html', navLabel: 'Da URL à página',
      title: 'Da URL à página',
      subtitle: 'O caminho de um clique — DNS, TCP, HTTP, renderização — e o modelo cliente/servidor e API.',
      prerequisites: ['Módulos 1–5', 'Noção de que existem "servidores"', 'Ter usado um navegador'],
      objectives: [
        'Narrar o que acontece entre digitar uma URL e a página aparecer.',
        'Explicar request/response, códigos de status e o que é uma API.',
        'Distinguir o que roda no cliente do que roda no servidor.'
      ]
    },
    logica: {
      index: '3/5', range: 'Módulos 8–10', page: 'logica.html', navLabel: 'Lógica',
      title: 'Lógica e resolução de problemas',
      subtitle: 'Decompor um problema, rastrear a execução na mão e ler erros pensando em casos.',
      prerequisites: ['Módulos 1–7', 'Paciência para seguir passos', 'Nenhuma linguagem específica'],
      objectives: [
        'Quebrar um problema em passos executáveis e sem ambiguidade.',
        'Rastrear a execução de um trecho na mão (mesa de execução).',
        'Ler uma mensagem de erro e cobrir caso normal, de borda e inválido.'
      ]
    },
    ferramental: {
      index: '4/5', range: 'Módulos 11–14', page: 'ferramental.html', navLabel: 'Ferramental',
      title: 'Ferramental do desenvolvedor',
      subtitle: 'Terminal e Linux, editor/IDE e como rodar código, o debugger e o mínimo de controle de versão.',
      prerequisites: ['Módulos 1–10', 'Um computador onde instalar ferramentas', 'Disposição para errar e corrigir'],
      objectives: [
        'Navegar e operar pelo terminal com os comandos essenciais.',
        'Compilar/interpretar e rodar o próprio código, entendendo o build.',
        'Usar o DEBUGGER (breakpoint, step, inspeção) e versionar com Git básico.'
      ]
    },
    avaliacao: {
      index: '5/5', range: 'Evidência e biblioteca', page: 'avaliacao.html', navLabel: 'Avaliação',
      title: 'Evidência, quiz e conclusão',
      subtitle: 'Fechar a faixa 0 com quiz objetivo, artefatos mínimos e a revisão antes de avançar.',
      prerequisites: ['Concluir os 14 módulos com um artefato mínimo cada', 'Acertar o quiz objetivo de cada módulo'],
      objectives: [
        'Comprovar domínio dos fundamentos por quiz objetivo e por um artefato pequeno.',
        'Explicar cada conceito sem jargão, com um exemplo próprio.',
        'Registrar a revisão antes de subir para a faixa 1 (aplicação).'
      ]
    }
  }
});

function moduleOf(config) {
  return Object.freeze({
    level: 'Fundamento',
    ...config,
    interview: (config.interview || []).map(([level, question, expected]) => ({ level, question, expected })),
    exercises: (config.exercises || []).map(([level, task, evidence]) => ({ level, task, evidence }))
  });
}

export const fundamentosModules = Object.freeze([
  // ── Parte 1 · Como a máquina funciona ──
  moduleOf({
    number: 1, part: 'maquina', id: 'binario', title: 'Binário, hexadecimal e bits',
    objective: 'Ler, converter e raciocinar sobre números em binário e hexadecimal, e entender que tudo no computador é bit.',
    prerequisites: ['Aritmética escolar', 'Saber o que é uma potência (2³ = 8)'],
    problem: 'Sem entender que tudo é bit, coisas como tamanho de arquivo (KB/MB), cores (#FF0000), permissões e overflow viram magia.',
    concepts: ['Bit e byte', 'Base 2 (binário) e base 16 (hex)', 'Potências de 2', 'Operações bit a bit', 'Overflow'],
    internals: ['Todo número é soma de potências de 2: 13 = 8+4+1 = 1101.', 'Cada dígito hex representa exatamente 4 bits — por isso hex é o atalho para ler binário.', 'Com N bits só cabem 2^N valores; passar disso é overflow (o número "dá a volta").'],
    useWhen: ['Ao ler tamanhos, cores hex, máscaras de permissão e flags.', 'Ao entender por que um contador "estoura" ou um valor fica negativo do nada.'],
    avoidWhen: ['Não decore tabelas — entenda a soma de potências de 2.', 'Não confunda o número com sua representação (13, 0xD e 0b1101 são o mesmo número).'],
    contrast: { bad: 'Tratar 0xFF como "um código estranho".', good: 'Ler 0xFF como 1111 1111 = 255 = um byte cheio.' },
    tradeoffs: ['Hex é compacto para humanos; binário mostra os bits; decimal é o do dia a dia.', 'Mais bits = mais alcance, mais memória.'],
    production: 'Um contador de 32 bits que passou de ~4 bilhões deu a volta para zero e quebrou a numeração de pedidos — overflow silencioso.',
    risks: ['Confundir bit com byte (8x de diferença).', 'Ignorar overflow em contadores e somas.', 'Achar que hex é outro número, e não outra escrita.'],
    checklist: ['Sei converter decimal ↔ binário ↔ hex de um número pequeno?', 'Sei quantos valores cabem em N bits?', 'Sei o que é overflow e quando ocorre?', 'Sei ler uma cor hex como três bytes?'],
    interview: [
      ['Fundamento', 'Por que o computador usa binário e não decimal?', 'O hardware tem dois estados estáveis (ligado/desligado = 1/0); binário mapeia direto nisso.'],
      ['Fundamento', 'Quantos valores cabem em 1 byte?', '256 (2^8), de 0 a 255.']
    ],
    exercises: [
      ['Básico', 'Converter 5 números de decimal para binário e hex à mão e conferir.', 'Tabela com os três formatos por número, conferida com uma calculadora.'],
      ['Aplicado', 'Rodar o exemplo e explicar por que 1 << 4 == 16 e 13 >> 1 == 6.', 'Nota curta explicando deslocamento como multiplicação/divisão por 2.']
    ],
    quiz: [
      { question: 'Quanto vale 0b1010 em decimal?', options: ['8', '10', '12', '20'], answer: 1, why: '8 + 0 + 2 + 0 = 10.' },
      { question: 'Quantos bits há em 2 bytes?', options: ['2', '8', '16', '32'], answer: 2, why: '1 byte = 8 bits, então 2 bytes = 16 bits.' },
      { question: '0xFF é igual a:', options: ['15', '128', '255', '256'], answer: 2, why: 'F=15; 15×16 + 15 = 255 (um byte cheio).' }
    ],
    challenge: 'Explicar para alguém leigo por que um arquivo de "1 KB" não tem exatamente 1000 bytes.',
    book: 'Nand2Tetris, projetos 1–2 (recomendado).',
    complements: [refs.nand2tetris, refs.missingSemester],
    exampleFile: '../../examples/fundamentos-base/binario.py'
  }),
  moduleOf({
    number: 2, part: 'maquina', id: 'encoding', title: 'Texto é bytes: encoding e Unicode',
    objective: 'Entender que texto é byte + codificação, e por que o encoding errado produz "mojibake".',
    prerequisites: ['Módulo 1 (bytes)', 'Já ter visto acentos aparecerem quebrados'],
    problem: 'O acento vira "Ã©", o CSV abre torto, o emoji some — quase sempre é encoding errado, e sem o conceito o bug é irreproduzível.',
    concepts: ['Byte vs caractere', 'Codificação (encoding)', 'ASCII e UTF-8', 'Unicode e code points', 'Mojibake'],
    internals: ['Um arquivo guarda bytes; o encoding é a regra que diz qual byte vira qual caractere.', 'ASCII cobre o inglês em 1 byte; UTF-8 cobre tudo em 1 a 4 bytes (acento = 2, emoji = 4).', 'Ler bytes de UTF-8 com outra regra (ex.: Latin-1) produz mojibake.'],
    useWhen: ['Ao ler/gravar arquivos, receber dados de API, importar CSV.', 'Ao investigar acentos quebrados ou contagem de caracteres errada.'],
    avoidWhen: ['Não assuma que "texto é só texto" — sempre há um encoding.', 'Não conte bytes achando que conta caracteres (nem vice-versa).'],
    contrast: { bad: 'Salvar um arquivo "em qualquer encoding" e abrir em outro.', good: 'Padronizar UTF-8 em tudo e decodificar com a mesma regra da codificação.' },
    tradeoffs: ['UTF-8 é universal, mas caractere ≠ byte (tamanho variável).', 'ASCII é simples, mas só serve para inglês.'],
    production: 'Um importador que leu um CSV UTF-8 como Latin-1 gravou nomes com "Ã§" no banco; a correção exigiu reprocessar o lote.',
    risks: ['Misturar encodings ao concatenar dados de fontes diferentes.', 'Truncar string por bytes e cortar um caractere no meio.', 'Confiar no encoding "padrão" do sistema (varia).'],
    checklist: ['Sei a diferença entre byte e caractere?', 'Sei quantos bytes um acento e um emoji ocupam em UTF-8?', 'Sei o que causa mojibake?', 'Uso UTF-8 explicitamente ao ler/gravar?'],
    interview: [
      ['Fundamento', 'Qual a diferença entre ASCII e UTF-8?', 'ASCII é 1 byte (só inglês); UTF-8 é 1–4 bytes e cobre todo o Unicode, sendo compatível com ASCII no início.'],
      ['Fundamento', 'Por que às vezes um "é" aparece como "Ã©"?', 'Bytes gravados em UTF-8 foram lidos com outro encoding (ex.: Latin-1) — mojibake.']
    ],
    exercises: [
      ['Básico', 'Rodar o exemplo e anotar quantos bytes ocupam "a", "á" e um emoji em UTF-8.', 'Tabela caractere → nº de bytes.'],
      ['Aplicado', 'Reproduzir um mojibake de propósito e depois corrigir escolhendo o encoding certo.', 'Antes/depois com o texto quebrado e o texto correto.']
    ],
    quiz: [
      { question: 'Quantos bytes ocupa "á" em UTF-8?', options: ['1', '2', '3', '4'], answer: 1, why: 'Caracteres acentuados latinos ocupam 2 bytes em UTF-8.' },
      { question: 'A string "olá" tem quantos caracteres e quantos bytes (UTF-8)?', options: ['3 e 3', '3 e 4', '4 e 4', '3 e 6'], answer: 1, why: '3 caracteres, mas o "á" usa 2 bytes → 4 bytes.' },
      { question: 'Mojibake ("Ã©" no lugar de "é") acontece porque:', options: ['o arquivo está corrompido', 'os bytes foram lidos com o encoding errado', 'faltou memória', 'o teclado está errado'], answer: 1, why: 'É decodificar bytes de UTF-8 com outra regra.' }
    ],
    challenge: 'Explicar por que "contar caracteres" de um texto com emojis pode dar um número diferente de "contar bytes".',
    book: 'Spolsky — The Absolute Minimum About Unicode (recomendado).',
    complements: [refs.spolsky],
    exampleFile: '../../examples/fundamentos-base/encoding.py'
  }),
  moduleOf({
    number: 3, part: 'maquina', id: 'ponto-flutuante', title: 'Ponto flutuante: por que 0.1 + 0.2 ≠ 0.3',
    objective: 'Entender que números "quebrados" são aproximados no computador e nunca comparar floats com igualdade exata.',
    prerequisites: ['Módulo 1 (binário)', 'Noção de fração'],
    problem: 'Somar dinheiro como float acumula erro; comparar float com == falha "sem motivo" e o bug é intermitente.',
    concepts: ['Ponto flutuante (IEEE 754)', 'Representação aproximada', 'Erro de arredondamento', 'Comparação com tolerância', 'Dinheiro com inteiros/Decimal'],
    internals: ['Assim como 1/3 não termina em decimal, 0.1 não termina em binário — é arredondado.', '0.1 + 0.2 dá 0.30000000000000004: os arredondamentos somam um erro minúsculo.', 'Por isso se compara com tolerância (isclose), e dinheiro se guarda em centavos (inteiro) ou Decimal.'],
    useWhen: ['Sempre que comparar ou somar valores não inteiros.', 'Ao lidar com dinheiro, medidas e acumuladores.'],
    avoidWhen: ['Nunca compare floats com == direto.', 'Não use float para dinheiro.'],
    contrast: { bad: 'if saldo == 0.3: ...', good: 'if math.isclose(saldo, 0.3): ... — ou trabalhar em centavos inteiros.' },
    tradeoffs: ['Float é rápido e universal, mas aproximado.', 'Decimal é exato, mas mais lento e verboso.'],
    production: 'Um sistema de cobrança somou centavos como float; ao fim do dia a fatura fechou com 1 centavo de diferença e a reconciliação recusou o lote.',
    risks: ['Comparar float com == e ter falha intermitente.', 'Acumular erro em somas longas.', 'Usar float para dinheiro.'],
    checklist: ['Sei por que 0.1 não é exato em binário?', 'Comparo floats com tolerância?', 'Uso inteiro/Decimal para dinheiro?', 'Sei estimar a ordem do erro (~1e-16)?'],
    interview: [
      ['Fundamento', 'Por que 0.1 + 0.2 não é exatamente 0.3?', 'Porque 0.1 e 0.2 não têm representação binária exata; a soma dos arredondamentos gera um erro minúsculo.'],
      ['Fundamento', 'Como comparar dois floats corretamente?', 'Com tolerância (ex.: math.isclose), nunca com ==.']
    ],
    exercises: [
      ['Básico', 'Rodar o exemplo e registrar o valor exato de 0.1 + 0.2.', 'Saída mostrando 0.30000000000000004 e a diferença para 0.3.'],
      ['Aplicado', 'Reescrever uma soma de dinheiro usando centavos inteiros.', 'Antes (float) e depois (inteiro) com o total conferido.']
    ],
    quiz: [
      { question: 'Qual comparação é segura entre floats?', options: ['a == b', 'a is b', 'abs(a-b) <= tol', 'a != b'], answer: 2, why: 'Compara-se com tolerância, não com igualdade exata.' },
      { question: 'Para representar dinheiro, o melhor é:', options: ['float', 'inteiro de centavos ou Decimal', 'string', 'tanto faz'], answer: 1, why: 'Evita o erro de arredondamento do float.' },
      { question: '0.1 + 0.2 em float resulta em:', options: ['exatamente 0.3', '0.30000000000000004', '0.29', 'erro'], answer: 1, why: 'A soma dos arredondamentos dá um valor levemente acima de 0.3.' }
    ],
    challenge: 'Mostrar um caso onde somar 0.1 dez vezes não dá exatamente 1.0 e explicar o acúmulo do erro.',
    book: 'Goldberg — Floating-Point (referência; leitura parcial).',
    complements: [refs.goldberg],
    exampleFile: '../../examples/fundamentos-base/ponto_flutuante.py'
  }),
  moduleOf({
    number: 4, part: 'maquina', id: 'memoria', title: 'Memória: pilha, heap e referências',
    objective: 'Entender onde os dados vivem na memória e a diferença entre valor e referência.',
    prerequisites: ['Módulo 1', 'Ter visto variáveis em algum exemplo'],
    problem: 'Sem o modelo de memória, "por que mudar uma lista mudou a outra?" e "o que é null/None?" ficam sem resposta.',
    concepts: ['Memória como endereços', 'Pilha (stack) e heap', 'Valor vs referência', 'Alias e cópia', 'Null/None e ponteiro solto'],
    internals: ['A pilha guarda variáveis locais e chamadas de função (rápida, some ao retornar); o heap guarda objetos maiores e duráveis.', 'Uma variável de referência aponta para um objeto no heap; duas variáveis podem apontar para o MESMO objeto (alias).', 'Alterar via um alias altera para todos; copiar é diferente de referenciar.'],
    useWhen: ['Ao entender bugs de "mudou aqui, mudou lá".', 'Ao raciocinar sobre desempenho e vazamento de memória.'],
    avoidWhen: ['Não assuma que atribuir copia — muitas vezes só aponta.', 'Não confunda o objeto com a variável que o referencia.'],
    contrast: { bad: 'b = a; b.append(1) e se surpreender que "a" também mudou.', good: 'Saber que a e b são aliases; copiar explicitamente quando quiser independência.' },
    tradeoffs: ['Pilha é rápida mas limitada; heap é flexível mas exige gerenciamento (ou GC).', 'Compartilhar referência economiza memória, mas cria acoplamento.'],
    production: 'Uma configuração "copiada" por referência foi mutada por um módulo e vazou a mudança para todos os outros — bug difícil de rastrear.',
    risks: ['Mutar um objeto compartilhado sem querer (alias).', 'Confundir cópia rasa com cópia profunda.', 'Estourar a pilha com recursão infinita (stack overflow).'],
    checklist: ['Sei a diferença entre pilha e heap?', 'Sei o que é uma referência e um alias?', 'Sei quando atribuir copia e quando só aponta?', 'Sei o que é stack overflow?'],
    interview: [
      ['Fundamento', 'Qual a diferença entre pilha e heap?', 'A pilha guarda locais/chamadas e é liberada ao retornar; o heap guarda objetos duráveis e maiores.'],
      ['Fundamento', 'O que é uma referência?', 'Um "endereço" que aponta para um objeto; duas variáveis podem apontar para o mesmo (alias).']
    ],
    exercises: [
      ['Básico', 'Desenhar pilha e heap de um trecho com uma função e uma lista.', 'Diagrama mostrando variáveis na pilha apontando para objetos no heap.'],
      ['Aplicado', 'Reproduzir um bug de alias (b = a; mutar b) e corrigir com cópia.', 'Antes/depois mostrando a diferença entre aliar e copiar.']
    ],
    quiz: [
      { question: 'Variáveis locais e chamadas de função vivem principalmente na:', options: ['pilha (stack)', 'heap', 'CPU', 'rede'], answer: 0, why: 'A pilha guarda o quadro de cada chamada; some ao retornar.' },
      { question: 'Se b = a e a é uma lista, então b.append(1):', options: ['não afeta a', 'também altera a (mesmo objeto)', 'dá erro', 'copia a lista'], answer: 1, why: 'a e b são aliases do mesmo objeto no heap.' },
      { question: 'Recursão infinita normalmente causa:', options: ['vazamento de disco', 'stack overflow', 'mojibake', 'overflow de inteiro'], answer: 1, why: 'Cada chamada empilha um quadro até esgotar a pilha.' }
    ],
    challenge: 'Explicar, com um desenho, por que passar uma lista para uma função e alterá-la lá dentro pode mudar a lista de fora.',
    book: 'OSTEP — capítulos de memória (recomendado).',
    complements: [refs.ostep],
    exampleFile: null
  }),
  moduleOf({
    number: 5, part: 'maquina', id: 'processo-so', title: 'Processo, sistema operacional e arquivos',
    objective: 'Entender o que é um processo, o papel do sistema operacional e como funciona o sistema de arquivos.',
    prerequisites: ['Módulo 4 (memória)', 'Ter aberto o gerenciador de tarefas alguma vez'],
    problem: 'Sem esse modelo, "o programa travou", "porta em uso", "permissão negada" e "caminho não encontrado" são erros opacos.',
    concepts: ['Programa vs processo', 'O papel do SO (agendar, isolar, mediar)', 'Sistema de arquivos: caminho absoluto/relativo', 'Permissões', 'Variáveis de ambiente'],
    internals: ['Um programa é o arquivo; um processo é a execução dele, com sua própria memória.', 'O SO agenda processos na CPU, isola a memória de cada um e media o acesso a disco/rede.', 'O sistema de arquivos organiza dados em caminhos; permissões dizem quem pode ler/escrever/executar.'],
    useWhen: ['Ao diagnosticar "porta em uso", "permissão negada", "arquivo não encontrado".', 'Ao entender caminhos relativos vs absolutos e o diretório de trabalho.'],
    avoidWhen: ['Não confunda programa (arquivo) com processo (execução).', 'Não use caminho absoluto onde um relativo é o correto (e vice-versa).'],
    contrast: { bad: 'Abrir "arquivo.txt" e não achar, sem saber qual é o diretório atual.', good: 'Saber o diretório de trabalho e usar caminho relativo a ele — ou absoluto quando preciso.' },
    tradeoffs: ['Caminho absoluto é explícito mas frágil entre máquinas; relativo é portável mas depende do diretório atual.', 'Isolamento de processos custa recurso, mas protege o sistema.'],
    production: 'Um serviço não subia com "porta 8080 em uso" porque outro processo antigo não havia sido encerrado — diagnóstico é listar processos e a porta.',
    risks: ['Ignorar o diretório de trabalho atual.', 'Rodar tudo como administrador e mascarar erros de permissão.', 'Confundir variável de ambiente com variável do programa.'],
    checklist: ['Sei a diferença entre programa e processo?', 'Sei o que o SO faz por mim?', 'Sei o que é caminho absoluto vs relativo e diretório de trabalho?', 'Sei ler uma permissão de arquivo?'],
    interview: [
      ['Fundamento', 'Qual a diferença entre um programa e um processo?', 'Programa é o arquivo em disco; processo é a execução dele, com memória e estado próprios.'],
      ['Fundamento', 'O que é um caminho relativo?', 'Um caminho a partir do diretório de trabalho atual, não da raiz do disco.']
    ],
    exercises: [
      ['Básico', 'Listar os processos em execução e identificar 3 deles.', 'Captura/nota com os processos e o que cada um faz.'],
      ['Aplicado', 'Criar um arquivo, mudar suas permissões e observar o efeito ao tentar lê-lo/executá-lo.', 'Registro dos comandos e do resultado antes/depois.']
    ],
    quiz: [
      { question: 'Um processo é:', options: ['um arquivo em disco', 'a execução de um programa', 'uma pasta', 'um comando do terminal'], answer: 1, why: 'O programa é o arquivo; o processo é ele rodando, com memória própria.' },
      { question: 'Um caminho que começa no diretório atual é:', options: ['absoluto', 'relativo', 'oculto', 'temporário'], answer: 1, why: 'Relativo parte do diretório de trabalho; absoluto parte da raiz.' },
      { question: 'Quem decide qual processo usa a CPU a cada instante?', options: ['o navegador', 'o sistema operacional', 'a linguagem', 'o usuário'], answer: 1, why: 'O agendador (scheduler) do SO.' }
    ],
    challenge: 'Descrever o que acontece do momento em que você dá dois cliques num programa até ele aparecer na tela.',
    book: 'OSTEP — processos (recomendado).',
    complements: [refs.ostep, refs.missingSemester],
    exampleFile: null
  }),

  // ── Parte 2 · Da URL à página ──
  moduleOf({
    number: 6, part: 'rede', id: 'url-ate-pagina', title: 'O que acontece quando você digita uma URL',
    objective: 'Narrar o caminho completo de um clique — DNS, TCP, TLS, HTTP e renderização — em alto nível.',
    prerequisites: ['Módulo 5', 'Ter usado um navegador'],
    problem: 'É a pergunta de entrevista mais clássica justamente porque cruza tudo: sem o mapa, "site fora do ar" não tem por onde diagnosticar.',
    concepts: ['URL e seus componentes', 'DNS (nome → IP)', 'TCP e TLS (conexão e cifra)', 'HTTP request/response', 'Renderização no navegador'],
    internals: ['O navegador separa a URL, resolve o nome via DNS para um IP, abre uma conexão TCP e a cifra com TLS (https).', 'Envia um request HTTP; o servidor responde com status + HTML; o navegador baixa CSS/JS/imagens e monta a página.', 'Cada etapa pode falhar de um jeito diagnosticável (DNS, conexão, status 4xx/5xx, erro de render).'],
    useWhen: ['Ao diagnosticar "não abre", lentidão, erro de certificado, 404/500.', 'Ao entender caching, CDN e latência.'],
    avoidWhen: ['Não pule etapas ao diagnosticar — isole onde falha (nome? conexão? servidor? render?).', 'Não confunda erro de DNS com erro do servidor.'],
    contrast: { bad: '"O site não abre" e desistir.', good: 'Isolar: resolve o nome? conecta? qual status HTTP? o HTML chega e renderiza?' },
    tradeoffs: ['Mais camadas (DNS, TLS, CDN) = mais robustez e segurança, mais pontos de falha.', 'Cache acelera, mas pode servir conteúdo velho.'],
    production: 'Uma "queda de site" era só o DNS apontando para um IP antigo após migração; o servidor estava no ar o tempo todo.',
    risks: ['Confundir a camada que falhou.', 'Ignorar HTTPS/certificado.', 'Achar que "carregou" significa "renderizou certo".'],
    checklist: ['Sei o que o DNS faz?', 'Sei a diferença entre não conectar e receber um erro do servidor?', 'Sei o que é um código de status?', 'Sei por que https é diferente de http?'],
    interview: [
      ['Fundamento', 'O que acontece quando você digita uma URL e aperta Enter?', 'URL → DNS (nome→IP) → conexão TCP + TLS → request HTTP → response com HTML → navegador baixa recursos e renderiza.'],
      ['Fundamento', 'O que o DNS faz?', 'Traduz um nome (exemplo.com) para um endereço IP que a máquina consegue conectar.']
    ],
    exercises: [
      ['Básico', 'Escrever, com suas palavras, as etapas de digitar uma URL até a página aparecer.', 'Lista ordenada das etapas com uma frase cada.'],
      ['Aplicado', 'Abrir a aba de rede do navegador e identificar o request principal, seu status e alguns recursos.', 'Captura anotada com o status e 3 recursos carregados.']
    ],
    quiz: [
      { question: 'A primeira coisa que o navegador faz com "exemplo.com" é:', options: ['baixar o HTML', 'resolver o nome via DNS para um IP', 'renderizar', 'abrir o CSS'], answer: 1, why: 'Sem o IP não há como conectar; DNS vem primeiro.' },
      { question: 'O "s" de https significa, sobretudo:', options: ['mais rápido', 'conexão cifrada (TLS)', 'super', 'servidor'], answer: 1, why: 'HTTPS é HTTP sobre TLS (cifrado e autenticado).' },
      { question: 'Um código de status 404 quer dizer:', options: ['erro do servidor', 'recurso não encontrado', 'sucesso', 'sem internet'], answer: 1, why: '4xx é erro do cliente/recurso; 404 = não encontrado.' }
    ],
    challenge: 'Diagnosticar em voz alta um "site fora do ar" isolando em qual etapa (DNS, conexão, status, render) o problema está.',
    book: 'MDN — How the web works (recomendado).',
    complements: [refs.mdnWeb, refs.mdnHttp],
    exampleFile: null
  }),
  moduleOf({
    number: 7, part: 'rede', id: 'cliente-servidor', title: 'Cliente e servidor: request, response e API',
    objective: 'Entender o modelo cliente/servidor, o ciclo request/response, códigos de status e o que é uma API.',
    prerequisites: ['Módulo 6', 'Noção de que sites conversam com servidores'],
    problem: 'Sem esse modelo, "onde roda meu código?", "o que é uma API?" e "por que deu 500?" ficam sem base.',
    concepts: ['Cliente vs servidor', 'Request e response', 'Métodos (GET/POST) e status', 'API e JSON', 'O que roda onde'],
    internals: ['O cliente pede (request), o servidor responde (response); cada request é independente (stateless por padrão).', 'Métodos dizem a intenção (GET lê, POST cria) e status dizem o resultado (2xx ok, 4xx erro do cliente, 5xx erro do servidor).', 'Uma API é um contrato: endpoints que recebem/retornam dados, geralmente em JSON.'],
    useWhen: ['Ao entender onde uma lógica deve rodar (cliente vs servidor).', 'Ao consumir ou depurar uma API.'],
    avoidWhen: ['Não confie em validação só no cliente (o servidor manda).', 'Não trate 4xx (culpa do pedido) como 5xx (culpa do servidor).'],
    contrast: { bad: 'Validar senha só no navegador.', good: 'Validar no servidor também — o cliente é controlável pelo usuário.' },
    tradeoffs: ['Mais lógica no cliente = resposta rápida, menos confiável; no servidor = confiável, mais latência.', 'JSON é legível e universal, mas verboso.'],
    production: 'Uma tela deixava enviar formulário inválido porque a validação estava só no cliente; o servidor aceitou lixo e o banco recebeu dados quebrados.',
    risks: ['Misturar responsabilidade de cliente e servidor.', 'Ignorar o significado dos status.', 'Confiar em dados vindos do cliente sem validar.'],
    checklist: ['Sei o que é request e response?', 'Sei a diferença entre GET e POST?', 'Sei o que 2xx/4xx/5xx significam?', 'Sei o que é uma API e o que é JSON?'],
    interview: [
      ['Fundamento', 'Qual a diferença entre cliente e servidor?', 'O cliente faz o pedido (ex.: navegador); o servidor processa e responde.'],
      ['Fundamento', 'O que significa um status 500?', 'Erro do lado do servidor — o pedido pode estar certo, mas o servidor falhou ao processá-lo.']
    ],
    exercises: [
      ['Básico', 'Classificar 6 status HTTP em 2xx/4xx/5xx e dizer o que cada um indica.', 'Tabela status → categoria → significado.'],
      ['Aplicado', 'Fazer um GET a uma API pública gratuita e descrever o JSON recebido.', 'Captura do JSON com uma explicação dos campos.']
    ],
    quiz: [
      { question: 'GET normalmente serve para:', options: ['criar dados', 'ler dados', 'apagar tudo', 'reiniciar o servidor'], answer: 1, why: 'GET é para leitura; POST para criar.' },
      { question: 'Validação de dados do usuário deve ocorrer:', options: ['só no cliente', 'só no servidor', 'no servidor (e também no cliente por conveniência)', 'em lugar nenhum'], answer: 2, why: 'O cliente é controlável; o servidor é a fonte de verdade.' },
      { question: 'JSON é:', options: ['uma linguagem de programação', 'um formato de dados legível', 'um banco de dados', 'um protocolo de rede'], answer: 1, why: 'É um formato de troca de dados baseado em texto.' }
    ],
    challenge: 'Explicar, para um app de lista de tarefas, o que deveria rodar no cliente e o que deveria rodar no servidor — e por quê.',
    book: 'MDN — An overview of HTTP (recomendado).',
    complements: [refs.mdnHttp],
    exampleFile: null
  }),

  // ── Parte 3 · Lógica e resolução de problemas ──
  moduleOf({
    number: 8, part: 'logica', id: 'decompor', title: 'Decompor um problema em passos',
    objective: 'Quebrar um problema em passos executáveis, sem ambiguidade, antes de escrever qualquer código.',
    prerequisites: ['Nenhum específico', 'Disposição para pensar antes de digitar'],
    problem: 'Iniciantes travam porque tentam resolver tudo de uma vez; sem decompor, o problema parece grande demais.',
    concepts: ['Decomposição', 'Algoritmo como receita', 'Entrada → processamento → saída', 'Passos sem ambiguidade', 'Pseudocódigo'],
    internals: ['Um algoritmo é uma sequência finita de passos sem ambiguidade que resolve o problema.', 'Todo problema tem entrada, um processamento e uma saída; nomear os três já organiza a solução.', 'Pseudocódigo (passos em português) separa "o que fazer" de "como escrever na linguagem".'],
    useWhen: ['Antes de codar qualquer coisa nova.', 'Quando você "não sabe por onde começar".'],
    avoidWhen: ['Não comece pela sintaxe; comece pelos passos.', 'Não deixe passos ambíguos ("de algum jeito ordenar").'],
    contrast: { bad: 'Abrir o editor e digitar sem saber o objetivo de cada linha.', good: 'Escrever os passos em português, conferir num exemplo, só então codar.' },
    tradeoffs: ['Planejar antes custa minutos; não planejar custa horas de retrabalho.', 'Pseudocódigo demais vira burocracia; o suficiente destrava.'],
    production: 'Uma funcionalidade "simples" virou uma semana de retrabalho porque ninguém decompôs os casos antes de implementar.',
    risks: ['Pular o planejamento e se perder no meio.', 'Passos ambíguos que cada um interpreta diferente.', 'Esquecer a saída esperada.'],
    checklist: ['Identifiquei entrada, processamento e saída?', 'Cada passo é sem ambiguidade?', 'Testei os passos num exemplo pequeno à mão?', 'Sei qual é o resultado esperado?'],
    interview: [
      ['Fundamento', 'O que é um algoritmo?', 'Uma sequência finita de passos sem ambiguidade que transforma uma entrada na saída desejada.'],
      ['Fundamento', 'Por que decompor antes de codar?', 'Reduz o problema a passos gerenciáveis e revela casos e ambiguidades antes de custar código.']
    ],
    exercises: [
      ['Básico', 'Escrever em passos (pseudocódigo) como achar o maior de uma lista de números.', 'Lista de passos que outra pessoa consegue seguir à mão.'],
      ['Aplicado', 'Decompor "validar um e-mail simples" em passos e casos.', 'Passos + lista de casos (válido, sem @, vazio).']
    ],
    quiz: [
      { question: 'Um algoritmo precisa ser, acima de tudo:', options: ['rápido', 'sem ambiguidade e finito', 'escrito em Python', 'curto'], answer: 1, why: 'Passos claros e finitos são a definição; velocidade vem depois.' },
      { question: 'O primeiro passo ao resolver um problema novo é:', options: ['abrir o editor', 'entender entrada, processamento e saída', 'escolher a linguagem', 'otimizar'], answer: 1, why: 'Entender o problema antecede escrever código.' },
      { question: 'Pseudocódigo serve para:', options: ['rodar mais rápido', 'descrever os passos sem prender à sintaxe', 'substituir testes', 'documentar a API'], answer: 1, why: 'Separa o "o quê" do "como escrever na linguagem".' }
    ],
    challenge: 'Decompor "fazer um sanduíche" em passos tão precisos que um robô literal conseguiria seguir — e achar as ambiguidades.',
    book: 'Missing Semester — resolução de problemas (recomendado).',
    complements: [refs.missingSemester],
    exampleFile: null
  }),
  moduleOf({
    number: 9, part: 'logica', id: 'rastrear', title: 'Rastrear a execução na mão (mesa de execução)',
    objective: 'Seguir a execução de um trecho passo a passo no papel, acompanhando o valor de cada variável.',
    prerequisites: ['Módulo 8', 'Ter visto um laço (for/while) em algum exemplo'],
    problem: 'Sem rastrear, o iniciante "olha o código e não vê o bug"; a mesa de execução torna o invisível visível.',
    concepts: ['Mesa de execução (trace)', 'Estado das variáveis', 'Fluxo de controle (if, laço)', 'Iteração passo a passo', 'Ponto onde o esperado diverge do real'],
    internals: ['Rastrear é anotar, linha a linha, o valor de cada variável a cada passo — como o computador faz.', 'A maioria dos bugs aparece quando o valor real numa linha diverge do esperado; a mesa mostra exatamente onde.', 'É a base do que o debugger automatiza depois (módulo 13).'],
    useWhen: ['Quando o código "deveria funcionar" mas não funciona.', 'Ao entender um laço ou recursão que você não domina.'],
    avoidWhen: ['Não "leia e ache que entendeu" — rastreie um exemplo concreto.', 'Não pule iterações do laço no rastreio.'],
    contrast: { bad: 'Encarar o código e chutar onde está o erro.', good: 'Montar a tabela de variáveis por iteração e achar onde o valor diverge.' },
    tradeoffs: ['Rastrear na mão é lento, mas ensina o modelo mental que o debugger acelera.', 'Exemplos pequenos bastam; entradas grandes não cabem no papel.'],
    production: 'Um cálculo de desconto errava só em pedidos com 1 item; rastrear a iteração revelou um laço que começava do índice errado.',
    risks: ['Rastrear mentalmente e se enganar.', 'Escolher um exemplo que não cobre o caso do bug.', 'Não anotar o estado a cada passo.'],
    checklist: ['Montei a tabela de variáveis por passo?', 'Escolhi um exemplo que reproduz o problema?', 'Anotei o valor real a cada iteração?', 'Achei o passo onde o real diverge do esperado?'],
    interview: [
      ['Fundamento', 'O que é uma mesa de execução?', 'Anotar, passo a passo, o valor de cada variável enquanto se "roda" o código na mão.'],
      ['Fundamento', 'Como você acha um bug sem debugger?', 'Rastreando a execução num exemplo pequeno e comparando o valor real com o esperado a cada passo.']
    ],
    exercises: [
      ['Básico', 'Rastrear na mão um laço que soma os números de 1 a 5, anotando a soma a cada iteração.', 'Tabela iteração → variável → valor, terminando em 15.'],
      ['Aplicado', 'Rastrear um trecho com bug e apontar a linha e a iteração onde o valor diverge.', 'Tabela do rastreio com o ponto de divergência marcado.']
    ],
    quiz: [
      { question: 'Rastrear a execução na mão serve para:', options: ['deixar o código mais rápido', 'ver o valor das variáveis passo a passo', 'formatar o código', 'documentar'], answer: 1, why: 'Torna visível o estado a cada passo, revelando o bug.' },
      { question: 'O bug geralmente está onde:', options: ['o código é mais longo', 'o valor real diverge do esperado', 'há comentários', 'a variável tem nome ruim'], answer: 1, why: 'A divergência entre real e esperado localiza o defeito.' },
      { question: 'Para rastrear, o melhor exemplo é:', options: ['o maior possível', 'um pequeno que reproduz o problema', 'aleatório', 'sem entrada'], answer: 1, why: 'Pequeno e representativo cabe no papel e mostra o bug.' }
    ],
    challenge: 'Pegar um trecho com laço, prever o resultado antes de rodar, rastrear na mão e comparar com a execução real.',
    book: 'Missing Semester — depuração (recomendado).',
    complements: [refs.missingSemester],
    exampleFile: null
  }),
  moduleOf({
    number: 10, part: 'logica', id: 'erros-casos', title: 'Ler uma mensagem de erro e pensar em casos',
    objective: 'Extrair a informação útil de uma mensagem de erro e cobrir os casos normal, de borda e inválido.',
    prerequisites: ['Módulo 9', 'Já ter recebido uma mensagem de erro'],
    problem: 'O iniciante entra em pânico com o "textão vermelho" e ignora que ele diz o tipo, a mensagem e a linha do erro.',
    concepts: ['Anatomia de um erro (tipo, mensagem, linha, stack trace)', 'Ler de baixo para cima', 'Caso normal, de borda e inválido', 'Reproduzir o erro', 'Mensagem como pista, não veredito'],
    internals: ['Uma exceção traz o tipo (ex.: TypeError), a mensagem, e o stack trace com o arquivo e a linha — leia a última linha "sua" primeiro.', 'Pensar em casos evita o bug: normal (o esperado), de borda (vazio, 1, limite) e inválido (nulo, tipo errado).', 'Reproduzir o erro de forma mínima é metade da solução.'],
    useWhen: ['Sempre que algo falha com uma mensagem.', 'Ao decidir o que testar antes de considerar pronto.'],
    avoidWhen: ['Não ignore a mensagem nem copie-cole sem ler.', 'Não teste só o caso feliz.'],
    contrast: { bad: 'Ver o erro, entrar em pânico e mudar coisas aleatórias.', good: 'Ler tipo + mensagem + linha, reproduzir mínimo e testar os três tipos de caso.' },
    tradeoffs: ['Cobrir todos os casos custa tempo; não cobrir custa bug em produção.', 'A borda é onde mora a maioria dos defeitos.'],
    production: 'Um relatório quebrava no fim do mês: ninguém testou o caso de "lista vazia" (mês sem vendas) — um caso de borda esquecido.',
    risks: ['Ignorar a mensagem de erro.', 'Testar só o caso feliz.', 'Não reproduzir o erro antes de "corrigir".'],
    checklist: ['Li o tipo, a mensagem e a linha do erro?', 'Consigo reproduzir o erro de forma mínima?', 'Cobri caso normal, de borda e inválido?', 'A "correção" foi verificada reproduzindo o caso?'],
    interview: [
      ['Fundamento', 'O que você faz ao ver uma mensagem de erro?', 'Leio o tipo, a mensagem e a linha; reproduzo o mínimo; então corrijo e verifico.'],
      ['Fundamento', 'O que é um caso de borda?', 'Uma entrada no limite (vazio, um único item, valor máximo) onde o código costuma falhar.']
    ],
    exercises: [
      ['Básico', 'Provocar 3 erros diferentes de propósito e, para cada, apontar tipo, mensagem e linha.', 'Tabela erro → tipo → o que a mensagem indica.'],
      ['Aplicado', 'Para uma função de dividir dois números, listar caso normal, de borda e inválido e testá-los.', 'Lista de casos (incl. divisão por zero) com o resultado de cada.']
    ],
    quiz: [
      { question: 'Numa mensagem de erro, a informação mais útil para começar é:', options: ['a cor', 'o tipo, a mensagem e a linha', 'o tamanho', 'o horário'], answer: 1, why: 'Tipo + mensagem + linha localizam e explicam o erro.' },
      { question: 'Uma "lista vazia" é um exemplo de caso:', options: ['normal', 'de borda', 'inválido', 'impossível'], answer: 1, why: 'É um limite (zero elementos) onde o código costuma falhar.' },
      { question: 'Antes de corrigir um bug, o ideal é:', options: ['reescrever tudo', 'reproduzi-lo de forma mínima', 'ignorar', 'reiniciar o PC'], answer: 1, why: 'Sem reproduzir, não há como confirmar a correção.' }
    ],
    challenge: 'Pegar um erro real seu, explicar a mensagem em português e listar os casos que faltavam testar.',
    book: 'Missing Semester — depuração e testes (recomendado).',
    complements: [refs.missingSemester],
    exampleFile: null
  }),

  // ── Parte 4 · Ferramental do desenvolvedor ──
  moduleOf({
    number: 11, part: 'ferramental', id: 'terminal', title: 'Terminal e Linux do zero',
    objective: 'Navegar e operar pelo terminal com os comandos essenciais, sem medo da tela preta.',
    prerequisites: ['Módulo 5 (arquivos, caminhos)', 'Acesso a um terminal'],
    problem: 'Quase toda ferramenta séria (build, Git, deploy) vive no terminal; sem ele, o dev fica preso ao que a interface gráfica oferece.',
    concepts: ['Prompt e comando', 'Navegar (cd, ls, pwd)', 'Manipular arquivos (mkdir, cp, mv, rm)', 'Ver conteúdo (cat, less)', 'Encadear (|) e redirecionar (>)'],
    internals: ['O terminal é uma interface de texto para o SO; cada comando é um programa com argumentos e opções.', 'O diretório de trabalho atual (pwd) é o contexto de todo caminho relativo.', 'O pipe (|) liga a saída de um comando à entrada de outro; > redireciona para arquivo.'],
    useWhen: ['Ao usar Git, builds, servidores, deploy — tudo mora aqui.', 'Ao automatizar tarefas repetitivas.'],
    avoidWhen: ['Cuidado com rm (não há lixeira); confira antes.', 'Não rode comando copiado sem entender o que faz.'],
    contrast: { bad: 'Copiar um comando da internet e rodar às cegas.', good: 'Ler o comando, entender cada parte e conferir o diretório atual antes.' },
    tradeoffs: ['Terminal é poderoso e automatizável, mas menos "descobrível" que a interface gráfica.', 'Rápido para quem sabe; íngreme no começo.'],
    production: 'Um rm -rf rodado no diretório errado apagou trabalho não versionado; a lição é conferir pwd e ter backup/versionamento.',
    risks: ['Rodar comando destrutivo (rm) no lugar errado.', 'Ignorar o diretório atual.', 'Copiar comandos sem entender.'],
    checklist: ['Sei navegar (cd, ls, pwd)?', 'Sei criar/mover/remover arquivos com cuidado?', 'Sei ver o conteúdo de um arquivo?', 'Entendo pipe e redirecionamento?'],
    interview: [
      ['Fundamento', 'Para que serve o terminal se existe interface gráfica?', 'Automação, ferramentas que só vivem nele (Git, build, deploy) e trabalho remoto/servidores.'],
      ['Fundamento', 'O que faz o comando pwd?', 'Mostra o diretório de trabalho atual — o contexto dos caminhos relativos.']
    ],
    exercises: [
      ['Básico', 'Criar uma pasta, entrar nela, criar dois arquivos, listar e depois remover com cuidado.', 'Sequência de comandos executada e o resultado de cada.'],
      ['Aplicado', 'Usar um pipe para contar quantas linhas um arquivo tem.', 'O comando encadeado e a contagem obtida.']
    ],
    quiz: [
      { question: 'O comando para mudar de diretório é:', options: ['ls', 'cd', 'pwd', 'mv'], answer: 1, why: 'cd = change directory.' },
      { question: 'O símbolo | (pipe) serve para:', options: ['comentar', 'ligar a saída de um comando à entrada de outro', 'apagar', 'repetir'], answer: 1, why: 'Encadeia comandos passando a saída adiante.' },
      { question: 'Antes de rodar rm, o mais importante é:', options: ['fechar o editor', 'conferir o diretório e o alvo (não há lixeira)', 'reiniciar', 'mudar a cor'], answer: 1, why: 'rm é irreversível no terminal; conferir evita perda.' }
    ],
    challenge: 'Automatizar, em um único comando encadeado, "listar os arquivos .txt e contar quantos são".',
    book: 'Missing Semester — shell (recomendado).',
    complements: [refs.missingSemester],
    exampleFile: null
  }),
  moduleOf({
    number: 12, part: 'ferramental', id: 'rodar-codigo', title: 'Editor/IDE e como rodar seu código',
    objective: 'Escrever, salvar e executar o próprio código, entendendo a diferença entre compilar e interpretar e o que é um build.',
    prerequisites: ['Módulo 11 (terminal)', 'Uma linguagem instalada'],
    problem: '"Escrevi o código, e agora?" — sem entender o ciclo escrever→rodar e compilar×interpretar, o iniciante não fecha o loop.',
    concepts: ['Editor vs IDE', 'Código-fonte → execução', 'Compilar vs interpretar', 'Build e dependências', 'Ciclo editar-rodar-ver'],
    internals: ['Código-fonte é texto; para rodar, ou um compilador traduz para binário antes (Java, C) ou um interpretador executa direto (Python, JS).', 'Um build automatiza compilar + juntar dependências + empacotar; a IDE integra editar, rodar e depurar.', 'Fechar o loop editar → rodar → ver o resultado é o hábito central do desenvolvimento.'],
    useWhen: ['Ao começar qualquer projeto.', 'Ao entender erros de compilação vs erros em tempo de execução.'],
    avoidWhen: ['Não confunda erro de compilação (antes de rodar) com erro de execução (durante).', 'Não dependa de "rodar pela IDE" sem saber o comando por baixo.'],
    contrast: { bad: 'Só clicar em "Run" sem saber o que acontece.', good: 'Saber o comando que compila/roda e o que a IDE faz por você.' },
    tradeoffs: ['Compilado: erros cedo e mais rápido em execução; ciclo mais lento.', 'Interpretado: ciclo rápido; erros só ao rodar.'],
    production: 'Um projeto "rodava na IDE de um e não no de outro" porque a dependência estava instalada só numa máquina — build reproduzível resolve.',
    risks: ['Confundir compilar com rodar.', 'Depender de configuração só da sua máquina.', 'Ignorar mensagens do compilador.'],
    checklist: ['Sei rodar meu código pelo terminal, não só pela IDE?', 'Sei a diferença entre compilar e interpretar?', 'Sei o que um build faz?', 'Sei distinguir erro de compilação de erro de execução?'],
    interview: [
      ['Fundamento', 'Qual a diferença entre compilar e interpretar?', 'Compilar traduz o código para binário antes de rodar; interpretar executa o código-fonte direto, linha a linha.'],
      ['Fundamento', 'O que é um build?', 'O processo automatizado de transformar código-fonte + dependências em algo executável.']
    ],
    exercises: [
      ['Básico', 'Escrever um "olá mundo", salvá-lo e rodá-lo pelo terminal (não pela IDE).', 'O arquivo, o comando usado e a saída.'],
      ['Aplicado', 'Provocar um erro de compilação/sintaxe e depois um erro de execução, e diferenciar os dois.', 'Os dois erros com a explicação de quando cada um ocorre.']
    ],
    quiz: [
      { question: 'Python é, tipicamente:', options: ['compilado antes de rodar', 'interpretado', 'nunca executado', 'escrito em binário'], answer: 1, why: 'O interpretador executa o código-fonte diretamente.' },
      { question: 'Um erro de compilação acontece:', options: ['durante a execução', 'antes de o programa rodar', 'só em produção', 'nunca'], answer: 1, why: 'É detectado ao traduzir o código, antes de executar.' },
      { question: 'Um "build" serve para:', options: ['escrever o código', 'transformar fonte + dependências em executável', 'apagar arquivos', 'abrir o navegador'], answer: 1, why: 'Automatiza compilar, resolver dependências e empacotar.' }
    ],
    challenge: 'Rodar o mesmo programa de duas formas (pela IDE e pelo terminal) e explicar o que a IDE fazia por baixo.',
    book: 'Missing Semester — ferramentas (recomendado).',
    complements: [refs.missingSemester],
    exampleFile: null
  }),
  moduleOf({
    number: 13, part: 'ferramental', id: 'debugger', title: 'O debugger: breakpoint, step e inspeção',
    objective: 'Usar um debugger para pausar a execução, avançar passo a passo e inspecionar o estado — em vez de "print e reza".',
    prerequisites: ['Módulo 9 (rastrear na mão)', 'Módulo 12 (rodar código)'],
    problem: 'O iniciante depura só com prints espalhados; o debugger faz o que a mesa de execução faz, automaticamente e ao vivo.',
    concepts: ['Breakpoint', 'Step over / step into / step out', 'Inspecionar variáveis', 'Call stack', 'Watch e execução condicional'],
    internals: ['Um breakpoint pausa a execução numa linha; ali você vê o valor real de cada variável naquele instante.', 'Step over executa a linha; step into entra na função; step out sai dela — é o rastreio da mão, automatizado.', 'A call stack mostra quem chamou quem até chegar ali; watch acompanha uma expressão a cada passo.'],
    useWhen: ['Quando um valor está errado e você não sabe onde.', 'Ao entender código alheio executando-o passo a passo.'],
    avoidWhen: ['Não substitua o entendimento por prints infinitos.', 'Não remova o bug "por tentativa" sem observar o estado.'],
    contrast: { bad: 'Encher o código de print() e adivinhar.', good: 'Pôr um breakpoint, avançar passo a passo e ler o estado real onde diverge.' },
    tradeoffs: ['Debugger é preciso e poderoso; exige aprender a ferramenta.', 'Print é rápido para casos triviais; some no ruído em casos grandes.'],
    production: 'Um cálculo errado em um caso raro foi achado em minutos com um breakpoint condicional (só quando o valor era negativo) — impossível com prints.',
    risks: ['Nunca aprender o debugger e depender de prints.', 'Ignorar a call stack ao investigar de onde veio o valor.', 'Confundir step into com step over.'],
    checklist: ['Sei pôr um breakpoint e rodar em modo debug?', 'Sei a diferença entre step over, into e out?', 'Sei inspecionar variáveis e a call stack?', 'Sei usar um breakpoint condicional?'],
    interview: [
      ['Fundamento', 'O que é um breakpoint?', 'Um ponto onde a execução pausa para você inspecionar o estado (variáveis, pilha) naquele instante.'],
      ['Fundamento', 'Qual a diferença entre step over e step into?', 'Step over executa a linha inteira; step into entra na função chamada nela para depurá-la por dentro.']
    ],
    exercises: [
      ['Básico', 'Pôr um breakpoint num trecho com laço e inspecionar as variáveis em duas iterações.', 'Captura do debugger mostrando os valores em cada pausa.'],
      ['Aplicado', 'Achar um bug com o debugger (não com prints) e descrever o passo onde o valor divergiu.', 'Relato do breakpoint, do valor observado e da correção.']
    ],
    quiz: [
      { question: 'Um breakpoint serve para:', options: ['acelerar o código', 'pausar a execução para inspecionar o estado', 'apagar variáveis', 'compilar'], answer: 1, why: 'Pausa numa linha e revela os valores naquele instante.' },
      { question: 'Para entrar numa função e depurá-la por dentro, use:', options: ['step over', 'step into', 'step out', 'continue'], answer: 1, why: 'Step into entra na função chamada.' },
      { question: 'A call stack mostra:', options: ['os arquivos abertos', 'a cadeia de chamadas que levou até ali', 'a memória livre', 'os breakpoints'], answer: 1, why: 'Quem chamou quem até o ponto atual.' }
    ],
    challenge: 'Pegar um bug que você resolveria com prints e resolvê-lo só com o debugger — comparando o esforço.',
    book: 'Missing Semester — depuração (recomendado).',
    complements: [refs.missingSemester],
    exampleFile: null
  }),
  moduleOf({
    number: 14, part: 'ferramental', id: 'versionamento', title: 'Controle de versão: o mínimo de Git',
    objective: 'Entender por que versionar e usar o mínimo de Git (commit, histórico, desfazer) com segurança.',
    prerequisites: ['Módulo 11 (terminal)', 'Ter um projeto pequeno para versionar'],
    problem: '"projeto_final_v2_agora_vai.zip" é o anti-padrão que o Git resolve; sem versionar, perde-se trabalho e histórico.',
    concepts: ['Por que versionar', 'Repositório e commit', 'Histórico e mensagens', 'Desfazer com segurança', 'Remoto (backup e colaboração)'],
    internals: ['Um commit é um instantâneo do projeto com uma mensagem; o histórico é a linha desses instantâneos.', 'Versionar dá backup, histórico navegável e a capacidade de voltar a um estado que funcionava.', 'Um remoto (ex.: GitHub) guarda o histórico fora da sua máquina e permite colaborar.'],
    useWhen: ['Em todo projeto, desde o primeiro dia.', 'Ao querer experimentar sem medo de quebrar o que funciona.'],
    avoidWhen: ['Não versione segredos (senhas) nem arquivos gerados.', 'Não faça um único commit gigante no fim.'],
    contrast: { bad: 'Copiar a pasta e renomear para "backup_final".', good: 'Commits pequenos com mensagens que explicam o porquê, e um remoto como backup.' },
    tradeoffs: ['Versionar tem curva inicial; paga-se rápido no primeiro "preciso voltar".', 'Commits pequenos exigem disciplina, mas dão histórico útil.'],
    production: 'Uma mudança quebrou tudo na véspera da entrega; com Git, bastou voltar ao último commit que funcionava em segundos.',
    risks: ['Não versionar e perder trabalho.', 'Commitar segredos.', 'Mensagens inúteis ("update") que tornam o histórico cego.'],
    checklist: ['Sei o que é um commit e um histórico?', 'Faço commits pequenos com mensagens claras?', 'Sei desfazer com segurança (voltar a um commit)?', 'Uso um remoto como backup?'],
    interview: [
      ['Fundamento', 'Por que usar controle de versão?', 'Backup, histórico navegável, poder voltar a um estado que funcionava e colaborar sem sobrescrever o trabalho alheio.'],
      ['Fundamento', 'O que é um commit?', 'Um instantâneo do projeto num ponto do tempo, com uma mensagem que explica a mudança.']
    ],
    exercises: [
      ['Básico', 'Iniciar um repositório, fazer 3 commits pequenos com boas mensagens e ver o histórico.', 'O log com os 3 commits e suas mensagens.'],
      ['Aplicado', 'Quebrar o projeto de propósito e voltar ao commit anterior que funcionava.', 'Registro do antes/depois e do comando usado para voltar.']
    ],
    quiz: [
      { question: 'Um commit é:', options: ['um backup em zip', 'um instantâneo do projeto com mensagem', 'um arquivo de senha', 'um comando do terminal'], answer: 1, why: 'Registra o estado do projeto num ponto do tempo.' },
      { question: 'O que NÃO deve ser versionado:', options: ['o código', 'senhas e segredos', 'o README', 'os testes'], answer: 1, why: 'Segredos em repositório vazam para todo clone e histórico.' },
      { question: 'Uma boa mensagem de commit explica:', options: ['a data', 'o porquê da mudança', 'o tamanho', 'o autor'], answer: 1, why: 'O "porquê" é o que o diff não mostra.' }
    ],
    challenge: 'Explicar para um colega por que "salvar cópias com nomes diferentes" é pior que usar Git desde o primeiro dia.',
    book: 'Pro Git, cap. 1–2 (livre, oficial).',
    complements: [refs.proGit, refs.missingSemester],
    exampleFile: null
  })
]);

export const fundamentosAssessment = Object.freeze({
  levels: [
    { level: 'Fundamento', expected: 'Explica o conceito sem jargão e acerta o quiz objetivo.', evidence: 'Quiz de cada módulo + um exemplo próprio.', redFlags: ['Decorar sem entender', 'Errar o quiz e seguir adiante'] },
    { level: 'Aplicação inicial', expected: 'Produz um artefato mínimo (trace, conversão, comando) que funciona.', evidence: 'Arquivo/nota reproduzível por módulo.', redFlags: ['Só leitura', 'Nunca rodou nada'] },
    { level: 'Prontidão para a faixa 1', expected: 'Consegue começar uma trilha técnica sem tratar o básico como magia.', evidence: 'Revisão registrada antes de avançar.', redFlags: ['Pular a faixa 0', 'Lacunas em memória/erro/terminal'] }
  ],
  caseStudies: [
    {
      id: 'caso-bug-invisivel', title: 'O bug que "não existe"',
      scenario: 'Um cálculo com valores quebrados dá errado só às vezes, e o código "parece certo".',
      constraints: ['Sem debugger no começo', 'Exemplo pequeno disponível'],
      decisions: ['Rastrear na mão', 'Identificar float vs inteiro', 'Comparar com tolerância'],
      deliverables: ['Mesa de execução', 'Correção com a comparação certa', 'Quiz do módulo 3 correto']
    },
    {
      id: 'caso-nao-abre', title: '"O site não abre"',
      scenario: 'Uma página parou de carregar e ninguém sabe se é DNS, servidor ou render.',
      investigation: ['Isolar a etapa (nome? conexão? status? render?)', 'Ler o código de status', 'Checar o certificado'],
      correction: ['Apontar a etapa culpada', 'Descrever o conserto'],
      prevention: ['Saber o caminho da URL à página', 'Monitorar cada camada']
    }
  ],
  projects: [
    {
      id: 'entrega-01', title: 'Caderno de fundamentos',
      objective: 'Reunir um artefato mínimo por módulo (conversões, trace, comandos, primeiro repositório).',
      stages: ['Fazer o quiz de cada módulo', 'Produzir o artefato mínimo', 'Registrar dúvidas resolvidas'],
      acceptance: ['Quiz correto em todos os módulos', 'Um artefato reproduzível por módulo', 'Versionado no primeiro repositório']
    },
    {
      id: 'entrega-02', title: 'Explique para alguém',
      evolves: 'O caderno de fundamentos.',
      objective: 'Explicar cinco conceitos da faixa 0 sem jargão, com um exemplo próprio cada.',
      stages: ['Escolher 5 conceitos', 'Escrever a explicação', 'Testar a explicação com um leigo'],
      acceptance: ['Explicações sem jargão', 'Um exemplo próprio por conceito', 'Entendidas por quem não é da área'],
      seniorSignal: 'Consegue ensinar o básico — sinal de que realmente entendeu, não decorou.'
    }
  ],
  completion: [
    'Acertar o quiz objetivo dos 14 módulos.',
    'Entregar um artefato mínimo por módulo, versionado no primeiro repositório Git.',
    'Explicar cinco conceitos da faixa 0 sem jargão, com exemplo próprio.',
    'Registrar a revisão antes de subir para a faixa 1 (aplicação).'
  ]
});

export const fundamentosAnswerKey = fundamentosModules.map((module) => ({
  module: module.number,
  title: module.title,
  objetivoAtingido: module.objective,
  respostaEsperadaNaEntrevista: (module.interview || []).map((item) => `${item.level}: ${item.expected}`),
  respostaDoQuiz: (module.quiz || []).map((q) => `${q.question} → ${typeof q.answer === 'number' ? String.fromCharCode(97 + q.answer) : q.answer}) ${q.why || ''}`),
  erroMaisComum: module.contrast?.bad || (module.risks && module.risks[0]) || 'Tratar o básico como magia e pular a faixa 0.',
  criterioDeAceite: (module.exercises || []).map((item) => `${item.level} — evidência: ${item.evidence}`),
  sinalDeQueNaoDominou: module.risks || []
}));
