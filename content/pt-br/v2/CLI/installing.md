---
title: Instalando
weight: 20
description: >-
 Nesta seção, você vai encontrar mais orientações para instalar o Horusec-CLI.
---

## **Localmente**
Ao instalar localmente você poderá utilizar o Horusec em sua máquina tendo agilidade e podendo verificar

### MAC ou Linux
Rode o comando abaixo no seu terminal para realizar a instalação nos sistemas operacionais mac ou linux:

```bash
curl -fsSL https://horusec.io/bin/install.sh | bash
```

### Windows
Rode o comando abaixo no seu terminal para realizar a instalação nos sistema operacional windows:

ATENÇÃO no caso do windows você terá que executar sempre no local onde foi feito o download que está o executável.
```bash
curl "https://horusec.io/bin/latest/win_x64/horusec.exe" -o "./horusec.exe" && ./horusec.exe version
```

{{% alert color="info" %}}
Se você precisa fazer o download para uma versão/sistema operacional específico. Nesse caso, os sistemas operacionais suportados são:

- linux_x86
- linux_x64
- mac_x64
- win_x86
- win_x64

👉[**A última versão disponível**](https://horusec.io/bin/version-cli-latest.txt)

👉[**Todas as versões disponíveis** ](https://horusec.io/bin/all-version-cli.txt)

{{% /alert %}}

## **Instalação Manual**
Faça download manualmente escolhendo seu sistema operacional e a versão que deseja:
Escolha abaixo um dos links para realizar download da última versão, caso queira uma versão específica basta trocar a palavra “latest” no link pela versão que você deseja:
- Windows x64:

    📥 https://horusec.io/bin/latest/win_x64/horusec.exe

- Windows x86:

    📥 https://horusec.io/bin/latest/win_x86/horusec.exe

- Linux x64:

    📥 https://horusec.io/bin/latest/linux_x64/horusec

- Linux x86:

    📥 https://horusec.io/bin/latest/linux_x86/horusec

- Mac x64:

    📥 https://horusec.io/bin/latest/mac_x64/horusec


## **Imagem Docker**
Outra forma de realizar suas análises é através de uma imagem docker que você pode rodar localmente ou utilizar em sua pipeline veja abaixo alguns exemplos:

**Iniciando imagem com comando run:**

Quando você inicializa a imagem com o comando de run basta executar com o comando que você deseja:
```bash
docker run -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/src horuszup/horusec-cli:latest horusec start -p /src -P $(pwd)
```

{{% alert color="info" %}}
ATENÇÃO! Quando se usa o Horusec em imagem docker é necessário criar um volume bidirecional, verifique se é possível em seu ambiente!

{{% /alert %}}

## **Pipeline**
Um dos objetivos do Horusec é garantir que a entrega do seu projeto em produção esteja segura. Para isso acontecer, é preciso adicioná-lo na sua pipeline. Veja como abaixo

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

* Buildspec:

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