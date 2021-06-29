---
title: Overview
weight: 10
type: list
description: >-
 In this section, you will find more information about what kind of tools Horusec-CLI uses in the analysis. 
---


## **Available programming languages and tools** 

Currently, Horusec can select the languages ​​and/or tools to be used on the project based on the available stack.

See below these languages, the analysis tools and which version they are available:

| **Language** | **Analysis Tools** | **Availability** |
| :--- | :--- | :--- | 
| Python |[**Bandit**](https://github.com/PyCQA/bandit), [**Safety**](https://github.com/pyupio/safety), [**Semgrep**](https://github.com/returntocorp/semgrep) and [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2). | Version 2.0
| Ruby |[**Brakeman**](https://github.com/presidentbeef/brakeman), [**Bundler Audit**](https://github.com/rubysec/bundler-audit) and [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2).| v2.0
| Javascript/Typescript |[**Npm Audit**](https://docs.npmjs.com/cli/audit), [**Yarn Audit**](https://yarnpkg.com/lang/en/docs/cli/audit/), [**Semgrep**](https://github.com/returntocorp/semgrep), [[**HorusecNodeJS**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-nodejs.md" lang="en">}}), [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2) e [**EsLint**](https://github.com/eslint/eslint) | v2.0
| GoLang |[**Gosec**](https://github.com/securego/gosec), [**Semgrep**](https://github.com/returntocorp/semgrep) and [**Nancy**](https://github.com/sonatype-nexus-community/nancy) (v.2.2.1) | v2.0
| C\#|[**SecuriyCodeScan**](https://security-code-scan.github.io), [**HorusecCSharp**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-csharp.md" lang="en">}}), [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2) and [**DotNet CLI**](https://docs.microsoft.com/pt-br/dotnet/core/tools/dotnet-list-package) (v2.2).| v2.0
| Java |[**HorusecJava**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-java.md" lang="en">}}), [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2) and [**Semgrep**](https://github.com/returntocorp/semgrep)|   v2.0
| Kotlin | [**HorusecKotlin**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-kotlin.md" lang="en">}}) | v2.0
| Kubernetes |[**HorusecKubernetes**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-kubernetes.md" lang="en">}})| 2.0
| Terraform |[**Tfsec**](https://github.com/liamg/tfsec) | v2.0
| Leaks |[**HorusecLeaks**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-leaks.md" lang="en">}}) | v2.0
| Leaks \(optional search in git history\) |[**GitLeaks**](https://github.com/zricethezav/gitleaks)| v2.0
| PHP |[**Semgrep**](https://github.com/returntocorp/semgrep), [**PHP Code Scan**](https://github.com/FloeDesignTechnologies/phpcs-security-audit)| v2.0
| C\/C++ |[**Semgrep**](https://github.com/returntocorp/semgrep) and [**Flawfinder**](https://github.com/david-a-wheeler/flawfinder) | v2.0
| HTML |[**Semgrep**](https://github.com/returntocorp/semgrep)| v2.0
| JSON |[**Semgrep**](https://github.com/returntocorp/semgrep)| v2.0
| Dart |[**HorusecDart**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-dart.md" lang="pt-br">}})| v2.0
| Shell Script |[**Shellcheck**](https://github.com/koalaman/shellcheck)| v2.0
| Elixir |[**Mix Audit**](https://github.com/mirego/mix_audit) and [**Sobelow**](https://github.com/nccgroup/sobelow) | v2.0
| Nginx |[**HorusecNginx**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-nginx.md" lang="en">}})| v2.0
| Swift |[**HorusecSwift**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-swift.md" lang="en">}})| v2.1
|