# Casos de Teste — Cypress Heroes

---

## CT001 — Login com credenciais válidas

| Campo | Descrição |
|---|---|
| **Título** | Login com credenciais válidas |
| **Pré-condições** | Usuário deve ter acesso ao sistema com credenciais válidas |
| **Passo-a-passo** | 1. Acessar a página inicial / 2. Clicar no botão "Login" / 3. Inserir o e-mail: test@test.com / 4. Inserir a senha: test123 / 5. Clicar no botão "Sign in" |
| **Resultado esperado** | Usuário é autenticado com sucesso e o botão "Logout" é exibido no lugar do botão "Login" |
| **Suite de teste** | Login |
| **Ambiente de teste** | Brave 1.91.168 (Chromium 149) / Linux Mint 22.3 64 bit |
| **Resultado encontrado** | O mesmo que o esperado |
| **Status** | ✅ Passou |

---

## CT002 — Login com credenciais inválidas

| Campo | Descrição |
|---|---|
| **Título** | Login com credenciais inválidas |
| **Pré-condições** | Usuário deve ter acesso à página de login |
| **Passo-a-passo** | 1. Acessar a página inicial / 2. Clicar no botão "Login" / 3. Inserir um e-mail inválido: invalido@test.com / 4. Inserir uma senha inválida: senhaerrada / 5. Clicar no botão "Sign in" |
| **Resultado esperado** | Sistema exibe a mensagem de erro "Invalid email or password" |
| **Suite de teste** | Login |
| **Ambiente de teste** | Brave 1.91.168 (Chromium 149) / Linux Mint 22.3 64 bit |
| **Resultado encontrado** | O mesmo que o esperado |
| **Status** | ✅ Passou |

---

## CT003 — Login com campos em branco

| Campo | Descrição |
|---|---|
| **Título** | Login com campos em branco |
| **Pré-condições** | Usuário deve ter acesso à página de login |
| **Passo-a-passo** | 1. Acessar a página inicial / 2. Clicar no botão "Login" / 3. Não preencher nenhum campo / 4. Clicar no botão "Sign in" |
| **Resultado esperado** | O formulário permanece visível com os campos de e-mail e senha vazios, impedindo o login |
| **Suite de teste** | Login |
| **Ambiente de teste** | Brave 1.91.168 (Chromium 149) / Linux Mint 22.3 64 bit |
| **Resultado encontrado** | O mesmo que o esperado |
| **Status** | ✅ Passou |

---

## CT004 — Logout com sucesso

| Campo | Descrição |
|---|---|
| **Título** | Logout com sucesso |
| **Pré-condições** | Usuário deve estar autenticado no sistema |
| **Passo-a-passo** | 1. Acessar a página inicial com o usuário logado / 2. Clicar no botão "Logout" |
| **Resultado esperado** | Usuário é desautenticado e o botão "Login" é exibido novamente |
| **Suite de teste** | Logout |
| **Ambiente de teste** | Brave 1.91.168 (Chromium 149) / Linux Mint 22.3 64 bit |
| **Resultado encontrado** | O mesmo que o esperado |
| **Status** | ✅ Passou |

---

## CT005 — Curtir herói sem estar logado

| Campo | Descrição |
|---|---|
| **Título** | Curtir herói sem estar logado |
| **Pré-condições** | Usuário deve estar desautenticado |
| **Passo-a-passo** | 1. Acessar a página inicial sem estar logado / 2. Clicar no botão de curtir (👍) de qualquer herói |
| **Resultado esperado** | Sistema exibe a mensagem "You must log in to like" |
| **Suite de teste** | Curtir Herói |
| **Ambiente de teste** | Brave 1.91.168 (Chromium 149) / Linux Mint 22.3 64 bit |
| **Resultado encontrado** | O mesmo que o esperado |
| **Status** | ✅ Passou |

---

## CT006 — Curtir herói logado

| Campo | Descrição |
|---|---|
| **Título** | Curtir herói logado |
| **Pré-condições** | Usuário deve estar autenticado com as credenciais test@test.com / test123 |
| **Passo-a-passo** | 1. Fazer login com o usuário test@test.com / 2. Acessar a página inicial / 3. Verificar o número de fãs do primeiro herói / 4. Clicar no botão de curtir (👍) do primeiro herói |
| **Resultado esperado** | O contador de fãs do herói é incrementado em 1 |
| **Suite de teste** | Curtir Herói |
| **Ambiente de teste** | Brave 1.91.168 (Chromium 149) / Linux Mint 22.3 64 bit |
| **Resultado encontrado** | O mesmo que o esperado |
| **Status** | ✅ Passou |

