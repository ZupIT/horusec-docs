---
title: "Overview"
linkTitle: "Overview"
weight: 1
type: list
description: >-
 In this section, you will find details about web applications.
---

## **What is it?**
Horusec's **web applications** are an extension of the CLI functionalities in order to manage the vulnerabilities found and sort them. 

## **What are the web application's functionalities?**

There are several functionalities in these applications, see examples below:

### **1. Multitenant**

You can have several workspaces to control each environment or organize the way it works better for you.

![](/docs/ptbr/web/overview/0-multitenant.png)

### **2. Access control**

It is possible to control the user access the way the admin wants.

### **3. Analytical vision**

It allows you to manage your project through a dashboard that gives you data like, for example:  You can have a complete view of your workspace, for example, it is possible to know which repository has more vulnerabilities, which languages has more leaks or even the person who is probably merging some vulnerabilities causing a failure in your project.

Permite que você faça a gestão do seu projeto a partir de um dashboard que fornece dados como, por exemplo:

* Which repository has more vulnerabilities and what are your classifications;
* Which languages has more leaks and what are your classifications;
* Who is responsible for merging some vulnerabilities causing a failure in your project and what are your classifications.

![](/docs/ptbr/web/overview/1-1-analytic.png)

![](/docs/ptbr/web/overview/1-2-analytic.png)

![](/docs/ptbr/web/overview/1-3-analytic.png)

### **4. Vulnerabilities classification**

It allows you to rank vulnerabilities found by Horusec. It is also possible to ignore (in some false positive cases, for example) or perform corrections.

![](/docs/ptbr/web/overview/2-vulneravilities.png)

### **5. Integration with other oAuth types**

It allows you to integrate your organization's tool with Horusec's authentication service, like for example, Keycloak or LDAP. You can speed up the implementation process of your project.

### **6. Integration with messenger service**

It allows you to enable the messenger service and use some functionalities, like: 

- Send e-mail to confirm the account; 
- Send e-mail with a security code to reset the password; 
- Send e-mail to invite other users to join your workspace;
- Manage webhooks and get all Horusec-CLI performed analysis. 


### Read more
 [**How to change the authentication type on your web application?**]({{< ref path="/tutorials/how-to-change-the-authentication-type" lang="pt-br">}})