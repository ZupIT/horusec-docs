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

## **Como fazer uma análise?**
Para realizar uma análise em seu projeto, [instale o Horusec](/docs/pt-br/cli/installing) no seu computador e, em seguida, rode o comando abaixo no local onde está seu projeto:

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

Caso queira trocar o diretório atual, basta adicionar o diretório que deseja logo após o síbolo `./` 

Por exemplo, para substituir por um diretório chamado latest-project, rode o comando como:

```bash
horusec start -p ./latest-project
```

Outra possibilidade é colocar o diretório completo onde está o seu projeto. Nesse caso, o comando ficaria assim: 

```bash
horusec start -p /home/user-name/folder-name/file-name
```
