---
title: YAML definition
weight: 31
description: In this section, you will find YAML's definition.
---

| **Key** | **Type** | Default Value | **Definition** |
| :--- | :--- | :--- | :--- |
| components.analytic.name | String | `analytic` |  Component's name (If it's not configured it can be analytic's default)   |
| components.analytic.port.http | Number | `8005` | Ports to be exposed |
| components.analytic.replicaCount | Number | `1` |  Total replicas (if not configured it will be by default 1).  |
| components.analytic.pod | String | ✓ | Pod definitions https://kubernetes.io/docs/concepts/workloads/pods/ | String | ✓ |  Component's name (if not configured it will be by default analytic).  |
| components.analytic.pod.autoscaling | Number | ✓ | Autoscaling definition https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/. | Number | ✓ |  Component's name (if not configured it will be by default analytic).   |
| components.analytic.pod.autoscaling.maxReplicas | Number | `3` | Maximum pods available in the application https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/#autoscaling-on-multiple-metrics-and-custom-metrics (if not configured it will be by default 3). |
| components.analytic.pod.autoscaling.minReplicas | Number | `1` |  Minimum pods available in the application https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/#autoscaling-on-multiple-metrics-and-custom-metrics (if not configured it will be by default 1).  |
|components.analytic.pod.autoscaling.targetCPU | Number | `50` | Amount of resources available by pod: CPU https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/#autoscaling-on-multiple-metrics-and-custom-metrics (if not configured it will be by default 50). |
| components.analytic.pod.autoscaling.targetMemory | Number | `50`| Amount of resources available by pod: Memory https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/#autoscaling-on-multiple-metrics-and-custom-metrics  (if not configured it will be by default 50). |
| components.analytic.securityContext | Number | ✓ | Security context https://kubernetes.io/docs/tasks/configure-pod-container/security-context/. |
| components.analytic.securityContext.fsGroup | Number | `2000` | Security's group IDhttps://kubernetes.io/docs/tasks/configure-pod-container/security-context/  (if not configured it will be by default 2000).  |
| components.analytic.container | Number | ✓ | Container's definition https://kubernetes.io/docs/concepts/containers/|
| components.analytic.container.image | String | ✓ |  Definitions for the image's component https://kubernetes.io/docs/concepts/containers/images/  |
| components.analytic.container.image.pullPolicy | String | IfNotPresent | Definition for image's download https://kubernetes.io/docs/concepts/containers/images/#updating-images  (if not configured it will be by default IfNotPresent). | 
| components.analytic.container.image.registry | String | docker.io/horuszup | 
Definitions for the image's registry download https://kubernetes.io/docs/concepts/containers/images/#updating-images. |
| components.analytic.container.image.repository | String | horusec-analytic | Repository definition for image download https://kubernetes.io/docs/concepts/containers/images/#updating-images (if not configured it will be by default horusec-analytic). |
| components.analytic.container.image.tag | Number | `v2.17.3` | Tag versioning definitions for image download https://kubernetes.io/docs/concepts/containers/images/#updating-images (if not configured it will be by default v2.17.3). |
| components.analytic.container.livenessProbe | Number | - | Waiting time settings for verification command if the service is in good health  https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/ | 
| components.analytic.container.livenessProbe.timeoutSeconds | Number | `1` |  https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes (if not configured it will be by default 1). | 
| components.analytic.container.livenessProbe.periodSeconds | Number | `10` | https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes (if not configured it will be by default 10). | 
| components.analytic.container.livenessProbe.successThreshold | Number | `1` | https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes (if not configured it will be by default 1). | 
| components.analytic.container.livenessProbe.failureThreshold | Number | `3` | https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes (if not configured it will be by default 3). | 
| components.analytic.container.readinessProbe | Number | - | Waiting time settings for verification command if the service is in good health https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/. | 
| components.analytic.container.readinessProbe | Number | `1` | Definitions for image's download https://kubernetes.io/docs/concepts/containers/images/#updating-images  (if not configured it will be by default IfNotPresent). | 
| components.analytic.container.readinessProbe.timeoutSeconds | Number | `1` | https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes (if not configured it will be by default 1). | 
| omponents.analytic.container.readinessProbe.periodSeconds | Number | `10` | https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes (if not configured it will be by default 10). | 
| omponents.analytic.container.readinessProbe.successThreshold | Number | `1` | https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes (if not configured it will be by default 1). | 
| omponents.analytic.container.readinessProbe.failureThreshold | Number | `3` | https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes (if not configured it will be by default 3). | 
| omponents.analytic.container.resources | String | {} | Definitions for the resources threshold by requests  https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#specify-a-memory-request-and-a-memory-limit (if not configured it will be by default {} empty). | 
| components.analytic.container.securityContext | -| - | Security context for the container  https://kubernetes.io/docs/tasks/configure-pod-container/security-context/. | 
| components.analytic.container.securityContext.runAsUser | Number | `1000` | User ID of the security's group https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ (if not configured it will be by default 1000). | 
| components.analytic.container.securityContext.runAsNonRoot | String | `true` | Indicates the containers must be executed as user and not root https://kubernetes.io/blog/2016/08/security-best-practices-kubernetes-deployment/ (if not configured it will be by default true). |
| components.analytic.container.ingress | - | - | What is ingress https://kubernetes.io/docs/concepts/services-networking/ingress/. | 
| components.analytic.container.ingress.enabled | String | `true` | Enabled ingress for the  component (if not configured it will be by default true). | 
| components.analytic.container.ingress.host | String | `analytic.local` | Host definition for the component (if not configured it will be by default  analytic.local). | 
| components.analytic.container.ingress.path | String | `"/analytic"` | Path definition for the component (if not configured it will be by default  /analytic). | 
| components.analytic.container.ingress.tls | String | `{} ` | TLS configurations (Transport Layer Security) do componente https://kubernetes.io/docs/concepts/services-networking/ingress/#tls (if not configured it will be by default {} empty). |
|  components.analytic.database | - | - | Definition for the component's database connection  |
|  components.analytic.database.name | String | `horusec_analytic_db` | (if not configured it will be by defaulthorusec_analytic_db).  |
|  components.analytic.database.host | String | `""` | Connection host (if not configured it will be by default postgresql).  |
|  components.analytic.database.port | Number | `5432` | Definition for the database port connection (if not configured it will be by default 5432).  |
|  components.analytic.database.sslMode | String | `false` | Ssl is enable for the component (if not configured it will be by default false).  |
|  components.analytic.database | String | `""` | Error message to be displayed.  |
| components.analytic.database.migration | String | `""` | Error message to be displayed.  |
| components.analytic.database.migration.image | - |  | Definitions for the component's migration image https://kubernetes.io/docs/concepts/containers/images/.  |
| components.analytic.database.migration.image.pullPolicy | String | `IfNotPresent` | Error message to be displayed.  |
| components.analytic.database.migration.image.registry | String | `docker.io/horuszup` | Definitions to register the image's download https://kubernetes.io/docs/concepts/containers/images/#updating-images (if not configured it will be by default docker.io/horuszup).  |
|components.analytic.database.migration.image.repository | String | `horusec-migrations` | Definitions for the repository of image's download https://kubernetes.io/docs/concepts/containers/images/#updating-images (if not configured it will be by default horusec-migration).  |
| components.analytic.database.migration.image.tag | Number | `"v2.17.3` | Versioning tag's definition to download image https://kubernetes.io/docs/concepts/containers/images/#updating-images (if not configured it will be by default v2.17.3).  |
| components.analytic.database.migration.user | - |  | User definition to database connections.  |
| components.analytic.database.migration.user.secretKeyRef | - |  | Definitions on how to get the user through kubernetes secrets https://kubernetes.io/docs/concepts/configuration/secret/.  |
| components.analytic.database.migration.user.secretKeyRef.name | String | `horusec-analytic-database` | Secret's definition group  (if not configured it will be by default horusec-analytic-database).  |
|components.analytic.database.migration.user.secretKeyRef.key  | String | `username` | Key to get secret's values (if not configured it will be username default).  |
| components.analytic.database.migration.password | - |  | Password definition for database connection.  |
| components.analytic.database.migration.password.secretKeyRef | - |  | Definitions on how to get password through kubernetes secrets https://kubernetes.io/docs/concepts/configuration/secret/ |
| components.analytic.database.migration.password.secretKeyRef.name | String | `horusec-analytic-database` | Secret's definition group  (if not configured it will be by default horusec-analytic-database).  |
| components.analytic.database.migration.password.secretKeyRef.key | String | `password` |  Key to get secret's values (if not configured it will be by default password).  |
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
| components.api.container.ingress.enabled| String | `true` |   |
| components.api.container.ingress.host | String | `api.local` |   |
| components.api.container.ingress.path | String | `"/api"` |   |
| components.api.container.ingress.tls | String | `{}` |   | 
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
| components.global|  |    | YAML file base where there are components also known as Horusec's global, they are: broker, database, jwt, keycloak, ldap. |
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














