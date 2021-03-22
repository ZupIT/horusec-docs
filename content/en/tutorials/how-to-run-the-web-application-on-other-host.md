---
title: How to run the web application in other host?
weight: 20
description: In this section, you will find a tutorial to run Horusec's web application in a virtual machine.
---

On Horusec, you can make a quick test to understand how the application works and how to adjust it to your environment. It is possible to do it with a virtual machine ou changing the host. To do so, follow the steps below: 

#### **Step 1:** Install the web application on your environment
If you haven't installed yet, check the process [**in this section**](/docs/web/installation). 

#### **Step 2:** Check the uninitiated services
Some services are not initiated by default, for example [Horusec-Messages](/docs/web/services/Messages) and [Horusec-Webhook](/docs/web/services/Webhook). 

After installation, you may notice that some services, by dault, are not initiated. It happens because the services, such as messaging, is configured to be disabled, in case you need to use it, just check out this tutorial.

#### **Step 3:** Configure Horusec-Manager

{{% alert color="info" %}}
If, for exaple, you try to access [Horusec-Manager](/docs/pt-br/web/services/manager) from your navigator and doesn't show any result, it happens because when you upload an application and try to access it through an unknown host, Horusec by default tries to stablish a communication through `127.0.0.1` IP, which means that the communication between services will always happen locally.
{{% /alert %}}


If you change your machine's host or install an application on it, it is necessary to reset Horusec-Manager, only then it will understand what is the applications' destiny that you hosted.

To do so:
- Access the service;
- Change the environment variables;
- Restart the application;


**Example using docker-compose**

When you use the `make install` command, it runs the [docker-compose.yaml](https://github.com/ZupIT/horusec/blob/master/deployments/docker-compose.yaml) Horusec's default. 
The Horusec-Manager is being executed with the following configuration: 

```yaml
...
  horusec-manager:
    image: horuszup/horusec-manager:latest
    restart: always
    container_name: horusec-manager
    ports:
      - "8043:8080"
    environment:
      REACT_APP_HORUSEC_ENDPOINT_API: ${REACT_APP_HORUSEC_ENDPOINT_API}
      REACT_APP_HORUSEC_ENDPOINT_ANALYTIC: ${REACT_APP_HORUSEC_ENDPOINT_ANALYTIC}
      REACT_APP_HORUSEC_ENDPOINT_ACCOUNT: ${REACT_APP_HORUSEC_ENDPOINT_ACCOUNT}
      REACT_APP_HORUSEC_ENDPOINT_AUTH: ${REACT_APP_HORUSEC_ENDPOINT_AUTH}
...
```

Then, you just export the variables related to the services where they are hosted and install Horusec again, for this kind of  scenario: 

```bash
export REACT_APP_HORUSEC_ENDPOINT_API="http:\/\/YOUR_HOST:8000" && \
export REACT_APP_HORUSEC_ENDPOINT_ANALYTIC="http:\/\/YOUR_HOST:8005" && \
export REACT_APP_HORUSEC_ENDPOINT_ACCOUNT="http:\/\/YOUR_HOST:8003" && \
export REACT_APP_HORUSEC_ENDPOINT_AUTH="http:\/\/YOUR_HOST:8006" && \
make install
```
