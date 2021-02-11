---
title: Visual Studio Code
weight: 72
---

---

Horusec can help you analyse codes with the VS Code extension, with just one click you can make a complete analysis of the code on your project.  


![](/docs/install-horusec-vscode.gif)

## **Installation**

### Requirements

* Docker.

To install it, follow the next steps: 

![](https://lh4.googleusercontent.com/y9Wow6GWtMk41o2lcXoetqdW_cnTZG8MDfpyoyZpDG2Wxjyd3qCcfLBdSMg9cuqtyHK_97nqfLqaT7PyMynmuvoOPfltOBwWuzQmmtggOW0YxUF3VB-X3LprL7Eq5e1rpv3PtCYT)

1. Click on the "**Extensions**" icon or press and hold **CTRL + Shift + X;**
2. Type "**Horusec**" in the search bar;
3. Click on "**Install**";
4. Once it's complete, Horusec's icon will be displayed on the VS Code screen: 

![](https://lh5.googleusercontent.com/-tryd3bt4wOKUGtD17cCSzmQor35Kj73maN_HVl37ANs094i3_rarvCNConZOtf7qgXXTedFx6JmkCpBuaASvyQEiKTnl4rufByvr283H46aRtrpdcOXSCutcwbDeRdGOYUFNVHC)

## **Features**

### Start Analysis

By starting an analysis, Horusec will run all the security tools needed for your project, then it'll show any vulnerabilities found in the Horusec tab, and in the Diagnostics section. 

You can identify an ongoing analysis when you spot the loading icon displayed at the bottom right bar, as in the image below: 

![](https://lh3.googleusercontent.com/KHQUug4xdC6Xu295Lt7sPGezmratMa_j27Vld2_yPDW2HcaoCbMJMs35qxvREtGnBXWsryQDXZ4zqNaRBn7VL-8bPtxnwNnikJ9RzI4pj70suPtbAr2E2Eccv2P8dWMx553VMO1f)

### **Stop analysis**

 When you stop the Horusec running analysis, the extension will remove the tool’s analysis image, however this action is not recommended to be performed until the analysis is finished. 

### **Go to the vulnerable code**

In case a vulnerability is founded, the user can investigate it in the Horusec tab or in the Diagnostics section. By clicking on the vulnerability, Horusec will show the exact line that needs to be edited. 

![](https://lh4.googleusercontent.com/rqiLcUBsCo_2fEmoBapFLUdioEBN0YP3k0BprUX_jlSkcKnzCIClZSiknWQlP4qoduDX6uVmU07UPsc53Pby3ue5RSMHbZUFxmlEY1kMyjkDOOLsSbmMpX5OpcQg5-LKu-ElHTgb)

The vulnerabilities are shown with an icon that informs its criticality level. They are:

* undefined **INFO**
* undefined **AUDIT**
* undefined **LOW**
* undefined **MEDIUM**
* undefined **HIGH**

### **Present diagnostics**

![](https://lh3.googleusercontent.com/DZg1ADi8VNrBtz25P6ccKZXYuQUAdJZpjmi7xSaWFiBqYSuOzDwZyQU3kFzdFcS8HZsTY1xpnhAPyxmq7Pwi4kXRGKwTGCZzzlnylMmngvbhOMZFKAyy6__qIcdvf1zlgrdRKJsE)

### **Notification Types** 

A notification is sent as soon as Horusec performs an action to inform  inform the details of it. The different kinds of alerts are described below:  


> ------ **INFO Analysis starting \(Hold on! Horusec started to analysis your code\)**

> ---**--- INFO Analysis completed \(Horusec: Analysis finished with success\)**

> **------ WARN There's already an analysis running \(Hold on! Horusec is analyzing his code\)**

> **------ WARN When it was forced to stop \(Horusec was forced to stop\)**

> **------ ERROR No workspace was selected \(Horusec: No valid workspace found\)**

> **------ ERROR Something unexpected happened**
