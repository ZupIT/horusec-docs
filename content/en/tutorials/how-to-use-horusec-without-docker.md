---
title: How to use Horusec-CLI without docker?
weight: 19
description: In this section, you will find the informations to use Horusec-CLI without docker.
---

Horusec run its analysis through Horusec-CLI with several analysis tools, whether from its [**own analysis engine**](/docs/en/cli/analysis-tools/other-tools/) or through [**other tools**](/docs/en/cli/analysis-tools/other-tools/).


If you are in an environment that it's not possible to run Doker's installation, vou can use Horusec without it, see below: 

1. Using `disable-docker` flag; 

```bash
horusec start -p . --disable-docker="true"
```

This option allows you to run analysis without using Docker, however you will lose your analysis with [**other tools**](/docs/en/cli/analysis-tools/other-tools/).

{{% alert color="warning" %}}
Only tools that use its own analysis engine will be executed, that's why it is not recommended to disable docker.
{{% /alert %}}