package dev.studyplan.javaexpert;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.security.spec.KeySpec;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.crypto.Mac;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;

/**
 * Módulo 19 — Segurança, observabilidade e operação.
 *
 * Só com a plataforma (javax.crypto, java.security). Cobre o que um serviço
 * sênior precisa fazer certo por padrão:
 *   SEGURANÇA
 *     - hash de senha com sal e trabalho (PBKDF2), verificável e não reversível;
 *     - comparação em tempo constante (evita timing attack);
 *     - HMAC para integridade/autenticidade de mensagem (detecta adulteração).
 *   OBSERVABILIDADE
 *     - histograma de latência com percentis (p50/p99) — a métrica que importa;
 *     - contadores RED (Rate, Errors) e taxa de erro.
 *
 * Compile com --release 21. Self-check:
 *   java -cp out dev.studyplan.javaexpert.SecurityAndObservability
 */
public final class SecurityAndObservability {

    private static final int PBKDF2_ITERATIONS = 120_000;
    private static final int KEY_BITS = 256;
    private static final SecureRandom RANDOM = new SecureRandom();

    private SecurityAndObservability() {
    }

    public static byte[] newSalt() {
        byte[] salt = new byte[16];
        RANDOM.nextBytes(salt);
        return salt;
    }

    /** Deriva o hash da senha com PBKDF2-HMAC-SHA256 (sal + iterações). */
    public static byte[] hashPassword(char[] password, byte[] salt) {
        try {
            KeySpec spec = new PBEKeySpec(password, salt, PBKDF2_ITERATIONS, KEY_BITS);
            SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
            return factory.generateSecret(spec).getEncoded();
        } catch (Exception e) {
            throw new IllegalStateException("falha ao derivar hash", e);
        }
    }

    /** Verifica a senha em tempo constante (MessageDigest.isEqual). */
    public static boolean verifyPassword(char[] candidate, byte[] salt, byte[] expectedHash) {
        byte[] actual = hashPassword(candidate, salt);
        return MessageDigest.isEqual(actual, expectedHash);
    }

    /** HMAC-SHA256 de uma mensagem com uma chave secreta. */
    public static byte[] hmac(byte[] key, byte[] message) {
        try {
            Mac mac = Mac.getInstance("HmacSHA256");
            mac.init(new SecretKeySpec(key, "HmacSHA256"));
            return mac.doFinal(message);
        } catch (Exception e) {
            throw new IllegalStateException("falha no HMAC", e);
        }
    }

    /** Aceita a mensagem só se o HMAC recomputado bater (integridade + autenticidade). */
    public static boolean verifyHmac(byte[] key, byte[] message, byte[] tag) {
        return MessageDigest.isEqual(hmac(key, message), tag);
    }

    /** Histograma simples de latências para extrair percentis. */
    public static final class LatencyHistogram {
        private final List<Long> samples = new ArrayList<>();

        public void record(long micros) {
            samples.add(micros);
        }

        public long percentile(double p) {
            if (samples.isEmpty()) {
                return 0;
            }
            List<Long> sorted = new ArrayList<>(samples);
            sorted.sort(Long::compareTo);
            int rank = (int) Math.ceil(p / 100.0 * sorted.size()) - 1;
            rank = Math.max(0, Math.min(rank, sorted.size() - 1));
            return sorted.get(rank);
        }

        public int count() {
            return samples.size();
        }
    }

    /** Contadores RED (Rate, Errors, Duration fica no histograma). */
    public static final class RedMetrics {
        private long requests;
        private long errors;

        public void observe(boolean failed) {
            requests++;
            if (failed) {
                errors++;
            }
        }

        public double errorRate() {
            return requests == 0 ? 0.0 : (double) errors / requests;
        }

        public long requests() {
            return requests;
        }
    }

    private record Check(String name, boolean ok) {
    }

    public static void main(String[] args) {
        List<Check> checks = new ArrayList<>();

        char[] password = "s3nha-forte!".toCharArray();
        byte[] salt = newSalt();
        byte[] stored = hashPassword(password, salt);

        checks.add(new Check("senha correta verifica como verdadeira",
            verifyPassword("s3nha-forte!".toCharArray(), salt, stored)));
        checks.add(new Check("senha errada verifica como falsa",
            !verifyPassword("senha-errada".toCharArray(), salt, stored)));

        byte[] otherSalt = newSalt();
        byte[] otherHash = hashPassword("s3nha-forte!".toCharArray(), otherSalt);
        checks.add(new Check("mesma senha + sal diferente -> hash diferente",
            !Arrays.equals(stored, otherHash)));
        checks.add(new Check("hash tem 256 bits (32 bytes)", stored.length == 32));

        byte[] macKey = "chave-hmac-compartilhada".getBytes(StandardCharsets.UTF_8);
        byte[] message = "valor=1000;destino=conta-42".getBytes(StandardCharsets.UTF_8);
        byte[] tag = hmac(macKey, message);
        checks.add(new Check("HMAC aceita a mensagem íntegra", verifyHmac(macKey, message, tag)));

        byte[] tampered = "valor=9999;destino=conta-42".getBytes(StandardCharsets.UTF_8);
        checks.add(new Check("HMAC rejeita a mensagem adulterada", !verifyHmac(macKey, tampered, tag)));
        checks.add(new Check("comparação em tempo constante distingue tags diferentes",
            !MessageDigest.isEqual(tag, hmac(macKey, tampered))));

        LatencyHistogram histogram = new LatencyHistogram();
        for (int i = 1; i <= 100; i++) {
            histogram.record(i); // 1..100 micros
        }
        long p50 = histogram.percentile(50);
        long p99 = histogram.percentile(99);
        checks.add(new Check("p50 ~ 50 e p99 ~ 99 sobre 1..100", p50 == 50 && p99 == 99));

        RedMetrics red = new RedMetrics();
        for (int i = 0; i < 100; i++) {
            red.observe(i % 20 == 0); // 5 falhas em 100
        }
        checks.add(new Check("taxa de erro RED = 5%", Math.abs(red.errorRate() - 0.05) < 1e-9));

        System.out.println("=== Módulo 19 — Segurança e observabilidade ===");
        System.out.println("PBKDF2 hash (hex, 32B): " + java.util.HexFormat.of().formatHex(stored));
        System.out.println("HMAC íntegro? " + verifyHmac(macKey, message, tag)
            + " | adulterado? " + verifyHmac(macKey, tampered, tag));
        System.out.println("latência: p50=" + p50 + "us p99=" + p99 + "us (n=" + histogram.count() + ")");
        System.out.println("RED: requests=" + red.requests() + " errorRate=" + red.errorRate());
        System.out.println();

        int ok = 0;
        for (Check c : checks) {
            System.out.println((c.ok() ? "ok    " : "FALHOU ") + c.name());
            if (c.ok()) {
                ok++;
            }
        }
        System.out.println("\n" + ok + "/" + checks.size() + " checagens passaram.");
        System.out.println("Lição: senha nunca em claro (PBKDF2 + sal), comparação em tempo constante, "
            + "integridade por HMAC; e opera-se por p99 e taxa de erro, não por média.");
        if (ok != checks.size()) {
            System.exit(1);
        }
    }
}
