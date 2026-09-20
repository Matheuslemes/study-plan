package dev.studyplan.javaexpert;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

/**
 * Módulo 26 — ler o OpenJDK: da dúvida ao código-fonte.
 *
 * <p>Este arquivo produz a evidência empírica; a explicação tem de vir da leitura da implementação.
 * O exercício básico é: rodar, observar, depois abrir {@code java.util.HashMap} no repositório do
 * OpenJDK e explicar o que se viu — citando o código, não um blog.
 *
 * <h2>O que ler, e onde</h2>
 * <ul>
 *   <li>{@code src/java.base/share/classes/java/util/HashMap.java} — procure {@code TREEIFY_THRESHOLD},
 *       {@code UNTREEIFY_THRESHOLD}, {@code MIN_TREEIFY_CAPACITY} e o método {@code treeifyBin}.</li>
 *   <li>O mesmo arquivo, método {@code hash(Object)} — por que o hash é espalhado com um XOR do
 *       deslocamento de 16 bits.</li>
 *   <li>{@code ConcurrentHashMap} — compare a estratégia de contenção com a do {@code HashMap}.</li>
 * </ul>
 *
 * <h2>A distinção que o módulo cobra</h2>
 * A treeificação é <b>implementação</b>, não <b>contrato</b>. A documentação de {@link HashMap} não
 * promete O(log n) no pior caso, nem promete ordem de iteração. Depender do que se leu no código é
 * o erro que este módulo existe para evitar: leia para diagnosticar, não para assumir.
 */
public final class ReadingTheJdk {
    private ReadingTheJdk() {
    }

    /**
     * Chave com hashCode constante: todas caem no mesmo bucket.
     * É o que torna a treeificação observável — e é também como se constrói um ataque de colisão.
     */
    public record CollidingKey(int id) implements Comparable<CollidingKey> {
        @Override
        public int hashCode() {
            return 42;
        }

        @Override
        public int compareTo(CollidingKey other) {
            return Integer.compare(id, other.id);
        }
    }

    /**
     * Insere n chaves que colidem e devolve o mapa. Acima do limiar de treeificação (8 nós no bucket,
     * com capacidade mínima de 64), o bucket deixa de ser lista encadeada e vira árvore rubro-negra —
     * o que exige que as chaves sejam {@link Comparable} para o desempate funcionar bem.
     */
    public static Map<CollidingKey, Integer> buildCollidingMap(int size) {
        Map<CollidingKey, Integer> map = new HashMap<>();
        for (int i = 0; i < size; i++) {
            map.put(new CollidingKey(i), i);
        }
        return map;
    }

    /** Lookup repetido sobre o mapa colidido: a base do exercício de medição. */
    public static long lookupNanos(Map<CollidingKey, Integer> map, int rounds) {
        int size = map.size();
        long start = System.nanoTime();
        int sink = 0;
        for (int round = 0; round < rounds; round++) {
            Integer found = map.get(new CollidingKey(round % size));
            sink += found == null ? 0 : found;
        }
        long elapsed = System.nanoTime() - start;
        return sink == Integer.MIN_VALUE ? -1 : elapsed;
    }

    /**
     * Ordem de iteração: {@link HashMap} não garante nenhuma, {@link LinkedHashMap} garante a de
     * inserção e {@link TreeMap} a natural. Quem precisa de ordem escolhe a estrutura, não torce.
     */
    public static Map<String, List<String>> iterationOrder() {
        List<String> keys = List.of("delta", "alpha", "charlie", "bravo");
        Map<String, List<String>> result = new LinkedHashMap<>();
        result.put("HashMap (sem garantia)", orderOf(new HashMap<>(), keys));
        result.put("LinkedHashMap (inserção)", orderOf(new LinkedHashMap<>(), keys));
        result.put("TreeMap (natural)", orderOf(new TreeMap<>(), keys));
        return result;
    }

    private static List<String> orderOf(Map<String, Integer> map, List<String> keys) {
        for (int i = 0; i < keys.size(); i++) {
            map.put(keys.get(i), i);
        }
        return new ArrayList<>(map.keySet());
    }

    public static void main(String[] args) {
        Map<CollidingKey, Integer> small = buildCollidingMap(8);
        Map<CollidingKey, Integer> large = buildCollidingMap(2_048);
        System.out.println("8 chaves colidindo   -> " + lookupNanos(small, 200_000) + " ns");
        System.out.println("2048 chaves colidindo -> " + lookupNanos(large, 200_000) + " ns");
        System.out.println("A razão entre os dois NÃO é 256x. Explique por quê lendo treeifyBin.");
        iterationOrder().forEach((label, order) -> System.out.printf("%-26s %s%n", label, order));
    }
}
