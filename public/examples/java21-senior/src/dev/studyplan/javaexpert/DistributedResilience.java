package dev.studyplan.javaexpert;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Semaphore;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.LongSupplier;
import java.util.function.Supplier;

/**
 * Módulo 18 — Sistemas distribuídos, mensageria e resiliência.
 *
 * Toda chamada remota falha; o que separa um serviço frágil de um resiliente
 * são padrões, não esperança. Aqui, em Java puro e determinístico (relógio
 * injetado, sem sleep real), estão os quatro que mais aparecem:
 *   - Circuit Breaker (fecha o circuito para não martelar um dependente caído);
 *   - Retry com backoff exponencial + jitter (dentro de um orçamento);
 *   - Idempotência por chave (mensageria entrega "pelo menos uma vez");
 *   - Bulkhead (isola concorrência para uma falha não afundar tudo).
 *
 * Compile com --release 21. Self-check:
 *   java -cp out dev.studyplan.javaexpert.DistributedResilience
 */
public final class DistributedResilience {

    private DistributedResilience() {
    }

    public static final class CircuitOpenException extends RuntimeException {
        private static final long serialVersionUID = 1L;

        public CircuitOpenException(String message) {
            super(message);
        }
    }

    public enum State { CLOSED, OPEN, HALF_OPEN }

    /**
     * Circuit breaker com relógio injetado (nanos) para ser testável sem sleep.
     * Abre após {@code failureThreshold} falhas seguidas; enquanto aberto,
     * rejeita rápido; após {@code openNanos}, deixa passar UMA tentativa
     * (HALF_OPEN) e fecha no sucesso ou reabre na falha.
     */
    public static final class CircuitBreaker {
        private final int failureThreshold;
        private final long openNanos;
        private final LongSupplier clock;
        private State state = State.CLOSED;
        private int consecutiveFailures;
        private long openedAt;

        public CircuitBreaker(int failureThreshold, long openNanos, LongSupplier clock) {
            this.failureThreshold = failureThreshold;
            this.openNanos = openNanos;
            this.clock = clock;
        }

        public State state() {
            return state;
        }

        public <T> T call(Supplier<T> action) {
            if (state == State.OPEN) {
                if (clock.getAsLong() - openedAt >= openNanos) {
                    state = State.HALF_OPEN;
                } else {
                    throw new CircuitOpenException("circuito aberto — rejeitando rápido");
                }
            }
            try {
                T result = action.get();
                onSuccess();
                return result;
            } catch (CircuitOpenException e) {
                throw e;
            } catch (RuntimeException failure) {
                onFailure();
                throw failure;
            }
        }

        private void onSuccess() {
            consecutiveFailures = 0;
            state = State.CLOSED;
        }

        private void onFailure() {
            consecutiveFailures++;
            if (state == State.HALF_OPEN || consecutiveFailures >= failureThreshold) {
                state = State.OPEN;
                openedAt = clock.getAsLong();
            }
        }
    }

    /** Backoff exponencial com teto e jitter determinístico (semente fixa). */
    public static long backoffNanos(int attempt, long baseNanos, long capNanos, long seed) {
        long exp = baseNanos << Math.min(attempt, 32);
        long ceiling = Math.min(exp, capNanos);
        long jitter = Math.floorMod(seed * 2862933555777941757L + attempt, ceiling + 1);
        return jitter; // "full jitter": uniforme em [0, ceiling]
    }

