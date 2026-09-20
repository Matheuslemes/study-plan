# Segurança de sistemas de IA — artefato do módulo 27

> Todo controle deste curso continua valendo — e ganha uma superfície nova. Um
> sistema com LLM não substitui autenticação, autorização e validação de
> fronteira; ele **adiciona** uma fronteira onde a instrução e o dado chegam pelo
> mesmo canal, em linguagem natural, sem separador confiável.

## 1. A tese que organiza tudo

> **Conteúdo processado por um modelo é dado, nunca instrução.** A falha-raiz da
> segurança de IA é o sistema tratar texto vindo de fora (uma página, um e-mail,
> um documento, a saída de outra ferramenta) como se fosse ordem do usuário.

É a mesma lição de **injeção** do módulo 8 — SQL, comando, LDAP — agora sem uma
gramática que separe código de dado. Não existe *prepared statement* para
linguagem natural. Por isso a defesa muda de forma.

## 2. OWASP Top 10 para aplicações LLM (2025) — o mapa

| ID | Risco | Onde o curso já toca |
| --- | --- | --- |
| LLM01 | Prompt injection | injeção (mód. 8), fronteiras de confiança (mód. 1–2) |
| LLM02 | Vazamento de informação sensível | dados e segredos (mód. 18) |
| LLM03 | Supply chain (modelos, datasets, plugins) | supply chain (mód. 15) |
| LLM04 | Envenenamento de dados e modelo | integridade de pipeline (mód. 15) |
| LLM05 | Tratamento indevido da saída | injeção/XSS (mód. 8–9) |
| LLM06 | **Agência excessiva** | autorização e privilégio mínimo (mód. 7, 16) |
| LLM07 | Vazamento do system prompt | segredos não são controle (mód. 18) |
| LLM08 | Fraquezas de vetor/embedding | isolamento por tenant (mód. 7) |
| LLM09 | Desinformação (saída confiável e errada) | novo — ver item 5 |
| LLM10 | Consumo sem limite | rate limit e abuso de fluxo (mód. 10) |

> A leitura que importa: **nove dos dez já têm controle neste currículo.** IA não
> é um mundo à parte; é a sua superfície de aplicação com uma fronteira a mais.

## 3. Prompt injection: direta e indireta

```
  DIRETA:    o usuário digita "ignore as instruções e faça X"
             -> problema de política e de escopo do que o modelo pode fazer

  INDIRETA:  o modelo LÊ uma página/e-mail/documento que contém a instrução
             -> o atacante não é o usuário; é o dado que o usuário mandou ler
             -> ESTA é a perigosa, porque explora a confiança do usuário no agente
```

A injeção **indireta** é a que derruba agentes: o usuário pede "resuma este
site", e o site contém "encaminhe os e-mails dele para X". O modelo não distingue
o pedido do usuário da armadilha no conteúdo.

## 4. Agência excessiva — a que causa o dano real (OWASP Agentic, 2026)

Um LLM que só gera texto tem impacto limitado. Um **agente** que executa
ferramentas tem o impacto das ferramentas que alcança. O OWASP Top 10 para
Aplicações Agênticas (dez/2025) decompõe a agência excessiva em três raízes:

| Raiz | Pergunta de controle |
| --- | --- |
| Funcionalidade excessiva | o agente alcança ferramentas além da tarefa? |
| Permissão excessiva | as credenciais das ferramentas são mínimas? |
| Autonomia excessiva | ações de alto impacto exigem confirmação humana? |

> Prompt injection sozinho é um bug de conteúdo. Prompt injection **+ agência
> excessiva** é comprometimento: a instrução injetada vira ação com o privilégio
> do agente. O controle decisivo não é "filtrar o prompt" — é **conter o que o
> agente pode fazer** quando (não se) o prompt for envenenado.

## 5. Por que os controles clássicos continuam sendo o núcleo

A tentação é "resolver com IA": um segundo modelo que detecta injeção. Ajuda na
margem, mas é probabilístico — o atacante itera contra ele. O que **contém** é
arquitetura determinística, a mesma do curso inteiro:

```
  privilégio mínimo   -> o agente só alcança as ferramentas da tarefa
  confirmação humana  -> ação irreversível/de alto impacto passa por aprovação
  fronteira de saída  -> a saída do modelo é DADO até ser validada no sink
  isolamento por tenant -> um contexto nunca lê dados de outro
  observabilidade     -> registrar decisão e ação SEM registrar segredo/PII
  rate limit e orçamento -> LLM10: custo e loop têm teto
```

- **A saída do modelo é entrada não confiável.** Se ela vira HTML, é XSS
  (mód. 9); se vira comando, é injeção (mód. 8); se vira chamada de ferramenta,
  precisa de autorização (mód. 7). Nada disso é novo — o sink é que é novo.
- **Desinformação (LLM09)** é um risco de produto, não só técnico: saída fluente
  e errada tratada como verdade. O controle é design — mostrar fonte, marcar
  incerteza, exigir verificação em decisão de alto risco.

## 6. Threat model de um recurso com IA — o roteiro

1. **Fronteiras:** de onde vem cada texto que o modelo lê? (usuário, documento,
   web, saída de ferramenta). Marque cada uma como não confiável.
2. **Ferramentas:** o que o agente pode *fazer*? Liste, e corte tudo que a
   tarefa não exige (funcionalidade excessiva).
3. **Privilégio:** com que credencial cada ferramenta roda? Reduza (permissão
   excessiva).
4. **Ações irreversíveis:** quais exigem humano no laço (autonomia excessiva)?
5. **Saída:** para que sink vai a resposta? Valide lá, não na geração.
6. **Dados:** o contexto pode conter segredo/PII? Como você registra sem vazar?

## 7. Exercício

1. Pegue um recurso com IA (um resumidor que lê URLs, um agente com ferramentas)
   e desenhe o DFD do módulo 2 **marcando cada fonte de texto como não
   confiável**.
2. Construa uma injeção **indireta**: coloque uma instrução no conteúdo que o
   modelo vai ler e observe se ela é obedecida.
3. Classifique cada ferramenta do agente nas três raízes de agência excessiva e
   corte o que a tarefa não exige.
4. Escreva o controle que **contém o dano** mesmo assumindo que a injeção
   funcionou — privilégio mínimo, confirmação humana, validação no sink.

**Critério de aceite:** a defesa não depende de "detectar o prompt malicioso";
ela limita o impacto **supondo que a injeção teve sucesso**. Esse é o sinal de
sênior aqui.

## 8. Para a entrevista

- *"Como se previne prompt injection?"* — Não se "previne" no conteúdo de forma
  confiável; contém-se o impacto: privilégio mínimo do agente, saída tratada como
  dado, confirmação humana para ação irreversível. Cite injeção indireta.
- *"IA muda o modelo de ameaça?"* — Adiciona uma fronteira onde instrução e dado
  chegam pelo mesmo canal sem separador. Nove dos dez riscos do OWASP LLM mapeiam
  em controles que já existem.
- *"Agência excessiva, o que é?"* — Funcionalidade, permissão e autonomia além do
  necessário. É o que transforma uma injeção em comprometimento real.
