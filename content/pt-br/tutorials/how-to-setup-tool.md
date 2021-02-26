---
title: Como configurar uma ferramenta do horusec ?
weight: 9
description: Você vai encontrar aqui as informações sobre como configurar uma ferramenta do horusec
---

---

# Configurando uma ferramenta
O Horusec disponibiliza uma opção para você realizar configurações das ferramentas que ele roda ao iniciar uma análise:

```json
{
    "horusecCliToolsConfig":{
        "Bandit":{
            "istoignore":false,
            "imagepath":""
        },
        "Brakeman":{
            "istoignore":false,
            "imagepath":""
        },
        "Eslint":{
            "istoignore":false,
            "imagepath":""
        },
        "Flawfinder":{
            "istoignore":false,
            "imagepath":""
        },
        "GitLeaks":{
            "istoignore":false,
            "imagepath":""
        },
        "GoSec":{
            "istoignore":false,
            "imagepath":""
        },
        "HorusecCsharp":{
            "istoignore":false
        },
        "HorusecDart":{
            "istoignore":false
        },
        "HorusecJava":{
            "istoignore":false
        },
        "HorusecKotlin":{
            "istoignore":false
        },
        "HorusecKubernetes":{
            "istoignore":false
        },
        "HorusecLeaks":{
            "istoignore":false
        },
        "HorusecNodeJS":{
            "istoignore":false
        },
        "NpmAudit":{
            "istoignore":false,
            "imagepath":""
        },
        "PhpCS":{
            "istoignore":false,
            "imagepath":""
        },
        "Safety":{
            "istoignore":false,
            "imagepath":""
        },
        "SecurityCodeScan":{
            "istoignore":false,
            "imagepath":""
        },
        "Semgrep":{
            "istoignore":false,
            "imagepath":""
        },
        "ShellCheck":{
            "istoignore":false,
            "imagepath":""
        },
        "TfSec":{
            "istoignore":false,
            "imagepath":""
        },
        "YarnAudit":{
            "istoignore":false,
            "imagepath":""
        }
    }
}
```

* Como você pode perceber é possivel desabilitar/habilitar uma ferramenta na hora que inicia a análise alterando a chave `istoignore`
* Outra alteração é caso você queira utilizar a imagem eu seu proprio registro também é possível. Veja a [lista de todos os DockerFiles](https://github.com/ZupIT/horusec/tree/master/deployments/dockerfiles) que você pode utilizar e subir em seu registro privado. Ao alterar basta colocar o link que seria utilizado para realizar download da imagem deste registro na chave `imagepath` da respectiva ferramenta.
  * Como as ferramentas que utilizam o próprio motor do Horusec rodam de forma nativa, elas não precisam ser alterado em seu registro, pois já está imbutido dentro da Horusec-CLI.