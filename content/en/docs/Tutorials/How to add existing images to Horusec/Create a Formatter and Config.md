---
title: 2 Create Formatter and Config
description: 'Step 2:  Create Fomatter and Config.'
weight: 14
---


For each docker image, it is necessary to have a configuration file and what its called a formatter. The formatter is the code responsible for getting the container output and transforming it into the Horusec standard object, adding the workdir configuration and getting the commit author.

#### See the steps below on how to create a Formatter and a Config:

**Step 1:** Create a file named  `config.go` that must be a specific directory: 

* If it is an existing language, add on this directory: 
  * `horusec-cli/internal/services/formatters/[LANGUAGE]/[NEW_IMAGE]/config.go`
* If it is a specific tool, add only the tool's directory: 
  * `horusec-cli/internal/services/formatters/[NEW_IMAGE]/config.go`

The `config.go` must contain the following constant:

1. `ImageName`:  it is the docker image name where the download will be performed; 
2. `ImageTag`: it is the download version that will be performed \(it should be the last version added in the **`.semver.yaml`** file created before\);
3.  `ImageCmd` is the command that it will run the tool. It is necessary to add the first part of the code `{{WORK_DIR}}`, because to run the container, Horousec will replace the path where the project of the user is inside the container. It also must contain all the commands that will run inside the container to analyze the code. 

{% hint style="info" %}
Remember, the expected output must be on a JSON format to help the data transformation. 
{% endhint %}

See below the container config example:

```go
const (
  ImageName = "horusec/tfsec"

  ImageTag  = "v1.0.0"

  ImageCmd  = `
    {{WORK_DIR}}
    tfsec --format=json | grep -v "WARNING: skipped" > results.json
    cat results.json
  `
)
```

**Step 2:** Now you have to create the code that will read the container's output and parse the standard Horusec format.

All formatters must follow the standard and implement the interface in `horusec-cli/internal/services/formatters/interface.go` .  

