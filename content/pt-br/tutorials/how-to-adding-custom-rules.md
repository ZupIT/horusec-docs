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
     "id": "id",
     "name": "Vulnerability Name",
     "description": "Description of the vulnerability with CWE link",
     "language": "Vulnerability language choice one into: C#, Dart, Java, Kotlin, YAML, Leaks, JavaScript, Nginx",
     "severity": "Vulnerability severity choice one into: CRITICAL, HIGH, MEDIUM, LOW, UNKNOWN, INFO",
     "confidence": "Vulnerability confidence choice one into: HIGH, MEDIUM, LOW",
     "type": "Vulnerability math type choice one into: Regular, OrMatch, AndMatch, NotMatch",
     "expressions": [
        "Regex to respective found vulnerability"
     ]
  },
  {
     "id": "837c504d-38b4-4ea6-987b-d91e92ac86a2",
     "name": "Cookie Without HttpOnly Flag",
     "description": "It is recommended to specify the HttpOnly flag to new cookie. For more information access: (https://security-code-scan.github.io/#SCS0009) or (https://cwe.mitre.org/data/definitions/1004.html).",
     "language": "C#",
     "severity": "MEDIUM",
     "confidence": "LOW",
     "type": "OrMatch",
     "expressions": [
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
| ID          | uuid   | ID para identificar a vulnerabilidade. O ID deve ser no template `HS-LANGUAGE-N` onde `LANGUAGE` é a linguagem informada no campo `Language`e `N` é um número aleatório  |
| Name        | String | Nome da vulnerabilidade. |
| Description | String | Descrição da vulnerabilidade de preferência com um link da CWE. |
| Language    | String | Mostra a linguagem do motor que será executada a análise da vulnerabilidade, pode ser entre: C#, Dart, Java, Kotlin, YAML, Leaks, JavaScript, Nginx. |
| Severity    | String | Mostra a severidade que essa vulnerabilidade representa, pode ser entre: CRITICAL, HIGH, MEDIUM, LOW, UNKNOWN, INFO.  |
| Confidence  | String | Mostra a confiabilidade que a expressão representa ao encontrar uma vulnerabilidade, pode ser entre: HIGH, MEDIUM, LOW. |
| Type        | String | Contém o tipo de Regex de acordo com os possíveis valores: Regular, OrMatch, AndMatch e NotMatch. |
| Tool        | String | Ferramenta para as regras serem executadas contendo os possíveis valores: HorusecCsharp, HorusecKotlin, HorusecKubernetes, HorusecLeaks e HorusecNodejs. |
| Expressions | Array  | Contém todos os RegExps que detectarão a vulnerabilidade.    |

### **Passo 3. Estabeleça os tipos de RegExps**

O motor do Horusec trabalha com três tipos de RegExps \(Expressões Regulares\), veja quais são e escolha uma delas: 

| **Tipo** | **Descrição** |
| :--- | :--- |
| OrMatch | São regras mais abrangentes que podem ter mais de um padrão para se manifestar, por isso o nome, já que a engine do Horusec irá realizar a operação lógica ou para cada uma das RegExps cadastradas. |
| Regular | É bem similar ao OrMatch, porém a ideia é que contenha múltiplas formas de se detectar o mesmo padrão. |
| AndMatch | São regras que precisam que o arquivo manifeste múltiplos padrões e com isso ser considerado como algo a ser reportado. Portanto, a engine realiza a operação lógica em cada uma das RegExps cadastradas para garantir que todas as condições foram encontradas. |
| NotMatch | São regras que precisam que o arquivo manifeste nenhum padrão e com isso ser considerado como algo a ser reportado. Portanto, a engine realiza a operação lógica em cada uma das RegExps cadastradas para garantir que todas as condições não foram encontradas. |

### **Passo 4. Aplique uma flag de regras personalizadas**

Aplique a **`flag -c`** para passar o caminho direto ao seu arquivo **.json** e depois disso você pode começar a utilizar as regras que criou. Veja o exemplo:

```bash
horusec start -c="{path to your horusec custom rules json file}"
```


```bash
horusec start -p="./" -c="./custom-rules.json"
```
