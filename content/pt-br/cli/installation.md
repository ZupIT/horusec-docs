---
title: Instalação
weight: 20
description: >-
 Nesta seção, você vai encontrar todas as orientações para instalar o Horusec-CLI.
---

É possível instalar o Horusec-CLI de 4 maneiras:

1. Instalação Local
2. Instalação Manual 
3. Instalação via Imagem Docker 
4. Instalação via Pipeline

Veja abaixo cada um deles: 

## **Requisitos** 
Veja abaixo os requisitos para usar o Horusec-CLI: 

* [**Docker**](https://docs.docker.com/get-docker/) (versão recomendada ```19.03.11```). 
Se você quiser desabilitar o Docker, veja [**como usar o Horusec sem o Docker**]({{< ref path="/tutorials/how-to-use-horusec-without-docker.md" lang="pt-br">}}), mas com isso, você pode perder dados nas análises feitas por [**outras ferramentas**]({{< ref path="/cli/analysis-tools/security-tools" lang="pt-br">}}).
    
* [**Git**](https://git-scm.com/) (versão recomendada ```2.25.1```). Se você quiser rodar análises com o Git, acesse o tutorial de [**como habilitar análise no histórico git**]({{< ref path="/tutorials/how-to-enable-git-history-analysis-and-enable-commit-authors.md" lang="pt-br">}}), mas ele não é habilitado por padrão.

## **Instalação Local**
Esta instalação é recomendada se você deseja usar o Horusec para fazer análises ou verificar as vulnerabilidades do seu projeto.

Veja abaixo os comandos necessários para instalar o Horusec localmente de acordo com o sistema operacional:

### MAC ou Linux
Rode o comando abaixo no seu terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/ZupIT/horusec/main/deployments/scripts/install.sh | bash -s latest
```

### Windows
Rode o comando abaixo no seu terminal:

{{% alert color="warning" %}}
Você precisa executar o comando sempre no local onde foi feito o download que está o executável.

{{% /alert %}}

```bash
curl "https://github.com/ZupIT/horusec/releases/latest/download/horusec_win_x64.exe" -o "./horusec.exe" && ./horusec.exe version
```


{{% alert color="info" %}}
O Horusec suporta as versões e/ou sistema operacionais:

- linux_x86
- linux_x64
- mac_x64
- win_x86
- win_x64

👉[**A última versão disponível**](https://github.com/ZupIT/horusec/releases/latest)

👉[**Todas as versões disponíveis** ](https://raw.githubusercontent.com/ZupIT/horusec/main/deployments/all-version-cli.txt)

{{% /alert %}}

## **Instalação Manual**

A instalação manual é feita de acordo com o seu sistema operacional e a versão que deseja fazer download. 
Veja as últimas versões abaixo: 


- 📥 [**Windows x64**](https://github.com/ZupIT/horusec/releases/download/v2.6.4/horusec_win_x64.exe)
- 📥 [**Windows x86**](https://github.com/ZupIT/horusec/releases/download/v2.6.4/horusec_win_x86.exe)
- 📥 [**Linux x64**](https://github.com/ZupIT/horusec/releases/download/v2.6.4/horusec_linux_x64)
- 📥 [**Linux x86**](https://github.com/ZupIT/horusec/releases/download/v2.6.4/horusec_linux_x86)
- 📥 [**Mac x64**](https://github.com/ZupIT/horusec/releases/download/v2.6.4/horusec_mac_x64)
- 📥 [**Linux x64 Debian instalador**](https://github.com/ZupIT/horusec/releases/download/v2.6.4/horusec_linux_64-bit.deb)
- 📥 [**Linux x86 Debian instalador**](https://github.com/ZupIT/horusec/releases/download/v2.6.4/horusec_linux_32-bit.deb)
- 📥 [**Linux x64 RPM instalador**](https://github.com/ZupIT/horusec/releases/download/v2.6.4/horusec_linux_64-bit.rpm)
- 📥 [**Linux x86 RPM instalador**](https://github.com/ZupIT/horusec/releases/download/v2.6.4/horusec_linux_32-bit.rpm)

{{% alert color="info" %}}
Se você quiser uma versão específica, troque a palavra `latest` no link pela versão que você precisa.
{{% /alert %}}


{{% alert color="warning" %}}
Após baixar os arquivos para Mac ou Linux será necessário tranformálos em **executáveis** através do comando `chmod +x`.

1. Baixe os arquivos;
2. Você precisa transformar esses arquivos em `executáveis` por meio do comando `chmod +x`:

```bash
chmod +x path/horusec_[your version here]
```
3. Agora, você pode abrir o arquivo para instalação manual.

{{% /alert %}}


👉[**A última versão disponível**](https://github.com/ZupIT/horusec/releases/latest)

👉[**Todas as versões disponíveis** ](https://github.com/ZupIT/horusec/releases)


## **Instalação via Imagem Docker**

Esta forma de instalação permite que você realize suas análises por meio de uma imagem docker, você pode rodar localmente ou utilizando sua pipeline. 

Veja alguns casos de uso:


### **1. Iniciando imagem com comando run:**

Quando você inicializa a imagem com o comando run, basta executar o Horusec com o comando que você deseja:

```bash
docker run -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/src horuszup/horusec-cli:latest horusec start -p /src -P $(pwd)
```

{{% alert color="warning" %}}
Verifique se o ambiente que você está trabalhando permite a criação de um volume bidirecional, isso é necessário para você usar o Horusec na imagem docker.
{{% /alert %}}

### **2. Instalação via Pipeline**

Essa instalação garante que a entrega do seu projeto em produção seja segura, já que o Horusec é adicionado à sua pipeline. 

Veja a seguir as formas de instalação considerando os diferentes tipos de pipeline:

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
      with: # Necessário quando habilitado o autores de commit
        fetch-depth: 0
    - name: Running Horusec Security
      run: |
        curl -fsSL https://raw.githubusercontent.com/ZupIT/horusec/main/deployments/scripts/install.sh | bash -s latest
        horusec start -p="./" -e="true"
```

### **AWS Code Build**

* **Environment:**

  * Imagem de ambiente: `Imagem gerenciada`
  * Sistema operational: `Ubuntu`
  * Tempo(s) de execução: `Standard`
  * Imagem: `aws/codebuild/standard:3.0`
  * Versão de imagem:  `Latest`
  * Tipo de ambiente:  `Linux`
  * Habilite esse indicador se você quiser criar imagens do Docker ou quiser que suas compilações obtenham privilégios elevados:  `true`

* Buildspec:

```yaml
version: 0.2

phases:
  install:
    runtime-versions:
      docker: 18
  build:
    commands:
      - docker run -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/src/horusec horuszup/horusec-cli:latest horusec start -p /src/horusec -P $(pwd)
```

### **Circle CI**

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

{{% alert color="warning" %}}
Em máquinas que utilizam Jenkins deve-se ter o **docker e git instalado** para que o Horusec tenha toda potencia em suas análises. Verifique mais informações na sessão de [requisitos da CLI](#Requisitos).
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

```yaml
pool:
  vmImage: 'ubuntu-18.04'

steps:
- script: curl -fsSL https://raw.githubusercontent.com/ZupIT/horusec/main/deployments/scripts/install.sh | bash -s latest && horusec start -p ./
```

### **GitLab CI/CD**

```yaml
image: docker:latest

variables:
  GIT_DEPTH: 0 # Necessário quando habilitado o autores de commit

services:
  - docker:dind

build-code-job:
  stage: build
  script:
    - docker run -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/src/horusec horuszup/horusec-cli:latest horusec start -p /src/horusec -P $(pwd)
```
