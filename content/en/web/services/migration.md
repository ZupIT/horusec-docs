---
title: Migration
weight: 90
description: In this section, you will find information about migration service to the database. 
---

## **What is it?**
Horusec-Migration is a microservice resposible for the migration on Horusec's database. It is based on [**golang-migrate**](https://github.com/golang-migrate/migrate)

 
## **Requisites**
To run locally run this service, you will need: 
* PostgreSQL
* Docker

## **Execute**

There are two ways you can execute this service, see them below: 

1.  Manually: Clone the [Horusec-Platform](https://github.com/ZupIT/horusec-platform)project in your machine and run the command below:

```bash
make migrate
```

2. Docker: Clone the [Horusec-Platform](https://github.com/ZupIT/horusec-platform) project in your machine and run the docker image:

  * Create a volume with all the migration files;
  * Create an environment variable to know which database it should be executed, it can be `platform` or `analytic`;
  * Create a an environment variable to know the URI connection with the database. 


Check out below the example where the migration happens in both database:


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
 The variables: **POSTGRES_USER**, **POSTGRES_PASSWORD**, **POSTGRES_HOST**, **POSTGRES_PORT**, **POSTGRES_SSL_MODE** must be informed, this way the connection will happen successfully.
{{% /alert %}}