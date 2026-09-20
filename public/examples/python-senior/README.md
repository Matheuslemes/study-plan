# Python Sênior — artefatos de exemplo

Artefatos verificáveis produzidos ao longo da Academia de Python: registros de
decisão (ADRs), configuração de tipagem e notas de design. Servem como evidência
auditável — a mesma exigida nos critérios de conclusão da trilha.

## Estrutura
- `adr/` — Architecture Decision Records (contexto, decisão, consequências).
- `src/pyexpert/` — código executável da parte Fronteira (módulos 21–26), sem dependências externas.

## Fronteira — módulos 21–26

```bash
cd public/examples/python-senior/src
python smoke_test.py                       # verifica os seis módulos
python -m pyexpert.interpreter_internals   # e assim por diante
```

| Módulo | Arquivo | O que executar |
| --- | --- | --- |
| 21 | `interpreter_internals.py` | rode e explique os degraus da lista lendo `listobject.c` |
| 22 | `descriptors_and_metaclasses.py` | compare as duas soluções: metaclasse × `__init_subclass__` |
| 23 | `free_threading.py` | rode em `python` **e** em `python3.14t` — uma build só não é medição |
| 24 | `native_boundary.py` | observe onde a `memoryview` ganha e onde empata |
| 25 | `packaging_probe.py` | confira se as tags batem com o ambiente de produção |
| 26 | `reading_cpython.py` | rode, depois responda cada pergunta pela fonte indicada |

### Regras destes exemplos

- **Só biblioteca padrão.** Sem pytest, sem NumPy, sem `pip install`. Roda em qualquer 3.12+.
- **Nada aqui é benchmark publicável.** `time.perf_counter` com repetição não substitui forks nem
  intervalo de confiança. Os números servem para mostrar um mecanismo — a conclusão exige medição séria.
- **Alguns resultados são detalhe de implementação do CPython**, não contrato da linguagem. O módulo 26
  existe justamente para você saber distinguir um do outro. Em PyPy ou GraalPy o resultado pode diferir.
- **`native_boundary.py` degrada com elegância**: se a libc não estiver acessível, ele informa em vez de
  estourar — código que cruza a fronteira nativa precisa ter caminho de erro.

## Como usar
Cada módulo aponta para um artefato como exemplo do formato de evidência esperado.
Copie o formato, não o conteúdo: a decisão precisa refletir o seu contexto real,
com trade-offs explícitos, testes e medição quando o tema for performance.

> Domínio se prova com código idiomático, tipos que passam no mypy, testes que
> sobrevivem à revisão e medição — não com leitura.
