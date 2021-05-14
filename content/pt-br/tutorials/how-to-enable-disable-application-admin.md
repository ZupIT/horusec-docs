---
title: Como habilitar e desabilitar o administrador da aplicação?
weight: 6
description: Nesta seção, você encontra o tutorial para   habilitar e desabilitar o adminstrador da aplicação web do Horusec.
---

---

A funcionalidade do administrador da aplicação permite que após o Horusec-Auth ser iniciado, um usuário admin seja criado automaticamente. Quando está funcionalidade está habilitada, **o usuário poderá criar workspaces**.

O microsserviço Horusec-auth inicia com:

-  A variável de ambiente **`HORUSEC_ENABLE_APPLICATION_ADMIN`** e o valor **true**.

A partir disso, o Horusec possibilita criar o usuário do tipo administrador da aplicação com seu valor padrão.
O usuário é criado com os seguintes dados:

```text
username = horusec-admin
email = horusec-admin@example.com
password = Devpass0*
```

Você também pode configurar os dados do usuário padrão no microsserviço Horusec-auth com:

- A variável de ambiente **`HORUSEC_APPLICATION_ADMIN_DATA`** e o valor pode ser alterado como quiser:
  `"{\"username\": \"horusec-admin\",\"email\":\"horusec-admin@example.com\",\"password\":\"Devpass0*\"}"`

E quando o microsserviço Horusec-auth inicia com:
- A variável de ambiente **`HORUSEC_ENABLE_APPLICATION_ADMIN`** e o valor **false**.
  - Não será criado este usuário no sistema quando a aplicação for iniciada.


{{% alert color="info" %}}
Depois que o usuário foi criado, ele **não poderá ser editado**.
{{% /alert %}}
