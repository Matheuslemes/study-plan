package dev.studyplan.javaexpert;

import java.util.ArrayList;
import java.util.List;

/**
 * Módulo 0 (Java) — Da Faixa 0 ao Java, com código que roda.
 *
 * Liga os fundamentos universais (memória valor×referência, ponto flutuante,
 * overflow) à forma concreta que eles tomam em Java. É o "primeiro programa"
 * que já mostra as três surpresas que todo iniciante encontra:
 *   1. um primitivo (int) transborda e "dá a volta";
 *   2. um double é aproximado (0.1 + 0.2 ≠ 0.3);
 *   3. == compara identidade de referência; equals compara valor.
 *
 * Compile com --release 21. Self-check:
 *   javac --release 21 -Xlint:all -d out (fontes)
 *   java -cp out dev.studyplan.javaexpert.JavaZero
 * Também entra no CompileSmoke (java -ea ...CompileSmoke).
 */
public final class JavaZero {

    private JavaZero() {
    }

    /** int tem 32 bits: Integer.MAX_VALUE + 1 transborda para o mínimo (dá a volta). */
    public static boolean intOverflowWraps() {
        int max = Integer.MAX_VALUE;
        int wrapped = max + 1;
        return wrapped == Integer.MIN_VALUE;
    }

    /** long (64 bits) tem alcance para o mesmo cálculo sem transbordar. */
    public static long withoutOverflow() {
        long max = Integer.MAX_VALUE;
        return max + 1L;
    }

    /** double é aproximado: 0.1 + 0.2 não é exatamente 0.3 (como na Faixa 0). */
    public static boolean doubleIsApproximate() {
        double soma = 0.1 + 0.2;
        return soma != 0.3 && Math.abs(soma - 0.3) < 1e-9;
    }

    /** == compara identidade da referência; equals compara o valor (conteúdo). */
    public static boolean stringIdentityVsValue() {
        String a = new String("java");
        String b = new String("java");
        boolean mesmaReferencia = (a == b);   // false: dois objetos distintos
        boolean mesmoValor = a.equals(b);      // true: mesmo conteúdo
        return !mesmaReferencia && mesmoValor;
    }

    /** Controle de fluxo básico: somar 1..n com um laço. */
    public static int sumTo(int n) {
        int soma = 0;
        for (int i = 1; i <= n; i++) {
            soma += i;
        }
        return soma;
    }

    /** Uma referência pode ser null; usá-la lança NullPointerException. */
    public static boolean nullThrowsNpe() {
        String nome = null;
        try {
            nome.length();
            return false;
        } catch (NullPointerException e) {
            return true;
        }
    }

    private record Check(String name, boolean ok) {
    }

    public static void main(String[] args) {
        List<Check> checks = new ArrayList<>();

        checks.add(new Check("int transborda: MAX_VALUE + 1 vira MIN_VALUE", intOverflowWraps()));
        checks.add(new Check("long tem alcance para o mesmo cálculo (2147483648)", withoutOverflow() == 2_147_483_648L));
        checks.add(new Check("double é aproximado: 0.1 + 0.2 ≠ 0.3", doubleIsApproximate()));
        checks.add(new Check("== é identidade, equals é valor (em String)", stringIdentityVsValue()));
        checks.add(new Check("laço soma 1..5 = 15", sumTo(5) == 15));
        checks.add(new Check("referência null lança NullPointerException", nullThrowsNpe()));

        System.out.println("=== Módulo 0 (Java) — do fundamento ao código ===");
        System.out.println("int: " + Integer.MAX_VALUE + " + 1 = " + (Integer.MAX_VALUE + 1) + " (transbordou)");
        System.out.println("long: (long) MAX + 1 = " + withoutOverflow() + " (não transbordou)");
        System.out.println("double: 0.1 + 0.2 = " + (0.1 + 0.2));
        System.out.println("String: new==new? " + (new String("x") == new String("x"))
            + " | equals? " + "x".equals("x"));
        System.out.println("laço 1..5 = " + sumTo(5));
        System.out.println();

        int ok = 0;
        for (Check c : checks) {
            System.out.println((c.ok() ? "ok    " : "FALHOU ") + c.name());
            if (c.ok()) {
                ok++;
            }
        }
        System.out.println("\n" + ok + "/" + checks.size() + " checagens passaram.");
        System.out.println("Lição: os fundamentos da Faixa 0 (memória, float, overflow) reaparecem em Java "
            + "com nomes concretos — primitivo vs referência, int vs long, == vs equals.");
        if (ok != checks.size()) {
            System.exit(1);
        }
    }
}
