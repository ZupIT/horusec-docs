---
title: Install with Helm
weight: 7
description: In this section, you will find how to install Horusec web application in your Kubernetes cluster using Helm. 
---

## **Requisites**

To use Horusec Web application installed in your Kubernetes cluster with Helm, you will need: 

* Access to the cluster where you want to install Horusec Manager (If tou are using multiple clusters
  clusters, [check out here](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/)
  how to configure their access);
* [**Helm**](https://helm.sh/docs/intro/install/) client with a version higher than 3.1.1.
* **PostgreSQL** connection to store data; 
* **RabbitMQ** connection as a message-broker (optional).

## **What is Helm and how does it work?**

Helm is a package manager for Kubernetes. In one file named Chart, it is defined all Kubernetes' features to make an application. Check out their [documentation](https://helm.sh/docs/) for more details.

## **Horusec Helm Charts**

Horusec's web application solution has 7 different services and each one of them has a specific Chart. 
The commands here use Helm Charts included in Horusec's release package located in:


* [horusec-account/deployments/helm/horusec-account/](https://github.com/ZupIT/horusec/tree/master/horusec-account/deployments/helm/horusec-account)
* [horusec-analytic/deployments/helm/horusec-analytic/](https://github.com/ZupIT/horusec/tree/master/horusec-analytic/deployments/helm/horusec-analytic)
* [horusec-api/deployments/helm/horusec-api/](https://github.com/ZupIT/horusec/tree/master/horusec-api/deployments/helm/horusec-api)
* [horusec-auth/deployments/helm/horusec-auth/](https://github.com/ZupIT/horusec/tree/master/horusec-auth/deployments/helm/horusec-auth)
* [horusec-manager/deployments/helm/horusec-manager/](https://github.com/ZupIT/horusec/tree/master/horusec-manager/deployments/helm/horusec-manager)
* [horusec-messages/deployments/helm/horusec-messages/](https://github.com/ZupIT/horusec/tree/master/horusec-messages/deployments/helm/horusec-messages)
* [horusec-webhook/deployments/helm/horusec-webhook/](https://github.com/ZupIT/horusec/tree/master/horusec-webhook/deployments/helm/horusec-webhook)

## **Data storage and message-broker**

{{% alert color="info" %}}
For a quick start in non-productive environments, we recommend you to install [PostgreSQL](https://github.com/bitnami/charts/tree/master/bitnami/postgresql) and [RabbitMQ](https://github.com/bitnami/charts/tree/master/bitnami/rabbitmq) using Bitnami's Helm Charts.

If you already have available connections with `PostgreSQL` and `RabbitMQ`, just follow the **sensitive data configuration** and inform the address of these connections in the variables during Horusec's services installation.
{{% /alert %}}

If you haven't configured yet, follow the steps below: 

**Step 1.** Create the namespace `horusec-system` for Horusec's components: 

```bash
kubectl create namespace horusec-system
```

**Step 2.** Add the Bitnami's Chart repository and proceed with the installation: 

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

helm install rabbitmq bitnami/rabbitmq -n horusec-system

helm install postgresql --set postgresqlDatabase=horusec_db bitnami/postgresql -n horusec-system
```

## **Sensitive data configuration**
If you haven't configured yet, start with: 

**1.** Create `horusec-system` namespace for the Horusec's components:

```bash
kubectl create namespace horusec-system
```

**2.** The services that make this solution use Kubernetes' Secrets to manage sensitive data like passwords, oAuth tokens and SSH keys. Because of that, you have to configure some Secrets before starting the installation. 


**Optional**: If you have installed `PostgreSQL` and `RabbitMQ` with Bitnami's Charts, now you have to get its crendentials: 

```bash
export POSTGRES_USERNAME="postgres"
export POSTGRES_PASSWORD=$(kubectl get secret --namespace horusec-system postgresql -o jsonpath="{.data.postgresql-password}" | base64 --decode)
export RABBITMQ_USERNAME=$(kubectl get secret --namespace horusec-system rabbitmq -o jsonpath="{.data.rabbitmq-password}" | base64 --decode)
export JWT_SECRET="4ff42f67-5929-fc52-65f1-3afc77ad86d5"
```

- Create Kubernetes' Secrets: 

```bash
kubectl create secret generic database-username --from-literal=database-username=$POSTGRES_USERNAME
kubectl create secret generic database-password --from-literal=database-password=$POSTGRES_PASSWORD
kubectl create secret generic database-uri --from-literal=database-uri=postgresql://$POSTGRES_USERNAME:$POSTGRES_PASSWORD@postgresql.horusec:5432/horusec_db?sslmode=disable

kubectl create secret generic broker-username --from-literal=broker-username=$RABBITMQ_USERNAME
kubectl create secret generic broker-password --from-literal=broker-password=$RABBITMQ_PASSWORD

kubectl create secret generic jwt-token --from-literal=jwt-token=$JWT_SECRET
```

> **Attention**: The Secrets values informed here are only examples and they are not intended to use on production. 

## **Horusec's services installation**

Browse the release package's root directory and follow the next steps:  


**Step 1.** Install the Chart containing the [account service](/docs/pt-br/web/services/account) components: 

```bash
helm install account horusec-account/deployments/helm/horusec-account -n horusec-system
```

**Step 2.** Install the Chart containing [analytic service](/docs/pt-br/web/services/analytic) components: 

```bash
helm install analytic horusec-analytic/deployments/helm/horusec-analytic -n horusec-system
```

**Step 3.** Install the Chart containing [API service](/docs/pt-br/web/services/api) components:

```bash
helm install api horusec-api/deployments/helm/horusec-api -n horusec-system
```

**Step 4.** Install the Chart containing [auth service](/docs/pt-br/web/services/auth) components:

```bash
helm install auth horusec-auth/deployments/helm/horusec-auth -n horusec-system
```

**Step 5.** Install the Chart containing [manager service](/docs/pt-br/web/services/manager) components:

```bash
helm install manager horusec-manager/deployments/helm/horusec-manager -n horusec-system
```

**Step 6.** Install the Chart containing [messages service](/docs/pt-br/web/services/messages) components:

- Only required if you are using the
  [messaging service](/docs/pt-br/tutorials/how-to-enable-disable-messaging-service)

```bash
helm install messages horusec-messages/deployments/helm/horusec-messages -n horusec-system
```

**Step 7.** Install the Chart containing [webhook service](/docs/pt-br/web/services/webhook) components:

- Only required if you are using the
  [messaging service](/docs/pt-br/tutorials/how-to-enable-disable-messaging-service)

```bash
helm install webhook horusec-webhook/deployments/helm/horusec-webhook -n horusec-system
```

## **Accessing the interface**

After all the services are installed and running in your enviroment, you can access the graphic interface through a link offered by [Horusec-Manager](/docs/pt-br/web/services/manager) service.

We recommend you to use Ingress Controller to manage the external access to your Kubernetes' cluster services. 
Because of that, the Charts default behaviour is to create an Ingress with an input rule routing the HTTP traffic to your service based on a specific host. 


```bash
kubectl -n horusec-system get ingresses manager-horusec-manager -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

> **Attention**: In some environments, the load balancer can be exposed using a host name instead an IP address. When this happen, use jsonpath like the example below: 
> ```bash
> kubectl -n horusec-system get ingresses manager-horusec-manager -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'
> ```

The easiest way to access these addresses without the DNS configuration is to add them to the Host files in your machine. For example: 

```bash
export INGRESS_HOST=$(kubectl -n horusec-system get ingresses manager-horusec-manager -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

echo "$INGRESS_HOST        api-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        account-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        analytic-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        auth-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
```

Then, access http://horus-dev.zup.com.br/

For test cases, Horusec offers a default email and a password for you to access the platform, check out: 

```text
email: dev@example.com
password: Devpass0*
```