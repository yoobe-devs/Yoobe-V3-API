const bcrypt = require('bcryptjs');

const users = [];

async function createUser({ email, password, name }) {
  const hashed = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, email, password: hashed, name };
  users.push(user);
  return { id: user.id, email: user.email, name: user.name };
}

function findUserByEmail(email) {
  return users.find(u => u.email === email);
}

module.exports = { createUser, findUserByEmail, users };
