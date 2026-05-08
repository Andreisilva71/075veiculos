const { v4: uuidv4 } = require('uuid');

const leads = [];

const saveLead = async (leadData) => {
  const newLead = {
    id: uuidv4(),
    ...leadData,
    createdAt: new Date().toISOString(),
  };

  leads.push(newLead);
  console.log(`[LeadService] Lead salvo: ${newLead.id} | ${newLead.fullName} | ${newLead.interestType}`);

  return newLead;
};

const getAllLeads = async () => {
  return leads;
};

module.exports = { saveLead, getAllLeads };
