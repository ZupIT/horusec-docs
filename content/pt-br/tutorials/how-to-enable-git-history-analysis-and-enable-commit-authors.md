---
title: Como habilitar análise no histórico git e habilitar autores dos commit?
weight: 12
description: Nesta seção, você encontra o tutorial para realizar uma análise com o histórico git ativado e mostrar quem são os autores das vulnerabilidades encontradas.
---

{{% alert color="warning" %}}
Caso esteja usando essa funcionalidade no CI, certifique-se que todos os commits estão sendo clonados. Verifque a configuração recomendada para cada CI em [Instalação via Pipeline](https://horusec.io/docs/pt-br/cli/installation/#2-instala%C3%A7%C3%A3o-via-pipeline)
{{% /alert %}}


O Horusec realiza suas análises por meio da Horusec-CLI e por padrão já tem os autores dos commit e o histórico git **desabilitados**.
Para habilitar, adicione uma opção para cada ação, veja os exemplos abaixo: 

**1. Habilitar a análise em todo histórico git**
Rode o comando abaixo: 

```bash
horusec start -p . --enable-git-history="true"
```

{{% alert color="warning" %}}
Ao habilitar essa função o Horusec irá iniciar a ferramenta [GitLeaks]({{< ref path="/cli/analysis-tools/security-tools.md#gitleaks" lang="pt-br">}}) e somente ela irá buscar vazamentos em seu histórico.
{{% /alert %}}


**2. Habilitar os autores dos commit**
Rode o comando abaixo: 

```bash
horusec start -p . --enable-commit-author="true"
```

{{% alert color="info" %}}
Independente da ferramenta, os autores das vulnerabilidades serão mostrados em sua análise. Se houver uma integração com a aplicação web, você poderá visualizar no dashboard da interface gráfica os 5 usuários que mais criaram vulnerabilidades.
{{% /alert %}}

