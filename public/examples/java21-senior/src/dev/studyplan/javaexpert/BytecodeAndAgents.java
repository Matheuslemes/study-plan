package dev.studyplan.javaexpert;

import java.lang.instrument.ClassFileTransformer;
import java.lang.instrument.Instrumentation;
import java.security.ProtectionDomain;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.LongAdder;

/**
 * Módulo 21 — class file, bytecode e instrumentação em runtime.
 *
 * <p>O objetivo não é gerar bytecode aqui: é tornar observável a distância entre o que se escreve e o
 * que a JVM executa, e mostrar o esqueleto real de um agent — inclusive o filtro de escopo, que é o
 * detalhe que separa um agent útil de uma regressão de latência invisível.
 *
 * <h2>Laboratório de bytecode (módulo 21, exercício básico)</h2>
 * Compile e leia o bytecode dos métodos abaixo ANTES de rodar o comando. Escreva sua previsão.
 * <pre>{@code
 * javap -c -p -classpath out dev.studyplan.javaexpert.BytecodeAndAgents
 * }</pre>
 * O que procurar em cada um:
 * <ul>
 *   <li>{@link #concat(String, int)} — não há {@code StringBuilder}. Desde o Java 9 o compilador emite
 *       {@code invokedynamic} para {@code StringConcatFactory}, que escolhe a estratégia no primeiro uso.</li>
 *   <li>{@link #lambda()} — a lambda não vira classe anônima no class file; vira {@code invokedynamic}
 *       ligado por {@code LambdaMetafactory}, com o corpo em um método sintético {@code lambda$...}.</li>
 *   <li>{@link #switchOnString(String)} — dois switches: um sobre {@code hashCode}, outro sobre o índice.</li>
 *   <li>{@link #sum(int[])} — o {@code for-each} sobre array não usa {@code Iterator}; é um loop indexado.</li>
 * </ul>
 *
 * <h2>Empacotar o agent (módulo 21, exercício aplicado)</h2>
 * <pre>{@code
 * # MANIFEST.MF
 * Premain-Class: dev.studyplan.javaexpert.BytecodeAndAgents$TimingAgent
 * Can-Retransform-Classes: true
 *
 * jar --create --file agent.jar --manifest MANIFEST.MF -C out .
 * java -javaagent:agent.jar=dev/studyplan -cp out dev.studyplan.javaexpert.CompileSmoke
 * }</pre>
 */
public final class BytecodeAndAgents {
    private BytecodeAndAgents() {
    }

    /** Leia o bytecode: não existe {@code StringBuilder} aqui. */
    public static String concat(String name, int attempt) {
        return "retry " + attempt + " for " + name;
    }

    /** Leia o bytecode: {@code invokedynamic} + método sintético, não classe anônima. */
    public static Runnable lambda() {
        return () -> {
        };
    }

    /** Leia o bytecode: dois switches encadeados, o primeiro sobre o hash. */
    public static int switchOnString(String command) {
        return switch (command) {
            case "start" -> 1;
            case "stop" -> 2;
            default -> 0;
        };
    }

    /** Leia o bytecode: for-each sobre array é loop indexado, sem {@code Iterator}. */
    public static int sum(int[] values) {
        int total = 0;
        for (int value : values) {
            total += value;
        }
        return total;
    }

    /**
     * Esqueleto de agent. O ponto pedagógico é o filtro de escopo: sem ele, o agent instrumenta o
     * caminho quente inteiro e vira a causa da regressão que deveria diagnosticar.
     */
    public static final class TimingAgent {
        private TimingAgent() {
        }

        public static void premain(String agentArgs, Instrumentation instrumentation) {
            String scope = agentArgs == null || agentArgs.isBlank() ? "dev/studyplan" : agentArgs.strip();
            instrumentation.addTransformer(new ScopedTransformer(scope), true);
            Runtime.getRuntime().addShutdownHook(new Thread(ScopedTransformer::report, "agent-report"));
        }
    }

    /**
     * Transformer que apenas conta classes candidatas. A reescrita real de bytecode exige a Class-File
     * API (JEP 484, final no JDK 24) ou ASM — nenhuma das duas disponível num exemplo {@code --release 21}
     * sem dependência externa. O que importa aqui é o contrato: escopo explícito e custo mensurável.
     */
    public static final class ScopedTransformer implements ClassFileTransformer {
        private static final Map<String, LongAdder> SEEN = new ConcurrentHashMap<>();
        private final String packagePrefix;

        public ScopedTransformer(String packagePrefix) {
            this.packagePrefix = packagePrefix;
        }

        @Override
        public byte[] transform(ClassLoader loader,
                                String className,
                                Class<?> classBeingRedefined,
                                ProtectionDomain protectionDomain,
                                byte[] classfileBuffer) {
            if (className != null && className.startsWith(packagePrefix)) {
                SEEN.computeIfAbsent(className, key -> new LongAdder()).increment();
            }
            // null = não transformar. Devolver bytes inválidos aqui falharia só no linking, em runtime.
            return null;
        }

        public static Map<String, LongAdder> seen() {
            return Map.copyOf(SEEN);
        }

        static void report() {
            SEEN.forEach((className, count) ->
                System.out.println("[agent] " + className + " visto " + count.sum() + "x"));
        }
    }
}
