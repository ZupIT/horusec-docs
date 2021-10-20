---
title: "Resources"
linkTitle: "Resources"
weight: 20
description: >-
 In this section, you will find examples and options to use Horusec-CLI. 
---


## **Commands**
CLI is divided in 3 main commands:


### Version 
Command used to verify the current Horusec version. To use it, just run:

```bash
horusec version
``` 

### Generate 
Command used to generate a configuration file in the current directory and it has some [**customization options**]({{< ref path="/cli/resources.md#global-flags" lang="en">}}) in the analysis made by Horusec. 


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

By default, Horusec will search for this automated configuration file in the same folder the `horusec.start` command is executed.

Therefore, you should be in the root of your project, just like the start command. 

See an example in the [**References**]() section. 

#### **2. Environment variable**

Here, you can use some environment variables to alter Horusec's configuration options. 

{{% alert color="info" %}}
It's important to remember the environment variables overwrite the configuration files options.
{{% /alert %}}

See an example in the [**References**]() section. 

#### **3. Flags**

You can pass some flags to alter your values.

For example, it is possible to use a flag
`horusec start --ignore="**/*test.go"`
or even use a short flag
`horusec start -i **/*test.go`.

{{% alert color="info" %}}
The flags overwrite the environment variables options and the file configuration.
{{% /alert %}}

You can see all the available flags in the [**References section**]().  


#### **For the commands examples, check out the [**Examples section**]().**