# Evidência - observabilidade e SRE

## Collector

```yaml
receivers:
  otlp:
    protocols:
      grpc: {}
      http: {}
processors:
  memory_limiter:
    check_interval: 1s
    limit_mib: 512
  batch: {}
exporters:
  otlp:
    endpoint: telemetry.example:4317
service:
  pipelines:
    traces:
      receivers: [otlp]
      processors: [memory_limiter, batch]
      exporters: [otlp]
```

Remova PII, limite cardinalidade e teste perda/backpressure antes de produção.

## Especificação de SLO

```yaml
service: checkout
window: 30d
sli:
  valid: http_requests_total{route="/checkout"}
  good: http_requests_total{route="/checkout",status=~"2.."}
objective: 99.90
policy:
  fast_burn: freeze_progressive_delivery
  exhausted: prioritize_reliability_work
```

Defina exclusões e origem de dados. O alerta deve apontar para impacto, owner,
dashboard e runbook.

## Game day

1. Registre hipótese e abort conditions.
2. Injete latência em uma dependência.
3. Observe burn rate, fila e retries.
4. Ative degradação controlada.
5. Restaure e valide integridade.
6. Compare RTO/RPO com o contrato.

O relatório preserva timeline, evidências, decisões, risco residual e ações com
dono e prazo.
