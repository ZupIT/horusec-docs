---
title: Como gerar um token de autorização?
weight: 1
description: Nesta seção, você encontra o tutorial para  criar um token de autorização realizando a integração da Horusec-CLI com a web application.
---

---

Para executar uma análise e visualizá-la na aplicação web do Horusec, é necessário obter um token de repositório. 
Você consegue fazer isso usando a plataforma web [**Horusec Manager**]({{< ref path="/web/services/manager" lang="pt-br">}}). Se quiser gerar um token, veja os passos abaixo:

- **Passo 1:**  Acesse a plataforma web com seu usuário;
- **Passo 2:** Clique no botão para ir para a página de workspace e clique para adicionar workspace;
- **Passo 3:** Crie um novo workspace;
- **Passo 4:** Veja que ele foi criado e já selecionado para você trabalhar com ele;
- **Passo 5:** Vá para a página de repositórios;
- **Passo 6:** Clique no botão para adicionar o repositório;
- **Passo 7:** Crie um novo repositório;
- **Passo 8:** Clique no botão de Tokens para mostrar todos os tokens do repositório selecionado;
- **Passo 9:** Clique no botão para adicionar um novo token;
- **Passo 10:** Preencha os campos obrigatórios e clique em Salvar;
- **Passo 11:** Copie ou salve o token gerado para uso no Horusec-CLI;


{{% alert color="warning" %}}
**Este token é mostrado apenas uma vez, lembre-se que não será possível visualizá-lo novamente.**
{{% /alert %}}

- **Passo 12:** Rode uma nova análise com o token gerado.

Veja abaixo um exemplo com todos os passos:

<img style="width:100%" src="/docs/en/tutorials/how-to-create-authorization-token/generate-token.gif">