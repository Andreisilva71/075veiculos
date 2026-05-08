const leadService = require('../services/leadService');

const createLead = async (req, res) => {
  try {
    const { fullName, phone, interestType, vehicleType, priceRange, purchaseTimeline } = req.body;

    if (!fullName || !phone || !interestType || !vehicleType || !priceRange || !purchaseTimeline) {
      return res.status(400).json({ success: false, message: 'Campos obrigatórios não preenchidos' });
    }

    if (typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({ success: false, message: 'Nome inválido' });
    }

    const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    if (!phoneRegex.test(phone.trim())) {
      return res.status(400).json({ success: false, message: 'WhatsApp inválido' });
    }

    const validInterestTypes = ['buy', 'sell', 'trade'];
    if (!validInterestTypes.includes(interestType)) {
      return res.status(400).json({ success: false, message: 'Tipo de interesse inválido' });
    }

    const leadData = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      interestType,
      vehicleType,
      priceRange,
      purchaseTimeline,
    };

    const newLead = await leadService.saveLead(leadData);
    return res.status(201).json({ success: true, message: 'Lead criado com sucesso', data: newLead });
  } catch (err) {
    console.error('Erro ao criar lead:', err);
    return res.status(500).json({ success: false, message: 'Erro interno do servidor' });
  }
};

module.exports = { createLead };
