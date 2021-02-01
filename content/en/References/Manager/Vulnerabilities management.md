---
title: Vulnerabilities management
weight: 36
description: 'On this section, you will find information about vulnerabilities management.'
---

---

When you send an analysis to Horusec, it can be categorized inside the platform with some status types: 

* Vulnerability;
* False positive;
* Accepted risk;
* Corrected.

When you change the vulnerability status to another type like `false positive`, `accepted risk` or `corrected`, it will not be required the correction in the next analysis that will be send to Horusec. 

{{% alert color="info" %}}
After you alter the vulnerability status, it won't be counted as a analytical view of Horusec. 

Besides that, you can only change a vulnerability status of the ones using the access token on Horusec-CLI. 
{{% /alert %}}

![](/docs/gestaovulneen_us.gif)
