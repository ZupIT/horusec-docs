---
title: Api
weight: 50
description: Nesta seção, você encontra mais informações sobre o serviço Horusec-Api.
---

## **O que é?** 

O Horusec-API é um microsserviço responsável por receber solicitações [**Horusec-CLI**](http://localhost:1313/docs/pt-br/cli/introduction/) via solicitação HTTP para iniciar uma nova análise. Ele também adquire e devolve as análises salvas no sistema.

Este serviço possui alguns recursos:

* Receber uma nova análise de código;
* Adquirir os dados enviados pela [Horusec-CLI](http://localhost:1313/docs/pt-br/cli/introduction/);
* Salvar os dados em um sistema centralizado;
* Se configurado, publicar a análise na fila do webhook para enviá-la a terceiros.

![](/docs/ptbr/web/services/api/0-arquitecture.jpg)

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
go run ./horusec-api/cmd/app/main.go
```

Você deve receber este log como retorno:

```bash
service running on port :8000
swagger running on url:  http://localhost:8000/swagger/index.html
```

## **Variáveis de ambiente**

Estas são as possíveis váriaveis de ambiente que você pode configurar neste serviço.

| Nome da Variável de Ambiente                 | Valor Default                                                     | Descrição                                                  |
|----------------------------------|------------------------------------------------------------------|--------------------------------------------------------------|
| HORUSEC_SWAGGER_HOST             | localhost                                                        | Obtém qual o host que estará disponível no swagger.| 
| HORUSEC_DATABASE_SQL_DIALECT     | postgres                                                         | Obtém o dialeto para conectar ao banco de dados POSTGRES. |
| HORUSEC_DATABASE_SQL_URI         | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable | Obtém o URI (identificador uniforme de recursos) para conectar no banco de dados POSTGRES |
| HORUSEC_DATABASE_SQL_LOG_MODE    | false                                                            | Obtém o valor para habilitar logs no POSTGRES. |
| HORUSEC_PORT                     | 8000                                                             | Obtém a porta que o serviço irá iniciar. |
| HORUSEC_GRPC_AUTH_URL            | localhost:8007                                                   | Obtém a URL `horusec-auth` de conexão com o GRPC. |
| HORUSEC_GRPC_USE_CERTS           | false                                                            | Valida se o uso de certificados no GRPC está ativo ou não. |
| HORUSEC_GRPC_CERT_PATH           |                                                                  | Obtém o caminho do certificado GRPC. | 
| HORUSEC_DISABLED_BROKER          | false                                                            | Valida se o broker está habilitado ou não. | 
| HORUSEC_BROKER_HOST              | 127.0.0.1                                                        | Obtém host para se conectar ao broker RABBITMQ. | 
| HORUSEC_BROKER_PORT              | 5672                                                             | Obtém porta para conectar no broker RABBITMQ. |
| HORUSEC_BROKER_USERNAME          | guest                                                            | Obtém nome de usuário para se conectar no broker RABBITMQ. |
| HORUSEC_BROKER_PASSWORD          | guest                                                            | Obtém a senha para se conectar no broker RABBITMQ. |
| HORUSEC_MANAGER_URL              | http://localhost:8043                                            | Valida onde está o link do serviço `horusec-manager` para enviar nos disparos de webhook. |
