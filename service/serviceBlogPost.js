const { BlogPosts } = require('../models');
const { User } = require('../models');
const { Categories } = require('../models');

const createBlogPost = async (userId, title, content) => {
  const blogPosts = await BlogPosts.create({ userId, title, content });

  return blogPosts;
};

const getAllBlogPosts = async () => {
  const blogPosts = await BlogPosts.findAll({
    include: [{
      model: User, as: 'user', attributes: { exclude: ['password'] },
    }, {
      model: Categories, as: 'categories', through: { attributes: [] },
    }],
  });

  return blogPosts;
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
};
