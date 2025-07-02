const express = require('express');
const app = express();
const routes = require('./routes');
const statusRoutes = require('./routes/statusRoutes');
require('dotenv').config();

app.use(express.json());

// Version 0 status endpoint
app.get('/v0', (req, res) => {
  res.json({ status: 'API Yoobe V3 online \u{1F680}' });
});

// Rota raiz da aplicação
app.get('/', (req, res) => {
  res.send('🧠 Yoobe API está online! Acesse /api para mais informações.');
});

// Todas as outras rotas continuam em /api
app.use('/api', routes);
// Routes under version 0 namespace
app.use('/v0', statusRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Yoobe API running on port ${PORT}`);
});
