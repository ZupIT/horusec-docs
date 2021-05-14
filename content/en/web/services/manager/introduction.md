---
title: Overview
weight: 30
description: In this section you will find information about Horusec-Manager.
---

---

## What is it?  

Manager is Horusec's  graphical interface, which is possible to: 

* Create an account and authenticate;
* View and analyze the vulnerabilities found by the CLI;
* Manage platform's accesses. 

You will see below more details on how to make each one of these activities.

## Creating an account 

Manager creates an account inside Horusec. After your user is created, you just need to confirm the account on your email. 

![](/docs/ptbr/web/services/manager/introduction/1-create-account.gif)

## Authentication

Horusec offers a simple authentication managed by its own system. 

![](/docs/ptbr/web/services/manager/introduction/2-login-empty.png)

## Analytics dashboard

When an analysis is sent to Horusec to store, you have access to a detailed dashboard with the organization or repository's view related to that analysis. 

This analytical view help managers to train developers about safe development or even to identify if the repository is with vulnerabilities to be corrected according to its severity. 

See more about these data in the table below: 

<table>
  <thead>
    <tr>
      <th style="text-align:left">Data</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">
        <p></p>
        <p><b>Amount of developers</b>
        </p>
      </td>
      <td style="text-align:left">The amount of developers on the on the organization and repository&apos;s
        view.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Amount of repositories </b>
      </td>
      <td style="text-align:left">The amount of repos in the organization or repository.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Amount of vulnerabilities</b>
        <br />(by <b>severity</b>)</td>
      <td style="text-align:left">The amount of vulnerabilities ranked by severity (high, medium, low) on
        the organization and repository&apos;s view.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Amount of vulnerabilities</b> 
        <br />(by <b>5 developers with more active vulnerabilities</b>)</td>
      <td style="text-align:left">The amount of vulnerabilities sorted by the 5 developers who have more
        active vulnerabilities, on the organization and repository&apos;s view.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Amount of vulnerabilities </b>(by <b>severity </b>and by <b>programming language</b>)</td>
      <td
      style="text-align:left">The amount of vulnerabilities sorted by the severity and the programming
        language used, on the organization and repository&apos;s view.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Timeline of vulnerabilities</b>
      </td>
      <td style="text-align:left">Timeline with the vulnerabilities&apos; details sorted by severity and
        date, on the organization and repository&apos;s view.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Active vulnerabilities details </b>
      </td>
      <td style="text-align:left">Detailed view of the active vulnerabilities, on the organization and repository&apos;s
        view.</td>
    </tr>
  </tbody>
</table>

## Managements

On Horusec, you have a variety of management types. Check below more information about each one of them:

{{< tabs name="T0" >}}
{{% tab name= "Dashboard with workspace view" %}}
![](/docs/ptbr/web/services/manager/introduction/3-dashboard-organization.gif)
{{% /tab %}}

{{% tab name="Dashboard with repository view" %}}
![](/docs/ptbr/web/services/manager/introduction/4-dashboard-repository.gif)
{{% /tab %}}
{{< /tabs >}}