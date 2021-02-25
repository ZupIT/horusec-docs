---
title: Visual Studio Code
weight: 20
description: >-
  Nesta seção, você vai encontrar informações de como instalar e utilizar o Horusec no VsCode.
---

---

O Horusec disponibiliza a extensão do VS Code para realizar análises de código, na qual é possível você fazer análises completas em seu projeto com apenas um clique.

![](/docs/ptbr/extensions/vscode/1-simulation.gif)

## **Instalação**

### Requisitos

* Docker

Para instalar, siga os próximos passos: 

![](/docs/ptbr/extensions/vscode/2-horusec-not-installed.png)

1. Clique no ícone de **extensões**, na barra lateral à esquerda, ou digite **CRTL+ SHIFT+ X;**
2. Na barra de pesquisa, digite **Horusec**; 
3. Clique em **instalar**;
4. Após a instalação, o ícone do Horusec no VS Code irá aparecer, como a imagem abaixo: 

![](/docs/ptbr/extensions/vscode/3-horusec-installed.png)

## **Funcionalidades**

Conheça, a seguir, as principais funcionalidades que o Horusec oferece em sua extensão:

### **Iniciar análise**

Ao iniciar uma análise, o Horusec irá rodar todas as ferramentas de segurança necessárias para seu projeto e mostrar as vulnerabilidades encontradas na aba do Horusec e na seção de diagnósticos. 

Você identifica uma análise em andamento quando encontra o ícone de loading na barra inferior à direita, como na imagem abaixo:   

![](/docs/ptbr/extensions/vscode/4-analysis-running.png)

### **Parar análise**

Ao interromper a análise do Horusec, a extensão irá remover a imagem da ferramenta de análise, porém esta ação não é recomendada até que a análise se encerre. 

### **Ir até o código vulnerável**

Quando uma vulnerabilidade é encontrada, você pode verificá-la na aba do Horusec ou na seção de diagnósticos. Para isso, basta você clicar nessa vulnerabilidade que o Horusec mostra a linha exata que precisa ser alterada.

![](/docs/ptbr/extensions/vscode/5-vuln-found.png)

As vulnerabilidades são mostradas com um ícone informando qual é o nível de criticidade:

* ![](/docs/ptbr/extensions/vscode/7-info.svg) **INFO**
* ![](/docs/ptbr/extensions/vscode/8-audit.svg) **AUDIT**
* ![](/docs/ptbr/extensions/vscode/9-low.svg) **LOW**
* ![](/docs/ptbr/extensions/vscode/10-medium.svg) **MEDIUM**
* ![](/docs/ptbr/extensions/vscode/11-high.svg) **HIGH**

### **Apresentar diagnósticos**

![](/docs/ptbr/extensions/vscode/6-problems-to-fix.png)

### Tipos de notificações

Quando o Horusec realiza uma ação, você recebe uma notificação informando os detalhes. Confira abaixo quais são cada um deles:   


> ------ **INFO Início da análise \(Hold on! Horusec started to analysis your code\)**

> ---**--- INFO Fim da análise \(Horusec: Analysis finished with success\)**

> **------ WARN Já existe uma análise em andamento \(Hold on! Horusec is analyzing his code\)**

> **------ WARN Foi forçado a ser parado \(Horusec was forced to stop\)**

> **------ ERROR Nenhum workspace foi selecionado \(Horusec: No valid workspace found\)**

> **------ ERROR Algo inesperado ocorreu \(Something unexpected happened\)**
