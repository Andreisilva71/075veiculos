/* =============================================
   leadService.js — Comunicação com a API REST
   async/await + try/catch (AI-RULES.md)
   ============================================= */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const leadService = {
  async createLead(leadData) {
    try {
      const response = await fetch(`${API_BASE_URL}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao enviar formulário');
      }

      return { success: true, data };
    } catch (err) {
      console.error('[LeadService] Erro:', err.message);
      return { success: false, message: err.message };
    }
  },
};
