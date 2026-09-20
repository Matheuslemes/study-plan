-- Academia DB · módulo 22 — o otimizador por dentro
--
-- Executado e conferido em PostgreSQL 18.6. Rode bloco a bloco e LEIA a saída:
-- o objetivo não é o resultado da consulta, é a razão entre linhas estimadas e reais.
--
--   docker run -d --name pg -e POSTGRES_PASSWORD=x -p 5432:5432 postgres:18
--   psql -h localhost -U postgres -f 08-optimizer-internals.sql
--
-- RESULTADO CONFERIDO em PostgreSQL 18.6 (200.000 linhas, 10 estados, 1.000 cidades):
--
--   bloco 2 (sem estatística estendida):  rows=20   estimado  ->  200 reais   (10x menos)
--   bloco 3 (com estatística estendida):  rows=199  estimado  ->  200 reais   (exato)
--   bloco 5 (random_page_cost 4 -> 1.1):  custo 557.42 -> 205.58
--   bloco 6 (junção):                     rows=17147 estimado -> 17143 reais
--
-- Se os seus números divergirem muito, a causa costuma ser versão diferente ou
-- ANALYZE não executado. Isso também é conteúdo do módulo.

-- ---------------------------------------------------------------------------
-- 1. Cenário: duas colunas FORTEMENTE correlacionadas.
--    Toda cidade pertence a um único estado. O planner não sabe disso.
-- ---------------------------------------------------------------------------
drop table if exists customer_geo;

create table customer_geo (
  customer_id bigint generated always as identity primary key,
  state_code  text not null,
  city        text not null,
  status      text not null
);

-- 10 estados x 100 cidades. O nome da cidade EMBUTE o estado: saber a cidade
-- já determina o estado. É essa dependência que o planner não enxerga sozinho.
insert into customer_geo (state_code, city, status)
select
  g.state_code,
  g.state_code || '-city-' || ((i / 10) % 100),
  case when i % 7 = 0 then 'inactive' else 'active' end
from generate_series(1, 200000) as i
cross join lateral (
  select (array['SP','RJ','MG','RS','PR','BA','SC','GO','PE','CE'])[1 + (i % 10)]
         as state_code
) as g;

create index ix_geo_state_city on customer_geo (state_code, city);
analyze customer_geo;

-- Confira que o cenário é o esperado antes de seguir:
select count(*) as total,
       count(distinct state_code) as estados,
       count(distinct city) as cidades,
       count(*) filter (where state_code = 'SP' and city = 'SP-city-7') as alvo
from customer_geo;

-- ---------------------------------------------------------------------------
-- 2. A subestimativa. Procure "rows=" estimado versus "actual rows=".
--
--    O planner multiplica as seletividades como se as colunas fossem
--    independentes: P(estado) x P(cidade) = 0.1 x 0.001 = 0.0001, ou ~20 linhas.
--    Na realidade a cidade JÁ IMPLICA o estado, então a seletividade real é a
--    da cidade sozinha: ~200 linhas. Erro de uma ordem de grandeza.
-- ---------------------------------------------------------------------------
explain (analyze, buffers, format text)
select count(*)
from customer_geo
where state_code = 'SP'
  and city = 'SP-city-7';

-- ---------------------------------------------------------------------------
-- 3. A correção: contar ao planner que as colunas são dependentes.
--    Repare que a CONSULTA NÃO MUDA. Quem muda é a estatística.
-- ---------------------------------------------------------------------------
create statistics stx_geo_state_city (dependencies, ndistinct)
  on state_code, city from customer_geo;

analyze customer_geo;

explain (analyze, buffers, format text)
select count(*)
from customer_geo
where state_code = 'SP'
  and city = 'SP-city-7';

-- Compare a linha "rows=" das duas execuções. A estimativa deve ter se
-- aproximado do valor real. Registre os dois números como evidência.

-- ---------------------------------------------------------------------------
-- 4. O que o ANALYZE guardou. Esta é a matéria-prima de toda decisão do planner.
-- ---------------------------------------------------------------------------
select attname,
       n_distinct,
       null_frac,
       correlation,
       array_length(most_common_vals::text::text[], 1) as qtd_mcv
from pg_stats
where tablename = 'customer_geo'
order by attname;

-- Estatística estendida: o que foi calculado sobre o PAR de colunas.
select stxname,
       stxkeys,
       (stxdndistinct is not null) as tem_ndistinct,
       (stxddependencies is not null) as tem_dependencies
from pg_statistic_ext
join pg_statistic_ext_data on oid = stxoid
where stxname = 'stx_geo_state_city';

-- ---------------------------------------------------------------------------
-- 5. Modelo de custo: o padrão presume disco rotacional.
--
--    random_page_cost = 4 significa "acesso aleatório custa 4x o sequencial".
--    Em SSD isso está mais perto de 1.1. Manter o padrão enviesa o planner
--    CONTRA índices — um viés herdado de hardware de outra década.
-- ---------------------------------------------------------------------------
select name, setting, unit, boot_val
from pg_settings
where name in ('seq_page_cost','random_page_cost','effective_cache_size',
               'default_statistics_target','jit','geqo_threshold')
order by name;

-- Veja a escolha mudar só com o parâmetro de custo:
explain (costs on, format text)
select * from customer_geo where state_code = 'SP' and city = 'SP-city-3';

set random_page_cost = 1.1;   -- valor realista para SSD

explain (costs on, format text)
select * from customer_geo where state_code = 'SP' and city = 'SP-city-3';

reset random_page_cost;

-- ---------------------------------------------------------------------------
-- 6. Ordem de junção: o espaço de busca cresce rápido.
--
--    Acima de geqo_threshold (padrão 12 relações) o planner troca a busca
--    exaustiva por heurística genética, e o plano deixa de ser determinístico.
-- ---------------------------------------------------------------------------
drop table if exists city_region;
create table city_region (
  city   text primary key,
  region text not null
);
insert into city_region
select distinct city, left(city, 2) from customer_geo;
analyze city_region;

explain (analyze, buffers, format text)
select r.region, count(*)
from customer_geo c
join city_region r on r.city = c.city
where c.state_code = 'SP'
  and c.status = 'active'
group by r.region;

-- ---------------------------------------------------------------------------
-- EXERCÍCIO DO MÓDULO 22
--
-- 1. Rode os blocos 2 e 3 e registre a razão estimado/real das duas execuções.
-- 2. Explique por que a estatística estendida corrigiu SEM alterar a consulta.
-- 3. Encontre no SEU sistema uma consulta cuja estimativa erre mais de 10x e
--    identifique a origem: estatística velha, correlação, n_distinct ou custo.
--
-- Critério de aceite: a correção elimina a causa. Se a solução foi um hint ou
-- `set enable_*= off`, a causa continua lá e o exercício não está concluído.
-- ---------------------------------------------------------------------------
