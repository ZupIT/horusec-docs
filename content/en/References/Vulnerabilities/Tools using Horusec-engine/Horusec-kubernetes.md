---
title: Horusec-kubernetes
weight: 62
description: >-
  Here, you will find informations about vulnerabilities that Horusec can find
  on Kurbenetes projects.
---

---

## **What is it?**

The  [**Horusec-Kubernetes**](https://github.com/ZupIT/horusec/tree/master/horusec-kubernetes) is a SAST tool created by the Horusec team in order to search vulnerabilities in projects that use kubernetes _.yaml_ files.

## **Rules**

### Allow Privilege Escalation

> Privileged containers share namespaces with the host system, eschew cgroup restrictions, and do not offer any security. They should be used exclusively as a bundling and distribution mechanism for the code in the container, and not for isolation.

### Host Aliases

> Managing /etc/hosts aliases can prevent the container from modifying the file after a pod's containers have already been started. DNS should be managed by the orchestrator.

### Docker Sock

> Mounting the docker.socket leaks information about other containers and can allow container breakout.

### Capability System Admin

> CAP\_SYS\_ADMIN is the most privileged capability and should always be avoided.

### Privileged Container

> Privileged containers can allow almost completely unrestricted host access.

### Seccomp Unconfined

> Unconfined Seccomp profiles have full system call access.

### Host IPC

> Sharing the host's IPC namespace allows container processes to communicate with processes on the host.

### Host PID

> Sharing the host's PID namespace allows visibility of processes on the host, potentially leaking information such as environment variables and configuration.

### Host Network

> Sharing the host's network namespace permits processes in the pod to communicate with processes bound to the host's loopback adapter.
