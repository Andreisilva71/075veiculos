/* =============================================
   leadService.js — Comunicação com a API REST
   async/await + try/catch (AI-RULES.md)
   ============================================= */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://zero75veiculos.onrender.com/api';

if (import.meta.env.DEV) {
  console.log('[LeadService] API Base URL:', API_BASE_URL);
}


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
