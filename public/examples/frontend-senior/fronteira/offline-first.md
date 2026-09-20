# Offline-first sem perder escrita — artefato do módulo 26

> O problema difícil de offline não é o cache. É a sincronização — e a escrita
> que desaparece em silêncio.

## 1. Os cinco estados que a interface precisa distinguir

A maioria das aplicações mostra dois.

| Estado | O que o usuário precisa saber |
| --- | --- |
| Editando | nada foi salvo ainda |
| **Salvo localmente** | está no dispositivo, **não** no servidor |
| **Sincronizando** | está indo |
| Salvo no servidor | está seguro |
| **Conflito** | precisa da sua decisão |

Fundir "salvo localmente" com "salvo no servidor" é o que destrói a confiança no
dia em que algo falha.

## 2. Fila de escrita persistente

```js
// A fila vive em IndexedDB, NÃO em memória.
// Fechar a aba não pode perder trabalho do usuário.
async function enfileirar(operacao) {
  await db.put('fila', {
    id: crypto.randomUUID(),      // chave de IDEMPOTÊNCIA
    tipo: operacao.tipo,
    payload: operacao.payload,
    criadoEm: Date.now(),
    tentativas: 0
  });
  agendarSincronizacao();
}
```

Dois requisitos inegociáveis:

- **Persistente** — memória perde ao fechar a aba.
- **Idempotente** — a sincronização pode reenviar; o servidor precisa reconhecer
  a mesma operação e não aplicá-la duas vezes.

## 3. Conflito de dado × conflito de negócio

Mesma distinção do módulo 25 da trilha de Banco de Dados, aplicada ao cliente.

| Campo | Tipo de conflito | Estratégia |
| --- | --- | --- |
| Lista de observações | dado acumulativo | **convergir** (união) |
| Contador de itens | dado acumulativo | **convergir** (soma) |
| Texto colaborativo | dado | **convergir** (estrutura apropriada) |
| Status do pedido | **negócio** | decisão explícita |
| Responsável designado | **negócio** | decisão explícita |
| Número sequencial único | **negócio** | coordenação no servidor |

> **Convergir não é estar correto.** Duas réplicas podem concordar perfeitamente
> num estado que o negócio não aceita. Exclusividade exige coordenação.

## 4. "Último que escreve vence" — o que ele realmente faz

```
Técnico A (offline)          Técnico B (offline)
  observação: "vazamento"      observação: "corrosão"
        |                            |
        +----------- sync -----------+
                     |
                     v
           observação: "corrosão"
           <- a de A desapareceu, sem aviso a ninguém
```

Converge? Sim. É aceitável? Quase nunca. E "último" depende de relógio, que em
sistema distribuído não é confiável.

## 5. Service worker: o que pode dar errado

| Risco | Como evitar |
| --- | --- |
| Servir conteúdo velho indefinidamente | estratégia de atualização explícita e cache versionado |
| Usuário preso numa versão antiga | caminho de atualização e aviso de nova versão |
| Cache crescendo sem limite | política de expiração e teto de tamanho |
| Falha no SW derrubando a aplicação | tratamento de erro no handler, com fallback para a rede |

O service worker é um proxy que roda no cliente. Um erro nele é difícil de
diagnosticar e **persiste entre sessões**.

## 6. Checklist de aceite

- [ ] Fila de escrita em armazenamento persistente
- [ ] Toda operação tem chave de idempotência
- [ ] A interface distingue "salvo local" de "salvo no servidor"
- [ ] Campos classificados entre convergir e decidir
- [ ] Nenhum campo de negócio resolvido por merge automático
- [ ] Conflito é mostrado com **as duas versões**, não resolvido em silêncio
- [ ] Existe caminho para atualizar um service worker preso
- [ ] Testado com a rede desligada de verdade, não simulada no DevTools

## 7. Exercício

1. Desligue a rede, faça três edições, feche a aba, reabra e religue.
   **Quantas sobreviveram?**
2. Classifique cada campo do seu formulário na tabela do item 3.
3. Provoque um conflito real com dois dispositivos e observe o que o usuário vê.

**Critério de aceite:** nenhuma escrita desaparece sem o usuário ficar sabendo.
