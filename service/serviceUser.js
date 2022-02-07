const { User } = require('../models');
const serviceLogin = require('./serviceLogin');

const create = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });

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

const getAllUser = async () => {
  const user = await User.findAll();

  return user;
};

const getByDisplayName = async (displayName) => {
  const user = serviceLogin.findOne({ 
    attributes: { exclude: ['password'] },
    where: { displayName } });

  return user.dataValues;
};

const getUserById = async (id) => {
  const user = await User.findOne({ 
    attributes: { exclude: ['password'] },
    where: { id } });

    return user.dataValues;
};

module.exports = {
  create,
  findOneByEmail,
  login,
  getAllUser,
  getByDisplayName,
  getUserById,
};