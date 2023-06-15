'use strict';
const { Sequelize } = require('sequelize');
const { CUSTOMER_TABLE } = require('./../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: Sequelize.INTEGER,
      unique: true,
    });
  },
  //para solucionar issues

  // async down(queryInterface) {
  //   await queryInterface.dropTable(CUSTOMER_TABLE);
  // },
};
