---
description: 'Nesta seção, você encontra informações sobre a gestão de webhooks.'
---

# Gestão de webhook

Os webhooks são disparados quando recebem uma nova análise na base de dados do Horusec. Após inserir essa análise, o próprio Horusec verifica se tem algum webhook configurado para o repositório selecionado e envia a análise via HTTP para o destino configurado.

Você deve escolher na configuração do webhook:

* URL;
* Método \(por enquanto, é fixo do tipo POST\); 
* Headers \(no máximo 5\);
* Descrição \(opcional\);
* Repositório.

Veja abaixo o exemplo de como é a configuração: 

![](../../.gitbook/assets/webhooken_us%20%281%29.gif)

Depois de configurar o webhook, sua API receberá um JSON no seguinte formato:

```go
{
  "analysisVulnerabilities": [
    {
      "analysisID": "string",
      "createdAt": "string",
      "vulnerabilities": {
        "code": "string",
        "column": "string",
        "commitAuthor": "string",
        "commitDate": "string",
        "commitEmail": "string",
        "commitHash": "string",
        "commitMessage": "string",
        "confidence": "string",
        "details": "string",
        "file": "string",
        "language": "string",
        "line": "string",
        "securityTool": "string",
        "severity": "string",
        "type": "string",
        "vulnHash": "string",
        "vulnerabilityID": "string"
      },
      "vulnerabilityID": "string"
    }
  ],
  "companyID": "string",
  "companyName": "string",
  "createdAt": "string",
  "errors": "string",
  "finishedAt": "string",
  "id": "string",
  "repositoryID": "string",
  "repositoryName": "string",
  "status": "string"
}

```

