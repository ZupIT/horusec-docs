---
title: Auth
weight: 20
description:  In this section, you will find information about Horusec-Auth service. 
---

## **What is it?**
Horusec-Auth is responsible for the user's management, authentication and access to the platform.

![](/docs/ptbr/web/services/auth/0-arquitecture.jpg)

## **Types of authentication**
Horusec has 3 types of authentication: 

1. **Nativa Horusec**
2. **LDAP**
3. **Keycloak**

### **1. Nativa Horusec**
This is the simplest authentication, because it is Horusec's default. 

{{% alert color="info" %}}
As Nativa Horusec already is the installation's default, if you want to change to other types, check out the [**tutorial on how to change it**](/docs/pt-br/tutorials/how-to-change-the-authentication-type/). 
{{% /alert %}}

### **2. LDAP**

This authentication uses the open application's protocol LDAP \(Lightweight Directory Access Protocol\). It allows Horusec to integrate a tool like [**OpenLDAP**](https://www.openldap.org/) where all the users, access groups and organizations are.

Horusec will consume the tool's data and then the other functionalities will be managed, like analysis cases, vulnerabilities management, repository and access token. 

### **3. Keycloak**

This one uses [**Keycloak**](https://www.keycloak.org/documentation) only as an Auth(authenticator). If you want to integrate with Google and Facebook, it is the best option. 

## **Requisites**

To locally run this service, you will need:

* PostgreSQL (with the migration applied);
* RabbitMQ (only if the broker is enabled);
* Keycloak service (only if your authentication type is keycloak);
* LDAP service (only if the authentication type is Ldap);
* Golang.

## **Installation**

**Step 1:** Install dependencies: 
```bash
go get ./...
```

**Step 2:** Run the service with the command below:

```bash
go run ./auth/cmd/app/main.go
```

It will return this log:

```bash
service running on port :8006
swagger running on url:  http://localhost:8006/swagger/index.html
```

## **Environment variables**
These are the environment variables you can configure in this service:

| Environment Name                 | Default Value                                                    | Description                                                  |
|----------------------------------|------------------------------------------------------------------|--------------------------------------------------------------|
| HORUSEC_SWAGGER_HOST             | localhost                                                        | This environment variable gets which swagger host will be available.| 
| HORUSEC_DATABASE_SQL_URI         | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable | This environment variable gets the URI to connect to POSTGRES database.  |
| HORUSEC_DATABASE_SQL_LOG_MODE    | false                                                            | This environment variable gets the value to enable POSTGREs logs. |
| HORUSEC_PORT                     | 8006                                                             | This environment variable gets the port the service will start. |
| HORUSEC_DISABLED_EMAILS          | false                                                            | This environment variable validates if the email service is enabled or not. | 
| HORUSEC_BROKER_HOST              | 127.0.0.1                                                        | This environment variable gets a host to connect to RABBITMQ broker. | 
| HORUSEC_BROKER_PORT              | 5672                                                             | This environment variable gets the port to connect to  RABBITMQ broker. |
| HORUSEC_BROKER_USERNAME          | guest                                                            | This environment variable gets the user name to connect to RABBITMQ broker. |
| HORUSEC_BROKER_PASSWORD          | guest                                                            | This environment variable gets the password to connect to RABBITMQ broker. |
| HORUSEC_AUTH_TYPE                | horusec                                                          | This environment variable gets if the authentication type can be among `horusec`, `ldap`, `keycloak` |
| HORUSEC_JWT_SECRET_KEY           | horusec-secret                                                   | This environment variable gets the JWT secret key. This key will be chosen only once and serves as a basis for encryption, so it needs to be strong text to ensure the safety of your application.(Required only if you are using `HORUSEC_JWT_SECRET_KEY`). |
| HORUSEC_KEYCLOAK_BASE_PATH       |                                                                  | This environment variable gets the Keycloak base path(required only if you are using `HORUSEC_AUTH_TYPE=keycloak`)|
| HORUSEC_KEYCLOAK_CLIENT_ID       |                                                                  | This environment variable gets Keycloak's `client_id` (only required if you are using `HORUSEC_AUTH_TYPE=keycloak`)|
| HORUSEC_KEYCLOAK_CLIENT_SECRET   |                                                                  | This environment variable gets Keycloak's `client_secret` (only required if you are using `HORUSEC_AUTH_TYPE=keycloak`)|
| HORUSEC_KEYCLOAK_REALM           |                                                                  | This environment variable gets Keycloak's `realm` (only required if you are using `HORUSEC_AUTH_TYPE=keycloak`)|
| HORUSEC_KEYCLOAK_OTP             |                                                                  | This environment variable gets Keycloak's `otp`(disposable passwords) (only required if you are using `HORUSEC_AUTH_TYPE=keycloak`)|
| HORUSEC_LDAP_HOST                |                                                                  | This environment variable gets LDAP's host (only required if you are using  `HORUSEC_AUTH_TYPE=ldap`)| 
| HORUSEC_LDAP_PORT                | 389                                                              | This environment variable gets LDAP's port (only required if you are using  `HORUSEC_AUTH_TYPE=ldap`)|
| HORUSEC_LDAP_BASE                |                                                                  | This environment variable gets LDAP's base (only required if you are using  `HORUSEC_AUTH_TYPE=ldap`)| 
| HORUSEC_LDAP_BINDDN              |                                                                  | This environment variable gets LDAP's entity admin (only required if you are using `HORUSEC_AUTH_TYPE=ldap`)| 
| HORUSEC_LDAP_BINDPASSWORD        |                                                                  | This environment variable gets LDAP's entity admin password (only required if you are using  `HORUSEC_AUTH_TYPE=ldap`)| 
| HORUSEC_LDAP_USERFILTER          | (sAMAccountName=%s)                                              | This environment variable gets LDAP's user filter(only required if you are using `HORUSEC_AUTH_TYPE=ldap`)| 
| HORUSEC_LDAP_ADMIN_GROUP         |                                                                  | This environment variable gets LDAP's admin groups names (only required if you are using  `HORUSEC_AUTH_TYPE=ldap`)|
| HORUSEC_LDAP_USESSL              | false                                                            | This environment variable gets LDAP's SSL (only required if you are using  `HORUSEC_AUTH_TYPE=ldap`)| 
| HORUSEC_LDAP_SKIP_TLS            | true                                                             | This environment variable gets if it is to ignore tls on LDAP(only required if you are using  `HORUSEC_AUTH_TYPE=ldap`)| 
| HORUSEC_LDAP_INSECURE_SKIP_VERIFY| true                                                             | This environment variable gets if it is to ignore LDAP's insecurity verification (only required if you are using  `HORUSEC_AUTH_TYPE=ldap`) |
| HORUSEC_GRPC_PORT                | 8007                                                             | This environment variable gets GRPC's port |
| HORUSEC_GRPC_USE_CERTS           | false                                                            | This environment variable gets if the certificate use is enabled or not on GRPC|
| HORUSEC_GRPC_CERT_PATH           |                                                                  | This environment variable gets the GRPC certificate path |
| HORUSEC_GRPC_KEY_PATH            |                                                                  | This environment variable gets GRPC certificate key path|  
 HORUSEC_DEFAULT_USER_DATA             | {\"username\": \"dev\", \"email\":\"dev@example.com\", \"password\":\"Devpass0*\"}                                        | When the default user is enabled, you need to create a default user. Don't forget to perform the JSON escape in the enviroment variable value. 
 HORUSEC_ENABLE_DEFAULT_USER              | true                                | Validates if the default user is enabled or not in the platform. When the application starts, it will automatically create a new user.
| HORUSEC_ENABLE_APPLICATION_ADMIN | false                                                            | This environment variable gets if you need an active application admins on the system. When this variable is configured  `true` only admin users can create Horusec workspace. |
| HORUSEC_APPLICATION_ADMIN_DATA   | {\"username\": \"horusec-admin\", \"email\":\"horusec-admin@example.com\", \"password\":\"Devpass0*\"} | When the application admin is enabled, you need to create a default `application admin` user. Don't forget to perform the **json leakage** on the environment variable value.|
| HORUSEC_MANAGER_URL              | http://localhost:8043                                            | This environment variable gets where horusec-manager service link is to send on the e-mail triggers. |
 HORUSEC_AUTH_URL              | http://localhost:8006                                         | This environment variable gets the service's URL Horusec-Auth. It is used when is necessary to confirm the user's email, recently created in the platform. 
