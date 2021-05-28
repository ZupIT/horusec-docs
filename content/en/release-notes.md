---
title: Release Notes
weight: 52
description: >-
  In this section, you will find Horusec's Release Notes.
---

{{% release/group %}}
{{% release/item type="feature" repository="admin" date="May 2021" %}}
New Horusec-Admin resource in 1.0 and starting the implementation for 2.0 version. It was created to simplify the web application installation, now you only have to run a command.
{{% /release/item %}}

{{% release/item repository="core" date="May 2021" %}}
The Account microsservice was renamed to Core. Now we have new operations like workspace management, repositories, permissions and tokens. 
{{% /release/item %}}

{{% release/item repository="manager" date="May 2021" %}}
Accessibility resources implementation: fontsize, color contrast and improvements on keyboard and screen reader browsing. 

A more detailed dashboard, now it shows information like the amount of severities and what types were found. 


Pages navigation improvement, now you can view detailed vulnerabilities in an analytical way.
{{% /release/item %}}

{{% release/item repository="web" date="May 2021" %}}
New Analytic service version.

New Account service version, the name was updated to **Core**.

New vulnerabilities management service.

New data management service.

{{% /release/item %}}

{{% release/item repository="Vulnerabilities" date="May 2021" %}}
 A new service was created specifically for vulnerabilities management that allows you to update and filter the vulnerabilities found in your application. 
{{% /release/item %}}


{{% release/item type="fix" repository="CLI" date="May 2021" %}}
Code base restructure.

Analysis correction in the Git history ignoring files inside the `git folder`.
{{% /release/item  %}}

{{% release/item repository="VSCODE" date="May 2021" %}}
 Fix error to remove Horusec CLI container on Windows.
{{% /release/item  %}}

{{% release/item type="chore" repository="Analytic" date="May 2021" %}}
Included a new route for data return; 
  
Data was changed to support the return of information like vulnerabilities’ severity and what kind you are able to find, such as: vulnerability, accepted risk, false positive and adjusted. 

A new database was included to perform an application test. 
{{% /release/item  %}}

{{% release/item repository="Auth" date="May 2021" %}}
Now you have control over the user section and the system configuration is centered on it.
{{% /release/item  %}}

{{% release/item repository="Broker" date="May 2021" %}}
Message Broker is now required to use Horusec Web Application. You can also configure the SMTP  (Simple mail transfer protocol) use in the platform.  
{{% /release/item  %}}

{{% release/item repository="CLI" date="May 2021" %}}
NGINX file support.

Update [**Gitleaks**](https://github.com/zricethezav/gitleaks) on the analysis tool to the latest version available.
{{% /release/item  %}}

{{% release/item repository="migration" date="May 2021" %}}
Migration service was changed to be more dynamic, it will allow Horusec to run a folder with all migrations from a specific database.
{{% /release/item  %}}

{{% release/item repository="plugin VSCode" date="May 2021" %}}
Horusec’s VScode plugin version update. [**Check out more on Github's project**](https://github.com/ZupIT/horusec-vscode-plugin).

Update Horusec CLI container to v2.
{{% /release/item  %}}

{{% release/item repository="web" date="May 2021" %}}
Project’s migration to the Horusec Platform: **https://github.com/ZupIT/horusec-platform** 
{{% /release/item  %}}

{{% release/item repository="webhook" date="May 2021" %}}
New resource to manage the registered webhooks in your application. 
{{% /release/item  %}}

  {{% release/item type="docs" repository="CLI" date="May 2021" %}}
  TBD
  {{% /release/item  %}}
{{% /release/group %}}


Check out [**Release Notes**](https://github.com/ZupIT/horusec/releases) page.
