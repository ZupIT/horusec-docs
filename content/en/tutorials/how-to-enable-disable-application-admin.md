---
title: How to enable and disable the application admin?
weight: 14
description: In this section, you will find a tutorial to enable and/or disable the Horusec's web application admin.
---

The Application Admin functionality is intended only for the Horusec Administrator to create companies.

### False Value

The [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth) microservice starts with:

-  The environment variable **`HORUSEC_ENABLE_APPLICATION_ADMIN`** and the **false** value. 

This way, there is a normal Horusec flow where you can create your company and manage it the way you want it.


### True Value

When the value is **true**, the [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth) creates an user that that is configured in the environment:

- **`HORUSEC_APPLICATION_ADMIN_DATA`** and the value:

```bash
 HORUSEC_APPLICATION_ADMIN_DATA="{\"username\": \"horusec-admin\", \"email\":\"horusec-admin@example.com\", \"password\":\"Devpass0*\"}"
```

This user has a specific role within Horusec, as the only person that will create the companies and inform who will be the administrator user, and it may be the user himself or another existing one on the platform.

