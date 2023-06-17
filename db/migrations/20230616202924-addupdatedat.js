'use strict';

const { OrderProductSchema, ORDER_PRODUCT_TABLE } = require('./../models/order-product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(ORDER_PRODUCT_TABLE,'updated_at', OrderProductSchema.updatedAt);
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(ORDER_PRODUCT_TABLE,'updated_at');
  },
};

