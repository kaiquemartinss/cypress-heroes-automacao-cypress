# 🦸 Cypress Heroes — Automação de Testes com Cypress

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-22.22.3-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge)

---

## 📋 Sobre o Projeto

O **Cypress Heroes** é uma aplicação demo desenvolvida pela equipe do Cypress que simula uma plataforma de contratação de heróis. Com frontend em **React** e backend em **NestJS**, a aplicação permite listar, curtir e contratar heróis, além de oferecer funcionalidades administrativas como criação, edição e exclusão de heróis.

Este projeto foi desenvolvido como parte do curso **Guardião da Qualidade** da LumeStack, com o objetivo de aplicar na prática os conceitos de automação de testes E2E em um ambiente realista, utilizando **Cypress** com **TypeScript**, comandos customizados, tasks de banco de dados e integração contínua com **GitHub Actions**.

🔗 Repositório oficial: [cypress-io/cypress-heroes](https://github.com/cypress-io/cypress-heroes)

---

## 🎯 Funcionalidades Testadas

| Funcionalidade | Usuário | Cenários Cobertos |
|---|---|---|
| Login | Ambos | Credenciais válidas, inválidas e campos em branco |
| Logout | Ambos | Logout com sucesso |
| Curtir Herói | Ambos | Com e sem autenticação |
| Contratar Herói | Ambos | Com e sem autenticação |
| Criar Herói | Admin | Criação com dados válidos |
| Editar Herói | Admin | Edição de nome do herói |
| Excluir Herói | Admin | Exclusão com confirmação |

---

## 🧪 Casos de Teste

| ID | Funcionalidade | Cenário | Status |
|---|---|---|---|
| CT001 | Login | Login com credenciais válidas | ✅ |
| CT002 | Login | Login com credenciais inválidas | ✅ |
| CT003 | Login | Login com campos em branco | ✅ |
| CT004 | Logout | Logout com sucesso | ✅ |
| CT005 | Curtir Herói | Curtir herói sem estar logado | ✅ |
| CT006 | Curtir Herói | Curtir herói logado | ✅ |
| CT007 | Contratar Herói | Contratar herói sem estar logado | ✅ |
| CT008 | Contratar Herói | Contratar herói logado | ✅ |
| CT009 | Gerenciamento (Admin) | Criar novo herói | ✅ |
| CT010 | Gerenciamento (Admin) | Editar herói | ✅ |
| CT011 | Gerenciamento (Admin) | Excluir herói | ✅ |

---

## 🐛 Bug Report

### BUG01 — Like ilimitado no mesmo herói

**Severidade:** Média | **Prioridade:** Alta

Ao clicar no botão de curtir (👍), o sistema permite que o mesmo usuário adicione likes ilimitados ao mesmo herói. O contador de fãs é incrementado a cada clique sem nenhuma restrição por usuário.

📄 Documentação completa em [`bug-report/bug-report.md`](./bug-report/bug-report.md)

---

## 💡 Sugestões de Melhoria

| ID | Título | Prioridade |
|---|---|---|
| SM01 | Implementar cadastro de novos usuários | Alta |
| SM02 | Exibir feedback visual ao realizar logout | Média |

📄 Documentação completa em [`melhorias/sugestoes-de-melhoria.md`](./melhorias/sugestoes-de-melhoria.md)

---

## 🗂️ Estrutura do Repositório

```
cypress-heroes-automacao-cypress/
├── .github/
│   └── workflows/
│       └── ci.yml                  # Pipeline de CI com GitHub Actions
├── automacao/
│   ├── client/
│   │   └── cypress/
│   │       ├── e2e/
│   │       │   └── heroes.cy.ts    # Spec com todos os testes E2E
│   │       ├── fixtures/
│   │       └── support/
│   │           ├── commands.ts     # Comandos customizados
│   │           ├── data.ts         # Tasks de banco de dados
│   │           └── e2e.ts
│   └── server/                     # Backend NestJS
├── bug-report/
│   └── bug-report.md               # BUG01 documentado
├── casos-de-testes/
│   └── casos-de-teste.md           # CT001 a CT011
└── melhorias/
    └── sugestoes-de-melhoria.md    # SM01 e SM02
```

---

## 🏗️ Padrões e Boas Práticas

- **Comandos Customizados** — `cy.login()`, `cy.createHero()`, `cy.deleteHero()` centralizados em `commands.ts`
- **Tasks de Banco de Dados** — criação e exclusão de heróis diretamente via Prisma para isolamento de testes
- **cy.session()** — reaproveitamento de sessão de login para testes mais rápidos
- **TypeScript** — tipagem estática para maior segurança e legibilidade do código
- **GitHub Actions** — pipeline de CI configurado para rodar os testes automaticamente a cada push
- **Casos de Teste Documentados** — todos os cenários documentados no padrão profissional
- **Bug Report e Melhorias** — artefatos de QA completos além da automação

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- [Node.js v22.22.3](https://nodejs.org/)
- npm (já incluso com o Node)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/kaiquemartinss/cypress-heroes-automacao-cypress.git

# Acesse a pasta de automação
cd cypress-heroes-automacao-cypress/automacao

# Instale as dependências
npm install

# Configure o banco de dados
npm run setup
```

### Subindo a aplicação

```bash
npm run dev
```

### Executando os testes

```bash
# Acesse a pasta client
cd client

# Modo interativo (interface gráfica do Cypress)
npx cypress open

# Modo headless (linha de comando)
npx cypress run
```

---

## 👨‍💻 Autor

**Kaique Martins**
Estudante de QA | Curso Guardião da Qualidade — LumeStack

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kaiquemartins/)