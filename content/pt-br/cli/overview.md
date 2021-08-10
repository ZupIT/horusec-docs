---
title: Visão Geral
weight: 10
description: >-
  Nesta seção, você vai encontrar alguns conceitos básicos sobre o Horusec-CLI
---

---

## **O que é?** 
A CLI (sigla para interface de linha de comando) é o programa responsável por processar comandos de um software ou qualquer programa computacional por meio de texto.

No contexto da ferramenta, o Horusec-CLI é a parte de código que permite você rodar os comandos de análise de segurança e de identificação e/ou classificação de vulnerabilidades.


## **Como a análise funciona?** 
 
O Horusec realiza uma análise [**SAST**]({{< ref path="/glossary.md" lang="pt-br">}}) do seu projeto e observa apenas o código, não é necessário nenhuma execução ou build e isso aumenta a velocidade da sua análise.  

Todas as [**ferramentas de mercado**]({{< ref path="/cli/analysis-tools/security-tools.md" lang="pt-br">}}) tem sua própria saída de dados, desse modo o Horusec faz a leitura e padroniza no formato ideal, com isso ele consegue um dado centralizado independente das ferramentas que você está utilizando na análise.

O Horusec-CLI envia o relatório da análise para o [**Horusec-Platform**](https://github.com/ZupIT/horusec-platform), e a partir desse momento você tem uma visão analítica das vulnerabilidades encontradas e elas podem ser agrupadas por:

- Repositório; 
- Autor do commit;
- Linguagem;
- Uma linha do tempo de vulnerabilidades. 

Logo depois, você pode fazer a [**gestão de vulnerabilidade**]({{< ref path="/web/services/manager/vulnerabilities-management.md" lang="pt-br">}}) trocando o tipo da vulnerabilidade por **falso positivo**, **risco aceito** ou outros. 
É possível alterar também a severidade a partir da última análise por repositório, por exemplo, para **crítica**, **média**, etc;.


## **Como fazer uma análise?**
Para realizar uma análise em seu projeto, [**instale o Horusec**]({{< ref path="/cli/installation" lang="pt-br">}}) no seu computador e, em seguida, rode o comando abaixo no local onde está seu projeto:

```bash
horusec start
```

O Horusec-CLI vai retornar uma mensagem de confirmação para saber se o diretório atual está correto:

```bash
✔ The folder selected is: [/home/your-user/Projects/project-name]. Proceed? [Y/n]: Y
```

Para continuar, basta selecionar Y e apertar ENTER que, na sequência, a ferramenta irá começar a análise e mostrar as vulnerabilidades do seu projeto.

Se preferir que o Horusec inicie a análise sem ter de passar por essa mensagem, basta digitar o comando abaixo que irá rodar no diretório atual sem realizar nenhuma pergunta:

```bash
horusec start -p ./
```

### **Como trocar de diretório?**

Caso queira trocar o diretório atual, basta adicionar o diretório que deseja logo após o símbolo `./` 

Por exemplo, para substituir por um diretório chamado latest-project, rode o comando como:

```bash
horusec start -p ./latest-project
```

Outra possibilidade é colocar o diretório completo onde está o seu projeto. Nesse caso, o comando ficaria assim: 

```bash
horusec start -p /home/user-name/folder-name/file-name
```

### Leia mais
- [**Como rodar o Horusec em múltiplos diretórios?**]({{< ref path="/tutorials/how-to-run-horusec-multiples-directories.md" lang="en">}})
- [**Como classificar uma vulnerabilidade?**]({{< ref path="/tutorials/how-to-classify-a-vulnerability.md" lang="pt-br">}})