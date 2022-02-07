const serviceUser = require('../service/serviceUser');

const RegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;

  const MIN_CARACTERER = 8;

  if (displayName.length < MIN_CARACTERER || !displayName) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (!RegExp.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  const MIN_CARACTERER = 6;

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (password.length < MIN_CARACTERER) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }

  next();
};

const validateEmailExist = async (req, res, next) => {
  const { email } = req.body;

  const emailExist = await serviceUser.findOneByEmail(email);

  if (emailExist) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

const validationToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateEmailExist,
  validationToken,
};