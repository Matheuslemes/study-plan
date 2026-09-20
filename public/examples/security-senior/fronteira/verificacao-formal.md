# Verificação formal de protocolos — artefato do módulo 24

> Teste mostra a presença de bugs; prova mostra a ausência — dentro de um modelo
> declarado. Para protocolos de segurança, "testamos bastante" não é resposta:
> o atacante explora justamente o caso que ninguém testou.

## 1. O que a verificação formal responde — e o que não responde

| Pergunta | Ferramenta responde? |
| --- | --- |
| Existe uma sequência de mensagens que quebra o segredo/autenticação? | **sim** |
| ...para um número **ilimitado** de sessões concorrentes? | **sim** (simbólico) |
| A implementação em C tem um buffer overflow? | **não** — é outro nível |
| O gerador de aleatoriedade é bom? | **não** — está fora do modelo |

> A verificação simbólica assume **criptografia perfeita** (o "modelo Dolev-Yao"):
> o atacante controla a rede inteira, mas não quebra a primitiva. Ela encontra
> falhas de **lógica de protocolo**, que é onde os protocolos reais falham —
> não falhas de implementação.

## 2. O modelo do atacante (Dolev-Yao) em uma frase

O atacante **é a rede**: lê, intercepta, reordena, duplica e forja qualquer
mensagem — mas só decifra o que tem a chave, e só assina o que tem o segredo. Se
o protocolo sobrevive a esse atacante onipotente-na-rede, sobrevive à rede real.

## 3. As duas ferramentas de referência

| | ProVerif | Tamarin |
| --- | --- | --- |
| Modelo | cálculo pi aplicado | lógica de reescrita multiconjunto |
| Estilo | mais automático | mais expressivo, exige mais do usuário |
| Estado mutável | limitado | bom (contadores, tabelas, revogação) |
| Prova | automática, pode não terminar | interativa quando não fecha sozinha |

Ambas provam para **sessões ilimitadas**. Foram usadas em análises reais do
TLS 1.3, Signal, WireGuard e 5G-AKA — várias delas **antes** da padronização,
achando falhas enquanto ainda eram baratas de corrigir.

## 4. Anatomia de uma especificação (independente de ferramenta)

Toda spec tem quatro partes. Escreva-as em português antes de escrever em
sintaxe nenhuma:

```
  1. TERMOS       o que existe: chaves, nonces, identidades, mensagens
  2. REGRAS       o que cada parte faz ao receber o quê (a máquina de estados)
  3. ATACANTE     o que ele pode (Dolev-Yao é o padrão)
  4. PROPRIEDADES o que precisa valer SEMPRE
```

As propriedades são o coração. Duas famílias:

- **Sigilo:** "o atacante nunca aprende `k`." (`secret k`)
- **Autenticação (correspondência):** "se Alice termina achando que falou com
  Bob usando `k`, então Bob de fato iniciou com Alice usando `k`." (correspondência
  injetiva impede também **replay**.)

## 5. Um protocolo ingênuo e a falha que a prova encontra

Considere um handshake simplificado:

```
  A -> B :  { "sou A", Na }            (Na = nonce fresco de A)
  B -> A :  { Na, Nb }kAB             (prova que B viu Na)
  A -> B :  { Nb }kAB                 (prova que A viu Nb)
  ambos derivam sessão de (Na, Nb)
```

A propriedade de autenticação parece valer. Mas sem **amarrar as identidades
dentro das mensagens cifradas**, a ferramenta encontra um ataque de reflexão/
homem-no-meio: um atacante que fala com A e com B ao mesmo tempo pode fazer B
aceitar mensagens que A destinou a outra sessão. A correção — incluir as
identidades e a direção dentro do que é autenticado — é *exatamente* o tipo de
detalhe que revisão humana perde e a prova não.

> Foi esta classe de falha (identidade não amarrada, papel não fixado) que
> análises formais expuseram em versões preliminares de protocolos reais. O
> valor não é "provar que está certo" — é **o contraexemplo** quando está errado.

## 6. O limite que honestidade exige declarar

- A prova vale **para o modelo**. Se o modelo esquece um campo, a prova não
  cobre esse campo. "Verificado" sem dizer *o quê* é propaganda.
- Simbólico ≠ computacional. O modelo simbólico assume cripto perfeita; o
  modelo computacional (CryptoVerif, provas de redução) raciocina sobre
  probabilidade e força de chave. São camadas diferentes.
- A **implementação** ainda pode estar errada. Verificar o protocolo e depois
  errar o parser (módulo 23) entrega o sistema do mesmo jeito.

## 7. Exercício

1. Escreva, **em português**, as quatro partes (termos, regras, atacante,
   propriedades) para o handshake do item 5.
2. Formule a propriedade de autenticação como correspondência injetiva e
   explique por que a versão não-injetiva **permitiria replay**.
3. Aponte, no protocolo, o campo que falta para amarrar identidade e papel, e
   reescreva as mensagens com a correção.
4. Declare o **limite**: o que a sua spec assume e o que ela deliberadamente não
   cobre (implementação, RNG, canal lateral).

**Critério de aceite:** a propriedade de autenticação escrita como
correspondência, o contraexemplo de replay descrito, e o limite do modelo
declarado explicitamente.

## 8. Para a entrevista

- *"O que a verificação formal prova?"* — Propriedades de **lógica de protocolo**
  (sigilo, autenticação) para sessões ilimitadas, sob um atacante que controla a
  rede — dentro de um modelo declarado.
- *"Qual a diferença de simbólico para computacional?"* — Simbólico assume
  cripto perfeita e é automatizável; computacional raciocina sobre probabilidade
  e redução de segurança. Nomeie Tamarin/ProVerif vs CryptoVerif.
- *"Por que isso importa se ninguém tem tempo?"* — Porque falha de protocolo é
  cara e retroativa; achar o contraexemplo antes da padronização é ordens de
  grandeza mais barato que depois do deploy global.
