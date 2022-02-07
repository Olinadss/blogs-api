const jwt = require('jsonwebtoken');

require('dotenv').config();

const { JWT_SECRET } = process.env;

const jwtOptions = {
  algorithm: 'HS256',
  expiresIn: '5h',
};

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  
  try {
    jwt.verify(token, JWT_SECRET, jwtOptions);
    
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  verifyToken,
};
