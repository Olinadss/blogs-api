const serviceUser = require('../service/serviceUser');

const validationLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }

  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  next();
};

const validationUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await serviceUser.findOneByEmail(email);

  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  next();
};

module.exports = {
  validationLogin,
  validationUser,
};
