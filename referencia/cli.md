---
description: 'Nesta seção, você encontra informações referentes ao HORUSEC-CLI'
---

# CLI

## O que é?

A CLI, ou Interfaces de Linhas de Comando, é a parte de código do Horusec, pela qual são rodados comandos de análise de segurança e de identificação e classificação de [**vulnerabilidades**](vulnerabilidades/). 

## Quais os comandos?

O Horusec está dividido em 2 principais comandos:

### 1. start

```text
horusec start
```

Utilizado para alterar algumas configurações, que podem ocorrer de 3 maneiras:

* Arquivos de configuração
* Variáveis de ambiente
* Flags

{% hint style="info" %}
Uma configuração pode substituir a outra, sendo a flag o nível mais alto.
{% endhint %}

### 2. version

```text
horusec version
```

Utilizado quando você deseja verificar qual é a atual versão do Horusec.

## **Flags Globais**

As flags globais que atualmente temos em nossa CLI são:

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Nome da Flag</b>
      </th>
      <th style="text-align:left"><b>Nome da Flag (curto)</b>
      </th>
      <th style="text-align:left"><b>Valor Padr&#xE3;o</b>
      </th>
      <th style="text-align:left"><b>Descri&#xE7;&#xE3;o</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">log-level</td>
      <td style="text-align:left">-</td>
      <td style="text-align:left">info</td>
      <td style="text-align:left">
        <p>Essa configura&#xE7;&#xE3;o ir&#xE1; definir qual &#xE9; o n&#xED;vel
          de log que voc&#xEA; deseja visualizar, podem estar entre:</p>
        <ul>
          <li>&quot;panic&quot;</li>
          <li>&quot;fatal&quot;</li>
          <li>&quot;error&quot;</li>
          <li>&quot;warn&quot;</li>
          <li>&quot;info&quot;</li>
          <li>&quot;debug&quot;</li>
          <li>&quot;trace&quot;</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">config-file-path</td>
      <td style="text-align:left">-</td>
      <td style="text-align:left">Diret&#xF3;rio de trabalho atual/horusec-config.json</td>
      <td style="text-align:left">Diret&#xF3;rio onde est&#xE1; localizado o arquivo de configura&#xE7;&#xE3;o.
        Com este arquivo voc&#xEA; pode realizar algumas configura&#xE7;&#xF5;es
        como por exemplo<b> </b><a href="cli.md#usando-arquivo-de-configuracao"><b>usando arquivo de configura&#xE7;&#xE3;o</b></a><b>.</b>
      </td>
    </tr>
  </tbody>
</table>

## Configurações da CLI

### Usando arquivo de configuração

Todas as configurações de flags também podem ser realizadas através de um arquivo chamado `horusec-config.json` 

A seguir, um exemplo de um arquivo de configuração:

