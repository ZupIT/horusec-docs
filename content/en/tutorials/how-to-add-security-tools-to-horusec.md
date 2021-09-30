---
title: How to add a new security tool to Horusec?
weight: 4
description: In this section, you will find how to add security tools to Horusec.
---

## **How to add a new security too?**

Horusec works as a centralized analysis tool using different vulnerabilitie’s scans. You can also add one, if you prefer and it will contribute to the open-source project or even in your fork. 

Follow the steps below to add it: 

### **Step 1: Create a Docker image**

Horusec uses docker to run the analysis tools, which avoids configuration and environment problems. So all tools used have their respective docker images.

This image must have the desired tool installed. The output of this container should be as clean as possible, or a JSON with the found vulnerabilities.

They are separated by language, for example: 

* `horuszup/horusec-go`;
* `horuszup/horusec-python`;
* `horuszup/horusec-elixir`.

If the tool you want to add is in a language that Horusec already has an image, you only need to add it to the existing dockerfile.

See the example below:

```
FROM python:alpine

RUN pip install bandit
```

{{% alert color="info" %}}
The image must contain only the necessary, so it won't get too big.
{{% /alert %}}

### **Step 2: Create a Formatter and a Config**

For each docker image, it is necessary to have a configuration file. The **formatter** is the code responsible for getting the container output and transforming it into the Horusec standard object, adding the workdir configuration, getting the commit author and other functionalities.

The file `internal/services/formatters/python/bandit/config.go` has the commands that it will be executed in the container to analyze the code. 

Check out below a container config example: 

```go
package bandit

const CMD = `
		{{WORK_DIR}}
    bandit -r . -f json 2> /dev/null > results.json
    jq -j -M -c . results.json
  `
```

- The code that will be executed on the container need to have the `{{WORK_DIR}}` in the beginning. This section will be replaced by a specific path on the project that will be analysed if you want to. 

- Create a code that will read the container output and transform it on the Horusec pattern format. 

- All formats must follow the pattern and implement a `IFormatter` interface in the `internal/services/formatters/interface.go` file.

### **Step 3: Update the Enums**

You will also need to add a new tool in the accepted enum's tools. If it is a language that is not yet supported, it will also be necessary to add it to the enum of languages.

Follow the steps below to update: 

**Step 1.** Add in the tool's enum in [**Horusec-DevKit**](https://github.com/ZupIT/horusec-devkit) project in the directory:
```
 -pkg/
 ---enums/
 -----tools/
 -------tools.go
```
Add a new language, for example:
```go

const (
  ...
  Bandit Tool = "Bandit"
)
```
And change the method `func Values() []Tool` with the new tool.

**Step 2.** **If it is a language not yet supported by Horusec** add the new language in [**Horusec-DevKit**](https://github.com/ZupIT/horusec-devkit) project in the directory:

```
 -pkg/
 ---enums/
 -----languages/
 -------language.go
```
You now need to update the methods in the same file, with the new language: 

* `func Values() []Language`
* `func mapEnableLanguages() map[string]Language`
* `func MapLanguagesEnableInCLI() map[Language]string`


**Step 3.** Add the new image Horusec will execute in your analysis in[**Horusec-CLI**](https://github.com/ZupIT/horusec) project in the directory:

```
 -internal/
 ---enums/
 -----images/
 -------images.go
```

See an example: 

```go
const (
  ...
  Python = "horuszup/horusec-python:v1.0.0"
  ...
)
```
Now, change the method `MapValues() map[languages.Language]string` with the new language and image. 

- After that, add the new language in the workdir functionality in[**Horusec-CLI**](https://github.com/ZupIT/horusec) project in the directory:

```
 -internal/
 ---entities/
 -----workdir/
 -------workdir.go
```
See the example below: 

```go
type WorkDir struct {
  ...
  Python     []string `json:"python"`
  ...
}
```
To finish, change the methods with the languages: 
* `func NewWorkDir() *WorkDir`
* `func (w *WorkDir) Map() map[languages.Language][]string`
* `func (w *WorkDir) setEmptyOrSliceEmptyInNilContent() *WorkDir`

**Step 4.** Add the new tool in the tool's configuration in [**Horusec-CLI**](https://github.com/ZupIT/horusec) project in the directory: 

```
 -internal/
 ---entities/
 -----toolsconfig/
 -------tools_config.go
```

Check out the example: 

```go
type ToolsConfigsStruct struct {
  ...
  Bandit ToolConfig `json:"bandit"`
  ...
}
```
Change the methods with the languages: 
* `func (t *ToolsConfigsStruct) ToMap() MapToolConfig`


### **Step 4: Call the Formatter**
Update the [**Horusec-DevKit**](https://github.com/ZupIT/horusec-devkit) version in Horusec-CLI's packages, so the project is able to extract and use the new tool and language you have added. 

After finishing the **formatter implementation**, you should call the **analyzer controller** function. 


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
func (a *Analyser) detectVulnerabilityPython(wg *sync.WaitGroup, projectSubPath string) error {
    if err := a.dockerSDK.PullImage(a.getCustomOrDefaultImage(languages.Python)); err != nil {
        return err
    }
    safety.NewFormatter(a.formatterService).StartAnalysis(projectSubPath)
    return nil
}
```


You need to add a new language to the map containing the **`detectVulnerabilityFuncs`** function. See the example:

```go
func (a *Analyser) detectVulnerabilityFuncs() map[languages.Language]func(string) {
	return map[languages.Language]func(string){
				...
		languages.Python: a.detectVulnerabilityPython,
	}
}
```


### Is it an existing language? 

If it is, just add a call for a new formatter on the **`detectVulnerability[LANGUAGE]`** existing function.

**See how it was before you add it:**

```go
func (a *Analyser) detectVulnerabilityPython(wg *sync.WaitGroup, projectSubPath string) error {
    if err := a.dockerSDK.PullImage(a.getCustomOrDefaultImage(languages.Python)); err != nil {
        return err
    }
    safety.NewFormatter(a.formatterService).StartAnalysis(projectSubPath)
    return nil
}
```
**Now, check out after you've added:**

```go
func (a *Analyser) detectVulnerabilityPython(wg *sync.WaitGroup, projectSubPath string) error {
	if err := a.docker.PullImage(a.getCustomOrDefaultImage(languages.Python)); err != nil {
		return err
	}
	spawn(wg, bandit.NewFormatter(a.formatter), projectSubPath)
	safety.NewFormatter(a.formatter).StartAnalysis(projectSubPath)
	return nil
}
```

{{% alert color="warning" %}}
All analyzes are executed in parallel.If the function performing the analysis runs only one tool is not necessary to use GO Routine or call the `spawn` function because it will already be running in parallel, but if necessary to run multiple analyzes within a it is recommended that you use the `spawn` function for each complementary analysis.

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

- Add the new tool in the `func (au *UseCases) sliceTools() []interface{}` method, like the example:
```go
func (au *UseCases) sliceTools() []interface{} {
	return []interface{}{
    ...
		tools.Bandit,
	}
}
```

- **If you added a new language** add the method `func (au *UseCases) sliceLanguages() []interface{}` as the example below:
```go
func (au *UseCases) sliceLanguages() []interface{} {
	return []interface{}{
    ...
		tools.Python,
	}
}
```

{{% alert color="success" %}}
Done! Now Horusec is integrated with your new security tool creating reports.
{{% /alert %}}
