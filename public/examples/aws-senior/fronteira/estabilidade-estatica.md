# Estabilidade estática — artefato do módulo 22

> A ideia é contraintuitiva e vale ser dita direto: **para sobreviver à perda de
> uma AZ, você já precisa estar operando com capacidade para viver sem ela.**
> Reagir exige o plano de controle, que é justamente o que fica pressionado.

## 1. A regra de dependência

```
        ┌──────────────────────┐
        │   PLANO DE CONTROLE  │   criar, alterar, escalar
        │   (menos disponível) │   — é o que satura no evento
        └──────────┬───────────┘
                   │  dependência permitida: só nesta direção
                   ▼
        ┌──────────────────────┐
        │   PLANO DE DADOS     │   servir tráfego
        │   (mais disponível)  │   — precisa sobreviver sozinho
        └──────────────────────┘
```

**Se a sua recuperação depende de criar algo, ela depende do plano de controle.**
Toda dependência na direção contrária é uma bomba-relógio.

## 2. Reativo × estaticamente estável

| | Reativo | Estaticamente estável |
| --- | --- | --- |
| Capacidade | dimensionada para o normal | dimensionada para N−1 |
| Na perda de uma AZ | autoscaling provisiona | **nada acontece** |
| Depende do plano de controle | sim, no pior momento | não |
| Custo em regime | menor | maior (ociosidade deliberada) |
| Risco | provisionamento falhar sob demanda regional | nenhum |

### O cálculo

Para sobreviver à perda de 1 de N zonas, cada zona precisa de:

| Zonas | Capacidade por zona | Ociosidade em regime |
| ---: | ---: | ---: |
| 2 | 100% da carga total | 100% |
| 3 | 50% | 50% |
| 4 | 33% | 33% |
| 5 | 25% | 25% |

Três zonas é o ponto de equilíbrio mais comum: 50% de folga é caro, e menos zonas
fica proibitivo. **Esse é o preço da estabilidade estática — pague conscientemente
ou aceite depender do plano de controle.**

## 3. Trabalho constante

Sistema que faz sempre a mesma quantidade de trabalho não tem modo de sobrecarga.

| | Orientado a evento | Trabalho constante |
| --- | --- | --- |
| Carga normal | baixa | constante |
| Carga em crise | **pico proporcional ao caos** | constante |
| Modo de sobrecarga | existe | **não existe** |
| Custo em dia calmo | baixo | o mesmo de sempre |

Exemplo: em vez de propagar cada mudança de configuração como um evento, publique
periodicamente o arquivo inteiro e deixe cada nó lê-lo. Dez mudanças ou dez mil,
o custo é idêntico — e o dia ruim se parece com o dia bom.

## 4. Evitar fallback

Caminho de fallback é código que só roda na emergência. Logo:

- nunca foi exercitado sob carga real,
- costuma depender do mesmo recurso que falhou,
- e falha junto, no pior momento.

A recomendação é **eliminá-lo**, tornando o caminho principal resiliente o
bastante — não melhorá-lo. Se um fallback for inevitável, ele precisa rodar em
produção com frequência, ou não é confiável.

## 5. Autoavaliação

| Pergunta | Resposta exigida |
| --- | --- |
| O workload sobrevive à perda de uma AZ sem nenhuma ação? | sim |
| Alguma recuperação depende de criar recurso novo? | não |
| Existe caminho de fallback que não roda em produção? | não |
| O plano de dados sobrevive ao plano de controle indisponível? | sim |
| A capacidade é N−1, e isso está orçado? | sim |

Qualquer divergência é uma dependência do plano de controle no pior momento.

## 6. Raio de impacto

Antes de projetar isolamento, meça o que existe hoje:

| Modo de falha | Clientes afetados | % da base | Origem do número |
| --- | --- | --- | --- |
| Perda de uma AZ | | | |
| Deploy com defeito | | | |
| Dado envenenado em cache | | | |
| Cliente saturando recurso compartilhado | | | |
| Falha de uma instância | | | |

> A matemática de células e shuffle sharding — C(n,k), sobreposição e o cálculo
> do raio — está na **trilha de Arquitetura, módulo 23**, com os números
> conferidos. Aqui trata-se da realização em AZ, zonal e failover.

## 7. Exercício

1. Preencha a tabela do item 6 com números reais, não adjetivos.
2. Teste a perda de uma AZ e registre se **alguma** etapa da recuperação
   dependeu de provisionar algo.
3. Se dependeu: dimensione N−1, calcule o custo adicional e leve a decisão —
   pagar a ociosidade ou aceitar o risco, explicitamente.
