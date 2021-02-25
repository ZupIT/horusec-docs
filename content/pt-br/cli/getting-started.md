---
title: "Primeiros passos"
linkTitle: "Primeiros passos"
weight: 20
description: >-
 Nessa seção você encontra exemplos de como utilizar a horusec-cli e suas opções de utilização
---

## **Flags globais**
As flags globais que atualmente temos em nossa CLI são:

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Nome da flag</b>
      </th>
      <th style="text-align:left">Nome da flag curto</th>
      <th style="text-align:left"><b>Valor padrão</b>
      </th>
      <th style="text-align:left"><b>Descrição</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">log-level</td>
      <td style="text-align:left">-</td>
      <td style="text-align:left">info</td>
      <td style="text-align:left">
        <p>Essa configuração irá definir qual é o nível de log que você deseja visualizar, podem estar entre:</p>
        <ul>
          <li>&quot;panic&quot;</li>
          <li>fatal&quot;</li>
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
      <td style="text-align:left">Diretório de trabalho atual/horusec-config.json</td>
      <td style="text-align:left">Diretório onde está localizado o arquivo de configuração. Com este arquivo você pode realizar algumas configurações como por exemplo usando arquivo de configuração.</td>
    </tr>
  </tbody>
</table>

## **Comandos**
A CLI está dividido em 3 principais comandos:


### Version 
Utilizado quando você deseja verificar qual é a atual versão do Horusec.

```bash
horusec version
``` 

### Generate 
Com este comando o Horusec irá gerar no diretório atual um arquivo de configuração onde você terá algumas opções de customização em sua análise realizada no Horusec.

```bash
horusec generate
```
### Start
Este comando irá iniciar uma análise em busca de possíveis vulnerabilidades

Utilizado para alterar algumas configurações, que podem ocorrer de 3 maneiras:

```bash
horusec start
```
#### **Opções de uso para o comando start**

#### Arquivo de configuração
Todas as configurações de flags também podem ser realizadas através de um arquivo chamado `horusec-config.json`

A seguir, um exemplo de um arquivo de configuração:

```json
{
    "horusecCliCertInsecureSkipVerify":false,
    "horusecCliCertPath":"",
    "horusecCliContainerBindProjectPath":"",
    "horusecCliCustomRulesPath":"",
    "horusecCliDisableDocker":false,
    "horusecCliEnableCommitAuthor":false,
    "horusecCliEnableGitHistoryAnalysis":false,
    "horusecCliEnableInformationSeverity":false,
    "horusecCliFalsePositiveHashes":[],
    "horusecCliFilesOrPathsToIgnore":[
        "*tmp*",
        "**/.vscode/**"
    ],
    "horusecCliFilterPath":"",
    "horusecCliHeaders":{},
    "horusecCliHorusecApiUri":"http://0.0.0.0:8000",
    "horusecCliJsonOutputFilepath":"",
    "horusecCliMonitorRetryInSeconds":15,
    "horusecCliPrintOutputType":"text",
    "horusecCliProjectPath":"/home/wilian/Downloads",
    "horusecCliRepositoryAuthorization":"00000000-0000-0000-0000-000000000000",
    "horusecCliRepositoryName":"Downloads",
    "horusecCliReturnErrorIfFoundVulnerability":false,
    "horusecCliRiskAcceptHashes":[],
    "horusecCliSeveritiesToIgnore":[
        "AUDIT",
        "INFO"
    ],
    "horusecCliTimeoutInSecondsAnalysis":600,
    "horusecCliTimeoutInSecondsRequest":300,
    "horusecCliToolsConfig":{
        "Bandit":{
            "istoignore":false,
            "imagepath":""
        },
        "Brakeman":{
            "istoignore":false,
            "imagepath":""
        },
        "Eslint":{
            "istoignore":false,
            "imagepath":""
        },
        "Flawfinder":{
            "istoignore":false,
            "imagepath":""
        },
        "GitLeaks":{
            "istoignore":false,
            "imagepath":""
        },
        "GoSec":{
            "istoignore":false,
            "imagepath":""
        },
        "HorusecCsharp":{
            "istoignore":false
        },
        "HorusecDart":{
            "istoignore":false
        },
        "HorusecJava":{
            "istoignore":false
        },
        "HorusecKotlin":{
            "istoignore":false
        },
        "HorusecKubernetes":{
            "istoignore":false
        },
        "HorusecLeaks":{
            "istoignore":false
        },
        "HorusecNodeJS":{
            "istoignore":false
        },
        "NpmAudit":{
            "istoignore":false,
            "imagepath":""
        },
        "PhpCS":{
            "istoignore":false,
            "imagepath":""
        },
        "Safety":{
            "istoignore":false,
            "imagepath":""
        },
        "SecurityCodeScan":{
            "istoignore":false,
            "imagepath":""
        },
        "Semgrep":{
            "istoignore":false,
            "imagepath":""
        },
        "ShellCheck":{
            "istoignore":false,
            "imagepath":""
        },
        "TfSec":{
            "istoignore":false,
            "imagepath":""
        },
        "YarnAudit":{
            "istoignore":false,
            "imagepath":""
        }
    },
    "horusecCliToolsToIgnore":[],
    "horusecCliWorkDir":{
        "go":[],
        "netCore":[],
        "csharp":[],
        "ruby":[],
        "python":[],
        "java":[],
        "kotlin":[],
        "javaScript":[],
        "leaks":[],
        "hcl":[],
        "php":[],
        "c":[],
        "yaml":[],
        "generic":[ ]
    }
}
```
Por definição padrão, o Horusec vai buscar esse arquivo de configuração automática na mesma pasta onde o comando `horusec.start` estiver sendo executado. Portanto, é recomendado que você esteja na raiz do seu projeto e que o comando mencionado esteja sendo executado lá.

