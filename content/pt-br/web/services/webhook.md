---
title: Webhook
weight: 70
description: Nesta seção, você vai encontrar mais informações referentes do serviço Horusec-Webhook.
---

# Horusec-Webhook
Este serviço é responsável pelo disparo de dados para serviços de terceiros quando o broker está habilitado.

![](/docs/ptbr/web/services/webhook/0-arquitecture.jpg)

## **Requisitos**
Para rodar este serviço localmente basta ter:
* PostgreSQL (com migrações aplicadas)
* Horusec-Auth
* Golang

## **Instalando dependencias**
```bash
go get ./...
```

## **Rodando**
Para executar o serviço, você pode executar o seguinte comando
```bash
go run ./horusec-webhook/cmd/app/main.go
```

E você vê o log
```bash
service running on port :8008
swagger running on url:  http://localhost:8008/swagger/index.html
```

## **Variáveis de ambiente**
Essas são as possíveis váriaveis de ambiente que você pode configurar neste serviço.

| Environment Name                              | Default Value                                                                              | Description                                                  |
|-----------------------------------------------|--------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| HORUSEC_SWAGGER_HOST                          | 0.0.0.0                                                                                    | This environment get host to run in swagger                  |
| HORUSEC_BROKER_HOST                           | 127.0.0.1                                                                                  | This environment get host to connect on broker RABBITMQ        | 
| HORUSEC_BROKER_PORT                           | 5672                                                                                       | This environment get port to connect on broker RABBITMQ        |
| HORUSEC_BROKER_USERNAME                       | guest                                                                                      | This environment get username to connect on broker RABBITMQ    |
| HORUSEC_BROKER_PASSWORD                       | guest                                                                                      | This environment get password to connect on broker RABBITMQ    |
| HORUSEC_DATABASE_SQL_URI                      | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable                           | This environment get uri to connect on database POSTGRES     |
| HORUSEC_DATABASE_SQL_DIALECT                  | postgres                                                                                   | This environment get dialect to connect on database POSTGRES |
| HORUSEC_DATABASE_SQL_LOG_MODE                 | false                                                                                      | This environment get bool to enable logs on POSTGRES         |
| HORUSEC_PORT                                  | 8008                                                                                       | This environment get the port that the service will start    |
| HORUSEC_HTTP_TIMEOUT                          | 60                                                                                         | This environment get the time in seconds for wait response of request http |