# ADR 0002 — Camadas, repository e unit of work

- Status: aceito

## Contexto
A regra de negócio estava colada ao ORM e ao HTTP; testar exigia subir um banco
real e cada mudança arriscava quebrar tudo.

## Decisão
Separar domínio, serviço e adaptadores. Introduzir repository para abstrair a
persistência e unit of work para a fronteira transacional; injetar dependências
para inverter o controle.

## Consequências
- Positivo: domínio testável sem framework, com fake em memória; testes rápidos.
- Negativo: mais indireção e código de composição.
- Limite: não aplicar todas as camadas a CRUD trivial.
