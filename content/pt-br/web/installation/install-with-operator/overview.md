---
title: Instalação
weight: 10
description: Nesta seção, você encontra como instalar a aplicação web do Horusec no seu ambiente usando Operator.
---

## **O que é?** 

**Horusec-operator** realiza o gerenciamento entre os serviços de Web do Horusec e o cluster Kubernetes. A ideia da criação veio da comunidade com o desejo de simplificar a forma de instalar os serviços em um ambiente Kubernetes.

### **Requisitos** 

Veja os requisitos na seção [**Configuração do seu ambiente**]({{< ref path="/web/set-up.md" lang="pt-br">}}) section.  


## **Instalação**
Para instalar, siga os passo abaixo:  
 
**Passo 1.** Depois de configurar a conexão com seu banco de dados, conectando o seu broker e criando secrets. Instale o Horusec-Operator no seu cluster, veja o exemplo:

```
kubectl apply -k "https://github.com/ZupIT/horusec-operator/config/default?ref=v2.1.3"
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
{{% alert color="info" %}}
Acesse as [**definições de YAML**]({{< ref path="/web/installation/install-with-operator/yaml-definition" lang="pt-br">}}). 
{{% /alert %}}

- Para saber mais sobre o Horusec-Operator, veja a seção de [**Ambiente de desenvolvimento**]({{< ref path="/development-environment" lang="pt-br">}}). 