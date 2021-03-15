---
title: Como adicionar ferramentas de segurança ao Horusec?
weight: 4
description: Nesta seção, você encontra as orientações para adicionar ferramentas de segurança ao Horusec.
---

## **Adicionando uma ferramenta de segurança**
 
Horusec trabalha como uma ferramenta de análise centralizada usando diferentes scans de vulnerabilidade. Você também pode adicionar algum, se preferir.

Você deve seguir estes passos caso queira adicionar:
 
#### **Passo 1: Crie uma imagem Docker**
 
O Horusec usa o docker para executar as ferramentas de análise, o que evita problemas de configuração e de ambiente. Todas as ferramentas usadas tem suas respectivas imagens docker.

Essa imagem deve ter a ferramenta desejada instalada. O resultado desse container deve ser o mais limpo possível ou um JSON com as vulnerabilidades encontradas. 

Elas são separadas por linguagem, por exemplo
`horuszup/horusec-go`.

Se a ferramenta que você deseja adicionar é de uma linguagem que o Horusec já possue a imagem, você precisa apenas adicioná-la ao dockerfile já existente. 

Veja o exemplo abaixo: 
 
```
FROM python:alpine

RUN pip install flawfinder
```
 
{{% alert color="info" %}}
A imagem deve conter apenas o necessário para não ficar muito grande. 
{{% /alert %}}
 
#### **Passo 2: Crie um Formatter e um Config**

Para cada imagem do docker, é necessário ter o arquivo de configuração. O **formatter** é o código responsável por obter o output do container e transformá-lo em um objeto padrão do Horusec. Ele também adiciona a configuração workdir e obtém o autor do commit.
 
 O arquivo config possui os comandos que serão executados dentro do container para analisar o código.

Veja abaixo o exemplo de um container config: 

 
```
const CMD = `
		{{WORK_DIR}}
		flawfinder --minlevel 0 --columns --singleline --dataonly --context --csv . > /tmp/result-ANALYSISID.csv
		cat /tmp/result-ANALYSISID.csv
  `
```
- É necessário que o código que será executado no container tenha o `{{WORK_DIR}}` no ínicio. Essa seção será substituída por um caminho específico no projeto que será analisado se o usuário desejar. 

- Crie o código que irá ler o output do container e transformá-lo no formato padrão Horusec. 
 
- Todos formatos devem seguir o padrão e implementar a interface `IFormatter` no arquivo `interface.go`.
O exemplo pode ser encontrado no path abaixo: 
 
```
 -horusec
 --horusec-cli
 ---internal
 ----services
 -----fomatters
 -----interface.go
 ------c
 -------fomatter.go
```

#### **Passo 3: Atualize os Enums**

Você também precisa adicionar a nova ferramenta nos enums de ferramentas aceitas. Se for uma linguagem que ainda não é suportada pelo Horusec, será necessário adicioná-la ao enum de linguagens.

Veja os passos para a atualização abaixo: 

1. O enum de ferramentas se encontra no seguinte caminho: 
 

```
 -horusec
 --development-kit
 ---pkg
 ----enums
 -----tools
 -----languages
```

2. Adicione a nova imagem ao enum de imagem, e isso pode ser encontrado no path: 

```
 -horusec
 --horusec-cli
 ---internal
 ----enums
 -----images
 -----images.go
```


{{% alert color="info" %}}
Se for uma linguagem que o Horusec já suporta, não é necessário adicionar novas imagens. 
{{% /alert %}}

3. Adicione o nome da nova ferramenta na ferramenta do enum. 
Se for uma linguagem ainda não suportada pelo Horusec, é preciso adicioná-la ao enum de linguagens.
Veja o path para adicionar: 

```
 -horusec
 --development-kit
 ---pkg
 ----enums
 -----tools
 -----languages
```

#### 4 - Calling Formatter

Depois de terminar a **implementação do formatter**, você deve chamar a função no **analyzer controller**. 


Veja o seguinte path:

```
 -horusec
 --horusec-cli
 ---internal
 ----controller
 -----analyser
 ------analyser.go
```

### É uma nova linguagem? 

Se sim, será necessário criar uma nova função. Veja como no exemplo abaixo: 

```
 func (a *Analyser) detectVulnerabilityHCL(projectSubPath string) {
 	 a.monitor.AddProcess(1)
 	 go hcl.NewFormatter(a.formatterService).StartHCLTfSec(projectSubPath)
 }
```


Você também precisa adicionar uma nova linguagem ao mapa que contém a função  **`mapDetectVulnerabilityByLanguage`**. Veja o exemplo: 

```
 func (a *Analyser) mapDetectVulnerabilityByLanguage() map[languages.Language]func(string) {
	 return map[languages.Language]func(string){
          ...
	 	 languages.HCL:        a.detectVulnerabilityHCL,
	 }
 }
```


### É uma linguagem existente? 

Se sim, apenas adicione a chamada do novo formatter na função já existente **`detectVulnerability`**.


**Veja como era antes de você adicionar:** 

```
 func (a *Analyser) detectVulnerabilityJavascript(projectSubPath string) {
	 a.monitor.AddProcess(1)
	 go yarnaudit.NewFormatter(a.formatterService).StartJavascriptYarnAudit(projectSubPath)
 }
```
**Veja depois que você adicionou:**

```
 func (a *Analyser) detectVulnerabilityJavascript(projectSubPath string) {
	 a.monitor.AddProcess(2)
	 go yarnaudit.NewFormatter(a.formatterService).StartJavascriptYarnAudit(projectSubPath)
	 go npmaudit.NewFormatter(a.formatterService).StartJavascriptNpmAudit(projectSubPath)
 }
```

{{% alert color="warning" %}}
Essas funções devem ser realizadas em **go routines** e para cada nova go routine, é necessário atualizar o monitor, como no exemplo anterior, passando o número total de chamadas. 
Se você esquecer esse passo, o Horusec irá finalizar antes da ferramenta terminar a análise. 

{{% /alert %}}

#### **Passo 5: Atualizando validações** 

Agora, para finalizar, é necessário atualizar as validações do Horusec. Quando você receber uma análise no servidor, você precisa checar se as ferramentas e as linguagens enviadas para ele são válidas. 

Veja o path:

```
 -horusec
 --development.kit
 ---pkg
 ----usecases
 -----analysis
 ------analysis.go
```

In the analysis.go file look for the "sliceTools" and "sliceLanguages" functions.

No arquivo **`analysis.go`** você deve procurar: 

* A função **`sliceTools`** e **`sliceLanguages`**

* Agora adicione a nova ferramenta ou linguagem na array da interface de acordo com o que foi adicionado anteriormente no **enums**. 

{{% alert color="success" %}}
Pronto! Agora o Horusec está integrado com sua nova ferramenta de segurança e gerando reports. 
{{% /alert %}}
