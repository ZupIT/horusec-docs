---
title: Migration
weight: 100
description: Nesta seção, você encontra mais informações sobre o serviço de migração para o banco de dados.
---

## **O que é?** 

O Horusec-Migration é um microsserviço responsável por realizar a migração no banco de dados do Horusec. Ele é baseado no [**golang-migrate**](https://github.com/golang-migrate/migrate)


## **Requisitos**

Para rodar este serviço local, basta ter:

* PostgreSQL;
* Docker.

## **Execução**
Você pode executar esse serviço de duas formas, veja abaixo: 

1.  Manualmente: Clone o projeto do [**Horusec-Platform**](https://github.com/ZupIT/horusec-platform) em sua máquina e rode o comando abaixo:
```bash
make migrate
```

2. Execução docker: Clone o projeto do [**Horusec-Platform**](https://github.com/ZupIT/horusec-platform) em sua máquina e rode a imagem docker:

  * Crie um volume com todos arquivos de migração;
  * Crie uma variável de ambiente para saber qual o banco de dados deverá ser executado, pode ser o `platform` ou o `analytic`;
  * Crie uma variável de ambiente para saber a URI de conexão com o banco de dados.

Veja abaixo um exemplo onde a migração ocorre nos dois bancos de dados:


```bash
HORUSEC_DEFAULT_DATABASE_SQL_URI="postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST:$POSTGRES_PORT/horusec_db?sslmode=$POSTGRES_SSL_MODE"

HORUSEC_ANALYTIC_DATABASE_SQL_URI="postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST:$POSTGRES_PORT/horusec_analytic_db?sslmode=$POSTGRES_SSL_MODE"

docker run --name migrate --rm \
   -v "$(pwd)/migrations/source:/horusec-migrations" \
   -e HORUSEC_DATABASE_SQL_URI=$HORUSEC_DEFAULT_DATABASE_SQL_URI \
   -e MIGRATION_NAME=platform \
   --network=container:horusec_postgresql \
   horuszup/horusec-migrations:latest \
   up

docker run --name migrate --rm \
   -v "$(pwd)/migrations/source:/horusec-migrations" \
   -e HORUSEC_DATABASE_SQL_URI=$HORUSEC_ANALYTIC_DATABASE_SQL_URI \
   -e MIGRATION_NAME=analytic \
   --network=container:horusec_postgresql \
   horuszup/horusec-migrations:latest \
   up
```


{{% alert color="info" %}}
 As váriaveis: **POSTGRES_USER**, **POSTGRES_PASSWORD**, **POSTGRES_HOST**, **POSTGRES_PORT**, **POSTGRES_SSL_MODE** devem ser informadas para que a conexão seja realizada com sucesso.
{{% /alert %}}
