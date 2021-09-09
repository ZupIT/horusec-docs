---
title: Install with Helm
weight: 20
description: In this section, you will find how to install Horusec web application in your Kubernetes cluster using Helm. 
---

## **What is it?** 

Helm is a package manager that gathers in one file named Chart all Kubernetes' features to make an application. Check out [**Helm's documentation**](https://helm.sh/docs/) for more details.

In this installation case here, the goal is for you to use Horusec's web application together with you Kubernete's cluster with Helm.

## **Requirements**
Check out the requirements in the [**Set up**]({{< ref path="/web/set-up.md" lang="en">}}) section. 


## **Horusec Helm Charts**

Horusec's web application solution has **8 different services**. See them below:

1. [**Core**]({{< ref path="/web/services/core.md" lang="en">}})
2. [**Analytic**]({{< ref path="/web/services/analytic.md" lang="en">}})
3. [**API**]({{< ref path="/web/services/api.md" lang="en">}})
4. [**Auth**]({{< ref path="/web/services/auth.md" lang="en">}})
5. [**Manager**]({{< ref path="/web/services/manager" lang="en">}})
6. [**Messages**]({{< ref path="/web/services/messages.md" lang="en">}})
7. [**Webhook**]({{< ref path="/web/services/webhook.md" lang="en">}})
8. [**Vulnerability**]({{< ref path="/web/services/vulnerability.md" lang="en">}})

Since version 2.0, you can manage them all with a single Helm Chart included
in [**Horusec's release**](https://github.com/ZupIT/horusec-platform/tree/main/deployments/helm/horusec-platform).

## **Prerequisites**

Before start the Horusec's web application service installation, it is important you have performed some previously configuration:

### **Data storage and message-broker**

{{% alert color="info" %}}
Check out some recommendations before the configuration: 

Install [**PostgreSQL**](https://github.com/bitnami/charts/tree/master/bitnami/postgresql) and [**RabbitMQ**](https://github.com/bitnami/charts/tree/master/bitnami/rabbitmq) using Bitnami's Helm Charts, for a quick start in non-productive environments.

If you already have available connections with `PostgreSQL` and `RabbitMQ`, just follow your [**credentials configuration**]({{< ref path="/web/installation/install-with-helm.md#sensitive-data-configuration" lang="en">}}) and inform the addresses of these connections in the variables during [**Horusec's services installation**](/docs/web/installation/install-with-helm/#horusecs-services-installation).
{{% /alert %}}

Follow the steps below to configure Horusec Helm Charts: 

**Step 1.** Create the namespace `horusec-system` for Horusec's components (if you have already done it, go to next step): 

```bash
kubectl create namespace horusec-system
```

**Step 2.** Add the Bitnami's Chart repository and install what you need: 

```bash
# add a chart repository and make sure you get the latest list of charts
helm repo add bitnami https://charts.bitnami.com/bitnami && helm repo update

# install the RabbitMQ chart
helm install rabbitmq bitnami/rabbitmq -n horusec-system

# for demonstration purposes, we're using a single instance of PostgreSQL with multiple databases
helm install postgresql bitnami/postgresql -n horusec-system -f - <<EOF
initdbScripts:
  userdata.sql: |
    create database horusec_db;
    create database analytic_db;
EOF
```

### **Sensitive data configuration**
If you haven't configured yet, follow the next steps: 

**Step 1:** Create `horusec-system` namespace for the Horusec's components:

```bash
kubectl create namespace horusec-system
```

**Step 2:** The services make this solution use Kubernetes' Secrets to manage sensitive data like passwords, oAuth tokens and SSH keys. Because of that, you have to configure some Secrets before starting the installation. 


{{% alert color="info" %}}
If you have already installed `PostgreSQL` and `RabbitMQ` with Bitnami's Charts, now you have to get its crendentials: 

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
kubectl create secret generic horusec-database --from-literal=username=$POSTGRES_USERNAME --from-literal=password=$POSTGRES_PASSWORD --namespace horusec-system

kubectl create secret generic horusec-broker --from-literal=username=$RABBITMQ_USERNAME --from-literal=password=$RABBITMQ_PASSWORD --namespace horusec-system

kubectl create secret generic horusec-jwt --from-literal=jwt-token=$JWT_SECRET --namespace horusec-system
```
{{% alert color="warning" %}}
The Secrets values informed here are only examples and they are not intended to use on production.
{{% /alert %}}

## **Horusec's services installation**

After finishing all configuration, you can go to the Horusec release page to download the Helm chart, or download and extract the release automatically (Linux or macOS):

```bash
export HORUSEC_VERSION=2.16.2

curl -fsLo horusec-platform-${HORUSEC_VERSION}.zip https://github.com/ZupIT/horusec-platform/archive/refs/tags/v${HORUSEC_VERSION}.zip
unzip horusec-platform-${HORUSEC_VERSION}.zip horusec-platform-${HORUSEC_VERSION}/deployments/helm/horusec-platform/*
rm horusec-platform-${HORUSEC_VERSION}.zip
```

* Install the Horusec Platform chart which deploys all selected components:

```bash
helm install horusec horusec-platform-${HORUSEC_VERSION}/deployments/helm/horusec-platform -n horusec-system
```

## **Access to Horusec Helm Charts**

After all the services are installed and running in your enviroment, you can access the graphic interface through a link offered by [**Horusec-Manager**]({{< ref path="/web/services/manager" lang="en">}}) service.

The Charts default behaviour is to create an Ingress with an input rule routing the HTTP traffic to your service based on a specific host. It's recommended to use
**Ingress Controller** to manage the external access to your Kubernetes' cluster services. 

```bash
kubectl -n horusec-system get ingresses horusec -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

{{% alert color="warning" %}}
In some environments, the load balancer can be exposed using a host name instead an IP address. When this happen, use jsonpath like the example below: 
> ```bash
> kubectl -n horusec-system get ingresses horusec -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'
> ```
{{% /alert %}}

The easiest way to access these addresses without the DNS configuration is to add them to the Host files in your machine. For example: 

```bash
export INGRESS_HOST=$(kubectl -n horusec-system get ingresses horusec -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

echo "$INGRESS_HOST core.local" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST manager.local" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST messages.local" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST vulnerability.local" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST webhook.local" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST analytic.local" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST api.local" | sudo tee -a /etc/hosts
```

After you've done that, access the configured URL to access Horusec's Manager **http://manager.local/**


{{% alert color="info" %}}
For test cases, Horusec offers a default email and a password for you to access the platform, check out: 

```text
email: dev@example.com
password: Devpass0*
```
{{% /alert %}}
