---
title: Como rodar a aplicação web em outro host?
weight: 14
description: Nesta seção, você encontra o tutorial para rodar a aplicação web do Horusec em uma máquina virtual.
---

---
 
No Horusec você consegue realizar um teste rápido para entender e como a aplicação trabalha e como adequá-la ao seu ambiente. É possível fazer isso com a marquina virtual ou mudar o host. Para fazer isso, siga os passos abaixo:

#### **Passo 1: Instale a aplicação web no seu ambiente**
Se você ainda não instalou, [**veja a seção de como instalar**]({{< ref path="/web/installation" lang="pt-br">}}). 

#### **Passo 2: Checar os serviços não iniciados**
Alguns serviços não são iniciados por padrão, como por exemplo [**Horusec-Messages**]({{< ref path="/web/services/messages" lang="pt-br">}}).

Após instalar você pode perceber que alguns serviços por padrão **não são iniciados**. Isto acontece porque esses serviços, como o de mensageria, já vem configurado para estar desabilitado, caso você necessite realizar o uso destes serviços basta [**seguir o tutorial de como habilitar e desabilitar o serviço de emails**]({{< ref path="/tutorials/how-to-enable-disable-messaging-service" lang="pt-br">}}).

#### **Passo 3: Configure o Horusec-Manager**

{{% alert color="info" %}}
Se, por exemplo, você tentar acessar o [**Horusec-Manager**]({{< ref path="/web/services/manager" lang="pt-br">}}) do seu navegador e não aparecer nenhum resultado. É porque quando você sobe a aplicação e tenta acessar por meio de um host desconhecido o Horusec por padrão tenta realizar a comunicação por meio do IP `127.0.0.1`, com isso a comunicação entre os serviços sempre será localmente.
{{% /alert %}}

Ao entrar em seu navegador e abrir a Horusec-Manager você pode percerber que irá receber uma menssagem dizendo que alguns serviços não foram configurados corretamente, veja abaixo:

![](/docs/ptbr/tutorials/how-to-run-the-web-application-on-other-host/0-message-not-setup-host.png)


Se você mudar o host da sua máquina ou instalar a aplicação em uma máquina virtual, é preciso configurar o Horusec-Manager novamente, somente assim el irá enetender qual o destino das aplicações que você hospedou. 

Para fazer isso:
- Acesse o serviço;
- Altere as variáveis de ambiente;
- Reinicie a aplicação;


**Exemplo utilizando docker-compose**

Quando você utiliza o comando `make install` ele executa o [**compose.yaml**](https://github.com/ZupIT/horusec-platform/blob/main/deployments/compose/compose.yaml) padrão do Horusec. 
O Horusec-Manager está sendo executado com a seguinte configuração: 

```yaml
...
  horusec-manager:
    image: horuszup/horusec-manager:latest
    ports:
      - "8043:8080"
    restart: always
    container_name: horusec-manager
    environment:
      REACT_APP_HORUSEC_ENDPOINT_API: ${REACT_APP_HORUSEC_ENDPOINT_API}
      REACT_APP_HORUSEC_ENDPOINT_ANALYTIC: ${REACT_APP_HORUSEC_ENDPOINT_ANALYTIC}
      REACT_APP_HORUSEC_ENDPOINT_CORE: ${REACT_APP_HORUSEC_ENDPOINT_CORE}
      REACT_APP_HORUSEC_ENDPOINT_WEBHOOK: ${REACT_APP_HORUSEC_ENDPOINT_WEBHOOK}
      REACT_APP_HORUSEC_ENDPOINT_AUTH: ${REACT_APP_HORUSEC_ENDPOINT_AUTH}
      REACT_APP_HORUSEC_ENDPOINT_VULNERABILITY: ${REACT_APP_HORUSEC_ENDPOINT_VULNERABILITY}
...
```

A partir disso, basta você exportar as variáveis referente aos serviços onde estão sendo hospedados e instalar novamente o Horusec, para este cenário seria:

```bash
export REACT_APP_HORUSEC_ENDPOINT_API="http:\\/\\/YOUR_HOST:8000" && \
export REACT_APP_HORUSEC_ENDPOINT_ANALYTIC="http:\\/\\/YOUR_HOST:8005" && \
export REACT_APP_HORUSEC_ENDPOINT_CORE="http:\\/\\/YOUR_HOST:8003" && \
export REACT_APP_HORUSEC_ENDPOINT_WEBHOOK="http:\\/\\/YOUR_HOST:8004" && \
export REACT_APP_HORUSEC_ENDPOINT_AUTH="http:\\/\\/YOUR_HOST:8006" && \
export REACT_APP_HORUSEC_ENDPOINT_VULNERABILITY="http:\\/\\/YOUR_HOST:8001" && \
make install
```
