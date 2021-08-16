---
title: How to enable and disable the application admin? 
weight: 14
description: In this section, you will find a tutorial to enable and/or disable the Horusec's web application admin.
---

The application admin functionality allows Horusec-Auth to create an admin user automatically, when it doesn't exist. But if your application already have an admin user, Horusec-Auth deletes and recreates other with your data. 

{{% alert color="info" %}}
When this function is enabled **the user can create workspaces**. 
{{% /alert %}}

### How to enable? 

**Step 1:** Start the microservice Horusec-auth with:

- Environment variable: **`HORUSEC_ENABLE_APPLICATION_ADMIN`**; 
- Value **true**.

**Step 2:** Now, Horusec creates the admin user of the application with the default value. You will always see an user admin: the "application admin". 

**Step 3:** The user is created with the following data: 

```text
username = horusec-admin
email = horusec-admin@example.com
password = Devpass0*
```

### How to configure the users data?

You can also configure the user data, check out the two scenarios: 

**Scenario 1:** In Horusec-auth's microsservice with the environment variable **`HORUSEC_APPLICATION_ADMIN_DATA`** and the value **true**, you will see the data through the enviroment variable **`HORUSEC_APPLICATION_ADMIN_DATA`** in the following format: 

`"{\"username\": \"horusec-admin\",\"email\":\"horusec-admin@example.com\",\"password\":\"Devpass0*\"}"`

**Scenario 2:** In the Horusec-auth's microsservice with the environment variable **`HORUSEC_ENABLE_APPLICATION_ADMIN`** with the value **false** the admin is disabled. In this scenario, the user is not created in the system when your application starts. 


{{% alert color="info" %}}
After the user is created, **it cannot be edited anymore**. 
{{% /alert %}}