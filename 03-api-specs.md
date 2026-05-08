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
  "phone": "(11)99999-9999",
  "interestType": "buy",
  "vehicleType": "SUV",
  "priceRange": "R$50k - R$100k",
  "purchaseTimeline": "Esse mês"
}
```

# Campos Obrigatórios

| Campo             | Tipo   | Obrigatório |
|-------------------|--------|-------------|
| fullName          | String | ✅           |
| phone             | String | ✅           |
| interestType      | String | ✅           |
| vehicleType       | String | ✅           |
| priceRange        | String | ✅           |
| purchaseTimeline  | String | ✅           |

# Respostas Esperadas

201 Created
```json
{
  "success": true,
  "message": "Lead criado com sucesso"
}
```

400 Bad Request
```json
{
  "success": false,
  "message": "Campos inválidos"
}
```

500 Internal Server Error
```json
{
  "success": false,
  "message": "Erro interno do servidor"
}
```
