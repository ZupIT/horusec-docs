---
title: Overview
weight: 1
description: >-
  You will find here all initial information about Horusec before getting
  deeper in the project.
---

---

![](/docs/ptbr/overview/0-horusec-logo.png)


Horusec is an open source tool that orchestrates other security tools and identifies security flaws or vulnerabilities in projects and put all results in a database for analysis and generation of metrics.

Horusec chooses the languages and tools to be used in the project according to the available stack. **[Check out all the supported languages and available tools](/docs/cli/analysis-tools/overview/)**

## **Where can you use Horusec?**
### Locally
O Horusec conta com uma CLI intuitiva e pensada para desenvolvedores onde é possível realizar uma análise localmente da máquina do desenvolvedor.

### CI/CD pipeline
It is possible to add Horusec to the `Continuos Integration` or `Continuos Deploy` pipeline, ensuring one more security layer in your project, besides preventing a malicious code to enter in production. 

### IDE extensions 
IDE means Integrated Development Environment and it's very common to use plugins and extensions to help the development. Horusec comes to help you deliver with velocity, it is possible to perform analysis through extensions.


## **How does Horusec work?**

![](/docs/en/overview/1-arquitecture.png)

When Horusec starts an analysis, it follows the next steps: 

- **1-** When you start an analysis through Horusec-CLI, it will identify what are the current languages in your project; 

- **2-** Now, the tool will start the analysis according to the identified languages, searching for vulnerabilities; 

- **3-** When the analysis finish, it will start 3 actions: 

  - **3.1-** Show the analyis' output in your interface or in the file;

  ![](/docs/ptbr/overview/2-output.png)

  - **3.2-** If you have been using the CI/CD process in your pipeline and you want to abort the operations, a return type `exit 1`  will be send and it won't go on until all the vulnerabilities are corrected. If there isn't any vulnerabilities, a status type `exit 0` will be returned and it will proceed to the next step. 
  

  ![](/docs/ptbr/overview/3-pipeline-failed.gif)
  ![](/docs/ptbr/overview/4-pipeline-success.gif)

  - **3.3-** Send to Horusec-Manager(web platform) where you can see all the vulnerabilities found, in an analytical way, you can also manage your project;

  ![](/docs/ptbr/overview/5-dashboard-organization.gif)

**See below a Horusec example:**

<p align="center" margin="20 0"><img src="/docs/ptbr/overview/6-full-usage.gif" alt="usage_horusec" width="99%"/></p>


## **Why use Horusec?**

* **Promotes the culture of secure development by applying the logic of “security by design”** 

It brings you security, ensuring that possible unknown vulnerabilities will be found by analyzing Horusec.

* **Improves your experience**

It ensures the safety of projects in the CI and CD process and it reduces the costs of correcting a vulnerability.

## **Horusec analysis' types**

Horusec performs 3 types of analysis to identify if there are any security flaws:

1. **SAST \(Static Application Security Testing\)**
   The SAST does static code vulnerability analysis. They can be done in source code, byte code or binary.

2. **Leaks**
   The "Leaks checks the source code for possible leaks of credentials, private keys or hard coded passwords.

3.  **Dependency audit** You analyze the project's dependencies to check for vulnerabilities in third-party libraries.   in third-party libraries.

