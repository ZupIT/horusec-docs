---
title: Glossário
weight: 6
description: >-
  Nesta seção, você vai encontrar mais informações sobre os principais conceitos do Horusec.
---

---

### **Vulnerabilidade**

É uma falha de segurança no projeto que pode ocasionar algum dano ao sistema ou à organização. No total, o Horusec consegue identificar **6 diferentes tipos de falha de segurança**: 

1. **Critical**
2. **High**
3. **Medium**
4. **Low**
5. **Info**
6. **Unknown**

### **Falso Positivo**

É quando você declara que as falhas de segurança encontradas em um determinado código seguro não representam riscos à aplicação.

Neste caso, a vulnerabilidade passa a ser classificada como falso positivo.

Por exemplo, você tem um arquivo de teste e quer saber se a URL de conexão com o banco de dados está sendo montada corretamente. Nesse caso, a URL seria algo como:

```go
conn := "postgresql://root:root@postgresql:5432/horusec_db?sslmode=disable"
```

Neste exemplo, o Horusec aponta ter encontrado uma "Password found in a hardcoded URL". Por se tratar de um arquivo de teste - portanto, um "ambiente controlado" -, você pode classificar essa vulnerabilidade como um falso positivo.

### **Risco Aceito**

É quando você declara estar ciente de uma vulnerabilidade em um código seguro e, depois de analisá-la, você decide assumir os riscos e prosseguir para o próximo passo.


Por exemplo, você tem um arquivo que está sendo acusado de logar uma informação sensível: 

`log.Info("User logged with CPF: " + cpf_user)`

Ele acusará que encontrou um "No Log Sensitive Information", depois disso você tem duas opções: 
1. A alteração pode ser feita nesse momento; 
2. Ela é classificada como um risco aceito até que possa ser feita alguma correção.

## **Diferença entre SAST, DAST e IAST**

### SAST **\(Static Application Security Testing\)**

A sigla SAST - em português, Teste Estático de Segurança de Aplicação - se refere às ferramentas que analisam o código fonte dos sistemas. Estes testes normalmente são realizados antes que o sistema esteja em produção e somente no código fonte. 

{{% alert color="info" %}}
Atualmente o **Horusec** é classificado como um **SAST**.
{{% /alert %}}


### DAST **\(Dynamic Application Security Testing\)**

A sigla DAST - em português, Teste Dinâmico de Segurança de Aplicação - se refere às ferramentas que testam as interfaces expostas em busca de vulnerabilidades. 

É o tipo de ferramenta recomendada para encontrar vulnerabilidades visíveis externamente. Para esses testes, a URL a ser testada já é suficiente para o teste ser realizado ou o binário ser executado. 

A desvantagem é que a DAST depende de especialistas para escrever, tornando  mais difícil dela ser escalada nas organizações. Apesar de que, uma vez escrito, pode ser 100% automatizado.

### IAST **\(Interactive Application Security Testing\)**

A sigla IAST - em português, Teste Interativo de Segurança de Aplicação - é basicamente a combinação dos modelos de testes estáticos e dinâmicos \(SAST e DAST\) e apresenta os melhores resultados.

Uma das vantagens do IAST é que existe a opção de ser feito em conjunto com um(a) analista de segurança, representando o melhor tipo de teste em questão de taxa de falso positivo devido à interação humana. 

Então, é o mais completo em alcance por existirem alguns bugs que só podem ser confirmados com ambos os resultados: teste no código fonte e a análise do artefato, podendo inclusive ser realizado uma análise do comportamento em memória.