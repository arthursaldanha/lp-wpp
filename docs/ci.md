# CI - Integração Contínua

*“Integração Contínua é uma pratica de desenvolvimento de software onde os membros de um time integram seu trabalho frequentemente, geralmente cada pessoa integra pelo menos diariamente – podendo haver múltiplas integrações por dia. Cada integração é verificada por um build automatizado (incluindo testes) para detectar erros de integração o mais rápido possível. Muitos times acham que essa abordagem leva a uma significante redução nos problemas de integração e permite que um time desenvolva software coeso mais rapidamente.”* - **Martin Fowler**

---

## Benefícios

1. **Melhore a produtividade do desenvolvedor**

    A integração contínua ajuda sua equipe a ser mais produtiva ao liberar os desenvolvedores de tarefas manuais e encorajar comportamentos que ajudam a reduzir o número de erros e bugs implantados para os clientes.


2. **Encontre e investigue bugs mais rapidamente**

    Com testes mais frequentes, sua equipe pode descobrir e investigar bugs mais cedo, antes que no futuro os problemas cresçam demais.


3. **Distribua atualizações mais rapidamente**

    A integração contínua ajuda a sua equipe a distribuir atualizações para os clientes mais rapidamente e com maior frequência.

---

## Azure Pipelines

As esteiras da Azure são ativadas pelo merge com os branchs de integração. `develop, release, main/master`

Os arquivos de configuração de construção estão na pasta `.azuredevops/` localizada na raiz do projeto.

### Config

1. `runtime.Dockerfile` - Utilizado para empacotar a aplicação e envia-la ao registry.
2. `builder.Dockerfile` - Utilizado para buildar a aplicação em alguns cenários específicos.
3. `azure-pipeline.yml` - Definições da pipelne core.
4. `pull_request_template` - Modelo de mensagem para a pull request
5. `sonar-project.properties` - Utilizado durante o scan de qualidade (SonarQube)
6. `variables/private.yml` - Utilitário para adicionar variaveis ao pipeline.
7. `config/<environment>` - Utilizado para deploy em ambientes containers.

---

## Referências

https://martinfowler.com/articles/continuousIntegration.html