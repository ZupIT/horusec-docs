---
title: Overview
weight: 1
description: >-
  You will find here all initial information about Horusec before getting
  deeper in the project.
---

---

## **What is Horusec?** 

Horusec is an open source tool that orchestrates other security tools and identifies security flaws or vulnerabilities in projects and put all results in a database for analysis and generation of metrics.

Horusec chooses the languages and tools to be used in the project according to the available stack. **[Check out all the supported languages and available tools]({{< ref path="/cli/analysis-tools/overview.md" lang="en" >}})**.

## **How does Horusec work?**

Horusec performs a [**SAST**]({{< ref path="/glossary.md" lang="en">}}) analysis of your project from the code perspective. 

The tool uses:
- [**Horusec-CLI**]({{< ref path="/cli/overview.md" lang="en">}}) when you run the commands performs security
analysis and the [**vulnerabilities identification and classification**]({{< ref path="/web/services/vulnerability.md" lang="en">}}). 
- [**Web application**]({{< ref path="/web/overview.md" lang="en">}}) is the CLI extensions used to manage and classify the vulnerabilities found in your application. 
See the structure in the image below:  

<img style="width:100%" src="/docs/en/overview/1-arquitecture.png">

When Horusec starts an analysis, it follows the steps below: 

- **1-** When you start an analysis through Horusec-CLI, it will identify what are the current languages in your project; 

- **2-** Now, the tool will start the analysis according to the identified languages, searching for vulnerabilities; 

- **3-** When the analysis finish, it will start 3 actions: 

  - **3.1-** Show the analyis' output in your interface or in the file;

    <img style="width:100%" src="/docs/ptbr/overview/2-output.png">

  - **3.2-** If you have been using the CI/CD process in your pipeline and you want to abort the operations, a return type `exit 1`  will be send and it won't go on until all the vulnerabilities are corrected. If there isn't any vulnerabilities, a status type `exit 0` will be returned and it will proceed to the next step. 

    ![](/docs/ptbr/overview/3-pipeline-failed.gif)
    ![](/docs/ptbr/overview/4-pipeline-success.gif)

  - **3.3-** Send to Horusec-Manager(web platform) where you can see all the vulnerabilities found, in an analytical way, you can also manage your project;

    <img style="width:100%" src="/docs/ptbr/overview/5-dashboard-organization.gif">

**See below a Horusec example:**

<video alt="usage_horusec" width="100%" controls>
  <source src="/docs/ptbr/overview/6-full-usage.mp4" type="video/mp4">
</video>


## **Horusec analysis' types**

Horusec performs 3 types of analysis to identify if there are any security flaws:

**1. SAST \(Static Application Security Testing\)**
- The SAST does static code vulnerability analysis. They can be done in source code, byte code or binary.

**2. Leaks**
- The "Leaks checks the source code for possible leaks of credentials, private keys or hard coded passwords.

**3.  Dependency audit** 
- You analyze the project's dependencies to check for vulnerabilities in third-party libraries. 


## **Where can you use Horusec?**
### **Locally**
Horusec has an intuitive CLI, made for developers where is possible to perform local analysis. 

### **CI/CD pipeline**
It is possible to add Horusec to the `Continuous Integration` or `Continuous Deploy` pipeline, ensuring one more security layer in your project, besides preventing a malicious code to enter in production. 

### **IDE extensions**
 It is common to use IDE (Integrated Development Environment) to use plugins and extensions to help you in the development. It is possible to perform analysis through extensions with Horusec. 


## **Why should you use Horusec?**

**It promotes the culture of secure development by applying the logic of “security by design”** 

It brings you security, ensuring that possible unknown vulnerabilities will be found by analyzing Horusec.

* **Improves your experience**

It ensures the safety of projects in the CI and CD process and it reduces the costs of correcting a vulnerability.


## **Next steps**

Install Horusec: 

**CLI**
- [**Horusec-CLI**]({{< ref path="/cli/installation.md" lang="en">}})

**Web application**
- [**Install with Docker-Compose**]({{< ref path="/web/installation/install-with-docker-compose.md" lang="en">}})
- [**Install with Helm**]({{< ref path="/web/installation/install-with-helm.md" lang="en">}})
- [**Install with Operator**]({{< ref path="/web/installation/install-with-operator/overview.md" lang="en">}})
