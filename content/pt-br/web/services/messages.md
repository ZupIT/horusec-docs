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
| HORUSEC_SWAGGER_HOST             | localhost                                                        | Esta variável de ambiente obtém qual é o host que estará disponível o swagger| 
| HORUSEC_DATABASE_SQL_DIALECT     | postgres                                                         | Esta variável de ambiente obtém dialeto para conectar no banco de dados POSTGRES |
| HORUSEC_DATABASE_SQL_URI         | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable | Esta variável de ambiente obtém uri para conectar no banco de dados POSTGRES |
| HORUSEC_DATABASE_SQL_LOG_MODE    | false                                                            | Esta variável de ambiente obtém o valor para habilitar logs no POSTGRES |
| HORUSEC_PORT                     | 8004                                                             | Esta variável de ambiente obtém a porta que o serviço irá iniciar |
| HORUSEC_BROKER_HOST              | 127.0.0.1                                                        | Esta variável de ambiente obtém host para se conectar ao broker RABBITMQ | 
| HORUSEC_BROKER_PORT              | 5672                                                             | Esta variável de ambiente obtém porta para conectar no broker RABBITMQ |
| HORUSEC_BROKER_USERNAME          | guest                                                            | Esta variável de ambiente obtém nome de usuário para se conectar no broker RABBITMQ |
| HORUSEC_BROKER_PASSWORD          | guest                                                            | Esta variável de ambiente obtém a senha para se conectar no broker RABBITMQ |
| HORUSEC_SMTP_USERNAME            |                         | Esta variável de ambiente obtém o `username` para conectar no serviço de e-mail. Exemplo usando gsuite como host `user@gmail.com` |
| HORUSEC_SMTP_PASSWORD            |                         | Esta variável de ambiente obtém o `password` para conectar no serviço de e-mail. Exemplo usando gsuite como host `Y0urS!r0ng#P@ssw0rd` |
| HORUSEC_SMTP_ADDRESS             |                         | Esta variável de ambiente obtém o `address` para conectar no serviço de e-mail. Exemplo usando gsuite como host `smtp.gmail.com` |
| HORUSEC_SMTP_HOST                |                         | Esta variável de ambiente obtém o `host` para conectar no serviço de e-mail. Exemplo usando gsuite como host `smtp.gmail.com` |
| HORUSEC_SMTP_PORT                |                         | Esta variável de ambiente obtém o `port` para conectar no serviço de e-mail. Exemplo usando gsuite como host `587` |
| HORUSEC_EMAIL_FROM               | horusec@zup.com.br      | Esta variável de ambiente obtém o e-mail da origem do usuário para enviar e-mail. Se você está usando outro e-mail para enviar, mude aqui. |

## **Emails triggers**

| Trigger                   | Description                                                                   |
|---------------------------|-------------------------------------------------------------------------------|
| confirmação de e-mail     | Um e-mail usado para confirmação por e-mail do usuário                        |
| resetar a senha           | Um e-mail que permite ao usuário redefinir sua própria senha                  |
| convidar para o workspace | Um e-mail para informar um usuário que ele foi convidado para uma organização |
