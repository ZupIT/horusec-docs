---
title: "Install Using Horusec-Admin"
weight: 30
description: >-
  In this section, you can find information from installing Horusec Web application in a Kubbernetes cluster using Horusec-Admin.
---

## **What is?**

Horusec-admin is an interface for users where it uses Horusec-operator for operations in your infrastructure.
Horusec-operator is an implementation of[**Kubernetes Operator**](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/). It automates the configuration, creation, scaling and recovery of the Horusec cluster.By reducing this complexity, it allows you to focus on identifying the possible vulnerabilities of your projects and you do not have to worry about the details of a manual implementation.

## **Requirements**

To accomplish this configuration, you will need to have:

* [**Terraform**](https://www.terraform.io/downloads.html).

* [**Docker**](https://docs.docker.com/get-docker/).

* [**Kind**](https://kind.sigs.k8s.io/docs/user/quick-start/).

* **Linux**.


## **Installation**

**Step 1:** Create a cluster and install the Horusec's dependencies as:
* Ingress
* Secrets
* Database
* Message-broker

For this, simply run the following commands:
```shell
git clone https://github.com/ZupIT/horusec-admin.git
cd horusec-admin
make install
```

**Step 2:** Then install Horusec-operator, run the following command:

```shell
kubectl apply -f "https://github.com/ZupIT/horusec-operator/releases/download/v1.1.0/operator.yaml" -n horusec-operator-system
```

It will climb all the required dependencies of the operator and install it in your cluster

See that the feature was added to your Kubbernetes
```shell
kubectl api-resources | grep horusec
```

**Step 3:** Install Horusec-admin
To install the admin, run the following command:

```shell
kubectl apply -f "https://github.com/ZupIT/horusec-admin/releases/download/v1.0.0/admin.yaml" -n horusec-system
```

See that admin is already turning internally in your cluster
```shell
kubectl get po -n horusec-system | grep admin
```

**Step 4:** Open the graphical Horusec-Admin interface and configure the connection to the services
{{% alert color="warning" %}}
Do not expose this application to the internet as it is quite sensitive, the use of this application is recommended only those that have access to the cluster.
{{% /alert %}}

Get the name of the pod with the command:
```bash
kubectl get po -n horusec-system | grep admin
```

In case this example is `horusec-admin-5d75bc69b6-cmcwc` but on your machine it should probably be another

And start the port-forward at port `3000`
```bash
kubectl port-forward horusec-admin-5d75bc69b6-cmcwc 3000:3000 -n horusec-system
```

Now open another terminal and check the logs so we can pick up the Horusec-admin authorization token.

{{% alert color="warning" %}}
This token is showing only the application log and will be **renewed** every 5 minutes
{{% /alert %}}

```bash
kubectl logs horusec-admin-5d75bc69b6-cmcwc
```

Output should be something like:
```text
~ ᐅ kubectl logs horusec-admin-5d75bc69b6-cmcwc
time="2021-05-19 18:40:01 +0000" level=info msg="Token:422fdc80ad447a78681791838ba08097b0efe187" prefix=authz
time="2021-05-19 18:40:01 +0000" level=info msg="Valid until:2021-05-19 20:40:01.49884709 +0000 UTC m=+7200.015680701" prefix=authz
time="2021-05-19 18:40:01 +0000" level=info msg=listening addr=":3000" prefix=server
```

In this example the token is `422FDC80AD447A78681791838ba08097b0Efe187`

With the access token we go to the browser in: [**http://localhost:3000**](http://localhost:3000) and we will enter the Horusec graphical interface.

**Step 6:** Change the Manager so you can receive the destination host

In the graphical horusec-admin interface:
* Click Manager
* Fill in all due fields with the URL configured in the INGRESS, for this example, were:
  * HORUSEC-API Endpoint with value:
    * **http://api.localhost/**
  * HORUSEC-MANAGER Path with value:
    * **/**
  * HORUSEC-MANAGER Endpoint with value:
    * **http://manager.localhost/**
  * HORUSEC-Account Endpoint with value:
    * **http://account.localhost/**
  * HORUSEC-Analytic Endpoint with value:
    * **http://analytic.localhost/**
  * HORUSEC-Auth Endpoint with value:
    * **http://auth.localhost/**
* Click Save


If you want to note Enter the command below and see Horusec-admin and Horusec-operator working together by rising any application of Horusec in your Kubbernetes cluster:

```
watch kubectl get po -n horusec-system
```

And wait for all services to be in the `status` of **RUNNING**

{{% alert color="info" %}}
By default the Horusec-Messages Service It will not start, because as the SMTP service is disabled by default then it will not start
{{% /alert %}}

Go to the destination [**http://manager.localhost/**](http://manager.localhost/) on your machine and see the prompt graphical interface
