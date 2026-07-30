# Evidência 02 — aplicação endurecida

## Objetivo

Evoluir o mesmo produto com identidade, autorização e controles de interpretação.

## Testes mínimos

- Token com `issuer`, `audience`, tempo ou tipo incorreto é rejeitado.
- Usuário A não acessa objeto, campo, função ou tenant de B.
- Payload de SQL, shell, template e HTML permanece dado.
- Ação sensível não aceita CSRF e conteúdo ativo não executa.
- Cliente de webhook não alcança loopback, rede privada, metadata ou redirect proibido.

## Critério observável

Cada classe possui PoC mínima em laboratório autorizado, correção e regressão automatizada. O relatório explicita
pré-condições, causa raiz, impacto, limite da mitigação e risco residual.
