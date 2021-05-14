---
title: How to setup a Horusec tool?
weight: 17
description: In this section, you will find how to configure a Horusec tool.
---

# **Configuring a tool**

Horusec provides only one option for you to configure the tools that it runs when the analysis starts, see:

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
With this configuration:

* It is possible to disable/enable a tool when you start an analysis changing the **`istoignore`** key;

* It is possible to use a image of your own registry. See the [**list of all languages and your deployments**](https://github.com/ZupIT/horusec/tree/master/horusec-cli/internal/services/formatters) that you can use and upload on your private registry. To change it, put the link that would be used to download the registry's image on the respective **`language`**.

* The languages that use only the **own Horusec's engine** to run natively, so it doesn't need to be changed on your registry, because they already inside of Horusec-CLI.

{{% alert color="warning" %}}
If you are using a private resgration, you need to add the following environment variants so that Horusec can perform authentication and download your respective images.
```bash
export HORUSEC_CLI_REGISTRY_USERNAME=""
export HORUSEC_CLI_REGISTRY_PASSWORD=""
export HORUSEC_CLI_REGISTRY_ADDRESS=""
```
{{% /alert %}}

{{% /alert %}}