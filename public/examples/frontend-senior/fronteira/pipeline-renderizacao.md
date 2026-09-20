# O pipeline de renderização — artefato do módulo 21

> "A página está travando" não é diagnóstico. Estes são os cinco estágios, o que
> dispara cada um, e como descobrir em qual o seu problema nasce.

## 1. Os cinco estágios

```
  HTML ──parse──> DOM  ─┐
                        ├─> STYLE ──> LAYOUT ──> PAINT ──> COMPOSITE ──> pixels
  CSS  ──parse──> CSSOM ┘   (casar     (calcular  (listas    (montar
                             seletor,   geometria) de        camadas
                             calcular               desenho)  na GPU)
                             valores)
```

É uma **cascata**: mexer num estágio refaz todos os seguintes.

## 2. A tabela que resolve metade dos casos

| Você muda | Style | Layout | Paint | Composite | Custo |
| --- | :-: | :-: | :-: | :-: | --- |
| `width`, `height`, `top`, `left`, `margin` | ✓ | ✓ | ✓ | ✓ | **alto** |
| `color`, `background`, `box-shadow`, `border-radius` | ✓ | — | ✓ | ✓ | médio |
| `transform`, `opacity` | ✓ | — | — | ✓ | **baixo** |
| `filter` (em camada promovida) | ✓ | — | — | ✓ | baixo |

Animar `left` custa layout + paint + composição **a cada quadro**, na main thread.
Animar `transform` pode ficar só na composição, em outra thread. A diferença não
é percentual — é de ordem de grandeza.

## 3. Layout thrashing

O erro mais caro e mais fácil de cometer:

```js
// RUIM — um reflow forçado POR ITEM.
// Ler offsetHeight depois de escrever obriga o navegador a recalcular na hora.
for (const item of itens) {
  item.style.height = 'auto';
  const altura = item.offsetHeight;   // <- força layout síncrono
  item.style.height = altura + 'px';
}

// BOM — duas fases: ler tudo, depois escrever tudo.
const alturas = itens.map((item) => item.offsetHeight);   // fase de LEITURA
itens.forEach((item, i) => {                              // fase de ESCRITA
  item.style.height = alturas[i] + 'px';
});
```

### Propriedades que forçam layout ao serem LIDAS

`offsetTop/Left/Width/Height` · `clientTop/Left/Width/Height` ·
`scrollTop/Left/Width/Height` · `getBoundingClientRect()` ·
`getComputedStyle()` · `scrollBy`, `scrollTo`, `focus()`

Se alguma delas aparece dentro de um laço que também escreve estilo, você
encontrou o problema.

## 4. Como ler o perfil

No painel de performance, grave a interação e olhe a composição do quadro:

| Cor dominante no quadro | Estágio | Onde investigar |
| --- | --- | --- |
| Roxo | Layout | thrashing, seletores caros, árvore grande |
| Verde | Paint | sombras, filtros, gradientes, área repintada grande |
| Amarelo | Script | JavaScript — aí é o módulo 22 |
| Cinza claro | Composite | camadas demais |

> Se o quadro estoura 16,6 ms (60 fps) ou 8,3 ms (120 Hz), ele será descartado
> e o usuário vê engasgo.

## 5. Containment: dizer ao motor o que pode ser pulado

```css
/* Lista longa: o navegador pula layout e paint do que está fora da tela. */
.item-da-lista {
  content-visibility: auto;
  contain-intrinsic-size: auto 80px;  /* evita salto na barra de rolagem */
}

/* Componente isolado: mudanças internas não afetam o layout externo. */
.widget { contain: layout style paint; }
```

`contain-intrinsic-size` não é opcional: sem ele, o navegador não sabe o tamanho
do conteúdo pulado e a barra de rolagem pula enquanto o usuário rola.

## 6. Camadas: quando promover

Promover tira o trabalho da main thread e **consome memória de GPU**.

```css
/* Deliberado, no elemento que anima — e só nele. */
.elemento-que-anima { will-change: transform; }
```

- [ ] Promovi apenas o que realmente anima?
- [ ] Removi `will-change` depois que a animação terminou?
- [ ] Contei as camadas no painel de camadas?
- [ ] Testei em dispositivo modesto, não só no meu?

Dezenas de camadas num celular de entrada esgotam a memória de GPU e produzem um
travamento pior que o original.

## 7. Roteiro de investigação

1. Grave o perfil da interação que trava. **Não formule hipótese antes.**
2. Identifique o estágio dominante no quadro.
3. Layout → procure leitura geométrica depois de escrita.
4. Paint → procure área grande repintada, sombra ou filtro.
5. Script → vá para o módulo 22 (React por dentro).
6. Composite → conte as camadas.
7. Corrija **uma coisa** e meça de novo.

## 8. Exercício

Provoque thrashing de propósito num laço de 500 elementos, meça o tempo de
layout por quadro, separe as fases e meça de novo. Registre os dois perfis.

**Critério de aceite:** você consegue apontar no perfil a linha de código que
causava o reflow — não apenas dizer que "melhorou".
