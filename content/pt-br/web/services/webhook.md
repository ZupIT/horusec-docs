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

| Environment Name                            | Default Value         | Description                  |
|---------------------------------------------|-----------------------|------------------------------|
| HORUSEC_SWAGGER_HOST             | localhost                                                        | Esta variável de ambiente obtém qual é o host que estará disponível o swagger| 
| HORUSEC_DATABASE_SQL_DIALECT     | postgres                                                         | Esta variável de ambiente obtém dialeto para conectar no banco de dados POSTGRES |
| HORUSEC_DATABASE_SQL_URI         | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable | Esta variável de ambiente obtém uri para conectar no banco de dados POSTGRES |
| HORUSEC_DATABASE_SQL_LOG_MODE    | false                                                            | Esta variável de ambiente obtém o valor para habilitar logs no POSTGRES |
| HORUSEC_PORT                     | 8008                                                             | Esta variável de ambiente obtém a porta que o serviço irá iniciar |
| HORUSEC_BROKER_HOST              | 127.0.0.1                                                        | Esta variável de ambiente obtém host para se conectar ao broker RABBITMQ | 
| HORUSEC_BROKER_PORT              | 5672                                                             | Esta variável de ambiente obtém porta para conectar no broker RABBITMQ |
| HORUSEC_BROKER_USERNAME          | guest                                                            | Esta variável de ambiente obtém nome de usuário para se conectar no broker RABBITMQ |
| HORUSEC_BROKER_PASSWORD          | guest                                                            | Esta variável de ambiente obtém a senha para se conectar no broker RABBITMQ |
| HORUSEC_HTTP_TIMEOUT             | 60                                                               | Esta variável de ambiente obtém o tempo em segundos a esperar por uma resposta na requisição HTTP |