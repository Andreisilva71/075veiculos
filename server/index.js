const path = require('path');
const express = require('express');
const cors = require('cors');
const leadRoutes = require('./routes/leadRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Servir o frontend estático
app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.use('/api', leadRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Erro interno do servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor 075 Veículos rodando em http://localhost:${PORT}`);
});
