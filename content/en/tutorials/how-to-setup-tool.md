---
title: How to setup a Horusec tool?
weight: 17
description: In this section, you will find how to configure a Horusec tool.
---

# **Configuring a tool**

Horusec provides only one option for you to configure the tools that it runs when the analysis starts, see:

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
With this configuration:

* It is possible to disable/enable a tool when you start an analysis changing the **`istoignore`** key;

* It is possible to use a image of your own registry. See the [**list of all DockerFiles**](https://github.com/ZupIT/horusec/tree/master/deployments/dockerfiles) that you can use and upload on your private registry. To change it, put the link that would be used to download the registry's image on the **`imagepath`** key of the respective tool.

* The tools that use the **own Horusec's engine** to run natively, so it doesn't need to be changed on your registry, because they already inside of Horusec-CLI.

{{% /alert %}}