---
title: Horusec-Leaks
weight: 54
description: >-
  Here, you will find informations about vulnerabilities that Horusec can find
  on Leaks projects.
---

---

## **What is it?** 

[**Horusec-Leaks**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-leaks.md" lang="en" >}}) is a SAST tool created by Horusec team in order to search for vulnerabilities in projects, searching for coded secrets such as passwords, API keys, tokens and others possible vulnerabilities.

## **Examples of vulnerabilities**

You will find below all the vulnerabilities examples that Horusec-Leaks identify: 

### AWS Manager ID

> When use AWS Manager ID is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-798 \([https://cwe.mitre.org/data/definitions/798.html](https://cwe.mitre.org/data/definitions/798.html)\) advisory.

### AWS Secret Key

> When use AWS Secret Key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-798 \([https://cwe.mitre.org/data/definitions/798.html](https://cwe.mitre.org/data/definitions/798.html)\) /Applications/FakeCarrier.appadvisory.

### AWS MWS key

> When use AWS MWS key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-798 \([https://cwe.mitre.org/data/definitions/798.html](https://cwe.mitre.org/data/definitions/798.html)\) advisory.

### Facebook Secret Key

> When use Facebook Secret Key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### Facebook Client ID

> When use Facebook Client ID is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### Twitter Secret Key

> When use Twitter Secret Key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### Twitter Client ID

> When use Twitter Client ID is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### Github Tokens

> A GitHub access token was found. This pose a critical threat against your organization since it can give access not only to the platform itself and all the members of your \(perhaps private\) organization to feed more accurate spear phishing attacks but also to actual source code from your applications. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### LinkedIn Client ID

> When use LinkedIn Client ID is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### LinkedIn Secret Key

> When use LinkedIn Secret Key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### Slack Tokens

> A hardcoded credential for your company's Slack can pose a huge threat to the safety and image of your company, since, in the wrong hands, this could lead to data leaking, a high chance of a succesful spear phishing attacks and even access to logs and other development related conversations that could leverage a more critical attack. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### Asymmetric Private Key

> Found SSH and/or x.509 Cerficates among the files of your project, make sure you want this kind of information inside your Git repo, since it can be missused by someone with access to any kind of copy. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### Google API key

> When use Google API key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### Google \(GCP\) Service Account

> When use Google \(GCP\) Service Account is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### Heroku API key

> Hardcoded credentials pose a huge threat to your cloud provider account since you can lose control over who can access some resources, which can lead not only to data access violation but also to improper usage of resources leading to a financial loss. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### MailChimp API key

> Mail and/or SMS providers are a huge entrypoint for more sophisticated attacks or even attacks focused on damaging a brand's reputation. Leaving them in your source code will lead your team to lost track of who can access and personificate your company or application. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### Mailgun API key

> Mail and/or SMS providers are a huge entrypoint for more sophisticated attacks or even attacks focused on damaging a brand's reputation. Leaving them in your source code will lead your team to lost track of who can access and personificate your company or application. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### PayPal Braintree access token

> Payment providers are the barebones of your companies monetization so it is a absolutely desaster if any of this tokens fall in wrong hands since they can provide access to crucial information about your company, and in worst case cenarios even lead to big finacial loss. It's important to keep this kind of info in some form of secret manager, e.g Hashicorp's Vault. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### Picatic API key

> When use Picatic API key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### SendGrid API Key

> When use SendGrid API Key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### Stripe API key

> When use Stripe API key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### Square access token

> When use Square access token is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### Square OAuth secret

> When use Square OAuth secret is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### Twilio API key

> When use Twilio API key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

### Potential Hard-coded credential

> The software contains hard-coded credentials, such as a password or cryptographic key, which it uses for its own inbound authentication, outbound communication to external components, or encryption of internal data. For more information checkout the CWE-798 \([https://cwe.mitre.org/data/definitions/798.html](https://cwe.mitre.org/data/definitions/798.html)\) advisory.

### Hard-coded password

> The software contains hard-coded credentials, such as a password or cryptographic key, which it uses for its own inbound authentication, outbound communication to external components, or encryption of internal data. For more information checkout the CWE-798 \([https://cwe.mitre.org/data/definitions/798.html](https://cwe.mitre.org/data/definitions/798.html)\) advisory.

### Password found in a hardcoded URL

> A password was found in a hardcoded URL, this can lead to not only the leak of this password but also a failure point to some more sophisticated CSRF and SSRF attacks. Check CWE-352 \([https://cwe.mitre.org/data/definitions/352.html](https://cwe.mitre.org/data/definitions/352.html)\) and CWE-918 \([https://cwe.mitre.org/data/definitions/918.html](https://cwe.mitre.org/data/definitions/918.html)\) for more details.

### Wordpress configuration file disclosure

> Wordpress configuration file exposed, this can lead to the leak of admin passowrds, database credentials and a lot of sensitive data about the system. Check CWE-200 \([https://cwe.mitre.org/data/definitions/200.html](https://cwe.mitre.org/data/definitions/200.html)\) for more details.
