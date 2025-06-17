
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
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
