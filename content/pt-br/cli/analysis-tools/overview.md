---
title: Visão Geral
weight: 10
type: list
description: >-
 Nesta seção, você vai encontrar mais informações sobre os tipos de ferramentas que a Horusec-CLI usa em suas análises.
---

---

## Visão Geral 

O Horusec identifica as linguagens do seu projeto e a partir disso começa uma análise. Você também pode configurar em qual linguagem/ferramenta você quer que sua análise seja feita, acesse as configurações.


O Horusec sabe a quantidade de recursos disponível em sua máquina para realizar a análise na sua esteira CI/CD e por isso ele escala uma quantidade de ferramentas que rodam simultaneamente, isso ajuda a entrega de resultados com mais agilidade.

{{% alert color="info" %}}
Se você quiser adicionar uma ferramenta no Horusec usando o motor de análise ou outra ferramenta já existente no mercado, acesse o tutorial [**Como adicionar uma nova ferramenta usando o Horusec-engine?**]({{< ref path="/tutorials/how-to-add-tools-using-horusec-engine.md" lang="pt-br">}})
{{% /alert %}}


## **Ferramentas Horusec**
A versão da CLI corresponde a versão das ferramentas criadas pelo time do Horusec. Veja abaixo: 

| **Ferramenta** | **Versão** |
| :--- | :--- |
| Horusec-Leaks |v2.3.0 |
| Horusec-Java |v2.3.0  | 
| Horusec Kotlin |v2.3.0 |
| Horusec-Kubernetes |v2.3.0| 
| Horusec-NodeJS |v2.3.0 |
| Horusec-CSharp |v2.3.0| 
| Horusec Dart |v2.3.0|
| Horusec Nginx |v2.3.0| 
| Horusec Swift |v2.3.0| 


## **Linguagens de programação e ferramentas disponíveis**

Atualmente, o Horusec seleciona as linguagens e ferramentas a serem utilizadas no projeto de acordo com a stack disponível.

Veja abaixo quais são as linguagens, as ferramentas de análise e qual a versão disponível:

| **Linguagem** | **Ferramentas de análise** | **Disponibilidade** |
| :--- | :--- | :--- | 
| Python |[**Bandit**](https://github.com/PyCQA/bandit), [**Safety**](https://github.com/pyupio/safety), [**Semgrep**](https://github.com/returntocorp/semgrep), [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2) e [**Trivy**](https://aquasecurity.github.io/trivy/v0.19.2/). | Versão 2.0
| Ruby |[**Brakeman**](https://github.com/presidentbeef/brakeman), [**Bundler Audit**](https://github.com/rubysec/bundler-audit), [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2) e [**Trivy**](https://aquasecurity.github.io/trivy/v0.19.2/).| v2.0
| Javascript/Typescript |[**Npm Audit**](https://docs.npmjs.com/cli/audit), [**Yarn Audit**](https://yarnpkg.com/lang/en/docs/cli/audit/), [**Semgrep**](https://github.com/returntocorp/semgrep), [**HorusecNodeJS**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-nodejs.md" lang="pt-br">}}), [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2), [**EsLint**](https://github.com/eslint/eslint) e [**Trivy**](https://aquasecurity.github.io/trivy/v0.19.2/). | v2.0
| GoLang |[**Gosec**](https://github.com/securego/gosec), [**Semgrep**](https://github.com/returntocorp/semgrep), [**Nancy**](https://github.com/sonatype-nexus-community/nancy) (v.2.2.1) e [**Trivy**](https://aquasecurity.github.io/trivy/v0.19.2/). | v2.0
| C\#|[**SecuriyCodeScan**](https://security-code-scan.github.io), [**HorusecCSharp**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-csharp.md" lang="pt-br">}}), [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2), [**DotNet CLI**](https://docs.microsoft.com/pt-br/dotnet/core/tools/dotnet-list-package) (v2.2) e [**Trivy**](https://aquasecurity.github.io/trivy/v0.19.2/). | v2.0
| Java |[**HorusecJava**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-java.md" lang="pt-br">}}), [**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) (v2.2), [**Semgrep**](https://github.com/returntocorp/semgrep) e [**Trivy**](https://aquasecurity.github.io/trivy/v0.19.2/). |   v2.0
| Kotlin | [**HorusecKotlin**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-kotlin.md" lang="pt-br">}}) | v2.0
| Kubernetes | [**HorusecKubernetes**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-kubernetes.md" lang="pt-br">}})| 2.0
| Terraform |[**Tfsec**](https://github.com/liamg/tfsec) e [**Checkov**](https://github.com/bridgecrewio/checkov). | v2.0
| Leaks |[**HorusecLeaks**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-leaks.md" lang="pt-br">}}) | v2.0
| Leaks \(análise opcional no histórico git\) |[**GitLeaks**](https://github.com/zricethezav/gitleaks)| v2.0
| PHP |[**Semgrep**](https://github.com/returntocorp/semgrep), [**PHP Code Scan**](https://github.com/FloeDesignTechnologies/phpcs-security-audit) e [**Trivy**](https://aquasecurity.github.io/trivy/v0.19.2/). | v2.0
| C\/C++ |[**Semgrep**](https://github.com/returntocorp/semgrep) e [**Flawfinder**](https://github.com/david-a-wheeler/flawfinder) | v2.0
| HTML |[**Semgrep**](https://github.com/returntocorp/semgrep)| v2.0
| JSON |[**Semgrep**](https://github.com/returntocorp/semgrep)| v2.0
| Dart |[**HorusecDart**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-dart.md" lang="pt-br">}})| v2.0
| Shell Script |[**Shellcheck**](https://github.com/koalaman/shellcheck)| v2.0
| Elixir |[**Mix Audit**](https://github.com/mirego/mix_audit) e [**Sobelow**](https://github.com/nccgroup/sobelow) | v2.0
| Nginx |[**HorusecNginx**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-nginx.md" lang="pt-br">}})| v2.0
| Swift |[**HorusecSwift**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-swift.md" lang="pt-br">}}) | v2.1
|


### Leia mais
- [**Como adicionar uma nova ferramenta usando Horusec-engine?**]({{< ref path="/tutorials/how-to-add-tools-using-horusec-engine.md" lang="pt-br">}})
- [**Como adicionar uma nova ferramenta de segurança ao Horusec?**]({{< ref path="/tutorials/how-to-add-security-tools-to-horusec.md" lang="pt-br">}})
 - [**Como adicionar regras personalizadas na Horusec-CLI?**]({{< ref path="/tutorials/how-to-adding-custom-rules" lang="pt-br">}})
