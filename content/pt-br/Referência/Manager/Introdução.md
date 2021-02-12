---
title: Introdução
weight: 30
description: Nesta seção, você vai encontrar mais informações referentes ao Manager do Horusec.
---

---

## O que é?

O manager é uma **interface gráfica** do Horusec, na qual é possível:

* Criar uma conta e fazer sua autenticação; 
* Visualizar e analisar vulnerabilidades encontradas pelo CLI;
* Gerenciar acessos à plataforma. 

A seguir, você verá em detalhes como realizar cada uma dessas atividades.

## Criação de conta

O Manager conta com uma funcionalidade para você criar sua conta dentro do próprio Horusec. Depois que seu usuário é criado, basta confirmar a conta direto no seu e-mail. 

![](https://horusec.io/public/docs/ptbr/references/manager/introduction/1.png)

## Autenticação

O Horusec também oferece uma autenticação simples gerenciada pelo próprio sistema.

![](https://horusec.io/public/docs/ptbr/references/manager/introduction/2.png)

## Painel analítico

Quando uma análise é enviada para o Horusec armazenar, você tem acesso a um dashboard detalhado com a visão da organização ou do repositório em relação àquela análise. 

Essa visão analítica facilita os gestores em dar treinamentos sobre desenvolvimento seguro para seus desenvolvedores ou até mesmo para identificarem se o repositório está com muitas vulnerabilidades a serem corrigidas a partir de sua severidade.

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

{{< tabs id="Dash" >}}
{{% tab name="Dash com visão por organização" %}}
![](https://horusec.io/public/docs/ptbr/references/manager/introduction/3.gif)
{{% /tab %}}

{{% tab name="Dash com a visão por repositório" %}}
![](https://horusec.io/public/docs/ptbr/references/manager/introduction/4.gif)
{{% /tab %}}
{{< /tabs >}}

## Gerenciamentos

No Horusec, você pode fazer diversos tipos de gerenciamento. Veja abaixo mais detalhes sobre cada um deles:
