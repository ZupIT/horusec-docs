---
title: "FAQ"
linkTitle: "FAQ"
weight: 51
type: list
description: >-
  In this section, you will find frequently asked questions about Horusec.
---

### **1. What languages does Horusec support?** 
Check out all Horusec's [**available languages**]({{< ref path="/cli/analysis-tools/overview.md" lang="en"}}).

### **2. What is Horusec's 2021 roadmap?**

Check out the roadmap's phase: 

- Phase 0: Support for all horusec-cli features into horusec-vscode (Q1)
- Phase 1: Support for the Theia(VsCode Web) (Q1)
- Phase 2: Support to Flutter, Dart, Bash, Shell, Elixir, Cloujure e Scala in analysis (Q1)
- Phase 3: New service to manager vulnerabilities founds (Q2)
- Phase 4: Dependency analysis for all supported languages (Q3)
- Phase 5: SAST with MVP Semantic Analysis (Q4)
- Phase 6: DAST with MVP symbolic analysis (Q4)

### **3. Is it possible to add Horusec as an IDE plugin?**
Yes, VSCode is already available.

### **4. Does Horusec run locally without any server dependencies?**
Yes, it runs locally using CLI. 

### **5. When I locally run Horusec via CLI, how can I see the Manager's vulnerabilities?**

You have to access Manager and you need to:  

- Create an account and authenticate; 
- View and analyze the vulnerabilities found by the CLI; 
- Manage the platform's access. 

When an analysis is sent to Horusec to store by the Manager, you have access to a detailed dashboard with your organization's view or a repository. 

### **6. Does Horusec depend on something to locally run via CLI?**

No, the docker and git use is optional, it is suggested for a better analysis. 

### **7. What is the difference between Horusec and any other quality code analysis tool?**
Horusec is a security analysis tool that searches for possible leakages and exposed vulnerabilities in your application. Meanwhile, the quality code tool esures that your code has good quality and performance, but does not guarantee that it is safe from cyber threats.

### **8. Is it possible to upload all Horusec's structure in my personal one?** 

Yes, check out the  [**"How to run the web application in another host?"**]({{< ref path="/tutorials/how-to-use-horusec-without-docker.md" lang="en"}}) tutorial.
 
### **9. How can I access Manager?**  

Horusec does not provide an open infrastructure for you to use in your web application. 
To access the Manager, you have to upload in your personal infra using Docker Compose or Helm, via 8043 port or the route you have created. 
- Example: **http://YOUR-DOMAIN:8043**.
 
### **10. How can I export Horusec's output into a file**

To do that, follow the **Example 5: Using to get sonarqube exit** in the [**Resources section**]({{< ref path="/cli/resources.md#example-5-using-to-get-sonarqube-exit" lang="en"}}).
 

### **11. How can I import Horusec's output inside SonarQube?**  

Check out question 10 [**"How can I export Horusec's output into a file?"**]({{< ref path="faq.md#10-how-can-i-export-horusecs-output-into-a-file" lang="en"}}) and after that, import the generated file in you Sonarqube interface using [**this tutorial**](https://docs.sonarqube.org/latest/analysis/generic-issue/).
