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

        // Módulo 21 — o bytecode destes métodos é o objeto de estudo; aqui só travamos o comportamento.
        assert BytecodeAndAgents.concat("checkout", 2).equals("retry 2 for checkout");
        assert BytecodeAndAgents.switchOnString("stop") == 2;
        assert BytecodeAndAgents.sum(new int[] {1, 2, 3, 4}) == 10;

        // Módulo 22 — escape analysis: o resultado é determinístico, o custo é que varia com as flags.
        assert JitAndEscapeAnalysis.distanceSum(4) == 12;
        assert JitAndEscapeAnalysis.applyAll(value -> value, 4) == 6;

        // Módulo 23 — publicação com acquire/release e contagem sob contenção.
        var publication = new LowLevelMemory.SafePublication();
        assert publication.read() == null;
        publication.publish("ready");
        assert "ready".equals(publication.read());
        var casCounter = new LowLevelMemory.CasCounter();
        casCounter.increment();
        casCounter.increment();
        assert casCounter.get() == 2;
        assert LowLevelMemory.concurrentCount(4, 1_000) == 4_000;

        // Módulo 24 — o profile de startup existe e é coerente com o processo atual.
        var startup = StartupAndAot.profile();
        assert startup.loadedClasses() > 0;
        assert startup.uptimeMillis() >= 0;

        // Módulo 25 — round-trip do layout binário declarado.
        var trade = new ForeignMemoryAndVectors.Trade(7L, 1_250L, 3, (short) 1);
        var encoded = ForeignMemoryAndVectors.encode(List.of(trade));
        assert ForeignMemoryAndVectors.readTrade(encoded, 0).equals(trade);
        assert ForeignMemoryAndVectors.totalNotionalCents(encoded, 1) == 3_750L;

        // Módulo 26 — colisão total de hash: o mapa continua correto, o custo é que muda.
        var colliding = ReadingTheJdk.buildCollidingMap(64);
        assert colliding.size() == 64;
        assert colliding.get(new ReadingTheJdk.CollidingKey(63)) == 63;
        assert ReadingTheJdk.iterationOrder().get("TreeMap (natural)")
            .equals(List.of("alpha", "bravo", "charlie", "delta"));

        System.out.println("Java 21 academy examples: OK (módulos 1-26)");
    }
}
