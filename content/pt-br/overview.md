---
title: Visão Geral
weight: 1
description: >-
  Nesta seção, você vai encontrar as informações iniciais sobre o Horusec antes de se
  aprofundar no produto.
---

---

## **O que é o Horusec?** 

O Horusec é uma ferramenta open source que orquestra outras ferramentas de segurança e identifica falhas de segurança ou vulnerabilidades em projetos, centralizando todos os resultados em um banco de dados para análise e geração de métricas.


Atualmente, o Horusec seleciona as linguagens e ferramentas a serem utilizadas no projeto de acordo com a stack disponível. **[Veja todas as linguagens suportadas e ferramentas disponíveis na plataforma]({{< ref path="/cli/analysis-tools/overview.md" lang="pt-br">}})**.


## **Como o Horusec funciona?**

O Horusec faz uma análise [**SAST**]({{< ref path="/glossary.md" lang="pt-br">}}) do seu projeto a partir da observação de padrões no código. 

A ferramenta utiliza:
- [**Horusec-CLI**]({{< ref path="/cli/overview.md" lang="pt-br">}}) quando você roda os comandos, faz as análises de segurança e a [**identificação e classificação de vulnerabilidades**]({{< ref path="/web/services/vulnerability.md" lang="pt-br">}}). 
- [**Aplicações web**]({{< ref path="/web/overview.md" lang="pt-br">}}) que são as extensões do CLI, usadas para gerenciar e classificar as vulnerabilidades encontradas na sua aplicação.

Veja a estrutura na imagem abaixo: 

<img style="width:100%" src="/docs/ptbr/overview/1-arquitecture.png">

Quando o Horusec inicia essa análise, ele executa os passos abaixo:

- **1-** O Horusec-CLI identifica quais são as linguagens disponíveis no seu projeto;

- **2-** Depois, o Horusec-CLI inicia as ferramentas de análise de acordo com as linguagens identificadas e busca as possíveis vulnerabilidades;

- **3-** Quando a análise termina, 3 ações são realizadas, veja: 

  - **3.1-** Você pode ver o output da análise na sua interface ou no arquivo;

    <img style="width:100%" src="/docs/ptbr/overview/2-output.png">

  - **3.2-** Se você usar na sua esteira o processo de CI/CD e quiser que a pipeline aborte as operações, um retorno do tipo `exit 1` será enviado para não prosseguir até que todas as vulnerabilidades sejam corrigidas. Caso nenhuma vulnerabilidade seja encontrada, um status do tipo `exit 0` será retornado e você pode seguir   para o próximo passo.

    ![](/docs/ptbr/overview/3-pipeline-failed.gif) 
    ![](/docs/ptbr/overview/4-pipeline-success.gif)

  - **3.3-** Logo depois o Horusec-Manager(plataforma web) recebe essa análise e você poderá ver as vulnerabilidades encontradas de forma análitica e fazer a gestão do seu projeto;

    <img style="width:100%" src="/docs/ptbr/overview/5-dashboard-organization.gif">


**Veja abaixo um exemplo completo:**

<video alt="usage_horusec" width="100%" controls>
  <source src="/docs/ptbr/overview/6-full-usage.mp4" type="video/mp4">
</video>

## **Tipos de análises do Horusec**

O Horusec realiza 4 tipos de análises de desempenho para identificar se existe algumas falhas de segurança:

**1. SAST \(Static Application Security Testing \|Teste Estático de Segurança de Aplicação\)** 
- O [**SAST**]({{< ref path="/glossary.md" lang="pt-br">}}) faz a análise estática de vulnerabilidade de código. Elas podem ser feitas em código fonte, byte code ou binário.

**2. Leaks \(Vazamento de chaves\)**
-  O [**Leaks**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-leaks.md" lang="pt-br">}}) procura no código fonte possíveis vazamentos de credenciais, chaves privadas ou senhas Hard coded.

 **3. Auditoria de dependência**
 - É realizada uma auditoria de dependência  para verificar a possibilidade de vulnerabilidades em bibliotecas de terceiros.

## **Onde usar o Horusec?**
### Localmente
O Horusec possui uma CLI intuitiva e pensada para desenvolvedores, onde é possível realizar uma análise localmente da máquina do desenvolvedor.

### Esteira de CI/CD
É possível adicionar o Horusec nas esteiras de `Continuous Integration` ou `Continuous Deploy` para garantir uma camada de segurança no seu projeto e previnir que um código malicioso entre em produção. 


### Extensões para IDE
É muito comum utilizar uma IDE (Integrated Development Environment ou 'Ambiente de Desenvolvimento Integrado') com extensões e plugins para auxiliar você no desenvolvimento. É possível realizar uma análise através da própria extensão do Horusec, o que garante velocidade na suas entregas. 

## **Por que usar o Horusec?**

* **Promove a cultura do desenvolvimento seguro aplicando a lógica de “security by design”**

Ele traz para você segurança, garantindo que possíveis vulnerabilidades desconhecidas serão encontradas pela análise do Horusec.

* **Melhora a sua experiência**

Garante a segurança dos projetos no processo de CI e CD e, assim, reduz os custos de correção de uma vulnerabilidade.


## **Próximos passos**

Instale o Horusec: 

**CLI**
- [**Horusec-CLI**]({{< ref path="/cli/installation.md" lang="pt-br">}})

**Aplicação web**
- [**Instale com o Docker-Compose**]({{< ref path="/web/installation/install-with-docker-compose.md" lang="pt-br">}})
- [**Instale com o Helm**]({{< ref path="/web/installation/install-with-helm.md" lang="pt-br">}})
- [**Instale com o Operator**]({{< ref path="/web/installation/install-with-operator.md" lang="pt-br">}})