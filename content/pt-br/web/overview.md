---
title: "Visão Geral"
linkTitle: "Visão Geral"
weight: 1
description: >-
  Nesta seção, você vai encontrar detalhes sobre a aplicação web do Horusec.
---

## **O que é?**

As **aplicações web do Horusec** são uma extensão das funcionalidades da CLI para gerenciar as vulnerabilidades encontradas e, assim, realizar a classificação delas.

## **Quais as funcionalidades das aplicações web?**

Conheça, a seguir, as principais funcionalidades que você encontra nas aplicações web do Horusec:

#### **1. Multitenant**

Permite que você tenha vários workspaces para realizar um controle por ambiente ou organização da forma que você quiser.

![](/docs/ptbr/web/overview/0-multitenant.png)

#### **2. Controle de acesso**

Permite que você controle o acesso de usuários da forma que o adminsitrador desejar.

#### **3. Visão analítica do projeto**

Permite que você faça a gestão do seu projeto a partir de um dashboard que fornece dados como, por exemplo:

* Qual repositório com mais vulnerabilidades e quais são suas classificações;
* Quais linguagens registram mais vazamentos e quais são suas classificações;
* Quais funcionários estão subindo essas possíveis vulnerabilidades gerando uma falha em seu projeto e quais são suas classificações.

![](/docs/ptbr/web/overview/1-1-analytic.png)

![](/docs/ptbr/web/overview/1-2-analytic.png)

![](/docs/ptbr/web/overview/1-3-analytic.png)

#### **4. Classificação de vulnerabilidade**

Permite que você defina uma classificação para as vulnerabilidades encontradas pelo Horusec, sendo possível ignorar (no caso de falsos positivos, por exemplo) ou realizar uma correção.

![](/docs/ptbr/web/overview/2-vulneravilities.png)

#### **5. Integração com outros tipos de oAuth**

Permite que você integre as ferramentas que sua organização usa, como por exemplo o Keycloak ou LDAP, com o próprio serviço de autenticação do Horusec. Dessa forma, você acelera o processo de implantação do sistema no seu projeto.


#### **6. Integração com serviço de mensageria**

Permite que você habilite o serviço de menssageria está e, assim, utilize algumas funcionalidades como:

- Envio de e-mail para confirmação de conta;
- Envio de e-mail com código de segurança para reset de senha;
- Envio de e-mail para convidar outros usuários a fazer parte do seu workspace;
- Gerenciar webhooks e receber todas as análises realizadas pela Horusec-CLI;


### Leia mais
 [**Como alterar o tipo de autenticação na aplicação web?**]({{< ref path="/tutorials/how-to-change-the-authentication-type" lang="pt-br">}})