# Topologia celular e shuffle sharding — artefato do módulo 23

> Formato de evidência. Substitua os números pelos do seu sistema; o que precisa ser
> copiado é o **método**: raio de impacto calculado, não estimado.

## 1. Raio de impacto atual (antes de qualquer mudança)

Preencha isto primeiro. A maior parte dos sistemas descobre aqui que já tem um raio
de impacto total e nunca tinha percebido.

| Modo de falha | Clientes afetados | % da base | Origem do número |
| --- | --- | --- | --- |
| Deploy com defeito | todos | 100% | deploy simultâneo em todas as réplicas |
| Perda de uma zona | todos, degradado | 100% | banco regional único |
| Cliente saturando o pool | todos | 100% | pool de conexões compartilhado |
| Dado envenenado em cache | todos | 100% | cache compartilhado, sem partição |
| Falha de uma instância | 0 (absorvida) | 0% | redundância N+2 |

**Leitura:** redundância cobre só a última linha. As quatro primeiras são falhas
**correlacionadas**, e nenhuma quantidade de réplicas as resolve.

## 2. Matemática do shuffle sharding

Com `n` instâncias e `k` por cliente, existem C(n,k) conjuntos possíveis. Dois clientes
só se afetam completamente quando recebem o **mesmo conjunto**.

| n | k | C(n,k) | P(mesmo conjunto) | Compartilham ≥1 instância | Impacto de 1 instância |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 8 | 2 | 28 | 1/28 = 3,6·10⁻² | — | 25,00% |
| 16 | 2 | 120 | 1/120 = 8,3·10⁻³ | 24,17% | 12,50% |
| 16 | 3 | 560 | 1/560 = 1,8·10⁻³ | — | 18,75% |
| 32 | 2 | 496 | 1/496 = 2,0·10⁻³ | — | 6,25% |
| 32 | 4 | 35.960 | 1/35.960 = 2,8·10⁻⁵ | 43,06% | 12,50% |
| 100 | 5 | 75.287.520 | 1,3·10⁻⁸ | — | 5,00% |

> Valores conferidos por cálculo direto de C(n,k). Reproduza com qualquer linguagem antes
> de usar em decisão — inclusive estes.

### As duas colunas que as pessoas confundem

- **P(mesmo conjunto)** é o que importa para *cliente barulhento*: só quem tem o conjunto
  inteiro igual sofre o impacto completo.
- **Compartilham ≥1** é o que importa para *degradação parcial*: em `n=32, k=4`, 43% dos
  clientes compartilham ao menos uma instância com você. Isso não é falha total para eles,
  mas também não é zero.

Trocar `n=16,k=2` por `n=32,k=4` melhora o isolamento completo em 300× e **piora** a
sobreposição parcial (de 24% para 43%). Qual das duas importa depende do modo de falha
que você está tentando conter — e essa é a decisão do módulo.

## 3. Desenho proposto

```
                      ┌──────────────────────────┐
                      │  Roteador de célula      │  ← a única parte global.
                      │  (mapa cliente → célula) │    Mantenha-a burra e estável.
                      └──────────┬───────────────┘
        ┌────────────────┬───────┴────────┬────────────────┐
   ┌────▼────┐      ┌────▼────┐      ┌────▼────┐      ┌────▼────┐
   │ Célula 1│      │ Célula 2│      │ Célula 3│      │ Célula 4│
   │ app     │      │ app     │      │ app     │      │ app     │
   │ banco   │      │ banco   │      │ banco   │      │ banco   │
   │ cache   │      │ cache   │      │ cache   │      │ cache   │
   │ fila    │      │ fila    │      │ fila    │      │ fila    │
   └─────────┘      └─────────┘      └─────────┘      └─────────┘
     25% dos          25%              25%              25%
     clientes
```

**Regra inegociável:** se duas células compartilham banco, fila ou cache, não são células.
São réplicas com nomes diferentes, e o raio de impacto continua total.

## 4. Plano de controle × plano de dados

| Pergunta | Resposta exigida |
| --- | --- |
| A célula continua servindo com o plano de controle fora do ar? | Sim — estabilidade estática |
| O roteador depende de algo que não seja um mapa estático em cache? | Não |
| Um deploy no plano de controle pode derrubar o plano de dados? | Não |
| A célula precisa de rede para outra célula no caminho da requisição? | Não |

Se alguma resposta divergir, o isolamento é aparente.

## 5. Deploy em onda

| Onda | Células | Espera | Gate para avançar |
| --- | --- | --- | --- |
| 0 | canário interno | 30 min | zero erro novo, p99 estável |
| 1 | 1 célula (25%) | 2 h | SLO mantido, sem alerta novo |
| 2 | +1 célula (50%) | 2 h | idem |
| 3 | restantes | — | idem |

Raio de impacto de um deploy ruim: **25%**, revertido antes da onda 2.

## 6. Critérios de aceite deste artefato

- [ ] Cada modo de falha tem raio de impacto em **número de clientes**, não em adjetivo
- [ ] Nenhuma dependência compartilhada entre células — verificado, não presumido
- [ ] `n` e `k` escolhidos com o cálculo escrito e a coluna que importa identificada
- [ ] Plano de dados sobrevive à queda do plano de controle
- [ ] Procedimento de migração de cliente entre células existe e foi testado
- [ ] Custo operacional por célula estimado, com o ponto em que deixa de compensar
