package dev.studyplan.javaexpert;

import java.lang.management.CompilationMXBean;
import java.lang.management.ManagementFactory;
import java.util.List;
import java.util.function.IntUnaryOperator;

/**
 * Módulo 22 — JIT: tiered compilation, inlining, escape analysis e desotimização.
 *
 * <p>Este arquivo não substitui o JMH: ele existe para tornar o efeito do JIT observável sem
 * dependência externa, e para deixar explícito por que uma medição ingênua mente.
 *
 * <h2>Flags do laboratório</h2>
 * <pre>{@code
 * java -cp out dev.studyplan.javaexpert.JitAndEscapeAnalysis                     # normal
 * java -Xint -cp out dev.studyplan.javaexpert.JitAndEscapeAnalysis               # só interpretador
 * java -XX:TieredStopAtLevel=1 -cp out ...                                       # só C1
 * java -XX:+PrintCompilation -cp out ...                                         # o que compila e desotimiza
 * java -XX:+UnlockDiagnosticVMOptions -XX:+PrintInlining -cp out ...             # o que foi inlinado
 * java -XX:-DoEscapeAnalysis -cp out ...                                         # sem scalar replacement
 * }</pre>
 * Registre os tempos e explique cada diferença. A conclusão esperada do exercício básico é que o
 * mesmo código tem três performances distintas conforme o modo de execução.
 */
public final class JitAndEscapeAnalysis {
    private static final int WARMUP_ROUNDS = 20_000;
    private static final int MEASURED_ROUNDS = 200_000;

    private JitAndEscapeAnalysis() {
    }

    /** Ponto que o escape analysis pode eliminar: o Point não escapa do método. */
    record Point(int x, int y) {
        int manhattan() {
            return Math.abs(x) + Math.abs(y);
        }
    }

    /**
     * Aloca um objeto por iteração — ou não, se o escape analysis fizer scalar replacement.
     * Compare o tempo com {@code -XX:-DoEscapeAnalysis} para ver a diferença.
     */
    public static int distanceSum(int rounds) {
        int total = 0;
        for (int i = 0; i < rounds; i++) {
            Point point = new Point(i, -i);
            total += point.manhattan();
        }
        return total;
    }

    /**
     * Call site monomórfico: o JIT vê um tipo só e inlina.
     * Passe implementações diferentes para o mesmo call site e ele vira megamórfico.
     */
    public static int applyAll(IntUnaryOperator operator, int rounds) {
        int total = 0;
        for (int i = 0; i < rounds; i++) {
            total += operator.applyAsInt(i) & 0xFF;
        }
        return total;
    }

    /**
     * Resultado de uma medição. Sem intervalo de confiança: é deliberado — o exercício expert é
     * refazer isto em JMH e mostrar que a variância importava.
     */
    public record Measurement(String label, long nanos, int checksum) {
        public double millis() {
            return nanos / 1_000_000.0;
        }
    }

    /**
     * Mede com warmup explícito. O sink existe para impedir que o JIT elimine o cálculo inteiro
     * como dead code — a armadilha que invalida a maioria dos micro-benchmarks caseiros.
     */
    public static Measurement measure(String label, IntUnaryOperator work) {
        int sink = 0;
        for (int i = 0; i < WARMUP_ROUNDS; i++) {
            sink += work.applyAsInt(i);
        }
        long start = System.nanoTime();
        for (int i = 0; i < MEASURED_ROUNDS; i++) {
            sink += work.applyAsInt(i);
        }
        long elapsed = System.nanoTime() - start;
        return new Measurement(label, elapsed, sink);
    }

    /** Tempo total gasto pelo JIT compilando, útil para explicar o custo do warmup. */
    public static long compilationMillis() {
        CompilationMXBean compilation = ManagementFactory.getCompilationMXBean();
        return compilation != null && compilation.isCompilationTimeMonitoringSupported()
            ? compilation.getTotalCompilationTime()
            : -1L;
    }

    public static void main(String[] args) {
        List<Measurement> results = List.of(
            measure("escape-analysis", rounds -> distanceSum(64)),
            measure("monomorfico", rounds -> applyAll(value -> value * 2, 64)),
            measure("bimorfico", rounds -> applyAll(rounds % 2 == 0
                ? value -> value * 2
                : value -> value + 7, 64))
        );
        results.forEach(result ->
            System.out.printf("%-18s %8.2f ms (checksum %d)%n",
                result.label(), result.millis(), result.checksum()));
        System.out.println("tempo total de compilação JIT: " + compilationMillis() + " ms");
        System.out.println("Refaça em JMH antes de tirar qualquer conclusão publicável.");
    }
}
