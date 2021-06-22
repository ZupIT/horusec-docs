---
title: Other Tools
weight: 49
description: >-
  In this section, you will find more information about tools used by Horusec in the
  analysis.
---

---
## **Other Tools**
There are SAST tools which Horusec works in vulnerabilities identification. Check them below:

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

For that, it sends a description of the configured dependencies in your project to the default register and requests a report of the known vulnerabilities.

### PHP Code Sniffer

[**PHP Code Sniffer**](https://github.com/FloeDesignTechnologies/phpcs-security-audit) is a  set of [**PHP\_CodeSniffer**](https://github.com/squizlabs/PHP_CodeSniffer) rules that identifies vulnerabilities and weaknesses related to PHP code security.

### Safety

[**Safety**](https://github.com/pyupio/safety)  is a tool that verifies your installed dependencies and search security vulnerabilities in Python applications. By default, it uses [**Safety DB**](https://github.com/pyupio/safety-db) an open Python vulnerabilities  database. 

### Security Code Scan

[**Security Code Scan**](https://github.com/security-code-scan/security-code-scan) is a security tool for applications that use **.NetCore** or **.Net**.

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

It sends a description of the configured dependencies of your project to the default register and requests a report of the vulnerabilities.

### ShellCheck

 [**ShellCheck**](https://github.com/koalaman/shellcheck) is a GPLv3 security tool that offers warnings and suggestions for **bash/shell/bat** scripts. 
 It points out to the user:

- syntax issues that cause a shell to give cryptic error messages;
- semantic problems that cause a shell to behave strangely and counter-intuitively;
- subtle caveats, corner cases and pitfalls that may cause a working script to fail.


### MixAudit

 [**MixAudit**](https://github.com/mirego/mix_audit) is security tool for Elixir programming language that provides a mix deps.audit task to scan dependencies for security vulnerabilities.
 
MixAudit builds two lists when it’s executed in a project:

1. A list of security advisories fetched from the **elixir-security-advisories** repository.
2. A list of Mix dependencies from the various **mix.lock** files in the project.

After that, it loops through each project dependency and tries to find security advisories that apply to it.


### Sobelow

 [**Sobelow**](https://github.com/nccgroup/sobelow) is a static security tool focused on the analysis of the Phoenix framework and its Elixir programming language. 
 
  It is a useful tool for getting a quick view of points-of-interest and it can be used to prevent the introduction of a number of common vulnerabilities.
  Potential vulnerabilities are flagged in different colors according to confidence in their insecurity. 

**Sobelow** detects some types of the following security issues like:

- Insecure configuration;
- Known-vulnerable dependencies;
- Cross-Site scripting
- SQL injection;
- Command injection;
- Code execution;
- Denial of service;
- Transversal directory ;
- Unsafe serialization.

### **Bundler Audit**

The [**Bundler Audit**](https://github.com/rubysec/bundler-audit) It is a security tool for Ruby's dependence audit in order to ensure that applications run the same code on all machines. It does this by managing the gems that the application depends on. Given a list of gems, it can automatically download and install those gems, as well as any other gems needed by the gems that are listed. Before installing gems, it checks the versions of every gem to make sure that they are compatible, and can all be loaded at the same time. After the gems have been installed, Bundler can help you update some or all of them when new versions become available. Finally, it records the exact versions that have been installed, so that others can install the exact same gems.

### **Owasp Dependency Check**

[**Owasp Dependency Check**](https://github.com/jeremylong/DependencyCheck) is a tool that detects publicly vulnerabilities contained in a project's dependencies. It determines if there is an identifier for any dependency, when found, it will generate a report including the associated [**CVE**](https://cve.mitre.org/).

This tool is disabled by default on Horusec, because it increases the analysis time. If you want to enable it, just use the flag `-w true` or `-w`.