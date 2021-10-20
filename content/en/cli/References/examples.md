---
title: "Examples"
weight: 2
description: >-
  In this section, you will find CLI commands examples.
---

## **Configuration file**

See next, an example of a configuration file:
```json
{
    "horusecCliCertInsecureSkipVerify": false,
    "horusecCliCertPath": "",
    "horusecCliContainerBindProjectPath": "",
    "horusecCliCustomImages": {
        "c": "",
        "csharp": "",
        "dart": "",
        "elixir": "",
        "generic": "",
        "go": "",
        "hcl": "",
        "java": "",
        "javascript": "",
        "kotlin": "",
        "leaks": "",
        "php": "",
        "python": "",
        "ruby": "",
        "shell": "",
        "yaml": ""
    },
    "horusecCliCustomRulesPath": "",
    "horusecCliDisableDocker": false,
    "horusecCliEnableCommitAuthor": false,
    "horusecCliEnableGitHistoryAnalysis": false,
    "horusecCliEnableInformationSeverity": false,
    "horusecCliEnableOwaspDependencyCheck": false,
    "horusecCliFalsePositiveHashes": [],
    "horusecCliLogFilePath": "./tmp",
    "horusecCliFilesOrPathsToIgnore": 
    [
        "*tmp*",
        "**/.vscode/**"
    ],
    "horusecCliEnableShellcheck": false,
    "horusecCliFilterPath": "",
    "horusecCliHeaders": {},
    "horusecCliHorusecApiUri": "http://0.0.0.0:8000",
    "horusecCliJsonOutputFilepath": "",
    "horusecCliMonitorRetryInSeconds": 15,
    "horusecCliPrintOutputType": "text",
    "horusecCliProjectPath": "./",
    "horusecCliRepositoryAuthorization": "00000000-0000-0000-0000-000000000000",
    "horusecCliRepositoryName": "",
    "horusecCliReturnErrorIfFoundVulnerability": false,
    "horusecCliRiskAcceptHashes": [],
    "horusecCliSeveritiesToIgnore": [
        "INFO"
    ],
    "horusecCliTimeoutInSecondsAnalysis": 600,
    "horusecCliTimeoutInSecondsRequest": 300,
    "horusecCliToolsConfig": {
        "Bandit": {
            "istoignore": false
        },
        "Brakeman": {
            "istoignore": false
        },
        "Eslint": {
            "istoignore": false
        },
        "Flawfinder": {
            "istoignore": false
        },
        "GitLeaks": {
            "istoignore": false
        },
        "GoSec": {
            "istoignore": false
        },
        "HorusecCsharp": {
            "istoignore": false
        },
        "HorusecDart": {
            "istoignore": false
        },
        "HorusecJava": {
            "istoignore": false
        },
        "HorusecKotlin": {
            "istoignore": false
        },
        "HorusecKubernetes": {
            "istoignore": false
        },
        "HorusecLeaks": {
            "istoignore": false
        },
        "HorusecNodeJS": {
            "istoignore": false
        },
        "NpmAudit": {
            "istoignore": false
        },
        "PhpCS": {
            "istoignore": false
        },
        "Safety": {
            "istoignore": false
        },
        "SecurityCodeScan": {
            "istoignore": false
        },
        "Semgrep": {
            "istoignore": false
        },
        "ShellCheck": {
            "istoignore": false
        },
        "TfSec": {
            "istoignore": false
        },
        "YarnAudit": {
            "istoignore": false
        },
        "DotnetCli": {
            "istoignore": false
        },
         "Nancy": {
            "istoignore": false
   },


    },
    "horusecCliWorkDir": {
    "go": [],
    "csharp": [],
    "ruby": [],
    "python": [],
    "java": [],
    "kotlin": [],
    "javaScript": [],
    "leaks": [],
    "hcl": [],
    "php": [],
    "c": [],
    "yaml": [],
    "generic": [],
    "elixir": [],
    "shell": [],
    "dart": [],
    "nginx": []
    }
}
```

## **Environment variable**