```text
{
  "horusecCliHorusecApiUri":"http://0.0.0.0:8000",
  "horusecCliTimeoutInSecondsRequest":300,
  "horusecCliTimeoutInSecondsAnalysis":600,
  "horusecCliMonitorRetryInSeconds":15,
  "horusecCliRepositoryAuthorization":"00000000-0000-0000-0000-000000000000",
  "horusecCliPrintOutputType":"text",
  "horusecCliJsonOutputFilepath":"",
  "horusecCliTypesOfVulnerabilitiesToIgnore":"",
  "horusecCliFilesOrPathsToIgnore":"",
  "horusecCliReturnErrorIfFoundVulnerability":false,
  "horusecCliProjectPath":"",
  "horusecCliFilterPath":"",
  "horusecCliEnableGitHistoryAnalysis":false,
  "horusecCliCertPath":"",
  "horusecCliCertInsecureSkipVerify":false,
  "horusecCliEnableCommitAuthor":false,
  "horusecCliRepositoryName":"",
  "horusecCliFalsePositiveHashes":"",
  "horusecCliRiskAcceptHashes":"",
  "horusecCliContainerBindProjectPath":"",
  "horusecCliWorkDir":{
    "go":[

    ],
    "csharp":[

    ],
    "ruby":[

    ],
    "python":[

    ],
    "java":[

    ],
    "kotlin":[

    ],
    "javaScript":[

    ],
    "leaks":[

    ],
    "generic":[

    ],
    "php":[

    ],
    "c":[

    ],
    "yaml":[

    ],
    "hlc":[

    ]
  },
  "horusecCliToolsConfig":{
    "Bandit":{
      "isToIgnore":false,
      "imagePath":""
    },
    "Brakeman":{
      "isToIgnore":false,
      "imagePath":""
    },
    "Eslint":{
      "isToIgnore":false,
      "imagePath":""
    },
    "Flawfinder":{
      "isToIgnore":false,
      "imagePath":""
    },
    "GitLeaks":{
      "isToIgnore":false,
      "imagePath":""
    },
    "GoSec":{
      "isToIgnore":false,
      "imagePath":""
    },
    "HorusecCsharp":{
      "isToIgnore":false,
      "imagePath":""
    },
    "HorusecJava":{
      "isToIgnore":false,
      "imagePath":""
    },
    "HorusecKotlin":{
      "isToIgnore":false,
      "imagePath":""
    },
    "HorusecKubernetes":{
      "isToIgnore":false,
      "imagePath":""
    },
    "HorusecLeaks":{
      "isToIgnore":false,
      "imagePath":""
    },
    "HorusecNodeJS":{
      "isToIgnore":false,
      "imagePath":""
    },
    "NpmAudit":{
      "isToIgnore":false,
      "imagePath":""
    },
    "PhpCS":{
      "isToIgnore":false,
      "imagePath":""
    },
    "Safety":{
      "isToIgnore":false,
      "imagePath":""
    },
    "SecurityCodeScan":{
      "isToIgnore":false,
      "imagePath":""
    },
    "Semgrep":{
      "isToIgnore":false,
      "imagePath":""
    },
    "TfSec":{
      "isToIgnore":false,
      "imagePath":""
    },
    "YarnAudit":{
      "isToIgnore":false,
      "imagePath":""
    }
  },
  "horusecCliHeaders":{

  }
}
```

{% hint style="info" %}
Por definição padrão, o Horusec vai buscar esse arquivo de configuração automática na mesma pasta onde o comando `horusec.start` estiver sendo executado. Portanto, é recomendado que você esteja na raiz do seu projeto e que o comando mencionado esteja sendo executado lá. 
{% endhint %}

### Usando variáveis de ambiente

As configurações para que as variáveis de ambiente do usuário configurem como o Horusec será executado, devem ser feitas da seguinte maneira:

```text
export HORUSEC_CLI_HORUSEC_API_URI="http://0.0.0.0:8000"
export HORUSEC_CLI_TIMEOUT_IN_SECONDS_REQUEST="300"
export HORUSEC_CLI_TIMEOUT_IN_SECONDS_ANALYSIS="600"
export HORUSEC_CLI_MONITOR_RETRY_IN_SECONDS="15"
export HORUSEC_CLI_REPOSITORY_AUTHORIZATION="00000000-0000-0000-0000-000000000000"
export HORUSEC_CLI_PRINT_OUTPUT_TYPE="text"
export HORUSEC_CLI_JSON_OUTPUT_FILEPATH=""
export HORUSEC_CLI_TYPES_OF_VULNERABILITIES_TO_IGNORE=""
export HORUSEC_CLI_FILES_OR_PATHS_TO_IGNORE=""
export HORUSEC_CLI_RETURN_ERROR_IF_FOUND_VULNERABILITY="false"
export HORUSEC_CLI_PROJECT_PATH=""
export HORUSEC_CLI_FILTER_PATH=""
export HORUSEC_CLI_ENABLE_GIT_HISTORY_ANALYSIS="false"
export HORUSEC_CLI_CERT_INSECURE_SKIP_VERIFY="false"
export HORUSEC_CLI_CERT_PATH=""
export HORUSEC_CLI_ENABLE_COMMIT_AUTHOR="false"
export HORUSEC_CLI_REPOSITORY_NAME=""
export HORUSEC_CLI_FALSE_POSITIVE_HASHES=""
export HORUSEC_CLI_RISK_ACCEPT_HASHES=""
export HORUSEC_CLI_CONTAINER_BIND_PROJECT_PATH=""
export HORUSEC_CLI_DISABLE_DOCKER="false"
export HORUSEC_CLI_CUSTOM_RULES_PATH=""
export HORUSEC_CLI_ENABLE_INFORMATION_SEVERITY=""
```

### Usando flags no comando start

