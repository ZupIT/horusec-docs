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

* [**Horusec-Messages**](/docs/pt-br/web/services/messages)

{{% alert color="info" %}}
Quando você desabilita o serviço de emails, é normal ver estes serviços "parados", porque eles não serão utilizados.
{{% /alert %}}

E os serviços que recebem ações quando é necessário publicar em suas respectivas filas são:
* [**Horusec-Auth**](/docs/pt-br/web/services/auth)
* [**Horusec-Core**](/docs/pt-br/web/services/core/)

{{% alert color="info" %}}
Quando você desabilita o serviço de emails, este serviços ignoram a ação de publicar na fila e seguem para a próxima funcionalidade.
{{% /alert %}}


## **Como alterar?**

Quando os microsserviços possuem a variável de ambiente `HORUSEC_DISABLED_EMAILS` com valor **false**, automaticamente o Horusec já está habilitado para enviar e-mails a outras funcionalidades que utiliza o serviço de emails.

Por default os microsserviços abaixo já iniciam com a valor **false**:
* [**Horusec-Auth**](/docs/pt-br/web/services/auth)

Se o valor do microsserviço `HORUSEC_DISABLED_EMAILS` for **true** o serviço de emails estará desabilitado.
Para habilitá-lo é preciso apenas trocar o seu valor para **false**.

{{% alert color="info" %}}
Quando você sobe uma aplicação web do Horusec utilizando o [**Helm ou Docker-compose**](/docs/pt-br/web) padrões, essa variável de ambiente tem o valor **true**.
{{% /alert %}}