See the example below implementing the [**GoSec** ](https://github.com/securego/gosec)tool:

```go
package gosec

import (
	"github.com/ZupIT/horusec/development-kit/pkg/entities/analyser/golang"
	"github.com/ZupIT/horusec/development-kit/pkg/entities/horusec"
	"github.com/ZupIT/horusec/development-kit/pkg/enums/languages"
	"github.com/ZupIT/horusec/development-kit/pkg/enums/tools"
	jsonUtils "github.com/ZupIT/horusec/development-kit/pkg/utils/json"
	"github.com/ZupIT/horusec/development-kit/pkg/utils/logger"
	vulnhash "github.com/ZupIT/horusec/development-kit/pkg/utils/vuln_hash"
	dockerEntities "github.com/ZupIT/horusec/horusec-cli/internal/entities/docker"
	"github.com/ZupIT/horusec/horusec-cli/internal/helpers/messages"
	"github.com/ZupIT/horusec/horusec-cli/internal/services/formatters"
	"strconv"
)

// See here we implemented the formatters standard interface
type Formatter struct {
	formatters.IService
}

// Create a constructor where you will pass the formatters base
func NewFormatter(service formatters.IService) formatters.IFormatter {
	return &Formatter{
		service,
	}
}

// Create a method to implement the interface responsible to start the analysis
func (f *Formatter) StartAnalysis(projectSubPath string) {
	// In case the tool exists in the configuration to be ignored, the analysis must end
	if f.ToolIsToIgnore(tools.GoSec) {
		logger.LogDebugWithLevel(messages.MsgDebugToolIgnored+tools.GoSec.ToString(), logger.DebugLevel)
		return
	}
	// Run an image and check if an unexpected error occurred 
	err := f.startGoLangGoSecAnalysis(projectSubPath)
  // Add on the monitor which language ended
	f.SetLanguageIsFinished()
	// If an error occurred, add an error log 
	f.LogAnalysisError(err, tools.GoSec, projectSubPath)
}

// Start the GoSec tool
func (f *Formatter) startGoLangGoSecAnalysis(projectSubPath string) error {
	// On debug mode we will start the analysis
	f.LogDebugWithReplace(messages.MsgDebugToolStartAnalysis, tools.GoSec)

	// Call the method built on the formatter base to run your tool
	// Pass the data parameters to run the image
	output, err := f.ExecuteContainer(f.getAnalysisData(projectSubPath))
	if err != nil {
		f.SetAnalysisError(err)
		return err
	}

	// Process the output in the image's execution
	f.processOutput(output)
	// On debug mode show the analysis has ended
	f.LogDebugWithReplace(messages.MsgDebugToolFinishAnalysis, tools.GoSec)
	return nil
}

// Process the  o output do ocorrido na execução da imagem
func (f *Formatter) processOutput(output string) {
	// In case the output is empty finish the analysis
	if output == "" {
		logger.LogDebugWithLevel(
			messages.MsgDebugOutputEmpty, logger.DebugLevel, map[string]interface{}{"tool": tools.GoSec.ToString()})
		return
	}

	// Do an output parse to a known object 
	golangOutput, err := f.parseOutputToGoOutput(output)
	if err != nil {
		return
	}
	// Add the tool's output on Horusec's standard object
	f.setGoSecOutPutInHorusecAnalysis(golangOutput)
}

// Perform the output parse, string type, to a known struct
func (f *Formatter) parseOutputToGoOutput(output string) (golangOutput golang.Output, err error) {
	err = jsonUtils.ConvertStringToOutput(output, &golangOutput)
	logger.LogErrorWithLevel(f.GetAnalysisIDErrorMessage(tools.GoSec, output), err, logger.ErrorLevel)
	return golangOutput, err
}

// Add all the found issues in Horusec's vulnerability list 
func (f *Formatter) setGoSecOutPutInHorusecAnalysis(golangOutput golang.Output) {
	for _, value := range golangOutput.Issues {
		issue := value
		vulnerability := f.setupVulnerabilitiesSeveritiesGoSec(&issue)
		f.addVulnerabilityBySeverityGoSec(vulnerability)
	}
}

func (f *Formatter) setupVulnerabilitiesSeveritiesGoSec(issue *golang.Issue) *horusec.Vulnerability {
  // Get the standard data of this vulnerability
	vulnerability := f.getDefaultVulnerabilitySeverity()
	// Get the tool's severity 
	vulnerability.Severity = issue.Severity
	// Get the tool's description
	vulnerability.Details = issue.Details
	// Get the tool's vulnerable code and perform a verification to get only the first 100 characters after the informed column 
	vulnerability.Code = f.getCode(issue.Code, issue.Column)
	// Get the tool's line 
	vulnerability.Line = issue.Line
	// Get the tool's column
	vulnerability.Column = issue.Column
	// Get the tool's confidence
	vulnerability.Confidence = issue.Confidence
	// Get the vulnerable file directory removing the tool's base, this method is in the formatters base
	vulnerability.File = f.RemoveSrcFolderFromPath(issue.File)

	// Get the hash of this vulnerability and add to the object
	vulnerability = vulnhash.Bind(vulnerability)

	// Check if the commitAuthor is enabled on the configuration and get it using the existing command on the formatter base
	return f.setCommitAuthor(vulnerability)
}

// Get only the first 100 code characters
func (f *Formatter) getCode(code, column string) string {
	columnNumber, _ := strconv.Atoi(column)
	return f.GetCodeWithMaxCharacters(code, columnNumber)
}

// Get the author of this vulnerability
func (f *Formatter) setCommitAuthor(vulnerability *horusec.Vulnerability) *horusec.Vulnerability {
	commitAuthor := f.GetCommitAuthor(vulnerability.Line, vulnerability.File)

	vulnerability.CommitAuthor = commitAuthor.Author
	vulnerability.CommitHash = commitAuthor.CommitHash
	vulnerability.CommitDate = commitAuthor.Date
	vulnerability.CommitEmail = commitAuthor.Email
	vulnerability.CommitMessage = commitAuthor.Message

	return vulnerability
}

// Get the standard data of this vulnerability
func (f *Formatter) getDefaultVulnerabilitySeverity() *horusec.Vulnerability {
	vulnerabilitySeverity := &horusec.Vulnerability{}
	vulnerabilitySeverity.Language = languages.Go
	vulnerabilitySeverity.SecurityTool = tools.GoSec
	return vulnerabilitySeverity
}

// Add the vulnerability on Horusec's analysis object 
func (f *Formatter) addVulnerabilityBySeverityGoSec(vulnerability *horusec.Vulnerability) {
	f.GetAnalysis().AnalysisVulnerabilities = append(f.GetAnalysis().AnalysisVulnerabilities,
		horusec.AnalysisVulnerabilities{
			Vulnerability: *vulnerability,
		})
}

// Get the image configuration and the data to run the tool
func (f *Formatter) getAnalysisData(projectSubPath string) *dockerEntities.AnalysisData {
	return &dockerEntities.AnalysisData{
		Image:    ImageName,
		Tag:      ImageTag,
		CMD:      f.AddWorkDirInCmd(ImageCmd, projectSubPath, tools.GoSec),
		Language: languages.Go,
	}
}

```
