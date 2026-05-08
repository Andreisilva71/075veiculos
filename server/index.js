const path = require('path');
const express = require('express');
const cors = require('cors');
const leadRoutes = require('./routes/leadRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração de CORS: Permite todas as origens em desenvolvimento, 
// mas você pode restringir para o domínio da Vercel em produção.
app.use(cors());
app.use(express.json());

// Rota de health check para o Render
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Servir o frontend estático (útil se rodar tudo no mesmo servidor, 
// mas em Vercel/Render separados, o Render servirá apenas a API)
app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.use('/api', leadRoutes);

app.use((err, req, res, next) => {
  console.error('[Server Error]', err.stack);
  res.status(500).json({ success: false, message: 'Erro interno do servidor' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`=============================================`);
  console.log(`🚀 Servidor 075 Veículos online!`);
  console.log(`📡 Porta: ${PORT}`);
  console.log(`🌐 Servidor: https://zero75veiculos.onrender.com`);
  console.log(`=============================================`);
});

