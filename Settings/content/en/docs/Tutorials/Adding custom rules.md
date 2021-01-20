---
title: Adding custom rules
weight: 27
---

---

With Horusec you are able to dynamically add rules that will be executed on our engines. 

## **1. Horusec custom rules JSON** 

In order to run custom Json rules in Horusec you'll have to create a **.json** having this code pattern below:

![](https://lh4.googleusercontent.com/gnGcT4IOd4vfEtSUrWcxfDhaCWk4qxGiF32H82gqhmv3fHLTdW2MvQWIpTSqN-Py5iXEnWKIFy05rhbGyQ_yr5hv1uSxygc80aS3d1rVIyAoCGvz6TBELFozLpVa2lcE97_lNlKY)

## **2. JSON attributes**

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

## **3. RegExps types**

Horusec's engine works with three types of RegExps: 

| **Type** | **Description** |
| :--- | :--- |
| OrMatch | These are more comprehensive rules, which may have more than one pattern to manifest, hence the name, since our engine will perform the logical OR operation for each of the registered RegExps. |
| Regular | It is very similar to OrMatch, but the idea is that it contains multiple ways to detect the same pattern. |
| AndMatch | These are rules that need the file to manifest multiple patterns to be considered something to be reported, therefore, the engine performs the logical operation in each of the registered RegExps to ensure that all conditions have been met. |

## **4. Custom rules flag**

To start using the rules you've created, apply the **-c flag** so you can pass the path to your **.json** file: 

![](https://lh6.googleusercontent.com/1JYtHKUmYY8n4tpRzPjXgC8r6tRA24qpD0xU9fMJMAYj8xvPvjhcTVVww6MArhpA9iLVJC0ojbetqJyN1VMlLPhRCDKb_Ryqe8wJBj1XcvU29V-eDJjBgYKeWY6DGzcSarGm9Fc-)
