---
title: Como adicionar regras personalizadas na Horusec-CLI?
weight: 2
description: Nesta seção, você encontra o tutorial para adicionar regras personalizadas ao Horusec-CLI.
---

---

Você pode utilizar o Horusec para adicionar regras personalizadas dinamicamente, para serem executadas nos motores.

## **Como fazer?** 

Siga os passos abaixo para configurar as regras personalizadas e adicioná-las ao Horusec: 


### **Passo 1. Crie um arquivo JSON de regras personalizadas**

Crie um arquivo **.json** contendo o seguinte código:

```json
[
  {
     "ID": "0d6c505a-4986-4771-91db-ec4f4ebface7",
     "Name": "Vulnerability name",
     "Description": "Description of the vulnerability",
     "Severity": "Vulnerability severity",
     "Confidence": "Confidence of the vulnerability",
     "Type": "Regex type",
     "Tool": "HorusecCsharp",
     "Expressions": [
        "Regex to respective vulnerability"
     ]
  },
  {
     "ID": "837c504d-38b4-4ea6-987b-d91e92ac86a2",
     "Name": "Cookie Without HttpOnly Flag",
     "Description": "It is recommended to specify the HttpOnly flag to new cookie. For more information access: (https://security-code-scan.github.io#SCS0009) or (https://cwe.mitre.org/data/definitions/1004.html).",
     "Severity": "LOW",
     "Confidence": "LOW",
     "Type": "OrMatch",
     "Tool": "HorusecCsharp",
     "Expressions": [
        "httpOnlyCookies\\s*=\\s*['|\"]false['|\"]",
        "(new\\sHttpCookie\\(.*\\))(.*|\n)*(\\.HttpOnly\\s*=\\s*false)",
        "(new\\sHttpCookie)(([^H]|H[^t]|Ht[^t]|Htt[^p]|Http[^O]|HttpO[^n]|HttpOn[^l]|HttpOnl[^y])*)(})"
     ]
  }
]
```

### **Passo 2. Defina os atributos do JSON** 

Veja abaixo a tabela com os atributos que você pode escolher:

| **Campo** | **Tipo** | **Descrição** |
| :--- | :--- | :--- |
| ID |  | UUID randômico usado para identificar a vulnerabilidade. Suas regras não devem duplicar esse ID.  |
| Name | String | Nome da vulnerabilidade. |
| Description | String | Descrição da vulnerabilidade. |
| Severity | String | Mostra a severidade da vulnerabilidade de acordo com os possíveis valores: INFO, AUDIT, LOW, MEDIUM e HIGH.  |
| Confidence | String | Mostra a confiabilidade do relatório de vulnerabilidade de acordo com os possíveis valores: LOW, MEDIUM e HIGH.  |
| Type | String | Contém o tipo de Regex de acordo com os possíveis valores: Regular, OrMatch e AndMatch. |
| Tool | String | Ferramenta para as regras serem executadas contendo os possíveis valores: HorusecCsharp, HorusecKotlin, HorusecKubernetes, HorusecLeaks e HorusecNodejs. |
| Expressions | Array | Contém todos os RegExps que detectarão a vulnerabilidade.    |

### **Passo 3. Estabeleça os tipos de RegExps**

O motor do Horusec trabalha com três tipos de RegExps \(Expressões Regulares\), veja quais são e escolha uma delas: 

| **Tipo** | **Descrição** |
| :--- | :--- |
| OrMatch | São regras mais abrangentes que podem ter mais de um padrão para se manifestar, por isso o nome, já que a engine do Horusec irá realizar a operação lógica ou para cada uma das RegExps cadastradas. |
| Regular | É bem similar ao OrMatch, porém a ideia é que contenha múltiplas formas de se detectar o mesmo padrão. |
| AndMatch | São regras que precisam que o arquivo manifeste múltiplos padrões e com isso ser considerado como algo a ser reportado. Portanto, a engine realiza a operação lógica em cada uma das RegExps cadastradas para garantir que todas as condições foram encontradas. |

### **Passo 4. Aplique uma flag de regras personalizadas**

Aplique a **`flag -c`** para passar o caminho direto ao seu arquivo **.json** e depois disso você pode começar a utilizar as regras que criou. Veja o exemplo:

```bash
horusec start -c="{path to your horusec custom rules json file}"
```


```bash
horusec start -p="./" -c="./custom-rules.json"
```
