---
title: Como configurar uma ferramenta do Horusec?
weight: 10
description: Nesta seção, você encontra as informações para configurar uma ferramenta do horusec
---

---

## **Configurando uma ferramenta**

O Horusec disponibiliza uma única opção para você realizar as configurações das ferramentas que ele roda ao iniciar uma análise, veja: 

```json
{
    "horusecCliCustomImages": {
        "c": "",
        "csharp": "",
        "elixir": "",
        "generic": "",
        "go": "",
        "hcl": "",
        "javascript": "",
        "leaks": "",
        "php": "",
        "python": "",
        "ruby": "",
        "shell": ""
    },
    "horusecCliToolsConfig": {
    "Bandit": {
        "istoignore": false
    },
    "Brakeman": {
        "istoignore": false
    },
    "BundlerAudit": {
        "istoignore": false
    },
    "Flawfinder": {
        "istoignore": false
    },
    "GitLeaks": {
        "istoignore": false
    },
    "GoSec": {
        "istoignore": false
    },
    "HorusecEngine": {
        "istoignore": false
    },
    "MixAudit": {
        "istoignore": false
    },
    "NpmAudit": {
        "istoignore": false
    },
    "PhpCS": {
        "istoignore": false
    },
    "Safety": {
        "istoignore": false
    },
    "SecurityCodeScan": {
        "istoignore": false
    },
    "Semgrep": {
        "istoignore": false
    },
    "ShellCheck": {
        "istoignore": false
    },
    "Sobelow": {
        "istoignore": false
    },
    "TfSec": {
        "istoignore": false
    },
    "YarnAudit": {
        "istoignore": false
    }
  }
}
```

{{% alert color="warning" %}}
Com essa configuração:

* É possível desabilitar/habilitar uma ferramenta quando você inicia uma análise alterando a chave **`istoignore`**;

* É possível utilizar a imagem do seu próprio registro. Veja a [**lista de todos as linguagens e seus deployments**](https://github.com/ZupIT/horusec/tree/master/horusec-cli/internal/services/formatters) que você pode utilizar e subir no seu registro privado. 
Para alterar, coloque o link que seria utilizado para realizar download da imagem deste registro da sua respectiva **`linguagem`**.

* As linguagem que utilizam somente o **próprio motor do Horusec** rodam de forma nativa, então não precisam ser alteradas em seu registro, porque já estão dentro da Horusec-CLI.

{{% alert color="warning" %}}
Se você está utilizando um resgistro privado, é necessário adicionar as seguintes variavéis de ambiente para que o Horusec consiga realizar autenticação e download das suas respectivas imagens.
```bash
export HORUSEC_CLI_REGISTRY_USERNAME=""
export HORUSEC_CLI_REGISTRY_PASSWORD=""
export HORUSEC_CLI_REGISTRY_ADDRESS=""
```
{{% /alert %}}

{{% /alert %}}