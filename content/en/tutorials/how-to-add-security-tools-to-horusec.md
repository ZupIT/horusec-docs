---
title: How to add security tools to Horusec? 
weight: 12
description: In this section, you will find how to add security tools to Horusec.
---

## **Adding one security tool**
 
Horusec works as a centralized analysis tool using different vulnerabilitie's scans. You can also add one, if you prefer.

You must follow these steps in case you want to add one:

#### **Step 1: Create a Docker image**

Horusec uses docker to run the analysis tools, which avoids configuration and environment problems. So all tools used have their respective docker images.

This image must have the desired tool installed.  The output of this container should be as clean as possible, or a JSON with the vulnerabilities found.

They are separated by language, as in the example
`horuszup/horusec-go`.

If the tool you want to add is in a language that Horusec already has an image, you only need to add it to the existing dockerfile. 

See how on the example below: 
 
```dockerfile
FROM python:alpine

RUN pip install flawfinder
```
 
{{% alert color="info" %}}
The image must contain the necessary to not get too big.
{{% /alert %}}

#### **Step 2: Create a Formatter and Config**

For each docker image, it is necessary to have a configuration file. The **formatter** is the code responsible for getting the container output and transforming it into the Horusec standard object, adding the workdir configuration and getting the commit author.
 
 The config file has commands that will be executed inside the container to analyse the code.

See the example below of a config container: 

 
```go
const CMD = `
		{{WORK_DIR}}
		flawfinder --minlevel 0 --columns --singleline --dataonly --context --csv . > /tmp/result-ANALYSISID.csv
		cat /tmp/result-ANALYSISID.csv
  `
```
- It is necessary that the code will executed on the container that has `{{WORK_DIR}}` on its beginning. This section will replaced by a specific path  on the project that will be analysed if the user want to.

- Create a code that will read the container output and transforming it on the Horusec pattern format.
 
- All formats must follow the pattern and implement a `IFormatter` interface on the `interface.go` file. 

The example can be found on the path below: 
 
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

#### **Step 3: Updating Enums**

You will also need to add a new item to the tool name in the tool's enum. If it is a language that is not yet supported, it will also be necessary to add it to the enum of languages.

See the steps below to update: 

1. The tool's enum can be found on this path:
 

```
 -horusec
 --development-kit
 ---pkg
 ----enums
 -----tools
 -----languages
```

2. Add a new image to the image's enum, that can be found on the path: 

```
 -horusec
 --horusec-cli
 ---internal
 ----enums
 -----images
 -----images.go
```


{{% alert color="info" %}}
If it is a language that Horusec supports, it's not necessary to add new images. 
{{% /alert %}}

3. Add the name of a new tool on the tool's enum. 
If it is a language that Horusec doesn't support, it is necessary to add these languages to enum.
See the path to add: 

```
 -horusec
 --development-kit
 ---pkg
 ----enums
 -----tools
 -----languages
```

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

```go
func (a *Analyser) detectVulnerabilityHCL(projectSubPath string) {
  a.monitor.AddProcess(1)
  go hcl.NewFormatter(a.formatterService).StartHCLTfSec(projectSubPath)
}
```


Você também precisa adicionar uma nova linguagem ao mapa que contém a função  **`mapDetectVulnerabilityByLanguage`**. Veja o exemplo: 

```go
func (a *Analyser) mapDetectVulnerabilityByLanguage() map[languages.Language]func(string) {
	return map[languages.Language]func(string){
		...
		languages.HCL: a.detectVulnerabilityHCL,
	}
}
```
#### **Step 4: Calling Formatter**

### Is it an existing language? 

If it is, just add a call for a new formatter on the **`detectVulnerability`** existing function.


**See how it was before you add it:** 

```go
func (a *Analyser) detectVulnerabilityJavascript(projectSubPath string) {
	a.monitor.AddProcess(1)
	go yarnaudit.NewFormatter(a.formatterService).StartJavascriptYarnAudit(projectSubPath)
}
```
**See after you've added:**

```go
func (a *Analyser) detectVulnerabilityJavascript(projectSubPath string) {
	a.monitor.AddProcess(2)
	go yarnaudit.NewFormatter(a.formatterService).StartJavascriptYarnAudit(projectSubPath)
	go npmaudit.NewFormatter(a.formatterService).StartJavascriptNpmAudit(projectSubPath)
}
```

{{% alert color="warning" %}}
These functions must be made on **go routines** and for each new go routine, it is necessary to update the monitor, as in the previous example, passing the total call numbers. 
If you forget this step, Horusec will end before the tool ends the analysis. 

{{% /alert %}}

#### **Step 5: Updating validations** 

Now, to finish, it is necessary update Horusec's validations. When you receive a server analysis, you must check if the tools and languages sent are valid. 

See the path:

```
 -horusec
 --development.kit
 ---pkg
 ----usecases
 -----analysis
 ------analysis.go
```

In the **`analysis.go`** file look for:

* Th **`sliceTools`** and **`sliceLanguages`** functions.

* Now add a new tool or language on the interface's array according to what was added previously on the **enums**. 

{{% alert color="success" %}}
Done! Now Horusec is integrated with your new security tool creating reports. 
{{% /alert %}}