---
title: Instalando o Horusec
weight: 1
description: >-
 Nesta seção, você vai encontrar mais orientações para instalar o Horusec de acordo com seu sistema operacional.
---

---

## Requisitos

Estes são os requisitos para você usar o Horusec localmente: 

{{% alert color="info" %}}
* docker
* git
* docker-compose/helm
* golang
* rabbitmq
* postgres
* account-of-email (opcional)

Se você quiser utilizar o horusec-cli: 

* docker
* git (Obrigatório se você estiver usando busca por histórico de projetos no git)
{{% /alert %}}



## **MAC ou Linux**

Instalação:


   ```text
curl -fsSL https://horusec.io/bin/install.sh | bash
```     


## **Windows**

Instalação:

   ```text
curl "https://horusec.io/bin/latest/win_x64/horusec.exe" -o "./horusec.exe" && ./horusec.exe version
```  

{{% alert color="info" %}}
Se você precisa fazer o download para uma versão/sistema operacional específico. Nesse caso, os sistemas operacionais suportados são:

* linux_x86
* linux_x64
* mac_x64
* win_x86
* win_x64

👉 [**A última versão disponível**](https://horusec.io/bin/version-cli-latest.txt)

👉 [**Todas as versões disponíveis**](https://horusec.io/bin/all-version-cli.txt)

{{% /alert %}}

## **Instalação Manual**

Faça download manualmente escolhendo seu sistema operacional e a versão que deseja:

**Mac ou Linux:**

```text
https://horusec.io/bin/$versão/$sistema_operacional/horusec
```

**Windows:**

```text
https://horusec.io/bin/$versão/$sistema_operacional/horusec.exe
```

**Exemplo: https://horusec.io/bin/v1-1-0/win_x64/horusec.exe**


-------

## **Usando Horusec como imagem docker**

Outra forma de realizar suas análises é através de uma imagem docker que você pode rodar localmente ou utilizar em sua pipeline veja abaixo alguns exemplos:

#### **Iniciando imagem com comando run:**

Quando você inicializa a imagem com o comando de `run` basta executar com o comando que você deseja:

```text
docker run -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/src horuszup/horusec-cli:latest horusec start -p /src -P $(pwd)
```

Este é um exemplo utilizando a pipeline do [**aws code build**](../adicionando-o-horusec-em-sua-pipeline/#aws-code-build).


{{% alert color="danger" %}}

ATENÇÃO! Quando se usa o Horusec em imagem docker é necessário criar um volume bidirecional, verifique se é possível em seu sistema operacional!

{{% /alert %}}

## **Próximos Passos**

Nesta seção, você fez a instalação do Horusec no seu projeto. Para continuar lendo sobre o produto: 

👉 Vá para seção [**usando o Horusec** ](/docs/pt-br/primeiros-passos/usando-o-horusec/)se quiser orientações de uso da ferramenta.

👉 Vá para seção [**adicionando o Horusec em sua pipeline**](/docs/pt-br/primeiros-passos/adicionando-o-horusec-em-sua-pipeline/) caso queira ir direto para aplicação da ferramenta na sua esteira de desenvolvimento. 