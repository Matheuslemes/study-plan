# IA gerenciada: construir ou comprar — artefato do módulo 26

> A decisão é de arquitetura: custo unitário, latência, controle e dependência.
> A construção do sistema de IA em si é a **trilha de IA**; a fronteira de
> permissão do agente é a **trilha de Arquitetura, módulo 25**.

## 1. As três opções

| | Serviço gerenciado de inferência | Plataforma de ML | Construir |
| --- | --- | --- | --- |
| Tempo até o primeiro valor | dias | semanas | meses |
| Controle sobre o modelo | nenhum | total | total |
| Versão do modelo muda | **sem você pedir** | quando você quiser | quando você quiser |
| Custo | por token/requisição | por hora de endpoint | infra + equipe |
| Equipe necessária | engenharia de software | + ciência de dados | + infraestrutura de ML |
| Dependência de fornecedor | alta | média | baixa |

## 2. O critério, em ordem

1. **O modelo é diferencial competitivo?** Se não, gerenciado.
2. **O volume justifica infraestrutura dedicada?** Faça a conta do item 3.
3. **A latência cabe no SLO?** Meça, não estime.
4. **O dado pode sair do seu perímetro?** Isso pode encerrar a discussão.
5. **Existe porta de saída?** Se a resposta for não, o preço é maior do que parece.

## 3. A conta que decide

```
Custo por requisição = (tokens_entrada  × preço_entrada)
                     + (tokens_saída    × preço_saída)
                     + (passos_do_agente × custo_médio_por_passo)

Custo mensal = custo_por_requisição × requisições_por_mês
```

Preencha e projete para doze meses:

| Métrica | Hoje | Projeção 12m |
| --- | --- | --- |
| Requisições/mês | | |
| Tokens médios de entrada | | |
| Tokens médios de saída | | |
| Passos médios (se agente) | | |
| **Custo por requisição** | | |
| **Custo mensal** | | |
| Ponto em que endpoint dedicado fica mais barato | | |

> Endpoint dedicado cobra por **tempo provisionado**, não por uso. Sob carga
> intermitente isso inverte a conta; sob carga constante e alta, ele ganha.
> Há um ponto de cruzamento — encontre o seu.

## 4. Os cinco controles obrigatórios

Antes de inferência no caminho crítico:

- [ ] **Teto de tokens** por requisição, e de passos se houver agente
- [ ] **Timeout menor que o SLO** — o serviço não sabe do seu SLO
- [ ] **Fallback determinístico** para indisponibilidade ou degradação
- [ ] **Custo por requisição medido e alarmado** (não custo total mensal)
- [ ] **Avaliação automatizada** antes de qualquer troca de prompt ou modelo

Sem o quinto, uma atualização de versão do modelo é um deploy sem teste — e você
não controla quando ela acontece.

## 5. Fronteira de permissão

Se houver agente com acesso a ferramentas internas:

| Controle | Regra |
| --- | --- |
| Identidade | IAM com a identidade do **usuário final**, nunca credencial de serviço ampla |
| Escopo | o agente não pode fazer o que o usuário não poderia |
| Ação irreversível | exige confirmação humana |
| Valor | limite por operação e acumulado |
| Conteúdo externo | tratado como **dado**, nunca como instrução |
| Auditoria | entrada, proposta, decisão e ação executada, correlacionadas |

Detalhamento na trilha de Arquitetura, módulo 25 (ADR 0007).

## 6. Porta de saída

| Pergunta | Resposta |
| --- | --- |
| Os prompts estão versionados fora do fornecedor? | |
| O conjunto de avaliação é nosso e portável? | |
| A interface de chamada está atrás de uma abstração própria? | |
| Quanto tempo levaria trocar de fornecedor? | |
| O dado de treino/ajuste é nosso e exportável? | |

Não precisa ser fácil sair. Precisa ser **conhecido** o custo de sair.

## 7. O incidente típico

> Sumarização em produção sem teto de tokens. Um cliente envia documentos
> grandes e o custo diário multiplica por doze. Ninguém percebe até o fechamento,
> porque o alarme era sobre custo **mensal**, não sobre custo **por requisição**.

Correção: teto de tokens, truncamento explícito com aviso ao usuário, e alarme
sobre custo unitário. O sinal precisa chegar no dia, não no mês.

## 8. Exercício

1. Meça o custo por requisição de um caso real e projete doze meses.
2. Implemente os cinco controles do item 4 e prove o comportamento com o
   provedor indisponível.
3. Escreva o ADR comparando as três opções — inclusive a de **não usar IA**,
   que precisa constar como alternativa avaliada.
