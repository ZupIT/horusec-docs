---
title: API
weight: 50
description: In this section, you will find information about Horusec-API service.
---

## **What is it?**
Horusec-API is microservice responsible for [**HORUSEC-CLI**]({{< ref path="/cli/overview.md" lang="en">}}) requests via  HTTP to start a new analysis. It also acquires and returns the saved analysis in the system. 

This service resources:

* Receive a new code analysis:
* Gets the sent data to [**HORUSEC-CLI**]({{< ref path="/cli/overview.md" lang="en">}});
* Saves in a centered system;
* If it is configured, publishes the analysis in the webhook like to send it to someone else.

![](/docs/ptbr/web/services/api/0-arquitecture.png)

## **Requisites**

To locally run this service, you will need:

* PostgreSQL (with the migration applied);
* RabbitMQ;
* Horusec-Auth;
* Golang.

## **Installation**

**Step 1:** Install dependencies: 
```bash
go get ./...
```

**Step 2:** Run the service with the command below:

```bash
go run ./api/cmd/app/main.go
```

It will return this log:

```bash
service running on port :8000
swagger running on url:  http://localhost:8000/swagger/index.html
```

## **Environment variables**
These are the environment variables you can configure in this service:

| Environment Name                 | Default Value                                                    | Description                                                  |
|----------------------------------|------------------------------------------------------------------|--------------------------------------------------------------|
| HORUSEC_SWAGGER_HOST             | localhost                                                        | This environment variable gets which swagger host will be available.|
| HORUSEC_DATABASE_SQL_URI         | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable | This environment variable gets the URI to connect to POSTGRES database.  |
| HORUSEC_DATABASE_SQL_LOG_MODE    | false                                                            | This environment variable gets the value to enable POSTGREs logs. |
| HORUSEC_PORT                     | 8000                                                             | This environment variable gets the port the service will start. |
| HORUSEC_GRPC_AUTH_URL            | localhost:8007                                                   | This environment variable gets the connection GRCP horusec-auth URL. |
| HORUSEC_GRPC_USE_CERTS           | false                                                            | This environment variable gets if the GRCP certificate is enabled or not. |
| HORUSEC_GRPC_CERT_PATH           |                                                                  | This environment variable gets the GRCP certificate path.|
| HORUSEC_BROKER_HOST              | 127.0.0.1                                                        | This environment variable gets host a host to connect to RABBITMQ broker. | 
| HORUSEC_BROKER_PORT              | 5672                                                             | This environment variable gets the port to connect to  RABBITMQ broker. |
| HORUSEC_BROKER_USERNAME          | guest                                                            | This environment variable gets the user name to connect to RABBITMQ broker. |
| HORUSEC_BROKER_PASSWORD          | guest                                                            | This environment variable gets the password to connect to RABBITMQ broker. |