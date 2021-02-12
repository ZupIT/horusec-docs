---
title: Visual Studio Code
weight: 72
---

---

Horusec can help you analyse codes with the VS Code extension, with just one click you can make a complete analysis of the code on your project.  


![](https://horusec.io/public/docs/en/references/extensions/vscode/1-simulation.gif)

## **Installation**

### Requirements

* Docker.

To install it, follow the next steps: 

![](https://horusec.io/public/docs/en/references/extensions/vscode/2-horusec-not-installed.png)

1. Click on the "**Extensions**" icon or press and hold **CTRL + Shift + X;**
2. Type "**Horusec**" in the search bar;
3. Click on "**Install**";
4. Once it's complete, Horusec's icon will be displayed on the VS Code screen: 

![](https://horusec.io/public/docs/en/references/extensions/vscode/3-horusec-installed.png)

## **Features**

### Start Analysis

By starting an analysis, Horusec will run all the security tools needed for your project, then it'll show any vulnerabilities found in the Horusec tab, and in the Diagnostics section. 

You can identify an ongoing analysis when you spot the loading icon displayed at the bottom right bar, as in the image below: 

![](https://horusec.io/public/docs/en/references/extensions/vscode/4-analysis-running.png)

### **Stop analysis**

 When you stop the Horusec running analysis, the extension will remove the tool’s analysis image, however this action is not recommended to be performed until the analysis is finished. 

### **Go to the vulnerable code**

In case a vulnerability is founded, the user can investigate it in the Horusec tab or in the Diagnostics section. By clicking on the vulnerability, Horusec will show the exact line that needs to be edited. 

![](https://horusec.io/public/docs/en/references/extensions/vscode/5-vuln-found.png)

The vulnerabilities are shown with an icon that informs its criticality level. They are:

* ![](https://horusec.io/public/docs/en/references/extensions/vscode/7-info.svg) **INFO**
* ![](https://horusec.io/public/docs/en/references/extensions/vscode/8-audit.svg) **AUDIT**
* ![](https://horusec.io/public/docs/en/references/extensions/vscode/9-low.svg) **LOW**
* ![](https://horusec.io/public/docs/en/references/extensions/vscode/10-medium.svg) **MEDIUM**
* ![](https://horusec.io/public/docs/en/references/extensions/vscode/11-high.svg) **HIGH**

### **Present diagnostics**

![](https://horusec.io/public/docs/en/references/extensions/vscode/6-problems-to-fix.png)

### **Notification Types** 

A notification is sent as soon as Horusec performs an action to inform  inform the details of it. The different kinds of alerts are described below:  


> ------ **INFO Analysis starting \(Hold on! Horusec started to analysis your code\)**

> ---**--- INFO Analysis completed \(Horusec: Analysis finished with success\)**

> **------ WARN There's already an analysis running \(Hold on! Horusec is analyzing his code\)**

> **------ WARN When it was forced to stop \(Horusec was forced to stop\)**

> **------ ERROR No workspace was selected \(Horusec: No valid workspace found\)**

> **------ ERROR Something unexpected happened**
