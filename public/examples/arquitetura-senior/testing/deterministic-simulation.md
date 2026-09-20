# Simulação determinística — artefato do módulo 21

> Formato de evidência. A entrega do módulo não é este documento: é um harness que roda
> no seu sistema e, ao falhar, imprime uma semente que reproduz a falha.

## A propriedade que muda tudo

Um teste é reprodutível quando **toda** fonte de não determinismo vem de uma semente:

| Fonte | Como costuma estar | Como precisa ficar |
| --- | --- | --- |
| Tempo | `Instant.now()`, `time.time()` | relógio injetado, avançado pelo simulador |
| Aleatoriedade | RNG global | RNG semeado, passado por parâmetro |
| Escalonamento | threads reais do SO | escalonador do simulador, passo a passo |
| Rede | socket real | canal simulado com atraso/perda/reordenação |
| Disco | filesystem real | camada simulada com falha injetável |
| UUID / IDs | `randomUUID()` | derivados da semente |

Com isso, uma execução inteira é uma função da semente. **Quando o teste falha, o
artefato é a semente** — qualquer pessoa reproduz exatamente aquela execução, inclusive
no depurador.

## Por que isso torna a falha rara frequente

Com o relógio sob controle, "esperar 30 segundos pelo timeout" custa zero. Dias de tempo
simulado rodam em segundos, e é isso que permite explorar milhares de intercalamentos que
a produção levaria meses para produzir uma vez.

## Esqueleto do laço (pseudocódigo)

```
para cada semente em 1..N:
    rng        = RNG(semente)
    relogio    = RelogioSimulado(inicio=T0)
    rede       = RedeSimulada(rng, perda=1%, atraso=0..500ms, reordena=true, duplica=0.5%)
    sistema    = montarSistema(relogio, rede, rng)

    enquanto relogio.agora() < T0 + 7.dias:
        evento = escalonador.proximo()      # determinístico dado o rng
        sistema.processar(evento)
        relogio.avancarAte(evento.instante)

        se rng.chance(0.1%):
            injetar(rng.escolher([PARTICAO, CRASH_NO, DISCO_LENTO, RELOGIO_ATRASA]))

        se !invariantes(sistema):
            falhar("semente=" + semente + " t=" + relogio.agora())
```

O corpo importa menos que as três propriedades: **uma semente**, **invariantes checadas a
cada passo**, **falhas injetadas pelo mesmo RNG**.

## Os modos de falha que valem a pena modelar

Ordenados por relação custo/achado:

1. **Duplicação de mensagem** — encontra ausência de idempotência. O mais barato de todos.
2. **Reordenação** — encontra dependência implícita de ordem.
3. **Atraso extremo** (mensagem que chega 10 min depois) — encontra timeout mal dimensionado
   e a suposição de que "se não respondeu, não executou".
4. **Crash entre duas escritas** — encontra dual-write sem outbox.
5. **Partição de rede** — encontra split-brain e quórum mal desenhado.
6. **Relógio andando para trás** — encontra lógica que usa relógio de parede para ordenar.
7. **Disco devolvendo dado antigo** — encontra suposição de durabilidade.

## Degraus de adoção

Nem todo sistema precisa do degrau 4. Suba um por vez e pare quando o risco justificar.

| Degrau | O que é | Custo | Quando parar aqui |
| --- | --- | --- | --- |
| 1 | Relógio injetável | Baixo | Sempre faça; elimina teste intermitente |
| 2 | Injeção de falha nos testes de integração | Baixo | Suficiente para a maioria dos serviços |
| 3 | Property-based sobre o protocolo | Médio | Bom para componentes de coordenação |
| 4 | Simulação determinística completa | Alto | Só para dados, pagamento ou coordenação |

> Adotar o degrau 4 depois que o sistema existe é muito mais caro do que desde o início —
> FoundationDB e TigerBeetle foram construídos em torno dessa propriedade. Saber disso
> antes de decidir faz parte do módulo.

## O que esta técnica NÃO dá

- **O simulador só falha do jeito que você programou.** A lista acima é sua cobertura; o
  que não está nela continua indetectável. Declare isso no ADR.
- **Modelo verificado ≠ implementação correta.** O módulo 20 verifica o protocolo; este
  verifica a implementação contra as falhas modeladas. São complementares, não substitutos.
- **Não substitui produção.** Dependências reais, dados reais e carga real continuam sendo
  a única fonte de verdade sobre alguns modos de falha.

## Critérios de aceite

- [ ] Tempo, aleatoriedade e I/O são injetáveis no componente sob teste
- [ ] Uma falha imprime a semente, e a semente reproduz a mesma execução
- [ ] Os modos de falha modelados estão listados — e os não modelados também
- [ ] A suíte roda execuções suficientes para o defeito raro aparecer (registre quantas)
- [ ] Ao menos um defeito real foi encontrado e travado como regressão por semente
