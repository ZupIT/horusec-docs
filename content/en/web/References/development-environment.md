---
title: "Environment development"
weight: 1
description: >-
  In this section, you will find a developement environment to see how Horusec-Operator works. 
---

This development environment is a developer experience test, it is for you to see how Horusec-Operator works.


### **Requirements** 
You need to have installed in your local machine:
- [**Helm**](https://helm.sh/docs/intro/install/#from-script).
- [**Kind**](https://kind.sigs.k8s.io/docs/user/quick-start/#installation).  


Now, follow the steps to configure: 


##### **Step 1. Clone this project**

```
git clone https://github.com/ZupIT/horusec-operator.git && cd horusec-operator
```

Up Kubernetes cluster with all dependencies and wait to finish:
```
make up-sample
```
If you see this message:
```
Creating horusec_analytic_db...
If you don't see a command prompt, try pressing enter.
psql: could not connect to server: Connection refused
        Is the server running on host "postgresql" (10.96.182.42) and accepting
        TCP/IP connections on port 5432?
pod "postgresql-client" deleted
pod default/postgresql-client terminated (Error)
```
Don't worry, this is normal. The script is trying to create a new database, but the pod of the postgresql is not ready, it will run again until create a new database.

##### **Step 2. Install Horusec-Operator:**

After script finish, install: 

```
kubectl apply -f "https://github.com/ZupIT/horusec-operator/releases/download/v2.2.0/horusec-operator.yaml"
```
Check out if it was successfully installed: 
```
kubectl api-resources | grep horus

```
The output will be: 

```
$ kubectl api-resources | grep horus                                                           
horusecplatforms                  horus        install.horusec.io             true         HorusecPlatform

```

And you can see the pod manager: 
```
$ kubectl get pods -n horusec-operator-system
NAME                                                   READY   STATUS              RESTARTS   AGE
horusec-operator-controller-manager-7b9696d4c4-t7w2q   2/2     Running             0          2m10s

```
##### **Step 3. Pass yaml with your configuration to upload in your Kubernetes cluster:**

See the example: 
```
kubectl apply -f ./config/samples/install_v2alpha1_horusecplatform.yaml

```
Now, you can see all Horusec web services uploaded in your cluster, like the example below:

```
$ kubectl get pods
NAME                                                    READY   STATUS      RESTARTS   AGE
analytic-6f6bffb5d6-f8pl9                               1/1     Running     0          74s
api-5cc5b7545-km925                                     1/1     Running     0          73s
auth-8fbc876d9-62r6d                                    1/1     Running     0          73s
core-6bf7f9c9fc-fdv5c                                   1/1     Running     0          73s
horusecplatform-sample-analytic-migration-wwdzc-r9th2   0/1     Completed   0          74s
horusecplatform-sample-analytic-v1-2-v2-8zchl-445mz     0/1     Completed   2          74s
horusecplatform-sample-api-v1-2-v2-5lndp-w2rbd          0/1     Completed   3          74s
horusecplatform-sample-platform-migration-8g5ml-zmntl   0/1     Completed   0          74s
manager-c959f4f67-fz7r4                                 1/1     Running     0          74s
postgresql-postgresql-0                                 1/1     Running     0          7m54s
rabbitmq-0                                              1/1     Running     0          7m54s
vulnerability-7d789fd655-tpjp8                          1/1     Running     0          74s
webhook-7b5c45c859-cq4nf                                1/1     Running     0          73s

```