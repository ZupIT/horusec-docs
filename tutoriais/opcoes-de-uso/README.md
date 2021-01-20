# Opções de uso

### **Habilitar/Desabilitar Serviço de Mensageria**

O Horusec permite que você habilite e desabilite o serviço de mensageria.

Por padrão, os microserviços [**horusec-account**](https://github.com/ZupIT/horusec/tree/master/horusec-account) **,** [**horusec-api**](https://github.com/ZupIT/horusec/tree/master/horusec-api) **,** [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth)**,** [**horusec-webhook**](https://github.com/ZupIT/horusec/tree/master/horusec-webhook) ****inicia com a variável de ambiente **`HORUSEC_DISABLED_BROKER`** com seu valor **false**. Desta forma, o Horusec irá enviar e-mails e outras funcionalidades que utilizam o serviço de mensageria. 

Quando o valor é **true** não será realizado o uso do serviço de mensageria, com isso não há algumas funcionalidades como o envio de e-mails, por exemplo. Neste caso,  quando existe a interação “o e-mail está confirmado?”, ela é automaticamente aceita pelo Horusec,  pois não há o disparo destes e-mails.

### **Habilitar/Desabilitar Application Admin**

A funcionalidade Application Admin permite que o Administrador do Horusec crie empresas. 

O microserviço [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth#horusec-auth) ****inicia com a variável de ambiente **`HORUSEC_ENABLE_APPLICATION_ADMIN`** com o valor **false**. Com isso, o Horusec possibilita um fluxo normal, onde você pode criar sua empresa e gerenciá-la como desejar. 

Quando o valor é **true**, o [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth#horusec-auth) cria um usuário que está configurado na variável de ambiente **`HORUSEC_APPLICATION_ADMIN_DATA`** com seu valor: `{\"username\": \"horusec-admin\", \"email\":\"horusec-admin@example.com\", \"password\":\"Devpass0*\"}` 

Este usuário tem uma função específica dentro do Horusec, pois somente ele irá criar as empresas e informar quem será o usuário administrador, podendo ser o próprio usuário ou outro já existente na plataforma.  


