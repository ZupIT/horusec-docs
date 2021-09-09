---
title: "Instale utilizando Helm"
weight: 20
description: >-
  Nesta seção, você encontra informações de como instalar a aplicação web do Horusec utilizando Helm.
---

## **O que é?**

O Helm é um gerenciador de pacotes que reúne em um só arquivo, denominado chart, todos os recursos definidos do Kubernetes que constituem uma aplicação. Saiba mais na própria [**documentação do Helm**](https://helm.sh/docs/).

No caso desta instalação, o objetivo é que você utilize a aplicação web do Horusec Web application vinculada ao seu cluster de Kubernetes com Helm.

## **Requisitos**

Veja os requisitos na seção [**Configuração do seu ambiente**]({{< ref path="/web/set-up.md" lang="pt-br">}}) section.  


## **Horusec Helm Charts**

A aplicação web do Horusec é composta por **8 serviços diferentes** e cada um deles possui um chart específico.

Os comandos neste guia usam os Charts do Helm incluídos no pacote da release do Horusec de acordo com cada serviço:

1. [**Core**]({{< ref path="/web/services/core" lang="pt-br">}})
2. [**Analytic**]({{< ref path="/web/services/analytic" lang="pt-br">}})
3. [**Api**]({{< ref path="/web/services/api" lang="pt-br">}})
4. [**Auth**]({{< ref path="/web/services/auth" lang="pt-br">}})
5. [**Manager**]({{< ref path="/web/services/manager" lang="pt-br">}})
6. [**Messages**]({{< ref path="/web/services/messages" lang="pt-br">}})
7. [**Webhook**]({{< ref path="/web/services/webhook" lang="pt-br">}})
8. [**Vulnerability**]({{< ref path="/web/services/vulnerability.md" lang="pt-br">}})

A partir da versão 2.0, você pode gerenciar todos eles apenas com um Helm Chart incluso [**release do Horusec**](https://github.com/ZupIT/horusec-platform/tree/main/deployments/helm/horusec-platform).

## **Pré-configurações**

Antes de iniciar a instalação dos serviços da aplicação web do Horusec, é importante que você tenha realizado as configurações prévias:

### **Armazenamento dos dados e message-broker**

{{% alert color="info" %}}
Algumas recomendações antes de iniciar a configuração: 

Instale o [**PostgreSQL**](https://github.com/bitnami/charts/tree/master/bitnami/postgresql) e o [**RabbitMQ**](https://github.com/bitnami/charts/tree/master/bitnami/rabbitmq) para um começo rápido em ambientes não produtivos usando os Helm Charts da Bitnami.

Se já tiver conexões disponíveis com uma instalação do `PostgreSQL` e do `RabbitMQ`, siga com a [**configuração das suas credenciais**](/docs/pt-br/web/installation/install-with-helm/#configuração-de-dados-sensíveis) e informe os endereços dessas conexões nas devidas variáveis durante a [**instalação dos serviços do Horusec**](/docs/pt-br/web/installation/install-with-helm/#instalação-dos-serviços-da-horusec).
{{% /alert %}}

Siga os passos a seguir para configurar o Horusec Helm Charts. 

**Passo 1:** Crie o namespace `horusec-system` para os componentes do Horusec (se já tiver feito, vá para o próximo passo):

```bash
kubectl create namespace horusec-system
```

**Passo 2:** Adicione o repositório de Charts da Bitnami e instale o que você precisa:

```bash
# add a chart repository and make sure you get the latest list of charts
helm repo add bitnami https://charts.bitnami.com/bitnami && helm repo update

# install the RabbitMQ chart
helm install rabbitmq bitnami/rabbitmq -n horusec-system

# for demonstration purposes, we're using a single instance of PostgreSQL with multiple databases
helm install postgresql bitnami/postgresql -n horusec-system -f - <<EOF
initdbScripts:
  userdata.sql: |
    create database horusec_db;
    create database analytic_db;
EOF
```

### **Configuração de dados sensíveis**

Se você não fez a configuração ainda, siga os passos: 

**Passo 1:** Crie o namespace `horusec-system` para os componentes do Horusec:

```bash
kubectl create namespace horusec-system
```

**Passo 2:** Os serviços que compõem a solução utilizam o segredo (Secrets) do Kubernetes para gerenciar dados sensíveis, como senhas de acesso, tokens OAuth e chaves SSH. Por esse motivo, é preciso configurar algumas Secrets antes de iniciar a instalação.

{{% alert color="info" %}}
Se já tiver instalado o `PostgreSQL` e o `RabbitMQ` com os Charts da Bitnami basta obter suas credenciais, veja:

```bash
export POSTGRES_USERNAME="postgres"
export POSTGRES_PASSWORD=$(kubectl get secret --namespace horusec-system postgresql -o jsonpath="{.data.postgresql-password}" | base64 --decode)
export RABBITMQ_USERNAME="user"
export RABBITMQ_PASSWORD=$(kubectl get secret --namespace horusec-system rabbitmq -o jsonpath="{.data.rabbitmq-password}" | base64 --decode)
export JWT_SECRET="4ff42f67-5929-fc52-65f1-3afc77ad86d5"
```
{{% /alert %}}

**Passo 3:** Crie o segredo (Secrets) do Kubernetes:

```bash
kubectl create secret generic horusec-database --from-literal=username=$POSTGRES_USERNAME --from-literal=password=$POSTGRES_PASSWORD --namespace horusec-system

kubectl create secret generic horusec-broker --from-literal=username=$RABBITMQ_USERNAME --from-literal=password=$RABBITMQ_PASSWORD --namespace horusec-system

kubectl create secret generic horusec-jwt --from-literal=jwt-token=$JWT_SECRET --namespace horusec-system
```

{{% alert color="warning" %}}
Os valores informados nas Secrets deste guia são exemplos e não se destinam ao uso em ambiente de produção.
{{% /alert %}}


## **Instalação dos serviços da Horusec**

Depois de realizar todas as configurações necessárias, você pode ir para a página de release para download o Helm Chart e extrair a release automaticamente (Linux ou macOS):

```bash
export HORUSEC_VERSION=2.15.0

curl -fsLo horusec-platform-${HORUSEC_VERSION}.zip https://github.com/ZupIT/horusec-platform/archive/refs/tags/v${HORUSEC_VERSION}.zip
unzip horusec-platform-${HORUSEC_VERSION}.zip horusec-platform-${HORUSEC_VERSION}/deployments/helm/horusec-platform/*
rm horusec-platform-${HORUSEC_VERSION}.zip
```

* Instale o chart do Horusec Platform que faz o deploy dos componentes selecionados: 
```bash
helm install horusec horusec-platform-${HORUSEC_VERSION}/deployments/helm/horusec-platform -n horusec-system
```

## **Acesso ao Horusec Helm Charts**

Depois de rodar todos os serviços em seu ambiente, basta acessar a interface gráfica pelo link que aparece em sua aplicação web e que é oferecida pelo [**serviço Horusec-Manager**]({{< ref path="/web/services/manager" lang="pt-br">}}).

O comportamento padrão dos Charts é criar um Ingress com uma regra de entrada roteando o tráfego HTTP para seu serviço baseado em um host específico. Por isso, é recomendado usar um **Ingress Controller** para gerenciar o acesso externo aos serviços do seu cluster do Kubernetes.

```bash
kubectl -n horusec-system get ingresses manager-horusec-manager -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

{{% alert color="warning" %}}
Em certos ambientes, o load balancer pode ser exposto usando um nome de host, em vez de um endereço IP. Nestes casos, use o jsonpath como no exemplo a seguir:

```bash
kubectl -n horusec-system get ingresses horusec -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'
```
{{% /alert %}}

A maneira mais fácil de acessar esses endereços sem precisar de configuração de DNS, é adicionando-os no arquivo de Hosts da sua máquina. Veja no exemplo a seguir:

```bash
export INGRESS_HOST=$(kubectl -n horusec-system get ingresses horusec -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

echo "$INGRESS_HOST core.local" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST manager.local" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST messages.local" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST vulnerability.local" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST webhook.local" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST analytic.local" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST api.local" | sudo tee -a /etc/hosts
```

Feito isso, acesse a URL do Horusec Manager **http://manager.local/**


{{% alert color="info" %}}
Em casos de teste, o Horusec disponibiliza um e-mail e senha padrão para você acessar a plataforma:

```text
email: dev@example.com
password: Devpass0*
```
{{% /alert %}}