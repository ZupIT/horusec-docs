---
title: Horusec-CSharp
weight: 66
description: Here, you will find informations about vulnerabilities that Horusec can find on csharp projects.
---

---

## **What is it?**

The [**Horusec-Csharp**](https://github.com/ZupIT/horusec/tree/master/horusec-csharp) is a SAST tool created by the Horusec team in order to search vulnerabilities on C\# projects. 

## **Rules**

### **Command Injection**

> If a malicious user controls either the FileName or Arguments, he might be able to execute unwanted commands or add unwanted argument. This behavior would not be possible if input parameter are validate against a white-list of characters. For more information access: \(https://security-code-scan.github.io/\#SCS0001\).

### XPath Injection

> If the user input is not properly filtered, a malicious user could extend the XPath query. For more information access: \(https://security-code-scan.github.io/\#SCS0003\).

### XML eXternal Entity Injection \(XXE\)

> The XML parser is configured incorrectly. The operation could be vulnerable to XML eXternal Entity \(XXE\) processing. For more information access: \(https://security-code-scan.github.io/\#SCS0007\).

### Path Traversal

> A path traversal attack \(also known as directory traversal\) aims to access files and directories that are stored outside the expected directory.By manipulating variables that reference files with “dot-dot-slash \(../\)” sequences and its variations or by using absolute file paths, it may be possible to access arbitrary files and directories stored on file system including application source code or configuration and critical system files. For more information access: \(https://security-code-scan.github.io/\#SCS0018\).

### SQL Injection WebControls

> Malicious user might get direct read and/or write access to the database. If the database is poorly configured the attacker might even get Remote Code Execution \(RCE\) on the machine running the database. For more information access: \(https://security-code-scan.github.io/\#SCS0014\).

### Weak Cipher Mode

> The cipher provides no way to detect that the data has been tampered with. If the cipher text can be controlled by an attacker, it could be altered without detection. The use of AES in CBC mode with a HMAC is recommended guaranteeing integrity and confidentiality. For more information access: \(https://security-code-scan.github.io/\#SCS0013\).

### Forms Authentication Cookieless Mode

> Authentication cookies should not be sent in the URL. Doing so allows attackers to gain unauthorized access to authentication tokens \(web server logs, referrer headers, and browser history\) and more easily perform session fixation / hijacking attacks. For more information checkout the CWE-598 \(https://cwe.mitre.org/data/definitions/598.html\) advisory.

### Forms Authentication Cross App Redirects

> Enabling cross-application redirects can allow unvalidated redirect attacks via the returnUrl parameter during the login process. Disable cross-application redirects to by setting the enableCrossAppRedirects attribute to false. For more information checkout the CWE-601 \(https://cwe.mitre.org/data/definitions/601.html\) advisory.

### Forms Authentication Weak Cookie Protection

> Forms Authentication cookies must use strong encryption and message authentication code \(MAC\) validation to protect the cookie value from inspection and tampering. Configure the forms element’s protection attribute to All to enable cookie data validation and encryption. For more information checkout the CWE-565 \(https://cwe.mitre.org/data/definitions/565.html\) advisory.

### Forms Authentication Weak Timeout

> Excessive authentication timeout values provide attackers with a large window of opportunity to hijack user’s authentication tokens. For more information checkout the CWE-613 \(https://cwe.mitre.org/data/definitions/613.html\) advisory.

### Header Checking Disabled

> Disabling the HTTP Runtime header checking protection opens the application up to HTTP Header Injection \(aka Response Splitting\) attacks. Enable the header checking protection by setting the httpRuntime element’s enableHeaderChecking attribute to true, which is the default value. For more information checkout the CWE-113 \(https://cwe.mitre.org/data/definitions/113.html\) advisory.

### Version Header Enabled

> The Version HTTP response header sends the ASP.NET framework version to the client’s browser. This information can help an attacker identify vulnerabilities in the server’s framework version and should be disabled in production. Disable the version response header by setting the httpRuntime element’s enableVersionHeader attribute to false. For more information checkout the CWE-200 \(https://cwe.mitre.org/data/definitions/200.html\) advisory.

### Event Validation Disabled

> Event validation prevents unauthorized post backs in web form applications. Disabling this feature can allow attackers to forge requests from controls not visible or enabled on a given web form. Enable event validation by setting the page element’s eventValidation attribute to true. For more information checkout the CWE-807 \(https://cwe.mitre.org/data/definitions/807.html\) advisory.

### Weak Session Timeout

> If session data is used by the application for authentication, excessive timeout values provide attackers with a large window of opportunity to hijack user’s session tokens. Configure the session timeout value to meet your organization’s timeout policy. For more information checkout the CWE-613 \(https://cwe.mitre.org/data/definitions/613.html\) advisory.

### Weak Session Timeout

> The session StateServer mode transports session data insecurely to a remote server. The remote server also does not require system authentication to access the session data for an application. This risk depends entirely on the sensitivity of the data stored in the user’s session. If the session data is considered sensitive, consider adding an external control \(e.g. IPSEC\) that provides mutual authentication and transport security. For more information checkout the CWE-319 \(https://cwe.mitre.org/data/definitions/319.html\) advisory.

### Jwt Signature Validation Disabled

> Web service APIs relying on JSON Web Tokens \(JWT\) for authentication and authorization must sign each JWT with a private key or secret. Each web service endpoint must require JWT signature validation prior to decoding and using the token to access protected resources. The values RequireExpirationTime, RequireSignedTokens, ValidateLifetime can't was false. For more information checkout the CWE-347 \(https://cwe.mitre.org/data/definitions/347.html\) and CWE-613 \(https://cwe.mitre.org/data/definitions/613.html\) advisory.

### Insecure Http Cookie Transport

> Cookies containing authentication tokens, session tokens, and other state management credentials must be protected in transit across a network. Set the cookie options’ Secure property to true to prevent the browser from transmitting cookies over HTTP. For more information checkout the CWE-614 \(https://cwe.mitre.org/data/definitions/614.html\) advisory.

### Http Cookie Accessible Via Script

> Cookies containing authentication tokens, session tokens, and other state management credentials should be protected from malicious JavaScript running in the browser. Setting the httpOnly attribute to false can allow attackers to inject malicious scripts into the site and extract authentication cookie values to a remote server. Configure the cookie options’ httpOnly property to true, which prevents cookie access from scripts running in the browser. For more information checkout the CWE-1004 \(https://cwe.mitre.org/data/definitions/1004.html\) advisory.

### Directory Listing Enabled

> Directory listing provides a complete index of the resources located in a web directory. Enabling directory listing can expose sensitive resources such as application binaries, configuration files, and static content that should not be exposed. Unless directory listing is required to meet the application’s functional requirements, disable the listing by setting the directoryBrowse element’s enabled attribute to false. For more information checkout the CWE-548 \(https://cwe.mitre.org/data/definitions/548.html\) advisory.

### Ldap Authentication Disabled

> Disabling LDAP Authentication configures insecure connections to the backend LDAP provider. Using the DirectoryEntry AuthenticationType property’s Anonymous or None option allows an anonymous or basic authentication connection to the LDAP provider. Set the the DirectoryEntry AuthenticationType property to Secure, which requests Kerberos authentication under the security context of the calling thread or as a provider username and password. For more information checkout the CWE-287 \(https://cwe.mitre.org/data/definitions/287.html\) advisory.

### Certificate Validation Disabled

> Disabling certificate validation is common in testing and development environments. Quite often, this is accidentally deployed to production, leaving the application vulnerable to man-in-the-middle attacks on insecure networks. For more information checkout the CWE-295 \(https://cwe.mitre.org/data/definitions/295.html\) advisory.

### Action Request Validation Disabled

> Request validation performs blacklist input validation for XSS payloads found in form and URL request parameters. Request validation has known bypass issues and does not prevent all XSS attacks, but it does provide a strong countermeasure for most payloads targeting a HTML context. For more information checkout the CWE-20 \(https://cwe.mitre.org/data/definitions/20.html\) advisory.

### Xml Document External Entity Expansion

> XML External Entity \(XXE\) vulnerabilities occur when applications process untrusted XML data without disabling external entities and DTD processing. Processing untrusted XML data with a vulnerable parser can allow attackers to extract data from the server, perform denial of service attacks, and in some cases gain remote code execution. The XmlDocument class is vulnerable to XXE attacks when setting the XmlResolver property to resolve external entities. To prevent XmlDocument XXE attacks, set the XmlResolver property to null. For more information checkout the CWE-611 \(https://cwe.mitre.org/data/definitions/611.html\) advisory.

### **Ldap Injection Filter Assignment**

> LDAP Injection vulnerabilities occur when untrusted data is concatenated into a LDAP Path or Filter expression without properly escaping control characters. This can allow attackers to change the meaning of an LDAP query and gain access to resources for which they are not authorized. For more information checkout the CWE-90 \(https://cwe.mitre.org/data/definitions/90.html\) advisory.

### Sql Injection: Dynamic NHibernate Query

> Concatenating untrusted data into a dynamic SQL string and calling vulnerable NHibernate Framework methods can allow SQL Injection. To ensure calls to vulnerable NHibernate Framework methods are parameterized, pass positional or named parameters in the statement. The following NHibernate methods allow for raw SQL queries to be executed: CreateQuery CreateSqlQuery To ensure calls to vulnerable NHibernate methods are parameterized, use named parameters in the raw SQL query. Then, set the named parameter values when executing the query. For more information checkout the CWE-89 \(https://cwe.mitre.org/data/definitions/89.html\) advisory.

### Ldap Injection Directory Searcher

> LDAP Injection vulnerabilities occur when untrusted data is concatenated into a LDAP Path or Filter expression without properly escaping control characters. This can allow attackers to change the meaning of an LDAP query and gain access to resources for which they are not authorized. For more information checkout the CWE-90 \(https://cwe.mitre.org/data/definitions/90.html\) advisory.

### Ldap Injection Path Assignment

> LDAP Injection vulnerabilities occur when untrusted data is concatenated into a LDAP Path or Filter expression without properly escaping control characters. This can allow attackers to change the meaning of an LDAP query and gain access to resources for which they are not authorized. For more information checkout the CWE-90 \(https://cwe.mitre.org/data/definitions/90.html\) advisory.

### LDAP Injection

> The dynamic value passed to the LDAP query should be validated. For more information access: \(https://security-code-scan.github.io/\#SCS0031\).

### SQL Injection LINQ

> Malicious user might get direct read and/or write access to the database. If the database is poorly configured the attacker might even get Remote Code Execution \(RCE\) on the machine running the database.. For more information access: \(https://security-code-scan.github.io/\#SCS0002\).

### Insecure Deserialization

> Arbitrary code execution, full application compromise or denial of service. An attacker may pass specially crafted serialized .NET object of specific class that will execute malicious code during the construction of the object. For more information access: \(https://security-code-scan.github.io/\#SCS0028\).

### SQL Injection Enterprise Library Data

> Arbitrary code execution, full application compromise or denial of service. An attacker may pass specially crafted serialized .NET object of specific class that will execute malicious code during the construction of the object. For more information access: \(https://security-code-scan.github.io/\#SCS0036\).

### **CQL Injection Cassandra**

> Arbitrary code execution, full application compromise or denial of service. An attacker may pass specially crafted serialized .NET object of specific class that will execute malicious code during the construction of the object. For more information access: \(https://security-code-scan.github.io/\#SCS0038\).

### Password Complexity

> PasswordValidator should have at least two requirements for better security, the RequiredLength property must be set with a minimum value of 8. For more information access: \(https://security-code-scan.github.io/\#SCS0027\).

### Cookie Without SSL Flag

> It is recommended to specify the Secure flag to new cookie. The Secure flag is a directive to the browser to make sure that the cookie is not sent by unencrypted channel. For more information access: \(https://security-code-scan.github.io/\#SCS0008\) and \(https://cwe.mitre.org/data/definitions/614.html\).

### Cookie Without HttpOnly Flag

> It is recommended to specify the HttpOnly flag to new cookie. For more information access: \(https://security-code-scan.github.io/\#SCS0009\) or \(https://cwe.mitre.org/data/definitions/1004.html\).

### No input variable

> The application appears to allow XSS through an unencrypted / unauthorized input variable. https://owasp.org/www-community/attacks/xss/. For more information checkout the CWE-79 \(https://cwe.mitre.org/data/definitions/79.html\) advisory.

### Identity Weak Password Complexity

> Weak passwords can allow attackers to easily guess user passwords using wordlist or brute force attacks. Enforcing a strict password complexity policy mitigates these attacks by significantly increasing the time to guess a user’s valid password. For more information checkout the CWE-521 \(https://cwe.mitre.org/data/definitions/521.html\) advisory.

### **No Log Sensitive Information in console**

> The App logs information. Sensitive information should never be logged. For more information checkout the CWE-532 \(https://cwe.mitre.org/data/definitions/532.html\) advisory.

### OutputCache Conflict

> Having the annotation \[OutputCache\] will disable the annotation \[Authorize\] for the requests following the first one. For more information access: \(https://security-code-scan.github.io/\#SCS0019\).

### Open Redirect

> Your site may be used in phishing attacks. An attacker may craft a trustworthy looking link to your site redirecting a victim to a similar looking malicious site: 'http://yourdomain.com?redirect=https://urdomain.com/login'. For more information access: \(https://security-code-scan.github.io/\#SCS0027\).

### Request Validation Disabled \(Attribute\)

> Request validation is disabled. Request validation allows the filtering of some XSS patterns submitted to the application. For more information access: \(https://security-code-scan.github.io/\#SCS0017\).

### SQL Injection OLE DB

> Malicious user might get direct read and/or write access to the database. If the database is poorly configured the attacker might even get Remote Code Execution \(RCE\) on the machine running the database. For more information access: \(https://security-code-scan.github.io/\#SCS0020\)."

### Request Validation Disabled \(Configuration File\)

> The validateRequest which provides additional protection against XSS is disabled in configuration file. For more information access: \(https://security-code-scan.github.io/\#SCS0017\) or \(https://cwe.mitre.org/data/definitions/20.html\).

### SQL Injection MsSQL Data Provider

> Malicious user might get direct read and/or write access to the database. If the database is poorly configured the attacker might even get Remote Code Execution \(RCE\) on the machine running the database. For more information access: \([https://security-code-scan.github.io/\#SCS0026](https://security-code-scan.github.io/#SCS0026)\).

### Request validation is enabled only for pages

> The requestValidationMode which provides additional protection against XSS is enabled only for pages, not for all HTTP requests in configuration file. For more information access: \(https://security-code-scan.github.io/\#SCS0030\).

### SQL Injection Entity Framework

> Malicious user might get direct read and/or write access to the database. If the database is poorly configured the attacker might even get Remote Code Execution \(RCE\) on the machine running the database, please use SqlParameter to create query with parameters. For more information access: \(https://security-code-scan.github.io/\#SCS0035\) or \([https://cwe.mitre.org/data/definitions/89.html](https://cwe.mitre.org/data/definitions/89.html)\).

### View State Not Encrypted

> The viewStateEncryptionMode is not set to Always in configuration file. Web Forms controls use hidden base64 encoded fields to store state information. If sensitive information is stored there it may be leaked to the client side. For more information access: \(https://security-code-scan.github.io/\#SCS0023\) or \(https://cwe.mitre.org/data/definitions/200.html\).

### SQL Injection Nhibernate

> Malicious user might get direct read and/or write access to the database. If the database is poorly configured the attacker might even get Remote Code Execution \(RCE\) on the machine running the database. For more information access: \(https://security-code-scan.github.io/\#SCS0037\).

### View State MAC Disabled

> The enableViewStateMac is disabled in configuration file. \(This feature cannot be disabled starting .NET 4.5.1\). The view state could be altered by an attacker. For more information access: \(https://security-code-scan.github.io/\#SCS0024\) or \(https://cwe.mitre.org/data/definitions/807.html\).

### SQL Injection Npgsql

> Malicious user might get direct read and/or write access to the database. If the database is poorly configured the attacker might even get Remote Code Execution \(RCE\) on the machine running the database. For more information access: \(https://security-code-scan.github.io/\#SCS0039\).

### Certificate Validation Disabled

> Disabling certificate validation is often used to connect easily to a host that is not signed by a root certificate authority. As a consequence, this is vulnerable to Man-in-the-middle attacks since the client will trust any certificate. For more information access: \(https://security-code-scan.github.io/\#SCS0004\)."

### Weak cipher algorithm

> Broken or deprecated ciphers have typically known weakness. A attacker might be able to brute force the secret key use for the encryption. The confidentiality and integrity of the information encrypted is at risk. For more information access: \(https://security-code-scan.github.io/\#SCS0010\).

### No use Html.Raw

> The application uses the potentially dangerous Html.Raw construct in conjunction with a user-supplied variable. The recommendation is to avoid using HTML assembly, but if it is extremely necessary to allow Html, we suggest the following: support only a fixed subset of Html, after the user submits content, analyze the Html and filter it in a whitelist of allowed tags and attributes. For more information checkout the CWE-79 \(https://cwe.mitre.org/data/definitions/79.html\) advisory."

### No log sensitive information debug mode

> The application is configured to display standard .NET errors. This can provide the attacker with useful information and should not be used in a production application. https://docs.microsoft.com/en-us/aspnet/web-forms/overview/older-versions-getting-started/deploying-web-site-projects/displaying-a-custom-error-page-cs. For more information checkout the CWE-12 \(https://cwe.mitre.org/data/definitions/12.html\) advisory.

### No return string concat in controller

> A potential Cross-Site Scripting \(XSS\) was found. The endpoint returns a variable from the client entry that has not been coded. Always encode untrusted input before output, regardless of validation or cleaning performed. https://docs.microsoft.com/en-us/aspnet/core/security/cross-site-scripting?view=aspnetcore-3.1. For more information checkout the CWE-79 \(https://cwe.mitre.org/data/definitions/79.html\) advisory.

### SQL Injection OdbcCommand

> Malicious user might get direct read and/or write access to the database. If the database is poorly configured the attacker might even get Remote Code Execution \(RCE\) on the machine running the database. For more information checkout the CWE-79 \(https://cwe.mitre.org/data/definitions/79.html\) advisory."

### Weak hashing function5 or sha1

> MD5 or SHA1 have known collision weaknesses and are no longer considered strong hashing algorithms. For more information checkout the CWE-326 \(https://cwe.mitre.org/data/definitions/326.html\) advisory.

### Weak hashing function DES Crypto

> DES Crypto have known collision weaknesses and are no longer considered strong hashing algorithms. For more information checkout the CWE-326 \(https://cwe.mitre.org/data/definitions/326.html\) advisory.

### No Use Cipher mode

> This mode is not recommended because it opens the door to various security exploits. If the plain text to be encrypted contains substantial repetitions, it is possible that the cipher text will be broken one block at a time. You can also use block analysis to determine the encryption key. In addition, an active opponent can replace and exchange individual blocks without detection, which allows the blocks to be saved and inserted into the stream at other points without detection. ECB and OFB mode will produce the same result for identical blocks. The use of AES in CBC mode with an HMAC is recommended, ensuring integrity and confidentiality. https://docs.microsoft.com/en-us/visualstudio/code-quality/ca5358?view=vs-2019. For more information checkout the CWE-326 \(https://cwe.mitre.org/data/definitions/326.html\) and CWE-327 \(https://cwe.mitre.org/data/definitions/327.html\) advisory.

### Debug Build Enabled

> Binaries compiled in debug mode can leak detailed stack traces and debugging messages to attackers. Disable debug builds by setting the debug attribute to false. For more information checkout the CWE-11 \(https://cwe.mitre.org/data/definitions/11.html\) advisory.

### Vulnerable Package Reference

> Dependencies on open source frameworks and packages introduce additional vulnerabilities into the runtime environment. Vulnerabilities in open source libraries are continuously discovered and documented in publicly available vulnerability databases. Attackers can recognize a package being used by an application, and leverage known vulnerabilities in the library to attack the application. For more information checkout the CWE-937 \(https://cwe.mitre.org/data/definitions/937.html\) advisory.

### Cors Allow Origin Wild Card

> Cross-Origin Resource Sharing \(CORS\) allows a service to disable the browser’s Same-origin policy, which prevents scripts on an attacker-controlled domain from accessing resources and data hosted on a different domain. The CORS Access-Control-Allow-Origin HTTP header specifies the domain with permission to invoke a cross-origin service and view the response data. Configuring the Access-Control-Allow-Origin header with a wildcard \(\*\) can allow code running on an attacker-controlled domain to view responses containing sensitive data. For more information checkout the CWE-942 \(https://cwe.mitre.org/data/definitions/942.html\) advisory.

### Missing Anti Forgery Token Attribute

> Cross Site Request Forgery attacks occur when a victim authenticates to a target web site and then visits a malicious web page. The malicious web page then sends a fake HTTP request \(GET, POST, etc.\) back to the target website. The victim’s valid authentication cookie from the target web site is automatically included in the malicious request, sent to the target web site, and processed as a valid transaction under the victim’s identity. For more information checkout the CWE-352 \(https://cwe.mitre.org/data/definitions/352.html\) advisory.

### Unvalidated Web Forms Redirect

> Passing unvalidated redirect locations to the Response.Redirect method can allow attackers to send users to malicious web sites. This can allow attackers to perform phishing attacks and distribute malware to victims. For more information checkout the CWE-601 \(https://cwe.mitre.org/data/definitions/601.html\) advisory.

### Identity Password Lockout Disabled

> Password lockout mechanisms help prevent continuous brute force attacks again user accounts by disabling an account for a period of time after a number of invalid attempts. The ASP.NET Identity SignInManager protects against brute force attacks if the lockout parameter is set to true. For more information checkout the CWE-307 \(https://cwe.mitre.org/data/definitions/307.html\) advisory.

### Raw Inline Expression

> Data is written to the browser using a raw write: &lt;%= var %&gt;. This can result in Cross-Site Scripting \(XSS\) vulnerabilities if the data source is considered untrusted or dynamic \(request parameters, database, web service, etc.\). Instead of using a raw write, use the inline HTML encoded shortcut \(&lt;%: var %&gt;\) to automatically HTML encode data before writing it to the browser. For more information checkout the CWE-79 \(https://cwe.mitre.org/data/definitions/79.html\) advisory.

### Raw Binding Expression

> Data is written to the browser using a raw binding expression: &lt;%\# Item.Variable %&gt;. This can result in Cross-Site Scripting \(XSS\) vulnerabilities if the data source is considered untrusted or dynamic \(request parameters, database, web service, etc.\). Instead of using a raw binding expression, use the HTML encoded binding shortcut \(&lt;%\#: Item.Variable %&gt;\) to automatically HTML encode data before writing it to the browser. For more information checkout the CWE-79 \(https://cwe.mitre.org/data/definitions/79.html\) advisory.

### Raw Write Literal Method

> Data is written to the browser using the raw WriteLiteral method. This can result in Cross-Site Scripting \(XSS\) vulnerabilities if the data source is considered untrusted or dynamic \(request parameters, database, web service, etc.\). Instead of using the raw WriteLiteral method, use a Razor helper that performs automatic HTML encoding before writing it to the browser. For more information checkout the CWE-79 \(https://cwe.mitre.org/data/definitions/79.html\) advisory.

### Unencoded Web Forms Property

> Data is written to the browser using a WebForms property that does not perform output encoding. This can result in Cross-Site Scripting \(XSS\) vulnerabilities if the data source is considered untrusted or dynamic \(request parameters, database, web service, etc.\). WebForms controls are often found in HTML contexts, but can also appear in other contexts such as JavaScript, HTML Attribute, or URL. Fixing the vulnerability requires the appropriate Web Protection Library \(aka AntiXSS\) context-specific method to encode the data before setting the WebForms property. For more information checkout the CWE-79 \(https://cwe.mitre.org/data/definitions/79.html\) advisory.

### Unencoded Label Text

> Data is written to the browser using the raw Label.Text method. This can result in Cross-Site Scripting \(XSS\) vulnerabilities if the data source is considered untrusted or dynamic \(request parameters, database, web service, etc.\). Label controls are often found in HTML contexts, but can also appear in other contexts such as JavaScript, HTML Attribute, or URL. Fixing the vulnerability requires the appropriate Web Protection Library \(aka AntiXSS\) context-specific method to encode the data before setting the Label.Text property. For more information checkout the CWE-79 \(https://cwe.mitre.org/data/definitions/79.html\) advisory.

### Weak Random Number Generator

> The use of a predictable random value can lead to vulnerabilities when used in certain security critical contexts. For more information access: \(https://security-code-scan.github.io/\#SCS0005\) or \(https://cwe.mitre.org/data/definitions/338.html\).

### Weak Rsa Key Length

> Due to advances in cryptanalysis attacks and cloud computing capabilities, the National Institute of Standards and Technology \(NIST\) deprecated 1024-bit RSA keys on January 1, 2011. The Certificate Authority Browser Forum, along with the latest version of all browsers, currently mandates a minimum key size of 2048-bits for all RSA keys. For more information checkout the CWE-326 \(https://cwe.mitre.org/data/definitions/326.html\) advisory.

### Xml Reader External Entity Expansion

> XML External Entity \(XXE\) vulnerabilities occur when applications process untrusted XML data without disabling external entities and DTD processing. Processing untrusted XML data with a vulnerable parser can allow attackers to extract data from the server, perform denial of service attacks, and in some cases gain remote code execution. The XmlReaderSettings and XmlTextReader classes are vulnerable to XXE attacks when setting the DtdProcessing property to DtdProcessing.Parse or the ProhibitDtd property to false.\n\n \n\nTo prevent XmlReader XXE attacks, avoid using the deprecated ProhibitDtd property. Set the DtdProcessing property to DtdProcessing.Prohibit. For more information checkout the CWE-611 \(https://cwe.mitre.org/data/definitions/611.html\) advisory.

### Ldap Injection Directory Entry

> LDAP Injection vulnerabilities occur when untrusted data is concatenated into a LDAP Path or Filter expression without properly escaping control characters. This can allow attackers to change the meaning of an LDAP query and gain access to resources for which they are not authorized. Fixing the LDAP Injection Directory Entry vulnerability requires untrusted data to be encoded using the appropriate Web Protection Library \(aka AntiXSS\) LDAP encoding method: Encoder.LdapDistinguishedNameEncode\(\). For more information checkout the CWE-90 \(https://cwe.mitre.org/data/definitions/90.html\) advisory.
