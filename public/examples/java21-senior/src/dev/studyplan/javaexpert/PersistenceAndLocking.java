package dev.studyplan.javaexpert;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.locks.ReentrantLock;

/**
 * Módulo 17 — Persistência, transações, locking e eficiência.
 *
 * Sem banco nem driver externo (regra da Academia). O que este arquivo modela
 * são os MECANISMOS que todo ORM/SQL expõe e que decidem correção e custo:
 *   1. lost update e como o locking OTIMISTA (coluna de versão) o impede;
 *   2. locking PESSIMISTA (lock por chave) serializando o acesso;
 *   3. o problema N+1 e como o fetch em lote o elimina — medido em nº de queries.
 *
 * Compile com --release 21. Self-check:
 *   java -cp out dev.studyplan.javaexpert.PersistenceAndLocking
 */
public final class PersistenceAndLocking {

    private PersistenceAndLocking() {
    }

    /** Linha versionada, como uma entidade com @Version. */
    public record Account(long id, long balanceCents, long version) {
    }

    public static final class OptimisticLockException extends RuntimeException {
        private static final long serialVersionUID = 1L;

        public OptimisticLockException(String message) {
            super(message);
        }
    }

    /** Store em memória com update condicionado à versão (compare-and-set na linha). */
    public static final class AccountStore {
        private final Map<Long, Account> rows = new LinkedHashMap<>();
        private final Map<Long, ReentrantLock> locks = new LinkedHashMap<>();
        private int writes;

        public synchronized void insert(Account account) {
            rows.put(account.id(), account);
            locks.put(account.id(), new ReentrantLock());
        }

        public synchronized Account read(long id) {
            return rows.get(id);
        }

        /** Update SEM checagem de versão: sobrescreve cegamente (permite lost update). */
        public synchronized void blindUpdate(long id, long newBalanceCents) {
            Account current = rows.get(id);
            rows.put(id, new Account(id, newBalanceCents, current.version() + 1));
            writes++;
        }

        /** Update OTIMISTA: só grava se a versão esperada ainda for a atual. */
        public synchronized Account compareAndSet(long id, long expectedVersion, long newBalanceCents) {
            Account current = rows.get(id);
            if (current.version() != expectedVersion) {
                throw new OptimisticLockException(
                    "linha " + id + " mudou: esperava v" + expectedVersion + ", era v" + current.version());
            }
            Account next = new Account(id, newBalanceCents, current.version() + 1);
            rows.put(id, next);
            writes++;
            return next;
        }

        public ReentrantLock lockFor(long id) {
            return locks.get(id);
        }

        public synchronized int writes() {
            return writes;
        }
    }

    /**
     * Dois processos leem a MESMA versão e debitam. Sem controle de concorrência,
     * o segundo write sobrescreve o primeiro: um débito some (lost update).
     * Devolve o saldo final observado.
     */
    public static long lostUpdate(long startCents, long debitA, long debitB) {
        AccountStore store = new AccountStore();
        store.insert(new Account(1, startCents, 0));
        Account readByA = store.read(1);
        Account readByB = store.read(1);
        store.blindUpdate(1, readByA.balanceCents() - debitA);
        store.blindUpdate(1, readByB.balanceCents() - debitB);
        return store.read(1).balanceCents();
    }

    /**
     * Mesma corrida, mas o segundo write usa compareAndSet e falha; o processo
     * relê e reaplica. Nenhum débito é perdido. Devolve o saldo final correto.
     */
    public static long optimisticRetry(long startCents, long debitA, long debitB) {
        AccountStore store = new AccountStore();
        store.insert(new Account(1, startCents, 0));
        Account readByA = store.read(1);
        Account readByB = store.read(1);
        store.compareAndSet(1, readByA.version(), readByA.balanceCents() - debitA);
        try {
            store.compareAndSet(1, readByB.version(), readByB.balanceCents() - debitB);
        } catch (OptimisticLockException expected) {
            Account fresh = store.read(1); // relê a versão nova e reaplica
            store.compareAndSet(1, fresh.version(), fresh.balanceCents() - debitB);
        }
        return store.read(1).balanceCents();
    }

    /** Locking pessimista sob threads reais: o lock por chave serializa os débitos. */
    public static long pessimisticConcurrent(long startCents, int threads, long debitEach) throws InterruptedException {
        AccountStore store = new AccountStore();
        store.insert(new Account(1, startCents, 0));
        List<Thread> workers = new ArrayList<>();
        for (int i = 0; i < threads; i++) {
            Thread t = new Thread(() -> {
                ReentrantLock lock = store.lockFor(1);
                lock.lock();
                try {
                    Account current = store.read(1);
                    store.blindUpdate(1, current.balanceCents() - debitEach);
                } finally {
                    lock.unlock();
                }
            });
            workers.add(t);
            t.start();
        }
        for (Thread t : workers) {
            t.join();
        }
        return store.read(1).balanceCents();
    }

