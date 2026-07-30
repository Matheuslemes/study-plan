# Exemplos compiláveis — Academia Java 21+

Este diretório contém exemplos deliberadamente pequenos, sem framework e sem recursos preview. Eles sustentam os
módulos de linguagem, contratos, collections, streams, I/O, tempo e concorrência.

## Baseline

- Java 21 ou superior;
- compilação com `--release 21`;
- nenhuma dependência externa;
- warnings habilitados com `-Xlint:all`.

## Compilar e executar

No diretório `public/examples/java21-senior`:

```powershell
$sources = Get-ChildItem -Recurse -Filter *.java -Path src
javac --release 21 -Xlint:all -d out $sources.FullName
java -ea -cp out dev.studyplan.javaexpert.CompileSmoke
```

O smoke test usa assertions; `-ea` é obrigatório.

## Laboratórios operacionais dos módulos 11–13

Os módulos de JVM/GC/performance exigem processo e medição, não apenas um snippet. Use o `CompileSmoke` como carga
controlada e registre:

1. bytecode: `javap -c -p -classpath out dev.studyplan.javaexpert.DomainModeling`;
2. inventário da JVM: `jcmd -l` e `jcmd <pid> VM.version`;
3. thread dump: `jcmd <pid> Thread.print -l`;
4. JFR: `jcmd <pid> JFR.start name=academy settings=profile duration=60s filename=academy.jfr`;
5. heap: prefira `GC.class_histogram`; `GC.heap_dump` tem impacto alto e pode conter dados sensíveis;
6. GC: habilite logging numa carga descartável e compare live set, alocação, pausas e CPU.

Não use esses comandos em produção sem autorização, capacidade de armazenamento, política de dados e avaliação do
impacto.
