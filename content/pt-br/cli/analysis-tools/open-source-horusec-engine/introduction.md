---
title: Introdução
weight: 10
description: >-
  Nesta seção, você vai encontrar aqui mais informações das ferramentas de código aberto que utilizam o motor de análise criado pelo time do horusec.

---

---
## Mas o que é uma ferramenta SAST, afinal?
Uma ferramenta de teste de segurança estática de aplicativos é um scanner automatizado para problemas de segurança em seu código-fonte ou artefato binário
O principal objetivo é identificar, o mais rápido possível em seu ciclo de vida de desenvolvimento, qualquer possível ameaça à sua infraestrutura
e os dados do seu usuário.Uma coisa importante a lembrar é que nenhuma ferramenta SAST encontrou vulnerabilidades reais, porque a ferramenta nunca
realmente executa o programa que está sendo analisado, portanto, você ainda tem que continuar testando seus aplicativos com os mais tradicionais
pentesting e quaisquer outros testes que você possa executar.


## Com tantas ferramentas SAST por aí, por que se preocupar em corrigir a minha?
O principal benefício que você pode obter por escrever o seu é a quantidade de conhecimento sobre seu próprio aplicativo que você pode impressionar
em sua ferramenta.Claro que, nos primeiros meses, uma ferramenta de prateleira terá mais regras e mais casos de canto cobertos do que o seu
mas com a quantidade certa de dedicação para melhorar e expandir as técnicas que sua ferramenta usa, você pode facilmente superar
as ferramentas normais do mercado.

## Ok, decidi escrever minha própria ferramenta, o que esse mecanismo me ajuda?
Agora a única técnica integrada Nosso motor usa é a técnica de correspondência de padrão de sintaxe, uma técnica poderosa e simples
Para descobrir os erros mais comuns que você pode deixar em sua base de código.

Mas, como eu vou mostrar a você, a extensibilidade do motor é a principal vantagem que apresenta.

Todo o design em torno da nossa solução foi focado em extensibilidade e iteroperabilidade de técnicas em uma única análise.

Para conseguir isso, usamos três componentes simples, mas muito expressivos que podem ser facilmente estendidos para atender às suas necessidades
e permite expandir a funcionalidade do motor com novas técnicas, ainda assim com um solo comum para todos eles.


## Os principais componentes

### Unit
O mais importante deles, uma unidade é uma parte do seu código que faz sentido ser analisada como uma só.Portanto, cada unidade é
um escopo léxico, você pode imaginar, por exemplo, um namespace C ++ de uma classe Java.O mecanismo irá ameaçar todos os arquivos e códigos dentro
uma unidade como uma coisa e só será capaz de cruzar qualquer referência dentro de uma única unidade.
Estamos trabalhando em uma análise lexical mais profunda e complexa entre as unidades e ainda mais profunda dentro das unidades, [então qualquer ajuda é bem vinda!](https://github.com/ZupIT/horusec-engine/issues)

### Rule
Essa é a única parte que o motor não vai te ajudar, porque você tem que fornecer suas próprias regras.A versão FOSS do Horusec
ferramenta tem muitas regras que você pode usar, mas esta interface está aqui exatamente para encorajá-lo a aprender mais sobre como segurança
problemas se manifestam em sua sintaxe de linguagem favorita e, portanto, como identificá-los com sua ferramenta.

### Finding
A descoberta é uma parte fundamental da sua ferramenta, pois é com ela que você realmente extrai informações úteis do código-fonte que está sendo analisado.
A estrutura agora é focada na simplicidade, mas estamos trabalhando para implementá-la seguindo a especificação [SARIF](https://github.com/oasis-tcs/sarif-spec), para que você possa ter controle completo de onde importa seus dados.


## Exemplos

Uma análise simples de uma string de memória:
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