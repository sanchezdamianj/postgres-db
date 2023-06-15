'use strict';

const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(PRODUCT_TABLE,'updated_at', ProductSchema.updatedAt);
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(PRODUCT_TABLE,'updated_at');
  },
};

