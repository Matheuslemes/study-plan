# Runbook mínimo do banco

## Sinais

- SLO: p99 por operação, taxa de erro e throughput.
- Filas: conexões pendentes, sessões ativas e `idle in transaction`.
- Esperas: locks, I/O, CPU, WAL e replication lag.
- Manutenção: dead tuples, autovacuum, idade de transação e armazenamento.
- Recuperação: idade do último backup restaurado, RPO observado e RTO ensaiado.

## Ordem de diagnóstico

1. Declare impacto, início e operações afetadas.
2. Compare com mudança recente e baseline de carga.
3. Identifique fingerprint, plano, waits e blocker.
4. Aplique a menor ação reversível com critério de parada.
5. Confirme recuperação do SLO e invariantes.
6. Preserve timeline, artefatos e decisão para o postmortem.

## Game day

- Saturar o pool sem ultrapassar a capacidade definida.
- Introduzir lock longo e localizar blocker/waiter.
- Pausar CDC e observar lag/retenção de WAL.
- Expirar cache em massa e verificar proteção da origem.
- Restaurar backup em ambiente limpo e executar checks de consistência.

