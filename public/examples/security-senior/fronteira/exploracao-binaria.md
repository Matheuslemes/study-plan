# Exploração de binário e o que as mitigações mudaram — artefato do módulo 21

> Só se defende de corrupção de memória quem entende como ela vira controle de
> execução. Este módulo é **defensivo por objetivo**: você ataca para saber o
> que a defesa precisa impedir — e mede o que cada mitigação de fato custa ao
> atacante.

## 0. Contrato de ética — leia antes de tudo

- Só em **binário próprio**, compilado por você, em **laboratório isolado**.
- Nunca contra software de terceiros sem autorização escrita e escopo.
- O objetivo registrado é sempre **a defesa**: qual controle teria barrado isto.
- Sem esse contrato, o resto do módulo não deve ser praticado.

## 1. As classes de corrupção — o mapa

| Classe | Origem | O que o atacante ganha |
| --- | --- | --- |
| Stack buffer overflow | escrita além do buffer local | sobrescreve endereço de retorno |
| Heap overflow | escrita além do chunk | corrompe metadados do alocador |
| Use-after-free | uso de ponteiro liberado | reusa memória sob controle |
| Double-free | liberar duas vezes | corrompe listas do alocador |
| Type confusion | objeto tratado como outro tipo | escrita/leitura fora do contrato |
| Integer overflow | cálculo de tamanho estoura | aloca menos do que copia |

> Quase toda corrupção de memória vira **primitiva de leitura/escrita
> arbitrária**. O resto do exploit é transformar essa primitiva em execução.

## 2. A escada de mitigações — e o custo que cada degrau impôs

```
  sem mitigação        -> escrever shellcode direto na stack e pular pra ele
  + DEP/NX             -> stack não é executável; nasce o ROP
  + stack canary       -> overflow linear é detectado; precisa de leak ou de
                          um caminho que não passe pelo canary
  + ASLR               -> endereços mudam; precisa VAZAR um endereço primeiro
  + PIE                -> o próprio binário vira relocável; leak mais caro
  + CET shadow stack   -> retorno é verificado; ROP clássico quebra
  + CET IBT / CFI      -> alvo de call/jmp é verificado; JOP/COOP ficam mais caros
  + ARM MTE            -> ponteiro tagueado; UAF/overflow viram falha provável
```

Cada degrau **não elimina** a exploração — encarece. A leitura correta:

| Mitigação | O que mata | O que o atacante passa a precisar |
| --- | --- | --- |
| DEP/NX | shellcode na stack | reuso de código (ROP/ret2libc) |
| ASLR + PIE | endereço fixo | uma vulnerabilidade de **leak** |
| Stack canary | overflow linear cego | leak do canary, ou overflow não-linear |
| CET shadow stack | ROP por endereço de retorno | JOP, COOP, ou corromper dados |
| CET IBT / CFI | desvio para meio de função | gadgets em alvos válidos, data-only |
| ARM MTE | UAF/overflow probabilístico | contornar/adivinhar a tag (4 bits) |

## 3. ROP em uma tela — por que reuso de código existe

Com DEP, o código do atacante não roda. Então ele **não injeta código**:
encadeia trechos que já existem (`gadgets`), cada um terminando em `ret`, para
que a própria stack vire o "programa".

```
  stack montada          o que executa
  ---------------        ------------------------
  &gadget_pop_rdi   ->   pop rdi ; ret      (carrega argumento)
  valor_do_arg      ->   (consumido pelo pop)
  &gadget_syscall   ->   syscall ; ret      (chama o kernel)
  ...
```

O `ret` é o motor. É exatamente por isso que a **CET shadow stack** ataca a
raiz: ela mantém uma cópia protegida dos endereços de retorno e aborta se o
`ret` divergir. O ROP clássico morre aí — e o atacante migra para JOP (usa
`jmp`) ou para ataques **data-only**, que não desviam fluxo nenhum.

## 4. Heap grooming — a parte que separa quem entende do resto

Overflow no heap só é útil se o que vem **depois** do seu chunk for algo que
valha corromper. "Grooming" é arrumar o heap para que isso aconteça:

1. Alocar muitos objetos para estabilizar o layout.
2. Abrir um buraco (liberar um) do tamanho certo.
3. Fazer a vítima cair nesse buraco, com um alvo logo em seguida.
4. Disparar o overflow e corromper o alvo (um ponteiro de função, um tamanho).

> A lição defensiva: **isolamento de heap por tipo/tamanho** (partições,
> `kalloc` zones, PartitionAlloc) quebra o passo 3. Não impede o bug — impede
> que o bug encontre um vizinho útil.

## 5. A conclusão estratégica: por que o mundo migra de C/C++

Depois de percorrer a escada, a conclusão honesta é que mitigação é uma corrida
que o defensor não vence de forma definitiva — só encarece. O ganho estrutural
vem de **remover a classe inteira**:

- CISA e NSA pedem um **roteiro de segurança de memória** (marco de jan/2026):
  linguagens memory-safe ou capacidades de hardware que eliminem a classe.
- Linguagens memory-safe (Rust, Go, Swift, C#, Java…) tornam UAF e overflow
  **erros de compilação ou de runtime controlado**, não primitivas de exploit.
- A CRA e clientes passam a **perguntar** por esse roteiro em aquisição.

A ordem de eficácia, do mais fraco ao mais forte:

```
  detectar depois  <  mitigar em runtime  <  eliminar a classe na linguagem
```

## 6. Exercício (em binário próprio, lab isolado)

1. Compile um programa em C **com um overflow deliberado**, sem mitigações
   (`-fno-stack-protector -z execstack -no-pie`). Sobrescreva o retorno.
2. Ligue as mitigações **uma a uma** e registre, a cada degrau, o que parou de
   funcionar e o que o atacante passaria a precisar. Preencha a tabela do item 2.
3. Recompile o mesmo programa em **Rust** e mostre o que o compilador (ou o
   panic controlado) faz com a mesma entrada.
4. Escreva o **controle defensivo** que corresponde a cada degrau que você
   venceu — este é o entregável que importa.

**Critério de aceite:** a tabela preenchida com *o que cada mitigação custou ao
atacante* e a versão em linguagem memory-safe que torna o exercício impossível.

## 7. Para a entrevista

- *"ASLR impede exploração?"* — Não; **encarece**, exigindo um leak. Diga o que
  é o leak e por que PIE o torna mais caro.
- *"A CET acabou com o ROP?"* — Acabou com o ROP **por endereço de retorno**;
  o atacante migra para JOP/COOP e ataques data-only. Nomeie o que a shadow
  stack protege e o que ela não vê.
- *"Por que investir em Rust se dá pra mitigar?"* — Porque mitigar encarece e
  eliminar a classe remove. Ligue ao roteiro de memory safety de 2026.
