# Construct como produto — artefato do módulo 25

> Template copiado diverge no primeiro mês. Abstração sem escotilha é abandonada
> no primeiro caso não previsto. O equilíbrio exige contrato.

## 1. Os três níveis, e onde cada um serve

| Nível | O que é | Quando usar |
| --- | --- | --- |
| **L1** — recurso bruto | espelho 1:1 do CloudFormation, sem opinião | quando o nível acima não cobre; é a escotilha de saída |
| **L2** — recurso com padrões | um recurso, com defaults sensatos e API enxuta | uso cotidiano |
| **L3** — padrão | vários recursos compondo uma solução | o seu construct interno mora aqui |

O seu construct organizacional é L3: ele carrega a **decisão** da organização.

## 2. Interface: expor decisão, esconder mecânica

```ts
// RUIM — 20 parâmetros, nenhuma decisão embutida.
// É uma camada a mais sem valor: repassa tudo.
new ServiceBucket(this, 'B', {
  encryption, bucketKeyEnabled, versioned, blockPublicAccess,
  lifecycleRules, serverAccessLogsBucket, enforceSSL, /* ... */
});

// BOM — 3 decisões de negócio. O resto é padrão da organização.
new ServiceBucket(this, 'B', {
  dataClassification: 'confidential',   // decide criptografia e retenção
  retention: Duration.days(90),         // decide lifecycle
  crossAccountReaders: ['123456789012'] // decide política
});
```

Regra: se o parâmetro não corresponde a uma **decisão que alguém precisa tomar**,
ele não pertence à interface.

## 3. Seguro por omissão

O construct aplica, sem ninguém pedir:

- [ ] criptografia em repouso com chave gerenciada pela organização
- [ ] acesso público bloqueado
- [ ] TLS obrigatório em trânsito
- [ ] log de acesso habilitado e direcionado ao destino central
- [ ] tags de custo e propriedade
- [ ] retenção conforme a classificação do dado

Isso transforma a correção de segurança seguinte em **atualizar uma versão**, em
vez de caçar quarenta cópias.

## 4. A escotilha de saída

**É o que separa abstração de prisão.**

```ts
const bucket = new ServiceBucket(this, 'B', { /* ... */ });

// Caso não previsto: acesse o recurso subjacente e ajuste.
const cfn = bucket.node.defaultChild as s3.CfnBucket;
cfn.addPropertyOverride('...', valor);
```

Documente a escotilha na interface pública. Sem ela, o primeiro caso fora do
padrão faz o time abandonar o construct inteiro — e voltar ao template copiado.

## 5. Validação em tempo de síntese

Falhar na síntese é barato: o erro aparece para quem escreveu, antes do deploy.

```ts
// Barra a configuração insegura antes de virar template.
if (props.dataClassification === 'confidential' && props.publicRead) {
  throw new Error(
    'dado confidencial não pode ter leitura pública. ' +
    'Se houver exceção aprovada, registre um ADR e use o L1 diretamente.'
  );
}
```

Repare que a mensagem **diz o que fazer** — inclusive como obter a exceção.

## 6. Contrato do construct

| Campo | Valor |
| --- | --- |
| Nome / versão | `@org/service-bucket` 2.1.0 |
| Consumidores | 23 pilhas, 7 times |
| Garante | criptografia, bloqueio público, log, tags, retenção |
| Exige | classificação do dado, retenção |
| Escotilha | `node.defaultChild` documentado |
| Mudança quebrante | 90 dias de aviso + guia de migração |
| Testes | template sintetizado, em CI |

## 7. Testar pelo template sintetizado

Não teste o deploy: teste o **template gerado**. É rápido e roda em CI.

```ts
const template = Template.fromStack(stack);
template.hasResourceProperties('AWS::S3::Bucket', {
  BucketEncryption: Match.objectLike({ /* ... */ }),
  PublicAccessBlockConfiguration: {
    BlockPublicAcls: true, BlockPublicPolicy: true,
    IgnorePublicAcls: true, RestrictPublicBuckets: true,
  },
});
```

E, como no módulo 26 da trilha de DevOps: **teste também que a configuração
errada falha**. Suite que só cobre o caminho feliz não protege ninguém.

## 8. Quando NÃO criar um construct

- Menos de três usos reais → espere. Abstração prematura custa mais que repetição.
- O recurso nativo já tem bons defaults → não embrulhe por embrulhar.
- Ninguém vai manter → construct sem dono vira dívida com prazo.
