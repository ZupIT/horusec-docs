---
title: Horusec-Leaks
weight: 54
description: >-
  Here, you will find informations about vulnerabilities that Horusec can find
  on Leaks projects.
---

---

## **What is it?** 

[**Horusec-Leaks**](/docs/cli/analysis-tools/open-source-horusec-engine/horusec-l
eaks/) is a SAST tool created by Horusec team in order to search for vulnerabilities in projects, searching for coded secrets such as passwords, API keys, tokens and others possible vulnerabilities.

## **Examples of vulnerabilities**

You will find below all the vulnerabilities examples that Horusec-Leaks identify: 

### AWS Manager ID

> When use AWS Manager ID is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-798 \([https://cwe.mitre.org/data/definitions/798.html](https://cwe.mitre.org/data/definitions/798.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    ACCESS_KEY: 'AKIAJSIE27KKMHXXXXXX'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    ACCESS_KEY: ${SECRET_KEY}
```

### AWS Secret Key

> When use AWS Secret Key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-798 \([https://cwe.mitre.org/data/definitions/798.html](https://cwe.mitre.org/data/definitions/798.html)\) /Applications/FakeCarrier.appadvisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      AWS_SECRET_KEY: 'doc5eRXFpsWllGC5yKJV/XXXXXXX+XXXXXXXXXXX'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    SECRET_KEY: ${SECRET_KEY}
```

### AWS MWS key

> When use AWS MWS key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-798 \([https://cwe.mitre.org/data/definitions/798.html](https://cwe.mitre.org/data/definitions/798.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      AWS_WMS_KEY: 'amzn.mws.986478f0-9775-XXXX-XXXX-XXXXXXXXXXXX'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      WMS_KEY: ${SECRET_KEY}
```

### Facebook Secret Key

> When use Facebook Secret Key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      FB_SECRET_KEY: 'cb6f53505911332d30867fXXXXXXXXXX'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    FB_SECRET_KEY: ${SECRET_KEY}
```

### Facebook Client ID

> When use Facebook Client ID is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      FB_CLIENT_ID: '148690000000000'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    FB_CLIENT_ID: ${SECRET_KEY}
```

### Twitter Secret Key

> When use Twitter Secret Key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      TWITTER_SECRET_KEY: 'ej64cqk9k8px9ae3exxxxxxxxxxxxxxxxxxxx'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    TWITTER_SECRET_KEY: ${SECRET_KEY}
```

### Twitter Client ID

> When use Twitter Client ID is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      TWITTER_CLIENT_ID: 'ej64cqk9k8px9ae3exxxxxxxxxxxxxxxxxxxx'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    TWITTER_CLIENT_ID: ${SECRET_KEY}
```

### Github Tokens

> A GitHub access token was found. This pose a critical threat against your organization since it can give access not only to the platform itself and all the members of your \(perhaps private\) organization to feed more accurate spear phishing attacks but also to actual source code from your applications. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      GITHUB_SECRET_KEY: 'edzvPbU3SYUc7pFc9le20lzIRExxxxxxxxxx'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    GITHUB_SECRET_KEY: ${SECRET_KEY}
```

### LinkedIn Client ID

> When use LinkedIn Client ID is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      LINKEDIN_CLIENT_ID: 'g309xtxxxxxx'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    LINKEDIN_CLIENT_ID: ${SECRET_KEY}
```

### LinkedIn Secret Key

> When use LinkedIn Secret Key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      LINKEDIN_SECRET_KEY: '0d16kcnjxxxxxxxx'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    LINKEDIN_SECRET_KEY: ${SECRET_KEY}
```

### Slack Tokens

> A hardcoded credential for your company's Slack can pose a huge threat to the safety and image of your company, since, in the wrong hands, this could lead to data leaking, a high chance of a succesful spear phishing attacks and even access to logs and other development related conversations that could leverage a more critical attack. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      SLACK_WEBHOOK: 'https://hooks.slack.com/services/xxxxxxxxx/xxxxxxxxx/xxxxxxxxxxxxxxxxxxxxxxxx'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    SLACK_WEBHOOK: ${SECRET_KEY}
```

### Asymmetric Private Key

> Found SSH and/or x.509 Cerficates among the files of your project, make sure you want this kind of information inside your Git repo, since it can be missused by someone with access to any kind of copy. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      SSH_PRIVATE_KEY: '-----BEGIN PRIVATE KEY----- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -----END PRIVATE KEY-----'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    SSH_PRIVATE_KEY: ${SECRET_KEY}
```
### Google API key

> When use Google API key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      GCP_API_KEY: 'AIzaMPZHYiu1RdzE1xxxxxxxxxxxxxxxxxxxxxx'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    GCP_API_KEY: ${SECRET_KEY}
```

### Google \(GCP\) Service Account

> When use Google \(GCP\) Service Account is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      GCP_SERVICE_ACCOUNT: '00000000-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    GCP_SERVICE_ACCOUNT: ${SECRET_KEY}
```

### Heroku API key

> Hardcoded credentials pose a huge threat to your cloud provider account since you can lose control over who can access some resources, which can lead not only to data access violation but also to improper usage of resources leading to a financial loss. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      HEROKU_API_KEY: 'xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxx'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    HEROKU_API_KEY: ${SECRET_KEY}
```

### MailChimp API key

> Mail and/or SMS providers are a huge entrypoint for more sophisticated attacks or even attacks focused on damaging a brand's reputation. Leaving them in your source code will lead your team to lost track of who can access and personificate your company or application. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      MAILCHIMP_API_KEY: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-us00'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    MAILCHIMP_API_KEY: ${SECRET_KEY}
```

### Mailgun API key

> Mail and/or SMS providers are a huge entrypoint for more sophisticated attacks or even attacks focused on damaging a brand's reputation. Leaving them in your source code will lead your team to lost track of who can access and personificate your company or application. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      MAILGUN_API_KEY: 'key-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    MAILGUN_API_KEY: ${SECRET_KEY}
```

### PayPal Braintree access token

> Payment providers are the barebones of your companies monetization so it is a absolutely desaster if any of this tokens fall in wrong hands since they can provide access to crucial information about your company, and in worst case cenarios even lead to big finacial loss. It's important to keep this kind of info in some form of secret manager, e.g Hashicorp's Vault. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      PAY_PAL_ACCESS_TOKEN: 'access_token$production$xxxxxxxxxxxxxxxx$00000000000000000000000000000000'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    PAY_PAL_ACCESS_TOKEN: ${SECRET_KEY}
```

### Picatic API key

> When use Picatic API key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      PICATIC_API_KEY: 'sk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    PICATIC_API_KEY: ${SECRET_KEY}
```

### SendGrid API Key

> When use SendGrid API Key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      SEND_GRID_API_KEY: 'SG.xxxxxxxxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxx'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    SEND_GRID_API_KEY: ${SECRET_KEY}
```

### Stripe API key

> When use Stripe API key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      STRIPE_API_KEY: 'rk_live_xxxxxxxxxxxxxxxxxxxxxxxx'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    STRIPE_API_KEY: ${SECRET_KEY}
```

### Square access token

> When use Square access token is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      SQUARE_ACCESS_TOKEN: 'sq0atp-xxxxxxxxxxxxxxxxxxxxxx'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    SQUARE_ACCESS_TOKEN: ${SECRET_KEY}
```

### Square OAuth secret

> When use Square OAuth secret is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      SQUARE_SECRET: 'sq0csp-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx_xxxxx'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    SQUARE_SECRET: ${SECRET_KEY}
```


### Twilio API key

> When use Twilio API key is recommended use vault or environment variable encrypted for the best security. For more information checkout the CWE-312 \([https://cwe.mitre.org/data/definitions/312.html](https://cwe.mitre.org/data/definitions/312.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      TWILIO_API_KEY: 'SKaaaaaaaaaaaaaaaaaaaaaaaaaa000000'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    TWILIO_API_KEY: ${SECRET_KEY}
```

### Potential Hard-coded credential

> The software contains hard-coded credentials, such as a password or cryptographic key, which it uses for its own inbound authentication, outbound communication to external components, or encryption of internal data. For more information checkout the CWE-798 \([https://cwe.mitre.org/data/definitions/798.html](https://cwe.mitre.org/data/definitions/798.html)\) advisory.

Wrong

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
      POSTGRES_DBPASSWD: 'Ch@ng3m3'
```

OK

```yaml
version: '3'
services:
  backend:
    image: image/my-backend:latest
    environment:
	    POSTGRES_DBPASSWD: ${SECRET_KEY}
```

### Hard-coded password

> The software contains hard-coded credentials, such as a password or cryptographic key, which it uses for its own inbound authentication, outbound communication to external components, or encryption of internal data. For more information checkout the CWE-798 \([https://cwe.mitre.org/data/definitions/798.html](https://cwe.mitre.org/data/definitions/798.html)\) advisory.

Wrong

```go
package main

import (
 		"fmt"
 		"gorm.io/gorm"
 		"gorm.io/driver/postgres"
)

func main() {
		DB_USER="gorm"
		DB_PASSWORD="gorm"
		DB_NAME="gorm"
		DB_PORT="9920"
  	dsn := fmt.Sprintf("user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Shanghai", DB_USER, DB_PASSWORD, DB_NAME, DB_PORT)
		db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
		if err != nil {
				panic(err)
		}
		print(db)
}
```

OK

```go
package main

import (
		"os"
 		"fmt"
 		"gorm.io/gorm"
 		"gorm.io/driver/postgres"
)

func main() {
		DB_USER="gorm"
		DB_PASSWORD=os.Getenv("DB_PASSWORD")
		DB_NAME="gorm"
		DB_PORT="9920"
  	dsn := fmt.Sprintf("user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Shanghai", DB_USER, DB_PASSWORD, DB_NAME, DB_PORT)
		db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
		if err != nil {
				panic(err)
		}
		print(db)
}
```

### Password found in a hardcoded URL

> A password was found in a hardcoded URL, this can lead to not only the leak of this password but also a failure point to some more sophisticated CSRF and SSRF attacks. Check CWE-352 \([https://cwe.mitre.org/data/definitions/352.html](https://cwe.mitre.org/data/definitions/352.html)\) and CWE-918 \([https://cwe.mitre.org/data/definitions/918.html](https://cwe.mitre.org/data/definitions/918.html)\) for more details.

Wrong

```go
package main

import (
	"gorm.io/gorm"
	"gorm.io/driver/postgres"
)

func main() {
	dsn := "postgresql://gorm:gorm@127.0.0.1:5432/gorm?sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	print(db)
}
```

OK

```go
package main

import (
  "os"
  "gorm.io/gorm"
  "gorm.io/driver/postgres"
)

func main() {
	dsn := os.Getenv("DB_QUERY_STRING")
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	print(db)
}
```

### Wordpress configuration file disclosure

> Wordpress configuration file exposed, this can lead to the leak of admin passowrds, database credentials and a lot of sensitive data about the system. Check CWE-200 \([https://cwe.mitre.org/data/definitions/200.html](https://cwe.mitre.org/data/definitions/200.html)\) for more details.

Wrong

```php
<?php
define( 'AUTH_KEY', 'put your unique phrase here' );
```

OK

```php
<?php
define( 'AUTH_KEY', getenv("AUTH_KEY") );
```
