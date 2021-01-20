# Adicionando regras personalizadas

Com o Horusec você pode adicionar dinamicamente regras personalizadas, que serão executadas nos nossos motores.

## **1. JSON de regras personalizadas do Horusec**

Para executar regras personalizadas no Horusec, você deverá criar um arquivo **.json** contendo o seguinte código:

![](https://lh4.googleusercontent.com/gnGcT4IOd4vfEtSUrWcxfDhaCWk4qxGiF32H82gqhmv3fHLTdW2MvQWIpTSqN-Py5iXEnWKIFy05rhbGyQ_yr5hv1uSxygc80aS3d1rVIyAoCGvz6TBELFozLpVa2lcE97_lNlKY)

## **2. Atributos do JSON** 

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

## **3. Tipos de RegExps**

Nosso motor trabalha com três tipos de RegExps \(Expressões Regulares\). 

| **Tipo** | **Descrição** |
| :--- | :--- |
| OrMatch | São regras mais abrangentes, que podem ter mais de um padrão para se manifestar, por isso o nome, já que nossa engine vai realizar a operação lógica ou para cada uma das RegExps cadastradas. |
| Regular | É bem similar ao OrMatch, porém a ideia é que contenha múltiplas formas de se detectar o mesmo padrão. |
| AndMatch | São regras que precisam que o arquivo manifeste múltiplos padrões para ser considerado algo a ser reportado, portanto, a engine realiza a operação lógica em cada uma das RegExps cadastradas para garantir que todas as condições foram encontradas. |

## **4. Flag de regras personalizadas**

Para começar a usar as regras que você criou, basta aplicar a **flag -c** para passar o caminho direto ao seu arquivo **.json**. 

![](https://lh6.googleusercontent.com/1JYtHKUmYY8n4tpRzPjXgC8r6tRA24qpD0xU9fMJMAYj8xvPvjhcTVVww6MArhpA9iLVJC0ojbetqJyN1VMlLPhRCDKb_Ryqe8wJBj1XcvU29V-eDJjBgYKeWY6DGzcSarGm9Fc-)

