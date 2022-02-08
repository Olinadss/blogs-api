const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const userController = require('./controller/controllerUser');

const categoryController = require('./controller/controllerCatgories');

const controllerBlogPosts = require('./controller/controllerBlogPosts');

const { validateDisplayName, validateEmail,
  validatePassword, validateEmailExist, validationToken, 
  validationUserId } = require('./middleware/userMiddleware');

const { validationLogin, validationUser } = require('./middleware/loginMiddleware');

const { verifyToken } = require('./middleware/auth');

const { validationCategoryName } = require('./middleware/categoryMiddleware');

const { validateTitle, validateContent,
  validateCategoryIds } = require('./middleware/blogPostCategoryMiddeware');

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

app.route('/categories')
    .post(validationCategoryName, validationToken, verifyToken,
      rescue(categoryController.createCategory))
    .get(validationToken, verifyToken, rescue(categoryController.getAllCategories));

app.route('/post')
    .post(validateTitle, validateContent, validateCategoryIds,
      validationToken, verifyToken, rescue(controllerBlogPosts.createPostAndCategories))
    .get(validationToken, verifyToken, rescue(controllerBlogPosts.getAllBlogPosts));

module.exports = app;
