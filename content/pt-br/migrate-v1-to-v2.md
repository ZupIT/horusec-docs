---
title: Migrando da versão 1.0 para a 2.0
weight: 0
description: >-
  Nesta seção, você vai encontrar como realizar a migração do Horusec da versão 1.0 para 2.0.
---

No dia 20 de Maio de 2021, o Horusec fez uma mudança em seus repositórios no Github: 

- Agora o repositório principal **https://github.com/ZupIT/horusec** passa a ser apenas de propriedade da [**Horusec-CLI**](/docs/pt-br/cli).

- E toda a aplicação Web foi migrada para o repositório **https://github.com/ZupIT/horusec-platform**.

Com isso os seguintes serviços passam a ter um novo repositório:
  * [**Horusec-API**](/docs/pt-br/web/services/api)
  * [**Horusec-Analytic**](/docs/pt-br/web/services/analytic)
  * [**Horusec-Auth**](/docs/pt-br/web/services/auth)
  * [**Horusec-Webhook**](/docs/pt-br/web/services/webhook)
  * [**Horusec-Messages**](/docs/pt-br/web/services/messages).

Outras mudanças também ocorreram:
  * Foi criado um novo serviço [**Horusec-Vulnerability**](/docs/pt-br/web/services/vulnerability), responsável pela gestão de todas as vulnerabilidades encontradas pela Horusec-CLI.
  * O serviço Horusec-Account foi renomeado para [**Horusec-Core**](/docs/pt-br/web/services/core) para representar melhor sua função dentro da plataforma.

### Requisitos:
Veja abaixo os requisitos obrigatórios na versão 2.0:
- **RabbitMQ** versão miníma 3.0;
- **PostgreSQL** versão miníma 11.6;


O Postgresql já era uma requisito na antiga versão do Horusec com apenas um banco de dados e o nome foi sugerido pelo time em seus arquivos de configuração:
  - `horusec_db`

Agora na nova versão do Horusec, você precisa criar um novo banco de dados no PostgreSQL e o nome sugerido pelo time em seus arquivos de configuração é:
  - `horusec_analytic_db`


Foi necessário separar os banco de dados porque o serviço Horusec-API é carregado com muita escrita e o Horusec-Analytic com muita leitura e isso são pontos críticos da solução por ter uma alta disponibilidade.

### Opcionais:
Não houve alteração no requisito opcional, ele continua sendo:

- A conexão com um servidor [**SMTP**](/docs/pt-br/tutorials/how-to-enable-disable-messaging-service) para disparos de e-mails.

### Migração:
Para prosseguir com a migração, siga os passos abaixo:

**Passo 1:** Atualize os serviços para a última versão disponível **v2.12.0**:
 - [**Horusec-API**](https://hub.docker.com/r/horuszup/horusec-api)
 - [**Horusec-Analytic**](https://hub.docker.com/r/horuszup/horusec-analytic)
 - [**Horusec-Auth**](https://hub.docker.com/r/horuszup/horusec-auth)
 - [**Horusec-Webhook**](https://hub.docker.com/r/horuszup/horusec-webhook)
 - [**Horusec-Messages**](https://hub.docker.com/r/horuszup/horusec-messages)
 - [**Horusec-Vulnerability**](https://hub.docker.com/r/horuszup/horusec-vulnerability)
 - [**Horusec-Core**](https://hub.docker.com/r/horuszup/horusec-core)

**Passo 2:** Realize a sincronização dos dados para a nova versão:
  * Adicione as váriaveis de ambiente e seus valores no serviço **Horusec-Analytic**
<table>
    <thead>
        <tr>
            <th style="text-align:left">Variável de ambiente</th>
            <th style="text-align:left">Valor</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:left">HORUSEC_DATABASE_SQL_URI</td>
            <td style="text-align:left">postgresql://root:root@postgresql:5432/horusec_analytic_db?sslmode=disable</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_DATABASE_HORUSEC_SQL_URI</td>
            <td style="text-align:left">{{CONEXÃO COM O BANCO DE DADOS EXISTENTE}}</td>
        </tr>
    </tbody>
</table>


1. **Helm**:
Se você estiver utilizando helm, já foi adicionado um job dentro dos arquivos do helm para ser acionado quando essa nova versão for executada.

2. **Docker-Compose**:
Se estiver utilizando o docker-compose, é necessário rodar o script de migração da antiga versão para a nova. Para isso, rode os comandos abaixo:

```bash
docker exec \
-e HORUSEC_DATABASE_SQL_URI=postgresql://root:root@postgresql:5432/horusec_analytic_db?sslmode=disable \
-e HORUSEC_DATABASE_HORUSEC_SQL_URI=postgresql://root:root@postgresql:5432/horusec_analytic_db?sslmode=disable \
-i horusec-analytic /analytic/horusec-analytic-v1-to-v2-migrate
```

```bash
docker exec \
-e HORUSEC_DATABASE_SQL_URI=postgresql://root:root@postgresql:5432/horusec_analytic_db?sslmode=disable \
-i horusec-api /api/horusec-api-v1-to-v2-migrate
```

**Passo 3:** [**Atualize a CLI**](/docs/pt-br/cli/installation) para a última versão.
