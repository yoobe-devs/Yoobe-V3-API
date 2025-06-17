
const express = require('express');
const router = express.Router();

// Rota de teste de status
router.get('/', (req, res) => {
  res.json({ status: "API Yoobe V3 online 🚀" });
});

module.exports = router;
