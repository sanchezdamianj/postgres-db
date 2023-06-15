'use strict';

const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(PRODUCT_TABLE,'created_at', ProductSchema.createdAt);
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(PRODUCT_TABLE,'created_at');
  },
};

