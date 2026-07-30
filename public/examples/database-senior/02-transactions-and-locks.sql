-- Academia DB · módulos 4 e 9
-- Execute em duas sessões e inverta a ordem das contas para reproduzir deadlock.

begin;
set local lock_timeout = '2s';
set local statement_timeout = '5s';

select account_id
from account
where account_id in (101, 202)
order by account_id
for update;

insert into ledger_entry (entry_id, account_id, amount, occurred_at, idempotency_key)
values
  (gen_random_uuid(), 101, -25.00, now(), 'transfer-9001:debit'),
  (gen_random_uuid(), 202,  25.00, now(), 'transfer-9001:credit');

commit;

-- Diagnóstico de blocker/waiter:
select blocked.pid as blocked_pid,
       blocker.pid as blocker_pid,
       blocked.query as blocked_query,
       blocker.query as blocker_query
from pg_stat_activity blocked
join pg_locks blocked_lock on blocked_lock.pid = blocked.pid and not blocked_lock.granted
join pg_locks blocker_lock
  on blocker_lock.locktype = blocked_lock.locktype
 and blocker_lock.database is not distinct from blocked_lock.database
 and blocker_lock.relation is not distinct from blocked_lock.relation
 and blocker_lock.page is not distinct from blocked_lock.page
 and blocker_lock.tuple is not distinct from blocked_lock.tuple
 and blocker_lock.granted
join pg_stat_activity blocker on blocker.pid = blocker_lock.pid;

