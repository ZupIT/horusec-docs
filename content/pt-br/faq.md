---
title: "FAQ"
linkTitle: "FAQ"
weight: 7
type: list
description: >-
  Nesta seção, você vai encontrar perguntas e respostas mais realizadas pela comunidade sobre o Horusec.
toc_hide: true
---

### **1. Quais são as linguagens e ferramentas de programação disponíveis no Horusec?**

Confira as [**linguagens e ferramentas**]({{< ref path="/cli/analysis-tools/overview.md" lang="pt-br">}}) do Horusec

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

Sim, acesse o tutorial [**"Como rodar a aplicação web em outro host?"**]({{< ref path="/tutorials/how-to-use-horusec-without-docker.md" lang="pt-br">}}) para saber mais.
 
### **9. Como acessar o Manager?**  

O Horus não disponibiliza infraestrutura aberta para comunidade usar a sua aplicação web. 
Para acessar o manager, você pode subir em sua infrapessoal usando os itens Docker Compose ou Helm, por meio da porta 8043 ou do roteamento que você criou. 
- Exemplo: **http://SEU-DOMINIO:8043**.
 
### **10. Como exportar o output do Horusec em arquivo?** 

Para fazer isso, siga o [**Exemplo 5: Usando para obter uma saída sonarqube na seção Recursos**]({{< ref path="/cli/resources.md#exemplo-5-usando-para-obter-uma-saída-sonarqube" lang="pt-br">}}).

### **11. Como importar o output do Horusec dentro do SonarQube?**  

Veja a pergunta 10 [**"Como exportar o output do Horusec no Sonarqube"**]({{< ref path="/faq.md#10-como-exportar-o-output-do-horusec-em-arquivo" lang="pt-br">}}) e depois [**importe o arquivo gerado dentro da sua interface do Sonarqube usando este tutorial**](https://docs.sonarqube.org/latest/analysis/generic-issue/).


### **12. O Horusec identifica quais as linguagens o projeto tem? Se sim, posso ignorar uma linguagem específica para rodar no meu projeto?**  
 Sim, o Horusec identifica as linguagens que o seu projeto tem e faz uma análise baseado nas [**linguagens que ele tem suporte**]({{< ref path="/cli/analysis-tools/overview.md" lang="pt-br">}}). É possível ignorar as linguagens/ferramentas que você quer que rodar na análise na configuração do Horusec.


### **13.  O Horusec realiza o build do projeto em cada análise?**  
Não, o Horusec realiza análises em [**SAST**]{{< ref path="/glossary.md" lang="pt-br">}}) e olha apenas código. 

### **14. Horusec possui algum recurso diferente de outras ferramentas de análises?**  
Sim, o Horusec:
- Identifica a quantidade de recursos disponíveis na sua máquina;
- Escala a quantidade de ferramentas que rodam simultaneamente para entregar os resultados com mais rapidez. 

### **15. O Horusec entrega a sua aplicação web em um formato SAAS?**  
Não, para usar o Horusec na sua aplicação web, é necessário subir em seu ambiente de controle.

### **16. Quando a Horusec-CLI envia os relatórios para o servidor, a última análise feita é mostrada?** 
Você consegue ver no dashboard um agrupamento de vulnerabilidades por repositório, autor de commit, linguagem ou uma linha do tempo. 

### **17. As análises realizadas pela Horusec-CLI possuem algum tipo de cache para saber se o arquivo foi modificado?**  
Não, cada análise do Horusec faz a leitura de todos os arquivos necessários. Ele faz isso sem cache ou validação se um arquivo foi modificado ou não. 

### **18. Se uma análise for realizada usando alguma ferramenta de mercado como o GoSec, por exemplo, existe algum tipo de padronização para o output da análise?** 
Sim, todas as ferramentas de mercado tem a sua própria saída de dados. O Horusec faz a leitura e padroniza no formato ideal e com isso, você pode ter um dado centralizado independente das ferramentas que está utilizando na análise.

### **19. É possível contribuir para o projeto com uma ferramenta que já conheço?** 
Sim, veja o tutorial para adicionar a [**ferramenta que você deseja no Horusec**]({{< ref path="/cli/analysis-tools/security-tools.md" lang="pt-br">}}), você pode usar o motor de análise do Horusec ou  uma ferramenta de mercado já existente.

