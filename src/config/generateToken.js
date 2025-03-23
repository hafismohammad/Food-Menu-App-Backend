const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()

const generateToken = (userId, role) => {
  return jwt.sign({ id: userId, role }, process.env.TOKEN_SECRET, {
    expiresIn: '1d',
  });
};

module.exports = generateToken;
