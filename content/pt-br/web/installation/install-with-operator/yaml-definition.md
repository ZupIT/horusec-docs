---
title: Definição do YAML 
weight: 20
description: Nesta seção, você vai encontrar as definições do arquivo YAML. 
---

| **Chave** | **Tipo** | Valor Default | **Definição** |
| :--- | :--- | :--- | :--- |
| components.analytic.name | String | `analytic` |  Nome do componente (se não configurado irá ser por padrão analytic).  |
| components.analytic.port.http | Number | `8005` | Portas a serem expostas |
| components.analytic.replicaCount | Number | `1` |  Total de réplicas (se não configurado irá ser por padrão 1).  |
| components.analytic.pod | String | ✓ | Definições da pod https://kubernetes.io/docs/concepts/workloads/pods/ | String | ✓ |  Nome do componente (se não configurado irá ser por padrão analytic).  |
| components.analytic.pod.autoscaling | Number | ✓ | Definições de autoscaling  https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/. | Number | ✓ |  Nome do componente (se não configurado irá ser por padrão analytic).  |
| components.analytic.pod.autoscaling.maxReplicas | Number | `3` | Máximo de pods disponível na aplicação https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/#autoscaling-on-multiple-metrics-and-custom-metrics (se não configurado irá ser por padrão 3). |
| components.analytic.pod.autoscaling.minReplicas | Number | `1` |  Minímo de pods disponível na aplicação https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/#autoscaling-on-multiple-metrics-and-custom-metrics (se não configurado irá ser por padrão 1).  |
|components.analytic.pod.autoscaling.targetCPU | Number | `50` | quantidade de recurso disponível por pod: CPU https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/#autoscaling-on-multiple-metrics-and-custom-metrics (se não configurado irá ser por padrão 50). |
| components.analytic.pod.autoscaling.targetMemory | Number | `50`|  quantidade de recurso disponível por pod: Memória https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/#autoscaling-on-multiple-metrics-and-custom-metrics  (se não configurado irá ser por padrão 50).  |
| components.analytic.securityContext | Number | ✓ | Contexto de segurança https://kubernetes.io/docs/tasks/configure-pod-container/security-context/. |
| components.analytic.securityContext.fsGroup | Number | `2000` | ID do grupo de segurança https://kubernetes.io/docs/tasks/configure-pod-container/security-context/  (se não configurado irá ser por padrão 2000).  |
| components.analytic.container | Number | ✓ | Definições para o container https://kubernetes.io/docs/concepts/containers/|
| components.analytic.image | String | ✓ |  Definições para a imagem do componente https://kubernetes.io/docs/concepts/containers/images/  |
| components.analytic.image.pullPolicy | String | IfNotPresent | Definições para download de imagem https://kubernetes.io/docs/concepts/containers/images/#updating-images  (se não configurado irá ser por padrão IfNotPresent). | 
| components.analytic.image.registry | String | docker.io/horuszup | Definições para registro de download de imagem https://kubernetes.io/docs/concepts/containers/images/#updating-images. |
| components.analytic.image.repository | String | horusec-analytic | Definições para repositório de download de imagem https://kubernetes.io/docs/concepts/containers/images/#updating-images (se não configurado irá ser por padrão horusec-analytic). |
| components.analytic.image.tag | Number | `v2.17.3` | Definições da tag de versionamento para download de imagem https://kubernetes.io/docs/concepts/containers/images/#updating-images (se não configurado irá ser por padrão v2.17.3). |
| components.analytic.livenessProbe | Number | - | Definições para comando de verificação se o serviço está com a saúde em dia https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/ | 
| components.analytic.livenessProbe.timeoutSeconds | Number | `1` |  https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes (se não configurado irá ser por padrão 1). | 
| components.analytic.livenessProbe.periodSeconds | Number | `10` | https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes (se não configurado irá ser por padrão 10). | 
| components.analytic.livenessProbe.successThreshold | Number | `1` | https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes (se não configurado irá ser por padrão 1). | 
| components.analytic.livenessProbe.failureThreshold | Number | `3` | https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes (se não configurado irá ser por padrão 3). | 
| components.analytic.readinessProbe | Number | - | Definições para tempo de espera para comando de verificação se o serviço está com a saúde em dia https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/. | 
| components.analytic.readinessProbe | Number | `1` | Definições para download de imagem https://kubernetes.io/docs/concepts/containers/images/#updating-images  (se não configurado irá ser por padrão IfNotPresent). | 
| components.analytic.readinessProbe.timeoutSeconds | Number | `1` | https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes (se não configurado irá ser por padrão 1). | 
| omponents.analytic.readinessProbe.periodSeconds | Number | `10` | https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes (se não configurado irá ser por padrão 10). | 
| omponents.analytic.readinessProbe.successThreshold | Number | `1` | https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes (se não configurado irá ser por padrão 1). | 
| omponents.analytic.readinessProbe.failureThreshold | Number | `3` | https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes (se não configurado irá ser por padrão 3). | 
| omponents.analytic.resources | String | {} | Definições para limite de recursos por requisições https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#specify-a-memory-request-and-a-memory-limit (se não configurado irá ser por padrão {} vazio). | 
| components.analytic.securityContext | -| - | Contexto de segurança para o container https://kubernetes.io/docs/tasks/configure-pod-container/security-context/. | 
| components.analytic.securityContext.runAsUser | Number | `1000` | ID do usuário do grupo de segurança https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ (se não configurado irá ser por padrão 1000). | 
| components.analytic.securityContext.runAsNonRoot | String | `true` | Indica que os contêineres devem ser executados como usuário não root https://kubernetes.io/blog/2016/08/security-best-practices-kubernetes-deployment/ (se não configurado irá ser por padrão true). | 
| components.analytic.ingress | - | - | o que é ingress https://kubernetes.io/docs/concepts/services-networking/ingress/. | 
| components.analytic.ingress.enabled | String | `true` | Ingress está habilitado para o componente (se não configurado irá ser por padrão true). | 
| components.analytic.ingress.host | String | `analytic.local` | Definição de host para o componente (se não configurado irá ser por padrão analytic.local). | 
| components.analytic.ingress.path | String | `"/analytic"` | Definição de path para o componente (se não configurado irá ser por padrão /analytic). | 
| components.analytic.ingress.tls | String | `{} ` | Configurações para TLS (Transport Layer Security) do componente https://kubernetes.io/docs/concepts/services-networking/ingress/#tls (se não configurado irá ser por padrão {} vazio). |
|  components.analytic.database | - | - | Definições de conexão com o banco de dados do componente  |
|  components.analytic.database.name | String | `horusec_analytic_db` | Nome do banco de dados para conexão (se não configurado irá ser por padrão horusec_analytic_db).  |
|  components.analytic.database.host | String | `""` | Host para conexão (se não configurado irá ser por padrão postgresql).  |
|  components.analytic.database.port | Number | `5432` | Definição da porta do banco de dados para conexão (se não configurado irá ser por padrão 5432).  |
|  components.analytic.database.sslMode | String | `false` | Ssl está habilitado para o componente (se não configurado irá ser por padrão false).  |
|  components.analytic.database | String | `""` | Error message to be displayed.  |
| components.analytic.database.migration | String | `""` | Error message to be displayed.  |
| components.analytic.database.migration.image | - |  | Definições para a imagem de migração do componente https://kubernetes.io/docs/concepts/containers/images/.  |
| components.analytic.database.migration.image.pullPolicy | String | `IfNotPresent` | Error message to be displayed.  |
| components.analytic.database.migration.image.registry | String | `docker.io/horuszup` | Definições para registro de download de imagem https://kubernetes.io/docs/concepts/containers/images/#updating-images (se não configurado irá ser por padrão docker.io/horuszup).  |
|components.analytic.database.migration.image.repository | String | `horusec-migrations` | Definições para repositório de download de imagem https://kubernetes.io/docs/concepts/containers/images/#updating-images (se não configurado irá ser por padrão horusec-migration).  |
| components.analytic.database.migration.image.tag | Number | `"v2.17.3` | Definições da tag de versionamento para download de imagem https://kubernetes.io/docs/concepts/containers/images/#updating-images (se não configurado irá ser por padrão v2.17.3).  |
| components.analytic.database.migration.user | - |  | Definições de usuário para conexão com o banco de dados.  |
| components.analytic.database.migration.user.secretKeyRef | - |  | Definições de como adquirir usuário atráves de secrets kubernetes https://kubernetes.io/docs/concepts/configuration/secret/.  |
| components.analytic.database.migration.user.secretKeyRef.name | String | `horusec-analytic-database` | Grupo de definição da secret (se não configurado irá ser por padrão horusec-analytic-database).  |
|components.analytic.database.migration.user.secretKeyRef.key  | String | `username` | Chave para adquirir valores da secret (se não configurado irá ser por padrão username).  |
| components.analytic.database.migration.password | - |  | Definições de senha para conexão com o banco de dados.  |
| components.analytic.database.migration.password.secretKeyRef | - |  | Definições de como adquirir senha atráves de secrets kubernetes https://kubernetes.io/docs/concepts/configuration/secret/ |
| components.analytic.database.migration.password.secretKeyRef.name | String | `horusec-analytic-database` | Grupo de definição da secret (se não configurado irá ser por padrão horusec-analytic-database).  |
| components.analytic.database.migration.password.secretKeyRef.key | String | `password` |  Chave para adquirir valores da secret (se não configurado irá ser por padrão password).  |
| components.api | - | - | Component API.  |
| components.api.name | String | `api` |   |
| components.api.port.http | Number | `8000` |   |
| components.api.replicaCount | Number | `1` |   |
| components.api.pod.autoscaling.maxReplicas | Number | `3` |   |
| components.api.pod.autoscaling.minReplicas | Number | `1` |   |
| components.api.pod.autoscaling.targetCPU | Number | `50` |  |
| components.api.pod.autoscaling.targetMemory | Number | `50` |  |
| components.api.securityContext.fsGroup | Number | `2000` |   | 
| components.api.container.image.pullPolicy | String | `IfNotPresent` |   |
| components.api.container.image.registry| String | `docker.io/horuszup` |   |
| components.api.container.image.repository | String | `horusec-api` |   |
| components.api.container.image.tag | Number | `v2.17.3` |   
| components.api.container.livenessProbe.timeoutSeconds | Number | `1` |   |
| components.api.container.livenessProbe.periodSeconds | Number | `10` |   |
| components.api.container.livenessProbe.successThreshold | Number | `1` |   |
| components.api.container.livenessProbe.failureThreshold | Number | `3` | 
| components.api.container.readinessProbe.timeoutSeconds | Number | `1` |   |
| components.api.container.readinessProbe.periodSeconds | Number | `10` |   |
| components.api.container.readinessProbe.successThreshold | Number | `1` |   |
| components.api.container.readinessProbe.failureThreshold | Number | `3` |   |
| components.api.container.resources| String | `{}` |   |
| components.api.container.securityContext.runAsUser | Number | `1000` |   |
| components.api.container.securityContext.runAsNonRoot | String | `true` |   |
| components.api.ingress.enabled| String | `true` |   |
| components.api.ingress.host | String | `api.local` |   |
| components.api.ingress.path | String | `"/api"` |   |
| components.api.ingress.tls | String | `{}` |   | 
| components.auth |  |  | Component auth |
| components.auth.type | String | `horusec` |   |
| components.auth.user.administrator.secretKeyRef.name | String | `horusec-administrator` |   |
| components.auth.user.administrator.secretKeyRef.key | String | `username` |   |
| components.auth.user.administrator.password.secretKeyRef.name  | String | `horusec-administrator` |   |
| components.auth.user.password.secretKeyRef.key | String | `password` |   |
| components.auth.user.default.email | String | `dev@example.com` |   |
| components.auth.user.default.user |  |  |   |
| components.auth.user.default.user.secretKeyRef.name   | String | `horusec-default-user` |   |
| components.auth.user.default.user.secretKeyRef.key | String | `username` |   |
| components.auth.port |  |  |   |
| components.auth.port.http |  Number | `8006` |   |
| components.auth.port.grpc  |  Number | `8007` |   |
| components.auth.replicaCount| Number  |  `1`  |  |
| components.auth.pod.autoscaling.maxReplicas| Number  |  `3`  |  |
| components.auth.pod.autoscaling.minReplicas | Number | `1` |   |
| components.auth.pod.autoscaling.targetCPU |  Number | `50` |   |
| components.auth.pod.autoscaling.targetMemory  |  Number | `50` |   |
| components.auth.pod.securityContext.fsGroup| Number  |  `2000`  |  |
| components.auth.container.image.pullPolicy|  String  |  `IfNotPresent`  |  |
| components.auth.container.image.registry |  String | `docker.io/horuszup` |   |
| components.auth.container.image.repository |   String | `horusec-auth` |   |
| components.auth.container.image.tag  |  Number | `v2.17.3` |   |
| components.auth.container.livenessProbe.timeoutSeconds | Number |  `1`  |  |
| components.auth.container.livenessProbe.periodSeconds | Number | `10` |   |
| components.auth.container.livenessProbe.successThreshold | Number | `1` |   |
| components.auth.container.livenessProbe.failureThreshold  | Number | `3` |   |
| components.auth.container.readinessProbe.timeoutSeconds | Number |  `1`  |  |
| components.auth.container.readinessProbe.periodSeconds | Number | `10` |   |
| components.auth.container.readinessProbe.successThreshold | Number | `1` |   |
| components.auth.container.readinessProbe.failureThreshold  | Number | `3` |   |
| components.auth.container.readinessProbe  | String | `horusec-default-user` |   |
| components.auth.container.resources | String | `{}` |   |
| components.auth.container.securityContext.runAsUser | Number | `1000` |  |
| components.auth.container.runAsNonRoot | String | `true` |  |
| components.auth.container.ingress.enabled | String |  `true`  |  |
| components.auth.container.ingress.host | String | `auth.local` |   |
| components.auth.container.ingress.path | String | `"/auth"` |   |
| components.auth.container.ingress.tls  | String | `{}` |   |
| components.core.name |  |    | Core |
| components.core.port.http | Number | `8003` |   |
| components.core.replicaCount | Number | `1` |   |
| components.core.pod.autoscaling.maxReplicas | Number | `3` |   |
| components.core.pod.autoscaling.minReplicas | Number | `1` |   |
| components.core.pod.autoscaling.targetCPU | Number | `50` |   |
| components.core.pod.autoscaling.targetMemory | Number | `50` |  |
| components.core.pod.securityContext.fsGroup | Number | `2000` |  |
| components.core.container.image.pullPolicy|  String  |  `IfNotPresent`  |  |
| components.core.container.image.registry |  String | `docker.io/horuszup` |   |
| components.core.container.image.repository |   String | `horusec-core` |   |
| components.core.container.image.tag  |  Number | `v2.17.3` |   |
| components.core.container.livenessProbe.timeoutSeconds | Number |  `1`  |  |
| components.core.container.livenessProbe.periodSeconds | Number | `10` |   |
| components.core.container.livenessProbe.successThreshold | Number | `1` |   |
| components.core.container.livenessProbe.failureThreshold  | Number | `3` |   |
| components.core.container.readinessProbe.timeoutSeconds | Number |  `1`  |  |
| components.core.container.readinessProbe.periodSeconds | Number | `10` |   |
| components.core.container.readinessProbe.successThreshold | Number | `1` |   |
| components.core.container.readinessProbe.failureThreshold  | Number | `3` |   |
| components.core.container.resources | String | `{}` |   |
| components.core.container.securityContext.runAsUser | Number | `1000` |  |
| components.core.container.runAsNonRoot | String | `true` |  |
| components.core.container.ingress.enabled | String |  `true`  |  |
| components.core.container.ingress.host | String | `core.local` |   |
| components.core.container.ingress.path | String | `"/core"` |   |
| components.core.container.ingress.tls  | String | `{}` |   |
| components.manager.name |  |    | Core |
| components.manager.port.http | Number | `8080` |   |
| components.manager.replicaCount | Number | `1` |   |
| components.manager.pod.autoscaling.maxReplicas | Number | `3` |   |
| components.manager.pod.autoscaling.minReplicas | Number | `1` |   |
| components.manager.pod.autoscaling.targetCPU | Number | `50` |   |
| components.manager.pod.autoscaling.targetMemory | Number | `50` |  |
| components.manager.pod.securityContext.fsGroup | Number | `2000` |  |
| components.manager.container.image.pullPolicy|  String  |  `IfNotPresent`  |  |
| components.manager.container.image.registry |  String | `docker.io/horuszup` |   |
| components.manager.container.image.repository |   String | `horusec-manager` |   |
| components.manager.container.image.tag  |  Number | `v2.17.3` |   |
| components.manager.container.livenessProbe.timeoutSeconds | Number |  `1`  |  |
| components.manager.container.livenessProbe.periodSeconds | Number | `10` |   |
| components.manager.container.livenessProbe.successThreshold | Number | `1` |   |
| components.manager.container.livenessProbe.failureThreshold  | Number | `3` |   |
| components.manager.container.readinessProbe.timeoutSeconds | Number |  `1`  |  |
| components.manager.container.readinessProbe.periodSeconds | Number | `10` |   |
| components.manager.container.readinessProbe.successThreshold | Number | `1` |   |
| components.manager.container.readinessProbe.failureThreshold  | Number | `3` |   |
| components.manager.container.resources | String | `{}` |   |
| components.manager.container.securityContext.runAsUser | Number | `1000` |  |
| components.manager.container.runAsNonRoot | String | `true` |  |
| components.manager.container.ingress.enabled | String |  `true`  |  |
| components.manager.container.ingress.host | String | `manager.local` |   |
| components.manager.container.ingress.path | String | `""/""` |   |
| components.manager.container.ingress.tls  | String | `{}` |   |
| components.messages |  |    | Component messages |
| components.messages.mailServer.host | String | `smtp.mailtrap.io`  |  |
| components.messages.mailServer.host.port | Number | `25`  |  |
| components.messages.mailServer.host.user.secretKeyRef.name | String | `horusec-smtp`  |  |
| components.messages.mailServer.host.user.secretKeyRef.key | String | `username`  |  |
| components.messages.mailServer.password.secretKeyRef.name | String | `horusec-smtp`  |  |
| components.messages.mailServer.password.secretKeyRef.key| String | `password`  |  |
| components.messages.emailFrom | String | `change.me@mycompany.com`  |  |
| components.messages.name | String | `messages`  |  |
| components.messages.port.http| Number | `8002`  |  |
| components.messages.replicaCount | Number | `1` |   |
| components.messages.pod.autoscaling.maxReplicas | Number | `3` |   |
| components.messages.pod.autoscaling.minReplicas | Number | `1` |   |
| components.messages.pod.autoscaling.targetCPU | Number | `50` |   |
| components.messages.pod.autoscaling.targetMemory | Number | `50` |  |
| components.messages.pod.securityContext.fsGroup | Number | `2000` |  |
| components.messages.container.image.pullPolicy|  String  |  `IfNotPresent`  |  |
| components.messages.container.image.registry |  String | `docker.io/horuszup` |   |
| components.messages.container.image.repository |   String | `horusec-manager` |   |
| components.messages.container.image.tag  |  Number | `v2.17.3` |   |
| components.messages.container.livenessProbe.timeoutSeconds | Number |  `1`  |  |
| components.messages.container.livenessProbe.periodSeconds | Number | `10` |   |
| components.messages.container.livenessProbe.successThreshold | Number | `1` |   |
| components.messages.container.livenessProbe.failureThreshold  | Number | `3` |   |
| components.messages.container.readinessProbe.timeoutSeconds | Number |  `1`  |  |
| components.messages.container.readinessProbe.periodSeconds | Number | `10` |   |
| components.messages.container.readinessProbe.successThreshold | Number | `1` |   |
| components.messages.container.readinessProbe.failureThreshold  | Number | `3` |   |
| components.messages.container.resources | String | `{}` |   |
| components.messages.container.securityContext.runAsUser | Number | `1000` |  |
| components.messages.container.runAsNonRoot | String | `true` |  |
| components.messages.container.ingress.enabled | String |  `true`  |  |
| components.messages.container.ingress.host | String | `messages.local` |   |
| components.messages.container.ingress.path | String | `"/messages"` |   |
| components.messages.container.ingress.tls  | String | `{}` |   |
| components.messages. | Number | `2000` |   |
| components.messages. | Number | `horusec-analytic-database` |  |
| components.vulnerability.name |  |    | Vulnerability |
| components.vulnerability.port.http | Number | `8001` |   |
| components.vulnerability.replicaCount | Number | `1` |   |
| components.vulnerability.pod.autoscaling.maxReplicas | Number | `3` |   |
| components.vulnerability.pod.autoscaling.minReplicas | Number | `1` |   |
| components.vulnerability.pod.autoscaling.targetCPU | Number | `50` |   |
| components.vulnerability.pod.autoscaling.targetMemory | Number | `50` |  |
| components.vulnerability.pod.securityContext.fsGroup | Number | `2000` |  |
| components.vulnerability.container.image.pullPolicy|  String  |  `IfNotPresent`  |  |
| components.vulnerability.container.image.registry |  String | `docker.io/horuszup` |   |
| components.vulnerability.container.image.repository |   String | `horusec-vulnerability` |   |
| components.vulnerability.container.image.tag  |  Number | `v2.17.3` |   |
| components.vulnerability.container.livenessProbe.timeoutSeconds | Number |  `1`  |  |
| components.vulnerability.container.livenessProbe.periodSeconds | Number | `10` |   |
| components.vulnerability.container.livenessProbe.successThreshold | Number | `1` |   |
| components.vulnerability.container.livenessProbe.failureThreshold  | Number | `3` |   |
| components.vulnerability.container.readinessProbe.timeoutSeconds | Number |  `1`  |  |
| components.vulnerability.container.readinessProbe.periodSeconds | Number | `10` |   |
| components.vulnerability.container.readinessProbe.successThreshold | Number | `1` |   |
| components.vulnerability.container.readinessProbe.failureThreshold  | Number | `3` |   |
| components.vulnerability.container.resources | String | `{}` |   |
| components.vulnerability.container.securityContext.runAsUser | Number | `1000` |  |
| components.vulnerability.container.runAsNonRoot | String | `true` |  |
| components.vulnerability.container.ingress.enabled | String |  `true`  |  |
| components.vulnerability.container.ingress.host | String | `vulnerability.local` |   |
| components.vulnerability.container.ingress.path | String | `"/vulnerability"` |   |
| components.vulnerability.container.ingress.tls  | String | `{}` |   |
| components.webhook.name |  |    | Component webhook |
| components.webhook.port.http | Number | `8004` |   |
| components.webhook.replicaCount | Number | `1` |   |
| components.webhook.pod.autoscaling.maxReplicas | Number | `3` |   |
| components.webhook.pod.autoscaling.minReplicas | Number | `1` |   |
| components.webhook.pod.autoscaling.targetCPU | Number | `50` |   |
| components.webhook.pod.autoscaling.targetMemory | Number | `50` |  |
| components.webhook.pod.securityContext.fsGroup | Number | `2000` |  |
| components.webhook.container.image.pullPolicy|  String  |  `IfNotPresent`  |  |
| components.webhook.container.image.registry |  String | `docker.io/horuszup` |   |
| components.webhook.container.image.repository |   String | `horusec-webhook` |   |
| components.webhook.container.image.tag  |  Number | `v2.17.3` |   |
| components.webhook.container.livenessProbe.timeoutSeconds | Number |  `1`  |  |
| components.webhook.container.livenessProbe.periodSeconds | Number | `10` |   |
| components.webhook.container.livenessProbe.successThreshold | Number | `1` |   |
| components.webhook.container.livenessProbe.failureThreshold  | Number | `3` |   |
| components.webhook.container.readinessProbe.timeoutSeconds | Number |  `1`  |  |
| components.webhook.container.readinessProbe.periodSeconds | Number | `10` |   |
| components.webhook.container.readinessProbe.successThreshold | Number | `1` |   |
| components.webhook.container.readinessProbe.failureThreshold  | Number | `3` |   |
| components.webhook.container.resources | String | `{}` |   |
| components.webhook.container.securityContext.runAsUser | Number | `1000` |  |
| components.webhook.container.runAsNonRoot | String | `true` |  |
| components.webhook.container.ingress.enabled | String |  `true`  |  |
| components.webhook.container.ingress.host | String | ` webhook.local` |   |
| components.webhook.container.ingress.path | String | `"/webhook"` |   |
| components.webhook.container.ingress.tls  | String | `{}` |   |
| components.global|  |    | Base do arquivo YAML onde contém os componentes também conhecido com globais do horusec eles são: broker, database, jwt, keycloak, ldap. |
| components.global.port | Number | `5672` |   |
| components.global.broker.user.secretKeyRef.name | String | `horusec-broker` |   |
| components.global.broker.user.secretKeyRef.key | String | `username` |   |
| components.global.broker.password.secretKeyRef.name | String | `horusec-broker` |   |
| components.global.broker.password.secretKeyRef.key| String | `password` |   |
| components.global.database.name| String | `horusec_db`  |  |
| components.global.database.port | String | `false` |   |
| components.global.database.sslMode | String | `horusec-broker` |   |
| components.global.database.migration.image.pullpolicy| String | `IfNotPresent`  |  |
| components.global.database.migration.image.registry | String | `docker.io/horuszup` |   |
| components.global.database.migration.image.repository | String | `horusec-migrations` |   |
| components.global.database.migration.image.tag| Number | `v2.17.3` |   |
| components.global.database.migration.user.secretKeyRef.name | String | `horusec-platform-database` |   |
| components.global.database.migration.user.secretKeyRef.key | String | `username` |   |
| components.global.database.migration.password.secretKeyRef.name | String | `horusec-platform-database` |   |
| components.global.database.migration.password.secretKeyRef.key | String | `password` |   |
| components.global.jwt.secretKeyRef.name| String | `horusec-jwt`  |  |
| components.global.jwt.secretKeyRef.key | String | `jwt-token` |   |
| components.global.keycloak.clients.confidential.id | String | `auth` |   |
| components.global.keycloak.clients.confidential.secretKeyRef|  |  |   |
| components.global.keycloak.clients.public.id| String | `manager` |   |
| components.global.keycloak.realm | String | `horusec` |   |
| components.global.ldap.base| String | `dc=wimpi,dc=net`  |  |
| components.global.ldap.host | String | `ldap` |   |
| components.global.ldap.port | Number | `10389` |   |
| components.global.ldap.skipTls | String | `true`  |   |
| components.global.ldap.insecureSkipVerify| String | `true` |   |
| components.global.ldap.bindDn | String | `uid=admin,ou=systemc` |   |
| components.global.ldap.bindPassword | String | `horusec-platform-database` |   |
| components.global.ldap.bindPassword.secretKeyRef.name | String | `auth-ldap` |   |
| components.global.ldap.bindPassword.secretKeyRef.key | String | `bind-password` |   |
| components.global.ldap.userFilter | String | `"(sAMAccountName=%s)"` |   |
| components.global.ldap.adminGroup | String | `admin` |   |














