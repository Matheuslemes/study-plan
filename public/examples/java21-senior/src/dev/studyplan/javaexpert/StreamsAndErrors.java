package dev.studyplan.javaexpert;

import java.io.BufferedReader;
import java.io.IOException;
import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public final class StreamsAndErrors {
    private StreamsAndErrors() {
    }

    public record Order(String customerId, BigDecimal total) {
        public Order {
            if (customerId == null || customerId.isBlank()) {
                throw new IllegalArgumentException("customerId is required");
            }
            if (total == null || total.signum() < 0) {
                throw new IllegalArgumentException("total must not be negative");
            }
        }
    }

    public static Map<String, BigDecimal> totalsByCustomer(List<Order> orders) {
        return orders.stream().collect(Collectors.toUnmodifiableMap(
            Order::customerId,
            Order::total,
            BigDecimal::add
        ));
    }

    public static long countValidRows(Path path) throws ImportException {
        try (BufferedReader reader = Files.newBufferedReader(path, StandardCharsets.UTF_8)) {
            long count = 0;
            String line;
            int lineNumber = 0;
            while ((line = reader.readLine()) != null) {
                lineNumber++;
                if (line.isBlank()) {
                    continue;
                }
                String[] fields = line.split(",", -1);
                if (fields.length != 2 || fields[0].isBlank()) {
                    throw new ImportException("invalid row at line " + lineNumber);
                }
                count++;
            }
            return count;
        } catch (IOException cause) {
            throw new ImportException("could not read " + path.getFileName(), cause);
        }
    }

    public static final class ImportException extends Exception {
        private static final long serialVersionUID = 1L;

        public ImportException(String message) {
            super(message);
        }

        public ImportException(String message, Throwable cause) {
            super(message, cause);
        }
    }
}
