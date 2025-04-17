const encrypt = require('./script.js');

// Example usage
const payload = {
  userId: '123',
  username: 'testuser'
};

const secret = 'your-secret-key';
const token = encrypt(payload, secret);
console.log(token);