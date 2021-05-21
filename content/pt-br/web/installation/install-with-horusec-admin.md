<!-- ---
title: "Instale utilizando Horusec-Admin"
weight: 30
description: >-
  Nesta seção, você encontra informações de instalar a aplicação web do Horusec em um cluster Kubernetes utilizando Horusec-Admin.
---

## **O que é?**

O Horusec-Admin é uma interface para os usuários onde ele utiliza o Horusec-Operator para operações em sua infraestrutura.
O Horusec-Operator é uma implementação de [**Kubernetes Operator**](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/). Ele automatiza a configuração, criação, scaling e recovery do cluster Horusec. Ao reduzir essa complexidade, ele permite que você se concentre na identificação das possíveis vulnerabilidades dos seus projetos e você não precisa se preocupar com os detalhes de uma implementação manual.

## **Requisitos**

Para realizar esta configuração, você precisará ter:

* [**Terraform**](https://www.terraform.io/downloads.html).

* [**Docker**](https://docs.docker.com/get-docker/).

* [**Kind**](https://kind.sigs.k8s.io/docs/user/quick-start/).

* **Linux**.


## **Instalação**

**Passo 1:** Crie um cluster e instale as dependencias do horusec como:
* Ingress
* Secrets
* Banco de dados
* Message-Broker

Para isso basta rodar os seguintes comandos:
```shell
git clone https://github.com/ZupIT/horusec-admin.git
cd horusec-admin
make install
```

**Passo 2:** Depois instale o horusec-operator, execute o seguinte comando:

```shell
kubectl apply -f "https://github.com/ZupIT/horusec-operator/releases/download/v1.1.0/operator.yaml" -n horusec-operator-system
```

ele irá subir todos as dependencias necessárias do operator e instala-lo em seu cluster

Veja que o recurso foi adicionado ao seu kubernetes
```shell
kubectl api-resources | grep horusec
```

**Passo 3:** Instale o horusec-admin
Para instalar o Admin, execute o seguinte comando:

```shell
kubectl apply -f "https://github.com/ZupIT/horusec-admin/releases/download/v1.0.0/admin.yaml" -n horusec-system
```

Veja que o admin já está rodando internamente em seu cluster
```shell
kubectl get po -n horusec-system | grep admin
```

**Passo 4:** Abra a interface gráfica do horusec-admin e configure a conexão com os serviços
{{% alert color="warning" %}}
Não exponha esta aplicação para internet como ela é bastante sensível, o uso desta aplicação é recomendado apenas aqueles que tem acesso ao cluster.
{{% /alert %}}

Adquira o nome do pod com o comando:
```bash
kubectl get po -n horusec-system | grep admin
```

No caso deste exemplo é `horusec-admin-5d75bc69b6-cmcwc` mas em sua máquina provavelmente deverá ser outro

E inicie o port-forward na porta `3000`
```bash
kubectl port-forward horusec-admin-5d75bc69b6-cmcwc 3000:3000 -n horusec-system
```

Agora abra outro terminal e verifique os logs para que possamos pegar o token de autorização do horusec-admin.

{{% alert color="warning" %}}
Esse token é mostrando apenas no log da aplicação e será **renovado** a cada 5 minutos
{{% /alert %}}

```bash
kubectl logs horusec-admin-5d75bc69b6-cmcwc
```

O output deve ser algo como:
```text
~ ᐅ kubectl logs horusec-admin-5d75bc69b6-cmcwc
time="2021-05-19 18:40:01 +0000" level=info msg="Token:422fdc80ad447a78681791838ba08097b0efe187" prefix=authz
time="2021-05-19 18:40:01 +0000" level=info msg="Valid until:2021-05-19 20:40:01.49884709 +0000 UTC m=+7200.015680701" prefix=authz
time="2021-05-19 18:40:01 +0000" level=info msg=listening addr=":3000" prefix=server
```

Neste exemplo o token é `422fdc80ad447a78681791838ba08097b0efe187`

Com o token de acesso vamos até o navegador em: [**http://localhost:3000**](http://localhost:3000) e vamos entrar na interface gráfica do horusec.

**Passo 6:** Altere o manager para que possa receber o host de destino

Na interface gráfica do horusec-admin:
* Clique em manager
* Preencha todos os devidos campos com a url configurada no ingress, para este exemplo foram:
  * HORUSEC-API Endpoint tem o valor:
    * **http://api.localhost/**
  * HORUSEC-MANAGER Path tem o valor:
    * **/**
  * HORUSEC-MANAGER Endpoint tem o valor:
    * **http://manager.localhost/**
  * HORUSEC-Account Endpoint tem o valor:
    * **http://account.localhost/**
  * HORUSEC-Analytic Endpoint tem o valor:
    * **http://analytic.localhost/**
  * HORUSEC-Auth Endpoint tem o valor:
    * **http://auth.localhost/**
* Clique em Salvar


Caso queira observar digite o comando abaixo e veja o horusec-admin e horusec-operator trabalhando juntos subindo toda a aplicação do horusec em seu cluster kubernetes:

```
watch kubectl get po -n horusec-system
```

E aguarde todos os serviços estarem no `status` de **RUNNING**

{{% alert color="info" %}}
Por padrão o serviço horusec-messages ele não será iniciado, pois como o serviço de SMTP está desabilitado por padrão então ele não será iniciado
{{% /alert %}}

Vá até o destino [**http://manager.localhost/**](http://manager.localhost/) em sua máquina e veja a interface gráfica pronta -->
