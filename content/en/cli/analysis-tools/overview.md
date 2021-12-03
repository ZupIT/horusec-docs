---
title: Overview
weight: 10
type: list
description: >-
 In this section, you will find more information about what kind of tools Horusec-CLI uses in the analysis. 
---

## Overview 

Horusec identifies the languages in your project and from that starts an analysis. You can also configure which language/tool you want to perform in your analysis, just change it in the configuration.

Horusec knows the resources available in your machine to perform an analysis in your CI/CD stack, and because of that it scales the amount of tools it runs simultaneously to deliver quicker results.

{{% alert color="info" %}}
If you want to add a tool in Horusec using the analysis engine already existing the market, access the tutorial [**How to add tools using Horusec-engine?**]({{< ref path="/tutorials/how-to-add-tools-using-horusec-engine.md" lang="en">}})
{{% /alert %}}


## **Horusec's tools**
CLI's version corresponds to the tools' version created by Horusec's team.

See below: 

| **Tools** | **Version** |
| :--- | :--- |
| Horusec-Leaks |v2.6.4 |
| Horusec-Java |v2.6.4  | 
| Horusec Kotlin |v2.6.4 |
| Horusec-Kubernetes |v2.6.4| 
| Horusec-NodeJS |v2.6.4 |
| Horusec-CSharp |v2.6.4| 
| Horusec Dart |v2.6.4|
| Horusec Nginx |v2.6.4| 
| Horusec Swift |v2.6.4| 


## **Available programming languages and tools** 

Currently, Horusec can select the languages ​​and/or tools to be used on the project based on the available stack.

See below these languages, the analysis tools and which version they are available:

