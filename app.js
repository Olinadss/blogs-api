const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const userController = require('./controller/controllerUser');
const { validateDisplayName, validateEmail,
  validatePassword, validateEmailExist, validationToken, 
  validationUserId } = require('./middleware/userMiddleware');

const { validationLogin, validationUser } = require('./middleware/loginMiddleware');

const { verifyToken } = require('./middleware/auth');

const app = express();

app.use(bodyParser.json());

app.route('/user')
  .post(validateDisplayName, validateEmail, 
    validatePassword, validateEmailExist, rescue(userController.createUser))
  .get(validationToken, verifyToken, rescue(userController.getAllUser));

app.route('/login')
    .post(validationLogin, validationUser, rescue(userController.login));

app.route('/user/:id')
  .get(validationUserId, validationToken, verifyToken, rescue(userController.getUserById));

module.exports = app;
