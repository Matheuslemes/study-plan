-- Academia DB · módulos 5, 7, 8 e 13
-- O índice segue o contrato: igualdade por tenant/status e ordem temporal.

create index concurrently if not exists ix_ledger_tenant_status_time
  on ledger_entry (account_id, occurred_at desc)
  include (amount, idempotency_key);

analyze ledger_entry;

explain (analyze, buffers, wal, settings, format json)
select entry_id, amount, occurred_at, idempotency_key
from ledger_entry
where account_id = 101
  and occurred_at < timestamptz '2026-07-28T00:00:00Z'
order by occurred_at desc
limit 50;

-- Janela: saldo acumulado preserva cada lançamento.
select entry_id,
       amount,
       occurred_at,
       sum(amount) over (
         partition by account_id
         order by occurred_at, entry_id
         rows between unbounded preceding and current row
       ) as running_balance
from ledger_entry
where account_id = 101
order by occurred_at, entry_id;

