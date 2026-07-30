# Evidência - plataforma e infraestrutura como código

## Imagem

```dockerfile
FROM eclipse-temurin:21-jdk AS build
WORKDIR /src
COPY . .
RUN ./gradlew clean test bootJar

FROM eclipse-temurin:21-jre
RUN useradd --system --uid 10001 app
USER 10001
COPY --from=build /src/build/libs/app.jar /app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

O pipeline deve gerar digest, SBOM, assinatura e proveniência. Nenhum segredo
entra em `ARG`, `ENV` ou layer.

## Workload Kubernetes

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: devcore
spec:
  replicas: 3
  selector:
    matchLabels: { app: devcore }
  template:
    metadata:
      labels: { app: devcore }
    spec:
      containers:
        - name: api
          image: registry.example/devcore@sha256:SUBSTITUIR
          resources:
            requests: { cpu: 250m, memory: 384Mi }
            limits: { memory: 512Mi }
          readinessProbe:
            httpGet: { path: /ready, port: 8080 }
          livenessProbe:
            httpGet: { path: /live, port: 8080 }
```

## Fronteira de rede

Comece com `default-deny` para ingress e egress. Libere DNS, entrada do gateway
e saídas para dependências nomeadas. Valide com teste positivo e negativo.

## Backend Terraform

```hcl
terraform {
  backend "s3" {
    bucket         = "devcore-tfstate"
    key            = "production/platform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "devcore-tf-lock"
    encrypt        = true
  }
}
```

Separe state por ownership e ciclo de vida. O plan revisado deve pertencer ao
mesmo commit aplicado.

## Pipeline IaC

Execute `fmt`, `validate`, `test`, `plan`, policy as code e apply controlado.
Use identidade efêmera e uma conta dedicada para testes que criam recursos.
