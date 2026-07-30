-- Academia DB · módulos 1–3
-- Núcleo mínimo do ledger: fatos imutáveis, moeda explícita e invariantes no banco.

create table account (
  account_id bigint generated always as identity primary key,
  tenant_id uuid not null,
  external_id text not null,
  currency char(3) not null check (currency ~ '^[A-Z]{3}$'),
  created_at timestamptz not null default now(),
  unique (tenant_id, external_id)
);

create table ledger_entry (
  entry_id uuid primary key,
  account_id bigint not null references account(account_id),
  amount numeric(19, 4) not null check (amount <> 0),
  occurred_at timestamptz not null,
  idempotency_key text not null unique,
  metadata jsonb not null default '{}'::jsonb,
  check (jsonb_typeof(metadata) = 'object')
);

create view account_balance as
select account_id, coalesce(sum(amount), 0)::numeric(19, 4) as balance
from ledger_entry
group by account_id;

