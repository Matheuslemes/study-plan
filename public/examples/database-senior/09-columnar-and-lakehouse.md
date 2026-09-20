# Colunar, vetorizado e lakehouse — artefato do módulo 23

> Formato de evidência. Os números do seu sistema entram no lugar dos exemplos;
> o que se copia é o **método de decisão**, não a conclusão.

## 1. A pergunta que decide o formato

| Pergunta | Linha (OLTP) | Coluna (OLAP) |
| --- | --- | --- |
| A consulta lê a linha inteira? | sim | não, poucas colunas |
| Escreve um registro por vez? | sim | não, em lote |
| Filtra por chave? | sim | não, varre e agrega |
| Precisa do dado agora? | sim | tolera atraso |

Se as respostas caem todas na coluna da direita e ainda assim o relatório roda no
banco transacional, o problema é o formato — não o tamanho da máquina.

## 2. Por que colunar é mais rápido para agregar

Três efeitos, nesta ordem de importância:

1. **Lê só o necessário.** Somar uma coluna num formato de linha lê a linha inteira.
   Numa tabela de 40 colunas, agregar uma lê ~40× mais bytes do que precisa.
2. **Comprime muito melhor.** Valores do mesmo tipo e domínio ficam adjacentes.
   Compressão de 5–10× é comum, e menos bytes lidos é menos I/O antes de qualquer CPU.
3. **Pula blocos inteiros.** O Parquet guarda mín/máx por row group; um filtro fora
   da faixa descarta o bloco sem ler. É um índice implícito e barato.

A **execução vetorizada** vem depois: processar lotes em vez de uma linha por vez
amortiza o custo por linha e usa melhor o cache da CPU. É a mesma ideia do módulo 22
da trilha de Java, em outro domínio.

## 3. Medição a fazer (exercício básico)

```sql
-- No PostgreSQL: agregando uma coluna de uma tabela larga
explain (analyze, buffers)
select date_trunc('month', occurred_at) as mes, sum(amount)
from ledger_entry
where occurred_at >= now() - interval '18 months'
group by 1;
```

```sql
-- Em DuckDB, sobre o mesmo dado exportado para Parquet
select date_trunc('month', occurred_at) as mes, sum(amount)
from 'ledger/*.parquet'
where occurred_at >= now() - interval '18 months'
group by 1;
```

Registre nesta tabela:

| Métrica | PostgreSQL (linha) | Parquet + DuckDB (coluna) |
| --- | --- | --- |
| Tempo | | |
| Bytes lidos | | |
| Impacto na carga operacional | concorre | nenhum |
| Latência do dado | zero | definir |

A última linha é a que costuma ser esquecida, e é a única que o negócio percebe.

## 4. Particionamento e poda

```
ledger/
  ano=2026/mes=01/part-0.parquet
  ano=2026/mes=02/part-0.parquet
  ...
```

Uma consulta com `where ano = 2026 and mes = 3` lê **um** arquivo. Sem particionamento,
lê todos. Meça os arquivos lidos com e sem o filtro — é o exercício aplicado.

**Small files problem:** particionar demais cria milhares de arquivos pequenos, e o
custo passa a ser abrir arquivo, não ler dado. A regra prática é alvo de 128–512 MB
por arquivo; compacte quando ficar abaixo disso.

## 5. Lakehouse: o que o formato de tabela acrescenta

Parquet sozinho é um monte de arquivos. Um formato de tabela (Iceberg) adiciona:

| Recurso | Para que serve |
| --- | --- |
| Snapshot e time travel | ler o estado de ontem; reproduzir um relatório |
| Escrita atômica | leitor nunca vê escrita pela metade |
| Evolução de esquema | adicionar coluna sem reescrever o histórico |
| Evolução de partição | mudar o particionamento sem reprocessar tudo |

Isso custa um catálogo e um processo de manutenção (compactação, expiração de
snapshot). Não adote antes de ter volume que justifique.

## 6. O gatilho de migração (exercício expert)

O ADR precisa dizer **quando** mover, com número:

- [ ] Métrica escolhida (ex.: p95 do relatório, ou % de CPU do banco em carga analítica)
- [ ] Limiar que dispara a migração
- [ ] Latência de dado acordada com a área de negócio, por escrito
- [ ] Como reconciliar número analítico com número operacional, e com que frequência
- [ ] Custo dos dois lados: continuar no operacional × operar o pipeline
- [ ] Caminho de volta

## 7. O erro mais comum

Montar lakehouse porque é a arquitetura da moda, com 20 GB de dados que caberiam
confortavelmente numa réplica de leitura. O custo de operar o pipeline, garantir
reconciliação e explicar a divergência de números supera qualquer ganho nessa escala.

**A resposta "continua no operacional, com réplica de leitura" é legítima** e precisa
constar do ADR como alternativa avaliada — com o número que a sustenta.
