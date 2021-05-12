---
title: Como habilitar e desabilitar o administrador da aplicação?
weight: 6
description: Nesta seção, você encontra o tutorial para   habilitar e desabilitar o adminstrador da aplicação web do Horusec.
---

---

A funcionalidade do administrador da aplicação permite que após o serviço Horusec-Auth ser iniciado, seja criado um usuário deste tipo automaticamente. A principal funcionalidade desta opção é quando está habilitada, **pois somente este usuário poderá criar workspaces**.

O microsserviço horusec-auth inicia com:

-  A variável de ambiente **`HORUSEC_ENABLE_APPLICATION_ADMIN`** e o valor **true**.

A partir disso, o Horusec possibilita criar o usuário do tipo administrador da aplicação com seu valor padrão.
O usuário é criado com os seguintes dados:
```text
username = horusec-admin
email = horusec-admin@example.com
password = Devpass0*
```

Também é possível você configurar os dados do usuário padrão no microsserviço horusec-auth com:
- A variável de ambiente **`HORUSEC_APPLICATION_ADMIN_DATA`** e seu valor sendo alterado da forma que você preferir:
  `"{\"username\": \"horusec-admin\",\"email\":\"horusec-admin@example.com\",\"password\":\"Devpass0*\"}"`

Quando o microsserviço horusec-auth inicia com:
- A variável de ambiente **`HORUSEC_ENABLE_APPLICATION_ADMIN`** e o valor **false**.
  - Não será criado este usuário no sistema quando a aplicação for iniciada.


{{% alert color="info" %}}
Lembrando que após usuário criado ele não poderá ser editado.
{{% /alert %}}
