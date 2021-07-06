---
title: Install with Helm
weight: 20
description: In this section, you will find how to install Horusec web application in your Kubernetes cluster using Helm. 
---

## **What is it?** 

Helm is a package manager that gathers in one file named Chart all Kubernetes' features to make an application. Check out [**Helm's documentation**](https://helm.sh/docs/) for more details.

In this installation case here, the goal is for you to use Horusec's web application together with you Kubernete's cluster with Helm.

## **Requisites**

For this configuration, you will need: 

* Access to the cluster where you want to install Horusec Manager (If tou are using multiple clusters
  clusters, [**check out here**](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/)
  how to configure their access).

* [**Helm**](https://helm.sh/docs/intro/install/) client with a version > 3.1.1.

* **PostgreSQL** connection to store data.

* **RabbitMQ** connection as a message-broker.

## **Horusec Helm Charts**

Horusec's web application solution has **8 different services**. They are:

1. [**Core**]({{< ref path="/web/services/core.md" lang="en">}})
2. [**Analytic**]({{< ref path="/web/services/analytic.md" lang="en">}})
3. [**API**]({{< ref path="/web/services/api.md" lang="en">}})
4. [**Auth**]({{< ref path="/web/services/auth.md" lang="en">}})
5. [**Manager**]({{< ref path="/web/services/manager" lang="en">}})
6. [**Messages**]({{< ref path="/web/services/messages.md" lang="en">}})
7. [**Webhook**]({{< ref path="/web/services/webhook.md" lang="en">}})
8. [**Vulnerability**]({{< ref path="/web/services/vulnerability.md" lang="en">}})

Since version 2.0, you can manage them all with a single Helm Chart included
in [Horusec's release](https://github.com/ZupIT/horusec-platform/tree/main/deployments/helm/horusec-platform).

## **Pre-configuration**

Before start the Horusec's web application service installation, it is important you have performed some previously configurations:

### **Data storage and message-broker**

{{% alert color="info" %}}
Check out some recommendations before the configuration: 

Install [**PostgreSQL**](https://github.com/bitnami/charts/tree/master/bitnami/postgresql) and [**RabbitMQ**](https://github.com/bitnami/charts/tree/master/bitnami/rabbitmq) using Bitnami's Helm Charts, for a quick start in non-productive environments.

If you already have available connections with `PostgreSQL` and `RabbitMQ`, just follow your [**credentials configuration**]({{< ref path="/web/installation/install-with-helm.md#sensitive-data-configuration" lang="en">}}) and inform the addresses of these connections in the variables during [**Horusec's services installation**](#instalação-dos-serviços-da-horusec).
{{% /alert %}}

Follow the steps below to configure Horusec Helm Charts: 

**Step 1.** Create the namespace `horusec-system` for Horusec's components (if you have already done it, go to next step): 

```bash
kubectl create namespace horusec-system
```

**Step 2.** Add the Bitnami's Chart repository and install what you need: 

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

helm install rabbitmq bitnami/rabbitmq -n horusec-system

helm install postgresql --set postgresqlDatabase=horusec_db bitnami/postgresql -n horusec-system
```

### **Sensitive data configuration**
If you haven't configured yet, start with: 

**Step 1:** Create `horusec-system` namespace for the Horusec's components:

```bash
kubectl create namespace horusec-system
```

**Step 2:** The services that make this solution use Kubernetes' Secrets to manage sensitive data like passwords, oAuth tokens and SSH keys. Because of that, you have to configure some Secrets before starting the installation. 


{{% alert color="info" %}}
If you have installed `PostgreSQL` and `RabbitMQ` with Bitnami's Charts, now you have to get its crendentials: 

```bash
export POSTGRES_USERNAME="postgres"
export POSTGRES_PASSWORD=$(kubectl get secret --namespace horusec-system postgresql -o jsonpath="{.data.postgresql-password}" | base64 --decode)
export RABBITMQ_USERNAME="user"
export RABBITMQ_PASSWORD=$(kubectl get secret --namespace horusec-system rabbitmq -o jsonpath="{.data.rabbitmq-password}" | base64 --decode)
export JWT_SECRET="4ff42f67-5929-fc52-65f1-3afc77ad86d5"
```
{{% /alert %}}

**Step 3:** Create Kubernetes' Secrets: 

```bash
kubectl create secret generic database-username --from-literal=database-username=$POSTGRES_USERNAME
kubectl create secret generic database-password --from-literal=database-password=$POSTGRES_PASSWORD
kubectl create secret generic database-uri --from-literal=database-uri=postgresql://$POSTGRES_USERNAME:$POSTGRES_PASSWORD@postgresql:5432/horusec_db?sslmode=disable

kubectl create secret generic broker-username --from-literal=broker-username=$RABBITMQ_USERNAME
kubectl create secret generic broker-password --from-literal=broker-password=$RABBITMQ_PASSWORD

kubectl create secret generic jwt-token --from-literal=jwt-token=$JWT_SECRET
```
{{% alert color="warning" %}}
The Secrets values informed here are only examples and they are not intended to use on production.
{{% /alert %}}

## **Horusec's services installation**

After finishing all configuration, you can go to the Horusec release page to download the Helm chart, or download and
extract the release automatically (Linux or macOS):

```bash
export HORUSEC_VERSION=2.15.0

curl -fsLo horusec-platform-${HORUSEC_VERSION}.zip https://github.com/ZupIT/horusec-platform/archive/refs/tags/v${HORUSEC_VERSION}.zip
unzip horusec-platform-${HORUSEC_VERSION}.zip horusec-platform-${HORUSEC_VERSION}/deployments/helm/horusec-platform/*
rm horusec-platform-${HORUSEC_VERSION}.zip
```

* Install the Chart with [**core service**]({{< ref path="/web/services/core.md" lang="en">}}/) components: 

```bash
helm install core deployments/helm/core -n horusec-system
```

* Install the Chart with [**vulnerability service**]({{< ref path="/web/services/vulnerability.md" lang="en">}}/) components: 

```bash
helm install vulnerability deployments/helm/vulnerability -n horusec-system
```

* Install the Chart with [**analytic service**]({{< ref path="/web/services/analytic.md" lang="en">}}/) components: 

```bash
helm install analytic deployments/helm/analytic -n horusec-system
```

* Install the Chart with [**API service**]({{< ref path="/web/services/api.md" lang="en">}}/) components:

```bash
helm install api deployments/helm/api -n horusec-system
```

* Install the Chart with [**auth service**]({{< ref path="/web/services/auth.md" lang="en">}}/) components:

```bash
helm install auth deployments/helm/auth -n horusec-system
```

* Install the Chart with [**manager service**]({{< ref path="/web/services/manager/" lang="en">}}/) components:

```bash
helm install manager deployments/helm/manager -n horusec-system
```

* Install the Chart with [**messages service**]({{< ref path="/web/services/messages.md" lang="en">}}/) components:

{{% alert color="info" %}}
Only required if you are using the [**messaging service**]({{< ref path="/tutorials/how-to-enable-disable-messaging-service.md" lang="en">}})
When you enable the messaging service, it is necessary to connect to your e-mail service. For that, add to **"horusec-messages"** the following environment variables:   
- HORUSEC_SMTP_USERNAME="e-mail service username";
- HORUSEC_SMTP_PASSWORD="e-mail password service";
- HORUSEC_SMTP_ADDRESS: "e-mail address service";
- HORUSEC_SMTP_HOST: "e-mail host service";
- HORUSEC_SMTP_PORT: "e-mail service port".
  {{% /alert %}}

```bash
helm install messages deployments/helm/messages -n horusec-system
```

* Install the Chart with [**webhook service**]({{< ref path="/web/services/webhook.md" lang="en">}}/) components:

```bash
helm install webhook deployments/helm/webhook -n horusec-system
```

## **Access to Horusec Helm Charts**

After all the services are installed and running in your enviroment, you can access the graphic interface through a link offered by [**Horusec-Manager**]({{< ref path="/web/services/manager" lang="en">}}) service.

The Charts default behaviour is to create an Ingress with an input rule routing the HTTP traffic to your service based on a specific host. Because of that, it's recommended to use
**Ingress Controller** to manage the external access to your Kubernetes' cluster services. 

```bash
kubectl -n horusec-system get ingresses manager-horusec-manager -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

{{% alert color="warning" %}}
In some environments, the load balancer can be exposed using a host name instead an IP address. When this happen, use jsonpath like the example below: 
> ```bash
> kubectl -n horusec-system get ingresses manager-horusec-manager -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'
> ```
{{% /alert %}}

The easiest way to access these addresses without the DNS configuration is to add them to the Host files in your machine. For example: 

```bash
export INGRESS_HOST=$(kubectl -n horusec-system get ingresses manager-horusec-manager -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

echo "$INGRESS_HOST        api-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        core-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        analytic-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        auth-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        webhook-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        vulnerability-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
```

After you've done that, access the configured URL to access Horusec's Manager **http://horus-dev.zup.com.br/**


{{% alert color="info" %}}
For test cases, Horusec offers a default email and a password for you to access the platform, check out: 

```text
email: dev@example.com
password: Devpass0*
```
{{% /alert %}}