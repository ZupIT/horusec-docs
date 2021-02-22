---
title: Migration
weight: 100
description: Nesta seção, você vai encontrar mais informações referentes do serviço de migração para o banco de dados.
---

# Horusec-Migration
Este serviço é responsável por realizar a migração no banco de dados do horusec. Este serviço é baseado no [golang-migrate](https://github.com/golang-migrate/migrate)


## **Requisitos**
Para rodar este serviço localmente basta ter:
* PostgreSQL
* Docker

## **Rodando**
Clone o projeto do horusec em sua máquina e rode o comando baixo

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
