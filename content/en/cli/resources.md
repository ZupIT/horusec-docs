---
title: "Resources"
linkTitle: "Resources"
weight: 20
description: >-
 In this section, you will find examples and options to use Horusec-CLI. 
---

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
        <p>This configuration will define which log level you want to view, it can be:</p>
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
      <td style="text-align:left">Directory where the configuration file is. You can perform some configurations with this file, for example, using the configuration file.</td>
    </tr>
  </tbody>
</table>

## **Commands**
CLI is divided in 3 main commands:


### Version 
Command used to verify the current Horusec version. To use it, just run:

```bash
horusec version
``` 

### Generate 
Command used to generate a configuration file in the current directory and it has some [customization options](/docs/cli/resources/#global-flags) in the analysis made by Horusec. 


{{% alert color="info" %}}
These configuration options are flags that you can check on the table in the end of the page, the third use option is the Start command. 
{{% /alert %}}

```bash
horusec generate
```
### Start
Command used to start an analysis searching possible vulnerabilities and/or to alter some configurations.

When you run the start command, there are some configuration it can be changed. These configurations can happen of 3 ways:

```bash
horusec start
```
#### **Use options for the start command**

#### 1. Configuration file

On this case, all flags configuration can be performed through a file called `horusec-config.json`

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
    "horusecCliFalsePositiveHashes": [],
    "horusecCliFilesOrPathsToIgnore": [
        "*tmp*",
        "**/.vscode/**"
    ],
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
        }
    },
    "horusecCliToolsToIgnore": [],
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
        "generic": []
    }
}
```
By default, Horusec will search for this automated configuration file in the same folder the `horusec.start` command is executed.

Therefore, you should be in the root of your project, just like the start command. 

#### **2. Environment variable**

Here, you can use some environment variables to alter Horusec's configuration options. 

{{% alert color="info" %}}
It's important to remember the environment variables overwrite the configuration files options.
{{% /alert %}}

```bash
export HORUSEC_CLI_HORUSEC_API_URI="http://0.0.0.0:8000"
export HORUSEC_CLI_TIMEOUT_IN_SECONDS_REQUEST="300"
export HORUSEC_CLI_TIMEOUT_IN_SECONDS_ANALYSIS="600"
export HORUSEC_CLI_MONITOR_RETRY_IN_SECONDS="15"
export HORUSEC_CLI_REPOSITORY_AUTHORIZATION="00000000-0000-0000-0000-000000000000"
export HORUSEC_CLI_PRINT_OUTPUT_TYPE="text"
export HORUSEC_CLI_JSON_OUTPUT_FILEPATH=""
export HORUSEC_CLI_SEVERITIES_TO_IGNORE="INFO"
export HORUSEC_CLI_FILES_OR_PATHS_TO_IGNORE="*tmp* **/.vscode/**"
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
```

#### **3. Flags**

You can pass some flags to alter your values.

For example, it is possible to use a flag
`horusec start --ignore="**/*test.go"`
or even use a short flag
`horusec start -i **/*test.go`.

{{% alert color="info" %}}
The flags overwrite the environment variables options and the file configuration.
{{% /alert %}}

On the table below, you can see all the available flags. To see it better, just swipe right: 


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
      <td style="text-align:left">HORUSEC_CLI_SEVERITIES_TO_IGNORE</td>
      <td style="text-align:left">horusecCliSeveritiesToIgnore</td>
      <td style="text-align:left">ignore-severity</td>
      <td style="text-align:left">s</td>
      <td style="text-align:left">INFO</td>
      <td style="text-align:left">Esta configuração identifica quais níveis de severidade você deseja ignorar, pode ser entre: CRITICAL, HIGH, MEDIUM, LOW, UNKNOWN, INFO</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_PRINT_OUTPUT_TYPE</td>
      <td style="text-align:left">horusecCliPrintOutputType</td>
      <td style="text-align:left">output-format</td>
      <td style="text-align:left">o</td>
      <td style="text-align:left">text</td>
      <td style="text-align:left">The exit can be changed among <code>json</code> or <code>sonarqube </code> or <code>text</code>
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
          The available types are: &quot;LOW, MEDIUM, HIGH&quot;. Example: LOW <del>,</del> MEDIUM
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
      <td style="text-align:left">In case the exit is <code>sonarqube</code> or <code>json</code> it must have
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
        to make an analysis that includes: &quot;getting a project, &quot;sending
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
        href="/docs/tutorials/how-to-create-an-authorization-token/"><b>see here</b>
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
      <td style="text-align:left">Used to ignore the vulnerabilities in the analyis and configure with the type <code>False positive</code>.
        Pay Attention: when you add this configuration directly on CLI, it will overwrite Horusec's graphic interface configuration.</td>
    </tr>
    <tr>
      <td style="text-align:left">HORUSEC_CLI_RISK_ACCEPT_HASHES</td>
      <td style="text-align:left">horusecCliRiskAcceptHashes</td>
      <td style="text-align:left">risk-accept</td>
      <td style="text-align:left">R</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Used to ignore the analysis vulnerabilities and to configure with <code>accepted risk</code> type.
        Pay attention when you add this configuration directly to CLI, the configuration
        will write the graphic interface configuration of Horusec.</td>
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
      <td style="text-align:left">horusecCliContainerBindProjectPath</td>
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
      <td style="text-align:left">{}</td>
      <td style="text-align:left">Used to send dynamic headers on dispatch http request to horusec api service.</td>
    </tr>
    <tr>
      <td style="text-align:left"></td>
      <td style="text-align:left">horusecCliWorkDir</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">{"go": [],"csharp": [],"ruby": [],"python": [],"java": [],"kotlin": [],"javaScript": [],"leaks": [],"hcl": [],"php": [],"c": [],"yaml": [],"generic": []}</td>
      <td style="text-align:left">This configuration informs horusec the corrected directory to run a specific
        language.</td>
    </tr>
    <tr>
      <td style="text-align:left"></td>
      <td style="text-align:left">horusecCliToolsConfig</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">{"Bandit": {"istoignore": false},"Brakeman": {"istoignore": false},"Eslint": {"istoignore": false},"Flawfinder": {"istoignore": false},"GitLeaks": {"istoignore": false},"GoSec": {"istoignore": false},"HorusecCsharp": {"istoignore": false},"HorusecDart": {"istoignore": false},"HorusecJava": {"istoignore": false},"HorusecKotlin": {"istoignore": false},"HorusecKubernetes": {"istoignore": false},"HorusecLeaks": {"istoignore": false},"HorusecNodeJS": {"istoignore": false},"NpmAudit": {"istoignore": false},"PhpCS": {"istoignore": false},"Safety": {"istoignore": false},"SecurityCodeScan": {"istoignore": false},"Semgrep": {"istoignore": false},"ShellCheck": {"istoignore": false},"TfSec": {"istoignore": false},"YarnAudit": {"istoignore": false}}</td>
      <td style="text-align:left">This configuration informs Horusec which tools are enabled to perform.</td>
    </tr>
    <tr>
        <td style="text-align:left"></td>
        <td style="text-align:left">horusecCliCustomImages</td>
        <td style="text-align:left"></td>
        <td style="text-align:left"></td>
        <td style="text-align:left">{"c": "","csharp": "","dart": "","elixir": "","generic": "","go": "","hcl": "","java": "","javascript": "","kotlin": "","leaks": "","php": "","python": "","ruby": "","shell": "","yaml": ""}</td>
        <td style="text-align:left">This configuration informs Horusec where the language docker image is to rotate the analysis.</td>
    </tr>
    <tr>
        <td style="text-align:left">HORUSEC_CLI_REGISTRY_USERNAME</td>
        <td style="text-align:left"></td>
        <td style="text-align:left"></td>
        <td style="text-align:left"></td>
        <td style="text-align:left"></td>
        <td style="text-align:left">This configuration informs Horusec the user to download images if you have configured on a private registry.</td>
    </tr>
    <tr>
        <td style="text-align:left">HORUSEC_CLI_REGISTRY_PASSWORD</td>
        <td style="text-align:left"></td>
        <td style="text-align:left"></td>
        <td style="text-align:left"></td>
        <td style="text-align:left"></td>
        <td style="text-align:left">This configuration informs Horusec the password to download images if you have set up in a private registry.</td>
    </tr>
    <tr>
        <td style="text-align:left">HORUSEC_CLI_REGISTRY_ADDRESS</td>
        <td style="text-align:left"></td>
        <td style="text-align:left"></td>
        <td style="text-align:left"></td>
        <td style="text-align:left"></td>
        <td style="text-align:left">This configuration informs Horusec the address to download images if you have configured on a private registry.</td>
    </tr>
  </tbody>
</table>

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