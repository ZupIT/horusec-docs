---
title: Installation
weight: 30
description: In this section, you will find how to install Horusec web application in your environment using Operator.
---

## **What is it?**

**Horusec-operator** performs management between Horusec web services and its Kubernetes cluster. It was created based on a community's idea to have a simpler way to install the services in an environment using Kubernetes. 


### **Requirements**
To use Horusec-Operator you will need: 
* Connection with your Kubernetes cluster - [**Kubectl**](https://kubernetes.io/docs/tasks/tools/#kubectl);
* Connection with  **PostgreSQL** (recommended version ```12```). Check out the [**Development Environment example**](https://github.com/ZupIT/horusec-operator#development-environment) or you can only create secrets of connection with your database;
* Connection with **RabbitMQ** (recommended version ```3-management```);
* Connection with **'Kubernetes secrets'**. The secrets you need to configure may vary depending on how you use horusec. [**See the configuration options**](https://horusec.io/site/#resources).


## **Installing**
To install it, follow the next step:  
 
**Step 1.** After configuring your database connection, connecting to your broker and creating secrets. Install Horusec-Operator on your cluster, see the example below: 

```
kubectl apply -f "https://github.com/ZupIT/horusec-operator/releases/download/v2.0.0/horusec-operator.yaml"
```

Now, see if the resource was installed: 

```
kubectl api-resources | grep horus
```

The output will be similar to this:

```
$ kubectl api-resources | grep horus                                                           
horusecplatforms                  horus        install.horusec.io             true         HorusecPlatform
```


## **Usage**

Now, you need to send the changes you want to Kubernetes. In this example, there is a [**YAML file**](https://github.com/ZupIT/horusec-operator/blob/main/config/samples/install_v2alpha1_horusecplatform.yaml), if you send an empty YAML like this below:

```
apiVersion: install.horusec.io/v2alpha1
kind: HorusecPlatform
metadata:
  name: horusecplatform-sample
spec: {}
```
It will have the default Horusec settings from the file [**defaults.json**](https://github.com/ZupIT/horusec-operator/blob/main/defaults.json).

And now you have to apply your changes:

```
kubectl apply -f "https://raw.githubusercontent.com/ZupIT/horusec-operator/main/config/samples/install_v2alpha1_horusecplatform.yaml"
```
Now, you can see all Horusec web services upload in your cluster, see the example below: 

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

{{% alert color="info" %}}
Check out [**YAML's definition**]({{< ref path="/web/installation/install-with-operator/yaml-definition" lang="en">}}). 
{{% /alert %}}

## **Development Environment**

This development enviroment is a developer experience test, it is for you to see how Horusec-Operator works.


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
kubectl apply -f "https://github.com/ZupIT/horusec-operator/releases/download/v2.0.0/horusec-operator.yaml"
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