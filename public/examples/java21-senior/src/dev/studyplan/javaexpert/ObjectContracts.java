package dev.studyplan.javaexpert;

import java.util.Comparator;
import java.util.Locale;
import java.util.Objects;
import java.util.UUID;

public final class ObjectContracts {
    private ObjectContracts() {
    }

    public record CustomerKey(String normalizedEmail) implements Comparable<CustomerKey> {
        public CustomerKey {
            Objects.requireNonNull(normalizedEmail, "normalizedEmail");
            normalizedEmail = normalizedEmail.strip().toLowerCase(Locale.ROOT);
            if (!normalizedEmail.contains("@")) {
                throw new IllegalArgumentException("invalid email");
            }
        }

        @Override
        public int compareTo(CustomerKey other) {
            return normalizedEmail.compareTo(other.normalizedEmail);
        }
    }

    public static final class Customer {
        private final UUID businessKey;
        private String displayName;

        public Customer(UUID businessKey, String displayName) {
            this.businessKey = Objects.requireNonNull(businessKey, "businessKey");
            rename(displayName);
        }

        public UUID businessKey() {
            return businessKey;
        }

        public String displayName() {
            return displayName;
        }

        public void rename(String newName) {
            if (newName == null || newName.isBlank()) {
                throw new IllegalArgumentException("displayName is required");
            }
            displayName = newName.strip();
        }

        @Override
        public boolean equals(Object other) {
            return this == other
                || other instanceof Customer customer && businessKey.equals(customer.businessKey);
        }

        @Override
        public int hashCode() {
            return businessKey.hashCode();
        }

        @Override
        public String toString() {
            return "Customer[businessKey=%s, displayName=%s]".formatted(businessKey, displayName);
        }
    }

    public static Comparator<Customer> byDisplayNameThenKey() {
        return Comparator.comparing(Customer::displayName)
            .thenComparing(Customer::businessKey);
    }
}
