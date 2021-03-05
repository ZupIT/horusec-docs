---
title: Migration
weight: 90
description: In this section, you will find information about migration service to the database. 
---

# Horusec-Migration
This service migrates the database on Horusec. It is based on [golang-migrate](https://github.com/golang-migrate/migrate)


## **Requisites**
To run locally run this service, you will need: 
* PostgreSQL
* Docker

## **Run the service**
Clone Horusec project and run the command below:

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

- You can also run through docker image created by Horusec: `horuszup/horusec-migration:latest`
