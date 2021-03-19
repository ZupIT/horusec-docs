---
title: How to add a new tool using Horusec-engine? 
weight: 11
description: In this section, you will find how to add existing images to Horusec.
---

Horusec also allows you to add tools using its own engine \([**Horusec-engine**](https://github.com/ZupIT/horusec-engine)\).

## **How to do?**

To include a new analysis tool to horusec-cli, follow these steps: 

### **Step 1: Create the engine rules**

You need to create rules so the Horusec engine works. These rules are regexes that detects vulnerabilites.

The regexes have types, see on the table below what they are:

| Type            | Description                                                                                                                                                                                                                                                    |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| OrMatch         | These are more comprehensive rules, that can have more than one pattern to be manifested, that's why this name. The engine will make the logic OR an operation to each of the RegExps registrados.                                                               |
| Regular         | It is similar to OrMatch, but has multiple paths to detect the same pattern.                                                                                                                                                       |  
| AndMatch        | These rules need a file to manifest multiple patterns to be considered as something to be reported. However, the engine makes a logical operation in each registered RegExps to ensure that all conditions have been reached.               |

Some examples of these rules can be found on the path separated for language and type, check out:

```
 -horusec
 --development-kit
 ---pkg
 ----engines
```

### **2. Create a formatter** 

You need to call an engine passing the rules and format the Horusec pattern. To do so, it is necessary to create a **formatter**, see how on the example below: 


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

The example can be found on these paths: 

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
It is necessary to change the tools and language enum, as well as import the rules created and pass a `RunMaxUnitsByAnalysis` function argument.
{{% /alert %}}


### **Step 3: Call the formatter** 

Now, call the formater, that is responsible to make the analysis. 

On the following path, you find a file with the name `analyser.go`:

```
 -horusec
 --horusec-cli
 ---internal
 ----controllers
 -----analyser
 ------analyser.go
```

Create on this file the function below: 

```
func (a *Analyser) detectVulnerabilityDart(projectSubPath string) {
a.monitor.AddProcess(1)
go horusecDart.NewFormatter(a.formatterService).StartAnalysis(projectSubPath)
}
```

You are adding a new process to the `a.monitor.AddProcess(1)` counter so Horusec can wait until all the processes end. 

All the created formatter by the `NewFormatter(a.formatterService).StartAnalysis(projectSubPath)` function are called.

Once it's done, now run and test your analysis.