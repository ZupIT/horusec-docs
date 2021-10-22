---
title: Horusec Mobile (Java e Kotlin)
weight: 4
description: >-
  Nesta seção, você vai encontrar as vulnerabilidades para aplicações mobile escritas
  em Java ou Kotlin.
---

## **O que é?**

O [**Horusec-Kotlin**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-kotlin.md#horusec-kotlin-cli" lang="pt-br">}}) e o [**Horusec-Java**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-java.md#horusec-java-cli" lang="pt-br">}}) são ferramentas SAST criadas pela equipe do Horusec para fazer a busca de vulnerabilidades em projetos Kotlin e Java. 

Você pode aplicar regras especificas para suas linguagens e também identificar algumas regras genéricas para aplicações mobile que utilizam Kotlin/Java para Android ou IOS.

## **Exemplos de vulnerabilidades** 

{{% alert color="info" %}}
A seguir, você encontra todos os exemplos de vulnerabilidades que o Horusec-Kotlin e o Horusec-Java identificam. O conteúdo está em inglês porque é assim que ele aparece no sistema. 
{{% /alert %}}

### **No Log Sensitive Information**
{{% alert color="info" %}}
ID: "HS-JVM-1"
{{% /alert %}}

The App logs information. Sensitive information should never be logged. For more information checkout the CWE-532 \([https://cwe.mitre.org/data/definitions/532.html](https://cwe.mitre.org/data/definitions/532.html)\) advisory.

Example of a vulnerable code:

```kotlin

const DatabaseURI = "..."

Log.info("Connection string of the database: " + DatabaseURI)

```

### **HTTP Requests, Connections and Sessions** 
{{% alert color="info" %}}
ID: "HS-JVM-2"
{{% /alert %}}

No uses Http request, connections and sessions with insecure.

Example of a vulnerable code:

```kotlin
import http.client.HttpClient
```

### **No uses safety API**
{{% alert color="info" %}}
ID: "HS-JVM-3"
{{% /alert %}}


No uses safety api in your application.

Example of a vulnerable code:

```kotlin
import com.google.android.gms.safetynet.SafetyNetApi
```

### **No uses Content Provider**
{{% alert color="info" %}}
ID: "HS-JVM-4"
{{% /alert %}}


No uses Content Provider.

Example of a vulnerable code:

```kotlin
import android.content.ContentProvider
```
### **No Use With Unsafe Bytes** 
{{% alert color="info" %}}
ID: "HS-JVM-5"
{{% /alert %}}

Using this implementation of '.withUnsafeBytes' can lead to the compiler's decision to use unsafe APIs, such as _malloc and _strcpy, as the method calls closing with an UnsafeRawBufferPointer. For more information checkout the [CWE-789](https://cwe.mitre.org/data/definitions/789.html) advisory.


### **Local File I/O Operations** 
{{% alert color="info" %}}
ID: "HS-JVM-6"
{{% /alert %}}

No use operations of input or output in files.

Example of a vulnerable code:

```kotlin
var query: [String: Any] = [kSecAttrAccessible as String: kSecAttrAccessibleWhenUnlocked]
```

### **WebView Component** 
{{% alert color="info" %}}
ID: "HS-JVM-7"
{{% /alert %}}

No use WebView Component.

### **Encryption API** 
{{% alert color="info" %}}
ID: "HS-JVM-8"
{{% /alert %}}

No use Encryption API with vulnerabilities.

### **No Use Prohibited APIs** 
{{% alert color="info" %}}
ID: "HS-JVM-10"
{{% /alert %}}

The application may contain prohibited APIs. These APIs are insecure and should not be used. For more information checkout the CWE-676 \([https://cwe.mitre.org/data/definitions/676.html](https://cwe.mitre.org/data/definitions/676.html)\) advisory.

> * `strcpy`
> * `memcpy`
> * `strcat`
> * `strncat`
> * `strncpy`
> * `sprintf`
> * `vsprintf`

### **Application allow MITM attacks** 
{{% alert color="info" %}}
ID: "HS-JVM-11"
{{% /alert %}}
The application allows self-signed or invalid SSL certificates. The application is vulnerable to MITM (Man-In-The-Middle) attacks. For more information checkout the [CWE-295](https://cwe.mitre.org/data/definitions/295.html) advisory.

### **UIWebView in application ignoring errors SSL** 
{{% alert color="info" %}}
ID: "HS-JVM-12"
{{% /alert %}}

The in-app UIWebView ignores SSL errors and accepts any SSL certificate. The application is vulnerable to attacks from MITM \(Man-In-The-Middle\). For more information checkout the CWE-295 \([https://cwe.mitre.org/data/definitions/295.html](https://cwe.mitre.org/data/definitions/295.html)\) advisory.


### **No List changes on the clipboard** 
{{% alert color="info" %}}
ID: "HS-JVM-13"
{{% /alert %}}

The application allows you to list the changes on the Clipboard. Some malware also lists changes to the Clipboard.

Exemplo de código vulnerável:

```kotlin
const NSNotificationName UIPasteboardChangedNotification
```
### **The application is using SQLite** 
{{% alert color="info" %}}
ID: "HS-JVM-14"
{{% /alert %}}

The application is using SQLite. Confidential information must be encrypted.

Example of a vulnerable code:

```kotlin
sqlite3_exec(...)
```

### **No use NSTemporaryDirectory** 
{{% alert color="info" %}}
ID: "HS-JVM-15"
{{% /alert %}}

User use in "NSTemporaryDirectory \(\)" is unreliable, it can result in vulnerabilities in the directory. For more information checkout the CWE-22 \([https://cwe.mitre.org/data/definitions/22.html](https://cwe.mitre.org/data/definitions/22.html)\) advisory.

Example of a vulnerable code:

```kotlin
const tempDirectory NSTemporaryDirectory
```

### **No copies data to the Clipboard** 
{{% alert color="info" %}}
ID: "HS-JVM-16"
{{% /alert %}}

The application copies data to the Clipboard. Confidential data must not be copied to the Clipboard, as other applications can access it. For more information checkout the CWE-327 \([https://cwe.mitre.org/data/definitions/327.html](https://cwe.mitre.org/data/definitions/327.html)\) advisory.

Example of a vulnerable code:

```kotlin
var clipboard UIPasteboard
```

### **No Download File Using Android Download Manager**
{{% alert color="info" %}}
ID: "HS-JVM-17"
{{% /alert %}}

This App downloads files using Android Download Manager.

```kotlin
import android.app.DownloadManager;
```
### **Android Keystore**
{{% alert color="info" %}}
ID: "HS-JVM-18"
{{% /alert %}}

No use Android Keystore to manager.


### **Android Notifications**
{{% alert color="info" %}}
ID: "HS-JVM-19"
{{% /alert %}}

No read android notifications

### **Potential Android SQL Injection**
{{% alert color="info" %}}
ID: "HS-JVM-20"
{{% /alert %}}

The input values included in SQL queries need to be passed in safely. Bind variables in prepared statements can be used to easily mitigate the risk of SQL injection. For more information checkout the CWE-89 \([https://cwe.mitre.org/data/definitions/89.html](https://cwe.mitre.org/data/definitions/89.html)\) advisory and [OWASP: Top 10 2017-A1-Injection](https://owasp.org/www-project-top-ten/2017/A1_2017-Injection).

Example of a vulnerable code:

```kotlin
String query = "SELECT * FROM  messages WHERE uid= '"+userInput+"'" ;
Cursor cursor = this.getReadableDatabase().rawQuery(query,null);
```

Example of an invulnerable code:

```kotlin
String query = "SELECT * FROM  messages WHERE uid= ?" ;
Cursor cursor = this.getReadableDatabase().rawQuery(query,new String[] {userInput});
```

### **SQL Injection With SQLite**
{{% alert color="info" %}}
ID: "HS-JVM-21"
{{% /alert %}}

App uses SQLite Database and execute raw SQL query. Untrusted user input in raw SQL queries can cause SQL Injection. Also sensitive information should be encrypted and written to the database. For more information checkout the CWE-89 \([https://cwe.mitre.org/data/definitions/89.html](https://cwe.mitre.org/data/definitions/89.html)\) advisory and [OWASP: Top 10 2017-A1-Injection](https://owasp.org/www-project-top-ten/2017/A1_2017-Injection)..

Example of a vulnerable code:

```kotlin
import android.database.sqlite;

...
String query = "SELECT * FROM  messages WHERE uid= '"+userInput+"'" ;
Cursor cursor = conn.rawQuery(query,null);
```

Example of an invulnerable code:

```kotlin
import android.database.sqlite;

...
String query = "SELECT * FROM  messages WHERE uid= ?" ;
Cursor cursor = conn.rawQuery(query,new String[] {userInput});
```

### **WebView GET Request** 
{{% alert color="info" %}}
ID: "HS-JVM-22"
{{% /alert %}}
WebView GET Request

### **WebView POST Request** 
{{% alert color="info" %}}
ID: "HS-JVM-23"
{{% /alert %}}
WebView POST Request

### **Base64 Decode** 
{{% alert color="info" %}}
ID: "HS-JVM-24"
{{% /alert %}}

Basic authentication's only means of obfuscation is Base64 decoding. Since Base64 decoding is easily recognized and reversed, it offers only the thinnest veil of protection to your users, and should not be used. For more information checkout the OWASP Top Ten 2017 A3\([https://owasp.org/www-project-top-ten/2017/A3\_2017-Sensitive\_Data\_Exposure.html](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure.html)\) advisory and CWE-522 \([https://cwe.mitre.org/data/definitions/522.html](https://cwe.mitre.org/data/definitions/522.html)\).

Example of a vulnerable code:

```kotlin
var password = "PASSWORD_IN_BASE64";
String passwordDecoded = Base64Encoder.decode(password);
```
### **WebView Load Request** 
{{% alert color="info" %}}
ID: "HS-JVM-25"
{{% /alert %}}
WebView Load Request.

### **WebView Load Request** 
{{% alert color="info" %}}
ID: "HS-JVM-26"
{{% /alert %}}
WebView Load Request.

### **Cookie Storage**
{{% alert color="info" %}}
ID: "HS-JVM-27"
{{% /alert %}}

No use cookie storage to save sensitive information. NSHTTPCookieStorage. sharedHTTPCookieStorage

### 28 Set or Read Clipboard

### **Using LoadHTMLString can result Inject**
{{% alert color="info" %}}
ID: "HS-JVM-29"
{{% /alert %}}

User input not sanitized in 'loadHTMLString' can result in an injection of JavaScript in the context of your application, allowing access to private data. For more information checkout the CWE-95 \([https://cwe.mitre.org/data/definitions/95.html](https://cwe.mitre.org/data/definitions/95.html)\) advisory.

### **No Use SFAntiPiracy Jailbreak**
{{% alert color="info" %}}
ID: "HS-JVM-30"
{{% /alert %}}

Verifications found of type SFAntiPiracy Jailbreak.

### **Send SMS** 


This App is send sms without security.

Example of a vulnerable code:

```kotlin
import telephony.SmsManager
```

### **No Use SFAntiPiracy IsPirated**
{{% alert color="info" %}}
ID: "HS-JVM-31"
{{% /alert %}}

Verifications found of type SFAntiPiracy isPirated.

### **Weak md5 hash using**
{{% alert color="info" %}}
ID: "HS-JVM-32"
{{% /alert %}}

MD5 is a weak hash, which can generate repeated hashes. For more information checkout the CWE-327 \([https://cwe.mitre.org/data/definitions/327.html](https://cwe.mitre.org/data/definitions/327.html)\) advisory.

### **Weak sha1 hash using**
{{% alert color="info" %}}
ID: "HS-JVM-33"
{{% /alert %}}

SHA1 is a weak hash, which can generate repeated hashes. For more information checkout the CWE-327 \([https://cwe.mitre.org/data/definitions/327.html](https://cwe.mitre.org/data/definitions/327.html)\) advisory.

### **Weak ECB encryption algorithm using**
{{% alert color="info" %}}
ID: "HS-JVM-34"
{{% /alert %}}

The application uses ECB mode in the encryption algorithm. It is known that the ECB mode is weak, as it results in the same ciphertext for identical blocks of plain text. For more information checkout the CWE-327 \([https://cwe.mitre.org/data/definitions/327.html](https://cwe.mitre.org/data/definitions/327.html)\) advisory.



### **The application has anti-debugger using ptrace\(\)**
{{% alert color="info" %}}
ID: "HS-JVM-35"
{{% /alert %}}

The application has anti-debugger using ptrace\(\).


### **Super User Privileges** 
{{% alert color="info" %}}
ID: "HS-JVM-36"
{{% /alert %}}

This App may request root \(Super User\) privileges. For more information checkout the CWE-250 \([https://cwe.mitre.org/data/definitions/250.html](https://cwe.mitre.org/data/definitions/250.html)\) advisory.

Example of a vulnerable code:

```kotlin
import com.noshufou.android.su
```
### **Send SMS**  
{{% alert color="info" %}}
ID: "HS-JVM-37"
{{% /alert %}}

Send SMS. For more information checkout the [OWASP-M3](https://owasp.org/www-project-mobile-top-10/2016-risks/m3-insecure-communication) advisory.

### **Base64 Encode**  
{{% alert color="info" %}}
ID: "HS-JVM-38"
{{% /alert %}}

Basic authentication's only means of obfuscation is Base64 encoding. Since Base64 encoding is easily recognized and reversed, it offers only the thinnest veil of protection to your users, and should not be used. For more information checkout the OWASP Top Ten 2017 A3\([https://owasp.org/www-project-top-ten/2017/A3\_2017-Sensitive\_Data\_Exposure.html](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure.html)\) advisory and CWE-522 \([https://cwe.mitre.org/data/definitions/522.html](https://cwe.mitre.org/data/definitions/522.html)\).

Example of a vulnerable code:

```kotlin
// Using HttpPost from Apache HttpClient
String encoding = Base64Encoder.encode ("login:passwd");
org.apache.http.client.methods.HttpPost httppost = new HttpPost(url);
httppost.setHeader("Authorization", "Basic " + encoding);  // Noncompliant
```

### **GPS Location Known**
{{% alert color="info" %}}
ID: "HS-JVM-39"
{{% /alert %}}

No use GPS Location to get last known location.


### **Jailbreak Detection Methods**
{{% alert color="info" %}}
ID: "HS-JVM-40"
{{% /alert %}}

The application may contain Jailbreak detection mechanisms.

Possible vulnerabilities when use:

```kotlin
/Applications/Cydia.app
/Applications/FakeCarrier.app
/Applications/Icy.app
/Applications/IntelliScreen.app
/Applications/SBSettings.app
/etc/apt
/Library/MobileSubstrate/DynamicLibraries/LiveClock.plist
/Library/MobileSubstrate/MobileSubstrate.dylib
/Library/MobileSubstrate/DynamicLibraries/Veency.plist
/System/Library/LaunchDaemons/com.ikey.bbot.plist
/System/Library/LaunchDaemons/com.saurik.Cydia.Startup.plist
/etc/ssh/sshd_config
/Applications/MxTube.app
/Applications/RockApp.app
/Applications/WinterBoard.app
/Applications/blackra1n.app
/private/var/tmp/cydia.log
/private/var/lib/apt
/private/var/lib/cydia
/private/var/mobile/Library/SBSettings/Themes
/private/var/stash
/var/lib/cydia
/var/cache/apt
/var/lib/apt
/usr/sbin/sshd
/usr/sbin/frida-server
/usr/libexec/ssh-keysign
/usr/libexec/sftp-server
/usr/bin/sshd
/usr/bin/cycript
/usr/local/bin/cycript
/usr/lib/libcycript.dylib
cydia://
frida-server
```
