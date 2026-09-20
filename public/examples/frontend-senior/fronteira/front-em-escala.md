# Front em escala — artefato do módulo 27

> Micro-frontends têm **um** benefício que justifica o custo: autonomia real de
> deploy. Todo o resto se resolve com módulos e regras de importação.

## 1. O teste de três perguntas

Antes de fragmentar, responda **nominalmente**:

1. Que times precisam liberar em ritmos diferentes? *(nomes, não "o time de front")*
2. Eles estão hoje bloqueados pelo deploy uns dos outros? *(evidência, não sensação)*
3. A fronteira proposta acompanha a fronteira das equipes?

Se qualquer resposta for vaga, **a resposta é monólito modular**.

| Motivo alegado | É motivo válido? | O que resolve de verdade |
| --- | :-: | --- |
| "O repositório está grande" | não | módulos e regras de importação |
| "Queremos usar outro framework" | não | o usuário paga dois runtimes |
| "O build está lento" | não | cache de build, build incremental |
| "Times bloqueiam o deploy uns dos outros" | **sim** | aí vale fragmentar |
| "Times têm ciclos de release diferentes" | **sim** | idem |

## 2. O padrão razoável: monólito modular com fronteiras verificadas

```
src/
  modulos/
    checkout/     <- pode importar de: compartilhado
    catalogo/     <- pode importar de: compartilhado
    conta/        <- pode importar de: compartilhado
  compartilhado/  <- não importa de nenhum módulo
```

A regra precisa ser **verificada pelo build**, não combinada em reunião:

```json
// Exemplo com regra de lint de fronteira — o build barra a violação.
{
  "zones": [
    { "target": "./src/modulos/checkout", "from": "./src/modulos/catalogo" },
    { "target": "./src/modulos/catalogo", "from": "./src/modulos/checkout" }
  ]
}
```

Fronteira que não é verificada por build não é fronteira — é convenção, e
convenção se dissolve na primeira sexta-feira apertada.

## 3. Se fragmentar: o orçamento é a primeira vítima

| Item | Monólito modular | 6 micro-frontends |
| --- | ---: | ---: |
| Runtime do framework | 1× | 1× *se* compartilhado |
| Biblioteca de componentes | 1× | 1×–6× |
| Utilitários (datas, i18n) | 1× | 1×–6× |
| JavaScript total | baseline | **+40% a +300%** |

Compartilhar dependência em runtime resolve o peso — **e reintroduz acoplamento
de versão**, que é exatamente o que se queria evitar. Esse trade-off não tem
saída elegante; tem escolha consciente.

### Medição obrigatória

- [ ] Peso total com **todos** os fragmentos carregados
- [ ] Dependências duplicadas identificadas por nome e versão
- [ ] Core Web Vitals com a composição completa, não fragmento a fragmento

## 4. Design system como contrato

Sem ele, autonomia produz inconsistência visível ao usuário — o custo mais caro
e o menos medido.

| Nível | O que é compartilhado |
| --- | --- |
| Tokens | cor, espaçamento, tipografia — mínimo absoluto |
| Componentes | implementação comum, versionada |
| Padrões | comportamento de formulário, erro, carregamento |

## 5. Migração incremental (strangler fig no front)

```
                    ┌──────────────┐
   usuário ───────> │   roteador   │
                    └──────┬───────┘
                 ┌─────────┴─────────┐
                 v                   v
        ┌────────────────┐   ┌────────────────┐
        │  app ANTIGO    │   │  app NOVO      │
        │  /conta        │   │  /checkout     │
        │  /catalogo     │   │                │
        └────────────────┘   └────────────────┘
              ^                      ^
              └── métrica comparando os dois ──┘
```

| Etapa | Critério para avançar |
| --- | --- |
| 1 rota, tráfego interno | sem erro novo, CWV igual ou melhor |
| 1 rota, 10% do tráfego | idem, por 1 semana |
| 1 rota, 100% | idem |
| Próxima rota | repetir |

**Critério de reversão** definido antes de começar. E a regra que salva o projeto:
a primeira rota vai a produção em semanas, não em meses.

## 6. Por que reescrita completa falha

| Reescrita | Strangler |
| --- | --- |
| Valor entregue no fim | valor a cada rota |
| Versão antiga acumula mudanças | as duas convivem |
| Reverter = perder tudo | reverter = uma rota |
| Aprende-se no fim | aprende-se na primeira semana |

## 7. Decisão registrada

```
Proposta:                    fragmentar / manter modular
Times com ritmos distintos:  (nomes)
Evidência de bloqueio:       (dados, não percepção)
Peso adicional estimado:     ___ KB
Biblioteca compartilhada:    sim / não — e o acoplamento de versão aceito
Design system:               existe / a construir
Plano de migração:           rota a rota / big bang
Critério de reversão:
Revisar em:
```

## 8. Exercício

1. Desenhe as fronteiras de **deploy** reais e as de **código**. Compare.
2. Meça o peso total de JavaScript com tudo carregado.
3. Escreva a justificativa de **não** fragmentar — mesmo que você defenda o
   contrário. Se ela não se sustentar, você tem seu argumento.
