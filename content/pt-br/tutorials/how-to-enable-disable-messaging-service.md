---
title: Como habilitar e desabilitar o serviço de mensageria
weight: 6
description: Você vai encontrar aqui as opções de uso disponíveis para o Horusec.
---

---

O Horusec permite que você habilite e desabilite o serviço de mensageria.

Por padrão, os microsserviços [**horusec-account**](https://github.com/ZupIT/horusec/tree/master/horusec-account) **,** [**horusec-api**](https://github.com/ZupIT/horusec/tree/master/horusec-api) **,** [**horusec-auth**](https://github.com/ZupIT/horusec/tree/master/horusec-auth)**,** [**horusec-webhook**](https://github.com/ZupIT/horusec/tree/master/horusec-webhook) iniciam com a variável de ambiente **`HORUSEC_DISABLED_BROKER`** com seu valor **false**. Desta forma, o Horusec irá enviar e-mails e outras funcionalidades que utilizam o serviço de mensageria. 

Quando o valor é **true**, não será realizado o uso do serviço de mensageria e, por isso, não há algumas funcionalidades como o envio de e-mails, por exemplo. Neste caso,  quando existe a interação “o e-mail está confirmado?”, ela é automaticamente aceita pelo Horusec,  pois não há o disparo destes e-mails.
