---
title: Como adicionar ferramentas usando Horusec-engine?
weight: 25
description: Você vai encontrar aqui as informações necessárias para adicionar ferramentas pelo Horusec-engine.
---

---

O Horusec também permite que você adicione ferramentas usando um próprio motor \([**Horusec-engine**](https://github.com/ZupIT/horusec-engine)\) à sua stack. Para incluir uma nova ferramentas de análises ao horusec-cli, siga esses passos:

### **1. Crie um novo CLI** 

Para fazer isso, basta copiar um dos CLIs existentes e renomear seguindo o padrão **horusec-{nome-do-cli}** 

Exemplos: 

* [**horusec-java**](https://github.com/ZupIT/horusec/blob/master/horusec-java)
* [**horusec-kotlin**](https://github.com/ZupIT/horusec/blob/master/horusec-kotlin)
* [**horusec-leaks**](https://github.com/ZupIT/horusec/blob/master/horusec-leakse)

### **2. Crie regras** 

É necessário criar as regras que valerão para o novo CLI antes dele ser, de fato, criado. Veja mais neste [**exemplo**](https://github.com/ZupIT/horusec/tree/master/development-kit/pkg/engines).

Se for um cliente que estiver usando o motor, você pode simplesmente fazer a importação sem ter a necessidade de uma imagem docker. Você pode encontrar um exemplo seguindo este caminho:

![](https://lh3.googleusercontent.com/NygPCob59o2k9D2Fk7uG-AmwKXxUOb6nIZzOP8CJ4icfKELWbAnmp5EBc0MgLrLnBP7DYkD5QaFY3Wnmqmq3mmhstVe9wa403dLzasDAKqN8vOmqjklZno7CEqd5a4Hbu-RhQEcC)

Depois, você só vai precisar importar as regras e fazer a análise, como no exemplo abaixo:

![](https://lh6.googleusercontent.com/2tmuCbBwVPQj33RZvVIWRgTnWWPe13fbbl6M9WxeiKqLteAIYjMhTDc9AEbJnxMQFX37VLkkzzLDrva4AVum99_ituhqX-WXAr4NtVrN4PJqaVTH8QmS3kHhOQu2PcYg2gc5EJwB)

Você encontra os exemplos da regra neste caminho:

![](https://lh3.googleusercontent.com/uPCrSnkIhM95mmyHBxvox-fnxfbgpWarNXfZz0r1mhh9mghwJHyS5R_ULFCBf5D273v5kAu26JEE_lB1P4ahoWzlveQxQuiVxcCSI9wWML5ZPWEeuhxIebL8ZUu2seq3Z91BTa6Y)

### **3. Atualize o CLI com as novas regras** 

Depois de criar as regras, atualize o seu CLI para finalizar a configuração. Veja mais no exemplo a seguir. 

{{% alert color="info" %}}

Para usar este exemplo no seu projeto, substitua o texto entre chaves com as suas definições novas do seu CLI. 

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

### **4. Atualize o dockerfile** 

Ao final das configurações do CLI, você precisa retornar aos arquivos no docker para atualizá-lo com as novas definições. 

Exemplo: 

* [**horusec-java dockerfile**](https://github.com/ZupIT/horusec/blob/master/horusec-java/deployments/Dockerfile)

### **5. Crie um novo formatter** 

Por fim, adicione a nova ferramenta do Horusec-CLI. Para isso, basta seguir o tutorial  a partir da página [**crie um Formatter e um Config**](como-adicionar-imagens-existentes-ao-horusec/2.-crie-um-formatter-e-um-config) até o quinto passo \(atualize validações\).
