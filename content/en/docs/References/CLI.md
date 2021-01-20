---
title: CLI
weight: 43
description: You will find here informations about HORUSEC-CLI
---

---

## What is it?

The CLI, or Command Line Interface, is the Horusec code part, in which you can run commands to make safety analysis or [**vulnerabilities**](vulnerabilities/) identification and classification. 

## What are the commands?

Horusec is divided in two commands: 

### 1. start

```text
horusec start
```

When you run the start command, there are some configuration it can be changed. These configurations can happen of 3 ways:

* Configuration files;
* Environment variables; 
* Flags.

{{% alert color="info" %}}
One replacing the other and the flag is the highest level. 
{{% /alert %}}

### 2. version

It is used when you want verify which version Horusec is lately. 

## **Global flags** 

The current global flags on CLI are: 

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Flag Name</b>
      </th>
      <th style="text-align:left">Short Flag name</th>
      <th style="text-align:left"><b>Default value</b>
      </th>
      <th style="text-align:left"><b>Description</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">log-level</td>
      <td style="text-align:left">-</td>
      <td style="text-align:left">info</td>
      <td style="text-align:left">
        <p>This configuration will define which log level you want to view, it can
          be:</p>
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
      <td style="text-align:left">Actual work directory /horusec-config.json</td>
      <td style="text-align:left">Directory where the configuration file is. You can perform some configurations
        with this file, for example, <a href="cli#using-the-configuration-file"><b>using the configuration file</b></a>.</td>
    </tr>
  </tbody>
</table>

## CLI configuration

### Using the configuration file

All flags configuration can be made through a  `horusec-config.json` file.

See an example of a configuration file: 

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

{{% alert color="info" %}}
By default, Horusec will fetch the configuration file from the same directory where the `horusec.start` command is running. Therefore, it is recommended that you are at the root of your project and the mentioned command is being executed there.
{{% /alert %}}

### Using environment variables 

For the environment variables of the user configure how the horusec will run, you have to configure like the example below: 

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

### Using flags on start command 

