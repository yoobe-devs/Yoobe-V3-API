
const express = require('express');
const app = express();
require('dotenv').config();

const authRoutes = require('./routes/auth');
const statusRoutes = require('./routes/status');
const v0Routes = require("./routes/v0");

app.use(express.json());
// Serve static frontend
app.use(express.static('public'));

// Rota raiz para evitar 404 na Vercel
app.get('/', (req, res) => {
  res.send('🧠 Yoobe API está online! Acesse /api para status.');
});

// Rotas organizadas
app.use('/api/auth', authRoutes);
app.use('/api', statusRoutes);
app.use('/v0', v0Routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Yoobe API running on port ${PORT}`);
});
