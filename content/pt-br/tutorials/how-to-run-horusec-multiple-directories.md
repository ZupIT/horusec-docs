---
title: Como rodar o horusec em multiplos diretórios
weight: 8
description: Você vai encontrar aqui as informações sobre como rodar o horusec em multiplos diretórios
---

---

# Workdir
O WorkDir é uma representação para executar vários projetos dentro de um diretório, que pode ser configurado através do arquivo horusec-config.json.Vamos supor que seu projeto é um aplicativo C# utilizando .Netcore 3.1 e também está usando angular e tem a seguinte estrutura:

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

Porque seu `.csproj` inicial está dentro de `/NetCoreProject` e seu `package-lock.json` está dentro de `/NetCoreProject/views`. Em seguida, você precisará configurar o diretório de trabalho. Para este exemplo, a configuração seria:

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

Como você pode ver, a estrutura dos projetos será dividida por idiomas e pode suportar muitos em cada um. **Mas na maioria dos casos não é necessário realizar esta configuração**, pois o horusec consegue identificar quais são as linguagens e onde está seus arquivos principais, mas em alguns casos extremos para forçar a ferramenta a realizar em cima de diretório especificos se faz o uso desta funcionalidade.

A interface de idiomas aceita é:

```go
type WorkDir struct {
	Go         []string `json:"go"`
	NetCore    []string `json:"netCore"`
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
}
```
