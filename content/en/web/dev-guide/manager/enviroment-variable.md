---
title: Environment Variable
weight: 31
description: In this section you will find Horusec Manager environment variables.
---

---

Check out below the possible environment variables you can configure in Manager:  

| Environment Name                 | Default Value                                                    | Description                                                  |
|----------------------------------|------------------------------------------------------------------|--------------------------------------------------------------|
| REACT_APP_HORUSEC_ENDPOINT_API             | http:\\/\\/127.0.0.1:8000                                                        | Endpoint where the horusec-Api service is allocated. WARNING: When adding this environment variable, you have to perform the content escape, example: http:\\/\\/127.0.0.1:8000.| 
| REACT_APP_HORUSEC_ENDPOINT_ANALYTIC         | http:\\/\\/127.0.0.1:8005 | Endpoint where the Horusec-Analytic service is allocated. WARNING: When adding this environment variable, you have to perform the content escape, example:  http:\\/\\/127.0.0.1:8005.|
| REACT_APP_HORUSEC_ENDPOINT_CORE    | http:\\/\\/127.0.0.1:8003                                                            |Endpoint where the Horusec-Core service is allocated. WARNING: When adding this environment variable, you have to perform the content escape, example: http:\\/\\/127.0.0.1:8003.|
| REACT_APP_HORUSEC_ENDPOINT_WEBHOOK                    |  http:\\/\\/127.0.0.1:8003                                                             |Endpoint where the Horusec-webhook service is allocated. WARNING: When adding this environment variable, you have to perform the content escape, example: http:\\/\\/127.0.0.1:8003.|
REACT_APP_HORUSEC_ENDPOINT_AUTH   | http:\\/\\/127.0.0.1:8006                                                        | Endpoint where the Horusec-Auth service is allocated. WARNING: When adding this environment variable, you have to perform the content escape, example: http:\\/\\/127.0.0.1:8006.|
REACT_APP_HORUSEC_ENDPOINT_VULNERABILITY     | http:\\/\\/127.0.0.1:8001                                                      | Endpoint where the horusec-Vulnerability service is allocated. WARNING: When adding this environment variable, you have to perform the content escape, example: http:\\/\\/127.0.0.1:8001.| 
REACT_APP_KEYCLOAK_BASE_PATH    | ----- ""  -----                                                       | The address where the Keycloak connection is.| 
REACT_APP_KEYCLOAK_CLIENT_ID    | ----- ""  -----                                                       | CLIENT ID for the Keycloak connection.|
| REACT_APP_KEYCLOAK_REALM            | ----- ""  -----                                               |REALM for the Keycloak connection.|
| REACT_APP_HORUSEC_MANAGER_PATH         | ----- ""  -----                                                     |Subpath where the Manager will be.| 

{{% alert color="warning" %}}
The endpoint may vary according to your infrastructure.
{{% /alert %}} 