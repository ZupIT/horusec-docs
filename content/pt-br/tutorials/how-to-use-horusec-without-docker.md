---
title: Como utilizar Horusec-CLI sem docker ?
weight: 12
description: Você vai encontrar aqui as informações necessárias utilizar a horusec-cli sem o docker.
---


Atualmente o Horusec realiza suas análises através da Horusec-CLI com várias ferramentas de análise seja atráves do seu [próprio motor de análise](/docs/pt-br/cli/analysis-tools/open-source-horusec-engine/) ou através de uma [ferramenta já existente no mercado](/docs/pt-br/cli/analysis-tools/open-source-marketplace/).

Caso você esteja em um ambiente que não seja possível realizar a instação do docker você pode utilizar o horusec sem ele.
com a flag `disable-docker`. Veja abaixo um exemplo:
```bash
horusec start -p . --disable-docker="true"
```
Com essa opção ativa você pode realizar análises sem o uso do docker, porém você irá **perder a análise que seria realizadas pelas ferramentas já existentes no mercado** e apenas ferramentas que utilizando o próprio motor de análise seram executadas, por isso não é recomendado desabilitar o docker.