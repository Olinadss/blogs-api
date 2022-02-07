const { Sequelize } = require('sequelize');
const tableSchema = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
};
  module.exports = {
    async up(queryInterface) {
      await queryInterface.createTable('Categories', tableSchema);
    },
    async down(queryInterface) {
      await queryInterface.dropTable('Categories');
    },
  };