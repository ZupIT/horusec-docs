---
title: "Instale utilizando Docker-Compose"
weight: 10
description: >-
  Nesta seção, você encontra informações de instalar a aplicação web do Horusec utilizando Docker-Compose.
---

## **O que é?**

O [**Docker-Compose**](https://docs.docker.com/compose/) é uma ferramenta para configurar os serviços de seu aplicativo, além de definir e executar aplicativos Docker de vários contêineres.Com um único, você cria e inicia todos os serviços de sua configuração.

No caso desta instalação, o objetivo é que você utilize a aplicação web do Horusec vinculado ao seu ambiente usando Docker-Compose.

## **Requisitos**

Para realizar esta configuração, é necessário ter as seguintes ferramentas em seu ambiente: 

* [**Docker-Compose**](https://docs.docker.com/compose/install/)
* [**Docker**](https://docs.docker.com/get-docker/)
* **Linux**


## **Configuração**

Atualmente, o Horusec disponibiliza um **arquivo de configuração** com todas as opções padrão para você apenas subir em seu ambiente de forma simples e rápida.

{{% alert color="info" %}}
Esse arquivo deve ser usado para cenário de testes, nunca de produção. 
{{% /alert %}}


Você pode obter o [**arquivo de configuração**](https://github.com/ZupIT/horusec/blob/master/deployments/docker-compose.yaml) no repositório do Horusec:

1. Clone o repositório do Horusec em seu ambiente;
2. Acesse a pasta onde clonou o repositório
3. Rode o comando `make install` para subir todas as aplicações web.

A seguir, você encontra todos os comandos que deve executar do passo 1 ao 3:

```bash
git clone https://github.com/ZupIT/horusec.git

cd horusec

make install
```


## **Acesso aos serviços do Horusec**

Caso você tenha realizado os passos anteriores, basta acessar o link para visualizar as telas da aplicação web que está sendo oferecida pelo serviço[Horusec-Manager](/docs/pt-br/web/services/manager) em [http://localhost:8043](http://localhost:8043). 


{{% alert color="info" %}}
Lembrando que, no arquivo de configuração no início desta seção, você encontra todos os serviços do Horusec que vão ser executados e expostos dentro da sua máquina.
{{% /alert %}}

Para casos de teste o horusec disponibiliza um email e senha padrão para você acessar a plataforma que é:

```text
email: dev@example.com
password: Devpass0*
```

{{% alert color="info" %}}
Todos os serviços backend são expostos utilizando **network_mode: "host"** verifique se as [**configurações do Docker estão habilitadas**](https://docs.docker.com/network/host/) para fazer uso desta funcionalidade.
{{% /alert %}}

## **Imagens**
Hoje o Horusec disponibiliza todas as suas imagens no [**dockerhub**](https://hub.docker.com/u/horuszup) para você utilizá-las.

* [**horuszup/horusec-manager**](https://hub.docker.com/r/horuszup/horusec-manager)
* [**horuszup/horusec-auth**](https://hub.docker.com/r/horuszup/horusec-auth)
* [**horuszup/horusec-account**](https://hub.docker.com/r/horuszup/horusec-account)
* [**horuszup/horusec-api**](https://hub.docker.com/r/horuszup/horusec-api)
* [**horuszup/horusec-analytic**](https://hub.docker.com/r/horuszup/horusec-analytic)
* [**horuszup/horusec-migration**](https://hub.docker.com/r/horuszup/horusec-migration)
* [**horuszup/horusec-messages**](https://hub.docker.com/r/horuszup/horusec-messages) (obrigatório apenas se estiver utilizando o [**serviço de mensageria**](/docs/pt-br/tutorials/how-to-enable-disable-messaging-service))
* [**horuszup/horusec-webhook**](https://hub.docker.com/r/horuszup/horusec-webhook) (obrigatório apenas se estiver utilizando o [**serviço de mensageria**](/docs/pt-br/tutorials/how-to-enable-disable-messaging-service))

![](/docs/ptbr/web/installing/docker-compose/0-installing.gif)

## **Avisos importantes**

{{% alert color="warning" %}}
1. Todas as configurações que o Horusec disponibiliza em seu [**docker-compose.yaml**](https://github.com/ZupIT/horusec/blob/master/deployments/docker-compose.yaml) são padrões, assim como seus dados. Por isso, é recomendado que você altere algumas informações (como usuário e senha de banco de dados) ao utilizar esse serviço em um ambiente de produção.


2. O Horusec está sempre em atualização e correção de imagens. Para saber qual imagem utilizar em cada versão específica, acesse nossas [**release-notes**](https://github.com/ZupIT/horusec/releases) as versões corretas de cada serviço

3. Em virtude da [**nova política de acesso para realizar download de imagens publicas do dockerhub**](https://docs.docker.com/docker-hub/download-rate-limit/), é recomendado que você suba as imagens em um registro de sua preferência para não ter imprevistos no futuro.
{{% /alert %}}
