---
title: "Usando docker compose"
linkTitle: "Usando docker compose"
weight: 10
description: >-
  Nessa seção você encontra como subir a aplicação web do horusec em seu ambiente usando docker-compose
---


## **Requisitos**
Para você utilizar o Horusec Web application com docker-compose você precisa de algumas ferramentas em seu ambiente que são:
* [docker-compose](https://docs.docker.com/compose/install/)
* [docker](https://docs.docker.com/get-docker/)

## **O que é docker-compose e como funciona ?**
Compose é uma ferramenta para definir e executar aplicativos Docker de vários contêineres. Com o Compose, você usa um arquivo YAML para configurar os serviços do seu aplicativo. Então, com um único comando, você cria e inicia todos os serviços de sua configuração.Para saber mais sobre todos os recursos do Compose, consulte a lista de recursos. [Veja mais aqui](https://docs.docker.com/compose/)

## **Configuração**
Atualmente o Horusec disponibiliza para você um arquivo de configuração com todas as opções padrões para você apenas subir em seu ambiente de forma simples e rápida além de ser **apenas recomendado para cenário de testes nunca de produção**. O arquivo de configuração se encontra [dispónivel em nosso repositório](https://github.com/ZupIT/horusec/blob/master/deployments/docker-compose.yaml)

Clone o repositório do horusec em seu ambiente entre na pasta onde clonou e rode o comando `make install` para subir todas as aplicações web como mostra os comandos abaixo:
```bash
git clone https://github.com/ZupIT/horusec.git

cd horusec

make install
```


## **Acessando**
Nesse arquivo temos todos os serviços do horusec que vão ser executados e expostos dentro da sua máquina.
Caso você tenha feito esses passos em sua máquina local basta acessar o link para visualizar as telas da aplicação web em [http://localhost:8043](http://localhost:8043)

Para casos de teste o horusec disponibiliza um email e senha padrão para você acessar a plataforma que é:
```text
email: dev@example.com
password: Devpass0*
```

{{% alert color="info" %}}
Todos os serviços backend são expostos utilizando **network_mode: "host"** verifique se suas [configurações estão habilitadas](https://docs.docker.com/network/host/) para fazer uso desta funcionalidade
{{% /alert %}}

## **Imagens**
Hoje o Horusec disponibiliza todas as suas imagens no [dockerhub](https://hub.docker.com/u/horuszup) para você utiliza-las.

* horuszup/horusec-manager:latest
* horuszup/horusec-auth:latest
* horuszup/horusec-account:latest
* horuszup/horusec-webhook:latest
* horuszup/horusec-api:latest
* horuszup/horusec-analytic:latest
* horuszup/horusec-messages:latest
* horuszup/horusec-migration:latest

## **Avisos importantes**

{{% alert color="info" %}}
Todas essas configurações que o horusec disponibiliza em seu [docker-compose.yaml](https://github.com/ZupIT/horusec/blob/master/deployments/docker-compose.yaml) são padrões e com dados padrões ao utilizar em produção é recomendável alterar usuários e acessos como usuário e senha do banco de dados dentre outros.
{{% /alert %}}

{{% alert color="info" %}}
O Horusec está sempre atualizando sa imagens e realizando correções para saber qual imagem utilizar para versão específica basta verificar em nossas [release-notes](https://github.com/ZupIT/horusec/releases) as versões corretas de cada serviço
{{% /alert %}}

{{% alert color="info" %}}
Com a [nova política de acesso para realizar download de imagens publicas do dockerhub](https://docs.docker.com/docker-hub/download-rate-limit/) recomendamos subir as imagens em um registro de sua preferencia para não ter imprevistos no futuro.
{{% /alert %}}
