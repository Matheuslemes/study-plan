package dev.studyplan.javaexpert;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * Módulo 20 — DDD, arquitetura hexagonal e monólito modular.
 *
 * A tese do módulo é testável: o DOMÍNIO não conhece infraestrutura. Ele fala
 * com o mundo por PORTAS (interfaces) e a infraestrutura entra como ADAPTADORES
 * plugáveis. Aqui, em Java puro:
 *   - value objects com invariante (Money não aceita negativo);
 *   - agregado Order que protege seus invariantes (não muda depois de enviado);
 *   - evento de domínio (OrderShipped);
 *   - portas OrderRepository / EventPublisher e adaptadores em memória;
 *   - o MESMO domínio roda com adaptadores diferentes (prova da inversão).
 *
 * Compile com --release 21. Self-check:
 *   java -cp out dev.studyplan.javaexpert.HexagonalArchitecture
 */
public final class HexagonalArchitecture {

    private HexagonalArchitecture() {
    }

    // --- Domínio (sem framework, sem I/O) ------------------------------------

    /** Value object: imutável, com invariante e igualdade por valor. */
    public record Money(BigDecimal amount, String currency) {
        public Money {
            if (amount == null || currency == null) {
                throw new IllegalArgumentException("valor e moeda são obrigatórios");
            }
            if (amount.signum() < 0) {
                throw new IllegalArgumentException("Money não pode ser negativo: " + amount);
            }
        }

        public static Money of(String amount, String currency) {
            return new Money(new BigDecimal(amount), currency);
        }

        public Money plus(Money other) {
            if (!currency.equals(other.currency)) {
                throw new IllegalArgumentException("moedas diferentes: " + currency + " != " + other.currency);
            }
            return new Money(amount.add(other.amount), currency);
        }
    }

    public record OrderLine(String sku, int quantity, Money unitPrice) {
        public OrderLine {
            if (quantity <= 0) {
                throw new IllegalArgumentException("quantidade deve ser positiva");
            }
        }

        public Money subtotal() {
            return new Money(unitPrice.amount().multiply(BigDecimal.valueOf(quantity)), unitPrice.currency());
        }
    }

    public enum OrderStatus { OPEN, SHIPPED }

    /** Evento de domínio. */
    public record OrderShipped(String orderId, Money total) {
    }

    /** Agregado: guarda os próprios invariantes; ninguém muda seu estado por fora. */
    public static final class Order {
        private final String id;
        private final String currency;
        private final List<OrderLine> lines = new ArrayList<>();
        private OrderStatus status = OrderStatus.OPEN;

        public Order(String id, String currency) {
            this.id = id;
            this.currency = currency;
        }

        public String id() {
            return id;
        }

        public OrderStatus status() {
            return status;
        }

        public void addLine(OrderLine line) {
            if (status != OrderStatus.OPEN) {
                throw new IllegalStateException("pedido " + id + " já enviado — não aceita novas linhas");
            }
            if (!line.unitPrice().currency().equals(currency)) {
                throw new IllegalArgumentException("linha em moeda diferente do pedido");
            }
            lines.add(line);
        }

        public Money total() {
            Money sum = new Money(BigDecimal.ZERO, currency);
            for (OrderLine line : lines) {
                sum = sum.plus(line.subtotal());
            }
            return sum;
        }

        public OrderShipped ship() {
            if (lines.isEmpty()) {
                throw new IllegalStateException("pedido vazio não pode ser enviado");
            }
            if (status == OrderStatus.SHIPPED) {
                throw new IllegalStateException("pedido já enviado");
            }
            status = OrderStatus.SHIPPED;
            return new OrderShipped(id, total());
        }
    }

    // --- Portas (o domínio depende destas interfaces, não de infra) ----------

    public interface OrderRepository {
        void save(Order order);

        Optional<Order> byId(String id);
    }

    public interface EventPublisher {
        void publish(Object event);
    }

    // --- Adaptadores (infra plugável) ----------------------------------------

    public static final class InMemoryOrderRepository implements OrderRepository {
        private final Map<String, Order> store = new LinkedHashMap<>();

        @Override
        public void save(Order order) {
            store.put(order.id(), order);
        }

        @Override
        public Optional<Order> byId(String id) {
            return Optional.ofNullable(store.get(id));
        }
    }

    public static final class CollectingEventPublisher implements EventPublisher {
        private final List<Object> events = new ArrayList<>();

        @Override
        public void publish(Object event) {
            events.add(event);
        }

        public List<Object> events() {
            return events;
        }
    }

