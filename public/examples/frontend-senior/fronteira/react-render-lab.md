# React por dentro — laboratório do módulo 22

> Antes de memoizar qualquer coisa, abra o Profiler. Este documento é o roteiro
> para o que fazer com o que ele mostra.

## 1. O que acontece entre o setState e o pixel

```
  setState
     │
     ▼
  agendar na LANE correspondente à urgência
     │   (clique e digitação = urgente; transition = pode esperar)
     ▼
  ┌─────────────── FASE DE RENDER ───────────────┐
  │  percorrer a árvore de fibers                 │  PODE SER INTERROMPIDA
  │  chamar componentes, comparar                 │  PODE SER DESCARTADA
  │  → produz uma árvore nova                     │  PRECISA SER PURA
  └───────────────────────────────────────────────┘
     │
     ▼
  ┌─────────────── FASE DE COMMIT ───────────────┐
  │  aplicar no DOM, rodar efeitos de layout      │  SÍNCRONA
  │  e depois os efeitos passivos                 │  NÃO INTERROMPÍVEL
  └───────────────────────────────────────────────┘
     │
     ▼
  navegador: style → layout → paint → composite   (módulo 21)
```

**Por que a fase de render precisa ser pura:** ela pode ser jogada fora e refeita.
Efeito colateral ali executa mais de uma vez — ou executa e é descartado.

## 2. Os três diagnósticos possíveis

O Profiler responde qual dos três é o seu caso. São correções diferentes.

| Diagnóstico | Sintoma no Profiler | Correção |
| --- | --- | --- |
| **Renders demais** | muitos componentes, cada um barato | corrigir identidade de props/contexto |
| **Render caro** | um componente com tempo alto | corrigir o trabalho dentro dele |
| **Prioridade errada** | render longo bloqueando entrada | `useTransition` |

Memoização só ajuda no primeiro. É por isso que espalhá-la resolve tão pouco.

## 3. Antes de memoizar, três perguntas

1. **O Profiler foi aberto?** Se não, pare aqui.
2. **O custo está no número de renders ou no trabalho de cada um?**
   Se for no trabalho, memoizar não muda nada.
3. **O React Compiler está habilitado?** Se está, a memoização manual virou
   exceção — e talvez você esteja adicionando código que ele já cobre.

## 4. O React Compiler mudou o conselho padrão

Com o compilador estável (1.0, out/2025):

| Antes | Agora |
| --- | --- |
| `useMemo`/`useCallback` por precaução | o compilador memoiza automaticamente |
| Regras dos hooks como convenção | regras dos hooks são a **premissa** que habilita a otimização |
| Otimizar à mão como hábito | otimizar à mão como **exceção justificada** |

O compilador desiste quando não consegue provar pureza: indireção dinâmica,
mutação escondida, efeito colateral no corpo. Nesses pontos ele não otimiza — e
são exatamente os pontos que valem revisar.

## 5. Transition: responsividade, não velocidade

```jsx
const [isPending, startTransition] = useTransition();

function onChange(e) {
  setTexto(e.target.value);              // urgente: o campo responde já
  startTransition(() => {
    setFiltro(e.target.value);           // pode ser interrompido
  });
}
```

O trabalho leva **o mesmo tempo**. O que muda é que a digitação continua
prioritária enquanto ele acontece. Ganha-se INP, não throughput.

## 6. Roteiro de laboratório

1. Monte uma lista de 10.000 itens com filtro por campo de texto.
2. Meça a latência de digitação. Deve travar.
3. **Tente memoizar primeiro** — e registre que quase não muda. Esse passo é
   deliberado: é o que quebra o reflexo.
4. Aplique `useTransition` e meça de novo.
5. Reduza o custo do filtro em si e meça a terceira vez.
6. Compare os três resultados.

| Tentativa | Latência de digitação | Conclusão |
| --- | --- | --- |
| Baseline | | |
| Com memoização | | |
| Com transition | | |
| Com filtro otimizado | | |

## 7. Armadilhas que o Profiler revela

- **Objeto ou função criada inline** como prop: nova identidade a cada render,
  quebra qualquer memoização a jusante.
- **Contexto com valor novo a cada render:** todos os consumidores re-renderizam.
  Divida o contexto ou estabilize o valor.
- **Key por índice** em lista que reordena: o React remonta subárvores inteiras.
- **Efeito sem array de dependências** disparando cascata de atualização.

## 8. Critério de aceite do módulo

Você consegue, diante de uma tela lenta:

- [ ] Dizer se o problema é quantidade de renders, custo de render ou prioridade
- [ ] Apontar o componente responsável, pelo Profiler
- [ ] Escolher a correção pelo diagnóstico, não pelo hábito
- [ ] Medir e provar o ganho
- [ ] Remover memoização que não serve para nada
