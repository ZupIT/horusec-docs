---
title: Visão Geral
weight: 30
description: Nesta seção, você vai encontrar mais informações sobre o Manager do Horusec.
---

---
 
## O que é?

O Manager é uma **interface gráfica** do Horusec, na qual é possível:

* Criar uma conta e fazer sua autenticação; 
* Visualizar e analisar vulnerabilidades encontradas pelo CLI;
* Gerenciar acessos à plataforma. 

A seguir, você verá em detalhes como realizar cada uma dessas atividades.

## Configurações do Manager


### 1. Criação de conta

O Manager conta com uma funcionalidade para você criar sua conta dentro do próprio Horusec. Depois que seu usuário é criado, basta confirmar a conta direto no seu e-mail. 

![](/docs/ptbr/web/services/manager/introduction/1-create-account.gif)

### 2. Autenticação

O Horusec também oferece uma autenticação simples gerenciada pelo próprio sistema.

![](/docs/ptbr/web/services/manager/introduction/2-login-empty.png)

### 3. Painel analítico

Quando uma análise é enviada para o Horusec armazenar, você tem acesso a um dashboard detalhado com a visão da organização ou do repositório em relação àquela análise. 

Essa visão analítica permite aos gestores dar treinamentos sobre desenvolvimento seguro para seus desenvolvedores ou até mesmo identificar se o repositório está com muitas vulnerabilidades a serem corrigidas a partir de sua severidade.

Veja mais sobre quais são esses dados na tabela a seguir:

| Dado | Descrição |
| :--- | :--- |
| **Total de desenvolvedores** | Quantidade de devs na visão da organização ou do repositório. |
| **Total de repositórios** | Quantidade de repos na organização ou do repositório. |
| **Total de vulnerabilidades**  \(por **severidade**\) | Quantidade de vulnerabilidades classificadas por severidade \(high, medium, low\) na visão da organização ou do repositório. |
| **Total de vulnerabilidades**  \(pelos **5 desenvolvedores com mais vulnerabilidades ativas**\) | Quantidade de vulnerabilidades classificadas de acordo com os 5 desenvolvedores que mais possuem vulnerabilidades ativas, na visão da organização ou do repositório. |
| **Total de vulnerabilidades** \(por **severidade** e por **linguagem de programação**\) | Quantidade de vulnerabilidades classificadas de acordo com a severidade e a linguagem de programação usada, na visão da organização ou do repositório. |
| **Linha do tempo de vulnerabilidades** | Linha do tempo com detalhes das vulnerabilidades classificadas de acordo com severidade e data, na visão da organização ou do repositório. |
| **Detalhes das vulnerabilidades ativas**  | Visão detalhada das vulnerabilidades que estão ativas, na visão da organização ou do repositório.  |

### 4. Gerenciamentos
No Horusec, você pode tem duas formas de gerenciar suas informações. Na página inicial do Manager você pode visualizar todos os workspaces e repositórios da sua organização.

{{< tabs id="Dash" >}}
{{% tab name="Dashboard com visão por workspace" %}}
![](/docs/ptbr/web/services/manager/introduction/3-dashboard-organization.gif)
{{% /tab %}}

{{% tab name="Dashboard com a visão por repositório" %}}
![](/docs/ptbr/web/services/manager/introduction/4-dashboard-repository.gif)
{{% /tab %}}
{{< /tabs >}}


Você também pode criar, editar e excluir um workspace e um repositório: 

#### Administrar um workspace

Veja abaixo um exemplo de como administrar um workspace:

![](/docs/ptbr/web/services/manager/home/1-manager-workspace.gif)

#### Administrar um repositório

Veja abaixo um exemplo de como administrar um repositório:

![](/docs/ptbr/web/services/manager/home/2-manager-repository.gif)


#### 5. Download de dados do painel

O Manager do Horusec permite que você faça o download dos dados do seu dashboard. Atualmente, é possível exportar dados para arquivos nos formatos JPG, PDF, JSON, XML, XLS e CSV.  

Para exportar os dados, basta seguir os passos: 
- Clique no botão "Exportar" no canto superior direito da tela de Dashboard;
- Selecione o formato de arquivo que você deseja fazer download;
- O arquivo será gerado automaticamente. 

No GIF abaixo, você confere o procedimento para exportar os dados em todos os formatos disponíveis:

![](/docs/ptbr/web/services/manager/introduction//5-export-dashboardpt.gif)


{{% alert color="info" %}}
Veja as [**variáveis de ambiente do Manager**]({{< ref path="/web/services/manager/environment-variable.md" lang="pt-br">}}).
{{% /alert %}}


### Leia mais
- [**Como gerar um token de autorização?**]({{< ref path="/tutorials/how-to-create-an-authorization-token" lang="pt-br">}})