No caso do [**comando start**](cli.md#1-start), você pode passar algumas flags para alterar seus valores. 

Por exemplo, é possível utilizar uma flag `horusec start --ignore="**/*test.go"` ou mesmo usar uma flag curta `horusec start -i **/*test.go`.

Na tabela abaixo, você confere todas as flags disponíveis:

{% hint style="info" %}
Para visualizar todas as informações da tabela, arraste pro lado. 
{% endhint %}

| Variável de ambiente | Atributo no arquivo de configuração | Nome da Flag | Nome da Flag curto | Valor padrão | Descrição |
| :--- | :--- | :--- | :--- | :--- | :--- |
| HORUSEC\_CLI\_MONITOR\_RETRY\_IN\_SECONDS | horusecCliMonitorRetryInSeconds | monitor-retry-count | m | 15 | Esta configuração identificará quantos em quantos segundos quero verificar se minha análise está perto do tempo limite. O tempo mínimo é 10. |
| HORUSEC\_CLI\_PRINT\_OUTPUT\_TYPE | horusecCliPrintOutputType | output-format | o | text | A saída pode ser alterada entre `json` ou `sonarqube` ou `text` |
| HORUSEC\_CLI\_TYPES\_OF\_VULNERABILITIES\_TO\_IGNORE | horusecCliTypesOfVulnerabilitiesToIgnore | ignore-severity | s |  | Você pode especificar algum tipo de vulnerabilidade para não aplicar com um erro. Os tipos disponíveis são: "LOW, MEDIUM, HIGH". Ex .: LOW~~,~~ MEDIUM todas as vulnerabilidades do tipo configurado são ignoradas |
| HORUSEC\_CLI\_JSON\_OUTPUT\_FILEPATH | horusecCliJsonOutputFilepath | json-output-file | O |  | Caso a saída seja `sonarqube` ou `json` deverá ter um nome do arquivo a ser salvo. Ex.:`./output.json` |
| HORUSEC\_CLI\_FILES\_OR\_PATHS\_TO\_IGNORE | horusecCliFilesOrPathsToIgnore | ignore | i |  | Você pode especificar alguns caminhos absolutos de arquivos ou pastas e até padrões para ignorar no envio para análise. Ex.: `/home/user/go/project/helpers/ , /home/user/go/project/utils/logger.go, **/*tests.go` Este exemplo mostra todos os arquivos dentro da pasta helpers são ignorados, o arquivo logger.go é ignorado também e todos os arquivos terminados em tests.go. Por padrão o horusec não realiza a analise em imagens, videos, binarios, pastas de IDE, pastas de dependencias como node modules e vendor |
| HORUSEC\_CLI\_HORUSEC\_API\_URI | horusecCliHorusecApiUri | horusec-url | u | [http://0.0.0.0:8000](http://0.0.0.0:8000/) | Esta configuração tem por objetivo identificar onde estará o url onde o serviço horusec-api está hospedado |
| HORUSEC\_CLI\_TIMEOUT\_IN\_SECONDS\_REQUEST | horusecCliTimeoutInSecondsRequest | request-timeout | r | 300 | Essa configuração identificará quanto tempo desejo esperar em segundos para enviar o objeto de análise para horusec-api. O tempo mínimo é 10. |
| HORUSEC\_CLI\_TIMEOUT\_IN\_SECONDS\_ANALYSIS | horusecCliTimeoutInSecondsAnalysis | analysis-timeout | t | 600 | Esta configuração identificará quanto tempo quero esperar em segundos para realizar uma análise que inclui: "adquirindo um projeto", "enviando para análise", "saída de containers" e "adquirindo uma resposta". O tempo mínimo é 10. |
| HORUSEC\_CLI\_REPOSITORY\_AUTHORIZATION | horusecCliRepositoryAuthorization | authorization | a | 00000000-0000-0000-0000-000000000000 | Para executar a análise, você precisa do token de autorização. Este token você pode obter gerando um novo token dentro do seu repositório horusec. Ver mais [AQUI](https://github.com/ZupIT/horusec/tree/master/horusec-cli#authorization) |
| HORUSEC\_CLI\_RETURN\_ERROR\_IF\_FOUND\_VULNERABILITY | horusecCliReturnErrorIfFoundVulnerability | return-error | e | false | Essa configuração é para saber se eu quero retornar a saída \(1\) se eu encontrar alguma vulnerabilidade na análise. \(Bastante utilizado em pipelines\) |
| HORUSEC\_CLI\_PROJECT\_PATH | horusecCliProjectPath | project-path | p | ${CURRENT\_DIRECTORY} | Esta configuração serve para saber se desejo alterar o diretório de análise e não desejo executar no diretório atual. Se este valor não for passado, o Horusec perguntará se você deseja executar a análise no diretório atual. Se passar ele iniciará a análise no diretório informado por você sem perguntar nada. |
| HORUSEC\_CLI\_CERT\_INSECURE\_SKIP\_VERIFY | horusecCliCertInsecureSkipVerify | insecure-skip-verify | S | false | Isso é usado para desativar a validação do certificado. Seu uso não é recomendado fora dos casos de teste. |
| HORUSEC\_CLI\_CERT\_PATH | horusecCliCertPath | certificate-path | C |  | Usado para passar o caminho do certificado. Ex.:`-C="/home/example/ca.crt ".` |
| HORUSEC\_CLI\_FILTER\_PATH | horusecCliFilterPath | filter-path | f |  | Esta configuração serve para configurar o caminho para executar a análise e manter o caminho atual em sua base. Exemplo projeto contem backend e frontend quero rodar no path base mas desejo análisar somente o frontend então seria Ex.: `-f="./frontend"` |
| HORUSEC\_CLI\_ENABLE\_GIT\_HISTORY\_ANALYSIS | horusecCliEnableGitHistoryAnalysis | enable-git-history |  | false | Esta configuração serve para saber se eu desejo habilitar ferramentas e análises de execução do gitleaks em todo o histórico do git pesquisando vulnerabilidades. |
| HORUSEC\_CLI\_ENABLE\_COMMIT\_AUTHOR | horusecCliEnableCommitAuthor | enable-commit-author | G | false | Usado para habilitar e desabilitar o autor de commit. Se não passar o author ficará vazio. Se passar iremos pesquisar no histórico git quem é o author da vulnerabilidade encontrada pelo Horusec. Se essa opção for habilitada  o usuário deve ter git instalado na máquina e ter a pasta `.git` na base onde esteja executando a análise. |
| HORUSEC\_CLI\_REPOSITORY\_NAME | horusecCliRepositoryName | repository-name | n |  | Caso o token de autorização seja da empresa deverá enviar o nome do repositório a ser analisado, se o repositório não existir na base do Horusec iremos criar com o nome apresentado nessa configuração. |
| HORUSEC\_CLI\_FALSE\_POSITIVE\_HASHES | horusecCliFalsePositiveHashes | false-positive | F |  | Usado para ignorar vulnerabilidade nas analises e configurar com o tipo `Falso positivo` . ATENÇÃO quando você adiciona esta configuração diretamente na CLI, a configuração irá sobre escrever as configurações da interface gráfica do Horusec. |
| HORUSEC\_CLI\_RISK\_ACCEPT\_HASHES | horusecCliRiskAcceptHashes | risk-accept | R |  | Usado para ignorar vulnerabilidade nas analises e configurar com o tipo `Risco aceito` . ATENÇÃO quando você adiciona esta configuração diretamente na CLI, a configuração irá sobre escrever as configurações da interface gráfica do Horusec. |
| HORUSEC\_CLI\_CUSTOM\_RULES\_PATH | horusecCliCustomRulesPath | custom-rules-path | c |  | Usado para passar o caminho para o arquivo das regras personalizadas do horusec. Exemplo: -c="./horusec/horusec-custom-rules.json". |
| HORUSEC\_CLI\_ENABLE\_INFORMATION\_SEVERITY | horusecCliEnableInformationSeverity | information-severity | I | false |  Usado para habilitar ou desabilitar a severidade das informações da vulnerabilidade, elas podem conter falso positivo. Ex.: `I="true"` |
| HORUSEC\_CLI\_CONTAINER\_BIND\_PROJECT\_PATH | EnvContainerBindProjectPath | container-bind-project-path | P |  | Usado para passar o path do projeto para host quando rodando o horusec CLI dentro de um container.  |
| HORUSEC\_CLI\_HEADERS | horusecCliHeaders | headers |  |  | Usado para enviar headers dinâmicos to send dynamic headers on dispatch http request to horusec api service |
|  | horusecCliWorkDir |  |  |  | Esta configuração informa ao horusec o diretório correto para executar uma linguagem específica. |
|  | horusecCliToolsConfig |  |  |  | Essa configuração informa ao horusec como ele irá rodar o caminho da imagem para download. |

### **WorkDir**

O WorkDir é uma representação para executar vários projetos dentro de um diretório, que pode ser configurado por meio do arquivo `horusec-config.json.` 

Vamos supor que seu projeto seja um aplicativo netcore usando angular e tenha a seguinte estrutura:

```text
|- NetCoreProject/
|--- horusec-config.json
|--- controllers/
|--- NetCoreProject.csproj
|--- views/
|------ pages/
|------ package.json
|------ package-lock.json
```

Perceba que seu `.csproj` inicial está dentro de `/NetCoreProject` e seu `package-lock` está dentro de `/NetCoreProject/views`. Logo,  você precisará configurar o WorkDir. 

Para este exemplo, a configuração seria:

```text
{
    "horusecCliWorkDir": {
        "netCore": [
            "NetCoreProject"
        ],
        "javaScript": [
            "NetCoreProject/views"
        ]
    }
}
```

Como você pode perceber, a estrutura dos projetos será dividida por idiomas e pode suportar vários em cada um. A interface de idiomas aceita é:

```text
{
    go         []string
    netCore    []string
    ruby       []string
    python     []string
    java       []string
    kotlin     []string
    javaScript []string
    leaks      []string
    hlc        []string
}
```

## Exemplo de uso

A seguir, você pode conferir alguns exemplos práticos de comandos usando a CLI do Horusec: 

**Exemplo 1:** Usando outro diretório.   
  
Neste caso, você pode ver que, quando passa a flag `-p`, o Horusec não pergunta para você se o diretório está correto e, por isso, já começa a realizar a análise diretamente. 

```text
horusec start -a="REPOSITORY_TOKEN" -p="/home/user/project" 
```

**Exemplo 2:** Usando nome de flag completo de diretório 

```text
horusec start --authorization="REPOSITORY_TOKEN" --project-path="/home/user/project" 
```

**Exemplo 3:** Usando outro nome de flag completo de diretório

```text
horusec start -p="/home/user/project" -a="REPOSITORY_TOKEN" -i="./node_modules,./vendor,./public"
```

**Exemplo 4:** Usando para obter uma saída JSON

```text
horusec start -p="/home/user/project" -a="REPOSITORY_TOKEN" -o="json" -O="./output.json"
```

**Exemplo 5:** Usando para obter uma saída sonarqube

```text
horusec start -p="/home/user/project" -a="REPOSITORY_TOKEN" -o="sonarqube" -O="./sonarqube.json"
```

## Imagem Docker

O Horusec tem sua [imagem](https://hub.docker.com/r/horuszup/horusec-cli/tags?page=1&ordering=last_updated) que pode ser utilizada em seus pipeline ou localmente para realizar a análise.  
Veja abaixo alguns exemplos de como deve-se utilizar:

### Utilizando localmente

Veja que neste exemplo o comando `horusec start` já está ao iniciar a imagem basta você adicionar as flags que deseja.

{% hint style="warning" %}
Quando se é utilizado desta forma é necessário criar um volume do seu projeto para a imagem e seu local de destino é recomendado que seja sempre na localização _`/project`_
{% endhint %}

```text
docker run --privileged -v /path/of/my/project/local:/project -it horuszup/horusec-cli:latest -p /project
```

### Utilizando em sua pipeline

Vamos utilizar como exemplo a [AWS Code Build](https://docs.horusec.io/adicionando-o-horusec-em-sua-pipeline#aws-code-build) para realizar a análise. Veja que neste exemplo temos que utilizar o comando `sh /usr/local/bin/horusec-cli.sh`, pois neste script temos algumas configurações necessárias ao iniciar a análise perceba que o comando `horusec start` também foi iniciado basta você adicionar as flags que deseja. 

{% hint style="warning" %}
Em pipelines é de extrema importância ter a **configuração privileged habilitada**, sem ela não é possível realizar a análise da forma esperada.
{% endhint %}

```text
  build:
    commands:
       - sh /usr/local/bin/hoursec-cli.sh -p="./" -e="true"
```

