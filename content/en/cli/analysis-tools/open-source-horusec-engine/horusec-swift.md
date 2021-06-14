---
title: Horusec Swift
weight: 11
description: Here, you will find information about vulnerabilities that Horusec can find on Swift projects.
---

---

## **What is it?**

 [**Horusec-Swift**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-java.md" lang="en">}}) is a SAST tool created by the Horusec team in order to search vulnerabilities on Swift projects. 

## **Examples of vulnerabilities**

### Weak Cipher Mode

> DES is a weak hash, which can generate repeated hashes.

### Weak Cipher Mode

> MD5 is a weak hash, which can generate repeated hashes. For more information checkout the CWE-327 (https://cwe.mitre.org/data/definitions/327.html) advisory.

### Reverse engineering

> This App may have Reverse engineering detection capabilities.


### TLS 1.3 not used

> TLS 1.3 should be used. Detected old version - TLS 1.2.


### DTLS 1.2 not used

> DTLS 1.2 should be used. Detected old version - DTLS 1.0.


### CoreData Database

> App uses CoreData Database. Sensitive Information should be encrypted.


### SQLite Database

> App uses SQLite Database. Sensitive Information should be encrypted.


### Javascript injection

> User input in "loadHTMLString" will result in JavaScript Injection.


### Jailbreak detection

> This App may have Jailbreak detection capabilities.


### SHA1 collision

> SHA1 is a weak hash known to have hash collisions.

### MD2 collision

> MD2 is a weak hash known to have hash collisions.


### MD4 collision

> MD4 is a weak hash known to have hash collisions.


### MD5 collision

> MD5 is a weak hash known to have hash collisions.


### MD6 collision

> MD6 is a weak hash known to have hash collisions.


### WebView Safari

> It is recommended to use WKWebView instead of SFSafariViewController or UIWebView to prevent navigating to arbitrary URLs.


### File protection

> The file has no special protections associated with it.


### UIPasteboard

> This application uses UIPasteboard, improper use of this class can lead to security issues.


### Keyboard cache

> Keyboard cache should be disabled for all sensitive data inputs.


### Deperected tls property

> Use of deprecated property tlsMinimumSupportedProtocol. To avoid potential security risks, use tlsMinimumSupportedProtocolVersion


### Realm Database

> App uses Realm Database. Sensitive Information should be encrypted.
