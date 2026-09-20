# eBPF — playbook de investigação (módulo 22)

> Exige Linux com kernel recente e privilégio elevado. Os comandos abaixo **não**
> foram executados neste repositório (host Windows); rode-os num host ou nó Linux.
> É o exercício do módulo.

## Quando descer para o kernel

Só depois de as camadas de cima não explicarem. A ordem é:

```
aplicação → runtime → container/cgroup → kernel
```

Se você chegou aqui sem ter olhado as três primeiras, volte.

## O ponto de anexação importa

| Tipo | Estabilidade | Quando usar |
| --- | --- | --- |
| **tracepoint** | interface **estável** | preferência sempre que existir |
| **kprobe** | detalhe de implementação | quando não há tracepoint; pode sumir na próxima versão do kernel |
| **uprobe** | símbolo do binário | rastrear função de aplicação sem recompilar |
| **XDP / tc** | caminho de rede | filtro e balanceamento em altíssima taxa |

Mesma distinção contrato × implementação dos outros módulos de fronteira: preferir
tracepoint é preferir o que não quebra na atualização.

## Receitas por sintoma

### "A latência está alta e a CPU está baixa"
O tempo está sendo passado esperando. Comece medindo em qual syscall.

```bash
# distribuição de latência por syscall de um processo
sudo bpftrace -e '
  tracepoint:raw_syscalls:sys_enter /pid == $1/ { @start[tid] = nsecs; }
  tracepoint:raw_syscalls:sys_exit  /@start[tid]/ {
      @us[probe] = hist((nsecs - @start[tid]) / 1000); delete(@start[tid]);
  }' <PID>
```

### "Suspeito que é DNS"
Suspeita frequente, quase nunca verificada.

```bash
sudo bpftrace -e '
  uprobe:/lib/x86_64-linux-gnu/libc.so.6:getaddrinfo { @t[tid] = nsecs; }
  uretprobe:/lib/x86_64-linux-gnu/libc.so.6:getaddrinfo /@t[tid]/ {
      @ms = hist((nsecs - @t[tid]) / 1000000); delete(@t[tid]);
  }'
```

### "O banco está lento" (antes de acusar o banco)
Latência de conexão TCP, medida do lado do cliente:

```bash
sudo bpftrace -e '
  kprobe:tcp_v4_connect { @start[tid] = nsecs; }
  kretprobe:tcp_v4_connect /@start[tid]/ {
      printf("connect %d us\n", (nsecs - @start[tid]) / 1000);
      delete(@start[tid]);
  }'
```

Se `connect` já está lento, o problema não é a consulta — é esgotamento de porta
efêmera, pool mal dimensionado ou rede.

### "Algo está lendo disco e não sei o quê"

```bash
sudo bpftrace -e '
  tracepoint:block:block_rq_issue {
      @bytes[comm] = sum(args->bytes);
      @count[comm] = count();
  }'
```

### "Quem está matando meus processos?"

```bash
sudo bpftrace -e '
  tracepoint:signal:signal_generate /args->sig == 9/ {
      printf("SIGKILL -> pid %d (%s) por %s\n", args->pid, args->comm, comm);
  }'
```

Resposta comum: o OOM killer, e não o orquestrador.

## Antes de rodar em produção

- [ ] O programa foi lido e auditado (não é `curl | sudo bash`)
- [ ] O overhead foi medido sob carga — compare com e sem o programa carregado
- [ ] O ponto de anexação é tracepoint sempre que possível
- [ ] O rastreamento não captura dado sensível (payload, credencial, PII)
- [ ] Existe um limite de tempo: rastreamento ligado e esquecido é incidente futuro
- [ ] A mesma pergunta não é respondível por métrica que já existe

## O que eBPF NÃO resolve

- **Não conhece semântica de negócio.** Ele vê `write()` de 4 KB, não "pedido
  confirmado". Métrica de negócio continua sendo instrumentação de aplicação.
- **Não substitui trace distribuído.** Ele vê um host; a propagação de contexto
  entre serviços continua sendo trabalho da aplicação.
- **Não é de graça.** Programa em caminho quente tem custo, e ele é seu problema.

## Cilium: o mesmo mecanismo, aplicado à rede do cluster

Cilium substitui a cadeia de iptables por programas eBPF. O ganho aparece quando o
número de serviços cresce: a cadeia de iptables é percorrida linearmente, e o
eBPF usa mapas com busca em tempo constante.

Se o seu cluster tem dezenas de serviços, a diferença é teórica. Com milhares,
é a diferença entre funcionar e não funcionar. **Meça antes de migrar.**
