---
title: Horusec-Kubernetes
weight: 6
description: >-
  Here, you will find informations about vulnerabilities that Horusec can find
  on Kurbenetes projects.
---

---

## **What is it?**

[**Horusec-Kubernetes**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-kubernetes.md" lang="en">}}) is a SAST tool created by the Horusec team to search for vulnerabilities in projects using kubernetes _.yaml_ files.

## **Rules**

### **Allow Privilege Escalation**
{{% alert color="info" %}}
ID:"HS-KUBERNETES-1"
{{% /alert %}}

Privileged containers share namespaces with the host system, eschew cgroup restrictions, and do not offer any security. They should be used exclusively as a bundling and distribution mechanism for the code in the container, and not for isolation.

### **Host Aliases**
{{% alert color="info" %}}
ID:"HS-KUBERNETES-2"
{{% /alert %}}

Managing /etc/hosts aliases can prevent the container from modifying the file after a pod's containers have already been started. DNS should be managed by the orchestrator.

### **Docker Sock**
{{% alert color="info" %}}
ID:"HS-KUBERNETES-3"
{{% /alert %}}

Mounting the docker.socket leaks information about other containers and can allow container breakout.

### **Capability System Admin**
{{% alert color="info" %}}
ID:"HS-KUBERNETES-4"
{{% /alert %}}

CAP\_SYS\_ADMIN is the most privileged capability and should always be avoided.

### **Privileged Container**
{{% alert color="info" %}}
ID:"HS-KUBERNETES-5"
{{% /alert %}}

Privileged containers can allow almost completely unrestricted host access.

### **Seccomp Unconfined**
{{% alert color="info" %}}
ID:"HS-KUBERNETES-6"
{{% /alert %}}

Unconfined Seccomp profiles have full system call access.

### **Host IPC**
{{% alert color="info" %}}
ID:"HS-KUBERNETES-7"
{{% /alert %}}

Sharing the host's IPC namespace allows container processes to communicate with processes on the host.

### **Host PID**
{{% alert color="info" %}}
ID:"HS-KUBERNETES-8"
{{% /alert %}}

Sharing the host's PID namespace allows visibility of processes on the host, potentially leaking information such as environment variables and configuration.

### **Host Network**
{{% alert color="info" %}}
ID:"HS-KUBERNETES-9"
{{% /alert %}}

Sharing the host's network namespace permits processes in the pod to communicate with processes bound to the host's loopback adapter.