```bash
export HORUSEC_CLI_HORUSEC_API_URI="http://0.0.0.0:8000"
export HORUSEC_CLI_TIMEOUT_IN_SECONDS_REQUEST="300"
export HORUSEC_CLI_TIMEOUT_IN_SECONDS_ANALYSIS="600"
export HORUSEC_CLI_MONITOR_RETRY_IN_SECONDS="15"
export HORUSEC_CLI_REPOSITORY_AUTHORIZATION="00000000-0000-0000-0000-000000000000"
export HORUSEC_CLI_PRINT_OUTPUT_TYPE="text"
export HORUSEC_CLI_JSON_OUTPUT_FILEPATH=""
export HORUSEC_CLI_SEVERITIES_TO_IGNORE="INFO"
export HORUSEC_CLI_FILES_OR_PATHS_TO_IGNORE="*tmp*, **/.vscode/**"
export HORUSEC_CLI_RETURN_ERROR_IF_FOUND_VULNERABILITY="false"
export HORUSEC_CLI_PROJECT_PATH="./"
export HORUSEC_CLI_FILTER_PATH=""
export HORUSEC_CLI_ENABLE_GIT_HISTORY_ANALYSIS="false"
export HORUSEC_CLI_CERT_INSECURE_SKIP_VERIFY="false"
export HORUSEC_CLI_CERT_PATH=""
export HORUSEC_CLI_ENABLE_COMMIT_AUTHOR="false"
export HORUSEC_CLI_REPOSITORY_NAME="config"
export HORUSEC_CLI_FALSE_POSITIVE_HASHES=""
export HORUSEC_CLI_RISK_ACCEPT_HASHES=""
export HORUSEC_CLI_TOOLS_TO_IGNORE=""
export HORUSEC_CLI_HEADERS=""
export HORUSEC_CLI_CONTAINER_BIND_PROJECT_PATH=""
export HORUSEC_CLI_DISABLE_DOCKER="false"
export HORUSEC_CLI_CUSTOM_RULES_PATH=""
export HORUSEC_CLI_ENABLE_INFORMATION_SEVERITY="false"
export HORUSEC_CLI_ENABLE_OWASP_DEPENDENCY_CHECK="false"
export HORUSEC_CLI_ENABLE_SHELLCHECK="false"
export HORUSEC_CLI_LOG_FILE_PATH="./tmp"
```

## **Examples**
You can see next, some use examples of commands using Horusec CLI:

### Example 1: Using other directory

In this example, we used: 

*  `flag -p` to inform the where the project is;
*  `flag -a` passing the authorization token to send this analysis to our web interface. 

```bash
horusec start -a="REPOSITORY_TOKEN" -p="/home/user/project"
```

### Example 2: Using the whole flag name in the directory

In this example, we used: 

* `flag --project-path` to inform where the project is;
* `flag --authorization` passing the authorization token to send the analysis to our web interface. 

```bash
horusec start --authorization="REPOSITORY_TOKEN" --project-path="/home/user/project" 
```

### Example 3: Using other whole flag name in the directory

In this example, we used: 

* `flag -p` to inform where the project is;
* A `flag -a` passing the authorization token to send the analysis to our web interface;
* A `flag -i` where we will ignore these folders and files.


```bash
horusec start -p="/home/user/project" -a="REPOSITORY_TOKEN" -i="**/node_modules/**, **/vendor/**, **/*_test.go"
```

### Example 4: To get the JSON exit 

In this example, we are using:

* `flag -p` to inform where the project is;
* `flag -a` passing the authorization token to send the analysis to our web interface;
* `flag -o` where the output is being used is `"json"` and the local file output will be `"./output.json”`.


```bash
horusec start -p="/home/user/project" -a="REPOSITORY_TOKEN" -o="json" -O="./output.json"
```

### Example 5: Using to get sonarqube exit  

In this example, we are using:

* A `flag -p` to inform where the project is;
* A `flag -a` passing the authorization token to send the analysis to our web interface;
* A `flag -o` where the output is being used is  `“sonarqube”` and the local file output will be  `“./sonarqube.json”`

```bash
horusec start -p="/home/user/project" -a="REPOSITORY_TOKEN" -o="sonarqube" -O="./sonarqube.json"
```

### Example 6: Using as docker image locally 

See, this example the `horusec start` command is already executed. When starting the image, just add the flag you want. 

When the command is used this way, you need to create a volume of your project for the image and its destination location is recommended to always be in the `/project` location. 

```bash
docker run -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/src horuszup/horusec-cli:latest horusec start -p /src -P $(pwd)
```

### Example 7: Using docker image in your pipeline

Let's use **AWS Code Build** as an example to perform the analysis

See, this example you have to use the `sh /usr/local/bin/horusec-cli.sh` command, because this script there is some necessary configurations. 

To start the analysis, see the `horusec start` command had also started, and you just have to add the flags you want.

{{% alert color="info" %}}
In pipelines it is extremely important to have the privileged configuration enabled, without this is not possible to carry out the analysis as expected.
{{% /alert %}}

```yaml
  build:
    commands:
      - docker run -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/src/horusec horuszup/horusec-cli:latest horusec start -p /src/horusec -P $(pwd)
```