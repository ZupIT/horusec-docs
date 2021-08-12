---
title: Como habilitar e desabilitar o administrador da aplicação?
weight: 6
description: Nesta seção, você encontra o tutorial para habilitar e desabilitar o adminstrador da aplicação web do Horusec.
---

---

A funcionalidade do administrador da aplicação, permite que o Horusec-Auth crie um usuário admin automaticamente quando ele não existir. Mas, se sua aplicação já possui um usuário admin, o Horusec-Auth deleta e recria outro com os seus dados. 

{{% alert color="info" %}}
Quando essa funcionalidade está habilitada, **o usuário poderá criar workspaces**.
{{% /alert %}}

### Como habilitar?  

**Passo 1:** Inicie o microsserviço Horusec-auth com:

- Variável de ambiente: **`HORUSEC_ENABLE_APPLICATION_ADMIN`**; 
- Valor: **true**.

**Passo 2:** Agora, o Horusec cria o usuário do tipo administrador da aplicação com seu valor padrão. Você sempre verá um usuário dono da aplicação: o "application admin". 

**Passo 3:** O usuário é criado com os dados:

```text
username = horusec-admin
email = horusec-admin@example.com
password = Devpass0*
```

### Como configurar os dados do usuário?

Você também pode configurar os dados do usuário padrão, veja abaixo os dois cenários: 

**Cenário 1:** No microsserviço Horusec-auth com a variável de ambiente **`HORUSEC_APPLICATION_ADMIN_DATA`** e o valor **true**, você verá os dados por meio da váriavel de ambiente **`HORUSEC_APPLICATION_ADMIN_DATA`** no seguinte formato: 

`"{\"username\": \"horusec-admin\",\"email\":\"horusec-admin@example.com\",\"password\":\"Devpass0*\"}"`

**Cenário 2:** No microsserviço Horusec-auth com a variável de ambiente **`HORUSEC_ENABLE_APPLICATION_ADMIN`** com o valor **false** o administrador é desabilitado. Nesse cenário, o usuário não é criado no sistema quando a sua aplicação iniciar. 

{{% alert color="info" %}}
Depois que o usuário foi criado, ele **não poderá ser editado**.
{{% /alert %}}

