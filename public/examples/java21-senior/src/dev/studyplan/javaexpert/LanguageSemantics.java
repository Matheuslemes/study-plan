package dev.studyplan.javaexpert;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Currency;
import java.util.Objects;

public final class LanguageSemantics {
    private LanguageSemantics() {
    }

    public record Money(BigDecimal amount, Currency currency) {
        public Money {
            Objects.requireNonNull(amount, "amount");
            Objects.requireNonNull(currency, "currency");
            if (amount.signum() < 0) {
                throw new IllegalArgumentException("amount must not be negative");
            }
            amount = amount.setScale(currency.getDefaultFractionDigits(), RoundingMode.HALF_EVEN);
        }

        public Money add(Money other) {
            requireSameCurrency(other);
            return new Money(amount.add(other.amount), currency);
        }

        public Money percentage(BigDecimal rate) {
            Objects.requireNonNull(rate, "rate");
            return new Money(amount.multiply(rate), currency);
        }

        private void requireSameCurrency(Money other) {
            Objects.requireNonNull(other, "other");
            if (!currency.equals(other.currency)) {
                throw new IllegalArgumentException("currency mismatch");
            }
        }
    }

    public enum CustomerTier {
        STANDARD(new BigDecimal("0.00")),
        GOLD(new BigDecimal("0.05")),
        PLATINUM(new BigDecimal("0.10"));

        private final BigDecimal discount;

        CustomerTier(BigDecimal discount) {
            this.discount = discount;
        }

        public BigDecimal discount() {
            return discount;
        }
    }

    public static Money finalPrice(Money subtotal, CustomerTier tier) {
        Objects.requireNonNull(subtotal, "subtotal");
        Objects.requireNonNull(tier, "tier");
        Money discount = subtotal.percentage(tier.discount());
        return new Money(subtotal.amount().subtract(discount.amount()), subtotal.currency());
    }
}
