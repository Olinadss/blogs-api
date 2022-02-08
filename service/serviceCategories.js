const { Categories } = require('../models');

const create = async (name) => {
  const category = await Categories.create({ name });

  return category;
};

const getAllCategories = async () => {
  const categories = await Categories.findAll();

  return categories;
};

const getCategoryId = async () => {
  const category = await Categories.findByPk();

  return category;
};

module.exports = {
  create,
  getAllCategories,
  getCategoryId,
};
