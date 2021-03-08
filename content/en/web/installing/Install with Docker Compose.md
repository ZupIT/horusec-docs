---
title: Install with Docker Compose
weight: 6
description: In this section, you will find how to install Horusec web application in your environment using docker-compose.
---

## **Requisites**
To use P Horusec Web application with docker-compose, you will need some tools in your environment:
* [**docker-compose**](https://docs.docker.com/compose/install/)
* [**docker**](https://docs.docker.com/get-docker/)
* **Linux**

## **What is docker-compose and how does it work?**

Compose is a tool to define and run the Docker application in lots of containers. You can use YAML file to configure your application with Compose. You can create and start all your configuration services with only one command. 

For more information about Compose resources, check the resources list [**here**](https://docs.docker.com/compose/).


## **Configuration**
There is a configuration file on Horusec with all the default option for you to configure your environment. 
It is simple, but **it is only recommended for a test scenario, never a production one.**
 
- The file is available on [**Horusec's repo**](https://github.com/ZupIT/horusec/blob/master/deployments/docker-compose.yaml)

Follow the next steps to configure:
1. Clone the repository;
2. Enter the folder you have cloned and run the command `make install` in order to have all web applications, see the below: 
```bash
git clone https://github.com/ZupIT/horusec.git

cd horusec

make install
```


## **Access file**
All Horusec's services are on this file and it will be exposed and executed in your machine. 

After you have done the previous steps, you can access the link to view the web application screens, showed by [Horusec-Manager](/docs/web/services/manager/introduction/) service at [http://localhost:8043](http://localhost:8043).

For test cases, Horusec gives you a default e-mail and a password for you to access the platform:
```text
email: dev@example.com
password: Devpass0*
```

{{% alert color="info" %}}
All backend services are exposed using **network_mode: "host"**, check if you have enabled [this function in your configurations](https://docs.docker.com/network/host/)
{{% /alert %}}


## **Images**
You can check and use Horusec's images on [dockerhub](https://hub.docker.com/u/horuszup). See some below: 

* [horuszup/horusec-manager](https://hub.docker.com/r/horuszup/horusec-manager)
* [horuszup/horusec-auth](https://hub.docker.com/r/horuszup/horusec-auth)
* [horuszup/horusec-account](https://hub.docker.com/r/horuszup/horusec-account)
* [horuszup/horusec-api](https://hub.docker.com/r/horuszup/horusec-api)
* [horuszup/horusec-analytic](https://hub.docker.com/r/horuszup/horusec-analytic)
* [horuszup/horusec-migration](https://hub.docker.com/r/horuszup/horusec-migration)
* [horuszup/horusec-messages](https://hub.docker.com/r/horuszup/horusec-messages) (required if you are using the [message service](/docs/pt-br/tutorials/how-to-enable-disable-messaging-service))
* [horuszup/horusec-webhook](https://hub.docker.com/r/horuszup/horusec-webhook) (required if you are using the [message service](/docs/pt-br/tutorials/how-to-enable-disable-messaging-service))

![](/docs/ptbr/web/installing/docker-compose/0-installing.gif)

## **Reminders**

{{% alert color="info" %}}
These configurations available on Horusec's [docker-compose.yaml](https://github.com/ZupIT/horusec/blob/master/deployments/docker-compose.yaml) are default. We recommend you to change the users and access like users and database password and others.
{{% /alert %}}

{{% alert color="info" %}}
Horusec always updates the images and performs corrections to know which image to use to specific versions. To check the correct versions for each service, see [release-notes](https://github.com/ZupIT/horusec/releases)
{{% /alert %}}

{{% alert color="info" %}}
There is [a new access policy to download dockerhub images](https://docs.docker.com/docker-hub/download-rate-limit/). We recommend you to upload images in the register you want, to avoid any problems. 
{{% /alert %}}
