---
description: >-
  Nesta seção, você encontra informações das vulnerabilidades que o Horusec
  encontra em projetos Kotlin.
---

# Horusec-Kotlin

## O que é?

O  ****[**Horusec-Kotlin**](https://github.com/ZupIT/horusec/tree/master/horusec-kotlin#horusec-kotlin-cli) é  uma ferramenta SAST criado pela equipe do Horusec para fazer a busca de vulnerabilidades em projetos Kotlin.

## Exemplos de vulnerabilidades 

{% hint style="info" %}
A seguir, você encontra todos os exemplos de vulnerabilidades que o Horussec-Kotlin identifica. O conteúdo está em inglês porque é assim que ele aparece no sistema. 
{% endhint %}

### No Log Sensitive Information

> The App logs information. Sensitive information should never be logged. For more information checkout the CWE-532 \([https://cwe.mitre.org/data/definitions/532.html](https://cwe.mitre.org/data/definitions/532.html)\) advisory.

Exemplo de código vulnerável:

```kotlin

const DatabaseURI = "..."

Log.info("Connection string of the database: " + DatabaseURI)

```

### HTTP Requests, Connections and Sessions 

Ninguém utiliza a requisição http, conexão e sessões com insegurança. 

> No uses Http request, connections and sessions with insecure.

Exemplo de código vulnerável:

```kotlin
import http.client.HttpClient
```

### No uses Content Provider 

Ninguém utiliza o provedor de conteúdo. 

> No uses Content Provider.

Exemplo de código vulnerável:

```kotlin
import android.content.ContentProvider
```

### No uses safety API

Ninguém utiliza a API de segurança

> No uses safety api in your application.

Exemplo de código vulnerável:

```kotlin
import com.google.android.gms.safetynet.SafetyNetApi
```

### Local File I/O Operations 

Ninguém utiliza operações de entrada e saída de arquivos. 

> No use operations of input or output in files.

Exemplo de código vulnerável:

```kotlin
var query: [String: Any] = [kSecAttrAccessible as String: kSecAttrAccessibleWhenUnlocked]
```

### WebView Component 

Ninguém utiliza o componente WebView.

> No use WebView Component.

### Encryption API 

Ninguém utiliza API de criptografia com vulnerabilidades. 

> No use Encryption API with vulnerabilities.

### No Use Prohibited APIs 

A aplicação pode conter API proibidas. Essas APIs são inseguras e não devem ser usadas. 

> The application may contain prohibited APIs. These APIs are insecure and should not be used. For more information checkout the CWE-676 \([https://cwe.mitre.org/data/definitions/676.html](https://cwe.mitre.org/data/definitions/676.html)\) advisory.

> * `strcpy`
> * `memcpy`
> * `strcat`
> * `strncat`
> * `strncpy`
> * `sprintf`
> * `vsprintf`

### UIWebView in application ignoring errors SSL 

A UIWebView ignora os erros do SSL e aceita qualquer certificado SSL. A aplicação é vulnerável a ataques do MITM \(Man-in-the-middle\). 

> The in-app UIWebView ignores SSL errors and accepts any SSL certificate. The application is vulnerable to attacks from MITM \(Man-In-The-Middle\). For more information checkout the CWE-295 \([https://cwe.mitre.org/data/definitions/295.html](https://cwe.mitre.org/data/definitions/295.html)\) advisory.

### No List changes on the clipboard 

A aplicação permite que você liste as mudanças do clipboard. Alguns malwares também listam mudanças no clipboard. 

> The application allows you to list the changes on the Clipboard. Some malware also lists changes to the Clipboard.

Exemplo de código vulnerável:

```kotlin
const NSNotificationName UIPasteboardChangedNotification
```

### No copies data to the Clipboard 

A aplicação copia o dado para o clipboard. Os dados confidencias não devem ser copiados para o clipboard, assim outras aplicações podem acessar. 

> The application copies data to the Clipboard. Confidential data must not be copied to the Clipboard, as other applications can access it. For more information checkout the CWE-327 \([https://cwe.mitre.org/data/definitions/327.html](https://cwe.mitre.org/data/definitions/327.html)\) advisory.

Exemplo de código vulnerável:

```kotlin
var clipboard UIPasteboard
```

### The application is using SQLite 

A aplicação está usando SQLite. Informações confidenciais devem estar criptografadas. 

> The application is using SQLite. Confidential information must be encrypted.

Exemplo de código vulnerável:

```kotlin
sqlite3_exec(...)
```

### No use NSTemporaryDirectory 

Usuário em "NSTemporaryDirectory \(\)" não é confiável e pode resultar em vulnerabilidade no diretório. 

> User use in "NSTemporaryDirectory \(\)" is unreliable, it can result in vulnerabilities in the directory. For more information checkout the CWE-22 \([https://cwe.mitre.org/data/definitions/22.html](https://cwe.mitre.org/data/definitions/22.html)\) advisory.

Exemplo de código vulnerável:

```kotlin
const tempDirectory NSTemporaryDirectory
```

### Send SMS 

Essa aplicação envia sms sem segurança. 

> This App is send sms without security.

Exemplo de código vulnerável:

```kotlin
import telephony.SmsManager
```

### Super User Privileges 

Essa aplicação pode fazer a requisição no  usuário root \(super user\).

> This App may request root \(Super User\) privileges. For more information checkout the CWE-250 \([https://cwe.mitre.org/data/definitions/250.html](https://cwe.mitre.org/data/definitions/250.html)\) advisory.

Exemplo de código vulnerável:

```kotlin
import com.noshufou.android.su
```

### Base64 Encode 

Autenticação básica que significa obfuscação na Base64 da codificação. 

> Basic authentication's only means of obfuscation is Base64 encoding. Since Base64 encoding is easily recognized and reversed, it offers only the thinnest veil of protection to your users, and should not be used. For more information checkout the OWASP Top Ten 2017 A3\([https://owasp.org/www-project-top-ten/2017/A3\_2017-Sensitive\_Data\_Exposure.html](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure.html)\) advisory and CWE-522 \([https://cwe.mitre.org/data/definitions/522.html](https://cwe.mitre.org/data/definitions/522.html)\).

Exemplo de código vulnerável

```kotlin
// Using HttpPost from Apache HttpClient
String encoding = Base64Encoder.encode ("login:passwd");
org.apache.http.client.methods.HttpPost httppost = new HttpPost(url);
httppost.setHeader("Authorization", "Basic " + encoding);  // Noncompliant
```

### Base64 Decode 

> Basic authentication's only means of obfuscation is Base64 decoding. Since Base64 decoding is easily recognized and reversed, it offers only the thinnest veil of protection to your users, and should not be used. For more information checkout the OWASP Top Ten 2017 A3\([https://owasp.org/www-project-top-ten/2017/A3\_2017-Sensitive\_Data\_Exposure.html](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure.html)\) advisory and CWE-522 \([https://cwe.mitre.org/data/definitions/522.html](https://cwe.mitre.org/data/definitions/522.html)\).

Exemplo de código vulnerável:

```kotlin
var password = "PASSWORD_IN_BASE64";
String passwordDecoded = Base64Encoder.decode(password);
```

### GPS Location Known

Sem uso do GPS para a última localização.

> No use GPS Location to get last known location.

### Jailbreak Detection Methods

A aplicação pode conter mecanismos de detecção de jailbreak.

> The application may contain Jailbreak detection mechanisms.

Possíveis vulnerabilidades ao usar:

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

Essa aplicação faz o download de arquivos usando o Android download manager. 

> This App downloads files using Android Download Manager.

```kotlin
import android.app.DownloadManager;
```

### Android Keystore

Ninguém utiliza o gerenciamento do Android Keystore.

> No use Android Keystore to manager.

### Android Notifications

Ninguém utiliza as notificações do Android. 

> No read android notifications

### Potential Android SQL Injection

A entrada de valores inclusas nas consultas SQL precisam ser passadas com segurança. Variáveis bind em instruções preparadas podem ser facilmente mitigar o risco de uma injenção de SQL. 

> The input values included in SQL queries need to be passed in safely. Bind variables in prepared statements can be used to easily mitigate the risk of SQL injection. For more information checkout the CWE-89 \([https://cwe.mitre.org/data/definitions/89.html](https://cwe.mitre.org/data/definitions/89.html)\) advisory and [OWASP: Top 10 2017-A1-Injection](https://owasp.org/www-project-top-ten/2017/A1_2017-Injection).

Exemplo de código vulnerável:

```kotlin
String query = "SELECT * FROM  messages WHERE uid= '"+userInput+"'" ;
Cursor cursor = this.getReadableDatabase().rawQuery(query,null);
```

Exemplo de código não vulnerável:

```kotlin
String query = "SELECT * FROM  messages WHERE uid= ?" ;
Cursor cursor = this.getReadableDatabase().rawQuery(query,new String[] {userInput});
```

### SQL Injection With SQLite

Aplicação usa a base de dados SQLite e roda consultas SQL.  Entrada de dados de usuários não confiáveis podem causar injeção de SQL. Informação sensível também deve ser criptografada e escritas na base de dados.

> App uses SQLite Database and execute raw SQL query. Untrusted user input in raw SQL queries can cause SQL Injection. Also sensitive information should be encrypted and written to the database. For more information checkout the CWE-89 \([https://cwe.mitre.org/data/definitions/89.html](https://cwe.mitre.org/data/definitions/89.html)\) advisory and [OWASP: Top 10 2017-A1-Injection](https://owasp.org/www-project-top-ten/2017/A1_2017-Injection)..

Exemplo de código vulnerável:

```kotlin
import android.database.sqlite;

...
String query = "SELECT * FROM  messages WHERE uid= '"+userInput+"'" ;
Cursor cursor = conn.rawQuery(query,null);
```

Exemplo de código não vulnerável

```kotlin
import android.database.sqlite;

...
String query = "SELECT * FROM  messages WHERE uid= ?" ;
Cursor cursor = conn.rawQuery(query,new String[] {userInput});
```

### Cookie Storage

O armazenamento de cookie não é usado para salvar informações sensíveis. 

> No use cookie storage to save sensitive information
>
> NSHTTPCookieStorage

> sharedHTTPCookieStorage

### Using LoadHTMLString can result Inject

A entrada de dados do usuário não é sanitária em 'loadHTMLString' e pode resultar em uma injeção de JavaScript no contexto da sua aplicação, o que permite o acesso a dados privados.

> User input not sanitized in 'loadHTMLString' can result in an injection of JavaScript in the context of your application, allowing access to private data. For more information checkout the CWE-95 \([https://cwe.mitre.org/data/definitions/95.html](https://cwe.mitre.org/data/definitions/95.html)\) advisory.

### No Use SFAntiPiracy Jailbreak

Verificações encontradas são um tipo de SFAAntiPiracy Jailbreak. 

> Verifications found of type SFAntiPiracy Jailbreak.

### No Use SFAntiPiracy IsPirated

Verificações são um tipo de SFAntiPiracy isPirate.

> Verifications found of type SFAntiPiracy isPirated.

### Weak md5 hash using

MD5 é um hash fraco, o que pode gerar hashes repetidos.

> MD5 is a weak hash, which can generate repeated hashes. For more information checkout the CWE-327 \([https://cwe.mitre.org/data/definitions/327.html](https://cwe.mitre.org/data/definitions/327.html)\) advisory.

### Weak sha1 hash using

SHA1 é um hash fraco, que pode gerar hashes repetidos. 

> SHA1 is a weak hash, which can generate repeated hashes. For more information checkout the CWE-327 \([https://cwe.mitre.org/data/definitions/327.html](https://cwe.mitre.org/data/definitions/327.html)\) advisory.

### Weak ECB encryption algorithm using

A aplicação usa o modo ECB na criptografia do algoritmo. É conhecido que o modo ECB é fraco, como resultado do mesmo texto cifrado para blocos identicos de texto.

> The application uses ECB mode in the encryption algorithm. It is known that the ECB mode is weak, as it results in the same ciphertext for identical blocks of plain text. For more information checkout the CWE-327 \([https://cwe.mitre.org/data/definitions/327.html](https://cwe.mitre.org/data/definitions/327.html)\) advisory.

### The application has anti-debugger using ptrace\(\)

A aplicação possui um anti-debugger usando o ptrace\(\).

> The application has anti-debugger using ptrace\(\).

