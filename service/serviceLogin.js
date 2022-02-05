const jwt = require('jsonwebtoken');
const { User } = require('../models');

require('dotenv').config();

const { JWT_SECRET } = process.env;

const createToken = async (findEmail) => {
  const userEmail = await User.findOne({ where: { email: findEmail } });
  // const userDisplayName = await User.findOne({ where: { displayName } });

  const jwtOptions = {
    algorithm: 'HS256',
    expiresIn: '5h',
  };

  const { id, displayName, email } = userEmail.dataValues;

  const payload = {
    id,
    displayName,
    email,
  };

  const token = jwt.sign(payload, JWT_SECRET, jwtOptions);

  return token;
};

module.exports = {
  createToken,
};
