---
title: Horusec Swift
weight: 11
description: Nesta seção, você vai encontrar mais informações sobre vulnerabilidades que o Horusec encontra em projetos Swift.
---

---

## **O que é?**
 
O [**Horusec-Swift**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-kotlin.md#horusec-swift-cli" lang="pt-br">}}) é uma ferramenta SAST criada pela equipe do Horusec para fazer a busca de vulnerabilidades em projetos Swift.

## **Exemplos de vulnerabilidades**

{{% alert color="info" %}}

A seguir, você encontra todas as regras para o Horusec-Swift. O conteúdo foi traduzido, porém também foi mantido em inglês porque é assim que a mensagem aparece no sistema. 

{{% /alert %}}

### **SQLite Database**
{{% alert color="info" %}}
ID: "HS-SWIFT-1"
{{% /alert %}}

App uses SQLite Database. Sensitive Information should be encrypted.

### **CoreData Database**
{{% alert color="info" %}}
ID: "HS-SWIFT-2"
{{% /alert %}}

App uses CoreData Database. Sensitive Information should be encrypted.

### **DTLS 1.2 not used**
{{% alert color="info" %}}
ID: "HS-SWIFT-3"
{{% /alert %}}

DTLS 1.2 should be used. Detected old version - DTLS 1.0.

### **TLS 1.3 not used**
{{% alert color="info" %}}
ID: "HS-SWIFT-4"
{{% /alert %}}

TLS 1.3 should be used. Detected old version - TLS 1.2.

### **Reverse engineering**
{{% alert color="info" %}}
ID: "HS-SWIFT-5"
{{% /alert %}}

This App may have Reverse engineering detection capabilities.

### **Weak MD5 hash using**
{{% alert color="info" %}}
ID: "HS-SWIFT-6"
{{% /alert %}}

The MD5 hash algorithm that was used is considered weak. It can also cause hash collisions. It is always recommended to use some CHF (Cryptographic Hash Function), which is mathematically strong and not reversible. SHA512 would be the most recommended hash for storing the password and it is also important to adopt some type of Salt, so that the Hash is more secure. For more information checkout the [CWE-327](https://cwe.mitre.org/data/definitions/327.html) advisory.

### **Weak DES hash using**
{{% alert color="info" %}}
ID: "HS-SWIFT-7"
{{% /alert %}}

DES is considered strong ciphers for modern applications. Currently, NIST recommends the usage of AES block ciphers instead of DES. For more information checkout the [CWE-326](https://cwe.mitre.org/data/definitions/326.html) advisory.

### **Weak DES hash using**
{{% alert color="info" %}}
ID: "HS-SWIFT-8"
{{% /alert %}}

DES is considered strong ciphers for modern applications. Currently, NIST recommends the usage of AES block ciphers instead of DES. For more information checkout the [CWE-326](https://cwe.mitre.org/data/definitions/326.html) advisory.

### **Weak Cipher Mode**
{{% alert color="info" %}}
ID: "HS-SWIFT-9"
{{% /alert %}}

Cipher algorithms should be robust.
MD5 is a weak hash, which can generate repeated hashes. For more information checkout the [CWE-327](https://cwe.mitre.org/data/definitions/327.html) advisory.

### **Weak MD6 hash using**
{{% alert color="info" %}}
ID: "HS-SWIFT-10"
{{% /alert %}}

MD6 is a weak hash, which can generate repeated hashes. For more information checkout the [CWE-327](https://cwe.mitre.org/data/definitions/327.html) advisory.

### **Weak MD5 hash using**
{{% alert color="info" %}}
ID: "HS-SWIFT-11"
{{% /alert %}}

MD5 is a weak hash, which can generate repeated hashes. For more information checkout the [CWE-327](https://cwe.mitre.org/data/definitions/327.html) advisory.

### **Weak SHA1 hash using**
{{% alert color="info" %}}
ID: "HS-SWIFT-12"
{{% /alert %}}

SHA1 is a weak hash, which can generate repeated hashes. For more information checkout the [CWE-327](https://cwe.mitre.org/data/definitions/327.html) advisory.

### **Jailbreak detection**
{{% alert color="info" %}}
ID: "HS-SWIFT-13"
{{% /alert %}}

This App may have Jailbreak detection capabilities.

### **Javascript injection**
{{% alert color="info" %}}
ID: "HS-SWIFT-14"
{{% /alert %}}

User input in "loadHTMLString" will result in JavaScript Injection.

### **Weak Cipher Mode**
{{% alert color="info" %}}
ID: "HS-SWIFT-15"
{{% /alert %}}

DES is considered strong ciphers for modern applications. Currently, NIST recommends the usage of AES block ciphers instead of DES. For more information checkout the [CWE-326](https://cwe.mitre.org/data/definitions/326.html) advisory.

### **Realm Database**
{{% alert color="info" %}}
ID: "HS-SWIFT-16"
{{% /alert %}}

App uses Realm Database. Sensitive Information should be encrypted.

### **Deperected tls property**
{{% alert color="info" %}}
ID: "HS-SWIFT-17"
{{% /alert %}}

Use of deprecated property tlsMinimumSupportedProtocol. To avoid potential security risks, use tlsMinimumSupportedProtocolVersion

### **UIPasteboard**
{{% alert color="info" %}}
ID: "HS-SWIFT-18"
{{% /alert %}}

This application uses UIPasteboard, improper use of this class can lead to security issues.

### **File protection**
{{% alert color="info" %}}
ID: "HS-SWIFT-19"
{{% /alert %}}

The file has no special protections associated with it.

### **WebView Safari**
{{% alert color="info" %}}
ID: "HS-SWIFT-20"
{{% /alert %}}

It is recommended to use WKWebView instead of SFSafariViewController or UIWebView to prevent navigating to arbitrary URLs.

### **Keyboard cache**
{{% alert color="info" %}}
ID: "HS-SWIFT-21"
{{% /alert %}}

Keyboard cache should be disabled for all sensitive data inputs.


### **Weak MD4 hash using**
{{% alert color="info" %}}
ID: "HS-SWIFT-22"
{{% /alert %}}

MD4 is a weak hash known to have hash collisions.

### **Weak MD2 hash using**
{{% alert color="info" %}}
ID: "HS-SWIFT-23"
{{% /alert %}}

MD2 is a weak hash, which can generate repeated hashes. For more information checkout the [CWE-327](https://cwe.mitre.org/data/definitions/327.html) advisory.

### **SHA1 collision**
{{% alert color="info" %}}
ID: "HS-SWIFT-21"
{{% /alert %}}

SHA1 is a weak hash known to have hash collisions.

### **MD5 collision**

MD5 is a weak hash known to have hash collisions.


### **MD6 collision**

MD6 is a weak hash known to have hash collisions.


### **Improper Restriction of Rendered UI Layers or Frames**

Your Nginx file must include the X-Frame-Options header. A web application is expected to place restrictions on whether it is allowed to be rendered within frames, iframes, objects, embed or applet elements. Without the restrictions, users can be tricked into interacting with the application when they were not intending to. For more information checkout the CWE-1021 (https://cwe.mitre.org/data/definitions/1021.html) advisory.

### **Missing X-Content-Type-Options header**

Setting this header will prevent the browser from interpreting files as a different MIME type to what is specified in the Content-Type HTTP header (e.g. treating text/plain as text/css). For more information checkout https://owasp.org/www-project-secure-headers/#x-content-type-options.


### **Missing Content-Security-Policy header**

A Content Security Policy (also named CSP) requires careful tuning and precise definition of the policy. If enabled, CSP has significant impact on the way browsers render pages (e.g., inline JavaScript is disabled by default and must be explicitly allowed in the policy). CSP prevents a wide range of attacks, including cross-site scripting and other cross-site injections. For more information checkout https://owasp.org/www-project-secure-headers/#content-security-policy.

### **Exposure of Sensitive Information**

Your Nginx file must include 'server_tokens off;' configuration. There are many different kinds of mistakes that introduce information exposures. The severities of the error can range widely, depending on the context in which the product operates, the type of sensitive information that is revealed, and the benefits it may provide to an attacker. For more information checkout the CWE-200 (https://cwe.mitre.org/data/definitions/200.html) advisory.