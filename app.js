const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const userController = require('./controller/controllerUser');

const app = express();

app.use(bodyParser.json());

app.route('/user')
  .post(rescue(userController.createUser));

module.exports = app;
