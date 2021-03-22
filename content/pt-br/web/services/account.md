---
title: Account
weight: 30
description: Nesta seção, você encontra mais informações sobre o serviço Horusec-Account.
---

## **O que é?**

O Horusec-Account é um microsserviço responsável pela gestão de workspaces, repositórios, webhook e atualização de acessos.

![](/docs/ptbr/web/services/account/0-arquitecture.jpg)

## **Requisitos**

Para rodar este serviço local, basta ter:

* PostgreSQL (com migrações aplicadas);
* RabbitMQ (apenas se tiver o broker estiver habilitado);
* Horusec-Auth;
* Golang.

## **Instalação** 

**Passo 1:** Instale as dependências.

```bash
go get ./...
```
**Passo 2:** Rode o comando abaixo para executar o serviço: 

```bash
go run ./horusec-analytic/cmd/app/main.go
```

Você deve receber este log como retorno: 

```bash
service running on port :8003
swagger running on url:  http://localhost:8003/swagger/index.html
```

## **Variáveis de ambiente**

Estas são as possíveis váriaveis de ambiente que você pode configurar neste serviço.

| Nome da Variável de Ambiente                 | Valor Default                                                     | Descrição                                                  |
|----------------------------------|------------------------------------------------------------------|--------------------------------------------------------------|
| HORUSEC_SWAGGER_HOST             | localhost                                                        | Obtém o host que estará disponível no swagger.| 
| HORUSEC_DATABASE_SQL_DIALECT     | postgres                                                         | Obtém o dialeto para conectar ao banco de dados POSTGRES. |
| HORUSEC_DATABASE_SQL_URI         | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable | Obtém o URI (identificador uniforme de recursos) para conectar ao banco de dados POSTGRES. |
| HORUSEC_DATABASE_SQL_LOG_MODE    | false                                                            | Obtém o valor para habilitar logs no POSTGRES. |
| HORUSEC_PORT                     | 8003                                                             | Obtém a porta que o serviço irá iniciar. |
| HORUSEC_GRPC_AUTH_URL            | localhost:8007                                                   | Obtém a URL `horusec-auth` de conexão com o GRPC |
| HORUSEC_GRPC_USE_CERTS           | false                                                            | Valida se o uso de certificados no GRPC está ativo ou não. |
| HORUSEC_GRPC_CERT_PATH           |                                                                  | Obtém o caminho do certificado GRPC. | 