const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const userController = require('./controller/controllerUser');
const { validateDisplayName, validateEmail,
  validatePassword, validateEmailExist } = require('./middleware/userMiddleware');

const app = express();

app.use(bodyParser.json());

app.route('/user')
  .post(validateDisplayName, validateEmail, 
    validatePassword, validateEmailExist, rescue(userController.createUser));

module.exports = app;
