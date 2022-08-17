# **DevPR** _Confs_

_Projeto aberto para sites de conferências de programação._

---

## Arquitetura

O projeto foi construído usando conceitos de diretórios agrupadores e separações de responsabilidades da base de código divididas entre bibliotecas com nomeclaturas sugestivas.

### Exemplo


```
libs
├── auth
│   ├── data-access
│   └── data-state
├── event
│   ├── data-state
│   ├── feature-subscribe
│   └── ui-ticket
└── shared
    ├── data-access
    └── data-state
```

### Diretórios agrupadores

- **auth** - Diretório agrupador para suas respectivas bibliotecas.
- **event** - Diretório agrupador para suas respectivas bibliotecas.
- **shahred** - Diretório agrupador para respectivas compartilhadas.

### Tipos de bibliotecas

- **data-state** - Biblioteca para lidar com o estado dos dados.
- **data-access** - Biblioteca para lidar com acesso aos dados.
- **feature-*** - Biblioteca para componentes com funcionalidades.
- **ui-*** - Biblioteca para componentes de apresentção (inpit | output).

---

## Tecnologias

Todo desenvolvimento está até então baseado em [TypeScript](https://www.typescriptlang.org/), nos esforçamos para manter bibliotecas de acesso e estado de dados, independentes de frameworks.

Alguns componentes de _apresentação_ são desenvolvidos usando [componentes da web](https://html.spec.whatwg.org/dev/custom-elements.html#custom-elements) na sua forma nativa, outros usamos [angular](https://angular.io/).

Até o presente momento, para componentes de funcionalidades, foi adotado [angular](https://angular.io/) como padrão.


---

## Repositório

Esse repositório utiliza [Nx](https://nx.dev) para gerenciar projetos, seus relacionamentos e execução de tarefas, tanto em desenvolvimento como pipelines de _integração contínua_. Em conjunto temos também bibliotecas como [Jest](https://jestjs.io/) para testes unitários, [Cypress](https://www.cypress.io/) para testes de integração e [ESLint](https://eslint.org/) para linting da base de código e checagem de relacionamentos entre os projetos devido algumas boas práticas utilizadas.

