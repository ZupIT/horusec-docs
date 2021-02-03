---
title:  Create a Docker Image
description: 'Step 1:  Create a Docker Image.'
weight: 13
---


Horusec uses docker to run the analysis tools, which avoids configuration and environment problems. So all tools used have their respective docker images.

This image must have the desired tool installed.  The output of this container should be as clean as possible, or a JSON with the vulnerabilities found.

{{% alert color="warning" %}}
The **Dockerfile** is expected to be in this directory:  `deployments/dockerfiles/[NEW_IMAGE]`
{{% /alert %}}

See a **Dockerfile** example below: 

```yaml
FROM golang:1.14-alpine

RUN apk update && apk upgrade \
   && apk add jq curl
   
RUN set -o pipefail && curl https://api.github.com/repos/liamg/tfsec/releases/latest | jq -r ".assets[] | select(.name | contains(\"tfsec-linux-amd64\")) | .browser_download_url" | xargs wget

RUN mv tfsec-linux-amd64 /bin/tfsec
 
RUN chmod +x /bin/tfsec
 
CMD ["/bin/sh"]
```

{{% alert color="info" %}}
The image must contain only the necessary, so it won't get too big.
{{% /alert %}}

In the same directory, add a versioning file of this image with the  **`.semver.yaml`** name.  See an example below: 

```yaml
alpha: 0
beta: 0
rc: 0
release: v0.0.1
```
