---
title: Como habilitar e desabilitar o serviço de mensageria ?
weight: 7
description: Você vai encontrar aqui as opções de uso disponíveis para o Horusec.
---

---

# O que é o serviço de mensageria?
Atualmente o Horusec faz o uso do [RabbitMQ](https://www.rabbitmq.com/) é leve e fácil de implantar no local e na nuvem. Ele oferece suporte a vários protocolos de mensagens. RabbitMQ pode ser implantado em configurações distribuídas e federadas para atender aos requisitos de alta escala e alta disponibilidade.

# Onde estamos utilizando?
Dentro do horusec possui algumas funcionalidades que são realizadas de modo assincrono como por exemplo:
* Envio de e-mail para confirmação de criação de conta
* Envio de e-mail para reset de senha
* Envio de e-mail para convidar usuário a fazer parte de seu workspace
* Disparo via webhook das análises realizadas pelo Horusec-CLI para um destino HTTP

# Como alterar?
Por padrão, os microsserviços:

* [**horusec-account**](https://github.com/ZupIT/horusec/tree/master/horusec-account)
* [**horusec-api**](https://github.com/ZupIT/horusec/tree/master/horusec-api)
* [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth)

Iniciam com a variável de ambiente **`HORUSEC_DISABLED_BROKER`** com seu valor **false**. Desta forma, o Horusec irá enviar e-mails e outras funcionalidades que utilizam o serviço de mensageria.

Quando o valor é **true**, não será realizado o uso do serviço de mensageria e, por isso, não há algumas funcionalidades como o envio de e-mails, por exemplo. Neste caso, quando existe a interação “o e-mail está confirmado?”, ela é automaticamente aceita pelo Horusec, pois não há o disparo destes e-mails.

{{% alert color="info" %}}
Quando você sobe uma aplicação web do horusec utilizando o [helm ou docker-compose](/docs/pt-br/web) padrões, essa variável de ambiente tem seu valor como **true**.
{{% /alert %}}
