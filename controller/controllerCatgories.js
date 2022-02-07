const serviceCategories = require('../service/serviceCategories');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const category = await serviceCategories.create(name);

  res.status(201).json(category);
};

const getAllCategories = async (_req, res) => {
  const categories = await serviceCategories.getAllCategories();

  res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};