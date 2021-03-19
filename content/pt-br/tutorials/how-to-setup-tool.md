---
title: Como configurar uma ferramenta do Horusec?
weight: 9
description: Nesta seção, você encontra as informações para configurar uma ferramenta do horusec
---

---

### **Configurando uma ferramenta**
O Horusec disponibiliza uma única opção para você realizar as configurações das ferramentas que ele roda ao iniciar uma análise, veja: 

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

{{% alert color="warning" %}}
Com essa configuração:

* É possível desabilitar/habilitar uma ferramenta quando você inicia uma análise alterando a chave **`istoignore`**;

* É possível utilizar a imagem do seu próprio registro. Veja a [**lista de todos os DockerFiles**](https://github.com/ZupIT/horusec/tree/master/deployments/dockerfiles) que você pode utilizar e subir no seu registro privado. 
Para alterar, coloque o link que seria utilizado para realizar download da imagem deste registro na chave **`imagepath`** da respectiva ferramenta.

* As ferramentas que utilizam o **próprio motor do Horusec** rodam de forma nativa, então não precisam ser alteradas em seu registro, porque já estão dentro da Horusec-CLI.

{{% /alert %}}