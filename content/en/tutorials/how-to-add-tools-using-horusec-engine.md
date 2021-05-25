---
title: How to add a new tool using Horusec-Engine? 
weight: 3
description: In this section, you will find how to add existing images to Horusec-engine.
---

---

Horusec allows you to add tools its own engine. \([**Horusec-engine**](https://github.com/ZupIT/horusec-engine)\). 

## **How can you do it?**
To include a new analysis tool to [**Horusec-CLI**](https://github.com/ZupIT/horusec), follow the steps below: 

### **Step 1: Create the engine rules**
You need to create rules so the Horusec engine works. These rules are regexes that detects vulnerabilites.

The regexes have types, see on the table below what they are:

| Type            | Description                                                                                                                                                                                                                                                    |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| OrMatch         | These are more comprehensive rules, that can have more than one pattern to be manifested, that’s why this name. The engine will make the logic OR an operation to each of the registred RegExps.                                                               |
| Regular         | It is similar to OrMatch, but has multiple paths to detect the same pattern.                                                                                                                                                       |  
| AndMatch        | These rules need a file to manifest multiple patterns to be considered as something to be reported. However, the engine makes a logical operation in each registered RegExps to ensure that all conditions have been reached.                 |  
| NotMatch        | These rules need a file to manifest any pattern and with that it can be considered as something to be reported. However, the engine performes logical operation in each registered RegExps to make sure all the conditions were not found.   |  


Some examples of these rules can be found in the project [**Horusec-CLI**](https://github.com/ZupIT/horusec), in the directory:

internal/services/engines
```
 -internal/
 ---services/
 -----engines/
```

### **Step 2: Create a formatter**

You need to call an engine passing the rules and format the Horusec pattern. To do so, it is necessary to create a **formatter**, see the example below: 

```go

package horuseccsharp

import (
	"github.com/ZupIT/horusec-devkit/pkg/enums/languages"
	"github.com/ZupIT/horusec-devkit/pkg/enums/tools"
	"github.com/ZupIT/horusec-devkit/pkg/utils/logger"
	engine "github.com/ZupIT/horusec-engine"
	"github.com/ZupIT/horusec/internal/enums/engines"
	"github.com/ZupIT/horusec/internal/helpers/messages"
	"github.com/ZupIT/horusec/internal/services/engines/csharp"
	"github.com/ZupIT/horusec/internal/services/formatters"
)

type Formatter struct {
	formatters.IService
	csharp.Interface
}

func NewFormatter(service formatters.IService) formatters.IFormatter {
	return &Formatter{
		service,
		csharp.NewRules(),
	}
}

func (f *Formatter) StartAnalysis(projectSubPath string) {
	if f.ToolIsToIgnore(tools.HorusecEngine) {
		logger.LogDebugWithLevel(messages.MsgDebugToolIgnored + tools.HorusecEngine.ToString())
		return
	}

	f.SetAnalysisError(f.execEngineAndParseResults(projectSubPath), tools.HorusecEngine, projectSubPath)
	f.LogDebugWithReplace(messages.MsgDebugToolFinishAnalysis, tools.HorusecEngine, languages.CSharp)
	f.SetToolFinishedAnalysis()
}

func (f *Formatter) execEngineAndParseResults(projectSubPath string) error {
	f.LogDebugWithReplace(messages.MsgDebugToolStartAnalysis, tools.HorusecEngine, languages.CSharp)

	findings, err := f.execEngineAnalysis(projectSubPath)
	if err != nil {
		return err
	}

	return f.ParseFindingsToVulnerabilities(findings, tools.HorusecEngine, languages.CSharp)
}

func (f *Formatter) execEngineAnalysis(projectSubPath string) ([]engine.Finding, error) {
	textUnit, err := f.GetTextUnitByRulesExt(f.GetProjectPathWithWorkdir(projectSubPath))
	if err != nil {
		return nil, err
	}

	allRules := append(f.GetAllRules(), f.GetCustomRulesByLanguage(languages.CSharp)...)
	return engine.RunMaxUnitsByAnalysis(textUnit, allRules, engines.DefaultMaxUnitsPerAnalysis), nil
}
```

The example can be found in these paths:

```
 -internal/
 ---services/
 -----fomatters/
 -------leaks/
 ---------horusecleaks/
 -----------fomatter.go
```

### **How does the file work?** 
See the steps below to understand how the formatter works:

1. It performs the tool construction in the `NewFormatter` method based on the formatters and the rules implementation you have created; 
2. After that, it starts an analysis with the `StartAnalysis` method;
3. It verifies if the tool must be ignored in that analysis, if it is, the analysis finishes here. 
4. Then it starts a vulnerability search, according to the rules you've created;
5. After this search, it will return a list with all the found vulnerabilities; 
6. This list will be converted to Horusec's centered vulnerabilities object and added in the analysis to be showed in the end; 
7. To finish, it verifies if there is an unknown error and it shows to the user. After that, ends the tool's analysis removing the monitor's process. 


### **Step 3: Update the Enums if it is a new language**

You can also add the languages not supported by Horusec to the Enum of languages. 

See the steps to update below: 

**If it is a language Horusec does not support yet** 
- Follow the steps:

1. Add a new language in [**Horusec-DevKit**](https://github.com/ZupIT/horusec-devkit) project in the directory:
```
 -pkg/
 ---enums/
 -----languages/
 -------language.go
```
2. After adding the enum , you need to **update the methods** in the same file with the new language:

* `func Values() []Language`
* `func mapEnableLanguages() map[string]Language`
* `func MapLanguagesEnableInCLI() map[Language]string`


3. After that, add the new language in the **workdir** functionality in [**Horusec-CLI**](https://github.com/ZupIT/horusec) project in the directory:

```
 -internal/
 ---entities/
 -----workdir/
 -------workdir.go
```
See the example:

```go
type WorkDir struct {
  ...
  Csharp []string `json:"csharp"`
  ...
}
```
4. To finish, change the methods with the languages:

* `func NewWorkDir() *WorkDir`
* `func (w *WorkDir) Map() map[languages.Language][]string`
* `func (w *WorkDir) setEmptyOrSliceEmptyInNilContent() *WorkDir`

### **Step 4: Call the formatter**
If you've added a new language, update the [**Horusec-DevKit**](https://github.com/ZupIT/horusec-devkit) version in the Horusec-CLI packages, so the project is able to extract and use the new language.

After that, you have to call the function in the **analyzer controller**.

See the following path: 

```
 -internal
 ---controller
 -----analyser
 -------analyser.go
```
When Horusec starts the analysis, it identifies the project's languages and compares if there is one able to perform an analysis. It there is one, it will send to the **analyzer controller** which languages must be enabled in the analysis. 
Then, the **analyzer controller** makes a process control to know if all the tools finished its analysis. So, inside each `detectVulnerability[LANGUAGE]` has the total amount of processes representing the number of tools for each language.

See below how to call the formatter implementation in the **analyzer controller**.

### Is it a new language? 

If yes, it will be necessary to create a new function to detect the vulnerabilities in the language. See the example below:


```go
func (a *Analyser) detectVulnerabilityCsharp(projectSubPath string) {
	const TotalProcess = 1
	a.monitor.AddProcess(TotalProcess)
	go horuseccsharp.NewFormatter(a.formatterService).StartAnalysis(projectSubPath)
}
```


You can also add a new language to the map containing the **`mapDetectVulnerabilityByLanguage`** function. See the example:


```go
func (a *Analyser) mapDetectVulnerabilityByLanguage() map[languages.Language]func(string) {
	return map[languages.Language]func(string){
				...
		languages.Csharp: a.detectVulnerabilityCsharp,
	}
}
```


### Is it an existing language? 

If it is, just add a call for a new formatter on the **`detectVulnerability[LANGUAGE]`** existing function.

**See how it was before you add it:**

```go
func (a *Analyser) detectVulnerabilityCsharp(projectSubPath string) {
	const TotalProcess = 1
	a.monitor.AddProcess(TotalProcess)

	if err := a.dockerSDK.PullImage(a.getCustomOrDefaultImage(languages.CSharp)); err != nil {
		a.setErrorAndRemoveProcess(err, TotalProcess)
		return
	}

	go scs.NewFormatter(a.formatterService).StartAnalysis(projectSubPath)
}
```
**Now, check out after you've added:**

```go
func (a *Analyser) detectVulnerabilityCsharp(projectSubPath string) {
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
These functions must be made on go routines and for each new **go routine**, it is necessary to update the monitor, as in the previous example, passing the total call numbers. If you forget this step, Horusec will end before the tool ends the analysis.

In this scenario, Horusec engine does not have any dependency with docker. It is not necessary to wait to download the image, it can be executed before the download starts. When the download ends, the other tools that have this dependency with docker will be executed.
{{% /alert %}}

### **Step 5: Update the validations**

Now, to finish, it is necessary update Horusec’s validations.
When **Horusec-CLI** sends an analysis to the web application, some projects perform validations to check if the data is what you expected.

For that, go to [**Horusec-Platform**](https://github.com/ZupIT/horusec-platform) project and update in the **API** service the use case, in order to accept the new tool and language in the directory: 
```
 -api/
 ---internal/
 -----usecases/
 -------analysis/
 ---------analysis.go
```

- **If you added a new language** add the method `func (au *UseCases) sliceLanguages() []interface{}` as the example below: 
```go
func (au *UseCases) sliceLanguages() []interface{} {
	return []interface{}{
    ...
		tools.Csharp,
	}
}
```

{{% alert color="success" %}}
Done! Now Horusec is integrated with your new security tool creating reports.
{{% /alert %}}
