---
title: Messages
weight: 60
description: Nesta seção, você vai encontrar mais informações referentes do serviço Horusec-Messages.
---

# Horusec-Messages
Este serviço é responsável pelo envio de e-mails quando o broker está habilitado.

[What is transactional email and what is it used for?](https://postmarkapp.com/blog/what-is-transactional-email-and-how-is-it-used)

![](/docs/ptbr/web/services/messages/0-arquitecture.jpg)

## **Requisitos**
Para rodar este serviço localmente basta ter:
* RabbitMQ
* Conta de E-mail válida
* Golang

## **Instalando dependencias**
```bash
go get ./...
```

## **Rodando**
Para executar o serviço, você pode executar o seguinte comando
```bash
go run ./horusec-messages/cmd/app/main.go
```

E você vê o log
```bash
service running on port :8004
swagger running on url:  http://localhost:8004/swagger/index.html
```

## **Variáveis de ambiente**
Essas são as possíveis váriaveis de ambiente que você pode configurar neste serviço.

| Environment Name                            | Default Value         | Description                  |
|---------------------------------------------|-----------------------|------------------------------|
| HORUSEC_BROKER_HOST                           | 127.0.0.1             | This environment get host to connect on broker RABBIT | 
| HORUSEC_BROKER_PORT                           | 5672                  | This environment get port to connect on broker RABBIT |
| HORUSEC_BROKER_USERNAME                       | guest                 | This environment get username to connect on broker RABBIT |
| HORUSEC_BROKER_PASSWORD                       | guest                 | This environment get password to connect on broker RABBIT |
| HORUSEC_SMTP_USERNAME                         |                       | This environment get username to connect on mailer. Example using gsuite host `user@gmail.com` |
| HORUSEC_SMTP_PASSWORD                         |                       | This environment get password to connect on mailer. Example using gsuite host `Y0urS!r0ng#P@ssw0rd` |
| HORUSEC_SMTP_ADDRESS                          |                       | This environment get address to connect on mailer. Example using gsuite host `smtp.gmail.com` |
| HORUSEC_SMTP_HOST                             |                       | This environment get host to connect on mailer. Example using gsuite host `smtp.gmail.com` |
| HORUSEC_SMTP_PORT                             |                       | This environment get port to connect on mailer. Example using gsuite host `587` |
| HORUSEC_EMAIL_FROM                            | horusec@zup.com.br      | This environment get email of the user origin to send email. If You using other email to send, change here. |
| HORUSEC_PORT                                  | 8004                  | This environment get the port that the service will start |
| HORUSEC_SWAGGER_HOST                          | localhost             | This environment get the host for swagger start |


## **Emails triggers**

| Trigger             | Description |
|---------------------|-------------|
| email confirmation  | An email that are used for user email confirmation |
| reset password      | An email that allows user to reset your own password |
| organization invite | An email to inform an user that he was invited for an organization |