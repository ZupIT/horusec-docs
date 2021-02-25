---
title: Como rodar a aplicação web em outro host?
weight: 13
description: Você vai encontrar aqui as informações sobre como rodar a aplicação web do Horusec em uma máquina virtual
---

---

É bastante comum realizar testes em um máquinas virtuais ou até mesmo mudar o host da sua máquina para conhecer uma aplicação, no Horusec você tem a possibilidade de realizar um teste rápido para entender como aplicação trabalhar e como adequa-la ao seu ambiente de trabalho. Mas quais passos devo seguir?

##### O primeiro passo é você realizar a **[instalação da aplicação web do horusec em seu ambiente](/docs/pt-br/web/installing)**.

Após instalar você pode perceber que alguns serviços por padrão **não são inciados** como por exemplo o [Horusec-Messages](/docs/pt-br/web/services/messages) e o [Horusec-Webhook](/docs/pt-br/web/services/webhook). Isto é devido ao serviço de mensageria esta configurado para estar desabilitado, caso você necessite realizar o uso destes serviços basta [visualizar mais neste tutorial](/docs/pt-br/tutorials/how-to-enable-disable-messaging-service).

##### Tentei acessar o [Horusec-Manager](/docs/pt-br/web/services/manager) através do meu navegador em minha maquina, mas não apareceu nenhum resultado o que fazer?

Quando você sobe a aplicação e tenta acessar através de um host desconhecido o horusec por padrão sempre tenta realizar a comunicação através do ip `127.0.0.1` com isso a comunicação entre os serviços sempre será localmente. Quando você muda o host da sua máquina ou instala a aplicação em uma máquina virtual é necessário configurar o Horusec-Manager para que ele entenda o destino onde está as aplicações que você hospedou. Para isto vá no serviço e altere suas variáveis de ambiente e reinicie a aplicação. Veja abaixo alguns exemplos

**Veja abaixo o exemplo utilizando docker-compose**

Quando você realiza o comando `make install` ele executa o [docker-compose.yaml](https://github.com/ZupIT/horusec/blob/master/deployments/docker-compose.yaml) padrão do Horusec, o Horusec-Manager está sendo executado com a seguinte configuração
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

então basta você exportar as variáveis referente aos serviços e onde estão sendo hospedados e instalar novamente o horusec, para este cenário seria:
```bash
export REACT_APP_HORUSEC_ENDPOINT_API="http:\/\/YOUR_HOST:8000" && \
export REACT_APP_HORUSEC_ENDPOINT_ANALYTIC="http:\/\/YOUR_HOST:8005" && \
export REACT_APP_HORUSEC_ENDPOINT_ACCOUNT="http:\/\/YOUR_HOST:8003" && \
export REACT_APP_HORUSEC_ENDPOINT_AUTH="http:\/\/YOUR_HOST:8006" && \
make install
```
