# Bug Report — Cypress Heroes

---

## BUG01 — Like ilimitado no mesmo herói

| Campo | Descrição |
|---|---|
| **Título** | Like ilimitado no mesmo herói |
| **Severidade** | Média |
| **Prioridade** | Alta |
| **Ambiente de teste** | Brave 1.91.168 (Chromium 149) / Linux Mint 22.3 64 bit |
| **Usuários afetados** | Todos os usuários autenticados (test@test.com e admin@test.com) |

### Descrição

Ao clicar no botão de curtir (👍) de um herói, o sistema permite que o mesmo usuário adicione likes ilimitados ao mesmo herói. O contador de fãs é incrementado a cada clique, sem nenhuma restrição por usuário.

O comportamento esperado seria que cada usuário pudesse curtir um herói apenas uma vez, e ao clicar novamente o like fosse removido (toggle), como ocorre na maioria das plataformas sociais.

### Passos para Reproduzir

1. Fazer login com qualquer usuário autenticado
2. Acessar a página inicial
3. Observar o contador de fãs de qualquer herói
4. Clicar no botão de curtir (👍) múltiplas vezes
5. Observar que o contador incrementa a cada clique sem limite

### Resultado Esperado

O sistema deve permitir apenas um like por usuário por herói. Ao clicar novamente, o like deve ser removido (comportamento de toggle), mantendo a integridade do contador de fãs.

### Resultado Obtido

O contador de fãs é incrementado infinitamente a cada clique, sem nenhuma validação ou restrição por usuário.

### Impacto

A falta de controle de likes compromete a confiabilidade dos dados de popularidade dos heróis, tornando o contador de fãs não confiável e suscetível a manipulação.

### Status

🔴 Aberto
