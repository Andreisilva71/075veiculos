# Modelagem de Dados

## 1. Lead

Representa um cliente interessado.

### Campos
- `id`: UUID (PK)
- `fullName`: String (Obrigatório)
- `phone`: String (Obrigatório)
- `interestType`: String
  - "buy"
  - "sell"
  - "trade"

- `vehicleType`: String
- `priceRange`: String
- `purchaseTimeline`: String
- `createdAt`: DateTime

---

# Relacionamentos

Atualmente o sistema possui apenas a entidade Lead.

Futuramente poderá existir:
- Vehicle
- Appointment
- SalesConsultant
- Negotiation