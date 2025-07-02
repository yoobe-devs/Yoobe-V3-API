const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Fetch the V0 static HTML from the provided source and return it
router.get('/', async (req, res) => {
  try {
    const response = await fetch('https://gre6bvacr5g1owv9l.lite.vusercontent.net/');
    const html = await response.text();
    res.set('Content-Type', 'text/html');
    res.send(html);
  } catch (err) {
    console.error('Failed to fetch V0 page:', err);
    res.status(500).send('Failed to fetch V0 page');
  }
});

module.exports = router;
