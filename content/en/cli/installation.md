---
title: Installation 
weight: 5
description: >-
  In this section, you will find guidelines to install Horusec-CLI.
---

There are 4 ways to install Horusec-CLI:

1. Local Installation 
2. Manual Installation  
3. Installation via Imagem Docker 
4. Installation via Pipeline

See each one of them below: 

## **Requirements**
Check out the requirements to use Horusec-CLI:

* [**Docker**](https://docs.docker.com/get-docker/) (recommended version ```19.03.11```). If you want to disable Docker, check out [**how to use Horusec without Docker tutorial**]({{< ref path="tutorials/how-to-use-horusec-without-docker.md" lang="en">}}), but you may lose data from analysis made by [**other tools**]({{< ref path="cli/analysis-tools/security-tools" lang="en">}}).

* [**Git**](https://git-scm.com/) (recommended version ```2.25.1```). If you want to run analysis with Git, check out [**how to enable git history analysis tutorial**]({{< ref path="tutorials/how-to-enable-git-history-analysis-and-enable-commit-authors.md" lang="en">}}), but it is not enabled by default.

## **Local Installation**
This installation is recommended if you want to use Horusec for analysis or for searching for vulnerabilities in your project. 

See below the commands to install Horusec locally according to your operating system: 


### **MAC or Linux**
Run the command below in your terminal: 

```bash
curl -fsSL https://raw.githubusercontent.com/ZupIT/horusec/main/deployments/scripts/install.sh | bash -s latest
```

### **Windows**
Run the command below in your terminal: 

{{% alert color="warning" %}}
You always need to run the command where you have downloaded the executable.
{{% /alert %}}

```bash
curl -k "https://github.com/ZupIT/horusec/releases/latest/download/horusec_win_amd64.exe" -o "./horusec.exe" && ./horusec.exe version
```

{{% alert color="info" %}}
In Horusec there are two types of binary:
- "Normal": In this type of binary you have the default execution using Docker;
- "StandAlone": In this type of binary you have only tools that use Horusec-Engine without dependence with the docker.
{{% /alert %}}

{{% alert color="info" %}}
👉[**A última versão disponível**](https://github.com/ZupIT/horusec/releases/latest)

👉[**Todas as versões disponíveis** ](https://github.com/ZupIT/horusec/releases)
{{% /alert %}}



## **Manual installation**

The manual installation is done according to your operating system and the version you want to download. 
See the latest versions below: 

**Horusec has support for:**

| Operational system | Processor Architecture | Binary Type | Download |
|---------------------|----------------------------|-----------------|----------|
| Linux               | amd64                      | Binary normal  | [📥 Download](https://github.com/ZupIT/horusec/releases/download/v2.6.9/horusec_linux_amd64) |
| Linux               | arm64                      | Binary normal  | [📥 Download](https://github.com/ZupIT/horusec/releases/download/v2.6.9/horusec_linux_arm64) |
| Linux               | amd64                      | Installer debian normal | [📥 Download](https://github.com/ZupIT/horusec/releases/download/v2.6.9/horusec_linux_amd64.deb) |
| Linux               | arm64                      | Installer debian normal | [📥 Download](https://github.com/ZupIT/horusec/releases/download/v2.6.9/horusec_linux_arm64.deb) |
| Linux               | amd64                      | Installer rpm normal | [📥 Download](https://github.com/ZupIT/horusec/releases/download/v2.6.9/horusec_linux_amd64.rpm) |
| Linux               | arm64                      | Installer rpm normal | [📥 Download](https://github.com/ZupIT/horusec/releases/download/v2.6.9/horusec_linux_arm64.rpm) |
| Linux               | amd64                      | Binary Stand Alone  | [📥 Download](https://github.com/ZupIT/horusec/releases/download/v2.6.9/horusec_linux_amd64_stand_alone) |
| Linux               | arm64                      | Binary Stand Alone  | [📥 Download](https://github.com/ZupIT/horusec/releases/download/v2.6.9/horusec_linux_arm64_stand_alone) |
| Mac                 | amd64                      | Binary normal  | [📥 Download](https://github.com/ZupIT/horusec/releases/download/v2.6.9/horusec_mac_amd64) |
| Mac                 | arm64                      | Binary normal  | [📥 Download](https://github.com/ZupIT/horusec/releases/download/v2.6.9/horusec_mac_arm64) |
| Mac                 | amd64                      | Binary Stand Alone  | [📥 Download](https://github.com/ZupIT/horusec/releases/download/v2.6.9/horusec_mac_amd64_stand_alone) |
| Mac                 | arm64                      | Binary Stand Alone  | [📥 Download](https://github.com/ZupIT/horusec/releases/download/v2.6.9/horusec_mac_arm64_stand_alone) |
| Windows             | amd64                      | Binary normal  | [📥 Download](https://github.com/ZupIT/horusec/releases/download/v2.6.9/horusec_win_amd64.exe) |
| Windows             | arm64                      | Binary normal  | [📥 Download](https://github.com/ZupIT/horusec/releases/download/v2.6.9/horusec_win_arm64.exe) |
| Windows             | amd64                      | Binary Stand Alone  | [📥 Download](https://github.com/ZupIT/horusec/releases/download/v2.6.9/horusec_win_amd64_stand_alone.exe) |
| Windows             | arm64                      | Binary Stand Alone  | [📥 Download](https://github.com/ZupIT/horusec/releases/download/v2.6.9/horusec_win_arm64_stand_alone.exe) |


{{% alert color="info" %}}
If you want a specific version, change the word `latest` in the link to the version you want. 
{{% /alert %}}


{{% alert color="warning" %}}
After downloading the files for Mac or Linux it will be necessary to make them `executable` through the command `chmod +x`.

1. Download the files;
2. You have to make these files `executable` through the `chmod +x`command:

```bash
chmod +x path/horusec_[your version here]
```

3. Now, you will be able to open the file for manual installation.

{{% /alert %}}

👉[**Lastest available version**](https://github.com/ZupIT/horusec/releases/latest)

👉[**All available versions**](https://github.com/ZupIT/horusec/releases)

{{% alert color="warning" %}}
If you received the following message in your analysis:
```bash
{HORUSEC_CLI} Nancy tool failed to query the GitHub API for updates.
This is most likely due to GitHub rate-limiting on unauthenticated requests.
To make authenticated requests please:
  1. Generate a token at https://github.com/settings/tokens
  2. Set the token by setting the GITHUB_TOKEN environment variable.
Instructions for generating a token can be found at:
https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line.
```
Do not worry, just add the following environment variable `GITHUB_TOKEN` with its value as follows [this documentation](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line).
{{% /alert %}}

## **Installation via Docker Image**

You can carry out your analysis through a docker image, you are able to run locally or using your pipeline. 

See some use cases below:

### **1. Starting image with the run command:**

When you initialize the image with the `run` command, just run Horusec with the command you want.

```bash
docker run -v /var/run/docker.sock:/var/run/docker.sock \
        -v $(pwd):/src/horusec \
        -e=GITHUB_TOKEN=$GITHUB_TOKEN \
        horuszup/horusec-cli:latest horusec start -p /src/horusec -P $(pwd) --config-file-path=/src/horusec/horusec-config.json
```

{{% alert color="warning" %}}
Check out if the environment you are working in allows you to create a bidirectional volume because this is necessary to use Horusec in a docker image.
{{% /alert %}}

### **2. Installation via pipeline**

This installation assures the safety in the delivery of your project in production since Horusec is added to your pipeline.

See next the ways to install considering different types of pipeline:

### **Github Actions**

```yaml
name: SecurityPipeline

on: [push]

jobs:
  horusec-security:
    name: horusec-security
    runs-on: ubuntu-latest
    steps:
    - name: Check out code
      uses: actions/checkout@v2
      with: # Required when commit authors is enabled
        fetch-depth: 0
    - name: Running Horusec Security
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      run: |
        curl -fsSL https://raw.githubusercontent.com/ZupIT/horusec/main/deployments/scripts/install.sh | bash -s latest
        horusec start -p="./" -e="true"
```

### **AWS Code Build**
Set environment variable `GITHUB_TOKEN` [into your project](https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec.env.secrets-manager) and add this configuration.

* **Origin**
  - Git Clone Depth: `Full`

* **Environment:**

  * Environment image: `Managed image`
  * Operational System: `Ubuntu`
  * Runtime: `Standard`
  * Image: `aws/codebuild/standard:5.0`
  * Image version:  `Always use the most recent image for this version of runtime`
  * Environment Type:  `Linux`
  * Enable this indicator if you want to create Docker images or want your builds to get elevated privileges:  `true`
  * Environment variables:
     - Name: `GITHUB_TOKEN`
     - Value: `TestSecret:MY_GITHUB_TOKEN`
     - Type: `Secret Manager`

* **Buildspec**:
  - Switch to the editor and insert compilation commands:
```yaml
version: 0.2

phases:
  build:
    commands:
      - docker run -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/src/horusec -e=GITHUB_TOKEN=$GITHUB_TOKEN horuszup/horusec-cli:latest horusec start -p /src/horusec -P $(pwd) --config-file-path=/src/horusec/horusec-config.json
```

### **Circle CI**
Set environment variable `GITHUB_TOKEN` [into your project](https://circleci.com/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project) and add this configuration.

```yaml
version: 2.1

executors:
  horusec-executor:
    machine:
      image: ubuntu-1604:202004-01

jobs:
  horusec:
    executor: horusec-executor
    steps:
      - checkout
      - run:
          name: Horusec Security Test
          command: |
            curl -fsSL https://raw.githubusercontent.com/ZupIT/horusec/main/deployments/scripts/install.sh | bash -s latest
            horusec start -p="./" -e="true"
workflows:
  pipeline:
    jobs:
      - horusec
```

### **Jenkins**
Set environment variable `GITHUB_TOKEN` [into your project](https://www.jenkins.io/doc/book/pipeline/jenkinsfile/#handling-credentials) and add this configuration.

{{% alert color="warning" %}}
In machines that use Jenkins should have the **docker and git installed** so that Horusec has all power in their analyzes.Check for more information at the [requirements of CLI](#Requirements).
{{% /alert %}}

```groovy
stages {
    stage('Security') {
        steps {
            sh 'curl -fsSL https://raw.githubusercontent.com/ZupIT/horusec/main/deployments/scripts/install.sh | bash -s latest'
            sh 'horusec start -p="./" -e="true"'
        }
    }
}
```

### **Azure DevOps Pipeline**
Set environment variable `GITHUB_TOKEN` [into your project](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch#secret-variables) and add this configuration.

```yaml
pool:
  vmImage: 'ubuntu-18.04'

steps:
- script: |
    curl -fsSL https://raw.githubusercontent.com/ZupIT/horusec/main/deployments/scripts/install.sh | bash -s latest
    horusec start -p ./
  env:
    GITHUB_TOKEN: $(GITHUB_TOKEN)
```

### **GitLab CI/CD**
Set environment variable `GITHUB_TOKEN` [into your project](https://docs.gitlab.com/ee/ci/variables/#view-all-group-level-variables-available-in-a-project) and add this configuration.
```yaml
image: docker:latest

variables:
  GIT_DEPTH: 0 # Required when commit authors is enabled

services:
  - docker:dind

build-code-job:
  stage: build
  script:
    - docker run -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/src/horusec horuszup/horusec-cli:latest horusec start -p /src/horusec -P $(pwd)
```
