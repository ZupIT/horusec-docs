---
title: Release Notes
weight: 8
description: >-
  Nesta seção, você vai encontrar o Release Notes do Horusec.
---
{{% release/group %}}
{{% release/item type="feature" repository="admin" date="Maio 2021" %}}
Criação do recurso Horusec-Admin <a href="/docs-v1/pt-br/web/installation/install-with-admin/">na versão v1.0</a> e iniciando a implementação para a v2 para simplificar a instalação da aplicação web, bastando apenas rodar um comando.
{{% /release/item %}}
 
{{% release/item repository="core" date="Maio 2021" %}}
O microsserviço Account passa a se chamar Core e, com eles, teremos as operações de gerenciamento de workspace, repositórios, permissões e tokens.
{{% /release/item %}} 

{{% release/item repository="manager" date="Maio 2021" %}}
Implementação de recursos de acessibilidade: tamanho de fontes, contraste de cores e recursos para melhor navegação por teclado e leitores de tela. 

Maior detalhamento nos dashboards, mostrando também informações como o total de severidade e o total de tipos encontrados por cada severidade.
  
Melhoria na navegação entre páginas para você visualizar as vulnerabilidades detalhadas e de forma analítica. 
{{% /release/item %}}

{{% release/item repository="web" date="Maio 2021" %}}
Nova versão do serviço Análitico.

Nova versão do serviço Account com o nome atualizado para **Core**.

Novo serviço para a gestão de vulnerabilidades.

Novo serviço para gestão de dados.

{{% /release/item %}}

{{% release/item repository="Vulnerabilidades" date="Maio 2021" %}}
 Criação de um serviço específico para gestão de vulnerabilidades que permite atualizar e filtrar as vulnerabilidades encontradas dentro da aplicação. 
{{% /release/item %}}


{{% release/item type="fix" repository="CLI" date="MAIO 2021" %}}
Reestruturação da base do código.

Correção da análise no histórico do Git, ignorando arquivos dentro do `git folder`.
{{% /release/item  %}}

{{% release/item repository="VSCODE" date="May 2021" %}}
 Correção do erro para remover o container do Horusec CLI no Windows.
{{% /release/item  %}}

{{% release/item type="chore" repository="Analytic" date="Maio 2021" %}}
Inclusão de uma nova rota para retorno de dados;
  
Alteração de dados para suportar o retorno de informações como severidade da vulnerabilidade e quais os tipos encontrados que podem ser entre: vulnerabilidade, risco aceito, falso positivo e corrigido.
  
Inclusão de mais um banco de dados para realizar um teste da aplicação.
{{% /release/item  %}}

{{% release/item repository="Auth" date="Maio 2021" %}}
Agora você tem um controle maior sobre a seção do usuário e as configurações para o sistema ficam centralizadas.
{{% /release/item  %}}

{{% release/item repository="Broker" date="Maio 2021" %}}
O Message Broker agora é obrigatório para o uso do Horusec Web Application. Você também pode configurar o uso do SMTP (Simple mail transfer protocol) dentro da plataforma.
{{% /release/item  %}}

{{% release/item repository="CLI" date="Maio 2021" %}}
Suporte para arquivos NGINX.

Atualização do [**Gitleaks**](https://github.com/zricethezav/gitleaks) para sua última versão na ferramenta de análise.
{{% /release/item  %}}

{{% release/item repository="migration" date="Maio 2021" %}}
Mudança no serviço de migração para torná-lo mais dinâmico, permitindo que o Horusec execute uma pasta com todas as migrações a partir de um banco de dados específico.
{{% /release/item  %}}

{{% release/item repository="plugin VSCode" date="Maio 2021" %}}
Atualização da versão do plugin do Horusec para VSCode. [**Saiba mais no projeto no Github**](https://github.com/ZupIT/horusec-vscode-plugin).

Atualização do container do Horusec CLI container para a v2.
{{% /release/item  %}}

{{% release/item repository="web" date="Maio 2021" %}}
Migração do projeto para o Horusec Platform: **https://github.com/ZupIT/horusec-platform** 
{{% /release/item  %}}

{{% release/item repository="webhook" date="Maio 2021" %}}
Inclusão de novo recurso para gerenciar webhooks cadastrados na aplicação.
{{% /release/item  %}}

  {{% release/item type="docs" repository="CLI" date="Maio 2021" %}}
  TBD
  {{% /release/item  %}}
{{% /release/group %}}

Acesse a página de [**Release Notes**](https://github.com/ZupIT/horusec/releases)
