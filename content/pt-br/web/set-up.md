---
title: "Configuração do seu ambiente"
weight: 4
description: >-
 Nesta seção, você encontra como preparar seu ambiente para instalar o Horusec.
---

Veja abaixo como preparar seu ambiente para instalar o Horusec: 

## **Configuração geral** 
Esses são os requisitos gerais que você precisa antes de instalar o Horusec: 

* Conexão com seu cluster Kubernetes - [**Kubectl**](https://kubernetes.io/docs/tasks/tools/#kubectl);
- Se você utilizar múltiplos clusters, verifique [**como configurar o acesso**](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/);

* Conexão com o **PostgreSQL** (versão recomendada ```12```). Veja o exemplo [**ambiente de desenvolvimento**](https://github.com/ZupIT/horusec-operator#development-environment);

* Conexão com um **RabbitMQ** como message-broker (versão recomendada ```3-management```);

* **'Kubernetes secrets'** pré-configurado.
    - Os secrets que você precisa configurar pode variar, dependendo de como você usa o Horusec. [**Veja suas opções de configuração**]({{< ref path="/web/installation/install-with-operator/yaml-definition" lang="pt-br">}})..


## **Helm**
Quando instalar o Horusec com o Helm, você também precisa:
* [**Helm**](https://helm.sh/docs/intro/install/) (versão recomendada ```3.1.1```);


## **Docker**
Quando instalar o Horusec com o Docker, você também precisa:

[**Docker-Compose**](https://docs.docker.com/compose/install/) (versão recomendada ```20.04```).
* [**Docker**](https://docs.docker.com/get-docker/) (versão recomendada ```19.03.11```).

{{% alert color="warning" %}}
Para instalar o Horusec, acesse a seção de [**Instalação**]({{< ref path="/web/installation" lang="pt-br">}}). 
{{% /alert %}}