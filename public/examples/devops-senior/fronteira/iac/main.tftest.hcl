# Academia DevOps · módulo 26 — testes de infraestrutura
#
# CONFERIDO: `tofu test` com OpenTofu 1.10.6 -> 6 passed, 0 failed.
# Funciona igual com `terraform test`.
#
#   tofu init -backend=false && tofu test
#
# O ponto: teste que só valida SINTAXE não testa nada relevante. Estes rodam o
# plano e verificam COMPORTAMENTO — inclusive que as entradas erradas falham.

# --------------------------------------------------------------------------
# 1. Caminho feliz: dev com os defaults.
# --------------------------------------------------------------------------
run "dev_com_defaults" {
  command = plan

  variables {
    service_name = "checkout"
    environment  = "dev"
  }

  assert {
    condition     = output.service_id == "dev-checkout"
    error_message = "service_id deve combinar ambiente e nome."
  }

  assert {
    condition     = output.replica_count == 2
    error_message = "o default de replicas deveria ser 2."
  }
}

# --------------------------------------------------------------------------
# 2. Produção dentro das regras.
# --------------------------------------------------------------------------
run "prod_valido" {
  command = plan

  variables {
    service_name   = "checkout"
    environment    = "prod"
    replicas       = 3
    retention_days = 90
  }

  assert {
    condition     = output.replica_count == 3
    error_message = "prod com 3 réplicas deveria provisionar 3."
  }

  assert {
    condition     = output.tags["environment"] == "prod"
    error_message = "as tags precisam refletir o ambiente."
  }
}

# --------------------------------------------------------------------------
# 3. O teste que importa: a configuração ERRADA precisa FALHAR.
#
# Um conjunto de testes que só cobre o caminho feliz não protege ninguém.
# `expect_failures` é o que transforma o guardrail em contrato verificado.
# --------------------------------------------------------------------------
run "prod_com_replicas_insuficientes_falha" {
  command = plan

  variables {
    service_name   = "checkout"
    environment    = "prod"
    replicas       = 1
    retention_days = 90
  }

  expect_failures = [terraform_data.guardrail_producao]
}

run "nome_invalido_falha" {
  command = plan

  variables {
    service_name = "Checkout_Service" # maiúsculas e underscore
    environment  = "dev"
  }

  expect_failures = [var.service_name]
}

run "ambiente_invalido_falha" {
  command = plan

  variables {
    service_name = "checkout"
    environment  = "producao" # não está na lista permitida
  }

  expect_failures = [var.environment]
}

# --------------------------------------------------------------------------
# 4. A exceção é possível — e explícita.
# --------------------------------------------------------------------------
run "excecao_documentada_passa" {
  command = plan

  variables {
    service_name          = "batch-noturno"
    environment           = "prod"
    replicas              = 1
    retention_days        = 30
    enforce_prod_minimums = false # exige ADR, conforme a mensagem do guardrail
  }

  assert {
    condition     = output.replica_count == 1
    error_message = "com a exceção ligada, 1 réplica deve ser permitida."
  }
}
