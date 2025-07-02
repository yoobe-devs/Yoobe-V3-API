const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
  res.json({ status: 'API Yoobe V3 online \u{1F680}' });
});

module.exports = router;
