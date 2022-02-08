const { PostsCategories } = require('../models');

const createPostCategories = async (postId, arrayCategories) => {
  const postCategories = arrayCategories
    .map((itens) => ({ postId, categoryId: itens }));

const addPostCategories = await PostsCategories.bulkCreate(postCategories);

  return addPostCategories;
};

module.exports = {
  createPostCategories,
};
