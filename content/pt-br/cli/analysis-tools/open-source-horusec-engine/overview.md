---
title: Visão Geral
weight: 1
description: >-
  Nesta seção, você vai encontrar mais informações sobre as ferramentas de código aberto que utilizam o motor de análise criado pelo time do Horusec.

---

---
## O que é uma ferramenta SAST?

O SAST, ou teste de segurança estática de aplicativos, é uma ferramenta que utiliza um scanner automatizado para problemas de segurança em seu código fonte ou artefato binário.

O principal objetivo é identificar rapidamente, dentro do ciclo de vida de desenvolvimento, qualquer possível ameaça à sua infraestrutura e os dados do seu usuário.

{{% alert color="info" %}}
Importante lembrar que nenhuma ferramenta SAST encontra vulnerabilidades reais, já que ela nunca executa realmente o programa que está sendo analisado. Por isso, você ainda tem de continuar testando seus aplicativos com métodos mais tradicionais, como **pentesting**, além de quaisquer outros testes que você possa executar.
{{% /alert %}}

## Por que criar minha ferramenta SAST com tantas disponíveis no mercado?

O principal benefício em escrever o seu próprio SAST está na possibilidade de você aplicar todo o conhecimento adquirido com seu próprio aplicativo para construção e melhoria da sua ferramenta, tornando-a mais assertiva de acordo com suas necessidades.

Claro que, no início, as ferramentas disponíveis no mercado terão mais regras e casos de uso cobertos se comparada ao seu SAST, mas isso pode mudar se você expandir as técnicas de sua ferramenta.

## Como o motor do Horusec auxilia na criação da minha própria ferramenta SAST?

Atualmente, a única técnica integrada que o motor do Horusec utiliza é a de correspondência de padrão de sintaxe (**pattern matching**), que permite descobrir os erros mais comuns que você pode deixar em sua base de código.

Mesmo assim, a principal vantagem do mecanismo está na extensão e na possibilidade de utilizar múltiplas técnicas em uma só análise.

Para isso, são usados três componentes simples: 

1. Unit
2. Rule
3. Finding

Esses componentes podem ser facilmente estendidos para atender às suas necessidades e permitem expandir a funcionalidade do motor com novas técnicas, ainda assim respeitando um solo comum para todos eles.


## Os principais componentes

### 1. Unit

É o componente mais importante, pois uma unidade é uma parte do seu código que faz sentido ser analisada como uma só. Sendo assim, cada unidade é vista como um escopo léxico: você pode imaginar, por exemplo, um namespace do C++ ou uma classe Java.

Para analisar o componente, o mecanismo do Horusec trata todos os arquivos e códigos dentro de uma só unidade e só será capaz de cruzar qualquer referência dentro de uma única unidade.

A equipe do Horusec está trabalhando em uma análise léxica mais profunda e complexa entre as unidades e ainda mais profunda dentro delas, [então qualquer ajuda é bem-vinda!](https://github.com/ZupIT/horusec-engine/issues)

### 2. Rule

Esta é a única parte de componente que o motor precisa que você informe suas próprias regras.

A versão FOSS do Horusec tem muitas regras que você pode usar, mas esta interface está aqui exatamente para que você aprenda mais sobre como problemas de segurança se manifestam em sua sintaxe de linguagem favorita e, portanto, como identificá-los com sua ferramenta.

### 3. Finding

Esta é uma parte fundamental da sua ferramenta, pois é com o componente Finding que você realmente extrai informações úteis do código fonte que está sendo analisado.

A estrutura atual é focada na simplicidade, mas o time do Horusec está trabalhando para implementá-la seguindo a especificação [SARIF](https://github.com/oasis-tcs/sarif-spec) para que você possa ter controle completo de onde importa seus dados.


### Exemplos

Veja, a seguir, uma análise simples de uma string de memória:

```go
	var exampleGoFile = `
	package version

	import (
		"github.com/ZupIT/horusec/development-kit/pkg/utils/logger"
		"github.com/spf13/cobra"
	)

	type IVersion interface {
		CreateCobraCmd() *cobra.Command
	}

	type Version struct {
	}

	func NewVersionCommand() IVersion {
		return &Version{}
	}

	func (v *Version) CreateCobraCmd() *cobra.Command {
		return &cobra.Command{
			Use:     "version",
			Short:   "Actual version installed of the horusec",
			Example: "horusec version",
			RunE: func(cmd *cobra.Command, args []string) error {
				logger.LogPrint(cmd.Short + " is: ")
				return nil
			},
		}
	}
`

	var textUnit TextUnit = TextUnit{}
	goTextFile, err := NewTextFile("example/cmd/version.go", []byte(exampleGoFile))

	if err != nil {
		t.Error(err)
	}

	textUnit.Files = append(textUnit.Files, goTextFile)

	var regularMatchRule TextRule = TextRule{}
	regularMatchRule.Type = Regular
	regularMatchRule.Expressions = append(regularMatchRule.Expressions, regexp.MustCompile(`cmd\.Short`))

	rules := []engine.Rule{regularMatchRule}
	program := []engine.Unit{textUnit}

	findings := engine.Run(program, rules)

	for _, finding := range findings {
		t.Log(finding.SourceLocation)
	}
```