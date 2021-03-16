---
title: Gestão de workspace
weight: 32
description: Nesta seção, você vai encontrar mais informações sobre a gestão de workspace.
---

---

Este recurso permite que você visualize, na plataforma, todas os espaços de trabalho que você criou ou faz parte. Além disso, você pode administrar o token do seu workspace ou fazer a gestão de permissionamento de seus usuários.

![](/docs/ptbr/web/services/manager/workspace-management/0-workspace.gif)

###  Token do workspace

O token é um recurso que você pode criar para utilizar em todas as suas análises. O principal objetivo dele é ajudar o Horusec a identificar o workspace e o repositório quando a [**CLI**](/docs/pt-br/references/cli/) envia uma nova análise para plataforma.

Por exemplo, se você criar um workspace com 100 repositórios, basta utilizar apenas 1 token de acesso. No momento em que for enviar a análise para este repositório, você só terá de passar o nome do repositório que deseja criar ou o que já existe para a CLI.

Apesar de você ter essa opção de criar o token, o mais seguro é você gerar um token único para o repositório e revogá-lo após um tempo. Dessa forma, você garante que a seu workspace estará sempre em segurança.

{{%/* alert color="danger" %}}

Lembre-se de que, ao criar um token de acesso, ele será visto apenas uma vez.
{{% /alert */%}}

Você pode ver como fica o painel de token dentro da plataforma do Horusec:

![](/docs/ptbr/web/services/manager/workspace-management/1-token.gif)

### Usuários do Workspace

Você pode convidar novos usuários para entrar no seu workspace. Para fazer isso, basta cadastrar essas pessoas na base de dados do Horusec e, ao final do processo, é disparado um e-mail de convite para os usuários integrarem aquele workspace.

Ao fazer o convite,  você tem que escolher a **função deste usuário** dentro do workspace. Existem duas principais funções, que possuem as seguintes permissões cada:

1. **Administrador**

   * Gerenciar o workspace \(visualizar, atualizar, remover\);
   * Gerenciar tokens do workspace \(criar, visualizar, atualizar, remover\);
   * Gerenciar usuários do workspace \(convidar, visualizar, atualizar, remover\);
   * Adicionar novos repositórios;
   * Visualizar todos os repositórios do workspace;
   * Visualizar o dashboard do workspace;
   * Visualizar o dashboard dos repositórios que o usuário tem acesso.

2. **Membro**

   * Visualizar o dashboard dos repositórios que o usuário tem acesso.

![](/docs/ptbr/web/services/manager/workspace-management/2-invite.gif)
