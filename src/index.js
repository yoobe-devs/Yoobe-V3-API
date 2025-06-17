const express = require('express');
const app = express();
const routes = require('./routes');
require('dotenv').config();

app.use(express.json());

// Rota raiz da aplicação
app.get('/', (req, res) => {
  res.send('🧠 Yoobe API está online! Acesse /api para mais informações.');
});

// Todas as outras rotas continuam em /api
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Yoobe API running on port ${PORT}`);
});
