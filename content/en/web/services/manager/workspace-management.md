---
title: Workspace management
weight: 32
description: In this section, you will find information about workspace management.
---

---

This feature allows you to view, on the platform, all workspaces that you have created or are part of. In addition, you can manage your workspace token or manage your users' permission.

![](/docs/en/web/services/manager/workspace-management/0-workspace.gif)

###  Workspace token

The token is a resource you can create to use in your analysis. The main goal is to help Horusec identify the workspace and the repository when the [**CLI** ](../../cli)sends a new analysis to the platform.

For example, if you create an workspace with 100 repositories, you will only need 1 access token. When you send an analyis to this repository, you will have to pass the repository's name you want to create or it already exists to the CLI.

You have the option to create the token, but it is safer to generate only one to the repository and revoke it after a while. This way, you make sure the workspace will always be safe.


{{% alert color="warning" %}}
Remember: when you create an access token, it can only be seen once.
{{% /alert %}}

Check below how the token dashboard is in Horusec:

![](/docs/en/web/services/manager/workspace-management/1-token.gif)

### Workspace users

You can invite new users to enter your workspace. To do that, you have do register them in Horusec's database and at the end of the process, an email is sent to invite the users to enter it.

When you invite, you have to choose the user's function inside the workspace. There are two main funtions, each one has the following permissions:

1. **Manager**

   * Manage the workspace \(view, update, remove\);
   * Manage workspace's tokens \(create, view, update, remove\);
   * Manage workspace's users \(invite, view, update, remove;
   * Add new repositories;
   * View all the repositories in the workspace;
   * View the workspace's dashboard;
   * View repositories' dashboard the user has access to.

2. **User**

   * View repositories' dashboard the user has access to.

![](/docs/en/web/services/manager/workspace-management/2-invite.gif)
