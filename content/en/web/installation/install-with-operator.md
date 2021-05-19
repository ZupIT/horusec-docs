---
title: Install with Horusec-Operator
weight: 30
description: In this section, you can find information from installing Horusec Web application in a Kubbernetes cluster using Horusec-Operator.
---

## **What is?**

Horusec Operator is an implementation [Kubbernetes Operator](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/). It automates the configuration, creation, scaling and recovery of the Horusec cluster.By reducing this complexity, it allows you to focus on identifying the possible vulnerabilities of your projects and do not worry about the details of a manual deployment.

## **Requirements**

Before you begin, you will need:
* A Kubbernetes cluster and [Kubectl](https://kubectl.docs.kubernetes.io/installation/kubectl/binaries/) Configured to communicate with this cluster.

## **Installation**

To install the operator, run the following command:
```shell
kubectl apply -f "https://github.com/ZupIT/horusec-operator/releases/download/v1.0.0/operator.yaml"
```

Then apply the definition of your Horusec cluster running:
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
