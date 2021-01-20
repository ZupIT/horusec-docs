---
description: 'Nesta seção, você encontra orientações para usar o Horusec em sua pipeline.'
---

# Adicionando o Horusec em sua pipeline

## Introdução

Um dos objetivos do Horusec é garantir que a entrega do seu projeto em produção esteja segura. Para isso acontecer, é preciso adicioná-lo na sua pipeline. Veja como abaixo: 

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

  * Managed image
  * Operational sytem: `Ubuntu` 
  * Execution time: `Standard`
  * Image: `Any`
  * Image Version:  `Latest`
  * Privileged:  `true`
  * Allow AWS CodeBuild to modify this service role so it can be used with this build project: `true`

  \*\*\*\*

* **Buildspec:**

```text
version: 0.2
    
phases:
  install:
    runtime-versions:
      docker: 19
  build:
    commands:
      - docker run -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/src/horusec-vscode horuszup/horusec-cli:latest horusec start -p /src/horusec-vscode -P $(pwd)

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
image: docker:latest

services:
  - docker:dind

build-code-job:
  stage: build
  script:
    - docker run -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/src/horusec-vscode horuszup/horusec-cli:latest horusec start -p /src/horusec-vscode -P $(pwd)
```

## **Próximos passos**

Nesta seção, você viu como adicionar o Horusec na sua pipeline. Para continuar lendo sobre o produto: 

👉 Vá para página de [**Manager**](referencia/manager/) para ver como funciona a interface gráfica do Horusec. 

👉 Vá para seção de [**Vulnerabilidades**](referencia/vulnerabilidades/) ****e veja as ferramentas que o Horusec utiliza nas suas análises, incluindo os motores de análise estática \([**Horusec-engine**](referencia/vulnerabilidades/#ferramentas-que-utilizam-horusec-engine)\). 

