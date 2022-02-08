const { Sequelize } = require('sequelize');
const tableSchema = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id'        
        },
      },
      published: {
        type: Sequelize.DATE
      },
      updated: {
        type: Sequelize.DATE
      },
};
  module.exports = {
    async up(queryInterface) {
      await queryInterface.createTable('BlogPosts', tableSchema);
    },
    async down(queryInterface) {
      await queryInterface.dropTable('BlogPosts');
    },
  };