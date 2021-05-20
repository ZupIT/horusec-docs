---
title: Horusec Nginx
weight: 16
description: In this section, you will find vulnerabilities Horusec finds in nginx projects.
---

---

## **What is it?**

[**Horusec-Nginx**](/docs/pt-br/cli/analysis-tools/open-source-horusec-engine/horusec-nginx) is a SAST tool created by Horusec's team to search for vulnerabilities in Nginx projects. 

## Rules

{{% alert color="info" %}}

Next, you find all the rules for **Horusec-nginx**. 

{{% /alert %}}

### Improper Restriction of Rendered UI Layers or Frames


> Your Nginx file must include the X-Frame-Options header. A web application is expected to place restrictions on whether it is allowed to be rendered within frames, iframes, objects, embed or applet elements. Without the restrictions, users can be tricked into interacting with the application when they were not intending to. For more information checkout the [**CWE-1021**](**https://cwe.mitre.org/data/definitions/1021.html**) advisory.

### Missing X-Content-Type-Options header

> Setting this header will prevent the browser from interpreting files as a different MIME type to what is specified in the Content-Type HTTP header (e.g. treating text/plain as text/css). For more information checkout [**content-type options**](https://owasp.org/www-project-secure-headers/#x-content-type-options).

### Missing Content-Security-Policy header


> A Content Security Policy (also named CSP) requires careful tuning and precise definition of the policy. If enabled, CSP has significant impact on the way browsers render pages (e.g., inline JavaScript is disabled by default and must be explicitly allowed in the policy). CSP prevents a wide range of attacks, including cross-site scripting and other cross-site injections. For more information see [**the security policy**](https://owasp.org/www-project-secure-headers/#content-security-policy).

### Exposure of Sensitive Information


> Your Nginx file must include 'server_tokens off;' configuration. There are many different kinds of mistakes that introduce information exposures. The severities of the error can range widely, depending on the context in which the product operates, the type of sensitive information that is revealed, and the benefits it may provide to an attacker. For more information checkout the [**CWE-200**](https://cwe.mitre.org/data/definitions/200.html) advisory.
