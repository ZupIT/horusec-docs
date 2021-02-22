---
title: Introdução
weight: 10
description: >-
  Nesta seção, você vai encontrar alguns conceitos básicos sobre o uso do Horusec-CLI
---

---

## **O QUE É ?**
A CLI Refere-se à interface de linha de comando, que é o programa responsável por processar comandos de um software ou qualquer programa computacional por meio de texto.

O Horusec-CLI é a parte de código da ferramenta pela qual são rodados comandos de análise de segurança e de identificação e classificação de vulnerabilidades.

## **Início rápido**
Para realizar uma análise em seu projeto [instale o Horusec](/docs/pt-br/v2/cli/installing) em sua máquina, e rode o comando abaixo no local onde está seu projeto:

```bash
horusec start
```

Veja que ele irá perguntar se o diretório atual está correto para começar a análise, basta apertar ENTER para prosseguir e em seguida ele já irá começar a análise e mostrar as vulnerabilidades em seu projeto.

Se preferir que o Horusec inicie a análise imediatamente basta digitar o comando abaixo que irá rodar no diretório atual sem realizar nenhuma pergunta:

```bash
horusec start -p ./
```
