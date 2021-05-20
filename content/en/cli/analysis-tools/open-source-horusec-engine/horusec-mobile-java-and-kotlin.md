---
title: Horusec Mobile (Java and Kotlin)
weight: 58
description: >-
  In this section, you will find vulnerabilities for mobile applications written
   in Java or Kotlin.
---

## **What is it?**

The [**Horusec-Kotlin**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-kotlin.md" lang="en" >}}) and [**Horusec-Java**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-java.md" lang="en" >}}) in addition to applying specific rules for their languages, it is also possible to identify some generic rules for mobile applications that use Android or IOS in these respective languages.

## **Examples of vulnerabilities**

{{% alert color="info" %}}
Next, you find all the vulnerabilities examples identified by Horusec-Mobile \(Java and Kotlin\). The content is shown as it appears in the system.
{{% /alert %}}

### No Log Sensitive Information

> The App logs information. Sensitive information should never be logged. For more information checkout the CWE-532 \([https://cwe.mitre.org/data/definitions/532.html](https://cwe.mitre.org/data/definitions/532.html)\) advisory.

Example of a vulnerable code:

```kotlin

const DatabaseURI = "..."

Log.info("Connection string of the database: " + DatabaseURI)

```

### HTTP Requests, Connections and Sessions 

> No uses Http request, connections and sessions with insecure.

Example of a vulnerable code:

```kotlin
import http.client.HttpClient
```

### No uses Content Provider 

> No uses Content Provider.

Example of a vulnerable code:

```kotlin
import android.content.ContentProvider
```

### No uses safety API

> No uses safety api in your application.

Example of a vulnerable code:

```kotlin
import com.google.android.gms.safetynet.SafetyNetApi
```

### Local File I/O Operations 

> No use operations of input or output in files.

Example of a vulnerable code:

```kotlin
var query: [String: Any] = [kSecAttrAccessible as String: kSecAttrAccessibleWhenUnlocked]
```

### WebView Component 

> No use WebView Component.



### Encryption API 

> No use Encryption API with vulnerabilities.



### No Use Prohibited APIs 

> The application may contain prohibited APIs. These APIs are insecure and should not be used. For more information checkout the CWE-676 \([https://cwe.mitre.org/data/definitions/676.html](https://cwe.mitre.org/data/definitions/676.html)\) advisory.

> * `strcpy`
> * `memcpy`
> * `strcat`
> * `strncat`
> * `strncpy`
> * `sprintf`
> * `vsprintf`



### UIWebView in application ignoring errors SSL 

> The in-app UIWebView ignores SSL errors and accepts any SSL certificate. The application is vulnerable to attacks from MITM \(Man-In-The-Middle\). For more information checkout the CWE-295 \([https://cwe.mitre.org/data/definitions/295.html](https://cwe.mitre.org/data/definitions/295.html)\) advisory.



### No List changes on the clipboard 

> The application allows you to list the changes on the Clipboard. Some malware also lists changes to the Clipboard.

Exemplo de código vulnerável:

```kotlin
const NSNotificationName UIPasteboardChangedNotification
```

### No copies data to the Clipboard 

> The application copies data to the Clipboard. Confidential data must not be copied to the Clipboard, as other applications can access it. For more information checkout the CWE-327 \([https://cwe.mitre.org/data/definitions/327.html](https://cwe.mitre.org/data/definitions/327.html)\) advisory.

Example of a vulnerable code:

```kotlin
var clipboard UIPasteboard
```

### The application is using SQLite 

> The application is using SQLite. Confidential information must be encrypted.

Example of a vulnerable code:

```kotlin
sqlite3_exec(...)
```

### No use NSTemporaryDirectory 

> User use in "NSTemporaryDirectory \(\)" is unreliable, it can result in vulnerabilities in the directory. For more information checkout the CWE-22 \([https://cwe.mitre.org/data/definitions/22.html](https://cwe.mitre.org/data/definitions/22.html)\) advisory.

Example of a vulnerable code:

```kotlin
const tempDirectory NSTemporaryDirectory
```

### Send SMS 

> This App is send sms without security.

Example of a vulnerable code:

```kotlin
import telephony.SmsManager
```

### Super User Privileges 

> This App may request root \(Super User\) privileges. For more information checkout the CWE-250 \([https://cwe.mitre.org/data/definitions/250.html](https://cwe.mitre.org/data/definitions/250.html)\) advisory.

Example of a vulnerable code:

```kotlin
import com.noshufou.android.su
```

### Base64 Encode  

> Basic authentication's only means of obfuscation is Base64 encoding. Since Base64 encoding is easily recognized and reversed, it offers only the thinnest veil of protection to your users, and should not be used. For more information checkout the OWASP Top Ten 2017 A3\([https://owasp.org/www-project-top-ten/2017/A3\_2017-Sensitive\_Data\_Exposure.html](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure.html)\) advisory and CWE-522 \([https://cwe.mitre.org/data/definitions/522.html](https://cwe.mitre.org/data/definitions/522.html)\).

Example of a vulnerable code:

```kotlin
// Using HttpPost from Apache HttpClient
String encoding = Base64Encoder.encode ("login:passwd");
org.apache.http.client.methods.HttpPost httppost = new HttpPost(url);
httppost.setHeader("Authorization", "Basic " + encoding);  // Noncompliant
```

### Base64 Decode 

> Basic authentication's only means of obfuscation is Base64 decoding. Since Base64 decoding is easily recognized and reversed, it offers only the thinnest veil of protection to your users, and should not be used. For more information checkout the OWASP Top Ten 2017 A3\([https://owasp.org/www-project-top-ten/2017/A3\_2017-Sensitive\_Data\_Exposure.html](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure.html)\) advisory and CWE-522 \([https://cwe.mitre.org/data/definitions/522.html](https://cwe.mitre.org/data/definitions/522.html)\).

Example of a vulnerable code:

```kotlin
var password = "PASSWORD_IN_BASE64";
String passwordDecoded = Base64Encoder.decode(password);
```

### GPS Location Known

> No use GPS Location to get last known location.



### Jailbreak Detection Methods

> The application may contain Jailbreak detection mechanisms.

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

### No Download File Using Android Download Manager

> This App downloads files using Android Download Manager.

```kotlin
import android.app.DownloadManager;
```

### Android Keystore

> No use Android Keystore to manager.



### Android Notifications

> No read android notifications



### Potential Android SQL Injection 

> The input values included in SQL queries need to be passed in safely. Bind variables in prepared statements can be used to easily mitigate the risk of SQL injection. For more information checkout the CWE-89 \([https://cwe.mitre.org/data/definitions/89.html](https://cwe.mitre.org/data/definitions/89.html)\) advisory and [OWASP: Top 10 2017-A1-Injection](https://owasp.org/www-project-top-ten/2017/A1_2017-Injection).

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



### SQL Injection With SQLite

> App uses SQLite Database and execute raw SQL query. Untrusted user input in raw SQL queries can cause SQL Injection. Also sensitive information should be encrypted and written to the database. For more information checkout the CWE-89 \([https://cwe.mitre.org/data/definitions/89.html](https://cwe.mitre.org/data/definitions/89.html)\) advisory and [OWASP: Top 10 2017-A1-Injection](https://owasp.org/www-project-top-ten/2017/A1_2017-Injection)..

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

### Cookie Storage

> No use cookie storage to save sensitive information
>
> NSHTTPCookieStorage

> sharedHTTPCookieStorage



### Using LoadHTMLString can result Inject

> User input not sanitized in 'loadHTMLString' can result in an injection of JavaScript in the context of your application, allowing access to private data. For more information checkout the CWE-95 \([https://cwe.mitre.org/data/definitions/95.html](https://cwe.mitre.org/data/definitions/95.html)\) advisory.



### No Use SFAntiPiracy Jailbreak

> Verifications found of type SFAntiPiracy Jailbreak.



### No Use SFAntiPiracy IsPirated

> Verifications found of type SFAntiPiracy isPirated.



### Weak5 hash using

> MD5 is a weak hash, which can generate repeated hashes. For more information checkout the CWE-327 \([https://cwe.mitre.org/data/definitions/327.html](https://cwe.mitre.org/data/definitions/327.html)\) advisory.



### Weak sha1 hash using

> SHA1 is a weak hash, which can generate repeated hashes. For more information checkout the CWE-327 \([https://cwe.mitre.org/data/definitions/327.html](https://cwe.mitre.org/data/definitions/327.html)\) advisory.



### Weak ECB encryption algorithm using

> The application uses ECB mode in the encryption algorithm. It is known that the ECB mode is weak, as it results in the same ciphertext for identical blocks of plain text. For more information checkout the CWE-327 \([https://cwe.mitre.org/data/definitions/327.html](https://cwe.mitre.org/data/definitions/327.html)\) advisory.



### The application has anti-debugger using ptrace\(\)

> The application has anti-debugger using ptrace\(\).
