-- Academia DB · módulo 27 — ler o PostgreSQL
--
-- Executado e conferido em PostgreSQL 18.6.
--
-- O catálogo do sistema é a fonte de verdade em runtime: tudo que uma
-- ferramenta de monitoramento mostra, ela leu daqui. Saber consultá-lo
-- diretamente é o que permite diagnosticar sem depender de ferramenta.

-- ---------------------------------------------------------------------------
-- 1. Versão e configuração de compilação
-- ---------------------------------------------------------------------------
select version();
select name, setting, source, sourcefile
from pg_settings
where source not in ('default', 'override')
order by name;

-- ---------------------------------------------------------------------------
-- 2. O que o ANALYZE guardou sobre uma tabela.
--    Esta é a matéria-prima de toda decisão do planner (módulo 22).
-- ---------------------------------------------------------------------------
select tablename, attname, n_distinct, null_frac, avg_width, correlation
from pg_stats
where schemaname = 'public'
order by tablename, attname
limit 20;

-- ---------------------------------------------------------------------------
-- 3. Bloat e manutenção — sem ferramenta externa.
--    n_dead_tup alto com last_autovacuum antigo é o sinal clássico.
-- ---------------------------------------------------------------------------
select relname,
       n_live_tup,
       n_dead_tup,
       case when n_live_tup > 0
            then round(100.0 * n_dead_tup / n_live_tup, 1)
            else 0 end as pct_morto,
       last_autovacuum,
       last_autoanalyze,
       autovacuum_count
from pg_stat_user_tables
order by n_dead_tup desc
limit 10;

-- ---------------------------------------------------------------------------
-- 4. Índices que ninguém usa: custam escrita e espaço, e não pagam leitura.
-- ---------------------------------------------------------------------------
select s.relname as tabela,
       s.indexrelname as indice,
       s.idx_scan as vezes_usado,
       pg_size_pretty(pg_relation_size(s.indexrelid)) as tamanho,
       i.indisunique as e_unico
from pg_stat_user_indexes s
join pg_index i on i.indexrelid = s.indexrelid
where s.idx_scan = 0
  and not i.indisprimary
order by pg_relation_size(s.indexrelid) desc
limit 10;

-- Um índice com idx_scan = 0 é candidato a remoção — a menos que sustente uma
-- constraint, ou que exista para uma consulta rara e crítica. Verifique antes.

-- ---------------------------------------------------------------------------
-- 5. Onde o tempo está sendo gasto (exige shared_preload_libraries)
-- ---------------------------------------------------------------------------
select exists (
  select 1 from pg_available_extensions where name = 'pg_stat_statements'
) as pg_stat_statements_disponivel;

-- Quando habilitada:
--   select query, calls, round(total_exec_time::numeric, 1) as ms_total,
--          round(mean_exec_time::numeric, 2) as ms_medio, rows
--   from pg_stat_statements order by total_exec_time desc limit 20;

-- ---------------------------------------------------------------------------
-- 6. Extensibilidade: o mecanismo que faz o Postgres ser o que é.
--    pgvector (módulo 26) é uma EXTENSÃO, não um fork. É por isso que ele
--    existe, e é por isso que ele herda transação, backup e replicação de graça.
-- ---------------------------------------------------------------------------
select name, default_version, installed_version, comment
from pg_available_extensions
where installed_version is not null
order by name;

-- Pontos de extensão previstos pela arquitetura:
select typname as tipos_definidos_por_extensao
from pg_type t
join pg_depend d on d.objid = t.oid and d.deptype = 'e'
limit 10;

-- ---------------------------------------------------------------------------
-- 7. Locks vivos agora — o começo de toda investigação de travamento.
-- ---------------------------------------------------------------------------
select a.pid,
       a.state,
       a.wait_event_type,
       a.wait_event,
       l.locktype,
       l.mode,
       l.granted,
       left(a.query, 60) as query
from pg_locks l
join pg_stat_activity a on a.pid = l.pid
where not l.granted
order by a.pid;

-- Vazio é o esperado num banco ocioso. Guarde a consulta: em incidente, ela é
-- a primeira coisa a rodar.

-- ---------------------------------------------------------------------------
-- ROTEIRO DE LEITURA DO CÓDIGO-FONTE (módulo 27)
--
-- Os READMEs dentro de src/backend são o material mais subestimado do projeto:
-- explicam decisões de PROJETO que não estão na documentação do usuário.
--
--   src/backend/access/nbtree/README      -> B-tree: concorrência e divisão de página
--   src/backend/access/heap/README.HOT    -> HOT updates: por que nem todo UPDATE
--                                            reescreve o índice
--   src/backend/storage/buffer/README     -> buffer pool e política de substituição
--   src/backend/optimizer/README          -> como o plano é construído
--   src/backend/utils/adt/selfuncs.c      -> as funções de seletividade do módulo 22
--   src/backend/access/transam/README     -> MVCC, xid e visibilidade
--
-- As quatro perguntas, para cada leitura:
--   1. Isso é documentado (contrato) ou é implementação (pode mudar)?
--   2. Qual problema a decisão resolve?
--   3. O que ela cobra em troca?
--   4. Muda alguma coisa no meu sistema?
--
-- Onde procurar o PORQUÊ: o arquivo da lista pgsql-hackers. Quase toda decisão
-- não óbvia foi debatida lá, e o arquivo é público e pesquisável.
--
-- EXERCÍCIO: pegue uma crença sua sobre o PostgreSQL que nunca foi verificada
-- ("índice sempre ajuda", "UPDATE reescreve a linha inteira", "vacuum trava a
-- tabela"), confronte com a documentação e com o código, e registre o resultado.
-- ---------------------------------------------------------------------------
