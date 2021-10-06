---
title: Installation
weight: 30
description: In this section, you will find how to install Horusec web application in your environment using Operator.
---

## **What is it?**
 
**Horusec-operator** performs management between Horusec web services and its Kubernetes cluster. It was created based on a community's idea to have a simpler way to install the services in an environment using Kubernetes. 


### **Requirements**
Check out the requirements in the [**Set up**]({{< ref path="/web/set-up.md" lang="en">}}) section. 


## **Installing**
To install it, follow the next step:  
 
**Step 1.** After configuring your database connection, connecting to your broker and creating secrets. Install Horusec-Operator on your cluster, see the example below: 

```
kubectl apply -k "https://github.com/ZupIT/horusec-operator/config/default?ref=v2.2.0"
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

- See how Horusec-Operator works, check out the [**Development environment**]({{< ref path="/development-environment" lang="en">}}) section. 
