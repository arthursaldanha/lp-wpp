# Versionando

O versionamento segue o modelo de versão semantica (**[semver](https://semver.org/lang/pt-BR/)**) `(<major>.<minor>.<patch>)`.

## Obter versão atual

Para obter a versão atual do seu projeto, basta ir no arquivo de gerenciamento de dependências do seu template exemplo `pom.xml ou package.json` e verificar a chave `<version>`.

## Tabela de exemplos

| REGRA      | ANTES         | DEPOIS        |
|------------|---------------|---------------|
| major      | 1.3.0         | 2.0.0         |  
| minor      | 2.1.4         | 2.2.0         |
| patch      | 4.1.1         | 4.1.2         |

A atualização de versões pode ser feita manualmente no seu arquivo de gerenciamento de dependências alterando a chage `version`, entretanto, também é possível usar o plugin de versões como o maven em java, conforme comandos abaixo.

## Patch (fixes)

```bash
# antes: 4.1.1
./mvnw versions:set -DnewVersion=4.1.2
# depois: 4.1.2
```

## Minor (Features)

```bash
# antes: 1.1.1
./mvnw versions:set -DnewVersion=1.2.0
# antes: 1.2.0
```

---

## Major (Break Changes)

```bash
# antes: 1.0.2 
./mvnw versions:set -DnewVersion=2.0.0
# antes: 2.0.0
```

!!! note "Bump de Versão"
    O pipeline não faz bump automático de versão, essa responsabilidade é do time técnico resposável pela aplicação.
    Portando é altamente recomendando ter um controle de versão do software.
    