| **Language** | **Analysis Tools** | **Availability** |
| :--- | :--- | :--- | 
| Python |[**Bandit**](https://github.com/PyCQA/bandit), [**Safety**](https://github.com/pyupio/safety), [**Semgrep**](https://github.com/returntocorp/semgrep), [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2) and [**Trivy**](https://aquasecurity.github.io/trivy/v0.19.2/). | Version 2.0
| Ruby |[**Brakeman**](https://github.com/presidentbeef/brakeman), [**Bundler Audit**](https://github.com/rubysec/bundler-audit), [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2) and [**Trivy**](https://aquasecurity.github.io/trivy/v0.19.2/). | v2.0
| Javascript/Typescript |[**Npm Audit**](https://docs.npmjs.com/cli/audit), [**Yarn Audit**](https://yarnpkg.com/lang/en/docs/cli/audit/), [**Semgrep**](https://github.com/returntocorp/semgrep), [[**HorusecNodeJS**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-nodejs.md" lang="en">}}), [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2), [**EsLint**](https://github.com/eslint/eslint) and [**Trivy**](https://aquasecurity.github.io/trivy/v0.19.2/) | v2.0
| GoLang |[**Gosec**](https://github.com/securego/gosec), [**Semgrep**](https://github.com/returntocorp/semgrep), [**Nancy**](https://github.com/sonatype-nexus-community/nancy) (v.2.2.1) and [**Trivy**](https://aquasecurity.github.io/trivy/v0.19.2/). | v2.0
| C\#|[**SecuriyCodeScan**](https://security-code-scan.github.io), [**HorusecCSharp**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-csharp.md" lang="en">}}), [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2), [**DotNet CLI**](https://docs.microsoft.com/pt-br/dotnet/core/tools/dotnet-list-package) (v2.2) and [**Trivy**](https://aquasecurity.github.io/trivy/v0.19.2/).| v2.0
| Java |[**HorusecJava**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-java.md" lang="en">}}), [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2), [**Semgrep**](https://github.com/returntocorp/semgrep) and [**Trivy**](https://aquasecurity.github.io/trivy/v0.19.2/). |   v2.0
| Kotlin | [**HorusecKotlin**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-kotlin.md" lang="en">}}) | v2.0
| Kubernetes |[**HorusecKubernetes**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-kubernetes.md" lang="en">}})| 2.0
| Terraform |[**Tfsec**](https://github.com/liamg/tfsec) and [**Checkov**](https://github.com/bridgecrewio/checkov). | v2.0
| Leaks |[**HorusecLeaks**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-leaks.md" lang="en">}}) | v2.0
| Leaks \(optional search in git history\) |[**GitLeaks**](https://github.com/zricethezav/gitleaks)| v2.0
| PHP |[**Semgrep**](https://github.com/returntocorp/semgrep), [**PHP Code Scan**](https://github.com/FloeDesignTechnologies/phpcs-security-audit) and [**Trivy**](https://aquasecurity.github.io/trivy/v0.19.2/). | v2.0
| C\/C++ |[**Semgrep**](https://github.com/returntocorp/semgrep) and [**Flawfinder**](https://github.com/david-a-wheeler/flawfinder) | v2.0
| HTML |[**Semgrep**](https://github.com/returntocorp/semgrep)| v2.0
| JSON |[**Semgrep**](https://github.com/returntocorp/semgrep)| v2.0
| Dart |[**HorusecDart**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-dart.md" lang="pt-br">}})| v2.0
| Shell Script |[**Shellcheck**](https://github.com/koalaman/shellcheck)| v2.0
| Elixir |[**Mix Audit**](https://github.com/mirego/mix_audit) and [**Sobelow**](https://github.com/nccgroup/sobelow) | v2.0
| Nginx |[**HorusecNginx**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-nginx.md" lang="en">}})| v2.0
| Swift |[**HorusecSwift**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-swift.md" lang="en">}})| v2.1
|

### **Available version on Horusec-CLI**
| **Tools** | **Version** |
| :--- | :--- |
| [**Bandit**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/python/deployments/Dockerfile) |Version: 1.7.0 |
| [**Brakeman**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/ruby/deployments/Dockerfile) |v5.1.1  | 
| [**Bundler Audit**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/ruby/deployments/Dockerfile) |v0.9.0| 
| [**Checkov**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/hcl/deployments/Dockerfile) |v2.0.474| 
| [**DotNet CLI**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/csharp/deployments/Dockerfile) |v5.0| 
| [**Flawfinder**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/c/deployments/Dockerfile) |v2.0.19 |
| [**GoSec**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/go/deployments/Dockerfile) |v2.8.1| 
| [**GitLeaks**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/leaks/deployments/Dockerfile) |v7.6.1|
| [**MixAudit**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/elixir/deployments/Dockerfile) |v1.0.0|
| [**Nancy**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/go/deployments/Dockerfile) |v1.0.22|
| [**NpmAudit**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/javascript/deployments/Dockerfile) |v6.14.7| 
| [**Owasp Dependency Check**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/generic/deployments/Dockerfile) |v6.2.2| 
| [**PHP Code Sniffer**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/php/deployments/Dockerfile) |v8.0.11|
| [**Safety**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/python/deployments/Dockerfile) |v1.10.3| 
| [**Security Code Scan**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/csharp/deployments/Dockerfile) |v5.2.2| 
| [**Semgrep**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/generic/deployments/Dockerfile) |v0.63.0|
| [**Sobelow**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/elixir/deployments/Dockerfile) |v0.11.1|
| [**ShellCheck**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/shell/deployments/Dockerfile) |v0.7.2| 
| [**TFSec**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/hcl/deployments/Dockerfile) |v0.55.1|
| [**Trivy**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/generic/deployments/Dockerfile) |v0.19.2|
| [**YarnAudit**](https://github.com/ZupIT/horusec/blob/main/internal/services/formatters/javascript/deployments/Dockerfile) |v1.22.5|



### Read more
- [**How to add tools using Horusec-engine?**]({{< ref path="/tutorials/how-to-add-tools-using-horusec-engine.md" lang="en">}})
- [**How to add security tools to Horusec?**]({{< ref path="/tutorials/how-to-add-security-tools-to-horusec.md" lang="en">}})
