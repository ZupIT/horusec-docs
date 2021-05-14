---
title: How to enable and disable the messaging service?
weight: 15
description: In this section, you will find how to enable and/or disable Horusec's messaging service. 
---

---

## What is the messaging service?

The messaging service ensures the sending and receipt of messages safely. Horusec uses [**RabbitMQ**](https://www.rabbitmq.com/), as an easy option to implement locally or in cloud and that offers support to several message's protocols. RabbitMQ can be implemented in distributed and federated configurations to attend into high-scaled and high-availability requirements.

## Where is used?

This service inside Horusec has some functionalities in asynchronous mode, such as: 

* Sending email to confirm an account creation;
* Sending email to reset a password;
* Sending email to invite a user to your workspace;
* Triggering through webhook with analysis made by Horusec-CLI with a HTTP destiny.

## What services use this functionality?

The services used to realize the queues consume are: 

* [**Horusec-Messages**](/docs/web/services/messages)
* [**Horusec-Webhook**](/docs/web/services/webhook)

{{% alert color="info" %}}
When you disable the messaging service, it is normal to see these services "stopped" because they are not been in use.
{{% /alert %}}

And the services that receive actions when it is necessary in it respective queues are:

* [**Horusec-Auth**](/docs/web/services/Auth)
* [**Horusec-Account**](/docs/web/services/Account)
* [**Horusec-Api**](/docs/web/services/API)

{{% alert color="info" %}}
When you disable the messaging service, these services ignore the action of publishing in a queue and follow to the next functionality.
{{% /alert %}}


# How to change?

When the microservices have the `HORUSEC_DISABLED_BROKER` environment variable with **false** value, automatically Horusec is enabled to send emails and other functionalities that use the messaging service.

By default, the microservices below already start with a **false** value:

- [**horusec-account**](https://github.com/ZupIT/horusec/tree/master/horusec-account)
- [**horusec-api**](https://github.com/ZupIT/horusec/tree/master/horusec-api) 
- [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth)

If the `HORUSEC_DISABLED_BROKER` microservice value is **true**, the messaging service will be disabled. 
To enable it, it's only necessary to change the value to **false**. 

{{% alert color="info" %}}
When you upload Horusec's web application using [Helm ou Docker-compose](/docs/web) patterns, this environment variable has a **true** value.
{{% /alert %}}