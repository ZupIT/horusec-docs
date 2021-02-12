---
title: Introduction
weight: 7
---

---
### Horusec usage options
### **Enable / Disable Messaging Service**

Horusec allows you to enable and disable the messaging service.

By default,  [**horusec-account**](https://github.com/ZupIT/horusec/tree/master/horusec-account) **,** [**horusec-api**](https://github.com/ZupIT/horusec/tree/master/horusec-api) **,** [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth)**,** [**horusec-webhook**](https://github.com/ZupIT/horusec/tree/master/horusec-webhook) microsservices starts with the environment variable **`HORUSEC_DISABLED_BROKER`**  with a **false** value. Then, Horusec will send e-mails and other features that use the messaging service.

When the value is **true**, the messaging service will not be used,  therefore there aren't some features, such as sending e-mails. In this case, when there is an interaction like “is the e-mail confirmed?”, it is automatically accepted by Horusec,  these e-mails aren't triggered.

### **Enable / Disable Application Admin**

The Application Admin functionality is intended only for the Horusec Administrator to create companies.

[**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth#horusec-auth)  microservice starts with the environment variable **`HORUSEC_ENABLE_APPLICATION_ADMIN`** with its value **false**. This way, there is a normal Horusec flow where you can create your company and manage it the way you want it.

When the value is **true**, **horusec-auth** creates a user that is configured in the **`HORUSEC_APPLICATION_ADMIN_DATA`** environment variable with its value:`{\"username\": \"horusec-admin\", \"email\":\"horusec-admin@example.com\", \"password\":\"Devpass0*\"}`

This user has a specific role within Horusec, as the only person that will create the companies and inform who will be the administrator user, and it may be the user himself or another existing one on the platform.
