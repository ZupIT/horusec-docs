---
title: Como habilitar análise no histórico git e habilitar autores dos commit ?
weight: 11
description: Você vai encontrar aqui as informações necessárias para realizar uma análise com o histórico git ativado e mostrar quem são os autores das vulnerabilidades encontradas.
---


Atualmente o Horusec realiza suas análises através da Horusec-CLI por padrão com o histórico git e os autóres dos commit **desabilitado**
para habilitar basta adicionar uma opção para cada ação veja abaixo os exemplos

* Habilitando análise em todo histórico git
```bash
horusec start -p . --enable-git-history="true"
```

{{% alert color="info" %}}
Ao habilitar essa função o horusec irá iniciar a ferramenta [GitLeaks](/docs/pt-br/cli/analysis-tools/open-source-marketplace/#gitleaks) e somente ela irá buscar vazamentos em seu histórico
{{% /alert %}}


* Habilitando autores dos commit
```bash
horusec start -p . --enable-commit-author="true"
```

{{% alert color="info" %}}
Idependente da ferramenta todas as vulnerabilidades vão mostrar quem criou a vulnerabilidade e mostrar em sua análise e se caso tiver integração com a aplicação web poderá ser visualizado no dashboard da interface gráfica os 5 usuário que mais criaram vulnerabilidades.
{{% /alert %}}

