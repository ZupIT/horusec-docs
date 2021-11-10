---
title: "Set up"
weight: 4
description: >-
 In this section, you will find how to prepare your environment to install Horusec.
---

Check out below how to prepare your enviroment to install Horusec:

## **General set up** 
These are the general requirements you need before installing Horusec: 

* Connection with your Kubernetes cluster - [**Kubectl**](https://kubernetes.io/docs/tasks/tools/#kubectl);
- If you are using multiple clusters, [**check out Kubernetes configuration**](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/) on how to configure their access.

* Connection with **PostgreSQL** (recommended version ```12```). Check out the [**Development Environment example**](https://github.com/ZupIT/horusec-operator#development-environment) or you can only create secrets of connection with your database;

* **RabbitMQ** connection as a message-broker (recommended version ```3-management```);

* Preconfigured **Kubernetes secrets**. 
  - The secrets you need to configure may vary depending on how you use Horusec. [**See the configuration options**]({{< ref path="/web/installation/install-with-operator/yaml-definition" lang="en">}}).

## **Helm**
When installing Horusec with Helm, you also need
* [**Helm**](https://helm.sh/docs/intro/install/) (recommended version ```3.1.1```);


## **Docker**
When installing Horusec with Docker, you also need:

* [**Docker-Compose**](https://docs.docker.com/compose/install/) (recommended version ```20.04```)
* [**Docker**](https://docs.docker.com/get-docker/) (recommended version ```19.03.11```).



{{% alert color="warning" %}}
To install Horusec, check out the [**Installation section**]({{< ref path="/web/installation" lang="en">}}). 
{{% /alert %}}