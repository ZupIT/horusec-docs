---
description: 'Nesta seção, você encontra orientações para usar o Horusec.'
---

# Usando o Horusec

## Configurações Iniciais 

Antes de começar a usar o Horusec, verifique se a instalação está correta. Para isso, digite o comando abaixo no terminal:

```text
$ horusec version
```

A resposta deverá ser algo como:

```text
Actual version installed of the horusec is: v1.4.0
```

  
****Para rodar o Horusec, localize seu projeto e ative o comando no terminal:

```text
$ horusec start
```

Feito isso, o sistema irá começar a fazer a análise de segurança do seu projeto.  
****  
Em caso de enviar a análise para o servidor, é necessário configurar um token de acesso de repositório dentro da interface gráfica do Horusec. 

Com o token adquirido basta você rodar no terminal o comando abaixo:

```text
$ horusec start -a=”ACCESS_TOKEN_HERE”
```

Após isso, você confere as vulnerabilidades encontradas de forma analítica na interface do Horusec.

## Como usar o Horusec? 

Veja abaixo o passo a passo para utilizar o Horusec: 

{% hint style="info" %}
Se você não quiser utilizar a UI \(user interface\) do Horusec, vá direto ao passo 2.1. 
{% endhint %}

### **Passo 1: Acesso à plataforma**

**Passo 1.1:** Crie sua conta na sua aplicação web _**horusec-manager**_**.** Depois disso você receberá um e-mail de confirmação, caso o essa função esteja habilitada:

![](.gitbook/assets/criacaodecontapt_br.gif)

**Passo 1.2:** Depois disso, faça o login na plataforma e crie a primeira empresa, clique em "Adicione uma organização" e salve; 

![](.gitbook/assets/1.2pt_br.gif)

**Passo 1.3:**  Abra o menu lateral e clique em **Repositórios;**

* Clique em Criar repositório, para criar um que será salvo na empresa selecionada; 
* Preencha os campos e clique em Salvar. 

![](.gitbook/assets/1.3pt_br.gif)

**Step** **1.4:** Agora você precisa criar o token de acesso, para fazer isso: 

* Vá ao repositório criado, na parte de ações, clique em **Tokens**; 
* Adicione o token; 
* Agora clique em “New token” e preencha os campos necessário. Após isso clique em salvar. 

![](.gitbook/assets/1.4pt_br.gif)

### **Passo 2: Análise do projeto**

Depois de [**instalar e configurar**](instalando-o-horusec.md) o Horusec na sua máquina, você precisa verificar se está rodando correntamente, digite "horusec version" no seu terminal, e essa tela deve aparecer: 

```text
~ ᐅ horusec version
Actual version installed of the horusec is: v1.4.0
```

Agora vamos verificar se o projeto contém vulnerabilidade para isso será usado um projeto de exemplo.

**Passo 2.1:** Defina o projeto e rode o seguinte comando: 

```text
horusec start -p=”./”
```

**Passo 2.2:** O Horusec vai iniciar a análise no local atual. É possível rodar essa análise em outro local, é só digitar o caminho absoluto de onde está seu projeto:

```text
~ ᐅ cd Projects/my-project
~/Projects/my-project (branch-with-vulnerability) ᐅ horusec start -p=”./”
```

{% hint style="warning" %}
Neste exemplo, não citamos o token de acesso criado na interface do Horusec, então caso você deseja verificar as vulnerabilidades que o horusec encontrou de forma análitica e através da interface, é necessário rodar o seguinte comando:

horusec start -p=”./” -a=”SEU\_TOKEN\_DE\_AUTORIZAÇÃO” -u=”HOST\_HORUSEC\_API”
{% endhint %}

No exemplo de comando acima, percebe-se que a flag -a foi adicionado o token de acesso que geramos na interface gráfica. E na flag -u foi inserido o link de onde está hospedada nossa API do Horusec para envio de análises.

