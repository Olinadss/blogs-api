const { Sequelize } = require('sequelize');
const tableSchema = {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
         primaryKey: true,
        references: {
          model: 'BlogPosts',
          key: 'id'        
        },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'Categories',
          key: 'id'        
        },
      },
};
  module.exports = {
    async up(queryInterface) {
      await queryInterface.createTable('PostsCategories', tableSchema);
    },
    async down(queryInterface) {
      await queryInterface.dropTable('PostsCategories');
    },
  };