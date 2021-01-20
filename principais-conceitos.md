---
description: >-
  Nesta seção, você encontra informações sobre os principais conceitos do
  Horusec.
---

# Principais Conceitos

### Vulnerabilidade

Trata-se de uma falha de segurança no projeto que pode ocasionar algum dano ao sistema ou à organização. No total, o Horusec consegue identificar **5 diferentes tipos de falha de segurança**: 

1. **High**
2. **Medium**
3. **Low**
4. **Audit**
5. **Info**

### Falso Positivo

É declarado quando é encontrada, mesmo ao encontrar e analisar uma vulnerabilidade em um código seguro, você - enquanto responsável pelo projeto - decide assumir que as falhas identificadas não representam riscos à aplicação.

Neste caso, a vulnerabilidade passa a ser classificada como falso positivo. 

Um exemplo prático: você tem um arquivo de teste e quer saber se a URL de conexão com o banco de dados está sendo montada corretamente. Nesse caso, a URL seria algo como: 

```text
conn := "postgresql://root:root@postgresql:5432/horusec_db?sslmode=disable"
```

E aí, neste exemplo, o Horusec aponta ter encontrado uma "Password found in a hardcoded URL". Por se tratar de um arquivo de teste - portanto, um "ambiente controlado" - podemos classificar essa vulnerabilidade como um falso positivo.

### Risco Aceito

É declarado quando, mesmo ao encontrar e analisar uma vulnerabilidade em um código seguro, você decide assumir um risco sobre ele. 

Neste caso, a vulnerabilidade passa a ser classificada como risco aceito, já que mesmo estando ciente que isso possa deixar minha aplicação vulnerável, você aceita correr os riscos e prosseguir para o próximo passo.

Um exemplo prático: você tem um arquivo que está sendo acusado de logar uma informação sensível. Exemplo: 

`log.Info("User logged with CPF: " + cpf_user)`

Neste exemplo, ele acusará que encontrou um "No Log Sensitive Information", mas como essa alteração demanda um custo para ser realizada - ou que não pode ser feita no momento -, podemos classificá-la como um risco aceito até que possa ser feita alguma correção nela.

## Diferença entre SAST, DAST e IAST

### SAST **\(Static Application Security Testing\)**

A sigla SAST - em português, Teste Estático de Segurança de Aplicação - se refere às ferramentas que analisam o código fonte dos sistemas. Neste caso, os testes normalmente são realizados antes que o sistema esteja em produção e somente no código fonte. 

{% hint style="info" %}
Atualmente o **Horusec** é classificado como um **SAST**.
{% endhint %}

### DAST **\(Dynamic Application Security Testing\)**

A sigla DAST - em português, Teste Dinâmico de Segurança de Aplicação - se refere às ferramentas que testam as interfaces expostas em busca de vulnerabilidades. 

É o tipo de ferramenta recomendada para encontrar vulnerabilidades visíveis externamente. Para esses testes, a URL a ser testada já é mais que suficiente para o especialista que realizará o teste ou o binário a ser executado. 

A desvantagem é que a DAST depende de especialistas para escrever, tornando  mais difícil dela ser escalada nas organizações. Apesar de que, uma vez escrito, pode ser 100% automatizado.

### IAST **\(Interactive Application Security Testing\)**

A sigla IAST - em português, Teste Interativo de Segurança de Aplicação - é basicamente a combinação dos modelos de testes estáticos e dinâmicos \(SAST e DAST\) e apresenta os melhores resultados.

Uma das vantagens do IAST é que existe a opção de ser feito em conjunto com um analista de segurança, representando o melhor tipo de teste em questão de taxa de falso positivo devido à interação humana. 

Então, é o mais completo em alcance por existirem alguns bugs que só podem ser confirmados com ambos os resultados: teste no código fonte e a analise do artefato, podendo inclusive ser realizado uma análise do comportamento em memória.

## 

