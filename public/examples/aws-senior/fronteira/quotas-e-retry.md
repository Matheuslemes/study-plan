# Quotas, retry e amplificação — artefato do módulo 24

> A matemática abaixo foi **calculada**, não estimada. Reproduza com os números do
> seu sistema antes de usar em decisão — inclusive estes.

## 1. A conta que ninguém faz

Retry empilhado multiplica. Com `n` camadas e `t` tentativas por camada, uma
requisição de usuário gera até `t¹ × t² × ... × tⁿ` chamadas no destino.

| Camadas | Tentativas por camada | Chamadas no destino | Amplificação |
| ---: | ---: | ---: | ---: |
| 1 | 3 | 3 | 3× |
| 2 | 3 | 9 | 9× |
| 3 | 3 | **27** | **27×** |
| 3 | 2 | 8 | 8× |
| 2 (SDK + app) | 3 e 2 | 6 | 6× |

Durante uma degradação, **a carga de retry supera a original** e o destino que ia
se recuperar sozinho não consegue mais. Esse é o mecanismo do colapso metaestável.

> O caso de 3 camadas não é hipotético: SDK da AWS (padrão), cliente HTTP do
> framework e política da aplicação. Os três costumam estar ligados sem ninguém
> ter decidido isso.

## 2. Por que jitter é obrigatório

Backoff exponencial **sem** jitter sincroniza os clientes: todos esperam o mesmo
intervalo e voltam juntos.

```
sem jitter (100 clientes, base 100ms)
  t=100ms   ████████████████████  100 chamadas
  t=200ms   ████████████████████  100 chamadas
  t=400ms   ████████████████████  100 chamadas
            ^ ondas mantêm o destino saturado

com full jitter: sleep = random(0, base * 2^tentativa)
  t=0-100ms  ████                 ~25
  t=0-200ms      ███ ██ ███       espalhado
  t=0-400ms   ██  ██   ██  ███    espalhado
            ^ o destino consegue drenar
```

```python
# full jitter — a variante recomendada
sleep = random.uniform(0, min(teto, base * 2 ** tentativa))
```

## 3. Orçamento de retry

Backoff e jitter espalham no tempo; eles **não limitam o total**. Para isso é
preciso um teto global de tentativas em voo no cliente inteiro.

```
se (retries_em_voo / requisicoes_em_voo) > 0.1:
    não tentar de novo — devolver o erro
```

Com 10% de orçamento, mesmo uma falha total gera no máximo 10% de carga extra,
em vez de 200%.

## 4. Inventário de quotas (preencher antes do pico, não durante)

| Quota | Limite | Uso em pico | Folga | Ajustável? | Ação se exceder |
| --- | ---: | ---: | ---: | --- | --- |
| Lambda concorrência | | | | sim, por ticket | |
| API Gateway req/s | | | | sim | |
| DynamoDB WCU/RCU | | | | sim / on-demand | |
| EC2 vCPU por família | | | | sim | |
| Elastic IPs | | | | sim | |
| Chamadas à API de controle | | | | **não** | |

A última linha é a esquecida: quotas do **plano de controle** costumam não ser
ajustáveis, e é nelas que se esbarra durante um evento — exatamente quando todo
mundo está tentando provisionar.

## 5. Erro transitório × permanente

Tentar de novo um erro permanente é desperdício garantido.

| Devolvido | Classe | Retry? |
| --- | --- | --- |
| Throttling / limite excedido | transitório | sim, com backoff e jitter |
| 5xx do serviço | transitório | sim |
| Timeout de conexão | transitório | sim, com cuidado (pode ter executado) |
| 403 / acesso negado | **permanente** | não |
| Validação / parâmetro inválido | **permanente** | não |
| 404 | **permanente** | não |

> Timeout é o caso ambíguo: você não sabe se a operação executou. Retry exige
> idempotência — sem chave de idempotência, o retry pode duplicar o efeito.

## 6. Checklist

- [ ] Quantas camadas fazem retry nesta chamada? (conte o SDK)
- [ ] O backoff tem jitter?
- [ ] Existe teto global de tentativas em voo?
- [ ] Erro permanente é distinguido de transitório?
- [ ] Operações com retry são idempotentes?
- [ ] O sistema derruba carga em excesso, ou tenta atender tudo e cai?
- [ ] As quotas de pico estão inventariadas, com a folga conhecida?

## 7. Exercício

1. Descubra quantas camadas de retry existem entre o seu usuário e a dependência
   mais crítica. Inclua o SDK — ele tem retry ligado por padrão.
2. Calcule o pior caso de chamadas por requisição de usuário.
3. Simule a dependência degradada e **meça** a carga real gerada.
4. Reduza a uma camada, com jitter e orçamento, e meça de novo.

**Critério de aceite:** a amplificação medida cai para perto de 1 durante a
degradação, e a taxa de sucesso em falha transitória não piora.
