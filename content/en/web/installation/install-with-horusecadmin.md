---
title: "Install with Horusec-Operator"
weight: 30
description: >-
  In this section, you will find how to install Horusec web application in your  cluster Kubernetes using Horusec-Operator.
---

## **What is it?**

Horusec Operator is a [**Kubernetes Operator**](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) implementation. It automates the configuration, creation, scaling and recovery of Horusec's cluster. When reducing this complexity, it allows you to focus in the identification of possible vulnerabilities in your projects and you don't have to worry about the manual implementation.

## **Requisites**

To configurate you will need the following:

* A Kubernetes cluster and the configured [**kubectl**](https://kubectl.docs.kubernetes.io/installation/kubectl/binaries/) to communicate with this cluster.
  

## **Installation**

To install the Operator, run the following command: 

```shell
kubectl apply -f "https://github.com/ZupIT/horusec-operator/releases/download/v1.0.0/operator.yaml"
```

And then, apply your Horusec's cluster definition by running: 

```shell
cat <<EOF | kubectl apply -f -
apiVersion: install.horusec.io/v1alpha1
kind: HorusecManager
metadata:
  name: simplest
spec:
  global:
    broker:
      host: rabbitmq.queue.svc.cluster.local
      port: 5672
    database:
      host: postgresql-instance1.cg034hpkmmjt.us-east-1.rds.amazonaws.com
      port: 5432
EOF
```
