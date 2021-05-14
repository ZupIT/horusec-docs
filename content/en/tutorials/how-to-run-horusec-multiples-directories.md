---
title: How to run Horusec in multiple directories?
weight: 16
description: In this section, you will find informations of how to run Horusec in multiple directories.
---

# Workdir
WorkDir is a representation to run several projects inside a directory, and you can configure it through a **horusec-config.json** file.

For example, if your project is a C# app that uses Netcore 3.1 and Angular, and has this structure:

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

Your initial `.csproj` is inside of `/NetCoreProject` and your `package-lock.json` is inside of `/NetCoreProject/views`. 
Then, you have to configure your working directory. For this example, see the configuration below:

```json
{
    "horusecCliWorkDir": {
        "csharp": [
            "NetCoreProject"
        ],
        "javaScript": [
            "NetCoreProject/views"
        ]
    }
}
```

The project's structure is divided by languages and can support many on each one. **But in mostly cases it is not necessary to make this configuration**, because Horusec can identify which languages and where are they in the main files. However, in some cases the functionality is used to force the tool to realize it above specific directories.

See below the accepted languages interface:

```go
type WorkDir struct {
	Go         []string `json:"go"`
	CSharp     []string `json:"csharp"`
	Ruby       []string `json:"ruby"`
	Python     []string `json:"python"`
	Java       []string `json:"java"`
	Kotlin     []string `json:"kotlin"`
	JavaScript []string `json:"javaScript"`
	Leaks      []string `json:"leaks"`
	HCL        []string `json:"hcl"`
	PHP        []string `json:"php"`
	C          []string `json:"c"`
	Yaml       []string `json:"yaml"`
	Generic    []string `json:"generic"`
	Elixir     []string `json:"elixir"`
	Shell      []string `json:"shell"`
	Dart       []string `json:"dart"`
	Nginx      []string `json:"nginx"`
}
```