    /**
     * Executa {@code action} até {@code maxAttempts}; conta as tentativas.
     * Devolve quantas tentativas foram necessárias (ou lança a última falha).
     */
    public static int retry(int maxAttempts, Supplier<Boolean> action) {
        RuntimeException last = null;
        for (int attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                if (Boolean.TRUE.equals(action.get())) {
                    return attempt;
                }
            } catch (RuntimeException e) {
                last = e;
            }
        }
        if (last != null) {
            throw last;
        }
        throw new IllegalStateException("esgotou " + maxAttempts + " tentativas sem sucesso");
    }

    /** Consumidor idempotente: entrega "at-least-once", processamento "exactly-once" por id. */
    public static final class IdempotentConsumer {
        private final Set<String> processed = new HashSet<>();
        private final AtomicInteger effects = new AtomicInteger();

        public void handle(String messageId) {
            if (!processed.add(messageId)) {
                return; // duplicata: ignora
            }
            effects.incrementAndGet(); // efeito colateral real acontece uma vez
        }

        public int effects() {
            return effects.get();
        }
    }

    /** Bulkhead: limita chamadas concorrentes; excedente é rejeitado (não enfileira sem limite). */
    public static final class Bulkhead {
        private final Semaphore permits;

        public Bulkhead(int maxConcurrent) {
            this.permits = new Semaphore(maxConcurrent);
        }

        public boolean tryAcquire() {
            return permits.tryAcquire();
        }

        public void release() {
            permits.release();
        }
    }

    private record Check(String name, boolean ok) {
    }

    public static void main(String[] args) {
        List<Check> checks = new ArrayList<>();

        // Relógio virtual: avançamos o tempo à mão, sem dormir.
        final long[] now = {0L};
        LongSupplier clock = () -> now[0];
        long openNanos = 1_000_000_000L; // 1s virtual
        CircuitBreaker breaker = new CircuitBreaker(3, openNanos, clock);

        Supplier<String> alwaysFails = () -> {
            throw new RuntimeException("dependente caiu");
        };
        int failures = 0;
        for (int i = 0; i < 3; i++) {
            try {
                breaker.call(alwaysFails);
            } catch (RuntimeException e) {
                failures++;
            }
        }
        checks.add(new Check("breaker abre após 3 falhas seguidas", breaker.state() == State.OPEN));

        boolean rejectedFast = false;
        try {
            breaker.call(() -> "não deveria executar");
        } catch (CircuitOpenException e) {
            rejectedFast = true;
        }
        checks.add(new Check("enquanto aberto, rejeita rápido (CircuitOpenException)", rejectedFast));

        now[0] += openNanos; // passou o cooldown
        String recovered = breaker.call(() -> "ok");
        checks.add(new Check("após o cooldown, meia-abertura fecha no sucesso",
            breaker.state() == State.CLOSED && "ok".equals(recovered)));

        // Retry: falha nas 2 primeiras, sucede na 3ª.
        AtomicInteger tries = new AtomicInteger();
        int attempts = retry(5, () -> tries.incrementAndGet() >= 3);
        checks.add(new Check("retry tem sucesso na 3ª tentativa dentro do orçamento", attempts == 3));

        // Backoff cresce e respeita o teto.
        long b1 = backoffNanos(1, 100, 10_000, 42);
        long b5 = backoffNanos(5, 100, 10_000, 42);
        long capped = backoffNanos(30, 100, 10_000, 42);
        checks.add(new Check("backoff fica dentro de [0, teto] e o teto segura o crescimento",
            b1 <= 200 && b5 <= 10_000 && capped <= 10_000));

        // Idempotência: mesma mensagem entregue 3x, efeito ocorre 1x.
        IdempotentConsumer consumer = new IdempotentConsumer();
        consumer.handle("msg-1");
        consumer.handle("msg-1");
        consumer.handle("msg-1");
        consumer.handle("msg-2");
        checks.add(new Check("consumidor idempotente aplica efeito 1x por id (2 efeitos)",
            consumer.effects() == 2));

        // Bulkhead: 2 permissões; a 3ª aquisição é rejeitada até liberar.
        Bulkhead bulkhead = new Bulkhead(2);
        boolean a1 = bulkhead.tryAcquire();
        boolean a2 = bulkhead.tryAcquire();
        boolean a3 = bulkhead.tryAcquire();
        bulkhead.release();
        boolean a4 = bulkhead.tryAcquire();
        checks.add(new Check("bulkhead admite 2, rejeita a 3ª e readmite após liberar",
            a1 && a2 && !a3 && a4));

        System.out.println("=== Módulo 18 — Resiliência em sistemas distribuídos ===");
        System.out.println("breaker: " + failures + " falhas -> " + State.OPEN
            + " -> cooldown -> " + breaker.state());
        System.out.println("retry: sucesso na tentativa " + attempts);
        System.out.println("backoff nanos: attempt1=" + b1 + " attempt5=" + b5 + " attempt30(cap)=" + capped);
        System.out.println("idempotência: efeitos=" + consumer.effects() + " (4 entregas, 2 ids)");
        System.out.println();

        int ok = 0;
        for (Check c : checks) {
            System.out.println((c.ok() ? "ok    " : "FALHOU ") + c.name());
            if (c.ok()) {
                ok++;
            }
        }
        System.out.println("\n" + ok + "/" + checks.size() + " checagens passaram.");
        System.out.println("Lição: resiliência é composição de padrões — falhar rápido (breaker), "
            + "tentar com juízo (retry+backoff), processar uma vez (idempotência) e isolar (bulkhead).");
        if (ok != checks.size()) {
            System.exit(1);
        }
    }
}
