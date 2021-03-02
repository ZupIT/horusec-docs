---
title: Api
weight: 50
description: Nesta seção, você vai encontrar mais informações referentes do serviço Horusec-Api.
---

# Horusec-API
Horusec-API é responsável por receber solicitações [HORUSEC-CLI](http://localhost:1313/docs/pt-br/cli/introduction/) via solicitação http para iniciar uma nova análise.Além de ser responsável por adquirir e devolver as análises salvas no sistema!

Este serviço terá dois recursos:

* Receba uma nova análise de código:
* Adquirir os dados enviados pela [HORUSEC-CLI](http://localhost:1313/docs/pt-br/cli/introduction/);
* Salvar em um sistema centralizado;
* Se tiver configurado publique na fila do webhook a fim de enviar esta análise a terceiros.

![](/docs/ptbr/web/services/api/0-arquitecture.jpg)

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
go run ./horusec-api/cmd/app/main.go
```

E você vê o log
```bash
service running on port :8000
swagger running on url:  http://localhost:8000/swagger/index.html
```

## **Variáveis de ambiente**
Essas são as possíveis váriaveis de ambiente que você pode configurar neste serviço.

| Environment Name                 | Default Value                                                    | Description                                                  |
|----------------------------------|------------------------------------------------------------------|--------------------------------------------------------------|
| HORUSEC_SWAGGER_HOST             | localhost                                                        | Esta variável de ambiente obtém qual é o host que estará disponível o swagger| 
| HORUSEC_DATABASE_SQL_DIALECT     | postgres                                                         | Esta variável de ambiente obtém dialeto para conectar no banco de dados POSTGRES |
| HORUSEC_DATABASE_SQL_URI         | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable | Esta variável de ambiente obtém uri para conectar no banco de dados POSTGRES |
| HORUSEC_DATABASE_SQL_LOG_MODE    | false                                                            | Esta variável de ambiente obtém o valor para habilitar logs no POSTGRES |
| HORUSEC_PORT                     | 8000                                                             | Esta variável de ambiente obtém a porta que o serviço irá iniciar |
| HORUSEC_GRPC_AUTH_URL            | localhost:8007                                                   | Esta variável de ambiente obtém o url horusec-auth de conexão com o GRPC |
| HORUSEC_GRPC_USE_CERTS           | false                                                            | Esta variável de ambiente obtém se o uso de certificados no GRPC está ativo ou não |
| HORUSEC_GRPC_CERT_PATH           |                                                                  | Esta variável de ambiente obtém o caminho do certificado GRPC | 
| HORUSEC_DISABLED_BROKER          | false                                                            | Esta variável de ambiente obtém se o broker está habilitado ou não | 
| HORUSEC_BROKER_HOST              | 127.0.0.1                                                        | Esta variável de ambiente obtém host para se conectar ao broker RABBITMQ | 
| HORUSEC_BROKER_PORT              | 5672                                                             | Esta variável de ambiente obtém porta para conectar no broker RABBITMQ |
| HORUSEC_BROKER_USERNAME          | guest                                                            | Esta variável de ambiente obtém nome de usuário para se conectar no broker RABBITMQ |
| HORUSEC_BROKER_PASSWORD          | guest                                                            | Esta variável de ambiente obtém a senha para se conectar no broker RABBITMQ |
| HORUSEC_MANAGER_URL              | http://localhost:8043                                            | Esta variável de ambiente obtém onde está o link do serviço horusec-manager para enviar nos disparos de webhook |
