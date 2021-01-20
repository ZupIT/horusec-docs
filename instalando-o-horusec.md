---
description: >-
  Nesta seção, você encontra orientações para instalar o Horusec de acordo com
  seu sistema operacional.
---

# Instalando o Horusec

### **MAC ou Linux**

Instalação: 

```text
curl -fsSL https://horusec.io/bin/install.sh | bash
```

### **Windows**

Instalação:

```bash
curl "https://horusec.io/bin/latest/win_x64/horusec.exe" -o "./horusec.exe" && ./horusec.exe version
```



{% hint style="info" %}
Se você precisa fazer o download para uma versão/sistema operacional específico. Nesse caso, os sistemas operacionais suportados são:

* linux\_x86
* linux\_x64
* mac\_x64
* win\_x86
* win\_x64

\*\*\*\*👉[**A última versão disponível**](https://horusec.io/bin/version-cli-latest.txt)\*\*\*\*

\*\*\*\*👉\*\*\*\*[**Todas as versões disponíveis**](http://horusec.io/bin/all-version-cli.txt)\*\*\*\*
{% endhint %}

### **Instalação Manual**

Faça download manualmente escolhendo seu sistema operacional e a versão que deseja:

**MAC ou Linux:**

```text
https://horusec.io/bin/$versão/$sistema_operacional/horusec
```

**Windows:**

```text
https://horusec.io/bin/$versão/$sistema_operacional/horusec.exe

```

**Exemplo: https://horusec.io/bin/v1-1-0/win\_x64/horusec.exe**

## Usando Horusec como imagem docker

Outra forma de realizar suas análises é através de uma imagem docker que você pode rodar localmente ou utilizar em sua pipeline veja abaixo alguns exemplos:

#### Iniciando imagem com comando run:

Quando você inicializa a imagem com o comando de `run` basta executar com o comando que você deseja

```text
docker run -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/src horuszup/horusec-cli:latest horusec start -p /src -P $(pwd)
```

Este é um exemplo utilizando a pipeline do [**aws code build**](adicionando-o-horusec-em-sua-pipeline.md).

{% hint style="danger" %}
ATENÇÃO! Quando se usa o Horusec em imagem docker é necessário criar um volume bidirecional, verifique se é possível em seu sistema operacional!
{% endhint %}

## **Próximos passos**

Nesta seção, você fez a instalação do Horusec no seu projeto. Para continuar lendo sobre o produto: 

\*\*\*\*👉 ****Vá para seção ****[**usando o Horusec** ](usando-o-horusec.md)se quiser orientações de uso da ferramenta. 

👉 Vá para seção [**adicionando o Horusec em sua pipeline**](adicionando-o-horusec-em-sua-pipeline.md) ****caso queira ir direto para aplicação da ferramenta na sua esteira de desenvolvimento. 

\*\*\*\*

