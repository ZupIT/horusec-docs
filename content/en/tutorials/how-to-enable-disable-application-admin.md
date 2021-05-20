---
title: How to enable and disable the application admin? 
weight: 14
description: In this section, you will find a tutorial to enable and/or disable the Horusec's web application admin.
---

The Application Admin functionality allows an admin user admin user to be created, after Horusec-Auth has started. When this function is enabled **the user can create workspaces**. 

Horusec-auth's microsservice starts with: 

- The environment variable **`HORUSEC_ENABLE_APPLICATION_ADMIN`** and the value **true**.

After that, Horusec makes it possible to create an admin user of the application with a default value. The user is created with the following data: 


```text
username = horusec-admin
email = horusec-admin@example.com
password = Devpass0*
```

You can also configure the default user data in the Horusec-auth microsservice, see: 
- The environment variable **`HORUSEC_APPLICATION_ADMIN_DATA`** and the value can be altered the way you want:
  `"{\"username\": \"horusec-admin\",\"email\":\"horusec-admin@example.com\",\"password\":\"Devpass0*\"}"`

When Horusec-auth starts with:
- The environment variable **`HORUSEC_ENABLE_APPLICATION_ADMIN`** and the value **false**. 
    - This user won't be created in the system when the application starts.


{{% alert color="info" %}}
After the user is created, **it cannot be edited anymore**. 
{{% /alert %}}

