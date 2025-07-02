
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { createUser, findUserByEmail } = require('../models/user');
require('dotenv').config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.loginWithGoogle = async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const user = {
      email: payload.email,
      name: payload.name,
      picture: payload.picture
    };
    const jwtToken = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token: jwtToken, user });
  } catch (error) {
    res.status(401).json({ error: 'Invalid Google token' });
  }
};

exports.register = async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  if (findUserByEmail(email)) {
    return res.status(400).json({ error: 'User already exists' });
  }
  try {
    const user = await createUser({ email, password, name });
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(201).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};
