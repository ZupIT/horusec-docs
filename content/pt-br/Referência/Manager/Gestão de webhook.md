---
title: Gestão de webhook
weight: 40
description: Nesta seção, você vai encontrar mais informações sobre a gestão de webhooks.
---

---

Este recurso permite que você gerencie os webhooks que são disparados ao receberem uma nova análise na base de dados do Horusec. 

Depois que essa análise é inserida, o próprio Horusec verifica se tem algum webhook configurado para o repositório selecionado e envia a análise via HTTP para o destino configurado.

Você deve escolher na configuração do webhook:

* URL;
* Método \(por enquanto, é fixo do tipo POST\); 
* Headers \(no máximo 5\);
* Descrição \(opcional\);
* Repositório.

Veja abaixo o exemplo de como é a configuração: 

![](/docs/webhooken_us%20%281%29.gif)

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
