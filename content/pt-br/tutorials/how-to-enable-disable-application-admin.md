---
title: Como habilitar e desabilitar o administrador da aplicação?
weight: 6
description: Nesta seção, você encontra o tutorial para   habilitar e desabilitar o adminstrador da aplicação web do Horusec.
---

---

A funcionalidade administrador da aplicação permite que o Administrador do Horusec crie workspaces. 

### **Valor false**

O microsserviço [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth#horusec-auth) inicia com:

-  A variável de ambiente **`HORUSEC_ENABLE_APPLICATION_ADMIN`** e o valor **false**. 

A partir disso, o Horusec possibilita um fluxo normal em que você pode criar sua empresa e gerenciá-la como desejar. 

### **Valor true**

Quando o valor é **true**, o [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth#horusec-auth) cria um usuário que está configurado na variável de ambiente:

- **`HORUSEC_APPLICATION_ADMIN_DATA`** e o valor:

```bash
 HORUSEC_APPLICATION_ADMIN_DATA="{\"username\": \"horusec-admin\", \"email\":\"horusec-admin@example.com\", \"password\":\"Devpass0*\"}"
```

{{% alert color="info" %}}
Somente esse usuário pode criar workspaces e informar quem será o administrador dele dentro da aplicação web do Horusec.
Pode ser o próprio usuário ou outro já existente na plataforma.
{{% /alert %}}


 

