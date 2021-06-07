---
title: Como adicionar uma nova ferramenta usando Horusec-engine?
weight: 3
description: Nesta seção, você encontra o tutorial para adicionar ferramentas pelo Horusec-engine.
---

---

O Horusec permite que você adicione ferramentas à sua stack usando o próprio motor \([**Horusec-engine**](https://github.com/ZupIT/horusec-engine)\). 

## **Como fazer?**
Para incluir uma nova ferramenta de análise ao [**Horusec-CLI**](https://github.com/ZupIT/horusec), siga os passos abaixo:

### **Passo 1: Crie as regras do motor**
Você precisa criar regras para que o motor do Horusec funcione. Elas são regexes que detectam a vulnerabilidades.

Os regexes possuem tipos, veja abaixo quais:

| Tipo            | Descrição                                                                                                                                                                                                                                                    |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| OrMatch         | Essas são regras mais compreensivas, o que pode ter mais de um padrão a ser manifesto, por isso o nome. O motor irá realizar a lógica OU a operação para cada um dos RegExps registrados.                                                               |
| Regular         | É bem similar ao OrMatch, mas contém múltiplos caminhos para detectar o mesmo padrão.                                                                                                                                                       |  
| AndMatch        | Essas regras precisam de um arquivo para manifestar múltiplos padrões para serem considerados como algo a ser reportado. No entanto, o motor realiza a operação lógica em cada RegExps registrado, para garantir que todas as condições foram alcançadas.                 |  
| NotMatch        | São regras que precisam que o arquivo manifeste nenhum padrão e com isso ser considerado como algo a ser reportado. Portanto, a engine realiza a operação lógica em cada uma das RegExps cadastradas para garantir que todas as condições não foram encontradas.    |  


Alguns exemplos dessas regras podem ser encontrados no projeto [Horusec-CLI](https://github.com/ZupIT/horusec), no diretório:
internal/services/engines
```
 -internal/
 ---services/
 -----engines/
```

### **Passo 2: Crie o formatter**

Você precisa chamar o motor passando as regras e formatar para o padrão Horusec. Para isso, é necessário criar o **formatter**, veja como no exemplo abaixo:

```go

func NewFormatter(service formatters.IService) formatters.IFormatter {
	return formatters.NewDefaultFormatter(service, csharp.NewRules(), languages.CSharp)
}

```

O exemplo pode ser encontrado nesses caminhos:
```
 -internal/
 ---services/
 -----fomatters/
 -------chsarp/
 ---------horuseccsharp/
 -----------fomatter.go
```

#### Como o arquivo funciona? 

Nesse arquivo foi criado um formatter default, utilizado em todas as engines do Horusec. As regras e a linguagem foram alteradas para ajustar as que o formatter suporta. 

### **Passo 3: Atualize os Enums se for uma nova linguagem**

Você também precisa adicionar a linguagem que ainda não é suportada pelo Horusec ao Enum de linguagens.

Veja os passos para a atualização abaixo:

**Se for uma linguagem que o Horusec ainda não tem suporte**: 

1. Adicione a nova linguagem no projeto [**Horusec-DevKit**](https://github.com/ZupIT/horusec-devkit) no diretório:
```
 -pkg/
 ---enums/
 -----languages/
 -------language.go
```
2. Além de adicionar o enum, você precisa **atualizar os métodos** no mesmo arquivo com a nova linguagem:

* `func Values() []Language`
* `func mapEnableLanguages() map[string]Language`
* `func MapLanguagesEnableInCLI() map[Language]string`


3. Depois, adicione a nova linguagem na funcionalidade **workdir** no projeto [Horusec-CLI](https://github.com/ZupIT/horusec) no diretório:

```
 -internal/
 ---entities/
 -----workdir/
 -------workdir.go
```
Como por exemplo:

```go
type WorkDir struct {
  ...
  Csharp []string `json:"csharp"`
  ...
}
```
4. E para finalizar, altere os métodos com as linguagens:

* `func NewWorkDir() *WorkDir`
* `func (w *WorkDir) Map() map[languages.Language][]string`
* `func (w *WorkDir) setEmptyOrSliceEmptyInNilContent() *WorkDir`

### **Passo 4: Chamando o Formatter**
Se você adicionou uma nova linguagem, atualize a versão do [**Horusec-DevKit**](https://github.com/ZupIT/horusec-devkit) nos pacotes da Horusec-CLI, para que o projeto consiga extrair e utilizar a nova linguagem.

Logo em seguida, você deve chamar a função no **analyzer controller**.

Veja o seguinte path:

```
 -internal
 ---controller
 -----analyzer
 -------analyzer.go
```

Quando o Horusec inicia sua análise, ele identifica as linguagens do projeto e faz um comparativo se tem alguma linguagem que está halitada a realizar uma análise. Caso tenha, ele irá enviar para o **analyzer controller** quais são as linguagens que devem ser acionadas na análise.
Depois disso o **analyzer controller** faz um controle de processos para saber se todas as ferramentas finalizaram suas análises. Então, dentro de cada `detectVulnerability[LANGUAGE]` tem o total de processos que representa a quantidade de ferramentas para cada linguagem.

Veja abaixo como chamar a implementação do formatter no **analyzer controller**.

### É uma nova linguagem?

Se sim, será necessário criar uma nova função para detectar as vulnerabilidades daquela linguagem. Veja o exemplo abaixo:

```go
func (a *Analyzer) detectVulnerabilityCsharp(projectSubPath string) {
	const TotalProcess = 1
	a.monitor.AddProcess(TotalProcess)
	go horuseccsharp.NewFormatter(a.formatterService).StartAnalysis(projectSubPath)
}
```


Você também precisa adicionar uma nova linguagem ao mapa que contém a função  **`mapDetectVulnerabilityByLanguage`**. Veja o exemplo: 

```go
func (a *Analyzer) mapDetectVulnerabilityByLanguage() map[languages.Language]func(string) {
	return map[languages.Language]func(string){
				...
		languages.Csharp: a.detectVulnerabilityCsharp,
	}
}
```


### É uma linguagem existente?

Se sim, apenas adicione a chamada do novo formatter na função já existente **`detectVulnerability[LANGUAGE]`**.

**Veja como era antes de você adicionar:**

```go
func (a *Analyzer) detectVulnerabilityCsharp(projectSubPath string) {
	const TotalProcess = 1
	a.monitor.AddProcess(TotalProcess)

	if err := a.dockerSDK.PullImage(a.getCustomOrDefaultImage(languages.CSharp)); err != nil {
		a.setErrorAndRemoveProcess(err, TotalProcess)
		return
	}

	go scs.NewFormatter(a.formatterService).StartAnalysis(projectSubPath)
}
```
**Veja depois que você adicionou:**

```go
func (a *Analyzer) detectVulnerabilityCsharp(projectSubPath string) {
	const TotalProcess = 2
	a.monitor.AddProcess(TotalProcess)
	go horuseccsharp.NewFormatter(a.formatterService).StartAnalysis(projectSubPath)

	if err := a.dockerSDK.PullImage(a.getCustomOrDefaultImage(languages.CSharp)); err != nil {
		a.setErrorAndRemoveProcess(err, TotalProcess)
		return
	}

	go scs.NewFormatter(a.formatterService).StartAnalysis(projectSubPath)
}
```

{{% alert color="warning" %}}
Essas funções devem ser realizadas em **go routines** e para cada nova go routine é necessário atualizar o monitor, como no exemplo anterior, passando o número total de chamadas.

Se você esquecer esse passo, o Horusec irá finalizar antes da ferramenta terminar a análise.

Nesse cenário o motor do Horusec não tem nenhum dependência com o docker. Não é necessário aguardar fazer download da imagem, ela pode ser executada antes mesmo de iniciar, assim quando o download finalizar as demais ferramentas que tem a dependência com o docker serão executadas.
{{% /alert %}}

### **Passo 5: Atualize as validações**

Agora, para finalizar, é necessário atualizar as validações do Horusec.

Quando a **Horusec-CLI** envia uma análise para a sua aplicação web, alguns projetos realizam validações para conferir se os dados estão de acordo com o esperado.

Para isso vá até o projeto [**Horusec-Platform**](https://github.com/ZupIT/horusec-platform) e atualize no serviço **API** o caso de uso para aceitar a nova ferramenta e a linguagem no diretório:
```
 -api/
 ---internal/
 -----usecases/
 -------analysis/
 ---------analysis.go
```

- **Se você adicionou uma linguagem nova,** adicione no metodo `func (au *UseCases) sliceLanguages() []interface{}` como por exemplo:
```go
func (au *UseCases) sliceLanguages() []interface{} {
	return []interface{}{
    ...
		tools.Csharp,
	}
}
```

{{% alert color="success" %}}
Pronto! Agora o Horusec está integrado com sua nova ferramenta de segurança e gerando reports.
{{% /alert %}}
