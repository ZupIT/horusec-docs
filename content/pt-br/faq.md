---
title: "FAQ"
linkTitle: "FAQ"
weight: 7
type: list
description: >-
  Nesta seção, você vai encontrar perguntas e respostas mais realizadas pela comunidade sobre o Horusec.
---

### **Quais são as linguagens de programação que o horusec cobre?**
Basta verificar na nossa documentação [todas as linguagens disponíveis](/docs/pt-br/cli/analysis-tools/overview/)

### **Qual é o roadmap do horusec 2021 ?**
- Fase 0: Suporte para todos os recursos horusec-cli no horusec-vscode (Q1)
- Fase 1: Suporte para Theia (VsCode Web) (Q1)
- Fase 2: Suporte a flutter, dardo, bash, shell, elixir, cloujure e Scala em análise (Q1)
- Fase 3: Novo serviço para gerenciadoras de vulnerabilidades (Q2)
- Fase 4: Análise de Dependência para todos os idiomas suportados (Q3)
- Fase 5: Sast com análise semântica MVP (Q4)
- Fase 6: DAST com análise simbólica MVP (Q4)

### **Tem possibilidade de adicionar o horusec como plugins para IDE ?**
Sim, inclusive já temos para vscode

### **O Horusec roda localmente, sem nenhuma dependecia de servidor ou algo assim?**
Sim, usando nossa CLI

### **Quando rodo o horusec localmente via CLI como vejo as vulnerabilidades no manager?**
Sim, Basta seguir nossa documentação para [instalar a aplicação web do horusec](/docs/pt-br/web/installing/)

### **O horusec depende de algo para rodar localmente via CLI ?**
Não, é opcional o uso do docker e git para aprimorar a análise

### **Qual a diferença entre o Horusec e qualquer ferramenta de análise de qualidade de código?**
O Horusec é uma ferramenta de análise de segurança buscando possíveis vazamentos e vulnerabilidades expostas em sua aplicação, enquanto uma ferramenta de qualidade de código garante que seu código tenha uma boa qualidade e um bom desempenho, mas não garante a segurança?

### **É possível subir toda a estrutura do horusec na minha infra pessoal?**
Sim, basta seguir nosso tutorial "[Como rodar a aplicação web em outro host?](/docs/pt-br/tutorials/how-to-run-the-web-application-on-other-host)"

### **Como envio exporto o output do horusec em arquivo?**
Basta seguir nosso exemplo exportando output para o tipo [json](/docs/pt-br/cli/resources/#exemplo-4-usando-para-obter-uma-saída-json) ou tipo [sonarqube](/docs/pt-br/cli/resources/#exemplo-5-usando-para-obter-uma-saída-sonarqube)
