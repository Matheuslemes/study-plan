package dev.studyplan.javaexpert;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.List;

/**
 * Módulo 25 — dados densos, layout declarado e o caminho até a FFM API.
 *
 * <p><b>Por que não há {@code MemorySegment} aqui:</b> a Foreign Function &amp; Memory API só ficou
 * final no JDK 22 (JEP 454); no JDK 21 ela é preview, e a regra destes exemplos é não usar preview.
 * O que este arquivo ensina é a parte que não depende de versão — a diferença entre offsets mágicos
 * espalhados pelo código e um layout declarado uma vez — e deixa o caminho de migração explícito.
 *
 * <h2>Migração para FFM (JDK 22+), exercício aplicado</h2>
 * <pre>{@code
 * try (Arena arena = Arena.ofConfined()) {
 *     MemorySegment segment = arena.allocate(RECORD_BYTES * count);
 *     // ou, sem cópia, mapeando o arquivo:
 *     // MemorySegment segment = channel.map(READ_ONLY, 0, size, arena);
 *     long id = (long) ID_HANDLE.get(segment, index * RECORD_BYTES);
 * }   // aqui a memória é liberada de forma determinística; acesso posterior falha, não corrompe
 * }</pre>
 * Os dois ganhos que a FFM adiciona sobre o código abaixo: ciclo de vida explícito via {@code Arena}
 * e zero cópia ao mapear arquivo. O ganho de legibilidade já está aqui.
 */
public final class ForeignMemoryAndVectors {
    /** Layout do registro: id (8) + preço em centavos (8) + quantidade (4) + flags (2) = 22 bytes. */
    static final int OFFSET_ID = 0;
    static final int OFFSET_PRICE = 8;
    static final int OFFSET_QUANTITY = 16;
    static final int OFFSET_FLAGS = 20;
    public static final int RECORD_BYTES = 22;

    private ForeignMemoryAndVectors() {
    }

    public record Trade(long id, long priceCents, int quantity, short flags) {
        public long notionalCents() {
            return priceCents * quantity;
        }
    }

    /**
     * Abordagem frágil do módulo: offsets somados na mão no ponto de uso.
     * Está aqui como contraexemplo — é o que o exercício pede para substituir.
     */
    public static long readIdTheFragileWay(ByteBuffer buffer, int index) {
        return buffer.getLong(index * 22 + 0);
    }

    /** Abordagem defensável: o layout é declarado uma vez e os acessadores derivam dele. */
    public static Trade readTrade(ByteBuffer buffer, int index) {
        int base = Math.multiplyExact(index, RECORD_BYTES);
        return new Trade(
            buffer.getLong(base + OFFSET_ID),
            buffer.getLong(base + OFFSET_PRICE),
            buffer.getInt(base + OFFSET_QUANTITY),
            buffer.getShort(base + OFFSET_FLAGS));
    }

    public static void writeTrade(ByteBuffer buffer, int index, Trade trade) {
        int base = Math.multiplyExact(index, RECORD_BYTES);
        buffer.putLong(base + OFFSET_ID, trade.id());
        buffer.putLong(base + OFFSET_PRICE, trade.priceCents());
        buffer.putInt(base + OFFSET_QUANTITY, trade.quantity());
        buffer.putShort(base + OFFSET_FLAGS, trade.flags());
    }

    /** Buffer direto com endianness explícito: formato binário nunca depende do default da máquina. */
    public static ByteBuffer allocate(int recordCount) {
        return ByteBuffer.allocateDirect(Math.multiplyExact(recordCount, RECORD_BYTES))
            .order(ByteOrder.LITTLE_ENDIAN);
    }

    public static ByteBuffer encode(List<Trade> trades) {
        ByteBuffer buffer = allocate(trades.size());
        for (int index = 0; index < trades.size(); index++) {
            writeTrade(buffer, index, trades.get(index));
        }
        return buffer;
    }

    /**
     * Loop escalar sobre dados densos. É a baseline do exercício expert: vetorizar com a Vector API
     * (JEP 469, ainda em incubação) e medir se o ganho aparece no hardware alvo.
     * A resposta honesta costuma ser "depende" — e às vezes é "não compensou".
     */
    public static long totalNotionalCents(ByteBuffer buffer, int recordCount) {
        long total = 0;
        for (int index = 0; index < recordCount; index++) {
            int base = index * RECORD_BYTES;
            total += buffer.getLong(base + OFFSET_PRICE) * buffer.getInt(base + OFFSET_QUANTITY);
        }
        return total;
    }
}
