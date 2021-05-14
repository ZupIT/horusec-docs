---
title: Analytic
weight: 40
description: In this section, you will find information about Horusec-Analytic service.
---

## **What is it?**
Horusec-Analytic receives via broker the analysis and it saves in your database the necessary data that it will be showed in the horusec-manager's dashboard.


![](/docs/ptbr/web/services/analytic/0-arquitecture.jpg)

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
go run ./analytic/cmd/app/main.go
```

It will return this log:
```bash
service running on port :8005
swagger running on url:  http://localhost:8005/swagger/index.html
```

## **Environment variables**
These are the environment variables you can configure in this service:

| Environment Name                 | Default Value                                                    | Description                                                  |
|----------------------------------|------------------------------------------------------------------|--------------------------------------------------------------|
| HORUSEC_SWAGGER_HOST             | localhost                                                        | This environment variable gets which swagger host will be available.|
| HORUSEC_DATABASE_SQL_URI         | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable | This environment variable gets the URI to connect to POSTGRES database. |
| HORUSEC_DATABASE_SQL_LOG_MODE    | false                                                            | This environment variable gets the value to enable POSTGREs logs. |
| HORUSEC_PORT                     | 8005                                                             | This environment variable gets the port the service will start. | 
HORUSEC_BROKER_HOST                     | 127.0.0.1                                                             | It gets the host to connect to the RABBITMQ broker. | 
HORUSEC_BROKER_PORT                     | 5672                                                             | It gets the port to connect to the RABBITMQ broker. |
HORUSEC_BROKER_USERNAME                     | guest                                                            | It gets the user name to connect to the RABBITMQ broker. | 
HORUSEC_BROKER_PASSWORD                   | 127.0.0.1                                                             | It gets the host to connect to the RABBITMQ broker. |
| HORUSEC_GRPC_AUTH_URL            | localhost:8007                                                   | This environment variable gets the horusec-auth connection with GRCP. |
| HORUSEC_GRPC_USE_CERTS           | false                                                            | This environment variable gets if the GRCP certificate use is enabled or not. |
| HORUSEC_GRPC_CERT_PATH           |                                                                  |  This environment variable gets the GRCP certificate path. | 