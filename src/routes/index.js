
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rota de login com Google OAuth
router.post('/auth/login', authController.loginWithGoogle);

module.exports = router;
