---
title: Como habilitar e desabilitar o usuário padrão da aplicação?
weight: 7
description: Nesta seção, você encontra o tutorial para habilitar e desabilitar o usuário padrão da aplicação web do Horusec. 
---

---

A funcionalidade do usuário padrão permite que quando o [**Horusec-Auth**]({{< ref path="/web/services/auth" lang="pt-br">}}) é iniciado, um usuário seja automaticamente criado.

O microsserviço horusec-auth inicia com:

-  A variável de ambiente **`HORUSEC_ENABLE_DEFAULT_USER`** e o valor **true**.

A partir disso, o Horusec possibilita criar o usuário com seu valor padrão.
O usuário é criado com os seguintes dados:

```text
username = dev
email = dev@example.com
password = Devpass0*
```

Você também pode configurar os dados do usuário padrão no microsserviço horusec-auth com:
- A variável de ambiente **`HORUSEC_DEFAULT_USER_DATA`** e seu valor sendo alterado da forma que você preferir:
  `"{\"username\": \"dev\",\"email\":\"dev@example.com\",\"password\":\"Devpass0*\"}"`

Quando o microsserviço horusec-auth inicia com:
- A variável de ambiente **`HORUSEC_ENABLE_DEFAULT_USER`** e o valor **false**.
  - Não será criado este usuário no sistema quando a aplicação for iniciada.


{{% alert color="info" %}}
Depois que o usuário foi criado, ele **não poderá ser editado**.
{{% /alert %}}
