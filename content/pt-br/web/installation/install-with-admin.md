---
title: Instale com Horusec-Admin
weight: 40
description:  Nesta seção, você encontra como instalar a aplicação web do Horusec no cluster Kubernetes utilizando o Horusec-Admin.
---

## **O que é?**

**Horusec-admin** realiza modificações básicas no seu cluster Kubernetes por meio de uma interface amigável. Foi criado em conjunção com o Horusec-Operator para ser uma forma mais simples de instalar os serviços web em um ambiente usando Kubernetes. 


### **Requisitos**
Para realizar esta configuração, você precisará ter alguns secrets e dependências, veja abaixo:   
* [**Kubectl**](https://kubernetes.io/docs/tasks/tools/#kubectl)
* [**Horusec-Operator installed**](https://github.com/ZupIT/horusec-operator)


## **Instalação**
Para instalar, siga os passo abaixo: 
 
**Passo 1.** Conecte sua base de dados com seu broker e crie os secrets necessários para instalar o Horusec-Operator, see the example below: 

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

**Passo 2.** Instale o Horusec-admin no seu cluster:

```
kubectl apply -f "https://github.com/ZupIT/horusec-admin/releases/download/v2.0.0/horusec-admin.yaml"
```

Veja a pod sendo executada:

```
kubectl get pods
```

O output será: 

```
$ kubectl get pods                                                           
NAME                                                    READY   STATUS      RESTARTS   AGE
horusec-admin-74594694f-sdmr8                           1/1     Running     0          1m
```


## **Uso**

Horusec-admin é executado no seu cluster por default em uma **port http 3000** interna. É necessário expor na sua máquina local para acessar a interface do projeto.  

{{% alert color="warning" %}}
Não mostre esse serviço para a internet externa, ele contém dados sensíveis. 
{{% /alert %}}

### **Configuração de token**

No seu terminal, começe a port-forward desse serviço: 
```
kubectl port-forward horusec-admin-74594694f-sdmr8 3000:3000
```

Se você acessar o **http://localhost:3000**, você verá a página inicial do admin: 

![](/docs/en/web/exemplo-token.png)

Para você conseguir o token de acesso, é preciso ver os logs de serviço. O token já foi mostrado apenas na pod interna e renovado a cada 10 minutos. Veja o exemplo abaixo: 

```
kubectl logs pod/horusec-admin-74594694f-sdmr8
```

O output será: 

```
time="2021-06-25 11:29:12 +0000" level=info msg="Token:04cd71a59715bc535cdc3ef6050c4f0ad49f12f0" prefix=authz
time="2021-06-25 11:29:12 +0000" level=info msg="Valid until:2021-06-25 13:29:12.454049573 +0000 UTC m=+7200.016119300" prefix=authz
time="2021-06-25 11:29:12 +0000" level=info msg=listening addr=":3000" prefix=server

```
O token desse exemplo é: **`04cd71a59715bc535cdc3ef6050c4f0ad49f12f0`**


## **Páginas do Horusec-Admin**

Quando você acessa o Horusec-Admin, você irá ver as seguintes páginas: 

**1. Homepage:** Selecione quais configurações você deseja fazer na plataforma: 
![](/docs/en/web/adminhome-page.png)


**2. Página de Status:** Confira os status dos serviços e veja se estão disponíveis: 

![](/docs/en/web/adminstatus-page.png)

**3. Página Geral:** Faça configurações gerais na aplicação, como dados para os usuários e outros:  

![](/docs/en/web/admingeneral-page.png)

**4. Página de recursos:** Você pode configurar conexões com serviços como banco de dados, Message Broker e SMTP. Lembre-se que o Horusec não cria essas features, apenas faz a conexão entre elas:

![](/docs/en/web/adminresources-page.png)

**5. Página de autenticação:** Você pode mudar o tipo de autenticação que você deseja usar no seu ambiente: 

![](/docs/en/web/adminauthentication-page.png)


**6. Página dos Hosts:** Atualize de forma rápida e simples o host da sua aplicação que será exposta na sua ingress do seu cluster Kubernetes:

![](/docs/en/web/adminhosts-page.png)



## **Ambiente de desenvolvimento**

Este ambiente de desenvolvimento foi criado para você conseguir testar o Horusec-admin na sua máquina. Antes de configurá-lo, você também precisa ter o Horusec-Operator configurado com todas as conexões e secrets.

### **Requisitos** 
Você precisa ter instalado na sua máquina:
- [**Helm**](https://helm.sh/docs/intro/install/#from-script).
- [**Kind**](https://kind.sigs.k8s.io/docs/user/quick-start/#installation).  


Agora, siga os passos para a configuração: 

##### **Passo 1. Clone o projeto Horusec-Operator:**

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

##### **Passo 2. Instale o Horusec-Operator**

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

##### **Passo 3. Instale o Horusec-Admin no seu cluster:** 

```
kubectl apply -f "https://github.com/ZupIT/horusec-admin/releases/download/v2.0.0/horusec-admin.yaml"

```

Veja a pod ser executada:

```
kubectl get pods

```
O output será: 

```
$ kubectl get pods                                                           
NAME                                                    READY   STATUS      RESTARTS   AGE
horusec-admin-74594694f-sdmr8                           1/1     Running     0          1m
```

##### **Passo 4. No seu terminal, comece um port-forward desse serviço** 


```
kubectl port-forward horusec-admin-74594694f-sdmr8 3000:3000

```
Se você acessar o **http://localhost:3000**, você verá a página do Horusec-admin. Agora, acesse o token. Você pode configurar como foi mencionado na seção de Uso.  

##### **Passo 5. Configure a autenticação.** 

Vá até a página geral e clique em "Save" e todos os serviços do Horusec serão configurados como default. Use o comando abaixo: 

```
kubectl get pods

```
O output será: 

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
