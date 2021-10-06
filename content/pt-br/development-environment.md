---
title: "Ambiente de desenvolvimento"
weight: 5
description: >-
  Nesta seção, você vai encontrar um ambiente de desenvolvimento para testar o Horusec-Operator.
---


Este ambiente de desenvolvimento é um teste de experiência para desenvolvedores, foi criado para você entender como o Horusec-Operator funciona.


### **Requisitos** 
Você precisa ter instalado na sua máquina:
- [**Helm**](https://helm.sh/docs/intro/install/#from-script).
- [**Kind**](https://kind.sigs.k8s.io/docs/user/quick-start/#installation).  


Agora, siga os passos para a configuração: 


##### **Passo 1. Clone o projeto**

```
git clone https://github.com/ZupIT/horusec-operator.git && cd horusec-operator
```

Suba o cluster Kubernetes com todas as dependências e espere finalizar: 
```
make up-sample
```
Se você ver essa mensagem: 
```
Creating horusec_analytic_db...
If you don't see a command prompt, try pressing enter.
psql: could not connect to server: Connection refused
        Is the server running on host "postgresql" (10.96.182.42) and accepting
        TCP/IP connections on port 5432?
pod "postgresql-client" deleted
pod default/postgresql-client terminated (Error)
```
Não se preocupe, é normal. O script está tentando criar um novo banco de dados, mas a pod do postgresql não está pronta, ele irá rodar novamente até criar essa base de dados. 

##### **Passo 2. Instale o Horusec-Operator:**

Após a finalização do script, instale: 

```
kubectl apply -f "https://github.com/ZupIT/horusec-operator/releases/download/v2.2.0/horusec-operator.yaml"
```
Confirme se foi instalado com sucesso: 

```
kubectl api-resources | grep horus

```
O output será: 

```
$ kubectl api-resources | grep horus                                                           
horusecplatforms                  horus        install.horusec.io             true         HorusecPlatform

```

E agora você pode ver o pod manager: 
```
$ kubectl get pods -n horusec-operator-system
NAME                                                   READY   STATUS              RESTARTS   AGE
horusec-operator-controller-manager-7b9696d4c4-t7w2q   2/2     Running             0          2m10s

```
##### **Passo 3. Passe o yaml com sua configuração para fazer o upload no seu cluster Kubernetes:**

Veja o exemplo:

```
kubectl apply -f ./config/samples/install_v2alpha1_horusecplatform.yaml

```
Agora, você pode ver todos os serviços web do Horusec no seu cluster, como no exemplo abaixo:  

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