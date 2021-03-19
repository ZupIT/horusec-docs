---
title: Visão Geral
weight: 1
description: >-
  Nesta seção, você vai encontrar as informações iniciais sobre o Horusec antes de se
  aprofundar no produto.
---

---

<img style="width:100%" src="/docs/ptbr/overview/0-horusec-logo.png">

É uma ferramenta open source que orquestra outras ferramentas de segurança e identifica falhas de segurança ou vulnerabilidades em projetos, centralizando todos os resultados em um banco de dados para análise e geração de métricas.


Atualmente, o Horusec seleciona as linguagens e ferramentas a serem utilizadas no projeto de acordo com a stack disponível. **[Veja todas as linguagens suportadas e ferramentas disponíveis na plataforma](/docs/pt-br/cli/analysis-tools/overview/)**

## **Onde usar o Horusec ?**
### Localmente
O Horusec conta com uma CLI intuitiva e pensada para desenvolvedores onde é possível realizar uma análise localmente da máquina do desenvolvedor.

### Esteira de CI/CD
Nas esteiras de `Continuos Integration` ou `Continuos Deploy` é possível adicionar o Horusec garantindo mais uma camada de segurança em seu projeto, além de previnir que um código malicioso não entre em produção.

### Extensões para IDE
A IDE em inglês Integrated Development Environment ou Ambiente de Desenvolvimento Integrado é muito comum o uso de extensões e plugins para auxiliar no seu desenvolvimento. Como o horusec vem com a proposta para ajudar nas entregas com velocidade é possível realizar uma análise através da própria extensão.

## **Como funciona o Horusec?**

<img style="width:100%" src="/docs/ptbr/overview/1-arquitecture.png">

Quando o horusec inícia uma análise ele executa os passos abaixo:

- **1-** Ao iníciar uma análise em seu projeto através da Horusec-CLI ela irá identificar quais são as linguagens que tem atualmente no projeto;

- **2-** Agora a ferramenta irá iniciar as ferramentas de análise de acordo com a linguagens identificadas buscando possíveis vulnerabilidades;

- **3-** Quando a análise terminar será realizada 3 ações:

  - **3.1-** Mostrar no output da análise seja na sua interface ou em arquivo;
    <img style="width:100%" src="/docs/ptbr/overview/2-output.png">

  - **3.2-** Se caso você estiver utilizando em sua esteira o processo de CI/CD e desejar que o pipeline aborte as operações será enviado um retorno do tipo `exit 1` para não proceder para o próximo passo até que se corrija todas as vulnerabilidades, caso não encontre nenhum será retornado um status do tipo `exit 0` indo para o proximo passo
    ![](/docs/ptbr/overview/3-pipeline-failed.gif)
    ![](/docs/ptbr/overview/4-pipeline-success.gif)

  - **3.3-** Enviar para o Horusec-Manager(plataforma web) onde você poderá ver as vulnerabilidades encontradas de forma análitica e poder fazer a gestão do seu projeto;
    <img style="width:100%" src="/docs/ptbr/overview/5-dashboard-organization.gif">


**Veja abaixo um exemplo completo do Horusec:**
<img src="/docs/ptbr/overview/6-full-usage.gif" alt="usage_horusec" width="100%"/>

## **Por que usar o Horusec?**

* **Promove a cultura do desenvolvimento seguro aplicando a lógica de “security by design”**

Ele traz para você segurança, garantindo que possíveis vulnerabilidades desconhecidas serão encontradas pela análise do Horusec.

* **Melhora a sua experiência**

Garante a segurança dos projetos no processo de CI e CD e, assim, reduz os custos de correção de uma vulnerabilidade.

## **Tipos de análises do Horusec**

O Horusec realiza 4 tipos de análises de desempenho para identificar se existe alguma falha de segurança:

1. **SAST \(Static Application Security Testing \|Teste Estático de Segurança de Aplicação\)**

O SAST faz a análise estática de vulnerabilidade de código. Elas podem ser feitas em código fonte, byte code ou binário.

2. **Leaks \(Vazamento de chaves\)**

O Leaks procura no código fonte possíveis vazamentos de credenciais, chaves privadas ou senhas Hard coded.

3. **Auditoria de dependência**

É realizada uma auditoria de dependência  para verificar a possibilidade de vulnerabilidades em bibliotecas de terceiros.
