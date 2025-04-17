const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  // Generate token with 1 hour expiry
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token;
};

module.exports = encrypt;
