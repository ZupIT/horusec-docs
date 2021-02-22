---
title: "FAQ"
linkTitle: "FAQ"
weight: 7
type: list
description: >-
  Nesta seção, você vai encontrar perguntas e respostas mais realizadas pela comunidade sobre o Horusec.
---

### **Quais são as linguagens de programação que o horusec cobre?**
Basta verificar na nossa documentação [todas as linguagens disponíveis](/docs/pt-br/cli/analysis-tools/introduction/)

### **Qual é o roadmap do horusec 2021 ?**
- Phase 0: Support for all horusec-cli features into horusec-vscode (Q1)
- Phase 1: Support for the Theia(VsCode Web) (Q1)
- Phase 2: Support to Flutter, Dart, Bash, Shell, Elixir, Cloujure e Scala in analysis (Q1)
- Phase 3: New service to manager vulnerabilities founds (Q2)
- Phase 4: Dependency analysis for all supported languages (Q3)
- Phase 5: SAST with MVP Semantic Analysis (Q4)
- Phase 6: DAST with MVP symbolic analysis (Q4)

### **Tem possibilidade de adicionar o horusec como plugins para IDE ?**
Sim, inclusive já temos para vscode

### **O Horusec roda localmente, sem nenhuma dependecia de servidor ou algo assim?**
Sim, usando nossa CLI

### **Quando rodo o horusec localmente via CLI como vejo as vulnerabilidades no manager?**
Sim, Basta seguir nossa documentação para [instalar a aplicação web do horusec](http://localhost:1313/docs/pt-br/web/installing/)

### **O horusec depende de algo para rodar localmente via CLI ?**
Não, é opcional o uso do docker e git para aprimorar a análise

### **Qual a diferença entre o Horusec e qualquer ferramenta de análise de qualidade de código?**
O Horusec é uma ferramenta de análise de segurança buscando possíveis vazamentos e vulnerabilidades expostas em sua aplicação, enquanto uma ferramenta de qualidade de código garante que seu código tenha uma boa qualidade e um bom desempenho, mas não garante a segurança?

### **É possível subir toda a estrutura do horusec na minha infra pessoal?**
Sim, basta seguir nosso tutorial "instalando o horusec em minha infra"

### **Como envio exporto o output do horusec em arquivo?**
Basta seguir nosso exemplo exportando output para o tipo [json](/docs/pt-br/cli/getting-started/#exemplo-4-usando-para-obter-uma-saída-json) ou tipo [sonarqube](/docs/pt-br/cli/getting-started/#exemplo-5-usando-para-obter-uma-sa%C3%ADda-sonarqube)