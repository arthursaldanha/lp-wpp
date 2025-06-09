
# Overview

## Template

Este repositório contém um `template` de projeto com uma aplicação 100% funcional com exemplos de tests e coverage.

---

## Estrutura do _template_

```text

.azuredevops                    (configurações entrega contínua)
|
├── runtime.Dockerfile          (Utilizado para realizar o build da imagem do docker envia-la o registry)
├── builder.Dockerfile          (Utilizado para build da aplicação em alguns processos de CI/CD)
├── azure-pipeline.yml          (Definições da pipeline)
├── pull_request_template.md    (Modelo de mensagem para a pull request)
└── sonnar-project.properties   (Utilizado para scan de qualidade SonarQube)

.azuredevops/config/<environment>
|
├── environments_variables.yml  (Variáveis de ambiente que serão adicionada ao ambiente de runtime durente o processo de CI/CD)
├── secrets.yaml                (Utilizado para build da aplicação em alguns processos de CI/CD)
└── values.yml                  (Values referente ao deploy do template.)

docs                            (Documentação do componente)
|
├── index.md                    (Página inicial da documentação.)
├── javascripts/                (Script de js incorporados no MkDocs.)
├── diagrams/                   (Diagramas como código.)
├── diagrams.md                 (Exemplos de diagramas como código.)
├── testes-coverage.md          (Como trabalhar com a ferramenta para cobertura de testes.)
├── ci.md                       (Como funciona o processo de integração contínua.)
├── pull-request.md             (Como funciona o processo de pull request.)
├── versioning.md               (Como trabalhar com o versionamento.)
├── quality-gate.md             (Como funciona o portal de qualidade.)  
└── extras.md                   (Informações extras.)

mkdocs.yml                      (Configuração do visualizador de documentação.)

```

---

## Tecnologias do _template_

- [Docker](https://docs.docker.com/){:target="_blank"}
- [Sonarqube](https://docs.sonarqube.org/latest/){:target="_blank"}
- [MkDocs](https://www.mkdocs.org/){:target="_blank"}
- [Azure Pipelines](https://azure.microsoft.com/pt-br/services/devops/pipelines/){:target="_blank"}
- [NextJS](https://nextjs.org/)

## Getting Started

Isto é um [Next.js](https://nextjs.org/) projeto gerado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Rodando a aplicação

Primeiro, rode o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Acessando a aplicação

Abra [http://localhost:3000](http://localhost:3000) com seu navegador e veja o resultado.

Você pode iniciar o desenvolvimento editando a página `app/page.tsx`. A página será atualizada automaticamente quando você editar e salvar o arquivo.

Esse projeto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar automaticamente o load Inter, uma fonte customizada do google.

### Saiba mais
Para mais detalhes de como usar o Next.js acesse os seguintes links:

- [Next.js Documentation](https://nextjs.org/docs) - features e APIs.
- [Learn Next.js](https://nextjs.org/learn) - Next.js tutorial.

## Documentation

Para realizar a instalação dos pacotes necessários do [MKDocs](https://www.mkdocs.org/#installation){:target="_blank"}, execute os comandos abaixo:

!!! note "MKDocs"
    O MKDocs depende do [Python](https://www.python.org/){:target="_blank"} para rodar. O [pip](https://pypi.org/project/pip/){:target="_blank"} é o gerenciador de pacotes do Python. Para realizar a instalação do MKDocs, vetifique se o Python está instalado em seu ambiente.

---

##### Instalação Windows
```bash
# Para verificar se o Python.
> python -V

# Após instalar o Python, não esqueça de adicionar na variável ambiente "Path" o diretório do Python.

# Comando Windows instalar o MKDocs:
> python -m pip install mkdocs
> python -m pip install mkdocs-diagrams
> python -m pip install mkdocs-awesome-pages-plugin
> python -m pip install mkdocs-mermaid2-plugin
> python -m pip install mkdocs-material-extensions
> python -m pip install plantuml_markdown
> python -m pip install Markdown
> python -m pip install pymdown-extensions
> python -m pip install markdown-inline-graphviz
> python -m pip install mkdocs-techdocs-core
```
Inicializa o servidor de documentação MkDocs.

##### Rodando no Windows
```bash
# Para rodar o servidor no Windows:
> python -m mkdocs serve
```

---

##### Instalação Unix-like
```bash
# Instala todas as deps necessárias para rodar o mkdocs.
$ pip3 install mkdocs
$ pip3 install mkdocs-techdocs-core
$ pip3 install mkdocs-diagrams
$ pip3 install mkdocs-awesome-pages-plugin
$ pip3 install mkdocs-mermaid2-plugin
$ pip3 install mkdocs-material-extensions
$ pip3 install plantuml_markdown
$ pip3 install Markdown
$ pip3 install pymdown-extensions
$ pip3 install markdown-inline-graphviz

# Instala o PlantUML
$ curl -o plantuml.jar -L http://sourceforge.net/projects/plantuml/files/plantuml.1.2020.16.jar/download && echo "c789ace48347c43073232b1458badc5810c01fe8  plantuml.jar" | sha1sum -c - && mv plantuml.jar /opt/plantuml.jar
$ echo $'#!/bin/sh\n\njava -jar '/opt/plantuml.jar' ${@}' >> /usr/local/bin/plantuml
$ chmod +x /usr/local/bin/plantuml
``` 

##### Rodando Unix-like
```bash
# Rodar servidor de documentação mkdocs.
$ mkdocs serve
``` 
Após rodar o servidor do MKDocs, basta acessar o endereço [http://localhost:8000](http://localhost:8000){:target="_blank"}