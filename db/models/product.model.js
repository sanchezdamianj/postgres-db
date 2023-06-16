const { Model, Sequelize } = require('sequelize');

const { CATEGORY_TABLE } = require('./category.model');
const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  price: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNullL: false,
    type: Sequelize.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNullL: false,
    type: Sequelize.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW
  },
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Product extends Model {
  static assocciate(models) {
    this.belongsTo(models.Category, { foreignKey:'categoryId', as: 'category' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timeStamps: false,
    };
  }
}

module.exports = { PRODUCT_TABLE, Product, ProductSchema };
