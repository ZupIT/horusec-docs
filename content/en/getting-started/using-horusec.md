---
title: Using Horusec
weight: 5
description: In this section, you will find some guidelines on how to use Horusec.
---

## **Initial set up**

Before you use Horusec, make sure the installation is correct. 

Check the commands below: 

Type the command in your terminal: 

```text
$ horusec version
```

The answer must be: 

```text
Actual version installed of the horusec is: v1.x.x
```

To run Horusec, find the project and activate the command in the terminal: 

```text
$ horusec start
```

After that, the system will do the security analysis of your project. 

If you want to send the analysis to a server, it is necessary to configure an access token of the repository inside  the Horusec interface. 

After you get the token, just run the command below: 

```text
$ horusec start -a=”ACCESS_TOKEN_HERE”
```

Now you can check the vulnerabilities found in an analytical way in Horusec interface. 

## How to use Horusec? 

See below the steps to use Horusec: 

{{% alert color="info" %}}
If you don't use Horusec's UI \(user interface\), go straight to step 2.
{{% /alert %}}


### **Step 1: Access to the platform**

**Step 1.1:** Create your account on your web application _**horusec-manager**_**.**  After that you will receive a confirmation on your email, if this option is enabled: 

![](https://horusec.io/public/docs/en/getting-started/using-horusec/0-login-horusec.gif)

{{% alert color="info" %}}
Default Development account:
If you want to use complete feature of horusec, you can enter using the default user:

``` 
email: dev@example.com
password: Devpass0*```
{{% /alert %}} 

**Step 1.2:** After that, login and create an organization, click on "Add an organization" and fill the name of your company, then save:

![](https://horusec.io/public/docs/en/getting-started/using-horusec/1-create-organization.gif)

**Step 1.3:**  After that, open the side menu and click on **Repositories;**

* Click on **Create repository, to create one that it** will be saved in the organization selected. 
* Fill the fields and then save. 

![](https://horusec.io/public/docs/en/getting-started/using-horusec/2-create-repository.gif)

  
**Step** **1.4:** Now you have to create an access token, to do so

* Go to the repository you have just created,  on the action section, click on **Tokens;**
* Add token; 
* Now, click on 'New token' and fill the fields. After that save it. 

{{% alert color="info" %}}
When this token is successfully saved, it will show an access token to the repository, keep it safe and don't share it. 
{{% /alert %}}

![](https://horusec.io/public/docs/en/getting-started/using-horusec/3-add-token.gif)

### **Step 2: Project analysis** 

After you have [**installed and configured**](installing-horusec.md) Horusec on your computer, you need to check if it is running correctly,  just type ''horusec version'' on your terminal, you should see this: 

```text
~ ᐅ horusec version
Actual version installed of the horusec is: v1.x.x
```

Now, you have to check if the project has vulnerabilities, for that we will use a random project as an example. 

**Step 2.1:** Define the project and run the following command: 

```text
horusec start -p=”./”
```

**Step 2.2:** Horusec will start the local analysis. It is possible to run this analysis in other place, just type the path where your project is: 

```text
~ ᐅ cd Projects/my-project
~/Projects/my-project (branch-with-vulnerability) ᐅ horusec start -p=”./”
```

{{% alert color="warning" %}}
On this example, the access token was not mentioned, if you want to check horusec's vunelrabilities found in the analytical way, it is necessary to run the command below: 

**horusec start -p=”./” -a=”SEU\_TOKEN\_DE\_AUTORIZAÇÃO” -u=”[**https://horusec.io/horusec\_api**](https://horusec.zup.com.br/horus_api)”**
{{% /alert %}}


On the step above, you can see the **-a** flag was added to the access token that was generated in the interface. And the **-u** flag was inserted the link where Horusec's API is hosted to send analysis. 

{{% alert color="info" %}}
If you have any doubt about how each flag for this command works, type in your terminal: **horusec start --help.**
{{% /alert %}}


### Step 3: Verify the analysis 

Now you have to verify the analysis Horusec is making on the project. The output of the example is: 

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

**Step 3.1:** What was found in the output? 

On the output above, the project contains: 

* 6 vulnerabilities with **High type** severity;
* 1 vulnerability with **Medium type** severity;

**The total amount is**: 7 vulnerabilities to be corrected on the project. 

### **Analytical analysis**

If you have sent a flag with the authorization token, your analysis can be seen as analytical.  For that, you just have to: 

1. Login in the platfortm;
2. Go to '**Dashboard'** area;
3. Click on **search** and you will have the details about the scenario. See image below:  

![](https://horusec.io/public/docs/en/getting-started/using-horusec/4-dashboard.gif)

## **Next Steps** 

On this section, you saw how to use Horusec on your project. To keep reading about the product: 

👉 Go to [**adding Horusec in the pipeline**](/docs/getting-started/adding-horusec-in-the-pipeline/) and get into practice of how to add the tool on your development pipeline.

👉 Go to [**Manager**](/docs/references/manager/) page to find out all the functionalities you have on the Horusec graphic interface.