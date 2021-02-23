---
title: Account
weight: 30
description: Nesta seção, você vai encontrar mais informações referentes do serviço Horusec-Account.
---

# Horusec-Account
Este serviço é responsável pelo gerenciamento de workspaces, repositórios, webhook, atualização de acessos.

![](/docs/ptbr/web/services/account/0-arquitecture.jpg)

## **Requisitos**
Para rodar este serviço localmente basta ter:
* PostgreSQL (com migrações aplicadas)
* RabbitMQ (apenas se tiver o broker estiver habilitado)
* Horusec-Auth
* Golang

## **Instalando dependencias**
```bash
go get ./...
```

## **Rodando**
Para executar o serviço, você pode executar o seguinte comando
```bash
go run ./horusec-analytic/cmd/app/main.go
```

E você vê o log
```bash
service running on port :8003
swagger running on url:  http://localhost:8003/swagger/index.html
```

## **Variáveis de ambiente**
Essas são as possíveis váriaveis de ambiente que você pode configurar neste serviço.

| Environment Name                              | Default Value                                                    | Description                                                  |
|-----------------------------------------------|------------------------------------------------------------------|--------------------------------------------------------------|
| HORUSEC_SWAGGER_HOST                          | localhost                                                        | Esta variável de ambiente mostra qual é o host que estará disponível o swagger| 
| HORUSEC_DATABASE_SQL_URI                      | postgres                                                         | Esta variável de ambiente obtém dialeto para conectar no banco de dados POSTGRES |
| HORUSEC_DATABASE_SQL_DIALECT                  | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable | Esta variável de ambiente obtém uri para conectar no banco de dados POSTGRES |
| HORUSEC_DATABASE_SQL_LOG_MODE                 | false                                                            | Esta variável de ambiente obtém o valor para habilitar logs no POSTGRES |
| HORUSEC_PORT                                  | 8003                                                             | Esta variável de ambiente obtém a porta que o serviço irá iniciar |
| HORUSEC_GRPC_AUTH_URL                         | localhost:8007                                                   | Esta variável de ambiente obtém o url horusec-auth de conexão com o GRCP |
| HORUSEC_GRPC_USE_CERTS                        | false                                                            | Esta variável de ambiente obtém se o uso de certificados no GRCP está ativo ou não |
| HORUSEC_GRPC_CERT_PATH                        |                                                                  | Esta variável de ambiente obtém o caminho do certificado GRCP | 