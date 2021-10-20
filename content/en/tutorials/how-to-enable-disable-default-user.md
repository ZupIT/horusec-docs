---
title: How to enable and disable the default user in the application? 
weight: 7
description: In this section, you will find a tutorial on how to enable and disable the default user in Horusec's web application. 
---

---

The functionality of the default user allows an user to be automatically created after [**Horusec-Auth**]({{< ref path="/web/dev-guide/services/auth.md" lang="en">}}) starts.

Horusec-auth's microsservice starts with: 

-  The environment variable **`HORUSEC_ENABLE_DEFAULT_USER`** and the value **true**.

After that, Horusec makes it possible to create an user with its default value. The user is created with the following data: 

```text
username = dev
email = dev@example.com
password = Devpass0*
```

You can also configure the default user data in the Horusec-auth microsservice, see: 
- The environment variable **`HORUSEC_DEFAULT_USER_DATA`** and the value can be altered the way you want:
  `"{\"username\": \"dev\",\"email\":\"dev@example.com\",\"password\":\"Devpass0*\"}"`

When Horusec-auth starts with:
- The environment variable **`HORUSEC_ENABLE_DEFAULT_USER`** and the value **false**.
  - This user won't be created in the system when the application starts.


{{% alert color="info" %}}
After the user is created, **it cannot be edited anymore**. 
{{% /alert %}}