---
title: Como habilitar e desabilitar o administrador da aplicação
weight: 5
description: Você vai encontrar aqui as opções de uso disponíveis para o Horusec.
---

---

A funcionalidade Application Admin permite que o Administrador do Horusec crie empresas. 

O microsserviço [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth#horusec-auth) inicia com a variável de ambiente **`HORUSEC_ENABLE_APPLICATION_ADMIN`** com o valor **false**. Com isso, o Horusec possibilita um fluxo normal, em que você pode criar sua empresa e gerenciá-la como desejar. 

Quando o valor é **true**, o [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth#horusec-auth) cria um usuário que está configurado na variável de ambiente **`HORUSEC_APPLICATION_ADMIN_DATA`** com seu valor:

```bash
 HORUSEC_APPLICATION_ADMIN_DATA="{\"username\": \"horusec-admin\", \"email\":\"horusec-admin@example.com\", \"password\":\"Devpass0*\"}"
```

Este usuário tem uma função específica dentro do Horusec, pois somente ele irá criar as empresas e informar quem será o usuário administrador, podendo ser o próprio usuário ou outro já existente na plataforma.
