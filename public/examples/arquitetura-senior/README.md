# Arquitetura Sênior — artefatos de exemplo

Este diretório reúne os artefatos verificáveis produzidos ao longo da Academia de
Arquitetura: registros de decisão (ADRs), modelo C4 e notas de trade-off. Servem
como evidência auditável — a mesma exigida nos critérios de conclusão da trilha.

## Estrutura

- `adr/` — Architecture Decision Records numerados (contexto, decisão, consequências).
- `c4/` — modelo C4 em texto (contexto, contêineres, componentes).
- `formal/` — especificação formal verificável (módulo 20).
- `testing/` — simulação determinística e runbook de game day (módulos 21 e 22).
- `cells/` — topologia celular e cálculo de raio de impacto (módulo 23).
- `papers/` — roteiro de leitura dos papers fundadores (módulo 24).

## Fronteira — módulos 19 a 25

| Módulo | Artefato | O que ele exige de você |
| --- | --- | --- |
| 19 | `adr/0006-event-sourcing-scope.md` | decidir **por contexto**, e saber recusar |
| 20 | `formal/OrderSaga.tla` | rodar o TLC e ler o contraexemplo |
| 21 | `testing/deterministic-simulation.md` | um defeito real travado por semente |
| 22 | `testing/game-day-runbook.md` | hipótese escrita **antes** do experimento |
| 23 | `cells/cell-topology.md` | raio de impacto em número de clientes |
| 24 | `papers/reading-list.md` | uma decisão sua que mudou por causa de um paper |
| 25 | `adr/0007-agent-boundary.md` | fronteira de permissão testada contra injeção |

### O que está e o que não está verificado

- **Verificado:** a matemática de shuffle sharding em `cells/cell-topology.md` foi calculada
  diretamente de C(n,k), não estimada. Reproduza antes de usar em decisão — inclusive ela.
- **Não verificado:** `formal/OrderSaga.tla` **não foi executado no TLC** (não há TLA+
  instalado neste repositório). Rodar o verificador — e confirmar que a especificação está
  correta — é o exercício aplicado do módulo 20.
- Os demais são gabaritos de formato: o conteúdo é ilustrativo e precisa ser substituído
  pelos números e pelo contexto do seu sistema.

## Como usar

Cada módulo da Academia aponta para um artefato deste diretório como exemplo do
formato de evidência esperado. Copie o formato, não o conteúdo: a decisão precisa
refletir o seu contexto real, com trade-offs explícitos e um caminho de reversão.

> Estes arquivos são gabaritos de formato. A nota de domínio vem da decisão que
> você defende em architecture review, não da leitura.
