---
title: How to add tools using Horusec-engine? 
weight: 27
---

Horusec also allows you to add tools using its own engine \([**Horusec-engine**](https://github.com/ZupIT/horusec-engine)\) to your stack. To do so, follow the steps:

### **1. Create a new CLI**

You can create a new CLI by copying some of the existents CLIs and rename it following the pattern basta copiar um dos CLIs existentes e renomear seguindo o padrão **horusec-{name-of-the-cli}.**

Examples: 

* [**horusec-java**](https://github.com/ZupIT/horusec/blob/master/horusec-java)
* [**horusec-kotlin**](https://github.com/ZupIT/horusec/blob/master/horusec-kotlin)
* [**horusec-leaks**](https://github.com/ZupIT/horusec/blob/master/horusec-leakse)


### **2. Create rules** 

It is necessary to create rules to be used with the new CLI before you actually create one.  Check out more on this [**example**](https://github.com/ZupIT/horusec/tree/master/development-kit/pkg/engines).

If the engine’s user happens to be a client, you can import directly without needing a dock image. You can find an example by following this path:

```
 -horusec
 --horusec-cli
 ---internal
 ----services
 -----fomatters
 -----interface.go
 ------csharp
 -------fomatter.go
```


You can simply import the rules and perform the analysis, as shown in the example below:

```go
type IAnalysis interface {
    StartAnalysis() error
}

type Analysis struct {
    configs      *config.Config
    serviceRules csharp.Interface // Change the import to get your respective rules
}

func NewAnalysis(configs *config.Config) IAnalysis {
return &Analysis{
        configs:      configs,
        serviceRules: csharp.NewRules(), // Change the import to get your respective rules
    }
}

func (a *Analysis) StartAnalysis() error {
    textUnit, err := a.serviceRules.GetTextUnitByRulesExt(a.configs.GetProjectPath())
    if err != nil {
        return err
    }
    
    return engine.RunOutputInJSON(textUnit, a.getAllRules(), a.configs.GetOutputFilePath())
}

func (a *Analysis) getAllRules() []engine.Rule {
    return a.serviceRules.GetAllRules()
}

```

You can find rule examples following this path:

```
 -horusec
 --development-kit
 ---pkg
 ----engines
```


### **3. Update the CLI with the new rules** 

After you create the rules, update your CLI to finish the configuration. See more on the following example.

{% hint style="info" %}
To use this example on your project, replace the text between curles braces with your new CLI definitions.
{% endhint %}

```text
// horusec-{name-of-the-cli}/cmd/app/main.go
package main

import (
	"os"

	"github.com/ZupIT/horusec/development-kit/pkg/cli_standard/cmd"
	"github.com/ZupIT/horusec/development-kit/pkg/cli_standard/cmd/run"
	"github.com/ZupIT/horusec/development-kit/pkg/cli_standard/cmd/version"
	"github.com/ZupIT/horusec/development-kit/pkg/cli_standard/config"
	"github.com/ZupIT/horusec/development-kit/pkg/engines/{THE-NAME-OF-THE-YOUR-ENGINE-RULES}/analysis" 
	"github.com/ZupIT/horusec/development-kit/pkg/utils/logger"
	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:   "horusec-{THE-NAME-OF-YOUR-CLI}",
	Short: "Horusec-{THE-NAME-OF-YOUR-CLI} CLI",
	RunE: func(cmd *cobra.Command, args []string) error {
		logger.LogPrint("Horusec Java Command Line Interface")
		return cmd.Help()
	},
	Example: `horusec-{THE-NAME-OF-YOUR-CLI} run`,
}

var configs *config.Config

// nolint
func init() {
	configs = config.NewConfig()
	cmd.InitFlags(configs, rootCmd)
}

func main() {
	controller := analysis.NewAnalysis(configs)
	rootCmd.AddCommand(run.NewRunCommand(configs, controller).CreateCobraCmd())
	rootCmd.AddCommand(version.NewVersionCommand().CreateCobraCmd())

	if err := rootCmd.Execute(); err != nil {
		os.Exit(1)
	} else {
		os.Exit(0)
	}
}
```

### **4. Update the dockerfile** 

At the end of the CLI settings, you must come back to the docker files to update them with the new definitions.

Example: 

* [**horusec-java dockerfile**](https://github.com/ZupIT/horusec/blob/master/horusec-java/deployments/Dockerfile)

### **5. Create a new formatter** 

And finally, add the new Horusec-CLI tool. To do so, just follow the tutorial from the page [**create a formatter and config** ](how-to-add-existing-images-to-horusec/2.-creating-formatter-and-config.md)until the last step \(update validations\).
