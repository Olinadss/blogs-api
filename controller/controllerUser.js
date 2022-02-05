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

module.exports = {
  createUser,
  login,
};
