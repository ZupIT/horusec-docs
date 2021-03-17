---
title: Como rodar a aplicação web em outro host?
weight: 13
description: Nesta seção, você encontra o tutorial para rodar a aplicação web do Horusec em uma máquina virtual
---

---

No Horusec você consegue realizar um teste rápido para entender e como a aplicação trabalha e como adequá-la ao seu ambiente. É possível fazer isso com a marquina virtual ou mudar o host. Para fazer isso, siga os passos abaixo: 

#### **Passo 1: Instale a aplicação web no seu ambiente**
Se você ainda não instalou, cheque todo o processo [**nessa seção**](/docs/pt-br/web/installing). 

#### **Passo 2: Checar os serviços não iniciados**
Alguns serviços não são iniciados por padrão, como por exemplo [Horusec-Messages](/docs/pt-br/web/services/messages) e o [Horusec-Webhook](/docs/pt-br/web/services/webhook). 

Após instalar você pode perceber que alguns serviços por padrão **não são inciados** como por exemplo o [Horusec-Messages](/docs/pt-br/web/services/messages) e o [Horusec-Webhook](/docs/pt-br/web/services/webhook). Isto é devido ao serviço de mensageria esta configurado para estar desabilitado, caso você necessite realizar o uso destes serviços basta [visualizar mais neste tutorial](/docs/pt-br/tutorials/how-to-enable-disable-messaging-service).

#### **Passo 3: Configure o Horusec-Manager**

{{% alert color="info" %}}
Se, por exemplo, você tentar acessar o [Horusec-Manager](/docs/pt-br/web/services/manager) do seu navegador e não aparecer nenhum resultado. É porque quando você sobe a aplicação e tenta acessar por meio de um host desconhecido o Horusec por padrão tenta realizar a comunicação por meio do IP `127.0.0.1`, com isso a comunicação entre os serviços sempre será localmente.
{{% /alert %}}


Se você mudar o host da sua máquina ou instalar a aplicação em uma máquina virtual, é preciso configurar o Horusec-Manager novamente, somente assim ele irá entender qual o destino das aplicações que você hospedou. 

Para fazer isso:
- Acesse o serviço;
- Altere as variáveis de ambiente;
- Reinicie a aplicação;


### **Exemplo utilizando docker-compose**

Quando você utiliza o comando `make install` ele executa o [docker-compose.yaml](https://github.com/ZupIT/horusec/blob/master/deployments/docker-compose.yaml) padrão do Horusec. 
O Horusec-Manager está sendo executado com a seguinte configuração: 

```yaml
...
  horusec-manager:
    image: horuszup/horusec-manager:latest
    restart: always
    container_name: horusec-manager
    ports:
      - "8043:8080"
    environment:
      REACT_APP_HORUSEC_ENDPOINT_API: ${REACT_APP_HORUSEC_ENDPOINT_API}
      REACT_APP_HORUSEC_ENDPOINT_ANALYTIC: ${REACT_APP_HORUSEC_ENDPOINT_ANALYTIC}
      REACT_APP_HORUSEC_ENDPOINT_ACCOUNT: ${REACT_APP_HORUSEC_ENDPOINT_ACCOUNT}
      REACT_APP_HORUSEC_ENDPOINT_AUTH: ${REACT_APP_HORUSEC_ENDPOINT_AUTH}
...
```

A partir disso, basta você exportar as variáveis referente aos serviços onde estão sendo hospedados e instalar novamente o Horusec, para este cenário seria:

```bash
export REACT_APP_HORUSEC_ENDPOINT_API="http:\/\/YOUR_HOST:8000" && \
export REACT_APP_HORUSEC_ENDPOINT_ANALYTIC="http:\/\/YOUR_HOST:8005" && \
export REACT_APP_HORUSEC_ENDPOINT_ACCOUNT="http:\/\/YOUR_HOST:8003" && \
export REACT_APP_HORUSEC_ENDPOINT_AUTH="http:\/\/YOUR_HOST:8006" && \
make install
```