#### **Variável de ambiente**
Você também pode utilizar algumas váriaveis de ambiente para realizar alterar as opções de configuração do horusec.

{{% alert color="info" %}}
As variáveis de ambiente sobreescreve as opções do arquivo de configuração.
{{% /alert %}}

```bash
export HORUSEC_CLI_HORUSEC_API_URI="http://0.0.0.0:8000"
export HORUSEC_CLI_TIMEOUT_IN_SECONDS_REQUEST="300"
export HORUSEC_CLI_TIMEOUT_IN_SECONDS_ANALYSIS="600"
export HORUSEC_CLI_MONITOR_RETRY_IN_SECONDS="15"
export HORUSEC_CLI_REPOSITORY_AUTHORIZATION="00000000-0000-0000-0000-000000000000"
export HORUSEC_CLI_PRINT_OUTPUT_TYPE="text"
export HORUSEC_CLI_JSON_OUTPUT_FILEPATH=""
export HORUSEC_CLI_SEVERITIES_TO_IGNORE="AUDIT, INFO"
export HORUSEC_CLI_FILES_OR_PATHS_TO_IGNORE="*tmp*, **/.vscode/**"
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
export HORUSEC_CLI_TOOLS_TO_IGNORE=""
export HORUSEC_CLI_CONTAINER_BIND_PROJECT_PATH=""
export HORUSEC_CLI_DISABLE_DOCKER="false"
export HORUSEC_CLI_CUSTOM_RULES_PATH=""
export HORUSEC_CLI_ENABLE_INFORMATION_SEVERITY="false"
```

#### **Flags**

Você pode passar algumas flags para alterar seus valores.
Por exemplo, é possível utilizar uma flag
`horusec start --ignore="**/*test.go"`
ou mesmo usar uma flag curta
`horusec start -i **/*test.go`.
Na tabela abaixo, você confere todas as flags disponíveis:

{{% alert color="info" %}}
As flags sobreescrevem as opções das variáveis de ambiente e do arquivo de configuração.
{{% /alert %}}

