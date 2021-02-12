---
title: Visual Studio Code
weight: 72
---

---

O Horusec disponibiliza a extensão do VS Code para realizar análises de código, na qual é possível você fazer análises completas em seu projeto com apenas um clique.

![](/docs/ptbr/references/extensions/vscode/1-simulation.gif)

## **Instalação**

### Requisitos

* Docker

Para instalar, siga os próximos passos: 

![](/docs/ptbr/references/extensions/vscode/2-horusec-not-installed.png)

1. Clique no ícone de **extensões** ou digite **CRTL+ SHIFT+ X;**
2. Na barra de pesquisa, digite **Horusec**; 
3. Clique em **instalar**;
4. Após a instalação, o ícone do Horusec no VS Code irá aparecer, como a imagem abaixo: 

![](/docs/ptbr/references/extensions/vscode/3-horusec-installed.png)

## **Funcionalidades**

### **Iniciar análise**

Ao iniciar uma análise, o Horusec irá rodar todas as ferramentas de segurança necessárias para seu projeto e mostrar as vulnerabilidades encontradas na aba do Horusec e na seção de diagnósticos. 

Você identifica uma análise em andamento quando encontra o ícone de loading na barra inferior a direita, veja a imagem abaixo:   

![](/docs/ptbr/references/extensions/vscode/4-analysis-running.png)

### **Parar análise**

Ao parar a análise do Horusec, a extensão irá remover a imagem da ferramenta de análise, porém esta ação não é recomendada até que a análise seja encerrada. 

### **Ir até o código vulnerável**

Quando uma vulnerabilidade é encontrada, o usuário pode verificar na aba do Horusec ou na seção de diagnósticos. Basta você clicar nessa vulnerabilidade que o Horusec mostra a linha exata que precisa ser alterada.

![](/docs/ptbr/references/extensions/vscode/5-vuln-found.png)

As vulnerabilidades são mostradas com um ícone informando qual é o  nível de criticidade. Confira quais são:

* ![](/docs/ptbr/references/extensions/vscode/7-info.svg) **INFO**
* ![](/docs/ptbr/references/extensions/vscode/8-audit.svg) **AUDIT**
* ![](/docs/ptbr/references/extensions/vscode/9-low.svg) **LOW**
* ![](/docs/ptbr/references/extensions/vscode/10-medium.svg) **MEDIUM**
* ![](/docs/ptbr/references/extensions/vscode/11-high.svg) **HIGH**

### **Apresentar diagnósticos**

![](/docs/ptbr/references/extensions/vscode/6-problems-to-fix.png)

### Tipos de notificações

Quando o Horusec realiza uma ação você recebe uma notificação informando os detalhes. Confira abaixo quais são:   


> ------ **INFO Início da análise \(Hold on! Horusec started to analysis your code\)**

> ---**--- INFO Fim da análise \(Horusec: Analysis finished with success\)**

> **------ WARN Já existe uma análise em andamento \(Hold on! Horusec is analyzing his code\)**

> **------ WARN Foi forçado a ser parado \(Horusec was forced to stop\)**

> **------ ERROR Nenhum workspace foi selecionado \(Horusec: No valid workspace found\)**

> **------ ERROR Algo inesperado ocorreu \(Something unexpected happened\)**
