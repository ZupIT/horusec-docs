---
title: Broker
weight: 90
description: Nesta seção, você encontrar mais informações sobre o serviço de Broker.
---

## **O que é?** 

O Horusec-Broker é um microsserviço que utiliza a  [**RabbitMQ**](https://www.rabbitmq.com/) para gerenciar pacotes assíncronos dentro da sua aplicação. 

Alguns exemplos:

* Ao receber uma análise no sserviço Horusec-API, o Broker irá publicar na fila onde o serviço Horusec-webhook, que irá receber essa análise e, assim, realizará o disparo via http para o destino que o cliente configurou.

* Ao cadastrar sua conta no serviço Horusec-Auth, elo Broker irá publicar na fila onde o serviço Horusec-messages, que vai enviar um e-mail para confirmar o cadastro registrado na plataforma.

* Ao pedir para apagar sua senha no serviço Horusec-Auth, o Broker irá publicar na fila onde o serviço Horusec-messages, que vai enviar um e-mail com um código unico de autenticação para fazer o reset da sua senha.

* Ao convidar outro usuário a fazer parte do seu workspace no serviço Horusec-Auth, o Broker irá publicar na fila onde o serviço Horusec-messages, que vai enviar um e-mail para que ele possa visualizar o convite realizado.