# Quality Gate

O Sonarqube é o portal de qualidade oficial utilizado pela corporação. Ele está integrado no processo de CI de nossa esteira, analise ocorre assim que o Merge com as branch de integração (develop, release e master/main).

## Sonar-Scanner VSCode

Você pode adicionar a extenção **SonarLint (sonarsource.sonarlint-vscode)** em seu VSCode e já integrar sua workspace com o sonarqube.

Após baixar o plugin adicione em seu user settings, não esqueça de fornecer seu token pessoal, este token abaixo é inválido e só a titulo de demonstração:

```json
    "sonarlint.connectedMode.connections.sonarqube": [
        { 
            "serverUrl": "https://sonarcloud.io/", 
            "token": "TOKEN GERADO PELO SONAR" 
        }
    ]
```
