# Horusec-Kubernetes

## O que é?

O  [**Horusec-Kubernetes**](https://github.com/ZupIT/horusec/tree/master/horusec-kubernetes) é  uma ferramenta SAST criado pela equipe do Horusec para fazer a busca de vulnerabilidades em projetos que utilizam arquivos _.yaml_ de kubernetes.



### Allow Privilege Escalation

Containers privilegiados compartilham namespaces com o sistema host, restrições eschew cgroup e não oferece nenhuma segurança. Eles devem ser usados exclusivamente como um mecanismo de empacotamento e distribuição para o código do container e não por isolamento. 

> Privileged containers share namespaces with the host system, eschew cgroup restrictions, and do not offer any security. They should be used exclusively as a bundling and distribution mechanism for the code in the container, and not for isolation.

### Host Aliases

Gerenciando os hosts /etc/ pode previnir um container modificar um arquivo depois que a pod de containers já ter começado. DNS deve sempre ser gerenciado pelo orquestrador. 

> Managing /etc/hosts aliases can prevent the container from modifying the file after a pod's containers have already been started. DNS should be managed by the orchestrator.

### Docker Sock

A instalação do docker.socket vaza informações sobre outros containers e pode permitir um breakout.

> Mounting the docker.socket leaks information about other containers and can allow container breakout.

### Capability System Admin

CAP\_SYS\_ADMIN é a capacidade mais privilegiada e de ser sempre evitada. 

> CAP\_SYS\_ADMIN is the most privileged capability and should always be avoided.

### Privileged Container

Container privilegiados podem permitir o acesso ao host sem restrições.  

> Privileged containers can allow almost completely unrestricted host access.

### Seccomp Unconfined

Perfis Seccomp não confinados tem acesso ao sistema de chamada. 

> Unconfined Seccomp profiles have full system call access.

### Host IPC

Compartilhando o namespace do host do IPC permite o container processar e comunicar com os processos do host. 

> Sharing the host's IPC namespace allows container processes to communicate with processes on the host.

### Host PID

Compartilhando o PID do namespace do host permite uma visibilidade de processos, potencialmente vazando informação como variáveis de ambiente e configuração.

> Sharing the host's PID namespace allows visibility of processes on the host, potentially leaking information such as environment variables and configuration.

### Host Network

Compartilhando o namespace da network do host permite que a pod seja processada para comunicar os processos que serão ligados ao adaptador loopback do adaptador. 

> Sharing the host's network namespace permits processes in the pod to communicate with processes bound to the host's loopback adapter.

