-------------------------------- MODULE OrderSaga --------------------------------
(***************************************************************************)
(* Módulo 20 — especificação formal de uma saga de dois passos.            *)
(*                                                                         *)
(* Modela a saga do módulo 12: debitar o cliente, creditar o lojista e     *)
(* compensar se o segundo passo falhar. O objetivo NÃO é provar o sistema  *)
(* real — é encontrar o intercalamento que a revisão humana não enumera.   *)
(*                                                                         *)
(* Verificar com TLC:                                                      *)
(*   1. abrir no TLA+ Toolbox (ou rodar tlc OrderSaga.tla)                 *)
(*   2. constante MaxRetries <- 2                                          *)
(*   3. invariantes: TypeOK, NoMoneyLost                                   *)
(*   4. propriedade temporal: EventuallySettled                            *)
(*                                                                         *)
(* NÃO VERIFICADO neste repositório: não há TLA+ instalado aqui. Rodar o   *)
(* TLC é o exercício aplicado do módulo — inclusive para confirmar que     *)
(* esta especificação está correta.                                        *)
(***************************************************************************)
EXTENDS Integers, Sequences

CONSTANTS MaxRetries

VARIABLES
    debited,      \* TRUE quando o débito no cliente foi confirmado
    credited,     \* TRUE quando o crédito no lojista foi confirmado
    compensated,  \* TRUE quando o débito foi estornado
    retries,      \* tentativas já feitas do passo de crédito
    state         \* "running" | "done" | "rolledback"

vars == <<debited, credited, compensated, retries, state>>

Init ==
    /\ debited     = FALSE
    /\ credited    = FALSE
    /\ compensated = FALSE
    /\ retries     = 0
    /\ state       = "running"

(***************************************************************************)
(* Passo 1: debitar o cliente. Só ocorre uma vez.                          *)
(***************************************************************************)
Debit ==
    /\ state = "running"
    /\ ~debited
    /\ debited' = TRUE
    /\ UNCHANGED <<credited, compensated, retries, state>>

(***************************************************************************)
(* Passo 2, caminho feliz: creditar o lojista.                             *)
(***************************************************************************)
Credit ==
    /\ state = "running"
    /\ debited
    /\ ~credited
    /\ credited' = TRUE
    /\ state'    = "done"
    /\ UNCHANGED <<debited, compensated, retries>>

(***************************************************************************)
(* Passo 2 falha e ainda há orçamento de retry.                            *)
(***************************************************************************)
CreditFails ==
    /\ state = "running"
    /\ debited
    /\ ~credited
    /\ retries < MaxRetries
    /\ retries' = retries + 1
    /\ UNCHANGED <<debited, credited, compensated, state>>

(***************************************************************************)
(* Esgotado o retry, compensa o débito. Esta é a ação que a especificação  *)
(* existe para verificar: remova-a e a invariante NoMoneyLost quebra, com  *)
(* um contraexemplo curto que mostra o dinheiro parado.                    *)
(***************************************************************************)
Compensate ==
    /\ state = "running"
    /\ debited
    /\ ~credited
    /\ retries >= MaxRetries
    /\ compensated' = TRUE
    /\ state'       = "rolledback"
    /\ UNCHANGED <<debited, credited, retries>>

Next == Debit \/ Credit \/ CreditFails \/ Compensate

Spec == Init /\ [][Next]_vars /\ WF_vars(Next)

(***************************************************************************)
(* INVARIANTES (safety: "nada ruim acontece")                              *)
(***************************************************************************)
TypeOK ==
    /\ debited     \in BOOLEAN
    /\ credited    \in BOOLEAN
    /\ compensated \in BOOLEAN
    /\ retries     \in 0..MaxRetries
    /\ state       \in {"running", "done", "rolledback"}

\* O dinheiro nunca some: se houve débito e o estado é terminal, ou o
\* crédito aconteceu, ou a compensação aconteceu. Nunca nenhum, nunca os dois.
NoMoneyLost ==
    (state \in {"done", "rolledback"} /\ debited)
        => (credited # compensated)

\* Não se credita sem debitar antes.
NoCreditWithoutDebit == credited => debited

(***************************************************************************)
(* PROPRIEDADE TEMPORAL (liveness: "algo bom acaba acontecendo")           *)
(***************************************************************************)
EventuallySettled == <>(state \in {"done", "rolledback"})

(***************************************************************************)
(* EXERCÍCIO EXPERT DO MÓDULO 20                                           *)
(*                                                                         *)
(* Introduza o defeito: troque a guarda de Compensate de                   *)
(*   retries >= MaxRetries    por    retries > MaxRetries                  *)
(* Rode o TLC e leia o contraexemplo. Depois traduza o traço para uma      *)
(* frase que alguém que não conhece TLA+ entenda — esse é o entregável.    *)
(*                                                                         *)
(* Segundo exercício: esta especificação assume que o débito nunca falha.  *)
(* Modele a falha do débito e verifique se NoMoneyLost continua valendo.   *)
(***************************************************************************)
================================================================================
