---
title: Broker
weight: 90
description: Nesta seção, você vai encontrar mais informações referentes do serviço de Broker.
---

# Horusec-Broker
Atualmente o horusec utiliza a ferramenta [RabbitMQ](https://www.rabbitmq.com/) para gerenciamento de pacotes assincronos dentro da aplicação como por exemplo:

* Ao receber uma análise no serviço Horusec-API será publicado na fila onde o serviço Horusec-webhook receberá essa análise e será realizado o disparo via http para o destino que o cliente configurou
* Ao cadastrar sua conta no serviço Horusec-Auth será publicado na fila onde o serviço Horusec-messages vai enviar um e-mail para confirmar o cadastro registrado na plataforma.
* Ao pedir para resetar sua senha no serviço Horusec-Auth será publicado na fila onde o serviço Horusec-messages vai enviar um e-mail com um código unico de autenticação para resetar sua senha.
* Ao convidar outro usuário a fazer parte do seu workspace no serviço Horusec-Auth será publicado na fila onde o serviço Horusec-messages vai enviar um e-mail para que ele possa visualizar o convite realizado.

Dentre outras funcionálidades.