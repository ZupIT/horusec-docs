---
title: Installing Horusec
weight: 4
description: >-
  In this section, you will find guidelines for installing Horusec according to
  your operating system.
---

# Requirements 
These are the requirements if you want to use Horusec **locally**:

{{%/* alert color="info" %}}
- docker
- git
- docker-compose/helm
- golang
- rabbitmq
- postgres
- email account (optional)

If you want to use Horusec-cli:
- docker
- git (Mandatory if you are using search throughout the project's git history)
{{% /alert */%}}


# Installing Horusec

### **MAC or Linux**

Installation: 

```text
curl -fsSL https://horusec.io/bin/install.sh | bash
```

### **Windows**

Installation: 

```bash
curl "https://horusec.io/bin/latest/win_x64/horusec.exe" -o "./horusec.exe" && ./horusec.exe version
```

{{%/* alert color="info" %}}
If you need to download for a specific version / operating system. In this case, the supported operating systems are:

* linux\_x86
* linux\_x64
* mac\_x64
* win\_x86
* win\_x64


👉[**Latest version available**](https://horusec.io/bin/version-cli-latest.txt)

👉[**All versions available** ](https://horusec.io/bin/all-version-cli.txt)
{{% /alert */%}}



### **Manual installation**

Download manually choosing your operating system and the version you want. 

**MAC or Linux:**

```text
https://horusec.io/bin/$versão/$sistema_operacional/horusec
```

**Windows:**

```text
https://horusec.io/bin/$versão/$sistema_operacional/horusec.exe

```

**Example:** https://horusec-cli.s3.amazonaws.com/v1-1-0/win\_x64/horusec.exe

## Using Horusec with image docker

Another way to carry out your analysis is through a docker image that you can run locally or use in your pipeline. See some examples below:

#### **Starting image with run command:**

When you initialize the image with the `run` command, your entry point will already be by default: `horusec start`, so you just need to add your flags to execute the command.

```text
docker run --privileged -v /path/of/my/project/local:/project -it horuszup/horusec-cli:latest -p /project
```

#### **Starting image in your pipeline:**

This is an example using the pipeline of [**aws code build**](adding-horusec-in-the-pipeline.md).

{{%/* alert color="danger" %}}
ATTENTION! When using Horusec in a docker image, some features will not work as:

* Export files;

It is recommended to use the Horusec executable in your environment!
{{% /alert */%}}

## **Next Steps** 

On this section, you accomplished the Horusec installation. To keep reading about the product: 

👉 **Go to** [**using Horusec** ](/docs/getting-started/using-horusec/) section if you want to know how to use the tool. 

👉 Go to [**adding Horusec in the pipeline**](/docs/getting-started/adding-horusec-in-the-pipeline/) if you want to go directly to the tool's application on your development pipeline.