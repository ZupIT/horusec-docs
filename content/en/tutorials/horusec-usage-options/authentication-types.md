---
title: Authentication types
weight: 9
---

---

Currently Horusec has 3 types of authentication:

* **Nativa Horusec**
* **Ldap**
* **Keycloak**

See below how to use each one of them: 

### **Nativa Horusec**

This is the most simple type of authentication. To use it, follow the next steps: 

1. Add the environment variable **`HORUSEC_AUTH_TYPE = "horusec"`**

    in the **horusec-auth** microservice and you will enable the native authentication; 

2. This authentication will be added in all microservices - "horusec-auth, horusec-account, horusec-api, horusec- analytic ”the environment variable **`HORUSEC_JWT_SECRET_KEY=”horusec-secret”`** ”- its value can be any and preferably a strong hash.

{{% alert color="info" %}}
Remember: once set it cannot be changed.
{{% /alert %}}

### **Ldap**

This type of authentication uses the open application protocol LDAP \(Lightweight Directory Access Protocol\), with this Horusec integrates with a tool such as [**OpenLDAP**](https://www.openldap.org/) where all users, access groups and organizations are located.

Horusec will consume this data from the tool and, thus, we will only manage the other functionalities such as analysis, vulnerability management, repositories and access tokens.

To configure this, follow the steps: 

1. Add the environment variable **`HORUSEC_AUTH_TYPE=”ldap”`** in the [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth#horusec-auth) microservice   to define the authentication via LDAP;
2. Add some environment variables in the microservice [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth#horusec-auth)  to make the connection with the tool, they are:

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Environment variable name</b>
      </th>
      <th style="text-align:left"><b>Standard value</b>
      </th>
      <th style="text-align:left"><b>Description</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_BASE</td>
      <td style="text-align:left">dc=example,dc=org</td>
      <td style="text-align:left">LDAP connection base</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_HOST</td>
      <td style="text-align:left">127.0.0.1</td>
      <td style="text-align:left">LDAP connection host</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_PORT</td>
      <td style="text-align:left">389</td>
      <td style="text-align:left">LDAP connection port</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_USESSL</td>
      <td style="text-align:left">false</td>
      <td style="text-align:left">Checks whether to use SSL</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_SKIP_TLS</td>
      <td style="text-align:left">true</td>
      <td style="text-align:left">Checks whether to skip TLS</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>HORUSEC_LDAP_INSECURE_</p>
        <p>SKIP_VERIFY</p>
      </td>
      <td style="text-align:left">true</td>
      <td style="text-align:left">Checks whether to skip insecurity check</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_BINDDN</td>
      <td style="text-align:left">cn=admin,dc=example,dc=org</td>
      <td style="text-align:left">Definition for Idap admin entity</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_BINDPASSWORD</td>
      <td style="text-align:left">admin</td>
      <td style="text-align:left">Definition the LDAP admin entity password</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_USERFILTER</td>
      <td style="text-align:left">(uid=%s)</td>
      <td style="text-align:left">What is the way of filter for users</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_GROUPFILTER</td>
      <td style="text-align:left">(memberUid=%s)</td>
      <td style="text-align:left">What is the way of filter for groups</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_LDAP_ADMIN_GROUP</td>
      <td style="text-align:left">admin</td>
      <td style="text-align:left">What is the group administrators name</td>
    </tr>
  </tbody>
</table>

### **Keycloak**

This type of authentication uses Keycloak just like Auth, so if you want an integration, for example, with Google and Facebook.

To configure this authentication, follow the steps: 

1. Add the environment variable **`HORUSEC_AUTH_TYPE=”keycloak”`** in the [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth#horusec-auth) microservice that you will use in the authentication via Keycloak; 
2. In the  [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth#horusec-auth) microservice, add the connection variables with the keycloak, which are:

|  **Environment variable name**  | **Standard value** | **Description** |
| :--- | :--- | :--- |
| HORUSEC\_KEYCLOAK\_BASE\_PATH |  | What is the keycloak connection base. Example:[http://127.0.0.1:8080](http://127.0.0.1:8080) |
| HORUSEC\_KEYCLOAK\_CLIENT\_ID |  | What is the client\_id that you use. Example: account. |
| HORUSEC\_KEYCLOAK\_CLIENT\_SECRET |  | What is secret  used to client\_id. Example:00000000-0000-0000-0000-000000000000. |
| HORUSEC\_KEYCLOAK\_REALM |  | What is the realm used. Example: master. |
| HORUSEC\_KEYCLOAK\_OTP | false | If you are using otp \(one-time password\). |

Then, to connect correctly, the [**horusec-manager**](https://github.com/ZupIT/horusec/tree/master/horusec-manager) will also need some environment variables:

|  **Environment variable name** | **Standard value** | **Description** |
| :--- | :--- | :--- |
| REACT\_APP\_KEYCLOAK\_BASE\_PATH |  | What is the Keycloak connection base  Example: http://127.0.0.1:8080 |
| REACT\_APP\_KEYCLOAK\_CLIENT\_ID |  | What is the client\_id that you use. Example: account |
| REACT\_APP\_KEYCLOAK\_REALM |  | What is the realm used. Example: master |
