---
title: Visão Geral
weight: 10
description: >-
  Nesta seção, você vai encontrar alguns conceitos básicos sobre o Horusec-CLI.
---

---

## **O que é?** 
A CLI (sigla para interface de linha de comando) é o programa que processa os comandos de um software ou qualquer programa computacional por meio de texto.

Horusec-CLI é a parte de código que permite você rodar os comandos de análise de segurança e de identificação e/ou classificação de vulnerabilidades.


## **Como a análise funciona?** 
 
O Horusec realiza uma análise [**SAST**]({{< ref path="/glossary.md" lang="pt-br">}}) do seu projeto e observa apenas o código, não é necessário nenhuma execução ou build e isso aumenta a velocidade da sua análise.  

As [**ferramentas de mercado**]({{< ref path="/cli/analysis-tools/security-tools.md" lang="pt-br">}}) tem sua própria saída de dados, desse modo o Horusec faz a leitura e padroniza no formato ideal. Com isso ele consegue um dado centralizado independente das ferramentas que você está utilizando na análise.

### **O que o Horusec-CLI faz?**
O Horusec-CLI envia o relatório da análise para o [**Horusec-Platform**](https://github.com/ZupIT/horusec-platform), e a partir desse momento você tem uma visão analítica das vulnerabilidades encontradas e elas podem ser agrupadas por:

- Repositório; 
- Autor do commit;
- Linguagem;
- Uma linha do tempo de vulnerabilidades. 

Depois disso, você pode fazer a [**gestão de vulnerabilidade**]({{< ref path="/web/services/manager/vulnerabilities-management.md" lang="pt-br">}}) trocando os tipos por **falso positivo**, **risco aceito** ou outros. 
É possível alterar também a severidade a partir da última análise por repositório, por exemplo, para **crítica**, **média**, etc;.


## **Como fazer uma análise?**
Siga os passos abaixo: 

**Passo 1.** [**Instale o Horusec**]({{< ref path="/cli/installation" lang="pt-br">}}) no seu computador;

**Passo 2.** Verifique os [requisitos]({{< ref path="/cli/installation/#requisitos" lang="pt-br">}}) e rode o comando abaixo no local onde está seu projeto:

```bash
horusec start
```

**Passo 3.** O Horusec-CLI retorna uma mensagem de confirmação para saber se o diretório atual está correto:

```bash
✔ The folder selected is: [/home/your-user/Projects/project-name]. Proceed? [Y/n]: Y
```

Selecione o **Y** para continuar e aperte o **ENTER**. Agora a ferramenta inicia a análise e a partir disso mostra as vulnerabilidades do seu projeto.


{{% alert color="info" %}}
O Horusec pode iniciar a análise sem fazer essa pergunta. Para fazer isso, digite o comando abaixo: 

```bash
horusec start -p ./
```
{{% /alert %}}


### **Como trocar de diretório?**

Se você quiser trocar o diretório atual, adicione o diretório que você deseja logo após o símbolo **`./`** 

#### **Exemplo** 

1. Nesse exemplo, a substituição é para um diretório chamado -latest-project. Para trocar, rode o comando:

```bash
horusec start -p ./latest-project
```

2. Você também pode colocar o diretório completo onde está o seu projeto. Nesse caso, o comando é: 

```bash
horusec start -p /home/user-name/folder-name/file-name
```

### Leia mais
- [**Como rodar o Horusec em múltiplos diretórios?**]({{< ref path="/tutorials/how-to-run-horusec-multiples-directories.md" lang="en">}})
- [**Como classificar uma vulnerabilidade?**]({{< ref path="/tutorials/how-to-classify-a-vulnerability.md" lang="pt-br">}})
