'use strict';

const { OrderSchema, ORDER_TABLE } = require('./../models/order.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(ORDER_TABLE,'updated_at', OrderSchema.updatedAt);
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(ORDER_TABLE,'updated_at');
  },
};

