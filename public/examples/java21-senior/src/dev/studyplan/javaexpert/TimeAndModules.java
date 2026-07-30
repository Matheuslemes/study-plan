package dev.studyplan.javaexpert;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Objects;

public final class TimeAndModules {
    private TimeAndModules() {
    }

    public static boolean expired(Instant createdAt, Duration ttl, Clock clock) {
        Objects.requireNonNull(createdAt, "createdAt");
        Objects.requireNonNull(ttl, "ttl");
        Objects.requireNonNull(clock, "clock");
        if (ttl.isNegative()) {
            throw new IllegalArgumentException("ttl must not be negative");
        }
        return !clock.instant().isBefore(createdAt.plus(ttl));
    }

    public static Instant localScheduleToInstant(
        int year,
        int month,
        int day,
        int hour,
        ZoneId zone
    ) {
        Objects.requireNonNull(zone, "zone");
        return ZonedDateTime.of(year, month, day, hour, 0, 0, 0, zone).toInstant();
    }
}
