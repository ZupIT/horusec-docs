---
title: Como adicionar ferramentas usando Horusec-engine?
weight: 3
description: Nesta seção, você encontra o tutorial para adicionar ferramentas pelo Horusec-engine.
---

---

O Horusec permite que você adicione ferramentas à sua stack usando o próprio motor \([**Horusec-engine**](https://github.com/ZupIT/horusec-engine)\). 

## **Como fazer?** 
Para incluir uma nova ferramenta de análise ao horusec-cli, siga os passos abaixo:

#### **Passo 1: Clone o projeto**
Clone o projeto do Horusec em sua máquina local:

```bash
git clone https://github.com/ZupIT/horusec.git
```

#### **Passo 2: Crie um novo CLI**

Copie um dos CLIs existentes e renomeie-o seguindo o padrão **horusec-{nome-do-cli}**. Como por exemplo: 

* [**horusec-java**](https://github.com/ZupIT/horusec/blob/master/horusec-java)
* [**horusec-kotlin**](https://github.com/ZupIT/horusec/blob/master/horusec-kotlin)
* [**horusec-leaks**](https://github.com/ZupIT/horusec/blob/master/horusec-leakse)

#### **Passo 3: Crie as regras** 

Você precisa criar as regras para o novo CLI antes dele ser, de fato, criado. Veja mais [**nesse exemplo**](https://github.com/ZupIT/horusec/tree/master/development-kit/pkg/engines).

Se um cliente estiver usando o motor, você pode fazer a importação sem a imagem docker. Veja um exemplo seguindo o caminho abaixo: 

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

Depois disso, você deve importar as regras e fazer a análise, como no exemplo abaixo:

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


{{% alert color="info" %}}
Você você consegue acessar os exemplos das regras nesse caminho:

```
 -horusec
 --development-kit
 ---pkg
 ----engines
```
{{% /alert %}}



#### **Passo 4: Atualize o CLI com as novas regras** 

Agora, atualize o seu CLI para finalizar a configuração. 
Veja o exemplo abaixo: 


{{% alert color="warning" %}}

Para usar este exemplo no seu projeto, substitua o texto entre chaves com as novas definições do seu CLI. 
{{% /alert %}}

```go
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

#### **Passo 5: Atualize o dockerfile** 

Agora, atualize os arquivos no docker com as novas definições.
Veja o exemplo abaixo: 

* [**horusec-java dockerfile**](https://github.com/ZupIT/horusec/blob/master/horusec-java/deployments/Dockerfile)

### **Passo 6: Crie um novo formatter** 

 Crie um **Formatter** e um **Config**  para adicionar a nova ferramenta do Horusec-CLI, para isso siga o [**tutorial**](docs/pt-br/tutorials/how-to-add-existing-images-to-horusec/create-a-formatter-and-config/) e atualize as validações.

