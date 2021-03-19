---
title: Overview
weight: 4
description: >-
  In this section, you will find basic concepts about Horusec-CLI usage.
---

## **What is it?**
CLI (short for command line interface) is a program reponsible to process software commands or any other computer program through text.

On the tool context, Horusec-CLI is the part of the code that allows you to run the security analysis commands and vulnerabilities identification and/or classification.


## **How do you perform an analysis?**
To perform an analysis in your project, [install Horusec](/docs/web/installation/) in your computer and then run the command below where your project is:

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
