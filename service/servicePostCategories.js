const { PostsCategories } = require('../models');

const createPostCategories = async (postId, arrayCategories) => {
  const postCategories = arrayCategories
    .map((itens) => PostsCategories.bulkCreate([{ postId, itens }]));

  return postCategories;
};

module.exports = {
  createPostCategories,
};
