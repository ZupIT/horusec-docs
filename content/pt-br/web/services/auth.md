---
title: Auth
weight: 20
description: Nesta seção, você vai encontrar mais informações referentes do serviço Horusec-Auth.
---

# Horusec-Auth
Este serviço é responsável pelo gerenciamento de autenticação e criação de conta dos usuários.

![](/docs/ptbr/web/services/auth/0-arquitecture.jpg)

## **Requisitos**
Para rodar este serviço localmente basta ter:
* PostgreSQL (com migrações aplicadas)
* RabbitMQ (apenas se tiver o broker estiver habilitado)
* Serviço de Keycloak (apenas se o tipo de autenticação é keycloak)
* Serviço de LDAP (apenas se o tipo de autenticação é ldap)
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
service running on port :8006
swagger running on url:  http://localhost:8006/swagger/index.html
```

## **Variáveis de ambiente**
Essas são as possíveis váriaveis de ambiente que você pode configurar neste serviço.

| Environment Name                 | Default Value                                                    | Description                                                  |
|----------------------------------|------------------------------------------------------------------|--------------------------------------------------------------|
| HORUSEC_SWAGGER_HOST             | localhost                                                        | Esta variável de ambiente obtém qual é o host que estará disponível o swagger| 
| HORUSEC_DATABASE_SQL_DIALECT     | postgres                                                         | Esta variável de ambiente obtém dialeto para conectar no banco de dados POSTGRES |
| HORUSEC_DATABASE_SQL_URI         | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable | Esta variável de ambiente obtém uri para conectar no banco de dados POSTGRES |
| HORUSEC_DATABASE_SQL_LOG_MODE    | false                                                            | Esta variável de ambiente obtém o valor para habilitar logs no POSTGRES |
| HORUSEC_PORT                     | 8006                                                             | Esta variável de ambiente obtém a porta que o serviço irá iniciar |
| HORUSEC_DISABLED_BROKER          | false                                                            | Esta variável de ambiente obtém se o broker está habilitado ou não | 
| HORUSEC_BROKER_HOST              | 127.0.0.1                                                        | Esta variável de ambiente obtém host para se conectar ao broker RABBITMQ | 
| HORUSEC_BROKER_PORT              | 5672                                                             | Esta variável de ambiente obtém porta para conectar no broker RABBITMQ |
| HORUSEC_BROKER_USERNAME          | guest                                                            | Esta variável de ambiente obtém nome de usuário para se conectar no broker RABBITMQ |
| HORUSEC_BROKER_PASSWORD          | guest                                                            | Esta variável de ambiente obtém a senha para se conectar no broker RABBITMQ |
| HORUSEC_AUTH_TYPE                | horusec                                                          | Esta variável de ambiente obtém o tipo de autenticação pode ser entre `horusec`, `ldap`, `keycloak` |
| HORUSEC_JWT_SECRET_KEY           | horusec-secret                                                   | Esta variável de ambiente obtém a chave secreta JWT| 
| HORUSEC_KEYCLOAK_BASE_PATH       |                                                                  | Esta variável de ambiente obtém o caminho da base do KeyCloak (obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=keycloak`)|
| HORUSEC_KEYCLOAK_CLIENT_ID       |                                                                  | Esta variável de ambiente obtém o `client_id` do KeyCloak (obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=keycloak`)|
| HORUSEC_KEYCLOAK_CLIENT_SECRET   |                                                                  | Esta variável de ambiente obtém o `client_secret` do KeyCloak (obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=keycloak`)|
| HORUSEC_KEYCLOAK_REALM           |                                                                  | Esta variável de ambiente obtém `realm` do KeyCloak (obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=keycloak`)|
| HORUSEC_KEYCLOAK_OTP             |                                                                  | Esta variável de ambiente obtém o `otp`(senha descartável) do KeyCloak (obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=keycloak`)|
| HORUSEC_LDAP_HOST                |                                                                  | Esta variável de ambiente obtém o host do LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`)| 
| HORUSEC_LDAP_PORT                | 389                                                              | Esta variável de ambiente obtém a porta do LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`)|
| HORUSEC_LDAP_BASE                |                                                                  | Esta variável de ambiente obtém base LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`)| 
| HORUSEC_LDAP_BINDDN              |                                                                  | Esta variável de ambiente obtém admin de entidade LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`)| 
| HORUSEC_LDAP_BINDPASSWORD        |                                                                  | Esta variável de ambiente obtém a senha administrador de entidade do LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`)| 
| HORUSEC_LDAP_USERFILTER          | (sAMAccountName=%s)                                              | Esta variável de ambiente obtém filtro de usuário do LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`)| 
| HORUSEC_LDAP_ADMIN_GROUP         |                                                                  | Esta variável de ambiente obtém nomes de grupos de administrador do LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`)|
| HORUSEC_LDAP_USESSL              | false                                                            | Esta variável de ambiente obtém o SSL do LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`)| 
| HORUSEC_LDAP_SKIP_TLS            | true                                                             | Esta variável de ambiente obtém se é ignorar tls no LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`)| 
| HORUSEC_LDAP_INSECURE_SKIP_VERIFY| true                                                             | Esta variável de ambiente obtém se é para ignorar a verificação de insegurança do LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`) |
| HORUSEC_GRPC_PORT                | 8007                                                             | Esta variável de ambiente obtém a porta do GRPC |
| HORUSEC_GRPC_USE_CERTS           | false                                                            | Esta variável de ambiente obtém se o uso de certificados está ativo ou não no GRPC|
| HORUSEC_GRPC_CERT_PATH           |                                                                  | Esta variável de ambiente obtém o caminho do certificado do GRPC|
| HORUSEC_GRPC_KEY_PATH            |                                                                  | Esta variável de ambiente obtém o caminho da chave do certificado do GRPC|
| HORUSEC_ENABLE_APPLICATION_ADMIN | false                                                            | Esta variável de ambiente obtém se você precisa de um administrador da aplicação ativo no sistema. Quando essa variável é configurada para `true` somente os usuários administradores podem criar workspaces no Horusec. |
| HORUSEC_APPLICATION_ADMIN_DATA   | {\"username\": \"horusec-admin\", \"email\":\"horusec-admin@example.com\", \"password\":\"Devpass0*\"} | Quando o administrador do aplicativo é habilitado, precisamos criar um usuário do tipo `application admin` padrão. Não se esqueça de realizar o **escape do json** no valor da variável de ambiente. |
| HORUSEC_MANAGER_URL              | http://localhost:8043                                            | Esta variável de ambiente obtém onde está o link do serviço horusec-manager para enviar nos disparos de e-mails |
