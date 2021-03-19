---
title: Broker
weight: 80
description: In this section, you will find information about Broker service.
---

## **What is it?**
Horusec-broker is a microservice that uses [**RabbitMQ**](https://www.rabbitmq.com/) to manage asynchronous packages in your application. 

Some example: 

* When Horusec-API service receives an analysis, it will be published in the Horusec-webhook line, it will trigger via http to the place the client configured. 

* When you register your account on Horusec-Auth service, it will be published in the line where Horusec-messages will send an email to confirm your registration.

* If you ask to reset your password on Horusec-Auth, it will be published in the line where Horusec-message will send an email withe the authentication code to do it. 

* If you invite another user to join your workspace on Horusec-Auth, it will be published where Horusec-messages will send an email to see the invitation.
