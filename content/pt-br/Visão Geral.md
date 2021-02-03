---
title: Visão Geral
weight: 1
description: >-
  Nesta seção, você vai encontrar as informações iniciais sobre o Horusec antes de se
  aprofundar no produto.
---

---

## **O que é o Horusec?**

É uma ferramenta open source que orquestra outras ferramentas de segurança e identifica falhas de segurança ou vulnerabilidades em projetos, centralizando todos os resultados em um banco de dados para análise e geração de métricas. 

Atualmente, o Horusec seleciona as linguagens e ferramentas a serem utilizadas no projeto de acordo com a stack disponível.

Essas linguagens e ferramentas são:

* **Python**
  * [**Bandit**](https://github.com/PyCQA/bandit)
  * [**Safety**](https://github.com/pyupio/safety)
  * [**Semgrep**](https://github.com/returntocorp/semgrep)
* **Ruby**
  * [**Brakeman**](https://github.com/presidentbeef/brakeman)
* **Javascript/Typescript**
  * [**Npm Audit**](https://docs.npmjs.com/cli/audit)
  * [**Yarn Audit**](https://yarnpkg.com/lang/en/docs/cli/audit/)
  * [**Semgrep**](https://github.com/returntocorp/semgrep)
  * [**HorusecNodeJS**](https://github.com/ZupIT/horusec/tree/master/horusec-nodejs)
  * [**EsLint**](https://github.com/eslint/eslint)
* **GoLang**
  * [**Gosec**](https://github.com/securego/gosec)
  * [**Semgrep**](https://github.com/returntocorp/semgrep)
* **C\#**
  * [**SecuriyCodeScan**](https://security-code-scan.github.io)
  * [**HorusecCSharp**](https://github.com/ZupIT/horusec/tree/master/horusec-csharp)
* **Java**
  * [**HorusecJava**](https://github.com/ZupIT/horusec/tree/master/horusec-java)
  * [**Semgrep**](https://github.com/returntocorp/semgrep)
* **Kotlin**
  * [**HorusecKotlin**](https://github.com/ZupIT/horusec/tree/master/horusec-kotlin)
* **Kubernetes**
  * [**HorusecKubernetes**](https://github.com/ZupIT/horusec/tree/master/horusec-kubernetes)
* **Terraform**
  * [**Tfsec**](https://github.com/liamg/tfsec)
* **Leaks**
  * [**HorusecLeaks**](https://github.com/ZupIT/horusec/tree/master/horusec-leaks)
* **Leaks\(optional search in git history\)**
  * [**GitLeaks**](https://github.com/zricethezav/gitleaks)
* **PHP**
  * [**Semgrep**](https://github.com/returntocorp/semgrep)
  * [**PHP Code Scan**](https://github.com/FloeDesignTechnologies/phpcs-security-audit)
* **C\/C++**
  * [**Semgrep**](https://github.com/returntocorp/semgrep)
  * [**Flawfinder**](https://github.com/david-a-wheeler/flawfinder)
* **HTML**
  * [**Semgrep**](https://github.com/returntocorp/semgrep)
* **JSON**
  * [**Semgrep**](https://github.com/returntocorp/semgrep)
* **Dart**
  * [**HorusecDart**](https://github.com/ZupIT/horusec/tree/master/horusec-dart)
* **Shell Script**
  * [**Shellcheck**](https://github.com/koalaman/shellcheck)
* **Elixir**
  * [**Mix Audit**](https://github.com/mirego/mix_audit)
  * [**Sobelow**](https://github.com/nccgroup/sobelow)


{{% alert color="info" %}}

Caso você não queira que o Horusec utilize uma determinada linguagem e/ou ferramenta, basta desabilitar essa configuração na CLI.

{{% /alert %}}


### **Arquitetura do Horusec**

![](/docs/architecturehorusec.png)



## **Como funciona?**

Existem duas principais tarefas no Horusec: acessar o Dashboard e gerar as análises.

### **1. Acesso ao Dashboard**

Para acessar, é necessário criar um login e senha. Feito isso, você pode navegar no Dashboard e realizar ações como:

* Definir as permissões para os outros usuários;
* Criar repositórios;
* Gerar tokens para realizar a análise de um projeto.

### **2. Processo de Análises** 

Para realizar a análise, você deve utilizar o CLI \(Command Line Interface\). Caso queira conferir o resultado, você também pode acessar uma interface web, que garante uma visão mais analítica e detalhada.

Se existir alguma falha de segurança no código, o Horusec aponta o arquivo, o nível de gravidade e, em seguida, informa a melhor maneira de corrigir. Veja no exemplo abaixo:

### **Visão CLI** 

![](/docs/image%20%285%29.png)

### **Visão interface Web** 

![](https://lh3.googleusercontent.com/9ETkR59CP7wF9LJ8-cLunT-6jU93pmGq3nwXkNdg2T6g3FH9M6oZ7k5d4OCbR2e6Ph1v2EvBERgWHHUoCVKp_Df-0e7Zgp_uoKygRq7fcTC36VzmjcKJI77iR1n75ST7HeZE8ZuO)



![](https://lh3.googleusercontent.com/FsOq3UQckswg7aCTszEP7lECRhk8q286ngGl2NV9Y_rL6zrTOYh61HON_8hhLnUlyeok1qPrlMQcJWjcfp1lIQ56TsuV_E0fbiFwrmSm4RZfdQnvQw8Ql_heTs2-xP6kV5XV29fD)

Exemplos de vulnerabilidades: 

```text
Language: Leaks
Severity: HIGH
Line: 1
Column: 27
SecurityTool: HorusecLeaks
Confidence: MEDIUM
File: deployments/certs/server-cert.pem
Code: -----BEGIN CERTIFICATE-----
Details: Asymmetric Private Key
Found SSH and/or x.509 Cerficates among the files of your project, make sure you want this kind of information inside your Git repo, since it can be missused by someone with access to any kind of copy.  For more information checkout the CWE-312 (https://cwe.mitre.org/data/definitions/312.html) advisory.
Type: Vulnerability
ReferenceHash: 178bf5090b749f5eb7b081bccb0112eadac3d9ed3229d813e727ede62a3c6f15
```

## **Por que usar o Horusec?**

* **Promove a cultura do desenvolvimento seguro aplicando a lógica de “security by design”** 

Ele traz para você segurança, garantindo que possíveis vulnerabilidades desconhecidas serão encontradas pela análise do Horusec.

* **Melhora a sua experiência** 

Garante a segurança dos projetos no processo de CI e CD e, assim, reduz os custos de correção de uma vulnerabilidade. 

## **Tipos de análises do Horusec**

O Horusec realiza 3 tipos de análises de desempenho para identificar se existe alguma falha de segurança: 

1. **SAST \(Static Application Security Testing \|Teste Estático de Segurança de Aplicação\)**  

O SAST faz a análise estática de vulnerabilidade de código. Elas podem ser feitas em código fonte, byte code ou binário.

2. **Leaks \(Vazamento de chaves\)** 

O Leaks procura no código fonte possíveis vazamentos de credenciais, chaves privadas ou senhas Hard coded.

3. **Auditoria de dependência**   

É realizada uma auditoria de dependência  para verificar a possibilidade de vulnerabilidades em bibliotecas de terceiros.
