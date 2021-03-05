---
title: Analytic
weight: 40
description: In this section, you will find information about Horusec-Analytic service.
---

# Horusec-Analytic
Horusec-Analytic reads the database and shows the generated data by analysis and then returns to the horusec-manager dashboard. 
This service is integrated with GraphQL to return details of the vulnerabilities found and also the analytical content found. 

![](/docs/ptbr/web/services/analytic/0-arquitecture.jpg)

## **Requisites**
To locally run this service, you will need:
* PostgreSQL (with the migration applied);
* Horusec-Auth;
* Golang.

## **Installing dependencies**
```bash
go get ./...
```

## **Run the service**
Just run the command below: 

```bash
go run ./horusec-analytic/cmd/app/main.go
```

And you will see the log:
```bash
service running on port :8005
swagger running on url:  http://localhost:8005/swagger/index.html
```

## **Environment variables**
These are the environment variables you can configure in this service:

| Environment Name                 | Default Value                                                    | Description                                                  |
|----------------------------------|------------------------------------------------------------------|--------------------------------------------------------------|
| HORUSEC_SWAGGER_HOST             | localhost                                                        | This environment variable gets which swagger host will be available.| 
| HORUSEC_DATABASE_SQL_DIALECT     | postgres                                                         | This environment variable gets the dialect to connet POSTGRES database. |
| HORUSEC_DATABASE_SQL_URI         | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable | This environment variable gets the URI to connect to POSTGRES database. |
| HORUSEC_DATABASE_SQL_LOG_MODE    | false                                                            | This environment variable gets the value to enable POSTGREs logs. |
| HORUSEC_PORT                     | 8005                                                             | This environment variable gets the port the service will start. |
| HORUSEC_GRPC_AUTH_URL            | localhost:8007                                                   | This environment variable gets the horusec-auth connection with GRCP. |
| HORUSEC_GRPC_USE_CERTS           | false                                                            | This environment variable gets if the GRCP certificate use is enabled or not. |
| HORUSEC_GRPC_CERT_PATH           |                                                                  |  This environment variable gets the GRCP certificate path. | 