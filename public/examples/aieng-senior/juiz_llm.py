"""
LLM-as-a-judge: viés de posição e mitigação — artefato do módulo 10.

Rode com:  python juiz_llm.py               (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

Usar um LLM como avaliador escala a comparação de saídas abertas — mas o juiz
tem VIÉS DE POSIÇÃO: tende a preferir a resposta numa certa posição,
independentemente da qualidade (e o viés se agrava com mais candidatos, ACL 2025).

Este arquivo modela um juiz enviesado e prova, com asserts, a mitigação padrão
(avaliar nas duas ordens e tirar a média — swap+average):

  1. em pares de qualidade IGUAL, o juiz de ordem única prefere a posição 1 —
     viés puro, sem sinal de qualidade;
  2. swap+average zera essa preferência de posição;
  3. em pares desiguais, a acurácia de ordem única cai (o viés confunde),
     enquanto swap+average recupera a decisão correta.
"""

import math
import random


def sigmoid(x):
    return 1.0 / (1.0 + math.exp(-x))


# Juiz: devolve P(preferir a resposta na PRIMEIRA posição).
#   k    = quanto o juiz responde à diferença real de qualidade
#   beta = força do viés de posição (favor à posição 1), independente da qualidade
K, BETA = 3.0, 1.2


def score_primeiro(q_first, q_second):
    return sigmoid(K * (q_first - q_second) + BETA)


def decide_ordem_unica(qA, qB):
    # apresenta (A, B) e decide A se o juiz prefere a posição 1.
    return "A" if score_primeiro(qA, qB) > 0.5 else "B"


def decide_swap_media(qA, qB):
    # avalia (A,B) e (B,A); score de A = média entre "preferir 1º em (A,B)"
    # e "preferir 2º em (B,A)" = 1 - P(preferir 1º em (B,A)).
    score_A = (score_primeiro(qA, qB) + (1.0 - score_primeiro(qB, qA))) / 2.0
    if abs(score_A - 0.5) < 1e-9:
        return "empate"
    return "A" if score_A > 0.5 else "B"


def _run_checks():
    rng = random.Random(0)
    checks = []

    # 1. pares de qualidade IGUAL: ordem única sempre prefere a posição 1.
    iguais = [rng.random() for _ in range(2000)]
    pos1_unica = sum(1 for q in iguais if decide_ordem_unica(q, q) == "A") / len(iguais)
    checks.append((f"ordem única prefere a posição 1 em {pos1_unica:.0%} dos pares iguais (viés)",
                   pos1_unica > 0.9))

    # 2. swap+average zera a preferência de posição (vira empate).
    pos1_swap = sum(1 for q in iguais if decide_swap_media(q, q) == "A") / len(iguais)
    empates = sum(1 for q in iguais if decide_swap_media(q, q) == "empate") / len(iguais)
    checks.append((f"swap+average não prefere a posição 1 (A={pos1_swap:.0%})", pos1_swap < 0.05))
    checks.append((f"swap+average marca empate em qualidade igual ({empates:.0%})", empates > 0.9))

    # 3. pares DESIGUAIS: A é o verdadeiramente melhor; ordem de apresentação sorteada.
    n, acertos_unica, acertos_swap = 3000, 0, 0
    for _ in range(n):
        qA, qB = rng.random(), rng.random()
        melhor = "A" if qA > qB else "B"
        # sorteia quem aparece primeiro (posição afeta a ordem única)
        if rng.random() < 0.5:
            dec_unica = decide_ordem_unica(qA, qB)
        else:
            dec_unica = "A" if decide_ordem_unica(qB, qA) == "B" else "B"
        dec_swap = decide_swap_media(qA, qB)
        acertos_unica += (dec_unica == melhor)
        acertos_swap += (dec_swap == melhor)
    acc_unica, acc_swap = acertos_unica / n, acertos_swap / n
    checks.append((f"swap+average é mais acurado que ordem única ({acc_swap:.1%} > {acc_unica:.1%})",
                   acc_swap > acc_unica))
    checks.append((f"swap+average acompanha a qualidade real (> 95%)", acc_swap > 0.95))

    # 4. o viés desloca a decisão: melhor na pos 1 vs na pos 2 (mesmo par).
    qA, qB = 0.55, 0.50   # A é levemente melhor
    a_em_1 = decide_ordem_unica(qA, qB)          # A na posição 1
    a_em_2 = "A" if decide_ordem_unica(qB, qA) == "B" else "B"   # A na posição 2
    checks.append(("mesmo par, decisão muda com a posição de A (viés confunde)", a_em_1 != a_em_2))

    print("=== LLM-as-a-judge: viés de posição ===\n")
    print(f"juiz: k={K} (resposta à qualidade), beta={BETA} (viés de posição)")
    print(f"pares IGUAIS  -> prefere pos.1: ordem única {pos1_unica:.0%} | swap+average {pos1_swap:.0%}")
    print(f"pares DESIGUAIS -> acurácia: ordem única {acc_unica:.1%} | swap+average {acc_swap:.1%}")
    print(f"par (A=0.55, B=0.50): A na pos.1 -> escolhe {a_em_1}; A na pos.2 -> escolhe {a_em_2}\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: um juiz de ordem única mede posição, não só qualidade. Swap+average")
    print("cancela o viés — sem isso, o ranking reflete a ordem, não o mérito.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
