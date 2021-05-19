---
title: "Instale utilizando Horusec-Operador"
weight: 30
description: >-
  Nesta seção, você encontra informações de instalar a aplicação web do Horusec em um cluster Kubernetes utilizando Horusec-Operador.
---

## **O que é?**

O Horusec Operator é uma implementação de [**Kubernetes Operator**](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/). Ele automatiza a configuração, criação, scaling e recovery do cluster Horusec. Ao reduzir essa complexidade, ele permite que você se concentre na identificação das possíveis vulnerabilidades dos seus projetos e você não precisa se preocupar com os detalhes de uma implementação manual.

## **Requisitos**

Para realizar esta configuração, você precisará ter:

* Um cluster Kubernetes e o [**kubectl**](https://kubectl.docs.kubernetes.io/installation/kubectl/binaries/) configurado
  para se comunicar com esse cluster.

## **Instalação**

Para instalar o Operator, execute o seguinte comando:

```shell
kubectl apply -f "https://github.com/ZupIT/horusec-operator/releases/download/v1.0.0/operator.yaml"
```

Em seguida, aplique a definição do seu cluster Horusec executando:

```shell
cat <<EOF | kubectl apply -f -
apiVersion: install.horusec.io/v1alpha1
kind: HorusecManager
metadata:
  name: simplest
spec:
  global:
    broker:
      host: rabbitmq.queue.svc.cluster.local
      port: 5672
    database:
      host: postgresql-instance1.cg034hpkmmjt.us-east-1.rds.amazonaws.com
      port: 5432
EOF
```