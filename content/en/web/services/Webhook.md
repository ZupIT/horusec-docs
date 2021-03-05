---
title: Webhook
weight: 70
description: In this section, you will find information about Horusec-Webhook service. 
---

# Horusec-Webhook
This service triggers the data to third party services when the broker is enabled.

![](/docs/ptbr/web/services/webhook/0-arquitecture.jpg)

## **Requisites**
To locally run this service, you will need: 
* PostgreSQL (with migration applied);
* Horusec-Auth;
* Golang.

## **Installing dependencies**
```bash
go get ./...
```

## **Run the service**
Just run the command below: 

```bash
go run ./horusec-webhook/cmd/app/main.go
```

And you will see the log:

```bash
service running on port :8008
swagger running on url:  http://localhost:8008/swagger/index.html
```

## **Environment variables**
These are the environment variables you can configure in this service: 


| Environment Name                            | Default Value         | Description                  |
|---------------------------------------------|-----------------------|------------------------------|
| HORUSEC_SWAGGER_HOST             | localhost                                                        | This environment variable gets which swagger host will be available.| 
| HORUSEC_DATABASE_SQL_DIALECT     | postgres                                                         | This environment variable gets the dialect to connet POSTGRES database. |
| HORUSEC_DATABASE_SQL_URI         | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable | This environment variable gets the URI to connect to POSTGRES database.|
| HORUSEC_DATABASE_SQL_LOG_MODE    | false                                                            | This environment variable gets the value to enable POSTGREs logs. |
| HORUSEC_PORT                     | 8008                                                             | This environment variable gets the port the service will start. |
| HORUSEC_BROKER_HOST              | 127.0.0.1                                                        | This environment variable gets a host to connect to RABBITMQ broker. | 
| HORUSEC_BROKER_PORT              | 5672                                                             | This environment variable gets the port to connect to  RABBITMQ broker. |
| HORUSEC_BROKER_USERNAME          | guest                                                            | This environment variable gets the user name to connect to RABBITMQ broker. |
| HORUSEC_BROKER_PASSWORD          | guest                                                            | This environment variable gets the password to connect to RABBITMQ broker. |
| HORUSEC_HTTP_TIMEOUT             | 60                                                               | This environment variable gets time in seconds to wait for a response after a HTTP request. |