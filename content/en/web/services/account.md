---
title: Account
weight: 30
description: In this section, you will find more information about Horusec-Account service. 
---

## **What is it?**
Horusec-Account is responsible for the management of workspaces, repository, webhooks and access updates.

![](/docs/ptbr/web/services/core/0-arquitecture.png)

## **Requisites**
To run this service locally, you need: 
* PostgreSQL (with the applied migration)
* RabbitMQ (only if you have the broker enabled)
* Horusec-Auth
* Golang

## **Installation**

**Step 1:** Install dependencies: 
```bash
go get ./...
```

**Step 2:** Run the service with the command below: 

```bash
go run ./horusec-analytic/cmd/app/main.go
```

It will return this log:

```bash
service running on port :8003
swagger running on url:  http://localhost:8003/swagger/index.html
```

## **Environment variables**
These are the possible environment variables you can configure in this service:  

| Environment Name                 | Default Value                                                    | Description                                                  |
|----------------------------------|------------------------------------------------------------------|--------------------------------------------------------------|
| HORUSEC_SWAGGER_HOST             | localhost                                                        | This environment variable gets which host swagger will be available. | 
| HORUSEC_DATABASE_SQL_DIALECT     | postgres                                                         | This environment variable gets the dialect to connet POSTGRES database.|
| HORUSEC_DATABASE_SQL_URI         | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable | This environment variable gets the URI to connect to POSTGRES database. |
| HORUSEC_DATABASE_SQL_LOG_MODE    | false                                                            | This environment variable gets the value to enable POSTGREs logs. |
| HORUSEC_PORT                     | 8003                                                             | This environment variable gets the port the service will start. |
| HORUSEC_GRPC_AUTH_URL            | localhost:8007                                                   | This environment variable gets the horusec-auth GRCP connection URL. |
| HORUSEC_GRPC_USE_CERTS           | false                                                            | This environment variable gets if the GCRP certificate is active or not. |
| HORUSEC_GRPC_CERT_PATH           |                                                                  | This environment variable gets the GCRP certification path. | 