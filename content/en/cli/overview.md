---
title: Overview
weight: 4
description: >-
  In this section, you will find basic concepts about Horusec-CLI usage.
---

## **What is it?** 
CLI (short for command line interface) is a program that processes software commands or any other computer program through text.

Horusec-CLI is the part of the code that allows you to run the security analysis commands and vulnerabilities identification and/or classification.

## **How does the analysis work?** 
 
Horusec performs a [**SAST**]({{< ref path="/glossary.md" lang="en">}}) analysis of your project and it just check out the code, it is not necessary to buil or run anything and this makes your analysis quicker. 

The [**security tools**]({{< ref path="/cli/analysis-tools/security-tools.md" lang="pt-br">}}) have their own output data, so Horusec reads and changes it to the right format. After that you are able to have data regardless of the tools you are using in the analysis.


### **What does Horusec-CLI do?**
Horusec-CLI sends the analysis report to the [**Horusec-Platform**](https://github.com/ZupIT/horusec-platform), and at this moment, you are able to see the vulnerabilities Horusec found and they can be grouped by: 

- Repository; 
- Commit author;
- Language;
- Vulnerabilities timeline. 

After that, you can [**manage the vulnerabilities**]({{< ref path="/web/services/manager/vulnerabilities-management.md" lang="en">}}) changing the types to **false positive**, **accepted risk** and others. 
You can also change the severity from the last repository analysis to **critical**, **medium**, etc. 

## **How do you perform an analysis?**
Follow the steps below: 

**Step 1.** [**Install Horusec**]({{< ref path="/cli/installation.md" lang="en">}});

**Step 2.** Run the command below where your project is:

```bash
horusec start
```

**Step 3.** Horusec-CLI will return a confirmation message to know if the current directory is correct:

```bash
✔ The folder selected is: [/home/your-user/Projects/project-name]. Proceed? [Y/n]: Y
```

Select **Y** and press **ENTER** to continue. Now the tool will start the analysis showing your project's vulnerabilities.

{{% alert color="info" %}}
Horusec can start the analysis without this question. To do that, run the command below: 

```bash
horusec start -p ./
```
{{% /alert %}}


### **How to change directories?**

If you want to change the current directory, add the directory you want right after the symbol **`./`** 
 
#### **Example** 
1. In this example, the replacement is for a directory called -latest-project. To change run the command:

```bash
horusec start -p ./latest-project
```

2. You can also put the full directory where your project is. In this case, the command is:

```bash
horusec start -p /home/user-name/folder-name/file-name
```

### Read more
- [**How to run Horusec in multiple directories?**]({{< ref path="/tutorials/how-to-run-horusec-multiples-directories.md" lang="en">}})
- [**How to classify a vulnerability?**]({{< ref path="/tutorials/how-to-classify-a-vulnerability.md" lang="en">}})
- [**How to add custom rules on Horusec-CLI?**]({{< ref path="/tutorials/how-to-adding-custom-rules" lang="en">}})