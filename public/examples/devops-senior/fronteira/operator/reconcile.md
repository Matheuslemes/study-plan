# Reconciliação — artefato do módulo 21

> O CRD ao lado define o vocabulário. Este documento define o **laço**, que é a
> parte que as pessoas erram.

## A diferença que muda tudo

```
        SCRIPT (errado)                    RECONCILER (certo)
   ┌─────────────────────┐           ┌──────────────────────────┐
   │ evento: Tenant novo │           │ chave: namespace/nome    │
   └──────────┬──────────┘           └────────────┬─────────────┘
              ▼                                   ▼
   1. criar namespace                  ler estado DESEJADO (spec)
   2. criar deployment                 ler estado ATUAL (cluster)
   3. criar service                             │
   4. criar credencial  ◄── falha aqui          ▼
   5. atualizar status                  calcular a diferença
              │                                 │
              ▼                                 ▼
   estado parcial, ninguém             aplicar o próximo passo
   tenta de novo, nada avisa           convergente, idempotente
                                                │
                                                ▼
                                       requeue com backoff
                                       (até não haver diferença)
```

O reconciler **não recebe o evento** — recebe só a chave e vai ler o estado. É por
isso que perder, duplicar ou reordenar eventos não quebra nada: o próximo laço corrige.

## Esqueleto (pseudocódigo, independente de linguagem)

```
func Reconcile(ctx, chave) (resultado, erro):
    tenant = get(chave)
    se não existe:
        return ok            # já foi removido; nada a fazer

    # --- remoção: finalizer ---------------------------------------------
    se tenant.deletionTimestamp != nil:
        se tem finalizer("platform.example.com/cleanup"):
            erro = limparRecursoExterno(tenant)
            se erro != nil:
                # NÃO remove o finalizer: tenta de novo com backoff.
                # Mas registre a condition, ou o objeto trava em silêncio.
                setCondition(tenant, "Ready", False, "CleanupFailed", erro)
                return requeueApós(backoff(tenant)), nil
            removerFinalizer(tenant)
        return ok

    # --- garantir finalizer ANTES de criar qualquer coisa externa -------
    se não tem finalizer:
        adicionarFinalizer(tenant); update(tenant); return requeueImediato

    # --- convergência ----------------------------------------------------
    desejado = deploymentDesejado(tenant)      # função pura de spec
    setOwnerReference(desejado, tenant)        # GC cuida da remoção
    atual = get(desejado.chave)

    se atual não existe:
        create(desejado)
    senão se difere(atual, desejado):
        update(desejado)

    # --- status: sempre, inclusive quando nada mudou ---------------------
    tenant.status.observedGeneration = tenant.metadata.generation
    tenant.status.readyReplicas      = atual.status.readyReplicas
    setCondition(tenant, "Ready",
                 atual.status.readyReplicas == tenant.spec.replicas,
                 "ReplicasMatch", "")
    updateStatus(tenant)

    return requeueApós(5 * minuto), nil        # reconciliação periódica
```

## Os cinco erros clássicos

| Erro | Sintoma em produção | Correção |
| --- | --- | --- |
| Reconciliação não idempotente | recursos duplicados a cada laço | calcular desejado como função pura do spec |
| Requeue sem backoff | milhares de req/min no servidor de API | backoff exponencial com teto |
| Finalizer não removido em todos os caminhos | objeto preso em `Terminating` para sempre | remover em todo caminho de saída, inclusive erro permanente |
| Status só atualizado quando muda | `observedGeneration` velho, ninguém percebe | atualizar status em toda reconciliação |
| RBAC amplo "para funcionar" | operator comprometido = cluster comprometido | Role mínima, verbo a verbo |

## RBAC mínimo

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: tenant-operator
rules:
  - apiGroups: ["platform.example.com"]
    resources: ["tenants"]
    verbs: ["get", "list", "watch", "update", "patch"]
  - apiGroups: ["platform.example.com"]
    resources: ["tenants/status", "tenants/finalizers"]
    verbs: ["get", "update", "patch"]
  - apiGroups: ["apps"]
    resources: ["deployments"]
    verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
```

Repare no que **não** está aqui: `"*"` em recurso ou verbo, `secrets`, acesso a
namespaces que o operator não gerencia.

## Testes que provam que o laço funciona

- [ ] **Idempotência:** chamar `Reconcile` cinco vezes seguidas sem mudança alguma
      não deve produzir nenhuma escrita além do status.
- [ ] **Convergência:** apagar o Deployment na mão; o próximo laço deve recriá-lo.
- [ ] **Crash no meio:** matar o operator entre criar o recurso externo e atualizar
      o status; ao voltar, deve convergir sem duplicar.
- [ ] **Exclusão com falha externa:** tornar o recurso externo indisponível e
      confirmar que a exclusão tenta com backoff, registra a condition e **não**
      trava para sempre.
- [ ] **Validação:** aplicar um Tenant inválido (plano `free` com 5 réplicas) e
      confirmar que a **API** recusa, sem o controller ser acionado.

## Quando NÃO escrever um operator

- A tarefa roda uma vez → é um `Job`.
- Já existe operator maduro para o caso → use.
- O time não consegue manter um componente acoplado ao ciclo de versões do
  Kubernetes → o custo aparece na primeira atualização de cluster.