{{% alert color="info" %}}
Para visualizar todas as informações da tabela, arraste pro lado.
{{% /alert %}}
<table>
    <thead>
        <tr>
            <th style="text-align:left">Variável de ambiente</th>
            <th style="text-align:left">Chave no arquivo de configuração</th>
            <th style="text-align:left">Nome da Flag</th>
            <th style="text-align:left">Nome da Flag curto</th>
            <th style="text-align:left">Valor padrão</th>
            <th style="text-align:left">Descrição</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_MONITOR_RETRY_IN_SECONDS</td>
            <td style="text-align:left">horusecCliMonitorRetryInSeconds</td>
            <td style="text-align:left">monitor-retry-count</td>
            <td style="text-align:left">m</td>
            <td style="text-align:left">15</td>
            <td style="text-align:left">Esta configuração identificará quantos em quantos segundos quero verificar se minha análise está perto do tempo limite. O tempo mínimo é 10.</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_PRINT_OUTPUT_TYPE</td>
            <td style="text-align:left">horusecCliPrintOutputType</td>
            <td style="text-align:left">output-format</td>
            <td style="text-align:left">o</td>
            <td style="text-align:left">text</td>
            <td style="text-align:left">A saída pode ser alterada entre <code>json</code> ou <code>sonarqube</code> ou <code>text</code></td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_TYPES_OF_VULNERABILITIES_TO_IGNORE</td>
            <td style="text-align:left">horusecCliTypesOfVulnerabilitiesToIgnore</td>
            <td style="text-align:left">ignore-severity</td>
            <td style="text-align:left">s</td>
            <td style="text-align:left"></td>
            <td style="text-align:left">Você pode especificar algum tipo de vulnerabilidade para não aplicar com um erro. Os tipos disponíveis são: &quot;LOW, MEDIUM, HIGH&quot;. Ex .: LOW<del>,</del> MEDIUM todas as vulnerabilidades do tipo configurado são ignoradas</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_JSON_OUTPUT_FILEPATH</td>
            <td style="text-align:left">horusecCliJsonOutputFilepath</td>
            <td style="text-align:left">json-output-file</td>
            <td style="text-align:left">O</td>
            <td style="text-align:left"></td>
            <td style="text-align:left">Caso a saída seja <code>sonarqube</code> ou <code>json</code> deverá ter um nome do arquivo a ser salvo. Ex.:<code>./output.json</code></td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_FILES_OR_PATHS_TO_IGNORE</td>
            <td style="text-align:left">horusecCliFilesOrPathsToIgnore</td>
            <td style="text-align:left">ignore</td>
            <td style="text-align:left">i</td>
            <td style="text-align:left"></td>
            <td style="text-align:left">Você pode especificar alguns caminhos absolutos de arquivos ou pastas e até padrões para ignorar no envio para análise. Ex.: <code>/home/user/go/project/helpers/ , /home/user/go/project/utils/logger.go, **/*tests.go</code> Este exemplo mostra todos os arquivos dentro da pasta helpers são ignorados, o arquivo logger.go é ignorado também e todos os arquivos terminados em tests.go. Por padrão o horusec não realiza a analise em imagens, videos, binarios, pastas de IDE, pastas de dependencias como node modules e vendor</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_HORUSEC_API_URI</td>
            <td style="text-align:left">horusecCliHorusecApiUri</td>
            <td style="text-align:left">horusec-url</td>
            <td style="text-align:left">u</td>
            <td style="text-align:left"><a href="http://0.0.0.0:8000/">http://0.0.0.0:8000</a></td>
            <td style="text-align:left">Esta configuração tem por objetivo identificar onde estará o url onde o serviço horusec-api está hospedado</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_TIMEOUT_IN_SECONDS_REQUEST</td>
            <td style="text-align:left">horusecCliTimeoutInSecondsRequest</td>
            <td style="text-align:left">request-timeout</td>
            <td style="text-align:left">r</td>
            <td style="text-align:left">300</td>
            <td style="text-align:left">Essa configuração identificará quanto tempo desejo esperar em segundos para enviar o objeto de análise para horusec-api. O tempo mínimo é 10.</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_TIMEOUT_IN_SECONDS_ANALYSIS</td>
            <td style="text-align:left">horusecCliTimeoutInSecondsAnalysis</td>
            <td style="text-align:left">analysis-timeout</td>
            <td style="text-align:left">t</td>
            <td style="text-align:left">600</td>
            <td style="text-align:left">Esta configuração identificará quanto tempo quero esperar em segundos para realizar uma análise que inclui: &quot;adquirindo um projeto&quot;, &quot;enviando para análise&quot;, &quot;saída de containers&quot; e &quot;adquirindo uma resposta&quot;. O tempo mínimo é 10.</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_REPOSITORY_AUTHORIZATION</td>
            <td style="text-align:left">horusecCliRepositoryAuthorization</td>
            <td style="text-align:left">authorization</td>
            <td style="text-align:left">a</td>
            <td style="text-align:left">00000000-0000-0000-0000-000000000000</td>
            <td style="text-align:left">Para executar a análise, você precisa do token de autorização. Este token você pode obter gerando um novo token dentro do seu repositório horusec. Ver mais <a href="https://github.com/ZupIT/horusec/tree/master/horusec-cli#authorization">AQUI</a></td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_RETURN_ERROR_IF_FOUND_VULNERABILITY</td>
            <td style="text-align:left">horusecCliReturnErrorIfFoundVulnerability</td>
            <td style="text-align:left">return-error</td>
            <td style="text-align:left">e</td>
            <td style="text-align:left">false</td>
            <td style="text-align:left">Essa configuração é para saber se eu quero retornar a saída (1) se eu encontrar alguma vulnerabilidade na análise. (Bastante utilizado em pipelines)</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_PROJECT_PATH</td>
            <td style="text-align:left">horusecCliProjectPath</td>
            <td style="text-align:left">project-path</td>
            <td style="text-align:left">p</td>
            <td style="text-align:left">${CURRENT_DIRECTORY}</td>
            <td style="text-align:left">Esta configuração serve para saber se desejo alterar o diretório de análise e não desejo executar no diretório atual. Se este valor não for passado, o Horusec perguntará se você deseja executar a análise no diretório atual. Se passar ele iniciará a análise no diretório informado por você sem perguntar nada.</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_CERT_INSECURE_SKIP_VERIFY</td>
            <td style="text-align:left">horusecCliCertInsecureSkipVerify</td>
            <td style="text-align:left">insecure-skip-verify</td>
            <td style="text-align:left">S</td>
            <td style="text-align:left">false</td>
            <td style="text-align:left">Isso é usado para desativar a validação do certificado. Seu uso não é recomendado fora dos casos de teste.</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_CERT_PATH</td>
            <td style="text-align:left">horusecCliCertPath</td>
            <td style="text-align:left">certificate-path</td>
            <td style="text-align:left">C</td>
            <td style="text-align:left"></td>
            <td style="text-align:left">Usado para passar o caminho do certificado. Ex.:<code>-C=&quot;/home/example/ca.crt &quot;.</code></td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_FILTER_PATH</td>
            <td style="text-align:left">horusecCliFilterPath</td>
            <td style="text-align:left">filter-path</td>
            <td style="text-align:left">f</td>
            <td style="text-align:left"></td>
            <td style="text-align:left">Esta configuração serve para configurar o caminho para executar a análise e manter o caminho atual em sua base. Exemplo projeto contem backend e frontend quero rodar no path base mas desejo análisar somente o frontend então seria Ex.: <code>-f=&quot;./frontend&quot;</code></td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_ENABLE_GIT_HISTORY_ANALYSIS</td>
            <td style="text-align:left">horusecCliEnableGitHistoryAnalysis</td>
            <td style="text-align:left">enable-git-history</td>
            <td style="text-align:left"></td>
            <td style="text-align:left">false</td>
            <td style="text-align:left">Esta configuração serve para saber se eu desejo habilitar ferramentas e análises de execução do gitleaks em todo o histórico do git pesquisando vulnerabilidades.</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_ENABLE_COMMIT_AUTHOR</td>
            <td style="text-align:left">horusecCliEnableCommitAuthor</td>
            <td style="text-align:left">enable-commit-author</td>
            <td style="text-align:left">G</td>
            <td style="text-align:left">false</td>
            <td style="text-align:left">Usado para habilitar e desabilitar o autor de commit. Se não passar o author ficará vazio. Se passar iremos pesquisar no histórico git quem é o author da vulnerabilidade encontrada pelo Horusec. Se essa opção for habilitada  o usuário deve ter git instalado na máquina e ter a pasta <code>.git</code> na base onde esteja executando a análise.</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_REPOSITORY_NAME</td>
            <td style="text-align:left">horusecCliRepositoryName</td>
            <td style="text-align:left">repository-name</td>
            <td style="text-align:left">n</td>
            <td style="text-align:left"></td>
            <td style="text-align:left">Caso o token de autorização seja da empresa deverá enviar o nome do repositório a ser analisado, se o repositório não existir na base do Horusec iremos criar com o nome apresentado nessa configuração.</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_FALSE_POSITIVE_HASHES</td>
            <td style="text-align:left">horusecCliFalsePositiveHashes</td>
            <td style="text-align:left">false-positive</td>
            <td style="text-align:left">F</td>
            <td style="text-align:left"></td>
            <td style="text-align:left">Usado para ignorar vulnerabilidade nas analises e configurar com o tipo <code>Falso positivo</code> . ATENÇÃO quando você adiciona esta configuração diretamente na CLI, a configuração irá sobre escrever as configurações da interface gráfica do Horusec.</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_RISK_ACCEPT_HASHES</td>
            <td style="text-align:left">horusecCliRiskAcceptHashes</td>
            <td style="text-align:left">risk-accept</td>
            <td style="text-align:left">R</td>
            <td style="text-align:left"></td>
            <td style="text-align:left">Usado para ignorar vulnerabilidade nas analises e configurar com o tipo <code>Risco aceito</code> . ATENÇÃO quando você adiciona esta configuração diretamente na CLI, a configuração irá sobre escrever as configurações da interface gráfica do Horusec.</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_CUSTOM_RULES_PATH</td>
            <td style="text-align:left">horusecCliCustomRulesPath</td>
            <td style="text-align:left">custom-rules-path</td>
            <td style="text-align:left">c</td>
            <td style="text-align:left"></td>
            <td style="text-align:left">Usado para passar o caminho para o arquivo das regras personalizadas do horusec. Exemplo: -c=&quot;./horusec/horusec-custom-rules.json&quot;.</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_ENABLE_INFORMATION_SEVERITY</td>
            <td style="text-align:left">horusecCliEnableInformationSeverity</td>
            <td style="text-align:left">information-severity</td>
            <td style="text-align:left">I</td>
            <td style="text-align:left">false</td>
            <td style="text-align:left">Usado para habilitar ou desabilitar a severidade das informações da vulnerabilidade, elas podem conter falso positivo. Ex.: <code>I=&quot;true&quot;</code></td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_DISABLE_DOCKER</td>
            <td style="text-align:left">horusecCliDisableDocker</td>
            <td style="text-align:left">disable-docker</td>
            <td style="text-align:left">D</td>
            <td style="text-align:left">false</td>
            <td style="text-align:left">Used to run horusec without docker if enabled it will only run the following tools: horusec-csharp, horusec-kotlin, horusec-kubernetes, horusec-leaks, horusec-nodejs, horusec-dart. Example: -D=\"true\"</code></td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_CONTAINER_BIND_PROJECT_PATH</td>
            <td style="text-align:left">EnvContainerBindProjectPath</td>
            <td style="text-align:left">container-bind-project-path</td>
            <td style="text-align:left">P</td>
            <td style="text-align:left"></td>
            <td style="text-align:left">Usado para passar o path do projeto para host quando rodando o horusec CLI dentro de um container.</td>
        </tr>
        <tr>
            <td style="text-align:left">HORUSEC_CLI_HEADERS</td>
            <td style="text-align:left">horusecCliHeaders</td>
            <td style="text-align:left">headers</td>
            <td style="text-align:left"></td>
            <td style="text-align:left"></td>
            <td style="text-align:left">Usado para enviar headers dinâmicos to send dynamic headers on dispatch http request to horusec api service</td>
        </tr>
        <tr>
            <td style="text-align:left"></td>
            <td style="text-align:left">horusecCliWorkDir</td>
            <td style="text-align:left"></td>
            <td style="text-align:left"></td>
            <td style="text-align:left"></td>
            <td style="text-align:left">Esta configuração informa ao horusec o diretório correto para executar uma linguagem específica.</td>
        </tr>
        <tr>
            <td style="text-align:left"></td>
            <td style="text-align:left">horusecCliToolsConfig</td>
            <td style="text-align:left"></td>
            <td style="text-align:left"></td>
            <td style="text-align:left"></td>
            <td style="text-align:left">Essa configuração informa ao horusec como ele irá rodar o caminho da imagem para download.</td>
        </tr>
    </tbody>
</table>


## **Exemplos**
A seguir, você pode conferir alguns exemplos práticos de comandos usando a CLI do Horusec:

### Exemplo 1: Usando outro diretório.
Neste exemplo estamos utilizando a flag -p para informar o local onde está o projeto, a flag -a passando o token de autorização a fim de enviar essa análise para nossa interface web
```bash
horusec start -a="REPOSITORY_TOKEN" -p="/home/user/project" 
```

### Exemplo 2: Usando nome de flag completo de diretório
Neste exemplo estamos utilizando a flag --project-path para informar o local onde está o projeto, a flag --authorization passando o token de autorização a fim de enviar essa análise para nossa interface web
```bash
horusec start --authorization="REPOSITORY_TOKEN" --project-path="/home/user/project" 
```

### Exemplo 3: Usando outro nome de flag completo de diretório
Neste exemplo estamos utilizando a flag -p para informar o local onde está o projeto, a flag -a passando o token de autorização a fim de enviar essa análise para nossa interface web, a flag -i onde iremos ignorar essas pastas ou arquivos
```bash
horusec start -p="/home/user/project" -a="REPOSITORY_TOKEN" -i="**/node_modules/**, **/vendor/**, **/*_test.go"
```

### Exemplo 4: Usando para obter uma saída JSON
Neste exemplo estamos utilizando a flag -p para informar o local onde está o projeto, a flag -a passando o token de autorização a fim de enviar essa análise para nossa interface web, a flag -o onde o output está sendo utilizado é “json” e o local do arquivo de saída será em “./output.json”
```bash
horusec start -p="/home/user/project" -a="REPOSITORY_TOKEN" -o="json" -O="./output.json"
```

### Exemplo 5: Usando para obter uma saída sonarqube
Neste exemplo estamos utilizando a flag -p para informar o local onde está o projeto, a flag -a passando o token de autorização a fim de enviar essa análise para nossa interface web, a flag -o onde o output está sendo utilizado é “sonarqube” e o local do arquivo de saída será em “./sonarqube.json”
```bash
horusec start -p="/home/user/project" -a="REPOSITORY_TOKEN" -o="sonarqube" -O="./sonarqube.json"
```

### Exemplo 6: Usando como imagem docker localmente
Veja que neste exemplo o comando horusec start já está ao iniciar a imagem basta você adicionar as flags que deseja.

Quando se é utilizado desta forma é necessário criar um volume do seu projeto para a imagem e seu local de destino é recomendado que seja sempre na localização /project

```bash
docker run -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/src horuszup/horusec-cli:latest horusec start -p /src -P $(pwd)
```

### Exemplo 7: Usando como imagem docker em sua pipeline
Vamos utilizar como exemplo a AWS Code Build para realizar a análise. Veja que neste exemplo estamos utilizando
* Em pipelines é de extrema importância ter a configuração privileged habilitada, sem ela não é possível realizar a análise da forma esperada.
* Um volume entre o docker.sock local e o docker.sock da imagem
  * `-v /var/run/docker.sock:/var/run/docker.sock`
* Um volume entre seu projeto local e o diretório onde ele será armazenado na imagem
  * `-v $(pwd):/src/horusec`
* Iniciamos o horusec informando o local onde está o projeto
  * `horusec start -p /src/horusec`
* Informamos onde está o diretório para realizar bind do volume local
  * `-P $(pwd)`

```yaml
  build:
    commands:
      - docker run -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/src/horusec horuszup/horusec-cli:latest horusec start -p /src/horusec -P $(pwd)
```