    // --- N+1: um repositório que conta "idas ao banco" -----------------------

    public record Order(long id, long customerId) {
    }

    public record Customer(long id, String name) {
    }

    public static final class QueryCountingRepo {
        private final Map<Long, Customer> customers = new LinkedHashMap<>();
        private final List<Order> orders = new ArrayList<>();
        private int queries;

        public void seed(int nOrders) {
            for (int i = 1; i <= nOrders; i++) {
                customers.put((long) i, new Customer(i, "cliente-" + i));
                orders.add(new Order(1000 + i, i));
            }
        }

        public List<Order> findAllOrders() {
            queries++;
            return List.copyOf(orders);
        }

        public Customer findCustomer(long id) {
            queries++;
            return customers.get(id);
        }

        public Map<Long, Customer> findCustomers(List<Long> ids) {
            queries++; // uma única query com IN (...)
            Map<Long, Customer> result = new LinkedHashMap<>();
            for (Long id : ids) {
                result.put(id, customers.get(id));
            }
            return result;
        }

        public int queries() {
            return queries;
        }
    }

    /** Acesso ingênuo: 1 query pelos pedidos + 1 por pedido para o cliente = N+1. */
    public static int naiveNPlusOne(int nOrders) {
        QueryCountingRepo repo = new QueryCountingRepo();
        repo.seed(nOrders);
        for (Order order : repo.findAllOrders()) {
            Customer c = repo.findCustomer(order.customerId());
            if (c == null) {
                throw new IllegalStateException("cliente ausente");
            }
        }
        return repo.queries();
    }

    /** Acesso em lote: 1 query pelos pedidos + 1 query IN(...) pelos clientes = 2. */
    public static int batchedFetch(int nOrders) {
        QueryCountingRepo repo = new QueryCountingRepo();
        repo.seed(nOrders);
        List<Order> orders = repo.findAllOrders();
        List<Long> ids = new ArrayList<>();
        for (Order o : orders) {
            ids.add(o.customerId());
        }
        Map<Long, Customer> byId = repo.findCustomers(ids);
        for (Order o : orders) {
            if (byId.get(o.customerId()) == null) {
                throw new IllegalStateException("cliente ausente");
            }
        }
        return repo.queries();
    }

    private record Check(String name, boolean ok) {
    }

    public static void main(String[] args) throws InterruptedException {
        List<Check> checks = new ArrayList<>();

        long lost = lostUpdate(1000, 100, 200);
        checks.add(new Check("lost update: o débito de A some (saldo 800, correto seria 700)", lost == 800));

        long safe = optimisticRetry(1000, 100, 200);
        checks.add(new Check("locking otimista + retry preserva os dois débitos (700)", safe == 700));

        long pessimistic = pessimisticConcurrent(1000, 8, 50);
        checks.add(new Check("locking pessimista sob 8 threads: sem débito perdido (600)", pessimistic == 600));

        int n = 50;
        int naive = naiveNPlusOne(n);
        checks.add(new Check("acesso ingênuo faz N+1 queries (" + (n + 1) + ")", naive == n + 1));

        int batched = batchedFetch(n);
        checks.add(new Check("fetch em lote faz 2 queries", batched == 2));

        System.out.println("=== Módulo 17 — Persistência, transações e locking ===");
        System.out.println("lost update (sem controle): saldo final " + lost + " (correto seria 700 — o débito de A sumiu)");
        System.out.println("otimista + retry: saldo final " + safe);
        System.out.println("pessimista (8 threads x 50): saldo final " + pessimistic);
        System.out.println("N+1: " + naive + " queries  ×  lote: " + batched + " queries (N=" + n + ")");
        System.out.println();

        int ok = 0;
        for (Check c : checks) {
            System.out.println((c.ok() ? "ok    " : "FALHOU ") + c.name());
            if (c.ok()) {
                ok++;
            }
        }
        System.out.println("\n" + ok + "/" + checks.size() + " checagens passaram.");
        System.out.println("Lição: correção sob concorrência vem de versão (otimista) ou lock (pessimista); "
            + "eficiência vem de não transformar 1 intenção em N+1 idas ao banco.");
        if (ok != checks.size()) {
            System.exit(1);
        }
    }
}
