const serviceCategories = require('../service/serviceCategories');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const category = await serviceCategories.create(name);

  console.log(category);

  res.status(201).json(category);
};

module.exports = {
  createCategory,
};