---

## CT007 — Contratar herói sem estar logado

| Campo | Descrição |
|---|---|
| **Título** | Contratar herói sem estar logado |
| **Pré-condições** | Usuário deve estar desautenticado |
| **Passo-a-passo** | 1. Acessar a página inicial sem estar logado / 2. Clicar no botão de contratar (💰) de qualquer herói |
| **Resultado esperado** | Sistema exibe a mensagem "You must log in to hire this hero" |
| **Suite de teste** | Contratar Herói |
| **Ambiente de teste** | Brave 1.91.168 (Chromium 149) / Linux Mint 22.3 64 bit |
| **Resultado encontrado** | O mesmo que o esperado |
| **Status** | ✅ Passou |

---

## CT008 — Contratar herói logado

| Campo | Descrição |
|---|---|
| **Título** | Contratar herói logado |
| **Pré-condições** | Usuário deve estar autenticado com as credenciais test@test.com / test123 |
| **Passo-a-passo** | 1. Fazer login com o usuário test@test.com / 2. Acessar a página inicial / 3. Clicar no botão de contratar (💰) do primeiro herói / 4. Confirmar a contratação clicando em "Yes" |
| **Resultado esperado** | Contratação realizada com sucesso e usuário permanece autenticado na aplicação |
| **Suite de teste** | Contratar Herói |
| **Ambiente de teste** | Brave 1.91.168 (Chromium 149) / Linux Mint 22.3 64 bit |
| **Resultado encontrado** | O mesmo que o esperado |
| **Status** | ✅ Passou |

---

## CT009 — Criar novo herói (admin)

| Campo | Descrição |
|---|---|
| **Título** | Criar novo herói (admin) |
| **Pré-condições** | Usuário deve estar autenticado com as credenciais de administrador: admin@test.com / test123 |
| **Passo-a-passo** | 1. Fazer login com o usuário admin@test.com / 2. Acessar a página inicial / 3. Clicar no botão "New Hero" / 4. Preencher o campo Nome com "Hero Test" / 5. Preencher o campo Preço com "10" / 6. Preencher o campo Fãs com "2" / 7. Preencher o campo Saves com "1" / 8. Selecionar um poder na lista / 9. Clicar no botão "Submit" |
| **Resultado esperado** | Novo herói é criado com sucesso e exibido na lista da página inicial |
| **Suite de teste** | Gerenciamento de Heróis (Admin) |
| **Ambiente de teste** | Brave 1.91.168 (Chromium 149) / Linux Mint 22.3 64 bit |
| **Resultado encontrado** | O mesmo que o esperado |
| **Status** | ✅ Passou |

---

## CT010 — Editar herói (admin)

| Campo | Descrição |
|---|---|
| **Título** | Editar herói (admin) |
| **Pré-condições** | Usuário deve estar autenticado com as credenciais de administrador: admin@test.com / test123 |
| **Passo-a-passo** | 1. Fazer login com o usuário admin@test.com / 2. Acessar a página inicial / 3. Criar um herói de teste via comando customizado / 4. Clicar no botão de editar (✏️) do herói criado / 5. Alterar o nome do herói para "Hero Editado" / 6. Clicar no botão "Submit" |
| **Resultado esperado** | Herói é atualizado com sucesso e o novo nome "Hero Editado" é exibido na lista |
| **Suite de teste** | Gerenciamento de Heróis (Admin) |
| **Ambiente de teste** | Brave 1.91.168 (Chromium 149) / Linux Mint 22.3 64 bit |
| **Resultado encontrado** | O mesmo que o esperado |
| **Status** | ✅ Passou |

---

## CT011 — Excluir herói (admin)

| Campo | Descrição |
|---|---|
| **Título** | Excluir herói (admin) |
| **Pré-condições** | Usuário deve estar autenticado com as credenciais de administrador: admin@test.com / test123 |
| **Passo-a-passo** | 1. Fazer login com o usuário admin@test.com / 2. Acessar a página inicial / 3. Criar um herói de teste via comando customizado / 4. Clicar no botão de excluir (🗑️) do herói criado / 5. Confirmar a exclusão clicando em "Yes" |
| **Resultado esperado** | Herói é removido com sucesso e não aparece mais na lista da página inicial |
| **Suite de teste** | Gerenciamento de Heróis (Admin) |
| **Ambiente de teste** | Brave 1.91.168 (Chromium 149) / Linux Mint 22.3 64 bit |
| **Resultado encontrado** | O mesmo que o esperado |
| **Status** | ✅ Passou |
