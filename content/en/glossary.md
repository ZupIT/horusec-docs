---
title: Glossary
weight: 7
description: In this section, you will find more about Horusec's main concepts.
---

---

## **Vulnerability**

Vulnerability means a security breach in the project and can cause some damage to the system or the organization. Horusec can identify **6 types of security breaches**: 

1. **Critical**
2. **High**
3. **Medium**
4. **Low**
5. **Info**
6. **Unknown**

### **False positive**

It happens when you declare that security breaches found in a safe code don't represent any risk to your application.

In this case, the vulnerability is a false positive.

For example, a test file that you want to know if the URL connecting to the database is being assembled correctly.  In this case the URL would be:

```go
conn := "postgresql://root:root@postgresql:5432/horusec_db?sslmode=disable"
```

Here, Horusec tells you that a ''Password found in a hardcoded URL".  It is a test file, therefore a 'controlled environment' - you can say it is a false positive vulnerability.

### **Accepted risk**

When you declare being aware of a vulnerability in a safe code after the analysis and you want to take risks over it. You decide to move on to the next step. 

For example, you have a file that has been detected to log in a sensitive information. See:

`log.Info("User logged with CPF: " + cpf_user)`

It will acknowledge it has found a "No Log Sensitive Information". You have 2 options:
1. This change can be done at the moment; 
2. You can say it is an accepted risk until a correction can be done.

## **SAST x DAST x IAST differences**

### SAST **\(Static Application Security Testing\)**

The SAST analyzes the source code of the systems. Tests are usually performed before the system is in production and only in the source code.

{{% alert color="info" %}}
**Horusec** is currently labeled as **SAST**.
{{% /alert %}}

### DAST **\(Dynamic Application Security Testing\)**

The DAST tests exposed interfaces for vulnerabilities. DAST is great for finding externally visible vulnerabilities. 

It is a tool recommended to find vulnerabilities externally visible. The URL to be tested is enough to perform the test or the binary to be executed. DAST depends on a specialist to write, it makes it difficult to scale, but once written it can be 100% automated.

### IAST **\(Interactive Application Security Testing\)**

IAST is the combination of static and dynamic test models \(SAST and DAST\) and it has better results.

IAST has an option to perform together with a security analyst, it is the best type of test in terms of false-positive rate, due to human interaction. 

It is a complete tool because there are some bugs that can only be confirmed with both the test results: in the source code and the analysis of the artifact. It also can perform a behavior analysis in the memory.