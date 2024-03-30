'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn("grocery_items", "img", {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      queryInterface.addColumn("grocery_items", "category", {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      queryInterface.addColumn("grocery_items", "weight", {
        type: Sequelize.FLOAT,
        allowNull: false,
      }),
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([queryInterface.removeColumn("grocery_items", "img"), queryInterface.removeColumn("grocery_items", "category"), queryInterface.removeColumn("grocery_items", "weight")]);
  }
};
