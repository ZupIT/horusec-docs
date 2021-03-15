---
title: Como adicionar uma nova ferramenta usando Horusec-engine?
weight: 3
description: Nesta seção, você encontra o tutorial para adicionar ferramentas pelo Horusec-engine.
---

---

O Horusec permite que você adicione ferramentas à sua stack usando o próprio motor \([**Horusec-engine**](https://github.com/ZupIT/horusec-engine)\). 

## **Como fazer?** 
Para incluir uma nova ferramenta de análise ao horusec-cli, siga os passos abaixo:

#### **Passo 1: Crie as regras do motor**
Você precisa criar regras para que o motor do Horusec funcione. Elas são regexes que detectam a vulnerabilidades.

Os regexes possuem tipos, veja abaixo quais são:

| Tipo            | Descrição                                                                                                                                                                                                                                                    |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| OrMatch         | Essas são regras mais compreensivas, o que pode ter mais de um padrão a ser manifesto, por isso o nome. O motor irá realizar a lógica OU a operação para cada um dos RegExps registrados.                                                               |
| Regular         | É bem similar ao OrMatch, mas contém múltiplos caminhos para detectar o mesmo padrão.                                                                                                                                                       |  
| AndMatch        | Essas regras precisam de um arquivo para manifestar múltiplos padrões para serem considerados como algo a ser reportado. No entanto, o motor realiza a operação lógica em cada RegExps registrado, para garantir que todas as condições foram alcançadas.                 |  


Alguns exemplos dessas regras podem ser encontrados no path separado por linguagem e tipo, veja: 


```
 -horusec
 --development-kit
 ---pkg
 ----engines
```
#### **Passo 2: Crie o formatter**

Você precisa chamar o motor passando as regras e formatar para o padrão Horusec. 
Para isso, é necessário criar o **formatter**, veja como no exemplo abaixo: 


```
type Formatter struct {
	formatters.IService
	java.Interface
}

func NewFormatter(service formatters.IService) formatters.IFormatter {
	return &Formatter{
		service,
		java.NewRules(),
	}
}

func (f *Formatter) StartAnalysis(projectSubPath string) {
	if f.ToolIsToIgnore(tools.HorusecJava) {
		logger.LogDebugWithLevel(messages.MsgDebugToolIgnored + tools.HorusecJava.ToString())
		return
	}

	f.SetAnalysisError(f.execEngineAndParseResults(projectSubPath), tools.HorusecJava, projectSubPath)
	f.LogDebugWithReplace(messages.MsgDebugToolFinishAnalysis, tools.HorusecJava)
	f.SetToolFinishedAnalysis()
}

func (f *Formatter) execEngineAndParseResults(projectSubPath string) error {
	f.LogDebugWithReplace(messages.MsgDebugToolStartAnalysis, tools.HorusecJava)

	findings, err := f.execEngineAnalysis(projectSubPath)
	if err != nil {
		return err
	}

	return f.ParseFindingsToVulnerabilities(findings, tools.HorusecJava, languages.Java)
}

func (f *Formatter) execEngineAnalysis(projectSubPath string) ([]engine.Finding, error) {
	textUnit, err := f.GetTextUnitByRulesExt(f.GetProjectPathWithWorkdir(projectSubPath))
	if err != nil {
		return nil, err
	}

	allRules := append(f.GetAllRules(), f.GetCustomRulesByTool(tools.HorusecJava)...)
	return engine.RunMaxUnitsByAnalysis(textUnit, allRules, engineenums.DefaultMaxUnitsPerAnalysis), nil
}
```

O exemplo pode ser encontrado nesses caminhos: 

```
 -horusec
 --horusec-cli
 ---internal
 ----services
 -----fomatters
 ------java
 -------horusecjava
 --------fomatter.go
```

{{% alert color="info" %}}
É necessário trocar o enum de ferramentas e de linguagem, como também importar as regras criadas e passar um argumento da função `RunMaxUnitsByAnalysis`.
{{% /alert %}}



#### **Passo 3: Chame o formatter**

Agora, chame o formatter, que é responsável por realizar a análise. 

No caminho a seguir, você encontra o arquivo com o nome de 
`analyser.go`:

```
 -horusec
 --horusec-cli
 ---internal
 ----controllers
 -----analyser
 ------analyser.go
```

Crie nesse arquivo a função abaixo: 

```
func (a *Analyser) detectVulnerabilityDart(projectSubPath string) {
a.monitor.AddProcess(1)
go horusecDart.NewFormatter(a.formatterService).StartAnalysis(projectSubPath)
}
```

Você está adicionando um novo processo ao contador 
 `a.monitor.AddProcess(1)`, para que o Horusec possa esperar todos os processos terminarem. 

Todos os formatter criados pela função `NewFormatter(a.formatterService).StartAnalysis(projectSubPath)` serão chamados.

Feito isso, agora rode e teste sua análise.