    /** Decorador de porta: mesmo contrato, comportamento acrescido (conta chamadas). */
    public static final class CountingRepository implements OrderRepository {
        private final OrderRepository delegate;
        private int saves;

        public CountingRepository(OrderRepository delegate) {
            this.delegate = delegate;
        }

        @Override
        public void save(Order order) {
            saves++;
            delegate.save(order);
        }

        @Override
        public Optional<Order> byId(String id) {
            return delegate.byId(id);
        }

        public int saves() {
            return saves;
        }
    }

    // --- Serviço de aplicação (orquestra domínio + portas) -------------------

    public static final class OrderService {
        private final OrderRepository repository;
        private final EventPublisher publisher;

        public OrderService(OrderRepository repository, EventPublisher publisher) {
            this.repository = repository;
            this.publisher = publisher;
        }

        public Money shipOrder(String id) {
            Order order = repository.byId(id).orElseThrow(() -> new IllegalArgumentException("pedido inexistente: " + id));
            OrderShipped event = order.ship();
            repository.save(order);
            publisher.publish(event);
            return event.total();
        }
    }

    private record Check(String name, boolean ok) {
    }

    public static void main(String[] args) {
        List<Check> checks = new ArrayList<>();

        // Value object protege invariante.
        boolean rejectedNegative = false;
        try {
            Money.of("-1.00", "BRL");
        } catch (IllegalArgumentException e) {
            rejectedNegative = true;
        }
        checks.add(new Check("Money rejeita valor negativo", rejectedNegative));
        checks.add(new Check("Money tem igualdade por valor",
            Money.of("10.00", "BRL").equals(Money.of("10.00", "BRL"))));

        // Agregado calcula total e protege invariante de estado.
        InMemoryOrderRepository repo = new InMemoryOrderRepository();
        CollectingEventPublisher publisher = new CollectingEventPublisher();
        Order order = new Order("o-1", "BRL");
        order.addLine(new OrderLine("A", 2, Money.of("50.00", "BRL")));
        order.addLine(new OrderLine("B", 1, Money.of("30.00", "BRL")));
        repo.save(order);
        checks.add(new Check("total do pedido = 130.00", order.total().amount().compareTo(new BigDecimal("130.00")) == 0));

        OrderService service = new OrderService(repo, publisher);
        Money shippedTotal = service.shipOrder("o-1");
        checks.add(new Check("serviço envia e devolve o total", shippedTotal.amount().compareTo(new BigDecimal("130.00")) == 0));
        checks.add(new Check("evento OrderShipped foi publicado",
            publisher.events().size() == 1 && publisher.events().get(0) instanceof OrderShipped));

        boolean rejectedAfterShip = false;
        try {
            order.addLine(new OrderLine("C", 1, Money.of("10.00", "BRL")));
        } catch (IllegalStateException e) {
            rejectedAfterShip = true;
        }
        checks.add(new Check("agregado recusa nova linha após enviado", rejectedAfterShip));

        // Inversão de dependência: MESMO domínio, adaptador trocado (decorador).
        CountingRepository counting = new CountingRepository(new InMemoryOrderRepository());
        CollectingEventPublisher publisher2 = new CollectingEventPublisher();
        Order order2 = new Order("o-2", "BRL");
        order2.addLine(new OrderLine("A", 1, Money.of("99.00", "BRL")));
        counting.save(order2);
        OrderService service2 = new OrderService(counting, publisher2);
        service2.shipOrder("o-2");
        checks.add(new Check("domínio roda igual com outro adaptador (decorador contou 2 saves)",
            counting.saves() == 2 && publisher2.events().size() == 1));

        System.out.println("=== Módulo 20 — Hexagonal e DDD ===");
        System.out.println("pedido o-1 total: " + order.total().amount() + " " + order.total().currency()
            + " | status: " + order.status());
        System.out.println("eventos publicados (adaptador A): " + publisher.events());
        System.out.println("saves no repositório decorado (adaptador B): " + counting.saves());
        System.out.println();

        int ok = 0;
        for (Check c : checks) {
            System.out.println((c.ok() ? "ok    " : "FALHOU ") + c.name());
            if (c.ok()) {
                ok++;
            }
        }
        System.out.println("\n" + ok + "/" + checks.size() + " checagens passaram.");
        System.out.println("Lição: o domínio protege invariantes e não conhece infra; portas invertem a "
            + "dependência, e trocar o adaptador não toca no domínio — é o que torna o núcleo testável.");
        if (ok != checks.size()) {
            System.exit(1);
        }
    }
}
