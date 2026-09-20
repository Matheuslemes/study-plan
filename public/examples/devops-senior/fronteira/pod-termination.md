# A sequência de terminação de um pod — artefato do módulo 27

> Este documento existe porque "erro a cada deploy" é um dos problemas mais comuns
> em Kubernetes, e a causa está numa **corrida** que a documentação descreve de
> forma dispersa. Quem não conhece a sequência adiciona um `sleep` e segue a vida.

## O que acontece quando você apaga um pod

O ponto central: **duas coisas acontecem em paralelo**, e o Kubernetes não coordena
uma com a outra.

```
  kubectl delete pod / rolling update
              │
              ▼
   deletionTimestamp é definido no objeto
              │
      ┌───────┴────────┐
      │                │        <<< ESTES DOIS RAMOS SÃO CONCORRENTES >>>
      ▼                ▼
 endpoint é        kubelet executa
 removido do        preStop hook
 EndpointSlice           │
      │                  ▼
      │             SIGTERM ao PID 1
      │                  │
      ▼                  │
 kube-proxy /            │        ← propagação leva tempo variável
 ingress / mesh          │           em CADA nó do cluster
 atualizam regras        │
                         ▼
              espera terminationGracePeriodSeconds
                         │
                         ▼
                     SIGKILL
```

### A janela do erro

Entre o SIGTERM chegar à aplicação e **todas** as regras de rede do cluster serem
atualizadas, existe um intervalo em que:

- a aplicação já começou a encerrar,
- e ainda **recebe tráfego novo**.

É esse intervalo que produz os erros de deploy. Não é bug — é consequência de um
sistema distribuído em que a propagação não é instantânea nem coordenada.

## A correção certa (e por que o `sleep` "funciona")

```yaml
spec:
  terminationGracePeriodSeconds: 45   # > (preStop + drenagem real)
  containers:
    - name: app
      lifecycle:
        preStop:
          exec:
            # NÃO é superstição: esta espera existe para dar tempo de o endpoint
            # ser removido de todos os nós ANTES de a aplicação parar de aceitar
            # conexão. A aplicação continua servindo normalmente durante ela.
            command: ["sh", "-c", "sleep 5"]
```

O `sleep` funciona — mas por um motivo específico, e quem não sabe qual escolhe o
número errado. Ele deve cobrir a **propagação da remoção do endpoint**, não o tempo
de processamento das requisições em voo; esse é responsabilidade do encerramento
gracioso da aplicação, dentro do período de graça.

### O contrato completo

| Camada | Responsabilidade |
| --- | --- |
| `preStop` | esperar a remoção do endpoint se propagar |
| Aplicação | ao receber SIGTERM: parar de aceitar **novas** conexões, terminar as em voo, fechar recursos |
| `terminationGracePeriodSeconds` | ser maior que preStop + pior caso de drenagem |
| Readiness probe | falhar assim que o encerramento começar |

Se `terminationGracePeriodSeconds` for menor que preStop + drenagem, o SIGKILL chega
no meio — e você tem perda de requisição em vez de encerramento gracioso.

## Por que isto está no módulo de ler a fonte

A documentação descreve cada peça separadamente. A **concorrência** entre os dois
ramos — e portanto a existência da janela — fica clara ao ler o código e os KEPs,
não o guia do usuário.

É o padrão que se repete nos módulos de fronteira das outras trilhas: o *quê* está
documentado, o *porquê* e a *ordem* estão na fonte.

### Onde ler

| Assunto | Onde |
| --- | --- |
| Ciclo de vida do pod | `pkg/kubelet/kubelet_pods.go` |
| Remoção de endpoint | `pkg/controller/endpointslice` |
| Regras de rede por nó | `pkg/proxy` |
| Convenções que todo recurso segue | `contributors/devel/sig-architecture/api-conventions.md` |
| O porquê de cada mudança | KEPs em `kubernetes/enhancements` |

## Exercício do módulo 27

1. Reproduza num cluster descartável: suba um serviço, gere carga contínua e faça
   rolling update. Meça os erros **sem** preStop.
2. Adicione preStop e encerramento gracioso. Meça de novo.
3. Diminua `terminationGracePeriodSeconds` abaixo de preStop + drenagem e observe
   o SIGKILL cortar no meio.
4. Escreva a sequência com os tempos **do seu cluster** — a propagação depende do
   tamanho e da carga do control plane, então o número de outra pessoa não serve.

**Critério de aceite:** você consegue explicar a alguém por que o `sleep` funciona,
sem usar a palavra "funciona".
