---
title: Auth
weight: 20
description: Nesta seção, você encontra mais informações sobre o serviço Horusec-Auth.
---

## **O que é?** 

O Horusec-Auth é um microsserviço responsável pela gestão de usuários, autenticação e acessos a plataforma.

![](/docs/ptbr/web/services/auth/0-arquitecture.png)

## **Tipos de autenticação**
O Horusec possui 3 tipos de autenticação: 

1. **Nativa Horusec**
2. **LDAP**
3. **Keycloak**

### **1. Nativa Horusec**
Este é o tipo mais simples de autenticação, pois é a default do Horusec. 

{{% alert color="info" %}}
Como a Nativa Horusec já é a autenticação default de instalação, se você deseja trocar para os outros tipos, veja o [**tutorial para alterar**]({{< ref path="/tutorials/how-to-change-the-authentication-type" lang="pt-br">}}). 
{{% /alert %}}

### **2. LDAP**

Este tipo de autenticação utiliza o protocolo de aplicação aberto LDAP \(Lightweight Directory Access Protocol\). Isso permite que o Horusec se integre a uma ferramenta como o [**OpenLDAP**](https://www.openldap.org/) onde estão todos os usuários, grupos de acesso e organizações. 

O Horusec irá consumir os dados da ferramenta e, assim,  as demais funcionalidades serão apenas gerenciadas, como caso de análises, gestão de vulnerabilidade, repositórios e tokens de acesso.

### **3. Keycloak**

Este tipo de autenticação utiliza o [**Keycloak**](https://www.keycloak.org/documentation) apenas como o Auth (autenticador). É recomendado se você deseja uma integração com o Google e o Facebook, por exemplo. 

## **Requisitos**

Para rodar este serviço local, basta ter:

* PostgreSQL (com migrações aplicadas);
* RabbitMQ;
* Serviço de Keycloak (apenas se o tipo de autenticação é keycloak);
* Serviço de LDAP (apenas se o tipo de autenticação é ldap);
* Golang.

## **Instalação**

**Passo 1:** Instale as dependências.

```bash
go get ./...
```

**Passo 2:** Rode o comando abaixo para executar o serviço:

```bash
go run ./auth/cmd/app/main.go
```

Você deve receber este log como retorno:

```bash
service running on port :8006
swagger running on url:  http://localhost:8006/swagger/index.html
```

## **Variáveis de ambiente**
Estas são as possíveis váriaveis de ambiente que você pode configurar neste serviço.

| Nome da Variável de Ambiente                | Valor Default                                                    | Descrição                                                 |
|----------------------------------|------------------------------------------------------------------|--------------------------------------------------------------|
| HORUSEC_SWAGGER_HOST             | localhost                                                        | Obtém qual o host que estará disponível no swagger.| 
| HORUSEC_DATABASE_SQL_URI         | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable | Obtém o URI (identificador uniforme de recursos) para conectar no banco de dados POSTGRES. |
| HORUSEC_DATABASE_SQL_LOG_MODE    | false                                                            | Obtém o valor para habilitar logs no POSTGRES. |
| HORUSEC_PORT                     | 8006                                                             | Obtém a porta que o serviço irá iniciar. |
| HORUSEC_DISABLED_EMAILS          | false                                                            | Valida se o serviço de emails está habilitado ou não. | 
| HORUSEC_BROKER_HOST              | 127.0.0.1                                                        | Obtém o host para se conectar ao broker RABBITMQ. | 
| HORUSEC_BROKER_PORT              | 5672                                                             | Obtém porta para conectar no broker RABBITMQ. |
| HORUSEC_BROKER_USERNAME          | guest                                                            | Obtém o nome de usuário para se conectar no broker RABBITMQ. |
| HORUSEC_BROKER_PASSWORD          | guest                                                            | Obtém a senha para se conectar no broker RABBITMQ. |
| HORUSEC_AUTH_TYPE                | horusec                                                          | Obtém o tipo de autenticação, que pode ser entre `horusec`, `ldap`, `keycloak`. |
| HORUSEC_JWT_SECRET_KEY           | horusec-secret                                                   | Esta variável de ambiente obtém a chave secreta JWT. Essa chave será escolhida apenas uma vez e serve de base para criptografia, por isso precisa ser um texto forte para garantir a segurança da sua aplicação. (obrigatório apenas se estiver utilizando `HORUSEC_JWT_SECRET_KEY`). |
| HORUSEC_KEYCLOAK_BASE_PATH       |                                                                  | Obtém o caminho da base do KeyCloak (obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=keycloak`).|
| HORUSEC_KEYCLOAK_CLIENT_ID       |                                                                  | Obtém o `client_id` do KeyCloak (obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=keycloak`).|
| HORUSEC_KEYCLOAK_CLIENT_SECRET   |                                                                  | Obtém o `client_secret` do KeyCloak (obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=keycloak`).|
| HORUSEC_KEYCLOAK_REALM           |                                                                  | Obtém o `realm` do KeyCloak (obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=keycloak`).|
| HORUSEC_KEYCLOAK_OTP             |                                                                  | Obtém o `otp`(senha descartável) do KeyCloak (obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=keycloak`).|
| HORUSEC_LDAP_HOST                |                                                                  | Obtém o host do LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`).| 
| HORUSEC_LDAP_PORT                | 389                                                              | Obtém a porta do LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`).|
| HORUSEC_LDAP_BASE                |                                                                  | Obtém a base LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`).| 
| HORUSEC_LDAP_BINDDN              |                                                                  | Obtém admin de entidade LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`).| 
| HORUSEC_LDAP_BINDPASSWORD        |                                                                  | Obtém a senha administrador de entidade do LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`).| 
| HORUSEC_LDAP_USERFILTER          | (sAMAccountName=%s)                                              | Obtém o filtro de usuário do LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`).| 
| HORUSEC_LDAP_ADMIN_GROUP         |                                                                  | Obtém os nomes de grupos de administrador do LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`).|
| HORUSEC_LDAP_USESSL              | false                                                            | Obtém o SSL do LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`).| 
| HORUSEC_LDAP_SKIP_TLS            | true                                                             | Define se é ignorar tls no LDAP (obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`).| 
| HORUSEC_LDAP_INSECURE_SKIP_VERIFY| true                                                             | Valida se é para ignorar a verificação de insegurança do LDAP(obrigatório apenas se estiver utilizando `HORUSEC_AUTH_TYPE=ldap`). |
| HORUSEC_GRPC_PORT                | 8007                                                             | Obtém a porta do GRPC. |
| HORUSEC_GRPC_USE_CERTS           | false                                                            | Valida se o uso de certificados está ativo ou não no GRPC|
| HORUSEC_GRPC_CERT_PATH           |                                                                  | Obtém o caminho do certificado do GRPC.|
| HORUSEC_GRPC_KEY_PATH            |                                                                  | Obtém o caminho da chave do certificado do GRPC.|
| HORUSEC_ENABLE_APPLICATION_ADMIN | false                                                            | Valida se você precisa de um administrador da aplicação ativo no sistema. Quando essa variável é configurada para `true`, somente os usuários administradores podem criar workspaces no Horusec. |
| HORUSEC_APPLICATION_ADMIN_DATA   | {\"username\": \"horusec-admin\", \"email\":\"horusec-admin@example.com\", \"password\":\"Devpass0*\"} | Quando o administrador do aplicativo é habilitado, precisamos criar um usuário do tipo `application admin` padrão. Não se esqueça de realizar o **escape do json** no valor da variável de ambiente. |
| HORUSEC_ENABLE_DEFAULT_USER      | true                                                            |  Válida se o usuário padrão está habilitado ou não na plataforma. Quando a aplicação iniciar irá criar um novo usuário automaticamente. |
| HORUSEC_DEFAULT_USER_DATA        | {\"username\": \"dev\", \"email\":\"dev@example.com\", \"password\":\"Devpass0*\"} | Quando o usuário padrão está habilitado, precisamos criar um usuário padrão. Não se esqueça de realizar o **escape do json** no valor da variável de ambiente. |
| HORUSEC_MANAGER_URL              | http://localhost:8043                                            | Valida onde está o link do serviço `horusec-manager` para enviar nos disparos de e-mails |
| HORUSEC_AUTH_URL                 | http://localhost:8006                                            | Valida onde está o link do serviço `horusec-auth` para enviar nos disparos de e-mails |


### Leia mais
- [**Como habilitar e desabilitar o usuário padrão da aplicação?**]({{< ref path="/tutorials/how-to-enable-disable-default-user" lang="pt-br">}})