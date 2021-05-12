---
title: Como rodar o Horusec em multiplos diretórios?
weight: 9
description: Nesta seção, você encontra informações de como rodar o horusec em multiplos diretórios
---

---

## **Workdir**
O WorkDir é uma representação para executar vários projetos dentro de um diretório, e você pode configurar por meio do arquivo **horusec-config.json**. 

Por exemplo, se o seu projeto é um aplicativo C# que utiliza o .Netcore 3.1 e Angular, e possui a seguinte estrutura:

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

O seu `.csproj` inicial está dentro de `/NetCoreProject` e seu `package-lock.json` está dentro de `/NetCoreProject/views`. 
Em seguida, você precisa configurar o diretório de trabalho. Para este exemplo, veja a configuração:

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

A estrutura dos projetos será dividida por idiomas e pode suportar muitos em cada um. **Mas na maioria dos casos não é necessário realizar esta configuração**, pois o Horusec consegue identificar quais são as linguagens e onde está seus arquivos principais. 
Porém em alguns casos para forçar a ferramenta a realizar em cima de diretório especificos se faz o uso desta funcionalidade.

Veja abaixo a interface de idiomas aceita:

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