Caso você tenha alguma dúvida sobre como funciona cada flag para este comando, digite no terminal **horusec start --help**, que o CLI \(command line interface\) do Horusec irá mostrar uma ajuda.

### **Passo 3: Verificar a análise**

Agora você precisa verificar a análise que o Horusec está realizando no projeto:  
Veja o exemplo com o output:

```text
~/Projects/my-project (branch-with-vulnerability ✔) ᐅ horusec start -p="./"
WARN[0000] {HORUSEC_CLI} When starting the analysis WE SKIP A TOTAL OF 5 FILES that are not considered to be analyzed. To see more details use flag --log-level=debug 

WARN[0000] {HORUSEC_CLI} PLEASE DON'T REMOVE ".horusec" FOLDER BEFORE THE ANALYSIS FINISH! Don’t worry, we’ll remove it after the analysis ends automatically! Project sent to folder in location: [/home/wilian/go/src/github.com/ZupIT/examples/horus-example-vulnerabilities/.horusec/08eb958a-fc0b-4c9c-8600-9a82c1e3cc8e] 

INFO[0000] Hold on! Horusec still analysis your code. Timeout in: 600s 

==================================================================================

HORUSEC ENDED THE ANALYSIS COM STATUS OF "success" AND WITH THE FOLLOWING RESULTS:

==================================================================================

Analysis StartedAt: 2020-09-30 15:53:07
Analysis FinishedAt: 2020-09-30 15:53:22

==================================================================================

Language: Leaks
Severity: HIGH
Line: 1
Column: 31
SecurityTool: HorusecLeaks
Confidence: MEDIUM
File: deployments/certs/server-key.pem
Code: -----BEGIN RSA PRIVATE KEY-----
Details: Asymmetric Private Key
Found SSH and/or x.509 Cerficates among the files of your project, make sure you want this kind of information inside your Git repo, since it can be missused by someone with access to any kind of copy.  For more information checkout the CWE-312 (https://cwe.mitre.org/data/definitions/312.html) advisory.
ReferenceHash: ccf56588e43693fd5a9198f72810db6b6379512f


==================================================================================

Language: Leaks
Severity: HIGH
Line: 1
Column: 27
SecurityTool: HorusecLeaks
Confidence: MEDIUM
File: deployments/certs/ca.pem
Code: -----BEGIN CERTIFICATE-----
Details: Asymmetric Private Key
Found SSH and/or x.509 Cerficates among the files of your project, make sure you want this kind of information inside your Git repo, since it can be missused by someone with access to any kind of copy.  For more information checkout the CWE-312 (https://cwe.mitre.org/data/definitions/312.html) advisory.
ReferenceHash: 5203b29de1e4ca506b3a0c633852fd3bf423ceff


==================================================================================

Language: Leaks
Severity: HIGH
Line: 1
Column: 27
SecurityTool: HorusecLeaks
Confidence: MEDIUM
File: deployments/certs/client-cert.pem
Code: -----BEGIN CERTIFICATE-----
Details: Asymmetric Private Key
Found SSH and/or x.509 Cerficates among the files of your project, make sure you want this kind of information inside your Git repo, since it can be missused by someone with access to any kind of copy.  For more information checkout the CWE-312 (https://cwe.mitre.org/data/definitions/312.html) advisory.
ReferenceHash: b8d785d43cbf1be2bcbf3ae78679db1392854c3c


==================================================================================

Language: Leaks
Severity: HIGH
Line: 1
Column: 31
SecurityTool: HorusecLeaks
Confidence: MEDIUM
File: deployments/certs/client-key.pem
Code: -----BEGIN RSA PRIVATE KEY-----
Details: Asymmetric Private Key
Found SSH and/or x.509 Cerficates among the files of your project, make sure you want this kind of information inside your Git repo, since it can be missused by someone with access to any kind of copy.  For more information checkout the CWE-312 (https://cwe.mitre.org/data/definitions/312.html) advisory.
ReferenceHash: 66ba735b42e38566b9b54743e88298fbbb567245


==================================================================================

Language: Leaks
Severity: HIGH
Line: 1
Column: 27
SecurityTool: HorusecLeaks
Confidence: MEDIUM
File: deployments/certs/server-cert.pem
Code: -----BEGIN CERTIFICATE-----
Details: Asymmetric Private Key
Found SSH and/or x.509 Cerficates among the files of your project, make sure you want this kind of information inside your Git repo, since it can be missused by someone with access to any kind of copy.  For more information checkout the CWE-312 (https://cwe.mitre.org/data/definitions/312.html) advisory.
ReferenceHash: ed67624ad4c28b08df7d030f6224ea4e44939b92


==================================================================================

Language: Leaks
Severity: HIGH
Line: 1
Column: 31
SecurityTool: HorusecLeaks
Confidence: MEDIUM
File: deployments/certs/ca-key.pem
Code: -----BEGIN RSA PRIVATE KEY-----
Details: Asymmetric Private Key
Found SSH and/or x.509 Cerficates among the files of your project, make sure you want this kind of information inside your Git repo, since it can be missused by someone with access to any kind of copy.  For more information checkout the CWE-312 (https://cwe.mitre.org/data/definitions/312.html) advisory.
ReferenceHash: 5d515e6e0a3e1cb696c4d9dda0a16c2da6ec95b8


==================================================================================

Language: Go
Severity: MEDIUM
Line: 4
Column: 2
SecurityTool: GoSec
Confidence: HIGH
File: api/util/util.go
Code: 3: import (
4: 	"crypto/md5"
5: 	"fmt"

Details: Blocklisted import crypto/md5: weak cryptographic primitive
ReferenceHash: 2ac373b4b0feeacb37efb7c7002dfbcf943f2a00

==================================================================================

Total of Vulnerabilities HIGH is: 6
Total of Vulnerabilities MEDIUM is: 1
A total of 7 vulnerabilities were found in this analysis

==================================================================================

WARN[0015] {HORUSEC_CLI} No authorization token was found, your code it is not going to be sent to horusec. Please enter a token with the -a flag to configure and save your analysis

WARN[0015] [HORUSEC] 7 VULNERABILITIES WERE FOUND IN YOUR CODE SENT TO HORUSEC, CHECK AND TRY AGAIN
```

