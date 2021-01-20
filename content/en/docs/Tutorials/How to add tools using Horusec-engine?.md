---
title: How to add tools using Horusec-engine?
weight: 25
---

---?

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

![](https://lh3.googleusercontent.com/NygPCob59o2k9D2Fk7uG-AmwKXxUOb6nIZzOP8CJ4icfKELWbAnmp5EBc0MgLrLnBP7DYkD5QaFY3Wnmqmq3mmhstVe9wa403dLzasDAKqN8vOmqjklZno7CEqd5a4Hbu-RhQEcC)

You can simply import the rules and perform the analysis, as shown in the example below:

![](https://lh6.googleusercontent.com/2tmuCbBwVPQj33RZvVIWRgTnWWPe13fbbl6M9WxeiKqLteAIYjMhTDc9AEbJnxMQFX37VLkkzzLDrva4AVum99_ituhqX-WXAr4NtVrN4PJqaVTH8QmS3kHhOQu2PcYg2gc5EJwB)

You can find rule examples following this path:

![](https://lh3.googleusercontent.com/uPCrSnkIhM95mmyHBxvox-fnxfbgpWarNXfZz0r1mhh9mghwJHyS5R_ULFCBf5D273v5kAu26JEE_lB1P4ahoWzlveQxQuiVxcCSI9wWML5ZPWEeuhxIebL8ZUu2seq3Z91BTa6Y)

### 3**. Update the CLI with the new rules** 

After you create the rules, update your CLI to finish the configuration. See more on the following example.

{{% alert color="info" %}}
To use this example on your project, replace the text between curles braces with your new CLI definitions.
{{% /alert %}}

```text
// horusec-{name-of-the-cli}//app/main.go
package main

import (
	"os"

	"github.com/ZupIT/horusec/development-kit/pkg/cli_standard/"
	"github.com/ZupIT/horusec/development-kit/pkg/cli_standard//run"
	"github.com/ZupIT/horusec/development-kit/pkg/cli_standard//version"
	"github.com/ZupIT/horusec/development-kit/pkg/cli_standard/config"
	"github.com/ZupIT/horusec/development-kit/pkg/engines/{THE-NAME-OF-THE-YOUR-ENGINE-RULES}/analysis" 
	"github.com/ZupIT/horusec/development-kit/pkg/utils/logger"
	"github.com/spf13/cobra"
)

var root = &cobra.Command{
	Use:   "horusec-{THE-NAME-OF-YOUR-CLI}",
	Short: "Horusec-{THE-NAME-OF-YOUR-CLI} CLI",
	RunE: func( *cobra.Command, args []string) error {
		logger.LogPrint("Horusec Java Command Line Interface")
		return .Help()
	},
	Example: `horusec-{THE-NAME-OF-YOUR-CLI} run`,
}

var configs *config.Config

// nolint
func init() {
	configs = config.NewConfig()
	.InitFlags(configs, root)
}

func main() {
	controller := analysis.NewAnalysis(configs)
	root.AddCommand(run.NewRunCommand(configs, controller).CreateCobra())
	root.AddCommand(version.NewVersionCommand().CreateCobra())

	if err := root.Execute(); err != nil {
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

And finally, add the new Horusec-CLI tool. To do so, just follow the tutorial from the page [**create a formatter and config** ](how-to-add-existing-images-to-horusec/2.-creating-formatter-and-config)until the last step \(update validations\).
