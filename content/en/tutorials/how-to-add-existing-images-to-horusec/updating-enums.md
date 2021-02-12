---
title: Updating Enums
description: 'Step 3: How to update Enums.'
weight: 15
---

You will also need to add a new item to the tool name in the tool's enum. If it is a language that is not yet supported, it will also be necessary to add it to the enum of languages.

The tool's enum can be found in the directory below: `development-kit/pkg/enums/tools/tools.go`

See the example below:

```text
...
const (
	...
	TfSec Tool = "TfSec"
)
...
```

The languages enum can be found in the directory:

`development-kit/pkg/enums/languages/languages.go`

See the example below: 

```text
...
const (
	...
	HCL Language = "HCL"
)
...
```

