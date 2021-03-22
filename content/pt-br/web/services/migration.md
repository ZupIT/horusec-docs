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

Clone o projeto do Horusec em sua máquina e rode o comando abaixo:

```bash
MIGRATION_PATH="./development-kit/pkg/databases/relational/migration" \
POSTGRES_USER="root" \
POSTGRES_PASSWORD="root" \
POSTGRES_HOST="localhost" \
POSTGRES_PORT="5432" \
POSTGRES_DB_NAME="horusec_db" \
POSTGRES_SSL_MODE="disable" \
docker run --name migrate \
        --rm -v "$(pwd)/$MIGRATION_PATH:/migrations" \
        --network=container:postgresql migrate/migrate:v4.13.0 \
        -path=/migrations/ \
        -database postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST:$POSTGRES_PORT/$POSTGRES_DB_NAME?sslmode=$POSTGRES_SSL_MODE \
        up
```

ou rode pela imagem docker criada pelo horusec `horuszup/horusec-migration:latest`
