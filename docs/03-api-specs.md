# Especificações da API

# Endpoint: Criar Lead

## Rota
POST /api/leads

---

## Descrição
Recebe os dados do formulário e registra um novo lead.

---

# Payload de Envio (Body)

```json
{
  "fullName": "João Silva",
  "email": "joao@email.com",
  "phone": "(11)99999-9999",
  "interestType": "buy",
  "vehicleType": "SUV",
  "priceRange": "R$50k - R$100k",
  "purchaseTimeline": "Esse mês"
}

# Respostas Esperadas

201 Created
{
  "success": true,
  "message": "Lead criado com sucesso"
}
400 Bad Request
{
  "success": false,
  "message": "Campos inválidos"
}
500 Internal Server Error
{
  "success": false,
  "message": "Erro interno do servidor"
}