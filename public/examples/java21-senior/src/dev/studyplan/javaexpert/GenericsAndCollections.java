package dev.studyplan.javaexpert;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.ConcurrentHashMap;

public final class GenericsAndCollections {
    private GenericsAndCollections() {
    }

    public static <T> void copy(
        Collection<? extends T> source,
        Collection<? super T> target
    ) {
        Objects.requireNonNull(source, "source");
        Objects.requireNonNull(target, "target");
        target.addAll(source);
    }

    public static int sum(List<? extends Number> values) {
        Objects.requireNonNull(values, "values");
        return values.stream().mapToInt(Number::intValue).sum();
    }

    public static final class WordCounter {
        private final Map<String, Long> counts = new ConcurrentHashMap<>();

        public long increment(String word) {
            Objects.requireNonNull(word, "word");
            return counts.merge(word, 1L, Long::sum);
        }

        public long count(String word) {
            return counts.getOrDefault(word, 0L);
        }

        public Map<String, Long> snapshot() {
            return Map.copyOf(counts);
        }
    }
}
