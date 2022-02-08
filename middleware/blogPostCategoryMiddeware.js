const serviceCategories = require('../service/serviceCategories');

const validateTitle = (req, res, next) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }

  next();
};

const validateContent = (req, res, next) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }

  next();
};

const validateCategoryIds = async (req, res, next) => {
  const validationFirsItem = (item, array) => array.some((itemArrat) => item === itemArrat.id);
  const { categoryIds } = req.body;
  
  if (!categoryIds) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }

  const category = await serviceCategories.getAllCategories();

  const categoryExist = categoryIds.every((item) => { 
    if (validationFirsItem(item, category)) {
      return true;
    }

    return false;
  });

  if (!categoryExist) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
};

module.exports = {
  validateTitle,
  validateContent,
  validateCategoryIds,
};
