const jwt = require('jsonwebtoken');

const serviceBlogPost = require('../service/serviceBlogPost');
const servicePostCategories = require('../service/servicePostCategories');

const { JWT_SECRET } = process.env;

const createPostAndCategories = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const payload = req.headers.authorization;

  const { id } = jwt.verify(payload, JWT_SECRET);

  const blogPosts = await serviceBlogPost.createBlogPost(id, title, content);

  await servicePostCategories.createPostCategories(blogPosts.id, categoryIds);

  res.status(201).json(blogPosts);
};

module.exports = {
  createPostAndCategories,
};