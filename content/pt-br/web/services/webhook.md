---
title: Webhook
weight: 70
description: Nesta seção, você encontra mais informações sobre o serviço Horusec-Webhook.
---

## **O que é?**

O Horusec-Webhook é um microsserviço responsável pelo disparo de dados para serviços de terceiros quando o broker está habilitado.

![](/docs/ptbr/web/services/webhook/0-arquitecture.jpg)

## **Requisitos**

Para rodar este serviço local, basta ter:

* PostgreSQL (com migrações aplicadas);
* Horusec-Auth;
* Golang.

## **Instalação**

**Passo 1:** Instale as dependências.

```bash
go get ./...
```

**Passo 2:** Rode o comando abaixo para executar o serviço:

```bash
go run ./horusec-webhook/cmd/app/main.go
```

Você deve receber este log como retorno:

```bash
service running on port :8008
swagger running on url:  http://localhost:8008/swagger/index.html
```

## **Variáveis de ambiente**

Estas são as possíveis váriaveis de ambiente que você pode configurar neste serviço.

| Nome da Variável                            | Valor Default          | Descrição                  |
|---------------------------------------------|-----------------------|------------------------------|
| HORUSEC_SWAGGER_HOST             | localhost                                                        | Obtém qual o host que estará disponível no swagger.| 
| HORUSEC_DATABASE_SQL_DIALECT     | postgres                                                         | Obtém o dialeto para conectar no banco de dados POSTGRES |
| HORUSEC_DATABASE_SQL_URI         | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable | Obtém o URI (identificador uniforme de recursos) para conectar no banco de dados POSTGRES. |
| HORUSEC_DATABASE_SQL_LOG_MODE    | false                                                            | Obtém o valor para habilitar logs no POSTGRES. |
| HORUSEC_PORT                     | 8008                                                             | Obtém a porta que o serviço irá iniciar. |
| HORUSEC_BROKER_HOST              | 127.0.0.1                                                        | Obtém host para se conectar ao broker RABBITMQ. | 
| HORUSEC_BROKER_PORT              | 5672                                                             | Obtém porta para conectar no broker RABBITMQ. |
| HORUSEC_BROKER_USERNAME          | guest                                                            | Obtém o nome de usuário para se conectar no broker RABBITMQ. |
| HORUSEC_BROKER_PASSWORD          | guest                                                            | Obtém a senha para se conectar no broker RABBITMQ. |
| HORUSEC_HTTP_TIMEOUT             | 60                                                               | Valida o tempo, em segundos, a esperar por uma resposta na requisição HTTP. |