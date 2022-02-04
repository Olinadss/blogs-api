const { User } = require('../models');

const create = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });
  console.log(user);
  return user;
};

const findOneByEmail = (email) => {
  const emailExist = User.findOne({ where: { email } });

  return emailExist;
};

module.exports = {
  create,
  findOneByEmail,
};