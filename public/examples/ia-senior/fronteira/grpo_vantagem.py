"""
GRPO por dentro: vantagem relativa ao grupo — artefato do módulo 30.

Rode com:  python grpo_vantagem.py           (requer apenas numpy)
Verificado sob Pyodide 0.28 no navegador.

GRPO (Group Relative Policy Optimization, Shao et al. 2024) é o algoritmo que
treinou o DeepSeek-R1. O truque que o torna barato: ele NÃO treina uma rede
crítica (value model) para estimar a baseline. Em vez disso, amostra um GRUPO
de respostas para o mesmo prompt, e usa a média do grupo como baseline. A
vantagem de cada resposta é o quanto ela supera as irmãs.

Isto é RLVR — RL with Verifiable Rewards: a recompensa vem de um verificador
programático (a resposta bate? o código passa nos testes?), não de um modelo de
recompensa neural — o que evita reward hacking.

Este arquivo:
  1. implementa a vantagem relativa ao grupo (o coração do GRPO);
  2. roda um policy-gradient de brinquedo num "bandit" com recompensa
     verificável e PROVA que a política melhora — sem crítico, sem framework.
"""

import numpy as np


def grupo_vantagem(recompensas):
    """
    Vantagem = (r - média do grupo) / (desvio do grupo + eps).
    Sem crítico: a baseline é a própria média das respostas irmãs.
    Uma resposta acima da média do grupo tem vantagem positiva; abaixo, negativa.
    """
    r = np.asarray(recompensas, dtype=np.float64)
    media = r.mean()
    desvio = r.std()
    return (r - media) / (desvio + 1e-8)


def softmax(logits):
    z = logits - logits.max()
    e = np.exp(z)
    return e / e.sum()


def _run_checks():
    rng = np.random.default_rng(0)
    checks = []

    # 1. propriedades da vantagem de grupo.
    adv = grupo_vantagem([1.0, 0.0, 0.0, 0.0])
    checks.append(("resposta certa (única) tem vantagem positiva", adv[0] > 0))
    checks.append(("respostas erradas têm vantagem negativa", np.all(adv[1:] < 0)))
    checks.append(("vantagem soma ~0 (é relativa ao grupo)", abs(grupo_vantagem([3, 1, 4, 1, 5]).sum()) < 1e-6))
    # grupo todo igual -> vantagem ~0: nada a aprender (não há sinal relativo).
    checks.append(("grupo homogêneo não gera sinal", np.allclose(grupo_vantagem([1, 1, 1, 1]), 0.0, atol=1e-6)))

    # 2. treino de brinquedo: escolher a ação correta entre 5, recompensa
    #    verificável (1.0 se acertou, 0.0 se não). Política = softmax(theta).
    n_acoes = 5
    acao_correta = 3
    theta = np.zeros(n_acoes)          # política inicial uniforme
    lr = 0.5
    grupo = 8                          # respostas amostradas por passo (o "G" do GRPO)

    def recompensa_verificavel(a):     # o verificador programático (RLVR)
        return 1.0 if a == acao_correta else 0.0

    acerto_inicial = softmax(theta)[acao_correta]
    historico = []
    for passo in range(300):
        pi = softmax(theta)
        acoes = rng.choice(n_acoes, size=grupo, p=pi)
        recs = np.array([recompensa_verificavel(a) for a in acoes])
        adv = grupo_vantagem(recs)

        # gradiente REINFORCE com baseline de grupo: Σ adv * ∇log π(a)
        grad = np.zeros(n_acoes)
        for a, A in zip(acoes, adv):
            grad_log = -pi.copy()
            grad_log[a] += 1.0         # ∇_theta log softmax
            grad += A * grad_log
        theta += lr * grad / grupo
        historico.append(softmax(theta)[acao_correta])

    acerto_final = softmax(theta)[acao_correta]
    checks.append(("política começa perto do acaso (~0.2)", abs(acerto_inicial - 0.2) < 0.05))
    checks.append(("política aprende a ação correta (>0.9)", acerto_final > 0.9))
    checks.append(("probabilidade da ação correta cresce", acerto_final > acerto_inicial))

    print("=== GRPO: vantagem relativa ao grupo ===\n")
    print(f"vantagem de [1,0,0,0] (uma certa em quatro): {np.round(adv := grupo_vantagem([1.0,0,0,0]), 3)}")
    print(f"P(ação correta): início {acerto_inicial:.3f}  ->  fim {acerto_final:.3f}")
    print(f"passos de treino: 300 · grupo por passo: {grupo} · sem rede crítica\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: a baseline saiu de graça da média do grupo. É o que torna o GRPO")
    print("barato o bastante para rodar RL em escala de LLM — e por que a recompensa")
    print("PRECISA ser verificável, ou o modelo aprende a enganar o verificador.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
