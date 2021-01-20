# Visual Studio Code

O Horusec disponibiliza a extensão do VS Code para realizar análises de código, na qual é possível você fazer análises completas em seu projeto com apenas um clique.

![](../../.gitbook/assets/install-horusec-vscode.gif)

## **Instalação**

### Requisitos

* Docker

Para instalar, siga os próximos passos: 

![](https://lh4.googleusercontent.com/y9Wow6GWtMk41o2lcXoetqdW_cnTZG8MDfpyoyZpDG2Wxjyd3qCcfLBdSMg9cuqtyHK_97nqfLqaT7PyMynmuvoOPfltOBwWuzQmmtggOW0YxUF3VB-X3LprL7Eq5e1rpv3PtCYT)

1. Clique no ícone de **extensões** ou digite **CRTL+ SHIFT+ X;**
2. Na barra de pesquisa, digite **Horusec**; 
3. Clique em **instalar**;
4. Após a instalação, o ícone do Horusec no VS Code irá aparecer, como a imagem abaixo: 

![](https://lh5.googleusercontent.com/-tryd3bt4wOKUGtD17cCSzmQor35Kj73maN_HVl37ANs094i3_rarvCNConZOtf7qgXXTedFx6JmkCpBuaASvyQEiKTnl4rufByvr283H46aRtrpdcOXSCutcwbDeRdGOYUFNVHC)

## **Funcionalidades**

### **Iniciar análise**

Ao iniciar uma análise, o Horusec irá rodar todas as ferramentas de segurança necessárias para seu projeto e mostrar as vulnerabilidades encontradas na aba do Horusec e na seção de diagnósticos. 

Você identifica uma análise em andamento quando encontra o ícone de loading na barra inferior a direita, veja a imagem abaixo:   


![](https://lh3.googleusercontent.com/KHQUug4xdC6Xu295Lt7sPGezmratMa_j27Vld2_yPDW2HcaoCbMJMs35qxvREtGnBXWsryQDXZ4zqNaRBn7VL-8bPtxnwNnikJ9RzI4pj70suPtbAr2E2Eccv2P8dWMx553VMO1f)

### **Parar análise**

Ao parar a análise do Horusec, a extensão irá remover a imagem da ferramenta de análise, porém esta ação não é recomendada até que a análise seja encerrada. 

### **Ir até o código vulnerável**

Quando ****uma vulnerabilidade é encontrada, o usuário pode verificar na aba do Horusec ou na seção de diagnósticos. Basta você clicar nessa vulnerabilidade que o Horusec mostra a linha exata que precisa ser alterada.

![](https://lh4.googleusercontent.com/rqiLcUBsCo_2fEmoBapFLUdioEBN0YP3k0BprUX_jlSkcKnzCIClZSiknWQlP4qoduDX6uVmU07UPsc53Pby3ue5RSMHbZUFxmlEY1kMyjkDOOLsSbmMpX5OpcQg5-LKu-ElHTgb)

As vulnerabilidades são mostradas com um ícone informando qual é o  nível de criticidade. Confira quais são:

* \*\*\*\*![](../../.gitbook/assets/info.svg) **INFO**
* \*\*\*\*![](../../.gitbook/assets/audit.svg) **AUDIT**
* \*\*\*\*![](../../.gitbook/assets/low.svg) **LOW**
* \*\*\*\*![](../../.gitbook/assets/medium.svg) **MEDIUM**
* \*\*\*\*![](../../.gitbook/assets/high.svg) **HIGH**

### **Apresentar diagnósticos**

![](https://lh3.googleusercontent.com/DZg1ADi8VNrBtz25P6ccKZXYuQUAdJZpjmi7xSaWFiBqYSuOzDwZyQU3kFzdFcS8HZsTY1xpnhAPyxmq7Pwi4kXRGKwTGCZzzlnylMmngvbhOMZFKAyy6__qIcdvf1zlgrdRKJsE)

### Tipos de notificações

Quando o Horusec realiza uma ação você recebe uma notificação informando os detalhes. Confira abaixo quais são:   


> ------ **INFO Início da análise \(Hold on! Horusec started to analysis your code\)**

> ---**--- INFO Fim da análise \(Horusec: Analysis finished with success\)**

> **------ WARN Já existe uma análise em andamento \(Hold on! Horusec is analyzing his code\)**

> **------ WARN Foi forçado a ser parado \(Horusec was forced to stop\)**

> **------ ERROR Nenhum workspace foi selecionado \(Horusec: No valid workspace found\)**

> **------ ERROR Algo inesperado ocorreu \(Something unexpected happened\)**

