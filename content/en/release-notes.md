---
title: Release Notes
weight: 52
description: >-
  In this section, you will find Horusec's Release Notes.
---

{{% release/group %}}
{{% release/item type="feature" repository="admin" date="May 2021" %}}
New Horusec-Admin resource <a href="/docs-v1/web/installation/install-with-admin/">in the v1.0 version</a> and starting the implementation for 2.0 version. It was created to simplify the web application installation, now you only have to run a command.
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

{{% release/item repository="CLI" date="June 2021" %}}
Supports a new language: Swift. 

Add new tool Owasp Dependency Check for languages: Python, Ruby, Javascript/Typescript, Java, C#.

Add new tool dotnet-cli for C#.
{{% /release/item %}}

{{% release/item repository="CLI" date="July 2021" %}}
Shellcheck is not enabled by default. To enable it, use the -j flag.

Add Nancy dependency check for Golang.

{{% /release/item %}}

{{% release/item repository="Horusec Platform" date="June 2021" %}}
Data download of the dashboard in: PDF, XLS, XML, CSV, PNG, JSON.

Add accessibility in Horusec-manager.

Add new analysis tools in Horusec-api: **dependency check** and **dotnet-cli**.


{{% /release/item %}}

{{% release/item repository="Horusec Platform" date="July 2021" %}}

Add Nancy support in the analysis API. 

Permissions on the new Manager navigation. 

Repositories' count in the workspace.

New Manager screens: 'Home' and 'User'.

{{% /release/item %}}

{{% release/item type="fix" repository="CLI" date="May 2021" %}}
Code base restructure.

Analysis correction in the Git history ignoring files inside the `git folder`.
{{% /release/item  %}}

{{% release/item repository="CLI" date="June 2021" %}}
 Corrections to run tests with data-races.

Fix error: CLI was trying to pull the images even with the disable Docker flag activated. 
{{% /release/item  %}}

{{% release/item repository="CLI" date="July 2021" %}}
Fix error in the shellcheck output parse. 
{{% /release/item  %}}

{{% release/item repository="VSCODE" date="May 2021" %}}
 Fix error to remove Horusec CLI container on Windows.
{{% /release/item  %}}

{{% release/item repository="Horusec-Platform" date="June 2021" %}}
Fix error on Horusec-Manager path manipulation. 

Fix wrong values in Helm Charts.

Fix some text when export in multiples languages.

Fix URI on Helm Charts' schema.

Fix URLs in Helm Charts.

Fix repositories created with workspace token that didn't inherit permissions.

Fix the LDAP authentication, in some cases the repositories were duplicated. 

{{% /release/item  %}}

{{% release/item repository="Horusec-Platform" date="July 2021" %}}
Fix error in the 'Get' repository and in the workspace when there is LDAP authentication.

Fix LDAP error message and verified other messages.

Fix the 'Get' repository created with workspace token.

Fix repositories created with the workspace's token that didn't inherit permissions.

Fix specific cases in the LDAP authentication, some repositories were duplicated.

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

{{% release/item repository="CLI" date="June 2021" %}}
Add CWE links in all descriptions of Swift rules.
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

{{% release/item repository="CLI" date="June 2021" %}}
Improvement of the tools that use Horusec-Engine.

Add CWE links in all descriptions of Swift rules.

{{% /release/item  %}}

{{% release/item repository="plugin VSCode" date="June 2021" %}}
Support for Horusec-CLI's [**lastest available version**](https://github.com/ZupIT/horusec-vscode-plugin ). 
{{% /release/item  %}}

{{% release/item repository="Horusec-Platform" date="June 2021" %}}
Improvement on Horusec-Manager's responsiveness.

Add new 'not configured' values.

Update migrations to save to database table and check if the script has already been run.

Standardize environment variables' names in Horusec-Manager.

Improve all Horusec-Manager tables.

Change to use the enums from devkit to setup use cases of min. and max. length.

Improvement when updating a vulnerability.
{{% /release/item  %}}

  {{% release/item type="docs" repository="CLI" date="June 2021" %}}
  Install with Operator.

  Install with Horusec-Admin.
  {{% /release/item  %}}
{{% /release/group %}}


Check out [**Release Notes**](https://github.com/ZupIT/horusec/releases) page.
