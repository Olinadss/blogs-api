const { BlogPosts } = require('../models');

const createBlogPost = async (userId, title, content) => {
  const blogPosts = await BlogPosts.create({ userId, title, content });

  return blogPosts;
};

module.exports = {
  createBlogPost,
};
