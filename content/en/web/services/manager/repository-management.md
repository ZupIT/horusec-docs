---
title: Repository management
weight: 34
description: In this section, you will find information about repository management.
---

---

Here you can view all the repositories of your organization in the platform, besides that you can manage the token and the users who have the registered repository.

When you create a repository, you have some functionalities such as: 

* Manage which users have access; 
* Manage the access tokens of the repository. 

![](/docs/en/references/manager/repository-management/1-repository-organization.gif)

### Repository's token

The token in the repository can be used to all analysis you make and it helps Horusec identify the organization and the analysis repository sent through [**CLI.**](../../cli) 

The token in the repository is unique and it can only be created by a manager in the repository or the organization.  

For example, if you add this token in your pipeline, Horusec will send an analysis and store it, so you can have an analytical view of the vulnerabilities of your repository.


{{% alert color="warning" %}}
Remember when you create an access token you only see it once.
{{% /alert %}}


![](/docs/en/references/manager/repository-management/2-token-repository.gif)

### Repository's users

You can invite new users to join the repository. When you invite, it is possible to add the following permissions: 

* **Repository manager**
  * Manage the repository \(edit, view, remove\);
  * Manage the repository's users \(invite, view, update and remove\);
  * Manage repository's access token \(create, view, revoke\);
  * View the repository's dashboard users have access to.  
* **Repository user**
  * View the repository's dashboard users have access to. 

See an example below with the repository invitation to new users: 

![](/docs/en/references/manager/repository-management/3-invite-user.gif)
