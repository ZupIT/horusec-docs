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

{{% release/item repository="CLI" date="Junho 2021" %}}
Suporte do Horusec para linguagem de programação Swift.

Adição da nova ferramenta Owasp Dependency Check para linguagens: Python, Ruby, Javascript/Typescript, Java, C#.

Adição da nova ferramenta dotnet-cli para C\#. 

{{% /release/item %}}

{{% release/item repository="CLI" date="Julho 2021" %}}
Agora o shellcheck não é habilitado por padrão. Para ativar basta passar a flag (-j OU -j=”true”).

Shellcheck não está disponível por default. Para habilitar, use a flag -j.

Adição da Nancy dependency check para Golang.

{{% /release/item %}}

{{% release/item repository="CLI" date="Agosto 2021" %}}
Novo feature/output do txt.

Adição da nova ferramenta Trivy. 

Nova regras para Horusec-Engine > Javascript.

Adição da nova ferramenta Checkov como analizador HCL.

{{% /release/item %}}

{{% release/item repository="platform" date="Junho 2021" %}}
Possibilidade de fazer download dos dados do dashboard para arquivos nos formatos PDF, XLS, XML, CSV, PNG, JSON

Inclusão de acessibilidade no Horusec-manager.

Adição de novas ferramentas de análise no Horusec-api: : **dependency check** e **dotnet-cli**.

{{% /release/item %}}

{{% release/item repository="Horusec Platform" date="Julho 2021" %}}

Adição de Nancy para suporte na análise de API. 

Permissões na nova navegação do Manager. 

Contagem de repositórios no workspace. 

Novas telas no Manager: 'Página inicial' e 'Usuário'. 

{{% /release/item %}}

{{% release/item repository="Horusec Platform" date="Agosto 2021" %}}

Criação do Continuous Deployment automático para a release e deploy de novas imagens no DockerHub.

{{% /release/item %}}

{{% release/item type="fix" repository="CLI" date="Outubro 2021" %}}
Correções em um bug que quebrou as alterou os hashes das vulnerabilidades, quebrando as pipelines com vulnerabilidades já configuradas com falso positivo ou risco aceito.

Para solucionar o problema:

- Na release v2.6.3 do CLI, corrigimos a issue para que ambos os hashes sejam identificados e aceitos.
- No Horusec platform, implementamos a correção para que os hashes retornem ao padrão antes do bug e, assim, a pipeline não quebre ao atualizar o CLI. Esta atualização estará disponível a partir da versão 2.17.3.

{{% /release/item  %}}

{{% release/item repository="CLI" date="Maio 2021" %}}

Reestruturação da base do código.

Correção da análise no histórico do Git, ignorando arquivos dentro do `git folder`.
{{% /release/item  %}}

{{% release/item repository="CLI" date="Junho 2021" %}}
Correções para rodar testes com data-races.

Correção do erro: CLI e o pull nas imagens mesmo com a flag de desabilitar Docker ativada.
 
{{% /release/item  %}}

{{% release/item repository="CLI" date="Julho 2021" %}}
Correção na formatação do output do shellcheck.
{{% /release/item  %}}

{{% release/item repository="CLI" date="Agosto 2021" %}}
Remoção de paths desnecessários e ignorados pelo Horusec. 

Remoção de vulnerabilidades duplicadas do yarn audit. 
{{% /release/item  %}}

{{% release/item repository="VSCODE" date="Maio 2021" %}}
 Correção do erro para remover o container do Horusec CLI no Windows.
{{% /release/item  %}}

{{% release/item repository="Platform" date="Junho 2021" %}}
Correção na manipulação de paths do Horusec-Manager.

Correção de valores errados no Helm Charts.

Correção de alguns textos na exportação para múltiplas linguagens.

Correção URI no schema do Helm Charts.

Correção do URLs do Helm Charts.

Correção dos repositórios criados com token de workspace que não herdavam permissões.

Correção na autenticação LDAP, em alguns casos os repositórios estavam sendo duplicados. 
{{% /release/item  %}}

{{% release/item repository="Horusec-Platform" date="Julho 2021" %}}
Fix error in the 'Get' repository and in the workspace when there is LDAP authentication.

Correção do erro de mensagem do LDAP e verificação de outras mensagens. 

Correção do repositório 'get' criado com o token do workspace. 

Correção de repositórios criados com toke do workspace que não herdaram permissões. 

Correção de alguns casos específicos na autenticação do LDAP, alguns repositórios estavam duplicados. 

{{% /release/item  %}}

{{% release/item repository="Horusec-Platform" date="Agosto 2021" %}}
Correção dos gifs no readme.

Correção da automação dos processos de release.

Correção da aplicação admin.

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

{{% release/item repository="CLI" date="Junho 2021" %}}
Melhoria na implementação das ferramentas que utilizam Horusec-Engine.

Adição de links CWE em todas as descrições das regras de Swift. 

{{% /release/item  %}}

{{% release/item repository="CLI" date="Agosto 2021" %}}
Compilar os binários para plataformas e rascunhos na release do Github.

Mover o tfsec formatter para ser compatível com os padrões de arquitetura. 

Testes: refatoração de testes end-to-end. 

Testes: correção de vulnerabilidades no Javascript.

Remoção de constantes não usadas. 

Normalização de interfaces para seguir o padrão Go.

{{% /release/item  %}}

{{% release/item repository="Platform" date="Junho 2021" %}}

Melhoria na responsividade do Horusec-Manager.

Adição de novos valores 'not configured'.

Atualização de migração para salvar a tabela na base de dados e checar se o script foi rodado.

Melhoria em todas as tabelas do Horusec-Manager.

Padronização dos nomes das variavéis de ambiente no Horusec-Manager.
Mudança do uso de enums para devkit para configurar os casos de uso de tamanho min. e max. 

Melhoria na performance ao atualizar uma vulnerabilidade.
{{% /release/item  %}}

{{% release/item repository="Horusec-Platform" date="Agosto 2021" %}}
Atualização de como convidar usuários no workspace e no repositório. 

Melhoria no fluxo de convite de usuários.

{{% /release/item  %}}

{{% release/item repository="VSCode" date="Junho 2021" %}}
Suporte para última versão disponível da Horusec-CLI.
{{% /release/item  %}}

  {{% release/item type="docs" repository="CLI" date="Junho 2021" %}}
  Instale utilizando Operator.

  Instale utilizando Horusec-Admin.

  {{% /release/item  %}}
 
{{% /release/group %}}

Acesse a página de [**Release Notes**](https://github.com/ZupIT/horusec/releases)
