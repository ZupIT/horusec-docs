---
title: "FAQ"
linkTitle: "FAQ"
weight: 7
type: list
description: >-
  Nesta seção, você vai encontrar perguntas e respostas mais realizadas pela comunidade sobre o Horusec.
---

### **1. Quais são as linguagens e ferramentas de programação disponíveis no Horusec?**

Confira as [**linguagens e ferramentas**](/docs/pt-br/cli/analysis-tools/overview/) do Horusec

### **2. Qual é o roadmap para o Horusec em 2021?**

Veja as fases do roadmap:

* Fase 0: Suporte para todos os recursos horusec-cli no horusec-vscode (Q1)*

* Fase 1: Suporte para Theia (VsCode Web) (Q1)

* Fase 2: Suporte a flutter, dardo, bash, shell, elixir, cloujure e Scala em análise (Q1)

* Fase 3: Novo serviço para gerenciadoras de vulnerabilidades (Q2)

* Fase 4: Análise de Dependência para todos os idiomas suportados (Q3)

* Fase 5: Sast com análise semântica MVP (Q4)

* Fase 6: DAST com análise simbólica MVP (Q4)
 
### **3. Existe a possibilidade de adicionar o Horusec como plugin para IDE?** 

Sim, já está disponível para VScode.

### **4.  Horusec roda localmente, sem nenhuma dependência de servidor?** 

O Horusec roda localmente sem dependências usando a CLI.

### **5. Quando rodo o Horusec localmente via CLI, como posso ver as vulnerabilidades no manager?** 

Para verificar as vulnerabilidades encontradas, você precisa ter acesso ao manager: 

* Criar uma conta e fazer sua autenticação
* Visualizar e analisar vulnerabilidades encontradas pelo CLI
* Gerenciar acessos à plataforma.

Quando uma análise é enviada para o Horusec armazenar pelo Manager, você tem acesso a um dashboard detalhado com a visão da organização ou do repositório em relação àquela análise.

### **6. O Horusec depende de algo para rodar localmente via CLI?** 

Não, é opcional o uso de Docker e Git para aprimorar a análise.

### **7. Qual é a diferença entre o Horusec e qualquer ferramenta de análise de qualidade de código?** 

O Horusec é uma ferramenta de análise de segurança que atua buscando possíveis vazamentos e vulnerabilidades expostas em sua aplicação, enquanto uma ferramenta de qualidade de código garante que seu código tenha uma boa qualidade e um bom desempenho, mas não garante que ele esteja seguro de ameaças.

### **8. É possível subir toda a estrutura do Horusec na minha infra pessoal?** 

Sim, acesse o tutorial [**"Como rodar a aplicação web em outro host?"**](/docs/pt-br/tutorials/how-to-use-horusec-without-docker/) para saber mais.
 
### **9. Como acessar o Manager?**  

O Horus não disponibiliza infraestrutura aberta para comunidade usar a sua aplicação web. 
Para acessar o manager, você pode subir em sua infrapessoal usando os itens Docker Compose ou Helm, por meio da porta 8043 ou do roteamento que você criou. 
- Exemplo: **http://SEU-DOMINIO:8043**.
 
### **10. Como exportar o output do Horusec em arquivo?** 

Para fazer isso, siga o [**Exemplo 5: Usando para obter uma saída sonarqube na seção Recursos**](/docs/pt-br/cli/resources/#exemplo-5-usando-para-obter-uma-saída-sonarqube).

### **11. Como importar o output do Horusec dentro do SonarQube?**  

Veja a pergunta 10 [**"Como exportar o output do Horusec no Sonarqube"**](/docs/pt-br/faq/#10-como-exportar-o-output-do-horusec-em-arquivo) e depois [**importe o arquivo gerado dentro da sua interface do Sonarqube usando este tutorial**](https://docs.sonarqube.org/latest/analysis/generic-issue/).
