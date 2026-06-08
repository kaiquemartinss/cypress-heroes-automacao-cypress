# Sugestões de Melhoria — Cypress Heroes

---

## SM01 — Implementar cadastro de novos usuários

| Campo | Descrição |
|---|---|
| **Título** | Implementar cadastro de novos usuários |
| **Prioridade** | Alta |
| **Área** | Autenticação |

### Descrição

Atualmente a aplicação não possui uma funcionalidade de cadastro de novos usuários. O acesso ao sistema é possível apenas com as credenciais pré-cadastradas (`test@test.com` e `admin@test.com`), o que limita o uso da plataforma a usuários já existentes no banco de dados.

### Sugestão

Implementar uma tela de cadastro acessível a partir da página de login, contendo os seguintes campos:

- Nome completo
- E-mail
- Senha
- Confirmação de senha

### Benefícios

- Permite que novos usuários se registrem de forma autônoma
- Torna a aplicação mais completa e próxima de um produto real
- Melhora a experiência do usuário eliminando a dependência de credenciais pré-cadastradas

---

## SM02 — Exibir feedback visual ao realizar logout

| Campo | Descrição |
|---|---|
| **Título** | Exibir feedback visual ao realizar logout |
| **Prioridade** | Média |
| **Área** | Experiência do Usuário (UX) |

### Descrição

Atualmente, ao clicar no botão "Logout", a única mudança visível na interface é a troca do botão "Logout" pelo botão "Login". Não há nenhum feedback visual — como uma mensagem de confirmação, um toast notification ou uma animação de transição — informando ao usuário que o logout foi realizado com sucesso.

### Sugestão

Implementar um feedback visual ao realizar o logout, como por exemplo:

- Uma mensagem de toast: *"Você saiu da sua conta com sucesso."*
- Um indicador de carregamento breve antes da transição
- Um redirecionamento para uma página de confirmação de logout

### Benefícios

- Melhora a experiência do usuário ao fornecer confirmação clara da ação realizada
- Reduz a possibilidade de confusão sobre o estado de autenticação
- Segue boas práticas de UX onde toda ação do usuário deve ter um feedback visível
