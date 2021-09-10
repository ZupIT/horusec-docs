---
title: Variáveis de ambiente
weight: 31
description: Nesta seção, você encontra as variáveis de ambiente do Horusec Manager. 
---

---

Estas são as possíveis váriaveis de ambiente que você pode configurar no Manager: 


| Nome da Variável de Ambiente                 | Valor Default                                                    | Descrição                                                  |
|----------------------------------|------------------------------------------------------------------|--------------------------------------------------------------|
| REACT_APP_HORUSEC_ENDPOINT_API             | http:\\/\\/127.0.0.1:8000                                                        | Endpoint onde está alocado o serviço Horusec-Api. ATENÇÃO: Ao adicionar essa variável de ambiente você deve realizar o 'escape' do conteúdo, exemplo:  http:\\/\\/127.0.0.1:8000.| 
| REACT_APP_HORUSEC_ENDPOINT_ANALYTIC         | http:\\/\\/127.0.0.1:8005 | Endpoint onde está alocado o serviço Horusec-Analytic. ATENÇÃO: Ao adicionar essa variável de ambiente você deve realizar o 'escape' do conteúdo, exemplo:  http:\\/\\/127.0.0.1:8005. |
| REACT_APP_HORUSEC_ENDPOINT_CORE    | http:\\/\\/127.0.0.1:8003                                                            |Endpoint onde está alocado o serviço Horusec-Core. ATENÇÃO: Ao adicionar essa variável de ambiente você deve realizar o 'escape' do conteúdo, exemplo:  http:\\/\\/127.0.0.1:8003.|
| REACT_APP_HORUSEC_ENDPOINT_WEBHOOK                    |  http:\\/\\/127.0.0.1:8003                                                             |Endpoint onde está alocado o serviço Horusec-webhook. ATENÇÃO: Ao adicionar essa variável de ambiente você deve realizar o 'escape' do conteúdo, exemplo:  http:\\/\\/127.0.0.1:8003.|
REACT_APP_HORUSEC_ENDPOINT_AUTH   | http:\\/\\/127.0.0.1:8006                                                        | Endpoint onde está alocado o serviço Horusec-Auth. ATENÇÃO: Ao adicionar essa variável de ambiente você deve realizar o 'escape' do conteúdo, exemplo:  http:\\/\\/127.0.0.1:8006.|
REACT_APP_HORUSEC_ENDPOINT_VULNERABILITY     | http:\\/\\/127.0.0.1:8001                                                      | Endpoint onde está alocado o serviço horusec-Vulnerability. ATENÇÃO: Ao adicionar essa variável de ambiente você deve realizar o 'escape' do conteúdo, exemplo:  http:\\/\\/127.0.0.1:8001.| 
REACT_APP_KEYCLOAK_BASE_PATH    | ----- ""  -----                                                       | Endereço onde está a conexão com o Keycloak.| 
REACT_APP_KEYCLOAK_CLIENT_ID    | ----- ""  -----                                                       | CLIENT ID para conexão com o Keycloak.|
| REACT_APP_KEYCLOAK_REALM            | ----- ""  -----                                               |REALM para conexão com o Keycloak.|
| REACT_APP_HORUSEC_MANAGER_PATH         | ----- ""  -----                                                     |Subpath onde o Manager ficará.|


{{% alert color="warning" %}}
O endpoint pode variar de acordo com a sua infraestrutura.
{{% /alert %}}  