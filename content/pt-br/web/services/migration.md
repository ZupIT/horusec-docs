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
Para executar este serviço pode ser feito de duas formas veja abaixo:

* Manualmente, clone o projeto do [Horusec-Platform](https://github.com/ZupIT/horusec-platform) em sua máquina e rode o comando abaixo:
```bash
make migrate
```

* Execução docker, clone o projeto do [Horusec-Platform](https://github.com/ZupIT/horusec-platform) em sua máquina e rode a imagem docker:
  * Crie um volume com todos arquivos de migração;
  * Crie uma variável de ambiente para saber qual é o banco de dados que deverá ser executado, atualmente pode ser entre `platform` ou `analytic`;
  * Crie uma variável de ambiente para saber a URI de conexão com o banco de dados.

Veja abaixo um exemplo completo realizando a migração em ambos bancos de dados.


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
Neste útimo exemplo você pode verificar que as váriaveis: POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_SSL_MODE devem ser informadas para que a conexão seja realizada com sucesso.
{{% /alert %}}
