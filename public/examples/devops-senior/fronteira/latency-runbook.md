# Runbook de latência — do topo ao kernel (módulo 24)

> Método, não receita. A ordem existe para você não descer ao kernel antes de
> esgotar o que é barato de verificar.

## Regra zero

**Média mente.** Um serviço com média de 80 ms e p99 de 3 s tem um problema que
nenhuma média mostra. Todo número deste runbook é percentil.

## Etapa 1 — a pergunta certa

Antes de qualquer comando, responda:

- [ ] A latência subiu **ou** sempre foi assim e alguém só reparou agora?
- [ ] Afeta **todas** as requisições ou uma fatia (endpoint, cliente, região)?
- [ ] Começou **quando**? Coincide com deploy, mudança de carga ou de infra?
- [ ] O SLO foi violado, ou é desconforto?

Se não souber responder, o problema é observabilidade, não latência.

## Etapa 2 — método USE, por recurso

Para **cada** recurso: utilização, saturação e erros. Saturação é o que revela.

| Recurso | Utilização | Saturação | Erros |
| --- | --- | --- | --- |
| CPU | `mpstat -P ALL 1` | run queue: `vmstat 1` (coluna `r`) | — |
| CPU (cgroup) | `cpuacct.usage` | **`cpu.stat` → `nr_throttled`** | — |
| Memória | `free -m` | `vmstat` (si/so), PSI | OOM em `dmesg` |
| Disco | `iostat -xz 1` (`%util`) | fila: `avgqu-sz`, `await` | erros em `dmesg` |
| Rede | `sar -n DEV 1` | `netstat -s` retransmissões | `ifconfig` drops |

**PSI** é o atalho: mede quanto tempo tarefas ficaram **bloqueadas** por recurso.

```bash
cat /proc/pressure/cpu /proc/pressure/memory /proc/pressure/io
```

`some avg10` acima de 10% já indica sofrimento real, mesmo com utilização média baixa.

## Etapa 3 — throttling de cgroup (o suspeito nº 1 em Kubernetes)

O erro mais comum em container: CPU média baixa, latência alta, e ninguém olha aqui.

```bash
cat /sys/fs/cgroup/cpu.stat
# nr_periods        12000
# nr_throttled       5200   <- 43% das janelas foram recortadas
# throttled_usec  9400000
```

Limite de CPU não desacelera de forma suave: ele impõe janelas. Uma carga com
picos curtos é penalizada mesmo com utilização média de 30%.

**Decisão:** elevar o limite, remover o limite mantendo o request, ou suavizar o
pico na aplicação. As três são válidas; escolher sem medir não é.

## Etapa 4 — on-CPU versus off-CPU

Esta distinção resolve metade dos casos difíceis.

```bash
# on-CPU: onde o tempo é gasto EXECUTANDO
sudo perf record -F 99 -p <PID> -g -- sleep 30
sudo perf script > out.stacks   # depois: flame graph
```

Se a CPU está baixa, o flame graph de CPU **não vai mostrar o problema** — o tempo
está sendo passado esperando, e isso exige análise off-CPU (módulo 22, eBPF).

## Etapa 5 — rede do host

```bash
netstat -s | grep -i retrans     # retransmissões TCP
ss -ti                           # RTT e cwnd por conexão
cat /proc/net/softnet_stat       # descartes no processamento de pacote
```

Retransmissão entre pods costuma ser atribuída à aplicação. O contador está aqui,
e desmente.

## Etapa 6 — registrar

```
Sintoma:
Início (e o que mudou junto):
Escopo (todas as req / fatia):

Camada          Verificado?  Achado
aplicação       [ ]
runtime         [ ]
cgroup          [ ]          nr_throttled = ___ / nr_periods = ___
kernel/USE      [ ]          PSI cpu=___ mem=___ io=___
rede do host    [ ]          retransmissões = ___

Causa:
Correção:
Como saberemos se voltar:
```

A última linha é a que transforma o diagnóstico em aprendizado: se não houver
alerta ou teste para o retorno, o mesmo incidente vai acontecer de novo.

## Erros que este runbook existe para evitar

| Erro | Por quê |
| --- | --- |
| Aumentar réplicas sem diagnóstico | se cada réplica está sendo throttled, mais réplicas gastam mais e não resolvem |
| Concluir por CPU média | a cauda é o problema; a média a esconde |
| Copiar `sysctl` de blog | troca um trade-off por outro, sem baseline |
| Descer ao kernel primeiro | caro e quase sempre desnecessário |
| Corrigir sem baseline | você não vai conseguir provar que melhorou |
