-- Academia DB · módulo 26 — busca vetorial no banco operacional
--
-- Executado e conferido em PostgreSQL 18.6 com pgvector 0.8.6.
--
--   docker run -d --name pg -e POSTGRES_PASSWORD=x -p 5432:5432 pgvector/pgvector:pg18
--   psql -h localhost -U postgres -f 12-vector-search.sql
--
-- RESULTADO CONFERIDO (20.000 docs, 384 dimensões, 50 clusters):
--
--   bloco 2  busca exata, sem índice ......... Seq Scan, ~6 ms
--   bloco 4  HNSW ef_search=40 ............... Index Scan, ~1 ms
--   bloco 5  curva de recall@10:
--              ef_search=10  -> 0.700
--              ef_search=20  -> 0.700
--              ef_search=40  -> 0.800
--              ef_search=100 -> 1.000
--   bloco 6a filtro após o índice ............ pediu 10, devolveu 3   <-- a armadilha
--   bloco 6b índice parcial .................. pediu 10, devolveu 10
--   bloco 7  índice completo 39 MB · parcial 10 MB · tabela 31 MB
--
-- O bloco 6a é o achado mais importante do arquivo: a consulta não deu erro,
-- não avisou nada e simplesmente devolveu menos resultados do que existem.
--
-- A geração de embeddings é assunto da trilha de IA (módulos 16 e 17). Aqui os
-- vetores são sintéticos de propósito: o que se estuda é o CUSTO DO ÍNDICE e a
-- medição de recall, que não dependem de o vetor ter significado.

create extension if not exists vector;
select extversion as pgvector_version from pg_extension where extname = 'vector';

-- ---------------------------------------------------------------------------
-- 1. Vetor é um tipo de coluna. Documento e vetor na MESMA tabela, portanto na
--    mesma transação — é isso que elimina a classe inteira de defeito de
--    dessincronização entre dois sistemas.
-- ---------------------------------------------------------------------------
drop table if exists document;

create table document (
  doc_id     bigint generated always as identity primary key,
  tenant_id  int    not null,
  status     text   not null,
  body       text   not null,
  embedding  vector(384) not null
);

-- 20.000 documentos em 50 clusters. A geração de dados de teste tem DUAS
-- armadilhas, e cair em qualquer uma invalida a medição de recall do bloco 5:
--
--   1. Aritmética modular tipo `((i * 7 + d * 13) % 1000)` COLIDE: docs i e
--      i+1000 ficam com vetores idênticos. Com empates exatos, "top 10" é
--      arbitrário e o recall vira ruído.
--
--   2. Vetores UNIFORMEMENTE aleatórios em 384 dimensões são o pior caso
--      possível para busca aproximada: por concentração de distâncias, todos
--      os pares ficam praticamente equidistantes e o recall dá ~0 em qualquer
--      ef_search. Isso não é defeito do índice — é a maldição da dimensionalidade,
--      e embeddings reais não se parecem com isso.
--
-- Embeddings reais têm estrutura de cluster. É o que reproduzimos aqui.
select setseed(0.42);

create temp table centroid as
select c as cid,
       (select array_agg(random()::real) from generate_series(1, 384))::real[] as arr
from generate_series(1, 50) as c;

insert into document (tenant_id, status, body, embedding)
select
  1 + (i % 4),
  case when i % 5 = 0 then 'archived' else 'published' end,
  'documento ' || i,
  (select array_agg((ce.arr[d] * 0.85 + random()::real * 0.15)::real)
   from generate_series(1, 384) as d)::vector(384)
from generate_series(1, 20000) as i
join centroid ce on ce.cid = 1 + (i % 50);

analyze document;

-- Confirme que não há vetores duplicados antes de medir qualquer recall:
select count(*) - count(distinct embedding::text) as vetores_duplicados
from document;

select count(*) as documentos,
       count(distinct tenant_id) as tenants,
       vector_dims(embedding) as dimensoes
from document
group by vector_dims(embedding);

-- ---------------------------------------------------------------------------
-- 2. O vetor de consulta precisa ser CONSTANTE para o índice ser usado.
--
--    Esta é a pegadinha nº 1 do pgvector: se o vetor vier de um JOIN com outra
--    tabela, o planner NÃO usa o índice HNSW — ele cai em seq scan + sort, e a
--    busca vira exata sem ninguém perceber. Capture o vetor com \gset.
-- ---------------------------------------------------------------------------
select embedding::text as qv from document where doc_id = 42 \gset

-- Referência: busca EXATA (sem índice ainda). Define o que é "certo".
explain (analyze, buffers, format text)
select doc_id
from document
order by embedding <=> :'qv'::vector
limit 10;

drop table if exists exact_top10;
create temp table exact_top10 as
select doc_id
from document
order by embedding <=> :'qv'::vector
limit 10;

