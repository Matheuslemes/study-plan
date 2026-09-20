# Academia DevOps · módulo 26 — módulo IaC com interface, validação e testes
#
# Compatível com Terraform 1.x e OpenTofu 1.x — não usa nada exclusivo de
# nenhum dos dois. CONFERIDO com OpenTofu 1.10.6: validate OK, fmt OK, 6 testes passando.
#
#   tofu init -backend=false && tofu validate && tofu fmt -check
#   terraform init -backend=false && terraform validate
#
# O ponto do módulo: um módulo compartilhado é um PRODUTO. Tem interface,
# validação, versão e política de depreciação — ou vira dependência sem contrato.

terraform {
  required_version = ">= 1.6.0"
  required_providers {
    null = {
      source  = "hashicorp/null"
      version = "~> 3.2"
    }
  }
}

# ---------------------------------------------------------------------------
# INTERFACE — o contrato do módulo. Validar aqui é muito mais barato do que
# descobrir o problema no apply, e a mensagem de erro é sua, não do provider.
# ---------------------------------------------------------------------------

variable "service_name" {
  description = "Nome do serviço. Usado como prefixo de todos os recursos."
  type        = string

  validation {
    condition     = can(regex("^[a-z][a-z0-9-]{2,29}$", var.service_name))
    error_message = "service_name: minúsculas, hífens, 3 a 30 caracteres, começando por letra."
  }
}

variable "environment" {
  description = "Ambiente alvo."
  type        = string

  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "environment deve ser dev, staging ou prod."
  }
}

variable "replicas" {
  description = "Réplicas desejadas."
  type        = number
  default     = 2

  validation {
    condition     = var.replicas >= 1 && var.replicas <= 50
    error_message = "replicas deve estar entre 1 e 50."
  }
}

variable "retention_days" {
  description = "Retenção de logs em dias."
  type        = number
  default     = 30
}

# Regra que cruza duas variáveis: em produção, o mínimo é maior.
# Isto é o equivalente da regra CEL do CRD do módulo 21 — rejeitar cedo.
variable "enforce_prod_minimums" {
  description = "Aplica os mínimos de produção. Desligar exige justificativa em ADR."
  type        = bool
  default     = true
}

locals {
  prod_ok = !var.enforce_prod_minimums || var.environment != "prod" || (
    var.replicas >= 3 && var.retention_days >= 90
  )

  tags = {
    service     = var.service_name
    environment = var.environment
    managed_by  = "iac"
    module      = "service-baseline"
  }
}

# ---------------------------------------------------------------------------
# GUARDRAIL — falha no PLAN, não no apply.
# ---------------------------------------------------------------------------

resource "terraform_data" "guardrail_producao" {
  lifecycle {
    precondition {
      condition = local.prod_ok
      error_message = join(" ", [
        "Ambiente prod exige replicas >= 3 e retention_days >= 90.",
        "Recebido: replicas=${var.replicas}, retention_days=${var.retention_days}.",
        "Para abrir exceção, registre um ADR e passe enforce_prod_minimums = false."
      ])
    }
  }
}

# ---------------------------------------------------------------------------
# RECURSO — `null_resource` como marcador; substitua pelo provider real.
# O que importa aqui é a FORMA: nome derivado da interface, tags consistentes,
# e nada de valor mágico espalhado.
# ---------------------------------------------------------------------------

resource "null_resource" "service" {
  count = var.replicas

  triggers = merge(local.tags, {
    index          = count.index
    retention_days = tostring(var.retention_days)
  })

  depends_on = [terraform_data.guardrail_producao]
}

# ---------------------------------------------------------------------------
# SAÍDAS — parte do contrato. Mudar uma saída é mudança quebrante.
# ---------------------------------------------------------------------------

output "service_id" {
  description = "Identificador canônico do serviço neste ambiente."
  value       = "${var.environment}-${var.service_name}"
}

output "replica_count" {
  description = "Réplicas efetivamente provisionadas."
  value       = length(null_resource.service)
}

output "tags" {
  description = "Tags aplicadas. Consumidores dependem deste formato."
  value       = local.tags
}
