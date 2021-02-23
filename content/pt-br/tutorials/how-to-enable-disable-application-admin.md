---
title: Como habilitar e desabilitar o administrador da aplicação ?
weight: 6
description: Você vai encontrar aqui como habilitar e desabilitar o adminstrador da aplicação web do horusec
---

---

A funcionalidade administrador da aplicação permite que o Administrador do Horusec crie workspaces. 

O microsserviço [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth#horusec-auth) inicia com a variável de ambiente **`HORUSEC_ENABLE_APPLICATION_ADMIN`** com o valor **false**. Com isso, o Horusec possibilita um fluxo normal, em que você pode criar sua empresa e gerenciá-la como desejar. 

Quando o valor é **true**, o [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth#horusec-auth) cria um usuário que está configurado na variável de ambiente **`HORUSEC_APPLICATION_ADMIN_DATA`** com seu valor:

```bash
 HORUSEC_APPLICATION_ADMIN_DATA="{\"username\": \"horusec-admin\", \"email\":\"horusec-admin@example.com\", \"password\":\"Devpass0*\"}"
```

Este usuário tem uma função específica dentro da aplicação web do Horusec, pois somente ele irá criar as workspaces e informar quem será o usuário administrador deste novo workspace, podendo ser o próprio usuário ou outro já existente na plataforma.
