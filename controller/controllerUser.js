const serviceUser = require('../service/serviceUser');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = serviceUser.create(displayName, email, password, image);

  res.status(201).json(user);
};

module.exports = {
  createUser,
};
