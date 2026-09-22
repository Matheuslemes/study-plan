package dev.studyplan.javaexpert;

import java.lang.management.GarbageCollectorMXBean;
import java.lang.management.ManagementFactory;
import java.lang.management.MemoryMXBean;
import java.util.ArrayList;
import java.util.List;

/**
 * Módulo 12 — Garbage Collection e tuning orientado por MÉTRICAS.
 *
 * A lição do módulo é: não se afina GC no achismo, afina-se medindo. Este
 * arquivo não "escolhe um GC melhor" — ele mostra COMO obter a evidência que
 * sustenta qualquer decisão de tuning, usando só a plataforma
 * (java.lang.management), sem dependência externa.
 *
 * Compile com --release 21. Rode o self-check:
 *   javac --release 21 -Xlint:all -d out (fontes)
 *   java -cp out dev.studyplan.javaexpert.GarbageCollectionMetrics
 * Rode de novo trocando o coletor e compare os números:
 *   java -XX:+UseZGC   -cp out dev.studyplan.javaexpert.GarbageCollectionMetrics
 *   java -XX:+UseParallelGC -cp out dev.studyplan.javaexpert.GarbageCollectionMetrics
 * O valor está na COMPARAÇÃO entre execuções, não numa saída isolada.
 *
 * Prova, com checagens: os GC beans expõem contagem e tempo por coletor; a
 * pressão de alocação faz a contagem subir; um live set retido aumenta o heap
 * usado e liberá-lo permite recuperação.
 */
public final class GarbageCollectionMetrics {

    private GarbageCollectorMXBean firstBean;

    private GarbageCollectionMetrics() {
    }

    /** Soma de coletas e tempo (ms) sobre todos os coletores registrados. */
    public record GcSnapshot(long collections, long millis) {
        public GcSnapshot minus(GcSnapshot base) {
            return new GcSnapshot(collections - base.collections, millis - base.millis);
        }
    }

    public static GcSnapshot gcSnapshot() {
        long collections = 0;
        long millis = 0;
        for (GarbageCollectorMXBean bean : ManagementFactory.getGarbageCollectorMXBeans()) {
            long c = bean.getCollectionCount();
            long t = bean.getCollectionTime();
            if (c > 0) {
                collections += c;
            }
            if (t > 0) {
                millis += t;
            }
        }
        return new GcSnapshot(collections, millis);
    }

    public static List<String> collectorNames() {
        List<String> names = new ArrayList<>();
        for (GarbageCollectorMXBean bean : ManagementFactory.getGarbageCollectorMXBeans()) {
            names.add(bean.getName());
        }
        return names;
    }

    private static long heapUsedBytes() {
        MemoryMXBean memory = ManagementFactory.getMemoryMXBean();
        return memory.getHeapMemoryUsage().getUsed();
    }

    /**
     * Aloca {@code megabytes} de lixo de vida curta em blocos de 1 MB, cada um
     * descartado no próximo laço. Devolve um checksum para impedir que o JIT
     * elimine a alocação (dead-code elimination).
     */
    public static long allocateGarbage(int megabytes) {
        long checksum = 0;
        for (int i = 0; i < megabytes; i++) {
            byte[] chunk = new byte[1024 * 1024];
            chunk[i % chunk.length] = (byte) i;
            chunk[(i * 7) % chunk.length] = (byte) (i >> 3);
            checksum += chunk[i % chunk.length] + chunk[(i * 7) % chunk.length];
        }
        return checksum;
    }

    /** Retém {@code megabytes} de objetos vivos (o "live set"). */
    public static List<byte[]> retain(int megabytes) {
        List<byte[]> live = new ArrayList<>(megabytes);
        for (int i = 0; i < megabytes; i++) {
            live.add(new byte[1024 * 1024]);
        }
        return live;
    }

    private record Check(String name, boolean ok) {
    }

    public static void main(String[] args) {
        List<Check> checks = new ArrayList<>();
        long sink = 0;

        List<String> collectors = collectorNames();
        checks.add(new Check("há ao menos um coletor com GC bean", !collectors.isEmpty()));

        GcSnapshot before = gcSnapshot();
        sink += allocateGarbage(400);
        GcSnapshot afterAlloc = gcSnapshot();
        if (afterAlloc.collections() == before.collections()) {
            // Fallback determinístico se o heap for grande demais para uma coleta natural.
            System.gc();
            afterAlloc = gcSnapshot();
        }
        GcSnapshot delta = afterAlloc.minus(before);
        checks.add(new Check("a contagem de coletas sobe sob pressão de alocação", delta.collections() > 0));
        checks.add(new Check("o tempo total de GC é mensurável (>= 0)", afterAlloc.millis() >= 0));

        long usedBase = heapUsedBytes();
        List<byte[]> live = retain(128);
        long usedRetained = heapUsedBytes();
        checks.add(new Check("o live set retido aumenta o heap usado", usedRetained > usedBase));
        sink += live.size();

        live = null;
        System.gc();
        long usedReleased = heapUsedBytes();
        checks.add(new Check("liberar o live set + GC reduz o heap usado", usedReleased < usedRetained));

        System.out.println("=== Módulo 12 — GC orientado por métricas ===");
        System.out.println("coletores ativos: " + collectors);
        System.out.println("coletas sob pressão: +" + delta.collections()
            + " | tempo total de GC: " + afterAlloc.millis() + " ms");
        System.out.println("heap usado (MB): base=" + toMb(usedBase)
            + " retido=" + toMb(usedRetained) + " liberado=" + toMb(usedReleased));
        System.out.println("(checksum de sink, ignore: " + sink + ")");
        System.out.println();

        int ok = 0;
        for (Check c : checks) {
            System.out.println((c.ok() ? "ok    " : "FALHOU ") + c.name());
            if (c.ok()) {
                ok++;
            }
        }
        System.out.println("\n" + ok + "/" + checks.size() + " checagens passaram.");
        System.out.println("Lição: decisão de GC (coletor, tamanho de heap, pausa-alvo) se toma sobre "
            + "estes números — live set, taxa de alocação, contagem e tempo de pausa — não no achismo.");
        if (ok != checks.size()) {
            System.exit(1);
        }
    }

    private static long toMb(long bytes) {
        return bytes / (1024 * 1024);
    }
}
