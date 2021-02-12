---
title: Calling Formatter
description: 'Step 4: Calling Formatter'
weight: 16
---

After completing the formatter implementation, you must call the function in the **analyzer controller**. 

See the following path: 

`horusec-cli/internal/controllers/analyser/analyser.go`

### Is it a new language?

If it is, it will be necessary to create a new function similar to this:

```go
func (a *Analyser) detectVulnerabilityHCL(projectSubPath string) {
  a.monitor.AddProcess(1)
  go hcl.NewFormatter(a.formatterService).StartHCLTfSec(projectSubPath)
}
```

You will also need to add the new language to the map contained in the **`mapDetectVulnerabilityByLanguage`** function. See the example: 

```go
func (a *Analyser) mapDetectVulnerabilityByLanguage() map[languages.Language]func(string) {
	 return map[languages.Language]func(string){
     //...
	 	 languages.HCL:        a.detectVulnerabilityHCL,
	 }
}

```

### Is it an existing language?

If it is, just add the call to the new formatter in the existing **`detectVulnerability`** function.

**See it how it was before you added:**

```go
func (a *Analyser) detectVulnerabilityJavascript(projectSubPath string) {
	 a.monitor.AddProcess(1)
	 go yarnaudit.NewFormatter(a.formatterService).StartJavascriptYarnAudit(projectSubPath)
}

```

**See it how it is after you've added:**

```go
func (a *Analyser) detectVulnerabilityJavascript(projectSubPath string) {
	 a.monitor.AddProcess(2)
	 go yarnaudit.NewFormatter(a.formatterService).StartJavascriptYarnAudit(projectSubPath)
	 go npmaudit.NewFormatter(a.formatterService).StartJavascriptNpmAudit(projectSubPath)
}

```

{{% alert color="info" %}}
Don't forget that these functions must be performed in go routines and for each new go routine, it is necessary to update the monitor, as in the previous example, passing the total of new calls. If you forget this step the Horusec will finish before the tool finishes analyze.
{{% /alert %}}