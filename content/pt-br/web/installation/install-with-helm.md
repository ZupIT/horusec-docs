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

Para realizar esta configuração, você precisará ter:

* Acesso ao cluster em que deseja instalar o Horusec Manager (caso esteja utilizando múltiplos
  clusters, verifique [**como configurar o acesso a eles**](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/)
  como configurar o acesso a eles)

* Cliente [**Helm**](https://helm.sh/docs/intro/install/) com uma versão superior a 3.1.1.

* Conexão com um **PostgreSQL** para armazenamento dos dados.

* Conexão com um **RabbitMQ** como message-broker.

* **Linux**.


## **Horusec Helm Charts**

Atualmente, a aplicação web do Horusec é composta por **8 serviços diferentes** e cada um deles possui um chart específico.

Os comandos neste guia usam os Charts do Helm incluídos no pacote da release do Horusec de acordo com cada serviço:

1. [**Core**](https://github.com/ZupIT/horusec-platform/tree/master/deployments/helm/core)
2. [**Analytic**](https://github.com/ZupIT/horusec-platform/tree/master/deployments/helm/analytic)
3. [**Api**](https://github.com/ZupIT/horusec-platform/tree/master/deployments/helm/api)
4. [**Auth**](https://github.com/ZupIT/horusec-platform/tree/master/deployments/helm/auth)
5. [**Manager**](https://github.com/ZupIT/horusec-platform/tree/master/deployments/helm/manager)
6. [**Messages**](https://github.com/ZupIT/horusec-platform/tree/master/deployments/helm/messages)
7. [**Webhook**](https://github.com/ZupIT/horusec-platform/tree/master/deployments/helm/webhook)
8. [**Vulnerability**](https://github.com/ZupIT/horusec-platform/tree/master/deployments/helm/vulnerability)

## **Pré-configurações**

Antes de iniciar a instalação dos serviços da aplicação web do Horusec, é importante que você tenha realizado algumas configurações prévias:

### **Armazenamento dos dados e message-broker**

{{% alert color="info" %}}
Algumas recomendações antes de iniciar a configuração: 

Instale o [**PostgreSQL**](https://github.com/bitnami/charts/tree/master/bitnami/postgresql) e o [**RabbitMQ**](https://github.com/bitnami/charts/tree/master/bitnami/rabbitmq) para um começo rápido em ambientes não produtivos usando os Helm Charts da Bitnami.

Se já tiver conexões disponíveis com uma instalação do `PostgreSQL` e do `RabbitMQ`, siga com a [**configuração das suas credenciais**](#configuração-de-dados-sensíveis) e informe os endereços dessas conexões nas devidas variáveis durante a [**instalação dos serviços do Horusec**](#instalação-dos-serviços-da-horusec).
{{% /alert %}}

Siga os passos a seguir para configurar o Horusec Helm Charts. 

**Passo 1:** Crie o namespace `horusec-system` para os componentes do Horusec (se já tiver feito, pode pular para próxima etapa):

```bash
kubectl create namespace horusec-system
```

**Passo 2:** Adicione o repositório de Charts da Bitnami e instale o que precisar:

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

helm install rabbitmq bitnami/rabbitmq -n horusec-system

helm install postgresql --set postgresqlDatabase=horusec_db bitnami/postgresql -n horusec-system
```

### **Configuração de dados sensíveis**

**Passo 1:** Crie o namespace `horusec-system` para os componentes do Horusec (se já tiver feito, pode pular para próxima etapa):

```bash
kubectl create namespace horusec-system
```

**Passo 2:** Os serviços que compõem a solução utilizam o segredo (Secrets) do Kubernetes para gerenciar dados sensíveis, como senhas de acesso, tokens OAuth e chaves SSH. Por esse motivo, é preciso configurar algumas Secrets antes de iniciar a instalação.

{{% alert color="info" %}}
Caso tenha instalado o `PostgreSQL` e o `RabbitMQ` com os Charts da Bitnami basta obter suas credenciais da
seguinte forma:

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
kubectl create secret generic database-username --from-literal=database-username=$POSTGRES_USERNAME
kubectl create secret generic database-password --from-literal=database-password=$POSTGRES_PASSWORD
kubectl create secret generic database-uri --from-literal=database-uri=postgresql://$POSTGRES_USERNAME:$POSTGRES_PASSWORD@postgresql:5432/horusec_db?sslmode=disable

kubectl create secret generic broker-username --from-literal=broker-username=$RABBITMQ_USERNAME
kubectl create secret generic broker-password --from-literal=broker-password=$RABBITMQ_PASSWORD

kubectl create secret generic jwt-token --from-literal=jwt-token=$JWT_SECRET
```

{{% alert color="warning" %}}
Os valores informados nas Secrets deste guia são meros exemplos e não se destinam ao uso em ambiente de produção.
{{% /alert %}}


## **Instalação dos serviços da Horusec**

Depois de realizar todas as configurações necessárias, você pode ir ao diretório raiz do pacote da release do Horusec e seguir as instruções abaixo para instalar os serviços:


 * Instale o Chart com os componentes do [**serviço core**]({{< ref path="/web/services/core" lang="pt-br">}}):

```bash
helm install core deployments/helm/core -n horusec-system
```

* Instale o Chart com os componentes do [**serviço de vulnerability**]({{< ref path="/web/services/vulnerability.md" lang="pt-br">}}):

```bash
helm install vulnerability deployments/helm/vulnerability -n horusec-system
```

* Instale o Chart com os componentes do [**serviço de analytic**]({{< ref path="/web/services/analytic" lang="pt-br">}}):

```bash
helm install analytic deployments/helm/analytic -n horusec-system
```

* Instale o Chart com os componentes do [**serviço de api**]({{< ref path="/web/services/api" lang="pt-br">}}):

```bash
helm install api deployments/helm/api -n horusec-system
```

* Instale o Chart que com os componentes do [**serviço de auth**]({{< ref path="/web/services/auth" lang="pt-br">}}):

```bash
helm install auth deployments/helm/auth -n horusec-system
```

* Instale o Chart com os componentes do [**serviço de manager**]({{< ref path="/web/services/manager" lang="pt-br">}}):

```bash
helm install manager deployments/helm/manager -n horusec-system
```

* Instale o Chart com os componentes do [**serviço de messages**]({{< ref path="/web/services/messages" lang="pt-br">}}):

 {{% alert color="info" %}}
 Obrigatório apenas se estiver utilizando
  o [**serviço de emails**]({{< ref path="/tutorials/how-to-enable-disable-messaging-service" lang="pt-br">}})

Quando você habilita o serviço de mensageria, é necessário que ele conecte ao seu serviço de e-mail. Para isso, adicione no serviço **"horusec-messages"** as seguintes variáveis de ambiente: 
- HORUSEC_SMTP_USERNAME="username do serviço de e-mail";
- HORUSEC_SMTP_PASSWORD="senha do serviço de e-mail";
- HORUSEC_SMTP_ADDRESS: "endereço do serviço de e-mail";
- HORUSEC_SMTP_HOST: "host do serviço de e-mail";
- HORUSEC_SMTP_PORT: "porta do serviço de e-mail".
{{% /alert %}} 

```bash
helm install messages deployments/helm/messages -n horusec-system
```

* Instale o Chart com os componentes do [**serviço de webhook**]({{< ref path="/web/services/webhook" lang="pt-br">}}):


```bash
helm install webhook deployments/helm/webhook -n horusec-system
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
kubectl -n horusec-system get ingresses manager-horusec-manager -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'
```
{{% /alert %}}

A maneira mais fácil de acessar esses endereços sem precisar de configuração de DNS, é adicionando-os no arquivo de Hosts da sua máquina. Veja no exemplo a seguir:

```bash
export INGRESS_HOST=$(kubectl -n horusec-system get ingresses manager-horusec-manager -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

echo "$INGRESS_HOST        api-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        core-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        analytic-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        auth-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        webhook-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
echo "$INGRESS_HOST        vulnerability-horus-dev.zup.com.br" | sudo tee -a /etc/hosts
```

Feito isso, acesse a URL: http://horus-dev.zup.com.br/

{{% alert color="info" %}}
Em casos de teste, o Horusec disponibiliza um e-mail e senha padrão para você acessar a plataforma:

```text
email: dev@example.com
password: Devpass0*
```
{{% /alert %}}