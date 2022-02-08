const jwt = require('jsonwebtoken');

const serviceUser = require('../service/serviceUser');

require('dotenv').config();

const { JWT_SECRET } = process.env;

const jwtOptions = {
  algorithm: 'HS256',
  expiresIn: '5h',
};

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  
  try {
    const { email } = jwt.verify(token, JWT_SECRET, jwtOptions);

    const user = await serviceUser.findOneByEmail(email);

    req.user = user.dataValues;

    console.log('req.user', req.user);
    
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  verifyToken,
};
