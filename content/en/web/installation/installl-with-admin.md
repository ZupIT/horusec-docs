---
title: Install with Horusec-Admin
weight: 40
description: In this section, you will find how to install Horusec web application in Kubernetes cluster using Horusec-Admin.
---

## **What is it?**

**Horusec-admin** carries out basic modifications to your Kubernetes cluster through a user-friendly interface. It was created based on the conjunction with Horusec-Operator, it can have a simpler way to install the services in an environment using Kubernetes. 


### **Requirements**
To use Horusec-Admin you will need some secrets and dependencies, check out: 
* [**Kubectl**](https://kubernetes.io/docs/tasks/tools/#kubectl)
* [**Horusec-Operator installed**](https://github.com/ZupIT/horusec-operator)


## **Installing**
To install it, follow the next steps:  
 
**Step 1.** Connect your database to your broker and create the secrets you need to install Horusec-Operator on your cluster, see the example below: 

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

**Step 2.** Now, you have to install Horusec-admin in your cluster:

```
kubectl apply -f "https://github.com/ZupIT/horusec-admin/releases/download/v2.0.0/horusec-admin.yaml"
```

See the pod running:

```
kubectl get pods
```

The output will be: 

```
$ kubectl get pods                                                           
NAME                                                    READY   STATUS      RESTARTS   AGE
horusec-admin-74594694f-sdmr8                           1/1     Running     0          1m
```


## **Usage**

If you already installed and used Horusec-Operator with an YAML file, you are not able to use Horusec-admin. It is not possible to use both, you have to choose one to configure and use. 

Horusec-admin is running in your cluster by default in an internal **port http 3000**. It is necessary to expose in your local machine to access the interface of this project. 

{{% alert color="warning" %}}
DON'T EXPOSE THIS SERVICE TO EXTERNAL INTERNET BECAUSE IT CONTAINS SENSITIVE DATA. 
{{% /alert %}}

### **Token Configuration**

Now, in your terminal, start in the port-forward of this service: 
```
kubectl port-forward horusec-admin-74594694f-sdmr8 3000:3000
```

If you access **http://localhost:3000**, you will see the admin page: 

![](/docs/en/web/token-pages.png)

To get the access token it is necessary to see the logs of the service, because the token was already showed only in the internal pod and renewed every 10 minutes. See the example below:

```
kubectl logs pod/horusec-admin-74594694f-sdmr8
```

The output will be: 

```
time="2021-06-25 11:29:12 +0000" level=info msg="Token:04cd71a59715bc535cdc3ef6050c4f0ad49f12f0" prefix=authz
time="2021-06-25 11:29:12 +0000" level=info msg="Valid until:2021-06-25 13:29:12.454049573 +0000 UTC m=+7200.016119300" prefix=authz
time="2021-06-25 11:29:12 +0000" level=info msg=listening addr=":3000" prefix=server

```
The token in this example is: **`04cd71a59715bc535cdc3ef6050c4f0ad49f12f0`**


## **Horusec-Admin internal pages**

When you access Horusec-Admin you will see the following pages: 

**1. Homepage:** Select which configuration you want to perform in the platform:

![](/docs/en/web/adminhome-page.png)


**2. Status page:** Check the status of the services and if it is available: 

![](/docs/en/web/adminstatus-page.png)

**3. General page:** Perform general application settings, such as data for users of the application and others: 

![](/docs/en/web/admingeneral-page.png)

**4. Resources page:** Perform connection settings with services as required databases, Message Broker and SMTP. Remember that Horusec does not create these features only accomplishes the connection:

![](/docs/en/web/adminresources-page.png)

**5. Authentication page:** Change the type of authentication you want to use in your environment:

![](/docs/en/web/adminauthentication-page.png)


**6. Hosts page:** Update simply and quickly the host of your application that will be exposed in the ingress of your Kubernetes cluster:

![](/docs/en/web/adminhosts-page.png)



## **Development Environment**

This development enviroment was created for you to test Horusec-admin in your machine. You also have to configure Horusec-Operator all the connections and secrets.


### **Requirements** 
You need to have installed:
- [**Helm**](https://helm.sh/docs/intro/install/#from-script).
- [**Kind**](https://kind.sigs.k8s.io/docs/user/quick-start/#installation).  


Now, follow the steps to configure: 


##### **Step 1. Clone horusec-Operator project:**

```
git clone https://github.com/ZupIT/horusec-operator.git && cd horusec-operator
```

Update Kubernetes cluster with all dependencies and wait to finish:
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

##### **Step 2. After script finish. Install Horusec-Operator:**

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

##### **Step 3. Now, install Horusec-Admin in your cluster:** 

```
kubectl apply -f "https://github.com/ZupIT/horusec-admin/releases/download/v2.0.0/horusec-admin.yaml"

```

See the pod running:

```
kubectl get pods

```
The output will be:

```
$ kubectl get pods                                                           
NAME                                                    READY   STATUS      RESTARTS   AGE
horusec-admin-74594694f-sdmr8                           1/1     Running     0          1m
```

##### **Step 4. In your terminal start in port-forward of this service** 


```
kubectl port-forward horusec-admin-74594694f-sdmr8 3000:3000

```
If you access **http://localhost:3000**, you see Horusec-admin page.
Now, access the token, like explained before. 

##### **Step 5. Setup the authentication. Go to the General page and click on  "Save" button, and all Horusec services will be uploaded with default configuration. Use the following command:** 

```
kubectl get pods

```
The output will be: 

```
$ kubectl get pods
NAME                                                    READY   STATUS      RESTARTS   AGE
horusec-admin-74594694f-sdmr8                           1/1     Running     0          5m
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