**Passo 3.1:**  O que foi encontrado no output? 

* 6 Vulnerabilidade com a severidade **do tipo High;**
* 1 Vulnerabilidades com a severidade do **tipo Medium.**

**Total:** 7 Vulnerabilidades a serem corrigidas no projeto. 

### Análise de forma analítica 

Se você enviou a flag com o token de autorização, sua análise agora pode ser vista de forma analítica. Para isso: 

1. Faça o login na plataforma;
2. Vá até a área de '**Dashboard**';
3. Clique em pesquisar para você ter detalhes sobre o cenário. Veja a imagem abaixo: 

![](https://lh4.googleusercontent.com/I8eT3Ou3L8FgSRHR3mnSXvnDYuHPKwsYiiTVvL2lyf9uiGGWnOKSkTtjh89224KQUkkAvtA8ZEW_X8o8qBuS0RMmnWnz9Vfmw5voE3U6XRginuBhtjxhExYQzpCnRers92PpFFtO)

## **Próximos passos**

Nesta seção, você viu como usar o Horusec no seu projeto. Para continuar lendo sobre o produto: 

👉 Vá para seção [**adicionando o Horusec em sua pipeline**](adicionando-o-horusec-em-sua-pipeline.md) ****e ponha em prática a ferramenta para ****sua esteira de desenvolvimento. 

👉 Vá para página de [**Manager**](referencia/manager/) para descobrir as funcionalidades da interface gráfica do Horusec. 

