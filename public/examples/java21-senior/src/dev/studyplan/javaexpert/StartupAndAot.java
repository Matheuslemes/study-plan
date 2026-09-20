package dev.studyplan.javaexpert;

import java.lang.management.ClassLoadingMXBean;
import java.lang.management.CompilationMXBean;
import java.lang.management.ManagementFactory;
import java.lang.management.RuntimeMXBean;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Módulo 24 — startup e AOT: CDS, Leyden, Native Image e CRaC.
 *
 * <p>A decisão deste módulo depende de números, e os números precisam vir do processo real. Esta
 * classe instrumenta o próprio startup para que o exercício tenha baseline em vez de impressão.
 *
 * <h2>Exercício básico: JVM padrão versus AppCDS</h2>
 * <pre>{@code
 * # 1. baseline
 * java -cp out dev.studyplan.javaexpert.StartupAndAot
 *
 * # 2. gravar o arquivo CDS a partir de uma execução real
 * java -XX:ArchiveClassesAtExit=app.jsa -cp out dev.studyplan.javaexpert.StartupAndAot
 *
 * # 3. reutilizar
 * java -XX:SharedArchiveFile=app.jsa -cp out dev.studyplan.javaexpert.StartupAndAot
 * }</pre>
 * Rode cinco vezes cada e compare as medianas — uma execução única não é medição.
 *
 * <h2>Leitura do resultado</h2>
 * <ul>
 *   <li><b>classes carregadas</b> cai pouco com CDS, mas o custo por classe cai: o trabalho de
 *       parsing e verificação já foi feito.</li>
 *   <li><b>tempo de compilação JIT</b> não é eliminado por CDS — só por AOT/Native Image, e aí o
 *       preço é o pico.</li>
 *   <li>numa imagem nativa os três números perdem o sentido: não há class loading nem JIT em runtime.
 *       É exatamente esse o trade-off que o módulo pede para medir.</li>
 * </ul>
 */
public final class StartupAndAot {
    private StartupAndAot() {
    }

    /** Fotografia do custo de inicialização do processo atual. */
    public record StartupProfile(long uptimeMillis,
                                 long loadedClasses,
                                 long totalLoadedClasses,
                                 long jitCompilationMillis,
                                 boolean sharingEnabled) {

        public Map<String, Object> asRow() {
            Map<String, Object> row = new LinkedHashMap<>();
            row.put("uptime_ms", uptimeMillis);
            row.put("classes_carregadas", loadedClasses);
            row.put("classes_total", totalLoadedClasses);
            row.put("jit_ms", jitCompilationMillis);
            row.put("class_data_sharing", sharingEnabled);
            return row;
        }
    }

    public static StartupProfile profile() {
        RuntimeMXBean runtime = ManagementFactory.getRuntimeMXBean();
        ClassLoadingMXBean classLoading = ManagementFactory.getClassLoadingMXBean();
        CompilationMXBean compilation = ManagementFactory.getCompilationMXBean();
        long jitMillis = compilation != null && compilation.isCompilationTimeMonitoringSupported()
            ? compilation.getTotalCompilationTime()
            : -1L;
        boolean sharing = runtime.getInputArguments().stream()
            .anyMatch(argument -> argument.contains("SharedArchiveFile")
                || argument.contains("ArchiveClassesAtExit"));
        return new StartupProfile(
            runtime.getUptime(),
            classLoading.getLoadedClassCount(),
            classLoading.getTotalLoadedClassCount(),
            jitMillis,
            sharing);
    }

    /**
     * Carga sintética para dar ao JIT algo real para compilar. Sem isso, medir "startup" mede
     * apenas o custo de subir a JVM vazia, que não é o que o SLO de readiness observa.
     */
    public static int warmupWorkload(int rounds) {
        int checksum = 0;
        for (int i = 0; i < rounds; i++) {
            checksum += JitAndEscapeAnalysis.distanceSum(32);
        }
        return checksum;
    }

    public static void main(String[] args) {
        int checksum = warmupWorkload(2_000);
        StartupProfile profile = profile();
        profile.asRow().forEach((key, value) -> System.out.printf("%-22s %s%n", key, value));
        System.out.println("checksum (evita dead code elimination): " + checksum);
        System.out.println("Registre a mediana de cinco execuções antes de comparar modos.");
    }
}
