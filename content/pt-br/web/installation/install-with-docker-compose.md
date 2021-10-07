---
title: "Instale utilizando Docker-Compose"
weight: 10
description: >-
  Nesta seção, você encontra informações de instalar a aplicação web do Horusec utilizando Docker-Compose.
---

## **O que é?** 

O [**Docker-Compose**](https://docs.docker.com/compose/) é uma ferramenta que configura os serviços de seu aplicativo, além de definir e executar aplicações Docker em vários contêineres. Você cria e inicia todos os serviços de sua configuração com um único comando.

Com essa instalação você pode utilizar a aplicação web do Horusec vinculada ao seu ambiente usando o Docker-Compose.

{{% alert color="warning" %}} 
Não é recomendado instalar o Horusec utilizando o Docker-Compose em ambientes de produção, para isso [**instale com o Helm**]({{< ref path="/web/installation/install-with-helm.md" lang="pt-br">}}) ou [**com o Operator**]({{< ref path="/web/installation/install-with-operator/overview.md" lang="pt-br">}}).
{{% /alert %}} 


## **Requisitos**

Veja os requisitos na seção [**Configuração do seu ambiente**]({{< ref path="/web/set-up.md" lang="pt-br">}}) section.  


## **Configuração**

O Horusec disponibiliza um **arquivo de configuração** com todas as opções padrão para você configurar o seu ambiente. 

{{% alert color="info" %}}
Esse arquivo deve ser usado apenas no cenário de testes, não utilize no ambiente de produção. 
{{% /alert %}}

- Você pode obter o [**arquivo de configuração**](https://github.com/ZupIT/horusec-platform/blob/main/deployments/compose/compose.yaml) no repositório do Horusec.

Siga os passos para configurar: 

**Passo 1.** Clone o repositório do Horusec em seu ambiente:
```bash
git clone https://github.com/ZupIT/horusec-platform.git

```

**Passo 2.** Acesse a pasta onde  você clonou o repositório:

```bash
cd horusec-platform
```
**Passo 3.** Rode o comando `make install` para subir todas as aplicações web:

```bash
make install
```

## **Acesso aos serviços do Horusec**

Acesse o [**http://localhost:8043**]({{< ref path="http://localhost:8043" lang="pt-br">}}) para visualizar as telas da aplicação web, elas são mostradas pelo serviço [**Horusec-Manager**]({{< ref path="/web/services/manager" lang="pt-br">}}).


{{% alert color="info" %}}
No arquivo de configuração, você encontra todos os serviços do Horusec que são  executados e expostos dentro da sua máquina.
{{% /alert %}}

## **Testes**
Para casos de teste, o Horusec disponibiliza um e-mail e senha padrão para você acessar a plataforma, veja abaixo:

```text
email: dev@example.com
password: Devpass0*
```

Para alterar ou desabilitar o usuário padrão do sistema basta seguir [**o tutorial**]({{< ref path="/tutorials/how-to-enable-disable-default-user" lang="pt-br">}})

{{% alert color="info" %}}
Todos os serviços backend são expostos utilizando **network_mode: "host"**. Verifique se as suas [**configurações do Docker estão habilitadas**](https://docs.docker.com/network/host/) para você usar essa funcionalidade.
{{% /alert %}}

## **Imagens**
Hoje o Horusec disponibiliza todas as suas imagens no [**Dockerhub**](https://hub.docker.com/u/horuszup) para você utilizá-las, veja abaixo: 

* [**horuszup/horusec-manager**](https://hub.docker.com/r/horuszup/horusec-manager)
* [**horuszup/horusec-auth**](https://hub.docker.com/r/horuszup/horusec-auth)
* [**horuszup/horusec-core**](https://hub.docker.com/r/horuszup/horusec-core)
* [**horuszup/horusec-api**](https://hub.docker.com/r/horuszup/horusec-api)
* [**horuszup/horusec-analytic**](https://hub.docker.com/r/horuszup/horusec-analytic)
* [**horuszup/horusec-migration**](https://hub.docker.com/r/horuszup/horusec-migration)
* [**horuszup/horusec-vulnerability**](https://hub.docker.com/r/horuszup/horusec-vulnerability)
* [**horuszup/horusec-messages**](https://hub.docker.com/r/horuszup/horusec-messages) (obrigatório apenas se estiver utilizando o [**serviço de email**]({{< ref path="/tutorials/how-to-enable-disable-messaging-service" lang="pt-br">}})
* [**horuszup/horusec-webhook**](https://hub.docker.com/r/horuszup/horusec-webhook)

![](/docs/ptbr/web/installing/docker-compose/0-installing.gif)

# **Avisos importantes**

{{% alert color="warning" %}}
1. Todas as configurações que o Horusec disponibiliza em seu [**docker-compose.yaml**](https://github.com/ZupIT/horusec-platform/blob/main/deployments/compose/compose.yaml) são padrões, assim como seus dados. Por isso, é recomendado que você altere algumas informações (como usuário e senha de banco de dados) ao utilizar esse serviço em um ambiente de produção.


2. O Horusec está sempre em atualização e correção de imagens. Para saber qual imagem utilizar em cada versão específica, acesse a página de [**Release Notes**](https://github.com/ZupIT/horusec-platform/releases).

3. Com a [**nova política de acesso para realizar download de imagens públicas do Dockerhub**](https://docs.docker.com/docker-hub/download-rate-limit/), recomendamos que você suba as imagens em um registro de sua preferência para evitar problemas.

4. Quando você habilita o serviço de mensageria, é necessário que ele conecte ao seu serviço de e-mail. Para isso, adicione no serviço **"horusec-messages"** as seguintes variáveis de ambiente: 
- HORUSEC_SMTP_USERNAME="username do serviço de e-mail";
- HORUSEC_SMTP_PASSWORD="senha do serviço de e-mail";
- HORUSEC_SMTP_ADDRESS: "endereço do serviço de e-mail";
- HORUSEC_SMTP_HOST: "host do serviço de e-mail";
- HORUSEC_SMTP_PORT: "porta do serviço de e-mail".
{{% /alert %}}



### Leia mais 
- [**Com usar o Horusec sem o Docker?**]({{< ref path="/tutorials/how-to-use-horusec-without-docker" lang="pt-br">}})
