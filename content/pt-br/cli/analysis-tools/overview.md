---
title: Visão Geral
weight: 10
type: list
description: >-
 Nesta seção, você vai encontrar mais informações sobre os tipos de ferramentas que a Horusec-CLI usa em suas análises.
---

---

## **Linguagens de programação e ferramentas disponíveis**

Atualmente, o Horusec seleciona as linguagens e ferramentas a serem utilizadas no projeto de acordo com a stack disponível.

Veja abaixo quais são as linguagens, as ferramentas de análise e qual a versão disponível:

| **Linguagem** | **Ferramentas de análise** | **Disponibilidade** |
| :--- | :--- | :--- | 
| Python |[**Bandit**](https://github.com/PyCQA/bandit), [**Safety**](https://github.com/pyupio/safety), [**Semgrep**](https://github.com/returntocorp/semgrep) e [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2). | Versão 2.0
| Ruby |[**Brakeman**](https://github.com/presidentbeef/brakeman), [**Bundler Audit**](https://github.com/rubysec/bundler-audit) e [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2).| v2.0
| Javascript/Typescript |[**Npm Audit**](https://docs.npmjs.com/cli/audit), [**Yarn Audit**](https://yarnpkg.com/lang/en/docs/cli/audit/), [**Semgrep**](https://github.com/returntocorp/semgrep), [**HorusecNodeJS**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-nodejs.md" lang="pt-br">}}), [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2) e [**EsLint**](https://github.com/eslint/eslint) | v2.0
| GoLang |[**Gosec**](https://github.com/securego/gosec) e [**Semgrep**](https://github.com/returntocorp/semgrep) | v2.0
| C\#|[**SecuriyCodeScan**](https://security-code-scan.github.io), [**HorusecCSharp**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-csharp.md" lang="pt-br">}}), [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2) e [**DotNet CLI**](https://docs.microsoft.com/pt-br/dotnet/core/tools/dotnet-list-package) (v2.2).| v2.0
| Java |[**HorusecJava**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-java.md" lang="pt-br">}}), [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2) e [**Semgrep**](https://github.com/returntocorp/semgrep)|   v2.0
| Kotlin | [**HorusecKotlin**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-kotlin.md" lang="pt-br">}}) | v2.0
| Kubernetes | [**HorusecKubernetes**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-kubernetes.md" lang="pt-br">}})| 2.0
| Terraform |[**Tfsec**](https://github.com/liamg/tfsec) | v2.0
| Leaks |[**HorusecLeaks**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-leaks.md" lang="pt-br">}}) | v2.0
| Leaks \(análise opcional no histórico git\) |[**GitLeaks**](https://github.com/zricethezav/gitleaks)| v2.0
| PHP |[**Semgrep**](https://github.com/returntocorp/semgrep), [**PHP Code Scan**](https://github.com/FloeDesignTechnologies/phpcs-security-audit)| v2.0
| C\/C++ |[**Semgrep**](https://github.com/returntocorp/semgrep) e [**Flawfinder**](https://github.com/david-a-wheeler/flawfinder) | v2.0
| HTML |[**Semgrep**](https://github.com/returntocorp/semgrep)| v2.0
| JSON |[**Semgrep**](https://github.com/returntocorp/semgrep)| v2.0
| Dart |[**HorusecDart**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-dart.md" lang="pt-br">}})| v2.0
| Shell Script |[**Shellcheck**](https://github.com/koalaman/shellcheck)| v2.0
| Elixir |[**Mix Audit**](https://github.com/mirego/mix_audit) e [**Sobelow**](https://github.com/nccgroup/sobelow) | v2.0
| Nginx |[**HorusecNginx**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-nginx.md" lang="pt-br">}})| v2.0
| Swift |[**HorusecSwift**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-swift.md" lang="pt-br">}}) | v2.1
| 