---
title: Messages
weight: 60
description: In this section, you will find information about Horusec-Messages service. 
---

## **What is it?**

 Horusec-Messages is a microservice responsible for sending transactional e-mails.

Check out more information [**about transactional emails.**](https:/postmarkapp.com/blog/what-is-transactional-email-and-how-is-it-used)

![](/docs/ptbr/web/services/messages/0-arquitecture.png)

## **Requisites**
To locally run this service, you will need: 
* RabbitMQ;
* Valid e-mail account;
* Golang.

## **Installation**

**Step 1:** Install dependencies: 

```bash
go get ./...
```

**Step 2:** Run the service with the command below:


```bash
go run ./messages/cmd/app/main.go
```

It will return this log:

```bash
service running on port :8002
swagger running on url:  http://localhost:8002/swagger/index.html
```

## **Environment variables**
These are the environment variables you can configure in this service: 

| Environment Name                            | Default Value         | Description                  |
|---------------------------------------------|-----------------------|------------------------------|
| HORUSEC_SWAGGER_HOST             | localhost                                                        | This environment variable gets which swagger host will be available.| 
| HORUSEC_DATABASE_SQL_DIALECT     | postgres                                                         | This environment variable gets the dialect to connet POSTGRES database. |
| HORUSEC_DATABASE_SQL_URI         | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable | This environment variable gets the URI to connect to POSTGRES database. |
| HORUSEC_DATABASE_SQL_LOG_MODE    | false                                                            | This environment variable gets the value to enable POSTGREs logs. |
| HORUSEC_PORT                     | 8004                                                             | This environment variable gets the port the service will start. |
| HORUSEC_BROKER_HOST              | 127.0.0.1                                                        | This environment variable gets a host to connect to RABBITMQ broker. | 
| HORUSEC_BROKER_PORT              | 5672                                                             | This environment variable gets the port to connect to  RABBITMQ broker. |
| HORUSEC_BROKER_USERNAME          | guest                                                            | This environment variable gets the user name to connect to RABBITMQ broker. |
| HORUSEC_BROKER_PASSWORD          | guest                                                            | This environment variable gets the password to connect to RABBITMQ broker. |
| HORUSEC_SMTP_USERNAME            |                         | This environment variable gets o `username` para conectar no serviço de e-mail. Exemplo usando gsuite como host `user@gmail.com` |
| HORUSEC_SMTP_PASSWORD            |                         | This environment variable gets the `password` to connect to the e-mail service. For example using gsuite as a host `Y0urS!r0ng#P@ssw0rd` |
| HORUSEC_SMTP_HOST                |                         | This environment variable gets the `host` to connect the e-mail service. For example using gsuite as a host `smtp.gmail.com` |
| HORUSEC_SMTP_PORT                |                         | This environment variable gets the `port` to connect the e-mail service. For example using gsuite as a host `587` |
| HORUSEC_EMAIL_FROM               | horusec@zup.com.br      | This environment variable gets the user original e-mail to send the e-mail. If you are using other e-mail, change here. |

## **Emails triggers**

| Trigger                   | Description                                                                   |
|---------------------------|-------------------------------------------------------------------------------|
|  E-mail confirmation   | User confirmation e-mail.                     |
| Reset password           | An e-mail that allows the user to redefine the password.                   |
| Invite for the workspace | An e-mail to inform the user the invitation for an organization. |
