---
title: Glossary
weight: 50
description: You will find here all about Horusec's main concepts.
---

---

## **Vulnerability**

Vulnerability means a security breach in the project and can cause some damage to the system or the organization. Horusec can identify **5 types of security breaches**: 

1. **High**
2. **Medium**
3. **Low**
4. **Audit**
5. **Info**

### **False positive**

It is declared when it is found, even when you find and analyze a vulnerability in a safe code, you - as responsible for the project - decide to take that the identified flaws doesn't represent any risk to the application. 

On this case, the vulnerability is a false positive. 

For example, a test file that you want to know if the URL for connecting to the database is being assembled correctly. The URL would be: 

```text
conn := "postgresql://root:root@postgresql:5432/horusec_db?sslmode=disable"
```

On this example, Horusec tells you that a ''Password found in a hardcoded URL". It is a test file, therefore a 'controlled environment' - you can say it is a false positive vulnerability.

### **Accepted risk**

It is declared when you find and analyze a vulnerability in a safe code, you want to take the risk over it. 

On this case, the vulnerability is an accepted risk, because you are already aware this can let your application vulnerable, you decide to take risks and move on to the next step. 

For example, you have a file that it has been accused to log a sensitive information. See: 

`log.Info("User logged with CPF: " + cpf_user)`

On this example, it will tell you it found a "No Log Sensitive Information", but this change demands a cost to be done - or it can be done at the moment - you can say it is a accepted risk until a correction can be done on it. 

## **SAST x DAST x IAST differences**

### SAST **\(Static Application Security Testing\)**

The SAST analyzes the source code of the systems. Tests are usually performed before the system is in production and only in the source code.

{{%/* alert color="info" %}}
**Horusec** is currently labeled as **SAST**.
{{% /alert */%}}

### DAST **\(Dynamic Application Security Testing\)**

The DAST tests exposed interfaces for vulnerabilities. DAST is great for finding externally visible vulnerabilities. 

For this test, the URL to be tested is already more than sufficient for you to perform the test or the binary to be executed. The downside is that this type of test depends on experts to write, making it difficult to scale, but once written it can be 100% automated.

### IAST **\(Interactive Application Security Testing\)**

IAST is the combination of static and dynamic test models \(SAST and DAST\) and presents the best results.

One of the advantages of IAST is that there is an option to be done together with a security analyst, representing the best type of test in terms of false positive rate, due to human interaction. So it is the most complete in scope, as there are some bugs that can only be confirmed with both the test results in the source code and the analysis of the artifact, and it can even be performed an analysis of the behavior in memory.
