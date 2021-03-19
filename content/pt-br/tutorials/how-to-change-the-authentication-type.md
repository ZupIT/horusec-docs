---
title: Como alterar o tipo de autenticação na aplicação Web?
weight: 5
description: Nesta seção, você encontra o tutorial para alterar os tipos de autenticação disponíveis na aplicação Web do Horusec.
---

---
Para alterar o tipo de autenticação que você utiliza, veja os passos para cada uma delas abaixo: 


### **1. Nativa Horusec**

Para utilizá-la, siga o passo:

1. Adicione a variável de ambiente **`HORUSEC_AUTH_TYPE=”horusec”`** no microsserviço “**horusec-auth**” para habilitar a autenticação nativa.

{{% alert color="info" %}}
Essa autenticação será adicionada em todos os microsserviços \(**horusec-auth, horusec-account, horusec-api, horusec-analytic**\) e na variável de ambiente  **`HORUSEC_JWT_SECRET_KEY=”horusec-secret”`**. 

O valor pode ser qualquer um da sua escolha, mas é necessário ser um hash forte.

{{% /alert %}}

### **2. LDAP**

Para configurar essa autenticação, siga os passos: 

1. Adicione a variável de ambiente `HORUSEC_AUTH_TYPE=”ldap”` no microsserviço [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth)  para definir a autenticação via LDAP.

2. Adicione algumas variáveis de ambiente no microsserviço [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth) para realizar a conexão com a ferramenta. 

Veja as váriaveis disponíveis abaixo:   


<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Nome da vari&#xE1;vel de ambiente</b>
      </th>
      <th style="text-align:left"><b>Valor padr&#xE3;o</b>
      </th>
      <th style="text-align:left"><b>Descri&#xE7;&#xE3;o</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_BASE</td>
      <td style="text-align:left">dc=example,dc=org</td>
      <td style="text-align:left">Base de conex&#xE3;o do LDAP.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_HOST</td>
      <td style="text-align:left">127.0.0.1</td>
      <td style="text-align:left">Host de conex&#xE3;o do LDAP.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_PORT</td>
      <td style="text-align:left">389</td>
      <td style="text-align:left">Porta de conex&#xE3;o do LDAP.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_USESSL</td>
      <td style="text-align:left">false</td>
      <td style="text-align:left">Verifica se voc&#xEA; deseja usar o SSL.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_SKIP_TLS</td>
      <td style="text-align:left">true</td>
      <td style="text-align:left">Verifica se voc&#xEA; deseja pular o TLS.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>HORUSEC_LDAP_INSECURE_</p>
        <p>SKIP_VERIFY</p>
      </td>
      <td style="text-align:left">true</td>
      <td style="text-align:left">Verifica se voc&#xEA; desejar pular a verifica&#xE7;&#xE3;o de inseguran&#xE7;a.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_BINDDN</td>
      <td style="text-align:left">cn=admin,dc=example,dc=org</td>
      <td style="text-align:left">Defini&#xE7;&#xE3;o para a entidade admin do Ldap.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_BINDPASSWORD</td>
      <td style="text-align:left">admin</td>
      <td style="text-align:left">Defini&#xE7;&#xE3;o da senha da entidade admin do ldap.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_USERFILTER</td>
      <td style="text-align:left">(uid=%s)</td>
      <td style="text-align:left">Qual &#xE9; a forma de filtros para os usu&#xE1;rios.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_GROUPFILTER</td>
      <td style="text-align:left">(memberUid=%s)</td>
      <td style="text-align:left">Qual &#xE9; a forma de filtro de para os grupos.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_ADMIN_GROUP</td>
      <td style="text-align:left">admin</td>
      <td style="text-align:left">Qual &#xE9; o nome do grupo de administradores.</td>
    </tr>
  </tbody>
</table>

### **3. Keycloak**

Para configurar essa autenticação, siga os passos:

1. Adicione a variável de ambiente `HORUSEC_AUTH_TYPE=”keycloak”` no microsserviço [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth) que você irá utilizar na autenticação via Keycloak.

2. Adicione as variáveis de conexão com o Keycloak.

Veja as váriaveis disponíveis abaixo:   

| **Nome da variável de ambiente** | **Valor padrão** | **Descrição** |
| :--- | :--- | :--- |
| HORUSEC\_KEYCLOAK\_BASE\_PATH |  | Qual é a base de conexão do keycloak.  Exemplo: http://127.0.0.1:8080. |
| HORUSEC\_KEYCLOAK\_CLIENT\_ID |  | Qual é o client\_id que você está utilizando. Exemplo: account. |
| HORUSEC\_KEYCLOAK\_CLIENT\_SECRET |  | Qual é a secret utilizada para o client\_id.  Exemplo: 00000000-0000-0000-0000-000000000000. |
| HORUSEC\_KEYCLOAK\_REALM |  | Qual é o realm utilizado.  Exemplo: master. |
| HORUSEC\_KEYCLOAK\_OTP | false | Se está utilizando otp\(one-time password\). |

3. Conecte o [**horusec-manager**](https://github.com/ZupIT/horusec/tree/master/horusec-manager) com algumas variáveis de ambiente, veja abaixo: 

| **Nome da variável de ambiente** | **Valor padrão** | **Descrição** |
| :--- | :--- | :--- |
| REACT\_APP\_KEYCLOAK\_BASE\_PATH |  | Qual é a base de conexão do keycloak.  Exemplo: http://127.0.0.1:8080. |
| REACT\_APP\_KEYCLOAK\_CLIENT\_ID |  | Qual é o client\_id que você está utilizando. Exemplo: account. |
| REACT\_APP\_KEYCLOAK\_REALM |  | Qual é o realm você está utilizando.  Exemplo: master |
