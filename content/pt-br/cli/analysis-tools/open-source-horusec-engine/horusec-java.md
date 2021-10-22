---
title: Horusec Java
weight: 3
description: >-
  Nesta seção, você vai encontrar mais informações sobre vulnerabilidades que o Horusec encontra em projetos Java.
---

---

## **O que é?**

O [**Horusec-Java**]({{< ref path="/cli/analysis-tools/open-source-horusec-engine/horusec-java.md#horusec-java-cli" lang="pt-br">}}) é uma ferramenta SAST criado pela equipe do Horusec para fazer a busca de vulnerabilidades em projetos Java.

## **Exemplos de vulnerabilidades**

{{% alert color="info" %}}
A seguir, você encontra todos os exemplos de vulnerabilidades que o Horussec-Java identifica. O conteúdo foi traduzido, porém também foi mantido em inglês porque é assim que a mensagem aparece no sistema. 

Para visualizar vulnerabilidades específicas para projetos mobile, acesse a [**página Horusec-Mobile (Java e Kotlin)**](../horusec-mobile-java-and-kotlin) porque são as mesmas com as de Kotlin
{{% /alert %}}

### File Is World Readable
{{% alert color="info" %}}
ID: "HS-JAVA-99"
{{% /alert %}}

_The file is World Readable. Any App can read from the file. For more information checkout the CWE-276 \(_[_https://cwe.mitre.org/data/definitions/276.html_](https://cwe.mitre.org/data/definitions/276.html)_\) advisory._

Example of a vulnerable code:

```java
fos = openFileOutput(filename, MODE_WORLD_READABLE);
fos.write(userInfo.getBytes());
```

Example of an invulnerable code: 

```kotlin
fos = openFileOutput(filename, MODE_PRIVATE);
```

### 

### File Is World Writable
{{% alert color="info" %}}
ID: "HS-JAVA-100"
{{% /alert %}}

> _The file is World Writable. Any App can write to the file. For more information checkout the CWE-276 \(_[_https://cwe.mitre.org/data/definitions/276.html_](https://cwe.mitre.org/data/definitions/276.html)_\) advisory._

Example of a vulnerable code:

```java
fos = openFileOutput(filename, MODE_WORLD_WRITABLE);
fos.write(userInfo.getBytes());
```

Example of an invulnerable code: 

```kotlin
fos = openFileOutput(filename, MODE_PRIVATE);
```

### 

### No Write External Content
{{% alert color="info" %}}
ID: "HS-JAVA-101"
{{% /alert %}}

_App can read/write to External Storage. Any App can read data written to External Storage. For more information checkout the CWE-276 \([https://cwe.mitre.org/data/definitions/276.html](https://cwe.mitre.org/data/definitions/276.html)\) advisory._  
This rule raises an issue when the following functions are called:

* `android.os.Environment.getExternalStorageDirectory`
* `android.os.Environment.getExternalStoragePublicDirectory`
* `android.content.Context.getExternalFilesDir`
* `android.content.Context.getExternalFilesDirs`
* `android.content.Context.getExternalMediaDirs`
* `android.content.Context.getExternalCacheDir`
* `android.content.Context.getExternalCacheDirs`
* `android.content.Context.getObbDir`
* `android.content.Context.getObbDirs`

  
Example of a sensible code:

```text
import android.content.Context;
import android.os.Environment;

public class AccessExternalFiles {

    public void accessFiles(Context context) {
        Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES); // Sensitive
        context.getExternalFilesDir(Environment.DIRECTORY_PICTURES); // Sensitive
    }
}
```



### No use IVs weak
{{% alert color="info" %}}
ID: "HS-JAVA-102"
{{% /alert %}}

> _The App may use weak IVs like `0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00` or `0x01,0x02,0x03,0x04,0x05,0x06,0x07`. Not using a random IV makes the resulting ciphertext much more predictable and susceptible to a dictionary attack. For more information checkout the CWE-329 \(_[_https://cwe.mitre.org/data/definitions/329.html_](https://cwe.mitre.org/data/definitions/329.html)_\) advisory._



### This App may have root detection capabilities
{{% alert color="info" %}}
ID: "HS-JAVA-103"
{{% /alert %}}

* `.contains("test-keys")` 
* `/system/app/Superuser.apk`
* `isDeviceRooted()`
* `/system/bin/failsafe/su`
* `/system/sd/xbin/su`
* `"/system/xbin/which", "su"`
* `RootTools.isAccessGiven()`

### 

### Set or Read Clipboard data
{{% alert color="info" %}}
ID: "HS-JAVA-105"
{{% /alert %}}

* `content.ClipboardManager`
* `CLIPBOARD_SERVICE`
* `ClipboardManager`

### 

### Message Digest
{{% alert color="info" %}}
ID: "HS-JAVA-106"
{{% /alert %}}

_The MD5 algorithm and its successor, SHA-1, are no longer considered secure, because it is too easy to create hash collisions with them. That is, it takes too little computational effort to come up with a different input that produces the same MD5 or SHA-1 hash, and using the new, same-hash value gives an attacker the same access as if he had the originally-hashed value. This applies as well to the other Message-Digest algorithms: MD2, MD4, MD6, HAVAL-128, HMAC-MD5, DSA \(which uses SHA-1\), RIPEMD, RIPEMD-128, RIPEMD-160, HMACRIPEMD160._

Example of a vulnerable code:

```java
MyProprietaryMessageDigest extends MessageDigest {
    @Override
    protected byte[] engineDigest() {
        [...]
        //Creativity is a bad idea
        return [...];
    }
}
```

Example of an invulnerable code: 

```kotlin
MessageDigest sha256Digest = MessageDigest.getInstance("SHA256");
sha256Digest.update(password.getBytes());
```

### 

### Overly permissive file permission
{{% alert color="info" %}}
ID: "HS-JAVA-107"
{{% /alert %}}

 _It is generally a bad practices to set overly permissive file permission such as read+write+exec for all users. If the file affected is a configuration, a binary, a script or sensitive data, it can lead to privilege escalation or information leakage. For more information checkout the CWE-732 \(_[_https://cwe.mitre.org/data/definitions/732.html_](https://cwe.mitre.org/data/definitions/732.html)_\) advisory._

Example of a vulnerable code:

```java
Set<PosixFilePermission> perms = new HashSet<>();
perms.add(PosixFilePermission.OWNER_READ);
perms.add(PosixFilePermission.OWNER_WRITE);
perms.add(PosixFilePermission.OWNER_EXECUTE);

perms.add(PosixFilePermission.GROUP_READ);
perms.add(PosixFilePermission.GROUP_WRITE);
perms.add(PosixFilePermission.GROUP_EXECUTE);

perms.add(PosixFilePermission.OTHERS_READ);
perms.add(PosixFilePermission.OTHERS_WRITE);
perms.add(PosixFilePermission.OTHERS_EXECUTE);
```

Example of an invulnerable code: 

```kotlin
Set<PosixFilePermission> perms = new HashSet<>();
perms.add(PosixFilePermission.OWNER_READ);
perms.add(PosixFilePermission.OWNER_WRITE);
perms.add(PosixFilePermission.OWNER_EXECUTE);

perms.add(PosixFilePermission.GROUP_READ);
perms.add(PosixFilePermission.GROUP_WRITE);
perms.add(PosixFilePermission.GROUP_EXECUTE);
```

### 

### DES, DESede, RSA is insecure
{{% alert color="info" %}}
ID: "HS-JAVA-108"
{{% /alert %}}

_DES is considered strong ciphers for modern applications. Currently, NIST recommends the usage of AES block ciphers instead of DES. For more information checkout the CWE-326 \(_[_https://cwe.mitre.org/data/definitions/326.html_](https://cwe.mitre.org/data/definitions/326.html)_\) advisory._

Example of a vulnerable code: 

```java
Cipher c = Cipher.getInstance("DES/ECB/PKCS5Padding");
c.init(Cipher.ENCRYPT_MODE, k, iv);
byte[] cipherText = c.doFinal(plainText);

// =========== //

Cipher c = Cipher.getInstance("DESede/ECB/PKCS5Padding");
c.init(Cipher.ENCRYPT_MODE, k, iv);
byte[] cipherText = c.doFinal(plainText);

// =========== //

Cipher.getInstance("RSA/NONE/NoPadding")
```

Example of an invulnerable code: 

```kotlin
Cipher c = Cipher.getInstance("AES/GCM/NoPadding");
c.init(Cipher.ENCRYPT_MODE, k, iv);
byte[] cipherText = c.doFinal(plainText);

// =========== //

Cipher c = Cipher.getInstance("AES/GCM/NoPadding");
c.init(Cipher.ENCRYPT_MODE, k, iv);
byte[] cipherText = c.doFinal(plainText);

// =========== //

Cipher.getInstance("RSA/ECB/OAEPWithMD5AndMGF1Padding")

```

### 

### Hidden elements
{{% alert color="info" %}}
ID: "HS-JAVA-109"
{{% /alert %}}

_Hidden elements in view can be used to hide data from user. But this data can be leaked. For more information checkout the CWE-919 \([https://cwe.mitre.org/data/definitions/919.html](https://cwe.mitre.org/data/definitions/919.html)\) advisory._

### 

### Weak block mode for Cryptographic Hash Function
{{% alert color="info" %}}
ID: "HS-JAVA-110"
{{% /alert %}}

_A weak ECB, \(a.k.a 'block mode'\) was found in one of your Ciphers. Always use a strong, high entropy hash, for example the SHA-512 with salt options. For more information check:_ 

* _CWE-327_ 
* \_\_[_**CWE-719**_](https://cwe.mitre.org/data/definitions/327.html%29)__
* __[_**CWE-326**_](https://cwe.mitre.org/data/definitions/326.html)__
* __[_**CWE-780**_](https://cwe.mitre.org/data/definitions/780.html) _ for deeper details on how to fix it._

### 

### Weak Cryptographic Hash Function used
{{% alert color="info" %}}
ID: "HS-JAVA-111"
{{% /alert %}}

 _Using a weak CHF pose a threat to your application security since it can be vulnerable to a number of attacks that could lead to data leaking, improper access of features and resources of your infrastructure and even rogue sessions. For more information checkout the CWE-327 \(_[_https://cwe.mitre.org/data/definitions/327.html_](https://cwe.mitre.org/data/definitions/327.html)_\) advisory._



### Possible File With Vulnerability When Open
{{% alert color="info" %}}
ID: "HS-JAVA-112"
{{% /alert %}}

_The file is World Readable and Writable. Any App can read/write to the file. For more information checkout the CWE-276 \(_[_https://cwe.mitre.org/data/definitions/276.html_](https://cwe.mitre.org/data/definitions/276.html)_\) advisory._



### Sensitive Information Not Encrypted
{{% alert color="info" %}}
ID: "HS-JAVA-113"
{{% /alert %}}

 _App can write to App Directory. Sensitive Information should be encrypted. For more information checkout the CWE-276 \(_[_https://cwe.mitre.org/data/definitions/276.html_](https://cwe.mitre.org/data/definitions/276.html)_\) advisory._

### 

### Insecure Random Number Generator
{{% alert color="info" %}}
ID: "HS-JAVA-114"
{{% /alert %}}

_The App uses an insecure Random Number Generator. For more information checkout the CWE-330 \(_[_https://cwe.mitre.org/data/definitions/330.html_](https://cwe.mitre.org/data/definitions/330.html)_\) advisory._



### No Default Java Hash
{{% alert color="info" %}}
ID: "HS-JAVA-115"
{{% /alert %}}

_This App uses Java Hash Code. It's a weak hash function and should never be used in Secure Crypto Implementation. For more information checkout the CWE-327 \(_[_https://cwe.mitre.org/data/definitions/327.html_](https://cwe.mitre.org/data/definitions/327.html)_\) advisory._



### Layout Params Flag Secure
{{% alert color="info" %}}
ID: "HS-JAVA-116"
{{% /alert %}}

 _These activities prevent screenshot when they go to background._

### No use SQL Cipher
{{% alert color="info" %}}
ID: "HS-JAVA-117"
{{% /alert %}}

 _This App uses SQL Cipher. But the secret may be hardcoded. For more information checkout the CWE-312 \(_[_https://cwe.mitre.org/data/definitions/312.html_](https://cwe.mitre.org/data/definitions/312.html)_\) advisory._

\_\_

### Prevent Tap Jacking Attack
{{% alert color="info" %}}
ID: "HS-JAVA-118"
{{% /alert %}}

_This app has capabilities to prevent tapjacking attacks. For more information checkout the CWE-1021 \(_[_https://cwe.mitre.org/data/definitions/1021.html_](https://cwe.mitre.org/data/definitions/1021.html)_\) advisory._



### Prevent Write sensitive information in tmp file
{{% alert color="info" %}}
ID: "HS-JAVA-119"
{{% /alert %}}

_App creates temp file. Sensitive information should never be written into a temp file. For more information checkout the CWE-276 \(_[_https://cwe.mitre.org/data/definitions/276.html_](https://cwe.mitre.org/data/definitions/276.html)_\) advisory._



### Get Window Flag Secure
{{% alert color="info" %}}
ID: "HS-JAVA-120"
{{% /alert %}}

_App capabilities to prevent screenshots from  Recent Task History/Now On Tap etc._

Example of a vulnerable code:

```kotlin
public void disableScreenCapture() {
    getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE,
            WindowManager.LayoutParams.FLAG_SECURE);

}
```



### Loading Native Code
{{% alert color="info" %}}
ID: "HS-JAVA-121"
{{% /alert %}}

 _Loading Native Code \(Shared Library\)_

Example of a vulnerable code:

```kotlin
System.loadLibrary("library")
```

### 

### Dynamic Class and Dexloading
{{% alert color="info" %}}
ID: "HS-JAVA-122"
{{% /alert %}}

 _Dynamic Class and Dexloading_

Example of a vulnerable code:

```kotlin
import dalvik.system.DexClassLoader
or
import java.security.ClassLoader
or
import java.net.URLClassLoader
or
import java.security.SecureClassLoader
```

### 

### Java Crypto import
{{% alert color="info" %}}
ID: "HS-JAVA-123"
{{% /alert %}}

 _Problems on Java Crypto import._

Exemplo de código vulnerável:

```kotlin
import javax.crypto
or
import kalium.crypto
or
import bouncycastle.crypto
```

### 

### Starting Service
{{% alert color="info" %}}
ID: "HS-JAVA-124"
{{% /alert %}}

Vulnerabilities related to apps using `StartingService` or `BindService`

Example of a vulnerable code:

```kotlin
startService(...)
or
bindService(...)
```

### 

### Sending Broadcast
{{% alert color="info" %}}
ID: "HS-JAVA-125"
{{% /alert %}}

_Vulnerabilities related to `Sending Broadcast`._

Example of a vulnerable code:

```kotlin
sendBroadcast(...)
or
sendOrderedBroadcast(...)
or
sendStickyBroadcast(...)
```

### 

### Local File I/O Operations
{{% alert color="info" %}}
ID: "HS-JAVA-126"
{{% /alert %}}

 _Possible vulnerabilities when use:_

 * _`OpenFileOutput`_
 * _`getSharedPreferences`_
 * _`SharedPreferences.Editor`_
 * _`getCacheDir`_
 * _`getExternalStorageState`_
 * _`openOrCreateDatabase`_



### Inter Process Communication
{{% alert color="info" %}}
ID: "HS-JAVA-127"
{{% /alert %}}

 _Inter Process Communication_

 _Possíveis vulnerabilidades ao usar:_

* _`IRemoteService`_
* _`IRemoteService.Stub`_
* _`IBinder`_

\_\_

### DefaultHttpClient with default constructor is not compatible with TLS 1.2
{{% alert color="info" %}}
ID: "HS-JAVA-128"
{{% /alert %}}

 _Upgrade your implementation to use one of the recommended constructs and configure https.protocols JVM option to include TLSv1.2. Use SystemDefaultHttpClient instead. For more information checkout \(_[_https://blogs.oracle.com/java-platform-group/diagnosing-tls,-ssl,-and-https_](https://blogs.oracle.com/java-platform-group/diagnosing-tls,-ssl,-and-https)_\)._



### Weak SSLContext
{{% alert color="info" %}}
ID: "HS-JAVA-129"
{{% /alert %}}

_Upgrade your implementation to the following, and configure https.protocols JVM option to include TLSv1.2:. Use SSLContext.getInstance\("TLS"\). For more information checkout \(_[_https://blogs.oracle.com/java-platform-group/diagnosing-tls,-ssl,-and-https_](https://blogs.oracle.com/java-platform-group/diagnosing-tls,-ssl,-and-https)_\)_



### HostnameVerifier that accept any signed certificates
{{% alert color="info" %}}
ID: "HS-JAVA-130"
{{% /alert %}}

 _A HostnameVerifier that accept any host are often use because of certificate reuse on many hosts. As a consequence, this is vulnerable to Man-in-the-middle attacks since the client will trust any certificate. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._



### URL rewriting method
{{% alert color="info" %}}
ID: "HS-JAVA-131"
{{% /alert %}}


_URL rewriting has significant security risks. Since session ID appears in the URL, it may be easily seen by third parties. Session ID in the URL can be disclosed in many ways. For more information checkout the \(_[_https://owasp.org/www-project-top-ten/OWASP\_Top\_Ten\_2017/Top\_10-2017\_A2-Broken\_Authentication_](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A2-Broken_Authentication)_\) advisory._



### Disabling HTML escaping
{{% alert color="info" %}}
ID: "HS-JAVA-132"
{{% /alert %}}


_Disabling HTML escaping put the application at risk for Cross-Site Scripting \(XSS\). For more information checkout the CWE-79 \(_[_https://cwe.mitre.org/data/definitions/79.html_](https://cwe.mitre.org/data/definitions/79.html)_\) advisory._



### Overly permissive CORS policy
{{% alert color="info" %}}
ID: "HS-JAVA-133"
{{% /alert %}}


_A web server defines which other domains are allowed to access its domain using cross-origin requests. However, caution should be taken when defining the header because an overly permissive CORS policy will allow a malicious application to communicate with the victim application in an inappropriate way, leading to spoofing, data theft, relay and other attacks. For more information checkout the \(_[_https://fetch.spec.whatwg.org/_](https://fetch.spec.whatwg.org/)_\) advisory._



### SQL Injection
{{% alert color="info" %}}
ID: "HS-JAVA-134"
{{% /alert %}}

_The input values included in SQL queries need to be passed in safely. Bind variables in prepared statements can be used to easily mitigate the risk of SQL injection. Alternatively to prepare statements, each parameter can be escaped manually. For more information checkout the CWE-89 \(_[_https://cwe.mitre.org/data/definitions/89.html_](https://cwe.mitre.org/data/definitions/89.html)_\) advisory._



### SQL Injection With Turbine
{{% alert color="info" %}}
ID: "HS-JAVA-135"
{{% /alert %}}

_The input values included in SQL queries need to be passed in safely. Bind variables in prepared statements can be used to easily mitigate the risk of SQL injection. Turbine API provide a DSL to build query with Java code. Alternatively to prepare statements, each parameter can be escaped manually. For more information checkout the CWE-89 \(_[_https://cwe.mitre.org/data/definitions/89.html_](https://cwe.mitre.org/data/definitions/89.html)_\) advisory._



### SQL Injection With Hibernate
{{% alert color="info" %}}
ID: "HS-JAVA-135"
{{% /alert %}}

 _The input values included in SQL queries need to be passed in safely. Bind variables in prepared statements can be used to easily mitigate the risk of SQL injection. Alternatively to prepare statements, Hibernate Criteria can be used. For more information checkout the CWE-89 \(_[_https://cwe.mitre.org/data/definitions/89.html_](https://cwe.mitre.org/data/definitions/89.html)_\) advisory and checkout the CWE-564 \(_[_https://cwe.mitre.org/data/definitions/564.html_](https://cwe.mitre.org/data/definitions/564.html)_\) advisory._



### SQL Injection With JDO
{{% alert color="info" %}}
ID: "HS-JAVA-137"
{{% /alert %}}

_The input values included in SQL queries need to be passed in safely. Bind variables in prepared statements can be used to easily mitigate the risk of SQL injection. For more information checkout the CWE-89 \(_[_https://cwe.mitre.org/data/definitions/89.html_](https://cwe.mitre.org/data/definitions/89.html)_\) advisory._



### SQL Injection With JPA
{{% alert color="info" %}}
ID: "HS-JAVA-138"
{{% /alert %}}

 _The input values included in SQL queries need to be passed in safely. Bind variables in prepared statements can be used to easily mitigate the risk of SQL injection. For more information checkout the CWE-89 \(_[_https://cwe.mitre.org/data/definitions/89.html_](https://cwe.mitre.org/data/definitions/89.html)_\) advisory._



### SQL Injection Spring JDBC
{{% alert color="info" %}}
ID: "HS-JAVA-139"
{{% /alert %}}

_The input values included in SQL queries need to be passed in safely. Bind variables in prepared statements can be used to easily mitigate the risk of SQL injection. For more information checkout the CWE-89 \([https://cwe.mitre.org/data/definitions/89.html](https://cwe.mitre.org/data/definitions/89.html)\) advisory._



### SQL Injection JDBC
{{% alert color="info" %}}
ID: "HS-JAVA-140"
{{% /alert %}}

_The input values included in SQL queries need to be passed in safely. Bind variables in prepared statements can be used to easily mitigate the risk of SQL injection. For more information checkout the CWE-89 \(_[_https://cwe.mitre.org/data/definitions/89.html_](https://cwe.mitre.org/data/definitions/89.html)_\) advisory._



### Potential LDAP Injection
{{% alert color="info" %}}
ID: "HS-JAVA-141"
{{% /alert %}}

 _Just like SQL, all inputs passed to an LDAP query need to be passed in safely. Unfortunately, LDAP doesn't have prepared statement interfaces like SQL. Therefore, the primary defense against LDAP injection is strong input validation of any untrusted data before including it in an LDAP query. For more information checkout the CWE-90 \(_[_https://cwe.mitre.org/data/definitions/90.html_](https://cwe.mitre.org/data/definitions/90.html)_\) advisory._



### Potential external control of configuration
{{% alert color="info" %}}
ID: "HS-JAVA-142"
{{% /alert %}}

_Allowing external control of system settings can disrupt service or cause an application to behave in unexpected, and potentially malicious ways. An attacker could cause an error by providing a nonexistent catalog name or connect to an unauthorized portion of the database. For more information checkout the CWE-15 \(_[_https://cwe.mitre.org/data/definitions/15.html_](https://cwe.mitre.org/data/definitions/15.html)_\) advisory._



### Bad hexadecimal concatenation
{{% alert color="info" %}}
ID: "HS-JAVA-143"
{{% /alert %}}

_When converting a byte array containing a hash signature to a human readable string, a conversion mistake can be made if the array is read byte by byte. The following sample illustrates the use of the method Integer.toHexString\(\) which will trim any leading zeroes from each byte of the computed hash value. For more information checkout the CWE-704 \(_[_https://cwe.mitre.org/data/definitions/704.html_](https://cwe.mitre.org/data/definitions/704.html)_\) advisory._

\_\_

### NullCipher is insecure
{{% alert color="info" %}}
ID: "HS-JAVA-144"
{{% /alert %}}

_The NullCipher is rarely used intentionally in production applications. It implements the Cipher interface by returning ciphertext identical to the supplied plaintext. In a few contexts, such as testing, a NullCipher may be appropriate. For more information checkout the CWE-704 \(_[_https://cwe.mitre.org/data/definitions/704.html_](https://cwe.mitre.org/data/definitions/704.html)_\) advisory._



### Unsafe hash equals
{{% alert color="info" %}}
ID: "HS-JAVA-145"
{{% /alert %}}

_An attacker might be able to detect the value of the secret hash due to the exposure of comparison timing. When the functions Arrays.equals\(\) or String.equals\(\) are called, they will exit earlier if fewer bytes are matched. For more information checkout the CWE-704 \(_[_https://cwe.mitre.org/data/definitions/704.html_](https://cwe.mitre.org/data/definitions/704.html)_\) advisory._

\_\_

### Unvalidated Redirect
{{% alert color="info" %}}
ID: "HS-JAVA-146"
{{% /alert %}}

 _Unvalidated redirects occur when an application redirects a user to a destination URL specified by a user supplied parameter that is not validated. Such vulnerabilities can be used to facilitate phishing attacks. For more information checkout the CWE-601 \(_[_https://cwe.mitre.org/data/definitions/601.html_](https://cwe.mitre.org/data/definitions/601.html)_\) advisory._

\_\_

### @RequestMapping methods should be public
{{% alert color="info" %}}
ID: "HS-JAVA-147"
{{% /alert %}}

_A method with a @RequestMapping annotation part of a class annotated with @Controller \(directly or indirectly through a meta annotation - @RestController from Spring Boot is a good example\) will be called to handle matching web requests. That will happen even if the method is private, because Spring invokes such methods via reflection, without checking visibility. For more information checkout the OWASAP:A6 \(_[_https://owasp.org/www-project-top-ten/OWASP\_Top\_Ten\_2017/Top\_10-2017\_A6-Security\_Misconfiguration_](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A6-Security_Misconfiguration)_\) advisory._

\_\_

### LDAP deserialization should be disabled
{{% alert color="info" %}}
ID: "HS-JAVA-148"
{{% /alert %}}

_JNDI supports the deserialization of objects from LDAP directories, which is fundamentally insecure and can lead to remote code execution. This rule raises an issue when an LDAP search query is executed with SearchControls configured to allow deserialization. For more information checkout the CWE-502 \(_[_https://cwe.mitre.org/data/definitions/502.html_](https://cwe.mitre.org/data/definitions/502.html)_\) advisory._

\_\_

### Databases should be password-protected 
{{% alert color="info" %}}
ID: "HS-JAVA-149"
{{% /alert %}}

_Databases should always be password protected. The use of a database connection with an empty password is a clear indication of a database that is not protected. For more information checkout the CWE-521 \(_[_https://cwe.mitre.org/data/definitions/521.html_](https://cwe.mitre.org/data/definitions/521.html)_\) advisory._



### XML parsing vulnerable to XXE
{{% alert color="info" %}}
ID: "HS-JAVA-1"
{{% /alert %}}

_XML External Entity \(XXE\) attacks can occur when an XML parser supports XML entities while processing XML received from an untrusted source. For more information checkout the CWE-611 \(_[_https://cwe.mitre.org/data/definitions/611.html_](https://cwe.mitre.org/data/definitions/611.html)_\) advisory._



### XML parsing vulnerable to XXE With XMLInputFactory
{{% alert color="info" %}}
ID: "HS-JAVA-2"
{{% /alert %}}

_XML External Entity \(XXE\) attacks can occur when an XML parser supports XML entities while processing XML received from an untrusted source. For more information checkout the CWE-611 \([https://cwe.mitre.org/data/definitions/611.html](https://cwe.mitre.org/data/definitions/611.html)\) advisory._



### XML parsing vulnerable to XXE With DocumentBuilder
{{% alert color="info" %}}
ID: "HS-JAVA-3"
{{% /alert %}}

_XML External Entity \(XXE\) attacks can occur when an XML parser supports XML entities while processing XML received from an untrusted source. For more information checkout the CWE-611 \(_[_https://cwe.mitre.org/data/definitions/611.html_](https://cwe.mitre.org/data/definitions/611.html)_\) advisory._



### XML parsing vulnerable to XXE With SAXParserFactory
{{% alert color="info" %}}
ID: "HS-JAVA-4"
{{% /alert %}}

_XML External Entity \(XXE\) attacks can occur when an XML parser supports XML entities while processing XML received from an untrusted source. For more information checkout the CWE-611 \(_[_https://cwe.mitre.org/data/definitions/611.html_](https://cwe.mitre.org/data/definitions/611.html)_\) advisory._

### 

### XML parsing vulnerable to XXE With TransformerFactory using SchemaFactory

_XML External Entity \(XXE\) attacks can occur when an XML parser supports XML entities while processing XML received from an untrusted source. For more information checkout the CWE-611 \(_[_https://cwe.mitre.org/data/definitions/611.html_](https://cwe.mitre.org/data/definitions/611.html)_\) advisory._

\_\_

### XML parsing vulnerable to XXE With TransformerFactory
{{% alert color="info" %}}
ID: "HS-JAVA-5"
{{% /alert %}}

 _XML External Entity \(XXE\) attacks can occur when an XML parser supports XML entities while processing XML received from an untrusted source. For more information checkout the CWE-611 \(_[_https://cwe.mitre.org/data/definitions/611.html_](https://cwe.mitre.org/data/definitions/611.html)_\) advisory._

### \_\_

### XML parsing vulnerable to XXE With Dom4j
{{% alert color="info" %}}
ID: "HS-JAVA-7"
{{% /alert %}}

 _XML External Entity \(XXE\) attacks can occur when an XML parser supports XML entities while processing XML received from an untrusted source. For more information checkout the CWE-611 \(_[_https://cwe.mitre.org/data/definitions/611.html_](https://cwe.mitre.org/data/definitions/611.html)_\) advisory._

\_\_

### XML parsing vulnerable to XXE With Jdom2
{{% alert color="info" %}}
ID: "HS-JAVA-8"
{{% /alert %}}

_XML External Entity \(XXE\) attacks can occur when an XML parser supports XML entities while processing XML received from an untrusted source. For more information checkout the CWE-611 \(_[_https://cwe.mitre.org/data/definitions/611.html_](https://cwe.mitre.org/data/definitions/611.html)_\) advisory._



### Insecure Implementation of SSL
{{% alert color="info" %}}
ID: "HS-JAVA-9"
{{% /alert %}}

 _Insecure Implementation of SSL. Trusting all the certificates or accepting self signed certificates is a critical Security Hole. This application is vulnerable to MITM attacks. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._

\_\_

### Message digest is custom
{{% alert color="info" %}}
ID: "HS-JAVA-10"
{{% /alert %}}

_Implementing a custom MessageDigest is error-prone. NIST recommends the use of SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224, or SHA-512/256. For more information checkout the CWE-327 \(_[_https://cwe.mitre.org/data/definitions/327.html_](https://cwe.mitre.org/data/definitions/327.html)_\) advisory._

\_\_

### TrustManager that accept any certificates Client
{{% alert color="info" %}}
ID: "HS-JAVA-11"
{{% /alert %}}

_Empty TrustManager implementations are often used to connect easily to a host that is not signed by a root certificate authority. As a consequence, this is vulnerable to Man-in-the-middle attacks since the client will trust any certificate. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._

\_\_

### Server hostnames should be verified during SSL/TLS connections
{{% alert color="info" %}}
ID: "HS-JAVA-12"
{{% /alert %}}

_To establish a SSL/TLS connection not vulnerable to man-in-the-middle attacks, it's essential to make sure the server presents the right certificate. The certificate's hostname-specific data should match the server hostname. It's not recommended to re-invent the wheel by implementing custom hostname verification. TLS/SSL libraries provide built-in hostname verification functions that should be used. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._

\_\_

### Server hostnames should be verified during SSL/TLS connections With SimpleEmail
{{% alert color="info" %}}
ID: "HS-JAVA-13"
{{% /alert %}}

_To establish a SSL/TLS connection not vulnerable to man-in-the-middle attacks, it's essential to make sure the server presents the right certificate. The certificate's hostname-specific data should match the server hostname. It's not recommended to re-invent the wheel by implementing custom hostname verification. TLS/SSL libraries provide built-in hostname verification functions that should be used. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._

\_\_

### Server hostnames should be verified during SSL/TLS connections With JavaMail's
{{% alert color="info" %}}
ID: "HS-JAVA-14"
{{% /alert %}}

_To establish a SSL/TLS connection not vulnerable to man-in-the-middle attacks, it's essential to make sure the server presents the right certificate. The certificate's hostname-specific data should match the server hostname. It's not recommended to re-invent the wheel by implementing custom hostname verification. TLS/SSL libraries provide built-in hostname verification functions that should be used. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._

\_\_

### TrustManager that accept any certificates Server
{{% alert color="info" %}}
ID: "HS-JAVA-16"
{{% /alert %}}

 _Empty TrustManager implementations are often used to connect easily to a host that is not signed by a root certificate authority. As a consequence, this is vulnerable to Man-in-the-middle attacks since the client will trust any certificate. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._

\_\_

### TrustManager that accept any certificates Issuers
{{% alert color="info" %}}
ID: "HS-JAVA-17"
{{% /alert %}}

 _Empty TrustManager implementations are often used to connect easily to a host that is not signed by a root certificate authority. As a consequence, this is vulnerable to Man-in-the-middle attacks since the client will trust any certificate. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._

\_\_

### WebView Load Files From External Storage
{{% alert color="info" %}}
ID: "HS-JAVA-18"
{{% /alert %}}

_WebView load files from external storage. Files in external storage can be modified by any application. For more information checkout the CWE-919 \(_[_https://cwe.mitre.org/data/definitions/919.html_](https://cwe.mitre.org/data/definitions/919.html)_\) advisory._

\_\_

### Insecure Web View Implementation
{{% alert color="info" %}}
ID: "HS-JAVA-19"
{{% /alert %}}

 _Insecure WebView Implementation. Execution of user controlled code in WebView is a critical Security Hole. For more information checkout the CWE-749 \(_[_https://cwe.mitre.org/data/definitions/749.html_](https://cwe.mitre.org/data/definitions/749.html)_\) advisory._

\_\_

### No Use SQL Cipher
{{% alert color="info" %}}
ID: "HS-JAVA-20"
{{% /alert %}}

_This App uses SQL Cipher. SQLCipher provides 256-bit AES encryption to sqlite database files_

 _Possíveis vulnerabilidades ao usar:_
 * _`SQLiteDatabase.loadLibs(...)`_
* _`net.sqlcipher`_

\_\_

### No Use Realm Database With Encryption Key
{{% alert color="info" %}}
ID: "HS-JAVA-21"
{{% /alert %}}

 _This App use Realm Database with encryption_
 _Possíveis vulnerabilidades ao usar:_
 * _`io.realm.Realm`_
* _`content.encryptionKey(...)`_

\_\_

### No Use Webview Debugging Enable
{{% alert color="info" %}}
ID: "HS-JAVA-22"
{{% /alert %}}

> _Remote WebView debugging is enabled. For more information checkout the CWE-215 \(_[_https://cwe.mitre.org/data/definitions/215.html_](https://cwe.mitre.org/data/definitions/215.html)_\) advisory._

\_\_

### No Listen To Clipboard
{{% alert color="info" %}}
ID: "HS-JAVA-23"
{{% /alert %}}

_This app listens to Clipboard changes. Some malwares also listen to Clipboard changes._
_Possíveis vulnerabilidades ao usar:_
* _`content.ClipboardManager`_
* _`OnPrimaryClipChangedListener`_

\_\_

### No copy content to clipboard
{{% alert color="info" %}}
ID: "HS-JAVA-24"
{{% /alert %}}

_This App copies data to clipboard. Sensitive data should not be copied to clipboard as other applications can access it._
_Possíveis vulnerabilidades ao usar:_
* _`content.ClipboardManager`_
* `setPrimaryClip`


### No Use Webview Ignoring SSL
{{% alert color="info" %}}
ID: "HS-JAVA-23"
{{% /alert %}}

 _Insecure WebView Implementation. WebView ignores SSL Certificate errors and accept any SSL Certificate. This application is vulnerable to MITM attacks. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._

\_\_

### SQL Injection With SqlUtil
{{% alert color="info" %}}
ID: "HS-JAVA-24"
{{% /alert %}}

 _The method identified is susceptible to injection. The input should be validated and properly escaped. For more information checkout the CWE-89 \(_[_https://cwe.mitre.org/data/definitions/89.html_](https://cwe.mitre.org/data/definitions/89.html)_\) advisory._

\_\_

### No Use Frida Server
{{% alert color="info" %}}
ID: "HS-JAVA-25"
{{% /alert %}}

This App detects frida server.

Possíveis vulnerabilidades ao usar:

* `fridaserver`
* `27047 or LIBFRIDA`



### No Use SSL Pinning Lib
{{% alert color="info" %}}
ID: "HS-JAVA-28"
{{% /alert %}}

_This App uses an SSL Pinning Library \(org.thoughtcrime.ssl.pinning\) to prevent MITM attacks in secure communication channel._

_Possíveis vulnerabilidades ao usar:_

* _`fridaserver`_
* _`27047 or LIBFRIDA`_

\_\_

### DexGuard Debug Detection
{{% alert color="info" %}}
ID: "HS-JAVA-29"
{{% /alert %}}

_DexGuard Debug Detection code to detect wheather an App is debuggable or not is identified._

_Possíveis vulnerabilidades ao usar:_

* _`import dexguard.util`_
* _`DebugDetector.isDebuggable`_

\_\_

### No Use DexGuard Debugger Connected
{{% alert color="info" %}}
ID: "HS-JAVA-30"
{{% /alert %}}

_DexGuard Debugger Detection code is identified._

 _Possíveis vulnerabilidades ao usar:_

* _`import dexguard.util`_
* _`DebugDetector.isDebuggerConnected`_

\_\_

### No Use DexGuard Emulator Detection
{{% alert color="info" %}}
ID: "HS-JAVA-31"
{{% /alert %}}

_DexGuard Emulator Detection code is identified._

_Possíveis vulnerabilidades ao usar:_

 * _`import dexguard.util`_
 * _`EmulatorDetector.isRunningInEmulator`_

\_\_

### No Use DexGuard With Debug Key
{{% alert color="info" %}}
ID: "HS-JAVA-32"
{{% /alert %}}

_DexGuard code to detect wheather the App is signed with a debug key or not is identified._

 _Possíveis vulnerabilidades ao usar:_

 * _`import dexguard.util`_
 * _`DebugDetector.isSignedWithDebugKey`_

\_\_

### No Use DexGuard Root
{{% alert color="info" %}}
ID: "HS-JAVA-33"
{{% /alert %}}

_DexGuard Root Detection code is identified._

 _Possíveis vulnerabilidades ao usar:_

 * _`import dexguard.util`_
 * _`RootDetector.isDeviceRooted`_

\_\_

### No Use DexGuard
{{% alert color="info" %}}
ID: "HS-JAVA-34"
{{% /alert %}}

_DexGuard App Tamper Detection code is identified._

 _Possíveis vulnerabilidades ao usar:_

* _`import dexguard.util`_
* _`TamperDetector.checkApk`_

\_\_

### No Use DexGuard in signer
{{% alert color="info" %}}
ID: "HS-JAVA-35"
{{% /alert %}}

_DexGuard Signer Certificate Tamper Detection code is identified._

 _Possíveis vulnerabilidades ao usar:_

* _`import dexguard.util`_
* _`TamperDetector.checkApk`_

\_\_

### No use package with tamper detection
{{% alert color="info" %}}
ID: "HS-JAVA-36"
{{% /alert %}}

_The App may use package signature for tamper detection._

 _Possíveis vulnerabilidades ao usar:_
* _`PackageManager.GET_SIGNATURES`_
* _`getPackageName(...)`_

\_\_

### Load and Manipulate Dex Files
{{% alert color="info" %}}
ID: "HS-JAVA-37"
{{% /alert %}}

_Load and Manipulate Dex Files_

 _Possíveis vulnerabilidades ao usar:_

* _`dalvik.system.PathClassLoader or dalvik.system.DexFile or dalvik.system.DexPathList`_
* _`loadDex or loadClass or DexClassLoader or loadDexFile`_

\_\_

### Obfuscation
{{% alert color="info" %}}
ID: "HS-JAVA-38"
{{% /alert %}}

_Obfuscation_

_Possíveis vulnerabilidades ao usar:_

* _`utils.AESObfuscator`_
* _`getObfuscator`_

\_\_

### Execute OS Command
{{% alert color="info" %}}
ID: "HS-JAVA-39"
{{% /alert %}}

 _Execute OS Command. For more information checkout the CWE-78 \(_[_https://cwe.mitre.org/data/definitions/78.html_](https://cwe.mitre.org/data/definitions/78.html)_\) advisory._

\_\_

### TCP Server Socket

_TCP Server Socket_

 _Possíveis vulnerabilidades ao usar:_

* _`new ServerSocket(...)`_
* _`net.ServerSocket`_

\_\_

### TCP Socket
{{% alert color="info" %}}
ID: "HS-JAVA-40"
{{% /alert %}}

 _TCP Socket_

_Possíveis vulnerabilidades ao usar:_
* _`new Socket(...)`_
* _`net.Socket`_

### \_\_

### UDP Datagram Packet
{{% alert color="info" %}}
ID: "HS-JAVA-42"
{{% /alert %}}

_UDP Datagram Packet_

_Possíveis vulnerabilidades ao usar:_

* _`DatagramPacket`_
* _`net.DatagramPacket`_

\_\_

### UDP Datagram Socket
{{% alert color="info" %}}
ID: "HS-JAVA-43"
{{% /alert %}}

 _UDP Datagram Socket_

_Possíveis vulnerabilidades ao usar:_

* _`net.DatagramPacket`_
* _`DatagramSocket`_

\_\_

### WebView JavaScript Interface
{{% alert color="info" %}}
ID: "HS-JAVA-44"
{{% /alert %}}

 _WebView JavaScript Interface_

_Possíveis vulnerabilidades ao usar:_

* _`addJavascriptInterface`_
* _`WebView`_

\_\_

### Get Cell Information
{{% alert color="info" %}}
ID: "HS-JAVA-45"
{{% /alert %}}

 _Get Cell Information_

 _Possíveis vulnerabilidades ao usar:_

* _`telephony.TelephonyManager`_
* _`getAllCellInfo`_

\_\_

### Get Cell Location
{{% alert color="info" %}}
ID: "HS-JAVA-46"
{{% /alert %}}

_Get Cell Location_

 _Possíveis vulnerabilidades ao usar:_

* _`telephony.TelephonyManager`_
* _`getCellLocation`_

\_\_

### Get Subscriber ID
{{% alert color="info" %}}
ID: "HS-JAVA-47"
{{% /alert %}}

 _Get Subscriber ID_

 _Possíveis vulnerabilidades ao usar:_

* _`telephony.TelephonyManager`_
* _`getSubscriberId`_

\_\_

### Get Device ID
{{% alert color="info" %}}
ID: "HS-JAVA-48"
{{% /alert %}}

_Get Device ID_

 _Possíveis vulnerabilidades ao usar:_

 * _`telephony.TelephonyManager`_
 * _`getDeviceId`_

\_\_

### Get Software Version, IMEI/SV etc
{{% alert color="info" %}}
ID: "HS-JAVA-49"
{{% /alert %}}

_Get Software Version, IMEI/SV etc_

 _Possíveis vulnerabilidades ao usar:_

* _`telephony.TelephonyManager`_
* _`getDeviceSoftwareVersion`_

\_\_

### Get SIM Serial Number
{{% alert color="info" %}}
ID: "HS-JAVA-50"
{{% /alert %}}

 _Get SIM Serial Number_

 _Possíveis vulnerabilidades ao usar:_

* _`telephony.TelephonyManager`_
* _`getSimSerialNumber`_

\_\_

### Get SIM Provider Details
{{% alert color="info" %}}
ID: "HS-JAVA-51"
{{% /alert %}}

 _Get SIM Provider Details_

 _Possíveis vulnerabilidades ao usar:_

* _`telephony.TelephonyManager`_
* _`getSimOperator`_

\_\_

### Get SIM Operator Name
{{% alert color="info" %}}
ID: "HS-JAVA-52"
{{% /alert %}}

_Get SIM Operator Name_

_Possíveis vulnerabilidades ao usar:_

* _`telephony.TelephonyManager`_
* _`getSimOperatorName`_

\_\_

### Query Database of SMS, Contacts etc.
{{% alert color="info" %}}
ID: "HS-JAVA-53"
{{% /alert %}}

 _Query Database of SMS, Contacts etc._
_Possíveis vulnerabilidades ao usar:_
* _`content.ContentResolver`_
* _`query`_

\_\_

### Potential Path Traversal \(file read\)
{{% alert color="info" %}}
ID: "HS-JAVA-54"
{{% /alert %}}

 _A file is opened to read its content. The filename comes from an input parameter. If an unfiltered parameter is passed to this file API, files from an arbitrary filesystem location could be read. This rule identifies potential path traversal vulnerabilities. Please consider use this example: `new File("resources/images/", FilenameUtils.getName(value_received_in_params))`. For more information checkout the CWE-22 \(_[_https://cwe.mitre.org/data/definitions/22.html_](https://cwe.mitre.org/data/definitions/22.html)_\) advisory._

\_\_

### Potential Path Traversal Using scala API \(file read\)
{{% alert color="info" %}}
ID: "HS-JAVA-56"
{{% /alert %}}

 _A file is opened to read its content. The filename comes from an input parameter. If an unfiltered parameter is passed to this file API, files from an arbitrary filesystem location could be read. Please consider use this example:_ 

 
 _`val result = Source.fromFile("public/lists/" + FilenameUtils.getName(value_received_in_params)).getLines().mkString`_

 _For more information checkout the CWE-22 \(_[_https://cwe.mitre.org/data/definitions/22.html_](https://cwe.mitre.org/data/definitions/22.html)_\) advisory._

\_\_

### SMTP Header Injection
{{% alert color="info" %}}
ID: "HS-JAVA-57"
{{% /alert %}}

_If user input is place in a header line, the application should remove or replace new line characters \(CR / LF\). For more information checkout the CWE-93 \(_[_https://cwe.mitre.org/data/definitions/93.html_](https://cwe.mitre.org/data/definitions/93.html)_\) advisory._

\_\_

### Insecure SMTP SSL connection
{{% alert color="info" %}}
ID: "HS-JAVA-58"
{{% /alert %}}

_Some email libraries that enable SSL connections do not verify the server certificate by default. This is equivalent to trusting all certificates. For more information checkout the CWE-297 \(_[_https://cwe.mitre.org/data/definitions/297.html_](https://cwe.mitre.org/data/definitions/297.html)_\) advisory._

\_\_

### Persistent Cookie Usage
{{% alert color="info" %}}
ID: "HS-JAVA-59"
{{% /alert %}}

 _Storing sensitive data in a persistent cookie for an extended period can lead to a breach of confidentiality or account compromise. For more information checkout the CWE-539 \(_[_https://cwe.mitre.org/data/definitions/539.html_](https://cwe.mitre.org/data/definitions/539.html)_\) advisory._

\_\_

### Anonymous LDAP bind
{{% alert color="info" %}}
ID: "HS-JAVA-60"
{{% /alert %}}

_All LDAP queries executed against the context will be performed without authentication and access control. For more information checkout the \(_[_https://docs.oracle.com/javase/tutorial/jndi/ldap/auth\_mechs.html_](https://docs.oracle.com/javase/tutorial/jndi/ldap/auth_mechs.html)_\) advisory._

\_\_

### LDAP Entry Poisoning
{{% alert color="info" %}}
ID: "HS-JAVA-61"
{{% /alert %}}

 _If certain attributes are presented, the deserialization of object will be made in the application querying the directory. Object deserialization should be consider a risky operation that can lead to remote code execution. For more information checkout the \(_[_https://blog.trendmicro.com/trendlabs-security-intelligence/new-headaches-how-the-pawn-storm-zero-day-evaded-javas-click-to-play-protection_](https://blog.trendmicro.com/trendlabs-security-intelligence/new-headaches-how-the-pawn-storm-zero-day-evaded-javas-click-to-play-protection)_\) advisory._

\_\_

### Ignoring XML comments in SAML
{{% alert color="info" %}}
ID: "HS-JAVA-62"
{{% /alert %}}

 _Security Assertion Markup Language \(SAML\) is a single sign-on protocol that that used XML. The SAMLResponse message include statements that describe the authenticated user. If a user manage to place XML comments \(\), it may caused issue in the way the parser extract literal value. For more information checkout the \(_[_https://spring.io/blog/2018/03/01/spring-security-saml-and-this-week-s-saml-vulnerability_](https://spring.io/blog/2018/03/01/spring-security-saml-and-this-week-s-saml-vulnerability)_\) advisory._

\_\_

### Information Exposure Through An Error Message
{{% alert color="info" %}}
ID: "HS-JAVA-63"
{{% /alert %}}

_The sensitive information may be valuable information on its own \(such as a password\), or it may be useful for launching other, more deadly attacks. For more information checkout the CWE-209 \(_[_https://cwe.mitre.org/data/definitions/209.html_](https://cwe.mitre.org/data/definitions/209.html)_\) advisory._

\_\_

### HTTP Parameter Pollution
{{% alert color="info" %}}
ID: "HS-JAVA-64"
{{% /alert %}}

 _Concatenating unvalidated user input into a URL can allow an attacker to override the value of a request parameter. For more information checkout the CAPEC-460 \(_[_https://capec.mitre.org/data/definitions/460.html_](https://capec.mitre.org/data/definitions/460.html)_\) advisory._

\_\_

### AWS Query Injection
{{% alert color="info" %}}
ID: "HS-JAVA-65"
{{% /alert %}}

_Constructing SimpleDB queries containing user input can allow an attacker to view unauthorized records. For more information checkout the CWE-943 \(_[_https://cwe.mitre.org/data/definitions/943.html_](https://cwe.mitre.org/data/definitions/943.html)_\) advisory._

\_\_

### Potential template injection with Pebble
{{% alert color="info" %}}
ID: "HS-JAVA-66"
{{% /alert %}}

 _A malicious user in control of a template can run malicious code on the server-side. Freemarker templates should be seen as scripts. For more information checkout the \(_[_https://portswigger.net/research/server-side-template-injection_](https://portswigger.net/research/server-side-template-injection)_\) advisory._

\_\_

### Potential template injection with Freemarker
{{% alert color="info" %}}
ID: "HS-JAVA-67"
{{% /alert %}}

_A malicious user in control of a template can run malicious code on the server-side. Freemarker templates should be seen as scripts. For more information checkout the \(_[_https://portswigger.net/research/server-side-template-injection_](https://portswigger.net/research/server-side-template-injection)_\) advisory._



### Request Dispatcher File Disclosure
{{% alert color="info" %}}
ID: "HS-JAVA-68"
{{% /alert %}}

_Constructing a server-side redirect path with user input could allow an attacker to download application binaries \(including application classes or jar files\) or view arbitrary files within protected directories. For more information checkout the CWE-552 \(_[_https://cwe.mitre.org/data/definitions/552.html_](https://cwe.mitre.org/data/definitions/552.html)_\) advisory._

\_\_

### Spring File Disclosure
{{% alert color="info" %}}
ID: "HS-JAVA-69"
{{% /alert %}}

_Constructing a server-side redirect path with user input could allow an attacker to download application binaries \(including application classes or jar files\) or view arbitrary files within protected directories. For more information checkout the CWE-552 \(_[_https://cwe.mitre.org/data/definitions/552.html_](https://cwe.mitre.org/data/definitions/552.html)_\) advisory._

### \_\_

### Potential code injection when using Script Engine
{{% alert color="info" %}}
ID: "HS-JAVA-70"
{{% /alert %}}

Dynamic code is being evaluate. A careful analysis of the code construction should be made. Malicious code execution could lead to data leakage or operating system compromised. For more information checkout the CWE-94 \(_[_https://cwe.mitre.org/data/definitions/94.html_](https://cwe.mitre.org/data/definitions/94.html)_\) advisory and checkout the CWE-95 \(_[_https://cwe.mitre.org/data/definitions/95.html_](https://cwe.mitre.org/data/definitions/95.html)_\) advisory._

### 

### Struts File Disclosure
{{% alert color="info" %}}
ID: "HS-JAVA-71"
{{% /alert %}}

_Constructing a server-side redirect path with user input could allow an attacker to download application binaries \(including application classes or jar files\) or view arbitrary files within protected directories. For more information checkout the CWE-552 \(_[_https://cwe.mitre.org/data/definitions/552.html_](https://cwe.mitre.org/data/definitions/552.html)_\) advisory._



### Unsafe Jackson deserialization configuration
{{% alert color="info" %}}
ID: "HS-JAVA-72"
{{% /alert %}}

 _When the Jackson databind library is used incorrectly the deserialization of untrusted data can lead to remote code execution, if there is a class in classpath that allows the trigger of malicious operation._



### Object deserialization is used
{{% alert color="info" %}}
ID: "HS-JAVA-73"
{{% /alert %}}

 _Object deserialization of untrusted data can lead to remote code execution, if there is a class in classpath that allows the trigger of malicious operation. For more information checkout the CWE-502 \(_[_https://cwe.mitre.org/data/definitions/502.html_](https://cwe.mitre.org/data/definitions/502.html)_\) advisory._



### Potential code injection when using Spring Expression
{{% alert color="info" %}}
ID: "HS-JAVA-74"
{{% /alert %}}

 _A Spring expression is built with a dynamic value. The source of the value\(s\) should be verified to avoid that unfiltered values fall into this risky code evaluation. For more information checkout the CWE-94 \(_[_https://cwe.mitre.org/data/definitions/94.html_](https://cwe.mitre.org/data/definitions/94.html)_\) advisory and checkout the CWE-95 \(_[_https://cwe.mitre.org/data/definitions/95.html_](https://cwe.mitre.org/data/definitions/95.html)_\) advisory._



### Cookie without the HttpOnly flag
{{% alert color="info" %}}
ID: "HS-JAVA-75"
{{% /alert %}}

 _A new cookie is created without the HttpOnly flag set. For more information checkout the \(_[_https://owasp.org/www-community/HttpOnly_](https://owasp.org/www-community/HttpOnly)_\) advisory._



### WebView with geolocation activated
{{% alert color="info" %}}
ID: "HS-JAVA-76"
{{% /alert %}}

_It is suggested to ask the user for a confirmation about obtaining its geolocation._

\_\_

### Use of ESAPI Encryptor
{{% alert color="info" %}}
ID: "HS-JAVA-77"
{{% /alert %}}

_The ESAPI has a small history of vulnerabilities within the cryptography component. Here is a quick validation list to make sure the Authenticated Encryption is working as expected. For more information checkout the CWE-310 \(_[_https://cwe.mitre.org/data/definitions/310.html_](https://cwe.mitre.org/data/definitions/310.html)_\) advisory._



### Static IV
{{% alert color="info" %}}
ID: "HS-JAVA-78"
{{% /alert %}}

_Initialization vector must be regenerated for each message to be encrypted. For more information checkout the CWE-329 \(_[_https://cwe.mitre.org/data/definitions/329.html_](https://cwe.mitre.org/data/definitions/329.html)_\) advisory._



### XML Decoder usage
{{% alert color="info" %}}
ID: "HS-JAVA-79"
{{% /alert %}}

 _XMLDecoder should not be used to parse untrusted data. Deserializing user input can lead to arbitrary code execution. For more information checkout the CWE-20 \(_[_https://cwe.mitre.org/data/definitions/20.html_](https://cwe.mitre.org/data/definitions/20.html)_\) advisory._

\_\_

### Potential XSS in Servlet
{{% alert color="info" %}}
ID: "HS-JAVA-80"
{{% /alert %}}

_A potential XSS was found. It could be used to execute unwanted JavaScript in a client's browser. For more information checkout the CWE-79 \(_[_https://cwe.mitre.org/data/definitions/79.html_](https://cwe.mitre.org/data/definitions/79.html)_\) advisory._

\_\_

### Escaping of special XML characters is disabled
{{% alert color="info" %}}
ID: "HS-JAVA-81"
{{% /alert %}}

 _A potential XSS was found. It could be used to execute unwanted JavaScript in a client's browser. For more information checkout the CWE-79 \(_[_https://cwe.mitre.org/data/definitions/79.html_](https://cwe.mitre.org/data/definitions/79.html)_\) advisory._

\_\_

### Dynamic variable in Spring expression
{{% alert color="info" %}}
ID: "HS-JAVA-82"
{{% /alert %}}

_A Spring expression is built with a dynamic value. The source of the value\(s\) should be verified to avoid that unfiltered values fall into this risky code evaluation. For more information checkout the CWE-95 \(_[_https://cwe.mitre.org/data/definitions/95.html_](https://cwe.mitre.org/data/definitions/95.html)_\) advisory._



### RSA usage with short key
{{% alert color="info" %}}
ID: "HS-JAVA-83"
{{% /alert %}}

_The NIST recommends the use of 2048 bits and higher keys for the RSA algorithm. For more information checkout the CWE-326 \(_[_https://cwe.mitre.org/data/definitions/326.html_](https://cwe.mitre.org/data/definitions/326.html)_\) advisory._



### Blowfish usage with short key
{{% alert color="info" %}}
ID: "HS-JAVA-84"
{{% /alert %}}

 _The Blowfish cipher supports key sizes from 32 bits to 448 bits. A small key size makes the ciphertext vulnerable to brute force attacks. At least 128 bits of entropy should be used when generating the key if use of Blowfish is required. For more information checkout the CWE-326 \(_[_https://cwe.mitre.org/data/definitions/326.html_](https://cwe.mitre.org/data/definitions/326.html)_\) advisory._



### Classes should not be loaded dynamically
{{% alert color="info" %}}
ID: "HS-JAVA-85"
{{% /alert %}}

_Dynamically loaded classes could contain malicious code executed by a static class initializer. I.E. you wouldn't even have to instantiate or explicitly invoke methods on such classes to be vulnerable to an attack. For more information checkout the CWE-326 \(_[_https://cwe.mitre.org/data/definitions/326.html_](https://cwe.mitre.org/data/definitions/326.html)_\) advisory._

\_\_

### HostnameVerifier.verify should not always return true
{{% alert color="info" %}}
ID: "HS-JAVA-86"
{{% /alert %}}

_To prevent URL spoofing, HostnameVerifier.verify\(\) methods should do more than simply return true. Doing so may get you quickly past an exception, but that comes at the cost of opening a security hole in your application. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._



### XPath expressions should not be vulnerable to injection attacks
{{% alert color="info" %}}
ID: "HS-JAVA-87"
{{% /alert %}}

_User provided data, such as URL parameters, should always be considered untrusted and tainted. Constructing XPath expressions directly from tainted data enables attackers to inject specially crafted values that changes the initial meaning of the expression itself. Successful XPath injection attacks can read sensitive information from XML documents. For more information checkout the CWE-643 \(_[_https://cwe.mitre.org/data/definitions/643.html_](https://cwe.mitre.org/data/definitions/643.html)_\) advisory._



### Exceptions should not be thrown from servlet methods
{{% alert color="info" %}}
ID: "HS-JAVA-88"
{{% /alert %}}

_Even though the signatures for methods in a servlet include throws IOException, ServletException, it's a bad idea to let such exceptions be thrown. Failure to catch exceptions in a servlet could leave a system in a vulnerable state. For more information checkout the CWE-600 \(_[_https://cwe.mitre.org/data/definitions/600.html_](https://cwe.mitre.org/data/definitions/600.html)_\) advisory._



### I/O function calls should not be vulnerable to path injection attacks
{{% alert color="info" %}}
ID: "HS-JAVA-89"
{{% /alert %}}

_User provided data, such as URL parameters, POST data payloads, or cookies, should always be considered untrusted and tainted. Constructing file system paths directly from tainted data could enable an attacker to inject specially crafted values, such as '../', that change the initial path and, when accessed, resolve to a path on the filesystem where the user should normally not have access. A successful attack might give an attacker the ability to read, modify, or delete sensitive information from the file system and sometimes even execute arbitrary operating system commands. This is often referred to as a "path traversal" or "directory traversal" attack. For more information checkout the CWE-99 \(_[_https://cwe.mitre.org/data/definitions/99.html_](https://cwe.mitre.org/data/definitions/99.html)_\) advisory and checkout the \(_[_https://owasp.org/www-project-top-ten/OWASP\_Top\_Ten\_2017/Top\_10-2017\_A1-Injection_](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A1-Injection)_\)_



### ActiveMQConnectionFactory should not be vulnerable to malicious code deserialization
{{% alert color="info" %}}
ID: "HS-JAVA-90"
{{% /alert %}}

_Internally, ActiveMQ relies on Java serialization mechanism for marshaling/unmashaling of the message payload. Deserialization based on data supplied by the user could lead to remote code execution attacks, where the structure of the serialized data is changed to modify the behavior of the object being unserialized. For more information checkout the CWE-502 \(_[_https://cwe.mitre.org/data/definitions/502.html_](https://cwe.mitre.org/data/definitions/502.html)_\) advisory_



### HTTP response headers should not be vulnerable to injection attacks
{{% alert color="info" %}}
ID: "HS-JAVA-91"
{{% /alert %}}


_User provided data, such as URL parameters, POST data payloads, or cookies, should always be considered untrusted and tainted. Applications constructing HTTP response headers based on tainted data could allow attackers to change security sensitive headers like Cross-Origin Resource Sharing headers. This could, for example, enable Cross-Site Scripting \(XSS\) attacks. Web application frameworks and servers might also allow attackers to inject new line characters in headers to craft malformed HTTP response. In this case the application would be vulnerable to a larger range of attacks like HTTP Response Splitting/Smuggling. Most of the time this type of attack is mitigated by default modern web application frameworks but there might be rare cases where older versions are still vulnerable. As a best practice, applications that use user provided data to construct the response header should always validate the data first. Validation should be based on a whitelist. For more information checkout the CWE-79 \(_[_https://cwe.mitre.org/data/definitions/79.html_](https://cwe.mitre.org/data/definitions/79.html)_\) advisory and checkout \(_[_https://www.owasp.org/index.php/Top\_10-2017\_A7-Cross-Site\_Scripting\_\(XSS_](https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_%28XSS)_\)\)._



### OpenSAML2 should be configured to prevent authentication bypass
{{% alert color="info" %}}
ID: "HS-JAVA-92"
{{% /alert %}}

 _From a specially crafted  file, an attacker having already access to the SAML system with his own account can bypass the authentication mechanism and be authenticated as another user. This is due to the fact that SAML protocol rely on XML format and how the underlying XML parser interprets XML comments. If an attacker manage to change the  field identifying the authenticated user with XML comments, he can exploit the vulnerability. For more information checkout the OWASP \(_[_https://owasp.org/www-project-top-ten/OWASP\_Top\_Ten\_2017/Top\_10-2017\_A2-Broken\_Authentication_](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A2-Broken_Authentication)_\) advisory._



### HttpServletRequest.getRequestedSessionId should not be used
{{% alert color="info" %}}
ID: "HS-JAVA-93"
{{% /alert %}}


_Due to the ability of the end-user to manually change the value, the session ID in the request should only be used by a servlet container \(E.G. Tomcat or Jetty\) to see if the value matches the ID of an an existing session. If it does not, the user should be considered unauthenticated. Moreover, this session ID should never be logged to prevent hijacking of active sessions. For more information checkout the CWE-807 \(_[_https://cwe.mitre.org/data/definitions/807_](https://cwe.mitre.org/data/definitions/807)_\) advisory._



### LDAP authenticated Analyze your code
{{% alert color="info" %}}
ID: "HS-JAVA-95"
{{% /alert %}}

_An LDAP client authenticates to an LDAP server with a "bind request" which provides, among other, a simple authentication method. Anonymous binds and unauthenticated binds allow access to information in the LDAP directory without providing a password, their use is therefore strongly discouraged. For more information checkout the CWE-521 \(_[_https://cwe.mitre.org/data/definitions/521.html_](https://cwe.mitre.org/data/definitions/521.html)_\) advisory and checkout \(_[_https://owasp.org/www-project-top-ten/OWASP\_Top\_Ten\_2017/Top\_10-2017\_A2-Broken\_Authentication_](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A2-Broken_Authentication)_\)._



### Web applications should not have a main method
{{% alert color="info" %}}
ID: "HS-JAVA-96"
{{% /alert %}}

 _Having a main method in a web application opens a door to the application logic that an attacker may never be able to reach \(but watch out if one does!\), but it is a sloppy practice and indicates that other problems may be present. For more information checkout the CWE-489 \(_[_https://cwe.mitre.org/data/definitions/489.html_](https://cwe.mitre.org/data/definitions/489.html)_\) advisory._

### 

### SecureRandom seeds should not be predictable
{{% alert color="info" %}}
ID: "HS-JAVA-98"
{{% /alert %}}

 _The java.security.SecureRandom class provides a strong random number generator \(RNG\) appropriate for cryptography. However, seeding it with a constant or another predictable value will weaken it significantly. In general, it is much safer to rely on the seed provided by the SecureRandom implementation. For more information checkout the CWE-330 \(_[_https://cwe.mitre.org/data/definitions/330.html_](https://cwe.mitre.org/data/definitions/330.html)_\) advisory and checkout \(_[_https://owasp.org/www-project-top-ten/OWASP\_Top\_Ten\_2017/Top\_10-2017\_A6-Security\_Misconfiguration_](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A6-Security_Misconfiguration)_\)