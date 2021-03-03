---
title: "FAQ"
linkTitle: "FAQ"
weight: 51
type: list
description: >-
  In this section, you will find frequently asked questions about Horusec.
---

### **What languages does Horusec support?**
You can check the documentation [all available languages](/docs/cli/analysis-tools/overview/)

### **What is Horusec's 2021 roadmap?**
- Phase 0: Support for all horusec-cli features into horusec-vscode (Q1)
- Phase 1: Support for the Theia(VsCode Web) (Q1)
- Phase 2: Support to Flutter, Dart, Bash, Shell, Elixir, Cloujure e Scala in analysis (Q1)
- Phase 3: New service to manager vulnerabilities founds (Q2)
- Phase 4: Dependency analysis for all supported languages (Q3)
- Phase 5: SAST with MVP Semantic Analysis (Q4)
- Phase 6: DAST with MVP symbolic analysis (Q4)

### **Is it possible to add Horusec as IDE plugin?**
Yes, we already have a VSCode one.

### **O Horusec roda localmente, sem nenhuma dependecia de servidor ou algo assim?**
Sim, usando nossa CLI

### **Quando rodo o horusec localmente via CLI como vejo as vulnerabilidades no manager?**
Sim, Basta seguir nossa documentação para [instalar a aplicação web do horusec](/docs/web/installing/)

### **O horusec depende de algo para rodar localmente via CLI ?**
Não, é opcional o uso do docker e git para aprimorar a análise

### **Qual a diferença entre o Horusec e qualquer ferramenta de análise de qualidade de código?**
O Horusec é uma ferramenta de análise de segurança buscando possíveis vazamentos e vulnerabilidades expostas em sua aplicação, enquanto uma ferramenta de qualidade de código garante que seu código tenha uma boa qualidade e um bom desempenho, mas não garante a segurança?

### **É possível subir toda a estrutura do horusec na minha infra pessoal?**
Sim, basta seguir nosso tutorial "instalando o horusec em minha infra"

### **Como envio exporto o output do horusec em arquivo?**
Basta seguir nosso exemplo exportando output para o tipo [json](/docs/cli/resources/#example-4-using-to-get-the-json-exit) ou tipo [sonarqube](/docs/cli/resources/#example-5-using-to-get-sonarqube-exit)
