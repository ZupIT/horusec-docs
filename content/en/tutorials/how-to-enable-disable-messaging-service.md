---
title: How to enable and disable the messaging service?
weight: 15
description: In this section, you will find how to enable and/or disable Horusec's messaging service. 
---

---

## Where is used?

This service inside Horusec has some functionalities used in an asynchronous mode, such as: 

* Sending email to confirm an account creation;
* Sending email to reset a password;
* Sending email to invite a user to your workspace;


## What services use this functionality?

The services used to perform the queues consume are: 

* [**Horusec-Messages**]({{< ref path="/web/services/messages.md" lang="en">}})


{{% alert color="info" %}}
When you disable the email service, it is common to see these services 'stopped', because they won't be used.
{{% /alert %}}

When you enable the messaging service, it is necessary to connect to your e-mail service. For that, add to **"horusec-messages"** the following environment variables:   
- HORUSEC_SMTP_USERNAME="e-mail service username";
- HORUSEC_SMTP_PASSWORD="e-mail password service";
- HORUSEC_SMTP_ADDRESS: "e-mail address service";
- HORUSEC_SMTP_HOST: "e-mail host service";
- HORUSEC_SMTP_PORT: "e-mail service port".

And the services that receive actions when it is necessary in it respective queues are:

* [**Horusec-Auth**]({{< ref path="/web/services/auth.md" lang="en">}})
* [**Horusec-Core**]({{< ref path="/web/services/core.md" lang="en">}})

{{% alert color="info" %}}
When you disable the messaging service, these services ignore the action of publishing in a queue and follow to the next functionality.
{{% /alert %}}


# How to change?

When the microservices have the `HORUSEC_DISABLED_EMAILS` environment variable with a **false** value, Horusec is automatically enabled to send emails and other functionalities that use the messaging service.

By default, the microservices below already start with a **false** value:

- [**horusec-Auth**](https://github.com/ZupIT/horusec-platform/tree/main/auth)

If the `HORUSEC_DISABLED_EMAILS` microservice value is **true**, the messaging service will be disabled. 
To enable it, it's only necessary to change the value to **false**. 

{{% alert color="info" %}}
When you upload Horusec's web application using [**Helm ou Docker-compose**]({{< ref path="/web/installation" lang="en">}}) patterns, this environment variable has a **true** value.
{{% /alert %}}