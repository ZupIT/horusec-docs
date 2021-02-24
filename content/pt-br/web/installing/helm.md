---
title: "Instale utilizando Helm"
weight: 20
description: >-
  Nessa seção você encontra como subir a aplicação web do Horusec em seu cluster Kubernetes usando o Helm
---

## **Requisitos**

Para você utilizar o Horusec Web application instalado em seu cluster de Kubernetes com Helm você precisará de:

* acesso ao cluster onde deseja instalar o Horusec Manager (caso esteja utilizando múltiplos
  clusters, [verifique aqui](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/)
  como configurar o acesso a eles)
* cliente [Helm](https://helm.sh/docs/intro/install/) com uma versão superior a 3.1.1.
* conexão com um PostgreSQL para armazenamento dos dados
* conexão com um RabbitMQ como message-broker (opcional)

## **O que é Helm e como ele funciona?**

Helm é um gerenciador de pacotes para Kubernetes. Dentro de um único arquivo, denominado chart, estão definidos todos os
recursos do Kubernetes que constituem uma aplicação. Consulte a [documentação](https://helm.sh/docs/) para mais
detalhes.

## **Horusec Helm Charts**

Atualmente, a solução da aplicação web do Horusec é composta por 7 serviços diferentes onde cada um deles possui um Chart
específico.

Os comandos neste guia usam os Charts do Helm incluídos no pacote da release do Horusec localizados em:

* [horusec-account/deployments/helm/horusec-account/](https://github.com/ZupIT/horusec/tree/master/horusec-account/deployments/helm/horusec-account)
* [horusec-analytic/deployments/helm/horusec-analytic/](https://github.com/ZupIT/horusec/tree/master/horusec-analytic/deployments/helm/horusec-analytic)
* [horusec-api/deployments/helm/horusec-api/](https://github.com/ZupIT/horusec/tree/master/horusec-api/deployments/helm/horusec-api)
* [horusec-auth/deployments/helm/horusec-auth/](https://github.com/ZupIT/horusec/tree/master/horusec-auth/deployments/helm/horusec-auth)
* [horusec-manager/deployments/helm/horusec-manager/](https://github.com/ZupIT/horusec/tree/master/horusec-manager/deployments/helm/horusec-manager)
* [horusec-messages/deployments/helm/horusec-messages/](https://github.com/ZupIT/horusec/tree/master/horusec-messages/deployments/helm/horusec-messages)
* [horusec-webhook/deployments/helm/horusec-webhook/](https://github.com/ZupIT/horusec/tree/master/horusec-webhook/deployments/helm/horusec-webhook)

## **Armazenamento dos dados e message-broker**

> **Obs**: Para um começo rápido em ambientes não produtivos, nós recomendamos a instalação do [PostgreSQL](https://github.com/bitnami/charts/tree/master/bitnami/postgresql) e do [RabbitMQ](https://github.com/bitnami/charts/tree/master/bitnami/rabbitmq) usando os Helm Charts da Bitnami.
>
> Caso já possua conexões disponíveis com uma instalação do `PostgreSQL` e do `RabbitMQ` basta seguir com a [configuração das suas credenciais](#configuração-de-dados-sensíveis) e informar os endereços dessas conexões nas devidas variáveis durante a [instalação dos serviços da Horusec](#instalação-dos-serviços-da-horusec).

**1.** Caso não o tenha feito, crie o namespace `horusec-system` para os componentes do Horusec:

```bash
kubectl create namespace horusec-system
```

**2.** Adicione o repositório de Charts da Bitnami e instale o que precisar:

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

helm install rabbitmq bitnami/rabbitmq -n horusec-system

helm install postgresql --set postgresqlDatabase=horusec_db bitnami/postgresql -n horusec-system
```

## **Configuração de dados sensíveis**

**1.** Caso não o tenha feito, crie o namespace `horusec-system` para os componentes do Horusec:

```bash
kubectl create namespace horusec-system
```

**2.** Os serviços que compõem a solução utilizam de Secrets do Kubernetes para gerenciar dados sensíveis como senhas de
acesso, tokens OAuth e chaves SSH. Por esse motivo, é preciso configurar algumas Secrets antes de começar a instalação.

(Opcional) Caso tenha instalado o `PostgreSQL` e o `RabbitMQ` com os Charts da Bitnami basta obter suas credenciais da
seguinte forma:

```bash
export POSTGRES_PASSWORD=$(kubectl get secret --namespace horusec postgresql -o jsonpath="{.data.postgresql-password}" | base64 --decode)
export RABBITMQ_PASSWORD=$(kubectl get secret --namespace horusec rabbitmq -o jsonpath="{.data.rabbitmq-password}" | base64 --decode)"
```

Crie as Secrets do Kubernetes:

```bash
kubectl create secret generic database-username --from-literal=database-username=postgres
kubectl create secret generic database-password --from-literal=database-password=$POSTGRES_PASSWORD
kubectl create secret generic database-uri --from-literal=database-uri=postgresql://postgres:LGGaP7GCul@postgresql.horusec:5432/horusec_db?sslmode=disable

kubectl create secret generic broker-username --from-literal=broker-username=user
kubectl create secret generic broker-password --from-literal=broker-password=$RABBITMQ_PASSWORD

kubectl create secret generic jwt-token --from-literal=jwt-token=4ff42f67-5929-fc52-65f1-3afc77ad86d5
```

> **Atenção**: Os valores informados nas Secrets deste guia são meros exemplos e não se destinam ao uso em produção.

## **Instalação dos serviços da Horusec**

Navegue para o diretório raiz do pacote da release e siga as instruções abaixo.

1. Crie o namespace `horusec-system` para os componentes do Horusec:
```bash
kubectl create namespace horusec-system
```

2. Instale o Chart que contém os componentes do [serviço de account](/docs/pt-br/web/services/account):
```bash
helm install account horusec-account/deployments/helm/horusec-account -n horusec-system
```

3. Instale o Chart que contém os componentes do [serviço de analytic](/docs/pt-br/web/services/analytic):
```bash
helm install analytic horusec-analytic/deployments/helm/horusec-analytic -n horusec-system
```

4. Instale o Chart que contém os componentes do [serviço de api](/docs/pt-br/web/services/api):
```bash
helm install api horusec-api/deployments/helm/horusec-api -n horusec-system
```

5. Instale o Chart que contém os componentes do [serviço de auth](/docs/pt-br/web/services/auth):
```bash
helm install auth horusec-auth/deployments/helm/horusec-auth -n horusec-system
```

6. Instale o Chart que contém os componentes do [serviço de manager](/docs/pt-br/web/services/manager):
```bash
helm install manager horusec-manager/deployments/helm/horusec-manager -n horusec-system
```

7. Instale o Chart que contém os componentes do [serviço de messages](/docs/pt-br/web/services/messages):
  - Obrigatório apenas se estiver utilizando o [serviço de mensageria](/docs/pt-br/tutorials/how-to-enable-disable-messaging-service)
```bash
helm install messages horusec-messages/deployments/helm/horusec-messages -n horusec-system
```

8. Instale o Chart que contém os componentes do [serviço de webhook](/docs/pt-br/web/services/webhook):
  - Obrigatório apenas se estiver utilizando o [serviço de mensageria](/docs/pt-br/tutorials/how-to-enable-disable-messaging-service)
```bash
helm install webhook horusec-webhook/deployments/helm/horusec-webhook -n horusec-system
```

## **Acessando**
Após ter todos os serviços rodando em seu ambiente basta acessar a interface gráfica pelo link que está sendo exposta sua aplicação web que está sendo oferecida pelo serviço [Horusec-Manager](/docs/pt-br/web/services/manager) em [http://YOUR_DOMAIN:8043](http://YOUR_DOMAIN:8043)

Para casos de teste o horusec disponibiliza um email e senha padrão para você acessar a plataforma que é:
```text
email: dev@example.com
password: Devpass0*
```