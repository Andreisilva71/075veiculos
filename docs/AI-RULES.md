# Regras de Engenharia para a IA

# Frontend

- Utilize Vue.js para componentes interativos.
- Utilize HTML semântico.
- Utilize CSS puro (sem TailwindCSS).
- O CSS deve ser modular e organizado.
- Sempre priorize responsividade.
- Evite código duplicado.
- Utilize nomes de classes claros e descritivos.

---

# JavaScript

- É proibido o uso de `var`.
- Utilize apenas `const` e `let`.
- Organize funções por responsabilidade.
- Utilize async/await para chamadas HTTP.
- Sempre tratar erros utilizando try/catch.

---

# Backend

- Utilize Node.js com Express.js.
- Separar responsabilidades em:
  - routes
  - controllers
  - services

- O controller deve:
  - receber a requisição
  - validar entrada
  - retornar resposta

- O service deve:
  - conter regras de negócio

---

# API

- Todas as respostas devem retornar JSON.
- Utilizar status HTTP corretos.
- Validar dados antes de processar.

---

# Estrutura de Pastas

## Frontend
/src
/components
/views
/services
/assets

---

## Backend
/server
/routes
/controllers
/services
/models

---

# Padrão Visual

- Interface moderna
- Tema automotivo premium
- Preto e dourado como cores principais
- Cards com bordas arredondadas
- Sombras suaves
- Animações leves

---

# Código

- Nomes de variáveis em camelCase
- Código limpo e legível
- Componentes reutilizáveis
- Evitar funções muito grandes