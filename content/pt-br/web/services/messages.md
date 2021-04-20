---
title: Messages
weight: 60
description: Nesta seção, você encontra mais informações sobre o serviço Horusec-Messages.
---

## **O que é?**

O Horusec-Messages é um microsserviço responsável pelo envio de e-mails transacionais quando o `horusec-broker` está habilitado.

[**Veja aqui mais sobre e-mails transacionais**](https://postmarkapp.com/blog/what-is-transactional-email-and-how-is-it-used)

![](/docs/ptbr/web/services/messages/0-arquitecture.jpg)

## **Requisitos**

Para rodar este serviço local, basta ter:
* RabbitMQ;
* Conta de e-mail válida;
* Golang.

## **Instalação**

**Passo 1:** Instale as dependências.
```bash
go get ./...
```

**Passo 2:** Rode o comando abaixo para executar o serviço:

```bash
go run ./horusec-messages/cmd/app/main.go
```

Você deve receber este log como retorno:

```bash
service running on port :8004
swagger running on url:  http://localhost:8004/swagger/index.html
```

## **Variáveis de ambiente**
Estas são as possíveis váriaveis de ambiente que você pode configurar neste serviço.

| Nome da Variável de Ambiente                            | Valor Default         | Descrição                  |
|---------------------------------------------|-----------------------|------------------------------|
| HORUSEC_SWAGGER_HOST             | localhost                                                        | Obtém qual o host que estará disponível o swagger| 
| HORUSEC_DATABASE_SQL_DIALECT     | postgres                                                         | Obtém o dialeto para conectar no banco de dados POSTGRES |
| HORUSEC_DATABASE_SQL_URI         | postgresql://root:root@localhost:5432/horusec_db?sslmode=disable | Obtém o URI (identificador uniforme de recursos) para conectar no banco de dados POSTGRES. |
| HORUSEC_DATABASE_SQL_LOG_MODE    | false                                                            | Obtém o valor para habilitar logs no POSTGRES. |
| HORUSEC_PORT                     | 8004                                                             | Obtém a porta que o serviço irá iniciar. |
| HORUSEC_BROKER_HOST              | 127.0.0.1                                                        | Obtém host para se conectar ao broker RABBITMQ. | 
| HORUSEC_BROKER_PORT              | 5672                                                             | Obtém porta para conectar no broker RABBITMQ. |
| HORUSEC_BROKER_USERNAME          | guest                                                            | Obtém nome de usuário para se conectar no broker RABBITMQ. |
| HORUSEC_BROKER_PASSWORD          | guest                                                            | Obtém a senha para se conectar no broker RABBITMQ. |
| HORUSEC_SMTP_USERNAME            |                         | Obtém o `username` para conectar no serviço de e-mail. Exemplo usando gsuite como host `user@gmail.com`. |
| HORUSEC_SMTP_PASSWORD            |                         | Obtém o `password` para conectar no serviço de e-mail. Exemplo usando gsuite como host `Y0urS!r0ng#P@ssw0rd`. |
| HORUSEC_SMTP_HOST                |                         | Obtém o `host` para conectar no serviço de e-mail. Exemplo usando gsuite como host `smtp.gmail.com`. |
| HORUSEC_SMTP_PORT                |                         | Obtém o `port` para conectar no serviço de e-mail. Exemplo usando gsuite como host `587`. |
| HORUSEC_EMAIL_FROM               | horusec@zup.com.br      | Obtém o e-mail da origem do usuário para enviar e-mail. Se você está usando outro e-mail para enviar, mude aqui. |

## **Triggers de E-mails**

| Trigger                   | Descrição                                                                   |
|---------------------------|-------------------------------------------------------------------------------|
| Confirmação de e-mail     | E-mail usado para confirmação por e-mail do usuário.                        |
| Resetar a senha           | Um e-mail que permite ao usuário redefinir sua própria senha.                  |
| Convidar para o workspace | Um e-mail para informar um usuário que ele foi convidado para uma organização. |
