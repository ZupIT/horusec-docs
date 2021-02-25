---
title: Crie uma imagem Docker
weight: 14
description: 'Passo 1: Crie uma Docker image'
---

---

### **1. Clone o projeto**
Clone o projeto do horusec em sua máquina local para realizar as modificações.
```bash
git clone https://github.com/ZupIT/horusec.git
```

### **2. Crie uma imagem docker**

O Horusec usa o docker para executar as ferramentas de análise, o que evita problemas de configuração e de ambiente. Todas as ferramentas usadas tem suas respectivas imagens docker.

Essa imagem deve ter a ferramenta desejada instalada. O resultado desse container deve ser o mais limpo possível. 

{{%/* alert color="warning" %}}

É esperado que o arquivo Dockerfile esteja nesse diretório `deployments/dockerfiles/[NEW_IMAGE]`

{{% /alert */%}}

Veja abaixo um exemplo de **Dockerfile**: 

```yaml
FROM golang:1.14-alpine

RUN apk update && apk upgrade \
   && apk add jq curl
   
RUN set -o pipefail && curl https://api.github.com/repos/liamg/tfsec/releases/latest | jq -r ".assets[] | select(.name | contains(\"tfsec-linux-64\")) | .browser_download_url" | xargs wget

RUN mv tfsec-linux-64 /bin/tfsec
 
RUN chmod +x /bin/tfsec
 
CMD ["/bin/sh"]
```

{{%/* alert color="info" %}}

A imagem deve conter apenas o necessário para que não ficar muito grande. 

{{% /alert */%}}

Ainda no mesmo diretório adicione o arquivo de versionamento desta imagem com o nome **.semver.yaml**. Veja abaixo um exemplo: 

```yaml
alpha: 0
beta: 0
rc: 0
release: v0.0.1
```
