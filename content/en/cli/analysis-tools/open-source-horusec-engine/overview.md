---
title: Overview
weight: 47
description: In this section, you will find more information about open source tools that uses Horusec engine created by Horusec's team.
---

---

## **What is a SAST tool?**  

SAST or Static Application Security Testing is a tool that uses automated scanner to check security problems in your source code or binary artifact. 

The main goal is to quickly identify, inside the development life cycle, any possible threat to the infrastructure and the user data. 

{{% alert color="info" %}}
It is important to remember that any SAST tool find real vulnerabilities, because it never really runs the program being analyzed. You still have to continue to test your applications with the most traditionals methods like **pentesting**, besides any other test you may execute. 
{{% /alert %}}

## **Why create my SAST tool with some other available in the market?** 

The main benefit is the possibility to use all your acquired knowledge with your own application to build and improve your tool, making it more assertive according to your needs.

In the beginning, the available tools in the market may have more rules and use cases covered if you compare to your SAST, but this can change if you expand your tools techniques. 


## **How does Horusec-engine helps the creation of my own SAST tool?** 

Now, the only technique integrated that Horusec-engine uses is the default syntax (**pattern matching**), that allows you to find out common errors in your code.

The main mechanism's advantage is on the extension and the possibility to use multiple techniques in only one analysis. 

For that, three simple components are used: 


1. Unit
2. Rule
3. Finding

These components can be easily extended to fulfill your needs and it allows to expand the engine functionality with new techniques, respecting a common ground for all of them. 

## **The main components** 

### 1. Unit

It is the most important component, one unit is part of your code that makes sense being analyzed as only one. Therefore, each unit is seen as lexical scope: you can imagine, for example, a C++ namespace or a Java class.  

To analyze the component, Horusec's mechanism treats all files and code in one unit and it will only be able to cross references inside one unit. 

Horusec's team is working in a more deeper and complex lexical analysis between units, [**you can help us here**](https://github.com/ZupIT/horusec-engine/issues)! 


### 2. Rule

This is the only part of the component that the engines needs you to inform your own rules.

Horusec's FOSS version has lots of rules that you can use it, but this inteface is here to help you learn more how security problems manifest in your favorite syntax language, and, thus how to identify them with your tool. 


### 3. Finding

This is the fundamental part of your tool, because it is the Finding component that you really extract useful information from your source code that it has been analyzed. 

The current structure is focused in the simplicity, but Horusec's team is working to implement it following the [**SARIF**](https://github.com/oasis-tcs/sarif-spec) specification in order to give you full control from where you import your data. 


### Examples

Check below, a simple analysis of a memory string: 

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