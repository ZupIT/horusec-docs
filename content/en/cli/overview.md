---
title: Overview
weight: 4
description: >-
  In this section, you will find basic concepts about Horusec-CLI usage.
---

## **What is it?**
CLI (short for command line interface) is a program reponsible to process software commands or any other computer program through text.

On the tool context, Horusec-CLI is the part of the code that allows you to run the security analysis commands and vulnerabilities identification and/or classification.

## **How does the analysis work?** 
 
Horusec performs a [**SAST**]({{< ref path="/glossary.md" lang="en">}}) analysis of your project and it just check out the code, it is not necessary to buil or run anything and this makes your analysis quicker. 

All the [**security tools**]({{< ref path="/cli/analysis-tools/security-tools.md" lang="pt-br">}}) has it own output data, so Horusec reads and change it to the right format and then you are able to have data regardless the tools you are using in the analysis.

Horusec-CLI sends the analysis report to the [**Horusec-Platform**](https://github.com/ZupIT/horusec-platform), and in this moment, you can see the vulnerabilities found and they can be grouped by: 

- Repository; 
- Commit author;
- Language;
- Vulnerabilities timeline. 

Right after that, you can [**manage the vulnerabilities**]({{< ref path="/web/services/manager/vulnerabilities-management.md" lang="en">}}) changing the vulnerabilities types by **false positive**, **accepted risk** and others. 
It is possible to change the severity as well, from the last analysis by repository to **critical**, **medium**, etc. 

## **How do you perform an analysis?**
To perform an analysis in your project, [**install Horusec**]({{< ref path="/cli/installation.md" lang="en">}}) in your computer and then run the command below where your project is:

```bash
horusec start
```

Horusec-CLI will return a confirmation message to know if the current directory is correct:

```bash
✔ The folder selected is: [/home/your-user/Projects/project-name]. Proceed? [Y/n]: Y
```

To continue, just select Y and press ENTER, then the tool will start the analysis and it will show your project's vulnerabilities.

If you want Horusec to start the analysis without going through this message, just type the command below and the current directory will run without questions.

```bash
horusec start -p ./
```

### **How to change directories?**

In case you want to change the current directory, add the directory you want right after the symbol `./` 

For example, to replace for a directory called latest-project, run the next command:

```bash
horusec start -p ./latest-project
```

Another possibility is to put the full directory where your project is. In this case, the command will be like that:

```bash
horusec start -p /home/user-name/folder-name/file-name
```

### Read more
- [**How to run Horusec in multiple directories?**]({{< ref path="/tutorials/how-to-run-horusec-multiples-directories.md" lang="en">}})
- [**How to classify a vulnerability?**]({{< ref path="/tutorials/how-to-classify-a-vulnerability.md" lang="en">}})
- [**How to add custom rules on Horusec-CLI?**]({{< ref path="/tutorials/how-to-adding-custom-rules" lang="en">}})