-- ---------------------------------------------------------------------------
-- 3. Índice HNSW. Construção lenta e cara em memória; busca rápida.
--    `m` e `ef_construction` são decididos aqui e não mudam sem rebuild.
-- ---------------------------------------------------------------------------
create index ix_document_embedding_hnsw
  on document using hnsw (embedding vector_cosine_ops)
  with (m = 16, ef_construction = 64);

analyze document;

select pg_size_pretty(pg_relation_size('ix_document_embedding_hnsw')) as tamanho_indice,
       pg_size_pretty(pg_relation_size('document')) as tamanho_tabela;

-- ---------------------------------------------------------------------------
-- 4. Busca aproximada. CONFIRME no plano que aparece "Index Scan using
--    ix_document_embedding_hnsw". Se aparecer Seq Scan, o índice não está
--    sendo usado e todo o resto desta medição é inútil.
-- ---------------------------------------------------------------------------
set hnsw.ef_search = 40;

explain (analyze, buffers, format text)
select doc_id
from document
order by embedding <=> :'qv'::vector
limit 10;

-- ---------------------------------------------------------------------------
-- 5. MEDIR O RECALL. Sem isto, o índice é fé.
--    Recall@10 = quantos dos 10 exatos o índice aproximado devolveu.
-- ---------------------------------------------------------------------------
-- Cada ef_search é medido em UM statement separado, de propósito.
-- Envolver isto numa função com UNION ALL não funciona: o `SET` não se aplica
-- de forma confiável por chamada dentro de um único statement, e você obtém
-- uma curva sem sentido. Foi o primeiro erro cometido ao escrever este arquivo.

set hnsw.ef_search = 10;
select 10 as ef_search, round(count(*)::numeric / 10, 3) as recall
from (select doc_id from document order by embedding <=> :'qv'::vector limit 10) a
join exact_top10 using (doc_id);

set hnsw.ef_search = 20;
select 20 as ef_search, round(count(*)::numeric / 10, 3) as recall
from (select doc_id from document order by embedding <=> :'qv'::vector limit 10) a
join exact_top10 using (doc_id);

set hnsw.ef_search = 40;
select 40 as ef_search, round(count(*)::numeric / 10, 3) as recall
from (select doc_id from document order by embedding <=> :'qv'::vector limit 10) a
join exact_top10 using (doc_id);

set hnsw.ef_search = 100;
select 100 as ef_search, round(count(*)::numeric / 10, 3) as recall
from (select doc_id from document order by embedding <=> :'qv'::vector limit 10) a
join exact_top10 using (doc_id);

-- Escolha o ef_search pelo ponto em que o recall atinge o requisito, não pelo
-- padrão. Registre a curva como evidência do módulo.

-- ---------------------------------------------------------------------------
-- 6. A ARMADILHA nº 2: filtrar junto com buscar por similaridade.
--
--    O índice devolve os k vizinhos mais próximos do conjunto INTEIRO. Se o
--    filtro for aplicado depois, você pode receber menos de k — ou nenhum —
--    mesmo existindo candidatos válidos.
-- ---------------------------------------------------------------------------
set hnsw.ef_search = 40;

-- (a) filtro seletivo aplicado sobre o resultado do índice
explain (analyze, buffers, format text)
select doc_id
from document
where tenant_id = 3 and status = 'archived'
order by embedding <=> :'qv'::vector
limit 10;

-- (b) índice parcial: o filtro entra na DEFINIÇÃO do índice.
--     Resolve quando os recortes são poucos e conhecidos de antemão.
create index ix_document_emb_t3
  on document using hnsw (embedding vector_cosine_ops)
  where tenant_id = 3;

analyze document;

explain (analyze, buffers, format text)
select doc_id
from document
where tenant_id = 3
order by embedding <=> :'qv'::vector
limit 10;

-- ---------------------------------------------------------------------------
-- 7. Custo de construção e memória — o que decide se cabe no banco operacional.
-- ---------------------------------------------------------------------------
select
  pg_size_pretty(pg_total_relation_size('document')) as tabela_total,
  pg_size_pretty(pg_relation_size('ix_document_embedding_hnsw')) as hnsw_completo,
  pg_size_pretty(pg_relation_size('ix_document_emb_t3')) as hnsw_parcial,
  (select setting from pg_settings where name = 'maintenance_work_mem') as maint_work_mem;

-- ---------------------------------------------------------------------------
-- EXERCÍCIO DO MÓDULO 26
--
-- 1. Rode o bloco 5 e registre a curva recall x ef_search. Qual ef atende ao
--    seu requisito de recall, e qual a latência nesse ponto?
-- 2. Compare (a) e (b) do bloco 6: quantos resultados cada um devolveu?
-- 3. Extrapole: com 10x os documentos, o índice ainda cabe em memória?
--
-- Critério de aceite do ADR: a decisão entre pgvector e banco dedicado cita
-- recall medido, latência medida e tamanho de índice medido. Nenhum dos três
-- pode ser estimativa.
-- ---------------------------------------------------------------------------
