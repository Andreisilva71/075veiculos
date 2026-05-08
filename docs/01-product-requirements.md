# Requisitos do Produto (PRD)

## Casos de Uso Principais

### 1. Captura de Leads
O usuário deve conseguir preencher o formulário interativo para:
- comprar um veículo
- vender um veículo
- trocar um veículo

---

### 2. Envio de Dados
Ao finalizar o formulário:
- os dados devem ser enviados para a API
- o sistema deve salvar as informações do lead

---

### 3. Feedback Visual
Após o envio:
- o usuário deve visualizar uma mensagem de sucesso

---

# Regras de Negócio Críticas

## Validação de Campos
É obrigatório validar:
- nome
- WhatsApp

---

## Obrigatoriedade
O sistema não deve permitir:
- campos vazios
- e-mails inválidos

---

## Segurança
O backend deve:
- validar todos os dados recebidos
- impedir requisições inválidas

---

## Responsividade
O sistema deve funcionar corretamente em:
- desktop
- tablet
- mobile

---

## Performance
A landing page deve carregar rapidamente e possuir:
- imagens otimizadas
- CSS organizado
- JavaScript modularizado