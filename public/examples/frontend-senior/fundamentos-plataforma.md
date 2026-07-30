# Evidência — fundamentos da plataforma Web

## Hipótese

O fluxo crítico deve continuar legível, navegável e enviável antes das camadas cosméticas.

## Prova mínima

- HTML semântico validado e outline revisado.
- Navegação completa por teclado com foco visível.
- Capturas em 390 × 844, 820 × 1180, 1024 × 768 e 1280 × 720.
- `document.documentElement.scrollWidth === window.innerWidth`.
- Waterfall e trace com uma hipótese de rede ou main thread antes/depois.

## Decisão

Registre no ADR qual capacidade nativa foi usada, qual baseline de navegador foi assumido e qual fallback permanece.
