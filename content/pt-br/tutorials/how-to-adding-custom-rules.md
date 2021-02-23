---
title: Como adicionar regras personalizadas
weight: 2
description: Você vai encontrar aqui orientações de como adicionar regras personalizadas ao Horusec.
---

---

Você pode utilizar o Horusec para adicionar dinamicamente regras personalizadas, que serão executadas nos nossos motores.

Veja como fazer esta configuração, seguindo os passos: 

## **1. Crie um arquivo JSON de regras personalizadas**

Para executar regras personalizadas no Horusec, você deverá criar um arquivo **.json** contendo o seguinte código:

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
     "Description": "It is recommended to specify the HttpOnly flag to new cookie. For more information access: (https://security-code-scan.github.io/#SCS0009) or (https://cwe.mitre.org/data/definitions/1004.html).",
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

## **2. Defina os atributos do JSON** 

Na tabela abaixo você pode conhecer mais sobre cada atributo:

| **Campo** | Tipo | **Descrição** |
| :--- | :--- | :--- |
| ID |  | UUID randômico usado para identificar a vulnerabilidade. Suas regras não devem duplicar esse ID.  |
| Name | String | Nome da vulnerabilidade. |
| Description | String | Descrição da vulnerabilidade. |
| Severity | String | Mostra a severidade da vulnerabilidade de acordo com os possíveis valores: INFO, AUDIT, LOW, MEDIUM e HIGH.  |
| Confidence | String | Mostra a confiabilidade do relatório de vulnerabilidade de acordo com os possíveis valores: LOW, MEDIUM e HIGH.  |
| Type | String | Contém o tipo de Regex de acordo com os possíveis valores: Regular, OrMatch e AndMatch. |
| Tool | String | Ferramenta onde as regras serão executadas contendo esses possíveis valores: HorusecCsharp, HorusecKotlin, HorusecKubernetes, HorusecLeaks e HorusecNodejs. |
| Expressions | Array | Contém todos os RegExps que detectarão a vulnerabilidade.    |

## **3. Estabeleça os tipos de RegExps**

Nosso motor trabalha com três tipos de RegExps \(Expressões Regulares\). 

| **Tipo** | **Descrição** |
| :--- | :--- |
| OrMatch | São regras mais abrangentes, que podem ter mais de um padrão para se manifestar, por isso o nome, já que nossa engine vai realizar a operação lógica ou para cada uma das RegExps cadastradas. |
| Regular | É bem similar ao OrMatch, porém a ideia é que contenha múltiplas formas de se detectar o mesmo padrão. |
| AndMatch | São regras que precisam que o arquivo manifeste múltiplos padrões para ser considerado algo a ser reportado, portanto, a engine realiza a operação lógica em cada uma das RegExps cadastradas para garantir que todas as condições foram encontradas. |

## **4. Aplique uma flag de regras personalizadas**

Para começar a usar as regras que você criou, basta aplicar a **flag -c** para passar o caminho direto ao seu arquivo **.json**. 

```bash
horusec start -c="{path to your horusec custom rules json file}"
```

Exemplo:
```bash
horusec start -p="./" -c="./custom-rules.json"
```
