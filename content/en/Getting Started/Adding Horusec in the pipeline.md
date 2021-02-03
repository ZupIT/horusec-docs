---
title: Adding Horusec in the pipeline
weight: 6
description: You will find here a guideline on how to use Horusec in your pipeline.
---

# Adding Horusec in the pipeline

## Introduction

One of the main goals of Horusec is to make sure the delivery of your project in production is safe. For that,  you have to add it in your pipeline. Choose one below: 

### Github Actions

```text
name: SecurityPipeline

on: [push]

jobs:
  horusec-security:
    name: horusec-security
    runs-on: ubuntu-latest
    steps:
    - name: Check out code
      uses: actions/checkout@v2
    - name: Running Horusec Security
      run: |
        curl -fsSL https://horusec.io/bin/install.sh | bash
        horusec start -p="./" -e="true"

```

### AWS Code Build

* **Environment:**

  * Custom Image
  * Environment type: `Linux` 
  * Image registry: `Other registry`
  * External registry URL: `horuszup/horusec-cli`
  * Image Version:  `Alway use the latest image for this runtime version`
  * Privileged:  `true`
  * Allow AWS CodeBuild to modify this service role so it can be used with this build project: `true`

  \*\*\*\*

* **Buildspec:**

```text
version: 0.2

phases:
  build:
    commands:
       - sh /usr/local/bin/hoursec-cli.sh -p="./" -e="true"

```

### Circle CI

```text
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
            curl -fsSL https://horusec.io/bin/install.sh | bash
            horusec start -p="./" -e="true"
workflows:
  pipeline:
    jobs:
      - horusec

```

### Jenkins

```text
stages {
        stage('Security') {
            agent {
                docker { image 'docker:dind' }
            }
            steps {
                sh 'curl -fsSL https://horusec.io/bin/install.sh | bash'
                sh 'horusec start -p="./" -e="true"'
            }
        }
    }

```

### Azure DevOps Pipeline

```text
pool:
  vmImage: 'ubuntu-18.04'

steps:
- script: curl -fsSL https://horusec.io/bin/install.sh | bash && horusec start -p ./
```

### GitLab CI/CD

```text
stages:
  - security

horusec-security:
  stage: security
  image:
    name: horuszup/horusec-cli:latest
    entrypoint: [""]
  script:
    - /usr/local/bin/horusec-cli.sh -p="./" -e="true"
```

## **Next Steps**

On this section, you saw how to add Horusec in your pipeline. To keep reading about the product:

👉 Go to [**Manager**](references/manager/) page to find out how Horusec graphic interface works. 

👉 Go to [**Vulnerabilities**](references/vulnerabilities/) section and check out the security tools Horusec use in its analysis, including the static analysis motor \([**Horusec-engine**](references/vulnerabilities/#tools-that-use-horusec-engine)\). 
