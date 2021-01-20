---
title: Security Tools
weight: 49
description: >-
  Here, you will find more information about SAST tools used by Horusec in the
  analysis.
---

---

### Bandit

[**Bandit**](https://github.com/PyCQA/bandit) is a tool able to find common security problems on **Python** code. To understand better Bandit's criteria, you can access [**the** **rules list**](https://bandit.readthedocs.io/en/latest/plugins/index.html#complete-test-plugin-listing) applied to analysis. 

### Brakeman

[**Brakeman**](https://github.com/presidentbeef/brakeman) is a static analysis tool, that verifies the Ruby on Rails applications to search for any security vulnerabilities. 

If you want to understand more about Brakemen criteria, access the [**vulnerabilities list**](https://brakemanscanner.org/docs/warning_types/) that can found by the tool. 

### Flawfinder

[**Flawfinder**](https://github.com/david-a-wheeler/flawfinder) is an open source tool that scans and repots potencial security flaws on C/C++  source code. Besides searching for vulnerabilities, this tool can also serve as a simple introduction to static source code analysis. 

### GoSec

[**Gosec**](https://github.com/securego/gosec) is a tool that checks the source code in order to search for security issues, inspecting the Go AST in application using **GoLang**.

If you want to know more about Gosec criteria, access the [**rules list**](https://github.com/securego/gosec#available-rules) the tool applies in its analysis. 

### GitLeaks

[**GitLeaks**](https://github.com/zricethezav/gitleaks) is a  [**SAST**](../../../../../../key-concepts#sast-static-application-security-testing) tool to dectect encrypted code like passwords, API keys and tokens in all git repository history. 

If you want to know more about GitLeaks criteria, access the [**rules list**](https://github.com/ZupIT/horusec/blob/master/deployments/dockerfiles/gitleaks/rules.toml) that the tool applies in its analysis. 

### NpmAudit

[**NpmAudit**](https://docs.npmjs.com/cli/audit.html)  is a security tool that makes dependencies audit if you use **npm** packages on **Javascript** projects.

For that, it sends a description of the configured dependencies in your project to the default register and requests a report of the known vulnerabilities

### PHP Code Sniffer

[**PHP Code Sniffer**](https://github.com/FloeDesignTechnologies/phpcs-security-audit) is a  set of [**PHP\_CodeSniffer**](https://github.com/squizlabs/PHP_CodeSniffer) rules that identifies vulnerabilities and weaknesses related to PHP code security.

### Safety

[**Safety**](https://github.com/pyupio/safety)  is a tool that verifies your installed dependencies and search security vulnerabilities in Python applications. By default, it uses [**Safety DB**](https://github.com/pyupio/safety-db) an open Python vulnerabilities  database. 

### Security Code Scan

[**Security Code Scan**](https://github.com/security-code-scan/security-code-scan) is a security tool for applications that use **.NetCore** or**.Net** .

There are two ways to use it, both applied on Horusec analysis:

1. To developers;
2. To auditors.

If you want to know more about the Security Code Scan, access the [**rules list**](https://security-code-scan.github.io/#rules) the tool applies in its analysis. 

### Semgrep

[**Semgrep**](https://github.com/returntocorp/semgrep) is a  [**SAST**](../../../key-concepts#sast-static-application-security-testing) tool, that excels at expressing code standards — without complicated queries — and surfacing bugs early at editor, commit, and CI time. Precise rules look like the code you’re searching; no more traversing abstract syntax trees or wrestling with regexes.

If you want to know more about Semgrep criteria, access the [**rules list**](https://semgrep.dev/docs/rules/) that the tool applies in its analysis. 

### TFSec

[**TFSec**](https://github.com/tfsec/tfsec) is a security tool that uses static analysis of terraform templates to detect security issues.  See below the rules list this tool applies in its analysis: 

* Generally \([**General**](https://github.com/tfsec/tfsec/blob/master/docs/GENERAL_CHECKS)**\)**
*  [**AWS**](https://github.com/tfsec/tfsec/blob/master/docs/AWS_CHECKS)
*  [**Azure**](https://github.com/tfsec/tfsec/blob/master/docs/AZURE_CHECKS)
*  [**Google**](https://github.com/tfsec/tfsec/blob/master/docs/GOOGLE_CHECKS)

### YarnAudit

 [**YarnAudit**](https://classic.yarnpkg.com/en/docs/cli/audit/) is a security tool that makes dependency audit on **yarn** packages on **Javascript** projects. 

For that, it sends a description of the configured dependencies in your project to the default register and requests a report of the vulnerabilities.
