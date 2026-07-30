package dev.studyplan.javaexpert;

import java.util.Objects;

public final class DomainModeling {
    private DomainModeling() {
    }

    public sealed interface PaymentResult permits Approved, Rejected {
    }

    public record Approved(String authorization) implements PaymentResult {
        public Approved {
            if (authorization == null || authorization.isBlank()) {
                throw new IllegalArgumentException("authorization is required");
            }
        }
    }

    public record Rejected(String reason) implements PaymentResult {
        public Rejected {
            if (reason == null || reason.isBlank()) {
                throw new IllegalArgumentException("reason is required");
            }
        }
    }

    public static String message(PaymentResult result) {
        Objects.requireNonNull(result, "result");
        return switch (result) {
            case Approved(String authorization) -> "approved:" + authorization;
            case Rejected(String reason) -> "rejected:" + reason;
        };
    }

    public enum OrderStatus {
        CREATED,
        PAID,
        SHIPPED,
        CANCELLED
    }

    public static OrderStatus transition(OrderStatus current, String command) {
        Objects.requireNonNull(current, "current");
        Objects.requireNonNull(command, "command");
        return switch (current) {
            case CREATED -> switch (command) {
                case "pay" -> OrderStatus.PAID;
                case "cancel" -> OrderStatus.CANCELLED;
                default -> throw invalid(current, command);
            };
            case PAID -> switch (command) {
                case "ship" -> OrderStatus.SHIPPED;
                case "cancel" -> OrderStatus.CANCELLED;
                default -> throw invalid(current, command);
            };
            case SHIPPED, CANCELLED -> throw invalid(current, command);
        };
    }

    private static IllegalStateException invalid(OrderStatus current, String command) {
        return new IllegalStateException("command %s is invalid for %s".formatted(command, current));
    }
}
