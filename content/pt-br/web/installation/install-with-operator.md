---
title: Instale utilizando o Operator
weight: 30
description: Nesta seção, você encontra como instalar a aplicação web do Horusec no seu ambiente usando Operator.
---

## **O que é?**

**Horusec-operator** realiza o gerenciamento entre os serviços de Web do Horusec e o cluster Kubernetes. A ideia da criação veio da comunidade com o desejo de simplificar a forma de instalar os serviços em um ambiente Kubernetes.

### **Requisitos**
Para realizar esta configuração, você precisará ter alguns secrets e dependências, veja abaixo:  
* [**Kubectl**](https://kubernetes.io/docs/tasks/tools/#kubectl) e um conexão com seu cluster.
* Conexão com um banco de dados: 
    -  Você pode fazer o upload de uma pod de um banco de dados PostgreSQL como é mostrado no exemplo [**ambiente de desenvolvimento**](https://github.com/ZupIT/horusec-operator#development-environment) ou você pode apenas criar secrets de conexão com o seu banco de dados. 
    - Criar dois banco de dados para o Horusec-platform e Horusec-analytic.
* Conexão com o message broker.
    - Você pode fazer o upload a pod de um message broker do RabbitMQ como no exemplo [**ambiente de desenvolvimento**](https://github.com/ZupIT/horusec-operator#development-environment) ou você pode apenas criar secrets de conexão com seu message broker. 
* Outros secrets necessários;
    - Os secrets que você precisa configurar pode variar, dependendo de como você usa o Horusec. [**Veja suas opções de configuração**](https://horusec.io/site/#resources).


## **Instalação**
Para instalar, siga os passo abaixo:  
 
**Passo 1.** Depois de configurar a conexão com seu banco de dados, conectando o seu broker e criando secrets. Instale o Horusec-Operator no seu cluster, veja o exemplo:

```
kubectl apply -f "https://github.com/ZupIT/horusec-operator/releases/download/v2.0.0/horusec-operator.yaml"
```

Agora, veja se o recurso foi instalado: 

```
kubectl api-resources | grep horus
```

O output precisa ser similar ao exemplo abaixo:

```
$ kubectl api-resources | grep horus                                                           
horusecplatforms                  horus        install.horusec.io             true         HorusecPlatform
```


## **Uso**

Agora, você precisa enviar as mudanças que você quer para o Kubernetes. Neste exemplo o arquivo [**YAML**](https://github.com/ZupIT/horusec-operator/blob/main/config/samples/install_v2alpha1_horusecplatform.yaml) foi enviado, se você quiser enviar um YAML vazio, veja abaixo: 

```
apiVersion: install.horusec.io/v2alpha1
kind: HorusecPlatform
metadata:
  name: horusecplatform-sample
spec: {}
```
Essas configurações serão padrão Horusec, são dos arquivos [**defaults.json**](https://github.com/ZupIT/horusec-operator/blob/main/defaults.json).

Agora, aplique as mudanças: 

```
kubectl apply -f "https://raw.githubusercontent.com/ZupIT/horusec-operator/main/config/samples/install_v2alpha1_horusecplatform.yaml"
```
Você pode ver todos os serviços web do Horusec enviadas no seu cluster, veja o exemplo abaixo: 

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

## **Ambiente de desenvolvimento**

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
kubectl apply -f "https://github.com/ZupIT/horusec-operator/releases/download/v2.0.0/horusec-operator.yaml"
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