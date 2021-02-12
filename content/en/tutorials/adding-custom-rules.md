---
title: Adding custom rules
weight: 31
description: You will find here how to add custom rules to Horusec.
---

---

With Horusec you are able to dynamically add rules that will be executed on our engines. 

## **1. Create a customized rules JSON file** 

In order to run custom Json rules in Horusec you'll have to create a **.json** with the default code below:


 ```horusec-custom-rules.json
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
         "httpOnlyCookies\s*=\s*['|"]false['|"]",
         "(new\sHttpCookie\(.*\))(.*|\n)*(\.HttpOnly\s*=\s*false)",
         "(new\sHttpCookie)(([^H]|H[^t]|Ht[^t]|Htt[^p]|Http[^O]|HttpO[^n]|HttpOn[^l]|HttpOnl[^y])*)(})"
      ]
   }
]
```

## **2. Define JSON's attributes**

Check the following table to get to know more about each JSON's field:  


| **Field** | Type | **Description** |
| :--- | :--- | :--- |
| ID |  | Random UUID used to identify the vulnerability in your code. Your rules should not duplicate this ID. |
| Name |  | The name of the vulnerability. |
| Description | String | The description of the vulnerability. |
| Severity | String | The severity of the vulnerability with its possible values: \(INFO, AUDIT, LOW, MEDIUM, HIGH\). |
| Confidence | String | The confidence of the vulnerability report with its possible values: \(LOW, MEDIUM, HIGH\). |
| Type | String | Regex type containing these possible values: Regular, OrMatch, AndMatch. |
| Tool | String | Regex type containing these possible values: HorusecCsharp, HorusecJava, HorusecKotlin, HorusecKubernetes, HorusecLeaks, HorusecNodejs. |
| Expressions | Array | Array of string containing all the RegExps that will detect the vulnerability.   |

## **3. Set the RegExps types**

Horusec's engine works with three types of RegExps: 

| **Type** | **Description** |
| :--- | :--- |
| OrMatch | These are more comprehensive rules, which may have more than one pattern to manifest, hence the name, since our engine will perform the logical OR operation for each of the registered RegExps. |
| Regular | It is very similar to OrMatch, but the idea is that it contains multiple ways to detect the same pattern. |
| AndMatch | These are rules that need the file to manifest multiple patterns to be considered something to be reported, therefore, the engine performs the logical operation in each of the registered RegExps to ensure that all conditions have been met. |

## **4.  Apply customized rules flag**

To start using the rules you've created, apply the **-c flag** so you can pass the path to your **.json** file: 

```
`horusec start -c="{path to your horusec custom rules json file}"`

```