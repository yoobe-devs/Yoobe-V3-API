
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rota de login com Google OAuth
router.post('/auth/login', authController.loginWithGoogle);
router.post('/auth/register', authController.register);

module.exports = router;
