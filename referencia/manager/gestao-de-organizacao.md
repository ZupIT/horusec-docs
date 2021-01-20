---
description: 'Nesta seção, você encontra informações sobre a gestão de organização.'
---

# Gestão de organização

Aqui, você consegue visualizar na plataforma todas as organizações que você criou ou faz parte. Além disso, você pode administrar o token da sua organização ou fazer a gestão de permissionamento de seus usuários. 

###  Token da organização

O token é um recurso que você pode criar para utilizar em todas as suas análises. O principal objetivo dele é ajudar o Horusec a identificar a organização e o repositório quando a [**CLI**](../cli.md) envia uma nova análise para plataforma.

Por exemplo, se você criar uma organização com 100 repositórios, basta utilizar apenas 1 token de acesso. No momento em que for enviar a análise para este repositório, você só terá de passar o nome do repositório que deseja criar ou o já existe para a CLI.

Apesar de você ter essa opção de criar o token, o mais seguro é você gerar um token único para o repositório e revogá-lo após um tempo. Dessa forma, você garante que a sua organização estará sempre em segurança. 

{% hint style="danger" %}
Lembre-se de que ao criar um token de acesso, ele será visto apenas uma vez.
{% endhint %}

Você pode ver como fica o painel de token dentro da plataforma do Horusec:

![](../../.gitbook/assets/tokenpt_br.gif)

### Usuários da organização

Você pode convidar novos usuários para entrar na sua organização. Para fazer isso, basta cadastrar essas pessoas na base de dados do Horusec e, ao final do processo, é disparado um e-mail de convite para os usuários integrarem aquela organização.  
   
Ao fazer o convite,  você tem que escolher a **função deste usuário** dentro da organização. Existem duas principais funções, que possuem as seguintes permissões cada:

1. **Administrador**

   * Gerenciar a organização \(visualizar, atualizar, remover\);
   * Gerenciar tokens da organização \(criar, visualizar, atualizar, remover\);
   * Gerenciar usuários da organização \(convidar, visualizar, atualizar, remover\);
   * Adicionar novos repositórios;
   * Visualizar todos os repositórios da organização;
   * Visualizar o dashboard da organização;
   * Visualizar o dashboard dos repositórios que o usuário tem acesso.

2. **Usuário**

   * Visualizar o dashboard dos repositórios que o usuário tem acesso.

![P&#xE1;gina para gest&#xE3;o de usu&#xE1;rios da sua organiza&#xE7;&#xE3;o](../../.gitbook/assets/usuariodeorganpt_br.gif)

