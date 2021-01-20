# Como adicionar ferramentas usando Horusec-engine?

O Horusec também permite que você adicione ferramentas usando seu próprio motor \([**Horusec-engine**](https://github.com/ZupIT/horusec-engine)\) à sua stack. Para incluir uma nova ferramentas de análises ao horusec-cli, siga esses passos:

### **1. Crie um novo CLI** 

Para fazer isso, basta copiar um dos CLIs existentes e renomear seguindo o padrão horusec-{nome-do-cli} 

Exemplos: 

* [**horusec-java**](https://github.com/ZupIT/horusec/blob/master/horusec-java)
* [**horusec-kotlin**](https://github.com/ZupIT/horusec/blob/master/horusec-kotlin)
* [**horusec-leaks**](https://github.com/ZupIT/horusec/blob/master/horusec-leakse)

### **2. Crie regras** 

É necessário criar as regras que valerão para o novo CLI antes dele ser, de fato, criado. Veja mais neste ****[**exemplo**](https://github.com/ZupIT/horusec/tree/master/development-kit/pkg/engines).

Se for um cliente que estiver usando o motor, você pode simplesmente fazer a importação sem ter necessidade de uma imagem docker. Você pode encontrar um exemplo seguindo este caminho:

![](https://lh3.googleusercontent.com/NygPCob59o2k9D2Fk7uG-AmwKXxUOb6nIZzOP8CJ4icfKELWbAnmp5EBc0MgLrLnBP7DYkD5QaFY3Wnmqmq3mmhstVe9wa403dLzasDAKqN8vOmqjklZno7CEqd5a4Hbu-RhQEcC)

Você só vai precisar importar as regras e fazer a análise, como no exemplo abaixo:

![](https://lh6.googleusercontent.com/2tmuCbBwVPQj33RZvVIWRgTnWWPe13fbbl6M9WxeiKqLteAIYjMhTDc9AEbJnxMQFX37VLkkzzLDrva4AVum99_ituhqX-WXAr4NtVrN4PJqaVTH8QmS3kHhOQu2PcYg2gc5EJwB)

Você encontra os exemplos da regra neste caminho:

![](https://lh3.googleusercontent.com/uPCrSnkIhM95mmyHBxvox-fnxfbgpWarNXfZz0r1mhh9mghwJHyS5R_ULFCBf5D273v5kAu26JEE_lB1P4ahoWzlveQxQuiVxcCSI9wWML5ZPWEeuhxIebL8ZUu2seq3Z91BTa6Y)

### 3**. Atualize o CLI com as novas regras** 

Depois de criar as regras, atualize o seu CLI para finalizar a configuração. Veja mais no exemplo a seguir. 

{% hint style="info" %}
Para usar este exemplo no seu projeto, substitua o texto entre chaves com as suas definições novas do seu CLI. 
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

### **4. Atualize o dockerfile** 

Ao final das configurações do CLI, você precisa retornar aos arquivos no docker para atualizá-lo com as novas definições. 

Exemplo: 

* [**horusec-java dockerfile**](https://github.com/ZupIT/horusec/blob/master/horusec-java/deployments/Dockerfile)

### **5. Crie um novo formatter** 

Por fim, adicione a nova ferramenta do Horusec-CLI. Para isso, basta seguir o tutorial  a partir da página [**crie um Formatter e um Config**](como-adicionar-imagens-existentes-ao-horusec/2.-crie-um-formatter-e-um-config.md) ****até o quinto passo \(atualize validações\).