On the [**start command**](cli#1-start) case, you can pass some flags and change its values. 

For example, you can pass some flags and alter its values`horusec start --ignore="**/*test.go"` or  even use a short flag `horusec start -i **/*test.go`

On the table below, you can see all the available flags: 

{{% alert color="info" %}}
To view all the information on table, slide to the right. 
{{% /alert %}}

<table>
  <thead>
    <tr>
      <th style="text-align:left">Enviroment variable</th>
      <th style="text-align:left">Configuration file attribute</th>
      <th style="text-align:left">Flag name</th>
      <th style="text-align:left">Short flag name</th>
      <th style="text-align:left">Default value</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_MONITOR_RETRY_IN_SECONDS</td>
      <td style="text-align:left">horusecCliMonitorRetryInSeconds</td>
      <td style="text-align:left">monitor-retry-count</td>
      <td style="text-align:left">m</td>
      <td style="text-align:left">15</td>
      <td style="text-align:left">This configuration will identify how much seconds I want to verify if
        my analysis is near the limit time. The minimal time is 10.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_PRINT_OUTPUT_TYPE</td>
      <td style="text-align:left">horusecCliPrintOutputType</td>
      <td style="text-align:left">output-format</td>
      <td style="text-align:left">o</td>
      <td style="text-align:left">text</td>
      <td style="text-align:left">The exit can be changed among <code>json</code> or<code>sonarqube</code> or <code>text</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_TYPES_OF_VULNERABILITIES_TO_IGNORE</td>
      <td style="text-align:left">horusecCliTypesOfVulnerabilitiesToIgnore</td>
      <td style="text-align:left">ignore-severity</td>
      <td style="text-align:left">s</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">
        <p>You can specify some type of vulnerability to not apply with an error.
          The available types are: &quot;LOW, MEDIUM, HIGH&quot;. Example: LOW<del>,</del> MEDIUM
          all the vulnerabilities of the configured type are ignored.</p>
        <p></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_JSON_OUTPUT_FILEPATH</td>
      <td style="text-align:left">horusecCliJsonOutputFilepath</td>
      <td style="text-align:left">json-output-file</td>
      <td style="text-align:left">O</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">In case the exit is<code>sonarqube</code> or<code>json</code> it must have
        a name to be saved.
        <br />Ex.:<code>./output.json</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_FILES_OR_PATHS_TO_IGNORE</td>
      <td style="text-align:left">horusecCliFilesOrPathsToIgnore</td>
      <td style="text-align:left">ignore</td>
      <td style="text-align:left">i</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">
        <p>You can specify some absolute path of files and</p>
        <p>folders and even patterns to ignore in the analysis dispatch. Ex.: <code>/home/user/go/project/helpers/ , /home/user/go/project/utils/logger.go, **/*tests.go</code> This
          example shows all the files inside the helpers folder that are ignored.
          The logger.go is ignored and all of the finished files in tests.go. By
          default, Horusec doesn&apos;t make image, videos, binary and IDE folders,
          dependencies folders like modules and vendor analysis.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_HORUSEC_API_URI</td>
      <td style="text-align:left">horusecCliHorusecApiUri</td>
      <td style="text-align:left">horusec-url</td>
      <td style="text-align:left">u</td>
      <td style="text-align:left"><a href="http://0.0.0.0:8000/">http://0.0.0.0:8000</a>
      </td>
      <td style="text-align:left">This configuration identifies where the URL is where the horusec-api is
        hosted.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_TIMEOUT_IN_SECONDS_REQUEST</td>
      <td style="text-align:left">horusecCliTimeoutInSecondsRequest</td>
      <td style="text-align:left">request-timeout</td>
      <td style="text-align:left">r</td>
      <td style="text-align:left">300</td>
      <td style="text-align:left">This configuration will identify how much time I want to wait in seconds
        to send the horusec-api object to analysis. The minimum time is 10.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_TIMEOUT_IN_SECONDS_ANALYSIS</td>
      <td style="text-align:left">horusecCliTimeoutInSecondsAnalysis</td>
      <td style="text-align:left">analysis-timeout</td>
      <td style="text-align:left">t</td>
      <td style="text-align:left">600</td>
      <td style="text-align:left">This configuration will identify how much time I want to wait in seconds
        to make an analysis that includes: &quot;getting a project&quot;, &quot;sending
        to analysis&quot;, &quot;containers exit&quot; and &quot;getting an answer&quot;.
        The minimum time is 10.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_REPOSITORY_AUTHORIZATION</td>
      <td style="text-align:left">horusecCliRepositoryAuthorization</td>
      <td style="text-align:left">authorization</td>
      <td style="text-align:left">a</td>
      <td style="text-align:left">00000000-0000-0000-0000-000000000000</td>
      <td style="text-align:left">To run the analysis, you need an authorization token. You can get this
        token, generating a new token in the horusec repository. For more information,
        <a
        href="https://github.com/ZupIT/horusec/tree/master/horusec-cli#authorization"><b>see here</b>
          </a>.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_RETURN_ERROR_IF_FOUND_VULNERABILITY</td>
      <td style="text-align:left">horusecCliReturnErrorIfFoundVulnerability</td>
      <td style="text-align:left">return-error</td>
      <td style="text-align:left">e</td>
      <td style="text-align:left">false</td>
      <td style="text-align:left">This configuration if you want to return the exit (1) if you find any
        vulnerability in the analysis. (Used in pipelines).</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_PROJECT_PATH</td>
      <td style="text-align:left">horusecCliProjectPath</td>
      <td style="text-align:left">project-path</td>
      <td style="text-align:left">p</td>
      <td style="text-align:left">${CURRENT_DIRECTORY}</td>
      <td style="text-align:left">This configuration works if you want to change the analysis directory.
        If this value is not passed, Horusec will ask if you want to run the analysis
        in the current directory. If it passes, it will begin the analysis in the
        informed directory without asking.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_CERT_INSECURE_SKIP_VERIFY</td>
      <td style="text-align:left">horusecCliCertInsecureSkipVerify</td>
      <td style="text-align:left">insecure-skip-verify</td>
      <td style="text-align:left">S</td>
      <td style="text-align:left">false</td>
      <td style="text-align:left">It is used to disable the certification validation. The use is not recommended
        outside test cases.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_CERT_PATH</td>
      <td style="text-align:left">horusecCliCertPath</td>
      <td style="text-align:left">certificate-path</td>
      <td style="text-align:left">C</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Using to pass the certificate path. Ex.:<code>-C=&quot;/home/example/ca.crt &quot;.</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_FILTER_PATH</td>
      <td style="text-align:left">horusecCliFilterPath</td>
      <td style="text-align:left">filter-path</td>
      <td style="text-align:left">f</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">This configuration works to configure the path to run the analysis and
        to keep the actual path in your base. Example: a project that contains
        backend and frontend, you want to run in base path, but you want to analyze
        only the frontend, it would be <code>-f=&quot;./frontend&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_ENABLE_GIT_HISTORY_ANALYSIS</td>
      <td style="text-align:left">horusecCliEnableGitHistoryAnalysis</td>
      <td style="text-align:left">enable-git-history</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">false</td>
      <td style="text-align:left">This configuration works to know if you want to enable the tools and the
        run analysis in the gitleaks in git history, searching for vulnerabilities.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_ENABLE_COMMIT_AUTHOR</td>
      <td style="text-align:left">horusecCliEnableCommitAuthor</td>
      <td style="text-align:left">enable-commit-author</td>
      <td style="text-align:left">G</td>
      <td style="text-align:left">false</td>
      <td style="text-align:left">Used to enable and disable the commit author. If the author doesn&apos;t
        pass, it will be empty. If it passes, you will search the git history of
        who is the vulnerabitity author found by Horusec. If this option is enabled
        the user must have git installed and the<code> .git</code> folder in the
        base where the analysis is running.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_REPOSITORY_NAME</td>
      <td style="text-align:left">horusecCliRepositoryName</td>
      <td style="text-align:left">repository-name</td>
      <td style="text-align:left">n</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">If the authorization token is from the organization, it must send the
        repository name to be analyze, if the repository does not exist in Horusec
        database, you will have to create a name presented in this configuration.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_FALSE_POSITIVE_HASHES</td>
      <td style="text-align:left">horusecCliFalsePositiveHashes</td>
      <td style="text-align:left">false-positive</td>
      <td style="text-align:left">F</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Usado para ignorar vulnerabilidade nas analises e configurar com o tipo <code>Falso positivo</code> .
        ATEN&#xC7;&#xC3;O quando voc&#xEA; adiciona esta configura&#xE7;&#xE3;o
        diretamente na CLI, a configura&#xE7;&#xE3;o ir&#xE1; sobre escrever as
        configura&#xE7;&#xF5;es da interface gr&#xE1;fica do Horusec.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_RISK_ACCEPT_HASHES</td>
      <td style="text-align:left">horusecCliRiskAcceptHashes</td>
      <td style="text-align:left">risk-accept</td>
      <td style="text-align:left">R</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Used to ignore the analysis vulnerabilities and to configure with <code>accepted risk</code> type.
        Pay attention when you add this configuration directly to CLI, the configuration
        will writer the graphic interface configuration of Horusec.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_CUSTOM_RULES_PATH</td>
      <td style="text-align:left">horusecCliCustomRulesPath</td>
      <td style="text-align:left">custom-rules-path</td>
      <td style="text-align:left">c</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Used to pass the path to the horusec custom rules file. Example: -c=&quot;./horusec/horusec-custom-rules.json&quot;.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_ENABLE_INFORMATION_SEVERITY</td>
      <td style="text-align:left">horusecCliEnableInformationSeverity</td>
      <td style="text-align:left">information-severity</td>
      <td style="text-align:left">I</td>
      <td style="text-align:left">false</td>
      <td style="text-align:left">Used to enable or disable information severity vulnerabilities, information
        vulnerabilities can contain a lot of false positives. Ex.: <code>I=&quot;true&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_CONTAINER_BIND_PROJECT_PATH</td>
      <td style="text-align:left">EnvContainerBindProjectPath</td>
      <td style="text-align:left">container-bind-project-path</td>
      <td style="text-align:left">P</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Used to pass project path in host when running horusec cli inside a container.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_HEADERS</td>
      <td style="text-align:left">horusecCliHeaders</td>
      <td style="text-align:left">headers</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Used to send dynamic headers on dispatch http request to horusec api service.</td>
    </tr>
    <tr>
      <td style="text-align:left"></td>
      <td style="text-align:left">horusecCliWorkDir</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">This configuration informs horusec the corrected directory to run a specific
        language.</td>
    </tr>
    <tr>
      <td style="text-align:left"></td>
      <td style="text-align:left">horusecCliToolsConfig</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">This setting tells to horusec configurations of tools how if will run
        out not and image path to download image.</td>
    </tr>
  </tbody>
</table>

### **WorkDir**

WorkDir is a representation to run several projects in a directory, that can be configured through a **horusec-config.json** file. If you project is a netcore application using angular, you have the following structure: 

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

Your initial `.csproj` is inside `/NetCoreProject` and your `package-lock` is inside  `/NetCoreProject/views`. Then, you have to configure the workdir. For this specific example, the configuration would be: 

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

As you can see, the project structure will be divided by languages and it can support several in each one of them. The language interface is: 

```text
{
    go         []string
    csharp     []string
    ruby       []string
    python     []string
    java       []string
    kotlin     []string
    javaScript []string
    leaks      []string
    hlc        []string
    generic    []string
    php        []string
    c          []string
    yaml       []string
}
```

## Examples

You can see next, some use examples of commands using Horusec CLI:

**Example 1:** Using other directory. 

You can see when a flag -p pass, Horusec doesn't ask you if the directory is correct, it just start to make the analysis:

```text
horusec start -a="REPOSITORY_TOKEN" -p="/home/user/project" 
```

**Example 2:** Using the whole flag name in the directory: 

```text
horusec start --authorization="REPOSITORY_TOKEN" --project-path="/home/user/project" 
```

**Example 3:** Using other whole flag name in the directory: 

```text
horusec start -p="/home/user/project" -a="REPOSITORY_TOKEN" -i="./node_modules,./vendor,./public"
```

**Example 4:** To get the json exit: 

```text
horusec start -p="/home/user/project" -a="REPOSITORY_TOKEN" -o="json" -O="./output.json"
```

**Example 5:** To get sonarqube exit:  

```text
horusec start -p="/home/user/project" -a="REPOSITORY_TOKEN" -o="sonarqube" -O="./sonarqube.json"
```

## Docker image

Horusec has its image that can be used in its pipeline or locally to perform the analysis. Below are some examples of how to use it:

### Using locally

See that in this example the `horusec start` command is already at the start of the image, just add the flags you want.

{{% alert color="warning" %}}
When used in this way, it is necessary to create a volume of your project for the image and its destination location is recommended to always be in the location _`/project`_
{{% /alert %}}

```text
docker run --privileged -v /path/of/my/project/local:/project -it horuszup/horusec-cli:latest -p /project
```

### Using in your pipeline

Let's use [**AWS Code Build**](https://docs.horusec.io/v/v1-eng/adicionando-o-horusec-em-sua-pipeline#aws-code-build) as an example to perform the analysis. See that in this example we have to use the command `sh /usr/local/bin/horusec-cli.sh`, because in this script we have some necessary configurations when starting the analysis. Notice that the `horusec start` command was also started, just add the flags you want .

{{% alert color="warning" %}}
In pipelines it is extremely important to have the **privileged configuration enabled**, without this is not possible to carry out the analysis as expected.
{{% /alert %}}

```text
  build:
    commands:
       - sh /usr/local/bin/hoursec-cli.sh -p="./" -e="true"
```
