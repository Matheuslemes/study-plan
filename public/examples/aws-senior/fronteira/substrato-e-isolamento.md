# O substrato: Nitro, Firecracker e isolamento — artefato do módulo 21

> Este documento existe para você conseguir responder a uma auditoria sem usar a
> palavra "confie", e para explicar desempenho pelo mecanismo.

## 1. O que mudou embaixo da instância

| Camada | Virtualização tradicional | Nitro |
| --- | --- | --- |
| Hipervisor | software, consome CPU do host | mínimo, quase todo em hardware |
| Rede | emulada pelo hipervisor | cartão dedicado |
| Armazenamento | emulado pelo hipervisor | cartão dedicado |
| Segurança | software no host | chip dedicado, raiz de confiança em hardware |
| Acesso de operador | shell no host | **não existe acesso interativo em produção** |

A consequência prática: a instância recebe praticamente todo o processador, e a
afirmação de isolamento deixa de ser política e passa a ser arquitetural.

## 2. Firecracker: por que serverless isola em VM

Container compartilha o kernel do host. Para multi-tenancy com cargas de clientes
diferentes no mesmo hardware, isso é superfície de ataque demais.

```
   container                          microVM (Firecracker)
   ┌──────────────┐                   ┌──────────────┐
   │  processo    │                   │  processo    │
   ├──────────────┤                   ├──────────────┤
   │ kernel COMPARTILHADO │           │ kernel PRÓPRIO       │
   ├──────────────┤                   ├──────────────┤
   │    host      │                   │ VMM mínimo   │
   └──────────────┘                   ├──────────────┤
                                      │    host      │
   isolamento: namespaces             └──────────────┘
   partida: milissegundos             isolamento: VM
                                      partida: dezenas de ms
```

Firecracker entrega isolamento de VM com custo próximo ao de container, e é isso
que torna Lambda e Fargate viáveis.

## 3. Cold start nas três parcelas

Atacar cold start sem separar as parcelas é chute. As três são:

| Parcela | O que é | Você controla? |
| --- | --- | --- |
| Criação da microVM | provisionar o ambiente isolado | não |
| Inicialização do runtime | subir a JVM, o Node, o Python | parcialmente (escolha do runtime) |
| Inicialização do seu código | imports, conexões, leitura de config | **sim, é quase sempre a maior** |

Na maioria dos casos investigados, a maior parcela é a terceira. Medir antes de
aumentar memória evita pagar por um ganho que não vem.

### O que realmente ajuda

- [ ] Enxugar dependências do pacote (a maior alavanca, quase sempre)
- [ ] Inicializar cliente e conexão **fora** do handler, para reaproveitar
- [ ] Adiar o que não é necessário no caminho quente
- [ ] Concorrência provisionada quando o SLO exige e o custo fecha
- [ ] Escolher runtime com inicialização mais barata, quando é opção

## 4. Resposta a auditoria

Modelo de texto. Substitua pelos seus controles.

> **Isolamento de computação.** Os workloads executam sobre o AWS Nitro System, em
> que virtualização de rede e armazenamento é realizada em hardware dedicado, com
> raiz de confiança em chip próprio. O design não prevê acesso interativo de
> operador aos hosts de produção. Referência: whitepaper de segurança do Nitro.
>
> **Cargas serverless** executam em microVMs Firecracker, com kernel próprio por
> execução — isolamento de máquina virtual, não de container.
>
> **Permanece sob nossa responsabilidade:** criptografia em repouso e em trânsito,
> gestão de chaves, políticas IAM, configuração de rede, classificação e retenção
> de dados, e o código da aplicação.

A última seção é a que importa numa auditoria: delimitar o que **não** é do provedor.

## 5. Limites deste conhecimento

- É **detalhe do substrato**, e a AWS pode mudá-lo. Não construa arquitetura que
  dependa dele — use para explicar, dimensionar e responder.
- Famílias antigas de instância não têm o mesmo comportamento. Comparação de
  desempenho sem declarar o tipo de instância não vale nada.
- Isolamento do provedor **não é** segurança da aplicação. IAM mal configurado
  continua sendo IAM mal configurado.
