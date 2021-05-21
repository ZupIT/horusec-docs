---
title: Como habilitar e desabilitar o serviço de emails?
weight: 8
description:  Nesta seção, você encontra as informações sobre os serviços de email para o Horusec.
---

---

## **Onde é utilizado?** 

Esse serviço dentro do Horusec possui algumas funcionalidades realizadas de modo assíncrono, como por exemplo:

* Envio de e-mail para confirmação de criação de conta;
* Envio de e-mail para reset de senha;
* Envio de e-mail para convidar usuário a fazer parte de seu workspace;

## **Quais serviços fazem uso desta funcionalidade?**

Os serviços que são usados para realizar o consumo das filas são:

* [**Horusec-Messages**]({{< ref path="/web/services/messages" lang="pt-br">}})

{{% alert color="info" %}}
Quando você desabilita o serviço de emails, é normal ver estes serviços "parados", porque eles não serão utilizados.
{{% /alert %}}

Quando você habilita o serviço de mensageria, é necessário que ele conecte ao seu serviço de e-mail. Para isso, adicione no serviço **"horusec-messages"** as seguintes variáveis de ambiente: 
HORUSEC_SMTP_USERNAME="username do serviço de email";
HORUSEC_SMTP_PASSWORD="senha do serviço de email";
HORUSEC_SMTP_ADDRESS: "endereço do serviço de email";
HORUSEC_SMTP_HOST: "host do serviço de email";
HORUSEC_SMTP_PORT: "porta do serviço de email".

E os serviços que recebem ações quando é necessário publicar em suas respectivas filas são:
* [**Horusec-Auth**]({{< ref path="/web/services/auth" lang="pt-br">}})
* [**Horusec-Core**]({{< ref path="/web/services/core" lang="pt-br">}})

{{% alert color="info" %}}
Quando você desabilita o serviço de emails, este serviços ignoram a ação de publicar na fila e seguem para a próxima funcionalidade.
{{% /alert %}}


## **Como alterar?**

Quando os microsserviços possuem a variável de ambiente `HORUSEC_DISABLED_EMAILS` com valor **false**, automaticamente o Horusec já está habilitado para enviar e-mails a outras funcionalidades que utiliza o serviço de emails.

Por default os microsserviços abaixo já iniciam com a valor **false**:
* [**Horusec-Auth**]({{< ref path="/web/services/auth" lang="pt-br">}})

Se o valor do microsserviço `HORUSEC_DISABLED_EMAILS` for **true** o serviço de emails estará desabilitado.
Para habilitá-lo é preciso apenas trocar o seu valor para **false**.

{{% alert color="info" %}}
Quando você sobe uma aplicação web do Horusec utilizando o [**Helm ou Docker-compose**]({{< ref path="/web" lang="pt-br">}}) padrões, essa variável de ambiente tem o valor **true**.
{{% /alert %}}
