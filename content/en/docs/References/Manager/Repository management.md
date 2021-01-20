---
title: Repository management
weight: 34
description: 'On this section, you will find information about repository management.'
---

---

Here you can view all the repositories of your organization in the platform, besides that you can manage the token and the users who have the repository registered.

When you create a repository, you have some functionalities such as: 

* Manage which users have access; 
* Manage the access tokens of the repository. 

![](/docs/repo-management-en_us.gif)

### Repository's token

The token in the repository can be used to all analysis you make and it has the main goal to help Horusec identify the organization and the analysis repository sent through [**CLI.**](../../cli) 

The token in the repository is unique and it can only be created by a manager in the repository or the organization.  

For example, if you add this token in your pipeline, Horusec will send an analysis and store so you can have an analytical view of the vulnerabilities of your repository.

{{% alert color="danger" %}}
Remember. when creating an access token it will be seen only one time.
{{% /alert %}}

![](/docs/token-de-repo-en_us.gif)

### Repository's users

You can invite new users to join the repository. When you invite, it is possible to add the following permissions: 

* **Repository manager**
  * Manage the repository \(edit, view, remove\);
  * Manage the repository's users \(invite, view, update and remove\);
  * Manage repository's access token \(create, view, revoke\);
  * View the repository's dashboard users have access to.  
* **Repository user**
  * View the repository's dashboard users have access to. 

See the gif below an example with the repository invitation to new users: 

![](/docs/usuario-de-repo-en_us.gif)
