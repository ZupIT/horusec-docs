---
title: Como utilizar Horusec-CLI sem docker?
weight: 12
description: Nesta seção, você encontra as informações para utilizar a Horusec-CLI sem o docker.
---


 O Horusec realiza suas análises por meio da Horusec-CLI com várias ferramentas de análise seja do seu [**próprio motor de análise**](/docs/pt-br/cli/analysis-tools/open-source-horusec-engine/) ou por [**outras ferramentas já existentes no mercado**]({{< ref path="/cli/analysis-tools/security-tools.md" lang="pt-br">}}).


Se você estiver em um ambiente em que não é possível realizar a instalação do Docker, você consegue utilizar o Horusec sem ele, veja abaixo como: 

1. Utilizando a flag `disable-docker`

```bash
horusec start -p . --disable-docker="true"
```

Essa opção permite você realizar análises sem o uso do Docker, porém você **perderá as análises** realizadas por [**outras ferramentas**]({{< ref path="/cli/analysis-tools/security-tools.md" lang="pt-br">}}).

{{% alert color="warning" %}}
Apenas ferramentas que utilizam o próprio motor de análise serão executadas, por esse motivo não é recomendado desabilitar o docker.
{{% /alert %}}