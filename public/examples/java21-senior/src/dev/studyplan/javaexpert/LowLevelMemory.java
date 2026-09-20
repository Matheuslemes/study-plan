package dev.studyplan.javaexpert;

import java.lang.invoke.MethodHandles;
import java.lang.invoke.VarHandle;
import java.util.concurrent.atomic.LongAdder;

/**
 * Módulo 23 — VarHandle, modos de acesso, false sharing e contadores sob contenção.
 *
 * <p>Os quatro modos de acesso do {@link VarHandle} são contratos de ordenação diferentes, com
 * custos diferentes. A ordem de custo (do mais barato ao mais caro) é: plain, opaque,
 * acquire/release, volatile. Escolher o mais fraco que ainda é correto é a decisão do módulo.
 *
 * <h2>Laboratório de false sharing (exercício aplicado)</h2>
 * Compare {@link AdjacentCounters} e {@link PaddedCounters} com número crescente de threads.
 * O throughput do primeiro para de escalar porque os dois contadores caem na mesma linha de cache
 * (tipicamente 64 bytes) e cada escrita invalida a linha para o outro núcleo.
 */
public final class LowLevelMemory {
    private LowLevelMemory() {
    }

    /** Publicação segura com acquire/release: mais barato que volatile e suficiente aqui. */
    public static final class SafePublication {
        private static final VarHandle READY;
        private static final VarHandle PAYLOAD;

        static {
            try {
                MethodHandles.Lookup lookup = MethodHandles.lookup();
                READY = lookup.findVarHandle(SafePublication.class, "ready", boolean.class);
                PAYLOAD = lookup.findVarHandle(SafePublication.class, "payload", String.class);
            } catch (ReflectiveOperationException cause) {
                throw new ExceptionInInitializerError(cause);
            }
        }

        @SuppressWarnings("unused")
        private String payload;
        @SuppressWarnings("unused")
        private boolean ready;

        /** Escreve o dado e depois publica a flag: setRelease garante essa ordem. */
        public void publish(String value) {
            PAYLOAD.set(this, value);
            READY.setRelease(this, true);
        }

        /** Lê a flag e só então o dado: getAcquire garante que o dado já está visível. */
        public String read() {
            return (boolean) READY.getAcquire(this) ? (String) PAYLOAD.get(this) : null;
        }
    }

    /** Contador com CAS explícito: degrada sob alta contenção porque o loop repete. */
    public static final class CasCounter {
        private static final VarHandle VALUE;

        static {
            try {
                VALUE = MethodHandles.lookup().findVarHandle(CasCounter.class, "value", long.class);
            } catch (ReflectiveOperationException cause) {
                throw new ExceptionInInitializerError(cause);
            }
        }

        private volatile long value;

        public void increment() {
            long current;
            do {
                current = (long) VALUE.getVolatile(this);
            } while (!VALUE.compareAndSet(this, current, current + 1));
        }

        public long get() {
            return (long) VALUE.getVolatile(this);
        }
    }

    /** Dois contadores adjacentes: candidatos a false sharing. */
    public static final class AdjacentCounters {
        private final CasCounter first = new CasCounter();
        private final CasCounter second = new CasCounter();

        public CasCounter first() {
            return first;
        }

        public CasCounter second() {
            return second;
        }
    }

    /**
     * Padding manual para separar os contadores em linhas de cache distintas.
     * {@code @Contended} faria o mesmo, mas exige {@code -XX:-RestrictContended} e o módulo jdk.internal.
     * Só vale depois de medir: padding gasta memória por instância.
     */
    public static final class PaddedCounters {
        private final CasCounter first = new CasCounter();
        @SuppressWarnings("unused")
        private long p1, p2, p3, p4, p5, p6, p7;
        private final CasCounter second = new CasCounter();

        public CasCounter first() {
            return first;
        }

        public CasCounter second() {
            return second;
        }
    }

    /**
     * Soma concorrente com LongAdder: troca leitura instantânea por células separadas.
     * É a resposta correta para contador de alta frequência e leitura rara.
     */
    public static long concurrentCount(int threads, int incrementsPerThread) throws InterruptedException {
        LongAdder adder = new LongAdder();
        Thread[] workers = new Thread[threads];
        for (int i = 0; i < threads; i++) {
            workers[i] = new Thread(() -> {
                for (int n = 0; n < incrementsPerThread; n++) {
                    adder.increment();
                }
            }, "adder-" + i);
            workers[i].start();
        }
        for (Thread worker : workers) {
            worker.join();
        }
        return adder.sum();
    }
}
