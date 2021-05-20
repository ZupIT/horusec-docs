---
title: Migrating from 1.0 version to 2.0
weight: 0
description: >-
  In this section, you will find how to migrate from Horusec's 1.0 version to the 2.0 one.
---

On May 2021, Horusec made a change in its Github repositories:

- Now, the main repository **https://github.com/ZupIT/horusec** will be [**Horusec-CLI**](/docs/pt-br/cli) property.

- All the Web application was migrated to the **https://github.com/ZupIT/horusec-platform** repository.

With that, all the following services have a new repository: 
  * [**Horusec-API**](/docs/pt-br/web/services/api)
  * [**Horusec-Analytic**](/docs/pt-br/web/services/analytic)
  * [**Horusec-Auth**](/docs/pt-br/web/services/auth)
  * [**Horusec-Webhook**](/docs/pt-br/web/services/webhook)
  * [**Horusec-Messages**](/docs/pt-br/web/services/messages).

Other changes also happened: 
  * [**Horusec-Vulnerability**](/docs/web/services/vulnerability) was created, a new service responsible to manage all the vulnerabilities found on Horusec-CLI.
  * Horusec-Account service was renamed to [**Horusec-Core**](/docs/web/services/core/), it will represent better its function in the platform. 

### Requisites:
Check out below the requirements in the 2.0 version: 

- **RabbitMQ**: minor version 3.0;
- **PostgreSQL**: minor version 11.6;


Postgresql was already a requirement in Horusec's older version, with only one database and the name was suggested by Horusec's team in its configuration files.
  - `horusec_db`

Now, the new version, you need to create a new database on PostgreSQL and the name was suggested by Horusec's team in its configuration file:
  - `horusec_analytic_db`


It was necessary to separate the database because the Horusec-API service is loaded with a lot of writing and Horusec-Analytic with reading and these are the critical points of the solution, it has a high availability.

### Optional:
There wasn't a new change on the optional requirement, it continues:

- A connection with a server [**SMTP**](/docs/tutorials/how-to-enable-disable-messaging-service/) for triggering e-mails. 

### Migração:
To continue the migration, follow the next steps: 

**Step 1:** Update the services with the lastest version available **v2.12.0**:
 - [**Horusec-API**](https://hub.docker.com/r/horuszup/horusec-api)
 - [**Horusec-Analytic**](https://hub.docker.com/r/horuszup/horusec-analytic)
 - [**Horusec-Auth**](https://hub.docker.com/r/horuszup/horusec-auth)
 - [**Horusec-Webhook**](https://hub.docker.com/r/horuszup/horusec-webhook)
 - [**Horusec-Messages**](https://hub.docker.com/r/horuszup/horusec-messages)
 - [**Horusec-Vulnerability**](https://hub.docker.com/r/horuszup/horusec-vulnerability)
 - [**Horusec-Core**](https://hub.docker.com/r/horuszup/horusec-core)

**Step 2:** Perform the data synchronization to a new version: 
  * Add the environment variables and its values in the as váriaveis de ambiente **Horusec-Analytic** service: 
<table>
    <thead>
        <tr>
            <th style="text-align:left">Variável de ambiente</th>
            <th style="text-align:left">Valor</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:left">HORUSEC_DATABASE_SQL_URI</td>
            <td style="text-align:left">postgresql://root:root@postgresql:5432/horusec_analytic_db?sslmode=disable</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_DATABASE_HORUSEC_SQL_URI</td>
            <td style="text-align:left">{{CONEXÃO COM O BANCO DE DADOS EXISTENTE}}</td>
        </tr>
    </tbody>
</table>


1. **Helm**:
If you are using helm, a job inside the helm's files was already added to be triggered when a new version is executed. 

2. **Docker-Compose**:
If you are using docker-compose, it is necessary to run the migration script of from the older version to the newer. To do that, run the following commands:

```bash
docker exec \
-e HORUSEC_DATABASE_SQL_URI=postgresql://root:root@postgresql:5432/horusec_analytic_db?sslmode=disable \
-e HORUSEC_DATABASE_HORUSEC_SQL_URI=postgresql://root:root@postgresql:5432/horusec_analytic_db?sslmode=disable \
-i horusec-analytic /analytic/horusec-analytic-v1-to-v2-migrate
```

```bash
docker exec \
-e HORUSEC_DATABASE_SQL_URI=postgresql://root:root@postgresql:5432/horusec_analytic_db?sslmode=disable \
-i horusec-api /api/horusec-api-v1-to-v2-migrate
```

**Step 3:** [**Update the CLI**](/docs/cli/installation/) to the lastest version.
