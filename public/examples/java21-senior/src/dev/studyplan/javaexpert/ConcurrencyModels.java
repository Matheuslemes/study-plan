package dev.studyplan.javaexpert;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.Semaphore;
import java.util.concurrent.atomic.AtomicInteger;

public final class ConcurrencyModels {
    private ConcurrencyModels() {
    }

    public static int countSafely(int tasks) throws InterruptedException, ExecutionException {
        if (tasks < 0) {
            throw new IllegalArgumentException("tasks must not be negative");
        }
        AtomicInteger counter = new AtomicInteger();
        try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
            List<Future<?>> futures = new ArrayList<>(tasks);
            for (int index = 0; index < tasks; index++) {
                futures.add(executor.submit(counter::incrementAndGet));
            }
            for (Future<?> future : futures) {
                future.get();
            }
        }
        return counter.get();
    }

    public static List<String> boundedIo(
        List<String> requests,
        int maxConcurrency
    ) throws InterruptedException, ExecutionException {
        if (maxConcurrency < 1) {
            throw new IllegalArgumentException("maxConcurrency must be positive");
        }
        Semaphore bulkhead = new Semaphore(maxConcurrency);
        try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
            List<Future<String>> futures = new ArrayList<>(requests.size());
            for (String request : requests) {
                futures.add(executor.submit(() -> {
                    bulkhead.acquire();
                    try {
                        Thread.sleep(Duration.ofMillis(2));
                        return request.toUpperCase();
                    } finally {
                        bulkhead.release();
                    }
                }));
            }
            List<String> responses = new ArrayList<>(requests.size());
            for (Future<String> future : futures) {
                responses.add(future.get());
            }
            return List.copyOf(responses);
        }
    }
}
