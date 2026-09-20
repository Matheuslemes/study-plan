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

## Fronteira — módulos 21–26

Cada um destes arquivos tem um `main` próprio e é feito para ser **executado com flags diferentes**, não apenas lido.
O valor está na comparação entre execuções, não na saída de uma só.

| Módulo | Arquivo | Execute assim |
| --- | --- | --- |
| 21 | `BytecodeAndAgents.java` | `javap -c -p -classpath out dev.studyplan.javaexpert.BytecodeAndAgents` — preveja o bytecode antes |
| 22 | `JitAndEscapeAnalysis.java` | normal, depois `-Xint`, `-XX:TieredStopAtLevel=1` e `-XX:-DoEscapeAnalysis` |
| 23 | `LowLevelMemory.java` | exercitado pelo `CompileSmoke`; para false sharing, compare `AdjacentCounters` e `PaddedCounters` sob threads crescentes |
| 24 | `StartupAndAot.java` | baseline, depois `-XX:ArchiveClassesAtExit=app.jsa` e `-XX:SharedArchiveFile=app.jsa` |
| 25 | `ForeignMemoryAndVectors.java` | leia o round-trip do layout e escreva a versão FFM (exige JDK 22+) |
| 26 | `ReadingTheJdk.java` | rode, observe a razão dos tempos e explique lendo `treeifyBin` no OpenJDK |

### Duas limitações declaradas

Estes exemplos mantêm a regra da Academia — `--release 21`, sem preview, sem dependência externa — e isso tem dois
efeitos que o próprio conteúdo dos módulos explica:

- **Sem FFM real.** A Foreign Function & Memory API só ficou final no JDK 22 (JEP 454). O módulo 25 ensina a parte
  independente de versão (layout declarado versus offsets mágicos) e deixa o código de migração documentado.
- **Sem geração de bytecode.** A Class-File API (JEP 484) é final no JDK 24 e ASM seria dependência externa. O agent
  do módulo 21 é um esqueleto real com filtro de escopo; a reescrita de bytecode é o exercício que você faz por fora.

### Medição

`JitAndEscapeAnalysis` tem warmup e sink, mas **não é JMH** — não há forks, nem intervalo de confiança, nem controle de
variância. Ele existe para tornar o efeito visível sem dependência. O exercício expert do módulo 22 é justamente
refazer a medição em JMH e verificar se a conclusão sobrevive.
