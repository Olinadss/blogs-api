const { Sequelize } = require('sequelize');
const tableSchema = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      displayName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
};
  module.exports = {
    async up(queryInterface) {
      await queryInterface.createTable('users', tableSchema);
    },
    async down(queryInterface) {
      await queryInterface.dropTable('users');
    },
  };