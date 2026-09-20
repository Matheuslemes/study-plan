# Game day — runbook de experimento (módulo 22)

> Formato de evidência. Um experimento sem hipótese escrita **antes** não é chaos
> engineering: é sabotagem com relatório.

---

## Identificação

| Campo | Valor |
| --- | --- |
| Experimento | `GD-2026-001 — perda de uma zona de disponibilidade` |
| Sistema | checkout |
| Ambiente | produção · 5% do tráfego |
| Janela | 2026-10-14, 14h00–15h00 (baixa carga) |
| Responsável | (nome) |
| Autorização | (quem aprovou, quando, em que canal) |
| Comunicação | #incidentes avisado 24h antes e no início |

## 1. Estado estável

Métrica **de negócio**, não de infraestrutura. CPU não é estado estável.

| Métrica | Valor normal | Fonte |
| --- | --- | --- |
| Taxa de sucesso de checkout | ≥ 99,7% | dashboard `checkout/success_rate` |
| p99 de latência do checkout | ≤ 800 ms | `checkout/latency` |
| Pedidos por minuto | 400–600 nesta janela | `orders/rate` |

## 2. Hipótese

> Com a zona `A` indisponível, a taxa de sucesso de checkout **permanece acima de 99,5%**
> e o p99 **permanece abaixo de 1200 ms**, por 10 minutos consecutivos.

Falsificável, com número e prazo. Se não der para escrever assim, o experimento não está pronto.

## 3. Raio de alcance

| Dimensão | Limite |
| --- | --- |
| Tráfego afetado | 5% (uma célula) |
| Clientes | ~2.000 |
| Duração máxima | 10 minutos |
| Reversível em | < 60 segundos (script pronto e testado) |

## 4. Critério de parada

Abortar **imediatamente** se qualquer um ocorrer:

- taxa de sucesso < 99,0% por mais de 60 s
- p99 > 2000 ms por mais de 60 s
- qualquer alerta de severidade 1
- qualquer erro não previsto na lista de erros esperados
- pedido de parada de qualquer participante, sem necessidade de justificar

## 5. Procedimento

| # | Ação | Responsável | Duração |
| --- | --- | --- | --- |
| 1 | Confirmar estado estável por 10 min | operador | 10 min |
| 2 | Avisar no canal que o experimento vai começar | responsável | 1 min |
| 3 | Aplicar a falha (bloquear tráfego para a zona A) | operador | 1 min |
| 4 | Observar. **Não corrigir nada.** Anotar o que acontece | todos | 10 min |
| 5 | Reverter | operador | 1 min |
| 6 | Confirmar retorno ao estado estável | operador | 10 min |
| 7 | Debrief imediato, com todos ainda presentes | responsável | 20 min |

## 6. Resultado

| Campo | Registro |
| --- | --- |
| Hipótese confirmada? | ☐ sim ☐ não ☐ abortado |
| Taxa de sucesso mínima observada | |
| p99 máximo observado | |
| Tempo até o sistema estabilizar | |
| Alertas disparados | |
| Alertas que **deveriam** ter disparado e não dispararam | |
| O runbook existente estava correto? | |

> **Hipótese confirmada também é resultado**: converte uma crença em evidência datada.
> O experimento que nunca falha, porém, provavelmente é fácil demais.

## 7. Achados e ações

| Achado | Severidade | Ação | Dono | Prazo |
| --- | --- | --- | --- | --- |
| | | | | |

## 8. Pré-requisitos (checar antes de marcar a janela)

- [ ] Observabilidade mede o estado estável em tempo real
- [ ] SLO definido e error budget conhecido
- [ ] A mesma falha já foi exercitada em ambiente inferior
- [ ] Reversão testada, não só escrita
- [ ] Autorização registrada
- [ ] Participantes sabem que podem abortar sem justificar

> Se a observabilidade não estiver pronta, o experimento provoca a falha e **você não
> consegue medir o efeito**. Isso não é chaos engineering — é um incidente autoinfligido.
