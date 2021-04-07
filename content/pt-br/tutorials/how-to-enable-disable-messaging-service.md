---
title: Como habilitar e desabilitar o serviço de mensageria?
weight: 7
description:  Nesta seção, você encontra as informações sobre os serviços de mensageria para o Horusec.
---

---

## **O que é o serviço de mensageria?**

O serviço de mensageria garante o envio e o recebimento de mensagens de forma segura. O Horusec utiliza o [**RabbitMQ**](https://www.rabbitmq.com/), uma opção leve e fácil de implantado no local e na nuvem e que oferece suporte a vários protocolos de mensagens. 
RabbitMQ pode ser implantado em configurações distribuídas e federadas para atender aos requisitos de alta escala e alta disponibilidade.

## **Onde é utilizado?**

Esse serviço dentro do Horusec possui algumas funcionalidades realizadas de modo assíncrono, como por exemplo: 

* Envio de e-mail para confirmação de criação de conta;
* Envio de e-mail para reset de senha;
* Envio de e-mail para convidar usuário a fazer parte de seu workspace;
* Disparo via webhook das análises realizadas pelo Horusec-CLI para um destino HTTP.

## **Quais serviços fazem uso desta funcionalidade?**

Os serviços que são usados para realizar o consumo das filas são: 

* [**Horusec-Messages**](/docs/pt-br/web/services/messages)
* [**Horusec-Webhook**](/docs/pt-br/web/services/webhook)

{{% alert color="info" %}}
Quando você desabilita o serviço de mensageria, é normal ver estes serviços "parados", porque eles não serão utilizados.
{{% /alert %}}

E os serviços que recebem ações quando é necessário publicar em suas respectivas filas são:
* [**Horusec-Auth**](/docs/pt-br/web/services/auth)
* [**Horusec-Account**](/docs/pt-br/web/services/account/)
* [**Horusec-Api**](/docs/pt-br/web/services/api)

{{% alert color="info" %}}
Quando você desabilita o serviço de mensageria, este serviços ignoram a ação de publicar na fila e seguem para a próxima funcionalidade.
{{% /alert %}}


## **Como alterar?**

Quando os microsserviços possuem a variável de ambiente `HORUSEC_DISABLED_BROKER` com valor **false**, automaticamente o Horusec já está habilitado para enviar e-mails a outras funcionalidades que utiliza o serviço de mensageria. 

Por default os microsserviços abaixo já iniciam com a valor **false**:

- [**horusec-account**](https://github.com/ZupIT/horusec/tree/master/horusec-account)
- [**horusec-api**](https://github.com/ZupIT/horusec/tree/master/horusec-api) 
- [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth)

Se o valor do microsserviço `HORUSEC_DISABLED_BROKER` for **true** o serviço de mensageria estará desabilitado. 
Para habilitá-lo é preciso apenas trocar o seu valor para **false**. 

{{% alert color="info" %}}
Quando você sobe uma aplicação web do Horusec utilizando o [**Helm ou Docker-compose**](/docs/pt-br/web) padrões, essa variável de ambiente tem o valor **true**.
{{% /alert %}}
