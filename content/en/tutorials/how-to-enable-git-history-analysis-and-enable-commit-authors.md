---
title: How to enable git history analysis and enable commit authors?
weight: 19
description: In this section, you will find a tutorial to make an analysis with git history activated and show who are the authors of vulnerabilities you may found.
---

Horusec run its analysis through Horusec-CLI and, by default, has the commit authors and the git history **disabled**. To enable it, add an option for each action, see on the examples below: 

**1. Enable analysis in all git history**
Rode o comando abaixo: 

```bash
horusec start -p . --enable-git-history="true"
```

{{% alert color="warning" %}}
When you enable this function, Horusec will start the [GitLeaks](/docs/pt-br/cli/analysis-tools/security-tools/#gitleaks) tool and it will search for leaks in your history. 
{{% /alert %}}


**2. Enable commit authors**
Run the command below: 

```bash
horusec start -p . --enable-commit-author="true"
```

{{% alert color="info" %}}
Regardless the tool, the vulnerabilities' authors will be shown on yhe analysis. If there is an integration with web application, you will see on the graphic interface's dashboard the 5 users that created more vulnerabilities.
{{% /alert %}}

