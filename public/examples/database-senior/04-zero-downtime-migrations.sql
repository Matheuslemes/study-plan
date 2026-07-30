-- Academia DB · módulo 11
-- Exemplo expand-contract: renomear metadata para attributes sem quebrar N-1.

-- Release 1 · expand
alter table ledger_entry add column attributes jsonb;

-- Backfill reiniciável em lotes; a aplicação deve repetir até não retornar linhas.
with batch as (
  select entry_id
  from ledger_entry
  where attributes is null
  order by entry_id
  limit 1000
  for update skip locked
)
update ledger_entry target
set attributes = target.metadata
from batch
where target.entry_id = batch.entry_id
returning target.entry_id;

-- Release 2 · leitores usam attributes, escritores ainda mantêm compatibilidade.
alter table ledger_entry
  add constraint ledger_entry_attributes_object
  check (attributes is null or jsonb_typeof(attributes) = 'object')
  not valid;

alter table ledger_entry validate constraint ledger_entry_attributes_object;

-- Release 3 · contract somente após telemetria provar ausência de N-1.
-- alter table ledger_entry drop column metadata;

