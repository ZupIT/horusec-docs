---
description: >-
  Nesta seção, você encontra informações das vulnerabilidades que o Horusec
  encontra em projetos Java.
---

# Horusec-Java

## O que é?

O [**Horusec-Java**](https://github.com/ZupIT/horusec/tree/master/horusec-java#horusec-java-cli) ****é  uma ferramenta SAST criado pela equipe do Horusec para fazer a busca de vulnerabilidades em projetos java.

## **Exemplos de vulnerabilidades**

{% hint style="info" %}
A seguir, você encontra todos os exemplos de vulnerabilidades que o Horussec-Java identifica. O conteúdo está em inglês porque é assim que ele aparece no sistema. 

Para visualizar vulnerabilidades específicas para projetos mobile em java, acesse a [**página Horusec-Kotlin**](horusec-kotlin.md) ****porque são as mesmas com as de Kotlin**.**
{% endhint %}

### File Is World Readable

Indica que o código está vulnerável e que, por isso, qualquer app conseguir ler o arquivo. A mensagem que aparece é esta:  __

> _The file is World Readable. Any App can read from the file. For more information checkout the CWE-276 \(_[_https://cwe.mitre.org/data/definitions/276.html_](https://cwe.mitre.org/data/definitions/276.html)_\) advisory._

Exemplo de código vulnerável:

```java
fos = openFileOutput(filename, MODE_WORLD_READABLE);
fos.write(userInfo.getBytes());
```

Exemplo de código não vulnerável: 

```kotlin
fos = openFileOutput(filename, MODE_PRIVATE);
```

### 

### File Is World Writable

Indica que o código está vulnerável e que, por isso, qualquer app pode escrever no arquivo. A mensagem que aparece é esta:

> _The file is World Writable. Any App can write to the file. For more information checkout the CWE-276 \(_[_https://cwe.mitre.org/data/definitions/276.html_](https://cwe.mitre.org/data/definitions/276.html)_\) advisory._

Exemplo de código vulnerável: 

```java
fos = openFileOutput(filename, MODE_WORLD_WRITABLE);
fos.write(userInfo.getBytes());
```

Exemplo de código não vulnerável:

```kotlin
fos = openFileOutput(filename, MODE_PRIVATE);
```

### 

### No Write External Content

Indica que o código está sensível e qualquer app pode ler ou escrever no armazenamento externo do seu arquivo. A mensagem que aparece é esta:

> App can read/write to External Storage. Any App can read data written to External Storage. For more information checkout the CWE-276 \([https://cwe.mitre.org/data/definitions/276.html](https://cwe.mitre.org/data/definitions/276.html)\) advisory.  
> This rule raises an issue when the following functions are called:

> * `android.os.Environment.getExternalStorageDirectory`
> * `android.os.Environment.getExternalStoragePublicDirectory`
> * `android.content.Context.getExternalFilesDir`
> * `android.content.Context.getExternalFilesDirs`
> * `android.content.Context.getExternalMediaDirs`
> * `android.content.Context.getExternalCacheDir`
> * `android.content.Context.getExternalCacheDirs`
> * `android.content.Context.getObbDir`
> * `android.content.Context.getObbDirs`

  
Exemplo de código sensível:

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

Indica que o aplicativo está usando um IVs fraco e que, por isso, está mais suscetível a ataques no seu diretório. A mensagem que aparece é esta: 

> _The App may use weak IVs like `0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00` or `0x01,0x02,0x03,0x04,0x05,0x06,0x07`. Not using a random IV makes the resulting ciphertext much more predictable and susceptible to a dictionary attack. For more information checkout the CWE-329 \(_[_https://cwe.mitre.org/data/definitions/329.html_](https://cwe.mitre.org/data/definitions/329.html)_\) advisory._



### This App may have root detection capabilities

Indica risco de que a raiz do aplicativo esteja com suas capacidades debilitadas. Isso pode acontecer se existir qualquer um dos códigos a seguir:

> * `.contains("test-keys")`
> * `/system/app/Superuser.apk`
> * `isDeviceRooted()`
> * `/system/bin/failsafe/su`
> * `/system/sd/xbin/su`
> * `"/system/xbin/which", "su"`
> * `RootTools.isAccessGiven()`

### 

### Set or Read Clipboard data

Indica uma vulnerabilidade encontrada  quando você faz um set ou lê  o conteúdo do seu clipboard usando qualquer um dos códigos a seguir:

> * `content.ClipboardManager`
> * `CLIPBOARD_SERVICE`
> * `ClipboardManager`

### 

### Message Digest

Indica que um algoritmo não é mais seguro por ser muito fácil de criar colisões no seu hash. A mensagem que aparece é esta:

> _The MD5 algorithm and its successor, SHA-1, are no longer considered secure, because it is too easy to create hash collisions with them. That is, it takes too little computational effort to come up with a different input that produces the same MD5 or SHA-1 hash, and using the new, same-hash value gives an attacker the same access as if he had the originally-hashed value. This applies as well to the other Message-Digest algorithms: MD2, MD4, MD6, HAVAL-128, HMAC-MD5, DSA \(which uses SHA-1\), RIPEMD, RIPEMD-128, RIPEMD-160, HMACRIPEMD160._

Exemplo de código vulnerável:

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

Exemplo de código não vulnerável:

```kotlin
MessageDigest sha256Digest = MessageDigest.getInstance("SHA256");
sha256Digest.update(password.getBytes());
```

### 

### Overly permissive file permission

Indica que houve um permissionamento excessivo ao arquivo, o que pode deixá-lo vulnerável a ataques. A mensagem que aparece é esta: 

> _It is generally a bad practices to set overly permissive file permission such as read+write+exec for all users. If the file affected is a configuration, a binary, a script or sensitive data, it can lead to privilege escalation or information leakage. For more information checkout the CWE-732 \(_[_https://cwe.mitre.org/data/definitions/732.html_](https://cwe.mitre.org/data/definitions/732.html)_\) advisory._

Exemplo de código vulnerável: 

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

Exemplo de código não vulnerável: 

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

Indica que o DES, RSA ou DESede não estão mais seguros. A mensagem que aparece é esta: 

> _DES is considered strong ciphers for modern applications. Currently, NIST recommends the usage of AES block ciphers instead of DES. For more information checkout the CWE-326 \(_[_https://cwe.mitre.org/data/definitions/326.html_](https://cwe.mitre.org/data/definitions/326.html)_\) advisory._

Exemplo de código vulnerável: 

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

Exemplo de código não vulnerável:

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

Indica que há elementos ocultos  e que, por isso, essas informações podem ser vazadas. A mensagem que aparece é esta:

> Hidden elements in view can be used to hide data from user. But this data can be leaked. For more information checkout the CWE-919 \([https://cwe.mitre.org/data/definitions/919.html](https://cwe.mitre.org/data/definitions/919.html)\) advisory.

### 

### Weak block mode for Cryptographic Hash Function

Indica que há um fraco bloqueio para entrada no seu hash. A mensagem que aparece é esta:

> _A weak ECB, \(a.k.a 'block mode'\) was found in one of your Ciphers. Always use a strong, high entropy hash, for example the SHA-512 with salt options. For more information check:_ 
>
> * _CWE-327_ 
> * \_\_[_**CWE-719**_](https://cwe.mitre.org/data/definitions/327.html%29)_\*\*\*\*_
> * _\*\*\*\*_[_**CWE-326**_](https://cwe.mitre.org/data/definitions/326.html)_\*\*\*\*_
> * _\*\*\*\*_[_**CWE-780**_](https://cwe.mitre.org/data/definitions/780.html) _**** for deeper details on how to fix it._

### 

### Weak Cryptographic Hash Function used

Indica que há uma criptografia fraca CHF que pode  aumentar o risco de ataque para vazamento de dados. A mensagem que aparece é esta:

> _Using a weak CHF pose a threat to your application security since it can be vulnerable to a number of attacks that could lead to data leaking, improper access of features and resources of your infrastructure and even rogue sessions. For more information checkout the CWE-327 \(_[_https://cwe.mitre.org/data/definitions/327.html_](https://cwe.mitre.org/data/definitions/327.html)_\) advisory._

### 

### Possible File With Vulnerability When Open

Indica que um possível arquivo com vulnerabilidade foi aberto. A mensagem que aparece é esta:

> _The file is World Readable and Writable. Any App can read/write to the file. For more information checkout the CWE-276 \(_[_https://cwe.mitre.org/data/definitions/276.html_](https://cwe.mitre.org/data/definitions/276.html)_\) advisory._

### 

### Sensitive Information Not Encrypted

Indica que há informações sensíveis não criptografadas. A mensagem que aparece é esta:

> _App can write to App Directory. Sensitive Information should be encrypted. For more information checkout the CWE-276 \(_[_https://cwe.mitre.org/data/definitions/276.html_](https://cwe.mitre.org/data/definitions/276.html)_\) advisory._

### 

### Insecure Random Number Generator

Indica que o app está usando um gerador de números randômicos que não é seguro. A mensagem que aparece é esta:

> _The App uses an insecure Random Number Generator. For more information checkout the CWE-330 \(_[_https://cwe.mitre.org/data/definitions/330.html_](https://cwe.mitre.org/data/definitions/330.html)_\) advisory._



### No Default Java Hash

Indica que não há um hash Java default, o que enfraquece a segurança do seu projeto. A mensagem que aparece é esta: 

> _This App uses Java Hash Code. It's a weak hash function and should never be used in Secure Crypto Implementation. For more information checkout the CWE-327 \(_[_https://cwe.mitre.org/data/definitions/327.html_](https://cwe.mitre.org/data/definitions/327.html)_\) advisory._



### Layout Params Flag Secure

Indica que há atividades que estão evitando a captura de tela quando vão para background da sua aplicação. 

### No use SQL Cipher

Indica que não há um SWL Cipher e, por isso, o "seguredo" de senhas e demais dados sensíveis podem ser descobertos. A mensagem que aparece é esta:

> _This App uses SQL Cipher. But the secret may be hardcoded. For more information checkout the CWE-312 \(_[_https://cwe.mitre.org/data/definitions/312.html_](https://cwe.mitre.org/data/definitions/312.html)_\) advisory._

\_\_

### Prevent Tap Jacking Attacks

Indica que o app está com fragilidades e que, por isso, pode não prevenir ataques de tapjacking. A mensagem que aparece é esta:

> _This app has capabilities to prevent tapjacking attacks. For more information checkout the CWE-1021 \(_[_https://cwe.mitre.org/data/definitions/1021.html_](https://cwe.mitre.org/data/definitions/1021.html)_\) advisory._



### Prevent Write sensitive information in tmp file

Indica a necessidade de criar um arquivo para previnir ataques a certos dados sensíveis.  A mensagem que aparece é esta:

> _App creates temp file. Sensitive information should never be written into a temp file. For more information checkout the CWE-276 \(_[_https://cwe.mitre.org/data/definitions/276.html_](https://cwe.mitre.org/data/definitions/276.html)_\) advisory._



### Get Window Flag Secure

Indica quando as capacidades do app de prevenir capturas de telas que venham do Recent Task History/Now On Tap etc.

Exemplo de código vulnerável:

```kotlin
public void disableScreenCapture() {
    getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE,
            WindowManager.LayoutParams.FLAG_SECURE);

}
```

### 

### Loading Native Code

Indica quando há problemas para código nativo ser carregado, em especial no caso de biblioteca compartilhada.

Exemplo de código vulnerável: 

```kotlin
System.loadLibrary("library")
```

### 

### Dynamic Class and Dexloading

Indica quando há um Dynamic Class and Dexloading. 

Exemplo de código vulnerável: 

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

Indica que há um problema na importação de Java Crypto. 

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

Indica que há vulnerabilidades ao iniciar aplicação usando `StartingService` or `BindService`. 

Exemplo de código vulnerável:

```kotlin
startService(...)
or
bindService(...)
```

### 

### Sending Broadcast

Indica que há problemas no `Sending Broadcast`. 

Exemplo de código vulnerável: 

```kotlin
sendBroadcast(...)
or
sendOrderedBroadcast(...)
or
sendStickyBroadcast(...)
```

### 

### Local File I/O Operations

Indica possíveis vulnerabilidades no Local File I/O Operations.

> _Possíveis vulnerabilidades ao usar:_
>
> * _`OpenFileOutput`_
> * _`getSharedPreferences`_
> * _`SharedPreferences.Editor`_
> * _`getCacheDir`_
> * _`getExternalStorageState`_
> * _`openOrCreateDatabase`_



### Inter Process Communication

Indica algum problema interno de processar comunicação. A mensagem que aparece é esta: 

> _Inter Process Communication_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`IRemoteService`_
> * _`IRemoteService.Stub`_
> * _`IBinder`_

\_\_

### DefaultHttpClient with default constructor is not compatible with TLS 1.2

Indica a sua implementação precisa ser atualizada para evitar incompatibilidades com TLS 1.2. A mensagem que aparece é esta:

> _Upgrade your implementation to use one of the recommended constructs and configure https.protocols JVM option to include TLSv1.2. Use SystemDefaultHttpClient instead. For more information checkout \(_[_https://blogs.oracle.com/java-platform-group/diagnosing-tls,-ssl,-and-https_](https://blogs.oracle.com/java-platform-group/diagnosing-tls,-ssl,-and-https)_\)._



### Weak SSLContext

Indica que a sua implementação precisa ser atualizada para  estar compatível com SSLContext. A mensagem que aparece é esta:

> _Upgrade your implementation to the following, and configure https.protocols JVM option to include TLSv1.2:. Use SSLContext.getInstance\("TLS"\). For more information checkout \(_[_https://blogs.oracle.com/java-platform-group/diagnosing-tls,-ssl,-and-https_](https://blogs.oracle.com/java-platform-group/diagnosing-tls,-ssl,-and-https)_\)_



### HostnameVerifier that accept any signed certificates

Indica possíveis problemas com HostNameVerifier  para trabalhar vulnerabilidades em alguns hosts. A mensagem que aparece é esta:

> _A HostnameVerifier that accept any host are often use because of certificate reuse on many hosts. As a consequence, this is vulnerable to Man-in-the-middle attacks since the client will trust any certificate. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._



### URL rewriting method

Indica que o método de reescrita da URL pode ter alguns riscos de segurança. A mensagem que aparece é esta:

> _URL rewriting has significant security risks. Since session ID appears in the URL, it may be easily seen by third parties. Session ID in the URL can be disclosed in many ways. For more information checkout the \(_[_https://owasp.org/www-project-top-ten/OWASP\_Top\_Ten\_2017/Top\_10-2017\_A2-Broken\_Authentication_](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A2-Broken_Authentication)_\) advisory._



### Disabling HTML escaping

Indica que o HTML escaping não está funcionando corretamente e, por isso, pode representar riscos de XSS. A mensagem que aparece é esta:

> _Disabling HTML escaping put the application at risk for Cross-Site Scripting \(XSS\). For more information checkout the CWE-79 \(_[_https://cwe.mitre.org/data/definitions/79.html_](https://cwe.mitre.org/data/definitions/79.html)_\) advisory._



### Overly permissive CORS policy

Indica que o CORS policy está com excesso de permissionamento, o que pode representar riscos de segurança. A mensagem que aparece é esta: 

> _A web server defines which other domains are allowed to access its domain using cross-origin requests. However, caution should be taken when defining the header because an overly permissive CORS policy will allow a malicious application to communicate with the victim application in an inappropriate way, leading to spoofing, data theft, relay and other attacks. For more information checkout the \(_[_https://fetch.spec.whatwg.org/_](https://fetch.spec.whatwg.org/)_\) advisory._



### SQL Injection

Indica que os valores do SQL Injection podem não estar sendo passados com segurança. A mensagem que aparece é esta:

> _The input values included in SQL queries need to be passed in safely. Bind variables in prepared statements can be used to easily mitigate the risk of SQL injection. Alternatively to prepare statements, each parameter can be escaped manually. For more information checkout the CWE-89 \(_[_https://cwe.mitre.org/data/definitions/89.html_](https://cwe.mitre.org/data/definitions/89.html)_\) advisory._



### SQL Injection With Turbine

Indica mais uma vulnerabilidade associada a SQL Injection. A mensagem que aparece é esta: 

> _The input values included in SQL queries need to be passed in safely. Bind variables in prepared statements can be used to easily mitigate the risk of SQL injection. Turbine API provide a DSL to build query with Java code. Alternatively to prepare statements, each parameter can be escaped manually. For more information checkout the CWE-89 \(_[_https://cwe.mitre.org/data/definitions/89.html_](https://cwe.mitre.org/data/definitions/89.html)_\) advisory._



### SQL Injection With Hibernate

Indica mais uma vulnerabilidade associada a SQL Injection. A mensagem que aparece é esta:

> _The input values included in SQL queries need to be passed in safely. Bind variables in prepared statements can be used to easily mitigate the risk of SQL injection. Alternatively to prepare statements, Hibernate Criteria can be used. For more information checkout the CWE-89 \(_[_https://cwe.mitre.org/data/definitions/89.html_](https://cwe.mitre.org/data/definitions/89.html)_\) advisory and checkout the CWE-564 \(_[_https://cwe.mitre.org/data/definitions/564.html_](https://cwe.mitre.org/data/definitions/564.html)_\) advisory._



### SQL Injection With JDO

Indica mais uma vulnerabilidade associada a SQL Injection. A mensagem que aparece é esta:

> _The input values included in SQL queries need to be passed in safely. Bind variables in prepared statements can be used to easily mitigate the risk of SQL injection. For more information checkout the CWE-89 \(_[_https://cwe.mitre.org/data/definitions/89.html_](https://cwe.mitre.org/data/definitions/89.html)_\) advisory._



### SQL Injection With JPA

Indica mais uma vulnerabilidade associada a SQL Injection. A mensagem que aparece é esta: 

> _The input values included in SQL queries need to be passed in safely. Bind variables in prepared statements can be used to easily mitigate the risk of SQL injection. For more information checkout the CWE-89 \(_[_https://cwe.mitre.org/data/definitions/89.html_](https://cwe.mitre.org/data/definitions/89.html)_\) advisory._



### SQL Injection Spring JDBC

Indica mais uma vulnerabilidade associada a SQL Injection. A mensagem que aparece é esta: 

> The input values included in SQL queries need to be passed in safely. Bind variables in prepared statements can be used to easily mitigate the risk of SQL injection. For more information checkout the CWE-89 \([https://cwe.mitre.org/data/definitions/89.html](https://cwe.mitre.org/data/definitions/89.html)\) advisory.



### SQL Injection JDBC

Indica mais uma vulnerabilidade associada a SQL Injection. A mensagem que aparece é esta: 

> _The input values included in SQL queries need to be passed in safely. Bind variables in prepared statements can be used to easily mitigate the risk of SQL injection. For more information checkout the CWE-89 \(_[_https://cwe.mitre.org/data/definitions/89.html_](https://cwe.mitre.org/data/definitions/89.html)_\) advisory._



### Potential LDAP Injection

Indica uma potencial  vulnerabilidade com LDAP. A mensagem que aparece é esta: 

> _Just like SQL, all inputs passed to an LDAP query need to be passed in safely. Unfortunately, LDAP doesn't have prepared statement interfaces like SQL. Therefore, the primary defense against LDAP injection is strong input validation of any untrusted data before including it in an LDAP query. For more information checkout the CWE-90 \(_[_https://cwe.mitre.org/data/definitions/90.html_](https://cwe.mitre.org/data/definitions/90.html)_\) advisory._



### Potential external control of configuration

Indica possíveis riscos ao permitir controle externo às configurações do sistema. A mensagem que aparece é esta: 

> _Allowing external control of system settings can disrupt service or cause an application to behave in unexpected, and potentially malicious ways. An attacker could cause an error by providing a nonexistent catalog name or connect to an unauthorized portion of the database. For more information checkout the CWE-15 \(_[_https://cwe.mitre.org/data/definitions/15.html_](https://cwe.mitre.org/data/definitions/15.html)_\) advisory._



### Bad hexadecimal concatenation

Indica uma má concatenação do hexadecimal. A mensagem que aparece é esta: 

> _When converting a byte array containing a hash signature to a human readable string, a conversion mistake can be made if the array is read byte by byte. The following sample illustrates the use of the method Integer.toHexString\(\) which will trim any leading zeroes from each byte of the computed hash value. For more information checkout the CWE-704 \(_[_https://cwe.mitre.org/data/definitions/704.html_](https://cwe.mitre.org/data/definitions/704.html)_\) advisory._

\_\_

### NullCipher is insecure

Indica inseguranças relacionadas à NullCipher. A mensagem que aparece é esta: 

> _The NullCipher is rarely used intentionally in production applications. It implements the Cipher interface by returning ciphertext identical to the supplied plaintext. In a few contexts, such as testing, a NullCipher may be appropriate. For more information checkout the CWE-704 \(_[_https://cwe.mitre.org/data/definitions/704.html_](https://cwe.mitre.org/data/definitions/704.html)_\) advisory._



### Unsafe hash equals

Indica que o valor secreto do hash pode ser descoberto por invasores devido a problemas em algumas funções. A mensagem que aparece é esta: 

> _An attacker might be able to detect the value of the secret hash due to the exposure of comparison timing. When the functions Arrays.equals\(\) or String.equals\(\) are called, they will exit earlier if fewer bytes are matched. For more information checkout the CWE-704 \(_[_https://cwe.mitre.org/data/definitions/704.html_](https://cwe.mitre.org/data/definitions/704.html)_\) advisory._

\_\_

### Unvalidated Redirect

Indica problemas de redirecionamento. A mensagem que aparece é esta: 

> _Unvalidated redirects occur when an application redirects a user to a destination URL specified by a user supplied parameter that is not validated. Such vulnerabilities can be used to facilitate phishing attacks. For more information checkout the CWE-601 \(_[_https://cwe.mitre.org/data/definitions/601.html_](https://cwe.mitre.org/data/definitions/601.html)_\) advisory._

\_\_

### @RequestMapping methods should be public

Indica possíveis problemas no método @RequestMapping. A mensagem que aparece é esta:

> _A method with a @RequestMapping annotation part of a class annotated with @Controller \(directly or indirectly through a meta annotation - @RestController from Spring Boot is a good example\) will be called to handle matching web requests. That will happen even if the method is private, because Spring invokes such methods via reflection, without checking visibility. For more information checkout the OWASAP:A6 \(_[_https://owasp.org/www-project-top-ten/OWASP\_Top\_Ten\_2017/Top\_10-2017\_A6-Security\_Misconfiguration_](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A6-Security_Misconfiguration)_\) advisory._

\_\_

### LDAP deserialization should be disabled

Indica que a desirialização do LDAP pode estar desabilitada. A mensagem que aparece é esta: 

> _JNDI supports the deserialization of objects from LDAP directories, which is fundamentally insecure and can lead to remote code execution. This rule raises an issue when an LDAP search query is executed with SearchControls configured to allow deserialization. For more information checkout the CWE-502 \(_[_https://cwe.mitre.org/data/definitions/502.html_](https://cwe.mitre.org/data/definitions/502.html)_\) advisory._

\_\_

### Databases should be password-protected

Indica que as bases de dados precisam de proteção para senhas. A mensagem que aparece é esta: 

> _Databases should always be password protected. The use of a database connection with an empty password is a clear indication of a database that is not protected. For more information checkout the CWE-521 \(_[_https://cwe.mitre.org/data/definitions/521.html_](https://cwe.mitre.org/data/definitions/521.html)_\) advisory._



### XML parsing vulnerable to XXE

Indica vulnerabilidades associadas ao XML. A mensagem que aparece é esta: 

> _XML External Entity \(XXE\) attacks can occur when an XML parser supports XML entities while processing XML received from an untrusted source. For more information checkout the CWE-611 \(_[_https://cwe.mitre.org/data/definitions/611.html_](https://cwe.mitre.org/data/definitions/611.html)_\) advisory._



### XML parsing vulnerable to XXE With XMLInputFactory

Indica vulnerabilidades associadas ao XML. A mensagem que aparece é esta: 

> XML External Entity \(XXE\) attacks can occur when an XML parser supports XML entities while processing XML received from an untrusted source. For more information checkout the CWE-611 \([https://cwe.mitre.org/data/definitions/611.html](https://cwe.mitre.org/data/definitions/611.html)\) advisory.



### XML parsing vulnerable to XXE With DocumentBuilder

Indica vulnerabilidades associadas ao XML. A mensagem que aparece é esta: 

> _XML External Entity \(XXE\) attacks can occur when an XML parser supports XML entities while processing XML received from an untrusted source. For more information checkout the CWE-611 \(_[_https://cwe.mitre.org/data/definitions/611.html_](https://cwe.mitre.org/data/definitions/611.html)_\) advisory._



### XML parsing vulnerable to XXE With SAXParserFactory

Indica vulnerabilidades associadas ao XML. A mensagem que aparece é esta: 

> _XML External Entity \(XXE\) attacks can occur when an XML parser supports XML entities while processing XML received from an untrusted source. For more information checkout the CWE-611 \(_[_https://cwe.mitre.org/data/definitions/611.html_](https://cwe.mitre.org/data/definitions/611.html)_\) advisory._

### 

### XML parsing vulnerable to XXE With TransformerFactory using SchemaFactory

Indica vulnerabilidades associadas ao XML. A mensagem que aparece é esta: 

> _XML External Entity \(XXE\) attacks can occur when an XML parser supports XML entities while processing XML received from an untrusted source. For more information checkout the CWE-611 \(_[_https://cwe.mitre.org/data/definitions/611.html_](https://cwe.mitre.org/data/definitions/611.html)_\) advisory._

\_\_

### XML parsing vulnerable to XXE With TransformerFactory

Indica vulnerabilidades associadas ao XML. A mensagem que aparece é esta: 

> _XML External Entity \(XXE\) attacks can occur when an XML parser supports XML entities while processing XML received from an untrusted source. For more information checkout the CWE-611 \(_[_https://cwe.mitre.org/data/definitions/611.html_](https://cwe.mitre.org/data/definitions/611.html)_\) advisory._

### \_\_

### XML parsing vulnerable to XXE With Dom4j

Indica vulnerabilidades associadas ao XML. A mensagem que aparece é esta: 

> _XML External Entity \(XXE\) attacks can occur when an XML parser supports XML entities while processing XML received from an untrusted source. For more information checkout the CWE-611 \(_[_https://cwe.mitre.org/data/definitions/611.html_](https://cwe.mitre.org/data/definitions/611.html)_\) advisory._

\_\_

### XML parsing vulnerable to XXE With Jdom2

Indica vulnerabilidades associadas ao XML. A mensagem que aparece é esta: 

> _XML External Entity \(XXE\) attacks can occur when an XML parser supports XML entities while processing XML received from an untrusted source. For more information checkout the CWE-611 \(_[_https://cwe.mitre.org/data/definitions/611.html_](https://cwe.mitre.org/data/definitions/611.html)_\) advisory._



### Insecure Implementation of SSL

> _Insecure Implementation of SSL. Trusting all the certificates or accepting self signed certificates is a critical Security Hole. This application is vulnerable to MITM attacks. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._

\_\_

### Message digest is custom

> _Implementing a custom MessageDigest is error-prone. NIST recommends the use of SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224, or SHA-512/256. For more information checkout the CWE-327 \(_[_https://cwe.mitre.org/data/definitions/327.html_](https://cwe.mitre.org/data/definitions/327.html)_\) advisory._

\_\_

### TrustManager that accept any certificates Client

> _Empty TrustManager implementations are often used to connect easily to a host that is not signed by a root certificate authority. As a consequence, this is vulnerable to Man-in-the-middle attacks since the client will trust any certificate. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._

\_\_

### Server hostnames should be verified during SSL/TLS connections

> _To establish a SSL/TLS connection not vulnerable to man-in-the-middle attacks, it's essential to make sure the server presents the right certificate. The certificate's hostname-specific data should match the server hostname. It's not recommended to re-invent the wheel by implementing custom hostname verification. TLS/SSL libraries provide built-in hostname verification functions that should be used. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._

\_\_

### Server hostnames should be verified during SSL/TLS connections With SimpleEmail

> _To establish a SSL/TLS connection not vulnerable to man-in-the-middle attacks, it's essential to make sure the server presents the right certificate. The certificate's hostname-specific data should match the server hostname. It's not recommended to re-invent the wheel by implementing custom hostname verification. TLS/SSL libraries provide built-in hostname verification functions that should be used. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._

\_\_

### Server hostnames should be verified during SSL/TLS connections With JavaMail's

> _To establish a SSL/TLS connection not vulnerable to man-in-the-middle attacks, it's essential to make sure the server presents the right certificate. The certificate's hostname-specific data should match the server hostname. It's not recommended to re-invent the wheel by implementing custom hostname verification. TLS/SSL libraries provide built-in hostname verification functions that should be used. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._

\_\_

### TrustManager that accept any certificates Server

> _Empty TrustManager implementations are often used to connect easily to a host that is not signed by a root certificate authority. As a consequence, this is vulnerable to Man-in-the-middle attacks since the client will trust any certificate. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._

\_\_

### TrustManager that accept any certificates Issuers

> _Empty TrustManager implementations are often used to connect easily to a host that is not signed by a root certificate authority. As a consequence, this is vulnerable to Man-in-the-middle attacks since the client will trust any certificate. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._

\_\_

### WebView Load Files From External Storage

> _WebView load files from external storage. Files in external storage can be modified by any application. For more information checkout the CWE-919 \(_[_https://cwe.mitre.org/data/definitions/919.html_](https://cwe.mitre.org/data/definitions/919.html)_\) advisory._

\_\_

### Insecure Web View Implementation

> _Insecure WebView Implementation. Execution of user controlled code in WebView is a critical Security Hole. For more information checkout the CWE-749 \(_[_https://cwe.mitre.org/data/definitions/749.html_](https://cwe.mitre.org/data/definitions/749.html)_\) advisory._

\_\_

### No Use SQL Cipher

Indica problemas relacionados ao uso de SQL Cipher. A mensagem que aparece é esta: 

> _This App uses SQL Cipher. SQLCipher provides 256-bit AES encryption to sqlite database files_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`SQLiteDatabase.loadLibs(...)`_
> * _`net.sqlcipher`_

\_\_

### No Use Realm Database With Encryption Key

Indica problemas relacionados ao uso do Realm Database com criptografia. A mensagem que aparece é esta: 

> _This App use Realm Database with encryption_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`io.realm.Realm`_
> * _`content.encryptionKey(...)`_

\_\_

### No Use Webview Debugging Enable

Indica problemas relacionados ao WebView remoto. A mensagem que aparece é esta: 

> _Remote WebView debugging is enabled. For more information checkout the CWE-215 \(_[_https://cwe.mitre.org/data/definitions/215.html_](https://cwe.mitre.org/data/definitions/215.html)_\) advisory._

\_\_

### No Listen To Clipboard

Indica problemas em retornar mudanças do clipboard. A mensagem que aparece é esta: 

> _This app listens to Clipboard changes. Some malwares also listen to Clipboard changes._
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`content.ClipboardManager`_
> * _`OnPrimaryClipChangedListener`_

\_\_

### No copy content to clipboard

Indica possíveis problemas ao se copiar dados sensíveis para clipboard. A mensagem que aparece é esta:

> _This App copies data to clipboard. Sensitive data should not be copied to clipboard as other applications can access it._
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`content.ClipboardManager`_
> * `setPrimaryClip`



### No Use Webview Ignoring SSL

> _Insecure WebView Implementation. WebView ignores SSL Certificate errors and accept any SSL Certificate. This application is vulnerable to MITM attacks. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._

\_\_

### SQL Injection With SqlUtil

> _The method identified is susceptible to injection. The input should be validated and properly escaped. For more information checkout the CWE-89 \(_[_https://cwe.mitre.org/data/definitions/89.html_](https://cwe.mitre.org/data/definitions/89.html)_\) advisory._

\_\_

### No Use Frida Server

Indica que há erros quanto ao uso do Frida Server. A mensagem que aparece é esta:

> This App detects frida server.
>
> Possíveis vulnerabilidades ao usar:
>
> * `fridaserver`
> * `27047 or LIBFRIDA`



### No Use SSL Pinning Lib

Indica problemas no uso da Lib do SSL Pinning. A mensagem que aparece é esta: 

> _This App uses an SSL Pinning Library \(org.thoughtcrime.ssl.pinning\) to prevent MITM attacks in secure communication channel._
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`fridaserver`_
> * _`27047 or LIBFRIDA`_

\_\_

### DexGuard Debug Detection

Indica problemas relaciondas a detecção de debug no DexGuard. A mensagem que aparece é esta:

> _DexGuard Debug Detection code to detect wheather an App is debuggable or not is identified._
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`import dexguard.util`_
> * _`DebugDetector.isDebuggable`_

\_\_

### No Use DexGuard Debugger Connected

Indica problemas relacionados à identificação do DexGuard Debugger Detection. A mensagem que aparece é esta:

> _DexGuard Debugger Detection code is identified._
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`import dexguard.util`_
> * _`DebugDetector.isDebuggerConnected`_

\_\_

### No Use DexGuard Emulator Detection

Indica que não foi detectado uso do DexGuard Emulator. A mensagem que aparece é esta: 

> _DexGuard Emulator Detection code is identified._
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`import dexguard.util`_
> * _`EmulatorDetector.isRunningInEmulator`_

\_\_

### No Use DexGuard With Debug Key

Indica vulnerabilidades relacionadas ao DexGuard com uso da chave Debug. A mensagem que aparece é esta:

> _DexGuard code to detect wheather the App is signed with a debug key or not is identified._
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`import dexguard.util`_
> * _`DebugDetector.isSignedWithDebugKey`_

\_\_

### No Use DexGuard Root

Identifica a presença do código do DexGuard Root. A mensagem que aparece é esta: 

> _DexGuard Root Detection code is identified._
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`import dexguard.util`_
> * _`RootDetector.isDeviceRooted`_

\_\_

### No Use DexGuard

Identifica a presença do código do DexGuard App Tamper. A mensagem que aparece é esta: 

> _DexGuard App Tamper Detection code is identified._
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`import dexguard.util`_
> * _`TamperDetector.checkApk`_

\_\_

### No Use DexGuard in signer

Identifica a presença do código DexGuard Signer Certificate Tamper. A mensagem que aparece é esta:

> _DexGuard Signer Certificate Tamper Detection code is identified._
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`import dexguard.util`_
> * _`TamperDetector.checkApk`_

\_\_

### No use package with tamper detection

Indica que não há um pacote de uso no seu tamper detection. A mensagem que aparece é esta:  

> _The App may use package signature for tamper detection._
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`PackageManager.GET_SIGNATURES`_
> * _`getPackageName(...)`_

\_\_

### Load and Manipulate Dex Files

> _Load and Manipulate Dex Files_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`dalvik.system.PathClassLoader or dalvik.system.DexFile or dalvik.system.DexPathList`_
> * _`loadDex or loadClass or DexClassLoader or loadDexFile`_

\_\_

### Obfuscation

> _Obfuscation_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`utils.AESObfuscator`_
> * _`getObfuscator`_

\_\_

### Execute OS Command

> _Execute OS Command. For more information checkout the CWE-78 \(_[_https://cwe.mitre.org/data/definitions/78.html_](https://cwe.mitre.org/data/definitions/78.html)_\) advisory._

\_\_

### TCP Server Socket

> _TCP Server Socket_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`new ServerSocket(...)`_
> * _`net.ServerSocket`_

\_\_

### TCP Socket

> _TCP Socket_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`new Socket(...)`_
> * _`net.Socket`_

### \_\_

### UDP Datagram Packet

> _UDP Datagram Packet_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`DatagramPacket`_
> * _`net.DatagramPacket`_

\_\_

### UDP Datagram Socket

> _UDP Datagram Socket_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`net.DatagramPacket`_
> * _`DatagramSocket`_

\_\_

### WebView JavaScript Interface

> _WebView JavaScript Interface_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`addJavascriptInterface`_
> * _`WebView`_

\_\_

### Get Cell Information

> _Get Cell Information_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`telephony.TelephonyManager`_
> * _`getAllCellInfo`_

\_\_

### Get Cell Location

> _Get Cell Location_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`telephony.TelephonyManager`_
> * _`getCellLocation`_

\_\_

### Get Subscriber ID

> _Get Subscriber ID_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`telephony.TelephonyManager`_
> * _`getSubscriberId`_

\_\_

### Get Device ID

> _Get Device ID_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`telephony.TelephonyManager`_
> * _`getDeviceId`_

\_\_

### Get Software Version, IMEI/SV etc

> _Get Software Version, IMEI/SV etc_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`telephony.TelephonyManager`_
> * _`getDeviceSoftwareVersion`_

\_\_

### Get SIM Serial Number

> _Get SIM Serial Number_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`telephony.TelephonyManager`_
> * _`getSimSerialNumber`_

\_\_

### Get SIM Provider Details

> _Get SIM Provider Details_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`telephony.TelephonyManager`_
> * _`getSimOperator`_

\_\_

### Get SIM Operator Name

> _Get SIM Operator Name_
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`telephony.TelephonyManager`_
> * _`getSimOperatorName`_

\_\_

### Query Database of SMS, Contacts etc.

> _Query Database of SMS, Contacts etc._
>
> _Possíveis vulnerabilidades ao usar:_
>
> * _`content.ContentResolver`_
> * _`query`_

\_\_

### Potential Path Traversal \(file read\)

> _A file is opened to read its content. The filename comes from an input parameter. If an unfiltered parameter is passed to this file API, files from an arbitrary filesystem location could be read. This rule identifies potential path traversal vulnerabilities. Please consider use this example: `new File("resources/images/", FilenameUtils.getName(value_received_in_params))`. For more information checkout the CWE-22 \(_[_https://cwe.mitre.org/data/definitions/22.html_](https://cwe.mitre.org/data/definitions/22.html)_\) advisory._

\_\_

### Potential Path Traversal Using scala API \(file read\)

> _A file is opened to read its content. The filename comes from an input parameter. If an unfiltered parameter is passed to this file API, files from an arbitrary filesystem location could be read. Please consider use this example:_ 
>
>   
> _`val result = Source.fromFile("public/lists/" + FilenameUtils.getName(value_received_in_params)).getLines().mkString`_
>
> _For more information checkout the CWE-22 \(_[_https://cwe.mitre.org/data/definitions/22.html_](https://cwe.mitre.org/data/definitions/22.html)_\) advisory._

\_\_

### SMTP Header Injection

> _If user input is place in a header line, the application should remove or replace new line characters \(CR / LF\). For more information checkout the CWE-93 \(_[_https://cwe.mitre.org/data/definitions/93.html_](https://cwe.mitre.org/data/definitions/93.html)_\) advisory._

\_\_

### Insecure SMTP SSL connection

> _Some email libraries that enable SSL connections do not verify the server certificate by default. This is equivalent to trusting all certificates. For more information checkout the CWE-297 \(_[_https://cwe.mitre.org/data/definitions/297.html_](https://cwe.mitre.org/data/definitions/297.html)_\) advisory._

\_\_

### Persistent Cookie Usage

> _Storing sensitive data in a persistent cookie for an extended period can lead to a breach of confidentiality or account compromise. For more information checkout the CWE-539 \(_[_https://cwe.mitre.org/data/definitions/539.html_](https://cwe.mitre.org/data/definitions/539.html)_\) advisory._

\_\_

### Anonymous LDAP bind

> _All LDAP queries executed against the context will be performed without authentication and access control. For more information checkout the \(_[_https://docs.oracle.com/javase/tutorial/jndi/ldap/auth\_mechs.html_](https://docs.oracle.com/javase/tutorial/jndi/ldap/auth_mechs.html)_\) advisory._

\_\_

### LDAP Entry Poisoning

> _If certain attributes are presented, the deserialization of object will be made in the application querying the directory. Object deserialization should be consider a risky operation that can lead to remote code execution. For more information checkout the \(_[_https://blog.trendmicro.com/trendlabs-security-intelligence/new-headaches-how-the-pawn-storm-zero-day-evaded-javas-click-to-play-protection_](https://blog.trendmicro.com/trendlabs-security-intelligence/new-headaches-how-the-pawn-storm-zero-day-evaded-javas-click-to-play-protection)_\) advisory._

\_\_

### Ignoring XML comments in SAML

> _Security Assertion Markup Language \(SAML\) is a single sign-on protocol that that used XML. The SAMLResponse message include statements that describe the authenticated user. If a user manage to place XML comments \(\), it may caused issue in the way the parser extract literal value. For more information checkout the \(_[_https://spring.io/blog/2018/03/01/spring-security-saml-and-this-week-s-saml-vulnerability_](https://spring.io/blog/2018/03/01/spring-security-saml-and-this-week-s-saml-vulnerability)_\) advisory._

\_\_

### Information Exposure Through An Error Message

> _The sensitive information may be valuable information on its own \(such as a password\), or it may be useful for launching other, more deadly attacks. For more information checkout the CWE-209 \(_[_https://cwe.mitre.org/data/definitions/209.html_](https://cwe.mitre.org/data/definitions/209.html)_\) advisory._

\_\_

### HTTP Parameter Pollution

> _Concatenating unvalidated user input into a URL can allow an attacker to override the value of a request parameter. For more information checkout the CAPEC-460 \(_[_https://capec.mitre.org/data/definitions/460.html_](https://capec.mitre.org/data/definitions/460.html)_\) advisory._

\_\_

### AWS Query Injection

> _Constructing SimpleDB queries containing user input can allow an attacker to view unauthorized records. For more information checkout the CWE-943 \(_[_https://cwe.mitre.org/data/definitions/943.html_](https://cwe.mitre.org/data/definitions/943.html)_\) advisory._

\_\_

### Potential template injection with Pebble

> _A malicious user in control of a template can run malicious code on the server-side. Freemarker templates should be seen as scripts. For more information checkout the \(_[_https://portswigger.net/research/server-side-template-injection_](https://portswigger.net/research/server-side-template-injection)_\) advisory._

\_\_

### Potential template injection with Freemarker

> _A malicious user in control of a template can run malicious code on the server-side. Freemarker templates should be seen as scripts. For more information checkout the \(_[_https://portswigger.net/research/server-side-template-injection_](https://portswigger.net/research/server-side-template-injection)_\) advisory._



### Request Dispatcher File Disclosure

> _Constructing a server-side redirect path with user input could allow an attacker to download application binaries \(including application classes or jar files\) or view arbitrary files within protected directories. For more information checkout the CWE-552 \(_[_https://cwe.mitre.org/data/definitions/552.html_](https://cwe.mitre.org/data/definitions/552.html)_\) advisory._

\_\_

### Spring File Disclosure

> _Constructing a server-side redirect path with user input could allow an attacker to download application binaries \(including application classes or jar files\) or view arbitrary files within protected directories. For more information checkout the CWE-552 \(_[_https://cwe.mitre.org/data/definitions/552.html_](https://cwe.mitre.org/data/definitions/552.html)_\) advisory._

### \_\_

### Potential code injection when using Script Engine

> _Dynamic code is being evaluate. A careful analysis of the code construction should be made. Malicious code execution could lead to data leakage or operating system compromised. For more information checkout the CWE-94 \(_[_https://cwe.mitre.org/data/definitions/94.html_](https://cwe.mitre.org/data/definitions/94.html)_\) advisory and checkout the CWE-95 \(_[_https://cwe.mitre.org/data/definitions/95.html_](https://cwe.mitre.org/data/definitions/95.html)_\) advisory._

### 

### Struts File Disclosure

> _Constructing a server-side redirect path with user input could allow an attacker to download application binaries \(including application classes or jar files\) or view arbitrary files within protected directories. For more information checkout the CWE-552 \(_[_https://cwe.mitre.org/data/definitions/552.html_](https://cwe.mitre.org/data/definitions/552.html)_\) advisory._



### Unsafe Jackson deserialization configuration

Indica configuração não seguras do Jackson datablind. A mensagem que aparece é esta:  

> _When the Jackson databind library is used incorrectly the deserialization of untrusted data can lead to remote code execution, if there is a class in classpath that allows the trigger of malicious operation._



### Object deserialization is used

Indica problemas relacionados a objetos desirializados. A mensagem que aparece é esta: 

> _Object deserialization of untrusted data can lead to remote code execution, if there is a class in classpath that allows the trigger of malicious operation. For more information checkout the CWE-502 \(_[_https://cwe.mitre.org/data/definitions/502.html_](https://cwe.mitre.org/data/definitions/502.html)_\) advisory._



### Potential code injection when using Spring Expression

Indica potenciais problemas relacionados ao uso da expressão Spring. A mensagem que aparece é esta:

> _A Spring expression is built with a dynamic value. The source of the value\(s\) should be verified to avoid that unfiltered values fall into this risky code evaluation. For more information checkout the CWE-94 \(_[_https://cwe.mitre.org/data/definitions/94.html_](https://cwe.mitre.org/data/definitions/94.html)_\) advisory and checkout the CWE-95 \(_[_https://cwe.mitre.org/data/definitions/95.html_](https://cwe.mitre.org/data/definitions/95.html)_\) advisory._



### Cookie without the HttpOnly flag

Indica que cookies foram criados sem a flag de HttpOnly. A mensagem que aparece é esta: 

> _A new cookie is created without the HttpOnly flag set. For more information checkout the \(_[_https://owasp.org/www-community/HttpOnly_](https://owasp.org/www-community/HttpOnly)_\) advisory._



### WebView with geolocation activated

> _It is suggested to ask the user for a confirmation about obtaining its geolocation._

\_\_

### Use of ESAPI Encryptor

Indica atenção ao uso da criptografia ESAPI. A mensagem que aparece é esta: 

> _The ESAPI has a small history of vulnerabilities within the cryptography component. Here is a quick validation list to make sure the Authenticated Encryption is working as expected. For more information checkout the CWE-310 \(_[_https://cwe.mitre.org/data/definitions/310.html_](https://cwe.mitre.org/data/definitions/310.html)_\) advisory._



### Static IV

Indica falhas relacionadas ao Static IV. A mensagem que aparece é esta: 

> _Initialization vector must be regenerated for each message to be encrypted. For more information checkout the CWE-329 \(_[_https://cwe.mitre.org/data/definitions/329.html_](https://cwe.mitre.org/data/definitions/329.html)_\) advisory._



### XML Decoder usage

Indica problemas relacionados ao uso do Decoder XML. A mensagem que aparece é esta: 

> _XMLDecoder should not be used to parse untrusted data. Deserializing user input can lead to arbitrary code execution. For more information checkout the CWE-20 \(_[_https://cwe.mitre.org/data/definitions/20.html_](https://cwe.mitre.org/data/definitions/20.html)_\) advisory._

\_\_

### Potential XSS in Servlet

Indica  a presença de XSS no Servlet. A mensagem que aparece é esta: 

> _A potential XSS was found. It could be used to execute unwanted JavaScript in a client's browser. For more information checkout the CWE-79 \(_[_https://cwe.mitre.org/data/definitions/79.html_](https://cwe.mitre.org/data/definitions/79.html)_\) advisory._

\_\_

### Escaping of special XML characters is disabled

Indica  a presença de XSS. A mensagem que aparece é esta: 

> _A potential XSS was found. It could be used to execute unwanted JavaScript in a client's browser. For more information checkout the CWE-79 \(_[_https://cwe.mitre.org/data/definitions/79.html_](https://cwe.mitre.org/data/definitions/79.html)_\) advisory._

\_\_

### Dynamic variable in Spring expression

Sinaliza para uso de expressões spring em variaveis dinâmicas. A mensagem que aparece é esta: 

> _A Spring expression is built with a dynamic value. The source of the value\(s\) should be verified to avoid that unfiltered values fall into this risky code evaluation. For more information checkout the CWE-95 \(_[_https://cwe.mitre.org/data/definitions/95.html_](https://cwe.mitre.org/data/definitions/95.html)_\) advisory._



### RSA usage with short key

Indica um alerta quanto ao uso de chaves com RSA. A mensagem que aparece é esta: 

> _The NIST recommends the use of 2048 bits and higher keys for the RSA algorithm. For more information checkout the CWE-326 \(_[_https://cwe.mitre.org/data/definitions/326.html_](https://cwe.mitre.org/data/definitions/326.html)_\) advisory._



### Blowfish usage with short key

Indica um alerta quanto ao tamanho das chaves suportadas pelo Blowfish. A mensagem que aparece é esta:

> _The Blowfish cipher supports key sizes from 32 bits to 448 bits. A small key size makes the ciphertext vulnerable to brute force attacks. At least 128 bits of entropy should be used when generating the key if use of Blowfish is required. For more information checkout the CWE-326 \(_[_https://cwe.mitre.org/data/definitions/326.html_](https://cwe.mitre.org/data/definitions/326.html)_\) advisory._



### Classes should not be loaded dynamically

Indica possíveis riscos de algumas classes estarem sendo carregadas de forma dinâmica.  A mensagem que aparece é esta: 

> _Dynamically loaded classes could contain malicious code executed by a static class initializer. I.E. you wouldn't even have to instantiate or explicitly invoke methods on such classes to be vulnerable to an attack. For more information checkout the CWE-326 \(_[_https://cwe.mitre.org/data/definitions/326.html_](https://cwe.mitre.org/data/definitions/326.html)_\) advisory._

\_\_

### HostnameVerifier.verify should not always return true

Indica que o valor do HostnameVerifier.verify está retornando como true, quando deveria trazer mais informações. A mensagem que aparece é esta:

> _To prevent URL spoofing, HostnameVerifier.verify\(\) methods should do more than simply return true. Doing so may get you quickly past an exception, but that comes at the cost of opening a security hole in your application. For more information checkout the CWE-295 \(_[_https://cwe.mitre.org/data/definitions/295.html_](https://cwe.mitre.org/data/definitions/295.html)_\) advisory._



### XPath expressions should not be vulnerable to injection attacks

Indica que expressões XPath estão vulneráveis a certos ataques. A mensagem que aparece é esta: 

> _User provided data, such as URL parameters, should always be considered untrusted and tainted. Constructing XPath expressions directly from tainted data enables attackers to inject specially crafted values that changes the initial meaning of the expression itself. Successful XPath injection attacks can read sensitive information from XML documents. For more information checkout the CWE-643 \(_[_https://cwe.mitre.org/data/definitions/643.html_](https://cwe.mitre.org/data/definitions/643.html)_\) advisory._



### Exceptions should not be thrown from servlet methods

Indica possíveis falhas de segurança em alguns métodos servlet. A mensagem que aparece é esta:

> _Even though the signatures for methods in a servlet include throws IOException, ServletException, it's a bad idea to let such exceptions be thrown. Failure to catch exceptions in a servlet could leave a system in a vulnerable state. For more information checkout the CWE-600 \(_[_https://cwe.mitre.org/data/definitions/600.html_](https://cwe.mitre.org/data/definitions/600.html)_\) advisory._



### I/O function calls should not be vulnerable to path injection attacks

Indica que a função I/O está vulnerável a certos ataques. A mensagem que aparece é esta:

> _User provided data, such as URL parameters, POST data payloads, or cookies, should always be considered untrusted and tainted. Constructing file system paths directly from tainted data could enable an attacker to inject specially crafted values, such as '../', that change the initial path and, when accessed, resolve to a path on the filesystem where the user should normally not have access. A successful attack might give an attacker the ability to read, modify, or delete sensitive information from the file system and sometimes even execute arbitrary operating system commands. This is often referred to as a "path traversal" or "directory traversal" attack. For more information checkout the CWE-99 \(_[_https://cwe.mitre.org/data/definitions/99.html_](https://cwe.mitre.org/data/definitions/99.html)_\) advisory and checkout the \(_[_https://owasp.org/www-project-top-ten/OWASP\_Top\_Ten\_2017/Top\_10-2017\_A1-Injection_](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A1-Injection)_\)_



### ActiveMQConnectionFactory should not be vulnerable to malicious code deserialization

Indica que o ActiveMOConnectionFactory está vulnerável a códigos maliciosos. A mensagem que aparece é esta:

> _Internally, ActiveMQ relies on Java serialization mechanism for marshaling/unmashaling of the message payload. Deserialization based on data supplied by the user could lead to remote code execution attacks, where the structure of the serialized data is changed to modify the behavior of the object being unserialized. For more information checkout the CWE-502 \(_[_https://cwe.mitre.org/data/definitions/502.html_](https://cwe.mitre.org/data/definitions/502.html)_\) advisory_



### HTTP response headers should not be vulnerable to injection attacks

Indica que a resposta HTTP está vulnerável a certos ataques. A mensagem que aparece é esta: 

> _User provided data, such as URL parameters, POST data payloads, or cookies, should always be considered untrusted and tainted. Applications constructing HTTP response headers based on tainted data could allow attackers to change security sensitive headers like Cross-Origin Resource Sharing headers. This could, for example, enable Cross-Site Scripting \(XSS\) attacks. Web application frameworks and servers might also allow attackers to inject new line characters in headers to craft malformed HTTP response. In this case the application would be vulnerable to a larger range of attacks like HTTP Response Splitting/Smuggling. Most of the time this type of attack is mitigated by default modern web application frameworks but there might be rare cases where older versions are still vulnerable. As a best practice, applications that use user provided data to construct the response header should always validate the data first. Validation should be based on a whitelist. For more information checkout the CWE-79 \(_[_https://cwe.mitre.org/data/definitions/79.html_](https://cwe.mitre.org/data/definitions/79.html)_\) advisory and checkout \(_[_https://www.owasp.org/index.php/Top\_10-2017\_A7-Cross-Site\_Scripting\_\(XSS_](https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_%28XSS)_\)\)._



### OpenSAML2 should be configured to prevent authentication bypass

Indica que o OpenSAML2 não está devidamente configurado. A mensagem que aparece é esta: 

> _From a specially crafted  file, an attacker having already access to the SAML system with his own account can bypass the authentication mechanism and be authenticated as another user. This is due to the fact that SAML protocol rely on XML format and how the underlying XML parser interprets XML comments. If an attacker manage to change the  field identifying the authenticated user with XML comments, he can exploit the vulnerability. For more information checkout the OWASP \(_[_https://owasp.org/www-project-top-ten/OWASP\_Top\_Ten\_2017/Top\_10-2017\_A2-Broken\_Authentication_](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A2-Broken_Authentication)_\) advisory._



### HttpServletRequest.getRequestedSessionId should not be used

Indica quando há uma sessão com um ID que não foi devidamente autenticado. A mensagem que aparece é esta:

> _Due to the ability of the end-user to manually change the value, the session ID in the request should only be used by a servlet container \(E.G. Tomcat or Jetty\) to see if the value matches the ID of an an existing session. If it does not, the user should be considered unauthenticated. Moreover, this session ID should never be logged to prevent hijacking of active sessions. For more information checkout the CWE-807 \(_[_https://cwe.mitre.org/data/definitions/807_](https://cwe.mitre.org/data/definitions/807)_\) advisory._



### LDAP authenticated Analyze your code

Indica atenção caso haja acessos indevidos ao diretório do LDAP. A mensagem que aparece é esta:  

> _An LDAP client authenticates to an LDAP server with a "bind request" which provides, among other, a simple authentication method. Anonymous binds and unauthenticated binds allow access to information in the LDAP directory without providing a password, their use is therefore strongly discouraged. For more information checkout the CWE-521 \(_[_https://cwe.mitre.org/data/definitions/521.html_](https://cwe.mitre.org/data/definitions/521.html)_\) advisory and checkout \(_[_https://owasp.org/www-project-top-ten/OWASP\_Top\_Ten\_2017/Top\_10-2017\_A2-Broken\_Authentication_](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A2-Broken_Authentication)_\)._



### Web applications should not have a main method

Indica que as aplicações web não possuem o método main. A mensagem que aparece é esta:

> _Having a main method in a web application opens a door to the application logic that an attacker may never be able to reach \(but watch out if one does!\), but it is a sloppy practice and indicates that other problems may be present. For more information checkout the CWE-489 \(_[_https://cwe.mitre.org/data/definitions/489.html_](https://cwe.mitre.org/data/definitions/489.html)_\) advisory._

### 

### SecureRandom seeds should not be predictable

Indica que o Secure Random, se usado de forma incorreta, pode enfraquecer a segurança de seus dados. A mensagem que aparece é esta: 

> _The java.security.SecureRandom class provides a strong random number generator \(RNG\) appropriate for cryptography. However, seeding it with a constant or another predictable value will weaken it significantly. In general, it is much safer to rely on the seed provided by the SecureRandom implementation. For more information checkout the CWE-330 \(_[_https://cwe.mitre.org/data/definitions/330.html_](https://cwe.mitre.org/data/definitions/330.html)_\) advisory and checkout \(_[_https://owasp.org/www-project-top-ten/OWASP\_Top\_Ten\_2017/Top\_10-2017\_A6-Security\_Misconfiguration_](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A6-Security_Misconfiguration)_\)._



