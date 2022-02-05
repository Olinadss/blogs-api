const { User } = require('../models');
const serviceLogin = require('./serviceLogin');

const create = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });
  console.log(user);
  return user;
};

const findOneByEmail = (email) => {
  const emailExist = User.findOne({ where: { email } });

  return emailExist;
};

const login = async (findEmail) => {
  const userEmail = await User.findOne({ where: { email: findEmail } });

  const token = await serviceLogin.createToken(userEmail.email);

  return token;
};

module.exports = {
  create,
  findOneByEmail,
  login,
};