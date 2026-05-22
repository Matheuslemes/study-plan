# Plano Integrado de Estudos — site estático

Projeto estático organizado para consulta rápida de um plano integrado com 8 trilhas, 8 fases e páginas individuais por área.

## Estrutura

```txt
/study-plan
├── index.html
├── trilhas/
│   ├── java.html
│   ├── blog.html
│   ├── aws.html
│   ├── python.html
│   ├── devops.html
│   ├── matematica.html
│   ├── ia.html
│   └── financeiro.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── data.js
│   │   ├── index.js
│   │   └── trilha.js
│   └── img/
└── README.md
```

## Como rodar localmente

Opção simples:

1. Abra `index.html` no navegador.
2. Navegue pelos cards da seção **Consulta rápida por trilha**.

Opção recomendada com servidor estático:

```bash
cd study-plan
python -m http.server 5500
```

Depois acesse:

```txt
http://localhost:5500
```

## Publicação na Vercel

1. Suba a pasta `study-plan` para um repositório GitHub.
2. Importe o repositório na Vercel.
3. Configure:
   - Framework Preset: `Other`
   - Build Command: vazio
   - Output Directory: `.`
4. Faça o deploy.

## Arquitetura frontend

- `index.html`: dashboard principal, fases, cronograma, rotina, sincronização e cards de navegação.
- `assets/css/styles.css`: tema escuro, cards, badges, tabelas, timeline, layout responsivo e páginas de trilha.
- `assets/js/data.js`: dados reutilizáveis das fases, trilhas, métricas, cronograma e conteúdo das páginas.
- `assets/js/index.js`: lógica exclusiva do dashboard principal.
- `assets/js/trilha.js`: renderização compartilhada das páginas individuais.

## Validação rápida

- [ ] `index.html` está na raiz.
- [ ] `./assets/css/styles.css` carrega no dashboard.
- [ ] `./assets/js/data.js` e `./assets/js/index.js` carregam no dashboard.
- [ ] Links do dashboard apontam para `./trilhas/*.html`.
- [ ] Páginas em `/trilhas` carregam `../assets/css/styles.css`.
- [ ] Botão “Voltar ao plano” aponta para `../index.html`.
- [ ] Nenhum link interno de trilha retorna 404.
- [ ] Projeto não exige backend, banco de dados ou build.
