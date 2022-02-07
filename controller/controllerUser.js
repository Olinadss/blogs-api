const serviceUser = require('../service/serviceUser');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = await serviceUser.create(displayName, email, password, image);

  res.status(201).json(user);
};

const login = async (req, res) => {
  const { email } = req.body;

  const token = await serviceUser.login(email);

  res.status(200).json({ token });
};

const getAllUser = async (_req, res) => {
  const user = await serviceUser.getAllUser();

  res.status(200).json(user);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  
  const user = await serviceUser.getUserById(id);

  console.log('teste', user);

  res.status(200).json(user);
};

module.exports = {
  createUser,
  login,
  getAllUser,
  getUserById,
};
