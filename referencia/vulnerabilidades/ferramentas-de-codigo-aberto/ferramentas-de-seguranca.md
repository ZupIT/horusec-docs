---
description: >-
  Nesta seção, você encontra informações das ferramentas SAST utilizadas pelo
  Horusec nas suas análises.
---

# Ferramentas de segurança

### Bandit

O [**Bandit**](https://github.com/PyCQA/bandit) **** é uma ferramenta projetada para encontrar problemas de segurança comuns no código **Python**. Para entender melhor os critérios que o Bandit aplica, você pode acessar [**a lista de regras** ](https://bandit.readthedocs.io/en/latest/plugins/index.html#complete-test-plugin-listing) aplicadas nas análises.

### Brakeman

O [**Brakeman**](https://github.com/presidentbeef/brakeman) é uma ferramenta de análise estática que verifica os aplicativos **Ruby on Rails** para vulnerabilidades de segurança.

Para entender melhor os critérios do Brakemen, acesse a [**lista de vulnerabilidades** ](https://brakemanscanner.org/docs/warning_types/)que podem ser encontradas pela ferramenta.

### EsLint

\*\*\*\*[**Eslint**](https://github.com/eslint/eslint) ****é uma ferramenta  [**SAST**](../../../principais-conceitos.md#sast-static-application-security-testing)para identificar e relatar os padrões encontrados no código ECMAScript/JavaScript. Em muitos aspectos, é semelhante a JSLint e JSHint, com algumas exceções:

* ESLint usa [Espree](https://github.com/eslint/espree) para análise de JavaScript.
* ESLint usa um AST para avaliar padrões no código.
* ESLint é completamente plugável, cada regra é um plugin e você pode adicionar mais em tempo de execução.

Para entender melhor os critérios do EsLint, acesse a [**lista de regras**](https://eslint.org/docs/rules/) que a ferramenta aplica em suas análises.

### Flawfinder

\*\*\*\*[**Flawfinder**](https://github.com/david-a-wheeler/flawfinder) é uma ferramenta open source que escaneia e reportar potenciais falhas de segurança em códigos fonte C/C++ . Além da busca por vulnerabilidades, a ferramenta também pode ser usada como uma introdução a recursos de análise de código fonte estático.

### GoSec

O [**Gosec**](https://github.com/securego/gosec) é uma ferramenta que inspeciona o código-fonte em busca de problemas de segurança examinando o Go AST em aplicações utilizando **GoLang**. 

Para entender melhor os critérios do Gosec, acesse a [**lista de regras** ](https://github.com/securego/gosec#available-rules)que a ferramenta aplica em suas análises.

### GitLeaks

O [**GitLeaks**](https://github.com/zricethezav/gitleaks) é uma ferramenta [**SAST**](../../../principais-conceitos.md#sast-static-application-security-testing) para detectar segredos codificados como senhas, chaves de API e tokens em todo o histórico dos repositórios git.

Para entender melhor os critérios do GitLeaks, acesse a [**lista de regras** ](https://github.com/ZupIT/horusec/blob/master/deployments/dockerfiles/gitleaks/rules.toml)que a ferramenta aplica em suas análises.

### NpmAudit

O [**NpmAudit**](https://docs.npmjs.com/cli/audit.html) é uma ferramenta de segurança que realiza a auditoria de dependências que utilizam o pacotes do **npm** em projetos **Javascript**. 

Para isso, ele envia uma descrição das dependências configuradas em seu projeto para o registro padrão e solicita um relatório de vulnerabilidades conhecidas.

### PHP Code Scan

\*\*\*\*[**PHP Code Scan**](https://github.com/FloeDesignTechnologies/phpcs-security-audit) ****é um set das regras do [**PHP\_CodeSniffer**](https://github.com/squizlabs/PHP_CodeSniffer) que identifica vulnerabilidades e fraquezas relacionadas à segurança do código PHP.

### Safety

O [**Safety**](https://github.com/pyupio/safety)  ****é uma ferramenta que verifica suas dependências instaladas em busca de vulnerabilidades de segurança conhecidas em aplicações **Python**. Por padrão, ele usa o banco de dados de vulnerabilidades Python aberto [**Safety DB**](https://github.com/pyupio/safety-db)**.** 

### Security Code Scan

O [**Security Code Scan**](https://github.com/security-code-scan/security-code-scan) é uma ferramenta de segurança para aplicações que utilizam **.NetCore** ou **.Net** .  
Atualmente, existe dois modos de uso, ambos aplicados na análise do Horusec: 

1. Para desenvolvedores;
2. Para auditores. 

Para entender melhor os critérios do Security Code Scan, acesse a [**lista de regras** ](https://security-code-scan.github.io/#rules)que a ferramenta aplica em suas análises.  


### Semgrep

[**Semgrep**](https://github.com/returntocorp/semgrep) ****é uma ferramenta  [**SAST**](../../../principais-conceitos.md#sast-static-application-security-testing), que se destaca na expressão de padrões de código - sem consultas complicadas - e na detecção de bugs no início do editor, no commit e no tempo de CI. Regras precisas se parecem com o código que você está pesquisando; não mais percorrer árvores de sintaxe abstrata ou lutar com regexes.

Para entender melhor os critérios do Semgrep, acesse a [**lista de regras**](https://semgrep.dev/docs/rules/) que a ferramenta aplica em suas análises.

### TFSec

O [**TFSec**](https://github.com/tfsec/tfsec) é uma ferramenta de segurança que usa análise estática de **terraform templates** para detectar possíveis problemas de segurança. Veja abaixo a lista de regras que a ferramenta aplica em suas análises:

* De modo geral \([**General**](https://github.com/tfsec/tfsec/blob/master/docs/GENERAL_CHECKS.md)**\)**
* Para [**AWS**](https://github.com/tfsec/tfsec/blob/master/docs/AWS_CHECKS.md)\*\*\*\*
* Para [**Azure**](https://github.com/tfsec/tfsec/blob/master/docs/AZURE_CHECKS.md)\*\*\*\*
* Para [**Google**](https://github.com/tfsec/tfsec/blob/master/docs/GOOGLE_CHECKS.md)\*\*\*\*

### YarnAudit

 O [**YarnAudit**](https://classic.yarnpkg.com/en/docs/cli/audit/) é uma ferramenta de segurança que realiza a auditoria de dependências que utilizam o pacotes do **yarn** em projetos **Javascript**. 

Para isso, ele envia uma descrição das dependências configuradas em seu projeto para o registro padrão e solicita um relatório de vulnerabilidades.

