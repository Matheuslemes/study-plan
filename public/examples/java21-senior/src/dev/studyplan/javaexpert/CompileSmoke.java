package dev.studyplan.javaexpert;

import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.Currency;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

public final class CompileSmoke {
    private CompileSmoke() {
    }

    public static void main(String[] args) throws Exception {
        var brl = Currency.getInstance("BRL");
        var subtotal = new LanguageSemantics.Money(new BigDecimal("100.00"), brl);
        assert LanguageSemantics.finalPrice(subtotal, LanguageSemantics.CustomerTier.GOLD)
            .amount().compareTo(new BigDecimal("95.00")) == 0;

        var approved = new DomainModeling.Approved("auth-1");
        assert DomainModeling.message(approved).equals("approved:auth-1");
        assert DomainModeling.transition(DomainModeling.OrderStatus.CREATED, "pay")
            == DomainModeling.OrderStatus.PAID;

        UUID key = UUID.randomUUID();
        var first = new ObjectContracts.Customer(key, "Ada");
        var renamed = new ObjectContracts.Customer(key, "Ada Lovelace");
        Set<ObjectContracts.Customer> customers = new HashSet<>();
        customers.add(first);
        customers.add(renamed);
        assert customers.size() == 1;

        List<Integer> source = List.of(1, 2, 3);
        List<Number> target = new ArrayList<>();
        GenericsAndCollections.copy(source, target);
        assert GenericsAndCollections.sum(target) == 6;

        var orders = List.of(
            new StreamsAndErrors.Order("c1", new BigDecimal("10")),
            new StreamsAndErrors.Order("c1", new BigDecimal("5"))
        );
        assert StreamsAndErrors.totalsByCustomer(orders).get("c1").compareTo(new BigDecimal("15")) == 0;

        var temporary = Files.createTempFile("java-academy-", ".csv");
        try {
            Files.writeString(temporary, "id,value\n1,ok\n", StandardCharsets.UTF_8);
            assert StreamsAndErrors.countValidRows(temporary) == 2;
        } finally {
            Files.deleteIfExists(temporary);
        }

        Instant now = Instant.parse("2026-07-27T12:00:00Z");
        Clock clock = Clock.fixed(now, ZoneOffset.UTC);
        assert TimeAndModules.expired(now.minusSeconds(61), Duration.ofMinutes(1), clock);

        assert ConcurrencyModels.countSafely(500) == 500;
        assert ConcurrencyModels.boundedIo(List.of("a", "b"), 1).equals(List.of("A", "B"));

        System.out.println("Java 21 academy examples: OK");
    }
}
