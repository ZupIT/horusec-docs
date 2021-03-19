---
title: Install with Helm
weight: 7
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

* **RabbitMQ** connection as a message-broker (**optional**).



## **Horusec Helm Charts**

Horusec's web application solution has **7 different services** and each one of them has a specific chart. 

The commands in this guide use Helm Charts already included in Horusec's release package according to each service:


1. [**Account**](https://github.com/ZupIT/horusec/tree/master/horusec-account/deployments/helm/horusec-account)
2. [**Analytic**](https://github.com/ZupIT/horusec/tree/master/horusec-analytic/deployments/helm/horusec-analytic)
3. [**Api**](https://github.com/ZupIT/horusec/tree/master/horusec-api/deployments/helm/horusec-api)
4. [**Auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth/deployments/helm/horusec-auth)
5. [**Horusec-manager**](https://github.com/ZupIT/horusec/tree/master/horusec-manager/deployments/helm/horusec-manager)
6. [**Horusec-messages**](https://github.com/ZupIT/horusec/tree/master/horusec-messages/deployments/helm/horusec-messages)
7. [**Horusec-webhook**](https://github.com/ZupIT/horusec/tree/master/horusec-webhook/deployments/helm/horusec-webhook)

## **Pre-configuration**

Before start the Horusec's web application service installation, it is important you have performed some previously configurations:

### **Data storage and message-broker**

{{% alert color="info" %}}
Check out some recommendations before the configuration: 

Install [**PostgreSQL**](https://github.com/bitnami/charts/tree/master/bitnami/postgresql) and [**RabbitMQ**](https://github.com/bitnami/charts/tree/master/bitnami/rabbitmq) using Bitnami's Helm Charts, for a quick start in non-productive environments.

If you already have available connections with `PostgreSQL` and `RabbitMQ`, just follow your [**credentials configuration**](/docs/web/installation/install-with-helm/#sensitive-data-configuration) and inform the addresses of these connections in the variables during [**Horusec's services installation**](#instalação-dos-serviços-da-horusec).
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
export RABBITMQ_USERNAME=$(kubectl get secret --namespace horusec-system rabbitmq -o jsonpath="{.data.rabbitmq-password}" | base64 --decode)
export RABBITMQ_PASSWORD=$(kubectl get secret --namespace horusec-system rabbitmq -o jsonpath="{.data.rabbitmq-password}" | base64 --decode)
export JWT_SECRET="4ff42f67-5929-fc52-65f1-3afc77ad86d5"
```
{{% /alert %}}

**Step 3:** Create Kubernetes' Secrets: 

```bash
kubectl create secret generic database-username --from-literal=database-username=$POSTGRES_USERNAME
kubectl create secret generic database-password --from-literal=database-password=$POSTGRES_PASSWORD
kubectl create secret generic database-uri --from-literal=database-uri=postgresql://$POSTGRES_USERNAME:$POSTGRES_PASSWORD@postgresql.horusec:5432/horusec_db?sslmode=disable

kubectl create secret generic broker-username --from-literal=broker-username=$RABBITMQ_USERNAME
kubectl create secret generic broker-password --from-literal=broker-password=$RABBITMQ_PASSWORD

kubectl create secret generic jwt-token --from-literal=jwt-token=$JWT_SECRET
```
{{% alert color="warning" %}}
The Secrets values informed here are only examples and they are not intended to use on production.
{{% /alert %}}

## **Horusec's services installation**

After finishing all configuration, you can go to Horusec's release package's root directory and follow the next instructions to install the services:  

* Install the Chart with [**account service**](/docs/web/services/account/) components: 

```bash
helm install account horusec-account/deployments/helm/horusec-account -n horusec-system
```

* Install the Chart with [**analytic service**](/docs/web/services/analytic/) components: 

```bash
helm install analytic horusec-analytic/deployments/helm/horusec-analytic -n horusec-system
```

* Install the Chart with [**API service**](/docs/web/services/api/) components:

```bash
helm install api horusec-api/deployments/helm/horusec-api -n horusec-system
```

* Install the Chart with [**auth service**](/docs/web/services/auth/) components:

```bash
helm install auth horusec-auth/deployments/helm/horusec-auth -n horusec-system
```

* Install the Chart with [**manager service**](/docs/web/services/manager/) components:

```bash
helm install manager horusec-manager/deployments/helm/horusec-manager -n horusec-system
```

* Install the Chart with [**messages service**](/docs/web/services/messages/) components:

{{% alert color="info" %}}
Only required if you are using the
  [**messaging service**](/docs/pt-br/tutorials/how-to-enable-disable-messaging-service)
  {{% /alert %}}

```bash
helm install messages horusec-messages/deployments/helm/horusec-messages -n horusec-system
```

* Install the Chart with [**webhook service**](/docs/web/services/webhook/) components:

{{% alert color="info" %}}
Only required if you are using the
  [**messaging service**](/docs/pt-br/tutorials/how-to-enable-disable-messaging-service)
{{% /alert %}}

```bash
helm install webhook horusec-webhook/deployments/helm/horusec-webhook -n horusec-system
```

## **Access to Horusec Helm Charts**

After all the services are installed and running in your enviroment, you can access the graphic interface through a link offered by [**Horusec-Manager**](/docs/web/services/manager) service.

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
echo "$INGRESS_HOST        account-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        analytic-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        auth-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
```

After you've done that, access the configured URL to access Horusec's Manager http://horus-dev.zup.com.br/


{{% alert color="info" %}}
For test cases, Horusec offers a default email and a password for you to access the platform, check out: 

```text
email: dev@example.com
password: Devpass0*
```
{{% /alert %}}